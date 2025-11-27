import CodeBlock from '@/components/CodeBlock'

export default function JavaScriptSDKPage() {
  const installCode = `npm install @aeao/javascript-sdk`

  const basicUsage = `import { AEAO } from '@aeao/javascript-sdk'

const aeao = new AEAO('your-api-key')

// Create an automation
const automation = await aeao.automations.create({
  name: 'data-processor',
  trigger: {
    type: 'webhook',
    config: {
      path: '/webhook/data-processor'
    }
  },
  actions: [
    {
      type: 'transform',
      config: {
        input_format: 'json',
        output_format: 'csv'
      }
    }
  ]
})

console.log('Automation created:', automation.id)`

  const optimizationCode = `// Run an optimization
const result = await aeao.optimize({
  objective_function: (x) => {
    return x.reduce((sum, val) => sum + val * val, 0)
  },
  bounds: [[-5, 5], [-5, 5], [-5, 5]],
  max_evaluations: 1000
})

console.log('Best solution:', result.best_solution)
console.log('Best fitness:', result.best_fitness)`

  const listCode = `// List all automations
const automations = await aeao.automations.list({
  status: 'active',
  limit: 20
})

console.log('Found ' + automations.length + ' automations')`

  const triggerCode = `// Trigger an automation
const execution = await aeao.automations.trigger('auto_1234567890', {
  input_data: {
    records: [1, 2, 3, 4, 5]
  }
})

console.log('Execution ID:', execution.id)`

  const errorHandling = `try {
  const automation = await aeao.automations.create({
    name: 'my-automation',
    // ... config
  })
} catch (error) {
  if (error.status === 401) {
    console.error('Invalid API key')
  } else if (error.status === 429) {
    console.error('Rate limit exceeded')
  } else {
    console.error('Error:', error.message)
  }
}`

  const typescriptCode = `import { AEAO, Automation, OptimizationResult } from '@aeao/javascript-sdk'

const aeao = new AEAO(process.env.AEAO_API_KEY!)

const automation: Automation = await aeao.automations.create({
  name: 'typed-automation',
  trigger: { type: 'manual' },
  actions: []
})

const result: OptimizationResult = await aeao.optimize({
  objective_function: (x: number[]) => x.reduce((s, v) => s + v * v, 0),
  bounds: [[-5, 5], [-5, 5]],
  max_evaluations: 1000
})`

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
            Initialize the SDK with your API key and start making requests:
          </p>
          <CodeBlock
            code={basicUsage}
            language="javascript"
            title="Basic usage example"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Optimization
          </h2>
          <p className="text-gray-700 mb-4">
            Run optimization problems directly from JavaScript:
          </p>
          <CodeBlock
            code={optimizationCode}
            language="javascript"
            title="Running optimizations"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Automation Management
          </h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            List Automations
          </h3>
          <CodeBlock
            code={listCode}
            language="javascript"
            title="List automations"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            Trigger Automation
          </h3>
          <CodeBlock
            code={triggerCode}
            language="javascript"
            title="Trigger an automation"
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
                <li><code className="bg-gray-200 px-2 py-1 rounded">aeao.automations</code> - Automation management</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">aeao.analytics</code> - Analytics and metrics</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Automations</h3>
              <ul className="space-y-2 text-gray-700">
                <li><code className="bg-gray-200 px-2 py-1 rounded">create(config)</code> - Create a new automation</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">list(options?)</code> - List automations</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">get(id)</code> - Get automation details</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">update(id, config)</code> - Update an automation</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">delete(id)</code> - Delete an automation</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">trigger(id, data?)</code> - Trigger an automation</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Configuration Options
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">SDK Options</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>apiUrl:</strong> Custom API base URL (default: https://api.aeao.com)</li>
              <li><strong>timeout:</strong> Request timeout in milliseconds (default: 30000)</li>
              <li><strong>retries:</strong> Number of retry attempts (default: 3)</li>
              <li><strong>retryDelay:</strong> Delay between retries in milliseconds (default: 1000)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

