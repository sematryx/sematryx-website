import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { Metadata } from 'next'
import { Bot, Zap, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'MCP Agent Demo - Sematryx Tutorials',
  description: 'See how AI agents use the Model Context Protocol to solve complex optimization problems they would otherwise struggle with.',
}

export default function MCPAgentDemoTutorial() {
  const problemStatement = `# Portfolio Optimization Challenge

You manage a $10M investment portfolio with 5 assets:
- Tech stocks (AAPL, MSFT, GOOGL)
- Bonds (AGG, BND)
- Real estate (VNQ)

Requirements:
1. Target return: 8% annually
2. Maximum risk (CVaR): 12%
3. No single position > 30%
4. Minimum position: 5%
5. Weights must sum to 100%

Historical data:
- Expected returns: [0.12, 0.08, 0.15, 0.04, 0.06]
- Covariance matrix: [complex 5x5 matrix]
- Risk-free rate: 2%`

  const agentWithoutMCP = `# Agent trying to solve manually (struggling)

User: "Optimize my portfolio with the constraints above"

Agent (thinking): "I need to write optimization code. Let me try scipy..."

\`\`\`python
from scipy.optimize import minimize
import numpy as np

# This is getting complex...
def portfolio_objective(weights):
    # Wait, how do I handle CVaR constraints?
    # I need to calculate CVaR but I'm not sure how...
    portfolio_return = np.dot(weights, expected_returns)
    portfolio_variance = np.dot(weights.T, np.dot(covariance, weights))
    return -portfolio_return / np.sqrt(portfolio_variance)  # Sharpe ratio?

# Constraints are tricky...
constraints = [
    {'type': 'eq', 'fun': lambda w: np.sum(w) - 1.0},
    # How do I enforce CVaR < 12%?
    # How do I handle min/max position limits?
]

# This might not work correctly...
result = minimize(portfolio_objective, x0, bounds=bounds, constraints=constraints)
\`\`\`

Agent: "I'm having trouble with the CVaR constraint. 
The scipy optimizer doesn't directly support CVaR, and I'm 
not confident my implementation is correct. Also, I'm not 
sure which optimization algorithm to use for this problem..."`

  const agentWithMCP = `# Agent using MCP tools (successful)

User: "Optimize my portfolio with the constraints above"

Agent (via MCP): 
<tool_call>
{
  "tool": "analyze_optimization_problem",
  "arguments": {
    "objective_function": "portfolio_optimization_with_cvar",
    "bounds": [[0.05, 0.30], [0.05, 0.30], [0.05, 0.30], [0.05, 0.30], [0.05, 0.30]],
    "constraints": [
      "sum(weights) == 1.0",
      "target_return >= 0.08",
      "cvar <= 0.12",
      "min_position >= 0.05",
      "max_position <= 0.30"
    ],
    "domain": "financial"
  }
}
</tool_call>

<tool_result>
{
  "problem_type": "constrained_portfolio_optimization",
  "complexity": "high",
  "recommended_strategy": "cma_es_with_constraints",
  "estimated_evaluations": 2000,
  "constraint_handling": "penalty_method",
  "domain_specific_insights": {
    "risk_measure": "CVaR",
    "suitable_algorithms": ["CMA-ES", "Differential Evolution"],
    "common_pitfalls": ["CVaR calculation errors", "constraint violation"]
  }
}
</tool_result>

Agent: "The analysis suggests using CMA-ES with constraint handling. 
Let me optimize using the recommended approach."

<tool_call>
{
  "tool": "optimize_function",
  "arguments": {
    "objective_function": "def portfolio_objective(weights):\n    # Calculate portfolio metrics\n    portfolio_return = np.dot(weights, expected_returns)\n    portfolio_variance = np.dot(weights.T, np.dot(covariance, weights))\n    \n    # Calculate CVaR (Conditional Value at Risk)\n    portfolio_returns_sim = simulate_portfolio_returns(weights, 10000)\n    cvar = calculate_cvar(portfolio_returns_sim, confidence=0.95)\n    \n    # Objective: maximize risk-adjusted return\n    sharpe = (portfolio_return - risk_free_rate) / np.sqrt(portfolio_variance)\n    \n    # Penalty for constraint violations\n    penalty = 0\n    if np.abs(np.sum(weights) - 1.0) > 0.01:\n        penalty += 1000\n    if portfolio_return < 0.08:\n        penalty += 100 * (0.08 - portfolio_return)\n    if cvar > 0.12:\n        penalty += 100 * (cvar - 0.12)\n    \n    return -sharpe + penalty",
    "bounds": [[0.05, 0.30], [0.05, 0.30], [0.05, 0.30], [0.05, 0.30], [0.05, 0.30]],
    "max_evaluations": 2000,
    "domain": "financial",
    "constraints": [
      "sum(weights) == 1.0",
      "target_return >= 0.08",
      "cvar <= 0.12"
    ]
  }
}
</tool_call>

<tool_result>
{
  "success": true,
  "best_parameters": [0.28, 0.22, 0.30, 0.10, 0.10],
  "best_fitness": 1.42,
  "evaluations": 1847,
  "convergence_iterations": 156,
  "explanation": {
    "natural_language": "Optimized portfolio allocation: 28% Tech Stock A, 22% Tech Stock B, 30% Tech Stock C (max), 10% Bonds A, 10% Bonds B. Achieves 8.3% expected return with 11.8% CVaR, satisfying all constraints. The optimizer favored Tech Stock C due to superior risk-adjusted return (Sharpe 1.42).",
    "strategy_used": "CMA-ES with adaptive constraint handling",
    "constraint_satisfaction": "all_constraints_satisfied",
    "risk_metrics": {
      "expected_return": 0.083,
      "cvar": 0.118,
      "sharpe_ratio": 1.42,
      "max_drawdown": 0.15
    }
  }
}
</tool_result>

Agent: "✅ Portfolio optimized successfully!

**Recommended Allocation:**
- Tech Stock A: 28%
- Tech Stock B: 22%  
- Tech Stock C: 30% (maximum allowed)
- Bonds A: 10%
- Bonds B: 10%

**Results:**
- Expected return: 8.3% (exceeds 8% target)
- CVaR: 11.8% (below 12% limit)
- Sharpe ratio: 1.42
- All constraints satisfied

The optimizer used CMA-ES with specialized constraint handling for financial problems, which is more reliable than generic optimization methods for portfolio problems."`

  const mcpIntegrationCode = `# Setting up MCP connection in your agent

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

# Connect to Sematryx MCP server
server_params = StdioServerParameters(
    command="python",
    args=["-m", "sematryx.platform_services.integrations.mcp.server"],
    env=None
)

async with stdio_client(server_params) as (read, write):
    async with ClientSession(read, write) as session:
        # Initialize the session
        await session.initialize()
        
        # List available tools
        tools = await session.list_tools()
        print("Available tools:", [t.name for t in tools.tools])
        
        # Call optimization tool
        result = await session.call_tool(
            "optimize_function",
            arguments={
                "objective_function": objective_code,
                "bounds": bounds,
                "domain": "financial",
                "max_evaluations": 2000
            }
        )
        
        print("Optimization result:", result.content)`

  const comparisonTable = [
    {
      aspect: "Problem Analysis",
      withoutMCP: "Agent guesses approach, may choose wrong algorithm",
      withMCP: "Agent uses analyze_optimization_problem tool for expert recommendations"
    },
    {
      aspect: "Constraint Handling",
      withoutMCP: "Manual implementation, error-prone, especially for CVaR",
      withMCP: "Domain-specific constraint handling built into tools"
    },
    {
      aspect: "Algorithm Selection",
      withoutMCP: "Trial and error, may use suboptimal method",
      withMCP: "Intelligent strategy selection based on problem characteristics"
    },
    {
      aspect: "Result Interpretation",
      withoutMCP: "Raw numbers, agent must interpret manually",
      withMCP: "Natural language explanations included in results"
    },
    {
      aspect: "Reliability",
      withoutMCP: "High risk of errors in complex financial calculations",
      withMCP: "Battle-tested optimization engine with domain expertise"
    },
    {
      aspect: "Time to Solution",
      withoutMCP: "Hours of debugging and iteration",
      withMCP: "Minutes - direct tool calls with expert guidance"
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href="/tutorials" 
            className="text-brand-primary hover:text-brand-primary/80 font-medium mb-4 inline-flex items-center"
          >
            ← Back to Tutorials
          </Link>
          <div className="flex items-center gap-4 mb-6 mt-4">
            <span className="bg-accent-agentic/15 text-accent-agentic text-xs font-medium px-3 py-1 rounded-full border border-accent-agentic/30 flex items-center gap-1">
              <Bot className="w-3 h-3" />
              MCP Demo
            </span>
            <span className="text-text-tertiary">• 15 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            MCP Agent Demo: Solving Complex Optimization
          </h1>
          <p className="text-xl text-text-secondary">
            See how AI agents use the Model Context Protocol to solve optimization problems 
            they would otherwise struggle with.
          </p>
        </div>

        <div className="space-y-12">
          {/* Problem Statement */}
          <section className="bg-elevated border border-elevated-3 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-brand-primary" />
              The Challenge
            </h2>
            <p className="text-text-secondary mb-4">
              Consider a complex portfolio optimization problem with multiple constraints:
            </p>
            <CodeBlock
              code={problemStatement}
              language="markdown"
              title="Portfolio optimization problem"
            />
            <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <p className="text-text-secondary text-sm">
                <strong className="text-text-primary">Why this is hard:</strong> This requires 
                specialized knowledge of financial optimization, CVaR calculation, constraint handling, 
                and choosing the right algorithm. An agent without domain expertise would struggle.
              </p>
            </div>
          </section>

          {/* Without MCP */}
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-rose-400" />
              Agent Without MCP: The Struggle
            </h2>
            <p className="text-text-secondary mb-4">
              An agent trying to solve this manually would face several challenges:
            </p>
            <CodeBlock
              code={agentWithoutMCP}
              language="python"
              title="Agent struggling without MCP"
            />
            <div className="mt-4 space-y-2 text-text-secondary">
              <div className="flex items-start gap-2">
                <span className="text-rose-400">✗</span>
                <span>Uncertain about CVaR calculation methodology</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-rose-400">✗</span>
                <span>Doesn't know which optimization algorithm to use</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-rose-400">✗</span>
                <span>May implement constraints incorrectly</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-rose-400">✗</span>
                <span>No way to validate if solution is correct</span>
              </div>
            </div>
          </section>

          {/* With MCP */}
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              Agent With MCP: The Solution
            </h2>
            <p className="text-text-secondary mb-4">
              The same agent, equipped with MCP tools, can solve this efficiently:
            </p>
            <CodeBlock
              code={agentWithMCP}
              language="python"
              title="Agent succeeding with MCP"
            />
            <div className="mt-4 space-y-2 text-text-secondary">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Uses <code className="bg-elevated px-1 rounded">analyze_optimization_problem</code> for expert guidance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Leverages domain-specific optimization strategies</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Gets natural language explanations for results</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Confident in solution correctness</span>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-elevated-3">
                    <th className="text-left p-4 text-text-primary font-semibold">Aspect</th>
                    <th className="text-left p-4 text-text-primary font-semibold">Without MCP</th>
                    <th className="text-left p-4 text-text-primary font-semibold">With MCP</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="border-b border-elevated-3 hover:bg-elevated/50 transition-colors">
                      <td className="p-4 text-text-primary font-medium">{row.aspect}</td>
                      <td className="p-4 text-rose-400/80">{row.withoutMCP}</td>
                      <td className="p-4 text-emerald-400/80">{row.withMCP}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* MCP Integration Code */}
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-brand-primary" />
              How to Integrate MCP
            </h2>
            <p className="text-text-secondary mb-4">
              Here's how to connect your agent to the Sematryx MCP server:
            </p>
            <CodeBlock
              code={mcpIntegrationCode}
              language="python"
              title="MCP integration code"
            />
            <div className="mt-6 bg-elevated border border-elevated-3 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Available MCP Tools</h3>
              <div className="space-y-3 text-text-secondary">
                <div>
                  <code className="text-brand-primary font-mono text-sm">optimize_function</code>
                  <p className="text-sm mt-1">Optimize mathematical functions with intelligent strategy selection</p>
                </div>
                <div>
                  <code className="text-brand-primary font-mono text-sm">analyze_optimization_problem</code>
                  <p className="text-sm mt-1">Get expert analysis and recommendations for your problem</p>
                </div>
                <div>
                  <code className="text-brand-primary font-mono text-sm">get_optimization_strategies</code>
                  <p className="text-sm mt-1">List available optimization strategies and their characteristics</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="bg-gradient-to-br from-brand-primary/10 to-accent-agentic/10 border border-brand-primary/30 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Key Takeaways
            </h2>
            <div className="space-y-3 text-text-secondary">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-text-primary">MCP enables domain expertise:</strong> Agents can access 
                  specialized optimization knowledge without implementing it themselves.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-text-primary">Reduces errors:</strong> Using battle-tested optimization 
                  engines eliminates bugs from manual implementation.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-text-primary">Faster solutions:</strong> Agents can solve complex problems 
                  in minutes instead of hours of debugging.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-text-primary">Better explanations:</strong> Natural language results help 
                  agents communicate solutions to users effectively.
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Next Steps
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/mcp"
                className="bg-elevated border border-elevated-3 rounded-xl p-6 hover:border-brand-primary/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                  Learn More About MCP
                </h3>
                <p className="text-text-secondary text-sm">
                  Explore the full MCP integration guide and available tools
                </p>
              </Link>
              <Link 
                href="/docs"
                className="bg-elevated border border-elevated-3 rounded-xl p-6 hover:border-brand-primary/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                  API Documentation
                </h3>
                <p className="text-text-secondary text-sm">
                  Reference documentation for all optimization capabilities
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

