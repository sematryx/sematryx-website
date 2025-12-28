'use client'

import { useState, useEffect } from 'react'
import DocsNav from './DocsNav'

interface DocsLayoutWrapperProps {
  children: React.ReactNode
}

export default function DocsLayoutWrapper({ children }: DocsLayoutWrapperProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Load collapse state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('docs-sidebar-collapsed')
    if (saved !== null) {
      setIsCollapsed(JSON.parse(saved))
    }
  }, [])

  // Save collapse state to localStorage
  const handleToggle = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    localStorage.setItem('docs-sidebar-collapsed', JSON.stringify(newState))
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden fixed top-20 left-4 z-40 p-2 rounded-md bg-[#1a1f2e] border border-gray-800 text-gray-400 hover:text-white hover:bg-[#242b3d] transition-colors"
        aria-label="Open documentation menu"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile drawer overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside className="md:hidden fixed left-0 top-16 bottom-0 w-64 bg-[#1a1f2e] border-r border-gray-800 z-50 overflow-y-auto">
            <div className="p-4 border-b border-gray-800 flex items-center justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#242b3d] transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <DocsNav isMobile={true} onMobileClose={() => setIsMobileMenuOpen(false)} />
          </aside>
        </>
      )}

      <div className="flex flex-1 bg-[#0f1419]">
        {/* Desktop Sidebar */}
        <aside className={`hidden md:block ${isCollapsed ? 'w-16' : 'w-64'} flex-shrink-0 transition-all duration-300`}>
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-[#1a1f2e] border-r border-gray-800">
            {/* Toggle button - always visible */}
            <div className="p-4 border-b border-gray-800 flex items-center justify-end">
              <button
                onClick={handleToggle}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#242b3d] transition-colors"
                aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                {isCollapsed ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
            <DocsNav isCollapsed={isCollapsed} onToggle={handleToggle} />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 overflow-x-hidden">
          {children}
        </div>
      </div>
    </>
  )
}

