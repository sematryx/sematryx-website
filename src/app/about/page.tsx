import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Code, Database, Cloud, Brain, Users, Target, Rocket, CheckCircle, Linkedin, Bot } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Sematryx - Enterprise Optimization Platform',
  description: 'Learn about Sematryx, our mission to solve complex optimization problems, our team, and our technology infrastructure.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-bg-base to-bg-elevated border-b border-elevated-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              About Sematryx
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Building the next generation of optimization intelligence for enterprises that need more than traditional solvers can deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Business Description */}
      <section className="py-20 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
              What We Do
            </h2>
            
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Sematryx is an enterprise optimization platform that solves complex, multi-objective problems that break traditional optimization tools. We combine agentic AI, interpretable decision-making, and adaptive learning to deliver solutions with full audit trails for regulated industries.
              </p>
              
              <p>
                <strong className="text-text-primary">The Problems We Solve:</strong> Our platform handles optimization challenges where constraints are fuzzy, objectives conflict, or regulators require detailed explanations. This includes portfolio allocation in financial services, supply chain optimization under uncertainty, healthcare resource allocation with safety constraints, and manufacturing scheduling with real-world constraints.
              </p>
              
              <p>
                <strong className="text-text-primary">Our Target Customers:</strong> We serve three primary customer segments:
              </p>
              
              <div className="space-y-4">
                {/* Highlighted card for Agent Tool Customers */}
                <div className="bg-gradient-to-r from-brand-primary/20 to-brand-primary/5 border-2 border-brand-primary/30 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <strong className="text-text-primary text-lg">1. AI Agent & Tool Builders</strong>
                        <span className="text-xs px-2 py-0.5 rounded bg-brand-primary/30 text-brand-primary border border-brand-primary/40 font-semibold">
                          STRONG GROWTH
                        </span>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        Developers building AI agents, autonomous systems, and agentic tools that need optimization capabilities. Our <strong className="text-text-primary">MCP (Model Context Protocol) integration</strong> makes Sematryx a powerful optimization backend for AI agents, allowing them to solve complex resource allocation problems as part of their workflows. This is one of our <strong className="text-text-primary">strongest and fastest-growing customer segments</strong>.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="ml-4 space-y-4">
                  <div>
                    <strong className="text-text-primary">2. Enterprise Data & Operations Teams:</strong> Data science teams, operations managers, and technical leaders at mid-to-large enterprises in financial services, healthcare, manufacturing, supply chain, and energy sectors. These customers need optimization solutions that can handle complexity, provide explanations, and maintain compliance with industry regulations.
                  </div>
                  
                  <div>
                    <strong className="text-text-primary">3. Domain Experts & Business Users:</strong> Marketing managers, supply chain coordinators, portfolio managers, and other business professionals who need to solve optimization problems but may not have deep technical expertise. Our conversational optimization interface allows them to describe problems in natural language without writing code.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-elevated p-6 rounded-xl border border-elevated-3">
                <Target className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-2">Complex Problems</h3>
                <p className="text-text-secondary">Multi-objective optimization with fuzzy constraints and real-world uncertainty</p>
              </div>
              <div className="bg-elevated p-6 rounded-xl border border-elevated-3">
                <CheckCircle className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-2">Regulated Industries</h3>
                <p className="text-text-secondary">Full audit trails and explainable decisions for compliance requirements</p>
              </div>
              <div className="bg-elevated p-6 rounded-xl border border-elevated-3">
                <Brain className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-2">AI-Powered</h3>
                <p className="text-text-secondary">Agentic intelligence that learns and adapts from past optimizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-elevated border-t border-elevated-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center">
              Our Team
            </h2>
            <p className="text-xl text-text-secondary mb-12 text-center">
              Built by experienced data scientists and engineers with deep expertise in optimization, machine learning, and enterprise systems.
            </p>

            <div className="bg-base rounded-xl border border-elevated-3 p-8">
              <div className="flex items-start gap-6">
                {/* Profile Picture - Censored/Placeholder */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-primary/30 to-brand-primary/10 flex items-center justify-center border-2 border-brand-primary/20 overflow-hidden relative">
                    {/* Placeholder image with blur/censor effect */}
                    <div className="w-full h-full bg-gradient-to-br from-brand-primary/40 to-elevated-2 flex items-center justify-center">
                      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-black/30 rounded-full flex items-center justify-center border-2 border-white/20">
                          <Users className="w-8 h-8 text-white/40" />
                        </div>
                      </div>
                    </div>
                    {/* Censored overlay text */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <span className="text-xs text-white/30 font-mono">CENSORED</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    {/* Name - Censored/Placeholder */}
                    <div className="text-lg font-semibold text-text-primary mb-1">
                      Founder
                    </div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-text-primary">
                        Founder & Lead Engineer
                      </h3>
                      {/* LinkedIn Profile - Censored/Placeholder */}
                      <a 
                        href="https://www.linkedin.com/company/sematryx" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-text-tertiary hover:text-brand-primary transition-colors"
                        aria-label="LinkedIn Profile"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    Strategic data leader who has architected enterprise-scale analytics systems at Amazon, co-founded an AI fintech startup that secured institutional funding, and holds a Master's in Business Analytics and AI from NYU Stern. Deep expertise in real-world optimization, product management, and data engineering.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-xs font-medium bg-elevated-2 px-3 py-1 rounded-full text-text-tertiary border border-elevated-3">
                      Machine Learning
                    </span>
                    <span className="text-xs font-medium bg-elevated-2 px-3 py-1 rounded-full text-text-tertiary border border-elevated-3">
                      Data Engineering
                    </span>
                    <span className="text-xs font-medium bg-elevated-2 px-3 py-1 rounded-full text-text-tertiary border border-elevated-3">
                      Optimization
                    </span>
                    <span className="text-xs font-medium bg-elevated-2 px-3 py-1 rounded-full text-text-tertiary border border-elevated-3">
                      Product Management
                    </span>
                    <span className="text-xs font-medium bg-elevated-2 px-3 py-1 rounded-full text-text-tertiary border border-elevated-3">
                      Cloud Architecture
                    </span>
                    <span className="text-xs font-medium bg-elevated-2 px-3 py-1 rounded-full text-text-tertiary border border-elevated-3">
                      Enterprise Systems
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Development Stage */}
      <section className="py-20 bg-base border-t border-elevated-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
              Product Development
            </h2>
            
            <div className="space-y-6">
              <div className="bg-elevated p-8 rounded-xl border border-elevated-3">
                <div className="flex items-start gap-4 mb-4">
                  <Rocket className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">Current Stage: Public Beta</h3>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      Sematryx is currently in public beta, serving early customers with production-ready optimization capabilities. Our platform is fully operational with:
                    </p>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span>REST API and Python SDK for programmatic access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span>Conversational optimization interface for non-technical users</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span>Domain libraries for finance, healthcare, supply chain, and manufacturing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span>Full explainability and audit trail generation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span>MCP (Model Context Protocol) integration for AI agents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span>Pay-per-execution billing with free tier (10 optimizations/month)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-elevated p-8 rounded-xl border border-elevated-3">
                <h3 className="text-xl font-bold text-text-primary mb-3">Try It Now</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  You can start using Sematryx today. Sign up for a free API key and get 10 optimizations per month at no cost. No credit card required.
                </p>
                <Link 
                  href="/api-keys" 
                  className="inline-block bg-cta-primary text-white hover:bg-cta-primary-hover px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started Free →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Infrastructure */}
      <section className="py-20 bg-elevated border-t border-elevated-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
              Technology & Infrastructure
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-base p-6 rounded-xl border border-elevated-3">
                <Code className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-3">Core Technology</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Python-based optimization engine with meta-policy learning</li>
                  <li>• Multi-agent AI orchestration (CMA-ES, Bayesian, Differential Evolution)</li>
                  <li>• Vector memory (Qdrant) and knowledge graphs (Neo4j)</li>
                  <li>• Computer vision-based landscape analysis</li>
                  <li>• Explainability engine with natural language generation</li>
                </ul>
              </div>

              <div className="bg-base p-6 rounded-xl border border-elevated-3">
                <Cloud className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-3">Cloud Infrastructure</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Kubernetes-based deployment on Google Cloud Platform</li>
                  <li>• Auto-scaling API infrastructure</li>
                  <li>• Multi-region availability</li>
                  <li>• Enterprise-grade security and compliance</li>
                  <li>• Real-time monitoring and observability</li>
                </ul>
              </div>

              <div className="bg-base p-6 rounded-xl border border-elevated-3">
                <Database className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-3">Data & APIs</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• REST API with comprehensive documentation</li>
                  <li>• Python SDK with type hints</li>
                  <li>• JavaScript/TypeScript SDK</li>
                  <li>• MCP server for AI agent integration</li>
                  <li>• Webhook support for real-time notifications</li>
                </ul>
              </div>

              <div className="bg-base p-6 rounded-xl border border-elevated-3">
                <Brain className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-3">AI & Learning</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Adaptive learning from historical optimizations</li>
                  <li>• Transfer learning across problem domains</li>
                  <li>• LangChain integration for agentic workflows</li>
                  <li>• OpenAI and Anthropic API integrations</li>
                  <li>• Patent-pending optimization intelligence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-base border-t border-elevated-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Have questions about Sematryx or want to discuss your optimization needs?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@sematryx.com" 
              className="bg-cta-primary text-white hover:bg-cta-primary-hover px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
            <Link 
              href="/docs" 
              className="border-2 border-elevated-3 bg-elevated text-text-primary hover:bg-elevated-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
