'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const docsSections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/why-sematryx', icon: '📖' },
      { title: 'System Architecture', href: '/docs/architecture', icon: '🏗️' },
      { title: 'Quick Start', href: '/docs', icon: '🚀' },
      { title: 'Authentication', href: '/docs/authentication', icon: '🔐' },
      { title: 'Making Requests', href: '/docs/requests', icon: '📡' },
    ]
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Optimization API', href: '/docs/api/automation', icon: '⚙️' },
      { title: 'Intelligence Configuration', href: '/docs/api/intelligence-config', icon: '🧠' },
      { title: 'Analytics Endpoints', href: '/docs/api/analytics', icon: '📊' },
    ]
  },
  {
    title: 'Integrations',
    items: [
      { title: 'JavaScript SDK', href: '/docs/sdks/javascript', icon: '📦' },
      { title: 'Python SDK', href: '/docs/sdks/python', icon: '🐍' },
      { title: 'REST API', href: '/docs/sdks/rest', icon: '🌐' },
    ]
  },
  {
    title: 'Account',
    items: [
      { title: 'Billing & Usage', href: '/docs/billing', icon: '💳' },
      { title: 'Rate Limiting', href: '/docs/advanced/rate-limiting', icon: '⏱️' },
    ]
  },
  {
    title: 'Advanced',
    items: [
      { title: 'Error Handling', href: '/docs/advanced/errors', icon: '⚠️' },
      { title: 'Best Practices', href: '/docs/advanced/best-practices', icon: '✅' },
    ]
  }
]

interface DocsNavProps {
  isCollapsed?: boolean
  onToggle?: () => void
  isMobile?: boolean
  onMobileClose?: () => void
}

export default function DocsNav({ isCollapsed = false, onToggle, isMobile = false, onMobileClose }: DocsNavProps) {
  const pathname = usePathname()

  return (
    <nav className="h-full">
      <div className={`${isCollapsed ? 'p-2' : 'p-6'}`}>
        {/* Header with toggle button */}
        <div className="flex items-center justify-between mb-4">
          {!isCollapsed && (
            <h2 className="text-lg font-semibold text-white">Documentation</h2>
          )}
          {onToggle && (
            <button
              onClick={onToggle}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#242b3d] transition-colors"
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              )}
            </button>
          )}
        </div>
        
        {docsSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={`${isCollapsed ? 'mb-4' : 'mb-6'}`}>
            {!isCollapsed && (
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
            )}
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    href={item.href}
                    onClick={isMobile ? onMobileClose : undefined}
                    className={`flex items-center gap-2 ${isCollapsed ? 'px-2 py-2 justify-center' : 'px-3 py-2'} rounded-md text-sm transition-colors ${
                      pathname === item.href
                        ? 'bg-primary-600/20 text-primary-400 font-medium'
                        : 'text-gray-400 hover:bg-[#242b3d] hover:text-white'
                    }`}
                    title={isCollapsed ? item.title : undefined}
                  >
                    <span className="text-base">{item.icon}</span>
                    {!isCollapsed && <span>{item.title}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  )
}