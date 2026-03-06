'use client'

import CodeBlock from '@/components/CodeBlock'
import CollapsibleSection from '@/components/CollapsibleSection'

export default function JavaScriptSDKPage() {
  const installCode = `npm install sematryx`

  const restBasic = `// No SDK yet — use fetch() directly
const API_KEY = "smtrx_...";
const BASE = "https://api.sematryx.com";

async function optimize(expression, bounds, maxEvaluations = 1000) {
  // Start optimization
  const startResp = await fetch(\`\${BASE}/v1/optimize\`, {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${API_KEY}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      objective_function: expression,
      bounds,
      max_evaluations: maxEvaluations,
      strategy: "auto",
    }),
  });

  if (!startResp.ok) throw new Error(\`HTTP \${startResp.status}\`);
  const { operation_id } = await startResp.json();

  // Poll until done
  while (true) {
    const resultResp = await fetch(
      \`\${BASE}/v1/optimize/result/\${operation_id}\`,
      { headers: { Authorization: \`Bearer \${API_KEY}\` } }
    );
    const result = await resultResp.json();
    if (result.status === "completed" || result.status === "failed") {
      return result;
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
}

// Usage
const result = await optimize("x[0]**2 + x[1]**2", [[-5, 5], [-5, 5]]);
console.log("Optimal value:", result.optimal_value);
console.log("Solution:", result.optimal_solution);`

  const explainExample = `const API_KEY = "smtrx_...";
const BASE = "https://api.sematryx.com";

// After running sematryx_optimize, call explain for sensitivity analysis
const explainResp = await fetch(\`\${BASE}/v1/explain\`, {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    expression: "x[0]**2 + x[1]**2",
    bounds: [[-5, 5], [-5, 5]],
    solution: [0.00012, -0.00008],
    fitness: 2.08e-8,
    solver_used: "differential_evolution",
  }),
});

const explanation = await explainResp.json();
console.log("Confidence:", explanation.confidence);
console.log("Narrative:", explanation.narrative);`

  const compareExample = `const API_KEY = "smtrx_...";
const BASE = "https://api.sematryx.com";

// Compare a candidate solution against the true optimum
const compareResp = await fetch(\`\${BASE}/v1/compare\`, {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    expression: "(x[0]-1)**2 + 100*(x[1]-x[0]**2)**2",
    bounds: [[-2, 2], [-1, 3]],
    proposed_solution: [0.8, 0.65],
  }),
});

const comparison = await compareResp.json();
console.log("Quality score:", comparison.quality_score, "/ 100");
console.log("Gap:", comparison.gap_percent.toFixed(2) + "%");
console.log("Verdict:", comparison.verdict);`

  const errorExample = `const API_KEY = "smtrx_...";

async function safeOptimize(expression, bounds) {
  const resp = await fetch("https://api.sematryx.com/v1/optimize", {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${API_KEY}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ objective_function: expression, bounds }),
  });

  if (resp.status === 401) throw new Error("Invalid API key");
  if (resp.status === 429) throw new Error("Rate limit exceeded");
  if (!resp.ok) throw new Error(\`HTTP \${resp.status}\`);

  const body = await resp.json();
  if (!body.success) throw new Error(body.error);
  return body;
}`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          JavaScript / TypeScript SDK
        </h1>
        <p className="text-xl text-gray-400">
          Use the Sematryx REST API from any JavaScript or TypeScript environment.
        </p>
        <div className="mt-4 bg-yellow-900/30 border border-yellow-700 rounded-lg px-5 py-3 text-sm text-yellow-200">
          <strong>npm package coming soon.</strong> Until then, call the REST
          API directly using <code className="bg-yellow-950 px-1 rounded">fetch</code> or
          any HTTP client — the examples below show exactly how.
        </div>
      </div>

      <div className="space-y-12">
        <CollapsibleSection title="Optimize (POST /v1/optimize)" defaultOpen={true}>
          <p className="text-gray-400 mb-4">
            Submit an optimization job and poll for the result.
          </p>
          <CodeBlock
            code={restBasic}
            language="javascript"
            title="Optimize via REST API"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Explain (POST /v1/explain)" defaultOpen={false}>
          <p className="text-gray-400 mb-4">
            Get sensitivity analysis and a confidence narrative for a result.
            Always call this after optimize.
          </p>
          <CodeBlock
            code={explainExample}
            language="javascript"
            title="Explain a result"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Compare (POST /v1/compare)" defaultOpen={false}>
          <p className="text-gray-400 mb-4">
            Compare a candidate solution against the mathematically optimal
            solution to measure quality score and gap.
          </p>
          <CodeBlock
            code={compareExample}
            language="javascript"
            title="Compare a proposed solution"
          />
        </CollapsibleSection>

        <CollapsibleSection title="Error Handling">
          <p className="text-gray-400 mb-4">
            Handle HTTP status codes and application-level errors from the API.
          </p>
          <CodeBlock
            code={errorExample}
            language="javascript"
            title="Error handling"
          />
        </CollapsibleSection>
      </div>
    </div>
  )
}
