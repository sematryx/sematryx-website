import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { ArrowLeft, Bot } from 'lucide-react'

export default function AgenticIntelligencePage() {
  const simpleConfig = `from sematryx import Sematryx

client = Sematryx(api_key="sk-your-api-key")

# Enable Agentic Intelligence
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    use_agentic_intelligence=True
)`

  const advancedConfig = `from sematryx import Sematryx

client = Sematryx(api_key="sk-your-api-key")

# Advanced Agentic Intelligence configuration
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    intelligence_config={
        "use_agentic_intelligence": True,
        "agentic": {
            "max_agents_per_problem": 5,  # Maximum number of agents (default: 3)
            "consensus_threshold": 0.67,  # Agreement threshold for strategy selection
            "agent_timeout": 30  # Timeout for agent responses in seconds
        }
    }
)`

  const restAPIConfig = `curl -X POST https://api.sematryx.com/v1/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective_function_id": "func_1234567890",
    "bounds": [[-10, 10], [-10, 10]],
    "max_evaluations": 2000,
    "intelligence_config": {
      "use_agentic_intelligence": true,
      "agentic": {
        "max_agents_per_problem": 5,
        "consensus_threshold": 0.67,
        "agent_timeout": 30
      }
    }
  }'`

  const javascriptConfig = `import { Sematryx } from '@sematryx/javascript-sdk'

const client = new Sematryx('sk-your-api-key')

// Enable Agentic Intelligence
const result = await client.optimize({
  objective: 'minimize',
  variables: [
    { name: 'x', bounds: [-5, 5] },
    { name: 'y', bounds: [-5, 5] }
  ],
  objectiveFunction: sphere,
  intelligenceConfig: {
    useAgenticIntelligence: true,
    agentic: {
      maxAgentsPerProblem: 5,
      consensusThreshold: 0.67,
      agentTimeout: 30
    }
  }
})`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <Link 
          href="/docs/api/intelligence-config" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Three Intelligence Pillars</span>
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-sky-500/20 p-2 rounded-lg">
            <Bot className="w-8 h-8 text-sky-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-200">
            Agentic Intelligence
          </h1>
        </div>
        <p className="text-xl text-gray-400">
          Developer guide for configuring and using Agentic Intelligence—multi-agent coordination 
          for intelligent strategy selection.
        </p>
      </div>

      <div className="space-y-8">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Overview
          </h2>
          <p className="text-gray-400 mb-4">
            Agentic Intelligence uses a multi-agent system where research agents, validation engineers, 
            and performance analysts collaborate to select the optimal optimization strategy for your problem. 
            The system requires consensus (default 67%) before a strategy is approved.
          </p>
          <div className="bg-sky-950/40 border border-sky-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-sky-400 mb-3">How It Works</h3>
            <ol className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="text-sky-400 font-bold">1.</span>
                <span>Research Agent analyzes your problem and suggests strategies based on literature and best practices</span>
              </li>
              <li className="flex gap-2">
                <span className="text-sky-400 font-bold">2.</span>
                <span>Validation Engineer tests strategies against constraints and risk models</span>
              </li>
              <li className="flex gap-2">
                <span className="text-sky-400 font-bold">3.</span>
                <span>Performance Analyst reviews historical data to predict performance</span>
              </li>
              <li className="flex gap-2">
                <span className="text-sky-400 font-bold">4.</span>
                <span>Consensus Engine requires agreement before strategy is approved</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Simple Configuration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Simple Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Enable Agentic Intelligence with a simple boolean flag:
          </p>
          <CodeBlock
            code={simpleConfig}
            language="python"
            title="Enable Agentic Intelligence"
          />
        </section>

        {/* Advanced Configuration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Advanced Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Fine-tune Agentic Intelligence behavior with advanced options:
          </p>
          <CodeBlock
            code={advancedConfig}
            language="python"
            title="Advanced Agentic Configuration"
          />
          <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Configuration Options</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <strong className="text-gray-200">max_agents_per_problem</strong> (int, default: 3)
                <p className="text-gray-500 mt-1">Maximum number of agents that will collaborate on strategy selection. More agents provide better consensus but increase latency.</p>
              </li>
              <li>
                <strong className="text-gray-200">consensus_threshold</strong> (float, default: 0.67)
                <p className="text-gray-500 mt-1">Minimum agreement percentage required before a strategy is approved. Range: 0.5 to 1.0. Higher values require more agreement but may be more conservative.</p>
              </li>
              <li>
                <strong className="text-gray-200">agent_timeout</strong> (int, default: 30)
                <p className="text-gray-500 mt-1">Timeout in seconds for agent responses. If an agent doesn't respond within this time, it's excluded from consensus.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* REST API */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            REST API Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Configure Agentic Intelligence via REST API:
          </p>
          <CodeBlock
            code={restAPIConfig}
            language="bash"
            title="REST API - Agentic Intelligence"
          />
        </section>

        {/* JavaScript SDK */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            JavaScript SDK Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Configure Agentic Intelligence using the JavaScript SDK:
          </p>
          <CodeBlock
            code={javascriptConfig}
            language="javascript"
            title="JavaScript SDK - Agentic Intelligence"
          />
        </section>

        {/* Best Practices */}
        <section className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Best Practices
          </h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-1">•</span>
              <span><strong className="text-gray-200">Use for complex problems:</strong> Agentic Intelligence is most valuable when you're unsure which algorithm to use or when problems have unusual characteristics.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-1">•</span>
              <span><strong className="text-gray-200">Balance agents vs latency:</strong> More agents provide better consensus but increase decision time. Use 3-5 agents for most cases.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-1">•</span>
              <span><strong className="text-gray-200">Adjust consensus threshold:</strong> Higher thresholds (0.75+) are more conservative but may reject valid strategies. Lower thresholds (0.6) are faster but less rigorous.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-1">•</span>
              <span><strong className="text-gray-200">Monitor agent timeouts:</strong> If agents frequently timeout, consider increasing the timeout value or reducing the number of agents.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

