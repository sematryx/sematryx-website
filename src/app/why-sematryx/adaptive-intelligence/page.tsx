import Link from 'next/link'
import { Metadata } from 'next'
import { Brain, CheckCircle2, TrendingUp, Repeat, ArrowLeft, Rocket, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Adaptive Intelligence - Self-Improving Optimization | Sematryx',
  description: 'The system learns from every optimization, recognizes similar problems, and improves performance over time. Continuous improvement built-in.',
}

export default function AdaptiveIntelligenceMarketingPage() {
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
          <div className="bg-pink-500/20 p-2 rounded-lg">
            <Brain className="w-8 h-8 text-pink-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-200">
            Adaptive Intelligence
          </h1>
        </div>
        <p className="text-xl text-gray-400">
          The system learns from every optimization, recognizes similar problems, and improves 
          performance over time. Your optimization engine gets smarter with each use—no manual 
          tuning or configuration required.
        </p>
      </div>

      <div className="space-y-12">
        {/* Value Proposition */}
        <section className="bg-gradient-to-br from-pink-950/40 to-purple-950/40 border border-pink-800/50 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-500/20 p-3 rounded-lg">
              <Brain className="w-8 h-8 text-pink-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-200">
              Self-Improving Optimization
            </h2>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            Traditional optimization tools are static—they perform the same way every time, regardless 
            of how many problems you've solved. Adaptive Intelligence enables Sematryx to learn from 
            every optimization, recognize patterns, and continuously improve. The more you use it, the 
            better it gets.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">Continuous Improvement</h3>
              <p className="text-sm text-gray-400">
                Each optimization adds to the knowledge base, improving future performance automatically
              </p>
            </div>
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">Pattern Recognition</h3>
              <p className="text-sm text-gray-400">
                System recognizes similar problems and applies lessons learned from past optimizations
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            How Adaptive Intelligence Works
          </h2>
          <div className="space-y-6">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Problem Signature Detection</h3>
                  <p className="text-gray-400 text-sm">
                    When you submit an optimization problem, the system creates a "signature" based on 
                    problem characteristics: dimensionality, constraint types, objective function properties, 
                    and domain indicators. This signature is used to recognize similar problems you've 
                    solved before.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Strategy Recall</h3>
                  <p className="text-gray-400 text-sm">
                    If a similar problem has been solved before, the system recalls which strategies 
                    worked best. Instead of starting from scratch, it begins with proven approaches, 
                    dramatically reducing optimization time and improving results.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Cross-Problem Learning</h3>
                  <p className="text-gray-400 text-sm">
                    The system identifies patterns across different problem types. Lessons learned from 
                    portfolio optimization might inform supply chain optimization. This meta-learning 
                    capability enables continuous improvement even when problems aren't identical.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Knowledge Accumulation</h3>
                  <p className="text-gray-400 text-sm">
                    Every optimization result is stored in your private learning store. Over time, this 
                    builds a comprehensive knowledge base specific to your organization's problems and 
                    patterns. The system becomes an expert on your optimization needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Why Adaptive Intelligence Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-pink-400" />
                <h3 className="text-lg font-semibold text-gray-200">Gets Better Over Time</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Unlike static optimization tools, Sematryx improves with each use. Recurring problems 
                get solved faster and more accurately as the system learns your patterns.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-gray-200">Faster for Recurring Problems</h3>
              </div>
              <p className="text-gray-400 text-sm">
                When you run similar optimizations regularly, the system recognizes patterns and applies 
                proven strategies immediately, reducing optimization time significantly.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Repeat className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-gray-200">Organizational Knowledge</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Your private learning store captures your organization's optimization expertise. This 
                knowledge persists across projects and team members, building institutional memory.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-gray-200">Meta-Learning</h3>
              </div>
              <p className="text-gray-400 text-sm">
                The system learns how to learn—improving its strategy selection process itself. This 
                enables continuous improvement even for novel problem types.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Stores */}
        <section className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Private vs Public Learning
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0f1419] border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Private Learning Store</h3>
              <p className="text-gray-400 text-sm mb-4">
                Your organization's exclusive knowledge base. Stores patterns and strategies learned 
                from your optimizations. Never shared with other organizations.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Organization-specific patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Proprietary problem knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Complete privacy and control</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0f1419] border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Public Learning Store</h3>
              <p className="text-gray-400 text-sm mb-4">
                Shared knowledge base with anonymized patterns from all users. Provides broader learning 
                but may not be suitable for sensitive problems.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Broader pattern recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Helpful for novel problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Anonymized and aggregated</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            When Adaptive Intelligence Shines
          </h2>
          <div className="space-y-4">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Recurring Optimizations</h3>
              <p className="text-gray-400 text-sm">
                When you run similar optimizations regularly (e.g., weekly portfolio rebalancing, daily 
                resource allocation). The system recognizes patterns and applies proven strategies, 
                dramatically reducing optimization time.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Long-Term Projects</h3>
              <p className="text-gray-400 text-sm">
                When running optimization projects over months or years. The system continuously improves, 
                getting better results and faster execution as it learns your problem characteristics.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Organizational Knowledge</h3>
              <p className="text-gray-400 text-sm">
                When you want to build institutional knowledge that persists across team members and 
                projects. The private learning store captures your organization's optimization expertise.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Similar Problem Families</h3>
              <p className="text-gray-400 text-sm">
                When you solve variations of similar problems (e.g., different portfolio constraints, 
                similar supply chain networks). Cross-problem learning applies lessons across the family.
              </p>
            </div>
          </div>
        </section>

        {/* Real-World Impact */}
        <section className="bg-pink-900/20 border border-pink-700 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Real-World Impact
          </h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-200">Faster recurring optimizations:</strong> Problems you've solved before get optimized in a fraction of the time.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-200">Better results over time:</strong> The system learns what works for your specific problems, improving outcomes.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-200">Institutional knowledge:</strong> Your organization's optimization expertise is captured and preserved.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-200">Reduced costs:</strong> Faster optimizations mean lower compute costs, especially for recurring problems.</span>
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
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-pink-500 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-pink-400 transition-colors">
                Three Intelligence Pillars Overview
              </h3>
              <p className="text-gray-400 text-sm">
                See how Adaptive Intelligence works with the other pillars
              </p>
            </Link>
            <Link
              href="/docs/concepts/adaptive-intelligence"
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-pink-500 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-pink-400 transition-colors">
                Developer Guide
              </h3>
              <p className="text-gray-400 text-sm">
                Learn how to configure and use Adaptive Intelligence in your code
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

