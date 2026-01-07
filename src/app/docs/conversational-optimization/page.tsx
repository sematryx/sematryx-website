import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ConversationalOptimizationPage() {
  const createConversation = `curl -X POST https://api.sematryx.com/v1/domains/conversational/create \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "description": "I want to optimize my marketing budget across Google, Facebook, and LinkedIn to maximize ROI"
  }'`

  const pythonCreate = `from sematryx.client.sdk import SematryxClient

client = SematryxClient(api_key="YOUR_API_KEY")

# Start a conversation
result = client.start_conversational_optimization(
    description="I want to optimize my marketing budget for maximum ROI"
)

conversation_id = result["conversation_id"]
print(f"Conversation started: {conversation_id}")`

  const getStatus = `curl -X GET https://api.sematryx.com/v1/domains/conversational/status/CONVERSATION_ID \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const continueConversation = `curl -X POST https://api.sematryx.com/v1/domains/conversational/continue/CONVERSATION_ID \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "response": "$50000"
  }'`

  const completeOptimization = `curl -X POST https://api.sematryx.com/v1/domains/conversational/complete/CONVERSATION_ID \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "max_evaluations": 2000,
    "mode": "balanced"
  }'`

  const fullExample = `from sematryx.client.sdk import SematryxClient
import time

client = SematryxClient(api_key="YOUR_API_KEY")

# Start conversation
result = client.start_conversational_optimization(
    description="I want to optimize my marketing budget for maximum ROI"
)
conversation_id = result["conversation_id"]

# Interactive loop
while True:
    status = client.get_conversation_status(conversation_id)
    
    if status["status"] == "waiting_for_input":
        print(f"Agent: {status.get('question')}")
        # Get user response
        response = input("Your response: ")
        client.continue_conversation(conversation_id, response)
        
    elif status["status"] == "ready_to_optimize":
        print("All parameters collected! Ready to optimize.")
        break
        
    else:
        time.sleep(1)

# Complete and optimize
result = client.complete_conversational_optimization(conversation_id)
print(f"Optimization started: {result['optimization_id']}")`

  const statusResponse = `{
  "conversation_id": "conv_abc123",
  "status": "waiting_for_input",
  "turn_number": 1,
  "question": "What is your total marketing budget?",
  "question_type": "parameter_collection",
  "parameter_name": "budget",
  "parameter_type": "float",
  "examples": ["$10000", "$50000", "$100000"],
  "progress": {
    "parameters_collected": 0,
    "parameters_total": 5,
    "percentage": 0
  },
  "detected_domain": "marketing"
}`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <Link 
          href="/conversational-optimization" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </Link>
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Conversational Optimization
        </h1>
        <p className="text-xl text-gray-400">
          Create optimization problems through natural language conversation with an AI agent.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Overview
          </h2>
          <p className="text-gray-400 mb-4">
            Conversational Optimization allows you to describe optimization problems in natural language
            and have an AI agent guide you through collecting all required parameters, validating inputs,
            and executing the optimization.
          </p>
          <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 mb-4">
            <p className="text-blue-200">
              <strong>Perfect for:</strong> Users who want to optimize but aren't familiar with technical
              optimization concepts, or when you want a guided experience to ensure all parameters are
              correctly specified.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Key Features
          </h2>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start">
              <span className="text-primary-400 mr-2">•</span>
              <span><strong>Natural Language Understanding:</strong> Describe your problem in plain English</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-400 mr-2">•</span>
              <span><strong>Interactive Guidance:</strong> Agent asks clarifying questions to collect all required parameters</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-400 mr-2">•</span>
              <span><strong>Automatic Validation:</strong> Inputs are validated in real-time with helpful error messages</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-400 mr-2">•</span>
              <span><strong>Domain Detection:</strong> Automatically detects the problem domain (marketing, financial, etc.)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-400 mr-2">•</span>
              <span><strong>Extension Building:</strong> Can create custom domain extensions when no existing domain matches</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            API Endpoints
          </h2>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">
            1. Create Conversation
          </h3>
          <p className="text-gray-400 mb-4">
            Start a new conversational optimization problem creation.
          </p>
          <CodeBlock
            code={createConversation}
            language="bash"
            title="POST /v1/domains/conversational/create"
          />
          <CodeBlock
            code={pythonCreate}
            language="python"
            title="Using Python SDK"
          />

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">
            2. Get Conversation Status
          </h3>
          <p className="text-gray-400 mb-4">
            Check the current status of a conversation. Returns a question if the agent is waiting for input.
          </p>
          <CodeBlock
            code={getStatus}
            language="bash"
            title="GET /v1/domains/conversational/status/{conversation_id}"
          />
          <CodeBlock
            code={statusResponse}
            language="json"
            title="Example Response"
          />

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">
            3. Continue Conversation
          </h3>
          <p className="text-gray-400 mb-4">
            Provide a response to the agent's question.
          </p>
          <CodeBlock
            code={continueConversation}
            language="bash"
            title="POST /v1/domains/conversational/continue/{conversation_id}"
          />

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">
            4. Complete and Optimize
          </h3>
          <p className="text-gray-400 mb-4">
            Complete the conversation and execute the optimization once all parameters are collected.
          </p>
          <CodeBlock
            code={completeOptimization}
            language="bash"
            title="POST /v1/domains/conversational/complete/{conversation_id}"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Complete Example
          </h2>
          <p className="text-gray-400 mb-4">
            Here's a complete example showing the full conversational flow:
          </p>
          <CodeBlock
            code={fullExample}
            language="python"
            title="Full Conversational Flow"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Conversation Status Values
          </h2>
          <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
            <ul className="space-y-3 text-gray-400">
              <li>
                <code className="bg-gray-800 text-primary-400 px-2 py-1 rounded">processing</code> - 
                Agent is analyzing the problem description
              </li>
              <li>
                <code className="bg-gray-800 text-primary-400 px-2 py-1 rounded">waiting_for_input</code> - 
                Agent has a question ready (check the <code className="bg-gray-800 text-gray-300 px-1 py-0.5 rounded">question</code> field)
              </li>
              <li>
                <code className="bg-gray-800 text-primary-400 px-2 py-1 rounded">ready_to_optimize</code> - 
                All parameters collected, ready to execute optimization
              </li>
              <li>
                <code className="bg-gray-800 text-primary-400 px-2 py-1 rounded">optimizing</code> - 
                Optimization is currently running
              </li>
              <li>
                <code className="bg-gray-800 text-primary-400 px-2 py-1 rounded">completed</code> - 
                Optimization finished successfully
              </li>
              <li>
                <code className="bg-gray-800 text-primary-400 px-2 py-1 rounded">failed</code> - 
                An error occurred
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Best Practices
          </h2>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start">
              <span className="text-primary-400 mr-2">•</span>
              <span>Poll the status endpoint every 2-3 seconds when status is "processing"</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-400 mr-2">•</span>
              <span>Provide clear, specific responses to the agent's questions</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-400 mr-2">•</span>
              <span>Use the examples provided in the status response as guidance</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-400 mr-2">•</span>
              <span>Conversations timeout after 1 hour of inactivity</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-400 mr-2">•</span>
              <span>Maximum conversation length is 20 turns to prevent runaway costs</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Learn More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/tutorials/conversational-optimization"
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-primary-500 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                Interactive Tutorial
              </h3>
              <p className="text-gray-400 text-sm">
                Step-by-step tutorial with interactive examples
              </p>
            </Link>
            <Link
              href="/docs/sdks/python"
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-primary-500 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                Python SDK Guide
              </h3>
              <p className="text-gray-400 text-sm">
                Learn more about the Python SDK methods
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

