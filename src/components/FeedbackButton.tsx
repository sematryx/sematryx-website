'use client'

import { useState, useEffect } from 'react'

export default function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [feedbackType, setFeedbackType] = useState<'feedback' | 'feature' | 'bug'>('feedback')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load minimized state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('feedback-button-minimized')
    if (saved !== null) {
      setIsMinimized(JSON.parse(saved))
    }
  }, [])

  // Save minimized state to localStorage
  const handleMinimize = () => {
    const newState = true
    setIsMinimized(newState)
    localStorage.setItem('feedback-button-minimized', JSON.stringify(newState))
  }

  // Restore feedback button
  const handleRestore = () => {
    setIsMinimized(false)
    localStorage.removeItem('feedback-button-minimized')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Get API base URL from environment or use default
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.sematryx.com'
      
      const response = await fetch(`${apiUrl}/feedback/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feedback_type: feedbackType,
          message: message.trim(),
          email: email.trim() || undefined,
        }),
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: 'Failed to submit feedback' }))
        throw new Error(errorData.detail || 'Failed to submit feedback')
      }
      
      setSubmitted(true)
      setIsSubmitting(false)
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setIsOpen(false)
        setMessage('')
        setEmail('')
        setFeedbackType('feedback')
      }, 3000)
    } catch (error) {
      console.error('Error submitting feedback:', error)
      setIsSubmitting(false)
      // Show error message to user
      alert(`Failed to submit feedback: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  // Show restore button if minimized
  if (isMinimized) {
    return (
      <button
        onClick={handleRestore}
        className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-gray-700/80 hover:bg-gray-600 text-gray-300 hover:text-white transition-all shadow-lg hover:scale-110"
        aria-label="Restore feedback button"
        title="Restore feedback"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    )
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-primary hover:bg-brand-primary/90 text-white px-4 py-3 rounded-full shadow-lg shadow-brand-primary/30 flex items-center gap-2 transition-all hover:scale-105 group"
          aria-label="Send feedback"
        >
          <span className="text-lg">💬</span>
          <span className="font-medium hidden sm:inline group-hover:inline">Feedback</span>
        </button>
        <button
          onClick={handleMinimize}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors shadow-lg"
          aria-label="Minimize feedback button"
          title="Minimize"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
      </div>

      {/* Modal Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal */}
          <div 
            className="bg-elevated border border-elevated-3 rounded-2xl w-full max-w-md shadow-2xl shadow-black/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-elevated-3">
              <h2 className="text-xl font-bold text-text-primary">Send Feedback</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-text-primary hover:text-white transition-colors text-2xl leading-none font-bold w-8 h-8 flex items-center justify-center rounded-lg hover:bg-elevated-3"
                aria-label="Close feedback modal"
              >
                ×
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <span className="text-5xl block mb-4">✅</span>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Thank you!</h3>
                <p className="text-text-primary">Your feedback helps us improve Sematryx.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                {/* Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">What type of feedback?</label>
                  <div className="flex gap-2">
                    {[
                      { value: 'feedback', label: '💭 General', color: 'brand-primary' },
                      { value: 'feature', label: '✨ Feature Request', color: 'accent-autodidactic' },
                      { value: 'bug', label: '🐛 Bug Report', color: 'red-500' },
                    ].map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFeedbackType(type.value as typeof feedbackType)}
                        className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          feedbackType === type.value
                            ? `bg-${type.color}/20 text-${type.color} border border-${type.color}/50`
                            : 'bg-base border border-elevated-3 text-text-primary hover:border-elevated-2'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="feedback-message" className="block text-sm font-medium text-text-primary mb-2">
                    Your message
                  </label>
                  <textarea
                    id="feedback-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    placeholder="Tell us what's on your mind..."
                    className="w-full bg-base border border-elevated-3 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary resize-none"
                  />
                </div>

                {/* Email (optional) */}
                <div>
                  <label htmlFor="feedback-email" className="block text-sm font-medium text-text-primary mb-2">
                    Email <span className="text-text-secondary">(optional, for follow-up)</span>
                  </label>
                  <input
                    type="email"
                    id="feedback-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-base border border-elevated-3 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!message.trim() || isSubmitting}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 disabled:bg-brand-primary/50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Feedback'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

