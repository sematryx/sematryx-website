'use client'

import CodeBlock from '@/components/CodeBlock'

export default function ThreeIntelligencePillarsPage() {
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
          Three Intelligence Pillars
        </h1>
        <p className="text-xl text-gray-400 mb-4">
          Sematryx is built on three core pillars of intelligence that work together to provide 
          enterprise-grade optimization. Each pillar can be independently enabled to balance 
          performance, explainability, and learning capabilities.
        </p>
        <p className="text-gray-500 text-sm">
          These pillars represent the fundamental intelligence capabilities that make Sematryx 
          different from traditional optimization tools—enabling autonomous strategy selection, 
          comprehensive explainability, and continuous improvement.
        </p>
      </div>

      <div className="space-y-8">
        {/* The 3 Core Pillars Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div id="agentic-intelligence" className="bg-sky-950/40 border border-sky-800/50 rounded-lg p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🤖</span>
                <h3 className="text-xl font-bold text-sky-400">Agentic Intelligence</h3>
              </div>
              <p className="text-sky-200/80 mb-4">
                Multi-agent coordination for intelligent strategy selection. Research agents, validation 
                engineers, and performance analysts collaborate to provide consensus-based optimization 
                strategies tailored to your specific problem.
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-sky-300 mb-2">Key Benefits:</h4>
                <ul className="space-y-1 text-sm text-sky-400">
                  <li>• Automatically selects optimal algorithm for your problem</li>
                  <li>• Reduces trial-and-error in strategy selection</li>
                  <li>• Leverages domain expertise without manual configuration</li>
                  <li>• Adapts to problem characteristics in real-time</li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-sky-800/50">
                <p className="text-xs text-sky-300/80">
                  <strong>Use Cases:</strong> Complex problems where you're unsure which algorithm to use, 
                  problems with unusual characteristics, or when you need the best strategy without manual tuning.
                </p>
              </div>
            </div>

            <div id="interpretable-intelligence" className="bg-green-950/40 border border-green-800/50 rounded-lg p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📖</span>
                <h3 className="text-xl font-bold text-green-400">Interpretable Intelligence</h3>
              </div>
              <p className="text-green-200/80 mb-4">
                Comprehensive explanation of all optimization decisions with configurable detail levels. 
                Provides natural language summaries, technical decision logs, and visualizations—all 
                processed asynchronously to minimize performance impact.
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-green-300 mb-2">Key Benefits:</h4>
                <ul className="space-y-1 text-sm text-green-400">
                  <li>• Full audit trails for regulatory compliance</li>
                  <li>• Understand why specific strategies were chosen</li>
                  <li>• Debug optimization failures with detailed logs</li>
                  <li>• 22-26% performance boost with async processing</li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-green-800/50">
                <p className="text-xs text-green-300/80">
                  <strong>Use Cases:</strong> Regulated industries requiring audit trails, stakeholder 
                  communication, debugging complex optimization issues, or when transparency is critical.
                </p>
              </div>
            </div>

            <div id="adaptive-intelligence" className="bg-pink-950/40 border border-pink-800/50 rounded-lg p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🧠</span>
                <h3 className="text-xl font-bold text-pink-400">Adaptive Intelligence</h3>
              </div>
              <p className="text-pink-200/80 mb-4">
                Self-improvement and continuous learning from optimization experience. Recognizes similar 
                problems, recalls successful strategies, and improves performance over time through pattern 
                recognition and cross-problem learning.
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-pink-300 mb-2">Key Benefits:</h4>
                <ul className="space-y-1 text-sm text-pink-400">
                  <li>• Gets faster and better with each optimization</li>
                  <li>• Recognizes similar problems automatically</li>
                  <li>• Applies lessons learned across problem types</li>
                  <li>• Reduces optimization time for recurring problems</li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-pink-800/50">
                <p className="text-xs text-pink-300/80">
                  <strong>Use Cases:</strong> Organizations running many similar optimizations, long-term 
                  optimization projects, or when you want the system to improve automatically over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How They Work Together */}
        <section className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            How the Pillars Work Together
          </h2>
          <p className="text-gray-400 mb-4">
            The three pillars are designed to complement each other, creating a comprehensive optimization 
            system that's intelligent, transparent, and continuously improving:
          </p>
          <div className="space-y-3 text-gray-300">
            <div className="flex gap-3">
              <span className="text-blue-400 font-bold">1.</span>
              <span><strong className="text-gray-200">Agentic Intelligence</strong> analyzes your problem and selects the optimal strategy</span>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 font-bold">2.</span>
              <span><strong className="text-gray-200">Interpretable Intelligence</strong> explains the decision-making process and provides audit trails</span>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-bold">3.</span>
              <span><strong className="text-gray-200">Adaptive Intelligence</strong> learns from the optimization to improve future performance</span>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            You can enable all three for maximum capability, or selectively enable only the pillars you need 
            to balance performance and compute costs.
          </p>
        </section>

        {/* Technical Configuration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Technical Configuration
          </h2>
          <p className="text-gray-400 mb-6">
            Configure the three pillars using presets, simple flags, or advanced options.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Preset Configurations</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Quick-start with predefined configurations optimized for different use cases:
              </p>
              <CodeBlock
                code={presetConfig}
                language="python"
                title="Using Preset Configurations"
              />
              <div className="bg-[#0f1419] border border-gray-800 rounded-lg p-4 mt-4">
                <h4 className="text-sm font-semibold text-gray-200 mb-3">Available Presets</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>
                    <strong className="text-gray-200">development:</strong> Fast iteration, basic explanations, minimal overhead
                  </div>
                  <div>
                    <strong className="text-gray-200">production:</strong> Balanced performance, standard explanations, enterprise monitoring
                  </div>
                  <div>
                    <strong className="text-gray-200">research:</strong> Maximum capabilities, comprehensive explanations, full learning enabled
                  </div>
                  <div>
                    <strong className="text-gray-200">enterprise:</strong> Full features, advanced monitoring, compliance features, audit trails
                  </div>
                  <div>
                    <strong className="text-gray-200">minimal:</strong> Core optimization only, no AI systems, fastest execution
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Simple Configuration</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Enable specific core pillars with simple boolean flags and basic parameters:
              </p>
              <CodeBlock
                code={simpleConfig}
                language="python"
                title="Simple Intelligence Configuration"
              />
              <div className="bg-[#0f1419] border border-gray-800 rounded-lg p-4 mt-4">
                <h4 className="text-sm font-semibold text-gray-200 mb-3">Configuration Options</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">use_agentic_intelligence</strong> (bool): Enable multi-agent coordination</li>
                  <li><strong className="text-gray-200">use_interpretable_intelligence</strong> (bool): Enable explainability</li>
                  <li><strong className="text-gray-200">use_adaptive_intelligence</strong> (bool): Enable learning system</li>
                  <li><strong className="text-gray-200">explanation_level</strong> (int, 0-5): Detail level for explanations</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Advanced Configuration</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Fine-tune every aspect of the core pillars with complete configuration objects:
              </p>
              <CodeBlock
                code={advancedConfig}
                language="python"
                title="Advanced Intelligence Configuration"
              />
              <div className="bg-[#0f1419] border border-gray-800 rounded-lg p-4 mt-4">
                <h4 className="text-sm font-semibold text-gray-200 mb-3">Advanced Options</h4>
                <div className="space-y-3 text-sm text-gray-400">
                  <div>
                    <strong className="text-gray-200">Agentic:</strong> max_agents_per_problem, consensus_threshold, agent_timeout
                  </div>
                  <div>
                    <strong className="text-gray-200">Interpretable:</strong> explanation_level, async_explanations, include_visualizations, natural_language
                  </div>
                  <div>
                    <strong className="text-gray-200">Adaptive:</strong> learning_enabled, cross_problem_learning, memory_retention, meta_learning
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-200 mb-4">REST API Configuration</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Configure the core pillars via REST API requests:
              </p>
              <CodeBlock
                code={restAPIConfig}
                language="bash"
                title="REST API - Intelligence Configuration"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-200 mb-4">JavaScript SDK Configuration</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Configure the core pillars using the JavaScript SDK:
              </p>
              <CodeBlock
                code={javascriptConfig}
                language="javascript"
                title="JavaScript SDK - Intelligence Configuration"
              />
            </div>
          </div>
        </section>

        {/* Cost vs Capability Trade-offs */}
        <section className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Cost vs Capability Trade-offs
          </h2>
          <p className="text-gray-400 mb-6">
            Each core pillar can be independently enabled or disabled to balance performance and capabilities:
          </p>
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
        </section>
      </div>
    </div>
  )
}
