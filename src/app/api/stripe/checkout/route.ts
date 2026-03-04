import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import stripe, { createCreditPackCheckout, createPaymentMethodSetup } from '@/lib/stripe'
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'
import { getOrCreateUser } from '@/lib/api-keys'

// GET handler - for links from pricing page / dashboard
// Supports ?type=credit_pack (default) or ?type=payg_setup
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const checkoutType = searchParams.get('type') || 'credit_pack'

  const { userId } = await auth()

  if (!userId) {
    const returnUrl = `/api/stripe/checkout?type=${checkoutType}`
    return NextResponse.redirect(
      new URL(`/sign-up?redirect_url=${encodeURIComponent(returnUrl)}`, req.url)
    )
  }

  return handleCheckout(req, checkoutType, userId)
}

// POST handler - for API calls from dashboard
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const checkoutType = body.type || 'credit_pack'

    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return handleCheckout(req, checkoutType, userId)
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

async function handleCheckout(req: NextRequest, checkoutType: string, clerkUserId: string) {
  try {
    const user = await currentUser()
    if (!user) {
      return NextResponse.redirect(new URL('/sign-in', req.url))
    }

    const email = user.emailAddresses[0]?.emailAddress
    if (!email) {
      return NextResponse.redirect(new URL('/pricing?error=no_email', req.url))
    }

    // Get or create user in Supabase
    let dbUser = null
    let stripeCustomerId = null

    if (isSupabaseConfigured()) {
      dbUser = await getOrCreateUser(clerkUserId, email, user.firstName)
      stripeCustomerId = dbUser.stripe_customer_id
    }

    // Create or retrieve Stripe customer
    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email,
        name: user.fullName || undefined,
        metadata: {
          clerk_id: clerkUserId,
          supabase_user_id: dbUser?.id || '',
        },
      })
      stripeCustomerId = customer.id

      if (isSupabaseConfigured() && dbUser) {
        await supabaseAdmin
          .from('users')
          .update({ stripe_customer_id: stripeCustomerId })
          .eq('id', dbUser.id)
      }
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sematryx.com'
    const metadata = {
      clerk_id: clerkUserId,
      supabase_user_id: dbUser?.id || '',
    }

    const isGetRequest = req.method === 'GET'

    if (checkoutType === 'payg_setup') {
      // SetupIntent for adding a payment method (metered billing)
      const setupIntent = await createPaymentMethodSetup(stripeCustomerId, metadata)
      return NextResponse.json({ clientSecret: setupIntent.client_secret })
    }

    // Default: credit pack purchase
    const session = await createCreditPackCheckout(
      stripeCustomerId,
      `${baseUrl}/dashboard/billing?success=true&session_id={CHECKOUT_SESSION_ID}`,
      `${baseUrl}/pricing?canceled=true`,
      metadata,
    )

    if (!session.url) {
      return NextResponse.redirect(new URL('/pricing?error=checkout_failed', req.url))
    }

    if (isGetRequest) {
      return NextResponse.redirect(session.url)
    }
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.redirect(new URL('/pricing?error=checkout_failed', req.url))
  }
}
