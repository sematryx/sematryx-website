import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import stripe from '@/lib/stripe'
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'

export const maxDuration = 30

// Map Stripe price IDs back to plan names
const getPlanFromPriceId = (priceId: string): 'starter' | 'pro' | 'enterprise' | 'free' => {
  const priceIdMap: Record<string, 'starter' | 'pro' | 'enterprise'> = {
    [process.env.STRIPE_STARTER_PRICE_ID || '']: 'starter',
    [process.env.STRIPE_PRO_PRICE_ID || '']: 'pro',
    [process.env.STRIPE_ENTERPRISE_PRICE_ID || '']: 'enterprise',
  }
  return priceIdMap[priceId] || 'free'
}

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

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription)
        break

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription)
        break

      case 'invoice.paid':
        await handleInvoicePaid(event.data.object as Stripe.Invoice)
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
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  console.log('Checkout completed:', session.id)

  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, skipping database update')
    return
  }

  const clerkId = session.metadata?.clerk_id
  const supabaseUserId = session.metadata?.supabase_user_id
  const planId = session.metadata?.plan_id as 'starter' | 'pro' | 'enterprise' | undefined
  const customerId = session.customer as string
  const subscriptionId = session.subscription as string

  if (!clerkId && !supabaseUserId) {
    console.error('No user ID in checkout session metadata')
    return
  }

  // Update user with subscription info
  const updateData: Record<string, any> = {
    stripe_customer_id: customerId,
    stripe_subscription_id: subscriptionId,
    subscription_status: planId || 'starter',
  }

  // Get subscription details for end date
  if (subscriptionId) {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    updateData.subscription_ends_at = new Date(subscription.current_period_end * 1000).toISOString()
  }

  // Update by supabase_user_id or clerk_id
  if (supabaseUserId) {
    await supabaseAdmin
      .from('users')
      .update(updateData)
      .eq('id', supabaseUserId)
  } else if (clerkId) {
    await supabaseAdmin
      .from('users')
      .update(updateData)
      .eq('clerk_id', clerkId)
  }

  console.log(`User subscription updated to ${planId}`)
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  console.log('Subscription updated:', subscription.id)

  if (!isSupabaseConfigured()) return

  const clerkId = subscription.metadata?.clerk_id
  const supabaseUserId = subscription.metadata?.supabase_user_id
  const customerId = subscription.customer as string

  // Get plan from price ID
  const priceId = subscription.items.data[0]?.price.id
  const planId = priceId ? getPlanFromPriceId(priceId) : 'free'

  const updateData = {
    stripe_subscription_id: subscription.id,
    subscription_status: planId,
    subscription_ends_at: new Date(subscription.current_period_end * 1000).toISOString(),
  }

  // Try to find user by various means
  if (supabaseUserId) {
    await supabaseAdmin.from('users').update(updateData).eq('id', supabaseUserId)
  } else if (clerkId) {
    await supabaseAdmin.from('users').update(updateData).eq('clerk_id', clerkId)
  } else {
    // Fall back to customer ID
    await supabaseAdmin.from('users').update(updateData).eq('stripe_customer_id', customerId)
  }

  console.log(`Subscription ${subscription.id} updated to ${planId}`)
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  console.log('Subscription deleted:', subscription.id)

  if (!isSupabaseConfigured()) return

  const customerId = subscription.customer as string

  // Downgrade to free
  const updateData = {
    subscription_status: 'free',
    stripe_subscription_id: null,
    subscription_ends_at: null,
  }

  await supabaseAdmin
    .from('users')
    .update(updateData)
    .eq('stripe_customer_id', customerId)

  console.log(`Customer ${customerId} downgraded to free`)
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
  console.log('Invoice paid:', invoice.id)

  if (!isSupabaseConfigured()) return

  const customerId = invoice.customer as string
  const subscriptionId = invoice.subscription as string

  if (subscriptionId) {
    // Get subscription to update end date
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    
    await supabaseAdmin
      .from('users')
      .update({
        subscription_ends_at: new Date(subscription.current_period_end * 1000).toISOString(),
      })
      .eq('stripe_customer_id', customerId)
  }
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  console.log('Payment failed:', invoice.id)
  
  // You could send an email notification here
  // For now, just log it - Stripe will retry automatically
  const customerId = invoice.customer as string
  console.log(`Payment failed for customer: ${customerId}`)
}
