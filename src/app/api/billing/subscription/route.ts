import { NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'
import { planLimits } from '@/lib/stripe'

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!isSupabaseConfigured()) {
      // Return default free plan data if Supabase isn't configured
      return NextResponse.json({
        plan: 'free',
        limits: planLimits.free,
        usage: {
          optimizations: 0,
          apiCalls: 0,
          privateStorageBytes: 0,
          privateAccessCount: 0,
        },
        subscription: null,
        hasPaymentMethod: false,
      })
    }

    // Get user from Supabase
    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('clerk_id', userId)
      .single()

    if (error || !user) {
      // User not found, return free plan defaults
      return NextResponse.json({
        plan: 'free',
        limits: planLimits.free,
        usage: {
          optimizations: 0,
          apiCalls: 0,
          privateStorageBytes: 0,
          privateAccessCount: 0,
        },
        subscription: null,
        hasPaymentMethod: false,
      })
    }

    const plan = (user.subscription_status || 'free') as keyof typeof planLimits
    const limits = planLimits[plan] || planLimits.free

    return NextResponse.json({
      plan,
      limits,
      usage: {
        optimizations: 0, // TODO: Track actual usage
        apiCalls: 0, // TODO: Track actual usage
        privateStorageBytes: user.private_storage_used_bytes || 0,
        privateAccessCount: user.private_access_count_month || 0,
      },
      subscription: user.stripe_subscription_id ? {
        id: user.stripe_subscription_id,
        endsAt: user.subscription_ends_at,
      } : null,
      hasPaymentMethod: !!user.stripe_customer_id,
      stripeCustomerId: user.stripe_customer_id,
    })
  } catch (error) {
    console.error('Error fetching subscription:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

