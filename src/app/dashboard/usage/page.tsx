'use client'

import { useState, useEffect } from 'react'
import { Zap, TrendingUp, DollarSign, Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

interface UsageData {
  billingPeriod: { start: string; end: string }
  account: {
    type: 'free' | 'payg'
    creditBalanceCents: number
    hasPaymentMethod: boolean
  }
  usage: {
    solvesThisPeriod: number
    totalCallsThisPeriod: number
    failedThisPeriod: number
    monthlyLimit: number | null
    remaining: number | null
    costThisPeriodCents: number
    costThisPeriodUsd: number
  }
  quotaStatus: 'ok' | 'nearing_limit' | 'exceeded'
  recentSolves: {
    timestamp: string
    tool: string
    status: 'success' | 'failure'
    costCents: number
    durationMs: number | null
    expression: string | null
    dimensions: number | null
  }[]
}

function formatCents(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`
}

function formatDuration(ms: number | null): string {
  if (!ms) return '-'
  if (ms < 1000) return `${ms}ms`
  return `${(ms / 1000).toFixed(1)}s`
}

function formatTimestamp(ts: string): string {
  const d = new Date(ts)
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  if (diffMins < 1) return 'just now'
  if (diffMins < 60) return `${diffMins}m ago`
  const diffHours = Math.floor(diffMins / 60)
  if (diffHours < 24) return `${diffHours}h ago`
  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 7) return `${diffDays}d ago`
  return d.toLocaleDateString()
}

function QuotaBanner({ status, remaining, limit }: { status: string; remaining: number | null; limit: number | null }) {
  if (status === 'ok' || !limit) return null

  if (status === 'exceeded') {
    return (
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-red-300 font-medium">Free tier limit reached</p>
          <p className="text-red-400/80 text-sm mt-1">
            You've used all {limit} free solves this month.{' '}
            <Link href="/dashboard/billing" className="underline hover:text-red-300">
              Buy credits or upgrade
            </Link>{' '}
            to continue.
          </p>
        </div>
      </div>
    )
  }

  if (status === 'nearing_limit') {
    return (
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-yellow-300 font-medium">Nearing free tier limit</p>
          <p className="text-yellow-400/80 text-sm mt-1">
            {remaining} of {limit} free solves remaining.{' '}
            <Link href="/dashboard/billing" className="underline hover:text-yellow-300">
              Buy credits
            </Link>{' '}
            to avoid interruption.
          </p>
        </div>
      </div>
    )
  }

  return null
}

export default function UsagePage() {
  const [data, setData] = useState<UsageData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchUsage() {
      try {
        const response = await fetch('/api/usage/me')
        if (!response.ok) {
          const body = await response.json().catch(() => ({}))
          setError(body.error || `Error ${response.status}`)
          return
        }
        setData(await response.json())
      } catch (err) {
        setError('Failed to load usage data')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchUsage()
  }, [])

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Usage</h1>
          <p className="text-gray-400 mt-1">Loading...</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6 animate-pulse h-32" />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Usage</h1>
          <p className="text-red-400 mt-1">{error}</p>
        </div>
      </div>
    )
  }

  if (!data) return null

  const { account, usage, quotaStatus, recentSolves } = data
  const avgCost = usage.solvesThisPeriod > 0
    ? Math.round(usage.costThisPeriodCents / usage.solvesThisPeriod)
    : 0

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Usage</h1>
        <p className="text-gray-400 mt-1">
          {account.type === 'free' ? 'Free tier' : 'Pay-as-you-go'} &middot; Current billing period
        </p>
      </div>

      {/* Quota banner */}
      <QuotaBanner
        status={quotaStatus}
        remaining={usage.remaining}
        limit={usage.monthlyLimit}
      />

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
            {usage.solvesThisPeriod.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500 mt-1">
            {account.type === 'free'
              ? `of ${usage.monthlyLimit} free`
              : 'pay-as-you-go'}
          </div>
          {account.type === 'free' && usage.monthlyLimit && (
            <div className="mt-3">
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full ${
                    quotaStatus === 'exceeded' ? 'bg-red-500' :
                    quotaStatus === 'nearing_limit' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`}
                  style={{ width: `${Math.min(100, (usage.solvesThisPeriod / usage.monthlyLimit) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">Cost This Month</span>
            <div className="bg-green-500/10 p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">
            {formatCents(usage.costThisPeriodCents)}
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
            {formatCents(account.creditBalanceCents)}
          </div>
          <div className="text-sm text-gray-500 mt-1">
            {account.creditBalanceCents > 0 ? 'prepaid credits' : (
              <Link href="/dashboard/billing" className="text-primary-400 hover:text-primary-300">
                Buy credits
              </Link>
            )}
          </div>
        </div>

        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">Avg Cost/Solve</span>
            <div className="bg-purple-500/10 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-purple-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">
            {usage.solvesThisPeriod === 0 ? '$0.00' : formatCents(avgCost)}
          </div>
          <div className="text-sm text-gray-500 mt-1">
            {usage.failedThisPeriod > 0
              ? `${usage.failedThisPeriod} failed call${usage.failedThisPeriod > 1 ? 's' : ''}`
              : 'this month'}
          </div>
        </div>
      </div>

      {/* Recent Solves */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Recent Solves</h2>
        {recentSolves.length === 0 ? (
          <div className="text-center py-12">
            <Zap className="h-10 w-10 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400">No solves yet</p>
            <p className="text-sm text-gray-600 mt-1">
              Run your first optimization to see activity here
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">When</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Tool</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Expression</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-400">Dims</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-400">Status</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400">Duration</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400">Cost</th>
                </tr>
              </thead>
              <tbody>
                {recentSolves.map((solve, i) => (
                  <tr key={i} className="border-b border-gray-700/50 hover:bg-[#242b3d]/50">
                    <td className="py-3 px-4 text-sm text-gray-300">
                      {formatTimestamp(solve.timestamp)}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-300 font-mono">
                      {(solve.tool || '').replace('sematryx_', '')}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-400 max-w-[200px] truncate font-mono">
                      {solve.expression || '-'}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-300 text-center">
                      {solve.dimensions || '-'}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {solve.status === 'success' ? (
                        <span className="inline-flex items-center gap-1 text-xs text-green-400">
                          <CheckCircle className="h-3.5 w-3.5" /> OK
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs text-red-400">
                          <XCircle className="h-3.5 w-3.5" /> Fail
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-300 text-right">
                      {formatDuration(solve.durationMs)}
                    </td>
                    <td className="py-3 px-4 text-sm text-right font-medium text-primary-400">
                      {solve.costCents > 0 ? formatCents(solve.costCents) : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pricing Reference */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Pricing Reference</h2>
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
                <td className="py-3 px-4 text-center text-gray-300">&le; 10</td>
                <td className="py-3 px-4 text-center text-primary-400 font-medium">$0.01</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 text-white">Medium</td>
                <td className="py-3 px-4 text-center text-gray-300">&le; 50</td>
                <td className="py-3 px-4 text-center text-primary-400 font-medium">$0.03</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-3 px-4 text-white">Large</td>
                <td className="py-3 px-4 text-center text-gray-300">&le; 100</td>
                <td className="py-3 px-4 text-center text-primary-400 font-medium">$0.05</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
