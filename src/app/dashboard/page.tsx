'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Key, Zap, TrendingUp, Clock, ArrowRight, Plus } from 'lucide-react'

// Force dynamic rendering to avoid static generation issues with Clerk
export const dynamic = 'force-dynamic'

interface DashboardStats {
  totalKeys: number
  activeKeys: number
  totalRequests: number
  lastRequest: string | null
}

export default function DashboardPage() {
  const { user, isLoaded } = useUser()
  const [stats, setStats] = useState<DashboardStats>({
    totalKeys: 0,
    activeKeys: 0,
    totalRequests: 0,
    lastRequest: null,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/dashboard/stats')
        if (response.ok) {
          const data = await response.json()
          setStats(data)
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      } finally {
        setLoading(false)
      }
    }

    if (isLoaded && user) {
      fetchStats()
    }
  }, [isLoaded, user])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  const statCards = [
    {
      title: 'API Keys',
      value: loading ? '—' : stats.activeKeys.toString(),
      subtitle: `${stats.totalKeys} total`,
      icon: Key,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Total Requests',
      value: loading ? '—' : stats.totalRequests.toLocaleString(),
      subtitle: 'All time',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Last Request',
      value: loading ? '—' : stats.lastRequest ? 'Recent' : 'Never',
      subtitle: stats.lastRequest || 'No requests yet',
      icon: Clock,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Welcome back{user?.firstName ? `, ${user.firstName}` : ''}
          </h1>
          <p className="text-gray-400 mt-1">
            Here's what's happening with your API
          </p>
        </div>
        <Link
          href="/dashboard/keys"
          className="hidden sm:flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors"
        >
          <Plus className="h-4 w-4" />
          New API Key
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat) => (
          <div
            key={stat.title}
            className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm font-medium">{stat.title}</span>
              <div className={`${stat.bgColor} p-2 rounded-lg`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.subtitle}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Getting Started */}
        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Getting Started</h2>
          <div className="space-y-3">
            <Link
              href="/dashboard/keys"
              className="flex items-center justify-between p-4 bg-[#242b3d] rounded-lg hover:bg-[#2d3548] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary-500/10 p-2 rounded-lg">
                  <Key className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Create your first API key</div>
                  <div className="text-sm text-gray-500">Generate a key to start making requests</div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
            </Link>
            <Link
              href="/docs/authentication"
              className="flex items-center justify-between p-4 bg-[#242b3d] rounded-lg hover:bg-[#2d3548] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Read the documentation</div>
                  <div className="text-sm text-gray-500">Learn how to integrate the API</div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
          {loading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          ) : stats.totalRequests === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-center">
              <Zap className="h-8 w-8 text-gray-600 mb-2" />
              <p className="text-gray-500">No activity yet</p>
              <p className="text-sm text-gray-600">Make your first API request to see activity here</p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-center text-gray-500 py-8">
                <p>Detailed activity coming soon</p>
                <Link href="/dashboard/usage" className="text-primary-400 hover:text-primary-300 text-sm">
                  View usage stats →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

