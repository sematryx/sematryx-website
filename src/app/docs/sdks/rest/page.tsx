import CodeBlock from '@/components/CodeBlock'

export default function RESTAPIPage() {
  const baseUrl = `https://api.aeao.com/v1`

  const authentication = `Authorization: Bearer YOUR_API_KEY`

  const optimizeExample = `curl -X POST https://api.aeao.com/v1/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective_function_id": "func_1234567890",
    "bounds": [[-5, 5], [-5, 5], [-5, 5]],
    "max_evaluations": 1000,
    "preset": "production"
  }'`

  const tetradConfigExample = `curl -X POST https://api.aeao.com/v1/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective_function_id": "func_1234567890",
    "bounds": [[-5, 5], [-5, 5]],
    "max_evaluations": 1000,
    "tetrad_config": {
      "use_agentic_intelligence": true,
      "use_expository_intelligence": true,
      "use_autodidactic_intelligence": true,
      "explanation_level": 3
    }
  }'`

  const uploadFunction = `curl -X POST https://api.aeao.com/v1/functions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "sphere",
    "code": "def sphere(x): return sum(xi**2 for xi in x)",
    "language": "python"
  }'`

  const getOptimization = `curl -X GET https://api.aeao.com/v1/optimize/opt_1234567890 \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const listOptimizations = `curl -X GET "https://api.aeao.com/v1/optimize?limit=20&offset=0" \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const domainOptimization = `curl -X POST https://api.aeao.com/v1/domains/financial/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "problem_type": "portfolio",
    "config": {
      "assets": ["AAPL", "GOOGL", "MSFT"],
      "risk_tolerance": 0.15
    },
    "max_evaluations": 2000
  }'`

  const responseExample = `{
  "id": "opt_1234567890",
  "status": "completed",
  "best_solution": [0.001, -0.002, 0.003],
  "best_fitness": 0.000014,
  "evaluations": 847,
  "duration_seconds": 2.34,
  "strategy_used": "shgo",
  "tetrad_config": {
    "use_agentic_intelligence": true,
    "use_expository_intelligence": true,
    "use_autodidactic_intelligence": false,
    "use_domain_extension": true
  },
  "features_active": {
    "agentic_intelligence": true,
    "expository_intelligence": true,
    "explanation_level": 2
  },
  "created_at": "2024-01-01T00:00:00Z",
  "completed_at": "2024-01-01T00:00:02Z"
}`

  const errorExample = `{
  "error": {
    "code": "invalid_request",
    "message": "The 'bounds' parameter is required",
    "field": "bounds"
  }
}`

  const endpoints = [
    { method: 'POST', path: '/optimize', description: 'Run an optimization problem' },
    { method: 'GET', path: '/optimize/{id}', description: 'Get optimization status and results' },
    { method: 'GET', path: '/optimize', description: 'List all optimizations' },
    { method: 'POST', path: '/functions', description: 'Upload an objective function' },
    { method: 'GET', path: '/functions/{id}', description: 'Get function details' },
    { method: 'GET', path: '/functions', description: 'List uploaded functions' },
    { method: 'DELETE', path: '/functions/{id}', description: 'Delete a function' },
    { method: 'POST', path: '/domains/{domain}/optimize', description: 'Domain-specific optimization' },
    { method: 'GET', path: '/domains', description: 'List available domains' },
    { method: 'GET', path: '/analytics/metrics', description: 'Get optimization metrics' },
    { method: 'GET', path: '/analytics/executions', description: 'Get execution statistics' },
    { method: 'GET', path: '/analytics/performance', description: 'Get performance analytics' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          REST API
        </h1>
        <p className="text-xl text-gray-600">
          Complete REST API reference for AEAO. Use HTTP requests to interact with all optimization features and configure the AEAO Tetrad.
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
          <p className="text-gray-700 mt-4">
            Get your API key from the <a href="/api-keys" className="text-primary-600 hover:text-primary-700 underline">API Keys page</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Optimization Endpoints
          </h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            Run Optimization
          </h3>
          <p className="text-gray-700 mb-4">
            Upload your objective function first, then run optimization:
          </p>
          <CodeBlock
            code={uploadFunction}
            language="bash"
            title="POST /v1/functions - Upload objective function"
          />
          <CodeBlock
            code={optimizeExample}
            language="bash"
            title="POST /v1/optimize - Run optimization"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            Configure AEAO Tetrad
          </h3>
          <p className="text-gray-700 mb-4">
            Enable tetrad pillars and configure intelligence features:
          </p>
          <CodeBlock
            code={tetradConfigExample}
            language="bash"
            title="POST /v1/optimize - With Tetrad configuration"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            Get Optimization Status
          </h3>
          <CodeBlock
            code={getOptimization}
            language="bash"
            title="GET /v1/optimize/{id}"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            List Optimizations
          </h3>
          <CodeBlock
            code={listOptimizations}
            language="bash"
            title="GET /v1/optimize"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Domain-Specific Optimization
          </h2>
          <p className="text-gray-700 mb-4">
            Use specialized endpoints for domain-specific problems:
          </p>
          <CodeBlock
            code={domainOptimization}
            language="bash"
            title="POST /v1/domains/{domain}/optimize"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Available Domains</h3>
            <ul className="space-y-2 text-blue-800">
              <li><code className="bg-blue-100 px-2 py-1 rounded">financial</code> - Portfolio optimization, trading strategies</li>
              <li><code className="bg-blue-100 px-2 py-1 rounded">healthcare</code> - Drug discovery, clinical trials</li>
              <li><code className="bg-blue-100 px-2 py-1 rounded">supply_chain</code> - Vehicle routing, inventory optimization</li>
              <li><code className="bg-blue-100 px-2 py-1 rounded">ai_ml</code> - Hyperparameter tuning, architecture search</li>
              <li><code className="bg-blue-100 px-2 py-1 rounded">marketing</code> - Campaign optimization, pricing</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Response Format
          </h2>
          <p className="text-gray-700 mb-4">
            Successful responses return JSON with optimization results:
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
            Request Parameters
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimization Request</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>objective_function_id</strong> (required): ID of uploaded function</li>
              <li><strong>bounds</strong> (required): Search bounds [[min1, max1], [min2, max2], ...]</li>
              <li><strong>max_evaluations</strong> (optional): Maximum function evaluations (default: 1000)</li>
              <li><strong>preset</strong> (optional): Preset config ("development", "production", "research", "enterprise", "minimal")</li>
              <li><strong>tetrad_config</strong> (optional): Custom tetrad configuration object</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tetrad Configuration</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>use_agentic_intelligence</strong> (boolean): Enable multi-agent coordination</li>
              <li><strong>use_expository_intelligence</strong> (boolean): Enable explainability</li>
              <li><strong>use_autodidactic_intelligence</strong> (boolean): Enable self-improvement</li>
              <li><strong>use_domain_extension</strong> (boolean): Enable domain libraries</li>
              <li><strong>explanation_level</strong> (integer 0-5): Explanation detail level</li>
              <li><strong>use_gpu_acceleration</strong> (boolean): Enable GPU/CUDA</li>
              <li><strong>use_visual_intelligence</strong> (boolean): Enable visual analysis</li>
            </ul>
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
            code="GET /v1/optimize?limit=20&offset=40"
            language="bash"
            title="Pagination example"
          />
        </section>
      </div>
    </div>
  )
}
