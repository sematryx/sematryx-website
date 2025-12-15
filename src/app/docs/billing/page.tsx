import Link from 'next/link'
import CodeBlock from '@/components/CodeBlock'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Billing & Usage - Sematryx Documentation',
  description: 'Understand tier limits, monitor usage, manage storage quotas, and track billing.',
}

export default function BillingPage() {
  const usageExample = `from sematryx import get_usage

# Get current billing period usage
usage = get_usage()

print(f"Optimizations used: {usage['optimizations']['used']}/{usage['optimizations']['limit']}")
print(f"Private learning accesses: {usage['private_learning']['accesses']}")
print(f"Storage used: {usage['private_learning']['storage_mb']} MB")
print(f"Billing period: {usage['period_start']} to {usage['period_end']}")`

  const usageResponse = `{
  "tier": "pro",
  "period_start": "2024-01-01T00:00:00Z",
  "period_end": "2024-01-31T23:59:59Z",
  
  "optimizations": {
    "used": 847,
    "limit": 5000,
    "overage": 0,
    "overage_rate": "$0.10 per optimization"
  },
  
  "private_learning": {
    "enabled": true,
    "accesses": 2340,
    "included_accesses": 5000,
    "overage_accesses": 0,
    "storage_mb": 156,
    "storage_limit_mb": 5120,
    "overage_storage_gb": 0
  },
  
  "current_charges": {
    "base_subscription": "$299.00",
    "optimization_overage": "$0.00",
    "storage_overage": "$0.00",
    "total": "$299.00"
  }
}`

  const storageExample = `from sematryx import PrivateLearningStore

store = PrivateLearningStore(api_key='your-api-key')

# Get storage details
storage = store.get_storage_info()

print(f"Used: {storage['used_mb']} MB")
print(f"Limit: {storage['limit_mb']} MB")
print(f"Utilization: {storage['utilization_percent']:.1f}%")

# List stored patterns by size
patterns = store.list_patterns(sort_by='size', limit=10)
for p in patterns:
    print(f"{p['signature']}: {p['size_kb']} KB, {p['access_count']} accesses")

# Delete old/unused patterns to free space
store.cleanup(
    older_than_days=90,
    min_accesses=2,
    dry_run=True  # Preview what would be deleted
)`

  const webhookExample = `# Webhook payload for usage alerts
{
  "event": "usage.threshold_reached",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "resource": "optimizations",
    "threshold": 80,
    "current_usage": 4000,
    "limit": 5000,
    "message": "You've used 80% of your monthly optimizations"
  }
}`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Billing & Usage
        </h1>
        <p className="text-xl text-text-secondary">
          Monitor your usage, understand tier limits, and manage your Sematryx subscription.
        </p>
      </div>

      <div className="space-y-12">
        {/* Tier Comparison */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Plan Limits
          </h2>
          <p className="text-text-secondary mb-6">
            Each tier includes different limits for optimizations and Private Learning Store:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-elevated-3">
                  <th className="text-left py-3 px-4 text-text-primary font-semibold">Feature</th>
                  <th className="text-center py-3 px-4 text-text-secondary font-semibold">Free</th>
                  <th className="text-center py-3 px-4 text-text-secondary font-semibold">Starter</th>
                  <th className="text-center py-3 px-4 text-brand-primary font-semibold">Pro</th>
                  <th className="text-center py-3 px-4 text-text-secondary font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-elevated-3">
                <tr>
                  <td className="py-3 px-4 text-text-primary">Monthly Optimizations</td>
                  <td className="py-3 px-4 text-center text-text-secondary">10</td>
                  <td className="py-3 px-4 text-center text-text-secondary">500</td>
                  <td className="py-3 px-4 text-center text-brand-primary font-medium">5,000</td>
                  <td className="py-3 px-4 text-center text-text-secondary">Unlimited</td>
                </tr>
                <tr className="bg-elevated/50">
                  <td className="py-3 px-4 text-text-primary">Optimization Overage</td>
                  <td className="py-3 px-4 text-center text-text-tertiary">—</td>
                  <td className="py-3 px-4 text-center text-text-secondary">$0.20/ea</td>
                  <td className="py-3 px-4 text-center text-brand-primary font-medium">$0.10/ea</td>
                  <td className="py-3 px-4 text-center text-text-secondary">Custom</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-text-primary">Private Learning Store</td>
                  <td className="py-3 px-4 text-center text-text-tertiary">—</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                </tr>
                <tr className="bg-elevated/50">
                  <td className="py-3 px-4 text-text-primary">Private Learning Accesses</td>
                  <td className="py-3 px-4 text-center text-text-tertiary">—</td>
                  <td className="py-3 px-4 text-center text-text-secondary">1,000/mo</td>
                  <td className="py-3 px-4 text-center text-brand-primary font-medium">5,000/mo</td>
                  <td className="py-3 px-4 text-center text-text-secondary">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-text-primary">Storage Included</td>
                  <td className="py-3 px-4 text-center text-text-tertiary">—</td>
                  <td className="py-3 px-4 text-center text-text-secondary">1 GB</td>
                  <td className="py-3 px-4 text-center text-brand-primary font-medium">5 GB</td>
                  <td className="py-3 px-4 text-center text-text-secondary">Unlimited</td>
                </tr>
                <tr className="bg-elevated/50">
                  <td className="py-3 px-4 text-text-primary">Storage Overage</td>
                  <td className="py-3 px-4 text-center text-text-tertiary">—</td>
                  <td className="py-3 px-4 text-center text-text-secondary">$2/GB/mo</td>
                  <td className="py-3 px-4 text-center text-brand-primary font-medium">$1/GB/mo</td>
                  <td className="py-3 px-4 text-center text-text-secondary">Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-text-primary">Explanation Levels</td>
                  <td className="py-3 px-4 text-center text-text-secondary">0-2</td>
                  <td className="py-3 px-4 text-center text-text-secondary">0-3</td>
                  <td className="py-3 px-4 text-center text-brand-primary font-medium">0-4</td>
                  <td className="py-3 px-4 text-center text-text-secondary">0-5</td>
                </tr>
                <tr className="bg-elevated/50">
                  <td className="py-3 px-4 text-text-primary">API Rate Limit</td>
                  <td className="py-3 px-4 text-center text-text-secondary">10/min</td>
                  <td className="py-3 px-4 text-center text-text-secondary">60/min</td>
                  <td className="py-3 px-4 text-center text-brand-primary font-medium">300/min</td>
                  <td className="py-3 px-4 text-center text-text-secondary">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-sm text-text-tertiary">
            See <Link href="/pricing" className="text-brand-primary hover:underline">pricing page</Link> for full details and current rates.
          </p>
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

        {/* Storage Management */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Managing Private Learning Storage
          </h2>
          <p className="text-text-secondary mb-4">
            Monitor and manage your Private Learning Store storage:
          </p>
          <CodeBlock
            code={storageExample}
            language="python"
            title="Storage management"
          />
          
          <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">Storage Tips</h3>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-brand-primary">•</span>
                <span><strong className="text-text-primary">Cleanup regularly:</strong> Remove patterns older than 90 days with low access counts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary">•</span>
                <span><strong className="text-text-primary">Use signatures:</strong> Tag patterns with problem signatures for better retrieval</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary">•</span>
                <span><strong className="text-text-primary">Anonymize:</strong> Enable anonymization to reduce storage per pattern</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Overage Billing */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Overage Billing
          </h2>
          <p className="text-text-secondary mb-4">
            When you exceed your tier's included limits, overage charges apply:
          </p>
          
          <div className="space-y-4">
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Optimization Overage</h3>
              <p className="text-text-secondary mb-3">
                Charged per optimization beyond your monthly limit. Rates vary by tier.
              </p>
              <div className="text-sm text-text-tertiary">
                Example: Pro tier with 5,500 optimizations = $299 base + (500 × $0.10) = <span className="text-brand-primary">$349 total</span>
              </div>
            </div>
            
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Storage Overage</h3>
              <p className="text-text-secondary mb-3">
                Charged monthly per GB above your included storage.
              </p>
              <div className="text-sm text-text-tertiary">
                Example: Pro tier with 7 GB storage = $299 base + (2 GB × $1) = <span className="text-brand-primary">$301 total</span>
              </div>
            </div>
            
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Private Learning Access Overage</h3>
              <p className="text-text-secondary mb-3">
                Charged per 1,000 accesses beyond your included monthly accesses.
              </p>
              <div className="text-sm text-text-tertiary">
                Rates: Starter $1.50/1K, Pro $1.00/1K
              </div>
            </div>
          </div>
        </section>

        {/* Usage Alerts */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Usage Alerts
          </h2>
          <p className="text-text-secondary mb-4">
            Set up webhooks to receive alerts when approaching limits:
          </p>
          <CodeBlock
            code={webhookExample}
            language="json"
            title="Usage alert webhook payload"
          />
          
          <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">Available Alert Thresholds</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><strong className="text-text-primary">50%:</strong> Halfway through your monthly limit</li>
              <li><strong className="text-text-primary">80%:</strong> Approaching limit (default alert)</li>
              <li><strong className="text-text-primary">100%:</strong> Limit reached, overage billing begins</li>
              <li><strong className="text-text-primary">Storage 90%:</strong> Storage nearly full</li>
            </ul>
            <p className="mt-4 text-sm text-text-tertiary">
              Configure alerts in your <Link href="/api-keys" className="text-brand-primary hover:underline">account settings</Link>.
            </p>
          </div>
        </section>

        {/* Upgrading */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Upgrading Your Plan
          </h2>
          <p className="text-text-secondary mb-4">
            Upgrade anytime to get higher limits and additional features:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Immediate Effect</h3>
              <p className="text-text-secondary text-sm">
                New limits apply immediately. You're charged a prorated amount for the remainder of the billing period.
              </p>
            </div>
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Downgrade</h3>
              <p className="text-text-secondary text-sm">
                Downgrades take effect at the next billing period. Ensure storage is within new limits before downgrade.
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex gap-4">
            <Link 
              href="/pricing" 
              className="bg-cta-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-cta-primary-hover transition-colors"
            >
              View Plans
            </Link>
            <Link 
              href="/api-keys" 
              className="border border-elevated-3 text-text-primary px-6 py-3 rounded-lg font-semibold hover:bg-elevated transition-colors"
            >
              Manage Subscription
            </Link>
          </div>
        </section>

        {/* Billing FAQ */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Billing FAQ
          </h2>
          
          <div className="space-y-4">
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-2">When does my billing period reset?</h3>
              <p className="text-text-secondary text-sm">
                Billing periods are monthly from your subscription start date. Usage limits reset at the start of each period.
              </p>
            </div>
            
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-2">Can I set a spending cap?</h3>
              <p className="text-text-secondary text-sm">
                Yes. In your account settings, you can set a maximum overage amount. Once reached, additional requests will be rejected until the next billing period.
              </p>
            </div>
            
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-2">What happens if I exceed storage limits?</h3>
              <p className="text-text-secondary text-sm">
                New patterns won't be stored until you free up space or upgrade. Existing patterns remain accessible. You'll receive an alert when approaching 90% capacity.
              </p>
            </div>
            
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-2">Do unused optimizations roll over?</h3>
              <p className="text-text-secondary text-sm">
                No. Monthly optimization limits reset each billing period. Consider upgrading if you consistently need more.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

