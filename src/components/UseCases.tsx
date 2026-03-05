import { Brain, CalendarClock, BarChart3, Cpu } from 'lucide-react'

export default function UseCases() {
  const useCases = [
    {
      title: "Hyperparameter Tuning",
      agentVerb: "AI agents use Sematryx to find optimal learning rates, batch sizes, and regularization — without hand-coding grid search or random sampling.",
      example: "lr=0.00312, dropout=0.18 → 2.3% better validation accuracy",
      icon: Brain,
      tag: "ML / Training"
    },
    {
      title: "Resource Allocation",
      agentVerb: "AI agents use Sematryx to distribute budgets, staff, inventory, or compute across competing objectives with hard constraints.",
      example: "Budget allocation across 8 channels → 23% higher ROI within cap",
      icon: BarChart3,
      tag: "Finance / Operations"
    },
    {
      title: "Scheduling & Routing",
      agentVerb: "AI agents use Sematryx to build conflict-free schedules and minimize routing cost across multi-variable constraint systems.",
      example: "Staff schedule across 40 shifts → 18% fewer overtime hours",
      icon: CalendarClock,
      tag: "Ops / Logistics"
    },
    {
      title: "Model & System Configuration",
      agentVerb: "AI agents use Sematryx to tune infrastructure configs, model serving parameters, and pipeline settings for throughput or cost.",
      example: "Replica count + batch size → 40% cost reduction at same latency",
      icon: Cpu,
      tag: "Infrastructure"
    }
  ]

  return (
    <div className="py-20 md:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-wide mb-2">Agent Use Cases</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            What agents solve with Sematryx
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl">
            When an AI agent hits a combinatorial or continuous optimization problem, it calls Sematryx. Here&apos;s what that looks like in practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            return (
              <div key={index} className="bg-elevated p-8 rounded-xl border border-elevated-3 hover:border-elevated-4 hover:bg-elevated-2 transition-all duration-200 group cursor-default">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="w-6 h-6 text-brand-primary" />
                  </div>
                  <span className="text-xs font-mono text-text-tertiary bg-elevated-2 border border-elevated-3 px-2 py-1 rounded-full">
                    {useCase.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {useCase.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {useCase.agentVerb}
                </p>
                <div className="bg-base border border-elevated-3 rounded-lg px-4 py-2.5">
                  <span className="font-mono text-xs text-emerald-400">{useCase.example}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
