import CodeBlock from '@/components/CodeBlock'

export default function OptimizationAPIPage() {
  const basicOptimization = `curl -X POST https://api.sematryx.com/v1/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective": "minimize",
    "bounds": [[-5, 5], [-5, 5]],
    "max_evaluations": 1000
  }'`

  const pythonExample = `from sematryx import Sematryx
import numpy as np

# Initialize client
client = Sematryx(api_key="sk-your-api-key")

# Define your objective function
def sphere(x):
    return sum(xi**2 for xi in x)

# Run optimization
result = client.optimize(
    objective="minimize",
    variables=[
        {"name": "x", "bounds": (-5, 5)},
        {"name": "y", "bounds": (-5, 5)},
    ],
    objective_function=sphere,
)

print(f"Solution: {result.solution}")
print(f"Value: {result.value}")`

  const tetradConfig = `from sematryx import Sematryx

client = Sematryx(api_key="sk-your-api-key")

# Use optimization modes for speed vs quality tradeoff
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    mode="balanced"  # speed, balanced, quality
)

# Enable explainability with different levels
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    explanation_level=2,  # 0=none, 1=basic, 2=detailed, 3=comprehensive
)

# Enable private learning for better performance over time
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    learning={"read_from_private": True, "write_to_private": True}
)`

  const domainOptimization = `from sematryx import Sematryx

client = Sematryx(api_key="sk-your-api-key")

# Financial portfolio optimization
result = client.optimize_portfolio(
    assets=["AAPL", "GOOGL", "MSFT", "AMZN"],
    returns=[0.12, 0.10, 0.08, 0.15],
    covariance=[...],  # 4x4 covariance matrix
    target_return=0.10,
    max_position=0.4,
    explanation_level=2,
)

# General optimization with custom function
def inventory_cost(params):
    reorder_point, order_qty, safety_stock = params
    # Custom cost calculation
    return total_cost

result = client.optimize(
    objective="minimize",
    variables=[
        {"name": "reorder_point", "bounds": (100, 1000)},
        {"name": "order_qty", "bounds": (200, 2000)},
        {"name": "safety_stock", "bounds": (0, 500)},
    ],
    objective_function=inventory_cost,
)`

  const optimizationResponse = `{
  "success": true,
  "best_solution": [0.001, -0.002, 0.003],
  "best_fitness": 0.000014,
  "evaluations": 847,
  "duration_seconds": 2.34,
  "strategy_used": "shgo",
  "tetrad_config": {
    "use_agentic_intelligence": true,
    "use_expository_intelligence": true,
    "use_autodidactic_intelligence": false,
    "use_domain_extension": true
  },
  "features_active": {
    "agentic_intelligence": true,
    "expository_intelligence": true,
    "explanation_level": 2,
    "cross_problem_learning": false
  }
}`

  const restAPIExample = `curl -X POST https://api.sematryx.com/v1/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective_function_id": "func_1234567890",
    "bounds": [[-10, 10], [-10, 10], [-10, 10]],
    "max_evaluations": 2000,
    "preset": "production",
    "tetrad_config": {
      "use_agentic_intelligence": true,
      "use_expository_intelligence": true,
      "explanation_level": 3
    }
  }'`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Optimization API
        </h1>
        <p className="text-xl text-gray-400">
          Solve optimization problems using Sematryx with configurable AI intelligence through the AEAO Tetrad.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Basic Optimization
          </h2>
          <p className="text-gray-400 mb-4">
            The simplest way to optimize a function. Define your objective function and bounds, then let Sematryx find the optimal solution.
          </p>
          <CodeBlock
            code={pythonExample}
            language="python"
            title="Python SDK - Basic Optimization"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Parameters</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>objective_function</strong> (required): Function to optimize f(x) → float</li>
              <li><strong>bounds</strong> (required): Search bounds [[min1, max1], [min2, max2], ...]</li>
              <li><strong>max_evaluations</strong> (optional): Maximum function evaluations (default: 1000)</li>
              <li><strong>mode</strong> (optional): "fast", "balanced", or "accurate" (default: "balanced")</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            AEAO Tetrad Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Configure the four pillars of Sematryx's AEAO Engine intelligence: Agentic, Expository, Autodidactic, and Domain Extension.
          </p>
          <CodeBlock
            code={tetradConfig}
            language="python"
            title="Tetrad Configuration Examples"
          />
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Tetrad Pillars</h3>
            <ul className="space-y-2 text-green-800">
              <li><strong>🤖 Agentic Intelligence:</strong> Multi-agent coordination for strategy selection</li>
              <li><strong>📖 Expository Intelligence:</strong> Explainability with configurable levels (0-5)</li>
              <li><strong>🧠 Autodidactic Intelligence:</strong> Self-improvement and learning from experience</li>
              <li><strong>🏗️ Domain Extension:</strong> Business domain libraries for rapid adoption</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Preset Configurations</h3>
            <ul className="space-y-2 text-yellow-800">
              <li><strong>development:</strong> Fast iteration, basic explanations</li>
              <li><strong>production:</strong> Balanced performance, standard explanations</li>
              <li><strong>research:</strong> Maximum capabilities, comprehensive explanations</li>
              <li><strong>enterprise:</strong> Full features, advanced monitoring</li>
              <li><strong>minimal:</strong> Core optimization only</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Domain-Specific Optimization
          </h2>
          <p className="text-gray-400 mb-4">
            Use specialized optimization libraries for specific business domains with pre-configured constraints and objectives.
          </p>
          <CodeBlock
            code={domainOptimization}
            language="python"
            title="Domain-Specific Optimization"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Available Domains</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>Financial:</strong> Portfolio optimization, trading strategies, risk management</li>
              <li><strong>Healthcare:</strong> Drug discovery, clinical trial design, treatment protocols</li>
              <li><strong>Supply Chain:</strong> Vehicle routing, inventory management, warehouse optimization</li>
              <li><strong>AI/ML:</strong> Hyperparameter tuning, neural architecture search</li>
              <li><strong>Marketing:</strong> Campaign optimization, budget allocation</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            REST API
          </h2>
          <p className="text-gray-400 mb-4">
            Use the REST API for server-side optimization requests. Upload your objective function first, then call the optimize endpoint.
          </p>
          <CodeBlock
            code={restAPIExample}
            language="bash"
            title="POST /v1/optimize"
          />
          <CodeBlock
            code={optimizationResponse}
            language="json"
            title="Response"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Response Format
          </h2>
          <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Optimization Result</h3>
            <ul className="space-y-2 text-gray-400">
              <li><strong>success:</strong> Whether optimization succeeded</li>
              <li><strong>best_solution:</strong> Optimal parameter values found</li>
              <li><strong>best_fitness:</strong> Best objective value achieved</li>
              <li><strong>evaluations:</strong> Number of function evaluations used</li>
              <li><strong>duration_seconds:</strong> Time taken for optimization</li>
              <li><strong>strategy_used:</strong> Optimization algorithm selected</li>
              <li><strong>tetrad_config:</strong> Tetrad configuration that was active</li>
              <li><strong>features_active:</strong> Which tetrad features were enabled</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">
                Explainability
              </h3>
              <p className="text-gray-400 mb-3">
                Get detailed explanations of optimization decisions with configurable levels (0-3).
              </p>
              <CodeBlock
                code={`result = client.optimize(..., explanation_level=2)`}
                language="python"
              />
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">
                Private Learning
              </h3>
              <p className="text-gray-400 mb-3">
                Learn from your optimizations to improve performance on similar problems.
              </p>
              <CodeBlock
                code={`result = client.optimize(..., learning={"read_from_private": True, "write_to_private": True})`}
                language="python"
              />
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">
                Optimization Modes
              </h3>
              <p className="text-gray-400 mb-3">
                Balance speed vs quality with preset modes.
              </p>
              <CodeBlock
                code={`result = client.optimize(..., mode="quality")  # speed, balanced, quality`}
                language="python"
              />
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">
                Integer Variables
              </h3>
              <p className="text-gray-400 mb-3">
                Support for mixed-integer optimization problems.
              </p>
              <CodeBlock
                code={`variables=[{"name": "count", "bounds": (1, 100), "type": "integer"}]`}
                language="python"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
