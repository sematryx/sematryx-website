'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [useCases, setUseCases] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [useCaseOpen, setUseCaseOpen] = useState(false);
  const [featureOpen, setFeatureOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const useCaseRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (useCaseRef.current && !useCaseRef.current.contains(e.target as Node)) setUseCaseOpen(false);
      if (featureRef.current && !featureRef.current.contains(e.target as Node)) setFeatureOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const toggle = (item: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          useCases,
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

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-white mb-4">You're on the waitlist!</h2>
          <p className="text-gray-300 mb-6">
            We'll notify you when early access is available.
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

            {/* Use case multi-select dropdown */}
            <div ref={useCaseRef} className="relative">
              <button
                type="button"
                onClick={() => { setUseCaseOpen(!useCaseOpen); setFeatureOpen(false); }}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
              >
                <span className={useCases.length ? 'text-white' : 'text-gray-400'}>
                  {useCases.length ? `${useCases.length} selected` : 'What would you optimize? (optional)'}
                </span>
                <svg className={`w-4 h-4 text-gray-400 transition-transform ${useCaseOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {useCaseOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-lg bg-slate-800 border border-white/20 shadow-xl max-h-60 overflow-y-auto">
                  {[
                    'Delivery routing',
                    'Workforce scheduling',
                    'Supply chain / inventory',
                    'ML hyperparameters',
                    'System configuration',
                    'Pricing / revenue optimization',
                    'Resource allocation',
                    'Engineering / design parameters',
                    'Energy efficiency',
                    'Other',
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useCases.includes(item)}
                        onChange={() => toggle(item, useCases, setUseCases)}
                        className="w-4 h-4 rounded border-white/30 bg-white/20 text-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-200">{item}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Feature interest multi-select dropdown */}
            <div ref={featureRef} className="relative">
              <button
                type="button"
                onClick={() => { setFeatureOpen(!featureOpen); setUseCaseOpen(false); }}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
              >
                <span className={features.length ? 'text-white' : 'text-gray-400'}>
                  {features.length ? `${features.length} selected` : 'Which features interest you? (optional)'}
                </span>
                <svg className={`w-4 h-4 text-gray-400 transition-transform ${featureOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {featureOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-lg bg-slate-800 border border-white/20 shadow-xl max-h-60 overflow-y-auto">
                  {[
                    'Describe problems in plain English (no math required)',
                    'Gets smarter with every problem you solve',
                    'Optimize multiple goals at once (cost vs speed, quality vs time)',
                    'See why each solution works (full explanation & audit trail)',
                    'Works with AI agents (ChatGPT, Claude, custom bots)',
                    'Picks the right algorithm automatically (no guessing)',
                    'Pay only for what you use (no subscription)',
                    'More accurate than standard optimization libraries',
                    'Visual problem landscape (see your optimization space)',
                    'Free tier: 100 solves per month',
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={features.includes(item)}
                        onChange={() => toggle(item, features, setFeatures)}
                        className="w-4 h-4 rounded border-white/30 bg-white/20 text-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-200">{item}</span>
                    </label>
                  ))}
                </div>
              )}
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
            Early access opening soon
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
