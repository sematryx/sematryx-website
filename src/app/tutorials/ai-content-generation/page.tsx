import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Configuring Sematryx Intelligence - Sematryx Tutorials',
  description: 'Master the 3 Core Pillars: Agentic, Interpretable, and Adaptive Intelligence.',
}

export default function IntelligenceConfigTutorial() {
  const agenticExample = `from sematryx import optimize

# Enable Agentic Intelligence
# Multiple AI agents collaborate to select optimization strategy
result = optimize(
    objective_function=complex_function,
    bounds=bounds,
    
    # Agentic configuration (via explanation level)
    explanation_level=3  # Higher levels include agent reasoning
)

# The result includes strategy and explanation
print(f"Strategy selected: {result.strategy_used}")
print(f"Explanation: {result.explanation}")`

  const interpretableLevels = `from sematryx import optimize

# Explanation levels control detail and compute cost
# Level 0: No explanations (fastest)
# Level 1: Basic summary
# Level 2: Strategy rationale (default)
# Level 3: Detailed analysis
# Level 4: Full audit trail

# Minimal explanations (production speed)
result = optimize(
    objective_function=my_function,
    bounds=bounds,
    explanation_level=1
)
print(result.explanation)
# "Optimization converged in 234 evaluations using CMA-ES"

# Full audit trail (compliance/debugging)
result = optimize(
    objective_function=my_function,
    bounds=bounds,
    explanation_level=4
)
print(result.explanation)
# Detailed explanation of optimization decisions`

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
    
    # Learning configuration
    learning={
        'read_from_public': True,   # Learn from public patterns
        'write_to_private': True,    # Save to private learning store
        'read_from_private': True    # Use your private patterns
    }
)

# Check learning operations
if result.learning_operations:
    print(f"Learning operations: {result.learning_operations}")`

  const privateLearning = `from sematryx import optimize

# Configure Private Learning Store
# Your optimization knowledge stays private to your organization
result = optimize(
    objective_function=proprietary_function,
    bounds=bounds,
    
    # Private learning configuration
    learning={
        'read_from_public': True,    # Still benefit from public patterns
        'read_from_private': True,   # Use your private patterns
        'write_to_public': False,    # Don't share your patterns
        'write_to_private': True     # Save to private store
    }
)

# Your competitive insights stay private
print(f"Learning operations: {result.learning_operations}")`

  const fullConfig = `from sematryx import optimize

# Full Intelligence configuration (3 Core Pillars)
result = optimize(
    objective_function=enterprise_function,
    bounds=bounds,
    
    # === INTERPRETABLE ===
    explanation_level=4,  # Full audit trail
    
    # === ADAPTIVE ===
    learning={
        'read_from_public': True,
        'read_from_private': True,
        'write_to_private': True
    }
)

# Rich, explainable results
print(f"Strategy: {result.strategy_used}")
print(f"Explanation: {result.explanation}")
print(f"Audit ID: {result.audit_id}")
if result.learning_operations:
    print(f"Learning: {result.learning_operations}")`

  return (
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
            Master the 3 Core Pillars that make Sematryx different: Agentic, Interpretable, and Adaptive.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              The 3 Core Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              Full Intelligence Configuration
            </h2>
            <p className="text-text-secondary mb-4">
              Here's how to combine all 3 core pillars for maximum capability. 
              Note: Domain libraries are a separate feature - see the Domain-Specific Optimization tutorial.
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
    </div>
  )
}
