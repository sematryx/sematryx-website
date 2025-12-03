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
  const domainLibrary = {
    title: "Domain Solution Libraries",
    description: "Pre-built, production-ready frameworks for 13+ business domains. Leverage the AEAO engine immediately for real-world problems in your industry—financial services, healthcare, supply chain, manufacturing, energy, and more.",
    icon: "🏗️",
    features: [
      "Financial Services & Trading",
      "Healthcare & Life Sciences",
      "Supply Chain & Logistics",
      "Manufacturing & Process",
      "Energy & Utilities",
      "AI/ML & Research"
    ],
    capabilities: [
      "Production-ready frameworks",
      "Automatic code generation",
      "Industry-specific constraints",
      "FastAPI deployment"
    ]
  }

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The AEAO Engine - Core 3 Pillars */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The AEAO Engine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three core pillars that power enterprise-grade optimization with full configurability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {enginePillars.map((pillar, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-primary-600">
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

        {/* Vertical Intelligence - Domain Solution Libraries */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vertical Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apply the AEAO engine to your industry with pre-built, production-ready solutions
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-orange-500 mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{domainLibrary.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{domainLibrary.title}</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-6">{domainLibrary.description}</p>
              <ul className="grid grid-cols-2 gap-2">
                {domainLibrary.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="text-orange-500 mr-2">✓</span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Supported Industries</h4>
              <div className="grid grid-cols-2 gap-3">
                {domainLibrary.features.map((domain, idx) => (
                  <div key={idx} className="bg-orange-50 px-4 py-3 rounded-lg text-sm font-medium text-gray-800 border border-orange-200">
                    {domain}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Control */}
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