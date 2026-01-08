'use client'

import { useState } from 'react'
import Link from 'next/link'
import { OptimizationResult } from '@/lib/supabase'
import { CheckCircle2, XCircle, Clock, Loader2, Brain, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'

interface OptimizationResultsTableProps {
  results: OptimizationResult[]
  loading?: boolean
  onSort?: (column: string, direction: 'asc' | 'desc') => void
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export default function OptimizationResultsTable({
  results,
  loading = false,
  onSort,
  sortBy = 'created_at',
  sortOrder = 'desc',
}: OptimizationResultsTableProps) {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

  const handleSort = (column: string) => {
    if (!onSort) return
    
    if (sortBy === column) {
      // Toggle direction if same column
      onSort(column, sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      // New column, default to desc
      onSort(column, 'desc')
    }
  }

  const getStatusBadge = (status: string, success: boolean | null) => {
    switch (status) {
      case 'completed':
        return success ? (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
            <CheckCircle2 className="h-3 w-3" />
            Success
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
            <XCircle className="h-3 w-3" />
            Failed
          </span>
        )
      case 'running':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
            <Loader2 className="h-3 w-3 animate-spin" />
            Running
          </span>
        )
      case 'cancelled':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400 border border-gray-500/20">
            <XCircle className="h-3 w-3" />
            Cancelled
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400 border border-gray-500/20">
            {status}
          </span>
        )
    }
  }

  const formatValue = (value: number | null) => {
    if (value === null || value === undefined) return 'N/A'
    if (value === 0) return '0'
    if (Math.abs(value) < 0.01 || Math.abs(value) > 1000000) {
      return value.toExponential(3)
    }
    return value.toFixed(6)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  const SortIcon = ({ column }: { column: string }) => {
    if (sortBy !== column) {
      return <ArrowUpDown className="h-3 w-3 text-gray-500" />
    }
    return sortOrder === 'asc' ? (
      <ArrowUp className="h-3 w-3 text-primary-400" />
    ) : (
      <ArrowDown className="h-3 w-3 text-primary-400" />
    )
  }

  if (loading) {
    return (
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-12">
        <div className="flex flex-col items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary-400 mb-4" />
          <p className="text-gray-400">Loading optimizations...</p>
        </div>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-gray-500/10 p-4 rounded-full mb-4">
            <Clock className="h-8 w-8 text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">No optimizations yet</h3>
          <p className="text-gray-400 mb-4">
            Run your first optimization to see results here
          </p>
          <Link
            href="/docs"
            className="text-primary-400 hover:text-primary-300 text-sm font-medium"
          >
            View Documentation →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#242b3d] border-b border-gray-800">
            <tr>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <button
                  onClick={() => handleSort('problem_id')}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  Problem ID
                  <SortIcon column="problem_id" />
                </button>
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <button
                  onClick={() => handleSort('optimal_value')}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  Best Value
                  <SortIcon column="optimal_value" />
                </button>
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <button
                  onClick={() => handleSort('strategy_used')}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  Strategy
                  <SortIcon column="strategy_used" />
                </button>
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <button
                  onClick={() => handleSort('evaluations_used')}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  Evaluations
                  <SortIcon column="evaluations_used" />
                </button>
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Time
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Learning
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <button
                  onClick={() => handleSort('created_at')}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  Created
                  <SortIcon column="created_at" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {results.map((result) => (
              <tr
                key={result.id}
                className={`hover:bg-[#242b3d] transition-colors cursor-pointer ${
                  hoveredRow === result.id ? 'bg-[#242b3d]' : ''
                }`}
                onMouseEnter={() => setHoveredRow(result.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="py-3 px-4">
                  <Link
                    href={`/dashboard/optimizations/${result.operation_id}`}
                    className="text-primary-400 hover:text-primary-300 font-medium text-sm"
                  >
                    {result.problem_id || result.operation_id.slice(0, 12) + '...'}
                  </Link>
                </td>
                <td className="py-3 px-4 text-sm text-gray-300 font-mono">
                  {formatValue(result.optimal_value)}
                </td>
                <td className="py-3 px-4 text-sm text-gray-300">
                  {result.strategy_used || 'N/A'}
                </td>
                <td className="py-3 px-4 text-sm text-gray-300">
                  {result.evaluations_used?.toLocaleString() || 'N/A'}
                </td>
                <td className="py-3 px-4">
                  {getStatusBadge(result.status, result.success)}
                </td>
                <td className="py-3 px-4 text-sm text-gray-300">
                  {result.execution_time
                    ? `${result.execution_time.toFixed(2)}s`
                    : 'N/A'}
                </td>
                <td className="py-3 px-4">
                  {result.learning_applied ? (
                    <span className="inline-flex items-center gap-1 text-xs text-green-400">
                      <Brain className="h-3 w-3" />
                      Yes
                    </span>
                  ) : (
                    <span className="text-xs text-gray-500">No</span>
                  )}
                </td>
                <td className="py-3 px-4 text-sm text-gray-400">
                  {formatDate(result.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
