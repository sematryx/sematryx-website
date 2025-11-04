import CodeBlock from '@/components/CodeBlock'

export default function DocsPage() {
  const quickStartCode = `curl -X POST https://api.aeao.com/v1/automation \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "data-processor",
    "trigger": "webhook",
    "actions": [
      {
        "type": "transform",
        "config": {
          "input_format": "json",
          "output_format": "csv"
        }
      }
    ]
  }'`

  const jsExample = `import { AEAO } from '@aeao/javascript-sdk'

const aeao = new AEAO('YOUR_API_KEY')

// Create an automation
const automation = await aeao.automations.create({
  name: 'data-processor',
  trigger: 'webhook',
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

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Quick Start Guide
        </h1>
        <p className="text-xl text-gray-600">
          Get started with AEAO in minutes. This guide will walk you through creating your first automation.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Get Your API Key
          </h2>
          <p className="text-gray-700 mb-4">
            First, you'll need to get your API key from the{' '}
            <a href="/api-keys" className="text-primary-600 hover:text-primary-700 underline">
              API Keys page
            </a>
            . Choose a plan that fits your needs and complete the checkout process.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Make Your First API Call
          </h2>
          <p className="text-gray-700 mb-4">
            Once you have your API key, you can start making requests to the AEAO API. 
            Here's a simple example using curl:
          </p>
          <CodeBlock
            code={quickStartCode}
            language="bash"
            title="Create an automation with curl"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Using the JavaScript SDK
          </h2>
          <p className="text-gray-700 mb-4">
            For JavaScript/Node.js applications, we recommend using our official SDK:
          </p>
          <CodeBlock
            code="npm install @aeao/javascript-sdk"
            language="bash"
            title="Install the JavaScript SDK"
          />
          <CodeBlock
            code={jsExample}
            language="javascript"
            title="Using the JavaScript SDK"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Key Concepts
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Understanding Automations</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>Triggers:</strong> Events that start your automation (webhooks, schedules, manual)</li>
              <li><strong>Actions:</strong> Operations performed when triggered (transform, send, analyze)</li>
              <li><strong>Workflows:</strong> Chains of actions that process data sequentially</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Explore Tutorials
              </h3>
              <p className="text-gray-600 mb-4">
                Follow step-by-step tutorials to build real-world automations.
              </p>
              <a 
                href="/tutorials" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                View Tutorials →
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                API Reference
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed documentation for all API endpoints and parameters.
              </p>
              <a 
                href="/docs/api/automation" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                API Reference →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}