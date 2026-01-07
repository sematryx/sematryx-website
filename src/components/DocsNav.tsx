'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookOpen,
  Building2,
  Key,
  Send,
  Settings,
  BarChart3,
  Package,
  Code,
  Globe,
  Plug,
  CreditCard,
  Timer,
  AlertTriangle,
  CheckCircle,
  MessageSquare,
  Bot,
  Brain,
} from 'lucide-react'

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface NavSection {
  title: string
  items: NavItem[]
}

const docsSections: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs', icon: BookOpen },
      { title: 'System Architecture', href: '/docs/architecture', icon: Building2 },
      { title: 'Authentication', href: '/docs/authentication', icon: Key },
      { title: 'Making Requests', href: '/docs/requests', icon: Send },
    ]
  },
  {
    title: 'Concepts & Guides',
    items: [
      { title: 'Three Intelligence Pillars', href: '/docs/api/intelligence-config', icon: Settings },
      { title: 'Conversational Optimization', href: '/docs/conversational-optimization', icon: MessageSquare },
      { title: 'Domain Libraries', href: '/docs/domain-libraries', icon: Building2 },
      { title: 'Agent Integrations (MCP)', href: '/docs/integrations/mcp', icon: Plug },
    ]
  },
  {
    title: 'SDKs',
    items: [
      { title: 'JavaScript SDK', href: '/docs/sdks/javascript', icon: Package },
      { title: 'Python SDK', href: '/docs/sdks/python', icon: Code },
      { title: 'REST API', href: '/docs/sdks/rest', icon: Globe },
    ]
  },
  {
    title: 'Account & Services',
    items: [
      { title: 'Billing & Usage', href: '/docs/billing', icon: CreditCard },
      { title: 'Rate Limiting', href: '/docs/advanced/rate-limiting', icon: Timer },
      { title: 'Analytics', href: '/docs/api/analytics', icon: BarChart3 },
      { title: 'Webhooks', href: '/docs/api/webhooks', icon: Settings },
    ]
  },
  {
    title: 'Advanced',
    items: [
      { title: 'Errors', href: '/docs/advanced/errors', icon: AlertTriangle },
      { title: 'Best Practices', href: '/docs/advanced/best-practices', icon: CheckCircle },
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
  const [currentHash, setCurrentHash] = useState('')
  
  // Track which hrefs we've already highlighted to prevent multiple highlights for same page
  const highlightedHrefs = new Set<string>()

  // Three Intelligence Pillars sub-items
  const pillars = [
    { title: 'Agentic Intelligence', href: '/docs/api/intelligence-config#agentic-intelligence', icon: Bot, color: 'text-sky-400', hash: 'agentic-intelligence' },
    { title: 'Interpretable Intelligence', href: '/docs/api/intelligence-config#interpretable-intelligence', icon: MessageSquare, color: 'text-green-400', hash: 'interpretable-intelligence' },
    { title: 'Adaptive Intelligence', href: '/docs/api/intelligence-config#adaptive-intelligence', icon: Brain, color: 'text-pink-400', hash: 'adaptive-intelligence' },
  ]

  const isIntelligenceConfigPage = pathname === '/docs/api/intelligence-config'

  // Track hash changes for active pillar highlighting
  useEffect(() => {
    if (typeof window !== 'undefined' && isIntelligenceConfigPage) {
      const updateHash = () => {
        setCurrentHash(window.location.hash.slice(1))
      }
      updateHash()
      window.addEventListener('hashchange', updateHash)
      return () => window.removeEventListener('hashchange', updateHash)
    }
  }, [isIntelligenceConfigPage])

  return (
    <nav className="h-full">
      <div className={`${isCollapsed ? 'p-2' : 'p-6'}`}>
        
        {docsSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={`${isCollapsed ? 'mb-4' : 'mb-6'}`}>
            {!isCollapsed && (
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
            )}
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => {
                const IconComponent = item.icon
                // For anchor links, check if we're on the base page
                const baseHref = item.href.split('#')[0]
                const isActive = pathname === baseHref && !highlightedHrefs.has(baseHref)
                if (isActive) {
                  highlightedHrefs.add(baseHref)
                }

                // Special handling for Three Intelligence Pillars - show sub-items when on that page
                if (item.href === '/docs/api/intelligence-config' && isIntelligenceConfigPage && !isCollapsed) {
                  return (
                    <li key={itemIndex}>
                      <div>
                        <Link
                          href={item.href}
                          onClick={isMobile ? onMobileClose : undefined}
                          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive
                              ? 'bg-primary-600/20 text-primary-400 font-medium'
                              : 'text-gray-400 hover:bg-[#242b3d] hover:text-white'
                          }`}
                        >
                          <IconComponent className="w-4 h-4 flex-shrink-0" />
                          <span>{item.title}</span>
                        </Link>
                        <ul className="ml-7 mt-1 space-y-1 border-l border-gray-700 pl-3">
                          {pillars.map((pillar, pillarIndex) => {
                            const PillarIcon = pillar.icon
                            const isPillarActive = currentHash === pillar.hash
                            return (
                              <li key={pillarIndex}>
                                <Link
                                  href={pillar.href}
                                  onClick={isMobile ? onMobileClose : undefined}
                                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs transition-colors ${
                                    isPillarActive
                                      ? `${pillar.color} font-medium`
                                      : 'text-gray-500 hover:text-gray-300 hover:bg-[#242b3d]'
                                  }`}
                                >
                                  <PillarIcon className="w-3 h-3 flex-shrink-0" />
                                  <span>{pillar.title}</span>
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </li>
                  )
                }

                // Regular items
                return (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      onClick={isMobile ? onMobileClose : undefined}
                      className={`flex items-center gap-2 ${isCollapsed ? 'px-2 py-2 justify-center' : 'px-3 py-2'} rounded-md text-sm transition-colors ${
                        isActive
                          ? 'bg-primary-600/20 text-primary-400 font-medium'
                          : 'text-gray-400 hover:bg-[#242b3d] hover:text-white'
                      }`}
                      title={isCollapsed ? item.title : undefined}
                    >
                      <IconComponent className="w-4 h-4 flex-shrink-0" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  )
}