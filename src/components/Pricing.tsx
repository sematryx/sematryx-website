'use client'

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  limits: {
    optimizations: string
    apiCalls: string
    concurrent: string
  }
  privateLearning?: {
    storage: string
    accessIncluded: string
    accessOverage: string
    storageOverage: string
  }
  cta: string
  ctaLink: string
  highlighted?: boolean
}

const tiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Get started with optimization basics',
    features: [
      '10 optimizations/month',
      '100 API calls/day',
      'Public learning pool access',
      'Community support',
      'Basic documentation'
    ],
    limits: {
      optimizations: '10/month',
      apiCalls: '100/day',
      concurrent: '1'
    },
    cta: 'Get Started',
    ctaLink: '/sign-up'
  },
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'For individual developers',
    features: [
      '100 optimizations/month',
      '1,000 API calls/day',
      'Public learning pool access',
      'Email support',
      'Overage billing available'
    ],
    limits: {
      optimizations: '100/month',
      apiCalls: '1,000/day',
      concurrent: '1'
    },
    cta: 'Start Free Trial',
    ctaLink: '/api/stripe/checkout?plan=starter'
  },
  {
    name: 'Growth',
    price: '$79',
    period: '/month',
    description: 'For small teams',
    features: [
      '1,000 optimizations/month',
      '10,000 API calls/day',
      '3 concurrent jobs',
      'Private Learning Store',
      'Priority email support',
      'Overage billing available'
    ],
    limits: {
      optimizations: '1,000/month',
      apiCalls: '10,000/day',
      concurrent: '3'
    },
    privateLearning: {
      storage: '500 MB included',
      accessIncluded: '2,000/month',
      accessOverage: '$1.00/1K',
      storageOverage: '$1.00/GB'
    },
    cta: 'Start Free Trial',
    ctaLink: '/api/stripe/checkout?plan=growth',
    highlighted: true
  },
  {
    name: 'Pro',
    price: '$299',
    period: '/month',
    description: 'For growing teams and power users',
    features: [
      '10,000 optimizations/month',
      '100,000 API calls/day',
      '10 concurrent jobs',
      'Private Learning Store',
      'Priority support',
      'Advanced analytics',
      'Volume discounts on overage'
    ],
    limits: {
      optimizations: '10,000/month',
      apiCalls: '100,000/day',
      concurrent: '10'
    },
    privateLearning: {
      storage: '2 GB included',
      accessIncluded: '10,000/month',
      accessOverage: '$0.50/1K',
      storageOverage: '$0.50/GB'
    },
    cta: 'Start Free Trial',
    ctaLink: '/api/stripe/checkout?plan=pro'
  },
  {
    name: 'Enterprise',
    price: '$999',
    period: '+/month',
    description: 'For large organizations with custom needs',
    features: [
      '100,000+ optimizations/month',
      '1,000,000 API calls/day',
      '50 concurrent jobs',
      'Private Learning Store',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantees',
      'SSO & audit logs'
    ],
    limits: {
      optimizations: '100,000+/month',
      apiCalls: '1,000,000/day',
      concurrent: '50'
    },
    privateLearning: {
      storage: '10 GB included',
      accessIncluded: '50,000/month',
      accessOverage: '$0.25/1K',
      storageOverage: 'Included'
    },
    cta: 'Contact Sales',
    ctaLink: 'mailto:sales@sematryx.com'
  }
]

const overageRates = [
  {
    feature: 'Optimization Overage',
    starter: '$0.25/opt',
    growth: '$0.10/opt',
    pro: '$0.05/opt',
    enterprise: '$0.02/opt',
    description: 'Beyond included monthly limit'
  },
  {
    feature: 'Private Learning Access',
    starter: '—',
    growth: '$1.00/1K',
    pro: '$0.50/1K',
    enterprise: '$0.25/1K',
    description: 'Beyond included monthly quota'
  },
  {
    feature: 'Private Storage Overage',
    starter: '—',
    growth: '$1.00/GB/mo',
    pro: '$0.50/GB/mo',
    enterprise: 'Included',
    description: 'Beyond included storage (monthly)'
  }
]

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-bg-primary to-bg-secondary" id="pricing">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Start free, scale as you grow. All plans include access to the public learning pool.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-5 ${
                tier.highlighted
                  ? 'bg-bg-secondary/80 border-2 border-primary-500 ring-1 ring-primary-500/20'
                  : 'bg-bg-secondary/50 border border-gray-700'
              }`}
            >

              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                  {tier.highlighted && (
                    <span className="bg-primary-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-text-secondary text-sm">{tier.period}</span>
                </div>
                <p className="text-text-secondary text-xs mt-2">{tier.description}</p>
              </div>

              <ul className="space-y-2 mb-5">
                {tier.features.slice(0, 5).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <svg className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.privateLearning && (
                <div className="mb-5 p-2 bg-bg-primary/50 rounded-lg border border-gray-700">
                  <p className="text-xs font-semibold text-accent-primary mb-1">Private Learning Store</p>
                  <ul className="space-y-0.5 text-xs text-gray-400">
                    <li>• {tier.privateLearning.storage}</li>
                    <li>• {tier.privateLearning.accessIncluded} ops/mo</li>
                  </ul>
                </div>
              )}

              <a
                href={tier.ctaLink}
                className={`block w-full py-2.5 px-4 rounded-lg text-center text-sm font-semibold transition-all ${
                  tier.highlighted
                    ? 'bg-accent-primary text-white hover:bg-accent-primary/90'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Overage rates table */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Pay-As-You-Go Overage Rates
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-text-secondary">Feature</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-text-secondary">Starter</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-text-secondary">Growth</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-text-secondary">Pro</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-text-secondary">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {overageRates.map((rate, i) => (
                  <tr key={i} className="border-b border-gray-700/50">
                    <td className="py-4 px-4">
                      <div className="text-white font-medium">{rate.feature}</div>
                      <div className="text-xs text-text-secondary">{rate.description}</div>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-300">{rate.starter}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{rate.growth}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{rate.pro}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{rate.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary">
            Questions? Check out our{' '}
            <a href="/pricing" className="text-accent-primary hover:underline">pricing FAQ</a>
            {' '}or{' '}
            <a href="mailto:support@sematryx.com" className="text-accent-primary hover:underline">contact us</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
