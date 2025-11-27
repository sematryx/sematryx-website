import CodeBlock from '@/components/CodeBlock'

export default function RateLimitingPage() {
  const rateLimitHeaders = `X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 950
X-RateLimit-Reset: 1640995200`

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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Rate Limiting
        </h1>
        <p className="text-xl text-gray-600">
          Understand AEAO's rate limits and learn how to handle them gracefully in your applications.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Overview
          </h2>
          <p className="text-gray-700 mb-4">
            AEAO implements rate limiting to ensure fair usage and system stability. Rate limits vary by plan:
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong className="text-gray-900">Free Plan:</strong> 100 requests per hour
              </li>
              <li>
                <strong className="text-gray-900">Pro Plan:</strong> 1,000 requests per hour
              </li>
              <li>
                <strong className="text-gray-900">Enterprise Plan:</strong> 10,000+ requests per hour (custom limits available)
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Rate Limit Headers
          </h2>
          <p className="text-gray-700 mb-4">
            Every API response includes rate limit information in the headers:
          </p>
          <CodeBlock
            code={rateLimitHeaders}
            language="bash"
            title="Rate limit response headers"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Header Fields</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>X-RateLimit-Limit:</strong> Maximum number of requests allowed in the current window</li>
              <li><strong>X-RateLimit-Remaining:</strong> Number of requests remaining in the current window</li>
              <li><strong>X-RateLimit-Reset:</strong> Unix timestamp when the rate limit window resets</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Handling Rate Limits
          </h2>
          <p className="text-gray-700 mb-4">
            When you exceed the rate limit, you'll receive a <code className="bg-gray-100 px-2 py-1 rounded">429 Too Many Requests</code> status code. 
            Always check rate limit headers and implement retry logic with appropriate backoff.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            Python Example
          </h3>
          <CodeBlock
            code={pythonExample}
            language="python"
            title="Rate limit handling in Python"
          />

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            JavaScript Example
          </h3>
          <CodeBlock
            code={javascriptExample}
            language="javascript"
            title="Rate limit handling in JavaScript"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Exponential Backoff
          </h2>
          <p className="text-gray-700 mb-4">
            For more robust rate limit handling, implement exponential backoff with jitter:
          </p>
          <CodeBlock
            code={exponentialBackoff}
            language="python"
            title="Exponential backoff implementation"
          />
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Benefits</h3>
            <ul className="space-y-2 text-green-800">
              <li>Prevents thundering herd problems</li>
              <li>Reduces server load during high traffic</li>
              <li>More efficient use of available rate limit</li>
              <li>Jitter prevents synchronized retries</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Best Practices
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">✅ Do</h3>
              <ul className="space-y-2 text-green-800">
                <li>Monitor rate limit headers on every request</li>
                <li>Implement retry logic with exponential backoff</li>
                <li>Cache responses when possible to reduce API calls</li>
                <li>Use webhooks instead of polling when available</li>
                <li>Batch requests when possible</li>
                <li>Respect the reset time from X-RateLimit-Reset header</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">❌ Don't</h3>
              <ul className="space-y-2 text-red-800">
                <li>Ignore 429 status codes</li>
                <li>Retry immediately without waiting</li>
                <li>Make unnecessary requests</li>
                <li>Poll endpoints when webhooks are available</li>
                <li>Exceed rate limits intentionally</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Rate Limit Windows
          </h2>
          <p className="text-gray-700 mb-4">
            Rate limits are calculated on a rolling window basis. The window resets at the time specified in 
            <code className="bg-gray-100 px-2 py-1 rounded">X-RateLimit-Reset</code>.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Example</h3>
            <p className="text-blue-800 mb-3">
              If you have a limit of 1,000 requests per hour and make 50 requests at 10:00 AM, 
              you'll have 950 requests remaining. At 11:00 AM, your limit resets to 1,000 requests.
            </p>
            <p className="text-blue-800">
              The reset time is always provided in the response headers, so you can plan your requests accordingly.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Increasing Rate Limits
          </h2>
          <p className="text-gray-700 mb-4">
            If you need higher rate limits, consider:
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upgrade Your Plan</h3>
              <p className="text-gray-700">
                Pro and Enterprise plans offer significantly higher rate limits. 
                <a href="/api-keys" className="text-primary-600 hover:text-primary-700 underline ml-1">
                  View plans
                </a>
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-gray-700">
                Enterprise customers can request custom rate limits based on their usage patterns and requirements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

