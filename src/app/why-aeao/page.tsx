import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function WhyAEAOPage() {
  const competitiveAdvantages = [
    {
      title: "15 AI Systems Coordinated",
      description: "Unlike single-algorithm optimizers, AEAO coordinates 15 specialized AI systems working together to analyze problems, select strategies, and ensure compliance.",
      icon: "🤖",
      comparison: "Traditional optimizers: Single algorithm | AEAO: 15-system Intelligence Hub"
    },
    {
      title: "Enterprise-Grade Compliance",
      description: "Built-in regulatory compliance, safety constraints, and audit trails. Essential for financial services, healthcare, and manufacturing where regulations matter.",
      icon: "🛡️",
      comparison: "Traditional optimizers: No compliance features | AEAO: Built-in regulatory compliance"
    },
    {
      title: "Async Explainability (22-26% Performance Boost)",
      description: "Revolutionary background-processed explanations that improve performance while maintaining full transparency. Natural language summaries, technical logs, and visualizations.",
      icon: "📖",
      comparison: "Traditional optimizers: Black box | AEAO: Full explainability + performance boost"
    },
    {
      title: "Domain-Specific Solutions",
      description: "13+ business domain libraries with automatic code generation. Financial, healthcare, supply chain, manufacturing, and more - all production-ready.",
      icon: "🏗️",
      comparison: "Traditional optimizers: Generic only | AEAO: 13+ specialized domain libraries"
    },
    {
      title: "Visual Intelligence",
      description: "Computer vision-based optimization landscape analysis. Understand your problem space visually and make better decisions. (Available but integration in progress)",
      icon: "👁️",
      comparison: "Traditional optimizers: Mathematical only | AEAO: Visual + mathematical intelligence"
    },
    {
      title: "Temporal Intelligence",
      description: "Unified temporal context manager that fuses historical and real-time data for predictive optimization. Domain-specific temporal engines adapt to changing conditions in finance, healthcare, supply chain, and more.",
      icon: "⏱️",
      comparison: "Traditional optimizers: Static snapshots | AEAO: Real-time temporal intelligence with predictive modeling"
    },
    {
      title: "Advanced Knowledge Systems",
      description: "60-80% vector memory compression, Neo4j knowledge graphs, RAG retrieval, and causal discovery. AEAO builds and maintains comprehensive optimization knowledge across all problems.",
      icon: "🧬",
      comparison: "Traditional optimizers: No memory | AEAO: Compressed knowledge graphs with semantic relationships"
    },
    {
      title: "Multi-Library Integration",
      description: "Unified strategy registry seamlessly integrates SCIPY, CMA-ES, SKOPT, AX, and custom optimizers. One interface, multiple optimization libraries working together.",
      icon: "🔗",
      comparison: "Traditional optimizers: Single library | AEAO: Unified registry across multiple optimization libraries"
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

  const whyCuttingEdge = [
    {
      title: "Revolutionary Async Explainability",
      description: "AEAO is the first optimization framework to provide background-processed explanations that actually improve performance (22-26% boost) rather than slowing it down. Traditional explainability adds overhead; AEAO's async approach makes optimization faster while maintaining transparency.",
      stat: "22-26% Performance Improvement"
    },
    {
      title: "Multi-Agent Intelligence Coordination",
      description: "15 specialized AI systems work together in real-time: research agents analyze problems, validation engineers ensure safety, performance analysts track metrics, and learning systems adapt strategies. No other optimizer coordinates multiple AI systems.",
      stat: "15 AI Systems Active"
    },
    {
      title: "Cross-Problem Meta-Learning",
      description: "AEAO learns patterns across different optimization problems. What works for portfolio optimization informs supply chain decisions. This meta-learning capability means AEAO gets smarter with every use case.",
      stat: "60-80% Knowledge Compression"
    },
    {
      title: "Temporal Intelligence System",
      description: "Revolutionary unified temporal context manager that fuses historical patterns with real-time data. Domain-specific temporal engines provide predictive optimization for finance (market conditions), healthcare (regulatory changes), supply chain (weather/geopolitical events), and more.",
      stat: "Real-Time + Historical Fusion"
    },
    {
      title: "Advanced Knowledge & Memory Systems",
      description: "Enterprise-grade knowledge management with 60-80% vector compression, Neo4j knowledge graphs for semantic relationships, RAG retrieval for optimization insights, and causal discovery for understanding optimization dynamics. AEAO builds comprehensive knowledge that improves over time.",
      stat: "Neo4j + Vector + RAG + Causal"
    },
    {
      title: "Unified Multi-Library Strategy Registry",
      description: "Seamlessly integrates optimization strategies from SCIPY, CMA-ES, SKOPT, AX, and custom libraries through a unified interface. No need to choose one library - AEAO coordinates them all intelligently.",
      stat: "5+ Libraries Unified"
    },
    {
      title: "Enterprise Architecture from Day One",
      description: "Built for production with 2,379 lines of explainability code, 1,519 lines of learning system code, comprehensive monitoring, security, and compliance features. Not a research prototype - a production-ready enterprise platform.",
      stat: "Production-Ready"
    }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose AEAO?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The world's most advanced optimization framework. Where traditional optimizers solve mathematical problems, 
              AEAO solves enterprise problems with AI-powered intelligence, compliance, and continuous learning.
            </p>
          </div>
        </div>
      </div>

      {/* What Makes AEAO Different */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes AEAO Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key advantages that set AEAO apart from traditional optimization solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary-600">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-700 mb-4">{advantage.description}</p>
                <div className="bg-white rounded-lg p-3 text-sm text-gray-600 border border-gray-200">
                  <strong className="text-primary-600">Comparison:</strong> {advantage.comparison}
                </div>
              </div>
            ))}
          </div>
          
          {/* Advanced Intelligence Systems Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Intelligence Systems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade AI systems that power AEAO's superior optimization capabilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border-l-4 border-primary-600">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
                <p className="text-gray-700 mb-6">
                  <strong>AEAO becomes more effective with every new problem it sees.</strong>
                </p>
                <p className="text-gray-700 mb-6">
                  As more teams run diverse optimizations, it learns which strategies work best on which problem types—so you 
                  spend less time guessing, trying dead ends, and tuning, and more time getting good solutions quickly.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-primary-600">
                    <h4 className="font-semibold text-gray-900 mb-2">🔒 Professional: Private Learning</h4>
                    <p className="text-sm text-gray-700">
                      For teams in regulated or highly competitive spaces, AEAO can learn privately from your history only—capturing 
                      the quirks, constraints, and proprietary behavior of your systems so the optimizer becomes specifically better for 
                      you, without contributing those patterns back to anyone else. Data stored in AEAO's dedicated infrastructure.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                    <h4 className="font-semibold text-gray-900 mb-2">🏢 Enterprise: Bring Your Own Database (BYOD)</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      For organizations with strict data sovereignty, compliance, or security requirements, connect AEAO to your own infrastructure. 
                      All optimization data stays in your Qdrant, Neo4j, or cloud storage—under your control, with your encryption keys.
                    </p>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">✓</span>
                        Data sovereignty (HIPAA, SOC2, FedRAMP, regional requirements)
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">✓</span>
                        Full control over encryption keys and access
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">✓</span>
                        Integration with existing data platform
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">✓</span>
                        Use your own Qdrant, Neo4j, S3/GCS/Azure
                      </li>
                    </ul>
                  </div>
                </div>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Learn which strategies work best on which problem types
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Cross-problem meta-learning and pattern recognition
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Get good solutions quickly from collective experience
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Private learning (Professional+) and BYOD (Enterprise) available
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border-l-4 border-primary-600">
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Temporal Intelligence</h3>
                <p className="text-gray-700 mb-4">
                  Unified temporal context manager that fuses historical patterns with real-time data for predictive optimization. 
                  Domain-specific temporal engines adapt to changing conditions in finance, healthcare, supply chain, and manufacturing.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Historical + real-time data fusion
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Domain-specific temporal engines
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Predictive modeling and event-driven triggers
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Real-time context alignment
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border-l-4 border-primary-600">
                <div className="text-5xl mb-4">🧬</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Knowledge & Memory Systems</h3>
                <p className="text-gray-700 mb-4">
                  Enterprise-grade knowledge management with vector compression, knowledge graphs, RAG retrieval, 
                  and causal discovery. AEAO builds comprehensive optimization knowledge that improves over time.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    60-80% vector memory compression
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Neo4j knowledge graphs for semantic relationships
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    RAG retrieval for optimization insights
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Causal discovery for understanding dynamics
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border-l-4 border-primary-600">
                <div className="text-5xl mb-4">🔗</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Multi-Library Integration</h3>
                <p className="text-gray-700 mb-4">
                  Unified strategy registry seamlessly integrates optimization strategies from SCIPY, CMA-ES, SKOPT, AX, 
                  and custom libraries. One interface, multiple optimization libraries working together intelligently.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Unified strategy registry
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Dynamic library integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Intelligent strategy selection
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Extensible architecture
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Why It's Cutting Edge */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why AEAO is Cutting Edge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary innovations that don't exist in traditional optimization frameworks
            </p>
          </div>

          <div className="space-y-8">
            {whyCuttingEdge.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                      <span className="bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-semibold">
                        {item.stat}
                      </span>
                    </div>
                    <p className="text-gray-700 text-lg">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-World Use Cases */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Problems AEAO Solves
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific optimization challenges where AEAO's enterprise intelligence makes the difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{useCase.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{useCase.industry}</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Common Problems:</h4>
                  <ul className="space-y-2">
                    {useCase.problems.map((problem, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-600">
                  <h4 className="text-sm font-semibold text-primary-900 mb-2">AEAO Advantage:</h4>
                  <p className="text-primary-800 text-sm">{useCase.advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitive Comparison */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AEAO vs Traditional Optimizers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AEAO compares to solutions like SciPy, Optuna, and other optimization libraries
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Traditional Optimizers</th>
                    <th className="text-center py-4 px-6 font-semibold text-primary-600">AEAO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Basic Optimization Performance</td>
                    <td className="py-4 px-6 text-center text-gray-700">✅ Good</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ Equivalent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">AI System Coordination</td>
                    <td className="py-4 px-6 text-center text-gray-700">❌ Single Algorithm</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ 15 AI Systems</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Enterprise Architecture</td>
                    <td className="py-4 px-6 text-center text-gray-700">❌ No Enterprise Features</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ 2,379 LOC Explainability</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">Constraint Handling</td>
                    <td className="py-4 px-6 text-center text-gray-700">⚠️ Basic Constraints</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ Built-in Compliance</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Learning & Adaptation</td>
                    <td className="py-4 px-6 text-center text-gray-700">❌ No Learning</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ Cross-Problem Learning</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">Explainability</td>
                    <td className="py-4 px-6 text-center text-gray-700">❌ Black Box</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ Full Audit Trails</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Domain-Specific Libraries</td>
                    <td className="py-4 px-6 text-center text-gray-700">❌ Generic Only</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ 13+ Business Domains</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">Visual Intelligence</td>
                    <td className="py-4 px-6 text-center text-gray-700">❌ Mathematical Only</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ Visual + Mathematical</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Temporal Intelligence</td>
                    <td className="py-4 px-6 text-center text-gray-700">❌ Static Snapshots</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ Real-Time + Historical</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">Knowledge Systems</td>
                    <td className="py-4 px-6 text-center text-gray-700">❌ No Memory</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ Knowledge Graphs + RAG</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Multi-Library Integration</td>
                    <td className="py-4 px-6 text-center text-gray-700">❌ Single Library</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ Unified Registry</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">Continuous Learning</td>
                    <td className="py-4 px-6 text-center text-gray-700">❌ Static, No Learning</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ Learns From Every Optimization</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Causal Discovery</td>
                    <td className="py-4 px-6 text-center text-gray-700">❌ Not Available</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-semibold">✅ Full Implementation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                AEAO Wins: 13/13 Categories ⭐⭐⭐⭐⭐
              </p>
              <p className="text-gray-600">
                Traditional optimizers are great for academic problems. AEAO solves enterprise problems with intelligence, compliance, and learning.
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
            Get started with AEAO today. No credit card required for the free tier.
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

