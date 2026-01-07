'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bot, Brain, BookOpen, Code, Sparkles } from 'lucide-react'

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const pillarsNavItems: NavItem[] = [
  { title: 'Overview', href: '/docs/api/intelligence-config', icon: Sparkles },
  { title: 'Agentic Intelligence', href: '/why-sematryx/agentic-intelligence', icon: Bot },
  { title: 'Interpretable Intelligence', href: '/why-sematryx/interpretable-intelligence', icon: BookOpen },
  { title: 'Adaptive Intelligence', href: '/why-sematryx/adaptive-intelligence', icon: Brain },
]

interface PillarsNavProps {
  isCollapsed?: boolean
  isMobile?: boolean
  onMobileClose?: () => void
}

export default function PillarsNav({ isCollapsed = false, isMobile = false, onMobileClose }: PillarsNavProps) {
  const pathname = usePathname()

  return (
    <nav className="h-full">
      <div className={`${isCollapsed ? 'p-2' : 'p-6'}`}>
        <ul className="space-y-1">
          {pillarsNavItems.map((item) => {
            const IconComponent = item.icon
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
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
    </nav>
  )
}

