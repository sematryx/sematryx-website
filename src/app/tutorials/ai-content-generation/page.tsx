import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function AIContentGenerationTutorial() {
  const createAIAutomation = `curl -X POST https://api.sematryx.com/v1/automations \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "ai-content-generator",
    "trigger": {
      "type": "webhook"
    },
    "actions": [
      {
        "type": "ai_generate",
        "config": {
          "model": "claude-3-sonnet",
          "prompt": "Generate a product description for: {{trigger.body.product_name}}",
          "max_tokens": 500,
          "temperature": 0.7
        }
      },
      {
        "type": "store",
        "config": {
          "destination": "database",
          "table": "product_descriptions"
        }
      }
    ]
  }'`

  const pythonExample = `from sematryx import SematryxClient

client = SematryxClient(api_key='your-api-key')

# Create AI content generation automation
automation = client.automations.create(
    name='ai-content-generator',
    trigger={'type': 'webhook'},
    actions=[
        {
            'type': 'ai_generate',
            'config': {
                'model': 'claude-3-sonnet',
                'prompt': 'Generate a product description',
                'max_tokens': 500
            }
        }
    ]
)`

  const batchGeneration = `# Generate content for multiple products
products = ['Product A', 'Product B', 'Product C']

for product in products:
    result = client.automations.trigger(
        automation_id='auto_1234567890',
        input_data={'product_name': product}
    )
    print(f'Generated content for {product}')`

  return (
    <main>
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href="/tutorials" 
            className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-flex items-center"
          >
            ← Back to Tutorials
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
              Advanced
            </span>
            <span className="text-gray-500">• 45 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Content Generation
          </h1>
          <p className="text-xl text-gray-600">
            Use AI models to automatically generate and process content with AEAO automations.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What You'll Build
            </h2>
            <p className="text-gray-700 mb-4">
              In this tutorial, you'll learn how to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Create automations that use AI models for content generation</li>
              <li>Configure AI model parameters and prompts</li>
              <li>Process and store AI-generated content</li>
              <li>Batch generate content for multiple items</li>
              <li>Integrate AI content generation into your workflows</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Prerequisites
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Before You Start</h3>
              <ul className="space-y-2 text-blue-800">
                <li>✅ A Sematryx account with AI features enabled</li>
                <li>✅ Understanding of AI model concepts</li>
                <li>✅ Familiarity with prompt engineering</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 1: Create AI Content Generation Automation
            </h2>
            <p className="text-gray-700 mb-4">
              Create an automation that uses AI models to generate content:
            </p>
            <CodeBlock
              code={createAIAutomation}
              language="bash"
              title="Create AI content generation automation"
            />
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">AI Configuration Options</h3>
              <ul className="space-y-2 text-blue-800">
                <li><strong>model:</strong> AI model to use (claude-3-sonnet, gpt-4, etc.)</li>
                <li><strong>prompt:</strong> The prompt template for content generation</li>
                <li><strong>max_tokens:</strong> Maximum length of generated content</li>
                <li><strong>temperature:</strong> Creativity level (0.0-1.0)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 2: Using the Python SDK
            </h2>
            <p className="text-gray-700 mb-4">
              Create AI automations programmatically:
            </p>
            <CodeBlock
              code={pythonExample}
              language="python"
              title="Create AI automation with Python"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 3: Batch Content Generation
            </h2>
            <p className="text-gray-700 mb-4">
              Generate content for multiple items efficiently:
            </p>
            <CodeBlock
              code={batchGeneration}
              language="python"
              title="Batch content generation"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Product Descriptions
                </h3>
                <p className="text-gray-700">
                  Automatically generate SEO-optimized product descriptions for e-commerce catalogs.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Content Summarization
                </h3>
                <p className="text-gray-700">
                  Summarize long-form content into concise summaries for newsletters or reports.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Email Personalization
                </h3>
                <p className="text-gray-700">
                  Generate personalized email content based on user data and preferences.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Social Media Posts
                </h3>
                <p className="text-gray-700">
                  Create engaging social media content tailored to different platforms and audiences.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🎉 Next Steps
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-green-800 mb-4">
                You've learned how to use AI for content generation! 
                Explore more:
              </p>
              <div className="space-y-2">
                <Link 
                  href="/tutorials/enterprise-workflows" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Learn enterprise workflow patterns
                </Link>
                <Link 
                  href="/docs/api/automation" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Explore the full API documentation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}

