'use client'

import { useState } from 'react'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Store in localStorage for now - can be replaced with API endpoint (Mailchimp, ConvertKit, etc.)
      const existingEmails = JSON.parse(localStorage.getItem('sematryx_subscribers') || '[]')
      if (!existingEmails.includes(email)) {
        existingEmails.push(email)
        localStorage.setItem('sematryx_subscribers', JSON.stringify(existingEmails))
      }
      
      // TODO: Replace with actual API call
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      // })

      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="py-16 md:py-20 bg-gradient-to-b from-base to-elevated border-t border-elevated-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-3xl mb-4 block">📬</span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Get updates on new features, optimization tips, and product news. No spam, unsubscribe anytime.
          </p>

          {status === 'success' ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <span className="text-3xl block mb-2">✅</span>
              <p className="text-emerald-400 font-medium">You're on the list! We'll keep you posted.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="flex-1 bg-elevated border border-elevated-3 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary"
              />
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="bg-brand-primary hover:bg-brand-primary/90 disabled:bg-brand-primary/50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>
          )}

          <p className="text-sm text-text-tertiary mt-6">
            Join developers and optimization engineers building with Sematryx.
          </p>
        </div>
      </div>
    </div>
  )
}

