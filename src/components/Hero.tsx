import Link from 'next/link'
import { Bot, Plug, Code, Zap, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-bg-base to-bg-elevated overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text Content */}
          <div className="text-left z-10">
            <div className="inline-flex items-center gap-2 bg-accent-agentic/10 border border-accent-agentic/30 rounded-full px-4 py-1.5 mb-6">
              <Bot className="w-4 h-4 text-accent-agentic" />
              <span className="text-accent-agentic font-mono text-xs tracking-wide font-semibold uppercase">MCP-Native Optimization</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight tracking-tight">
              Your AI Agent&apos;s<br /><span className="text-brand-primary">Optimization Copilot</span>
            </h1>

            <div className="mb-8 max-w-xl">
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                <strong className="text-text-primary">Sematryx is an MCP server</strong> that gives Claude, Cline, and any AI agent expert-level optimization — hyperparameter tuning, resource allocation, scheduling — with natural language explanations agents can reason about.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-3">
                One tool call. Real math. Full explanation.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-1.5 text-sm text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100 free solves/month</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>$0.01&ndash;$0.05 per solve</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>No subscriptions</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/docs/integrations/mcp"
                className="bg-cta-primary text-white hover:bg-cta-primary-hover px-8 py-3.5 rounded-lg text-base font-semibold transition-colors duration-200 shadow-lg shadow-brand-primary/30 text-center"
              >
                Connect Your Agent &rarr;
              </Link>
              <Link
                href="/api-keys"
                className="border-2 border-cta-secondary-border bg-cta-secondary-bg text-text-primary hover:bg-elevated-2 hover:text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors duration-200 text-center"
              >
                Get API Key Free
              </Link>
            </div>

            <div className="border-t border-elevated-3 pt-8">
              <p className="text-xs text-text-tertiary uppercase tracking-wide mb-4 font-semibold">Works with</p>
              <div className="flex flex-wrap items-center gap-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-3">
                  <Bot className="w-5 h-5 text-text-secondary" />
                  <span className="font-mono text-sm text-text-secondary">Claude Desktop</span>
                </div>
                <div className="flex items-center gap-3">
                  <Plug className="w-5 h-5 text-text-secondary" />
                  <span className="font-mono text-sm text-text-secondary">Cline</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-text-secondary" />
                  <span className="font-mono text-sm text-text-secondary">Python SDK</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-text-secondary" />
                  <span className="font-mono text-sm text-text-secondary">REST API</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: MCP Agent Flow Visual */}
          <div className="relative z-10 lg:block hidden">
            <div className="bg-[#141418] border border-elevated-3 rounded-xl overflow-hidden shadow-2xl shadow-black/50 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold px-2 py-1 rounded bg-accent-agentic/20 text-accent-agentic">
                    MCP
                  </span>
                  <span className="font-mono text-sm text-text-secondary">sematryx_optimize</span>
                </div>
                <span className="font-mono text-xs px-2 py-1 rounded bg-emerald-500/15 text-emerald-400">
                  solved ✓
                </span>
              </div>

              {/* Code Body */}
              <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto text-gray-300">
                <div className="text-text-tertiary text-xs mb-3">{'// Agent calls Sematryx via MCP'}</div>
                <div><span className="text-sky-300">sematryx_optimize</span><span className="text-text-tertiary">(</span></div>
                <div>&nbsp;&nbsp;<span className="text-amber-300">&quot;minimize training loss&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-sky-300">bounds</span>=<span className="text-text-tertiary">{'{'}</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">lr</span>: <span className="text-text-tertiary">[</span><span className="text-amber-300">1e-5</span>, <span className="text-amber-300">0.1</span><span className="text-text-tertiary">]</span>,</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">dropout</span>: <span className="text-text-tertiary">[</span><span className="text-amber-300">0.0</span>, <span className="text-amber-300">0.5</span><span className="text-text-tertiary">]</span></div>
                <div>&nbsp;&nbsp;<span className="text-text-tertiary">{'}'}</span></div>
                <div><span className="text-text-tertiary">)</span></div>
                <div className="mt-3 pt-3 border-t border-elevated-3">
                  <div className="text-text-tertiary text-xs mb-2">{'// Result with explanation'}</div>
                  <div><span className="text-text-tertiary">{'{'}</span></div>
                  <div>&nbsp;&nbsp;<span className="text-sky-300">&quot;lr&quot;</span>: <span className="text-amber-300">0.00312</span>,</div>
                  <div>&nbsp;&nbsp;<span className="text-sky-300">&quot;dropout&quot;</span>: <span className="text-amber-300">0.18</span>,</div>
                  <div>&nbsp;&nbsp;<span className="text-sky-300">&quot;solver&quot;</span>: <span className="text-emerald-300">&quot;CMA-ES&quot;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="text-sky-300">&quot;explanation&quot;</span>: <span className="text-emerald-300">&quot;Low lr+moderate...&quot;</span></div>
                  <div><span className="text-text-tertiary">{'}'}</span></div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-20 -right-6 bg-elevated border border-elevated-3 rounded-lg px-4 py-2.5 flex items-center gap-2 text-sm shadow-xl shadow-black/30 animate-bounce-slow z-20">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-text-tertiary">Beats Scipy DE:</span>
              <span className="font-semibold text-emerald-400">73.7%</span>
            </div>

            <div className="absolute -bottom-16 -left-8 bg-elevated border border-elevated-3 rounded-lg px-4 py-2.5 flex items-center gap-2 text-sm shadow-xl shadow-black/30 animate-bounce-slow delay-700 z-20">
              <Bot className="w-4 h-4 text-brand-primary" />
              <span className="text-text-tertiary">Cost per solve:</span>
              <span className="font-semibold text-brand-primary">$0.01</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
