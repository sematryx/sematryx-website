import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function MonitoringAlertsTutorial() {
  const createAlert = `curl -X POST https://api.sematryx.com/v1/alerts \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "high-error-rate",
    "condition": {
      "metric": "error_rate",
      "operator": ">",
      "threshold": 0.05
    },
    "notifications": [
      {
        "type": "email",
        "config": {
          "recipients": ["team@example.com"]
        }
      },
      {
        "type": "webhook",
        "config": {
          "url": "https://your-app.com/alerts"
        }
      }
    ]
  }'`

  const pythonExample = `from sematryx import SematryxClient

client = SematryxClient(api_key='your-api-key')

# Create monitoring alert
alert = client.alerts.create(
    name='high-error-rate',
    condition={
        'metric': 'error_rate',
        'operator': '>',
        'threshold': 0.05
    },
    notifications=[
        {
            'type': 'email',
            'config': {'recipients': ['team@example.com']}
        }
    ]
)`

  const getMetrics = `# Get real-time metrics
metrics = client.analytics.get_metrics(
    start_date='2024-01-01',
    end_date='2024-01-31'
)

print(f"Total executions: {metrics.total_executions}")
print(f"Success rate: {metrics.success_rate}")
print(f"Average execution time: {metrics.avg_execution_time}")`

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
            <span className="text-gray-500">• 20 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Monitoring and Alerting
          </h1>
          <p className="text-xl text-gray-600">
            Set up comprehensive monitoring and alerting for your automations to ensure reliability and performance.
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
              <li>Monitor automation performance and health</li>
              <li>Create alerts based on metrics and thresholds</li>
              <li>Configure notification channels (email, webhooks, Slack)</li>
              <li>Set up dashboards for real-time monitoring</li>
              <li>Track key performance indicators</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Prerequisites
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Before You Start</h3>
              <ul className="space-y-2 text-blue-800">
                <li>✅ A Sematryx account with active automations</li>
                <li>✅ Understanding of monitoring concepts</li>
                <li>✅ Access to notification channels (email, webhooks)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 1: Create Monitoring Alerts
            </h2>
            <p className="text-gray-700 mb-4">
              Set up alerts to be notified when metrics exceed thresholds:
            </p>
            <CodeBlock
              code={createAlert}
              language="bash"
              title="Create monitoring alert"
            />
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Available Metrics</h3>
              <ul className="space-y-2 text-blue-800">
                <li><strong>error_rate:</strong> Percentage of failed executions</li>
                <li><strong>execution_time:</strong> Average execution duration</li>
                <li><strong>throughput:</strong> Executions per time period</li>
                <li><strong>cost:</strong> API usage costs</li>
                <li><strong>queue_depth:</strong> Number of pending executions</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 2: Using the Python SDK
            </h2>
            <p className="text-gray-700 mb-4">
              Create alerts programmatically:
            </p>
            <CodeBlock
              code={pythonExample}
              language="python"
              title="Create alert with Python SDK"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 3: Monitor Metrics
            </h2>
            <p className="text-gray-700 mb-4">
              Retrieve real-time metrics and analytics:
            </p>
            <CodeBlock
              code={getMetrics}
              language="python"
              title="Get monitoring metrics"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Notification Channels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Email Notifications
                </h3>
                <p className="text-gray-700">
                  Receive email alerts when conditions are met. Configure recipients and email templates.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Webhook Notifications
                </h3>
                <p className="text-gray-700">
                  Send alerts to your own systems via HTTP webhooks for custom integrations.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Slack Integration
                </h3>
                <p className="text-gray-700">
                  Send alerts directly to Slack channels for team visibility.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  SMS Notifications
                </h3>
                <p className="text-gray-700">
                  Receive SMS alerts for critical issues that require immediate attention.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Best Practices
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Monitoring Best Practices</h3>
              <ul className="space-y-2 text-green-800">
                <li>Set up alerts for critical metrics (error rate, execution time)</li>
                <li>Use appropriate thresholds to avoid alert fatigue</li>
                <li>Configure multiple notification channels for redundancy</li>
                <li>Review and adjust alert thresholds regularly</li>
                <li>Monitor trends over time, not just point-in-time values</li>
                <li>Set up dashboards for visual monitoring</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🎉 Next Steps
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-green-800 mb-4">
                You've learned how to set up monitoring and alerts! 
                Continue learning:
              </p>
              <div className="space-y-2">
                <Link 
                  href="/tutorials/enterprise-workflows" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Learn enterprise workflow patterns
                </Link>
                <Link 
                  href="/docs/api/analytics" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Explore analytics API documentation
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

