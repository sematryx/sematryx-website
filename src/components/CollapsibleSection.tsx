'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

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
        className="flex justify-between items-center w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl font-semibold text-gray-900">
          {title}
        </h2>
        {isOpen ? (
          <ChevronUpIcon className="h-6 w-6 text-gray-600 flex-shrink-0" />
        ) : (
          <ChevronDownIcon className="h-6 w-6 text-gray-600 flex-shrink-0" />
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


