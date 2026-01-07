import Link from 'next/link'
import { Metadata } from 'next'
import { MessageSquare, CheckCircle2, Shield, Eye, FileText, ArrowLeft, BarChart3, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Interpretable Intelligence - Explainable Optimization Decisions | Sematryx',
  description: 'Comprehensive explanations of all optimization decisions with configurable detail levels. Full audit trails for regulatory compliance.',
}

export default function InterpretableIntelligenceMarketingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <Link 
          href="/why-sematryx" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Why Sematryx</span>
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-500/20 p-2 rounded-lg">
            <MessageSquare className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-200">
            Interpretable Intelligence
          </h1>
        </div>
        <p className="text-xl text-gray-400">
          Comprehensive explanations of all optimization decisions with configurable detail levels. 
          Full audit trails for regulatory compliance, natural language summaries for stakeholders, 
          and technical logs for debugging—all processed asynchronously for maximum performance.
        </p>
      </div>

      <div className="space-y-12">
        {/* Value Proposition */}
        <section className="bg-gradient-to-br from-green-950/40 to-emerald-950/40 border border-green-800/50 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-500/20 p-3 rounded-lg">
              <MessageSquare className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-200">
              Complete Transparency
            </h2>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            Traditional optimization tools are black boxes—you get a result but no understanding of why 
            it was chosen or how it was derived. Interpretable Intelligence provides comprehensive 
            explanations at every level, from high-level summaries for stakeholders to detailed technical 
            logs for engineers.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">Regulatory Compliance</h3>
              <p className="text-sm text-gray-400">
                Full audit trails meet requirements for financial services, healthcare, and manufacturing
              </p>
            </div>
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">Stakeholder Communication</h3>
              <p className="text-sm text-gray-400">
                Natural language summaries help non-technical stakeholders understand decisions
              </p>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            What Interpretable Intelligence Provides
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-gray-200">Natural Language Summaries</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Human-readable explanations of optimization decisions. Perfect for sharing with 
                stakeholders, executives, or anyone who needs to understand the "why" without 
                technical details.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-gray-200">Technical Decision Logs</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Detailed logs of all strategy selection decisions, alternative strategies considered, 
                and performance metrics. Essential for debugging and technical analysis.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-gray-200">Interactive Visualizations</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Visual diagnostics of the optimization process. See convergence patterns, strategy 
                performance, and decision trees. Great for presentations and debugging.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-gray-200">Complete Audit Trails</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Full records of every decision point for regulatory compliance. Meets requirements 
                for financial services, healthcare, and other regulated industries.
              </p>
            </div>
          </div>
        </section>

        {/* Explanation Levels */}
        <section className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Configurable Detail Levels
          </h2>
          <p className="text-gray-400 mb-6">
            Control explanation detail to balance information needs with compute costs:
          </p>
          <div className="space-y-4">
            <div className="bg-[#0f1419] border border-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-200">Level 0-1: Basic</h3>
                <span className="text-xs text-gray-500">Production Speed</span>
              </div>
              <p className="text-sm text-gray-400">
                Simple summaries for production environments. Minimal overhead, essential information only.
              </p>
            </div>
            <div className="bg-[#0f1419] border border-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-200">Level 2-3: Detailed</h3>
                <span className="text-xs text-gray-500">Standard</span>
              </div>
              <p className="text-sm text-gray-400">
                Comprehensive explanations with strategy rationale and performance analysis. Recommended 
                for most use cases.
              </p>
            </div>
            <div className="bg-[#0f1419] border border-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-200">Level 4-5: Full Audit</h3>
                <span className="text-xs text-gray-500">Compliance Ready</span>
              </div>
              <p className="text-sm text-gray-400">
                Complete decision logs with full traceability. Every decision point documented for 
                regulatory compliance and research-grade documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Boost */}
        <section className="bg-green-900/20 border border-green-700 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <Zap className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-green-200 mb-3">
                22-26% Performance Boost
              </h2>
              <p className="text-green-200/80 mb-4">
                Interpretable Intelligence processes explanations asynchronously by default. This means 
                optimization completes immediately while explanations are generated in the background. 
                You get comprehensive explanations without any performance penalty.
              </p>
              <p className="text-green-200/80 text-sm">
                This is a unique advantage—most explainability systems add latency. Sematryx actually 
                improves performance while providing better explanations.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            When Interpretable Intelligence is Essential
          </h2>
          <div className="space-y-4">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Regulated Industries</h3>
              <p className="text-gray-400 text-sm">
                Financial services, healthcare, and manufacturing often require audit trails and 
                explainable decisions for regulatory compliance. Interpretable Intelligence provides 
                the documentation you need.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Stakeholder Communication</h3>
              <p className="text-gray-400 text-sm">
                When you need to explain optimization decisions to executives, clients, or review boards. 
                Natural language summaries make technical decisions accessible to non-technical audiences.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Debugging Complex Issues</h3>
              <p className="text-gray-400 text-sm">
                When optimizations fail or produce unexpected results, detailed logs help identify the 
                root cause. Technical decision logs show exactly what happened and why.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Research & Development</h3>
              <p className="text-gray-400 text-sm">
                When you need to understand optimization behavior for research, publications, or 
                improving your own optimization strategies. Full traceability enables deep analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Real-World Impact */}
        <section className="bg-green-900/20 border border-green-700 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Real-World Impact
          </h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-200">Regulatory compliance:</strong> Meet audit requirements without additional documentation overhead.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-200">Faster debugging:</strong> Identify optimization issues quickly with detailed decision logs.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-200">Better stakeholder buy-in:</strong> Natural language summaries help non-technical stakeholders understand and trust optimization decisions.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-200">No performance penalty:</strong> Async processing means you get explanations without slowing down optimization.</span>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Learn More
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/docs/api/intelligence-config"
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-green-500 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-green-400 transition-colors">
                Three Intelligence Pillars Overview
              </h3>
              <p className="text-gray-400 text-sm">
                See how Interpretable Intelligence works with the other pillars
              </p>
            </Link>
            <Link
              href="/docs/concepts/interpretable-intelligence"
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-green-500 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-green-400 transition-colors">
                Developer Guide
              </h3>
              <p className="text-gray-400 text-sm">
                Learn how to configure and use Interpretable Intelligence in your code
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

