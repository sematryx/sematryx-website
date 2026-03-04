import Link from 'next/link'
import CodeBlock from '@/components/CodeBlock'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Billing & Usage - Sematryx Documentation',
  description: 'Pay-per-solve billing model: free tier, credit packs, metered billing, and Private Learning Store.',
}

export default function BillingPage() {
  const usageExample = `from sematryx import get_usage

# Get current billing period usage
usage = get_usage()

print(f"Solves this month: {usage['solves_this_month']}")
print(f"Cost this month: ${usage['cost_this_month_cents'] / 100:.2f}")
print(f"Credit balance: ${usage['credit_balance_cents'] / 100:.2f}")
print(f"Plan: {usage['plan']}")`

  const usageResponse = `{
  "plan": "payg",
  "solves_this_month": 847,
  "cost_this_month_cents": 2541,
  "credit_balance_cents": 4959,
  "has_payment_method": true,
  "free_tier_limit": 100,

  "breakdown": {
    "small": { "count": 500, "cost_cents": 500 },
    "medium": { "count": 200, "cost_cents": 600 },
    "large": { "count": 147, "cost_cents": 735 }
  },

  "private_learning": {
    "enabled": true,
    "accesses": 2340,
    "storage_mb": 156
  }
}`

  const storageExample = `from sematryx import PrivateLearningStore

store = PrivateLearningStore(api_key='your-api-key')

# Get storage details
storage = store.get_storage_info()

print(f"Used: {storage['used_mb']} MB")
print(f"Included: 2048 MB")
print(f"Utilization: {storage['utilization_percent']:.1f}%")

# List stored patterns by size
patterns = store.list_patterns(sort_by='size', limit=10)
for p in patterns:
    print(f"{p['signature']}: {p['size_kb']} KB, {p['access_count']} accesses")`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Billing & Usage
        </h1>
        <p className="text-xl text-text-secondary">
          Understand pay-per-solve pricing, manage credits, and monitor your usage.
        </p>
      </div>

      <div className="space-y-12">
        {/* Pricing Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Pay-Per-Solve Pricing
          </h2>
          <p className="text-text-secondary mb-6">
            Sematryx uses a simple pay-per-solve model. No monthly subscriptions required.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-elevated-3">
                  <th className="text-left py-3 px-4 text-text-primary font-semibold">Account</th>
                  <th className="text-center py-3 px-4 text-text-secondary font-semibold">Solves</th>
                  <th className="text-center py-3 px-4 text-text-secondary font-semibold">Cost</th>
                  <th className="text-center py-3 px-4 text-text-secondary font-semibold">Private Learning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-elevated-3">
                <tr>
                  <td className="py-3 px-4 text-text-primary font-medium">Free</td>
                  <td className="py-3 px-4 text-center text-text-secondary">100/month</td>
                  <td className="py-3 px-4 text-center text-text-secondary">$0</td>
                  <td className="py-3 px-4 text-center text-text-tertiary">—</td>
                </tr>
                <tr className="bg-elevated/50">
                  <td className="py-3 px-4 text-text-primary font-medium">Pay-as-you-go</td>
                  <td className="py-3 px-4 text-center text-text-secondary">Unlimited</td>
                  <td className="py-3 px-4 text-center text-brand-primary">$0.01–$0.05/solve</td>
                  <td className="py-3 px-4 text-center text-emerald-400">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost by Complexity */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Cost by Problem Complexity
          </h2>
          <p className="text-text-secondary mb-6">
            Solve cost scales with the complexity of your optimization problem:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-elevated-3">
                  <th className="text-left py-3 px-4 text-text-primary font-semibold">Tier</th>
                  <th className="text-center py-3 px-4 text-text-secondary font-semibold">Dimensions</th>
                  <th className="text-center py-3 px-4 text-text-secondary font-semibold">Max Evaluations</th>
                  <th className="text-center py-3 px-4 text-text-secondary font-semibold">Cost per Solve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-elevated-3">
                <tr>
                  <td className="py-3 px-4 text-text-primary">Small</td>
                  <td className="py-3 px-4 text-center text-text-secondary">≤ 10</td>
                  <td className="py-3 px-4 text-center text-text-secondary">≤ 1,000</td>
                  <td className="py-3 px-4 text-center text-brand-primary font-medium">$0.01</td>
                </tr>
                <tr className="bg-elevated/50">
                  <td className="py-3 px-4 text-text-primary">Medium</td>
                  <td className="py-3 px-4 text-center text-text-secondary">≤ 50</td>
                  <td className="py-3 px-4 text-center text-text-secondary">≤ 5,000</td>
                  <td className="py-3 px-4 text-center text-brand-primary font-medium">$0.03</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-text-primary">Large</td>
                  <td className="py-3 px-4 text-center text-text-secondary">≤ 100</td>
                  <td className="py-3 px-4 text-center text-text-secondary">≤ 10,000</td>
                  <td className="py-3 px-4 text-center text-brand-primary font-medium">$0.05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Credit Packs */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Credit Packs
          </h2>
          <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">5,000 Solves — $75</h3>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-brand-primary">•</span>
                <span>Effective rate: ~$0.015/solve (roughly 50% savings vs metered)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary">•</span>
                <span>Credits never expire</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary">•</span>
                <span>Credits deducted automatically before metered billing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary">•</span>
                <span>Purchase additional packs anytime — balances stack</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Checking Usage */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Checking Your Usage
          </h2>
          <p className="text-text-secondary mb-4">
            Monitor your usage programmatically via the SDK or API:
          </p>
          <CodeBlock
            code={usageExample}
            language="python"
            title="Get usage via Python SDK"
          />

          <p className="text-text-secondary mt-6 mb-4">
            The response includes detailed usage breakdown:
          </p>
          <CodeBlock
            code={usageResponse}
            language="json"
            title="Usage response"
          />
        </section>

        {/* Private Learning Store */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Private Learning Store
          </h2>
          <p className="text-text-secondary mb-4">
            Available to all pay-as-you-go users. Includes 2 GB storage and 5,000 operations/month.
            Metered at $0.50/1K operations and $0.50/GB storage overage.
          </p>
          <CodeBlock
            code={storageExample}
            language="python"
            title="Storage management"
          />
        </section>

        {/* Billing FAQ */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Billing FAQ
          </h2>

          <div className="space-y-4">
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-2">How are credits deducted?</h3>
              <p className="text-text-secondary text-sm">
                When you run a solve, the cost is first deducted from your credit balance.
                If credits are exhausted, the solve is billed to your payment method on file.
                If you have neither credits nor a payment method, you can only use the free tier.
              </p>
            </div>

            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-2">When does my free tier reset?</h3>
              <p className="text-text-secondary text-sm">
                Free tier usage (100 solves) resets on the 1st of each calendar month.
              </p>
            </div>

            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-2">Do credits expire?</h3>
              <p className="text-text-secondary text-sm">
                No. Prepaid credits never expire. You can use them at your own pace.
              </p>
            </div>

            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-2">Can I set a spending cap?</h3>
              <p className="text-text-secondary text-sm">
                Yes. In your account settings, you can set a maximum monthly spend for metered billing.
                Once reached, additional solves will be rejected until the next billing period.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mt-6 flex gap-4">
            <Link
              href="/pricing"
              className="bg-cta-primary text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-cta-primary-hover transition-colors"
            >
              View Pricing
            </Link>
            <Link
              href="/dashboard/billing"
              className="border border-elevated-3 text-text-primary px-6 py-3 rounded-lg font-semibold hover:bg-elevated transition-colors"
            >
              Manage Billing
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
