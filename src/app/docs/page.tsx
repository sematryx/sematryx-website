import CodeBlock from '@/components/CodeBlock'

export default function DocsPage() {
  const quickStartCode = `from aeao import aeao

# Define your objective function
def sphere(x):
    return sum(xi**2 for xi in x)

# Run optimization
result = aeao(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],
    max_evaluations=1000
)

print(f"Best solution: {result['best_solution']}")
print(f"Best fitness: {result['best_fitness']}")`

  const tetradExample = `from aeao import aeao

# Use preset configuration
result = aeao(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],
    preset="production"  # development, production, research, enterprise
)

# Or enable specific tetrad pillars
result = aeao(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],
    use_agentic_intelligence=True,
    use_autodidactic_intelligence=True,
    explanation_level=3
)`

  const domainExample = `from aeao import financial_optimize

# Financial portfolio optimization
result = financial_optimize(
    problem_type="portfolio",
    config={
        "assets": ["AAPL", "GOOGL", "MSFT"],
        "risk_tolerance": 0.3
    }
)`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Quick Start Guide
        </h1>
        <p className="text-xl text-gray-400">
          Get started with <span className="text-primary-400">Sematryx</span> in minutes. This guide will walk you through your first optimization problem.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. Installation
          </h2>
          <p className="text-gray-400 mb-4">
            Install <span className="text-primary-400">Sematryx</span> using pip:
          </p>
          <CodeBlock
            code="pip install aeao"
            language="bash"
            title="Install Sematryx"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. Get Your API Key
          </h2>
          <p className="text-gray-400 mb-4">
            For API access, get your API key from the{' '}
            <a href="/api-keys" className="text-primary-400 hover:text-primary-300 underline">
              API Keys page
            </a>
            . Choose a plan that fits your needs and complete the checkout process.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            3. Your First Optimization
          </h2>
          <p className="text-gray-400 mb-4">
            Define your objective function and bounds, then let <span className="text-primary-400">Sematryx</span> find the optimal solution:
          </p>
          <CodeBlock
            code={quickStartCode}
            language="python"
            title="Basic optimization example"
          />
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-green-400 mb-3">What happened?</h3>
            <ul className="space-y-2 text-green-300">
              <li><span className="text-primary-400">Sematryx</span> analyzed your problem and selected the best optimization strategy</li>
              <li>It evaluated your function 1000 times to find the optimal solution</li>
              <li>The result includes the best parameters and objective value found</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            4. Configure the <span className="text-primary-400">AEAO</span> Tetrad
          </h2>
          <p className="text-gray-400 mb-4">
            Sematryx's <span className="text-primary-400">AEAO Engine</span> is built on four pillars of intelligence. Configure them to match your needs:
          </p>
          <CodeBlock
            code={tetradExample}
            language="python"
            title="Tetrad configuration"
          />
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">The <span className="text-primary-400">AEAO</span> Tetrad</h3>
            <ul className="space-y-2 text-blue-300">
              <li><strong>🤖 Agentic:</strong> Multi-agent coordination for strategy selection</li>
              <li><strong>📖 Expository:</strong> Explainable results with configurable detail levels</li>
              <li><strong>🧠 Autodidactic:</strong> Self-improvement through learning from experience</li>
              <li><strong>🏗️ Domain Extension:</strong> Specialized libraries for business domains</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            5. Domain-Specific Optimization
          </h2>
          <p className="text-gray-400 mb-4">
            Use specialized optimization libraries for specific business domains:
          </p>
          <CodeBlock
            code={domainExample}
            language="python"
            title="Domain-specific optimization"
          />
          <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Available Domains</h3>
            <ul className="space-y-2 text-purple-300">
              <li>Financial: Portfolio optimization, trading strategies</li>
              <li>Healthcare: Drug discovery, clinical trials</li>
              <li>Supply Chain: Vehicle routing, inventory management</li>
              <li>AI/ML: Hyperparameter tuning, architecture search</li>
              <li>Marketing: Campaign optimization, budget allocation</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            6. Key Concepts
          </h2>
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Understanding Optimization</h3>
            <ul className="space-y-2 text-blue-300">
              <li><strong className="text-blue-200">Objective Function:</strong> The function you want to minimize or maximize</li>
              <li><strong className="text-blue-200">Bounds:</strong> Search space constraints for each variable</li>
              <li><strong className="text-blue-200">Strategy Selection:</strong> <span className="text-primary-400">Sematryx</span> automatically chooses the best optimization algorithm</li>
              <li><strong className="text-blue-200">Explainability:</strong> Get detailed explanations of optimization decisions</li>
              <li><strong className="text-blue-200">Learning:</strong> <span className="text-primary-400">Sematryx</span> improves performance on repeated problems</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            7. Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1f2e] rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Explore Tutorials
              </h3>
              <p className="text-gray-400 mb-4">
                Follow step-by-step tutorials to solve real-world optimization problems.
              </p>
              <a 
                href="/tutorials" 
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                View Tutorials →
              </a>
            </div>
            <div className="bg-[#1a1f2e] rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                API Reference
              </h3>
              <p className="text-gray-400 mb-4">
                Detailed documentation for all optimization APIs and tetrad configuration.
              </p>
              <a 
                href="/docs/api/automation" 
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                API Reference →
              </a>
            </div>
            <div className="bg-[#1a1f2e] rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Tetrad Configuration
              </h3>
              <p className="text-gray-400 mb-4">
                Learn how to configure the four pillars of Sematryx's <span className="text-primary-400">AEAO Engine</span> intelligence.
              </p>
              <a 
                href="/docs/advanced/best-practices" 
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                Configuration Guide →
              </a>
            </div>
            <div className="bg-[#1a1f2e] rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Domain Libraries
              </h3>
              <p className="text-gray-400 mb-4">
                Explore specialized optimization libraries for your industry.
              </p>
              <a 
                href="/docs/sdks/python" 
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                Domain Docs →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
