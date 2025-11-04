import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function GettingStartedTutorial() {
  const setupCode = `curl -X POST https://api.aeao.com/v1/automations \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "hello-world-automation",
    "description": "My first AEAO automation",
    "trigger": {
      "type": "manual"
    },
    "actions": [
      {
        "type": "log",
        "config": {
          "message": "Hello, World from AEAO!"
        }
      }
    ]
  }'`

  const responseCode = `{
  "id": "auto_1234567890",
  "name": "hello-world-automation",
  "description": "My first AEAO automation",
  "status": "active",
  "created_at": "2024-01-01T00:00:00Z",
  "trigger": {
    "type": "manual",
    "id": "trigger_1234567890"
  },
  "actions": [
    {
      "id": "action_1234567890",
      "type": "log",
      "config": {
        "message": "Hello, World from AEAO!"
      }
    }
  ]
}`

  const triggerCode = `curl -X POST https://api.aeao.com/v1/automations/auto_1234567890/trigger \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`

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
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              Beginner
            </span>
            <span className="text-gray-500">• 15 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Getting Started with AEAO
          </h1>
          <p className="text-xl text-gray-600">
            In this tutorial, you'll create your first automation and learn the basic concepts of AEAO.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What You'll Build
            </h2>
            <p className="text-gray-700 mb-4">
              We'll create a simple "Hello World" automation that logs a message when triggered. 
              This will introduce you to the core concepts of:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Creating automations</li>
              <li>Configuring triggers</li>
              <li>Adding actions</li>
              <li>Running automations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Prerequisites
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Before You Start</h3>
              <ul className="space-y-2 text-blue-800">
                <li>✅ An AEAO account with an active API key</li>
                <li>✅ Basic familiarity with REST APIs</li>
                <li>✅ curl or similar HTTP client installed</li>
              </ul>
              <p className="mt-4 text-blue-800">
                Don't have an API key yet? 
                <Link href="/api-keys" className="underline ml-1">Get one here</Link>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 1: Create Your First Automation
            </h2>
            <p className="text-gray-700 mb-4">
              Let's start by creating a simple automation. Replace <code>YOUR_API_KEY</code> with your actual API key:
            </p>
            <CodeBlock
              code={setupCode}
              language="bash"
              title="Create your first automation"
            />
            <p className="text-gray-700 mt-4">
              This creates an automation with:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
              <li><strong>Manual trigger:</strong> You'll start it manually</li>
              <li><strong>Log action:</strong> Outputs a message to the logs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 2: Understanding the Response
            </h2>
            <p className="text-gray-700 mb-4">
              When successful, you'll receive a response like this:
            </p>
            <CodeBlock
              code={responseCode}
              language="json"
              title="Automation creation response"
            />
            <p className="text-gray-700 mt-4">
              Note the <code>id</code> field - you'll need this to trigger and manage your automation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 3: Trigger Your Automation
            </h2>
            <p className="text-gray-700 mb-4">
              Now let's run the automation using the ID from the response:
            </p>
            <CodeBlock
              code={triggerCode}
              language="bash"
              title="Trigger your automation"
            />
            <p className="text-gray-700 mt-4">
              This will execute the automation and you should see "Hello, World from AEAO!" in your automation logs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 4: Check the Results
            </h2>
            <p className="text-gray-700 mb-4">
              You can view the execution logs and results in several ways:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  View Execution History
                </h3>
                <p className="text-gray-600 mb-4">
                  See all runs of your automation with detailed logs and status information.
                </p>
                <code className="text-sm bg-gray-100 p-2 rounded block">
                  GET /v1/automations/auto_1234567890/executions
                </code>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Real-time Monitoring
                </h3>
                <p className="text-gray-600 mb-4">
                  Monitor your automations in real-time using webhooks or polling.
                </p>
                <code className="text-sm bg-gray-100 p-2 rounded block">
                  GET /v1/automations/auto_1234567890/status
                </code>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🎉 Congratulations!
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-green-800 mb-4">
                You've successfully created and run your first AEAO automation! 
                You now understand the basic workflow of creating automations with triggers and actions.
              </p>
              <h3 className="text-lg font-semibold text-green-900 mb-3">What's Next?</h3>
              <div className="space-y-2">
                <Link 
                  href="/tutorials/data-transformation" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Build a data transformation pipeline
                </Link>
                <Link 
                  href="/tutorials/webhook-automation" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Learn about webhook triggers
                </Link>
                <Link 
                  href="/docs" 
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