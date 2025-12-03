'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const email = searchParams.get('email')
  const [apiKey, setApiKey] = useState('')

  useEffect(() => {
    // Generate a demo API key for display
    // In a real app, this would come from your backend after payment verification
    const generateApiKey = () => {
      const prefix = 'aeao_'
      const randomPart = Math.random().toString(36).substring(2, 15) + 
                        Math.random().toString(36).substring(2, 15)
      return prefix + randomPart
    }

    if (sessionId || email) {
      setApiKey(generateApiKey())
    }
  }, [sessionId, email])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey)
    alert('API key copied to clipboard!')
  }

  return (
    <main>
      <Header />
      
      <div className="bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-900/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 border border-green-700">
            <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to <span className="text-primary-400">AEAO</span>!
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Your payment was successful. Here's your API key to get started.
          </p>

          {apiKey && (
            <div className="bg-[#1a1f2e] rounded-lg border border-gray-700 p-6 mb-8">
              <h2 className="text-lg font-semibold text-white mb-4">Your API Key</h2>
              <div className="flex items-center bg-[#0f1419] rounded-lg p-4 border border-gray-700">
                <code className="flex-1 text-left font-mono text-sm text-gray-300 break-all">
                  {apiKey}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="ml-4 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-500 transition-colors"
                >
                  Copy
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Keep this key secure and don't share it publicly.
              </p>
            </div>
          )}

          <div className="space-y-4">
            <a
              href="/docs"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors mr-4"
            >
              View Documentation
            </a>
            <a
              href="/tutorials"
              className="inline-block border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-[#242b3d] hover:text-white transition-colors"
            >
              Start Tutorial
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}