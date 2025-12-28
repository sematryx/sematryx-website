import Link from 'next/link'
import { Bot, Zap, MessageSquare } from 'lucide-react'

export default function AgentReady() {
  return (
    <div className="py-16 md:py-20 bg-elevated border-t border-elevated-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Messaging */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-5 h-5 text-accent-agentic" />
              <span className="text-sm font-semibold text-accent-agentic uppercase tracking-wide">AI-Native</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Your Agents' Optimization Backend
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              AI agents shouldn't struggle with complex optimization math. Sematryx works as a tool 
              your agents can call—send a problem, get back an optimized solution with explanations 
              the agent can reason about and present to users.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-accent-agentic mt-0.5">✓</span>
                <span>Claude, GPT, Cursor invoke Sematryx via MCP protocol</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-accent-agentic mt-0.5">✓</span>
                <span>Results include natural language rationale, not just numbers</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-accent-agentic mt-0.5">✓</span>
                <span>Offload compute-heavy optimization to hosted infrastructure</span>
              </li>
            </ul>
            <Link 
              href="/mcp" 
              className="text-brand-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              Learn about MCP integration →
            </Link>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="bg-base border border-elevated-3 rounded-xl overflow-hidden shadow-xl shadow-black/30">
              {/* Header */}
              <div className="px-4 py-3 bg-elevated-2 border-b border-elevated-3 flex items-center gap-2">
                <span className="font-mono text-xs px-2 py-1 rounded bg-accent-agentic/15 text-accent-agentic">MCP</span>
                <span className="font-mono text-sm text-text-secondary">Agent → Sematryx → Response</span>
              </div>
              
              {/* Flow visualization */}
              <div className="p-6 space-y-4">
                {/* Agent request */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="flex-1 bg-elevated rounded-lg p-3 border border-elevated-3">
                    <div className="text-xs text-text-tertiary mb-1">Agent Request</div>
                    <div className="font-mono text-sm text-text-secondary">
                      "Optimize portfolio for 8% return, max 30% single position"
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="text-text-tertiary">↓</div>
                </div>

                {/* Sematryx response */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-brand-primary" />
                  </div>
                  <div className="flex-1 bg-elevated rounded-lg p-3 border border-elevated-3">
                    <div className="text-xs text-text-tertiary mb-1">Sematryx Response</div>
                    <div className="font-mono text-sm text-emerald-400 mb-2">
                      allocation: [0.35, 0.28, 0.22, 0.15]
                    </div>
                    <div className="text-sm text-text-secondary">
                      "Balanced risk-adjusted return while satisfying the 30% max position constraint..."
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="text-text-tertiary">↓</div>
                </div>

                {/* Agent to user */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="flex-1 bg-elevated rounded-lg p-3 border border-elevated-3">
                    <div className="text-xs text-text-tertiary mb-1">Agent to User</div>
                    <div className="text-sm text-text-secondary">
                      "I've optimized your portfolio. Here's the recommended allocation and why..."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

