'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [useCase, setUseCase] = useState('');
  const [feature, setFeature] = useState('');
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
          useCase,
          feature
        })
      });
      
      if (!response.ok) throw new Error('Submission failed');
      
      setSubmitted(true);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error('Waitlist error:', err);
    }
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
          <Link 
            href="/"
            className="inline-block text-blue-300 hover:text-blue-200 underline"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Logo size="normal" />
          </Link>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            <div className="text-center">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="text-white font-semibold text-sm mb-1">Conversational</h3>
              <p className="text-gray-400 text-xs">
                Describe your problem in plain English
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="text-white font-semibold text-sm mb-1">Built for AI Agents</h3>
              <p className="text-gray-400 text-xs">
                MCP server lets any AI agent optimize via hosted compute
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-white font-semibold text-sm mb-1">Auto-Tuned</h3>
              <p className="text-gray-400 text-xs">
                Identifies the right solver and hyperparameters
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-white font-semibold text-sm mb-1">Gets Smarter</h3>
              <p className="text-gray-400 text-xs">
                Transfer learning improves over time
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-white font-semibold text-sm mb-1">Explainable</h3>
              <p className="text-gray-400 text-xs">
                Audit-ready explanations for every decision
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔌</div>
              <h3 className="text-white font-semibold text-sm mb-1">REST API & SDK</h3>
              <p className="text-gray-400 text-xs">
                Integrate optimization into any workflow
              </p>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <select
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 [&>option]:bg-slate-800"
              >
                <option value="">What would you optimize? (optional)</option>
                <option value="Delivery routing">Delivery routing</option>
                <option value="Workforce scheduling">Workforce scheduling</option>
                <option value="Supply chain / inventory">Supply chain / inventory</option>
                <option value="ML hyperparameters">ML hyperparameters</option>
                <option value="System configuration">System configuration</option>
                <option value="Pricing / revenue optimization">Pricing / revenue optimization</option>
                <option value="Resource allocation">Resource allocation</option>
                <option value="Engineering / design parameters">Engineering / design parameters</option>
                <option value="Energy efficiency">Energy efficiency</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <select
                value={feature}
                onChange={(e) => setFeature(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 [&>option]:bg-slate-800"
              >
                <option value="">Which feature appeals most? (optional)</option>
                <option value="Conversational problem formulation">Conversational problem formulation</option>
                <option value="Transfer learning">Transfer learning (gets smarter over time)</option>
                <option value="Explainability">9-level explainability</option>
                <option value="Multi-objective optimization">Multi-objective optimization</option>
                <option value="AI agent integration (MCP)">AI agent integration (MCP)</option>
                <option value="Portfolio of 16+ solvers">Portfolio of 16+ solvers</option>
              </select>
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
          <p>© 2026 Sematryx • Technology Patent Pending • <Link href="/" className="hover:text-gray-400">Back to home</Link></p>
        </div>
      </div>
    </main>
  );
}
