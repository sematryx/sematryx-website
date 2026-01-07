'use client'

import CodeBlock from '@/components/CodeBlock'
import CollapsibleSection from '@/components/CollapsibleSection'

export default function PythonSDKPage() {
  const installCode = `pip install sematryx`

  const basicUsage = `from sematryx import optimize

# Define your objective function
def sphere(x):
    return sum(xi**2 for xi in x)

# Run optimization (cloud API - requires API key)
result = optimize(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],
    max_evaluations=1000,
    api_key="sk-..."  # or set SEMATRYX_API_KEY env var
)

print(f"Best solution: {result.solution}")
print(f"Best value: {result.objective_value}")`

  const intelligenceConfig = `from sematryx import optimize

# Configure optimization with intelligence features
result = optimize(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],
    
    # Explanation level (0-4, higher = more detailed)
    explanation_level=3,
    
    # Learning configuration
    learning={
        "read_from_public": True,
        "write_to_private": True
    },
    
    # Strategy selection
    strategy="auto"  # auto, bayesian, evolutionary, gradient
)`

  const domainOptimization = `from sematryx import financial_optimize, healthcare_optimize, supply_chain_optimize

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

  const apiClient = `from sematryx import Sematryx

# Initialize client for advanced features
client = Sematryx(
    api_key="sk-..."  # or set SEMATRYX_API_KEY env var
)

# Run optimization
result = client.optimize(
    objective="minimize",
    variables=[
        {"name": "x", "bounds": (-5, 5)},
        {"name": "y", "bounds": (-5, 5)}
    ],
    objective_function="x**2 + y**2",
    max_evaluations=1000
)

# Access results
print(f"Solution: {result.solution}")
print(f"Value: {result.objective_value}")`

  const errorHandling = `from sematryx import optimize
from sematryx.exceptions import (
    SematryxError, 
    AuthenticationError, 
    RateLimitError,
    OptimizationError
)

try:
    result = optimize(
        objective_function=sphere,
        bounds=[[-5, 5], [-5, 5]],
        max_evaluations=1000,
        api_key="sk-..."
    )
except AuthenticationError:
    print('Invalid API key. Get your key at https://sematryx.com/api-keys')
except RateLimitError:
    print('Rate limit exceeded. Please wait and retry.')
except OptimizationError as e:
    print(f'Optimization failed: {e.message}')
except SematryxError as e:
    print(f'Error: {e.message}')`

  const asyncCode = `import asyncio
from sematryx import AsyncSematryx

async def main():
    client = AsyncSematryx(api_key='sk-...')
    
    # Run multiple optimizations concurrently
    results = await asyncio.gather(
        client.optimize(
            objective="minimize",
            variables=[{"name": "x", "bounds": (-5, 5)}],
            objective_function="x**2",
            max_evaluations=1000
        ),
        client.optimize(
            objective="minimize",
            variables=[{"name": "y", "bounds": (-5, 5)}],
            objective_function="y**2",
            max_evaluations=1000
        )
    )
    
    return results

asyncio.run(main())`

  const advancedFeatures = `from sematryx import Sematryx

client = Sematryx(api_key="sk-...")

# High-dimensional optimization
result = client.optimize(
    objective="minimize",
    variables=[{"name": f"x{i}", "bounds": (-10, 10)} for i in range(100)],
    objective_function="sum(xi**2 for xi in [x0, x1, x2, ...])",
    max_evaluations=5000
)

# Detailed explanations
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function="x**2 + y**2",
    explanation_level=4  # Maximum detail
)

# Custom learning configuration
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}],
    objective_function="x**2",
    learning={
        "read_from_public": True,
        "write_to_private": True
    }
)`

  const identityManagement = `from sematryx import Sematryx

client = Sematryx(api_key="sk-...")

# API key automatically identifies your account
# Get your API key and manage settings at https://sematryx.com/api-keys

