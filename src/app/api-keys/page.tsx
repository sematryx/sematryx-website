'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { pricingPlans } from '@/lib/stripe'

export default function ApiKeysPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleGetApiKey = async () => {
    if (!email) {
      alert('Please enter your email address')
      return
    }
    // For free API key generation, redirect to success page
    window.location.href = `/success?email=${encodeURIComponent(email)}`
  }

  const handleSubscribe = async (planId: string) => {
    if (!email) {
      alert('Please enter your email address')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          email,
        }),
      })

      const { url } = await response.json()
      
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      <Header />
      
      <div className="bg-gradient-to-br from-primary-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your API Key
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start optimizing with AEAO today. Choose the plan that fits your optimization needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'border-2 border-primary-500' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {typeof plan.price === 'number' ? (
                      <>
                        ${plan.price}
                        <span className="text-lg text-gray-500 font-normal">/free</span>
                      </>
                    ) : (
                      plan.price
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => plan.id === 'free' ? handleGetApiKey() : handleSubscribe(plan.id)}
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : plan.id === 'free'
                      ? 'bg-primary-100 text-primary-600 hover:bg-primary-200'
                      : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
                  }`}
                >
                  {plan.id === 'free' ? 'Get API Key' : 'Setup Billing'}
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Enter your email to continue</h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}