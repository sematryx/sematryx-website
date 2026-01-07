import Link from 'next/link'
import { Metadata } from 'next'
import { MessageSquare, CheckCircle2, ArrowRight, Sparkles, BookOpen, GraduationCap, Code } from 'lucide-react'
import CodeBlock from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Conversational Optimization - Optimize in Plain English | Sematryx',
  description: 'Describe your optimization problem in natural language. Our AI agent guides you through problem formulation and executes optimization—no code required.',
}

export default function ConversationalOptimizationPage() {
  const exampleConversation = `You: "I want to optimize my marketing budget across Google, Facebook, and LinkedIn to maximize ROI"

Sematryx: "Great! To optimize your marketing budget, I need a few details:
- What's your total marketing budget?
- What's your target ROI?
- Are there any minimum spend requirements per platform?"

You: "$50,000 total budget, target 3x ROI, minimum $5,000 per platform"

Sematryx: "Perfect! I'll optimize your budget allocation. Here's the recommended distribution:
- Google Ads: $22,500 (45%)
- Facebook: $18,750 (37.5%)
- LinkedIn: $8,750 (17.5%)

This allocation is projected to achieve a 3.2x ROI based on historical performance patterns."`

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1419] to-[#1a1f2e]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MessageSquare className="w-6 h-6 text-brand-primary" />
            <span className="text-sm font-semibold text-brand-primary uppercase tracking-wide">New</span>
            <span className="text-xs px-2 py-0.5 rounded bg-brand-primary/20 text-brand-primary border border-brand-primary/30">
              Patent Pending
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Optimize in <span className="text-brand-primary">Plain English</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Describe your optimization problem in natural language. Our AI agent guides you through 
            problem formulation, collects parameters, and executes optimization—all without writing a single line of code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/docs/conversational-optimization" 
              className="bg-cta-primary text-white hover:bg-cta-primary-hover px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-brand-primary/30 inline-flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Read the Docs
            </Link>
            <Link 
              href="/tutorials/conversational-optimization" 
              className="border-2 border-cta-secondary-border bg-cta-secondary-bg text-text-primary hover:bg-elevated-2 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              Follow the Tutorial
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Zero Technical Barrier
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-text-secondary">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>Works for anyone with an optimization problem—no coding experience needed</span>
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
          </div>
          <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Example Conversation</h3>
            <CodeBlock code={exampleConversation} language="text" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
            <div className="bg-brand-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">1. Describe Your Problem</h3>
            <p className="text-text-secondary">
              Tell our AI agent what you want to optimize in plain English. No technical jargon required.
            </p>
          </div>
          <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
            <div className="bg-brand-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">2. AI Guides You</h3>
            <p className="text-text-secondary">
              The agent asks clarifying questions, validates your inputs, and ensures all parameters are correct.
            </p>
          </div>
          <div className="bg-elevated border border-elevated-3 rounded-xl p-6">
            <div className="bg-brand-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">3. Get Results</h3>
            <p className="text-text-secondary">
              Receive optimized solutions with full explanations—all without writing a single line of code.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-brand-primary/20 to-base border border-elevated-3 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Ready to optimize without code?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Start with our documentation or follow the interactive tutorial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/docs/conversational-optimization" 
              className="bg-cta-primary text-white hover:bg-cta-primary-hover px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-brand-primary/30 inline-flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Read the Docs
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/tutorials/conversational-optimization" 
              className="border-2 border-cta-secondary-border bg-cta-secondary-bg text-text-primary hover:bg-elevated-2 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              Try the Tutorial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

