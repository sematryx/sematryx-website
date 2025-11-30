export default function Features() {
  const tetradPillars = [
    {
      title: "Agentic Intelligence",
      subtitle: "Multi-Agent Coordination",
      description: "Research agents, validation engineers, and performance analysts collaborate to provide consensus-based optimization strategies and real-time performance analysis.",
      icon: "🤖",
      color: "blue",
      features: [
        "Multi-agent collaboration",
        "Consensus-based strategy selection",
        "Real-time performance analysis",
        "Autonomous decision-making"
      ]
    },
    {
      title: "Expository Intelligence",
      subtitle: "Explainability & Transparency",
      description: "Comprehensive explanation of all optimization decisions with configurable explanation levels (0-5) for compute cost control. Natural language summaries, technical logs, and interactive visualizations.",
      icon: "📖",
      color: "green",
      features: [
        "Configurable explanation levels",
        "Natural language summaries",
        "Technical decision logs",
        "Interactive visualizations"
      ]
    },
    {
      title: "Autodidactic Intelligence",
      subtitle: "Self-Improvement & Learning",
      description: "Self-improvement and continuous learning from optimization experience. Problem signature detection, strategy variation, and cross-problem learning enable continuous performance improvement.",
      icon: "🧠",
      color: "purple",
      features: [
        "Problem signature detection",
        "Strategy variation",
        "Cross-problem learning",
        "Performance memory"
      ]
    },
    {
      title: "Domain Extension",
      subtitle: "Business Domain Libraries",
      description: "Build domain-specific applications with AEAO as your optimization backend. Engine-domain separation enables rapid development of specialized solutions across 13+ business domains, with automatic code generation and production-ready deployment.",
      icon: "🏗️",
      color: "orange",
      features: [
        "13+ business domains",
        "Automatic code generation",
        "FastAPI deployment",
        "Pattern recommendations"
      ]
    }
  ]

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The AEAO Tetrad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four central pillars that provide enterprise-grade optimization with full configurability and business acceleration capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {tetradPillars.map((pillar, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-primary-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{pillar.icon}</div>
                <div className="flex-1">
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
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Granular Configuration Control
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Enable or disable each pillar independently, fine-tune specific features, and control compute cost vs capability trade-offs. 
            Use preset configurations (development, production, research, enterprise) or create custom configurations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">Preset Configurations</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">Individual Feature Control</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">Compute Cost Management</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">Performance Modes</span>
          </div>
        </div>
      </div>
    </div>
  )
}