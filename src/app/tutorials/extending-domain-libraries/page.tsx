import Link from 'next/link'
import { Metadata } from 'next'
import { Building2, ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Extending Domain Libraries Tutorial | Sematryx',
  description: 'Learn how to create custom domain extensions for Sematryx optimization.',
}

export default function ExtendingDomainLibrariesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="w-8 h-8 text-brand-primary" />
          <h1 className="text-4xl font-bold text-gray-200">
            Extending Domain Libraries
          </h1>
        </div>
        <p className="text-xl text-gray-400">
          Learn how to create custom domain extensions for Sematryx optimization.
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
                  Learn about domain library architecture and extension points
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-text-secondary" />
            </div>
          </Link>
          <Link
            href="/tutorials/domain-specific-optimization"
            className="block p-4 bg-elevated border border-elevated-3 rounded-lg hover:bg-elevated-2 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-text-primary">Domain-Specific Optimization Tutorial</div>
                <div className="text-sm text-text-secondary mt-1">
                  Learn the basics of using domain libraries
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
          <li>How to create custom domain extensions</li>
          <li>Defining domain-specific constraints and objectives</li>
          <li>Integrating custom domains with Sematryx core</li>
          <li>Testing and validating domain extensions</li>
        </ul>
      </div>
    </div>
  )
}

