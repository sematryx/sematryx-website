'use client';

import { useState } from 'react';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [useCases, setUseCases] = useState<string[]>([]);
  const [otherUseCase, setOtherUseCase] = useState('');
  const [features, setFeatures] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          useCases: useCases.includes('other')
            ? [...useCases.filter(u => u !== 'other'), otherUseCase].filter(Boolean)
            : useCases,
          features
        })
      });
      
      if (!response.ok) throw new Error('Submission failed');
      
      setSubmitted(true);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error('Waitlist error:', err);
    }
  };

  const toggleItem = (item: string, list: string[], setList: (v: string[]) => void) => {
    setList(
      list.includes(item)
        ? list.filter(i => i !== item)
        : [...list, item]
    );
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-white mb-4">You're on the waitlist!</h2>
          <p className="text-gray-300 mb-6">
            We'll notify you when early access opens in March 2026.
          </p>
          <a 
            href="/"
            className="inline-block text-blue-300 hover:text-blue-200 underline"
          >
            ← Back to home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <a href="/" className="inline-block">
            <h1 className="text-5xl font-bold text-white mb-3 tracking-tight hover:text-blue-200 transition-colors">
              Sematryx
            </h1>
          </a>
          <div className="text-blue-300 text-sm font-medium tracking-widest">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-white font-semibold mb-2">Conversational</h3>
              <p className="text-gray-400 text-sm">
                Describe your problem in plain English
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-white font-semibold mb-2">Built for AI Agents</h3>
              <p className="text-gray-400 text-sm">
                MCP server lets any AI agent optimize via hosted compute
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-white font-semibold mb-2">Auto-Tuned</h3>
              <p className="text-gray-400 text-sm">
                Identifies the right solver and hyperparameters
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
                Audit-ready explanations for every decision
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔌</div>
              <h3 className="text-white font-semibold mb-2">REST API & SDK</h3>
              <p className="text-gray-400 text-sm">
                Integrate optimization into any workflow
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
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">
                What would you optimize? (Select all that apply)
              </label>
              <div className="space-y-2">
                {[
                  { value: 'delivery-routing', label: 'Delivery routing' },
                  { value: 'workforce-scheduling', label: 'Workforce scheduling' },
                  { value: 'supply-chain', label: 'Supply chain / inventory' },
                  { value: 'ml-hyperparameters', label: 'ML hyperparameters' },
                  { value: 'system-configuration', label: 'System configuration' },
                  { value: 'pricing-revenue', label: 'Pricing / revenue optimization' },
                  { value: 'resource-allocation', label: 'Resource allocation' },
                  { value: 'engineering-design', label: 'Engineering / design parameters' },
                  { value: 'energy-efficiency', label: 'Energy efficiency' },
                  { value: 'other', label: 'Other (specify below)' },
                ].map(({ value, label }) => (
                  <label key={value} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={useCases.includes(value)}
                      onChange={() => toggleItem(value, useCases, setUseCases)}
                      className="mt-0.5 w-4 h-4 rounded border-white/30 bg-white/20 text-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {useCases.includes('other') && (
              <div>
                <input
                  type="text"
                  placeholder="What would you optimize?"
                  value={otherUseCase}
                  onChange={(e) => setOtherUseCase(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            <div>
              <label className="block text-white font-semibold mb-3">
                Which features appeal to you? (Select all that apply)
              </label>
              <div className="space-y-2">
                {[
                  'Conversational problem formulation',
                  'Transfer learning (gets smarter over time)',
                  '9-level explainability',
                  'Multi-objective optimization',
                  'AI agent integration (MCP)',
                  'Portfolio of 16+ solvers'
                ].map((feature) => (
                  <label key={feature} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={features.includes(feature)}
                      onChange={() => toggleItem(feature, features, setFeatures)}
                      className="mt-0.5 w-4 h-4 rounded border-white/30 bg-white/20 text-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
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
          <p>© 2026 Sematryx • Technology Patent Pending • <a href="/" className="hover:text-gray-400">Back to home</a></p>
        </div>
      </div>
    </main>
  );
}
