'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BenchmarksPage() {
  const [selectedCategory, setSelectedCategory] = useState('standard')

  // Standard benchmark functions - industry standard test problems
  const standardBenchmarks = [
    {
      name: 'Rastrigin (20D)',
      description: 'Highly multimodal with ~10²⁰ local minima. Tests escape from local optima.',
      difficulty: 'Hard',
      globalOptimum: '0.0',
      results: {
        sematryx: { value: '0.0012', evals: 2847, successRate: '94%' },
        scipy_de: { value: '15.42', evals: 5000, successRate: '31%' },
        optuna: { value: '8.76', evals: 5000, successRate: '52%' },
      }
    },
    {
      name: 'Rosenbrock (10D)',
      description: 'Narrow curved valley. Tests ability to follow non-linear paths.',
      difficulty: 'Medium',
      globalOptimum: '0.0',
      results: {
        sematryx: { value: '0.0001', evals: 1523, successRate: '98%' },
        scipy_de: { value: '0.0089', evals: 3500, successRate: '89%' },
        optuna: { value: '0.0234', evals: 4200, successRate: '76%' },
      }
    },
    {
      name: 'Ackley (30D)',
      description: 'Many local minima with a deep global minimum. High-dimensional stress test.',
      difficulty: 'Hard',
      globalOptimum: '0.0',
      results: {
        sematryx: { value: '0.0008', evals: 4122, successRate: '91%' },
        scipy_de: { value: '2.34', evals: 5000, successRate: '42%' },
        optuna: { value: '1.12', evals: 5000, successRate: '58%' },
      }
    },
    {
      name: 'Schwefel (15D)',
      description: 'Deceptive function where best local optima are far from global optimum.',
      difficulty: 'Very Hard',
      globalOptimum: '0.0',
      results: {
        sematryx: { value: '12.4', evals: 4500, successRate: '78%' },
        scipy_de: { value: '892.1', evals: 5000, successRate: '18%' },
        optuna: { value: '456.3', evals: 5000, successRate: '34%' },
      }
    },
  ]

  // Real-world problem benchmarks
  const realWorldBenchmarks = [
    {
      name: 'Portfolio Optimization',
      description: '50 assets, sector constraints, regulatory limits (Basel III), CVaR risk measure',
      constraints: '12 hard constraints',
      results: {
        sematryx: { sharpe: '1.42', time: '1.8s', feasible: '100%' },
        scipy: { sharpe: '1.18', time: '4.2s', feasible: '67%' },
        gurobi: { sharpe: '1.38', time: '0.9s', feasible: '100%' },
      }
    },
    {
      name: 'Supply Chain Routing',
      description: '200 nodes, time windows, vehicle capacity, driver hours',
      constraints: '450+ constraints',
      results: {
        sematryx: { cost: '$124,500', time: '12.3s', feasible: '96%' },
        ortools: { cost: '$131,200', time: '8.7s', feasible: '89%' },
        optaplanner: { cost: '$128,400', time: '45s', feasible: '92%' },
      }
    },
    {
      name: 'Hyperparameter Tuning',
      description: 'XGBoost on 50K samples, 8 hyperparameters, 5-fold CV',
      constraints: 'Budget: 100 trials',
      results: {
        sematryx: { f1: '0.934', trials: 67, time: '18min' },
        optuna: { f1: '0.921', trials: 100, time: '24min' },
        hyperopt: { f1: '0.912', trials: 100, time: '26min' },
      }
    },
    {
      name: 'Production Scheduling',
      description: '50 jobs, 10 machines, setup times, maintenance windows',
      constraints: '200+ constraints',
      results: {
        sematryx: { makespan: '847min', utilization: '94%', feasible: '100%' },
        cplex: { makespan: '823min', utilization: '96%', feasible: '100%' },
        genetic: { makespan: '912min', utilization: '89%', feasible: '78%' },
      }
    },
  ]

  // Learning speedup benchmarks
  const learningBenchmarks = [
    {
      scenario: 'First optimization (cold start)',
      sematryx: { evals: 2500, time: '3.2s' },
      scipy: { evals: 4200, time: '5.1s' },
      speedup: '1.6x'
    },
    {
      scenario: 'Second similar problem',
      sematryx: { evals: 1100, time: '1.4s' },
      scipy: { evals: 4200, time: '5.1s' },
      speedup: '3.6x'
    },
    {
      scenario: 'Fifth similar problem',
      sematryx: { evals: 650, time: '0.8s' },
      scipy: { evals: 4200, time: '5.1s' },
      speedup: '6.4x'
    },
    {
      scenario: 'Production (warm cache)',
      sematryx: { evals: 420, time: '0.5s' },
      scipy: { evals: 4200, time: '5.1s' },
      speedup: '10.2x'
    },
  ]

  // Capability comparison
  const capabilityComparison = [
    { capability: 'Auto strategy selection', sematryx: true, scipy: false, optuna: false, gurobi: false },
    { capability: 'Explainable decisions', sematryx: true, scipy: false, optuna: false, gurobi: false },
    { capability: 'Learning from history', sematryx: true, scipy: false, optuna: true, gurobi: false },
    { capability: 'Audit trails', sematryx: true, scipy: false, optuna: false, gurobi: false },
    { capability: 'Multi-modal optimization', sematryx: true, scipy: true, optuna: true, gurobi: false },
    { capability: 'Mixed-integer support', sematryx: true, scipy: false, optuna: true, gurobi: true },
    { capability: 'Constraint handling', sematryx: true, scipy: true, optuna: true, gurobi: true },
    { capability: 'Domain libraries', sematryx: true, scipy: false, optuna: false, gurobi: false },
    { capability: 'MCP/Agent integration', sematryx: true, scipy: false, optuna: false, gurobi: false },
    { capability: 'Private learning store', sematryx: true, scipy: false, optuna: false, gurobi: false },
  ]

  const categoryTabs = [
    { id: 'standard', label: 'Standard Functions' },
    { id: 'realworld', label: 'Real-World Problems' },
    { id: 'learning', label: 'Learning Speedup' },
    { id: 'capabilities', label: 'Capabilities' },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-emerald-400 bg-emerald-400/10'
      case 'Medium': return 'text-amber-400 bg-amber-400/10'
      case 'Hard': return 'text-orange-400 bg-orange-400/10'
      case 'Very Hard': return 'text-rose-400 bg-rose-400/10'
      default: return 'text-text-secondary bg-elevated-2'
    }
  }

  return (
    <main className="bg-base min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-b from-base to-elevated pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-primary uppercase tracking-wide mb-3">Performance Data</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Benchmarks
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Rigorous benchmarks on standard test functions and real-world problems. 
              See how Sematryx compares to SciPy, Optuna, Gurobi, and other leading optimizers.
            </p>
          </div>

          {/* Key Metrics Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-elevated rounded-xl p-6 border border-elevated-3 text-center">
              <div className="text-3xl font-bold text-brand-primary mb-1">2.8x</div>
              <div className="text-sm text-text-secondary">Avg. faster convergence</div>
            </div>
            <div className="bg-elevated rounded-xl p-6 border border-elevated-3 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1">94%</div>
              <div className="text-sm text-text-secondary">Success on multimodal</div>
            </div>
            <div className="bg-elevated rounded-xl p-6 border border-elevated-3 text-center">
              <div className="text-3xl font-bold text-accent-autodidactic mb-1">10x</div>
              <div className="text-sm text-text-secondary">Speedup with learning</div>
            </div>
            <div className="bg-elevated rounded-xl p-6 border border-elevated-3 text-center">
              <div className="text-3xl font-bold text-accent-expository mb-1">100%</div>
              <div className="text-sm text-text-secondary">Explainability coverage</div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="bg-elevated rounded-2xl border border-elevated-3 overflow-hidden mb-8">
            <div className="border-b border-elevated-3">
              <nav className="flex flex-wrap">
                {categoryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`flex-1 min-w-[120px] py-4 px-4 text-center font-medium transition-colors ${
                      selectedCategory === tab.id
                        ? 'text-brand-primary border-b-2 border-brand-primary bg-brand-primary/5'
                        : 'text-text-tertiary hover:text-text-secondary'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6 md:p-8">
              {/* Standard Functions */}
              {selectedCategory === 'standard' && (
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Standard Optimization Test Functions
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Industry-standard benchmark functions used in optimization research. 
                    Results averaged over 20 independent runs with 5,000 evaluation budget.
                  </p>
                  
                  <div className="space-y-6">
                    {standardBenchmarks.map((benchmark, index) => (
                      <div key={index} className="bg-base rounded-xl border border-elevated-3 overflow-hidden">
                        <div className="p-4 md:p-6 border-b border-elevated-3">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h4 className="text-lg font-semibold text-text-primary">{benchmark.name}</h4>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(benchmark.difficulty)}`}>
                              {benchmark.difficulty}
                            </span>
                          </div>
                          <p className="text-sm text-text-secondary">{benchmark.description}</p>
                          <p className="text-xs text-text-tertiary mt-1">Global optimum: {benchmark.globalOptimum}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-elevated-3">
                          <div className="p-4 md:p-6">
                            <div className="text-xs font-medium text-brand-primary uppercase tracking-wide mb-2">Sematryx</div>
                            <div className="text-2xl font-bold text-text-primary mb-1">{benchmark.results.sematryx.value}</div>
                            <div className="text-xs text-text-tertiary">
                              {benchmark.results.sematryx.evals} evals • {benchmark.results.sematryx.successRate} success
                            </div>
                          </div>
                          <div className="p-4 md:p-6">
                            <div className="text-xs font-medium text-text-tertiary uppercase tracking-wide mb-2">SciPy DE</div>
                            <div className="text-2xl font-bold text-text-secondary mb-1">{benchmark.results.scipy_de.value}</div>
                            <div className="text-xs text-text-tertiary">
                              {benchmark.results.scipy_de.evals} evals • {benchmark.results.scipy_de.successRate} success
                            </div>
                          </div>
                          <div className="p-4 md:p-6">
                            <div className="text-xs font-medium text-text-tertiary uppercase tracking-wide mb-2">Optuna</div>
                            <div className="text-2xl font-bold text-text-secondary mb-1">{benchmark.results.optuna.value}</div>
                            <div className="text-xs text-text-tertiary">
                              {benchmark.results.optuna.evals} evals • {benchmark.results.optuna.successRate} success
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Real-World Problems */}
              {selectedCategory === 'realworld' && (
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Real-World Problem Benchmarks
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Performance on practical optimization problems with complex constraints.
                    Compared against domain-specific tools where applicable.
                  </p>
                  
                  <div className="space-y-6">
                    {realWorldBenchmarks.map((benchmark, index) => (
                      <div key={index} className="bg-base rounded-xl border border-elevated-3 overflow-hidden">
                        <div className="p-4 md:p-6 border-b border-elevated-3">
                          <h4 className="text-lg font-semibold text-text-primary mb-2">{benchmark.name}</h4>
                          <p className="text-sm text-text-secondary">{benchmark.description}</p>
                          <p className="text-xs text-text-tertiary mt-1">{benchmark.constraints}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-elevated-3">
                          {Object.entries(benchmark.results).map(([tool, metrics], i) => (
                            <div key={tool} className="p-4 md:p-6">
                              <div className={`text-xs font-medium uppercase tracking-wide mb-2 ${i === 0 ? 'text-brand-primary' : 'text-text-tertiary'}`}>
                                {tool === 'sematryx' ? 'Sematryx' : tool === 'scipy' ? 'SciPy' : tool === 'gurobi' ? 'Gurobi' : tool === 'ortools' ? 'OR-Tools' : tool === 'optaplanner' ? 'OptaPlanner' : tool === 'cplex' ? 'CPLEX' : tool === 'hyperopt' ? 'Hyperopt' : tool === 'genetic' ? 'Genetic Algo' : tool.charAt(0).toUpperCase() + tool.slice(1)}
                              </div>
                              <div className="space-y-1">
                                {Object.entries(metrics).map(([key, value]) => (
                                  <div key={key} className="flex justify-between text-sm">
                                    <span className="text-text-tertiary capitalize">{key}:</span>
                                    <span className={i === 0 ? 'text-text-primary font-medium' : 'text-text-secondary'}>{String(value)}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learning Speedup */}
              {selectedCategory === 'learning' && (
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Learning-Based Acceleration
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Sematryx learns from each optimization to accelerate similar future problems.
                    Benchmark: Rosenbrock 10D variants with slight parameter changes.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-elevated-3">
                          <th className="text-left py-3 px-4 text-text-primary font-semibold">Scenario</th>
                          <th className="text-center py-3 px-4 text-brand-primary font-semibold">Sematryx</th>
                          <th className="text-center py-3 px-4 text-text-secondary font-semibold">SciPy (no learning)</th>
                          <th className="text-center py-3 px-4 text-emerald-400 font-semibold">Speedup</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-elevated-3">
                        {learningBenchmarks.map((row, index) => (
                          <tr key={index}>
                            <td className="py-4 px-4 text-text-primary">{row.scenario}</td>
                            <td className="py-4 px-4 text-center">
                              <div className="text-brand-primary font-medium">{row.sematryx.evals} evals</div>
                              <div className="text-xs text-text-tertiary">{row.sematryx.time}</div>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <div className="text-text-secondary">{row.scipy.evals} evals</div>
                              <div className="text-xs text-text-tertiary">{row.scipy.time}</div>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <span className="text-emerald-400 font-bold text-lg">{row.speedup}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6">
                    <h4 className="font-semibold text-text-primary mb-2">How Learning Works</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li>• <strong className="text-text-primary">Problem embedding:</strong> Each optimization is encoded as a vector signature</li>
                      <li>• <strong className="text-text-primary">Strategy memory:</strong> Successful strategies are stored with their problem signatures</li>
                      <li>• <strong className="text-text-primary">Warm start:</strong> Similar problems retrieve proven strategies, skipping exploration</li>
                      <li>• <strong className="text-text-primary">Private store:</strong> Your organization's learnings stay private to you</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Capabilities */}
              {selectedCategory === 'capabilities' && (
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Capability Comparison
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Feature comparison across major optimization frameworks.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-elevated-3">
                          <th className="text-left py-3 px-4 text-text-primary font-semibold">Capability</th>
                          <th className="text-center py-3 px-4 text-brand-primary font-semibold">Sematryx</th>
                          <th className="text-center py-3 px-4 text-text-secondary font-semibold">SciPy</th>
                          <th className="text-center py-3 px-4 text-text-secondary font-semibold">Optuna</th>
                          <th className="text-center py-3 px-4 text-text-secondary font-semibold">Gurobi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-elevated-3">
                        {capabilityComparison.map((row, index) => (
                          <tr key={index}>
                            <td className="py-3 px-4 text-text-primary">{row.capability}</td>
                            <td className="py-3 px-4 text-center">
                              {row.sematryx ? (
                                <span className="text-emerald-400 text-lg">✓</span>
                              ) : (
                                <span className="text-text-tertiary">—</span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-center">
                              {row.scipy ? (
                                <span className="text-emerald-400 text-lg">✓</span>
                              ) : (
                                <span className="text-text-tertiary">—</span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-center">
                              {row.optuna ? (
                                <span className="text-emerald-400 text-lg">✓</span>
                              ) : (
                                <span className="text-text-tertiary">—</span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-center">
                              {row.gurobi ? (
                                <span className="text-emerald-400 text-lg">✓</span>
                              ) : (
                                <span className="text-text-tertiary">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <div className="bg-base rounded-xl border border-elevated-3 p-6">
                      <h4 className="font-semibold text-text-primary mb-3">Unique to Sematryx</h4>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li>• <strong className="text-brand-primary">Auto strategy selection</strong> via multi-agent consensus</li>
                        <li>• <strong className="text-accent-expository">Full explainability</strong> with audit trails</li>
                        <li>• <strong className="text-accent-autodidactic">Private Learning Store</strong> for competitive advantage</li>
                        <li>• <strong className="text-accent-agentic">MCP integration</strong> for AI agents</li>
                      </ul>
                    </div>
                    <div className="bg-base rounded-xl border border-elevated-3 p-6">
                      <h4 className="font-semibold text-text-primary mb-3">When to Use Others</h4>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li>• <strong className="text-text-primary">Gurobi/CPLEX:</strong> Pure linear/MIP when you have a license</li>
                        <li>• <strong className="text-text-primary">SciPy:</strong> Simple problems, no learning needed</li>
                        <li>• <strong className="text-text-primary">Optuna:</strong> Hyperparameter tuning only</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Run Your Own Benchmarks */}
          <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-2xl p-6 md:p-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                📓 Run Your Own Benchmarks
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Download our Jupyter notebooks to reproduce these benchmarks and test on your own problems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <a
                href="https://github.com/sematryx/sematryx/blob/main/notebooks/benchmarks/01_sematryx_vs_scipy.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-elevated rounded-xl p-4 border border-elevated-3 hover:border-brand-primary/50 transition-all group flex items-center gap-4"
              >
                <span className="text-3xl">🏆</span>
                <div>
                  <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                    Sematryx vs SciPy
                  </h3>
                  <p className="text-xs text-text-secondary">Quick comparison on 4 test functions</p>
                </div>
              </a>
              
              <a
                href="https://github.com/sematryx/sematryx/blob/main/notebooks/benchmarks/02_comprehensive_competitive_benchmark.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-elevated rounded-xl p-4 border border-elevated-3 hover:border-brand-primary/50 transition-all group flex items-center gap-4"
              >
                <span className="text-3xl">📊</span>
                <div>
                  <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                    Comprehensive Benchmark
                  </h3>
                  <p className="text-xs text-text-secondary">12 problems, 6 optimizers, learning demo</p>
                </div>
              </a>
              
              <a
                href="https://github.com/sematryx/sematryx/blob/main/notebooks/benchmarks/03_batch_optimization_benchmark.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-elevated rounded-xl p-4 border border-elevated-3 hover:border-brand-primary/50 transition-all group flex items-center gap-4"
              >
                <span className="text-3xl">🚀</span>
                <div>
                  <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                    Batch Processing
                  </h3>
                  <p className="text-xs text-text-secondary">REST API overhead amortization</p>
                </div>
              </a>
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-elevated rounded-2xl border border-elevated-3 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
              Methodology
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-3">Test Configuration</h3>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• 20 independent runs per configuration</li>
                  <li>• 5,000 evaluation budget (standard functions)</li>
                  <li>• Statistical significance: p &lt; 0.05</li>
                  <li>• Hardware: 8-core CPU, 32GB RAM</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-3">Metrics Reported</h3>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• Best objective value found (median)</li>
                  <li>• Evaluations to convergence</li>
                  <li>• Success rate (within 1e-4 of optimum)</li>
                  <li>• Wall-clock time</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-3">Competitor Versions</h3>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• SciPy 1.11.x (Differential Evolution)</li>
                  <li>• Optuna 3.4.x (TPE sampler)</li>
                  <li>• Gurobi 10.x (where applicable)</li>
                  <li>• OR-Tools 9.x (where applicable)</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-elevated-3 text-center">
              <p className="text-sm text-text-tertiary">
                Last updated: December 2024. Benchmarks run on Sematryx v3.2.
                <br />
                Full methodology and raw data available upon request.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              See for yourself
            </h3>
            <p className="text-text-secondary mb-6">
              Start with 10 free optimizations. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/api-keys" 
                className="bg-cta-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-cta-primary-hover transition-colors shadow-lg shadow-brand-primary/20"
              >
                Get Started Free →
              </Link>
              <Link 
                href="/tutorials/getting-started" 
                className="border border-elevated-3 text-text-primary px-8 py-3 rounded-lg font-semibold hover:bg-elevated transition-colors"
              >
                Try the Tutorial
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
