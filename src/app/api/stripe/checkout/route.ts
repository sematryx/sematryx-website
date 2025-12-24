import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import stripe from '@/lib/stripe'
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'
import { getOrCreateUser } from '@/lib/api-keys'

// Map plan IDs to Stripe price IDs from environment
const getPriceIdMap = () => ({
  starter: process.env.STRIPE_STARTER_PRICE_ID,
  growth: process.env.STRIPE_GROWTH_PRICE_ID,
  pro: process.env.STRIPE_PRO_PRICE_ID,
  enterprise: process.env.STRIPE_ENTERPRISE_PRICE_ID,
})

// GET handler - for links from pricing page
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const planId = searchParams.get('plan')

  if (!planId) {
    return NextResponse.redirect(new URL('/pricing', req.url))
  }

  // Check if user is authenticated
  const { userId } = await auth()
  
  if (!userId) {
    // Redirect to sign-up with return URL
    const returnUrl = `/api/stripe/checkout?plan=${planId}`
    return NextResponse.redirect(
      new URL(`/sign-up?redirect_url=${encodeURIComponent(returnUrl)}`, req.url)
    )
  }

  // User is authenticated, create checkout session
  return createCheckoutForUser(req, planId, userId)
}

// POST handler - for API calls from dashboard
export async function POST(req: NextRequest) {
  try {
    const { planId } = await req.json()

    if (!planId) {
      return NextResponse.json(
        { error: 'Missing plan ID' },
        { status: 400 }
      )
    }

    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    return createCheckoutForUser(req, planId, userId)
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function createCheckoutForUser(req: NextRequest, planId: string, clerkUserId: string) {
  try {
    const priceIdMap = getPriceIdMap()
    const priceId = priceIdMap[planId as keyof typeof priceIdMap]

    if (!priceId) {
      console.error(`Invalid plan or missing price ID for plan: ${planId}`)
      return NextResponse.redirect(new URL('/pricing?error=invalid_plan', req.url))
    }

    // Get user details from Clerk
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

      // Save Stripe customer ID to Supabase
      if (isSupabaseConfigured() && dbUser) {
        await supabaseAdmin
          .from('users')
          .update({ stripe_customer_id: stripeCustomerId })
          .eq('id', dbUser.id)
      }
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sematryx.com'
    
    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        clerk_id: clerkUserId,
        supabase_user_id: dbUser?.id || '',
        plan_id: planId,
      },
      subscription_data: {
        metadata: {
          clerk_id: clerkUserId,
          supabase_user_id: dbUser?.id || '',
          plan_id: planId,
        },
      },
      success_url: `${baseUrl}/dashboard/billing?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing?canceled=true`,
      allow_promotion_codes: true,
    })

    // For GET requests, redirect to Stripe
    if (!session.url) {
      return NextResponse.redirect(new URL('/pricing?error=checkout_failed', req.url))
    }

    // Check if this is a GET or POST request
    const isGetRequest = req.method === 'GET'
    
    if (isGetRequest) {
      return NextResponse.redirect(session.url)
    } else {
      return NextResponse.json({ url: session.url })
    }
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.redirect(new URL('/pricing?error=checkout_failed', req.url))
  }
}
