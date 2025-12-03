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
    { 
      name: "Financial Services", 
      icon: "💼", 
      tagline: "Optimize portfolios while meeting regulatory requirements",
      realWorldProblems: [
        "Balance risk-return across 1000+ assets while staying Basel III compliant",
        "Rebalance portfolios in real-time as market conditions shift",
        "Optimize trading execution to minimize slippage and market impact"
      ]
    },
    { 
      name: "Healthcare", 
      icon: "🏥", 
      tagline: "Accelerate discovery and improve patient outcomes",
      realWorldProblems: [
        "Design clinical trials that maximize statistical power with fewer patients",
        "Optimize drug compound properties across multiple competing objectives",
        "Allocate hospital resources during demand surges"
      ]
    },
    { 
      name: "Supply Chain", 
      icon: "🚚", 
      tagline: "Reduce costs while improving service levels",
      realWorldProblems: [
        "Route 500+ vehicles daily with time windows and capacity constraints",
        "Set inventory levels across warehouses to minimize stockouts and carrying costs",
        "Replan dynamically when suppliers fail or demand spikes"
      ]
    },
    { 
      name: "Manufacturing", 
      icon: "🏭", 
      tagline: "Maximize throughput while maintaining quality",
      realWorldProblems: [
        "Tune 50+ process parameters to hit quality targets with minimal waste",
        "Schedule production across machines to meet deadlines and reduce changeovers",
        "Predict and prevent equipment failures before they cause downtime"
      ]
    },
    { 
      name: "Energy", 
      icon: "⚡", 
      tagline: "Balance grid stability with cost and sustainability",
      realWorldProblems: [
        "Integrate intermittent renewables while maintaining grid reliability",
        "Optimize bidding strategies across day-ahead and real-time markets",
        "Manage demand response programs to reduce peak load"
      ]
    },
    { 
      name: "AI/ML Research", 
      icon: "🔬", 
      tagline: "Find better models faster with less compute",
      realWorldProblems: [
        "Search neural architecture spaces efficiently without exhaustive trials",
        "Tune hyperparameters across distributed training runs",
        "Design experiments that maximize learning per compute dollar"
      ]
    }
  ]

  return (
    <>
      {/* The AEAO Engine - Core 3 Pillars */}
      <div className="py-24 bg-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary-400 uppercase tracking-wide mb-2">Core Engine</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The AEAO Engine
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three core pillars that power enterprise-grade optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enginePillars.map((pillar, index) => (
              <div key={index} className="bg-[#242b3d] p-8 rounded-xl hover:bg-[#2a3347] transition-all duration-200 border-t-4 border-primary-500">
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{pillar.title}</h3>
                <p className="text-sm font-medium text-primary-400 mb-3">{pillar.subtitle}</p>
                <p className="text-gray-400 mb-4">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <span className="text-primary-400 mr-2">✓</span>
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
      <div className="py-24 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-orange-400 uppercase tracking-wide mb-2">Application Layer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vertical Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pre-built, production-ready solution libraries for your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, idx) => (
              <div key={idx} className="group">
                {/* Domain Header Tile */}
                <div className="bg-[#242b3d] p-5 rounded-t-xl border border-gray-700 border-b-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{domain.icon}</span>
                    <h3 className="text-lg font-bold text-white">{domain.name}</h3>
                  </div>
                  <p className="text-sm text-gray-400">{domain.tagline}</p>
                </div>
                
                {/* Connected Real-World Problems Panel */}
                <div className="bg-[#1a1f2e] p-4 rounded-b-xl border border-gray-700 border-t-0">
                  <ul className="space-y-2">
                    {domain.realWorldProblems.map((problem, pidx) => (
                      <li key={pidx} className="text-xs text-gray-500 flex items-start">
                        <span className="text-orange-400 mr-2 mt-0.5">→</span>
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500">
              <span className="font-semibold text-gray-300">All domains include:</span>{' '}
              Production-ready frameworks • Automatic code generation • Industry-specific constraints • FastAPI deployment
            </p>
          </div>
        </div>
      </div>
    </>
  )
}