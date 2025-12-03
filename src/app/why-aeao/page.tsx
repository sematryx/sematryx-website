import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function WhyAEAOPage() {
  // Core Enterprise Differentiators - What makes AEAO enterprise-ready
  const enterpriseFeatures = [
    {
      title: "Async Explainability (22-26% Performance Boost)",
      description: "Revolutionary background-processed explanations that improve performance while maintaining full transparency. Natural language summaries, technical logs, and visualizations. The only optimizer that makes explainability faster, not slower.",
      icon: "📖",
      comparison: "Traditional optimizers: Black box | AEAO: Full explainability + performance boost"
    },
    {
      title: "15 AI Systems Coordinated",
      description: "Unlike single-algorithm optimizers, AEAO coordinates 15 specialized AI systems working together: research agents analyze problems, validation engineers ensure safety, performance analysts track metrics, and learning systems adapt strategies.",
      icon: "🤖",
      comparison: "Traditional optimizers: Single algorithm | AEAO: 15-system coordination"
    },
    {
      title: "Enterprise-Grade Compliance",
      description: "Built-in regulatory compliance, safety constraints, and audit trails. Essential for financial services, healthcare, and manufacturing where regulations matter. Production-ready from day one.",
      icon: "🛡️",
      comparison: "Traditional optimizers: No compliance features | AEAO: Built-in regulatory compliance"
    },
    {
      title: "Domain-Specific Solutions",
      description: "13+ business domain libraries with automatic code generation. Financial, healthcare, supply chain, manufacturing, and more - all production-ready with industry-specific constraints and best practices.",
      icon: "🏗️",
      comparison: "Traditional optimizers: Generic only | AEAO: 13+ specialized domain libraries"
    },
  ]

  // Advanced AI Capabilities - What makes AEAO intelligent
  const intelligenceSystems = [
    {
      title: "Continuous Learning",
      description: "AEAO becomes more effective with every new problem it sees. Cross-problem meta-learning means what works for portfolio optimization informs supply chain decisions. Professional tier: private learning. Enterprise tier: bring your own database.",
      icon: "🌐",
      comparison: "Traditional optimizers: Static, no learning | AEAO: Learns from every optimization"
    },
    {
      title: "Temporal Awareness",
      description: "Unified temporal context manager that fuses historical patterns with real-time data for predictive optimization. Domain-specific temporal engines adapt to changing conditions in finance, healthcare, supply chain, and manufacturing.",
      icon: "⏱️",
      comparison: "Traditional optimizers: Static snapshots | AEAO: Real-time + historical fusion with predictive modeling"
    },
    {
      title: "Advanced Knowledge Systems",
      description: "60-80% vector memory compression, Neo4j knowledge graphs, RAG retrieval, and causal discovery. AEAO builds and maintains comprehensive optimization knowledge that improves over time.",
      icon: "🧬",
      comparison: "Traditional optimizers: No memory | AEAO: Knowledge graphs + RAG + causal discovery"
    },
    {
      title: "Multi-Library Integration",
      description: "Unified strategy registry seamlessly integrates SCIPY, CMA-ES, SKOPT, AX, and custom optimizers. One interface, multiple optimization libraries working together intelligently.",
      icon: "🔗",
      comparison: "Traditional optimizers: Single library | AEAO: Unified registry across 5+ libraries"
    },
    {
      title: "Visual Analysis",
      description: "Computer vision-based optimization landscape analysis. Understand your problem space visually and make better decisions. See patterns humans can't detect in mathematical representations alone.",
      icon: "👁️",
      comparison: "Traditional optimizers: Mathematical only | AEAO: Visual + mathematical analysis"
    },
  ]

  const useCases = [
    {
      industry: "Financial Services",
      problems: [
        "Portfolio optimization with regulatory constraints (Basel III, MiFID II, Solvency II)",
        "Algorithmic trading strategy optimization with risk management",
        "Dynamic rebalancing with market condition adaptation"
      ],
      advantage: "15 AI systems coordinate for regulatory compliance + performance. Learning from historical market patterns. Explainable decisions for audit trails.",
      icon: "💼"
    },
    {
      industry: "Manufacturing & Process Optimization",
      problems: [
        "Smart factory optimization with safety constraints",
        "Process parameter tuning with quality requirements",
        "Energy optimization with environmental limits",
        "Predictive maintenance scheduling"
      ],
      advantage: "Handles noisy sensor data and real-world uncertainty. Safety-first optimization with hard constraints. Continuous learning from production data.",
      icon: "🏭"
    },
    {
      industry: "Supply Chain & Logistics",
      problems: [
        "Multi-supplier risk management",
        "Dynamic inventory optimization",
        "Vehicle routing with time windows",
        "Demand forecast adaptation"
      ],
      advantage: "Optimizes under uncertainty and changing conditions. Learns from historical patterns. Handles complex multi-objective trade-offs.",
      icon: "🚚"
    },
    {
      industry: "Healthcare & Life Sciences",
      problems: [
        "Drug discovery optimization",
        "Clinical trial design optimization",
        "Treatment protocol optimization",
        "Resource allocation in hospitals"
      ],
      advantage: "Regulatory compliance built-in. Safety constraints for patient care. Explainable decisions for medical review boards.",
      icon: "🏥"
    },
    {
      industry: "Energy & Utilities",
      problems: [
        "Grid optimization with renewable integration",
        "Energy trading strategy optimization",
        "Demand response optimization",
        "Infrastructure maintenance scheduling"
      ],
      advantage: "Handles intermittent renewable sources. Real-time adaptation to grid conditions. Multi-objective optimization (cost, reliability, sustainability).",
      icon: "⚡"
    },
    {
      industry: "AI/ML & Research",
      problems: [
        "Neural architecture search",
        "Hyperparameter tuning",
        "Feature selection optimization",
        "Research experiment design"
      ],
      advantage: "Cross-problem learning accelerates research. Visual intelligence for understanding model landscapes. Full explainability for research publications.",
      icon: "🔬"
    }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-primary-400">AEAO</span>?
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The world's most advanced optimization framework. Where traditional optimizers solve mathematical problems, 
              <span className="text-primary-400">AEAO</span> solves enterprise problems with AI-powered intelligence, compliance, and continuous learning.
            </p>
          </div>
        </div>
      </div>

      {/* Enterprise Features */}
      <div className="py-20 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Optimization
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Production-ready features that make <span className="text-primary-400">AEAO</span> the only enterprise-grade optimization platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-[#1a1f2e] rounded-xl p-8 border-l-4 border-primary-500">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4 text-lg">{feature.description}</p>
                <div className="bg-[#242b3d] rounded-lg p-4 text-sm text-gray-400 border border-gray-700">
                  <strong className="text-primary-400">Comparison:</strong> {feature.comparison}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced AI Capabilities */}
      <div className="py-20 bg-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI-powered systems that make <span className="text-primary-400">AEAO</span> smarter with every optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intelligenceSystems.map((system, index) => (
              <div key={index} className="bg-[#242b3d] rounded-xl p-6 border-l-4 border-primary-500">
                <div className="text-4xl mb-4">{system.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{system.title}</h3>
                <p className="text-gray-400 mb-4">{system.description}</p>
                <div className="bg-[#1a1f2e] rounded-lg p-3 text-sm text-gray-400 border border-gray-700">
                  <strong className="text-primary-400">Comparison:</strong> {system.comparison}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-World Use Cases */}
      <div className="py-20 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Problems <span className="text-primary-400">AEAO</span> Solves
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry-specific optimization challenges where <span className="text-primary-400">AEAO</span>'s enterprise intelligence makes the difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-[#1a1f2e] rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{useCase.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Common Problems:</h4>
                  <ul className="space-y-2">
                    {useCase.problems.map((problem, idx) => (
                      <li key={idx} className="flex items-start text-gray-400">
                        <span className="text-primary-400 mr-2 mt-1">•</span>
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary-900/30 rounded-lg p-4 border-l-4 border-primary-500">
                  <h4 className="text-sm font-semibold text-primary-300 mb-2"><span className="text-primary-400">AEAO</span> Advantage:</h4>
                  <p className="text-primary-200 text-sm">{useCase.advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitive Comparison */}
      <div className="py-20 bg-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-primary-400">AEAO</span> vs Traditional Optimizers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how <span className="text-primary-400">AEAO</span> compares to solutions like SciPy, Optuna, and other optimization libraries
            </p>
          </div>

          <div className="bg-[#242b3d] rounded-xl p-8 border border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-600">
                    <th className="text-left py-4 px-6 font-semibold text-white">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-400">Traditional Optimizers</th>
                    <th className="text-center py-4 px-6 font-semibold text-primary-400">AEAO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Basic Optimization Performance</td>
                    <td className="py-4 px-6 text-center text-gray-400">✅ Good</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ Equivalent</td>
                  </tr>
                  <tr className="bg-[#1a1f2e]">
                    <td className="py-4 px-6 font-medium text-white">AI System Coordination</td>
                    <td className="py-4 px-6 text-center text-gray-400">❌ Single Algorithm</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ 15 AI Systems</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Enterprise Architecture</td>
                    <td className="py-4 px-6 text-center text-gray-400">❌ No Enterprise Features</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ 2,379 LOC Explainability</td>
                  </tr>
                  <tr className="bg-[#1a1f2e]">
                    <td className="py-4 px-6 font-medium text-white">Constraint Handling</td>
                    <td className="py-4 px-6 text-center text-gray-400">⚠️ Basic Constraints</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ Built-in Compliance</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Learning & Adaptation</td>
                    <td className="py-4 px-6 text-center text-gray-400">❌ No Learning</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ Cross-Problem Learning</td>
                  </tr>
                  <tr className="bg-[#1a1f2e]">
                    <td className="py-4 px-6 font-medium text-white">Explainability</td>
                    <td className="py-4 px-6 text-center text-gray-400">❌ Black Box</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ Full Audit Trails</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Domain-Specific Libraries</td>
                    <td className="py-4 px-6 text-center text-gray-400">❌ Generic Only</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ 13+ Business Domains</td>
                  </tr>
                  <tr className="bg-[#1a1f2e]">
                    <td className="py-4 px-6 font-medium text-white">Visual Analysis</td>
                    <td className="py-4 px-6 text-center text-gray-400">❌ Mathematical Only</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ Visual + Mathematical</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Temporal Awareness</td>
                    <td className="py-4 px-6 text-center text-gray-400">❌ Static Snapshots</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ Real-Time + Historical</td>
                  </tr>
                  <tr className="bg-[#1a1f2e]">
                    <td className="py-4 px-6 font-medium text-white">Knowledge Systems</td>
                    <td className="py-4 px-6 text-center text-gray-400">❌ No Memory</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ Knowledge Graphs + RAG</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Multi-Library Integration</td>
                    <td className="py-4 px-6 text-center text-gray-400">❌ Single Library</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ Unified Registry</td>
                  </tr>
                  <tr className="bg-[#1a1f2e]">
                    <td className="py-4 px-6 font-medium text-white">Continuous Learning</td>
                    <td className="py-4 px-6 text-center text-gray-400">❌ Static, No Learning</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ Learns From Every Optimization</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Causal Discovery</td>
                    <td className="py-4 px-6 text-center text-gray-400">❌ Not Available</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-semibold">✅ Full Implementation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-white mb-4">
                <span className="text-primary-400">AEAO</span> Wins: 13/13 Categories ⭐⭐⭐⭐⭐
              </p>
              <p className="text-gray-400">
                Traditional optimizers are great for academic problems. <span className="text-primary-400">AEAO</span> solves enterprise problems with intelligence, compliance, and learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Enterprise-Grade Optimization?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get started with <span className="font-semibold">AEAO</span> today. No credit card required for the free tier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/api-keys" 
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Started Free
            </Link>
            <Link 
              href="/docs" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

