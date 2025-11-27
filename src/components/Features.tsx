export default function Features() {
  const features = [
    {
      title: "AI-Enhanced Optimization",
      description: "Intelligence Hub coordinates 14+ AI systems for adaptive optimization with cross-problem learning and strategy synthesis.",
      icon: "🧠"
    },
    {
      title: "MasterOptimizer Engine",
      description: "10+ integrated optimizers including self-improving, multi-fidelity, and specialized algorithms for diverse problem types.",
      icon: "⚙️"
    },
    {
      title: "Domain Libraries",
      description: "Specialized optimization libraries for Financial, Healthcare, Supply Chain, AI/ML, and Marketing domains.",
      icon: "📚"
    },
    {
      title: "Enterprise Platform",
      description: "Production-ready API server, authentication, monitoring, and business intelligence with comprehensive SDKs.",
      icon: "🏢"
    },
    {
      title: "Knowledge Management",
      description: "Neo4j knowledge graphs and vector storage for RAG, semantic search, and temporal intelligence.",
      icon: "🔍"
    },
    {
      title: "MCP Integration",
      description: "Seamless integration with Model Context Protocol for enhanced AI model interactions and data exchange.",
      icon: "🔗"
    }
  ]

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to automate
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to scale with your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}