'use client'

import { usePathname } from 'next/navigation'
import DocsNav from './DocsNav'
import TutorialsNav from './TutorialsNav'

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

  // Only show left nav for /docs/* and /tutorials/* sections
  // Exclude marketing-focused pages that shouldn't have left nav
  const marketingPages = [
    '/docs/conversational-optimization',
    '/docs/domain-libraries',
    '/docs/integrations/mcp'
  ]
  
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

