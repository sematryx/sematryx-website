import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function WebhookAutomationTutorial() {
  const createWebhook = `curl -X POST https://api.aeao.com/v1/automations \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "webhook-processor",
    "trigger": {
      "type": "webhook",
      "config": {
        "path": "/webhook/process",
        "method": "POST"
      }
    },
    "actions": [
      {
        "type": "log",
        "config": {
          "message": "Received webhook: {{trigger.body}}"
        }
      },
      {
        "type": "transform",
        "config": {
          "input_format": "json",
          "output_format": "json"
        }
      }
    ]
  }'`

  const webhookUrl = `https://api.aeao.com/webhook/process?token=YOUR_WEBHOOK_TOKEN`

  const sendWebhook = `curl -X POST https://api.aeao.com/webhook/process?token=YOUR_WEBHOOK_TOKEN \\
  -H "Content-Type: application/json" \\
  -d '{
    "event": "user_signup",
    "user_id": "user_123",
    "email": "user@example.com",
    "timestamp": "2024-01-01T00:00:00Z"
  }'`

  const pythonExample = `from aeao import AEAO

client = AEAO(api_key='your-api-key')

# Create webhook-triggered automation
automation = client.automations.create(
    name='webhook-processor',
    trigger={
        'type': 'webhook',
        'config': {
            'path': '/webhook/process',
            'method': 'POST'
        }
    },
    actions=[
        {
            'type': 'log',
            'config': {
                'message': 'Received webhook'
            }
        }
    ]
)

print(f'Webhook URL: {automation.trigger.webhook_url}')`

  const verifyWebhook = `import hmac
import hashlib

def verify_webhook_signature(payload, signature, secret):
    expected = hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(signature, expected)`

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
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
              Intermediate
            </span>
            <span className="text-gray-500">• 25 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Webhook-Triggered Automations
          </h1>
          <p className="text-xl text-gray-600">
            Create automations that respond to external webhook events in real-time.
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
              <li>Create automations triggered by webhooks</li>
              <li>Configure webhook endpoints and security</li>
              <li>Process incoming webhook data</li>
              <li>Verify webhook signatures for security</li>
              <li>Handle different webhook payload formats</li>
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
                <li>✅ Understanding of HTTP webhooks</li>
                <li>✅ Ability to send HTTP POST requests (curl, Postman, or similar)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 1: Create Webhook Automation
            </h2>
            <p className="text-gray-700 mb-4">
              Create an automation with a webhook trigger:
            </p>
            <CodeBlock
              code={createWebhook}
              language="bash"
              title="Create webhook-triggered automation"
            />
            <p className="text-gray-700 mt-4">
              After creation, you'll receive a webhook URL that you can use to trigger the automation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 2: Get Your Webhook URL
            </h2>
            <p className="text-gray-700 mb-4">
              Retrieve the webhook URL from the automation response:
            </p>
            <CodeBlock
              code={webhookUrl}
              language="bash"
              title="Webhook URL format"
            />
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Security Note</h3>
              <p className="text-yellow-800">
                The webhook token is unique to your automation and should be kept secret. 
                Anyone with the token can trigger your automation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 3: Trigger the Webhook
            </h2>
            <p className="text-gray-700 mb-4">
              Send a POST request to your webhook URL:
            </p>
            <CodeBlock
              code={sendWebhook}
              language="bash"
              title="Send webhook request"
            />
            <p className="text-gray-700 mt-4">
              The automation will process the webhook payload and execute its actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 4: Using the Python SDK
            </h2>
            <p className="text-gray-700 mb-4">
              You can also create and manage webhook automations using the Python SDK:
            </p>
            <CodeBlock
              code={pythonExample}
              language="python"
              title="Create webhook automation with Python"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 5: Webhook Security
            </h2>
            <p className="text-gray-700 mb-4">
              For production use, always verify webhook signatures:
            </p>
            <CodeBlock
              code={verifyWebhook}
              language="python"
              title="Verify webhook signature"
            />
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Security Best Practices</h3>
              <ul className="space-y-2 text-red-800">
                <li>Always verify webhook signatures</li>
                <li>Use HTTPS for webhook URLs</li>
                <li>Rotate webhook tokens regularly</li>
                <li>Implement rate limiting on webhook endpoints</li>
                <li>Log all webhook requests for auditing</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Event Processing
                </h3>
                <p className="text-gray-700">
                  Process events from external systems like payment processors, CRM systems, or analytics platforms.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Data Synchronization
                </h3>
                <p className="text-gray-700">
                  Keep data in sync between different systems when changes occur.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Notifications
                </h3>
                <p className="text-gray-700">
                  Trigger notifications or alerts based on external events.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Workflow Automation
                </h3>
                <p className="text-gray-700">
                  Automate business workflows that span multiple systems.
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
                You've learned how to create webhook-triggered automations! 
                Continue learning:
              </p>
              <div className="space-y-2">
                <Link 
                  href="/tutorials/data-transformation" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Build a data transformation pipeline
                </Link>
                <Link 
                  href="/tutorials/monitoring-alerts" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Set up monitoring and alerts
                </Link>
                <Link 
                  href="/docs/api/webhooks" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Read the webhooks API documentation
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

