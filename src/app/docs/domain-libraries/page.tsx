import Link from 'next/link'
import { Metadata } from 'next'
import CodeBlock from '@/components/CodeBlock'
import { Briefcase, Heart, Truck, Factory, Zap, FlaskConical, Building2, ArrowLeft } from 'lucide-react'

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
    },
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'Clinical optimization, resource allocation, treatment protocols, and patient safety.',
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
    },
    {
      name: 'Supply Chain',
      icon: Truck,
      description: 'Logistics optimization, inventory management, vehicle routing, and warehouse operations.',
      codeExample: `from sematryx.domains import supply_chain

result = supply_chain.optimize_routing(
    locations=delivery_locations,
    vehicles=vehicle_fleet,
    constraints={
        'time_windows': time_windows,
        'capacity': vehicle_capacities,
        'driver_hours': max_hours
    }
)`,
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Production scheduling, resource allocation, quality optimization, and safety compliance.',
      codeExample: `from sematryx.domains import manufacturing

result = manufacturing.optimize_production(
    orders=production_orders,
    machines=machine_capacities,
    constraints={
        'safety_margins': 0.15,
        'quality_standards': 'iso_9001',
        'maintenance_windows': maintenance_schedule
    }
)`,
    },
    {
      name: 'AI/ML Research',
      icon: FlaskConical,
      description: 'Neural architecture search, hyperparameter tuning, and model optimization.',
      codeExample: `from sematryx.domains import ai_ml

result = ai_ml.optimize_hyperparameters(
    model_class=NeuralNetwork,
    training_data=train_data,
    validation_data=val_data,
    search_space=hyperparameter_space,
    objective='validation_accuracy',
    max_evaluations=1000
)`,
    },
    {
      name: 'Energy & Utilities',
      icon: Zap,
      description: 'Grid optimization, renewable energy integration, and resource allocation.',
      codeExample: `from sematryx.domains import energy

result = energy.optimize_grid(
    demand_forecast=hourly_demand,
    generation_capacity=renewable_capacity,
    constraints={
        'reliability': 0.99,
        'renewable_target': 0.40,
        'storage_capacity': battery_capacity
    }
)`,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
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
          Production-ready optimization solutions for specific industries and use cases.
        </p>
      </div>

      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-gray-300 leading-relaxed">
          Sematryx Domain Libraries provide pre-built optimization solutions tailored to specific industries.
          Each library includes industry-specific constraints, compliance requirements, and best practices
          built-in, so you can focus on your problem rather than implementation details.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        {domains.map((domain) => {
          const IconComponent = domain.icon
          return (
            <div key={domain.name} className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-primary/10 p-2 rounded-lg">
                  <IconComponent className="w-6 h-6 text-brand-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-text-primary">{domain.name}</h2>
              </div>
              <p className="text-text-secondary mb-4">{domain.description}</p>
              <CodeBlock code={domain.codeExample} language="python" />
            </div>
          )
        })}
      </div>

      <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-200 mb-2">Production-Ready</h3>
        <p className="text-blue-200/80">
          All domain libraries are production-ready with comprehensive testing, documentation, and
          industry-specific compliance built-in. They're used in production environments across
          finance, healthcare, supply chain, and more.
        </p>
      </div>

      <div className="border-t border-elevated-3 pt-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">Next Steps</h2>
        <div className="space-y-4">
          <Link
            href="/domains"
            className="block p-4 bg-elevated border border-elevated-3 rounded-lg hover:bg-elevated-2 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-text-primary">View Domain Libraries Overview</div>
                <div className="text-sm text-text-secondary">See all available domains and use cases</div>
              </div>
              <ArrowLeft className="w-5 h-5 text-text-secondary" />
            </div>
          </Link>
          <Link
            href="/tutorials/domain-specific-optimization"
            className="block p-4 bg-elevated border border-elevated-3 rounded-lg hover:bg-elevated-2 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-text-primary">Domain-Specific Optimization Tutorial</div>
                <div className="text-sm text-text-secondary">Learn how to use domain libraries in practice</div>
              </div>
              <ArrowLeft className="w-5 h-5 text-text-secondary" />
            </div>
          </Link>
          <Link
            href="/tutorials/extending-domain-libraries"
            className="block p-4 bg-elevated border border-elevated-3 rounded-lg hover:bg-elevated-2 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-text-primary">Extending Domain Libraries</div>
                <div className="text-sm text-text-secondary">Create custom domain extensions</div>
              </div>
              <ArrowLeft className="w-5 h-5 text-text-secondary" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

