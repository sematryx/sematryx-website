import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function GettingStartedTutorial() {
  const installCode = `pip install aeao`

  const basicExample = `from sematryx import sematryx

# Define your objective function
def sphere(x):
    """Minimize the sum of squares (classic optimization test)"""
    return sum(xi**2 for xi in x)

# Run optimization
result = aeao(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],  # 2D problem
    max_evaluations=1000
)

print(f"Best solution: {result['best_solution']}")
print(f"Best fitness: {result['best_fitness']}")
print(f"Evaluations used: {result['evaluations']}")`

  const resultExample = `{
  "success": true,
  "best_solution": [0.001, -0.002],
  "best_fitness": 0.000005,
  "evaluations": 847,
  "duration_seconds": 1.23,
  "strategy_used": "shgo",
  "tetrad_config": {
    "use_agentic_intelligence": false,
    "use_expository_intelligence": true,
    "use_autodidactic_intelligence": false,
    "use_domain_extension": true
  }
}`

  const tetradExample = `from sematryx import sematryx

# Enable specific tetrad pillars
result = aeao(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],
    use_agentic_intelligence=True,      # Multi-agent coordination
    use_autodidactic_intelligence=True,   # Self-improvement
    explanation_level=3                  # Detailed explanations
)`

  const realWorldExample = `from sematryx import sematryx
import numpy as np

# Real-world example: Portfolio optimization
def portfolio_risk(weights):
    """
    Minimize portfolio risk given expected returns
    weights: [w1, w2, w3] - allocation percentages
    """
    returns = np.array([0.12, 0.08, 0.15])  # Expected returns
    covariance = np.array([[0.04, 0.01, 0.02],
                          [0.01, 0.03, 0.01],
                          [0.02, 0.01, 0.05]])
    
    # Portfolio return
    portfolio_return = np.dot(weights, returns)
    
    # Portfolio risk (variance)
    portfolio_variance = np.dot(weights, np.dot(covariance, weights))
    
    # Risk-adjusted return (negative for minimization)
    return -portfolio_return / np.sqrt(portfolio_variance)

# Optimize with constraints (weights sum to 1)
result = aeao(
    objective_function=portfolio_risk,
    bounds=[[0, 1], [0, 1], [0, 1]],
    max_evaluations=2000
)

print(f"Optimal allocation: {result['best_solution']}")
print(f"Risk-adjusted return: {-result['best_fitness']}")`

  return (
    <main>
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href="/tutorials" 
            className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-flex items-center"
          >
            ← Back to Tutorials
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              Beginner
            </span>
            <span className="text-gray-500">• 15 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Getting Started with Sematryx
          </h1>
          <p className="text-xl text-gray-600">
            In this tutorial, you'll solve your first optimization problem and learn the core concepts of Sematryx.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-gray-700 mb-4">
              We'll solve a simple optimization problem to introduce you to the core concepts:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Defining objective functions</li>
              <li>Setting search bounds</li>
              <li>Running optimization with Sematryx</li>
              <li>Understanding optimization results</li>
              <li>Configuring the AEAO Tetrad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Prerequisites
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Before You Start</h3>
              <ul className="space-y-2 text-blue-800">
                <li>✅ Python 3.8+ installed</li>
                <li>✅ Basic Python programming knowledge</li>
                <li>✅ Understanding of optimization concepts (minimization/maximization)</li>
              </ul>
              <p className="mt-4 text-blue-800">
                For API access, you'll need an API key from{' '}
                <Link href="/api-keys" className="underline">the API Keys page</Link>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 1: Install AEAO
            </h2>
            <p className="text-gray-700 mb-4">
              Install Sematryx using pip:
            </p>
            <CodeBlock
              code={installCode}
              language="bash"
              title="Install Sematryx"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 2: Your First Optimization
            </h2>
            <p className="text-gray-700 mb-4">
              Let's solve a classic optimization problem - minimizing the sphere function. 
              This is a simple 2D problem where we want to find the point closest to the origin:
            </p>
            <CodeBlock
              code={basicExample}
              language="python"
              title="Basic optimization example"
            />
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-semibold text-green-900 mb-3">What's Happening?</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Objective Function:</strong> <code>sphere(x)</code> calculates sum of squares</li>
                <li><strong>Bounds:</strong> Search space is [-5, 5] for each dimension</li>
                <li><strong>Max Evaluations:</strong> Sematryx will evaluate the function up to 1000 times</li>
                <li><strong>Result:</strong> Best solution found and its objective value</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 3: Understanding the Results
            </h2>
            <p className="text-gray-700 mb-4">
              Sematryx returns a dictionary with optimization results:
            </p>
            <CodeBlock
              code={resultExample}
              language="json"
              title="Optimization result"
            />
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Result Fields</h3>
              <ul className="space-y-2 text-blue-800">
                <li><strong>best_solution:</strong> Optimal parameter values found (should be near [0, 0] for sphere)</li>
                <li><strong>best_fitness:</strong> Best objective value (should be near 0)</li>
                <li><strong>evaluations:</strong> Number of function evaluations used</li>
                <li><strong>strategy_used:</strong> Optimization algorithm Sematryx selected</li>
                <li><strong>tetrad_config:</strong> Which AEAO Tetrad features were active</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 4: Configure the AEAO Tetrad
            </h2>
            <p className="text-gray-700 mb-4">
              Sematryx's AEAO Engine is built on four pillars of intelligence. Enable them to enhance your optimization:
            </p>
            <CodeBlock
              code={tetradExample}
              language="python"
              title="Tetrad configuration"
            />
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">The AEAO Tetrad</h3>
              <ul className="space-y-2 text-purple-800">
                <li><strong>🤖 Agentic Intelligence:</strong> Multiple AI agents collaborate to select the best strategy</li>
                <li><strong>📖 Expository Intelligence:</strong> Get explanations of optimization decisions (levels 0-5)</li>
                <li><strong>🧠 Autodidactic Intelligence:</strong> System learns and improves from optimization experience</li>
                <li><strong>🏗️ Domain Extension:</strong> Specialized libraries for business domains (enabled by default)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 5: Real-World Example
            </h2>
            <p className="text-gray-700 mb-4">
              Here's a more practical example - optimizing a portfolio allocation:
            </p>
            <CodeBlock
              code={realWorldExample}
              language="python"
              title="Portfolio optimization example"
            />
            <p className="text-gray-700 mt-4">
              This example shows how to optimize a real-world problem with multiple variables and constraints.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🎉 Congratulations!
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-green-800 mb-4">
                You've successfully solved your first optimization problem with Sematryx! 
                You now understand how to define problems, run optimization, and configure the AEAO Tetrad.
              </p>
              <h3 className="text-lg font-semibold text-green-900 mb-3">What's Next?</h3>
              <div className="space-y-2">
                <Link 
                  href="/tutorials/data-transformation" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Learn about problem setup and constraints
                </Link>
                <Link 
                  href="/tutorials/ai-content-generation" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Master Tetrad configuration
                </Link>
                <Link 
                  href="/docs" 
                  className="block text-green-700 hover:text-green-800 underline"
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
