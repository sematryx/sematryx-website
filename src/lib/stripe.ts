import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export const pricingPlans = [
  {
    id: 'free',
    name: 'Get API key',
    price: 0,
    description: 'Get your API key instantly',
    features: [
      'Instant API key generation',
      'Full API access',
      'Documentation & tutorials',
      'Community support'
    ]
  },
  {
    id: 'payg',
    name: 'Pay-per-execution',
    price: '$0.01 per execution',
    description: 'Only pay for what you use',
    popular: true,
    features: [
      'All automation features',
      'No monthly commitments',
      'Usage-based billing',
      'Priority support',
      'Advanced analytics'
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