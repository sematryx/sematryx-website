import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-bg-base to-bg-elevated overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-elevated border border-elevated-3 text-brand-primary text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Now in Public Beta
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight tracking-tight">
              Optimization problems <span className="text-brand-primary">traditional solvers can't touch</span>
            </h1>
            
            <div className="mb-8 max-w-xl">
              <p className="text-xl text-text-primary font-medium mb-3 leading-snug">
                One API call. Landscape mapped. Strategy selected. Logic explained. Lessons learned.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Sematryx handles the optimization problems that break conventional tools—with full audit trails for regulated industries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/api-keys" 
                className="bg-cta-primary text-white hover:bg-cta-primary-hover px-8 py-3.5 rounded-lg text-base font-semibold transition-colors duration-200 shadow-lg shadow-brand-primary/30 text-center"
              >
                Get Started Free →
              </Link>
              <Link 
                href="/docs" 
                className="border-2 border-cta-secondary-border bg-cta-secondary-bg text-text-primary hover:bg-elevated-2 hover:text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors duration-200 text-center"
              >
                View Documentation
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 sm:gap-12 border-t border-elevated-3 pt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-text-primary">13+</span>
                <span className="text-sm text-text-tertiary">Industry verticals</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-text-primary">98.4%</span>
                <span className="text-sm text-text-tertiary">Explainability score</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-text-primary">&lt;200ms</span>
                <span className="text-sm text-text-tertiary">Avg response time</span>
              </div>
            </div>
          </div>

          {/* Right Column: API Visual */}
          <div className="relative z-10 lg:block hidden">
            <div className="bg-[#141418] border border-elevated-3 rounded-xl overflow-hidden shadow-2xl shadow-black/50 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold px-2 py-1 rounded bg-emerald-500/15 text-emerald-400">
                    POST
                  </span>
                  <span className="font-mono text-sm text-text-secondary">/v1/optimize</span>
                </div>
                <span className="font-mono text-xs px-2 py-1 rounded bg-emerald-500/15 text-emerald-400">
                  200 OK
                </span>
              </div>

              {/* Code Body */}
              <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto text-gray-300">
                <div><span className="text-text-tertiary">{'{'}</span></div>
                <div>  <span className="text-sky-300">"solution"</span>: <span className="text-text-tertiary">{'{'}</span></div>
                <div>    <span className="text-sky-300">"allocation"</span>: <span className="text-text-tertiary">[</span><span className="text-amber-300">0.35</span>, <span className="text-amber-300">0.28</span>, <span className="text-amber-300">0.37</span><span className="text-text-tertiary">]</span>,</div>
                <div>    <span className="text-sky-300">"objective_value"</span>: <span className="text-amber-300">847293.50</span>,</div>
                <div>    <span className="text-sky-300">"constraints_satisfied"</span>: <span className="text-violet-300">true</span></div>
                <div>  <span className="text-text-tertiary">{'}'}</span>,</div>
                <div>  <span className="text-sky-300">"explanation"</span>: <span className="text-text-tertiary">{'{'}</span></div>
                <div>    <span className="text-sky-300">"rationale"</span>: <span className="text-emerald-300">"Balanced risk-adjusted..."</span>,</div>
                <div>    <span className="text-sky-300">"alternatives_considered"</span>: <span className="text-amber-300">12</span>,</div>
                <div>    <span className="text-sky-300">"audit_id"</span>: <span className="text-emerald-300">"aud_7x9k2m..."</span></div>
                <div>  <span className="text-text-tertiary">{'}'}</span></div>
                <div><span className="text-text-tertiary">{'}'}</span></div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-10 -right-4 bg-elevated border border-elevated-3 rounded-lg px-4 py-2.5 flex items-center gap-2 text-sm shadow-xl shadow-black/30 animate-bounce-slow z-20">
              <span className="text-amber-400">⚡</span>
              <span className="text-text-tertiary">Latency:</span>
              <span className="font-semibold text-emerald-400">142ms</span>
            </div>

            <div className="absolute -bottom-12 -left-6 bg-elevated border border-elevated-3 rounded-lg px-4 py-2.5 flex items-center gap-2 text-sm shadow-xl shadow-black/30 animate-bounce-slow delay-700 z-20">
              <span className="text-brand-primary">🛡️</span>
              <span className="text-text-tertiary">Audit:</span>
              <span className="font-semibold text-brand-primary">Logged</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
