'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown, ChevronRight, Code, MessageSquare, Building2, Plug, Sparkles, Bot, Brain, BookOpen } from 'lucide-react'

interface DropdownItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  subItems?: DropdownItem[]
}

interface DropdownGroup {
  title: string
  items: DropdownItem[]
}

const whySematryxMenu: DropdownGroup[] = [
  {
    title: 'Key Capabilities',
    items: [
      { title: 'Overview', href: '/why-sematryx', icon: Sparkles },
      { 
        title: 'Three Intelligence Pillars', 
        href: '/docs/api/intelligence-config', 
        icon: Code,
        subItems: [
          { title: 'Agentic Intelligence', href: '/why-sematryx/agentic-intelligence', icon: Bot },
          { title: 'Interpretable Intelligence', href: '/why-sematryx/interpretable-intelligence', icon: BookOpen },
          { title: 'Adaptive Intelligence', href: '/why-sematryx/adaptive-intelligence', icon: Brain },
        ]
      },
      { title: 'Domain Libraries', href: '/docs/domain-libraries', icon: Building2 },
      { title: 'Conversational Optimization', href: '/docs/conversational-optimization', icon: MessageSquare },
      { title: 'Agent Integration (MCP)', href: '/docs/integrations/mcp', icon: Plug },
    ]
  }
]

interface WhySematryxDropdownProps {
  isMobile?: boolean
  onMobileClose?: () => void
}

export default function WhySematryxDropdown({ isMobile = false, onMobileClose }: WhySematryxDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setExpandedItems(new Set())
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
    setExpandedItems(new Set())
    if (onMobileClose) {
      onMobileClose()
    }
  }

  const toggleSubmenu = (itemTitle: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemTitle)) {
      newExpanded.delete(itemTitle)
    } else {
      newExpanded.add(itemTitle)
    }
    setExpandedItems(newExpanded)
  }

  const renderMenuItem = (item: DropdownItem, isMobile: boolean, indent: number = 0) => {
    const IconComponent = item.icon
    const hasSubItems = item.subItems && item.subItems.length > 0
    const isExpanded = expandedItems.has(item.title)
    
    if (isMobile) {
      return (
        <div key={item.href}>
          {hasSubItems ? (
            <>
              <button
                onClick={(e) => toggleSubmenu(item.title, e)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm text-gray-400 hover:bg-[#242b3d] hover:text-white transition-colors ${indent > 0 ? 'ml-4' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4 flex-shrink-0" />
                  <span>{item.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
              </button>
              {isExpanded && item.subItems && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.subItems.map((subItem) => renderMenuItem(subItem, true, indent + 1))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              onClick={handleLinkClick}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-400 hover:bg-[#242b3d] hover:text-white transition-colors ${indent > 0 ? 'ml-4' : ''}`}
            >
              <IconComponent className="w-4 h-4 flex-shrink-0" />
              <span>{item.title}</span>
            </Link>
          )}
        </div>
      )
    } else {
      return (
        <div key={item.href} className="relative group">
          {hasSubItems ? (
            <>
              <div
                onMouseEnter={() => setExpandedItems(new Set([item.title]))}
                className="flex items-center justify-between px-4 py-2 text-sm text-gray-400 hover:bg-[#242b3d] hover:text-white transition-colors"
              >
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 flex-1"
                >
                  <IconComponent className="w-4 h-4 flex-shrink-0" />
                  <span>{item.title}</span>
                </Link>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              </div>
              {isExpanded && item.subItems && (
                <div 
                  className="absolute left-full top-0 ml-1 w-64 bg-[#1a1f2e] border border-gray-800 rounded-lg shadow-xl py-2 z-30"
                  onMouseEnter={() => setExpandedItems(new Set([item.title]))}
                  onMouseLeave={() => setExpandedItems(new Set())}
                >
                  {item.subItems.map((subItem) => {
                    const SubIconComponent = subItem.icon
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={handleLinkClick}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:bg-[#242b3d] hover:text-white transition-colors"
                      >
                        <SubIconComponent className="w-4 h-4 flex-shrink-0" />
                        <span>{subItem.title}</span>
                      </Link>
                    )
                  })}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              onClick={handleLinkClick}
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:bg-[#242b3d] hover:text-white transition-colors"
            >
              <IconComponent className="w-4 h-4 flex-shrink-0" />
              <span>{item.title}</span>
            </Link>
          )}
        </div>
      )
    }
  }

  if (isMobile) {
    return (
      <div className="space-y-2">
        <div className="w-full flex items-center">
          <Link
            href="/why-sematryx"
            onClick={() => {
              setIsOpen(false)
              if (onMobileClose) {
                onMobileClose()
              }
            }}
            className="flex-1 px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-[#242b3d] transition-colors"
          >
            Why Sematryx
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
            {whySematryxMenu.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  {group.title}
                </h4>
                <div className="space-y-1">
                  {group.items.map((item) => renderMenuItem(item, true))}
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
        href="/why-sematryx"
        onMouseEnter={() => setIsOpen(true)}
        className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors"
      >
        Why Sematryx
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Link>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => {
              setIsOpen(false)
              setExpandedItems(new Set())
            }}
          />
          <div
            className="absolute top-full left-0 mt-1 w-80 bg-[#1a1f2e] border border-gray-800 rounded-lg shadow-xl z-20 py-2"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => {
              setIsOpen(false)
              setExpandedItems(new Set())
            }}
          >
            {whySematryxMenu.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-4">
                  {group.title}
                </h4>
                <div className="space-y-1">
                  {group.items.map((item) => renderMenuItem(item, false))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

