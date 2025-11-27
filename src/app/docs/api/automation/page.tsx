import CodeBlock from '@/components/CodeBlock'

export default function AutomationEndpointsPage() {
  const createAutomation = `curl -X POST https://api.aeao.com/v1/automations \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "data-processor",
    "description": "Processes incoming data",
    "trigger": {
      "type": "webhook",
      "config": {
        "path": "/webhook/data-processor"
      }
    },
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

  const listAutomations = `curl -X GET https://api.aeao.com/v1/automations \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const getAutomation = `curl -X GET https://api.aeao.com/v1/automations/auto_1234567890 \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const updateAutomation = `curl -X PATCH https://api.aeao.com/v1/automations/auto_1234567890 \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "updated-data-processor",
    "status": "active"
  }'`

  const deleteAutomation = `curl -X DELETE https://api.aeao.com/v1/automations/auto_1234567890 \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const triggerAutomation = `curl -X POST https://api.aeao.com/v1/automations/auto_1234567890/trigger \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input_data": {
      "records": [1, 2, 3, 4, 5]
    }
  }'`

  const automationResponse = `{
  "id": "auto_1234567890",
  "name": "data-processor",
  "description": "Processes incoming data",
  "status": "active",
  "trigger": {
    "type": "webhook",
    "id": "trigger_1234567890",
    "config": {
      "path": "/webhook/data-processor"
    }
  },
  "actions": [
    {
      "id": "action_1234567890",
      "type": "transform",
      "config": {
        "input_format": "json",
        "output_format": "csv"
      }
    }
  ],
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Automation Endpoints
        </h1>
        <p className="text-xl text-gray-600">
          Create, manage, and trigger automations through the AEAO API.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Create Automation
          </h2>
          <p className="text-gray-700 mb-4">
            Create a new automation with triggers and actions.
          </p>
          <CodeBlock
            code={createAutomation}
            language="bash"
            title="POST /v1/automations"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Request Body</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>name</strong> (required): Unique name for the automation</li>
              <li><strong>description</strong> (optional): Description of what the automation does</li>
              <li><strong>trigger</strong> (required): Trigger configuration (webhook, schedule, manual)</li>
              <li><strong>actions</strong> (required): Array of actions to execute</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Response</h3>
            <p className="text-green-800">
              Returns the created automation object with a unique ID.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            List Automations
          </h2>
          <p className="text-gray-700 mb-4">
            Retrieve a list of all your automations.
          </p>
          <CodeBlock
            code={listAutomations}
            language="bash"
            title="GET /v1/automations"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Query Parameters</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>status</strong> (optional): Filter by status (active, paused, archived)</li>
              <li><strong>limit</strong> (optional): Number of results per page (default: 20, max: 100)</li>
              <li><strong>offset</strong> (optional): Pagination offset</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Get Automation
          </h2>
          <p className="text-gray-700 mb-4">
            Retrieve details about a specific automation.
          </p>
          <CodeBlock
            code={getAutomation}
            language="bash"
            title="GET /v1/automations/{id}"
          />
          <CodeBlock
            code={automationResponse}
            language="json"
            title="Response"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Update Automation
          </h2>
          <p className="text-gray-700 mb-4">
            Update an existing automation. Only provided fields will be updated.
          </p>
          <CodeBlock
            code={updateAutomation}
            language="bash"
            title="PATCH /v1/automations/{id}"
          />
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Note</h3>
            <p className="text-yellow-800">
              Updating trigger or action configurations may require the automation to be paused first.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Delete Automation
          </h2>
          <p className="text-gray-700 mb-4">
            Permanently delete an automation. This action cannot be undone.
          </p>
          <CodeBlock
            code={deleteAutomation}
            language="bash"
            title="DELETE /v1/automations/{id}"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Trigger Automation
          </h2>
          <p className="text-gray-700 mb-4">
            Manually trigger an automation execution.
          </p>
          <CodeBlock
            code={triggerAutomation}
            language="bash"
            title="POST /v1/automations/{id}/trigger"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Request Body</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>input_data</strong> (optional): Data to pass to the automation</li>
              <li><strong>async</strong> (optional): If true, returns immediately and executes in background</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Trigger Types
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Webhook</h3>
              <p className="text-gray-700 mb-3">
                Triggered by HTTP POST requests to a webhook URL.
              </p>
              <CodeBlock
                code={`{
  "type": "webhook",
  "config": {
    "path": "/webhook/my-automation"
  }
}`}
                language="json"
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Schedule</h3>
              <p className="text-gray-700 mb-3">
                Triggered on a recurring schedule (cron format).
              </p>
              <CodeBlock
                code={`{
  "type": "schedule",
  "config": {
    "cron": "0 0 * * *"
  }
}`}
                language="json"
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Manual</h3>
              <p className="text-gray-700 mb-3">
                Only triggered manually via API or dashboard.
              </p>
              <CodeBlock
                code={`{
  "type": "manual"
}`}
                language="json"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

