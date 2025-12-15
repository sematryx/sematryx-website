import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Problem Setup: Objectives & Constraints - Sematryx Tutorials',
  description: 'Learn how to define objective functions, bounds, and constraints for complex optimization problems.',
}

export default function ProblemSetupTutorial() {
  const objectiveTypes = `from sematryx import optimize

# MINIMIZATION (default)
# Find the lowest value of the objective function
result = optimize(
    objective_function=cost_function,
    bounds=bounds,
    minimize=True  # default
)

# MAXIMIZATION
# Find the highest value of the objective function
result = optimize(
    objective_function=profit_function,
    bounds=bounds,
    minimize=False  # maximize instead
)`

  const boundsExample = `from sematryx import optimize

# Define bounds for each dimension
# Each element is [lower_bound, upper_bound]
bounds = [
    [0, 100],      # x1: between 0 and 100
    [-50, 50],     # x2: between -50 and 50
    [0.001, 10],   # x3: between 0.001 and 10
    [1, 1000],     # x4: between 1 and 1000
]

# Integer bounds (for discrete optimization)
integer_dims = [0, 3]  # x1 and x4 must be integers

result = optimize(
    objective_function=my_function,
    bounds=bounds,
    integer_dimensions=integer_dims
)`

  const constraintExample = `from sematryx import optimize

def production_cost(x):
    """Objective: Minimize production cost"""
    labor, materials, energy = x
    return 50*labor + 30*materials + 20*energy

def constraint_output(x):
    """Constraint: Must produce at least 1000 units"""
    labor, materials, energy = x
    output = 10*labor + 5*materials + 2*energy
    return output - 1000  # >= 0 means satisfied

def constraint_budget(x):
    """Constraint: Budget cannot exceed $50,000"""
    labor, materials, energy = x
    total = 50*labor + 30*materials + 20*energy
    return 50000 - total  # >= 0 means satisfied

result = optimize(
    objective_function=production_cost,
    bounds=[[0, 100], [0, 200], [0, 500]],
    constraints=[
        {'type': 'inequality', 'fun': constraint_output},
        {'type': 'inequality', 'fun': constraint_budget},
    ]
)`

  const equalityConstraint = `from sematryx import optimize
import numpy as np

def portfolio_variance(weights):
    """Minimize portfolio risk"""
    cov_matrix = np.array([
        [0.04, 0.01, 0.02],
        [0.01, 0.03, 0.01],
        [0.02, 0.01, 0.05]
    ])
    return np.dot(weights, np.dot(cov_matrix, weights))

def weights_sum_to_one(weights):
    """Equality constraint: weights must sum to 1"""
    return sum(weights) - 1  # == 0 means satisfied

result = optimize(
    objective_function=portfolio_variance,
    bounds=[[0, 1], [0, 1], [0, 1]],  # Each weight 0-100%
    constraints=[
        {'type': 'equality', 'fun': weights_sum_to_one}
    ]
)`

  const multiObjective = `from sematryx import optimize

def multi_objective(x):
    """
    Multi-objective: Balance cost vs quality
    Returns weighted combination of objectives
    """
    cost = calculate_cost(x)
    quality = calculate_quality(x)
    
    # Scalarization: combine objectives with weights
    # Lower cost is better, higher quality is better
    # So we minimize cost and minimize negative quality
    return 0.6 * cost - 0.4 * quality

# Or use Pareto optimization for true multi-objective
result = optimize(
    objective_function=my_function,
    bounds=bounds,
    multi_objective=True,
    objectives=['minimize_cost', 'maximize_quality']
)`

  const penaltyMethod = `from sematryx import optimize

def objective_with_penalties(x):
    """
    Soft constraints via penalty functions
    Useful when hard constraints are too restrictive
    """
    # Base objective
    base_cost = sum(xi**2 for xi in x)
    
    # Soft constraint: prefer solutions where x[0] > x[1]
    penalty = 0
    if x[0] <= x[1]:
        penalty = 1000 * (x[1] - x[0] + 0.1)  # Quadratic penalty
    
    # Soft constraint: prefer solutions near integer values
    integer_penalty = sum(min(xi % 1, 1 - xi % 1)**2 for xi in x)
    
    return base_cost + penalty + 100 * integer_penalty

result = optimize(
    objective_function=objective_with_penalties,
    bounds=[[-10, 10], [-10, 10], [-10, 10]]
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
            <span className="bg-amber-500/15 text-amber-400 text-xs font-medium px-3 py-1 rounded-full border border-amber-500/30">
              Intermediate
            </span>
            <span className="text-text-tertiary">• 25 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Problem Setup: Objectives & Constraints
          </h1>
          <p className="text-xl text-text-secondary">
            Define complex optimization problems with multiple objectives, bounds, and constraints.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              What You'll Learn
            </h2>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Minimization vs maximization problems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Defining bounds for continuous and integer variables</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Inequality and equality constraints</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Multi-objective optimization approaches</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Penalty methods for soft constraints</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Minimization vs Maximization
            </h2>
            <p className="text-text-secondary mb-4">
              By default, Sematryx minimizes the objective function. For maximization problems, 
              set <code className="text-brand-primary bg-elevated-2 px-1.5 py-0.5 rounded text-sm">minimize=False</code>:
            </p>
            <CodeBlock
              code={objectiveTypes}
              language="python"
              title="Minimization vs maximization"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Defining Bounds
            </h2>
            <p className="text-text-secondary mb-4">
              Bounds define the search space for each variable. You can also specify which 
              dimensions should be integers for mixed-integer optimization:
            </p>
            <CodeBlock
              code={boundsExample}
              language="python"
              title="Bounds and integer dimensions"
            />
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Bounds Tips</h3>
              <ul className="space-y-2 text-text-secondary">
                <li><strong className="text-text-primary">Tight bounds:</strong> Narrower bounds help the optimizer converge faster</li>
                <li><strong className="text-text-primary">Scaling:</strong> Keep variables on similar scales (e.g., 0-1 or 0-100)</li>
                <li><strong className="text-text-primary">Integer variables:</strong> Use <code className="text-brand-primary bg-elevated-2 px-1 rounded text-sm">integer_dimensions</code> for discrete choices</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Inequality Constraints
            </h2>
            <p className="text-text-secondary mb-4">
              Inequality constraints define regions where solutions must satisfy <code className="text-brand-primary bg-elevated-2 px-1.5 py-0.5 rounded text-sm">g(x) ≥ 0</code>:
            </p>
            <CodeBlock
              code={constraintExample}
              language="python"
              title="Inequality constraints"
            />
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Constraint Convention</h3>
              <p className="text-text-secondary">
                Inequality constraints should return a value where <strong className="text-text-primary">positive = satisfied</strong>. 
                For example, "budget ≤ 50,000" becomes <code className="text-brand-primary bg-elevated-2 px-1 rounded text-sm">50000 - budget</code> (positive when under budget).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Equality Constraints
            </h2>
            <p className="text-text-secondary mb-4">
              Equality constraints require <code className="text-brand-primary bg-elevated-2 px-1.5 py-0.5 rounded text-sm">h(x) = 0</code>. 
              Common in portfolio optimization where weights must sum to 1:
            </p>
            <CodeBlock
              code={equalityConstraint}
              language="python"
              title="Equality constraints"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Multi-Objective Optimization
            </h2>
            <p className="text-text-secondary mb-4">
              When you have competing objectives (e.g., minimize cost AND maximize quality), 
              you can use scalarization or Pareto optimization:
            </p>
            <CodeBlock
              code={multiObjective}
              language="python"
              title="Multi-objective optimization"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Soft Constraints with Penalties
            </h2>
            <p className="text-text-secondary mb-4">
              Sometimes hard constraints are too restrictive. Penalty functions let you 
              express preferences without strict requirements:
            </p>
            <CodeBlock
              code={penaltyMethod}
              language="python"
              title="Penalty methods for soft constraints"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Best Practices
            </h2>
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Problem Setup Tips</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-text-primary">Start simple:</strong> Begin with minimal constraints, add complexity gradually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-text-primary">Scale variables:</strong> Normalize inputs to similar ranges for better convergence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-text-primary">Test constraints:</strong> Verify constraints are satisfiable before running optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-text-primary">Use explanations:</strong> Enable explanation_level to understand why constraints fail</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              🎉 Next Steps
            </h2>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <p className="text-text-secondary mb-4">
                You now know how to set up complex optimization problems. 
                Next, learn how to configure the AEAO Tetrad for enhanced optimization.
              </p>
              <div className="space-y-2">
                <Link 
                  href="/tutorials/ai-content-generation" 
                  className="block text-brand-primary hover:underline"
                >
                  → Configure the AEAO Tetrad
                </Link>
                <Link 
                  href="/tutorials/monitoring-alerts" 
                  className="block text-brand-primary hover:underline"
                >
                  → Understand optimization results
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
