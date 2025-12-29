import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tutorials - Sematryx',
  description: 'Step-by-step guides to master Sematryx optimization. From basic problem setup to advanced domain-specific optimization.',
}

export default function TutorialsPage() {
  const tutorials = [
    {
      id: 'getting-started',
      title: 'Getting Started with Sematryx',
      description: 'Solve your first optimization problem and learn core concepts',
      difficulty: 'Beginner',
      duration: '15 min',
      category: 'Fundamentals'
    },
    {
      id: 'data-transformation',
      title: 'Problem Setup: Objectives & Constraints',
      description: 'Define objective functions, bounds, and constraints for complex optimization problems',
      difficulty: 'Intermediate',
      duration: '25 min',
      category: 'Problem Setup'
    },
    {
      id: 'ai-content-generation',
      title: 'Configuring Sematryx Intelligence',
      description: 'Master the 3 Core Pillars: Agentic, Interpretable, and Adaptive Intelligence',
      difficulty: 'Intermediate',
      duration: '30 min',
      category: 'Engine Configuration'
    },
    {
      id: 'monitoring-alerts',
      title: 'Understanding Optimization Results',
      description: 'Interpret results, explanations, convergence metrics, and audit trails',
      difficulty: 'Intermediate',
      duration: '20 min',
      category: 'Results Analysis'
    },
    {
      id: 'enterprise-workflows',
      title: 'Domain-Specific Optimization',
      description: 'Use specialized libraries for finance, healthcare, supply chain, and manufacturing',
      difficulty: 'Advanced',
      duration: '45 min',
      category: 'Domain Libraries'
    },
    {
      id: 'webhook-automation',
      title: 'Advanced Optimization Strategies',
      description: 'Multi-strategy optimization, Private Learning Store, and performance tuning',
      difficulty: 'Advanced',
      duration: '40 min',
      category: 'Advanced'
    },
    {
      id: 'mcp-agent-demo',
      title: 'MCP Agent Demo',
      description: 'See how AI agents use MCP to solve complex optimization problems they would otherwise struggle with',
      difficulty: 'Intermediate',
      duration: '15 min',
      category: 'Agent Integration'
    },
    {
      id: 'conversational-optimization',
      title: 'Conversational Optimization',
      description: 'Create optimization problems through natural language conversation with an AI agent',
      difficulty: 'Beginner',
      duration: '20 min',
      category: 'Problem Setup'
    }
  ]

  const getDifficultyStyles = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
      case 'Intermediate':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30'
      case 'Advanced':
        return 'bg-rose-500/15 text-rose-400 border-rose-500/30'
      default:
        return 'bg-elevated-3 text-text-secondary border-elevated-3'
    }
  }

  return (
    <div className="bg-base min-h-screen">
      <div className="bg-gradient-to-b from-base to-elevated pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-primary uppercase tracking-wide mb-3">Learn by Doing</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Tutorials
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Step-by-step guides to master Sematryx optimization. 
              From your first optimization to advanced domain-specific solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <Link
                key={tutorial.id}
                href={`/tutorials/${tutorial.id}`}
                className="bg-elevated rounded-xl hover:bg-elevated-2 transition-all duration-200 p-6 border border-elevated-3 hover:border-brand-primary/50 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
                    {tutorial.category}
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getDifficultyStyles(tutorial.difficulty)}`}>
                    {tutorial.difficulty}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-brand-primary transition-colors">
                  {tutorial.title}
                </h3>
                
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center text-xs text-text-tertiary">
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {tutorial.duration}
                </div>
              </Link>
            ))}
          </div>

          {/* Jupyter Notebooks Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                📓 Interactive Jupyter Notebooks
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Run these notebooks locally or in Google Colab. Perfect for hands-on learning with the Sematryx SDK.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <a
                href="https://github.com/sematryx/sematryx-api/blob/master/notebooks/tutorials/01_sematryx_quick_start.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-elevated rounded-xl p-6 border border-elevated-3 hover:border-brand-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🚀</span>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">Beginner</span>
                </div>
                <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors mb-2">
                  Quick Start
                </h3>
                <p className="text-sm text-text-secondary">
                  Your first optimization in 5 lines of code. Install, initialize, optimize.
                </p>
              </a>
              
              <a
                href="https://github.com/sematryx/sematryx-api/blob/master/notebooks/tutorials/02_portfolio_optimization.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-elevated rounded-xl p-6 border border-elevated-3 hover:border-brand-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📊</span>
                  <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-1 rounded-full">Intermediate</span>
                </div>
                <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors mb-2">
                  Portfolio Optimization
                </h3>
                <p className="text-sm text-text-secondary">
                  Financial optimization with constraints, risk parity, and audit trails.
                </p>
              </a>
              
              <a
                href="https://github.com/sematryx/sematryx-api/blob/master/notebooks/tutorials/03_domain_examples.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-elevated rounded-xl p-6 border border-elevated-3 hover:border-brand-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏭</span>
                  <span className="text-xs font-medium text-rose-400 bg-rose-400/10 px-2 py-1 rounded-full">Advanced</span>
                </div>
                <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors mb-2">
                  Domain Examples
                </h3>
                <p className="text-sm text-text-secondary">
                  Healthcare, supply chain, marketing, and ML hyperparameter tuning.
                </p>
              </a>
              
              <a
                href="https://github.com/sematryx/sematryx-api/blob/master/notebooks/tutorials/04_mcp_agent_demo.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-elevated rounded-xl p-6 border border-elevated-3 hover:border-brand-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🤖</span>
                  <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-1 rounded-full">Intermediate</span>
                </div>
                <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors mb-2">
                  MCP Agent Demo
                </h3>
                <p className="text-sm text-text-secondary">
                  See how AI agents use MCP to solve complex optimization problems.
                </p>
              </a>
              
              <a
                href="https://github.com/sematryx/sematryx-api/blob/master/notebooks/tutorials/05_conversational_optimization.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-elevated rounded-xl p-6 border border-elevated-3 hover:border-brand-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💬</span>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">Beginner</span>
                </div>
                <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors mb-2">
                  Conversational Optimization
                </h3>
                <p className="text-sm text-text-secondary">
                  Create optimization problems through natural language conversation with an AI agent.
                </p>
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-elevated rounded-xl p-8 max-w-2xl mx-auto border border-elevated-3">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                New to Optimization?
              </h2>
              <p className="text-text-secondary mb-6">
                Start with our Getting Started tutorial to understand the basics, 
                then explore the documentation for API reference and advanced concepts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tutorials/getting-started"
                  className="bg-cta-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-cta-primary-hover transition-colors"
                >
                  Start Tutorial →
                </Link>
                <Link
                  href="/docs"
                  className="border border-elevated-3 text-text-primary px-6 py-3 rounded-lg font-semibold hover:bg-elevated-2 transition-colors"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
