import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'
import { FREE_TIER_MONTHLY_LIMIT } from '@/lib/stripe'

export async function GET() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const defaultResponse = {
      plan: 'free' as const,
      creditBalanceCents: 0,
      hasPaymentMethod: false,
      solvesThisMonth: 0,
      costThisMonthCents: 0,
      freeTierLimit: FREE_TIER_MONTHLY_LIMIT,
      subscription: null,
      stripeCustomerId: null,
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json(defaultResponse)
    }

    // Get user from Supabase
    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('clerk_id', userId)
      .single()

    if (error || !user) {
      return NextResponse.json(defaultResponse)
    }

    // Query usage_events for this month
    const now = new Date()
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()

    const { count: solvesThisMonth } = await supabaseAdmin
      .from('usage_events')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .gte('created_at', monthStart)

    const { data: costData } = await supabaseAdmin
      .from('usage_events')
      .select('cost_cents')
      .eq('user_id', user.id)
      .gte('created_at', monthStart)

    const costThisMonthCents = (costData || []).reduce(
      (sum: number, row: { cost_cents: number }) => sum + (row.cost_cents || 0),
      0,
    )

    const plan = (user.subscription_status === 'free') ? 'free' : 'payg'

    return NextResponse.json({
      plan,
      creditBalanceCents: user.credit_balance_cents || 0,
      hasPaymentMethod: user.has_payment_method || false,
      solvesThisMonth: solvesThisMonth || 0,
      costThisMonthCents,
      freeTierLimit: FREE_TIER_MONTHLY_LIMIT,
      subscription: user.stripe_subscription_id ? {
        id: user.stripe_subscription_id,
        endsAt: user.subscription_ends_at,
      } : null,
      stripeCustomerId: user.stripe_customer_id,
    })
  } catch (error) {
    console.error('Error fetching subscription:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
