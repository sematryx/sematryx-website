'use client'

import { usePathname } from 'next/navigation'
import DocsNav from './DocsNav'
import TutorialsNav from './TutorialsNav'
import PillarsNav from './PillarsNav'

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

  // Marketing pages that should not show left nav
  const marketingPages = [
    '/docs/conversational-optimization',
    '/docs/domain-libraries',
    '/docs/integrations/mcp',
    '/docs/api/intelligence-config' // Three Intelligence Pillars overview page
  ]
  
  // Show PillarsNav for individual pillar pages
  if (
    pathname.startsWith('/why-sematryx/agentic-intelligence') ||
    pathname.startsWith('/why-sematryx/interpretable-intelligence') ||
    pathname.startsWith('/why-sematryx/adaptive-intelligence')
  ) {
    return (
      <PillarsNav 
        isCollapsed={isCollapsed} 
        isMobile={isMobile} 
        onMobileClose={onMobileClose} 
      />
    )
  }
  
  // Exclude other /why-sematryx/* pages (marketing pages without nav)
  if (pathname.startsWith('/why-sematryx')) {
    return null
  }
  
  if (pathname.startsWith('/docs') && !marketingPages.includes(pathname)) {
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

  // No left nav for marketing pages or other routes
  return null
}

