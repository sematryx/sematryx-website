'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CollapsibleSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  children, 
  defaultOpen = true 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <section className="mb-6">
      <button
        className="flex justify-between items-center w-full p-4 bg-[#242b3d] rounded-lg hover:bg-[#2a3347] transition-colors text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0f1419]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl font-semibold text-white">
          {title}
        </h2>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </section>
  )
}

export default CollapsibleSection


