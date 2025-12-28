import { Zap, FileText, Building2, TrendingUp } from 'lucide-react'

export default function Differentiators() {
  const differentiators = [
    {
      title: "One API Call",
      description: "Define your problem, set constraints, get an optimized solution. No infrastructure to manage.",
      icon: Zap
    },
    {
      title: "Full Explainability",
      description: "Every decision documented and traceable for audits and regulatory compliance.",
      icon: FileText
    },
    {
      title: "Compliance Built-In",
      description: "Domain libraries pre-configured for finance, healthcare, and other regulated industries.",
      icon: Building2
    },
    {
      title: "Gets Smarter",
      description: "Continuous learning means better results over time, automatically.",
      icon: TrendingUp
    }
  ]

  return (
    <div className="py-20 md:py-24 bg-base border-t border-elevated-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon
            return (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 mx-auto mb-6 bg-elevated border border-elevated-3 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-brand-primary/30 transition-all duration-300 shadow-lg shadow-black/20">
                <IconComponent className="w-7 h-7 text-brand-primary" />
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          )
          })}
        </div>
      </div>
    </div>
  )
}

