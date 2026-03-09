'use client';

import { useState } from 'react';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [useCase, setUseCase] = useState('');
  const [otherUseCase, setOtherUseCase] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Wire to actual backend (Airtable, Google Sheets, or custom API)
    console.log('Waitlist signup:', { 
      email, 
      useCase: useCase === 'other' ? otherUseCase : useCase,
      timestamp: new Date().toISOString()
    });
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-white mb-4">You're on the waitlist!</h2>
          <p className="text-gray-300 mb-6">
            We'll notify you when early access opens in March 2026.
          </p>
          <a 
            href="/"
            className="inline-block text-purple-300 hover:text-purple-200 underline"
          >
            ← Back to home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <a href="/" className="inline-block">
            <h1 className="text-5xl font-bold text-white mb-3 tracking-tight hover:text-purple-200 transition-colors">
              Sematryx
            </h1>
          </a>
          <div className="text-purple-300 text-sm font-medium tracking-widest">
            AI-NATIVE OPTIMIZATION
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the Early Access Waitlist
            </h2>
            <p className="text-xl text-gray-300">
              Solve complex optimization problems through conversation. No math degree required.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-white font-semibold mb-2">Built for AI Agents</h3>
              <p className="text-gray-400 text-sm">
                Conversational formulation guides problem setup
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-white font-semibold mb-2">Gets Smarter</h3>
              <p className="text-gray-400 text-sm">
                Transfer learning improves over time
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-white font-semibold mb-2">Explainable</h3>
              <p className="text-gray-400 text-sm">
                Understand why solutions work
              </p>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <select
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:bg-slate-800"
              >
                <option value="">What would you optimize?</option>
                <option value="delivery-routing">Delivery routing</option>
                <option value="workforce-scheduling">Workforce scheduling</option>
                <option value="ml-hyperparameters">ML hyperparameters</option>
                <option value="system-configuration">System configuration</option>
                <option value="other">Other (specify below)</option>
              </select>
            </div>

            {useCase === 'other' && (
              <div>
                <input
                  type="text"
                  placeholder="What would you optimize?"
                  value={otherUseCase}
                  onChange={(e) => setOtherUseCase(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Join Waitlist
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Early access opening March 2026
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2026 Sematryx • <a href="/" className="hover:text-gray-400">Back to home</a></p>
        </div>
      </div>
    </main>
  );
}
