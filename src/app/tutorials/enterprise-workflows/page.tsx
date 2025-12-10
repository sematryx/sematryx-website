import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function EnterpriseWorkflowsTutorial() {
  const multiStepWorkflow = `curl -X POST https://api.sematryx.com/v1/automations \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "enterprise-order-processing",
    "trigger": {
      "type": "webhook"
    },
    "actions": [
      {
        "type": "validate",
        "config": {
          "schema": "order_schema.json"
        }
      },
      {
        "type": "transform",
        "config": {
          "enrichment": {
            "customer_data": "fetch_from_crm",
            "inventory_check": "check_stock"
          }
        }
      },
      {
        "type": "approval",
        "config": {
          "required_approvers": ["manager", "finance"],
          "timeout": 3600
        }
      },
      {
        "type": "execute",
        "config": {
          "fulfillment": "process_order"
        }
      },
      {
        "type": "notify",
        "config": {
          "channels": ["email", "sms"],
          "template": "order_confirmation"
        }
      }
    ]
  }'`

  const pythonExample = `from sematryx import SematryxClient

client = SematryxClient(api_key='your-api-key')

# Create enterprise workflow
workflow = client.automations.create(
    name='enterprise-order-processing',
    trigger={'type': 'webhook'},
    actions=[
        {'type': 'validate', 'config': {'schema': 'order_schema.json'}},
        {'type': 'transform', 'config': {'enrichment': {...}}},
        {'type': 'approval', 'config': {'required_approvers': [...]}},
        {'type': 'execute', 'config': {'fulfillment': 'process_order'}},
        {'type': 'notify', 'config': {'channels': ['email', 'sms']}}
    ]
)`

  const errorHandling = `# Enterprise-grade error handling
try:
    result = client.automations.trigger(workflow_id, data)
except ValidationError as e:
    # Log and notify validation errors
    logger.error(f"Validation failed: {e}")
    notify_team("Validation error in workflow")
except ApprovalTimeoutError:
    # Handle approval timeouts
    escalate_to_manager()
except ExecutionError as e:
    # Retry with exponential backoff
    retry_with_backoff(workflow_id, data)`

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
            <span className="text-gray-500">• 60 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise Workflow Patterns
          </h1>
          <p className="text-xl text-gray-600">
            Learn advanced patterns for complex enterprise automation scenarios with multi-step workflows, approvals, and error handling.
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
              <li>Design multi-step enterprise workflows</li>
              <li>Implement approval processes and gates</li>
              <li>Handle errors and retries gracefully</li>
              <li>Integrate with enterprise systems (CRM, ERP, etc.)</li>
              <li>Ensure compliance and auditability</li>
              <li>Scale workflows for high-volume operations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Prerequisites
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Before You Start</h3>
              <ul className="space-y-2 text-blue-800">
                <li>✅ Enterprise Sematryx account</li>
                <li>✅ Understanding of workflow design patterns</li>
                <li>✅ Familiarity with enterprise system integration</li>
                <li>✅ Access to enterprise systems (CRM, ERP, etc.)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 1: Multi-Step Workflow Design
            </h2>
            <p className="text-gray-700 mb-4">
              Create complex workflows with multiple sequential steps:
            </p>
            <CodeBlock
              code={multiStepWorkflow}
              language="bash"
              title="Enterprise workflow example"
            />
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Workflow Steps</h3>
              <ul className="space-y-2 text-blue-800">
                <li><strong>Validate:</strong> Ensure data meets requirements</li>
                <li><strong>Transform:</strong> Enrich and transform data</li>
                <li><strong>Approval:</strong> Require human approval for critical steps</li>
                <li><strong>Execute:</strong> Perform the main business operation</li>
                <li><strong>Notify:</strong> Send notifications to stakeholders</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 2: Using the Python SDK
            </h2>
            <p className="text-gray-700 mb-4">
              Build enterprise workflows programmatically:
            </p>
            <CodeBlock
              code={pythonExample}
              language="python"
              title="Create enterprise workflow with Python"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 3: Error Handling and Retries
            </h2>
            <p className="text-gray-700 mb-4">
              Implement robust error handling for enterprise reliability:
            </p>
            <CodeBlock
              code={errorHandling}
              language="python"
              title="Enterprise error handling"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Enterprise Patterns
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Approval Gates
                </h3>
                <p className="text-gray-700 mb-3">
                  Require human approval for critical business decisions or high-value transactions.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Multi-level approval workflows</li>
                  <li>Timeout handling for pending approvals</li>
                  <li>Escalation paths for overdue approvals</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Data Enrichment
                </h3>
                <p className="text-gray-700 mb-3">
                  Enrich workflow data by fetching information from multiple enterprise systems.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>CRM integration for customer data</li>
                  <li>ERP integration for inventory and pricing</li>
                  <li>External API calls for validation</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Audit and Compliance
                </h3>
                <p className="text-gray-700 mb-3">
                  Ensure all workflow executions are logged and auditable for compliance.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Complete execution history</li>
                  <li>Change tracking and versioning</li>
                  <li>Compliance reporting</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Best Practices
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Enterprise Workflow Best Practices</h3>
              <ul className="space-y-2 text-green-800">
                <li>Design workflows with clear separation of concerns</li>
                <li>Implement comprehensive error handling and retries</li>
                <li>Use approval gates for critical business decisions</li>
                <li>Ensure all operations are auditable and traceable</li>
                <li>Test workflows thoroughly in staging environments</li>
                <li>Monitor workflow performance and optimize bottlenecks</li>
                <li>Document workflow logic and business rules</li>
                <li>Implement version control for workflow definitions</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🎉 Next Steps
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-green-800 mb-4">
                You've learned enterprise workflow patterns! 
                Continue exploring:
              </p>
              <div className="space-y-2">
                <Link 
                  href="/docs/api/automation" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Explore the full API documentation
                </Link>
                <Link 
                  href="/docs/advanced/best-practices" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Read best practices guide
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

