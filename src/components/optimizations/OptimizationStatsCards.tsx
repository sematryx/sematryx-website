'use client'

import { CheckCircle2, XCircle, Loader2, TrendingUp } from 'lucide-react'

interface OptimizationStatsCardsProps {
  stats: {
    total: number
    successful: number
    failed: number
    running: number
    avgExecutionTime: number | null
    avgEvaluations: number | null
  }
  loading?: boolean
}

export default function OptimizationStatsCards({
  stats,
  loading = false,
}: OptimizationStatsCardsProps) {
  const successRate =
    stats.total > 0
      ? ((stats.successful / stats.total) * 100).toFixed(1)
      : '0.0'

  const statCards = [
    {
      title: 'Total Optimizations',
      value: loading ? '—' : stats.total.toLocaleString(),
      subtitle: 'All time',
      icon: TrendingUp,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Successful',
      value: loading ? '—' : stats.successful.toLocaleString(),
      subtitle: `${successRate}% success rate`,
      icon: CheckCircle2,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Failed',
      value: loading ? '—' : stats.failed.toLocaleString(),
      subtitle: `${stats.total > 0 ? ((stats.failed / stats.total) * 100).toFixed(1) : '0.0'}% failure rate`,
      icon: XCircle,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
    },
    {
      title: 'Running',
      value: loading ? '—' : stats.running.toLocaleString(),
      subtitle: 'In progress',
      icon: Loader2,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
    },
  ]

  const metricCards = [
    {
      title: 'Avg Execution Time',
      value: loading
        ? '—'
        : stats.avgExecutionTime
        ? `${stats.avgExecutionTime.toFixed(2)}s`
        : 'N/A',
      subtitle: 'Average time per optimization',
    },
    {
      title: 'Avg Evaluations',
      value: loading
        ? '—'
        : stats.avgEvaluations
        ? Math.round(stats.avgEvaluations).toLocaleString()
        : 'N/A',
      subtitle: 'Average function evaluations',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <div
            key={stat.title}
            className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm font-medium">
                {stat.title}
              </span>
              <div className={`${stat.bgColor} p-2 rounded-lg`}>
                <stat.icon
                  className={`h-5 w-5 ${stat.color} ${stat.title === 'Running' ? 'animate-spin' : ''}`}
                />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500">{stat.subtitle}</div>
          </div>
        ))}
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metricCards.map((metric) => (
          <div
            key={metric.title}
            className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6"
          >
            <div className="text-gray-400 text-sm font-medium mb-2">
              {metric.title}
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {metric.value}
            </div>
            <div className="text-sm text-gray-500">{metric.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
