import Link from 'next/link'
import { Metadata } from 'next'
import { Building2, ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Domain-Specific Optimization Tutorial | Sematryx',
  description: 'Learn how to use Sematryx domain libraries for industry-specific optimization problems.',
}

export default function DomainSpecificOptimizationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="w-8 h-8 text-brand-primary" />
          <h1 className="text-4xl font-bold text-gray-200">
            Domain-Specific Optimization
          </h1>
        </div>
        <p className="text-xl text-gray-400">
          Learn how to use Sematryx domain libraries for industry-specific optimization problems.
        </p>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-yellow-200 mb-4">Coming Soon</h2>
        <p className="text-yellow-200/80 mb-6">
          This tutorial is currently under development. In the meantime, you can:
        </p>
        <div className="space-y-4">
          <Link
            href="/docs/domain-libraries"
            className="block p-4 bg-elevated border border-elevated-3 rounded-lg hover:bg-elevated-2 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-text-primary flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Read the Domain Libraries Documentation
                </div>
                <div className="text-sm text-text-secondary mt-1">
                  Learn about available domain libraries and how to use them
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-text-secondary" />
            </div>
          </Link>
          <Link
            href="/domains"
            className="block p-4 bg-elevated border border-elevated-3 rounded-lg hover:bg-elevated-2 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-text-primary">View Domain Libraries Overview</div>
                <div className="text-sm text-text-secondary mt-1">
                  Explore all available domain libraries and use cases
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-text-secondary" />
            </div>
          </Link>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">What You'll Learn</h2>
        <ul className="text-text-secondary space-y-2">
          <li>How to select and use domain-specific optimization libraries</li>
          <li>Working with industry-specific constraints and compliance requirements</li>
          <li>Best practices for domain library integration</li>
          <li>Extending domain libraries for custom use cases</li>
        </ul>
      </div>
    </div>
  )
}

