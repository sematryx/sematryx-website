import CodeBlock from '@/components/CodeBlock'

export default function BestPracticesPage() {
  const apiKeySecurity = `# ✅ Good: Use environment variables
import os
from sematryx import SematryxClient

client = SematryxClient(api_key=os.getenv('SEMATRYX_API_KEY'))

# ❌ Bad: Hardcoded API key
client = SematryxClient(api_key='sk_live_1234567890')`

  const errorHandling = `# ✅ Good: Comprehensive error handling
try:
    result = client.optimize(objective, bounds)
except RateLimitError as e:
    # Wait for rate limit reset
    wait_until(e.reset_time)
    result = client.optimize(objective, bounds)
except ValidationError as e:
    # Fix validation issues
    logger.error(f"Validation error: {e.message}")
    raise
except SematryxError as e:
    # Log and handle other errors
    logger.error(f"Error: {e.message}")
    raise

# ❌ Bad: Silent error handling
try:
    result = client.optimize(objective, bounds)
except:
    pass  # Errors are ignored`

  const asyncPatterns = `# ✅ Good: Use async for concurrent operations
import asyncio
from sematryx import AsyncSematryx

async def optimize_multiple(objectives):
    client = AsyncSematryx(api_key=api_key)
    results = await asyncio.gather(*[
        client.optimize(obj, bounds) for obj in objectives
    ])
    return results

# ❌ Bad: Sequential blocking calls
results = []
for objective in objectives:
    result = client.optimize(objective, bounds)
    results.append(result)`

  const caching = `# ✅ Good: Cache results when appropriate
from functools import lru_cache

@lru_cache(maxsize=100)
def cached_optimization(problem_hash):
    return client.optimize(objective, bounds)

# ❌ Bad: Always make new API calls
def always_fetch():
    return client.optimize(objective, bounds)  # No caching`

  const webhooks = `# ✅ Good: Use webhooks for real-time updates
webhook = client.webhooks.create(
    url='https://your-app.com/webhooks/aeao',
    events=['automation.completed']
)

# ❌ Bad: Polling for status updates
while True:
    status = client.get_status(id)
    if status == 'completed':
        break
    time.sleep(5)  # Wasteful polling`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Best Practices
        </h1>
        <p className="text-xl text-gray-400">
          Learn best practices for building robust, efficient, and secure applications with Sematryx.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Security
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                API Key Management
              </h3>
              <p className="text-gray-400 mb-4">
                Never commit API keys to version control. Always use environment variables or secure secret management:
              </p>
              <CodeBlock
                code={apiKeySecurity}
                language="python"
                title="Secure API key handling"
              />
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Security Checklist</h3>
              <ul className="space-y-2 text-red-800">
                <li>✅ Store API keys in environment variables</li>
                <li>✅ Use different keys for development and production</li>
                <li>✅ Rotate API keys regularly</li>
                <li>✅ Never log API keys or include them in error messages</li>
                <li>✅ Use HTTPS for all API requests</li>
                <li>✅ Verify webhook signatures</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Error Handling
          </h2>
          <p className="text-gray-400 mb-4">
            Always implement comprehensive error handling for production applications:
          </p>
          <CodeBlock
            code={errorHandling}
            language="python"
            title="Proper error handling"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Error Handling Principles</h3>
            <ul className="space-y-2 text-blue-800">
              <li>Handle specific error types appropriately</li>
              <li>Implement retry logic for transient errors</li>
              <li>Log errors with context for debugging</li>
              <li>Provide meaningful error messages to users</li>
              <li>Never silently ignore errors</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Performance Optimization
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Async Operations
              </h3>
              <p className="text-gray-400 mb-4">
                Use async/await for concurrent operations to improve performance:
              </p>
              <CodeBlock
                code={asyncPatterns}
                language="python"
                title="Async patterns"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Caching
              </h3>
              <p className="text-gray-400 mb-4">
                Cache results when appropriate to reduce API calls:
              </p>
              <CodeBlock
                code={caching}
                language="python"
                title="Result caching"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Webhooks vs Polling
              </h3>
              <p className="text-gray-400 mb-4">
                Use webhooks instead of polling for real-time updates:
              </p>
              <CodeBlock
                code={webhooks}
                language="python"
                title="Webhooks vs polling"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Rate Limit Management
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Rate Limit Best Practices</h3>
            <ul className="space-y-2 text-yellow-800">
              <li>Monitor rate limit headers on every request</li>
              <li>Implement exponential backoff for retries</li>
              <li>Batch requests when possible</li>
              <li>Use webhooks to reduce polling overhead</li>
              <li>Cache responses to minimize API calls</li>
              <li>Plan request patterns to stay within limits</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Code Organization
          </h2>
          <div className="space-y-4">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Modular Design</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Separate API client initialization from business logic</li>
                <li>Create reusable functions for common operations</li>
                <li>Use configuration files for environment-specific settings</li>
                <li>Implement proper logging and monitoring</li>
              </ul>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Testing</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Write unit tests for API integration code</li>
                <li>Use mock responses for testing</li>
                <li>Test error handling scenarios</li>
                <li>Test rate limit handling</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Monitoring and Observability
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">What to Monitor</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>API Response Times:</strong> Track latency and identify slow endpoints</li>
              <li><strong>Error Rates:</strong> Monitor error frequency and types</li>
              <li><strong>Rate Limit Usage:</strong> Track rate limit consumption</li>
              <li><strong>Request Patterns:</strong> Identify optimization opportunities</li>
              <li><strong>Cost Tracking:</strong> Monitor API usage costs</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Production Checklist
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Before Going to Production</h3>
              <ul className="space-y-2 text-green-800">
                <li>✅ API keys stored securely (environment variables, secrets manager)</li>
                <li>✅ Error handling implemented for all API calls</li>
                <li>✅ Rate limit handling with retry logic</li>
                <li>✅ Logging and monitoring configured</li>
                <li>✅ Webhook signature verification implemented</li>
                <li>✅ Timeout values configured appropriately</li>
                <li>✅ Tests written and passing</li>
                <li>✅ Documentation updated</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

