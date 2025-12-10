'use client'

import CodeBlock from '@/components/CodeBlock'
import CollapsibleSection from '@/components/CollapsibleSection'

export default function JavaScriptSDKPage() {
  const installCode = `npm install @sematryx/javascript-sdk`

  const basicUsage = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Define objective function
const sphere = (x) => {
  return x.reduce((sum, val) => sum + val * val, 0)
}

// Run optimization
const result = await sematryx.optimize({
  objective_function: sphere,
  bounds: [[-5, 5], [-5, 5]],
  max_evaluations: 1000
})

console.log('Best solution:', result.best_solution)
console.log('Best fitness:', result.best_fitness)`

  const tetradConfig = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Option 1: Use preset configuration
const result = await sematryx.optimize({
  objective_function: sphere,
  bounds: [[-5, 5], [-5, 5]],
  preset: 'production'  // development, production, research, enterprise, minimal
})

// Option 2: Enable specific tetrad pillars
const result = await sematryx.optimize({
  objective_function: sphere,
  bounds: [[-5, 5], [-5, 5]],
  use_agentic_intelligence: true,      // Multi-agent coordination
  use_autodidactic_intelligence: true,  // Self-improvement
  explanation_level: 3                   // Detailed explanations
})

// Option 3: Complete custom configuration
const config = {
  tetrad: {
    use_agentic_intelligence: true,
    use_expository_intelligence: true,
    use_autodidactic_intelligence: true,
    use_domain_extension: true
  },
  expository: {
    explanation_level: 4
  },
  agentic: {
    max_agents_per_problem: 5
  }
}
const result = await sematryx.optimize({
  objective_function: sphere,
  bounds: [[-5, 5], [-5, 5]],
  config: config
})`

  const domainOptimization = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Financial portfolio optimization
const portfolioResult = await sematryx.financial.optimize({
  problem_type: 'portfolio',
  config: {
    assets: ['AAPL', 'GOOGL', 'MSFT', 'TSLA'],
    risk_tolerance: 0.15,
    expected_returns: [0.12, 0.15, 0.10, 0.20]
  },
  max_evaluations: 2000
})

// Healthcare drug discovery
const drugResult = await sematryx.healthcare.optimize({
  problem_type: 'drug_discovery',
  config: {
    target_protein: 'protein_id_123',
    constraints: { toxicity: '< 0.1', solubility: '> 0.5' }
  }
})`

  const errorHandling = `try {
  const result = await sematryx.optimize({
    objective_function: sphere,
    bounds: [[-5, 5], [-5, 5]],
    max_evaluations: 1000
  })
} catch (error) {
  if (error.status === 401) {
    console.error('Invalid API key')
  } else if (error.status === 429) {
    console.error('Rate limit exceeded. Please wait and retry.')
  } else if (error.code === 'OPTIMIZATION_ERROR') {
    console.error('Optimization failed:', error.message)
  } else {
    console.error('Error:', error.message)
  }
}`

  const typescriptCode = `import { Sematryx, OptimizationResult, TetradConfig } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx(process.env.SEMATRYX_API_KEY!)

const result: OptimizationResult = await sematryx.optimize({
  objective_function: (x: number[]) => x.reduce((s, v) => s + v * v, 0),
  bounds: [[-5, 5], [-5, 5]],
  max_evaluations: 1000,
  preset: 'production'
})

const config: TetradConfig = {
  tetrad: {
    use_agentic_intelligence: true,
    use_expository_intelligence: true
  },
  expository: {
    explanation_level: 3
  }
}`

  const advancedFeatures = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// GPU acceleration
const gpuResult = await sematryx.optimize({
  objective_function: complexFunction,
  bounds: Array(100).fill([-10, 10]),  // High-dimensional
  use_gpu_acceleration: true
})

// Visual intelligence
const visualResult = await sematryx.optimize({
  objective_function: landscapeFunction,
  bounds: [[-5, 5], [-5, 5]],
  use_visual_intelligence: true,
  explanation_level: 4
})

// Neural-symbolic reasoning
const neuralResult = await sematryx.optimize({
  objective_function: hybridFunction,
  bounds: [[-5, 5], [-5, 5]],
  use_neural_symbolic: true
})`

  const batchOptimization = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Run multiple optimizations in parallel
const problems = [
  { objective: sphere1, bounds: [[-5, 5], [-5, 5]] },
  { objective: sphere2, bounds: [[-10, 10], [-10, 10]] },
  { objective: sphere3, bounds: [[-3, 3], [-3, 3]] }
]

const results = await Promise.all(
  problems.map(p => 
    sematryx.optimize({
      objective_function: p.objective,
      bounds: p.bounds,
      max_evaluations: 1000
    })
  )
)`

  const identityManagement = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Create client identity
const identity = await sematryx.identity.create({
  email: 'user@example.com',
  organization_id: 'org_123',
  privacy_level: 'aggregated',
  subscription_tier: 'professional'
})

// Get privacy status
const privacyStatus = await sematryx.identity.getPrivacyStatus(identity.client_id)
console.log('Privacy level:', privacyStatus.privacy_level)

// Get usage quotas
const quotas = await sematryx.identity.getQuotas(identity.client_id)
console.log('Optimizations used:', quotas.current_usage.optimizations_per_day)
console.log('Quota:', quotas.api_quotas.optimizations_per_day)

// Configure data sharing
await sematryx.identity.configureSharing(identity.client_id, {
  optimization_results: true,
  performance_metrics: true,
  problem_signatures: false
})`

  const batchOperations = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Submit batch optimization job
const batchJob = await sematryx.batch.submit({
  batch_name: 'portfolio_analysis',
  optimizations: [
    {
      job_name: 'portfolio_1',
      objective_function: 'sphere',
      bounds: [[-5, 5], [-5, 5]],
      max_evaluations: 1000
    },
    {
      job_name: 'portfolio_2',
      objective_function: 'rosenbrock',
  bounds: [[-5, 5], [-5, 5]],
  max_evaluations: 1000
    }
  ],
  parallel_workers: 2
})

// Check batch status
const status = await sematryx.batch.getStatus(batchJob.batch_id)
console.log('Progress:', status.progress_percentage + '%')

// Get batch results
const results = await sematryx.batch.getResults(batchJob.batch_id)
results.job_results.forEach(job => {
  console.log(job.job_name + ':', job.optimal_value)
})`

  const learningSystem = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Train learning model
const trainingData = [
  { problem_type: 'sphere', strategy: 'differential_evolution', success: true },
  { problem_type: 'rosenbrock', strategy: 'shgo', success: true }
]

const trainingResult = await sematryx.learning.train({
  training_data: trainingData,
  model_type: 'cross_problem',
  max_epochs: 100
})

// List trained models
const models = await sematryx.learning.listModels()
models.forEach(model => {
  console.log('Model:', model.model_name, 'Type:', model.model_type)
})

// Get learning insights
const insights = await sematryx.learning.getInsights()
console.log('Total models:', insights.total_models)
console.log('Learning enabled:', insights.learning_enabled)`

  const advancedOptimization = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Multi-objective optimization
const multiObjResult = await sematryx.advanced.multiObjective({
  objectives: ['sphere', 'rosenbrock'],
  bounds: [[-5, 5], [-5, 5]],
  method: 'nsga2',
  max_evaluations: 2000
})

// Get Pareto frontier
multiObjResult.pareto_frontier.forEach(point => {
  console.log('Solution:', point.solution, 'Objectives:', point.objectives)
})

// Sensitivity analysis
const sensitivityResult = await sematryx.advanced.sensitivityAnalysis({
  objective_function: 'sphere',
  bounds: [[-5, 5], [-5, 5]],
  reference_point: [0.0, 0.0],
  analysis_type: 'global'
})

console.log('Sensitivity scores:', sensitivityResult.sensitivity_scores)`

  const contextIntelligence = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Analyze problem context
const context = {
  problem_id: 'prob_123',
  problem_type: 'portfolio_optimization',
  domain: 'financial',
  description: 'Optimize portfolio allocation for risk-return tradeoff',
  parameters: { risk_tolerance: 0.15 }
}

const analysis = await sematryx.context.analyze({
  target_context: context,
  similarity_threshold: 0.7,
  include_recommendations: true
})

// Get similar problems
analysis.similar_problems.forEach(similar => {
  console.log('Similar problem:', similar.problem_id, 'Score:', similar.similarity_score)
})

// Get optimization recommendations
analysis.optimization_recommendations.forEach(rec => {
  console.log('Recommendation:', rec)
})`

  const dataLake = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Create data connection
const connection = await sematryx.dataLake.createConnection({
  connection_type: 's3',
  endpoint_url: 'https://s3.amazonaws.com/bucket',
  credentials: { access_key: '...', secret_key: '...' }
})

// Upload dataset
const dataset = await sematryx.dataLake.uploadDataset({
  dataset_name: 'optimization_results',
  data_type: 'optimization_results',
  data: [...],  // Your data
  description: 'Historical optimization results'
})

// Store optimization data
await sematryx.dataLake.storeOptimizationData({
  experiment_id: 'exp_123',
  problem_definition: { bounds: [[-5, 5], [-5, 5]] },
  optimization_results: [...],
  performance_metrics: { duration: 2.5, evaluations: 1000 }
})

// Query data lake
const queryResult = await sematryx.dataLake.query({
  query_type: 'filter',
  dataset_ids: [dataset.dataset_id],
  filters: { experiment_id: 'exp_123' }
})`

  const analytics = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Submit performance metrics
await sematryx.analytics.submitMetrics({
  metrics: [
    {
      metric_name: 'optimization_duration',
      metric_value: 2.5,
      metric_type: 'time'
    },
    {
      metric_name: 'solution_quality',
      metric_value: 0.95,
      metric_type: 'quality'
    }
  ],
  source_system: 'production'
})

// Generate performance report
const report = await sematryx.analytics.generateReport({
  report_type: 'comprehensive',
  metric_categories: ['time', 'quality', 'efficiency'],
  time_range: { start: '2024-01-01', end: '2024-01-31' }
})

// Get performance insights
const insights = await sematryx.analytics.getInsights()
insights.forEach(insight => {
  console.log(insight.insight_type + ':', insight.description)
})

// Get metrics summary
const summary = await sematryx.analytics.getMetricsSummary()
console.log('Average duration:', summary.average_duration)
console.log('Success rate:', summary.success_rate)`

  const configuration = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Get API configuration
const config = await sematryx.config.get()
console.log('API Version:', config.version)
console.log('Environment:', config.environment)

// Get available features
const features = await sematryx.config.getFeatures()
console.log('Optimization available:', features.optimization.available)
console.log('Learning system:', features.ai_capabilities.learning_system)

// Get operational limits
const limits = await sematryx.config.getLimits()
console.log('Max evaluations:', limits.optimization.max_evaluations)
console.log('Max variables:', limits.optimization.max_variables)`

  const healthChecks = `import { Sematryx } from '@sematryx/javascript-sdk'

const sematryx = new Sematryx('your-api-key')

// Basic health check
const health = await sematryx.health.check()
console.log('Status:', health.status)
console.log('Uptime:', health.uptime, 'seconds')

// Detailed health check
const detailedHealth = await sematryx.health.detailed()
console.log('Memory usage:', detailedHealth.memory_usage + '%')
console.log('CPU usage:', detailedHealth.cpu_usage + '%')
console.log('Components:', detailedHealth.components)`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          JavaScript SDK
        </h1>
        <p className="text-xl text-gray-600">
          Official JavaScript/TypeScript SDK for Sematryx. Works in Node.js, browsers, and modern JavaScript environments.
        </p>
      </div>

      <div className="space-y-12">
        <CollapsibleSection title="Installation" defaultOpen={true}>
          <CodeBlock
            code={installCode}
            language="bash"
            title="Install the JavaScript SDK"
          />
          <p className="text-gray-700 mt-4">
            The SDK requires Node.js 16+ or a modern browser with ES6+ support.
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="Quick Start" defaultOpen={true}>
          <p className="text-gray-700 mb-4">
            Initialize the SDK with your API key and start optimizing:
          </p>
          <CodeBlock
            code={basicUsage}
            language="javascript"
            title="Basic usage example"
          />
        </CollapsibleSection>

        <CollapsibleSection title="AEAO Tetrad Configuration">
          <p className="text-gray-700 mb-4">
            Configure the four pillars of AEAO intelligence:
          </p>
          <CodeBlock
            code={tetradConfig}
            language="javascript"
            title="Tetrad configuration examples"
          />
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">The AEAO Tetrad</h3>
            <ul className="space-y-2 text-purple-800">
              <li><strong>🤖 Agentic Intelligence:</strong> Multi-agent coordination for strategy selection</li>
              <li><strong>📖 Expository Intelligence:</strong> Explainable results (levels 0-5)</li>
              <li><strong>🧠 Autodidactic Intelligence:</strong> Self-improvement through learning</li>
              <li><strong>🏗️ Domain Extension:</strong> Business domain libraries (enabled by default)</li>
            </ul>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Domain-Specific Optimization">
          <p className="text-gray-700 mb-4">
            Use specialized domain libraries for industry-specific problems:
          </p>
          <CodeBlock
            code={domainOptimization}
            language="javascript"
            title="Domain-specific optimization"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Advanced Features">
          <p className="text-gray-700 mb-4">
            Enable advanced capabilities for complex optimization problems:
          </p>
          <CodeBlock
            code={advancedFeatures}
            language="javascript"
            title="Advanced features"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Batch Optimization">
          <p className="text-gray-700 mb-4">
            Run multiple optimizations in parallel:
          </p>
          <CodeBlock
            code={batchOptimization}
            language="javascript"
            title="Batch optimization"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Error Handling">
          <p className="text-gray-700 mb-4">
            The SDK throws errors for failed requests. Always handle errors appropriately:
          </p>
          <CodeBlock
            code={errorHandling}
            language="javascript"
            title="Error handling"
          />
        </CollapsibleSection>

        <CollapsibleSection title="TypeScript Support">
          <p className="text-gray-700 mb-4">
            The SDK includes full TypeScript definitions for type safety:
          </p>
          <CodeBlock
            code={typescriptCode}
            language="typescript"
            title="TypeScript usage"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Identity Management">
          <p className="text-gray-700 mb-4">
            Manage client identity, privacy settings, and usage quotas:
          </p>
          <CodeBlock
            code={identityManagement}
            language="javascript"
            title="Identity management examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Batch Operations">
          <p className="text-gray-700 mb-4">
            Submit and manage batch optimization jobs:
          </p>
          <CodeBlock
            code={batchOperations}
            language="javascript"
            title="Batch operations examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Learning System">
          <p className="text-gray-700 mb-4">
            Train models and get learning insights:
          </p>
          <CodeBlock
            code={learningSystem}
            language="javascript"
            title="Learning system examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Advanced Optimization">
          <p className="text-gray-700 mb-4">
            Multi-objective optimization and sensitivity analysis:
          </p>
          <CodeBlock
            code={advancedOptimization}
            language="javascript"
            title="Advanced optimization examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Context Intelligence">
          <p className="text-gray-700 mb-4">
            Analyze problem context and get recommendations:
          </p>
          <CodeBlock
            code={contextIntelligence}
            language="javascript"
            title="Context intelligence examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Data Lake">
          <p className="text-gray-700 mb-4">
            Store and query optimization data:
          </p>
          <CodeBlock
            code={dataLake}
            language="javascript"
            title="Data lake examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Analytics">
          <p className="text-gray-700 mb-4">
            Submit metrics and generate performance reports:
          </p>
          <CodeBlock
            code={analytics}
            language="javascript"
            title="Analytics examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Configuration & Health">
          <p className="text-gray-700 mb-4">
            Get API configuration and check system health:
          </p>
          <CodeBlock
            code={configuration}
            language="javascript"
            title="Configuration examples"
          />
          <CodeBlock
            code={healthChecks}
            language="javascript"
            title="Health check examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="API Reference">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Sematryx Class</h3>
              <ul className="space-y-2 text-gray-700">
                <li><code className="bg-gray-200 px-2 py-1 rounded">new Sematryx(apiKey, options?)</code> - Initialize the SDK</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.optimize(config)</code> - Run an optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.financial</code> - Financial domain optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.healthcare</code> - Healthcare domain optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.supplyChain</code> - Supply chain optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.identity</code> - Identity management</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.batch</code> - Batch operations</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.learning</code> - Learning system</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.advanced</code> - Advanced optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.context</code> - Context intelligence</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.dataLake</code> - Data lake operations</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.analytics</code> - Analytics and metrics</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.config</code> - Configuration</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">sematryx.health</code> - Health checks</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimization Config</h3>
              <ul className="space-y-2 text-gray-700">
                <li><code className="bg-gray-200 px-2 py-1 rounded">objective_function</code> - Function to optimize (required)</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">bounds</code> - Search bounds (required)</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">max_evaluations</code> - Max function evaluations</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">preset</code> - Preset configuration</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">use_agentic_intelligence</code> - Enable agentic pillar</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">use_expository_intelligence</code> - Enable expository pillar</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">use_autodidactic_intelligence</code> - Enable autodidactic pillar</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">explanation_level</code> - Explanation detail (0-5)</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">use_gpu_acceleration</code> - Enable GPU</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">use_visual_intelligence</code> - Enable visual analysis</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Configuration Options</h3>
              <ul className="space-y-2 text-gray-700">
                <li><code className="bg-gray-200 px-2 py-1 rounded">apiUrl</code> - Custom API base URL (default: https://api.sematryx.com)</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">timeout</code> - Request timeout in milliseconds (default: 30000)</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">retries</code> - Number of retry attempts (default: 3)</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">retryDelay</code> - Delay between retries in milliseconds (default: 1000)</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  )
}
