'use client'

const solvePricing = [
  { tier: 'Small',  dims: '≤ 10',  evals: '≤ 1,000',  cost: '$0.01' },
  { tier: 'Medium', dims: '≤ 50',  evals: '≤ 5,000',  cost: '$0.03' },
  { tier: 'Large',  dims: '≤ 100', evals: '≤ 10,000', cost: '$0.05' },
]

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-bg-primary to-bg-secondary" id="pricing">
      <div className="container mx-auto px-6">
        {/* Waitlist Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 text-center">
            <p className="text-white text-lg font-semibold mb-2">
              🚀 Early Access Opening March 2026
            </p>
            <p className="text-gray-300 mb-4">
              Join the waitlist to be notified when sign-ups open
            </p>
            <a 
              href="/waitlist" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Join Waitlist →
            </a>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Pay-Per-Solve Pricing
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Start free with 100 solves/month. Pay only for what you use — no subscriptions, no commitments.
          </p>
        </div>

        {/* Cards row */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {/* Free */}
          <div className="rounded-2xl p-6 bg-bg-secondary/50 border border-gray-700 hover:border-gray-600 transition-colors">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Free</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">$0</span>
                <span className="text-text-secondary text-sm">forever</span>
              </div>
              <p className="text-text-secondary text-xs mt-2">Get started with optimization basics</p>
            </div>
            <ul className="space-y-2 mb-6">
              {['100 solves/month', 'Public learning pool', 'Community support', 'No credit card required'].map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-xs">
                  <svg className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{f}</span>
                </li>
              ))}
            </ul>
            <a href="/waitlist" className="block w-full py-3 px-4 rounded-lg text-center text-sm font-semibold transition-all bg-[#374151] text-white hover:bg-[#4B5563] border border-gray-600">
              Join Waitlist
            </a>
          </div>

          {/* Pay-as-you-go */}
          <div className="relative rounded-2xl p-6 bg-bg-secondary/50 border-2 border-accent-primary hover:border-accent-primary/80 transition-colors">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </span>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Pay-as-you-go</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">$0.01</span>
                <span className="text-text-secondary text-sm">– $0.05/solve</span>
              </div>
              <p className="text-text-secondary text-xs mt-2">Pay only for what you use</p>
            </div>
            <ul className="space-y-2 mb-6">
              {['Unlimited solves', 'Price scales with complexity', 'Private Learning Store', 'Priority support', 'Credit packs save ~50%'].map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-xs">
                  <svg className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{f}</span>
                </li>
              ))}
            </ul>
            <a href="/dashboard/billing" className="block w-full py-3 px-4 rounded-lg text-center text-sm font-semibold transition-all bg-accent-primary text-white hover:bg-accent-primary/90">
              Buy Credits
            </a>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl p-6 bg-bg-secondary/50 border border-gray-700 hover:border-gray-600 transition-colors">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">Custom</span>
              </div>
              <p className="text-text-secondary text-xs mt-2">For large organizations</p>
            </div>
            <ul className="space-y-2 mb-6">
              {['Volume discounts', 'Dedicated support & SLA', 'SSO & audit logs', 'Custom integrations'].map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-xs">
                  <svg className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{f}</span>
                </li>
              ))}
            </ul>
            <a href="mailto:sales@sematryx.com" className="block w-full py-3 px-4 rounded-lg text-center text-sm font-semibold transition-all bg-[#374151] text-white hover:bg-[#4B5563] border border-gray-600">
              Contact Sales
            </a>
          </div>
        </div>

        {/* Solve pricing table */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Cost Per Solve
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-text-secondary">Complexity</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-text-secondary">Dimensions</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-text-secondary">Max Evaluations</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-text-secondary">Cost</th>
                </tr>
              </thead>
              <tbody>
                {solvePricing.map((row, i) => (
                  <tr key={i} className="border-b border-gray-700/50">
                    <td className="py-4 px-4 text-white font-medium">{row.tier}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{row.dims}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{row.evals}</td>
                    <td className="py-4 px-4 text-center text-accent-primary font-semibold">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Credit pack CTA */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-accent-primary/10 to-purple-500/10 rounded-2xl border border-accent-primary/30 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Save ~50% with Credit Packs
          </h3>
          <p className="text-text-secondary mb-6">
            5,000 solves for <span className="text-white font-semibold">$75</span> (just $0.015/solve). Prepaid credits never expire.
          </p>
          <a href="/dashboard/billing" className="inline-block bg-accent-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-primary/90 transition-colors">
            Buy Credit Pack
          </a>
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
