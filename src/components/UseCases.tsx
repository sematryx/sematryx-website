import Link from 'next/link'

export default function UseCases() {
  const useCases = [
    {
      title: "Financial Portfolio Optimization",
      description: "Multi-objective risk-return optimization with real-time regulatory compliance (Basel III, MiFID II). Dynamic rebalancing that learns from market patterns.",
      icon: "💼",
      industry: "Financial Services"
    },
    {
      title: "Smart Factory Optimization",
      description: "Process parameter tuning with safety constraints, quality requirements, and energy optimization. Handles noisy sensor data and real-world uncertainty.",
      icon: "🏭",
      industry: "Manufacturing"
    },
    {
      title: "Supply Chain Optimization",
      description: "Multi-supplier risk management, dynamic inventory optimization, and vehicle routing with time windows. Adapts to changing demand forecasts.",
      icon: "🚚",
      industry: "Supply Chain"
    },
    {
      title: "Drug Discovery",
      description: "Optimize molecular structures for drug discovery with toxicity and solubility constraints. Regulatory compliance built-in for clinical trials.",
      icon: "🧪",
      industry: "Healthcare"
    },
    {
      title: "Energy Grid Optimization",
      description: "Grid optimization with renewable integration, energy trading strategies, and demand response. Real-time adaptation to grid conditions.",
      icon: "⚡",
      industry: "Energy & Utilities"
    },
    {
      title: "Neural Architecture Search",
      description: "Hyperparameter tuning and neural architecture search with cross-problem learning. Visual intelligence for understanding model landscapes.",
      icon: "🤖",
      industry: "AI/ML Research"
    }
  ]

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real-World Problems AEAO Solves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Industry-specific optimization challenges where AEAO's enterprise intelligence makes the difference
          </p>
          <Link 
            href="/why-aeao" 
            className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2"
          >
            Learn more about AEAO's advantages
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-200">
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <div className="text-sm font-semibold text-primary-600 mb-2 uppercase tracking-wide">
                {useCase.industry}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-700">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

