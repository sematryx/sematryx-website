'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const docsSections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Why AEAO', href: '/why-aeao' },
      { title: 'Quick Start', href: '/docs' },
      { title: 'Authentication', href: '/docs/authentication' },
      { title: 'Making Requests', href: '/docs/requests' },
    ]
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Optimization API', href: '/docs/api/automation' },
      { title: 'Tetrad Configuration', href: '/docs/api/tetrad-config' },
      { title: 'Analytics Endpoints', href: '/docs/api/analytics' },
    ]
  },
  {
    title: 'Integrations',
    items: [
      { title: 'JavaScript SDK', href: '/docs/sdks/javascript' },
      { title: 'Python SDK', href: '/docs/sdks/python' },
      { title: 'REST API', href: '/docs/sdks/rest' },
    ]
  },
  {
    title: 'Advanced',
    items: [
      { title: 'Rate Limiting', href: '/docs/advanced/rate-limiting' },
      { title: 'Error Handling', href: '/docs/advanced/errors' },
      { title: 'Best Practices', href: '/docs/advanced/best-practices' },
    ]
  }
]

export default function DocsNav() {
  const pathname = usePathname()

  return (
    <nav className="w-64 bg-gray-50 h-full overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Documentation</h2>
        
        {docsSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      pathname === item.href
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {item.title}
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