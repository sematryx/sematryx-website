import CodeBlock from '@/components/CodeBlock'

export default function RESTAPIPage() {
  const baseUrl = `https://api.aeao.com/v1`

  const authentication = `Authorization: Bearer YOUR_API_KEY`

  const optimizeExample = `curl -X POST https://api.aeao.com/v1/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective_function": "sphere",
    "bounds": [[-5, 5], [-5, 5], [-5, 5]],
    "max_evaluations": 1000
  }'`

  const automationExample = `curl -X POST https://api.aeao.com/v1/automations \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "my-automation",
    "trigger": {"type": "manual"},
    "actions": []
  }'`

  const responseExample = `{
  "id": "opt_1234567890",
  "status": "completed",
  "best_solution": [0.001, -0.002, 0.003],
  "best_fitness": 0.000014,
  "created_at": "2024-01-01T00:00:00Z"
}`

  const errorExample = `{
  "error": {
    "code": "invalid_request",
    "message": "The 'bounds' parameter is required"
  }
}`

  const endpoints = [
    { method: 'POST', path: '/optimize', description: 'Run an optimization problem' },
    { method: 'GET', path: '/optimize/{id}', description: 'Get optimization status and results' },
    { method: 'POST', path: '/automations', description: 'Create a new automation' },
    { method: 'GET', path: '/automations', description: 'List all automations' },
    { method: 'GET', path: '/automations/{id}', description: 'Get automation details' },
    { method: 'PATCH', path: '/automations/{id}', description: 'Update an automation' },
    { method: 'DELETE', path: '/automations/{id}', description: 'Delete an automation' },
    { method: 'POST', path: '/automations/{id}/trigger', description: 'Trigger an automation' },
    { method: 'GET', path: '/analytics/metrics', description: 'Get analytics metrics' },
    { method: 'GET', path: '/analytics/executions', description: 'Get execution statistics' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          REST API
        </h1>
        <p className="text-xl text-gray-600">
          Complete REST API reference for AEAO. Use HTTP requests to interact with all AEAO features.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Base URL
          </h2>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <code className="text-lg font-mono text-primary-600">
              {baseUrl}
            </code>
          </div>
          <p className="text-gray-700">
            All API endpoints are prefixed with <code className="bg-gray-100 px-2 py-1 rounded">/v1</code>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Authentication
          </h2>
          <p className="text-gray-700 mb-4">
            Include your API key in the Authorization header for all requests:
          </p>
          <CodeBlock
            code={authentication}
            language="bash"
            title="Authorization header"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Request Format
          </h2>
          <p className="text-gray-700 mb-4">
            All requests use JSON format. Include <code className="bg-gray-100 px-2 py-1 rounded">Content-Type: application/json</code> header.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            Optimization Example
          </h3>
          <CodeBlock
            code={optimizeExample}
            language="bash"
            title="POST /v1/optimize"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            Automation Example
          </h3>
          <CodeBlock
            code={automationExample}
            language="bash"
            title="POST /v1/automations"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Response Format
          </h2>
          <p className="text-gray-700 mb-4">
            Successful responses return JSON with the requested data:
          </p>
          <CodeBlock
            code={responseExample}
            language="json"
            title="Success response"
          />
          <p className="text-gray-700 mt-4 mb-4">
            Error responses include an error object:
          </p>
          <CodeBlock
            code={errorExample}
            language="json"
            title="Error response"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            API Endpoints
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Method</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Endpoint</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {endpoints.map((endpoint, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-sm font-medium ${
                          endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                          endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                          endpoint.method === 'PATCH' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {endpoint.method}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                          {endpoint.path}
                        </code>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {endpoint.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            HTTP Status Codes
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded font-medium">200</span>
              <div>
                <strong className="text-gray-900">OK</strong>
                <p className="text-sm text-gray-600">Request successful</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded font-medium">201</span>
              <div>
                <strong className="text-gray-900">Created</strong>
                <p className="text-sm text-gray-600">Resource created successfully</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4">
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded font-medium">400</span>
              <div>
                <strong className="text-gray-900">Bad Request</strong>
                <p className="text-sm text-gray-600">Invalid request parameters</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4">
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded font-medium">401</span>
              <div>
                <strong className="text-gray-900">Unauthorized</strong>
                <p className="text-sm text-gray-600">Invalid or missing API key</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4">
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded font-medium">429</span>
              <div>
                <strong className="text-gray-900">Too Many Requests</strong>
                <p className="text-sm text-gray-600">Rate limit exceeded</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4">
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded font-medium">500</span>
              <div>
                <strong className="text-gray-900">Internal Server Error</strong>
                <p className="text-sm text-gray-600">Server error - contact support</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Rate Limiting
          </h2>
          <p className="text-gray-700 mb-4">
            API requests are rate-limited. Check response headers for rate limit information:
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Pagination
          </h2>
          <p className="text-gray-700 mb-4">
            List endpoints support pagination with <code className="bg-gray-100 px-2 py-1 rounded">limit</code> and <code className="bg-gray-100 px-2 py-1 rounded">offset</code> parameters:
          </p>
          <CodeBlock
            code="GET /v1/automations?limit=20&offset=40"
            language="bash"
            title="Pagination example"
          />
        </section>
      </div>
    </div>
  )
}

