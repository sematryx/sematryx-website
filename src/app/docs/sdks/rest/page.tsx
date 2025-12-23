'use client'

import { useState } from 'react'
import CodeBlock from '@/components/CodeBlock'
import ExpandableEndpoint from '@/components/ExpandableEndpoint'

export default function RESTAPIPage() {
  const [expandedEndpoints, setExpandedEndpoints] = useState<Set<string>>(new Set())
  const baseUrl = `https://api.sematryx.com/v1`
  
  const toggleEndpoint = (endpointKey: string) => {
    setExpandedEndpoints(prev => {
      const next = new Set(prev)
      if (next.has(endpointKey)) {
        next.delete(endpointKey)
      } else {
        next.add(endpointKey)
      }
      return next
    })
  }

  const authentication = `Authorization: Bearer YOUR_API_KEY`

  const optimizeExample = `curl -X POST https://api.sematryx.com/v1/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective_function_id": "func_1234567890",
    "bounds": [[-5, 5], [-5, 5], [-5, 5]],
    "max_evaluations": 1000,
    "preset": "production"
  }'`

  const tetradConfigExample = `curl -X POST https://api.sematryx.com/v1/optimize \\
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

  const uploadFunction = `curl -X POST https://api.sematryx.com/v1/functions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "sphere",
    "code": "def sphere(x): return sum(xi**2 for xi in x)",
    "language": "python"
  }'`

  const getOptimization = `curl -X GET https://api.sematryx.com/v1/optimize/opt_1234567890 \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const listOptimizations = `curl -X GET "https://api.sematryx.com/v1/optimize?limit=20&offset=0" \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const domainOptimization = `curl -X POST https://api.sematryx.com/v1/domains/financial/optimize \\
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

  // Categories marked as 'coming_soon' are planned for future releases
  const comingSoonCategories = ['Context', 'Data Lake', 'Examples', 'Webhooks']
  
  const endpoints = [
    // Optimization - CORE (Available)
    { method: 'POST', path: '/optimization/', description: 'Start an optimization operation', category: 'Optimization' },
    { method: 'GET', path: '/optimization/status/{operation_id}', description: 'Get optimization status', category: 'Optimization' },
    { method: 'GET', path: '/optimization/result/{operation_id}', description: 'Get optimization result', category: 'Optimization' },
    { method: 'POST', path: '/optimization/cancel/{operation_id}', description: 'Cancel running optimization', category: 'Optimization' },
    { method: 'GET', path: '/optimization/', description: 'List all optimization operations', category: 'Optimization' },
    
    // Identity Management (Available)
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
    
    // Batch Operations (Available)
    { method: 'POST', path: '/batch/submit', description: 'Submit batch optimization job', category: 'Batch' },
    { method: 'GET', path: '/batch/status/{batch_id}', description: 'Get batch job status', category: 'Batch' },
    { method: 'GET', path: '/batch/results/{batch_id}', description: 'Get batch results', category: 'Batch' },
    { method: 'POST', path: '/batch/cancel/{batch_id}', description: 'Cancel batch job', category: 'Batch' },
    { method: 'GET', path: '/batch/', description: 'List batch jobs', category: 'Batch' },
    
    // Learning System (Available)
    { method: 'POST', path: '/learning/train', description: 'Train learning model', category: 'Learning' },
    { method: 'GET', path: '/learning/status/{operation_id}', description: 'Get training status', category: 'Learning' },
    { method: 'GET', path: '/learning/models', description: 'List trained models', category: 'Learning' },
    { method: 'GET', path: '/learning/models/{model_id}', description: 'Get model details', category: 'Learning' },
    { method: 'DELETE', path: '/learning/models/{model_id}', description: 'Delete model', category: 'Learning' },
    { method: 'POST', path: '/learning/evaluate/{model_id}', description: 'Evaluate model', category: 'Learning' },
    { method: 'GET', path: '/learning/insights', description: 'Get learning insights', category: 'Learning' },
    { method: 'POST', path: '/learning/cancel/{operation_id}', description: 'Cancel training', category: 'Learning' },
    
    // Advanced Optimization (Available)
    { method: 'POST', path: '/advanced/multi-objective', description: 'Multi-objective optimization', category: 'Advanced' },
    { method: 'POST', path: '/advanced/sensitivity-analysis', description: 'Sensitivity analysis', category: 'Advanced' },
    { method: 'GET', path: '/advanced/status/{operation_id}', description: 'Get advanced operation status', category: 'Advanced' },
    { method: 'GET', path: '/advanced/result/{operation_id}', description: 'Get advanced operation result', category: 'Advanced' },
    { method: 'GET', path: '/advanced/', description: 'List advanced operations', category: 'Advanced' },
    
    // Context Intelligence - COMING SOON
    { method: 'POST', path: '/context/analyze', description: 'Analyze problem context', category: 'Context' },
    { method: 'POST', path: '/context/similarity', description: 'Compute context similarity', category: 'Context' },
    { method: 'POST', path: '/context/synthesize', description: 'Synthesize contexts', category: 'Context' },
    { method: 'GET', path: '/context/status/{operation_id}', description: 'Get context operation status', category: 'Context' },
    { method: 'GET', path: '/context/result/{operation_id}', description: 'Get context operation result', category: 'Context' },
    { method: 'GET', path: '/context/insights', description: 'Get context insights', category: 'Context' },
    { method: 'GET', path: '/context/', description: 'List context operations', category: 'Context' },
    
    // Data Lake - COMING SOON
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
    
    // Analytics (Available)
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
    
    // Configuration (Available)
    { method: 'GET', path: '/config/', description: 'Get API configuration', category: 'Configuration' },
    { method: 'GET', path: '/config/version', description: 'Get API version', category: 'Configuration' },
    { method: 'GET', path: '/config/features', description: 'Get available features', category: 'Configuration' },
    { method: 'GET', path: '/config/limits', description: 'Get operational limits', category: 'Configuration' },
    
    // Health (Available)
    { method: 'GET', path: '/health/', description: 'Basic health check', category: 'Health' },
    { method: 'GET', path: '/health/detailed', description: 'Detailed health status', category: 'Health' },
    { method: 'GET', path: '/health/ping', description: 'Ping endpoint', category: 'Health' },
    
    // Federated Learning (Available)
    { method: 'POST', path: '/federated-learning/nodes/register', description: 'Register federated node', category: 'Federated Learning' },
    { method: 'POST', path: '/federated-learning/sessions/create', description: 'Create federated session', category: 'Federated Learning' },
    { method: 'POST', path: '/federated-learning/sessions/{session_id}/rounds/start', description: 'Start federated round', category: 'Federated Learning' },
    { method: 'GET', path: '/federated-learning/nodes', description: 'List federated nodes', category: 'Federated Learning' },
    { method: 'GET', path: '/federated-learning/sessions', description: 'List federated sessions', category: 'Federated Learning' },
    { method: 'GET', path: '/federated-learning/sessions/{session_id}', description: 'Get session details', category: 'Federated Learning' },
    { method: 'GET', path: '/federated-learning/coordination/analytics', description: 'Get coordination analytics', category: 'Federated Learning' },
    { method: 'GET', path: '/federated-learning/operations/{operation_id}', description: 'Get operation status', category: 'Federated Learning' },
    { method: 'GET', path: '/federated-learning/', description: 'List federated learning operations', category: 'Federated Learning' },
    
    // Examples - COMING SOON
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
          Complete REST API reference for Sematryx. Use HTTP requests to interact with all optimization features and configure the AEAO Tetrad.
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
            API Endpoints Reference
          </h2>
          <p className="text-gray-700 mb-6">
            Click on any endpoint to view detailed parameter information, request/response examples, and cURL commands.
          </p>
          {(() => {
            const getEndpointDetails = (endpoint: typeof endpoints[0]): any => {
              const baseUrl = 'https://api.sematryx.com/v1'
              
              // Extract path parameters
              const pathParams: any[] = []
              const pathParamRegex = /\{([^}]+)\}/g
              let match
              while ((match = pathParamRegex.exec(endpoint.path)) !== null) {
                pathParams.push({
                  name: match[1],
                  type: 'string',
                  required: true,
                  description: `The ${match[1].replace(/_/g, ' ')} identifier`
                })
              }

              // Common endpoint details
              const baseDetails = {
                method: endpoint.method,
                path: endpoint.path,
                description: endpoint.description,
                category: endpoint.category,
                pathParams: pathParams.length > 0 ? pathParams : undefined,
              }

              // Add specific details for key endpoints
              if (endpoint.path === '/optimization/') {
                return {
                  ...baseDetails,
                  requestBody: {
                    description: 'Start a new optimization operation',
                    parameters: [
                      { name: 'objective_function', type: 'string', required: true, description: 'Objective function name or expression' },
                      { name: 'variables', type: 'array[string]', required: true, description: 'Variable names' },
                      { name: 'bounds', type: 'array[array[float]]', required: true, description: 'Variable bounds [[min, max], ...]' },
                      { name: 'max_evaluations', type: 'integer', required: false, default: '1000', description: 'Maximum function evaluations' },
                      { name: 'strategy', type: 'string', required: false, description: 'Optimization strategy (e.g., "differential_evolution", "shgo")' },
                      { name: 'domain', type: 'string', required: false, default: '"general"', description: 'Domain library to use' },
                      { name: 'constraints', type: 'array[object]', required: false, description: 'Optimization constraints' },
                      { name: 'problem_id', type: 'string', required: false, description: 'Unique problem identifier' },
                      { name: 'use_ai_reasoning', type: 'boolean', required: false, default: 'true', description: 'Enable AI reasoning' },
                      { name: 'use_context_intelligence', type: 'boolean', required: false, default: 'true', description: 'Enable context intelligence' },
                    ],
                    example: JSON.stringify({
                      objective_function: 'sphere',
                      variables: ['x1', 'x2'],
                      bounds: [[-5.0, 5.0], [-5.0, 5.0]],
                      max_evaluations: 1000,
                      strategy: 'differential_evolution'
                    }, null, 2)
                  },
                  curlExample: `curl -X POST ${baseUrl}${endpoint.path} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective_function": "sphere",
    "variables": ["x1", "x2"],
    "bounds": [[-5.0, 5.0], [-5.0, 5.0]],
    "max_evaluations": 1000
  }'`,
                  response: {
                    example: JSON.stringify({
                      success: true,
                      message: 'Optimization started successfully',
                      operation_id: 'opt_1234567890',
                      created_at: '2024-01-01T00:00:00Z',
                      estimated_duration: 10.5,
                      problem_id: 'prob_123',
                      problem_size: 2,
                      status: 'created',
                      progress_url: '/optimization/status/opt_1234567890'
                    }, null, 2)
                  }
                }
              }

              if (endpoint.path === '/optimization/status/{operation_id}') {
                return {
                  ...baseDetails,
                  curlExample: `curl -X GET ${baseUrl}${endpoint.path.replace('{operation_id}', 'opt_1234567890')} \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
                  response: {
                    example: JSON.stringify({
                      operation_id: 'opt_1234567890',
                      status: 'running',
                      created_at: '2024-01-01T00:00:00Z',
                      started_at: '2024-01-01T00:00:01Z',
                      progress: {
                        current_status: 'running',
                        has_result: false
                      }
                    }, null, 2)
                  }
                }
              }

              if (endpoint.path === '/optimization/result/{operation_id}') {
                return {
                  ...baseDetails,
                  curlExample: `curl -X GET ${baseUrl}${endpoint.path.replace('{operation_id}', 'opt_1234567890')} \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
                  response: {
                    example: JSON.stringify({
                      optimal_solution: [0.0, 0.0],
                      optimal_value: 0.0,
                      strategy_used: 'differential_evolution',
                      evaluations_used: 150,
                      execution_time: 2.5,
                      iterations: 15,
                      problem_id: 'prob_123',
                      operation_id: 'opt_1234567890',
                      completed_at: '2024-01-01T00:00:03Z'
                    }, null, 2)
                  }
                }
              }

              if (endpoint.path === '/identity/') {
                return {
                  ...baseDetails,
                  requestBody: {
                    parameters: [
                      { name: 'email', type: 'string', required: true, description: 'Email address' },
                      { name: 'organization_id', type: 'string', required: false, description: 'Organization identifier' },
                      { name: 'privacy_level', type: 'string', required: false, default: '"aggregated"', description: 'Privacy level: "public", "aggregated", "federated", "private"' },
                      { name: 'subscription_tier', type: 'string', required: false, default: '"starter"', description: 'Subscription tier: "free", "starter", "professional", "enterprise", "custom"' },
                    ],
                    example: JSON.stringify({
                      email: 'user@example.com',
                      organization_id: 'org_123',
                      privacy_level: 'aggregated',
                      subscription_tier: 'professional'
                    }, null, 2)
                  },
                  curlExample: `curl -X POST ${baseUrl}${endpoint.path} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "privacy_level": "aggregated",
    "subscription_tier": "professional"
  }'`,
                  response: {
                    example: JSON.stringify({
                      client_id: 'client_1234567890',
                      organization_id: 'org_123',
                      privacy_level: 'aggregated',
                      subscription_tier: 'professional',
                      billing_email: 'user@example.com',
                      status: 'active',
                      created_at: '2024-01-01T00:00:00Z',
                      updated_at: '2024-01-01T00:00:00Z',
                      federated_learning_enabled: false
                    }, null, 2)
                  }
                }
              }

              if (endpoint.path === '/identity/{client_id}/quotas') {
                return {
                  ...baseDetails,
                  curlExample: `curl -X GET ${baseUrl}${endpoint.path.replace('{client_id}', 'client_1234567890')} \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
                  response: {
                    example: JSON.stringify({
                      client_id: 'client_1234567890',
                      subscription_tier: 'professional',
                      api_quotas: {
                        optimizations_per_day: 1000,
                        batch_jobs_per_day: 50,
                        data_storage_mb: 10000
                      },
                      current_usage: {
                        optimizations_per_day: 245,
                        batch_jobs_per_day: 12,
                        data_storage_mb: 3450
                      },
                      quota_utilization: {
                        optimizations_per_day: 24.5,
                        batch_jobs_per_day: 24.0,
                        data_storage_mb: 34.5
                      }
                    }, null, 2)
                  }
                }
              }

              if (endpoint.path === '/batch/submit') {
                return {
                  ...baseDetails,
                  requestBody: {
                    description: 'Submit a batch optimization job',
                    parameters: [
                      { name: 'batch_name', type: 'string', required: true, description: 'Name for the batch job' },
                      { name: 'optimizations', type: 'array[object]', required: true, description: 'List of optimization jobs' },
                      { name: 'parallel_workers', type: 'integer', required: false, default: '2', description: 'Number of parallel workers' },
                      { name: 'max_total_time', type: 'integer', required: false, description: 'Maximum total time in seconds' },
                      { name: 'notification_webhook', type: 'string', required: false, description: 'Webhook URL for completion notification' },
                    ],
                    example: JSON.stringify({
                      batch_name: 'portfolio_analysis',
                      optimizations: [
                        {
                          job_name: 'portfolio_1',
                          objective_function: 'sphere',
                          bounds: [[-5, 5], [-5, 5]],
                          max_evaluations: 1000
                        }
                      ],
                      parallel_workers: 2
                    }, null, 2)
                  },
                  curlExample: `curl -X POST ${baseUrl}${endpoint.path} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "batch_name": "portfolio_analysis",
    "optimizations": [...],
    "parallel_workers": 2
  }'`,
                  response: {
                    example: JSON.stringify({
                      success: true,
                      batch_id: 'batch_1234567890',
                      total_jobs: 5,
                      estimated_duration: 45.0,
                      status: 'created'
                    }, null, 2)
                  }
                }
              }

              // Default for endpoints without specific details
              return {
                ...baseDetails,
                curlExample: `curl -X ${endpoint.method} ${baseUrl}${endpoint.path} \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
                response: {
                  description: 'Response structure varies by endpoint',
                  example: JSON.stringify({ success: true, data: '...' }, null, 2)
                }
              }
            }

            const categories = Array.from(new Set(endpoints.map(e => e.category))).sort()
            return categories.map(category => {
              const categoryEndpoints = endpoints.filter(e => e.category === category)
              const isComingSoon = comingSoonCategories.includes(category)
              return (
                <div key={category} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    {category}
                    {isComingSoon && (
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">
                        Coming Soon
                      </span>
                    )}
                  </h3>
                  {isComingSoon && (
                    <p className="text-sm text-gray-500 mb-3 italic">
                      These endpoints are planned for a future release. Contact us if you need early access.
                    </p>
                  )}
                  <div className="space-y-2">
                    {categoryEndpoints.map((endpoint, index) => {
                      const endpointKey = `${endpoint.method}-${endpoint.path}-${index}`
                      const details = getEndpointDetails(endpoint)
                      return (
                        <ExpandableEndpoint
                          key={endpointKey}
                          endpoint={details}
                          isExpanded={expandedEndpoints.has(endpointKey)}
                          onToggle={() => toggleEndpoint(endpointKey)}
                        />
                      )
                    })}
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
