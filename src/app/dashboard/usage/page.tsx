'use client'

import { useState } from 'react'
import { BarChart3, TrendingUp, Clock, Zap } from 'lucide-react'

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic'

export default function UsagePage() {
  const [timeRange, setTimeRange] = useState('7d')

  // Placeholder data - will be populated from actual usage tracking
  const usageData = {
    totalRequests: 0,
    avgResponseTime: 0,
    successRate: 100,
    peakHour: 'N/A',
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Usage Analytics</h1>
          <p className="text-gray-400 mt-1">
            Monitor your API usage and performance
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
            <span className="text-gray-400 text-sm font-medium">Total Requests</span>
            <div className="bg-blue-500/10 p-2 rounded-lg">
              <Zap className="h-5 w-5 text-blue-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">{usageData.totalRequests.toLocaleString()}</div>
          <div className="text-sm text-gray-500 mt-1">requests in selected period</div>
        </div>

        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">Avg Response Time</span>
            <div className="bg-green-500/10 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-green-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">{usageData.avgResponseTime}ms</div>
          <div className="text-sm text-gray-500 mt-1">average latency</div>
        </div>

        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">Success Rate</span>
            <div className="bg-purple-500/10 p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-purple-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">{usageData.successRate}%</div>
          <div className="text-sm text-gray-500 mt-1">successful requests</div>
        </div>

        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">Peak Hour</span>
            <div className="bg-orange-500/10 p-2 rounded-lg">
              <BarChart3 className="h-5 w-5 text-orange-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">{usageData.peakHour}</div>
          <div className="text-sm text-gray-500 mt-1">highest traffic</div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Request Volume</h2>
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <BarChart3 className="h-12 w-12 text-gray-600 mb-4" />
          <p className="text-gray-400 mb-2">No usage data yet</p>
          <p className="text-sm text-gray-600">
            Make your first API request to see usage analytics here
          </p>
        </div>
      </div>

      {/* Endpoint Breakdown */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Endpoint Usage</h2>
        <div className="flex flex-col items-center justify-center h-32 text-center">
          <p className="text-gray-500">
            Endpoint-level analytics coming soon
          </p>
        </div>
      </div>
    </div>
  )
}

