import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rate Limiting - Sematryx Documentation',
  description: 'Understand Sematryx rate limits by tier and learn how to handle them gracefully.',
}

export default function RateLimitingPage() {
  const rateLimitHeaders = `X-RateLimit-Limit: 300
X-RateLimit-Remaining: 287
X-RateLimit-Reset: 1640995200
X-RateLimit-Window: 60`

  const pythonExample = `import time
import requests

def make_request_with_retry(url, headers, max_retries=3):
    for attempt in range(max_retries):
        response = requests.post(url, headers=headers)
        
        if response.status_code == 429:
            reset_time = int(response.headers.get('X-RateLimit-Reset', 0))
            wait_time = max(reset_time - time.time(), 1)
            print(f'Rate limit exceeded. Waiting {wait_time} seconds...')
            time.sleep(wait_time)
            continue
        
        return response
    
    raise Exception('Max retries exceeded')`

  const javascriptExample = `async function makeRequestWithRetry(url, headers, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const response = await fetch(url, { method: 'POST', headers })
    
    if (response.status === 429) {
      const resetTime = parseInt(response.headers.get('X-RateLimit-Reset') || '0')
      const waitTime = Math.max(resetTime - Date.now() / 1000, 1)
      console.log(\`Rate limit exceeded. Waiting \${waitTime} seconds...\`)
      await new Promise(resolve => setTimeout(resolve, waitTime * 1000))
      continue
    }
    
    return response
  }
  
  throw new Error('Max retries exceeded')
}`

  const exponentialBackoff = `import time
import random

def exponential_backoff(attempt, base_delay=1, max_delay=60):
    """Calculate exponential backoff delay with jitter"""
    delay = min(base_delay * (2 ** attempt), max_delay)
    jitter = random.uniform(0, delay * 0.1)
    return delay + jitter

# Usage
for attempt in range(max_retries):
    try:
        response = make_request()
        break
    except RateLimitError:
        wait_time = exponential_backoff(attempt)
        time.sleep(wait_time)`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Rate Limiting
        </h1>
        <p className="text-xl text-text-secondary">
          Understand Sematryx rate limits and learn how to handle them gracefully in your applications.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Rate Limits by Tier
          </h2>
          <p className="text-text-secondary mb-4">
            Rate limits are applied per minute and vary by subscription tier:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-elevated-3">
                  <th className="text-left py-3 px-4 text-text-primary font-semibold">Tier</th>
                  <th className="text-center py-3 px-4 text-text-secondary font-semibold">Requests/Minute</th>
                  <th className="text-center py-3 px-4 text-text-secondary font-semibold">Burst Limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-elevated-3">
                <tr>
                  <td className="py-3 px-4 text-text-primary">Free</td>
                  <td className="py-3 px-4 text-center text-text-secondary">10</td>
                  <td className="py-3 px-4 text-center text-text-secondary">15</td>
                </tr>
                <tr className="bg-elevated/50">
                  <td className="py-3 px-4 text-text-primary">Starter</td>
                  <td className="py-3 px-4 text-center text-text-secondary">60</td>
                  <td className="py-3 px-4 text-center text-text-secondary">90</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-brand-primary font-medium">Pro</td>
                  <td className="py-3 px-4 text-center text-brand-primary font-medium">300</td>
                  <td className="py-3 px-4 text-center text-brand-primary font-medium">450</td>
                </tr>
                <tr className="bg-elevated/50">
                  <td className="py-3 px-4 text-text-primary">Enterprise</td>
                  <td className="py-3 px-4 text-center text-text-secondary">Custom</td>
                  <td className="py-3 px-4 text-center text-text-secondary">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-tertiary">
            Burst limits allow temporary spikes above the sustained rate. See <Link href="/docs/billing" className="text-brand-primary hover:underline">Billing & Usage</Link> for monthly optimization limits.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Rate Limit Headers
          </h2>
          <p className="text-text-secondary mb-4">
            Every API response includes rate limit information in the headers:
          </p>
          <CodeBlock
            code={rateLimitHeaders}
            language="bash"
            title="Rate limit response headers"
          />
          <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">Header Fields</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><strong className="text-text-primary">X-RateLimit-Limit:</strong> Maximum requests allowed in the window</li>
              <li><strong className="text-text-primary">X-RateLimit-Remaining:</strong> Requests remaining in current window</li>
              <li><strong className="text-text-primary">X-RateLimit-Reset:</strong> Unix timestamp when the window resets</li>
              <li><strong className="text-text-primary">X-RateLimit-Window:</strong> Window duration in seconds</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Handling Rate Limits
          </h2>
          <p className="text-text-secondary mb-4">
            When you exceed the rate limit, you'll receive a <code className="bg-elevated-2 text-brand-primary px-2 py-1 rounded">429 Too Many Requests</code> response. 
            Always check rate limit headers and implement retry logic:
          </p>
          
          <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
            Python Example
          </h3>
          <CodeBlock
            code={pythonExample}
            language="python"
            title="Rate limit handling in Python"
          />

          <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
            JavaScript Example
          </h3>
          <CodeBlock
            code={javascriptExample}
            language="javascript"
            title="Rate limit handling in JavaScript"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Exponential Backoff
          </h2>
          <p className="text-text-secondary mb-4">
            For more robust rate limit handling, implement exponential backoff with jitter:
          </p>
          <CodeBlock
            code={exponentialBackoff}
            language="python"
            title="Exponential backoff implementation"
          />
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">Benefits</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>• Prevents thundering herd problems</li>
              <li>• Reduces server load during high traffic</li>
              <li>• More efficient use of available rate limit</li>
              <li>• Jitter prevents synchronized retries</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Best Practices
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">✓ Do</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Monitor rate limit headers</li>
                <li>• Implement exponential backoff</li>
                <li>• Cache results when possible</li>
                <li>• Batch requests when available</li>
                <li>• Respect the reset time</li>
              </ul>
            </div>
            <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-rose-400 mb-3">✗ Don't</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Ignore 429 status codes</li>
                <li>• Retry immediately without waiting</li>
                <li>• Make unnecessary requests</li>
                <li>• Exceed limits intentionally</li>
                <li>• Spin in tight retry loops</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Increasing Rate Limits
          </h2>
          <p className="text-text-secondary mb-4">
            Need higher rate limits? You have options:
          </p>
          <div className="space-y-4">
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Upgrade Your Plan</h3>
              <p className="text-text-secondary text-sm mb-3">
                Pro tier offers 30x the rate limit of Free tier. Enterprise offers custom limits.
              </p>
              <Link href="/pricing" className="text-brand-primary hover:underline text-sm">
                View plans →
              </Link>
            </div>
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Enterprise Custom Limits</h3>
              <p className="text-text-secondary text-sm">
                Enterprise customers can request custom rate limits based on usage patterns and requirements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
