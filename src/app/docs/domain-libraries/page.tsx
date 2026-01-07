import Link from 'next/link'
import { Metadata } from 'next'
import { Briefcase, Heart, Truck, Factory, Zap, FlaskConical, Building2, ArrowLeft, CheckCircle2, Shield, Rocket } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Domain Libraries - Production-Ready Optimization Solutions | Sematryx',
  description: 'Pre-built optimization libraries for finance, healthcare, supply chain, manufacturing, and more. Industry-specific constraints and compliance built-in.',
}

export default function DomainLibrariesPage() {
  const domains = [
    {
      name: 'Financial Services',
      icon: Briefcase,
      description: 'Portfolio optimization, risk management, trading strategies, and regulatory compliance.',
      useCases: [
        'Portfolio allocation across multiple asset classes',
        'Risk-adjusted return optimization',
        'Regulatory compliance (Basel III, Solvency II)',
        'Trading strategy optimization',
      ],
    },
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'Clinical optimization, resource allocation, treatment protocols, and patient safety.',
      useCases: [
        'Nurse and doctor scheduling optimization',
        'Operating room allocation',
        'Treatment protocol optimization',
        'Resource allocation for patient care',
      ],
    },
    {
      name: 'Supply Chain',
      icon: Truck,
      description: 'Logistics optimization, inventory management, vehicle routing, and warehouse operations.',
      useCases: [
        'Vehicle routing and delivery optimization',
        'Inventory level optimization',
        'Warehouse layout and operations',
        'Multi-echelon supply chain optimization',
      ],
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Production scheduling, resource allocation, quality optimization, and safety compliance.',
      useCases: [
        'Production line scheduling',
        'Resource allocation across machines',
        'Quality control optimization',
        'Maintenance scheduling',
      ],
    },
    {
      name: 'AI/ML Research',
      icon: FlaskConical,
      description: 'Neural architecture search, hyperparameter tuning, and model optimization.',
      useCases: [
        'Hyperparameter optimization for ML models',
        'Neural architecture search',
        'Feature selection optimization',
        'Model ensemble optimization',
      ],
    },
    {
      name: 'Energy & Utilities',
      icon: Zap,
      description: 'Grid optimization, renewable energy integration, and resource allocation.',
      useCases: [
        'Power grid load balancing',
        'Renewable energy integration',
        'Energy storage optimization',
        'Demand response optimization',
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <Link 
          href="/domains" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Domain Libraries Overview</span>
        </Link>
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Domain Libraries
        </h1>
        <p className="text-xl text-gray-400">
          Production-ready optimization solutions tailored to your industry. 
          Built-in constraints, compliance requirements, and best practices—so you can focus on your problem, not implementation.
        </p>
      </div>

      <div className="space-y-12">
        {/* Value Proposition */}
        <section className="bg-gradient-to-br from-purple-950/40 to-blue-950/40 border border-purple-800/50 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Building2 className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-200">
              Industry-Specific Optimization
            </h2>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            Domain Libraries eliminate the need to implement industry-specific constraints, compliance 
            requirements, and optimization patterns from scratch. Each library is production-ready, 
            battle-tested, and includes everything you need for your industry.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">Pre-Built Constraints</h3>
              <p className="text-sm text-gray-400">
                Industry-specific constraints and validation rules built-in
              </p>
            </div>
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">Compliance Ready</h3>
              <p className="text-sm text-gray-400">
                Regulatory requirements and standards automatically enforced
              </p>
            </div>
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">Best Practices</h3>
              <p className="text-sm text-gray-400">
                Proven optimization patterns for your industry
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Why Use Domain Libraries?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-gray-200">Faster Time to Value</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Get started in minutes instead of weeks. No need to research industry constraints, 
                implement validation logic, or learn domain-specific optimization patterns.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-gray-200">Compliance Built-In</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Regulatory requirements are automatically enforced. Basel III for finance, 
                patient safety standards for healthcare, ISO standards for manufacturing—all handled automatically.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-gray-200">Production-Ready</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Each library is battle-tested in production environments. Comprehensive testing, 
                documentation, and support for edge cases included.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-gray-200">Domain Expertise</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Leverage optimization strategies specifically designed for your industry. 
                No generic solutions—each library understands your domain's unique challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Available Domains */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Available Domain Libraries
          </h2>
          <div className="space-y-6">
            {domains.map((domain) => {
              const IconComponent = domain.icon
              return (
                <div key={domain.name} className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-500/10 p-2 rounded-lg">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-200">{domain.name}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{domain.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Common Use Cases:</h4>
                    <ul className="space-y-1">
                      {domain.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Production Ready */}
        <section className="bg-blue-900/20 border border-blue-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-200 mb-2">Production-Ready & Battle-Tested</h3>
          <p className="text-blue-200/80">
            All domain libraries are production-ready with comprehensive testing, documentation, and
            industry-specific compliance built-in. They're used in production environments across
            finance, healthcare, supply chain, and more. Each library includes:
          </p>
          <ul className="mt-4 space-y-2 text-blue-200/80 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <span>Comprehensive test coverage</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <span>Full documentation and examples</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <span>Edge case handling</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <span>Performance optimization</span>
            </li>
          </ul>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Get Started
          </h2>
          <div className="space-y-4">
            <Link
              href="/domains"
              className="block p-6 bg-[#1a1f2e] border border-gray-700 rounded-lg hover:border-purple-500 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-200 mb-1 group-hover:text-purple-400 transition-colors">
                    View Domain Libraries Overview
                  </div>
                  <div className="text-sm text-gray-400">See all available domains and use cases</div>
                </div>
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </div>
            </Link>
            <Link
              href="/tutorials/domain-specific-optimization"
              className="block p-6 bg-[#1a1f2e] border border-gray-700 rounded-lg hover:border-purple-500 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-200 mb-1 group-hover:text-purple-400 transition-colors">
                    Domain-Specific Optimization Tutorial
                  </div>
                  <div className="text-sm text-gray-400">Learn how to use domain libraries in practice</div>
                </div>
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </div>
            </Link>
            <Link
              href="/tutorials/extending-domain-libraries"
              className="block p-6 bg-[#1a1f2e] border border-gray-700 rounded-lg hover:border-purple-500 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-200 mb-1 group-hover:text-purple-400 transition-colors">
                    Extending Domain Libraries
                  </div>
                  <div className="text-sm text-gray-400">Create custom domain extensions for your specific needs</div>
                </div>
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
