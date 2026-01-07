import Link from 'next/link'
import { Metadata } from 'next'
import { Bot, CheckCircle2, Zap, Users, ArrowLeft, Rocket } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Agentic Intelligence - Multi-Agent Strategy Selection | Sematryx',
  description: 'Multiple AI agents collaborate to automatically select the optimal optimization strategy for your problem. No manual tuning required.',
}

export default function AgenticIntelligenceMarketingPage() {
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
          <div className="bg-sky-500/20 p-2 rounded-lg">
            <Bot className="w-8 h-8 text-sky-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-200">
            Agentic Intelligence
          </h1>
        </div>
        <p className="text-xl text-gray-400">
          Multiple AI agents collaborate to automatically select the optimal optimization strategy 
          for your problem. No manual tuning, no trial-and-error—just intelligent strategy selection.
        </p>
      </div>

      <div className="space-y-12">
        {/* Value Proposition */}
        <section className="bg-gradient-to-br from-sky-950/40 to-blue-950/40 border border-sky-800/50 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-sky-500/20 p-3 rounded-lg">
              <Bot className="w-8 h-8 text-sky-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-200">
              Intelligent Strategy Selection
            </h2>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            Instead of guessing which optimization algorithm to use, Sematryx deploys a "Council of Experts" 
            where specialized AI agents analyze your problem and reach consensus on the best strategy. This 
            eliminates the trial-and-error approach that plagues traditional optimization tools.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">No Manual Tuning</h3>
              <p className="text-sm text-gray-400">
                Agents automatically select optimal strategies based on problem characteristics
              </p>
            </div>
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">Domain Expertise</h3>
              <p className="text-sm text-gray-400">
                Leverage optimization knowledge without implementing it yourself
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            How Agentic Intelligence Works
          </h2>
          <div className="space-y-6">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Research Agent</h3>
                  <p className="text-gray-400 text-sm">
                    The "Academic" scans optimization literature and internal knowledge bases to identify 
                    theoretical best practices for your problem type. Considers algorithm performance 
                    characteristics, constraint handling capabilities, and problem topology.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Validation Engineer</h3>
                  <p className="text-gray-400 text-sm">
                    The "Safety Inspector" simulates proposed strategies against your specific constraints 
                    and risk models. Ensures strategies won't violate constraints, exceed time limits, or 
                    produce invalid solutions. Flags potential issues before execution.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Performance Analyst</h3>
                  <p className="text-gray-400 text-sm">
                    The "Historian" analyzes past optimization runs to predict performance. Recognizes 
                    similar problems you've solved before and recalls which strategies worked best. 
                    Considers your organization's optimization patterns and preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Consensus Engine</h3>
                  <p className="text-gray-400 text-sm">
                    The "Manager" requires agents to reach consensus (default 67% agreement) before 
                    approving a strategy. This ensures decisions are well-vetted and reduces the risk 
                    of selecting suboptimal approaches. Only strategies with strong agent support proceed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Why Agentic Intelligence Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-6 h-6 text-sky-400" />
                <h3 className="text-lg font-semibold text-gray-200">Eliminates Guesswork</h3>
              </div>
              <p className="text-gray-400 text-sm">
                No more wondering which algorithm to use. Agents analyze your problem and select the 
                optimal strategy automatically, saving hours of research and trial-and-error.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-gray-200">Adapts in Real-Time</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Agents adapt their recommendations based on problem characteristics, constraints, and 
                your organization's historical patterns. Strategies are tailored to your specific needs.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-gray-200">Leverages Domain Expertise</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Access optimization expertise without hiring specialists or spending months learning 
                algorithm theory. Agents bring domain knowledge to every problem.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-gray-200">Reduces Risk</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Consensus-based selection means multiple experts validate each strategy. Reduces the 
                risk of choosing algorithms that fail or perform poorly on your specific problem.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            When to Use Agentic Intelligence
          </h2>
          <div className="space-y-4">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Complex or Novel Problems</h3>
              <p className="text-gray-400 text-sm">
                When you're unsure which optimization algorithm to use, or when problems have unusual 
                characteristics that don't fit standard patterns. Agents analyze the problem and 
                recommend the best approach.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Time-Critical Decisions</h3>
              <p className="text-gray-400 text-sm">
                When you need the best strategy quickly without spending time researching algorithms 
                or running multiple trials. Agents provide expert recommendations in seconds.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Limited Optimization Expertise</h3>
              <p className="text-gray-400 text-sm">
                When your team doesn't have deep optimization knowledge. Agents provide the expertise 
                you need without requiring specialized training or hiring consultants.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Multi-Objective Problems</h3>
              <p className="text-gray-400 text-sm">
                When problems have multiple competing objectives or complex constraint relationships. 
                Agents understand trade-offs and select strategies that balance competing goals.
              </p>
            </div>
          </div>
        </section>

        {/* Real-World Impact */}
        <section className="bg-sky-900/20 border border-sky-700 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Real-World Impact
          </h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-200">Faster time to solution:</strong> No more spending days researching which algorithm to use. Agents provide expert recommendations immediately.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-200">Better results:</strong> Multi-agent consensus ensures strategies are well-vetted, leading to better optimization outcomes.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-200">Reduced risk:</strong> Validation engineers catch potential issues before execution, preventing costly failures.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-gray-200">Accessible expertise:</strong> Get optimization expertise without hiring specialists or extensive training.</span>
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
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-sky-500 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-sky-400 transition-colors">
                Three Intelligence Pillars Overview
              </h3>
              <p className="text-gray-400 text-sm">
                See how Agentic Intelligence works with the other pillars
              </p>
            </Link>
            <Link
              href="/docs/concepts/agentic-intelligence"
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-sky-500 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-sky-400 transition-colors">
                Developer Guide
              </h3>
              <p className="text-gray-400 text-sm">
                Learn how to configure and use Agentic Intelligence in your code
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

