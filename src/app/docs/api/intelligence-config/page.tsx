import Link from 'next/link'

export default function ThreeIntelligencePillarsPage() {
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
            <div className="bg-sky-950/40 border border-sky-800/50 rounded-lg p-6">
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
              <div className="mt-4">
                <Link
                  href="/docs/concepts/agentic-intelligence"
                  className="text-sm text-sky-400 hover:text-sky-300 underline"
                >
                  View Developer Guide →
                </Link>
              </div>
            </div>

            <div className="bg-green-950/40 border border-green-800/50 rounded-lg p-6">
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
              <div className="mt-4">
                <Link
                  href="/docs/concepts/interpretable-intelligence"
                  className="text-sm text-green-400 hover:text-green-300 underline"
                >
                  View Developer Guide →
                </Link>
              </div>
            </div>

            <div className="bg-pink-950/40 border border-pink-800/50 rounded-lg p-6">
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
              <div className="mt-4">
                <Link
                  href="/docs/concepts/adaptive-intelligence"
                  className="text-sm text-pink-400 hover:text-pink-300 underline"
                >
                  View Developer Guide →
                </Link>
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

        {/* Developer Guides */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Developer Guides
          </h2>
          <p className="text-gray-400 mb-6">
            Learn how to configure and use each pillar in your applications:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/docs/concepts/agentic-intelligence"
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-sky-500 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🤖</span>
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-sky-400 transition-colors">
                  Agentic Intelligence
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                Configure multi-agent coordination, strategy selection, and consensus mechanisms
              </p>
            </Link>
            <Link
              href="/docs/concepts/interpretable-intelligence"
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-green-500 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📖</span>
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-green-400 transition-colors">
                  Interpretable Intelligence
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                Configure explanation levels, async processing, and audit trail generation
              </p>
            </Link>
            <Link
              href="/docs/concepts/adaptive-intelligence"
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-pink-500 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🧠</span>
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-pink-400 transition-colors">
                  Adaptive Intelligence
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                Configure learning systems, pattern recognition, and cross-problem learning
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
