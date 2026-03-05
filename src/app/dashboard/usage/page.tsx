'use client'

import { useState, useEffect } from 'react'
import { BarChart3, TrendingUp, Clock, Zap, DollarSign } from 'lucide-react'

export const dynamic = 'force-dynamic'

interface UsageStats {
  solvesThisMonth: number
  costThisMonthCents: number
  creditBalanceCents: number
  plan: 'free' | 'payg'
  freeTierLimit: number
}

function formatCents(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`
}

export default function UsagePage() {
  const [timeRange, setTimeRange] = useState('30d')
  const [stats, setStats] = useState<UsageStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsage() {
      try {
        const response = await fetch('/api/billing/subscription')
        if (response.ok) {
          setStats(await response.json())
        }
      } catch (error) {
        console.error('Failed to fetch usage:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchUsage()
  }, [])

  const solvesThisMonth = stats?.solvesThisMonth || 0
  const costThisMonthCents = stats?.costThisMonthCents || 0
  const creditBalanceCents = stats?.creditBalanceCents || 0
  const plan = stats?.plan || 'free'
  const freeTierLimit = stats?.freeTierLimit || 100

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Usage Analytics</h1>
          <p className="text-gray-400 mt-1">
            Monitor your solve usage and costs
          </p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-[#1a1f2e] border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary-500"
        >
          <option value="24h">Last 24 hours</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">Solves This Month</span>
            <div className="bg-blue-500/10 p-2 rounded-lg">
              <Zap className="h-5 w-5 text-blue-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">
            {loading ? '...' : solvesThisMonth.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500 mt-1">
            {plan === 'free' ? `of ${freeTierLimit} free` : 'pay-as-you-go'}
          </div>
        </div>

        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">Cost This Month</span>
            <div className="bg-green-500/10 p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">
            {loading ? '...' : formatCents(costThisMonthCents)}
          </div>
          <div className="text-sm text-gray-500 mt-1">from solve usage</div>
        </div>

        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">Credit Balance</span>
            <div className="bg-yellow-500/10 p-2 rounded-lg">
              <DollarSign className="h-5 w-5 text-yellow-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">
            {loading ? '...' : formatCents(creditBalanceCents)}
          </div>
          <div className="text-sm text-gray-500 mt-1">prepaid credits remaining</div>
        </div>

        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">Avg Cost/Solve</span>
            <div className="bg-purple-500/10 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-purple-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">
            {loading || solvesThisMonth === 0
              ? '$0.00'
              : formatCents(Math.round(costThisMonthCents / solvesThisMonth))}
          </div>
          <div className="text-sm text-gray-500 mt-1">this month</div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Solve Volume</h2>
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <BarChart3 className="h-12 w-12 text-gray-600 mb-4" />
          <p className="text-gray-400 mb-2">
            {solvesThisMonth === 0 ? 'No usage data yet' : 'Charts coming soon'}
          </p>
          <p className="text-sm text-gray-600">
            {solvesThisMonth === 0
              ? 'Make your first solve to see usage analytics here'
              : `${solvesThisMonth} solves this month — detailed charts are in development`}
          </p>
        </div>
      </div>

      {/* Complexity Breakdown */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Cost by Complexity</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Tier</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-400">Dimensions</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-400">Cost/Solve</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 text-white">Small</td>
                <td className="py-3 px-4 text-center text-gray-300">≤ 10</td>
                <td className="py-3 px-4 text-center text-primary-400 font-medium">$0.01</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 text-white">Medium</td>
                <td className="py-3 px-4 text-center text-gray-300">≤ 50</td>
                <td className="py-3 px-4 text-center text-primary-400 font-medium">$0.03</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 text-white">Large</td>
                <td className="py-3 px-4 text-center text-gray-300">≤ 100</td>
                <td className="py-3 px-4 text-center text-primary-400 font-medium">$0.05</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
