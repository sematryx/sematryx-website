import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-bg-base to-bg-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Agentic Expository Autodidactic
            <br className="hidden sm:block" />
            Optimizer
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-6 max-w-3xl mx-auto">
            The world's most advanced optimization framework. Where traditional optimizers solve mathematical problems, <span className="text-brand-primary">AEAO</span> solves enterprise problems with AI-powered intelligence, compliance, and continuous learning.
          </p>
          {/* The AEAO Tetrad - Simplified */}
          <div className="flex flex-wrap justify-center gap-3 mb-4 text-sm md:text-base">
            <span className="bg-elevated text-text-primary px-4 py-2 rounded-full font-medium border border-elevated-3">
              🤖 Agentic
            </span>
            <span className="bg-elevated text-text-primary px-4 py-2 rounded-full font-medium border border-elevated-3">
              📖 Expository
            </span>
            <span className="bg-elevated text-text-primary px-4 py-2 rounded-full font-medium border border-elevated-3">
              🧠 Autodidactic
            </span>
            <span className="bg-elevated text-text-primary px-4 py-2 rounded-full font-medium border border-elevated-3">
              🏗️ Domain Libraries
            </span>
          </div>
          {/* Key capabilities */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 text-xs md:text-sm">
            <span className="bg-elevated text-text-secondary px-3 py-1.5 rounded-full border border-elevated-3">
              Multi-Agent Coordination
            </span>
            <span className="bg-elevated text-text-secondary px-3 py-1.5 rounded-full border border-elevated-3">
              Full Explainability
            </span>
            <span className="bg-elevated text-text-secondary px-3 py-1.5 rounded-full border border-elevated-3">
              Continuous Learning
            </span>
            <span className="bg-elevated text-text-secondary px-3 py-1.5 rounded-full border border-elevated-3">
              13+ Industry Verticals
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/api-keys" 
              className="bg-cta-primary text-white hover:bg-cta-primary-hover px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg shadow-brand-primary/30"
            >
              Get Started Free
            </Link>
            <Link 
              href="/docs" 
              className="border-2 border-cta-secondary-border bg-cta-secondary-bg text-text-primary hover:bg-elevated-2 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}