import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domain-Specific Optimization - Sematryx Tutorials',
  description: 'Use specialized libraries for finance, healthcare, supply chain, and manufacturing optimization.',
}

export default function DomainOptimizationTutorial() {
  const financeExample = `from sematryx.domains import finance
import numpy as np

# Portfolio optimization with regulatory constraints
result = finance.optimize_portfolio(
    # Asset data
    returns=np.array([0.12, 0.08, 0.15, 0.10, 0.07]),
    covariance=cov_matrix,
    
    # Portfolio constraints
    constraints={
        'max_position': 0.30,           # Max 30% in any single asset
        'min_position': 0.02,           # Min 2% if included
        'max_sector': {
            'tech': 0.40,
            'finance': 0.30,
            'healthcare': 0.25
        },
        'min_return': 0.08,             # Minimum target return
        'max_turnover': 0.20            # Max 20% portfolio turnover
    },
    
    # Risk configuration
    risk_measure='cvar',                # Conditional Value at Risk
    confidence_level=0.95,
    
    # Regulatory compliance
    regulatory='basel_iii',
    
    # Explainability for compliance
    explanation_level=4
)

# Results include compliance check
print(f"Allocation: {result['allocation']}")
print(f"Expected return: {result['expected_return']:.2%}")
print(f"CVaR (95%): {result['risk_metrics']['cvar']:.2%}")
print(f"Compliance: {result['compliance_check']['status']}")`

  const healthcareExample = `from sematryx.domains import healthcare

# Hospital resource allocation
result = healthcare.optimize_scheduling(
    # Resource definitions
    resources={
        'nurses': {'count': 50, 'shifts': ['day', 'evening', 'night']},
        'doctors': {'count': 20, 'specialties': ['general', 'surgery', 'icu']},
        'beds': {'icu': 30, 'general': 150, 'surgical': 40}
    },
    
    # Demand forecast
    demand_forecast=weekly_demand,
    
    # Healthcare-specific constraints
    constraints={
        'min_nurse_patient_ratio': 0.25,    # At least 1 nurse per 4 patients
        'max_consecutive_shifts': 2,         # No more than 2 back-to-back shifts
        'skill_coverage': True,              # Required skills always covered
        'break_requirements': 'union_rules'  # Comply with labor agreements
    },
    
    # Patient safety constraints (hard)
    safety_constraints={
        'icu_coverage': 'always',
        'emergency_buffer': 0.15            # 15% capacity buffer
    },
    
    # Optimization objectives
    objectives={
        'minimize': ['overtime_cost', 'travel_time'],
        'maximize': ['staff_satisfaction', 'coverage_quality']
    }
)

# Results include safety verification
print(f"Schedule feasible: {result['feasible']}")
print(f"Safety constraints: {result['safety_verified']}")
print(f"Overtime hours: {result['metrics']['overtime_hours']}")`

  const supplyChainExample = `from sematryx.domains import supply_chain

# Multi-echelon inventory optimization
result = supply_chain.optimize_inventory(
    # Network structure
    network={
        'warehouses': warehouse_data,
        'distribution_centers': dc_data,
        'stores': store_data
    },
    
    # Demand and lead times
    demand_forecast=demand_by_sku,
    lead_times=supplier_lead_times,
    
    # Inventory constraints
    constraints={
        'service_level': 0.95,              # 95% fill rate target
        'max_holding_cost': budget,
        'min_safety_stock_days': 7,
        'max_warehouse_capacity': capacities
    },
    
    # Supply chain specific objectives
    objectives={
        'minimize': ['total_inventory_cost', 'stockout_risk'],
        'balance': 'cost_vs_service'
    },
    
    # Uncertainty handling
    demand_uncertainty='stochastic',
    scenarios=1000
)

# Results include multi-echelon policies
print(f"Reorder points: {result['reorder_points']}")
print(f"Safety stock: {result['safety_stock']}")
print(f"Expected cost: \${result['expected_cost']:,.0f}")
print(f"Service level achieved: {result['service_level']:.1%}")`

  const manufacturingExample = `from sematryx.domains import manufacturing

# Production scheduling with quality constraints
result = manufacturing.optimize_production(
    # Product and machine data
    products=product_specs,
    machines=machine_capabilities,
    
    # Production requirements
    demand=weekly_demand,
    due_dates=customer_due_dates,
    
    # Manufacturing constraints
    constraints={
        'setup_times': setup_matrix,
        'batch_sizes': min_batch_sizes,
        'maintenance_windows': maintenance_schedule,
        'quality_requirements': quality_specs
    },
    
    # Safety and compliance (HARD constraints)
    safety_constraints={
        'max_continuous_operation': 8,      # Hours before required break
        'temperature_limits': temp_ranges,
        'hazmat_handling': 'osha_compliant'
    },
    
    # Energy optimization
    energy_config={
        'peak_pricing_hours': peak_hours,
        'energy_limit': max_kwh,
        'prefer_off_peak': True
    },
    
    # Objectives
    objectives=['minimize_makespan', 'minimize_energy', 'maximize_quality']
)

# Results include Gantt chart data
print(f"Makespan: {result['makespan_hours']} hours")
print(f"Energy cost: \${result['energy_cost']:,.0f}")
print(f"Quality score: {result['quality_metrics']['cpk']}")`

  const energyExample = `from sematryx.domains import energy

# Grid optimization with renewables
result = energy.optimize_grid(
    # Generation assets
    generators={
        'solar': solar_capacity,
        'wind': wind_capacity,
        'gas': gas_plants,
        'storage': battery_storage
    },
    
    # Demand and forecasts
    demand_forecast=hourly_demand,
    solar_forecast=solar_production,
    wind_forecast=wind_production,
    
    # Grid constraints
    constraints={
        'frequency_tolerance': 0.01,        # 1% frequency deviation max
        'voltage_limits': voltage_bounds,
        'transmission_capacity': line_limits,
        'spinning_reserve': 0.10            # 10% reserve margin
    },
    
    # Regulatory requirements
    regulatory={
        'renewable_minimum': 0.30,          # 30% renewable mandate
        'emissions_cap': co2_limit,
        'reliability_standard': 'nerc'
    },
    
    # Multi-objective
    objectives={
        'minimize': ['cost', 'emissions', 'curtailment'],
        'maximize': ['reliability', 'renewable_utilization']
    }
)

# Results include dispatch schedule
print(f"Total cost: \${result['total_cost']:,.0f}")
print(f"Renewable %: {result['renewable_percentage']:.1%}")
print(f"CO2 emissions: {result['emissions_tons']} tons")`

  const mlExample = `from sematryx.domains import ml

# Hyperparameter optimization
result = ml.optimize_hyperparameters(
    # Model and data
    model_type='xgboost',
    train_data=X_train,
    train_labels=y_train,
    validation_data=X_val,
    validation_labels=y_val,
    
    # Hyperparameter search space
    search_space={
        'learning_rate': (0.001, 0.3, 'log'),
        'max_depth': (3, 12, 'int'),
        'n_estimators': (50, 500, 'int'),
        'subsample': (0.5, 1.0),
        'colsample_bytree': (0.5, 1.0)
    },
    
    # Optimization config
    metric='f1_weighted',
    cv_folds=5,
    max_evaluations=100,
    
    # Early stopping
    early_stopping_rounds=10,
    
    # Use learning from similar problems
    use_learning=True,
    problem_signature='classification_tabular'
)

# Results include best params and CV scores
print(f"Best params: {result['best_params']}")
print(f"Best CV score: {result['best_cv_score']:.4f}")
print(f"Evaluations: {result['evaluations']}")`

  const customDomain = `from sematryx import optimize

# Use with domain hint
result = optimize(
    objective_function=my_objective,
    bounds=bounds,
    domain='financial',  # Domain hint for better strategy selection
    domain_config={
        'max_risk': 0.15,
        'compliance_level': 'strict'
    }
)`

  return (
    <main className="bg-base min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href="/tutorials" 
            className="text-brand-primary hover:text-brand-primary/80 font-medium mb-4 inline-flex items-center"
          >
            ← Back to Tutorials
          </Link>
          <div className="flex items-center gap-4 mb-6 mt-4">
            <span className="bg-rose-500/15 text-rose-400 text-xs font-medium px-3 py-1 rounded-full border border-rose-500/30">
              Advanced
            </span>
            <span className="text-text-tertiary">• 45 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Domain-Specific Optimization
          </h1>
          <p className="text-xl text-text-secondary">
            Use pre-built libraries for finance, healthcare, supply chain, manufacturing, energy, and ML.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Why Domain Libraries?
            </h2>
            <p className="text-text-secondary mb-4">
              Domain libraries provide pre-configured optimization patterns with industry-specific 
              constraints, compliance checks, and domain-aware explanations. Instead of building 
              from scratch, you get:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-elevated p-4 rounded-xl border border-elevated-3">
                <h3 className="font-semibold text-text-primary mb-2">✓ Built-in Constraints</h3>
                <p className="text-sm text-text-secondary">Industry regulations, safety limits, best practices</p>
              </div>
              <div className="bg-elevated p-4 rounded-xl border border-elevated-3">
                <h3 className="font-semibold text-text-primary mb-2">✓ Compliance Checks</h3>
                <p className="text-sm text-text-secondary">Basel III, HIPAA, OSHA, NERC, and more</p>
              </div>
              <div className="bg-elevated p-4 rounded-xl border border-elevated-3">
                <h3 className="font-semibold text-text-primary mb-2">✓ Domain Explanations</h3>
                <p className="text-sm text-text-secondary">Results explained in industry terminology</p>
              </div>
              <div className="bg-elevated p-4 rounded-xl border border-elevated-3">
                <h3 className="font-semibold text-text-primary mb-2">✓ Faster Development</h3>
                <p className="text-sm text-text-secondary">Production-ready patterns, not prototypes</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              💼 Financial Services
            </h2>
            <p className="text-text-secondary mb-4">
              Portfolio optimization with regulatory compliance, risk measures, and audit trails:
            </p>
            <CodeBlock
              code={financeExample}
              language="python"
              title="Portfolio optimization"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              🏥 Healthcare
            </h2>
            <p className="text-text-secondary mb-4">
              Resource allocation and scheduling with patient safety constraints:
            </p>
            <CodeBlock
              code={healthcareExample}
              language="python"
              title="Hospital scheduling"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              🚚 Supply Chain
            </h2>
            <p className="text-text-secondary mb-4">
              Inventory optimization across multi-echelon networks with demand uncertainty:
            </p>
            <CodeBlock
              code={supplyChainExample}
              language="python"
              title="Inventory optimization"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              🏭 Manufacturing
            </h2>
            <p className="text-text-secondary mb-4">
              Production scheduling with quality, safety, and energy constraints:
            </p>
            <CodeBlock
              code={manufacturingExample}
              language="python"
              title="Production scheduling"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              ⚡ Energy & Utilities
            </h2>
            <p className="text-text-secondary mb-4">
              Grid optimization with renewable integration and reliability standards:
            </p>
            <CodeBlock
              code={energyExample}
              language="python"
              title="Grid optimization"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              🔬 Machine Learning
            </h2>
            <p className="text-text-secondary mb-4">
              Hyperparameter tuning with cross-validation and learning from similar problems:
            </p>
            <CodeBlock
              code={mlExample}
              language="python"
              title="Hyperparameter optimization"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Custom Domains
            </h2>
            <p className="text-text-secondary mb-4">
              You can register custom domain constraints for your specific industry:
            </p>
            <CodeBlock
              code={customDomain}
              language="python"
              title="Custom domain registration"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              🎉 Next Steps
            </h2>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <p className="text-text-secondary mb-4">
                You now know how to use domain-specific optimization. 
                Finally, learn advanced strategies for complex scenarios.
              </p>
              <div className="space-y-2">
                <Link 
                  href="/tutorials/webhook-automation" 
                  className="block text-brand-primary hover:underline"
                >
                  → Advanced optimization strategies
                </Link>
                <Link 
                  href="/docs" 
                  className="block text-brand-primary hover:underline"
                >
                  → Full API reference
                </Link>
                <Link 
                  href="/pricing" 
                  className="block text-brand-primary hover:underline"
                >
                  → View pricing for domain libraries
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
