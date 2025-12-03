export default function Features() {
  // The core optimization engine - 3 pillars (simplified for landing page)
  const enginePillars = [
    { title: "Agentic", subtitle: "Multi-Agent Coordination", icon: "🤖" },
    { title: "Expository", subtitle: "Explainability & Transparency", icon: "📖" },
    { title: "Autodidactic", subtitle: "Self-Improvement & Learning", icon: "🧠" }
  ]

  // Domain solution libraries - application layer
  const domains = [
    { name: "Financial Services", icon: "💼", tagline: "Portfolio optimization & regulatory compliance" },
    { name: "Healthcare", icon: "🏥", tagline: "Clinical trials & resource allocation" },
    { name: "Supply Chain", icon: "🚚", tagline: "Logistics & inventory optimization" },
    { name: "Manufacturing", icon: "🏭", tagline: "Process tuning & production scheduling" },
    { name: "Energy", icon: "⚡", tagline: "Grid management & market optimization" },
    { name: "AI/ML Research", icon: "🔬", tagline: "Hyperparameter & architecture search" }
  ]

  return (
    <>
      {/* The AEAO Engine - Core 3 Pillars */}
      <div className="py-24 bg-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary-400 uppercase tracking-wide mb-2">Core Engine</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The <span className="text-primary-400">AEAO</span> Engine
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three core pillars that power enterprise-grade optimization
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Agentic - Sky Blue */}
            <div className="bg-sky-950/40 p-6 rounded-xl border border-sky-800/50 text-center">
              <span className="text-4xl block mb-3">{enginePillars[0].icon}</span>
              <h3 className="text-xl font-bold text-sky-400 mb-1">{enginePillars[0].title}</h3>
              <p className="text-sm text-sky-300/70">{enginePillars[0].subtitle}</p>
            </div>

            {/* Expository - Green */}
            <div className="bg-green-950/40 p-6 rounded-xl border border-green-800/50 text-center">
              <span className="text-4xl block mb-3">{enginePillars[1].icon}</span>
              <h3 className="text-xl font-bold text-green-400 mb-1">{enginePillars[1].title}</h3>
              <p className="text-sm text-green-300/70">{enginePillars[1].subtitle}</p>
            </div>

            {/* Autodidactic - Pink */}
            <div className="bg-pink-950/40 p-6 rounded-xl border border-pink-800/50 text-center">
              <span className="text-4xl block mb-3">{enginePillars[2].icon}</span>
              <h3 className="text-xl font-bold text-pink-400 mb-1">{enginePillars[2].title}</h3>
              <p className="text-sm text-pink-300/70">{enginePillars[2].subtitle}</p>
            </div>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {domains.map((domain, idx) => (
              <div key={idx} className="bg-[#242b3d] p-4 rounded-xl border border-gray-700 hover:border-orange-600/50 transition-colors text-center">
                <span className="text-4xl block mb-2">{domain.icon}</span>
                <h3 className="text-sm font-bold text-white mb-1">{domain.name}</h3>
                <p className="text-xs text-gray-500">{domain.tagline}</p>
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