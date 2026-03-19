import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'
import { FREE_TIER_MONTHLY_LIMIT } from '@/lib/stripe'

/**
 * GET /api/usage/me — Per-user usage dashboard data.
 *
 * Returns billing period, quota, credits, cost, recent solves, and
 * quota status.  Source of truth: Supabase.
 */
export async function GET() {
  try {
    const { userId: clerkId } = await auth()

    if (!clerkId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ error: 'Supabase not configured' }, { status: 503 })
    }

    // Resolve Clerk ID → Supabase user
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('clerk_id', clerkId)
      .single()

    if (userError || !user) {
      return NextResponse.json({
        error: 'User not found. Make an API key first.',
      }, { status: 404 })
    }

    // Billing period boundaries
    const now = new Date()
    const periodStart = new Date(now.getFullYear(), now.getMonth(), 1)
    const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1)

    // --- Usage this period ---
    const { data: usageRows, error: usageError } = await supabaseAdmin
      .from('usage_events')
      .select('cost_cents, success')
      .eq('user_id', user.id)
      .gte('timestamp', periodStart.toISOString())

    if (usageError) {
      console.error('Usage query error:', usageError)
      return NextResponse.json({ error: 'Failed to fetch usage' }, { status: 500 })
    }

    const rows = usageRows || []
    const solvesThisPeriod = rows.filter(r => r.success).length
    const totalCalls = rows.length
    const failedCalls = rows.filter(r => !r.success).length
    const costThisPeriodCents = rows.reduce((sum, r) => sum + (r.cost_cents || 0), 0)

    // --- Recent solves (last 20) ---
    const { data: recentRows } = await supabaseAdmin
      .from('usage_events')
      .select('timestamp, tool_name, success, cost_cents, execution_time_ms, expression, dimension')
      .eq('user_id', user.id)
      .order('timestamp', { ascending: false })
      .limit(20)

    const recentSolves = (recentRows || []).map(r => ({
      timestamp: r.timestamp,
      tool: r.tool_name,
      status: r.success ? 'success' : 'failure',
      costCents: r.cost_cents || 0,
      durationMs: r.execution_time_ms,
      expression: r.expression,
      dimensions: r.dimension,
    }))

    // --- Quota status ---
    const isFree = user.subscription_status === 'free'
    const remaining = isFree ? Math.max(0, FREE_TIER_MONTHLY_LIMIT - solvesThisPeriod) : null
    let quotaStatus: 'ok' | 'nearing_limit' | 'exceeded' = 'ok'
    if (isFree) {
      if (remaining === 0) quotaStatus = 'exceeded'
      else if (remaining !== null && remaining <= 10) quotaStatus = 'nearing_limit'
    }

    const plan = isFree ? 'free' : 'payg'

    return NextResponse.json({
      billingPeriod: {
        start: periodStart.toISOString(),
        end: periodEnd.toISOString(),
      },
      account: {
        type: plan,
        creditBalanceCents: user.credit_balance_cents || 0,
        hasPaymentMethod: user.has_payment_method || false,
      },
      usage: {
        solvesThisPeriod,
        totalCallsThisPeriod: totalCalls,
        failedThisPeriod: failedCalls,
        monthlyLimit: isFree ? FREE_TIER_MONTHLY_LIMIT : null,
        remaining,
        costThisPeriodCents,
        costThisPeriodUsd: Math.round(costThisPeriodCents) / 100,
      },
      quotaStatus,
      recentSolves,
    })
  } catch (error) {
    console.error('Error in /api/usage/me:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
