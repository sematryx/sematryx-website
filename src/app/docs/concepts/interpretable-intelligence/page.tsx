import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { ArrowLeft, MessageSquare } from 'lucide-react'

export default function InterpretableIntelligencePage() {
  const simpleConfig = `from sematryx import Sematryx

client = Sematryx(api_key="sk-your-api-key")

# Enable Interpretable Intelligence with explanation level
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    explanation_level=2  # 0=none, 1=basic, 2=detailed, 3=comprehensive, 4=full audit
)

print(result.explanation)  # Human-readable explanation of the solution`

  const advancedConfig = `from sematryx import Sematryx

client = Sematryx(api_key="sk-your-api-key")

# Advanced configuration: choose your explanation detail level
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    intelligence_config={
        "use_interpretable_intelligence": True,
        "explanation_level": 3  # 0=none, 1=basic, 2=detailed, 3=comprehensive, 4=full audit
    }
)`

  const restAPIConfig = `curl -X POST https://api.sematryx.com/v1/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective_function": "sphere",
    "variables": ["x", "y"],
    "bounds": [[-10, 10], [-10, 10]],
    "max_evaluations": 2000,
    "explanation_level": 3
  }'`

  const javascriptConfig = `// REST API via fetch (JavaScript SDK coming soon)
const response = await fetch('https://api.sematryx.com/v1/optimize', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    objective_function: 'sphere',
    variables: ['x', 'y'],
    bounds: [[-5, 5], [-5, 5]],
    max_evaluations: 2000,
    explanation_level: 3
  })
})
const result = await response.json()
console.log(result.explanation)`

  const explanationLevels = `# Explanation Levels

Level 0: No explanations (fastest)
  - No explanation data returned
  - Minimal overhead

Level 1: Basic summary
  - Simple one-line summary
  - Strategy name and basic metrics

Level 2: Detailed (default)
  - Strategy rationale
  - Key decision points
  - Performance metrics

Level 3: Comprehensive
  - Full decision tree
  - Alternative strategies considered
  - Detailed performance analysis

Level 4: Full audit trail
  - Complete decision log
  - All alternatives with scores
  - Regulatory compliance ready

Level 5: Maximum detail
  - Every decision point logged
  - Full traceability
  - Research-grade documentation`

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
          <div className="bg-green-500/20 p-2 rounded-lg">
            <MessageSquare className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-200">
            Interpretable Intelligence
          </h1>
        </div>
        <p className="text-xl text-gray-400">
          Developer guide for configuring and using Interpretable Intelligence—comprehensive explanations 
          of all optimization decisions with configurable detail levels.
        </p>
      </div>

      <div className="space-y-8">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Overview
          </h2>
          <p className="text-gray-400 mb-4">
            Interpretable Intelligence provides comprehensive explanations of all optimization decisions. 
            Use the <code>explanation_level</code> parameter to control detail — from a one-line summary 
            up to a full audit trail suitable for compliance reporting.
          </p>
          <div className="bg-green-950/40 border border-green-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-400 mb-3">What You Get</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span><strong className="text-gray-200">Natural language summaries:</strong> Human-readable explanations of optimization decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span><strong className="text-gray-200">Technical decision logs:</strong> Detailed logs of all strategy selection decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span><strong className="text-gray-200">Structured decision logs:</strong> Machine-readable decision records parseable by downstream systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span><strong className="text-gray-200">Audit trails:</strong> Complete records for regulatory compliance</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Explanation Levels */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Explanation Levels
          </h2>
          <p className="text-gray-400 mb-4">
            Control the detail level of explanations to balance information needs with compute costs:
          </p>
          <CodeBlock
            code={explanationLevels}
            language="python"
            title="Explanation Level Guide"
          />
        </section>

        {/* Simple Configuration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Simple Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Enable Interpretable Intelligence with a simple explanation level:
          </p>
          <CodeBlock
            code={simpleConfig}
            language="python"
            title="Enable Interpretable Intelligence"
          />
        </section>

        {/* Advanced Configuration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Advanced Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Fine-tune Interpretable Intelligence behavior with advanced options:
          </p>
          <CodeBlock
            code={advancedConfig}
            language="python"
            title="Advanced Interpretable Configuration"
          />
          <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Configuration Options</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <strong className="text-gray-200">explanation_level</strong> (int, 0-4, default: 0)
                <p className="text-gray-500 mt-1">Detail level for explanations. Higher levels provide more information. Pass as a top-level parameter or inside <code>intelligence_config</code>.</p>
              </li>
              <li>
                <strong className="text-gray-200">use_interpretable_intelligence</strong> (bool, default: false)
                <p className="text-gray-500 mt-1">Enable interpretable intelligence mode, which provides structured explanations of strategy selection and optimization decisions.</p>
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
            Configure Interpretable Intelligence via REST API:
          </p>
          <CodeBlock
            code={restAPIConfig}
            language="bash"
            title="REST API - Interpretable Intelligence"
          />
        </section>

        {/* JavaScript SDK */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            JavaScript SDK Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Configure Interpretable Intelligence using the JavaScript SDK:
          </p>
          <CodeBlock
            code={javascriptConfig}
            language="javascript"
            title="JavaScript SDK - Interpretable Intelligence"
          />
        </section>

        {/* Best Practices */}
        <section className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Best Practices
          </h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span><strong className="text-gray-200">Start with level 1-2:</strong> For most production use, level 1 (basic) or level 2 (detailed) gives useful context without added overhead.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span><strong className="text-gray-200">Choose appropriate level:</strong> Use level 1-2 for production, level 3-4 for debugging, level 5 for compliance/audit.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span><strong className="text-gray-200">Use level 3-4 for debugging:</strong> When an optimization behaves unexpectedly, higher explanation levels expose the full decision trace.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span><strong className="text-gray-200">Level 4 for compliance:</strong> Use explanation_level=4 when you need complete audit trails for regulated industries.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

