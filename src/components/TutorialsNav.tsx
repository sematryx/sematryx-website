'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookOpen,
  Zap,
  Settings,
  BarChart3,
  Building2,
  Webhook,
  MessageSquare,
  Plug
} from 'lucide-react'

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface TutorialsNavProps {
  isCollapsed?: boolean
  isMobile?: boolean
  onMobileClose?: () => void
}

interface TutorialSection {
  title: string
  items: NavItem[]
}

const tutorialSections: TutorialSection[] = [
  {
    title: 'START HERE',
    items: [
  { title: 'Getting Started', href: '/tutorials/getting-started', icon: Zap },
      { title: 'Conversational Optimization', href: '/tutorials/conversational-optimization', icon: MessageSquare },
    ]
  },
  {
    title: 'AGENTS',
    items: [
      { title: 'MCP Agent Demo', href: '/tutorials/mcp-agent-demo', icon: Plug },
    ]
  },
  {
    title: 'CORE WORKFLOWS',
    items: [
      { title: 'Data Transformation', href: '/tutorials/data-transformation', icon: Settings },
      { title: 'Monitoring & Alerts', href: '/tutorials/monitoring-alerts', icon: BarChart3 },
      { title: 'Webhook Automation', href: '/tutorials/webhook-automation', icon: Webhook },
      { title: 'AI Content Generation', href: '/tutorials/ai-content-generation', icon: BookOpen },
      { title: 'Enterprise Workflows', href: '/tutorials/enterprise-workflows', icon: Building2 },
    ]
  },
  {
    title: 'DOMAIN LIBRARIES',
    items: [
      { title: 'Domain-Specific Optimization', href: '/tutorials/domain-specific-optimization', icon: Building2 },
      { title: 'Extending Domain Libraries', href: '/tutorials/extending-domain-libraries', icon: Building2 },
    ]
  },
]

export default function TutorialsNav({ isCollapsed = false, isMobile = false, onMobileClose }: TutorialsNavProps) {
  const pathname = usePathname()

  return (
    <nav className="h-full">
      <div className={`${isCollapsed ? 'p-2' : 'p-6'}`}>
        {tutorialSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={`${isCollapsed ? 'mb-4' : 'mb-6'}`}>
            {!isCollapsed && (
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
            )}
        <ul className="space-y-1">
              {section.items.map((tutorial) => {
            const IconComponent = tutorial.icon
            const isActive = pathname === tutorial.href
            return (
              <li key={tutorial.href}>
                <Link
                  href={tutorial.href}
                  onClick={isMobile ? onMobileClose : undefined}
                  className={`flex items-center gap-2 ${isCollapsed ? 'px-2 py-2 justify-center' : 'px-3 py-2'} rounded-md text-sm transition-colors ${
                    isActive
                      ? 'bg-primary-600/20 text-primary-400 font-medium'
                      : 'text-gray-400 hover:bg-[#242b3d] hover:text-white'
                  }`}
                  title={isCollapsed ? tutorial.title : undefined}
                >
                  <IconComponent className="w-4 h-4 flex-shrink-0" />
                  {!isCollapsed && <span>{tutorial.title}</span>}
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

