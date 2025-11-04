import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { planId, email } = await req.json()

    if (!planId || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Map plan IDs to Stripe price IDs (you'll need to create these in Stripe)
    const priceIdMap: { [key: string]: string } = {
      'pro': process.env.STRIPE_PRO_PRICE_ID || 'price_pro_placeholder',
      'enterprise': process.env.STRIPE_ENTERPRISE_PRICE_ID || 'price_enterprise_placeholder'
    }

    const priceId = priceIdMap[planId]
    if (!priceId) {
      return NextResponse.json(
        { error: 'Invalid plan selected' },
        { status: 400 }
      )
    }

    const successUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api-keys`

    const session = await createCheckoutSession(
      priceId,
      email, // Using email as user ID for simplicity
      successUrl,
      cancelUrl
    )

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}