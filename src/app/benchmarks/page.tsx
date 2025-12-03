'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BenchmarksPage() {
  const [selectedMetric, setSelectedMetric] = useState('latency')

  const benchmarkData = {
    latency: {
      title: 'Response Latency',
      description: 'Average time to process automation requests',
      metrics: [
        { name: 'Simple Automation', value: '45ms', benchmark: 'p95 < 100ms' },
        { name: 'Data Transformation', value: '120ms', benchmark: 'p95 < 250ms' },
        { name: 'AI Processing', value: '850ms', benchmark: 'p95 < 2s' },
        { name: 'Webhook Trigger', value: '25ms', benchmark: 'p95 < 50ms' }
      ]
    },
    throughput: {
      title: 'Throughput',
      description: 'Requests processed per second',
      metrics: [
        { name: 'Standard Plan', value: '1,000 req/s', benchmark: 'Sustained' },
        { name: 'Pro Plan', value: '10,000 req/s', benchmark: 'Sustained' },
        { name: 'Enterprise Plan', value: '100,000 req/s', benchmark: 'Sustained' },
        { name: 'Peak Burst', value: '500,000 req/s', benchmark: '30 seconds' }
      ]
    },
    reliability: {
      title: 'Reliability',
      description: 'System uptime and error rates',
      metrics: [
        { name: 'Uptime SLA', value: '99.9%', benchmark: 'Monthly' },
        { name: 'Error Rate', value: '0.01%', benchmark: 'p99' },
        { name: 'Data Durability', value: '99.999%', benchmark: 'Annual' },
        { name: 'Recovery Time', value: '< 30s', benchmark: 'RTO' }
      ]
    }
  }

  const performanceTests = [
    {
      name: 'Load Test Results',
      date: '2024-01-15',
      scenario: '100K concurrent automations',
      result: 'All SLAs maintained',
      details: 'Peak load handled without degradation'
    },
    {
      name: 'Stress Test Results',
      date: '2024-01-10',
      scenario: '10x normal traffic spike',
      result: 'Auto-scaling successful',
      details: 'Infrastructure scaled seamlessly'
    },
    {
      name: 'Endurance Test Results',
      date: '2024-01-05',
      scenario: '72-hour continuous operation',
      result: 'Zero performance degradation',
      details: 'Memory leaks and performance issues monitored'
    }
  ]

  const comparisonData = [
    {
      feature: 'API Response Time',
      aeao: '45ms avg',
      competitor1: '120ms avg',
      competitor2: '200ms avg'
    },
    {
      feature: 'Throughput',
      aeao: '100K req/s',
      competitor1: '50K req/s',
      competitor2: '25K req/s'
    },
    {
      feature: 'Uptime SLA',
      aeao: '99.9%',
      competitor1: '99.5%',
      competitor2: '99.0%'
    },
    {
      feature: 'Cold Start Time',
      aeao: '< 100ms',
      competitor1: '500ms',
      competitor2: '1.2s'
    }
  ]

  const metricTabs = [
    { id: 'latency', label: 'Latency' },
    { id: 'throughput', label: 'Throughput' },
    { id: 'reliability', label: 'Reliability' }
  ]

  return (
    <main>
      <Header />
      
      <div className="bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Performance Benchmarks
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world performance metrics and benchmarks demonstrating AEAO's 
              speed, reliability, and scalability.
            </p>
          </div>

          {/* Performance Metrics */}
          <div className="mb-16">
            <div className="bg-[#1a1f2e] rounded-2xl border border-gray-700 overflow-hidden">
              <div className="border-b border-gray-700">
                <nav className="flex">
                  {metricTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedMetric(tab.id)}
                      className={`flex-1 py-4 px-6 text-center font-medium ${
                        selectedMetric === tab.id
                          ? 'text-primary-400 border-b-2 border-primary-500 bg-primary-900/20'
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {benchmarkData[selectedMetric as keyof typeof benchmarkData].title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {benchmarkData[selectedMetric as keyof typeof benchmarkData].description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {benchmarkData[selectedMetric as keyof typeof benchmarkData].metrics.map((metric, index) => (
                    <div key={index} className="bg-[#242b3d] rounded-lg p-6 text-center border border-gray-700">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {metric.name}
                      </h4>
                      <div className="text-3xl font-bold text-primary-400 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-500">
                        {metric.benchmark}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Performance Tests */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Recent Performance Tests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {performanceTests.map((test, index) => (
                <div key={index} className="bg-[#1a1f2e] rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      {test.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {test.date}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-400">Scenario:</span>
                      <p className="text-gray-300">{test.scenario}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-400">Result:</span>
                      <p className="text-green-400 font-medium">{test.result}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-400">Details:</span>
                      <p className="text-gray-400 text-sm">{test.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Competitive Comparison
            </h2>
            <div className="bg-[#1a1f2e] rounded-2xl border border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#0f1419]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-white">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-primary-400">
                        AEAO
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                        Competitor A
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                        Competitor B
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {comparisonData.map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-medium text-white">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center text-sm font-bold text-primary-400">
                          {row.aeao}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-400">
                          {row.competitor1}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-400">
                          {row.competitor2}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-[#1a1f2e] rounded-2xl border border-gray-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Testing Methodology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Performance Testing
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Load testing with realistic traffic patterns</li>
                  <li>• Stress testing at 10x normal capacity</li>
                  <li>• Endurance testing over 72-hour periods</li>
                  <li>• Network latency simulation across regions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Measurement Standards
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Industry-standard monitoring tools</li>
                  <li>• Third-party validation and auditing</li>
                  <li>• Real-time metrics collection</li>
                  <li>• Comprehensive error tracking</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">
                All benchmarks are updated monthly and validated by independent third parties.
              </p>
              <div className="text-sm text-gray-500">
                Last updated: January 2024 | Next update: February 2024
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}