import CodeBlock from '@/components/CodeBlock'

export default function PythonSDKPage() {
  const installCode = `pip install aeao`

  const basicUsage = `from aeao import aeao

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

  const tetradConfig = `from aeao import aeao, AEAOTetradCompleteConfig

# Option 1: Use preset configuration
result = aeao(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],
    preset="production"  # development, production, research, enterprise, minimal
)

# Option 2: Enable specific tetrad pillars
result = aeao(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],
    use_agentic_intelligence=True,      # Multi-agent coordination
    use_autodidactic_intelligence=True,  # Self-improvement
    explanation_level=3                 # Detailed explanations
)

# Option 3: Complete custom configuration
config = AEAOTetradCompleteConfig.enterprise()
config.expository.explanation_level = 4
config.agentic.max_agents_per_problem = 5
result = aeao(objective_function=sphere, bounds=[[-5, 5], [-5, 5]], config=config)`

  const domainOptimization = `from aeao import financial_optimize, healthcare_optimize, supply_chain_optimize

# Financial portfolio optimization
result = financial_optimize(
    problem_type='portfolio',
    config={
        'assets': ['AAPL', 'GOOGL', 'MSFT', 'TSLA'],
        'risk_tolerance': 0.15,
        'expected_returns': [0.12, 0.15, 0.10, 0.20]
    },
    max_evaluations=2000
)

# Healthcare drug discovery
result = healthcare_optimize(
    problem_type='drug_discovery',
    config={
        'target_protein': 'protein_id_123',
        'constraints': {'toxicity': '< 0.1', 'solubility': '> 0.5'}
    }
)

# Supply chain routing
result = supply_chain_optimize(
    problem_type='vehicle_routing',
    config={
        'locations': [...],
        'vehicle_capacity': 1000,
        'time_windows': {...}
    }
)`

  const apiClient = `from aeao import AEAOClient

# Initialize API client
client = AEAOClient(
    api_url="https://api.aeao.com",
    api_key="your-api-key"
)

# Authenticate
client.authenticate()

# Run optimization via API
result = client.optimize(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],
    max_evaluations=1000
)`

  const errorHandling = `from aeao.exceptions import (
    AEAOError, 
    AuthenticationError, 
    RateLimitError,
    OptimizationError
)

try:
    result = aeao(
        objective_function=sphere,
        bounds=[[-5, 5], [-5, 5]],
        max_evaluations=1000
    )
except AuthenticationError:
    print('Invalid API key')
except RateLimitError:
    print('Rate limit exceeded. Please wait and retry.')
except OptimizationError as e:
    print(f'Optimization failed: {e.message}')
except AEAOError as e:
    print(f'Error: {e.message}')`

  const asyncCode = `import asyncio
from aeao import AsyncAEAO

async def main():
    client = AsyncAEAO(api_key='your-api-key')
    
    # Run multiple optimizations concurrently
    results = await asyncio.gather(
        client.optimize(objective1, bounds1, max_evaluations=1000),
        client.optimize(objective2, bounds2, max_evaluations=1000),
        client.optimize(objective3, bounds3, max_evaluations=1000)
    )
    
    return results

asyncio.run(main())`

  const advancedFeatures = `from aeao import aeao

# GPU acceleration
result = aeao(
    objective_function=complex_function,
    bounds=[[-10, 10]] * 100,  # High-dimensional
    use_gpu_acceleration=True
)

# Visual intelligence
result = aeao(
    objective_function=landscape_function,
    bounds=[[-5, 5], [-5, 5]],
    use_visual_intelligence=True,
    explanation_level=4
)

