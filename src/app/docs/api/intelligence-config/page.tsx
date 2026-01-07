import CodeBlock from '@/components/CodeBlock'

export default function IntelligenceConfigPage() {
  const presetConfig = `from sematryx import Sematryx

client = Sematryx(api_key="sk-your-api-key")

# Use optimization modes for speed vs quality tradeoffs
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    mode="balanced"  # speed, balanced, quality
)`

  const simpleConfig = `from sematryx import Sematryx

client = Sematryx(api_key="sk-your-api-key")

# Enable explainability
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    explanation_level=2  # 0=none, 1=basic, 2=detailed, 3=comprehensive
)

print(result.explanation)  # Human-readable explanation of the solution`

  const advancedConfig = `from sematryx import Sematryx

client = Sematryx(api_key="sk-your-api-key")

# Enable private learning for improved performance over time
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    mode="quality",
    explanation_level=3,
    learning={
        "read_from_private": True,   # Learn from your past optimizations
        "write_to_private": True,    # Store result for future learning
    }
)`

  const restAPIConfig = `curl -X POST https://api.sematryx.com/v1/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective_function_id": "func_1234567890",
    "bounds": [[-10, 10], [-10, 10]],
    "max_evaluations": 2000,
    "preset": "production",
    "intelligence_config": {
      "use_agentic_intelligence": true,
      "use_interpretable_intelligence": true,
      "use_adaptive_intelligence": true,
      "explanation_level": 3,
      "agentic": {
        "max_agents_per_problem": 5
      },
      "adaptive": {
        "learning_enabled": true,
        "cross_problem_learning": true
      }
    }
  }'`

  const javascriptConfig = `import { Sematryx } from '@sematryx/javascript-sdk'

const client = new Sematryx('sk-your-api-key')

// Basic optimization
const result = await client.optimize({
  objective: 'minimize',
  variables: [
    { name: 'x', bounds: [-5, 5] },
    { name: 'y', bounds: [-5, 5] }
  ],
  objectiveFunction: sphere,
  mode: 'balanced'
})

// With explainability
const result = await client.optimize({
  objective: 'minimize',
  variables: [
    { name: 'x', bounds: [-5, 5] },
    { name: 'y', bounds: [-5, 5] }
  ],
  objectiveFunction: sphere,
  explanationLevel: 2
})

console.log(result.explanation)`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Intelligence Configuration
        </h1>
        <p className="text-xl text-gray-400">
          Configure Sematryx's 3 Core Pillars: Agentic, Interpretable, and Adaptive intelligence. 
          Control compute cost vs capability trade-offs with granular configuration options.
        </p>
      </div>

      <div className="space-y-12">
        {/* The 3 Core Pillars Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            The 3 Core Pillars
          </h2>
          <p className="text-gray-400 mb-6">
            Sematryx is built on three core pillars of intelligence that work together to provide enterprise-grade optimization:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div id="agentic-intelligence" className="bg-sky-950/40 border border-sky-800/50 rounded-lg p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🤖</span>
                <h3 className="text-xl font-bold text-sky-400">Agentic Intelligence</h3>
              </div>
              <p className="text-sky-200/80 mb-3">
                Multi-agent coordination for strategy selection. Research agents, validation engineers, and performance analysts collaborate to provide consensus-based optimization strategies.
              </p>
              <ul className="space-y-1 text-sm text-sky-400">
                <li>• Multi-agent collaboration</li>
                <li>• Consensus-based strategy selection</li>
                <li>• Real-time performance analysis</li>
                <li>• Autonomous decision-making</li>
              </ul>
            </div>

            <div id="interpretable-intelligence" className="bg-green-950/40 border border-green-800/50 rounded-lg p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📖</span>
                <h3 className="text-xl font-bold text-green-400">Interpretable Intelligence</h3>
              </div>
              <p className="text-green-200/80 mb-3">
                Comprehensive explanation of all optimization decisions with configurable explanation levels (0-5) for compute cost control.
              </p>
              <ul className="space-y-1 text-sm text-green-400">
                <li>• Configurable explanation levels (0-5)</li>
                <li>• Natural language summaries</li>
                <li>• Technical decision logs</li>
                <li>• Interactive visualizations</li>
                <li>• 22-26% performance boost with async processing</li>
              </ul>
            </div>

            <div id="adaptive-intelligence" className="bg-pink-950/40 border border-pink-800/50 rounded-lg p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🧠</span>
                <h3 className="text-xl font-bold text-pink-400">Adaptive Intelligence</h3>
              </div>
              <p className="text-pink-200/80 mb-3">
                Self-improvement and continuous learning from optimization experience. Problem signature detection, strategy variation, and cross-problem learning.
              </p>
              <ul className="space-y-1 text-sm text-pink-400">
                <li>• Problem signature detection</li>
                <li>• Strategy variation</li>
                <li>• Cross-problem learning</li>
                <li>• Performance memory</li>
                <li>• Meta-learning capabilities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Preset Configurations */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Preset Configurations
          </h2>
          <p className="text-gray-400 mb-4">
            Quick-start with predefined configurations optimized for different use cases:
          </p>
          <CodeBlock
            code={presetConfig}
            language="python"
            title="Using Preset Configurations"
          />
          <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Available Presets</h3>
            <div className="space-y-3 text-gray-400">
              <div>
                <strong className="text-gray-200">development:</strong> Fast iteration, basic explanations, minimal overhead. Best for rapid prototyping and testing.
              </div>
              <div>
                <strong className="text-gray-200">production:</strong> Balanced performance, standard explanations, enterprise monitoring. Recommended for most production deployments.
              </div>
              <div>
                <strong className="text-gray-200">research:</strong> Maximum capabilities, comprehensive explanations, full learning enabled. Ideal for research and experimentation.
              </div>
              <div>
                <strong className="text-gray-200">enterprise:</strong> Full features, advanced monitoring, compliance features, audit trails. For regulated industries.
              </div>
              <div>
                <strong className="text-gray-200">minimal:</strong> Core optimization only, no AI systems, fastest execution. For simple problems.
              </div>
            </div>
          </div>
        </section>

        {/* Simple Configuration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Simple Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Enable specific core pillars with simple boolean flags and basic parameters:
          </p>
          <CodeBlock
            code={simpleConfig}
            language="python"
            title="Simple Intelligence Configuration"
          />
          <div className="bg-[#1a1f2e] border border-primary-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-primary-400 mb-3">Simple Configuration Options</h3>
            <ul className="space-y-2 text-gray-400">
              <li><strong className="text-gray-200">use_agentic_intelligence</strong> (bool): Enable multi-agent coordination</li>
              <li><strong className="text-gray-200">use_interpretable_intelligence</strong> (bool): Enable explainability</li>
              <li><strong className="text-gray-200">use_adaptive_intelligence</strong> (bool): Enable learning system</li>
              <li><strong className="text-gray-200">explanation_level</strong> (int, 0-5): Detail level for explanations (0=off, 5=comprehensive)</li>
            </ul>
          </div>
        </section>

        {/* Advanced Configuration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Advanced Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Fine-tune every aspect of the core pillars with complete configuration objects:
          </p>
          <CodeBlock
            code={advancedConfig}
            language="python"
            title="Advanced Intelligence Configuration"
          />
          <div className="bg-[#1a1f2e] border border-primary-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-primary-400 mb-3">Advanced Configuration Options</h3>
            <div className="space-y-4 text-gray-400">
              <div>
                <strong className="text-gray-200">Agentic Configuration:</strong>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li>• max_agents_per_problem: Maximum number of agents (default: 3)</li>
                  <li>• consensus_threshold: Agreement threshold for strategy selection</li>
                  <li>• agent_timeout: Timeout for agent responses</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-200">Interpretable Configuration:</strong>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li>• explanation_level: 0-5 detail level</li>
                  <li>• async_explanations: Background processing (default: True)</li>
                  <li>• include_visualizations: Generate visual diagnostics</li>
                  <li>• natural_language: Enable NLP summaries</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-200">Adaptive Configuration:</strong>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li>• learning_enabled: Enable learning system</li>
                  <li>• cross_problem_learning: Learn across different problems</li>
                  <li>• memory_retention: How long to retain learned patterns</li>
                  <li>• meta_learning: Enable meta-learning capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* REST API Configuration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            REST API Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Configure the core pillars via REST API requests:
          </p>
          <CodeBlock
            code={restAPIConfig}
            language="bash"
            title="REST API - Intelligence Configuration"
          />
        </section>

        {/* JavaScript SDK Configuration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            JavaScript SDK Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Configure the core pillars using the JavaScript SDK:
          </p>
          <CodeBlock
            code={javascriptConfig}
            language="javascript"
            title="JavaScript SDK - Intelligence Configuration"
          />
        </section>

        {/* Cost vs Capability Trade-offs */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Compute Cost vs Capability Trade-offs
          </h2>
          <p className="text-gray-400 mb-4">
            Each core pillar can be independently enabled or disabled to balance performance and capabilities:
          </p>
          <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-200 mb-2">Minimal Cost (minimal preset)</h3>
                <p className="text-gray-400 text-sm mb-2">Fastest execution, no AI overhead:</p>
                <ul className="text-sm text-gray-500 space-y-1 ml-4">
                  <li>• All core pillars disabled</li>
                  <li>• Core optimization only</li>
                  <li>• ~10-20% faster than full intelligence</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-2">Balanced (production preset)</h3>
                <p className="text-gray-400 text-sm mb-2">Good performance with essential capabilities:</p>
                <ul className="text-sm text-gray-500 space-y-1 ml-4">
                  <li>• Agentic + Interpretable enabled</li>
                  <li>• Adaptive disabled (no learning overhead)</li>
                  <li>• Explanation level 2-3</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-2">Maximum Capability (research/enterprise preset)</h3>
                <p className="text-gray-400 text-sm mb-2">Full capabilities, comprehensive explanations:</p>
                <ul className="text-sm text-gray-500 space-y-1 ml-4">
                  <li>• All core pillars enabled</li>
                  <li>• Maximum agents, full learning</li>
                  <li>• Explanation level 4-5</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

