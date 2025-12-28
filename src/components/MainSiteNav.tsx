'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookOpen,
  GraduationCap,
  BarChart3,
  DollarSign,
  Plug,
  Home
} from 'lucide-react'

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface MainSiteNavProps {
  isCollapsed?: boolean
  isMobile?: boolean
  onMobileClose?: () => void
}

const mainNavItems: NavItem[] = [
  { title: 'Home', href: '/', icon: Home },
  { title: 'Why Sematryx', href: '/why-sematryx', icon: BookOpen },
  { title: 'Documentation', href: '/docs', icon: BookOpen },
  { title: 'Tutorials', href: '/tutorials', icon: GraduationCap },
  { title: 'Benchmarks', href: '/benchmarks', icon: BarChart3 },
  { title: 'Pricing', href: '/pricing', icon: DollarSign },
  { title: 'MCP', href: '/mcp', icon: Plug },
]

export default function MainSiteNav({ isCollapsed = false, isMobile = false, onMobileClose }: MainSiteNavProps) {
  const pathname = usePathname()

  return (
    <nav className="h-full">
      <div className={`${isCollapsed ? 'p-2' : 'p-6'}`}>
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-white mb-4">Navigation</h2>
        )}
        
        <ul className="space-y-1">
          {mainNavItems.map((item) => {
            const IconComponent = item.icon
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
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

