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

  const identityManagement = `from aeao import AEAOClient

client = AEAOClient(api_url="https://api.aeao.com", api_key="your-api-key")

# Create client identity
identity = client.register_with_identity(
    email="user@example.com",
    organization_id="org_123",
    privacy_level=PrivacyLevel.AGGREGATED,
    subscription_tier=SubscriptionTier.PROFESSIONAL
)

# Get privacy status
privacy_status = client.get_privacy_status()
print(f"Privacy level: {privacy_status['privacy_level']}")

# Get usage quotas
quotas = client.get_usage_quotas()
print(f"Optimizations used: {quotas['current_usage']['optimizations_per_day']}")
print(f"Quota: {quotas['api_quotas']['optimizations_per_day']}")

# Configure data sharing
client.configure_data_sharing({
    'optimization_results': True,
    'performance_metrics': True,
    'problem_signatures': False
})`

  const batchOperations = `from aeao import AEAOClient

client = AEAOClient(api_url="https://api.aeao.com", api_key="your-api-key")

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

  const learningSystem = `from aeao import AEAOClient

client = AEAOClient(api_url="https://api.aeao.com", api_key="your-api-key")

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

  const advancedOptimization = `from aeao import AEAOClient

client = AEAOClient(api_url="https://api.aeao.com", api_key="your-api-key")

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

  const contextIntelligence = `from aeao import AEAOClient

client = AEAOClient(api_url="https://api.aeao.com", api_key="your-api-key")

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

  const dataLake = `from aeao import AEAOClient

client = AEAOClient(api_url="https://api.aeao.com", api_key="your-api-key")

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

  const analytics = `from aeao import AEAOClient

client = AEAOClient(api_url="https://api.aeao.com", api_key="your-api-key")

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

  const configuration = `from aeao import AEAOClient

client = AEAOClient(api_url="https://api.aeao.com", api_key="your-api-key")

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

  const healthChecks = `from aeao import AEAOClient

client = AEAOClient(api_url="https://api.aeao.com", api_key="your-api-key")

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
            Identity Management
          </h2>
          <p className="text-gray-700 mb-4">
            Manage client identity, privacy settings, and usage quotas:
          </p>
          <CodeBlock
            code={identityManagement}
            language="python"
            title="Identity management examples"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Batch Operations
          </h2>
          <p className="text-gray-700 mb-4">
            Submit and manage batch optimization jobs:
          </p>
          <CodeBlock
            code={batchOperations}
            language="python"
            title="Batch operations examples"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Learning System
          </h2>
          <p className="text-gray-700 mb-4">
            Train models and get learning insights:
          </p>
          <CodeBlock
            code={learningSystem}
            language="python"
            title="Learning system examples"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Advanced Optimization
          </h2>
          <p className="text-gray-700 mb-4">
            Multi-objective optimization and sensitivity analysis:
          </p>
          <CodeBlock
            code={advancedOptimization}
            language="python"
            title="Advanced optimization examples"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Context Intelligence
          </h2>
          <p className="text-gray-700 mb-4">
            Analyze problem context and get recommendations:
          </p>
          <CodeBlock
            code={contextIntelligence}
            language="python"
            title="Context intelligence examples"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Data Lake
          </h2>
          <p className="text-gray-700 mb-4">
            Store and query optimization data:
          </p>
          <CodeBlock
            code={dataLake}
            language="python"
            title="Data lake examples"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Analytics
          </h2>
          <p className="text-gray-700 mb-4">
            Submit metrics and generate performance reports:
          </p>
          <CodeBlock
            code={analytics}
            language="python"
            title="Analytics examples"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Configuration & Health
          </h2>
          <p className="text-gray-700 mb-4">
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
                <li><code className="bg-gray-200 px-2 py-1 rounded">client.register_with_identity()</code> - Create client identity</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">client.get_usage_quotas()</code> - Get usage quotas</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">client.submit_batch_optimization()</code> - Submit batch job</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">client.train_learning_model()</code> - Train learning model</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">client.multi_objective_optimize()</code> - Multi-objective optimization</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">client.analyze_context()</code> - Analyze problem context</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">client.upload_dataset()</code> - Upload to data lake</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">client.submit_metrics()</code> - Submit performance metrics</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">client.get_system_status()</code> - Get system health</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">AsyncAEAO</code> - Async version of API client</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
