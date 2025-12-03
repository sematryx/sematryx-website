import CodeBlock from '@/components/CodeBlock'

export default function MakingRequestsPage() {
  const basicRequest = `curl -X POST https://api.aeao.com/v1/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective_function": "sphere",
    "bounds": [[-5, 5], [-5, 5], [-5, 5]],
    "max_evaluations": 1000
  }'`

  const pythonRequest = `import requests

url = "https://api.aeao.com/v1/optimize"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "objective_function": "sphere",
    "bounds": [[-5, 5], [-5, 5], [-5, 5]],
    "max_evaluations": 1000
}

response = requests.post(url, json=data, headers=headers)
result = response.json()
print(result)`

  const javascriptRequest = `const response = await fetch('https://api.aeao.com/v1/optimize', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    objective_function: 'sphere',
    bounds: [[-5, 5], [-5, 5], [-5, 5]],
    max_evaluations: 1000
  })
})

const result = await response.json()
console.log(result)`

  const responseExample = `{
  "id": "opt_1234567890",
  "status": "completed",
  "best_solution": [0.001, -0.002, 0.003],
  "best_fitness": 0.000014,
  "evaluations": 1000,
  "strategy_used": "cma_es",
  "execution_time": 2.45,
  "created_at": "2024-01-01T00:00:00Z",
  "completed_at": "2024-01-01T00:00:02Z"
}`

  const errorResponse = `{
  "error": {
    "code": "invalid_request",
    "message": "The 'bounds' parameter is required",
    "field": "bounds"
  }
}`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Making Requests
        </h1>
        <p className="text-xl text-gray-400">
          Learn how to make API requests to AEAO, handle responses, and work with errors.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Base URL
          </h2>
          <p className="text-gray-400 mb-4">
            All API requests should be made to the following base URL:
          </p>
          <div className="bg-[#1a1f2e] rounded-lg p-4 mb-4 border border-gray-700">
            <code className="text-lg font-mono text-primary-400">
              https://api.aeao.com
            </code>
          </div>
          <p className="text-gray-400">
            The API uses versioned endpoints. The current version is <code className="bg-gray-800 text-gray-300 px-2 py-1 rounded">v1</code>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Authentication
          </h2>
          <p className="text-gray-400 mb-4">
            All API requests require authentication using a Bearer token in the Authorization header:
          </p>
          <CodeBlock
            code="Authorization: Bearer YOUR_API_KEY"
            language="bash"
            title="Authorization header format"
          />
          <p className="text-gray-400 mt-4">
            You can obtain an API key from the{' '}
            <a href="/api-keys" className="text-primary-400 hover:text-primary-300 underline">
              API Keys page
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Request Format
          </h2>
          <p className="text-gray-400 mb-4">
            <span className="text-primary-400">AEAO</span> uses JSON for request and response bodies. All requests should include the <code className="bg-gray-800 text-gray-300 px-2 py-1 rounded">Content-Type: application/json</code> header.
          </p>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">
            Using cURL
          </h3>
          <CodeBlock
            code={basicRequest}
            language="bash"
            title="Basic optimization request with cURL"
          />

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">
            Using Python
          </h3>
          <CodeBlock
            code={pythonRequest}
            language="python"
            title="Python request example"
          />

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">
            Using JavaScript/Node.js
          </h3>
          <CodeBlock
            code={javascriptRequest}
            language="javascript"
            title="JavaScript request example"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Response Format
          </h2>
          <p className="text-gray-400 mb-4">
            Successful API responses return JSON with the requested data. The structure varies by endpoint, but typically includes:
          </p>
          <CodeBlock
            code={responseExample}
            language="json"
            title="Example successful response"
          />
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Response Fields</h3>
            <ul className="space-y-2 text-blue-300">
              <li><strong className="text-blue-200">id:</strong> Unique identifier for the optimization job</li>
              <li><strong className="text-blue-200">status:</strong> Current status (pending, running, completed, failed)</li>
              <li><strong className="text-blue-200">best_solution:</strong> The best solution found</li>
              <li><strong className="text-blue-200">best_fitness:</strong> The fitness value of the best solution</li>
              <li><strong className="text-blue-200">evaluations:</strong> Number of function evaluations performed</li>
              <li><strong className="text-blue-200">strategy_used:</strong> Optimization algorithm that was selected</li>
              <li><strong className="text-blue-200">execution_time:</strong> Time taken in seconds</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Error Handling
          </h2>
          <p className="text-gray-400 mb-4">
            When an error occurs, the API returns an error response with appropriate HTTP status codes:
          </p>
          <CodeBlock
            code={errorResponse}
            language="json"
            title="Example error response"
          />
          <div className="mt-6 space-y-4">
            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-3">HTTP Status Codes</h3>
              <ul className="space-y-2 text-red-300">
                <li><strong className="text-red-200">400 Bad Request:</strong> Invalid request parameters or malformed JSON</li>
                <li><strong className="text-red-200">401 Unauthorized:</strong> Missing or invalid API key</li>
                <li><strong className="text-red-200">403 Forbidden:</strong> API key doesn't have permission for this operation</li>
                <li><strong className="text-red-200">404 Not Found:</strong> Resource not found</li>
                <li><strong className="text-red-200">429 Too Many Requests:</strong> Rate limit exceeded</li>
                <li><strong className="text-red-200">500 Internal Server Error:</strong> Server error - contact support</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Rate Limiting
          </h2>
          <p className="text-gray-400 mb-4">
            API requests are rate-limited to ensure fair usage. Rate limits vary by plan:
          </p>
          <div className="bg-[#1a1f2e] rounded-lg p-6 border border-gray-700">
            <ul className="space-y-2 text-gray-300">
              <li><strong className="text-white">Free Plan:</strong> 100 requests per hour</li>
              <li><strong className="text-white">Pro Plan:</strong> 1,000 requests per hour</li>
              <li><strong className="text-white">Enterprise Plan:</strong> 10,000+ requests per hour (custom limits)</li>
            </ul>
          </div>
          <p className="text-gray-400 mt-4">
            Rate limit information is included in response headers:
          </p>
          <CodeBlock
            code={`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 950
X-RateLimit-Reset: 1640995200`}
            language="bash"
            title="Rate limit headers"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Best Practices
          </h2>
          <div className="space-y-4">
            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Do</h3>
              <ul className="space-y-2 text-green-300">
                <li>Always include error handling in your code</li>
                <li>Store API keys securely (environment variables, secrets management)</li>
                <li>Use appropriate timeout values for long-running operations</li>
                <li>Implement retry logic with exponential backoff for transient errors</li>
                <li>Monitor rate limit headers to avoid hitting limits</li>
              </ul>
            </div>
            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Don't</h3>
              <ul className="space-y-2 text-red-300">
                <li>Commit API keys to version control</li>
                <li>Make synchronous requests for long-running optimizations</li>
                <li>Ignore error responses - always check status codes</li>
                <li>Make unnecessary requests - use polling for status updates</li>
                <li>Exceed rate limits without implementing backoff strategies</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

