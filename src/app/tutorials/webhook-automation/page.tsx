import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advanced Optimization Strategies - Sematryx Tutorials',
  description: 'Multi-strategy optimization, Private Learning Store, performance tuning, and agent integration.',
}

export default function AdvancedStrategiesTutorial() {
  const multiStrategy = `from sematryx import optimize

# Multi-strategy optimization for complex landscapes
result = optimize(
    objective_function=multimodal_function,
    bounds=bounds,
    
    # Enable multi-strategy approach
    multi_strategy=True,
    strategy_config={
        'initial_strategies': ['cma_es', 'differential_evolution', 'bayesian'],
        'allocation': 'adaptive',      # Dynamically shift budget to best performer
        'min_budget_fraction': 0.1,    # Each strategy gets at least 10%
        'switch_threshold': 0.8        # Switch focus when one is 80% better
    },
    
    # Multi-start for global search
    multi_start=True,
    n_starts=5,                        # 5 independent runs
    start_selection='latin_hypercube', # Space-filling initial points
    
    # Combine results
    result_aggregation='best'          # Return best across all starts
)

# Results show which strategies contributed
print(f"Winning strategy: {result['strategy_used']}")
print(f"Strategy contributions: {result['strategy_breakdown']}")`

  const landscapeAnalysis = `from sematryx import analyze_landscape

# Analyze problem landscape before optimization
# Helps choose the right strategy
analysis = analyze_landscape(
    objective_function=my_function,
    bounds=bounds,
    n_samples=500,          # Sample points for analysis
    analysis_depth='full'   # 'quick', 'standard', 'full'
)

# Landscape characteristics
print(f"Dimensionality: {analysis['dimensions']}")
print(f"Modality: {analysis['modality']}")          # unimodal, multimodal
print(f"Smoothness: {analysis['smoothness']}")       # smooth, rugged, discontinuous
print(f"Separability: {analysis['separability']}")   # separable, non-separable
print(f"Conditioning: {analysis['condition_number']}")

# Strategy recommendations
print(f"Recommended strategies: {analysis['recommended_strategies']}")
print(f"Expected difficulty: {analysis['difficulty_score']}")

# Use recommendations
result = optimize(
    objective_function=my_function,
    bounds=bounds,
    strategy=analysis['recommended_strategies'][0],
    use_landscape_analysis=analysis  # Reuse analysis
)`

  const privateLearningAdvanced = `from sematryx import optimize, PrivateLearningStore

# Initialize Private Learning Store
store = PrivateLearningStore(
    api_key='your-api-key',
    store_id='my-org-store'
)

# Configure learning behavior
store.configure(
    read_from_public=True,       # Benefit from public patterns
    write_to_public=False,       # Keep your patterns private
    similarity_threshold=0.85,   # Match threshold for recall
    max_patterns_per_query=10    # Limit patterns retrieved
)

# Optimization with private learning
result = optimize(
    objective_function=proprietary_function,
    bounds=bounds,
    learning_store=store,
    
    # Learning configuration
    learning_config={
        'problem_signature': 'quarterly_planning',
        'store_result': True,
        'store_intermediate': False,    # Don't store every iteration
        'anonymize': True               # Strip sensitive details before storing
    }
)

# Query your learning store directly
similar_problems = store.query(
    signature='quarterly_planning',
    time_range='last_90_days',
    min_similarity=0.8
)

for problem in similar_problems:
    print(f"Similar problem: {problem['timestamp']}")
    print(f"Strategy used: {problem['strategy']}")
    print(f"Convergence: {problem['convergence_iterations']}")`

  const performanceTuning = `from sematryx import optimize

# Performance-optimized configuration
result = optimize(
    objective_function=fast_function,
    bounds=bounds,
    
    # Parallel evaluation (for expensive functions)
    parallel=True,
    n_workers=8,               # Parallel function evaluations
    
    # Caching (for deterministic functions)
    cache_evaluations=True,
    cache_size=10000,
    
    # Early termination
    early_stopping={
        'patience': 50,           # Stop if no improvement for 50 evals
        'min_delta': 1e-8,        # Minimum improvement threshold
        'target_value': 0.001     # Stop if we reach this value
    },
    
    # Resource limits
    max_evaluations=5000,
    max_time_seconds=60,
    
    # Memory optimization
    store_history=False,        # Don't keep full iteration history
    explanation_level=1         # Minimal explanations for speed
)

# Performance metrics
print(f"Evaluations: {result['evaluations']}")
print(f"Wall time: {result['duration_seconds']:.2f}s")
print(f"Evaluations/second: {result['evals_per_second']:.1f}")
print(f"Cache hits: {result.get('cache_hits', 0)}")`

  const batchOptimization = `from sematryx import batch_optimize
import asyncio

# Batch optimization for multiple related problems
problems = [
    {'id': 'region_north', 'objective': obj_north, 'bounds': bounds_north},
    {'id': 'region_south', 'objective': obj_south, 'bounds': bounds_south},
    {'id': 'region_east', 'objective': obj_east, 'bounds': bounds_east},
    {'id': 'region_west', 'objective': obj_west, 'bounds': bounds_west},
]

# Run all optimizations concurrently
results = await batch_optimize(
    problems=problems,
    
    # Shared configuration
    shared_config={
        'max_evaluations': 1000,
        'explanation_level': 2,
        'use_learning': True
    },
    
    # Batch settings
    max_concurrent=4,           # Run 4 at once
    priority='balanced',        # 'speed', 'balanced', 'cost'
    
    # Cross-problem learning
    share_learning=True,        # Problems can learn from each other
    learning_weight=0.3         # Weight for cross-problem knowledge
)

# Aggregate results
for result in results:
    print(f"{result['problem_id']}: {result['best_fitness']}")`

  const agentIntegration = `# MCP Integration for AI Agents
# Your AI agents can call Sematryx directly

# Example: Claude calling Sematryx via MCP
"""
User: Optimize my portfolio to minimize risk while targeting 8% return

Claude (via MCP): 
<tool_call>
sematryx.optimize_portfolio({
  returns: [0.12, 0.08, 0.15, 0.10],
  covariance: [...],
  constraints: {
    min_return: 0.08,
    max_position: 0.30
  },
  explanation_level: 3
})
</tool_call>

Result includes natural language explanation:
"Recommended allocation: 35% Asset A, 28% Asset B, 22% Asset C, 15% Asset D.
This achieves 8.2% expected return with CVaR of 12.3%. The allocation 
favors Asset A due to its superior risk-adjusted return (Sharpe 1.2)
while satisfying all position limits."
"""

# REST API for any AI system
import requests

response = requests.post(
    'https://api.sematryx.com/v1/optimize',
    headers={'Authorization': f'Bearer {api_key}'},
    json={
        'objective_function_code': objective_code,  # Or use preset
        'bounds': bounds,
        'explanation_level': 3,
        'explanation_format': 'natural_language'    # For agent consumption
    }
)

result = response.json()
# result['explanation']['natural_language'] contains
# human-readable explanation agents can relay to users`

  const callbacksAndMonitoring = `from sematryx import optimize

# Real-time monitoring with callbacks
def progress_callback(iteration, current_best, improvement):
    """Called after each iteration"""
    print(f"Iteration {iteration}: best={current_best:.6f}, improved={improvement}")
    
    # Return False to stop early
    if current_best < target_value:
        return False
    return True

def strategy_callback(strategy_name, reason):
    """Called when strategy changes"""
    print(f"Strategy switched to {strategy_name}: {reason}")

result = optimize(
    objective_function=my_function,
    bounds=bounds,
    
    # Callbacks
    callbacks={
        'on_iteration': progress_callback,
        'on_strategy_change': strategy_callback,
        'on_constraint_violation': violation_callback,
        'on_improvement': improvement_callback
    },
    
    # Streaming results (for long-running optimizations)
    stream_results=True,
    stream_interval=10          # Emit updates every 10 iterations
)`

  const debuggingTips = `from sematryx import optimize, set_log_level

# Enable detailed logging for debugging
set_log_level('DEBUG')

# Debug configuration
result = optimize(
    objective_function=problematic_function,
    bounds=bounds,
    
    # Debug mode
    debug=True,
    
    # Store everything for analysis
    store_history=True,
    store_all_evaluations=True,
    
    # Maximum explanations
    explanation_level=5,
    
    # Validate inputs
    validate_bounds=True,
    validate_function=True,      # Test function before optimizing
    test_points=10               # Evaluate 10 random points first
)

# Access debug information
if not result['success']:
    print(f"Failure reason: {result['failure_reason']}")
    print(f"Last good solution: {result['last_valid_solution']}")
    
    # Iteration history
    for i, state in enumerate(result['history']):
        print(f"Iter {i}: fitness={state['fitness']}, valid={state['feasible']}")

# Export for analysis
result.export_debug_report('debug_report.json')`

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
            <span className="bg-rose-500/15 text-rose-400 text-xs font-medium px-3 py-1 rounded-full border border-rose-500/30">
              Advanced
            </span>
            <span className="text-text-tertiary">• 40 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Advanced Optimization Strategies
          </h1>
          <p className="text-xl text-text-secondary">
            Multi-strategy optimization, Private Learning Store, performance tuning, and AI agent integration.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Multi-Strategy Optimization
            </h2>
            <p className="text-text-secondary mb-4">
              For complex, multimodal landscapes, run multiple strategies in parallel and 
              dynamically allocate budget to the best performer:
            </p>
            <CodeBlock
              code={multiStrategy}
              language="python"
              title="Multi-strategy optimization"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Landscape Analysis
            </h2>
            <p className="text-text-secondary mb-4">
              Analyze your problem's landscape before optimization to choose the right strategy:
            </p>
            <CodeBlock
              code={landscapeAnalysis}
              language="python"
              title="Problem landscape analysis"
            />
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Landscape Types</h3>
              <div className="space-y-2 text-text-secondary text-sm">
                <div><strong className="text-text-primary">Unimodal + Smooth:</strong> CMA-ES, BFGS, gradient methods</div>
                <div><strong className="text-text-primary">Multimodal + Smooth:</strong> Differential Evolution, SHGO</div>
                <div><strong className="text-text-primary">Rugged/Discontinuous:</strong> Genetic algorithms, simulated annealing</div>
                <div><strong className="text-text-primary">High-dimensional:</strong> Bayesian optimization, CMA-ES with restarts</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Private Learning Store
            </h2>
            <p className="text-text-secondary mb-4">
              Advanced configuration for your organization's private learning store:
            </p>
            <CodeBlock
              code={privateLearningAdvanced}
              language="python"
              title="Private Learning Store"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Performance Tuning
            </h2>
            <p className="text-text-secondary mb-4">
              Optimize for speed with parallel evaluation, caching, and early termination:
            </p>
            <CodeBlock
              code={performanceTuning}
              language="python"
              title="Performance configuration"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Batch Optimization
            </h2>
            <p className="text-text-secondary mb-4">
              Run multiple related optimizations concurrently with cross-problem learning:
            </p>
            <CodeBlock
              code={batchOptimization}
              language="python"
              title="Batch optimization"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              AI Agent Integration
            </h2>
            <p className="text-text-secondary mb-4">
              Sematryx is designed to work as an optimization backend for AI agents via MCP or REST API:
            </p>
            <CodeBlock
              code={agentIntegration}
              language="python"
              title="Agent integration"
            />
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Agent-Friendly Features</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span><strong className="text-text-primary">Natural language explanations:</strong> Agents can relay results to users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span><strong className="text-text-primary">Structured results:</strong> Easy for agents to parse and reason about</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span><strong className="text-text-primary">MCP protocol:</strong> Native integration with Claude, Cursor, etc.</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Callbacks & Monitoring
            </h2>
            <p className="text-text-secondary mb-4">
              Monitor optimization progress in real-time with callbacks:
            </p>
            <CodeBlock
              code={callbacksAndMonitoring}
              language="python"
              title="Callbacks and monitoring"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Debugging Tips
            </h2>
            <p className="text-text-secondary mb-4">
              When optimizations don't converge as expected, use debug mode:
            </p>
            <CodeBlock
              code={debuggingTips}
              language="python"
              title="Debugging optimization"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              🎉 Tutorial Complete!
            </h2>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <p className="text-text-secondary mb-4">
                You've completed all Sematryx tutorials! You now know how to:
              </p>
              <ul className="space-y-2 text-text-secondary mb-6">
                <li>✓ Set up optimization problems with constraints</li>
                <li>✓ Configure the AEAO Tetrad</li>
                <li>✓ Interpret results and explanations</li>
                <li>✓ Use domain-specific libraries</li>
                <li>✓ Apply advanced strategies for complex problems</li>
              </ul>
              <div className="space-y-2">
                <Link 
                  href="/docs" 
                  className="block text-brand-primary hover:underline"
                >
                  → Full API reference
                </Link>
                <Link 
                  href="/api-keys" 
                  className="block text-brand-primary hover:underline"
                >
                  → Get your API key
                </Link>
                <Link 
                  href="/pricing" 
                  className="block text-brand-primary hover:underline"
                >
                  → View pricing
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
