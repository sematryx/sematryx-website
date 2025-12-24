'use client'

import { useState } from 'react'
import { CreditCard, Receipt, TrendingUp, Zap } from 'lucide-react'

export default function BillingPage() {
  const [loading] = useState(false)

  // Placeholder data - will connect to Stripe
  const billingData = {
    plan: 'Free',
    usage: 0,
    limit: 100,
    nextBillingDate: null,
    hasPaymentMethod: false,
  }

  const handleManageBilling = async () => {
    // Will redirect to Stripe Customer Portal
    try {
      const response = await fetch('/api/billing/portal', { method: 'POST' })
      const { url } = await response.json()
      if (url) window.location.href = url
    } catch (error) {
      console.error('Failed to open billing portal:', error)
    }
  }

  return (
    <div className="space-y-8">
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
          <span className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm font-medium">
            {billingData.plan}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#242b3d] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400 text-sm">Current Usage</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {billingData.usage} / {billingData.limit}
            </div>
            <div className="text-sm text-gray-500">requests this month</div>
          </div>

          <div className="bg-[#242b3d] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Receipt className="h-5 w-5 text-green-400" />
              <span className="text-gray-400 text-sm">Current Bill</span>
            </div>
            <div className="text-2xl font-bold text-white">$0.00</div>
            <div className="text-sm text-gray-500">due this cycle</div>
          </div>

          <div className="bg-[#242b3d] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <CreditCard className="h-5 w-5 text-purple-400" />
              <span className="text-gray-400 text-sm">Payment Method</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {billingData.hasPaymentMethod ? 'Active' : 'None'}
            </div>
            <div className="text-sm text-gray-500">
              {billingData.hasPaymentMethod ? 'card on file' : 'no card on file'}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleManageBilling}
            disabled={loading}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors disabled:opacity-50"
          >
            Manage Billing
          </button>
          <a
            href="/pricing"
            className="border border-gray-700 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-[#242b3d] transition-colors"
          >
            View Plans
          </a>
        </div>
      </div>

      {/* Add Payment Method Banner - only show if no payment method */}
      {!billingData.hasPaymentMethod && (
        <div className="bg-gradient-to-r from-primary-900/50 to-purple-900/50 rounded-xl border border-primary-700/50 p-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary-500/20 p-3 rounded-lg">
              <Zap className="h-6 w-6 text-primary-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                Add a Payment Method
              </h3>
              <p className="text-gray-400 mb-4">
                Add a card to continue using the API beyond the free tier. 
                You'll only be charged for what you use at $0.01 per request.
              </p>
              <button
                onClick={handleManageBilling}
                className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors"
              >
                Add Payment Method
              </button>
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
