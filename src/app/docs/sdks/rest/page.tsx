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
    // Optimization
    { method: 'POST', path: '/optimization/', description: 'Start an optimization operation', category: 'Optimization' },
    { method: 'GET', path: '/optimization/status/{operation_id}', description: 'Get optimization status', category: 'Optimization' },
    { method: 'GET', path: '/optimization/result/{operation_id}', description: 'Get optimization result', category: 'Optimization' },
    { method: 'POST', path: '/optimization/cancel/{operation_id}', description: 'Cancel running optimization', category: 'Optimization' },
    { method: 'GET', path: '/optimization/', description: 'List all optimization operations', category: 'Optimization' },
    
    // Identity Management
    { method: 'POST', path: '/identity/', description: 'Create client identity', category: 'Identity' },
    { method: 'GET', path: '/identity/{client_id}', description: 'Get client identity', category: 'Identity' },
    { method: 'GET', path: '/identity/', description: 'List client identities', category: 'Identity' },
    { method: 'PUT', path: '/identity/{client_id}/privacy', description: 'Update privacy level', category: 'Identity' },
    { method: 'GET', path: '/identity/{client_id}/privacy', description: 'Get privacy status', category: 'Identity' },
    { method: 'PUT', path: '/identity/{client_id}/sharing', description: 'Configure data sharing', category: 'Identity' },
    { method: 'GET', path: '/identity/{client_id}/quotas', description: 'Get usage quotas', category: 'Identity' },
    { method: 'POST', path: '/identity/{client_id}/usage/{service}', description: 'Track service usage', category: 'Identity' },
    { method: 'GET', path: '/identity/{client_id}/federated-learning', description: 'Get federated learning status', category: 'Identity' },
    { method: 'PUT', path: '/identity/{client_id}/subscription-tier', description: 'Update subscription tier', category: 'Identity' },
    { method: 'DELETE', path: '/identity/{client_id}', description: 'Delete identity', category: 'Identity' },
    { method: 'GET', path: '/identity/stats/hub', description: 'Get identity hub statistics', category: 'Identity' },
    { method: 'POST', path: '/identity/{client_id}/validate', description: 'Validate client identity', category: 'Identity' },
    
    // Batch Operations
    { method: 'POST', path: '/batch/submit', description: 'Submit batch optimization job', category: 'Batch' },
    { method: 'GET', path: '/batch/status/{batch_id}', description: 'Get batch job status', category: 'Batch' },
    { method: 'GET', path: '/batch/results/{batch_id}', description: 'Get batch results', category: 'Batch' },
    { method: 'POST', path: '/batch/cancel/{batch_id}', description: 'Cancel batch job', category: 'Batch' },
    { method: 'GET', path: '/batch/', description: 'List batch jobs', category: 'Batch' },
    
    // Learning System
    { method: 'POST', path: '/learning/train', description: 'Train learning model', category: 'Learning' },
    { method: 'GET', path: '/learning/status/{operation_id}', description: 'Get training status', category: 'Learning' },
    { method: 'GET', path: '/learning/models', description: 'List trained models', category: 'Learning' },
    { method: 'GET', path: '/learning/models/{model_id}', description: 'Get model details', category: 'Learning' },
    { method: 'DELETE', path: '/learning/models/{model_id}', description: 'Delete model', category: 'Learning' },
    { method: 'POST', path: '/learning/evaluate/{model_id}', description: 'Evaluate model', category: 'Learning' },
    { method: 'GET', path: '/learning/insights', description: 'Get learning insights', category: 'Learning' },
    { method: 'POST', path: '/learning/cancel/{operation_id}', description: 'Cancel training', category: 'Learning' },
    
    // Advanced Optimization
    { method: 'POST', path: '/advanced/multi-objective', description: 'Multi-objective optimization', category: 'Advanced' },
    { method: 'POST', path: '/advanced/sensitivity-analysis', description: 'Sensitivity analysis', category: 'Advanced' },
    { method: 'GET', path: '/advanced/status/{operation_id}', description: 'Get advanced operation status', category: 'Advanced' },
    { method: 'GET', path: '/advanced/result/{operation_id}', description: 'Get advanced operation result', category: 'Advanced' },
    { method: 'GET', path: '/advanced/', description: 'List advanced operations', category: 'Advanced' },
    
    // Context Intelligence
    { method: 'POST', path: '/context/analyze', description: 'Analyze problem context', category: 'Context' },
    { method: 'POST', path: '/context/similarity', description: 'Compute context similarity', category: 'Context' },
    { method: 'POST', path: '/context/synthesize', description: 'Synthesize contexts', category: 'Context' },
    { method: 'GET', path: '/context/status/{operation_id}', description: 'Get context operation status', category: 'Context' },
    { method: 'GET', path: '/context/result/{operation_id}', description: 'Get context operation result', category: 'Context' },
    { method: 'GET', path: '/context/insights', description: 'Get context insights', category: 'Context' },
    { method: 'GET', path: '/context/', description: 'List context operations', category: 'Context' },
    
    // Data Lake
    { method: 'POST', path: '/data-lake/connections', description: 'Create data connection', category: 'Data Lake' },
    { method: 'POST', path: '/data-lake/datasets/upload', description: 'Upload dataset', category: 'Data Lake' },
    { method: 'POST', path: '/data-lake/optimization-data', description: 'Store optimization data', category: 'Data Lake' },
    { method: 'POST', path: '/data-lake/query', description: 'Query data lake', category: 'Data Lake' },
    { method: 'GET', path: '/data-lake/datasets', description: 'List datasets', category: 'Data Lake' },
    { method: 'GET', path: '/data-lake/datasets/{dataset_id}', description: 'Get dataset details', category: 'Data Lake' },
    { method: 'GET', path: '/data-lake/connections', description: 'List connections', category: 'Data Lake' },
    { method: 'GET', path: '/data-lake/status/{operation_id}', description: 'Get data lake operation status', category: 'Data Lake' },
    { method: 'GET', path: '/data-lake/result/{operation_id}', description: 'Get data lake operation result', category: 'Data Lake' },
    { method: 'GET', path: '/data-lake/analytics/summary', description: 'Get analytics summary', category: 'Data Lake' },
    { method: 'GET', path: '/data-lake/', description: 'List data lake operations', category: 'Data Lake' },
    
    // Analytics
    { method: 'POST', path: '/analytics/analyze', description: 'Request analytics analysis', category: 'Analytics' },
    { method: 'POST', path: '/analytics/metrics/submit', description: 'Submit performance metrics', category: 'Analytics' },
    { method: 'POST', path: '/analytics/reports/generate', description: 'Generate performance report', category: 'Analytics' },
    { method: 'GET', path: '/analytics/status/{operation_id}', description: 'Get analysis status', category: 'Analytics' },
    { method: 'GET', path: '/analytics/result/{operation_id}', description: 'Get analysis result', category: 'Analytics' },
    { method: 'GET', path: '/analytics/insights', description: 'Get performance insights', category: 'Analytics' },
    { method: 'GET', path: '/analytics/metrics/summary', description: 'Get metrics summary', category: 'Analytics' },
    { method: 'GET', path: '/analytics/metrics', description: 'Get optimization metrics', category: 'Analytics' },
    { method: 'GET', path: '/analytics/executions', description: 'Get execution statistics', category: 'Analytics' },
    { method: 'GET', path: '/analytics/performance', description: 'Get performance analytics', category: 'Analytics' },
    { method: 'GET', path: '/analytics/', description: 'List analytics operations', category: 'Analytics' },
    
    // Configuration
    { method: 'GET', path: '/config/', description: 'Get API configuration', category: 'Configuration' },
    { method: 'GET', path: '/config/version', description: 'Get API version', category: 'Configuration' },
    { method: 'GET', path: '/config/features', description: 'Get available features', category: 'Configuration' },
    { method: 'GET', path: '/config/limits', description: 'Get operational limits', category: 'Configuration' },
    
    // Health
    { method: 'GET', path: '/health/', description: 'Basic health check', category: 'Health' },
    { method: 'GET', path: '/health/detailed', description: 'Detailed health status', category: 'Health' },
    { method: 'GET', path: '/health/ping', description: 'Ping endpoint', category: 'Health' },
    
    // Federated Learning
    { method: 'POST', path: '/federated-learning/nodes/register', description: 'Register federated node', category: 'Federated Learning' },
    { method: 'POST', path: '/federated-learning/sessions/create', description: 'Create federated session', category: 'Federated Learning' },
    { method: 'POST', path: '/federated-learning/sessions/{session_id}/rounds/start', description: 'Start federated round', category: 'Federated Learning' },
    { method: 'GET', path: '/federated-learning/nodes', description: 'List federated nodes', category: 'Federated Learning' },
    { method: 'GET', path: '/federated-learning/sessions', description: 'List federated sessions', category: 'Federated Learning' },
    { method: 'GET', path: '/federated-learning/sessions/{session_id}', description: 'Get session details', category: 'Federated Learning' },
    { method: 'GET', path: '/federated-learning/coordination/analytics', description: 'Get coordination analytics', category: 'Federated Learning' },
    { method: 'GET', path: '/federated-learning/operations/{operation_id}', description: 'Get operation status', category: 'Federated Learning' },
    { method: 'GET', path: '/federated-learning/', description: 'List federated learning operations', category: 'Federated Learning' },
    
    // Examples
    { method: 'GET', path: '/examples/', description: 'List examples', category: 'Examples' },
    { method: 'GET', path: '/examples/categories', description: 'Get example categories', category: 'Examples' },
    { method: 'GET', path: '/examples/{example_id}', description: 'Get example details', category: 'Examples' },
    { method: 'POST', path: '/examples/{example_id}/execute', description: 'Execute example', category: 'Examples' },
    { method: 'GET', path: '/examples/executions/{execution_id}/status', description: 'Get execution status', category: 'Examples' },
    { method: 'GET', path: '/examples/executions/{execution_id}/result', description: 'Get execution result', category: 'Examples' },
    { method: 'POST', path: '/examples/{example_id}/customize', description: 'Customize example', category: 'Examples' },
    { method: 'GET', path: '/examples/tutorials/interactive', description: 'Get interactive tutorials', category: 'Examples' },
    { method: 'GET', path: '/examples/search', description: 'Search examples', category: 'Examples' },
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
            Note: Some endpoints use paths like <code className="bg-gray-100 px-2 py-1 rounded">/optimization/</code> 
            instead of <code className="bg-gray-100 px-2 py-1 rounded">/optimize</code> - refer to the endpoint 
            table below for exact paths.
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
            Detailed Endpoint Reference
          </h2>
          <p className="text-gray-700 mb-6">
            Detailed parameter and request/response information for key endpoints.
          </p>

          {/* Optimization Endpoints */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization Endpoints</h3>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">POST /optimization/</h4>
              <p className="text-gray-700 mb-4">Start a new optimization operation.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Request Body (required):</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">objective_function</code> (string, required) - Objective function name or expression</li>
                  <li><code className="bg-gray-100 px-1 rounded">variables</code> (array[string], required) - Variable names</li>
                  <li><code className="bg-gray-100 px-1 rounded">bounds</code> (array[array[float]], required) - Variable bounds [[min, max], ...]</li>
                  <li><code className="bg-gray-100 px-1 rounded">max_evaluations</code> (integer, optional, default: 1000) - Maximum function evaluations</li>
                  <li><code className="bg-gray-100 px-1 rounded">strategy</code> (string, optional) - Optimization strategy (e.g., "differential_evolution", "shgo")</li>
                  <li><code className="bg-gray-100 px-1 rounded">domain</code> (string, optional, default: "general") - Domain library to use</li>
                  <li><code className="bg-gray-100 px-1 rounded">constraints</code> (array[object], optional) - Optimization constraints</li>
                  <li><code className="bg-gray-100 px-1 rounded">problem_id</code> (string, optional) - Unique problem identifier</li>
                  <li><code className="bg-gray-100 px-1 rounded">use_ai_reasoning</code> (boolean, optional, default: true) - Enable AI reasoning</li>
                  <li><code className="bg-gray-100 px-1 rounded">use_context_intelligence</code> (boolean, optional, default: true) - Enable context intelligence</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Response:</h5>
                <CodeBlock
                  code={`{
  "success": true,
  "message": "Optimization started successfully",
  "operation_id": "opt_1234567890",
  "created_at": "2024-01-01T00:00:00Z",
  "estimated_duration": 10.5,
  "problem_id": "prob_123",
  "problem_size": 2,
  "status": "created",
  "progress_url": "/optimization/status/opt_1234567890"
}`}
                  language="json"
                  title="Success response"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">GET /optimization/status/{'{operation_id}'}</h4>
              <p className="text-gray-700 mb-4">Get the status of an optimization operation.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Path Parameters:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">operation_id</code> (string, required) - Operation identifier</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Response:</h5>
                <CodeBlock
                  code={`{
  "operation_id": "opt_1234567890",
  "status": "running",
  "created_at": "2024-01-01T00:00:00Z",
  "started_at": "2024-01-01T00:00:01Z",
  "progress": {
    "current_status": "running",
    "has_result": false
  }
}`}
                  language="json"
                  title="Status response"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">GET /optimization/result/{'{operation_id}'}</h4>
              <p className="text-gray-700 mb-4">Get the result of a completed optimization operation.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Path Parameters:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">operation_id</code> (string, required) - Operation identifier</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Response:</h5>
                <CodeBlock
                  code={`{
  "optimal_solution": [0.0, 0.0],
  "optimal_value": 0.0,
  "strategy_used": "differential_evolution",
  "evaluations_used": 150,
  "execution_time": 2.5,
  "iterations": 15,
  "problem_id": "prob_123",
  "operation_id": "opt_1234567890",
  "completed_at": "2024-01-01T00:00:03Z",
  "ai_reasoning_used": true,
  "context_intelligence_used": true
}`}
                  language="json"
                  title="Result response"
                />
              </div>
            </div>
          </div>

          {/* Identity Management Endpoints */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Identity Management Endpoints</h3>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">POST /identity/</h4>
              <p className="text-gray-700 mb-4">Create a new client identity.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Request Body:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">email</code> (string, required) - Email address</li>
                  <li><code className="bg-gray-100 px-1 rounded">organization_id</code> (string, optional) - Organization identifier</li>
                  <li><code className="bg-gray-100 px-1 rounded">privacy_level</code> (string, optional, default: "aggregated") - Privacy level: "public", "aggregated", "federated", "private"</li>
                  <li><code className="bg-gray-100 px-1 rounded">subscription_tier</code> (string, optional, default: "starter") - Subscription tier: "free", "starter", "professional", "enterprise", "custom"</li>
                  <li><code className="bg-gray-100 px-1 rounded">client_id</code> (string, optional) - Custom client ID</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Response:</h5>
                <CodeBlock
                  code={`{
  "client_id": "client_1234567890",
  "organization_id": "org_123",
  "privacy_level": "aggregated",
  "subscription_tier": "professional",
  "billing_email": "user@example.com",
  "status": "active",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z",
  "federated_learning_enabled": false
}`}
                  language="json"
                  title="Identity response"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">GET /identity/{'{client_id}'}/quotas</h4>
              <p className="text-gray-700 mb-4">Get usage quotas and current usage for a client.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Path Parameters:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">client_id</code> (string, required) - Client identifier</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Response:</h5>
                <CodeBlock
                  code={`{
  "client_id": "client_1234567890",
  "subscription_tier": "professional",
  "api_quotas": {
    "optimizations_per_day": 1000,
    "batch_jobs_per_day": 50,
    "data_storage_mb": 10000
  },
  "current_usage": {
    "optimizations_per_day": 245,
    "batch_jobs_per_day": 12,
    "data_storage_mb": 3450
  },
  "quota_utilization": {
    "optimizations_per_day": 24.5,
    "batch_jobs_per_day": 24.0,
    "data_storage_mb": 34.5
  }
}`}
                  language="json"
                  title="Quotas response"
                />
              </div>
            </div>
          </div>

          {/* Batch Operations Endpoints */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Batch Operations Endpoints</h3>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">POST /batch/submit</h4>
              <p className="text-gray-700 mb-4">Submit a batch optimization job.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Request Body:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">batch_name</code> (string, required) - Name for the batch job</li>
                  <li><code className="bg-gray-100 px-1 rounded">optimizations</code> (array[object], required) - List of optimization jobs</li>
                  <li><code className="bg-gray-100 px-1 rounded">parallel_workers</code> (integer, optional, default: 2) - Number of parallel workers</li>
                  <li><code className="bg-gray-100 px-1 rounded">max_total_time</code> (integer, optional) - Maximum total time in seconds</li>
                  <li><code className="bg-gray-100 px-1 rounded">notification_webhook</code> (string, optional) - Webhook URL for completion notification</li>
                </ul>
                <p className="text-gray-600 text-sm mt-2 mb-2">Each optimization item in the array should contain:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li><code className="bg-gray-100 px-1 rounded">job_name</code> (string, required) - Name for this optimization job</li>
                  <li><code className="bg-gray-100 px-1 rounded">objective_function</code> (string, required) - Objective function to optimize</li>
                  <li><code className="bg-gray-100 px-1 rounded">bounds</code> (array[array[float]], required) - Variable bounds</li>
                  <li><code className="bg-gray-100 px-1 rounded">max_evaluations</code> (integer, optional, default: 100) - Maximum evaluations</li>
                  <li><code className="bg-gray-100 px-1 rounded">strategy</code> (string, optional) - Optimization strategy</li>
                  <li><code className="bg-gray-100 px-1 rounded">priority</code> (integer, optional, default: 1) - Job priority (1-10)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Response:</h5>
                <CodeBlock
                  code={`{
  "success": true,
  "batch_id": "batch_1234567890",
  "total_jobs": 5,
  "estimated_duration": 45.0,
  "status": "created"
}`}
                  language="json"
                  title="Batch submission response"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">GET /batch/status/{'{batch_id}'}</h4>
              <p className="text-gray-700 mb-4">Get batch job status.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Path Parameters:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">batch_id</code> (string, required) - Batch job identifier</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Response:</h5>
                <CodeBlock
                  code={`{
  "batch_id": "batch_1234567890",
  "batch_name": "portfolio_analysis",
  "status": "running",
  "total_jobs": 5,
  "completed_jobs": 2,
  "failed_jobs": 0,
  "progress_percentage": 40.0,
  "created_at": "2024-01-01T00:00:00Z",
  "started_at": "2024-01-01T00:00:01Z",
  "estimated_remaining_time": 27.0
}`}
                  language="json"
                  title="Batch status response"
                />
              </div>
            </div>
          </div>

          {/* Analytics Endpoints */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Endpoints</h3>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">POST /analytics/metrics/submit</h4>
              <p className="text-gray-700 mb-4">Submit performance metrics for analysis.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Request Body:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">metrics</code> (array[object], required) - List of performance metrics</li>
                  <li><code className="bg-gray-100 px-1 rounded">batch_id</code> (string, optional) - Batch identifier for grouping</li>
                  <li><code className="bg-gray-100 px-1 rounded">source_system</code> (string, required) - System that generated the metrics</li>
                </ul>
                <p className="text-gray-600 text-sm mt-2 mb-2">Each metric object should contain:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li><code className="bg-gray-100 px-1 rounded">metric_name</code> (string, required) - Name of the metric</li>
                  <li><code className="bg-gray-100 px-1 rounded">metric_value</code> (float, required) - Metric value</li>
                  <li><code className="bg-gray-100 px-1 rounded">metric_type</code> (string, required) - Type: "time", "quality", "efficiency"</li>
                  <li><code className="bg-gray-100 px-1 rounded">timestamp</code> (string, required) - Timestamp of measurement</li>
                  <li><code className="bg-gray-100 px-1 rounded">context</code> (object, optional) - Additional context</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">GET /analytics/metrics/summary</h4>
              <p className="text-gray-700 mb-4">Get summary statistics for performance metrics.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Query Parameters (optional):</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">time_range</code> (string) - Time range: "24h", "7d", "30d", "all"</li>
                  <li><code className="bg-gray-100 px-1 rounded">metric_type</code> (string) - Filter by metric type</li>
                  <li><code className="bg-gray-100 px-1 rounded">source_system</code> (string) - Filter by source system</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Learning System Endpoints */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning System Endpoints</h3>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">POST /learning/train</h4>
              <p className="text-gray-700 mb-4">Train a learning model.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Request Body:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">training_data</code> (array[object], required) - Training data samples</li>
                  <li><code className="bg-gray-100 px-1 rounded">model_type</code> (string, optional, default: "cross_problem") - Type of model to train</li>
                  <li><code className="bg-gray-100 px-1 rounded">training_config</code> (object, optional) - Training configuration</li>
                  <li><code className="bg-gray-100 px-1 rounded">model_name</code> (string, optional) - Custom model name</li>
                  <li><code className="bg-gray-100 px-1 rounded">max_epochs</code> (integer, optional, default: 100) - Maximum training epochs</li>
                  <li><code className="bg-gray-100 px-1 rounded">learning_rate</code> (float, optional, default: 0.001) - Learning rate</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Response:</h5>
                <CodeBlock
                  code={`{
  "success": true,
  "operation_id": "train_1234567890",
  "model_id": "model_1234567890",
  "estimated_duration": 120.0,
  "status": "created"
}`}
                  language="json"
                  title="Training response"
                />
              </div>
            </div>
          </div>

          {/* Advanced Optimization Endpoints */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Optimization Endpoints</h3>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">POST /advanced/multi-objective</h4>
              <p className="text-gray-700 mb-4">Run multi-objective optimization.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Request Body:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">objectives</code> (array[string], required) - List of objective function definitions</li>
                  <li><code className="bg-gray-100 px-1 rounded">bounds</code> (array[array[float]], required) - Variable bounds</li>
                  <li><code className="bg-gray-100 px-1 rounded">weights</code> (array[float], optional) - Objective weights for scalarization</li>
                  <li><code className="bg-gray-100 px-1 rounded">method</code> (string, optional, default: "nsga2") - Multi-objective algorithm</li>
                  <li><code className="bg-gray-100 px-1 rounded">max_evaluations</code> (integer, optional, default: 1000) - Maximum function evaluations</li>
                  <li><code className="bg-gray-100 px-1 rounded">population_size</code> (integer, optional, default: 50) - Population size</li>
                  <li><code className="bg-gray-100 px-1 rounded">pareto_approximation</code> (boolean, optional, default: true) - Enable Pareto frontier approximation</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">POST /advanced/sensitivity-analysis</h4>
              <p className="text-gray-700 mb-4">Perform sensitivity analysis.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Request Body:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">objective_function</code> (string, required) - Objective function definition</li>
                  <li><code className="bg-gray-100 px-1 rounded">bounds</code> (array[array[float]], required) - Variable bounds</li>
                  <li><code className="bg-gray-100 px-1 rounded">reference_point</code> (array[float], required) - Reference point for analysis</li>
                  <li><code className="bg-gray-100 px-1 rounded">perturbation_size</code> (float, optional, default: 0.01) - Perturbation magnitude</li>
                  <li><code className="bg-gray-100 px-1 rounded">analysis_type</code> (string, optional, default: "local") - Type: "local", "global", "morris"</li>
                  <li><code className="bg-gray-100 px-1 rounded">sample_size</code> (integer, optional, default: 100) - Number of samples for global analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Context Intelligence Endpoints */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Context Intelligence Endpoints</h3>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">POST /context/analyze</h4>
              <p className="text-gray-700 mb-4">Analyze problem context and find similar problems.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Request Body:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">target_context</code> (object, required) - Target problem context</li>
                  <li><code className="bg-gray-100 px-1 rounded">similarity_threshold</code> (float, optional, default: 0.7) - Similarity threshold for matching</li>
                  <li><code className="bg-gray-100 px-1 rounded">include_recommendations</code> (boolean, optional, default: true) - Include optimization recommendations</li>
                  <li><code className="bg-gray-100 px-1 rounded">analysis_depth</code> (string, optional, default: "standard") - Depth: "basic", "standard", "deep"</li>
                  <li><code className="bg-gray-100 px-1 rounded">max_similar_problems</code> (integer, optional, default: 10) - Maximum similar problems to return</li>
                </ul>
                <p className="text-gray-600 text-sm mt-2 mb-2">The target_context object should contain:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li><code className="bg-gray-100 px-1 rounded">problem_id</code> (string, required) - Unique problem identifier</li>
                  <li><code className="bg-gray-100 px-1 rounded">problem_type</code> (string, required) - Problem category/type</li>
                  <li><code className="bg-gray-100 px-1 rounded">domain</code> (string, required) - Problem domain</li>
                  <li><code className="bg-gray-100 px-1 rounded">description</code> (string, required) - Textual description</li>
                  <li><code className="bg-gray-100 px-1 rounded">parameters</code> (object, optional) - Problem parameters</li>
                  <li><code className="bg-gray-100 px-1 rounded">constraints</code> (array, optional) - Problem constraints</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Lake Endpoints */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Lake Endpoints</h3>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">POST /data-lake/datasets/upload</h4>
              <p className="text-gray-700 mb-4">Upload a dataset to the data lake.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Request Body:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">dataset_name</code> (string, required) - Name for the dataset</li>
                  <li><code className="bg-gray-100 px-1 rounded">data_type</code> (string, required) - Type of data being uploaded</li>
                  <li><code className="bg-gray-100 px-1 rounded">description</code> (string, required) - Dataset description</li>
                  <li><code className="bg-gray-100 px-1 rounded">tags</code> (array[string], optional) - Dataset tags</li>
                  <li><code className="bg-gray-100 px-1 rounded">schema_hint</code> (object, optional) - Schema hints</li>
                  <li><code className="bg-gray-100 px-1 rounded">overwrite_existing</code> (boolean, optional, default: false) - Overwrite if exists</li>
                </ul>
                <p className="text-gray-600 text-sm mt-2">Note: Data should be included in the request body as a JSON array or sent as a file attachment.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">POST /data-lake/query</h4>
              <p className="text-gray-700 mb-4">Query the data lake.</p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Request Body:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><code className="bg-gray-100 px-1 rounded">query_type</code> (string, required) - Type of query</li>
                  <li><code className="bg-gray-100 px-1 rounded">dataset_ids</code> (array[string], optional) - Target datasets</li>
                  <li><code className="bg-gray-100 px-1 rounded">filters</code> (object, optional) - Data filters</li>
                  <li><code className="bg-gray-100 px-1 rounded">aggregations</code> (array[object], optional) - Aggregation operations</li>
                  <li><code className="bg-gray-100 px-1 rounded">limit</code> (integer, optional, default: 1000) - Maximum records to return</li>
                  <li><code className="bg-gray-100 px-1 rounded">offset</code> (integer, optional, default: 0) - Record offset</li>
                  <li><code className="bg-gray-100 px-1 rounded">sort_by</code> (string, optional) - Sort field</li>
                </ul>
              </div>
            </div>
          </div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Complete Endpoint List
          </h2>
          <p className="text-gray-700 mb-6">
            Complete reference of all available API endpoints, organized by category.
          </p>
          {(() => {
            const categories = Array.from(new Set(endpoints.map(e => e.category))).sort()
            return categories.map(category => {
              const categoryEndpoints = endpoints.filter(e => e.category === category)
              return (
                <div key={category} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{category}</h3>
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
                          {categoryEndpoints.map((endpoint, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded text-sm font-medium ${
                                  endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                                  endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                                  endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                                  endpoint.method === 'PATCH' ? 'bg-orange-100 text-orange-800' :
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
                </div>
              )
            })
          })()}
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
