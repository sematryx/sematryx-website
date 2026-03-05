import Link from 'next/link'
import { Bot, Zap, Brain, BarChart3, CalendarClock, Cpu, ArrowRight, BookOpen, GraduationCap } from 'lucide-react'

export default function MCPPage() {

  const tools = [
    {
      name: 'sematryx_optimize',
      description: 'Solve any continuous or mixed-integer optimization problem. Describe the objective and bounds in natural language or structured JSON — Sematryx selects the best solver automatically.',
      returns: 'Optimal parameters, objective value, solver used, explanation',
      color: 'blue'
    },
    {
      name: 'sematryx_explain',
      description: 'Get a deeper post-solve explanation: sensitivity analysis per variable, basin confidence, why this solution was preferred over alternatives.',
      returns: 'Sensitivity chart, confidence assessment, narrative rationale',
      color: 'green'
    },
    {
      name: 'sematryx_compare',
      description: 'Compare an agent-generated answer against the mathematically optimal solution. Surfaces how far off the agent was and where improvement is possible.',
      returns: 'Gap analysis, optimal vs agent solution, suboptimality %',
      color: 'purple'
    }
  ]

  const agentUseCases = [
    {
      title: 'Hyperparameter Tuning',
      description: 'Agent tunes ML models — calls Sematryx with loss landscape bounds, gets optimal lr/dropout/batch size back with explanation of the trade-offs.',
      icon: Brain
    },
    {
      title: 'Resource Allocation',
      description: 'Agent distributes budget, compute, or staff across competing objectives with hard constraints — no manual gradient coding required.',
      icon: BarChart3
    },
    {
      title: 'Scheduling & Routing',
      description: 'Agent builds conflict-free schedules or minimizes routing cost across multi-variable systems with real-world constraints.',
      icon: CalendarClock
    },
    {
      title: 'Config & Infrastructure Tuning',
      description: 'Agent finds optimal replica counts, batch sizes, cache settings — Sematryx handles the math so the agent can reason about the result.',
      icon: Cpu
    }
  ]

  return (
    <div className="bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent-agentic/10 border border-accent-agentic/30 rounded-full px-4 py-1.5 mb-6">
            <Bot className="w-4 h-4 text-accent-agentic" />
            <span className="text-accent-agentic font-mono text-xs tracking-wide font-semibold uppercase">Model Context Protocol</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sematryx as an MCP Server
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Add Sematryx to Claude Desktop, Cline, or any MCP-compatible agent in two minutes.
            Your agent gains expert optimization capability — call one tool, get an optimal answer with full explanation.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/docs/integrations/mcp"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Quickstart Guide
            </Link>
            <Link
              href="/tutorials/mcp-agent-demo"
              className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:text-white transition-colors"
            >
              <GraduationCap className="w-5 h-5" />
              See Demo
            </Link>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">How It Works</h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Sematryx runs as an MCP server. Your agent connects to it like any other MCP tool provider.
            No optimization library to install. No scipy to debug. Just a tool call.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { step: '1', title: 'Add to your agent', body: 'Add the Sematryx MCP server to claude_desktop_config.json or your Cline settings. Takes 2 minutes — see the quickstart.' },
              { step: '2', title: 'Agent calls a tool', body: 'When your agent encounters an optimization problem, it calls sematryx_optimize with the objective and bounds in natural language or JSON.' },
              { step: '3', title: 'Get optimal + explanation', body: 'Sematryx returns the optimal parameters, the solver used, and a natural language explanation your agent can reason about and present to users.' }
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold text-lg mb-4">
                  {step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{body}</p>
              </div>
            ))}
          </div>

          {/* Flow diagram */}
          <div className="bg-[#141418] border border-elevated-3 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-between gap-4 text-sm">
              <div className="text-center flex-1">
                <div className="bg-violet-500/20 border border-violet-500/30 rounded-lg px-3 py-2 mb-2 font-mono text-violet-300">
                  Claude / Cline
                </div>
                <div className="text-gray-500 text-xs">Your AI agent</div>
              </div>
              <div className="flex-shrink-0 text-gray-600 font-mono text-xs text-center">
                <div className="mb-1">MCP tool call</div>
                <div>&#8594;</div>
              </div>
              <div className="text-center flex-1">
                <div className="bg-brand-primary/20 border border-brand-primary/30 rounded-lg px-3 py-2 mb-2 font-mono text-brand-primary">
                  mcp.sematryx.com
                </div>
                <div className="text-gray-500 text-xs">Sematryx MCP server</div>
              </div>
              <div className="flex-shrink-0 text-gray-600 font-mono text-xs text-center">
                <div className="mb-1">optimal + rationale</div>
                <div>&#8592;</div>
              </div>
              <div className="text-center flex-1">
                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-3 py-2 mb-2 font-mono text-emerald-300">
                  SematryxOptimizer
                </div>
                <div className="text-gray-500 text-xs">CMA-ES, DE, SHGO...</div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Tools */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">MCP Tools</h2>
          <div className="space-y-4">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 px-3 py-1.5 rounded-lg flex-shrink-0">
                    <span className="font-mono text-sm text-brand-primary font-semibold">{tool.name}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 mb-3">{tool.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Zap className="w-3.5 h-3.5 text-brand-primary" />
                      <span>Returns: {tool.returns}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent use cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">What Agents Solve</h2>
          <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
            Any problem where the agent needs to find the best configuration within constraints.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {agentUseCases.map((useCase, index) => {
              const IconComponent = useCase.icon
              return (
                <div key={index} className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-brand-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{useCase.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pricing callout */}
        <div className="bg-gradient-to-r from-brand-primary/10 to-purple-500/10 border border-brand-primary/30 rounded-2xl p-8 text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-2">Pay per solve, not per month</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            100 solves/month free. After that, $0.01&ndash;$0.05 per solve based on complexity.
            No subscriptions. Credits never expire.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/api-keys" className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors">
              Get Free API Key
            </Link>
            <Link href="/#pricing" className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:text-white transition-colors">
              See Pricing
            </Link>
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Get Started</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <Link
              href="/docs/integrations/mcp"
              className="block p-6 bg-[#1a1f2e] border border-gray-700 rounded-xl hover:border-brand-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white mb-1 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-brand-primary" />
                    MCP Quickstart
                  </div>
                  <div className="text-sm text-gray-400">Claude Desktop + Cline setup in 2 minutes</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-brand-primary transition-colors" />
              </div>
            </Link>
            <Link
              href="/tutorials/mcp-agent-demo"
              className="block p-6 bg-[#1a1f2e] border border-gray-700 rounded-xl hover:border-brand-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white mb-1 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-brand-primary" />
                    Agent Demo Tutorial
                  </div>
                  <div className="text-sm text-gray-400">See an agent solve portfolio optimization</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-brand-primary transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
