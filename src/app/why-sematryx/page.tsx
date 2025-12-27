import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Sematryx - Enterprise Optimization with Explainability',
  description: 'Traditional solvers break. Sematryx explains why it doesn\'t. Complex optimization with full audit trails for regulated industries.',
}

export default function WhySematryxPage() {
  // Streamlined enterprise features (removed "15 AI systems")
  const enterpriseFeatures = [
    {
      title: "Async Explainability",
      description: "Background-processed explanations minimize performance overhead. Natural language summaries, technical logs, and visualizations run asynchronously so optimization doesn't wait.",
      icon: "📖"
    },
    {
      title: "Enterprise Compliance",
      description: "Built-in regulatory compliance, safety constraints, and audit trails. Essential for financial services, healthcare, and manufacturing where regulations matter.",
      icon: "🛡️"
    },
    {
      title: "Domain Libraries",
      description: "Pre-built solutions for finance, healthcare, supply chain, manufacturing, and more—all production-ready with industry-specific constraints and best practices.",
      icon: "🏗️"
    },
    {
      title: "Visual Intelligence",
      description: "CV-based optimization landscape analysis detects multimodal landscapes, identifies local optima clusters, and informs which optimizer gets selected for your problem.",
      icon: "👁️"
    }
  ]

  // Tightened industry sections - advantage only, no problem lists
  const industries = [
    {
      industry: "Financial Services",
      icon: "💼",
      advantages: [
        "Regulatory compliance built-in (Basel III, MiFID II, Solvency II)",
        "Explainable decisions for audit trails",
        "Learning from historical market patterns"
      ]
    },
    {
      industry: "Manufacturing",
      icon: "🏭",
      advantages: [
        "Safety-first optimization with hard constraints",
        "Handles noisy sensor data and real-world uncertainty",
        "Continuous learning from production data"
      ]
    },
    {
      industry: "Supply Chain",
      icon: "🚚",
      advantages: [
        "Optimizes under uncertainty and changing conditions",
        "Multi-objective trade-off handling",
        "Learns from historical demand patterns"
      ]
    },
    {
      industry: "Healthcare",
      icon: "🏥",
      advantages: [
        "Patient safety constraints enforced",
        "Explainable decisions for review boards",
        "HIPAA-aware data handling"
      ]
    },
    {
      industry: "Energy & Utilities",
      icon: "⚡",
      advantages: [
        "Real-time grid adaptation",
        "Renewable intermittency handling",
        "Multi-objective: cost, reliability, sustainability"
      ]
    },
    {
      industry: "AI/ML Research",
      icon: "🔬",
      advantages: [
        "Cross-problem learning accelerates experiments",
        "Full explainability for publications",
        "Hyperparameter and architecture search"
      ]
    }
  ]

  // Streamlined comparison - 6 key rows only
  const comparisonRows = [
    {
      feature: "Problem Complexity",
      others: "Simple constraints, single objectives",
      sematryx: "Complex multi-objective with fuzzy constraints"
    },
    {
      feature: "Explainability",
      others: "Black box results",
      sematryx: "Full audit trails with decision rationale"
    },
    {
      feature: "Learning",
      others: "Static—starts fresh every time",
      sematryx: "Private Learning Store improves with every run"
    },
    {
      feature: "Visual Intelligence",
      others: "Mathematical analysis only",
      sematryx: "CV-based landscape analysis informs optimizer selection"
    },
    {
      feature: "Compliance",
      others: "Build it yourself",
      sematryx: "Built-in for regulated industries"
    },
    {
      feature: "Integration",
      others: "Manage multiple libraries",
      sematryx: "One API call, unified interface"
    }
  ]

  return (
    <main className="bg-base">
      <Header />
      
      {/* Hero Section - Outcome-focused */}
      <section className="bg-gradient-to-b from-base to-elevated pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Traditional solvers <span className="text-brand-primary">break</span>.
              <br />Sematryx explains why it doesn't.
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-10">
              When constraints are fuzzy, objectives conflict, or regulators ask "why"—Sematryx 
              delivers optimized solutions with full audit trails for regulated industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/api-keys" 
                className="bg-cta-primary text-white hover:bg-cta-primary-hover px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-brand-primary/20"
              >
                Get Started Free →
              </Link>
              <Link 
                href="/pricing" 
                className="border-2 border-elevated-3 bg-elevated text-text-primary hover:bg-elevated-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Private Learning Store - KEY DIFFERENTIATOR */}
      <section className="py-20 bg-elevated border-t border-elevated-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-brand-primary uppercase tracking-wide mb-3">Key Differentiator</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Your Optimization Knowledge, Owned by You
                <span className="block text-xs font-normal text-text-tertiary mt-2">Private Learning Store — Patent Pending</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Unlike generic optimizers that start from scratch every time, Sematryx learns from 
                your problems. The <span className="text-brand-primary font-semibold">Private Learning Store</span> ensures 
                your optimization patterns, domain knowledge, and performance insights stay private 
                to your organization—while accelerating every future optimization.
              </p>
              <ul className="space-y-4">
                {[
                  "Isolated learning environment per organization",
                  "Cross-problem knowledge transfer within your domain",
                  "Performance improves with every optimization you run",
                  "Your competitive insights never leave your store"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-primary mt-1">✓</span>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-base rounded-xl border border-elevated-3 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-elevated rounded-lg border border-elevated-3">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-2xl">🔒</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Private Store</h4>
                    <p className="text-sm text-text-secondary">Your data, your insights, your advantage</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-elevated rounded-lg border border-elevated-3">
                  <div className="w-12 h-12 rounded-lg bg-accent-autodidactic/10 flex items-center justify-center text-2xl">🧠</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Continuous Learning</h4>
                    <p className="text-sm text-text-secondary">Gets smarter with every run</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-elevated rounded-lg border border-elevated-3">
                  <div className="w-12 h-12 rounded-lg bg-accent-expository/10 flex items-center justify-center text-2xl">📊</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Cross-Problem Transfer</h4>
                    <p className="text-sm text-text-secondary">Portfolio insights inform supply chain decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Native Integration */}
      <section className="py-20 bg-base border-t border-elevated-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-elevated border border-elevated-3 rounded-xl overflow-hidden">
                <div className="px-4 py-3 bg-elevated-2 border-b border-elevated-3 flex items-center gap-2">
                  <span className="font-mono text-xs px-2 py-1 rounded bg-brand-primary/15 text-brand-primary">MCP</span>
                  <span className="font-mono text-sm text-text-secondary">Agent → Sematryx</span>
                </div>
                <div className="p-5 font-mono text-sm leading-relaxed text-text-secondary">
                  <div className="text-text-tertiary">{"// Your AI agent calls Sematryx"}</div>
                  <div><span className="text-accent-agentic">optimize</span>({`{`}</div>
                  <div>  <span className="text-sky-300">problem</span>: <span className="text-emerald-300">"portfolio_allocation"</span>,</div>
                  <div>  <span className="text-sky-300">constraints</span>: user_requirements,</div>
                  <div>  <span className="text-sky-300">explain</span>: <span className="text-violet-300">true</span></div>
                  <div>{`})`}</div>
                  <div className="mt-4 text-text-tertiary">{"// Returns solution + rationale"}</div>
                  <div><span className="text-sky-300">"rationale"</span>: <span className="text-emerald-300">"Balanced risk-adjusted</span></div>
                  <div><span className="text-emerald-300">  return while satisfying the 30%</span></div>
                  <div><span className="text-emerald-300">  maximum single-asset constraint..."</span></div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-accent-agentic uppercase tracking-wide mb-3">AI-Native</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Your Agents' Optimization Backend
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Your AI agents shouldn't struggle with complex optimization math. Sematryx works as a 
                tool your agents can call—send a problem, get back an optimized solution with full 
                explanation the agent can reason about and present to users.
              </p>
              <ul className="space-y-4">
                {[
                  "Claude, GPT, Cursor, and other AI tools can invoke Sematryx directly",
                  "Results include natural language rationale, not just numbers",
                  "Audit trails flow back to the orchestrating agent",
                  "Offload compute-heavy optimization to hosted infrastructure"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent-agentic mt-1">✓</span>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-text-tertiary">
                Available via MCP protocol, REST API, or Python SDK—however your agents prefer to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sematryx Intelligence - Core 3 Pillars */}
      <section className="py-20 bg-elevated border-t border-elevated-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-2">Under the Hood</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Sematryx Intelligence
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Agentic, Interpretable, Adaptive optimization—three core capabilities that make 
              Sematryx different from traditional tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-base p-6 rounded-xl border border-elevated-3 border-l-4 border-l-accent-agentic">
              <h3 className="text-lg font-bold text-accent-agentic mb-2">Agentic</h3>
              <p className="text-text-secondary text-sm">
                Meta-policy learning dynamically selects and coordinates solvers based on problem topology.
              </p>
            </div>
            <div className="bg-base p-6 rounded-xl border border-elevated-3 border-l-4 border-l-accent-expository">
              <h3 className="text-lg font-bold text-accent-expository mb-2">Interpretable</h3>
              <p className="text-text-secondary text-sm">
                Dedicated explainability engine generates audit trails, decision rationales, and diagnostics.
              </p>
            </div>
            <div className="bg-base p-6 rounded-xl border border-elevated-3 border-l-4 border-l-accent-autodidactic">
              <h3 className="text-lg font-bold text-accent-autodidactic mb-2">Adaptive</h3>
              <p className="text-text-secondary text-sm">
                Vector memory and knowledge graphs recall past optimizations to improve continuously.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/#features" className="text-brand-primary hover:underline font-medium">
              See how it works →
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Features - Streamlined */}
      <section className="py-20 bg-base border-t border-elevated-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Production-ready capabilities for regulated industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-elevated rounded-xl p-8 border border-elevated-3 border-l-4 border-l-brand-primary">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications - Tightened */}
      <section className="py-20 bg-elevated border-t border-elevated-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Built for Your Industry
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Domain-specific advantages, not generic optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, index) => (
              <div key={index} className="bg-base rounded-xl p-6 border border-elevated-3 hover:border-brand-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-lg font-bold text-text-primary">{item.industry}</h3>
                </div>
                <ul className="space-y-2">
                  {item.advantages.map((advantage, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-brand-primary mt-0.5">•</span>
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table - 6 Rows */}
      <section className="py-20 bg-base border-t border-elevated-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How Sematryx Compares
            </h2>
            <p className="text-xl text-text-secondary">
              Key differentiators vs. traditional optimization tools
            </p>
          </div>

          <div className="bg-elevated rounded-xl border border-elevated-3 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-elevated-3 bg-elevated-2">
                    <th className="text-left py-4 px-6 font-semibold text-text-primary">Feature</th>
                    <th className="text-left py-4 px-6 font-semibold text-text-secondary">Other Tools</th>
                    <th className="text-left py-4 px-6 font-semibold text-brand-primary">Sematryx</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-elevated-3">
                  {comparisonRows.map((row, index) => (
                    <tr key={index} className={index % 2 === 1 ? 'bg-elevated-2/50' : ''}>
                      <td className="py-4 px-6 font-medium text-text-primary">{row.feature}</td>
                      <td className="py-4 px-6 text-text-secondary">{row.others}</td>
                      <td className="py-4 px-6 text-brand-primary font-medium">{row.sematryx}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 bg-elevated border-t border-elevated-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Start free. Scale as you grow. Private Learning Store included in all paid plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/pricing" 
              className="border-2 border-elevated-3 bg-base text-text-primary hover:bg-elevated-2 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing →
            </Link>
            <Link 
              href="/api-keys" 
              className="bg-cta-primary text-white hover:bg-cta-primary-hover px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-brand-primary/20"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-12 bg-base border-t border-elevated-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-tertiary text-sm">
            Trusted by optimization teams at innovative companies
          </p>
          {/* Placeholder for future logos/testimonials */}
          <div className="mt-6 flex justify-center gap-12 opacity-30">
            <div className="w-24 h-8 bg-elevated-3 rounded"></div>
            <div className="w-24 h-8 bg-elevated-3 rounded"></div>
            <div className="w-24 h-8 bg-elevated-3 rounded"></div>
            <div className="w-24 h-8 bg-elevated-3 rounded"></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-primary/20 to-base border-t border-elevated-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Ready to optimize smarter?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Start with 10 free optimizations. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/api-keys" 
              className="bg-cta-primary text-white hover:bg-cta-primary-hover px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-brand-primary/20"
            >
              Get Started Free →
            </Link>
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
    </main>
  )
}
