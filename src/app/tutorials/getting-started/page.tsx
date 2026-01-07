import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Getting Started - Sematryx Tutorials',
  description: 'Solve your first optimization problem with Sematryx and learn core concepts.',
}

export default function GettingStartedTutorial() {
  const installCode = `pip install sematryx`

  const basicExample = `from sematryx import optimize

# Define your objective function
def sphere(x):
    """Minimize the sum of squares (classic optimization test)"""
    return sum(xi**2 for xi in x)

# Run optimization
# API key can be provided or set via SEMATRYX_API_KEY env var
result = optimize(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],  # 2D problem
    max_evaluations=1000,
    api_key="sk-..."  # or set SEMATRYX_API_KEY environment variable
)

print(f"Best solution: {result.solution}")
print(f"Best value: {result.objective_value}")
print(f"Evaluations used: {result.evaluations_used}")`

  const resultExample = `result.solution        # {'x0': 0.001, 'x1': -0.002}
result.objective_value  # 0.000005
result.evaluations_used # 847
result.duration_seconds # 1.23
result.strategy_used    # "cma_es"
result.explanation      # "Converged to global minimum..."
result.success         # True`

  const intelligenceExample = `from sematryx import optimize

# Configure the engine's three core pillars
result = optimize(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],
    
    # Interpretable: Get detailed explanations
    explanation_level=3,
    
    # Learning: Enable private learning store
    learning={
        "read_from_public": True,
        "write_to_private": True
    }
)`

  const realWorldExample = `from sematryx import optimize
import numpy as np

# Real-world example: Portfolio optimization
def portfolio_risk(weights):
    """
    Minimize portfolio risk given expected returns
    weights: [w1, w2, w3] - allocation percentages
    """
    returns = np.array([0.12, 0.08, 0.15])  # Expected returns
    covariance = np.array([
        [0.04, 0.01, 0.02],
        [0.01, 0.03, 0.01],
        [0.02, 0.01, 0.05]
    ])
    
    # Portfolio variance (risk)
    portfolio_variance = np.dot(weights, np.dot(covariance, weights))
    
    # Penalty for not summing to 1
    constraint_penalty = 1000 * abs(sum(weights) - 1)
    
    return portfolio_variance + constraint_penalty

# Optimize
result = optimize(
    objective_function=portfolio_risk,
    bounds=[[0, 1], [0, 1], [0, 1]],
    max_evaluations=2000,
    explanation_level=2  # Get rationale
)

print(f"Optimal allocation: {result.solution}")
print(f"Risk value: {result.objective_value:.6f}")
print(f"Explanation: {result.explanation}")`

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
            <span className="bg-emerald-500/15 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full border border-emerald-500/30">
              Beginner
            </span>
            <span className="text-text-tertiary">• 15 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Getting Started with Sematryx
          </h1>
          <p className="text-xl text-text-secondary">
            Solve your first optimization problem and learn the core concepts of Sematryx.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              What You'll Learn
            </h2>
            <p className="text-text-secondary mb-4">
              In this tutorial, you'll solve a simple optimization problem and understand the key concepts:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Defining objective functions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Setting search bounds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Running optimization with Sematryx</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Understanding results and explanations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Configuring Sematryx Intelligence</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Prerequisites
            </h2>
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Before You Start</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Python 3.8+ installed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Basic Python programming knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Understanding of optimization concepts (minimization/maximization)</span>
                </li>
              </ul>
              <p className="mt-4 text-text-secondary">
                For API access, you'll need an API key from{' '}
                <Link href="/api-keys" className="text-brand-primary hover:underline">the API Keys page</Link>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Step 1: Install Sematryx
            </h2>
            <p className="text-text-secondary mb-4">
              Install the Sematryx Python SDK:
            </p>
            <CodeBlock
              code={installCode}
              language="bash"
              title="Install Sematryx"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Step 2: Your First Optimization
            </h2>
            <p className="text-text-secondary mb-4">
              Let's solve a classic optimization problem—minimizing the sphere function. 
              This is a 2D problem where we want to find the point closest to the origin:
            </p>
            <CodeBlock
              code={basicExample}
              language="python"
              title="Basic optimization example"
            />
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">What's Happening?</h3>
              <ul className="space-y-3 text-text-secondary">
                <li><strong className="text-text-primary">Objective Function:</strong> <code className="text-brand-primary bg-elevated-2 px-1.5 py-0.5 rounded text-sm">sphere(x)</code> calculates sum of squares—we want to minimize this</li>
                <li><strong className="text-text-primary">Bounds:</strong> Search space is [-5, 5] for each dimension</li>
                <li><strong className="text-text-primary">Max Evaluations:</strong> Sematryx will evaluate the function up to 1000 times</li>
                <li><strong className="text-text-primary">Result:</strong> Best solution found (should be near [0, 0]) and its objective value</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Step 3: Understanding the Results
            </h2>
            <p className="text-text-secondary mb-4">
              Sematryx returns an OptimizationResult object with optimization results and explanations:
            </p>
            <CodeBlock
              code={resultExample}
              language="json"
              title="Optimization result"
            />
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Result Fields</h3>
              <ul className="space-y-3 text-text-secondary">
                <li><strong className="text-text-primary">result.solution:</strong> Dictionary of optimal parameter values (e.g., <code className="text-text-tertiary">{`{'x0': 0.001, 'x1': -0.002}`}</code>)</li>
                <li><strong className="text-text-primary">result.objective_value:</strong> Best objective value achieved</li>
                <li><strong className="text-text-primary">result.evaluations_used:</strong> Number of function evaluations used</li>
                <li><strong className="text-text-primary">result.strategy_used:</strong> Which optimization algorithm Sematryx selected</li>
                <li><strong className="text-text-primary">result.explanation:</strong> Why this strategy was chosen and how it performed</li>
                <li><strong className="text-text-primary">result.success:</strong> Whether optimization succeeded</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Step 4: Configure the Optimization Engine
            </h2>
            <p className="text-text-secondary mb-4">
              Sematryx's optimization engine has three pillars you can enable for enhanced optimization:
            </p>
            <CodeBlock
              code={intelligenceExample}
              language="python"
              title="Engine configuration"
            />
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">The Three Core Pillars</h3>
              <ul className="space-y-3 text-text-secondary">
                <li>
                  <strong className="text-accent-agentic">Agentic Intelligence:</strong>{' '}
                  Multiple AI agents collaborate to select the best optimization strategy
                </li>
                <li>
                  <strong className="text-accent-expository">Interpretable Intelligence:</strong>{' '}
                  Get explanations of optimization decisions (levels 0-5 for detail)
                </li>
                <li>
                  <strong className="text-accent-autodidactic">Adaptive Intelligence:</strong>{' '}
                  System learns from your optimizations to improve over time
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Step 5: Real-World Example
            </h2>
            <p className="text-text-secondary mb-4">
              Here's a more practical example—optimizing a portfolio allocation:
            </p>
            <CodeBlock
              code={realWorldExample}
              language="python"
              title="Portfolio optimization example"
            />
            <p className="text-text-secondary mt-4">
              This example shows how to optimize a real-world problem with constraints 
              and get explanations you can present to stakeholders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              🎉 Congratulations!
            </h2>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <p className="text-text-secondary mb-4">
                You've solved your first optimization problem with Sematryx! 
                You now understand how to define problems, run optimization, and interpret results.
              </p>
              <h3 className="text-lg font-semibold text-text-primary mb-3">What's Next?</h3>
              <div className="space-y-2">
                <Link 
                  href="/tutorials/data-transformation" 
                  className="block text-brand-primary hover:underline"
                >
                  → Learn about complex problem setup and constraints
                </Link>
                <Link 
                  href="/tutorials/ai-content-generation" 
                  className="block text-brand-primary hover:underline"
                >
                  → Master Sematryx Intelligence configuration
                </Link>
                <Link 
                  href="/docs" 
                  className="block text-brand-primary hover:underline"
                >
                  → Explore the full API documentation
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
