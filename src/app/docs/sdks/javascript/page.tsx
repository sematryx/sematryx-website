import CodeBlock from '@/components/CodeBlock'

export default function JavaScriptSDKPage() {
  const installCode = `npm install @aeao/javascript-sdk`

  const basicUsage = `import { AEAO } from '@aeao/javascript-sdk'

const aeao = new AEAO('your-api-key')

// Define objective function
const sphere = (x) => {
  return x.reduce((sum, val) => sum + val * val, 0)
}

// Run optimization
const result = await aeao.optimize({
  objective_function: sphere,
  bounds: [[-5, 5], [-5, 5]],
  max_evaluations: 1000
})

console.log('Best solution:', result.best_solution)
console.log('Best fitness:', result.best_fitness)`

  const tetradConfig = `import { AEAO } from '@aeao/javascript-sdk'

const aeao = new AEAO('your-api-key')

// Option 1: Use preset configuration
const result = await aeao.optimize({
  objective_function: sphere,
  bounds: [[-5, 5], [-5, 5]],
  preset: 'production'  // development, production, research, enterprise, minimal
})

// Option 2: Enable specific tetrad pillars
const result = await aeao.optimize({
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
const result = await aeao.optimize({
  objective_function: sphere,
  bounds: [[-5, 5], [-5, 5]],
  config: config
})`

  const domainOptimization = `import { AEAO } from '@aeao/javascript-sdk'

const aeao = new AEAO('your-api-key')

// Financial portfolio optimization
const portfolioResult = await aeao.financial.optimize({
  problem_type: 'portfolio',
  config: {
    assets: ['AAPL', 'GOOGL', 'MSFT', 'TSLA'],
    risk_tolerance: 0.15,
    expected_returns: [0.12, 0.15, 0.10, 0.20]
  },
  max_evaluations: 2000
})

// Healthcare drug discovery
const drugResult = await aeao.healthcare.optimize({
  problem_type: 'drug_discovery',
  config: {
    target_protein: 'protein_id_123',
    constraints: { toxicity: '< 0.1', solubility: '> 0.5' }
  }
})`

  const errorHandling = `try {
  const result = await aeao.optimize({
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

  const typescriptCode = `import { AEAO, OptimizationResult, TetradConfig } from '@aeao/javascript-sdk'

const aeao = new AEAO(process.env.AEAO_API_KEY!)

const result: OptimizationResult = await aeao.optimize({
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

  const advancedFeatures = `import { AEAO } from '@aeao/javascript-sdk'

const aeao = new AEAO('your-api-key')

// GPU acceleration
const gpuResult = await aeao.optimize({
  objective_function: complexFunction,
  bounds: Array(100).fill([-10, 10]),  // High-dimensional
  use_gpu_acceleration: true
})

// Visual intelligence
const visualResult = await aeao.optimize({
  objective_function: landscapeFunction,
  bounds: [[-5, 5], [-5, 5]],
  use_visual_intelligence: true,
  explanation_level: 4
})

// Neural-symbolic reasoning
const neuralResult = await aeao.optimize({
  objective_function: hybridFunction,
  bounds: [[-5, 5], [-5, 5]],
  use_neural_symbolic: true
})`

  const batchOptimization = `import { AEAO } from '@aeao/javascript-sdk'

const aeao = new AEAO('your-api-key')

// Run multiple optimizations in parallel
const problems = [
  { objective: sphere1, bounds: [[-5, 5], [-5, 5]] },
  { objective: sphere2, bounds: [[-10, 10], [-10, 10]] },
  { objective: sphere3, bounds: [[-3, 3], [-3, 3]] }
]

const results = await Promise.all(
  problems.map(p => 
    aeao.optimize({
      objective_function: p.objective,
      bounds: p.bounds,
      max_evaluations: 1000
    })
  )
)`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          JavaScript SDK
        </h1>
        <p className="text-xl text-gray-600">
          Official JavaScript/TypeScript SDK for AEAO. Works in Node.js, browsers, and modern JavaScript environments.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Installation
          </h2>
          <CodeBlock
            code={installCode}
            language="bash"
            title="Install the JavaScript SDK"
          />
          <p className="text-gray-700 mt-4">
            The SDK requires Node.js 16+ or a modern browser with ES6+ support.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Quick Start
          </h2>
          <p className="text-gray-700 mb-4">
            Initialize the SDK with your API key and start optimizing:
          </p>
          <CodeBlock
            code={basicUsage}
            language="javascript"
            title="Basic usage example"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            AEAO Tetrad Configuration
          </h2>
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
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Domain-Specific Optimization
          </h2>
          <p className="text-gray-700 mb-4">
            Use specialized domain libraries for industry-specific problems:
          </p>
          <CodeBlock
            code={domainOptimization}
            language="javascript"
            title="Domain-specific optimization"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Advanced Features
          </h2>
          <p className="text-gray-700 mb-4">
            Enable advanced capabilities for complex optimization problems:
          </p>
          <CodeBlock
            code={advancedFeatures}
            language="javascript"
            title="Advanced features"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Batch Optimization
          </h2>
          <p className="text-gray-700 mb-4">
            Run multiple optimizations in parallel:
          </p>
          <CodeBlock
            code={batchOptimization}
            language="javascript"
            title="Batch optimization"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Error Handling
          </h2>
          <p className="text-gray-700 mb-4">
            The SDK throws errors for failed requests. Always handle errors appropriately:
          </p>
          <CodeBlock
            code={errorHandling}
            language="javascript"
            title="Error handling"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            TypeScript Support
          </h2>
          <p className="text-gray-700 mb-4">
            The SDK includes full TypeScript definitions for type safety:
          </p>
          <CodeBlock
            code={typescriptCode}
            language="typescript"
            title="TypeScript usage"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            API Reference
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AEAO Class</h3>
              <ul className="space-y-2 text-gray-700">
                <li><code className="bg-gray-200 px-2 py-1 rounded">new AEAO(apiKey, options?)</code> - Initialize the SDK</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">aeao.optimize(config)</code> - Run an optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">aeao.financial</code> - Financial domain optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">aeao.healthcare</code> - Healthcare domain optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">aeao.supplyChain</code> - Supply chain optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">aeao.analytics</code> - Analytics and metrics</li>
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
                <li><code className="bg-gray-200 px-2 py-1 rounded">apiUrl</code> - Custom API base URL (default: https://api.aeao.com)</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">timeout</code> - Request timeout in milliseconds (default: 30000)</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">retries</code> - Number of retry attempts (default: 3)</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">retryDelay</code> - Delay between retries in milliseconds (default: 1000)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
