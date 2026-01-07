import Link from 'next/link'
import { ArrowLeft, MessageSquare, Bot, CheckCircle2, Zap, Users } from 'lucide-react'

export default function ConversationalOptimizationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <Link 
          href="/conversational-optimization" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </Link>
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Conversational Optimization
        </h1>
        <p className="text-xl text-gray-400">
          Create optimization problems through natural language conversation with an AI agent. 
          No technical expertise required—just describe what you want to optimize.
        </p>
      </div>

      <div className="space-y-12">
        {/* Value Proposition */}
        <section className="bg-gradient-to-br from-blue-950/40 to-purple-950/40 border border-blue-800/50 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <MessageSquare className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-200">
              Optimization Made Simple
            </h2>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            Conversational Optimization removes the technical barriers to optimization. Instead of 
            learning complex APIs, writing code, or understanding optimization algorithms, you simply 
            describe your problem in natural language. An AI agent guides you through the process, 
            asking clarifying questions and ensuring everything is set up correctly.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">For Non-Technical Users</h3>
              <p className="text-sm text-gray-400">
                Perfect for business analysts, product managers, and domain experts who understand 
                their problems but not the technical implementation.
              </p>
            </div>
            <div className="bg-[#1a1f2e]/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-200 mb-2">For Rapid Prototyping</h3>
              <p className="text-sm text-gray-400">
                Quickly test optimization ideas without writing code. Validate concepts before 
                investing in full implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Why Conversational Optimization?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Bot className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-gray-200">Intelligent Guidance</h3>
              </div>
              <p className="text-gray-400 text-sm">
                The AI agent understands your problem domain and asks the right questions to collect 
                all necessary parameters. No guessing what information is needed.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-gray-200">Automatic Validation</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Inputs are validated in real-time with helpful error messages. The agent ensures 
                your problem is well-formed before optimization begins.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-gray-200">Domain Detection</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Automatically detects your problem domain (marketing, finance, supply chain, etc.) 
                and applies domain-specific best practices and constraints.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-gray-200">Accessible to Everyone</h3>
              </div>
              <p className="text-gray-400 text-sm">
                No coding required. Team members across your organization can create and run 
                optimizations without technical training.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Common Use Cases
          </h2>
          <div className="space-y-4">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Marketing Budget Optimization</h3>
              <p className="text-gray-400 text-sm mb-3">
                "I want to optimize my marketing budget across Google, Facebook, and LinkedIn to maximize ROI"
              </p>
              <p className="text-gray-500 text-xs">
                The agent asks about your total budget, channel performance data, and ROI targets, 
                then optimizes allocation automatically.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Resource Allocation</h3>
              <p className="text-gray-400 text-sm mb-3">
                "I need to allocate my team of 50 engineers across 10 projects to maximize delivery value"
              </p>
              <p className="text-gray-500 text-xs">
                The agent collects project priorities, skill requirements, and constraints, then 
                finds the optimal team allocation.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Portfolio Optimization</h3>
              <p className="text-gray-400 text-sm mb-3">
                "Optimize my investment portfolio to achieve 8% annual return with maximum 12% risk"
              </p>
              <p className="text-gray-500 text-xs">
                The agent understands financial constraints, risk measures, and regulatory requirements, 
                then optimizes your portfolio allocation.
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
                <h3 className="font-semibold text-gray-200 mb-1">Describe Your Problem</h3>
                <p className="text-gray-400 text-sm">
                  Start by describing what you want to optimize in plain English. The agent analyzes 
                  your description and identifies key components.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">Answer Questions</h3>
                <p className="text-gray-400 text-sm">
                  The agent asks clarifying questions one at a time, with examples to guide your responses. 
                  Each answer is validated immediately.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">Automatic Optimization</h3>
                <p className="text-gray-400 text-sm">
                  Once all parameters are collected, the agent executes the optimization using Sematryx's 
                  intelligent optimization engine.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">Get Results</h3>
                <p className="text-gray-400 text-sm">
                  Receive optimized solutions with natural language explanations of why those solutions 
                  were chosen and how they perform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Get Started
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/tutorials/conversational-optimization"
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-blue-400 transition-colors">
                Interactive Tutorial
              </h3>
              <p className="text-gray-400 text-sm">
                Step-by-step guide with examples showing how to use conversational optimization
              </p>
            </Link>
            <Link
              href="/conversational-optimization"
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-blue-400 transition-colors">
                Learn More
              </h3>
              <p className="text-gray-400 text-sm">
                Explore the full capabilities and use cases for conversational optimization
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
