import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Briefcase, 
  Heart, 
  Truck, 
  Factory, 
  Zap, 
  FlaskConical, 
  Film, 
  Search, 
  Bot, 
  Plug,
  Shield,
  CheckCircle,
  Code,
  Building2,
  MessageSquare,
  BookOpen,
  GraduationCap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Domain Libraries - Industry-Specific Optimization | Sematryx',
  description: 'Pre-built optimization libraries for finance, healthcare, supply chain, manufacturing, and more. Production-ready with industry-specific constraints and compliance.',
}

export default function DomainsPage() {
  const domains = [
    {
      id: 'financial',
      name: 'Financial Services',
      icon: Briefcase,
      description: 'Portfolio optimization, risk management, trading strategies, and regulatory compliance.',
      useCases: [
        'Portfolio allocation with Basel III, MiFID II compliance',
        'Risk-adjusted return optimization',
        'Trading strategy backtesting',
        'Credit risk modeling'
      ],
      features: [
        'Regulatory compliance built-in',
        'CVaR, VaR, and advanced risk metrics',
        'Explainable decisions for audit trails',
        'Multi-objective optimization (return vs risk)'
      ],
      codeExample: `from sematryx.domains import finance

result = finance.optimize_portfolio(
    returns=asset_returns,
    covariance=cov_matrix,
    constraints={
        'max_position': 0.30,
        'min_return': 0.08,
        'regulatory': 'basel_iii'
    },
    risk_measure='cvar',
    explanation_level=4
)`,
      color: 'blue'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      description: 'Clinical optimization, resource allocation, treatment protocols, and patient safety.',
      useCases: [
        'Hospital staff scheduling with union rules',
        'Clinical trial design optimization',
        'Drug discovery pipeline optimization',
        'Resource allocation with safety constraints'
      ],
      features: [
        'HIPAA-compliant data handling',
        'Patient safety constraints (hard constraints)',
        'Skill coverage and shift balancing',
        'Emergency capacity buffers'
      ],
      codeExample: `from sematryx.domains import healthcare

result = healthcare.optimize_scheduling(
    resources={'nurses': 50, 'doctors': 20},
    demand_forecast=weekly_demand,
    constraints={
        'min_nurse_patient_ratio': 0.25,
        'max_consecutive_shifts': 2,
        'safety_constraints': 'always'
    }
)`,
      color: 'red'
    },
    {
      id: 'supply_chain',
      name: 'Supply Chain',
      icon: Truck,
      description: 'Logistics optimization, inventory management, vehicle routing, and warehouse operations.',
      useCases: [
        'Vehicle routing with time windows',
        'Multi-echelon inventory optimization',
        'Cold chain logistics',
        'Warehouse layout optimization'
      ],
      features: [
        'VRP, CVRP, VRPTW variants',
        'Perishable goods management',
        'Temperature-controlled routing',
        'Resilience planning'
      ],
      codeExample: `from sematryx.domains import supply_chain

result = supply_chain.optimize_routing(
    locations=depot_and_customers,
    demands=customer_demands,
    vehicle_capacity=50,
    time_windows=time_constraints
)`,
      color: 'green'
    },
    {
      id: 'marketing',
      name: 'Marketing',
      icon: Zap,
      description: 'Campaign optimization, attribution modeling, customer segmentation, and pricing strategies.',
      useCases: [
        'Multi-channel campaign allocation',
        'Attribution modeling',
        'Customer lifetime value optimization',
        'Dynamic pricing strategies'
      ],
      features: [
        'Multi-touch attribution',
        'Budget allocation across channels',
        'ROI optimization',
        'A/B testing integration'
      ],
      codeExample: `from sematryx.domains import marketing

result = marketing.optimize_campaign(
    channels=['search', 'social', 'display'],
    budget=100000,
    objectives=['conversions', 'roas'],
    constraints={'min_brand_awareness': 0.3}
)`,
      color: 'purple'
    },
    {
      id: 'ai_ml',
      name: 'AI/ML',
      icon: FlaskConical,
      description: 'Hyperparameter tuning, neural architecture search, and model optimization.',
      useCases: [
        'Deep learning hyperparameter tuning',
        'Neural architecture search',
        'Learning rate scheduling',
        'Reinforcement learning optimization'
      ],
      features: [
        'Multi-objective optimization (accuracy vs speed)',
        'Early stopping integration',
        'Resource-aware optimization',
        'Transfer learning support'
      ],
      codeExample: `from sematryx.domains import ai_ml

result = ai_ml.optimize_hyperparameters(
    model_type='transformer',
    search_space=hyperparameter_space,
    objectives=['accuracy', 'inference_time'],
    budget=1000  # Max training runs
)`,
      color: 'orange'
    },
    {
      id: 'media',
      name: 'Media',
      icon: Film,
      description: 'Video encoding, image optimization, rendering, and perceptual quality optimization.',
      useCases: [
        'Per-title video encoding',
        'Image compression optimization',
        'Rendering pipeline optimization',
        'Perceptual quality tuning'
      ],
      features: [
        'Quality vs file size optimization',
        'Perceptual metrics (SSIM, VMAF)',
        'Multi-resolution encoding',
        'Adaptive bitrate optimization'
      ],
      codeExample: `from sematryx.domains import media

result = media.optimize_video_encoding(
    source_video=video_file,
    target_qualities=['1080p', '720p', '480p'],
    objectives=['quality', 'file_size'],
    perceptual_metric='vmaf'
)`,
      color: 'pink'
    },
    {
      id: 'research',
      name: 'Research',
      icon: Search,
      description: 'Advanced mathematical optimization, novel algorithms, and quantum optimization.',
      useCases: [
        'Novel algorithm development',
        'Quantum optimization problems',
        'Mathematical research problems',
        'Experimental optimization'
      ],
      features: [
        'Cutting-edge algorithms',
        'Quantum-inspired optimization',
        'Multi-objective research problems',
        'Publication-ready results'
      ],
      codeExample: `from sematryx.domains import research

result = research.optimize_advanced(
    problem=novel_problem,
    algorithm='quantum_inspired',
    objectives=['optimality', 'novelty'],
    research_mode=True
)`,
      color: 'indigo'
    },
    {
      id: 'agents',
      name: 'Agents',
      icon: Bot,
      description: 'Multi-agent coordination, budget management, and agent optimization.',
      useCases: [
        'Multi-agent system coordination',
        'LLM selection optimization',
        'Agent budget allocation',
        'Performance monitoring'
      ],
      features: [
        'Agent coordination strategies',
        'Cost optimization',
        'Performance monitoring',
        'Dynamic agent selection'
      ],
      codeExample: `from sematryx.domains import agents

result = agents.optimize_coordination(
    agents=agent_pool,
    tasks=task_list,
    budget=1000,
    objectives=['completion_rate', 'cost']
)`,
      color: 'cyan'
    },
    {
      id: 'integration',
      name: 'Integration',
      icon: Plug,
      description: 'System integration, bridge optimization, and custom domain creation.',
      useCases: [
        'Legacy system integration',
        'Custom domain creation',
        'Pattern library generation',
        'Code generation'
      ],
      features: [
        'Custom domain templates',
        'Auto code generation',
        'Pattern recognition',
        'System analysis'
      ],
      codeExample: `from sematryx.domains import integration

# Create custom domain
@integration.register_domain('my_industry')
def my_industry_optimizer(problem):
    # Custom optimization logic
    return optimized_solution

result = integration.optimize(
    domain='my_industry',
    problem=custom_problem
)`,
      color: 'yellow'
    },
    {
      id: 'conversational',
      name: 'Conversational',
      icon: MessageSquare,
      description: 'Create optimization problems through natural language conversation with an AI agent. Perfect for users who want to optimize but aren\'t familiar with technical concepts.',
      useCases: [
        'Natural language problem description',
        'Guided parameter collection',
        'Automatic domain detection',
        'Dynamic domain extension building'
      ],
      features: [
        'LLM-powered problem understanding',
        'Interactive parameter collection',
        'Real-time input validation',
        'Automatic domain matching'
      ],
      codeExample: `from sematryx.client.sdk import SematryxClient

client = SematryxClient(api_key="YOUR_API_KEY")

# Start conversation with natural language
result = client.start_conversational_optimization(
    description="I want to optimize my marketing budget for maximum ROI"
)

# Interact with agent to collect parameters
# Then complete and optimize
result = client.complete_conversational_optimization(conversation_id)`,
      color: 'cyan'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Built-in Compliance',
      description: 'Regulatory compliance (Basel III, HIPAA, etc.) built into domain libraries, not bolted on.'
    },
    {
      icon: Code,
      title: 'Production-Ready',
      description: 'Pre-configured constraints, validation, and best practices for each industry.'
    },
    {
      icon: Building2,
      title: 'Industry Best Practices',
      description: 'Domain-specific patterns, constraints, and optimization strategies proven in production.'
    },
    {
      icon: CheckCircle,
      title: 'Full Explainability',
      description: 'Domain-aware explanations that speak your industry\'s language for compliance and trust.'
    }
  ]

  return (
    <div className="flex-1 bg-[#0f1419]">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#1a1f2e] to-[#0f1419] py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Domain Libraries
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Industry-specific optimization libraries with built-in compliance, constraints, and best practices.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Production-ready solutions for finance, healthcare, supply chain, and more. 
              No need to build from scratch—leverage domain expertise built into every library.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/docs"
                className="px-6 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/tutorials/enterprise-workflows"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
              >
                View Tutorial
              </Link>
            </div>
          </div>
        </section>

        {/* Domains Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Available Domain Libraries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domains.map((domain) => {
                const IconComponent = domain.icon
                const colorClasses: Record<string, { bg: string; text: string }> = {
                  blue: { bg: 'bg-blue-500/20', text: 'text-blue-400' },
                  red: { bg: 'bg-red-500/20', text: 'text-red-400' },
                  green: { bg: 'bg-green-500/20', text: 'text-green-400' },
                  purple: { bg: 'bg-purple-500/20', text: 'text-purple-400' },
                  orange: { bg: 'bg-orange-500/20', text: 'text-orange-400' },
                  pink: { bg: 'bg-pink-500/20', text: 'text-pink-400' },
                  indigo: { bg: 'bg-indigo-500/20', text: 'text-indigo-400' },
                  cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
                  yellow: { bg: 'bg-yellow-500/20', text: 'text-yellow-400' },
                }
                const colors = colorClasses[domain.color] || colorClasses.blue
                return (
                  <div
                    key={domain.id}
                    className="bg-[#1a1f2e] border border-gray-800 rounded-xl p-6 hover:border-brand-primary/50 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${colors.bg}`}>
                        <IconComponent className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{domain.name}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{domain.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Use Cases:</h4>
                      <ul className="space-y-1">
                        {domain.useCases.map((useCase, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-brand-primary mt-1">•</span>
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {domain.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <CodeBlock
                        code={domain.codeExample}
                        language="python"
                        title={`${domain.name} Example`}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-[#1a1f2e]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Domain Libraries?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon
                return (
                  <div key={idx} className="text-center">
                    <div className="inline-flex p-4 rounded-full bg-brand-primary/20 mb-4">
                      <IconComponent className="w-8 h-8 text-brand-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-brand-primary/20 to-accent-autodidactic/20 rounded-2xl p-12 border border-brand-primary/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start using domain libraries today. All libraries are production-ready and include 
              built-in compliance, validation, and best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/docs/domain-libraries"
                className="px-8 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Read the Docs
              </Link>
              <Link
                href="/tutorials/domain-specific-optimization"
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                Domain Tutorials
              </Link>
            </div>
          </div>
        </section>
    </div>
  )
}