# Check your account status
# Visit https://sematryx.com/dashboard for:
# - Usage quotas and limits
# - Privacy settings
# - Subscription management
# - Data sharing preferences`

  const batchOperations = `from sematryx import SematryxClient

client = SematryxClient(api_url="https://api.sematryx.com", api_key="your-api-key")

# Submit batch optimization job
batch_job = client.submit_batch_optimization(
    batch_name="portfolio_analysis",
    optimizations=[
        {
            "job_name": "portfolio_1",
            "objective_function": "sphere",
            "bounds": [[-5, 5], [-5, 5]],
            "max_evaluations": 1000
        },
        {
            "job_name": "portfolio_2",
            "objective_function": "rosenbrock",
            "bounds": [[-5, 5], [-5, 5]],
            "max_evaluations": 1000
        }
    ],
    parallel_workers=2
)

# Check batch status
status = client.get_batch_status(batch_job['batch_id'])
print(f"Progress: {status['progress_percentage']}%")

# Get batch results
results = client.get_batch_results(batch_job['batch_id'])
for job_result in results['job_results']:
    print(f"{job_result['job_name']}: {job_result['optimal_value']}")`

  const learningSystem = `from sematryx import SematryxClient

client = SematryxClient(api_url="https://api.sematryx.com", api_key="your-api-key")

# Train learning model
training_data = [
    {"problem_type": "sphere", "strategy": "differential_evolution", "success": True},
    {"problem_type": "rosenbrock", "strategy": "shgo", "success": True}
]

training_result = client.train_learning_model(
    training_data=training_data,
    model_type="cross_problem",
    max_epochs=100
)

# List trained models
models = client.list_learning_models()
for model in models:
    print(f"Model: {model['model_name']}, Type: {model['model_type']}")

# Get learning insights
insights = client.get_learning_insights()
print(f"Total models: {insights['total_models']}")
print(f"Learning enabled: {insights['learning_enabled']}")`

  const advancedOptimization = `from sematryx import SematryxClient

client = SematryxClient(api_url="https://api.sematryx.com", api_key="your-api-key")

# Multi-objective optimization
multi_obj_result = client.multi_objective_optimize(
    objectives=["sphere", "rosenbrock"],
    bounds=[[-5, 5], [-5, 5]],
    method="nsga2",
    max_evaluations=2000
)

# Get Pareto frontier
pareto_frontier = multi_obj_result['pareto_frontier']
for point in pareto_frontier:
    print(f"Solution: {point['solution']}, Objectives: {point['objectives']}")

# Sensitivity analysis
sensitivity_result = client.sensitivity_analysis(
    objective_function="sphere",
    bounds=[[-5, 5], [-5, 5]],
    reference_point=[0.0, 0.0],
    analysis_type="global"
)

print(f"Sensitivity scores: {sensitivity_result['sensitivity_scores']}")`

  const contextIntelligence = `from sematryx import SematryxClient

client = SematryxClient(api_url="https://api.sematryx.com", api_key="your-api-key")

# Analyze problem context
context = {
    "problem_id": "prob_123",
    "problem_type": "portfolio_optimization",
    "domain": "financial",
    "description": "Optimize portfolio allocation for risk-return tradeoff",
    "parameters": {"risk_tolerance": 0.15}
}

analysis = client.analyze_context(
    target_context=context,
    similarity_threshold=0.7,
    include_recommendations=True
)

# Get similar problems
for similar in analysis['similar_problems']:
    print(f"Similar problem: {similar['problem_id']}, Score: {similar['similarity_score']}")

# Get optimization recommendations
for recommendation in analysis['optimization_recommendations']:
    print(f"Recommendation: {recommendation}")`

  const dataLake = `from sematryx import SematryxClient

client = SematryxClient(api_url="https://api.sematryx.com", api_key="your-api-key")

# Create data connection
connection = client.create_data_connection(
    connection_type="s3",
    endpoint_url="https://s3.amazonaws.com/bucket",
    credentials={"access_key": "...", "secret_key": "..."}
)

# Upload dataset
dataset = client.upload_dataset(
    dataset_name="optimization_results",
    data_type="optimization_results",
    data=[...],  # Your data
    description="Historical optimization results"
)

# Store optimization data
client.store_optimization_data(
    experiment_id="exp_123",
    problem_definition={"bounds": [[-5, 5], [-5, 5]]},
    optimization_results=[...],
    performance_metrics={"duration": 2.5, "evaluations": 1000}
)

# Query data lake
query_result = client.query_data_lake(
    query_type="filter",
    dataset_ids=[dataset['dataset_id']],
    filters={"experiment_id": "exp_123"}
)`

  const analytics = `from sematryx import SematryxClient

client = SematryxClient(api_url="https://api.sematryx.com", api_key="your-api-key")

# Submit performance metrics
client.submit_metrics(
    metrics=[
        {
            "metric_name": "optimization_duration",
            "metric_value": 2.5,
            "metric_type": "time"
        },
        {
            "metric_name": "solution_quality",
            "metric_value": 0.95,
            "metric_type": "quality"
        }
    ],
    source_system="production"
)

# Generate performance report
report = client.generate_performance_report(
    report_type="comprehensive",
    metric_categories=["time", "quality", "efficiency"],
    time_range={"start": "2024-01-01", "end": "2024-01-31"}
)

# Get performance insights
insights = client.get_performance_insights()
for insight in insights:
    print(f"{insight['insight_type']}: {insight['description']}")

# Get metrics summary
summary = client.get_metrics_summary()
print(f"Average duration: {summary['average_duration']}")
print(f"Success rate: {summary['success_rate']}")`

  const configuration = `from sematryx import SematryxClient

client = SematryxClient(api_url="https://api.sematryx.com", api_key="your-api-key")

# Get API configuration
config = client.get_api_config()
print(f"API Version: {config['version']}")
print(f"Environment: {config['environment']}")

# Get available features
features = client.get_features()
print(f"Optimization available: {features['optimization']['available']}")
print(f"Learning system: {features['ai_capabilities']['learning_system']}")

# Get operational limits
limits = client.get_limits()
print(f"Max evaluations: {limits['optimization']['max_evaluations']}")
print(f"Max variables: {limits['optimization']['max_variables']}")`

  const healthChecks = `from sematryx import SematryxClient

client = SematryxClient(api_url="https://api.sematryx.com", api_key="your-api-key")

# Basic health check
health = client.get_system_status()
print(f"API Server: {health['api_server']['success']}")
print(f"Local System: {health['local_system']['success']}")

# Get system health
health_status = client.get_system_health()
print(f"Status: {health_status['status']}")
print(f"Uptime: {health_status['uptime']} seconds")
print(f"Memory usage: {health_status['memory_usage']}%")`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Python SDK
        </h1>
        <p className="text-xl text-gray-400">
          Official Python SDK for Sematryx. Full-featured client library with support for optimization, 
          intelligence configuration, and domain-specific libraries.
        </p>
      </div>

      <div className="space-y-12">
        <CollapsibleSection title="Installation" defaultOpen={true}>
          <CodeBlock
            code={installCode}
            language="bash"
            title="Install the Python SDK"
          />
          <p className="text-gray-400 mt-4">
            The SDK requires Python 3.8 or higher. For domain-specific optimizations, install with extras:
          </p>
          <CodeBlock
            code="pip install sematryx[financial,healthcare,supply_chain]"
            language="bash"
            title="Install with domain libraries"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Quick Start" defaultOpen={true}>
          <p className="text-gray-400 mb-4">
            The simplest way to use Sematryx is with the main <code className="bg-gray-800 text-gray-300 px-2 py-1 rounded">sematryx()</code> function:
          </p>
          <CodeBlock
            code={basicUsage}
            language="python"
            title="Basic optimization example"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Intelligence Configuration">
          <p className="text-gray-400 mb-4">
            Configure Sematryx's 3 Core Pillars: Agentic, Interpretable, and Adaptive intelligence to match your needs:
          </p>
          <CodeBlock
            code={intelligenceConfig}
            language="python"
            title="Intelligence configuration examples"
          />
          <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">The 3 Core Pillars</h3>
            <ul className="space-y-2 text-gray-400">
              <li><strong>🤖 Agentic Intelligence:</strong> Multi-agent coordination for strategy selection</li>
              <li><strong>📖 Interpretable Intelligence:</strong> Explainable results (levels 0-5)</li>
              <li><strong>🧠 Adaptive Intelligence:</strong> Self-improvement through learning</li>
              <li><strong>🏗️ Domain Extension:</strong> Business domain libraries that leverage the engine (separate feature, enabled by default)</li>
            </ul>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Domain-Specific Optimization">
          <p className="text-gray-400 mb-4">
            Use specialized domain libraries for industry-specific problems:
          </p>
          <CodeBlock
            code={domainOptimization}
            language="python"
            title="Domain-specific optimization examples"
          />
          <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Available Domains</h3>
            <ul className="space-y-2 text-gray-400">
              <li><strong>financial:</strong> Portfolio optimization, trading strategies, risk management</li>
              <li><strong>healthcare:</strong> Drug discovery, clinical trials, treatment optimization</li>
              <li><strong>supply_chain:</strong> Vehicle routing, inventory optimization, cold chain</li>
              <li><strong>ai_ml:</strong> Neural architecture search, hyperparameter tuning</li>
              <li><strong>marketing:</strong> Campaign optimization, pricing strategies</li>
            </ul>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="API Client">
          <p className="text-gray-400 mb-4">
            For server-side optimization via the REST API:
          </p>
          <CodeBlock
            code={apiClient}
            language="python"
            title="Using the API client"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Advanced Features">
          <p className="text-gray-400 mb-4">
            Enable advanced capabilities for complex optimization problems:
          </p>
          <CodeBlock
            code={advancedFeatures}
            language="python"
            title="Advanced features"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Error Handling">
          <p className="text-gray-400 mb-4">
            The SDK provides specific exception types for different error scenarios:
          </p>
          <CodeBlock
            code={errorHandling}
            language="python"
            title="Error handling"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Async Support">
          <p className="text-gray-400 mb-4">
            Use AsyncSematryx for concurrent operations:
          </p>
          <CodeBlock
            code={asyncCode}
            language="python"
            title="Async usage"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Identity Management">
          <p className="text-gray-400 mb-4">
            Manage client identity, privacy settings, and usage quotas:
          </p>
          <CodeBlock
            code={identityManagement}
            language="python"
            title="Identity management examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Batch Operations">
          <p className="text-gray-400 mb-4">
            Submit and manage batch optimization jobs:
          </p>
          <CodeBlock
            code={batchOperations}
            language="python"
            title="Batch operations examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Learning System">
          <p className="text-gray-400 mb-4">
            Train models and get learning insights:
          </p>
          <CodeBlock
            code={learningSystem}
            language="python"
            title="Learning system examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Advanced Optimization">
          <p className="text-gray-400 mb-4">
            Multi-objective optimization and sensitivity analysis:
          </p>
          <CodeBlock
            code={advancedOptimization}
            language="python"
            title="Advanced optimization examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Context Intelligence">
          <p className="text-gray-400 mb-4">
            Analyze problem context and get recommendations:
          </p>
          <CodeBlock
            code={contextIntelligence}
            language="python"
            title="Context intelligence examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Data Lake">
          <p className="text-gray-400 mb-4">
            Store and query optimization data:
          </p>
          <CodeBlock
            code={dataLake}
            language="python"
            title="Data lake examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Analytics">
          <p className="text-gray-400 mb-4">
            Submit metrics and generate performance reports:
          </p>
          <CodeBlock
            code={analytics}
            language="python"
            title="Analytics examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Configuration & Health">
          <p className="text-gray-400 mb-4">
            Get API configuration and check system health:
          </p>
          <CodeBlock
            code={configuration}
            language="python"
            title="Configuration examples"
          />
          <CodeBlock
            code={healthChecks}
            language="python"
            title="Health check examples"
          />
        </CollapsibleSection>

        <CollapsibleSection title="API Reference">
          <div className="space-y-6">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Main Function</h3>
              <ul className="space-y-2 text-gray-300">
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">sematryx(objective_function, bounds, **kwargs)</code> <span className="text-gray-400">- Main optimization function</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">preset</code> <span className="text-gray-400">- Use preset config ("development", "production", "research", "enterprise", "minimal")</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">use_agentic_intelligence</code> <span className="text-gray-400">- Enable multi-agent coordination</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">use_interpretable_intelligence</code> <span className="text-gray-400">- Enable explainability</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">use_adaptive_intelligence</code> <span className="text-gray-400">- Enable self-improvement</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">explanation_level</code> <span className="text-gray-400">- Explanation detail (0-5)</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">use_gpu_acceleration</code> <span className="text-gray-400">- Enable GPU/CUDA</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">use_visual_intelligence</code> <span className="text-gray-400">- Enable visual analysis</span></li>
              </ul>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Configuration Classes</h3>
              <ul className="space-y-2 text-gray-300">
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">SematryxIntelligenceConfig</code> <span className="text-gray-400">- Complete intelligence configuration</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">SematryxIntelligenceConfig.development()</code> <span className="text-gray-400">- Development preset</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">SematryxIntelligenceConfig.production()</code> <span className="text-gray-400">- Production preset</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">SematryxIntelligenceConfig.research()</code> <span className="text-gray-400">- Research preset</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">SematryxIntelligenceConfig.enterprise()</code> <span className="text-gray-400">- Enterprise preset</span></li>
              </ul>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Domain Functions</h3>
              <ul className="space-y-2 text-gray-300">
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">financial_optimize(problem_type, config, **kwargs)</code> <span className="text-gray-400">- Financial optimization</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">healthcare_optimize(problem_type, config, **kwargs)</code> <span className="text-gray-400">- Healthcare optimization</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">supply_chain_optimize(problem_type, config, **kwargs)</code> <span className="text-gray-400">- Supply chain optimization</span></li>
              </ul>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">API Client</h3>
              <ul className="space-y-2 text-gray-300">
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">SematryxClient(api_url, api_key)</code> <span className="text-gray-400">- Initialize API client</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">client.authenticate()</code> <span className="text-gray-400">- Authenticate with API</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">client.optimize(objective, bounds, **kwargs)</code> <span className="text-gray-400">- Run optimization via API</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">client.register_with_identity()</code> <span className="text-gray-400">- Create client identity</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">client.get_usage_quotas()</code> <span className="text-gray-400">- Get usage quotas</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">client.submit_batch_optimization()</code> <span className="text-gray-400">- Submit batch job</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">client.train_learning_model()</code> <span className="text-gray-400">- Train learning model</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">client.multi_objective_optimize()</code> <span className="text-gray-400">- Multi-objective optimization</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">client.analyze_context()</code> <span className="text-gray-400">- Analyze problem context</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">client.upload_dataset()</code> <span className="text-gray-400">- Upload to data lake</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">client.submit_metrics()</code> <span className="text-gray-400">- Submit performance metrics</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">client.get_system_status()</code> <span className="text-gray-400">- Get system health</span></li>
                <li><code className="bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-700">AsyncSematryx</code> <span className="text-gray-400">- Async version of API client</span></li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  )
}
