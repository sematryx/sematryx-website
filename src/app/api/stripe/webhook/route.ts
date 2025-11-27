import { NextRequest, NextResponse } from 'next/server'
import { handleWebhook } from '@/lib/stripe'

export const maxDuration = 10

export async function POST(req: NextRequest) {
  try {
    const event = await handleWebhook(req)

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object
        console.log('Payment successful:', session.id)
        // Here you would typically:
        // 1. Create user account
        // 2. Generate API key
        // 3. Send welcome email
        break

      case 'customer.subscription.updated':
        const subscription = event.data.object
        console.log('Subscription updated:', subscription.id)
        // Handle subscription changes
        break

      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object
        console.log('Subscription cancelled:', deletedSubscription.id)
        // Handle subscription cancellation
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    )
  }
}