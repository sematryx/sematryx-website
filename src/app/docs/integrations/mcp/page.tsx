import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, Plug, Bot, Zap, Shield, CheckCircle2, Code, Rocket, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Agent Integrations (MCP) - AI Agent Integration | Sematryx',
  description: 'Enable AI agents to solve complex optimization problems using the Model Context Protocol. Give your agents domain expertise they would otherwise lack.',
}

export default function MCPIntegrationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <Link 
          href="/mcp" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Agents Overview</span>
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-500/20 p-2 rounded-lg">
            <Plug className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-200">
            Agent Integrations (MCP)
          </h1>
        </div>
        <p className="text-xl text-gray-400">
          Enable AI agents to solve complex optimization problems using the Model Context Protocol. 
          Give your agents domain expertise they would otherwise struggle with.
        </p>
      </div>

      <div className="space-y-12">
        {/* Value Proposition */}
        <section className="bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border border-blue-800/50 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <Bot className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-200">
              Give Your Agents Superpowers
            </h2>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            AI agents are great at many things, but complex optimization problems often require specialized 
            knowledge they don't have. With Sematryx MCP integration, your agents can access enterprise-grade 
            optimization capabilities as tools, solving problems they would otherwise struggle with or get wrong.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">Domain Expertise</h3>
              <p className="text-sm text-gray-400">
                Agents can leverage domain-specific optimization knowledge without implementing it themselves
              </p>
            </div>
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">Error Reduction</h3>
              <p className="text-sm text-gray-400">
                Battle-tested optimization engines eliminate bugs from manual implementation
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Why Use MCP Integration?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-gray-200">Faster Solutions</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Agents can solve complex optimization problems in minutes instead of hours of debugging 
                and trial-and-error. Direct tool calls with expert guidance eliminate guesswork.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-gray-200">Reliable Results</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Using battle-tested optimization engines eliminates errors from manual implementation. 
                Domain-specific constraint handling ensures correct solutions.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-gray-200">Better Explanations</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Natural language results help agents communicate solutions to users effectively. 
                Agents get explanations they can understand and share.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-gray-200">Domain Expertise</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Agents can access specialized optimization knowledge for finance, healthcare, supply chain, 
                and more without implementing domain logic themselves.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            How It Works
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">Agent Identifies Need</h3>
                <p className="text-gray-400 text-sm">
                  Your agent recognizes it needs to solve an optimization problem (e.g., portfolio allocation, 
                  resource scheduling, route optimization).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">Calls MCP Tool</h3>
                <p className="text-gray-400 text-sm">
                  Agent calls Sematryx MCP tools (optimize, analyze_problem, explain_result) with the 
                  problem parameters.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">Expert Optimization</h3>
                <p className="text-gray-400 text-sm">
                  Sematryx analyzes the problem, selects optimal strategies, and executes the optimization 
                  using domain-specific knowledge.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">Agent Gets Results</h3>
                <p className="text-gray-400 text-sm">
                  Agent receives optimized solutions with natural language explanations it can share with users, 
                  along with technical details if needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Tools */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Available MCP Tools
          </h2>
          <div className="space-y-4">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">optimize</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Run optimization problems with full parameter support. The tool automatically selects 
                    the best strategy based on problem characteristics.
                  </p>
                  <div className="text-xs text-gray-500">
                    Supports: objective functions, constraints, bounds, domain-specific optimization
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <Bot className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">analyze_problem</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Get expert analysis and recommendations for your optimization problem before running it. 
                    Understand complexity, recommended strategies, and potential pitfalls.
                  </p>
                  <div className="text-xs text-gray-500">
                    Returns: problem type, complexity assessment, strategy recommendations, domain insights
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  <Code className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">explain_result</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Get natural language explanations for optimization results. Understand why specific 
                    solutions were chosen and how they perform.
                  </p>
                  <div className="text-xs text-gray-500">
                    Returns: natural language summary, strategy rationale, performance metrics, audit trail
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/10 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">get_domain_libraries</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Discover and use domain-specific optimization libraries. Access pre-built solutions 
                    for finance, healthcare, supply chain, and more.
                  </p>
                  <div className="text-xs text-gray-500">
                    Returns: available domains, use cases, constraints, compliance requirements
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="bg-green-900/20 border border-green-700 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-green-200 mb-2">Secure & Reliable</h3>
              <p className="text-green-200/80 text-sm mb-3">
                All MCP connections are encrypted using TLS. API keys are never transmitted in plain text, 
                and all requests are authenticated and rate-limited per your account settings.
              </p>
              <p className="text-green-200/80 text-sm">
                For production deployments, use environment variables or secure key management systems 
                to store API keys.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Get Started
          </h2>
          <div className="space-y-4">
            <Link
              href="/mcp"
              className="block p-6 bg-[#1a1f2e] border border-gray-700 rounded-lg hover:border-blue-500 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-200 mb-1 group-hover:text-blue-400 transition-colors">
                    Agents Overview
                  </div>
                  <div className="text-sm text-gray-400">Learn about Sematryx agent capabilities and use cases</div>
                </div>
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
            </Link>
            <Link
              href="/tutorials/mcp-agent-demo"
              className="block p-6 bg-[#1a1f2e] border border-gray-700 rounded-lg hover:border-blue-500 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-200 mb-1 group-hover:text-blue-400 transition-colors">
                    MCP Agent Demo Tutorial
                  </div>
                  <div className="text-sm text-gray-400">See how agents use MCP to solve complex optimization problems</div>
                </div>
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
