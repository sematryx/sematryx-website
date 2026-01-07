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
          explainability, and continuous learning. The system uses a multi-agent "Council of Experts" approach to 
          intelligently select and execute optimization strategies.
        </p>
        <p className="text-sm text-gray-500">
          The Sematryx architecture is protected by multiple pending patents covering adaptive optimization, 
          temporal intelligence, knowledge systems, and explainability frameworks.
        </p>
      </div>

      <div className="space-y-16">
        
        {/* High-Level Flow */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">How Sematryx Works</h2>
          
          <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">The Optimization Flow</h3>
            <ol className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">1.</span>
                <span><strong className="text-gray-200">Problem Analysis:</strong> The system analyzes your optimization problem to understand its characteristics, constraints, and complexity.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">2.</span>
                <span><strong className="text-gray-200">Strategy Selection:</strong> Multi-agent intelligence evaluates multiple optimization strategies and selects the best approach through consensus-based decision making.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">3.</span>
                <span><strong className="text-gray-200">Tournament Validation:</strong> Candidate strategies compete in short, low-budget rounds to empirically prove performance before full execution.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">4.</span>
                <span><strong className="text-gray-200">Optimization Execution:</strong> The selected strategy runs with full computational resources to find the optimal solution.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">5.</span>
                <span><strong className="text-gray-200">Learning & Storage:</strong> Results are analyzed, explained, and stored in the knowledge system to improve future optimizations.</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Core Components */}
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
                The gateway layer that handles request validation, authentication, billing, and transforms 
                optimization results into human-readable explanations. This layer ensures security, scalability, 
                and provides the API interface for all client interactions.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-blue-400">•</span> API Gateway & Routing</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Authentication & Authorization</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Explainability Engine</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> System Diagnostics & Monitoring</li>
              </ul>
            </div>

            {/* Intelligence Layer */}
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🤖</span>
                <h3 className="text-xl font-bold text-gray-200">Intelligence Layer</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                The "Council of Experts" - a multi-agent system where specialized AI agents collaborate to analyze 
                problems, evaluate strategies, and reach consensus on the best optimization approach. This layer 
                provides the intelligence that makes Sematryx adaptive and self-improving.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-blue-400">•</span> Multi-Agent Coordinator</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Research & Validation Agents</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Consensus Engine</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Meta-Policy Learning</li>
              </ul>
            </div>

            {/* Optimization Engine */}
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚙️</span>
                <h3 className="text-xl font-bold text-gray-200">Optimization Engine</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                The mathematical core that executes optimization strategies. The engine maintains a library of 
                multiple optimization algorithms (evolutionary, Bayesian, gradient-based, and specialized methods) 
                and uses a tournament system to validate strategy performance before full execution.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-blue-400">•</span> Multi-Strategy Library</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Tournament System</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Asynchronous Execution</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Adaptive Strategy Selection</li>
              </ul>
            </div>

            {/* Knowledge & Memory */}
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🧠</span>
                <h3 className="text-xl font-bold text-gray-200">Knowledge & Memory</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Long-term persistence systems that enable the platform to learn from every optimization. This 
                "Adaptive Intelligence" allows Sematryx to recognize similar problems, recall successful strategies, 
                and improve performance over time through pattern recognition and relationship mapping.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-blue-400">•</span> Vector Memory (Problem Embeddings)</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Knowledge Graph (Relationships)</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Temporal Context Tracking</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Causal Discovery & Analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Optimization Strategies */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">Optimization Strategy Library</h2>
          
          <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 mb-6">
              Sematryx maintains a comprehensive library of optimization algorithms, each suited for different 
              problem types and characteristics. The system intelligently selects from these strategies based on 
              problem analysis and historical performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Evolutionary Strategies</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Differential Evolution</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> CMA-ES (Covariance Matrix Adaptation)</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Genetic Algorithms</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Bayesian Methods</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Gaussian Process Optimization</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Random Forest Bayesian</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Tree-structured Parzen Estimators</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Global Optimization</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Dual Annealing</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Simplicial Homology (SHGO)</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Quantum-Inspired Methods</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Specialized Methods</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Mixed-Integer Optimization</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Constraint-Handling Algorithms</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Domain-Specific Optimizers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Architectural Principles */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">Architectural Principles</h2>
          
          <div className="space-y-4">
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Modular & Service-Oriented</h3>
              <p className="text-gray-400 text-sm">
                Each component operates independently with well-defined interfaces, enabling scalability, 
                maintainability, and the ability to upgrade individual systems without affecting others.
              </p>
            </div>
            
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Intelligence-Driven Selection</h3>
              <p className="text-gray-400 text-sm">
                Rather than using a single algorithm, Sematryx uses multi-agent intelligence to analyze problems 
                and select the optimal strategy, often combining multiple approaches for best results.
              </p>
            </div>
            
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Continuous Learning</h3>
              <p className="text-gray-400 text-sm">
                Every optimization contributes to the system's knowledge base, enabling recognition of similar 
                problems and faster, better solutions over time through pattern recognition and strategy refinement.
              </p>
            </div>
            
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Explainability by Design</h3>
              <p className="text-gray-400 text-sm">
                Explainability is built into the architecture, not added as an afterthought. The system provides 
                natural language explanations, visual diagnostics, and decision lineage for regulatory compliance 
                and stakeholder understanding.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Characteristics */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">Performance Characteristics</h2>
          
          <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Cold Start (New Problems)</h3>
                <p className="text-gray-400 text-sm mb-3">
                  For novel or complex problems, the system uses the full multi-agent intelligence pipeline:
                </p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Problem analysis & characterization</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Multi-agent strategy evaluation</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Tournament validation</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Full optimization execution</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Hot Path (Recognized Problems)</h3>
                <p className="text-gray-400 text-sm mb-3">
                  For problems similar to those seen before, the system can bypass agent consensus:
                </p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Vector memory recognition</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Direct strategy recall</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Immediate execution</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> Sub-200ms latency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
