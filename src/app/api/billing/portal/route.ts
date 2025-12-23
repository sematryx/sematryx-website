import { NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { createCustomerPortalSession } from '@/lib/stripe'
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'

// POST /api/billing/portal - Create Stripe Customer Portal session
export async function POST() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await currentUser()
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ 
        url: '/pricing',
        message: 'Database not configured'
      })
    }

    // Get user from database to find Stripe customer ID
    const { data: dbUser } = await supabaseAdmin
      .from('users')
      .select('stripe_customer_id')
      .eq('clerk_id', userId)
      .single()

    if (!dbUser?.stripe_customer_id) {
      // User doesn't have a Stripe customer ID yet
      // Redirect to pricing page to create one
      return NextResponse.json({ 
        url: '/pricing',
        message: 'No billing account found. Please select a plan first.'
      })
    }

    const returnUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/billing`
    const session = await createCustomerPortalSession(
      dbUser.stripe_customer_id,
      returnUrl
    )
    
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creating billing portal session:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
