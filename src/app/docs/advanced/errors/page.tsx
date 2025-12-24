import CodeBlock from '@/components/CodeBlock'

export default function ErrorHandlingPage() {
  const errorResponse = `{
  "error": {
    "code": "invalid_request",
    "message": "The 'bounds' parameter is required",
    "field": "bounds",
    "request_id": "req_1234567890"
  }
}`

  const pythonHandling = `from sematryx import Sematryx
from sematryx.exceptions import (
    SematryxError,
    AuthenticationError,
    RateLimitError,
    ValidationError,
    NotFoundError,
    ServerError
)

client = Sematryx(api_key="sk-your-api-key")

try:
    result = client.optimize(
        objective="minimize",
        variables=[{"name": "x", "bounds": (-5, 5)}],
        objective_function=objective
    )
except AuthenticationError:
    print("Invalid API key. Please check your credentials.")
except RateLimitError as e:
    print(f"Rate limit exceeded. Reset at: {e.reset_time}")
except ValidationError as e:
    print(f"Validation error: {e.message}")
    print(f"Field: {e.field}")
except NotFoundError:
    print("Resource not found.")
except ServerError:
    print("Server error. Please try again later.")
except SematryxError as e:
    print(f"Error: {e.message}")`

  const javascriptHandling = `import { Sematryx } from '@sematryx/javascript-sdk'

const client = new Sematryx('sk-your-api-key')

try {
  const result = await client.optimize({
    objective: 'minimize',
    variables: [{ name: 'x', bounds: [-5, 5] }],
    objectiveFunction: objective
  })
} catch (error) {
  switch (error.code) {
    case 'authentication_error':
      console.error('Invalid API key')
      break
    case 'rate_limit_error':
      console.error('Rate limit exceeded. Reset at: ' + error.resetTime)
      break
    case 'validation_error':
      console.error('Validation error: ' + error.message)
      console.error('Field: ' + error.field)
      break
    case 'not_found':
      console.error('Resource not found')
      break
    case 'server_error':
      console.error('Server error. Please try again later.')
      break
    default:
      console.error('Error: ' + error.message)
  }
}`

  const retryLogic = `import time
from sematryx.exceptions import RateLimitError, ServerError

def make_request_with_retry(func, max_retries=3):
    for attempt in range(max_retries):
        try:
            return func()
        except RateLimitError as e:
            if attempt < max_retries - 1:
                wait_time = e.reset_time - time.time()
                time.sleep(max(wait_time, 1))
                continue
            raise
        except ServerError:
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)  # Exponential backoff
                continue
            raise
    raise Exception("Max retries exceeded")`

  const errorCodes = [
    { code: 'invalid_request', status: 400, description: 'Request parameters are invalid or missing' },
    { code: 'authentication_error', status: 401, description: 'Invalid or missing API key' },
    { code: 'forbidden', status: 403, description: 'API key does not have permission for this operation' },
    { code: 'not_found', status: 404, description: 'Requested resource not found' },
    { code: 'rate_limit_error', status: 429, description: 'Rate limit exceeded' },
    { code: 'server_error', status: 500, description: 'Internal server error' },
    { code: 'service_unavailable', status: 503, description: 'Service temporarily unavailable' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Error Handling
        </h1>
        <p className="text-xl text-gray-400">
          Learn how to handle errors gracefully and build robust applications with Sematryx.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Error Response Format
          </h2>
          <p className="text-gray-400 mb-4">
            All errors are returned as JSON objects with a consistent structure:
          </p>
          <CodeBlock
            code={errorResponse}
            language="json"
            title="Error response format"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Error Fields</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>code:</strong> Machine-readable error code</li>
              <li><strong>message:</strong> Human-readable error message</li>
              <li><strong>field:</strong> (Optional) Field name if validation error</li>
              <li><strong>request_id:</strong> Unique request ID for support inquiries</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Error Codes
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1a1f2e] border border-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Code</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">HTTP Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {errorCodes.map((error, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">
                        <code className="text-sm bg-gray-800 text-gray-300 px-2 py-1 rounded">
                          {error.code}
                        </code>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm font-medium">
                          {error.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {error.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Handling Errors in Python
          </h2>
          <p className="text-gray-400 mb-4">
            The Python SDK provides specific exception types for different error scenarios:
          </p>
          <CodeBlock
            code={pythonHandling}
            language="python"
            title="Python error handling"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Handling Errors in JavaScript
          </h2>
          <p className="text-gray-400 mb-4">
            The JavaScript SDK throws errors with consistent structure:
          </p>
          <CodeBlock
            code={javascriptHandling}
            language="javascript"
            title="JavaScript error handling"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Retry Logic
          </h2>
          <p className="text-gray-400 mb-4">
            Implement retry logic for transient errors (rate limits, server errors):
          </p>
          <CodeBlock
            code={retryLogic}
            language="python"
            title="Retry logic with exponential backoff"
          />
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">When to Retry</h3>
            <ul className="space-y-2 text-yellow-800">
              <li><strong>Rate Limit Errors (429):</strong> Always retry after waiting for reset time</li>
              <li><strong>Server Errors (500, 503):</strong> Retry with exponential backoff</li>
              <li><strong>Network Errors:</strong> Retry for transient network issues</li>
              <li><strong>Don't Retry:</strong> Authentication errors (401), validation errors (400), not found (404)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Best Practices
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">✅ Do</h3>
              <ul className="space-y-2 text-green-800">
                <li>Always handle errors explicitly</li>
                <li>Log errors with request IDs for debugging</li>
                <li>Implement retry logic for transient errors</li>
                <li>Provide user-friendly error messages</li>
                <li>Validate input before making API calls</li>
                <li>Monitor error rates and patterns</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">❌ Don't</h3>
              <ul className="space-y-2 text-red-800">
                <li>Ignore errors silently</li>
                <li>Retry non-retryable errors (401, 400, 404)</li>
                <li>Expose internal error details to end users</li>
                <li>Retry indefinitely without limits</li>
                <li>Make assumptions about error causes</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Debugging Errors
          </h2>
          <p className="text-gray-400 mb-4">
            When debugging errors, use the request ID to get help from support:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Request ID</h3>
            <p className="text-blue-800 mb-3">
              Every error response includes a <code className="bg-blue-100 px-2 py-1 rounded">request_id</code> field. 
              This unique identifier helps our support team quickly locate and diagnose issues.
            </p>
            <p className="text-blue-800">
              Include the request ID when contacting support or reporting bugs.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

