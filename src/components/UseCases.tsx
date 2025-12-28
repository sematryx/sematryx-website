import { BarChart3, Truck, Heart, Factory } from 'lucide-react'

export default function UseCases() {
  const useCases = [
    {
      title: "Portfolio Optimization",
      description: "Balance risk, return, and regulatory limits with explainable allocation decisions that satisfy compliance teams.",
      icon: BarChart3
    },
    {
      title: "Supply Chain & Logistics",
      description: "Route optimization, inventory allocation, and demand planning with real-world constraints like driver hours and weather.",
      icon: Truck
    },
    {
      title: "Healthcare Resource Allocation",
      description: "Staff scheduling, bed management, and treatment planning with patient safety constraints and audit requirements.",
      icon: Heart
    },
    {
      title: "Manufacturing & Operations",
      description: "Production scheduling, quality optimization, and maintenance planning across complex multi-site operations.",
      icon: Factory
    }
  ]

  return (
    <div className="py-20 md:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-wide mb-2">What You Can Solve</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Problems that need more than math
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl">
            When constraints are fuzzy, objectives conflict, or regulators want to know why—Sematryx delivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            return (
            <div key={index} className="bg-elevated p-8 rounded-xl border border-elevated-3 hover:border-elevated-4 hover:bg-elevated-2 transition-all duration-200 group cursor-default">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <IconComponent className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {useCase.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {useCase.description}
              </p>
            </div>
          )
          })}
        </div>
      </div>
    </div>
  )
}
