'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookOpen,
  Zap,
  Settings,
  BarChart3,
  Building2,
  Webhook
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

const tutorials: NavItem[] = [
  { title: 'Getting Started', href: '/tutorials/getting-started', icon: Zap },
  { title: 'Problem Setup', href: '/tutorials/data-transformation', icon: Settings },
  { title: 'Intelligence Configuration', href: '/tutorials/ai-content-generation', icon: BookOpen },
  { title: 'Understanding Results', href: '/tutorials/monitoring-alerts', icon: BarChart3 },
  { title: 'Domain-Specific Optimization', href: '/tutorials/enterprise-workflows', icon: Building2 },
  { title: 'Advanced Strategies', href: '/tutorials/webhook-automation', icon: Webhook },
]

export default function TutorialsNav({ isCollapsed = false, isMobile = false, onMobileClose }: TutorialsNavProps) {
  const pathname = usePathname()

  return (
    <nav className="h-full">
      <div className={`${isCollapsed ? 'p-2' : 'p-6'}`}>
        <ul className="space-y-1">
          {tutorials.map((tutorial) => {
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
    </nav>
  )
}

