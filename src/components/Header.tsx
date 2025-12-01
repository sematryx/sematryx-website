'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              AEAO
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/why-aeao" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Why AEAO
              </Link>
              <Link href="/docs" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Documentation
              </Link>
              <Link href="/tutorials" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Tutorials
              </Link>
              <Link href="/benchmarks" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Benchmarks
              </Link>
              <Link href="/mcp" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                MCP
              </Link>
              <Link href="/api-keys" className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium">
                Get API Key
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 p-2 rounded-md"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/why-aeao" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
                Why AEAO
              </Link>
              <Link href="/docs" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
                Documentation
              </Link>
              <Link href="/tutorials" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
                Tutorials
              </Link>
              <Link href="/benchmarks" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
                Benchmarks
              </Link>
              <Link href="/mcp" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
                MCP
              </Link>
              <Link href="/api-keys" className="bg-primary-600 text-white hover:bg-primary-700 block px-3 py-2 rounded-md text-base font-medium">
                Get API Key
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}