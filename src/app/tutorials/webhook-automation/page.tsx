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
# Use 'auto' strategy to let Sematryx select the best approach
result = optimize(
    objective_function=multimodal_function,
    bounds=bounds,
    strategy="auto",  # Automatically select best strategy
    max_evaluations=5000
)

# Results show which strategy was used
print(f"Strategy used: {result.strategy_used}")
print(f"Solution: {result.solution}")
print(f"Value: {result.objective_value}")`



  const privateLearningAdvanced = `from sematryx import optimize

# Optimization with private learning
result = optimize(
    objective_function=proprietary_function,
    bounds=bounds,
    
    # Learning configuration
    learning={
        'read_from_public': True,    # Benefit from public patterns
        'read_from_private': True,   # Use your private patterns
        'write_to_public': False,    # Keep your patterns private
        'write_to_private': True     # Save to private store
    }
)

# Check learning operations
if result.learning_operations:
    print(f"Learning operations: {result.learning_operations}")`

  const performanceTuning = `from sematryx import optimize

# Performance-optimized configuration
result = optimize(
    objective_function=fast_function,
    bounds=bounds,
    
    # Resource limits
    max_evaluations=5000,
    
    # Minimal explanations for speed
    explanation_level=1
)

# Performance metrics
print(f"Evaluations: {result.evaluations_used}")
print(f"Duration: {result.duration_seconds:.2f}s")
print(f"Strategy: {result.strategy_used}")`



  const agentIntegration = `# MCP Integration for AI Agents
# Your AI agents can call Sematryx directly via MCP or REST

# Example: Claude using sematryx_optimize via MCP
"""
User: Find the minimum of f(x,y) = x² + y² - x*y in [-5, 5]

Claude (via MCP):
<tool_call>
sematryx_optimize({
  "expression": "x**2 + y**2 - x*y",
  "variables": ["x", "y"],
  "bounds": [[-5, 5], [-5, 5]],
  "max_evaluations": 1000
})
</tool_call>

Result: {"optimal_value": 0.0, "optimal_solution": {"x": 0.0, "y": 0.0}, ...}
"""

# REST API for any AI system
import requests

response = requests.post(
    'https://api.sematryx.com/v1/optimize',
    headers={'Authorization': f'Bearer {api_key}'},
    json={
        'objective_function': 'sphere',
        'variables': ['x1', 'x2', 'x3'],
        'bounds': [[-5.0, 5.0], [-5.0, 5.0], [-5.0, 5.0]],
        'max_evaluations': 2000,
        'strategy': 'auto'
    }
)

result = response.json()
print(f"Optimal value: {result['optimal_value']}")
print(f"Solution: {result['optimal_solution']}")
if 'explanation' in result:
    print(f"Explanation: {result['explanation']}")`

  const callbacksAndMonitoring = `import requests, time

API_KEY = "smtrx_..."
BASE = "https://api.sematryx.com"
headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}

# Start a long-running optimization
resp = requests.post(f"{BASE}/v1/optimize", headers=headers, json={
    "objective_function": "rastrigin",
    "variables": ["x1", "x2", "x3", "x4", "x5"],
    "bounds": [[-5.12, 5.12]] * 5,
    "max_evaluations": 10000,
    "strategy": "auto"
})
resp.raise_for_status()
op_id = resp.json()["operation_id"]
print(f"Started: {op_id}")

# Poll for progress with early stopping
start_time = time.time()
prev_evals = 0

while True:
    result = requests.get(
        f"{BASE}/v1/optimize/result/{op_id}", headers=headers
    ).json()
    
    status = result.get("status")
    evals = result.get("evaluations_used", 0)
    
    if evals > prev_evals:
        best = result.get("optimal_value")
        elapsed = time.time() - start_time
        print(f"  [{elapsed:.1f}s] {evals} evals, best={best}")
        prev_evals = evals
    
    if status in ("completed", "failed"):
        break
    
    time.sleep(2)

if result["status"] == "completed":
    print(f"Done: {result['optimal_value']} at {result['optimal_solution']}")
else:
    print(f"Failed: {result.get('error')}")`

  const debuggingTips = `from sematryx import optimize

# Debug configuration with maximum explanations
result = optimize(
    objective_function=problematic_function,
    bounds=bounds,
    
    # Maximum explanations for debugging
    explanation_level=4,  # Full audit trail
    
    # Additional debugging info
    max_evaluations=1000
)

# Access debug information
if not result.success:
    print(f"Optimization failed")
    print(f"Explanation: {result.explanation}")
    if result.raw_response:
        print(f"Raw response: {result.raw_response}")

# Check audit trail
if result.audit_id:
    print(f"Audit ID: {result.audit_id}")`

  return (
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
                <li>✓ Configure Sematryx Intelligence</li>
                <li>✓ Interpret results and explanations</li>
                <li>✓ Use the REST API for real integrations</li>
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
  )
}
