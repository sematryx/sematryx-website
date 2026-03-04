import Pricing from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Sematryx',
  description: 'Simple pay-per-solve pricing. Start free with 100 solves/month, then pay $0.01–$0.05 per solve.',
}

export default function PricingPage() {
  return (
    <div className="pt-20">
        <Pricing />

        {/* FAQ */}
        <section className="py-16 bg-bg-primary">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div className="bg-bg-secondary/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  How does pay-per-solve pricing work?
                </h3>
                <p className="text-text-secondary">
                  Every optimization solve is priced by complexity. Small problems (up to 10 dimensions)
                  cost $0.01, medium problems (up to 50 dimensions) cost $0.03, and large problems
                  (up to 100 dimensions) cost $0.05. You only pay for successful solves.
                </p>
              </div>

              <div className="bg-bg-secondary/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What are credit packs?
                </h3>
                <p className="text-text-secondary">
                  Credit packs let you prepay for solves at a discount. Buy 5,000 solves for $75
                  (about $0.015 per solve — roughly 50% cheaper than pay-as-you-go). Credits never expire
                  and are deducted automatically before metered billing kicks in.
                </p>
              </div>

              <div className="bg-bg-secondary/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What happens when my free solves run out?
                </h3>
                <p className="text-text-secondary">
                  Free tier users get 100 solves per month. Once exhausted, you can buy a credit pack
                  or add a payment method for metered billing to continue solving. Your limit resets
                  at the start of each month.
                </p>
              </div>

              <div className="bg-bg-secondary/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What is the Private Learning Store?
                </h3>
                <p className="text-text-secondary">
                  The Private Learning Store gives you dedicated, isolated storage for your
                  optimization strategies and results. With the public learning pool, solution
                  space mappings are shared to benefit all users (your input data is never shared).
                  With a Private Learning Store, your data stays exclusively yours — giving you
                  a proprietary advantage. Available to all pay-as-you-go users.
                </p>
              </div>

              <div className="bg-bg-secondary/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a credit card to start?
                </h3>
                <p className="text-text-secondary">
                  No. The free tier gives you 100 solves per month with no credit card required.
                  You only add a payment method when you want to buy credits or enable metered billing.
                </p>
              </div>

              <div className="bg-bg-secondary/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-text-secondary">
                  We accept all major credit cards (Visa, Mastercard, American Express)
                  through Stripe. Enterprise customers can also pay via invoice with
                  NET-30 terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-accent-primary/20 to-bg-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to optimize smarter?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Start with 100 free solves today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/docs/authentication"
                className="px-8 py-3 bg-accent-primary text-white rounded-lg font-semibold hover:bg-accent-primary/90 transition-colors"
              >
                Get Started Free
              </a>
              <a
                href="mailto:sales@sematryx.com"
                className="px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </section>
    </div>
  )
}
