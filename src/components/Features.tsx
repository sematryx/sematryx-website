export default function Features() {
  // The core optimization engine - 3 pillars
  const enginePillars = [
    { 
      title: "Agentic Core", 
      description: "Uses Meta-Policy Learning to dynamically select and coordinate solvers (CMA-ES, Bayesian, Differential Evolution) based on problem topology.",
      icon: "🤖",
      features: ["Meta-Strategy Selection", "Multi-Agent Coordination", "Dynamic Constraint Handling"]
    },
    { 
      title: "Interpretable Layer", 
      description: "Delivers transparency via a dedicated Explainability Engine that generates audit trails, decision rationales, and visual diagnostics.",
      icon: "📖",
      features: ["Decision Rationale", "Full Audit Trails", "Visual Diagnostics"]
    },
    { 
      title: "Adaptive Memory", 
      description: "Leverages Vector Memory (Qdrant) and Knowledge Graphs (Neo4j) to recall past optimizations and improve continuously.",
      icon: "🧠",
      features: ["Vector Context Retrieval", "Knowledge Graph Mapping", "Transfer Learning"]
    }
  ]

  return (
    <>
      {/* Sematryx Intelligence - Core 3 Pillars */}
      <div className="pt-12 md:pt-16 pb-16 md:pb-20 bg-base border-t border-elevated-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-2">Under the Hood</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Sematryx Intelligence
              <span className="text-xs font-normal text-text-tertiary ml-2 align-middle">Patent Pending</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Three core capabilities that make Sematryx different from traditional optimization tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Agentic */}
            <div className="bg-elevated p-8 rounded-xl border border-elevated-3 border-l-4 border-l-accent-agentic text-left hover:bg-elevated-2 hover:shadow-lg hover:shadow-accent-agentic/10 transition-all cursor-pointer group">
              <span className="text-4xl block mb-4 bg-accent-agentic/10 w-16 h-16 flex items-center justify-center rounded-lg">{enginePillars[0].icon}</span>
              <h3 className="text-xl font-bold text-accent-agentic mb-3">{enginePillars[0].title}</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">{enginePillars[0].description}</p>
              <div className="flex flex-wrap gap-2">
                {enginePillars[0].features.map((feat, i) => (
                  <span key={i} className="text-xs font-medium bg-base px-2.5 py-1 rounded-full text-text-tertiary border border-elevated-3 group-hover:border-accent-agentic/30 transition-colors">
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Interpretable */}
            <div className="bg-elevated p-8 rounded-xl border border-elevated-3 border-l-4 border-l-accent-expository text-left hover:bg-elevated-2 hover:shadow-lg hover:shadow-accent-expository/10 transition-all cursor-pointer group">
              <span className="text-4xl block mb-4 bg-accent-expository/10 w-16 h-16 flex items-center justify-center rounded-lg">{enginePillars[1].icon}</span>
              <h3 className="text-xl font-bold text-accent-expository mb-3">{enginePillars[1].title}</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">{enginePillars[1].description}</p>
              <div className="flex flex-wrap gap-2">
                {enginePillars[1].features.map((feat, i) => (
                  <span key={i} className="text-xs font-medium bg-base px-2.5 py-1 rounded-full text-text-tertiary border border-elevated-3 group-hover:border-accent-expository/30 transition-colors">
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Adaptive */}
            <div className="bg-elevated p-8 rounded-xl border border-elevated-3 border-l-4 border-l-accent-autodidactic text-left hover:bg-elevated-2 hover:shadow-lg hover:shadow-accent-autodidactic/10 transition-all cursor-pointer group">
              <span className="text-4xl block mb-4 bg-accent-autodidactic/10 w-16 h-16 flex items-center justify-center rounded-lg">{enginePillars[2].icon}</span>
              <h3 className="text-xl font-bold text-accent-autodidactic mb-3">{enginePillars[2].title}</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">{enginePillars[2].description}</p>
              <div className="flex flex-wrap gap-2">
                {enginePillars[2].features.map((feat, i) => (
                  <span key={i} className="text-xs font-medium bg-base px-2.5 py-1 rounded-full text-text-tertiary border border-elevated-3 group-hover:border-accent-autodidactic/30 transition-colors">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
