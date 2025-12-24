'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CreditCard, Receipt, TrendingUp, Zap, Database, Check, HardDrive } from 'lucide-react'
import { Suspense } from 'react'

interface SubscriptionData {
  plan: 'free' | 'starter' | 'growth' | 'pro' | 'enterprise'
  limits: {
    optimizations: number
    apiCalls: number
    privateStorage: number
    privateAccess: number
    overageRate: {
      optimization: number
      privateAccess: number
      storage: number
    } | null
  }
  usage: {
    optimizations: number
    apiCalls: number
    privateStorageBytes: number
    privateAccessCount: number
  }
  subscription: {
    id: string
    endsAt: string
  } | null
  hasPaymentMethod: boolean
}

const planDisplayNames: Record<string, string> = {
  free: 'Free',
  starter: 'Starter',
  growth: 'Growth',
  pro: 'Pro',
  enterprise: 'Enterprise',
}

const planPrices: Record<string, string> = {
  free: '$0',
  starter: '$29/mo',
  growth: '$79/mo',
  pro: '$299/mo',
  enterprise: '$999+/mo',
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function BillingContent() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [portalLoading, setPortalLoading] = useState(false)
  const [data, setData] = useState<SubscriptionData | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // Check for success parameter
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true)
      // Remove the query param from URL
      window.history.replaceState({}, '', '/dashboard/billing')
    }

    fetchSubscription()
  }, [searchParams])

  async function fetchSubscription() {
    try {
      const response = await fetch('/api/billing/subscription')
      if (response.ok) {
        const subscriptionData = await response.json()
        setData(subscriptionData)
      }
    } catch (error) {
      console.error('Failed to fetch subscription:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleManageBilling = async () => {
    setPortalLoading(true)
    try {
      const response = await fetch('/api/billing/portal', { method: 'POST' })
      const { url, message } = await response.json()
      if (url) {
        window.location.href = url
      } else if (message) {
        alert(message)
      }
    } catch (error) {
      console.error('Failed to open billing portal:', error)
    } finally {
      setPortalLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  const plan = data?.plan || 'free'
  const limits = data?.limits
  const usage = data?.usage
  const subscription = data?.subscription
  const hasPaymentMethod = data?.hasPaymentMethod || false

  const storageUsedPercent = limits?.privateStorage 
    ? Math.min(100, ((usage?.privateStorageBytes || 0) / limits.privateStorage) * 100)
    : 0

  return (
    <div className="space-y-8">
      {/* Success Banner */}
      {showSuccess && (
        <div className="bg-green-900/30 border border-green-700 rounded-xl p-4 flex items-center gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg">
            <Check className="h-5 w-5 text-green-400" />
          </div>
          <div className="flex-1">
            <p className="text-green-400 font-medium">Subscription activated!</p>
            <p className="text-green-400/70 text-sm">Your plan has been upgraded successfully.</p>
          </div>
          <button 
            onClick={() => setShowSuccess(false)}
            className="text-green-400/70 hover:text-green-400"
          >
            ✕
          </button>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Billing</h1>
        <p className="text-gray-400 mt-1">
          Manage your subscription and payment methods
        </p>
      </div>

      {/* Current Plan */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Current Plan</h2>
          <div className="flex items-center gap-3">
            <span className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm font-medium">
              {planDisplayNames[plan]}
            </span>
            <span className="text-gray-400">{planPrices[plan]}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-[#242b3d] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400 text-sm">Optimizations</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {usage?.optimizations || 0} / {limits?.optimizations?.toLocaleString() || 0}
            </div>
            <div className="text-sm text-gray-500">this month</div>
          </div>

          <div className="bg-[#242b3d] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="h-5 w-5 text-green-400" />
              <span className="text-gray-400 text-sm">API Calls</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {usage?.apiCalls || 0} / {limits?.apiCalls?.toLocaleString() || 0}
            </div>
            <div className="text-sm text-gray-500">today</div>
          </div>

          <div className="bg-[#242b3d] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <HardDrive className="h-5 w-5 text-purple-400" />
              <span className="text-gray-400 text-sm">Private Storage</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {formatBytes(usage?.privateStorageBytes || 0)}
            </div>
            <div className="text-sm text-gray-500">
              of {formatBytes(limits?.privateStorage || 0)}
            </div>
            {limits?.privateStorage ? (
              <div className="mt-2 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-500 rounded-full transition-all"
                  style={{ width: `${storageUsedPercent}%` }}
                />
              </div>
            ) : null}
          </div>

          <div className="bg-[#242b3d] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <CreditCard className="h-5 w-5 text-orange-400" />
              <span className="text-gray-400 text-sm">Payment Method</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {hasPaymentMethod ? 'Active' : 'None'}
            </div>
            <div className="text-sm text-gray-500">
              {hasPaymentMethod ? 'card on file' : 'no card on file'}
            </div>
          </div>
        </div>

        {subscription && (
          <div className="mb-6 p-4 bg-[#242b3d] rounded-lg">
            <p className="text-gray-400 text-sm">
              Your subscription renews on <span className="text-white font-medium">{formatDate(subscription.endsAt)}</span>
            </p>
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={handleManageBilling}
            disabled={portalLoading}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors disabled:opacity-50"
          >
            {portalLoading ? 'Loading...' : 'Manage Billing'}
          </button>
          <a
            href="/pricing"
            className="border border-gray-700 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-[#242b3d] transition-colors"
          >
            {plan === 'free' ? 'Upgrade Plan' : 'Change Plan'}
          </a>
        </div>
      </div>

      {/* Private Learning Store Info - only for Growth+ plans */}
      {(plan === 'growth' || plan === 'pro' || plan === 'enterprise') && (
        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-500/10 p-2 rounded-lg">
              <Database className="h-5 w-5 text-purple-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Private Learning Store</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-medium mb-2">Storage</h3>
              <p className="text-gray-400 text-sm mb-2">
                {formatBytes(usage?.privateStorageBytes || 0)} used of {formatBytes(limits?.privateStorage || 0)} included
              </p>
              {limits?.overageRate?.storage ? (
                <p className="text-gray-500 text-xs">
                  Overage: ${limits.overageRate.storage.toFixed(2)}/GB per month
                </p>
              ) : (
                <p className="text-gray-500 text-xs">Additional storage included</p>
              )}
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Access Operations</h3>
              <p className="text-gray-400 text-sm mb-2">
                {(usage?.privateAccessCount || 0).toLocaleString()} used of {(limits?.privateAccess || 0).toLocaleString()}/month
              </p>
              {limits?.overageRate?.privateAccess ? (
                <p className="text-gray-500 text-xs">
                  Overage: ${limits.overageRate.privateAccess.toFixed(2)} per 1,000 operations
                </p>
              ) : null}
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-[#242b3d] rounded-lg">
            <p className="text-gray-500 text-sm">
              <strong className="text-gray-400">Note:</strong> Storage is billed monthly for as long as data is stored. 
              Access operations reset at the start of each billing cycle.
            </p>
          </div>
        </div>
      )}

      {/* Add Payment Method Banner - only show if no payment method and on free plan */}
      {!hasPaymentMethod && plan === 'free' && (
        <div className="bg-gradient-to-r from-primary-900/50 to-purple-900/50 rounded-xl border border-primary-700/50 p-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary-500/20 p-3 rounded-lg">
              <Zap className="h-6 w-6 text-primary-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                Upgrade to Unlock More
              </h3>
              <p className="text-gray-400 mb-4">
                Get access to Private Learning Store, higher limits, and priority support. 
                Plans start at $79/month.
              </p>
              <a
                href="/pricing"
                className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors"
              >
                View Plans
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Billing History */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Billing History</h2>
        <div className="flex flex-col items-center justify-center h-32 text-center">
          <Receipt className="h-8 w-8 text-gray-600 mb-2" />
          <p className="text-gray-500">No invoices yet</p>
          <p className="text-sm text-gray-600">
            Your billing history will appear here
          </p>
        </div>
      </div>
    </div>
  )
}

export default function BillingPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    }>
      <BillingContent />
    </Suspense>
  )
}

