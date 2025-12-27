import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Configuring Sematryx Intelligence - Sematryx Tutorials',
  description: 'Master the 3 Core Pillars: Agentic, Interpretable, Adaptive, plus Domain Extension.',
}

export default function IntelligenceConfigTutorial() {
  const agenticExample = `from sematryx import optimize

# Enable Agentic Intelligence
# Multiple AI agents collaborate to select optimization strategy
result = optimize(
    objective_function=complex_function,
    bounds=bounds,
    
    # Agentic configuration
    use_agentic=True,
    agentic_config={
        'strategy_selection': 'consensus',  # Agents vote on strategy
        'exploration_weight': 0.3,          # Balance exploration vs exploitation
        'agent_timeout': 30                 # Max seconds for agent deliberation
    }
)

# The result includes agent reasoning
print(f"Strategy selected: {result['strategy_used']}")
print(f"Agent rationale: {result['explanation']['agent_reasoning']}")`

  const interpretableLevels = `from sematryx import optimize

# Explanation levels control detail and compute cost
# Level 0: No explanations (fastest)
# Level 1: Basic summary
# Level 2: Strategy rationale
# Level 3: Detailed analysis (default)
# Level 4: Full audit trail
# Level 5: Research-grade analysis

# Minimal explanations (production speed)
result = optimize(
    objective_function=my_function,
    bounds=bounds,
    explanation_level=1
)
print(result['explanation']['summary'])
# "Optimization converged in 234 evaluations using CMA-ES"

# Full audit trail (compliance/debugging)
result = optimize(
    objective_function=my_function,
    bounds=bounds,
    explanation_level=4
)
print(result['explanation']['audit_trail'])
# Detailed log of every decision made`

  const interpretableOutput = `{
  "explanation": {
    "summary": "CMA-ES selected for smooth continuous landscape",
    "rationale": "Problem analysis detected: smooth, unimodal, 
                  moderate dimensionality (10D). CMA-ES optimal 
                  for this profile.",
    "alternatives_considered": [
      {"strategy": "differential_evolution", "score": 0.72},
      {"strategy": "bayesian", "score": 0.68},
      {"strategy": "shgo", "score": 0.45}
    ],
    "convergence_analysis": {
      "iterations": 234,
      "improvement_rate": "exponential",
      "final_gradient_norm": 1.2e-8
    },
    "audit_id": "aud_7x9k2m..."
  }
}`

  const adaptiveExample = `from sematryx import optimize

# Enable Adaptive Intelligence
# System learns from this optimization for future problems
result = optimize(
    objective_function=my_function,
    bounds=bounds,
    
    # Adaptive configuration
    use_learning=True,
    learning_config={
        'store_result': True,              # Save to learning store
        'problem_signature': 'portfolio',   # Tag for retrieval
        'learning_weight': 0.5              # How much to trust past experience
    }
)

# Check if past experience was used
if result['learning_context']['prior_experience_used']:
    print(f"Leveraged {result['learning_context']['similar_problems_found']} similar problems")
    print(f"Estimated speedup: {result['learning_context']['speedup_factor']}x")`

  const privateLearning = `from sematryx import optimize, configure_learning

# Configure Private Learning Store
# Your optimization knowledge stays private to your organization
configure_learning(
    api_key='your-api-key',
    private_store=True,       # Use private store (not shared)
    read_from_public=True,    # Still benefit from public patterns
    write_to_public=False     # Don't share your patterns
)

# Optimizations now use your private learning store
result = optimize(
    objective_function=proprietary_function,
    bounds=bounds,
    use_learning=True
)

# Your competitive insights stay private
print(f"Private patterns used: {result['learning_context']['private_patterns_matched']}")`

  const domainExtension = `from sematryx import optimize
from sematryx.domains import finance

# Use domain-specific optimization
# Pre-configured for financial constraints and best practices
result = finance.optimize_portfolio(
    returns=expected_returns,
    covariance=cov_matrix,
    
    # Financial-specific constraints
    constraints={
        'max_position': 0.30,           # Max 30% in single asset
        'min_position': 0.02,           # Min 2% if included
        'sector_limits': sector_caps,    # Sector concentration limits
        'regulatory': 'basel_iii'        # Regulatory framework
    },
    
    # Built-in risk measures
    risk_measure='cvar',                 # Conditional Value at Risk
    confidence_level=0.95
)

# Domain-aware explanations
print(result['explanation']['compliance_check'])
# "Portfolio satisfies Basel III capital requirements"`

  const domainList = `# Available domain libraries
from sematryx.domains import finance      # Portfolio, trading, risk
from sematryx.domains import healthcare   # Resource allocation, scheduling
from sematryx.domains import supply_chain # Logistics, inventory, routing
from sematryx.domains import manufacturing # Production, quality, energy
from sematryx.domains import energy       # Grid, trading, demand response
from sematryx.domains import ml           # Hyperparameters, NAS, features`

  const fullConfig = `from sematryx import optimize

# Full Intelligence configuration (3 Core Pillars)
result = optimize(
    objective_function=enterprise_function,
    bounds=bounds,
    
    # === AGENTIC ===
    use_agentic=True,
    agentic_config={
        'strategy_selection': 'consensus',
        'exploration_weight': 0.3
    },
    
    # === INTERPRETABLE ===
    explanation_level=4,  # Full audit trail
    
    # === ADAPTIVE ===
    use_learning=True,
    learning_config={
        'store_result': True,
        'problem_signature': 'production_scheduling'
    },
    
    # === DOMAIN EXTENSION ===
    domain='manufacturing',
    domain_config={
        'safety_constraints': True,
        'quality_requirements': quality_spec
    }
)

# Rich, explainable results
print(f"Strategy: {result['strategy_used']}")
print(f"Agent reasoning: {result['explanation']['agent_reasoning']}")
print(f"Audit ID: {result['explanation']['audit_id']}")
print(f"Learning speedup: {result['learning_context']['speedup_factor']}x")`

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
            <span className="bg-amber-500/15 text-amber-400 text-xs font-medium px-3 py-1 rounded-full border border-amber-500/30">
              Intermediate
            </span>
            <span className="text-text-tertiary">• 30 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Configuring Sematryx Intelligence
          </h1>
          <p className="text-xl text-text-secondary">
            Master the 3 Core Pillars that make Sematryx different: Agentic, Interpretable, Adaptive, plus Domain Extension.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              The 3 Core Pillars + Domain Extension
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-elevated p-5 rounded-xl border border-elevated-3 border-l-4 border-l-accent-agentic">
                <h3 className="font-semibold text-accent-agentic mb-2">🤖 Agentic</h3>
                <p className="text-sm text-text-secondary">Multiple AI agents collaborate to select the best optimization strategy</p>
              </div>
              <div className="bg-elevated p-5 rounded-xl border border-elevated-3 border-l-4 border-l-accent-expository">
                <h3 className="font-semibold text-accent-expository mb-2">📖 Interpretable</h3>
                <p className="text-sm text-text-secondary">Detailed explanations of every optimization decision for audits and understanding</p>
              </div>
              <div className="bg-elevated p-5 rounded-xl border border-elevated-3 border-l-4 border-l-accent-autodidactic">
                <h3 className="font-semibold text-accent-autodidactic mb-2">🧠 Adaptive</h3>
                <p className="text-sm text-text-secondary">System learns from optimizations to improve continuously over time</p>
              </div>
              <div className="bg-elevated p-5 rounded-xl border border-elevated-3 border-l-4 border-l-orange-400">
                <h3 className="font-semibold text-orange-400 mb-2">🏗️ Domain Extension</h3>
                <p className="text-sm text-text-secondary">Pre-built libraries that leverage the engine for finance, healthcare, manufacturing, and more</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              <span className="text-accent-agentic">Agentic Intelligence</span>
            </h2>
            <p className="text-text-secondary mb-4">
              When enabled, multiple AI agents analyze your problem and vote on the best optimization strategy. 
              This is especially powerful for complex, multi-modal landscapes.
            </p>
            <CodeBlock
              code={agenticExample}
              language="python"
              title="Agentic configuration"
            />
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">When to Use Agentic</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-agentic">✓</span>
                  <span>Complex problems with unknown landscape topology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-agentic">✓</span>
                  <span>When you're unsure which optimization strategy to use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-agentic">✓</span>
                  <span>High-stakes decisions where strategy selection matters</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              <span className="text-accent-expository">Interpretable Intelligence</span>
            </h2>
            <p className="text-text-secondary mb-4">
              Control how much explanation Sematryx generates. Higher levels provide more detail 
              but use more compute. Level 4+ is recommended for compliance-sensitive applications.
            </p>
            <CodeBlock
              code={interpretableLevels}
              language="python"
              title="Explanation levels"
            />
            <p className="text-text-secondary mt-6 mb-4">
              Here's what a detailed explanation looks like:
            </p>
            <CodeBlock
              code={interpretableOutput}
              language="json"
              title="Explanation output example"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              <span className="text-accent-autodidactic">Adaptive Intelligence</span>
            </h2>
            <p className="text-text-secondary mb-4">
              Enable learning to let Sematryx improve over time. It remembers successful strategies 
              and applies them to similar problems, accelerating convergence.
            </p>
            <CodeBlock
              code={adaptiveExample}
              language="python"
              title="Adaptive configuration"
            />
            
            <h3 className="text-xl font-semibold text-text-primary mb-4 mt-8">
              Private Learning Store
            </h3>
            <p className="text-text-secondary mb-4">
              For enterprise users, the Private Learning Store keeps your optimization knowledge 
              isolated. Your competitive insights never leave your store.
            </p>
            <CodeBlock
              code={privateLearning}
              language="python"
              title="Private Learning Store"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              <span className="text-orange-400">Domain Extension</span>
            </h2>
            <p className="text-text-secondary mb-4">
              Domain libraries provide pre-built optimization patterns for specific industries, 
              with built-in constraints, compliance checks, and domain-aware explanations.
            </p>
            <CodeBlock
              code={domainExtension}
              language="python"
              title="Domain-specific optimization"
            />
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Available Domains</h3>
              <CodeBlock
                code={domainList}
                language="python"
                title="Domain libraries"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Full Intelligence Configuration
            </h2>
            <p className="text-text-secondary mb-4">
              Here's how to combine all 3 core pillars for maximum capability:
            </p>
            <CodeBlock
              code={fullConfig}
              language="python"
              title="Complete Intelligence Configuration"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Configuration Guidelines
            </h2>
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">🚀 Speed-Optimized (Production)</h4>
                  <p className="text-text-secondary text-sm">
                    <code className="text-brand-primary">use_agentic=False, explanation_level=1, use_learning=True</code>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">📋 Compliance-Ready (Regulated Industries)</h4>
                  <p className="text-text-secondary text-sm">
                    <code className="text-brand-primary">use_agentic=True, explanation_level=4, use_learning=True</code>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">🔬 Research/Debug</h4>
                  <p className="text-text-secondary text-sm">
                    <code className="text-brand-primary">use_agentic=True, explanation_level=5, use_learning=False</code>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              🎉 Next Steps
            </h2>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <p className="text-text-secondary mb-4">
                You now understand how to configure Sematryx Intelligence. 
                Next, learn how to interpret the rich results Sematryx returns.
              </p>
              <div className="space-y-2">
                <Link 
                  href="/tutorials/monitoring-alerts" 
                  className="block text-brand-primary hover:underline"
                >
                  → Understanding optimization results
                </Link>
                <Link 
                  href="/tutorials/enterprise-workflows" 
                  className="block text-brand-primary hover:underline"
                >
                  → Domain-specific optimization
                </Link>
                <Link 
                  href="/docs" 
                  className="block text-brand-primary hover:underline"
                >
                  → Full API reference
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
