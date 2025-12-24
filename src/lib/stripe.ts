import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
})

// Plan limits for reference
export const planLimits = {
  free: {
    optimizations: 10,
    apiCalls: 100,
    concurrent: 1,
    privateStorage: 0,
    privateAccess: 0,
    overageRate: null, // No overage on free
  },
  starter: {
    optimizations: 100,
    apiCalls: 1000,
    concurrent: 1,
    privateStorage: 0, // No private storage on starter
    privateAccess: 0,
    overageRate: {
      optimization: 0.25,
      privateAccess: null,
      storage: null,
    },
  },
  growth: {
    optimizations: 1000,
    apiCalls: 10000,
    concurrent: 3,
    privateStorage: 500 * 1024 * 1024, // 500 MB in bytes
    privateAccess: 2000,
    overageRate: {
      optimization: 0.10,
      privateAccess: 1.00, // per 1K
      storage: 1.00, // per GB
    },
  },
  pro: {
    optimizations: 10000,
    apiCalls: 100000,
    concurrent: 10,
    privateStorage: 2 * 1024 * 1024 * 1024, // 2 GB in bytes
    privateAccess: 10000,
    overageRate: {
      optimization: 0.05,
      privateAccess: 0.50, // per 1K
      storage: 0.50, // per GB
    },
  },
  enterprise: {
    optimizations: 100000,
    apiCalls: 1000000,
    concurrent: 50,
    privateStorage: 10 * 1024 * 1024 * 1024, // 10 GB in bytes
    privateAccess: 50000,
    overageRate: {
      optimization: 0.02,
      privateAccess: 0.25, // per 1K
      storage: 0, // Included
    },
  },
}

export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Get started with optimization basics',
    features: [
      '10 optimizations/month',
      '100 API calls/day',
      'Public learning pool access',
      'Community support'
    ]
  },
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    period: '/month',
    description: 'For individual developers',
    features: [
      '100 optimizations/month',
      '1,000 API calls/day',
      'Public learning pool access',
      'Email support',
      '$0.25/optimization overage'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 79,
    period: '/month',
    description: 'For small teams',
    popular: true,
    features: [
      '1,000 optimizations/month',
      '10,000 API calls/day',
      'Private Learning Store (500MB)',
      'Priority email support',
      '$0.10/optimization overage'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 299,
    period: '/month',
    description: 'For growing teams and power users',
    features: [
      '10,000 optimizations/month',
      '100,000 API calls/day',
      'Private Learning Store (2GB)',
      'Priority support',
      '$0.05/optimization overage'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 999,
    period: '+/month',
    description: 'For large organizations',
    features: [
      '100,000+ optimizations/month',
      '1,000,000 API calls/day',
      'Private Learning Store (10GB)',
      'Dedicated support',
      '$0.02/optimization overage'
    ]
  }
]

export async function createCheckoutSession(
  priceId: string,
  customerId: string,
  successUrl: string,
  cancelUrl: string
) {
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
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

export default stripe
