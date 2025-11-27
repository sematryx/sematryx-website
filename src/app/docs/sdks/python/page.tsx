import CodeBlock from '@/components/CodeBlock'

export default function PythonSDKPage() {
  const installCode = `pip install aeao`

  const basicUsage = `from aeao import AEAO

# Initialize the client
client = AEAO(api_key='your-api-key')

# Create an automation
automation = client.automations.create(
    name='data-processor',
    trigger={
        'type': 'webhook',
        'config': {
            'path': '/webhook/data-processor'
        }
    },
    actions=[
        {
            'type': 'transform',
            'config': {
                'input_format': 'json',
                'output_format': 'csv'
            }
        }
    ]
)

print(f'Automation created: {automation.id}')`

  const optimizationCode = `# Run an optimization
def objective(x):
    return sum(xi**2 for xi in x)

result = client.optimize(
    objective_function=objective,
    bounds=[[-5, 5], [-5, 5], [-5, 5]],
    max_evaluations=1000
)

print(f'Best solution: {result.best_solution}')
print(f'Best fitness: {result.best_fitness}')`

  const domainOptimization = `from aeao import financial_optimize

# Financial portfolio optimization
result = financial_optimize(
    problem_type='portfolio',
    config={
        'assets': ['AAPL', 'GOOGL', 'MSFT', 'TSLA'],
        'risk_tolerance': 0.15,
        'expected_returns': [0.12, 0.15, 0.10, 0.20]
    },
    max_evaluations=1000
)`

  const listCode = `# List all automations
automations = client.automations.list(
    status='active',
    limit=20
)

print(f'Found {len(automations)} automations')`

  const errorHandling = `from aeao.exceptions import AEAOError, AuthenticationError, RateLimitError

try:
    automation = client.automations.create(
        name='my-automation',
        # ... config
    )
except AuthenticationError:
    print('Invalid API key')
except RateLimitError:
    print('Rate limit exceeded')
except AEAOError as e:
    print(f'Error: {e.message}')`

  const asyncCode = `import asyncio
from aeao import AsyncAEAO

async def main():
    client = AsyncAEAO(api_key='your-api-key')
    
    # Run multiple optimizations concurrently
    results = await asyncio.gather(
        client.optimize(objective1, bounds1),
        client.optimize(objective2, bounds2),
        client.optimize(objective3, bounds3)
    )
    
    return results

asyncio.run(main())`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Python SDK
        </h1>
        <p className="text-xl text-gray-600">
          Official Python SDK for AEAO. Full-featured client library with support for optimization, automations, and domain-specific libraries.
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
            Initialize the client and start using AEAO:
          </p>
          <CodeBlock
            code={basicUsage}
            language="python"
            title="Basic usage example"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Optimization
          </h2>
          <p className="text-gray-700 mb-4">
            Run optimization problems with the Python SDK:
          </p>
          <CodeBlock
            code={optimizationCode}
            language="python"
            title="Running optimizations"
          />
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
            title="Financial optimization example"
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
            Automation Management
          </h2>
          <CodeBlock
            code={listCode}
            language="python"
            title="List automations"
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
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AEAO Class</h3>
              <ul className="space-y-2 text-gray-700">
                <li><code className="bg-gray-200 px-2 py-1 rounded">AEAO(api_key, **options)</code> - Initialize the client</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">optimize(objective_function, bounds, **kwargs)</code> - Run optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">automations</code> - Automation management</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">analytics</code> - Analytics and metrics</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Domain Functions</h3>
              <ul className="space-y-2 text-gray-700">
                <li><code className="bg-gray-200 px-2 py-1 rounded">financial_optimize()</code> - Financial domain optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">healthcare_optimize()</code> - Healthcare domain optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">supply_chain_optimize()</code> - Supply chain optimization</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

