import React from 'react'

export default function ArchitecturePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:px-8 md:py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-200 mb-6">
          System Architecture
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed mb-4">
          Sematryx is built on a modular, service-oriented architecture designed for high-performance optimization, 
          explainability, and continuous learning.
        </p>
        <p className="text-sm text-gray-500">
          The Sematryx architecture is protected by multiple pending patents covering adaptive optimization, 
          temporal intelligence, knowledge systems, and explainability frameworks.
        </p>
      </div>

      <div className="space-y-16">
        
        {/* High Level Diagram */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">High-Level Overview</h2>
          <div className="bg-[#0a0d12] border border-gray-800 rounded-xl p-6 overflow-x-auto">
            <pre className="font-mono text-xs md:text-sm text-blue-300 leading-relaxed">
{`┌─────────────────────────────────────────────────────────────┐
│                      USER INTERFACES                         │
│  ┌─────────┐  ┌─────────┐  ┌───────────┐  ┌────────────┐  │
│  │   CLI   │  │   API   │  │ Dashboard │  │   SDK      │  │
│  └────┬────┘  └────┬────┘  └─────┬─────┘  └─────┬──────┘  │
└───────┼────────────┼──────────────┼──────────────┼─────────┘
        └────────────┴──────────────┴──────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    PLATFORM SERVICES                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ API Server │ Explainability │ Diagnostics │ Billing │  │
│  └──────────────────────┬───────────────────────────────┘  │
└─────────────────────────┼───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                  CORE OPTIMIZATION ENGINE                    │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐  │
│  │  Optimizers  │◄─┤   Strategies │◄─┤  Meta-Policy    │  │
│  │  - AEAO      │  │  - CMA-ES    │  │  Learning       │  │
│  │  - Async     │  │  - DE        │  └─────────────────┘  │
│  │  - Enhanced  │  │  - Bayesian  │                        │
│  └──────┬───────┘  └──────────────┘                        │
└─────────┼───────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────┐
│                    AI/ML INTELLIGENCE                        │
│  ┌────────────┐  ┌────────────┐  ┌───────────────────────┐ │
│  │   Visual   │  │   Neural   │  │  Learning System      │ │
│  │Intelligence│  │  Networks  │  │  - Cross-Problem      │ │
│  └────────────┘  └────────────┘  │  - Transfer Learning  │ │
│                                   └───────────────────────┘ │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│               KNOWLEDGE & MEMORY SYSTEMS                     │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐  │
│  │Vector Memory │  │Knowledge Graph│  │ Context Intel   │  │
│  │  (Qdrant)   │  │   (Neo4j)     │  │   & Temporal    │  │
│  └──────────────┘  └──────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </section>

        {/* Component Breakdown */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-8">Core Components</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Platform Services */}
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🔌</span>
                <h3 className="text-xl font-bold text-gray-200">Platform Services</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                The gateway to the Sematryx ecosystem, handling request validation, billing, and the translation of raw optimization results into human-readable explanations.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-blue-400">•</span> API Server & Routing</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Explainability Engine</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> System Diagnostics</li>
              </ul>
            </div>

            {/* Optimization Engine */}
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚙️</span>
                <h3 className="text-xl font-bold text-gray-200">Optimization Engine</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                The mathematical heart of the system. It uses a Meta-Policy learner to dynamically select the best strategy (CMA-ES, Differential Evolution, Bayesian) for the specific problem topology.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-blue-400">•</span> Multi-Strategy Support</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Meta-Policy Learning</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Asynchronous Execution</li>
              </ul>
            </div>

            {/* AI/ML Intelligence */}
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🤖</span>
                <h3 className="text-xl font-bold text-gray-200">AI/ML Intelligence</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Advanced neural networks that provide pattern recognition and transfer learning capabilities, allowing the system to apply insights from one domain to another.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-blue-400">•</span> Visual Intelligence</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Transfer Learning</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Cross-Problem Adaptation</li>
              </ul>
            </div>

            {/* Knowledge & Memory */}
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🧠</span>
                <h3 className="text-xl font-bold text-gray-200">Knowledge & Memory</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Long-term persistence layers that store optimization contexts and results. This "Autodidactic" memory allows Sematryx to get smarter over time.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-blue-400">•</span> Vector Memory (Qdrant)</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Knowledge Graph (Neo4j)</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Temporal Context</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

