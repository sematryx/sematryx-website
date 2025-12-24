import Header from '@/components/Header'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Sematryx',
  description: 'Simple, transparent pricing for Sematryx optimization platform. Start free, scale as you grow with pay-as-you-go overage.',
}

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Pricing />
        
        {/* Additional pricing details */}
        <section className="py-16 bg-bg-primary">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="bg-bg-secondary/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What happens when I hit my optimization limit?
                </h3>
                <p className="text-text-secondary">
                  On paid plans, you can continue optimizing with overage billing. 
                  Starter users pay $0.25, Growth users pay $0.10, Pro users pay $0.05, 
                  and Enterprise users pay $0.02 per additional optimization. Free tier users need to upgrade to continue.
                </p>
              </div>
              
              <div className="bg-bg-secondary/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What is the Private Learning Store?
                </h3>
                <p className="text-text-secondary">
                  The Private Learning Store lets you save optimization strategies and results 
                  in your own isolated storage. Unlike the public learning pool (which is free 
                  and anonymized), your private store keeps your full data confidential and 
                  gives you a competitive advantage by learning from your specific problems.
                </p>
              </div>
              
              <div className="bg-bg-secondary/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  How does billing work for private learning?
                </h3>
                <p className="text-text-secondary">
                  Private Learning Store is available on Growth plans and above. 
                  Growth includes 2,000 operations and 500MB storage. 
                  Pro includes 10,000 operations and 2GB storage. 
                  Beyond your included quota, you pay per-operation overage rates. Storage is billed monthly.
                </p>
              </div>
              
              <div className="bg-bg-secondary/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I switch plans anytime?
                </h3>
                <p className="text-text-secondary">
                  Yes! You can upgrade or downgrade at any time. When upgrading, you get 
                  immediate access to higher limits. When downgrading, changes take effect 
                  at your next billing cycle.
                </p>
              </div>
              
              <div className="bg-bg-secondary/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is there a free trial?
                </h3>
                <p className="text-text-secondary">
                  Yes! All paid plans come with a 14-day free trial. No credit card required 
                  to start. You'll only be charged if you decide to continue after the trial.
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
              Start with 10 free optimizations today. No credit card required.
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
      <Footer />
    </main>
  )
}

