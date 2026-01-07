import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Optimization Results - Sematryx Tutorials',
  description: 'Learn to interpret optimization results, explanations, convergence metrics, and audit trails.',
}

export default function UnderstandingResultsTutorial() {
  const resultStructure = `{
  "success": true,
  "best_solution": [0.35, 0.28, 0.37],
  "best_fitness": 847293.50,
  "evaluations": 1247,
  "duration_seconds": 2.34,
  
  "strategy_used": "cma_es",
  "convergence": {
    "converged": true,
    "iterations": 89,
    "improvement_rate": "exponential",
    "stagnation_count": 0
  },
  
  "explanation": {
    "summary": "Optimization converged successfully",
    "rationale": "CMA-ES selected for smooth landscape...",
    "alternatives_considered": [...],
    "audit_id": "aud_7x9k2m..."
  },
  
  "learning_context": {
    "prior_experience_used": true,
    "similar_problems_found": 3,
    "speedup_factor": 1.8
  },
  
  "constraints_satisfied": true,
  "constraint_violations": []
}`

  const accessingResults = `from sematryx import optimize

result = optimize(
    objective_function=my_function,
    bounds=bounds,
    explanation_level=3
)

# === Core Results ===
print(f"Success: {result.success}")
print(f"Best solution: {result.solution}")
print(f"Objective value: {result.objective_value}")

# === Performance Metrics ===
print(f"Evaluations: {result.evaluations_used}")
print(f"Duration: {result.duration_seconds}s")
print(f"Strategy: {result.strategy_used}")

# === Explanations ===
print(f"Explanation: {result.explanation}")
if result.explanation_detail:
    print(f"Rationale: {result.explanation_detail.rationale}")
    print(f"Confidence: {result.explanation_detail.confidence_score}")
print(f"Audit ID: {result.audit_id}")`

  const convergenceMetrics = `# Check optimization success
if result.success:
    print("✓ Optimization found a solution")
else:
    print("⚠ Optimization did not succeed")
    print(f"  Check explanation: {result.explanation}")

# Performance metrics
print(f"Evaluations used: {result.evaluations_used}")
print(f"Duration: {result.duration_seconds:.2f}s")
print(f"Strategy: {result.strategy_used}")

# Detailed explanation if available
if result.explanation_detail:
    print(f"Convergence: {result.explanation_detail.convergence_reason}")
    print(f"Confidence: {result.explanation_detail.confidence_score}")
print(f"Improvement rate: {convergence['improvement_rate']}")

# Stagnation indicates potential local optima
if convergence['stagnation_count'] > 5:
    print("⚠ Multiple stagnation periods detected")
    print("  Consider: increase exploration or try different strategy")`

  const explanationLevels = `# Level 1: Basic summary (fastest)
{
  "summary": "Converged in 234 evaluations using CMA-ES"
}

# Level 2: Add strategy rationale
{
  "summary": "Converged in 234 evaluations using CMA-ES",
  "rationale": "CMA-ES selected: smooth, unimodal, 10D problem"
}

# Level 3: Add alternatives considered (default)
{
  "summary": "...",
  "rationale": "...",
  "alternatives_considered": [
    {"strategy": "differential_evolution", "score": 0.72},
    {"strategy": "bayesian", "score": 0.68}
  ]
}

# Level 4: Full audit trail (compliance)
{
  "summary": "...",
  "rationale": "...",
  "alternatives_considered": [...],
  "audit_trail": [
    {"timestamp": "...", "event": "problem_analysis", "details": "..."},
    {"timestamp": "...", "event": "strategy_selection", "details": "..."},
    {"timestamp": "...", "event": "iteration_1", "best_fitness": 1000.5},
    ...
  ],
  "audit_id": "aud_7x9k2m...",
  "audit_hash": "sha256:..."
}

# Level 5: Research-grade (most detailed)
# Includes landscape analysis, hessian estimates, 
# sensitivity analysis, counterfactual reasoning`

  const constraintResults = `# Check constraint satisfaction
if result['constraints_satisfied']:
    print("✓ All constraints satisfied")
else:
    print("✗ Some constraints violated:")
    for violation in result['constraint_violations']:
        print(f"  - {violation['constraint']}: {violation['violation_amount']}")

# For compliance applications, get detailed constraint analysis
if result['explanation'].get('constraint_analysis'):
    analysis = result['explanation']['constraint_analysis']
    for constraint in analysis:
        print(f"{constraint['name']}:")
        print(f"  Status: {constraint['status']}")
        print(f"  Margin: {constraint['margin']}")  # How close to boundary
        print(f"  Sensitivity: {constraint['sensitivity']}")  # Impact of relaxing`

  const learningContext = `# Understanding learning context
learning = result['learning_context']

# Was prior experience used?
if learning['prior_experience_used']:
    print(f"✓ Leveraged {learning['similar_problems_found']} similar problems")
    print(f"  Estimated speedup: {learning['speedup_factor']}x")
    
    # What patterns were matched?
    for pattern in learning.get('patterns_matched', []):
        print(f"  Pattern: {pattern['signature']} (confidence: {pattern['confidence']})")
else:
    print("No similar problems found in learning store")
    print("This optimization will be stored for future use")

# Private vs public learning
print(f"Private patterns: {learning.get('private_patterns_matched', 0)}")
print(f"Public patterns: {learning.get('public_patterns_matched', 0)}")`

  const auditTrails = `from sematryx import get_audit_trail

# Retrieve full audit trail by ID (for compliance)
audit = get_audit_trail(audit_id='aud_7x9k2m...')

# Audit contains complete decision history
print(f"Optimization ID: {audit['optimization_id']}")
print(f"Timestamp: {audit['timestamp']}")
print(f"User: {audit['user_id']}")
print(f"API Key: {audit['api_key_prefix']}...")

# Every decision is logged
for event in audit['events']:
    print(f"[{event['timestamp']}] {event['event_type']}")
    print(f"  Details: {event['details']}")
    print(f"  Hash: {event['event_hash']}")  # Tamper-evident

# Verify audit integrity
if audit['integrity_verified']:
    print("✓ Audit trail integrity verified")
else:
    print("✗ WARNING: Audit trail may have been tampered")`

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
            <span className="bg-amber-500/15 text-amber-400 text-xs font-medium px-3 py-1 rounded-full border border-amber-500/30">
              Intermediate
            </span>
            <span className="text-text-tertiary">• 20 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Understanding Optimization Results
          </h1>
          <p className="text-xl text-text-secondary">
            Learn to interpret results, explanations, convergence metrics, and audit trails.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Result Structure
            </h2>
            <p className="text-text-secondary mb-4">
              Every Sematryx optimization returns a rich result object with the solution, 
              performance metrics, explanations, and learning context:
            </p>
            <CodeBlock
              code={resultStructure}
              language="json"
              title="Complete result structure"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Accessing Results
            </h2>
            <p className="text-text-secondary mb-4">
              Here's how to extract and use the different parts of the result:
            </p>
            <CodeBlock
              code={accessingResults}
              language="python"
              title="Accessing result fields"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Convergence Analysis
            </h2>
            <p className="text-text-secondary mb-4">
              The convergence object tells you how the optimization performed and whether 
              the solution is reliable:
            </p>
            <CodeBlock
              code={convergenceMetrics}
              language="python"
              title="Analyzing convergence"
            />
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Convergence Indicators</h3>
              <div className="space-y-3 text-text-secondary">
                <div>
                  <strong className="text-emerald-400">Exponential improvement:</strong>{' '}
                  Problem is well-suited to the chosen strategy
                </div>
                <div>
                  <strong className="text-amber-400">Linear improvement:</strong>{' '}
                  Normal difficulty, may benefit from more evaluations
                </div>
                <div>
                  <strong className="text-rose-400">Stagnation:</strong>{' '}
                  Possible local optimum, consider multi-start or different strategy
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Explanation Levels
            </h2>
            <p className="text-text-secondary mb-4">
              The amount of explanation detail depends on your configured{' '}
              <code className="text-brand-primary bg-elevated-2 px-1.5 py-0.5 rounded text-sm">explanation_level</code>:
            </p>
            <CodeBlock
              code={explanationLevels}
              language="json"
              title="Explanation levels comparison"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Constraint Analysis
            </h2>
            <p className="text-text-secondary mb-4">
              For constrained optimization, the result includes detailed constraint satisfaction info:
            </p>
            <CodeBlock
              code={constraintResults}
              language="python"
              title="Constraint results"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Learning Context
            </h2>
            <p className="text-text-secondary mb-4">
              When adaptive learning is enabled, results include information about 
              prior experience used:
            </p>
            <CodeBlock
              code={learningContext}
              language="python"
              title="Learning context"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Audit Trails (Compliance)
            </h2>
            <p className="text-text-secondary mb-4">
              For regulated industries, every optimization has a tamper-evident audit trail 
              that can be retrieved for compliance and auditing:
            </p>
            <CodeBlock
              code={auditTrails}
              language="python"
              title="Audit trail retrieval"
            />
            <div className="bg-elevated border border-elevated-3 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Audit Trail Features</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span><strong className="text-text-primary">Tamper-evident:</strong> Cryptographic hashes verify integrity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span><strong className="text-text-primary">Complete history:</strong> Every decision logged with timestamps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span><strong className="text-text-primary">Exportable:</strong> JSON format for compliance systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span><strong className="text-text-primary">Retention:</strong> Stored for your configured retention period</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              🎉 Next Steps
            </h2>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <p className="text-text-secondary mb-4">
                You now understand how to interpret Sematryx results. 
                Next, explore domain-specific optimization for your industry.
              </p>
              <div className="space-y-2">
                <Link 
                  href="/tutorials/enterprise-workflows" 
                  className="block text-brand-primary hover:underline"
                >
                  → Domain-specific optimization
                </Link>
                <Link 
                  href="/tutorials/webhook-automation" 
                  className="block text-brand-primary hover:underline"
                >
                  → Advanced optimization strategies
                </Link>
                <Link 
                  href="/docs" 
                  className="block text-brand-primary hover:underline"
                >
                  → Full API reference
                </Link>
              </div>
            </div>
          </section>
        </div>
    </div>
  )
}
