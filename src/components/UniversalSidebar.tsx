'use client'

import { usePathname } from 'next/navigation'
import DocsNav from './DocsNav'
import TutorialsNav from './TutorialsNav'
import MainSiteNav from './MainSiteNav'

interface UniversalSidebarProps {
  isCollapsed?: boolean
  onToggle?: () => void
  isMobile?: boolean
  onMobileClose?: () => void
}

export default function UniversalSidebar({ 
  isCollapsed = false, 
  onToggle, 
  isMobile = false, 
  onMobileClose 
}: UniversalSidebarProps) {
  const pathname = usePathname()

  // Determine which nav to show based on pathname
  if (pathname.startsWith('/docs') || pathname === '/why-sematryx') {
    return (
      <DocsNav 
        isCollapsed={isCollapsed} 
        onToggle={onToggle} 
        isMobile={isMobile} 
        onMobileClose={onMobileClose} 
      />
    )
  }

  if (pathname.startsWith('/tutorials')) {
    return (
      <TutorialsNav 
        isCollapsed={isCollapsed} 
        isMobile={isMobile} 
        onMobileClose={onMobileClose} 
      />
    )
  }

  // Default: main site navigation
  return (
    <MainSiteNav 
      isCollapsed={isCollapsed} 
      isMobile={isMobile} 
      onMobileClose={onMobileClose} 
    />
  )
}

