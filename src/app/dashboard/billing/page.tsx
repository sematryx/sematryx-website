'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CreditCard, Receipt, TrendingUp, Zap, Check, DollarSign } from 'lucide-react'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic'

interface BillingData {
  plan: 'free' | 'payg'
  creditBalanceCents: number
  hasPaymentMethod: boolean
  solvesThisMonth: number
  costThisMonthCents: number
  freeTierLimit: number
  subscription: {
    id: string
    endsAt: string
  } | null
  stripeCustomerId: string | null
}

function formatCents(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`
}

function BillingContent() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [portalLoading, setPortalLoading] = useState(false)
  const [creditPackLoading, setCreditPackLoading] = useState(false)
  const [data, setData] = useState<BillingData | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true)
      window.history.replaceState({}, '', '/dashboard/billing')
    }
    fetchBilling()
  }, [searchParams])

  async function fetchBilling() {
    try {
      const response = await fetch('/api/billing/subscription')
      if (response.ok) {
        setData(await response.json())
      }
    } catch (error) {
      console.error('Failed to fetch billing:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleBuyCreditPack = async () => {
    setCreditPackLoading(true)
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'credit_pack' }),
      })
      const { url } = await response.json()
      if (url) window.location.href = url
    } catch (error) {
      console.error('Failed to create checkout:', error)
    } finally {
      setCreditPackLoading(false)
    }
  }

  const handleManageBilling = async () => {
    setPortalLoading(true)
    try {
      const response = await fetch('/api/billing/portal', { method: 'POST' })
      const { url, message } = await response.json()
      if (url) window.location.href = url
      else if (message) alert(message)
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
  const creditBalanceCents = data?.creditBalanceCents || 0
  const hasPaymentMethod = data?.hasPaymentMethod || false
  const solvesThisMonth = data?.solvesThisMonth || 0
  const costThisMonthCents = data?.costThisMonthCents || 0
  const freeTierLimit = data?.freeTierLimit || 100

  return (
    <div className="space-y-8">
      {/* Success Banner */}
      {showSuccess && (
        <div className="bg-green-900/30 border border-green-700 rounded-xl p-4 flex items-center gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg">
            <Check className="h-5 w-5 text-green-400" />
          </div>
          <div className="flex-1">
            <p className="text-green-400 font-medium">Credits added!</p>
            <p className="text-green-400/70 text-sm">Your credit pack has been applied to your account.</p>
          </div>
          <button onClick={() => setShowSuccess(false)} className="text-green-400/70 hover:text-green-400">
            ✕
          </button>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Billing</h1>
        <p className="text-gray-400 mt-1">
          Manage your credits and payment methods
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="h-5 w-5 text-blue-400" />
            <span className="text-gray-400 text-sm">Solves This Month</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {solvesThisMonth.toLocaleString()}
            {plan === 'free' && <span className="text-gray-500 text-base font-normal"> / {freeTierLimit}</span>}
          </div>
          <div className="text-sm text-gray-500">
            {plan === 'free' ? 'free tier' : 'pay-as-you-go'}
          </div>
        </div>

        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="h-5 w-5 text-yellow-400" />
            <span className="text-gray-400 text-sm">Credit Balance</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {formatCents(creditBalanceCents)}
          </div>
          <div className="text-sm text-gray-500">prepaid credits</div>
        </div>

        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <Receipt className="h-5 w-5 text-green-400" />
            <span className="text-gray-400 text-sm">Cost This Month</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {formatCents(costThisMonthCents)}
          </div>
          <div className="text-sm text-gray-500">from usage</div>
        </div>

        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
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

      {/* Actions */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleBuyCreditPack}
            disabled={creditPackLoading}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors disabled:opacity-50"
          >
            {creditPackLoading ? 'Loading...' : 'Buy Credit Pack ($75 / 5,000 solves)'}
          </button>
          {data?.stripeCustomerId && (
            <button
              onClick={handleManageBilling}
              disabled={portalLoading}
              className="border border-gray-700 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-[#242b3d] transition-colors disabled:opacity-50"
            >
              {portalLoading ? 'Loading...' : 'Manage Payment Methods'}
            </button>
          )}
          <a
            href="/pricing"
            className="border border-gray-700 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-[#242b3d] transition-colors"
          >
            View Pricing
          </a>
        </div>
      </div>

      {/* Upgrade banner — only show for free users */}
      {plan === 'free' && !hasPaymentMethod && creditBalanceCents === 0 && (
        <div className="bg-gradient-to-r from-primary-900/50 to-purple-900/50 rounded-xl border border-primary-700/50 p-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary-500/20 p-3 rounded-lg">
              <Zap className="h-6 w-6 text-primary-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                Unlock Unlimited Solves
              </h3>
              <p className="text-gray-400 mb-4">
                Buy a credit pack or add a payment method to go beyond 100 free solves/month.
                Get access to Private Learning Store and priority support.
              </p>
              <button
                onClick={handleBuyCreditPack}
                disabled={creditPackLoading}
                className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors disabled:opacity-50"
              >
                {creditPackLoading ? 'Loading...' : 'Get Started with Credits'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Billing History placeholder */}
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