# Neural-symbolic reasoning
result = aeao(
    objective_function=hybrid_function,
    bounds=[[-5, 5], [-5, 5]],
    use_neural_symbolic=True
)`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Python SDK
        </h1>
        <p className="text-xl text-gray-600">
          Official Python SDK for AEAO. Full-featured client library with support for optimization, 
          AEAO Tetrad configuration, and domain-specific libraries.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Installation
          </h2>
          <CodeBlock
            code={installCode}
            language="bash"
            title="Install the Python SDK"
          />
          <p className="text-gray-700 mt-4">
            The SDK requires Python 3.8 or higher. For domain-specific optimizations, install with extras:
          </p>
          <CodeBlock
            code="pip install aeao[financial,healthcare,supply_chain]"
            language="bash"
            title="Install with domain libraries"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Quick Start
          </h2>
          <p className="text-gray-700 mb-4">
            The simplest way to use AEAO is with the main <code className="bg-gray-100 px-2 py-1 rounded">aeao()</code> function:
          </p>
          <CodeBlock
            code={basicUsage}
            language="python"
            title="Basic optimization example"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            AEAO Tetrad Configuration
          </h2>
          <p className="text-gray-700 mb-4">
            Configure the four pillars of AEAO intelligence to match your needs:
          </p>
          <CodeBlock
            code={tetradConfig}
            language="python"
            title="Tetrad configuration examples"
          />
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">The AEAO Tetrad</h3>
            <ul className="space-y-2 text-purple-800">
              <li><strong>🤖 Agentic Intelligence:</strong> Multi-agent coordination for strategy selection</li>
              <li><strong>📖 Expository Intelligence:</strong> Explainable results (levels 0-5)</li>
              <li><strong>🧠 Autodidactic Intelligence:</strong> Self-improvement through learning</li>
              <li><strong>🏗️ Domain Extension:</strong> Business domain libraries (enabled by default)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Domain-Specific Optimization
          </h2>
          <p className="text-gray-700 mb-4">
            Use specialized domain libraries for industry-specific problems:
          </p>
          <CodeBlock
            code={domainOptimization}
            language="python"
            title="Domain-specific optimization examples"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Available Domains</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>financial:</strong> Portfolio optimization, trading strategies, risk management</li>
              <li><strong>healthcare:</strong> Drug discovery, clinical trials, treatment optimization</li>
              <li><strong>supply_chain:</strong> Vehicle routing, inventory optimization, cold chain</li>
              <li><strong>ai_ml:</strong> Neural architecture search, hyperparameter tuning</li>
              <li><strong>marketing:</strong> Campaign optimization, pricing strategies</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            API Client
          </h2>
          <p className="text-gray-700 mb-4">
            For server-side optimization via the REST API:
          </p>
          <CodeBlock
            code={apiClient}
            language="python"
            title="Using the API client"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Advanced Features
          </h2>
          <p className="text-gray-700 mb-4">
            Enable advanced capabilities for complex optimization problems:
          </p>
          <CodeBlock
            code={advancedFeatures}
            language="python"
            title="Advanced features"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Error Handling
          </h2>
          <p className="text-gray-700 mb-4">
            The SDK provides specific exception types for different error scenarios:
          </p>
          <CodeBlock
            code={errorHandling}
            language="python"
            title="Error handling"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Async Support
          </h2>
          <p className="text-gray-700 mb-4">
            Use AsyncAEAO for concurrent operations:
          </p>
          <CodeBlock
            code={asyncCode}
            language="python"
            title="Async usage"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            API Reference
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Main Function</h3>
              <ul className="space-y-2 text-gray-700">
                <li><code className="bg-gray-200 px-2 py-1 rounded">aeao(objective_function, bounds, **kwargs)</code> - Main optimization function</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">preset</code> - Use preset config ("development", "production", "research", "enterprise", "minimal")</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">use_agentic_intelligence</code> - Enable multi-agent coordination</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">use_expository_intelligence</code> - Enable explainability</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">use_autodidactic_intelligence</code> - Enable self-improvement</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">explanation_level</code> - Explanation detail (0-5)</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">use_gpu_acceleration</code> - Enable GPU/CUDA</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">use_visual_intelligence</code> - Enable visual analysis</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Configuration Classes</h3>
              <ul className="space-y-2 text-gray-700">
                <li><code className="bg-gray-200 px-2 py-1 rounded">AEAOTetradCompleteConfig</code> - Complete tetrad configuration</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">AEAOTetradCompleteConfig.development()</code> - Development preset</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">AEAOTetradCompleteConfig.production()</code> - Production preset</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">AEAOTetradCompleteConfig.research()</code> - Research preset</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">AEAOTetradCompleteConfig.enterprise()</code> - Enterprise preset</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Domain Functions</h3>
              <ul className="space-y-2 text-gray-700">
                <li><code className="bg-gray-200 px-2 py-1 rounded">financial_optimize(problem_type, config, **kwargs)</code> - Financial optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">healthcare_optimize(problem_type, config, **kwargs)</code> - Healthcare optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">supply_chain_optimize(problem_type, config, **kwargs)</code> - Supply chain optimization</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">API Client</h3>
              <ul className="space-y-2 text-gray-700">
                <li><code className="bg-gray-200 px-2 py-1 rounded">AEAOClient(api_url, api_key)</code> - Initialize API client</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">client.authenticate()</code> - Authenticate with API</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">client.optimize(objective, bounds, **kwargs)</code> - Run optimization via API</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">AsyncAEAO</code> - Async version of API client</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
