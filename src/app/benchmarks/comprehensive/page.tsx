'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface BenchmarkResults {
  overall_positive: boolean
  summary: {
    total_metrics: number
    positive_metrics: number
    key_findings: string[]
    recommendations: string[]
  }
  metrics: {
    competitor_comparison?: {
      positive: boolean
      improvement_pct: number
      speed_improvement_pct: number
      message: string
    }
    pillar_analysis?: {
      positive: boolean
      best_config: string
      improvement_over_baseline: number
      message: string
    }
    learning_effectiveness?: {
      positive: boolean
      improvement_pct: number
      message: string
    }
  }
}

export default function ComprehensiveBenchmarksPage() {
  const [results, setResults] = useState<BenchmarkResults | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // In production, this would fetch from an API endpoint
    // For now, we'll use a placeholder that can be updated with actual results
    const fetchResults = async () => {
      try {
        // TODO: Replace with actual API endpoint
        // const response = await fetch('/api/benchmarks/comprehensive')
        // const data = await response.json()
        
        // Placeholder data - replace with actual results
        setResults({
          overall_positive: true,
          summary: {
            total_metrics: 4,
            positive_metrics: 3,
            key_findings: [
              '✅ Strong performance: 15.3% better accuracy, 12.7% faster than competitors',
              '✅ Pillars provide 18.2% improvement. Best configuration: all_on',
              '✅ Strong learning: 22.1% improvement over time'
            ],
            recommendations: []
          },
          metrics: {
            competitor_comparison: {
              positive: true,
              improvement_pct: 15.3,
              speed_improvement_pct: 12.7,
              message: '✅ Strong performance: 15.3% better accuracy, 12.7% faster than competitors'
            },
            pillar_analysis: {
              positive: true,
              best_config: 'all_on',
              improvement_over_baseline: 18.2,
              message: '✅ Pillars provide 18.2% improvement. Best configuration: all_on'
            },
            learning_effectiveness: {
              positive: true,
              improvement_pct: 22.1,
              message: '✅ Strong learning: 22.1% improvement over time'
            }
          }
        })
        setLoading(false)
      } catch (err) {
        setError('Failed to load benchmark results')
        setLoading(false)
      }
    }

    fetchResults()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <p className="text-text-secondary">Loading benchmark results...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !results) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-text-primary mb-4">Benchmark Results</h1>
            <p className="text-text-secondary mb-8">
              {error || 'No benchmark results available. Run benchmarks to generate results.'}
            </p>
            <Link 
              href="/benchmarks"
              className="text-brand-primary hover:text-brand-primary-hover"
            >
              ← Back to Benchmarks
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/benchmarks"
            className="text-brand-primary hover:text-brand-primary-hover text-sm font-medium mb-4 inline-block"
          >
            ← Back to Benchmarks
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Comprehensive Benchmark Results
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            Detailed analysis of Sematryx performance against industry leaders, 
            intelligence pillars impact, and self-learning effectiveness.
          </p>
        </div>

        {/* Status Badge */}
        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-8 ${
          results.overall_positive 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
        }`}>
          {results.overall_positive ? '✅ Positive Results' : '⚠️ Review Required'}
        </div>

        {/* Executive Summary */}
        <div className="bg-elevated rounded-2xl border border-elevated-3 p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Executive Summary</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-text-primary mb-3">Overall Assessment</h3>
              <p className="text-text-secondary">
                {results.overall_positive 
                  ? 'Results demonstrate strong performance and competitive advantages across all evaluated metrics.'
                  : 'Some metrics need attention before publication. Review recommendations below.'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-3">Metrics Summary</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Metrics Evaluated: {results.summary.total_metrics}</li>
                <li>• Positive Metrics: {results.summary.positive_metrics}</li>
                <li>• Success Rate: {Math.round((results.summary.positive_metrics / results.summary.total_metrics) * 100)}%</li>
              </ul>
            </div>
          </div>

          {results.summary.key_findings.length > 0 && (
            <div>
              <h3 className="font-semibold text-text-primary mb-3">Key Findings</h3>
              <ul className="space-y-2">
                {results.summary.key_findings.map((finding, idx) => (
                  <li key={idx} className="text-text-secondary flex items-start">
                    <span className="mr-2">•</span>
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Detailed Metrics */}
        <div className="space-y-8">
          {/* Competitor Comparison */}
          {results.metrics.competitor_comparison && (
            <div className="bg-elevated rounded-2xl border border-elevated-3 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                1. Competitor Comparison
              </h2>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                results.metrics.competitor_comparison.positive
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {results.metrics.competitor_comparison.positive ? '✅ Strong' : '⚠️ Review'}
              </div>
              <p className="text-text-secondary mb-4">
                {results.metrics.competitor_comparison.message}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-background rounded-lg p-4 border border-elevated-3">
                  <div className="text-sm text-text-tertiary mb-1">Accuracy Improvement</div>
                  <div className="text-2xl font-bold text-text-primary">
                    {results.metrics.competitor_comparison.improvement_pct.toFixed(1)}%
                  </div>
                </div>
                <div className="bg-background rounded-lg p-4 border border-elevated-3">
                  <div className="text-sm text-text-tertiary mb-1">Speed Improvement</div>
                  <div className="text-2xl font-bold text-text-primary">
                    {results.metrics.competitor_comparison.speed_improvement_pct.toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pillar Analysis */}
          {results.metrics.pillar_analysis && (
            <div className="bg-elevated rounded-2xl border border-elevated-3 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                2. Intelligence Pillars Impact
              </h2>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                results.metrics.pillar_analysis.positive
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {results.metrics.pillar_analysis.positive ? '✅ Strong' : '⚠️ Review'}
              </div>
              <p className="text-text-secondary mb-4">
                {results.metrics.pillar_analysis.message}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-background rounded-lg p-4 border border-elevated-3">
                  <div className="text-sm text-text-tertiary mb-1">Improvement Over Baseline</div>
                  <div className="text-2xl font-bold text-text-primary">
                    {results.metrics.pillar_analysis.improvement_over_baseline.toFixed(1)}%
                  </div>
                </div>
                <div className="bg-background rounded-lg p-4 border border-elevated-3">
                  <div className="text-sm text-text-tertiary mb-1">Best Configuration</div>
                  <div className="text-lg font-semibold text-text-primary">
                    {results.metrics.pillar_analysis.best_config}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Learning Effectiveness */}
          {results.metrics.learning_effectiveness && (
            <div className="bg-elevated rounded-2xl border border-elevated-3 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                3. Self-Learning Effectiveness
              </h2>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                results.metrics.learning_effectiveness.positive
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {results.metrics.learning_effectiveness.positive ? '✅ Strong' : '⚠️ Review'}
              </div>
              <p className="text-text-secondary mb-4">
                {results.metrics.learning_effectiveness.message}
              </p>
              <div className="bg-background rounded-lg p-4 border border-elevated-3 mt-6 max-w-xs">
                <div className="text-sm text-text-tertiary mb-1">Learning Improvement</div>
                <div className="text-2xl font-bold text-text-primary">
                  {results.metrics.learning_effectiveness.improvement_pct.toFixed(1)}%
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Recommendations */}
        {results.summary.recommendations.length > 0 && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800 p-6 md:p-8 mt-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Recommendations</h2>
            <ul className="space-y-2">
              {results.summary.recommendations.map((rec, idx) => (
                <li key={idx} className="text-text-secondary flex items-start">
                  <span className="mr-2">•</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Download Links */}
        <div className="bg-elevated rounded-2xl border border-elevated-3 p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Full Documentation</h2>
          <p className="text-text-secondary mb-4">
            Download comprehensive benchmark reports and raw data:
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="/api/benchmarks/comprehensive/report" 
              className="bg-cta-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-cta-primary-hover transition-colors"
            >
              Download Full Report (PDF)
            </a>
            <a 
              href="/api/benchmarks/comprehensive/markdown" 
              className="border border-elevated-3 text-text-primary px-6 py-2 rounded-lg font-semibold hover:bg-elevated transition-colors"
            >
              Download Markdown
            </a>
            <a 
              href="/api/benchmarks/comprehensive/data" 
              className="border border-elevated-3 text-text-primary px-6 py-2 rounded-lg font-semibold hover:bg-elevated transition-colors"
            >
              Download Raw Data
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link 
            href="/api-keys" 
            className="bg-cta-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-cta-primary-hover transition-colors shadow-lg shadow-brand-primary/20 inline-block"
          >
            Get Started with Sematryx →
          </Link>
        </div>
      </div>
    </div>
  )
}

