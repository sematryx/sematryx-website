export default function Features() {
  // The core optimization engine - 3 pillars
  const enginePillars = [
    {
      title: "Agentic",
      subtitle: "Multi-Agent Coordination",
      description: "Research agents, validation engineers, and performance analysts collaborate to provide consensus-based optimization strategies and real-time performance analysis.",
      icon: "🤖",
      features: [
        "Multi-agent collaboration",
        "Consensus-based strategy selection",
        "Real-time performance analysis",
        "Autonomous decision-making"
      ]
    },
    {
      title: "Expository",
      subtitle: "Explainability & Transparency",
      description: "Comprehensive explanation of all optimization decisions with configurable explanation levels (0-5) for compute cost control. Natural language summaries, technical logs, and interactive visualizations.",
      icon: "📖",
      features: [
        "Configurable explanation levels",
        "Natural language summaries",
        "Technical decision logs",
        "Interactive visualizations"
      ]
    },
    {
      title: "Autodidactic",
      subtitle: "Self-Improvement & Learning",
      description: "Self-improvement and continuous learning from optimization experience. Problem signature detection, strategy variation, and cross-problem learning enable continuous performance improvement.",
      icon: "🧠",
      features: [
        "Problem signature detection",
        "Strategy variation",
        "Cross-problem learning",
        "Performance memory"
      ]
    }
  ]

  // Domain solution libraries - application layer
  const domains = [
    { name: "Financial Services", icon: "💼", examples: "Portfolio optimization, trading strategies, risk management" },
    { name: "Healthcare", icon: "🏥", examples: "Drug discovery, clinical trials, resource allocation" },
    { name: "Supply Chain", icon: "🚚", examples: "Inventory optimization, routing, demand forecasting" },
    { name: "Manufacturing", icon: "🏭", examples: "Process optimization, quality control, scheduling" },
    { name: "Energy", icon: "⚡", examples: "Grid optimization, trading, renewable integration" },
    { name: "AI/ML Research", icon: "🔬", examples: "Hyperparameter tuning, architecture search, experiment design" }
  ]

  return (
    <>
      {/* The AEAO Engine - Core 3 Pillars */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Core Engine</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The AEAO Engine
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three core pillars that power enterprise-grade optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enginePillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-t-4 border-primary-600">
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{pillar.title}</h3>
                <p className="text-sm font-medium text-primary-600 mb-3">{pillar.subtitle}</p>
                <p className="text-gray-700 mb-4">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-primary-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Intelligence - Domain Solution Libraries */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-2">Application Layer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vertical Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pre-built, production-ready solution libraries for your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-200 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{domain.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{domain.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{domain.examples}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">All domains include:</span>{' '}
              Production-ready frameworks • Automatic code generation • Industry-specific constraints • FastAPI deployment
            </p>
          </div>
        </div>
      </div>
    </>
  )
}