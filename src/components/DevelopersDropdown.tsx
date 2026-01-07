'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Zap, BookOpen, GraduationCap } from 'lucide-react'

interface DropdownGroup {
  title: string
  items: {
    title: string
    href: string
    icon: React.ComponentType<{ className?: string }>
  }[]
}

const developersMenu: DropdownGroup[] = [
  {
    title: 'Build',
    items: [
      { title: 'Quickstart', href: '/tutorials/getting-started', icon: Zap },
      { title: 'Documentation', href: '/docs', icon: BookOpen },
      { title: 'Tutorials', href: '/tutorials', icon: GraduationCap },
    ]
  }
]

interface DevelopersDropdownProps {
  isMobile?: boolean
  onMobileClose?: () => void
}

export default function DevelopersDropdown({ isMobile = false, onMobileClose }: DevelopersDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
    if (onMobileClose) {
      onMobileClose()
    }
  }

  if (isMobile) {
    return (
      <div className="space-y-2">
        <div className="w-full flex items-center">
          <Link
            href="/docs"
            onClick={() => {
              setIsOpen(false)
              if (onMobileClose) {
                onMobileClose()
              }
            }}
            className="flex-1 px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-[#242b3d] transition-colors"
          >
            Developers
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-2 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-[#242b3d] transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        {isOpen && (
          <div className="pl-4 space-y-4">
            {developersMenu.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  {group.title}
                </h4>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-400 hover:bg-[#242b3d] hover:text-white transition-colors"
                      >
                        <IconComponent className="w-4 h-4 flex-shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Link
        href="/docs"
        onMouseEnter={() => setIsOpen(true)}
        className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors"
      >
        Developers
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Link>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="absolute top-full left-0 mt-1 w-80 bg-[#1a1f2e] border border-gray-800 rounded-lg shadow-xl z-20 py-2"
            onMouseLeave={() => setIsOpen(false)}
          >
            {developersMenu.map((group, groupIndex) => (
              <div key={groupIndex} className={groupIndex > 0 ? 'mt-4 pt-4 border-t border-gray-800' : ''}>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-4">
                  {group.title}
                </h4>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleLinkClick}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:bg-[#242b3d] hover:text-white transition-colors"
                      >
                        <IconComponent className="w-4 h-4 flex-shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

