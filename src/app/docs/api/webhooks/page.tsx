import CodeBlock from '@/components/CodeBlock'

export default function WebhooksPage() {
  const createWebhook = `curl -X POST https://api.sematryx.com/v1/webhooks \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-app.com/webhooks/aeao",
    "events": ["automation.completed", "automation.failed"],
    "secret": "your-webhook-secret"
  }'`

  const webhookPayload = `{
  "id": "evt_1234567890",
  "type": "automation.completed",
  "created_at": "2024-01-01T00:00:00Z",
  "data": {
    "automation_id": "auto_1234567890",
    "execution_id": "exec_1234567890",
    "status": "completed",
    "result": {
      "output": "processed_data.csv",
      "records_processed": 1250
    }
  }
}`

  const verifySignature = `import crypto from 'crypto'

function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret)
  hmac.update(JSON.stringify(payload))
  const expectedSignature = hmac.digest('hex')
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )
}`

  const pythonVerify = `import hmac
import hashlib

def verify_webhook_signature(payload, signature, secret):
    expected_signature = hmac.new(
        secret.encode('utf-8'),
        payload.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(signature, expected_signature)`

  const events = [
    { name: "automation.completed", description: "Triggered when an automation execution completes successfully" },
    { name: "automation.failed", description: "Triggered when an automation execution fails" },
    { name: "automation.started", description: "Triggered when an automation execution starts" },
    { name: "automation.paused", description: "Triggered when an automation is paused" },
    { name: "automation.resumed", description: "Triggered when a paused automation is resumed" },
    { name: "optimization.completed", description: "Triggered when an optimization job completes" },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Webhooks
        </h1>
        <p className="text-xl text-gray-400">
          Receive real-time notifications about events in your Sematryx account via webhooks.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Overview
          </h2>
          <p className="text-gray-400 mb-4">
            Webhooks allow you to receive real-time notifications when events occur in your Sematryx account. 
            Instead of polling the API, Sematryx will send HTTP POST requests to your specified URL when events happen.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Benefits</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Real-time event notifications</li>
              <li>• Reduced API polling overhead</li>
              <li>• More efficient resource usage</li>
              <li>• Better integration with your systems</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Creating a Webhook
          </h2>
          <p className="text-gray-400 mb-4">
            Create a webhook endpoint to receive notifications:
          </p>
          <CodeBlock
            code={createWebhook}
            language="bash"
            title="POST /v1/webhooks"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Request Body</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>url</strong> (required): HTTPS URL to receive webhook events</li>
              <li><strong>events</strong> (required): Array of event types to subscribe to</li>
              <li><strong>secret</strong> (optional): Secret for verifying webhook signatures</li>
              <li><strong>active</strong> (optional): Whether the webhook is active (default: true)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Webhook Payload
          </h2>
          <p className="text-gray-400 mb-4">
            All webhook requests are sent as HTTP POST requests with JSON payloads:
          </p>
          <CodeBlock
            code={webhookPayload}
            language="json"
            title="Example webhook payload"
          />
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Payload Structure</h3>
            <ul className="space-y-2 text-green-800">
              <li><strong>id:</strong> Unique event identifier</li>
              <li><strong>type:</strong> Event type (e.g., "automation.completed")</li>
              <li><strong>created_at:</strong> ISO 8601 timestamp of when the event occurred</li>
              <li><strong>data:</strong> Event-specific data object</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Verifying Webhook Signatures
          </h2>
          <p className="text-gray-400 mb-4">
            Always verify webhook signatures to ensure requests are from Sematryx. The signature is sent in the <code className="bg-gray-800 text-gray-300 px-2 py-1 rounded">X-Sematryx-Signature</code> header.
          </p>
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">
            Node.js Example
          </h3>
          <CodeBlock
            code={verifySignature}
            language="javascript"
            title="Verify webhook signature in Node.js"
          />
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">
            Python Example
          </h3>
          <CodeBlock
            code={pythonVerify}
            language="python"
            title="Verify webhook signature in Python"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Available Events
          </h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  <code className="bg-gray-200 px-2 py-1 rounded text-sm">{event.name}</code>
                </h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Webhook Retries
          </h2>
          <p className="text-gray-400 mb-4">
            If your webhook endpoint returns a non-2xx status code, Sematryx will retry the delivery:
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <ul className="space-y-2 text-yellow-800">
              <li><strong>Immediate:</strong> First retry after 1 second</li>
              <li><strong>1 minute:</strong> Second retry after 1 minute</li>
              <li><strong>5 minutes:</strong> Third retry after 5 minutes</li>
              <li><strong>1 hour:</strong> Fourth retry after 1 hour</li>
              <li><strong>24 hours:</strong> Final retry after 24 hours</li>
            </ul>
            <p className="mt-4 text-yellow-800">
              After all retries are exhausted, the webhook will be marked as failed. 
              You can view failed webhook deliveries in the dashboard.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Best Practices
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">✅ Do</h3>
              <ul className="space-y-2 text-green-800">
                <li>Always verify webhook signatures</li>
                <li>Use HTTPS endpoints only</li>
                <li>Respond quickly (within 5 seconds)</li>
                <li>Return 2xx status codes for successful processing</li>
                <li>Implement idempotency for duplicate events</li>
                <li>Log all webhook events for debugging</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">❌ Don't</h3>
              <ul className="space-y-2 text-red-800">
                <li>Perform long-running operations in webhook handlers</li>
                <li>Ignore signature verification</li>
                <li>Use HTTP (non-secure) endpoints</li>
                <li>Return errors for expected events</li>
                <li>Block on external API calls</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

