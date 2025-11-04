import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    requests: 1000,
    features: [
      '1,000 API requests/month',
      'Basic documentation',
      'Community support',
      'Standard rate limits'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    requests: 50000,
    popular: true,
    features: [
      '50,000 API requests/month',
      'Priority support',
      'Advanced analytics',
      'Higher rate limits',
      'Webhooks support'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 199,
    requests: 1000000,
    features: [
      '1M+ API requests/month',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantees',
      'Advanced security features'
    ]
  }
]

export async function createCheckoutSession(
  priceId: string,
  userId: string,
  successUrl: string,
  cancelUrl: string
) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    metadata: {
      userId,
    },
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  return session
}

export async function createCustomerPortalSession(customerId: string, returnUrl: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  })

  return session
}

export async function handleWebhook(req: any) {
  const sig = req.headers['stripe-signature']
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret)
  } catch (err: any) {
    throw new Error(`Webhook signature verification failed: ${err.message}`)
  }

  return event
}

export default stripe