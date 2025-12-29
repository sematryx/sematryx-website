import Link from 'next/link'
import { MessageSquare, Bot, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

export default function ConversationalOptimization() {
  return (
    <div className="py-20 md:py-24 bg-elevated border-t border-elevated-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary uppercase tracking-wide">New</span>
              <span className="text-xs px-2 py-0.5 rounded bg-brand-primary/20 text-brand-primary border border-brand-primary/30">
                Patent Pending
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Optimize in Plain English—<span className="text-brand-primary">No Code Required</span>
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Describe your optimization problem in natural language. Our AI agent guides you through 
              problem formulation, collects parameters, and executes optimization—all without writing a single line of code.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-text-secondary">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>Zero technical barrier—works for anyone with an optimization problem</span>
              </div>
              <div className="flex items-start gap-3 text-text-secondary">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>AI agent asks clarifying questions and validates inputs in real-time</span>
              </div>
              <div className="flex items-start gap-3 text-text-secondary">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>Dynamic domain extension—handles novel problems automatically</span>
              </div>
              <div className="flex items-start gap-3 text-text-secondary">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>Perfect for marketing managers, operations teams, and domain experts</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/tutorials/conversational-optimization" 
                className="bg-cta-primary text-white hover:bg-cta-primary-hover px-6 py-3 rounded-lg text-base font-semibold transition-colors duration-200 shadow-lg shadow-brand-primary/30 text-center inline-flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Try Conversational Optimization
              </Link>
              <Link 
                href="/docs/conversational-optimization" 
                className="border-2 border-cta-secondary-border bg-cta-secondary-bg text-text-primary hover:bg-elevated-2 hover:text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors duration-200 text-center inline-flex items-center justify-center gap-2"
              >
                See How It Works
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right: Visual - Conversation Flow */}
          <div className="relative">
            <div className="bg-base border border-elevated-3 rounded-xl overflow-hidden shadow-xl shadow-black/30">
              {/* Header */}
              <div className="px-4 py-3 bg-elevated-2 border-b border-elevated-3 flex items-center gap-2">
                <Bot className="w-4 h-4 text-brand-primary" />
                <span className="font-mono text-sm text-text-secondary">Conversational Optimization</span>
              </div>
              
              {/* Conversation Flow */}
              <div className="p-6 space-y-4">
                {/* User message */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xs font-bold">U</span>
                  </div>
                  <div className="flex-1 bg-elevated rounded-lg p-3 border border-elevated-3">
                    <div className="text-xs text-text-tertiary mb-1">You</div>
                    <div className="text-sm text-text-secondary">
                      "I want to optimize my marketing budget across Google, Facebook, and LinkedIn to maximize ROI"
                    </div>
                  </div>
                </div>

                {/* Agent response */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-brand-primary" />
                  </div>
                  <div className="flex-1 bg-elevated rounded-lg p-3 border border-elevated-3">
                    <div className="text-xs text-text-tertiary mb-1">AI Agent</div>
                    <div className="text-sm text-text-secondary">
                      "I understand you want to optimize your marketing budget. What is your total marketing budget?"
                    </div>
                  </div>
                </div>

                {/* User response */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xs font-bold">U</span>
                  </div>
                  <div className="flex-1 bg-elevated rounded-lg p-3 border border-elevated-3">
                    <div className="text-xs text-text-tertiary mb-1">You</div>
                    <div className="text-sm text-text-secondary">"$50,000"</div>
                  </div>
                </div>

                {/* Agent - ready to optimize */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex-1 bg-elevated rounded-lg p-3 border border-emerald-500/30">
                    <div className="text-xs text-emerald-400 mb-1">Optimization Complete</div>
                    <div className="text-sm text-text-secondary mb-2">
                      <div className="font-semibold text-emerald-400 mb-1">Optimal Allocation:</div>
                      <div className="text-xs font-mono text-text-tertiary">
                        Google: $28,500 (57%)<br/>
                        Facebook: $15,000 (30%)<br/>
                        LinkedIn: $6,500 (13%)
                      </div>
                    </div>
                    <div className="text-xs text-text-tertiary">
                      Total ROI: 242% • Expected Revenue: $171,000
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-elevated border border-elevated-3 rounded-lg px-3 py-2 flex items-center gap-2 text-xs shadow-xl shadow-black/30 z-20">
              <MessageSquare className="w-3 h-3 text-brand-primary" />
              <span className="text-text-tertiary">No code needed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

