'use client'

import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Key, Zap, Shield, ArrowRight } from 'lucide-react'

export default function ApiKeysPage() {
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    // If user is already signed in, redirect to dashboard
    if (isLoaded && isSignedIn) {
      router.push('/dashboard/keys')
    }
  }, [isLoaded, isSignedIn, router])

  // Show loading while checking auth
  if (!isLoaded) {
    return (
      <main>
        <Header />
        <div className="bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />
      
      <div className="bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/10 rounded-2xl mb-6">
              <Key className="h-8 w-8 text-primary-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Your API Key
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Create an account to access the <span className="text-primary-400">Sematryx</span> API.
              Manage multiple keys, track usage, and more.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6 text-center">
              <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Key className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Multiple Keys</h3>
              <p className="text-gray-500 text-sm">
                Create separate keys for development, staging, and production
              </p>
            </div>
            <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6 text-center">
              <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Usage Analytics</h3>
              <p className="text-gray-500 text-sm">
                Track API calls, monitor performance, and optimize usage
              </p>
            </div>
            <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-6 text-center">
              <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Secure Access</h3>
              <p className="text-gray-500 text-sm">
                Revoke keys instantly, rotate credentials safely
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="bg-[#1a1f2e] rounded-2xl border border-gray-800 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-400 mb-8">
              Create a free account to generate your API key instantly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors"
              >
                Create Free Account
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/sign-in"
                className="inline-flex items-center justify-center gap-2 border border-gray-700 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-[#242b3d] hover:text-white transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Pricing Link */}
          <div className="text-center mt-8">
            <p className="text-gray-500">
              Looking for pricing information?{' '}
              <Link href="/pricing" className="text-primary-400 hover:text-primary-300">
                View our plans →
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
