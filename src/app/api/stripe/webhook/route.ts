import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import stripe, { CREDIT_PACK_SOLVES } from '@/lib/stripe'
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'

export const maxDuration = 30

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session)
        break

      case 'setup_intent.succeeded':
        await handleSetupIntentSucceeded(event.data.object as Stripe.SetupIntent)
        break

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription)
        break

      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.Invoice)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
}

/**
 * Handle credit pack purchase completion.
 * Adds credits to user's balance and upgrades to PAYG if on free tier.
 */
async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  console.log('Checkout completed:', session.id)

  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, skipping database update')
    return
  }

  const supabaseUserId = session.metadata?.supabase_user_id
  const customerId = session.customer as string
  const checkoutType = session.metadata?.type

  if (checkoutType === 'credit_pack') {
    // Credit pack purchased — add credits and set status to payg
    const packSolves = parseInt(session.metadata?.pack_solves || String(CREDIT_PACK_SOLVES), 10)
    // Credit pack value in cents: $75 for 5000 solves = 7500 cents
    const creditCents = Math.round((packSolves / CREDIT_PACK_SOLVES) * 7500)

    // Get current balance
    const identifier = supabaseUserId
      ? { column: 'id' as const, value: supabaseUserId }
      : { column: 'stripe_customer_id' as const, value: customerId }

    const { data: user } = await supabaseAdmin
      .from('users')
      .select('credit_balance_cents')
      .eq(identifier.column, identifier.value)
      .single()

    const currentBalance = user?.credit_balance_cents || 0
    const newBalance = currentBalance + creditCents

    await supabaseAdmin
      .from('users')
      .update({
        credit_balance_cents: newBalance,
        subscription_status: 'payg',
        stripe_customer_id: customerId,
      })
      .eq(identifier.column, identifier.value)

    console.log(`Credit pack purchased: +${creditCents}c, new balance: ${newBalance}c`)
  } else {
    // Legacy or generic checkout — update customer ID
    if (supabaseUserId) {
      await supabaseAdmin
        .from('users')
        .update({ stripe_customer_id: customerId })
        .eq('id', supabaseUserId)
    }
  }
}

/**
 * Handle SetupIntent succeeded — user added a payment method for metered billing.
 */
async function handleSetupIntentSucceeded(setupIntent: Stripe.SetupIntent) {
  console.log('SetupIntent succeeded:', setupIntent.id)

  if (!isSupabaseConfigured()) return

  const customerId = setupIntent.customer as string
  const supabaseUserId = setupIntent.metadata?.supabase_user_id

  const updateData = {
    has_payment_method: true,
    subscription_status: 'payg' as const,
  }

  if (supabaseUserId) {
    await supabaseAdmin.from('users').update(updateData).eq('id', supabaseUserId)
  } else if (customerId) {
    await supabaseAdmin.from('users').update(updateData).eq('stripe_customer_id', customerId)
  }

  console.log(`Payment method added for customer ${customerId}`)
}

/**
 * Handle subscription deletion — downgrade to free.
 * Kept for graceful degradation of any remaining legacy subscriptions.
 */
async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  console.log('Subscription deleted:', subscription.id)

  if (!isSupabaseConfigured()) return

  const customerId = subscription.customer as string

  await supabaseAdmin
    .from('users')
    .update({
      subscription_status: 'free',
      stripe_subscription_id: null,
      subscription_ends_at: null,
    })
    .eq('stripe_customer_id', customerId)

  console.log(`Customer ${customerId} downgraded to free`)
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  console.log('Payment failed:', invoice.id)
  const customerId = invoice.customer as string
  console.log(`Payment failed for customer: ${customerId}`)
}
