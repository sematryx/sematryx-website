import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
})

// ---------------------------------------------------------------------------
// Pay-per-solve pricing (March 2026)
// ---------------------------------------------------------------------------

/** Free tier: 100 solves/month, no CC required */
export const FREE_TIER_MONTHLY_LIMIT = 100

/** Credit pack: 5,000 solves for $75 (prepaid, never expire) */
export const CREDIT_PACK_SOLVES = 5_000
export const CREDIT_PACK_PRICE_CENTS = 7_500 // $75.00

/** Cost per solve by complexity tier */
export const SOLVE_PRICING = [
  { label: 'Small',  maxDims: 10,  maxEvals: 1_000,  costCents: 1  },
  { label: 'Medium', maxDims: 50,  maxEvals: 5_000,  costCents: 3  },
  { label: 'Large',  maxDims: 100, maxEvals: 10_000, costCents: 5  },
] as const

/** Private learning: available to all PAYG users, single metered rate */
export const PRIVATE_LEARNING = {
  accessPer1000: 0.50,
  storageOveragePerGb: 0.50,
  includedStorageMb: 2048,
  includedAccessPerMonth: 5_000,
}

// Legacy compatibility — referenced by subscription API route
export const planLimits = {
  free: {
    optimizations: FREE_TIER_MONTHLY_LIMIT,
    overageRate: null,
  },
  payg: {
    optimizations: Infinity,
    overageRate: SOLVE_PRICING,
  },
}

// Pricing display plans (used on pricing page)
export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Get started with optimization basics',
    features: [
      '100 solves/month',
      'Public learning pool access',
      'Community support',
      'No credit card required',
    ],
  },
  {
    id: 'payg',
    name: 'Pay-as-you-go',
    price: null, // variable
    period: 'per solve',
    description: 'Pay only for what you use',
    popular: true,
    features: [
      'Unlimited solves',
      '$0.01–$0.05 per solve by complexity',
      'Private Learning Store included',
      'Priority support',
      'Credit packs available (save ~50%)',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: null,
    period: 'custom',
    description: 'For large organizations',
    features: [
      'Volume discounts',
      'Dedicated support & SLA',
      'SSO & audit logs',
      'Custom integrations',
    ],
  },
]

// ---------------------------------------------------------------------------
// Stripe helpers
// ---------------------------------------------------------------------------

/** Create a Stripe Checkout for a credit pack purchase */
export async function createCreditPackCheckout(
  customerId: string,
  successUrl: string,
  cancelUrl: string,
  metadata: Record<string, string> = {},
) {
  const priceId = process.env.STRIPE_PRICE_CREDIT_PACK
  if (!priceId) throw new Error('STRIPE_PRICE_CREDIT_PACK not configured')

  return stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    metadata: { ...metadata, type: 'credit_pack', pack_solves: String(CREDIT_PACK_SOLVES) },
    success_url: successUrl,
    cancel_url: cancelUrl,
  })
}

/** Create a Stripe SetupIntent for adding a payment method (PAYG metered billing) */
export async function createPaymentMethodSetup(
  customerId: string,
  metadata: Record<string, string> = {},
) {
  return stripe.setupIntents.create({
    customer: customerId,
    payment_method_types: ['card'],
    metadata: { ...metadata, type: 'payg_setup' },
  })
}

export async function createCustomerPortalSession(customerId: string, returnUrl: string) {
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  })
}

export default stripe
