'use client'

import CodeBlock from '@/components/CodeBlock'
import CollapsibleSection from '@/components/CollapsibleSection'

export default function PythonSDKPage() {
  const installCode = `pip install sematryx`

  const basicLocal = `from sematryx import optimize

# Local mode: pass a Python callable — no API key needed
def sphere(x):
    return sum(xi**2 for xi in x)

result = optimize(
    objective_function=sphere,
    bounds=[[-5, 5], [-5, 5]],
    max_evaluations=1000,
)

print(f"Solution: {result.solution}")
print(f"Value:    {result.objective_value}")`

  const cloudMode = `from sematryx import optimize

# Cloud mode: pass a math expression string — requires API key
result = optimize(
    objective_function="x[0]**2 + x[1]**2",
    bounds=[[-5, 5], [-5, 5]],
    max_evaluations=1000,
    api_key="smtrx_...",           # or set SEMATRYX_API_KEY env var
    strategy="auto",               # auto | differential_evolution | cma_es | …
)

print(f"Solution: {result.solution}")
print(f"Value:    {result.objective_value}")`

  const clientUsage = `from sematryx import Sematryx

client = Sematryx(api_key="smtrx_...")

# Optimize using expression string
result = client.optimize(
    objective_function="(x[0]-1)**2 + 100*(x[1]-x[0]**2)**2",  # Rosenbrock
    bounds=[[-2, 2], [-1, 3]],
    max_evaluations=2000,
    strategy="auto",
)

print(f"Solution:     {result.solution}")
print(f"Value:        {result.objective_value}")
print(f"Strategy:     {result.strategy_used}")
print(f"Evaluations:  {result.evaluations_used}")`

  const learningMode = `from sematryx import Sematryx

client = Sematryx(api_key="smtrx_...")

# Opt into private learning — your results improve your future solves
result = client.optimize(
    objective_function="sum(x**2)",
    bounds=[[-5, 5]] * 3,
    max_evaluations=1000,
    learning={
        "read_from_private": True,   # use your past results
        "write_to_private": True,    # contribute this result
    },
)`

  const restFallback = `import requests, time

API_KEY = "smtrx_..."
BASE = "https://api.sematryx.com"
headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}

# Start optimization
resp = requests.post(f"{BASE}/v1/optimize", headers=headers, json={
    "objective_function": "x[0]**2 + x[1]**2",
    "bounds": [[-5.0, 5.0], [-5.0, 5.0]],
    "max_evaluations": 1000,
    "strategy": "auto",
})
resp.raise_for_status()
op_id = resp.json()["operation_id"]

# Poll until done
while True:
    result = requests.get(f"{BASE}/v1/optimize/result/{op_id}", headers=headers).json()
    if result.get("status") in ("completed", "failed"):
        break
    time.sleep(1)

print(result["optimal_value"], result["optimal_solution"])`

  const errorHandling = `from sematryx import optimize
from sematryx.exceptions import (
    SematryxError,
    AuthenticationError,
    RateLimitError,
    OptimizationError,
)

try:
    result = optimize(
        objective_function="x[0]**2",
        bounds=[[-5, 5]],
        max_evaluations=1000,
        api_key="smtrx_...",
    )
except AuthenticationError:
    print("Invalid API key — get yours at sematryx.com/api-keys")
except RateLimitError:
    print("Rate limit exceeded. Please wait and retry.")
except OptimizationError as e:
    print(f"Optimization failed: {e}")
except SematryxError as e:
    print(f"Error: {e}")`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Python SDK
        </h1>
        <p className="text-xl text-gray-400">
          Thin Python wrapper for the Sematryx REST API, with optional local
          fallback using scipy for callable objectives.
        </p>
        <div className="mt-4 bg-blue-900/30 border border-blue-700 rounded-lg px-5 py-3 text-sm text-blue-200">
          <strong>PyPI release coming soon.</strong> The SDK is available now
          via <code className="bg-blue-950 px-1 rounded">pip install sematryx</code> once
          published. Until then, install directly:
          <code className="block mt-1 bg-blue-950 px-2 py-1 rounded">
            pip install git+https://github.com/smartofficialintelligence/sematryx-sdk.git
          </code>
        </div>
      </div>

      <div className="space-y-12">
        <CollapsibleSection title="Installation" defaultOpen={true}>
          <CodeBlock
            code={installCode}
            language="bash"
            title="Install the Python SDK (when published)"
          />
          <p className="text-gray-400 mt-4">
            Requires Python 3.8+. For local optimization without an API key,
            install the <code className="bg-gray-800 text-gray-300 px-1 rounded">local</code> extra:
          </p>
          <CodeBlock
            code="pip install sematryx[local]   # includes scipy + numpy"
            language="bash"
            title="Install with local solver support"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Local Mode (no API key)" defaultOpen={true}>
          <p className="text-gray-400 mb-4">
            Pass a Python callable to run the optimization locally using scipy.
            No API key or network connection required.
          </p>
          <CodeBlock
            code={basicLocal}
            language="python"
            title="Local optimization with a Python function"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Cloud Mode (expression string)" defaultOpen={true}>
          <p className="text-gray-400 mb-4">
            Pass a math expression string to run the optimization on the
            Sematryx cloud. Requires an API key.
          </p>
          <CodeBlock
            code={cloudMode}
            language="python"
            title="Cloud optimization with an expression"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Sematryx Client">
          <p className="text-gray-400 mb-4">
            The <code className="bg-gray-800 text-gray-300 px-1 rounded">Sematryx</code> client
            exposes the same methods as the top-level <code className="bg-gray-800 text-gray-300 px-1 rounded">optimize()</code> function,
            plus explicit API key management.
          </p>
          <CodeBlock
            code={clientUsage}
            language="python"
            title="Using the Sematryx client"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Private Learning">
          <p className="text-gray-400 mb-4">
            Opt into private learning so Sematryx accumulates knowledge from
            your past solves to improve future ones.
          </p>
          <CodeBlock
            code={learningMode}
            language="python"
            title="Private learning configuration"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Direct REST API (no SDK)">
          <p className="text-gray-400 mb-4">
            You can always call the REST API directly with any HTTP client.
          </p>
          <CodeBlock
            code={restFallback}
            language="python"
            title="Direct REST API usage"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Error Handling">
          <p className="text-gray-400 mb-4">
            The SDK raises specific exception types for different failure modes.
          </p>
          <CodeBlock
            code={errorHandling}
            language="python"
            title="Error handling"
          />
        </CollapsibleSection>
      </div>
    </div>
  )
}
