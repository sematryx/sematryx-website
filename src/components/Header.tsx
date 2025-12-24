'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${isScrolled ? 'bg-base/80 backdrop-blur-md border-b border-elevated-3' : 'bg-base border-b border-elevated-3'} sticky top-0 z-50 transition-all`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo size="normal" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/why-sematryx" className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium">
                Why Sematryx
              </Link>
              <Link href="/docs" className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium">
                Documentation
              </Link>
              <Link href="/tutorials" className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium">
                Tutorials
              </Link>
              <Link href="/benchmarks" className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium">
                Benchmarks
              </Link>
              <Link href="/pricing" className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </Link>
              <Link href="/mcp" className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium">
                MCP
              </Link>
              
              <SignedOut>
                <Link href="/sign-up" className="bg-cta-primary text-white hover:bg-cta-primary-hover px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </Link>
              </SignedOut>
              
              <SignedIn>
                <Link href="/dashboard" className="bg-cta-primary text-white hover:bg-cta-primary-hover px-4 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: 'h-8 w-8',
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: 'h-8 w-8',
                  }
                }}
              />
            </SignedIn>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 p-2 rounded-md"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-elevated rounded-lg mt-2">
              <Link href="/why-sematryx" className="text-text-secondary hover:text-text-primary block px-3 py-2 rounded-md text-base font-medium">
                Why Sematryx
              </Link>
              <Link href="/docs" className="text-text-secondary hover:text-text-primary block px-3 py-2 rounded-md text-base font-medium">
                Documentation
              </Link>
              <Link href="/tutorials" className="text-text-secondary hover:text-text-primary block px-3 py-2 rounded-md text-base font-medium">
                Tutorials
              </Link>
              <Link href="/benchmarks" className="text-text-secondary hover:text-text-primary block px-3 py-2 rounded-md text-base font-medium">
                Benchmarks
              </Link>
              <Link href="/pricing" className="text-text-secondary hover:text-text-primary block px-3 py-2 rounded-md text-base font-medium">
                Pricing
              </Link>
              <Link href="/mcp" className="text-text-secondary hover:text-text-primary block px-3 py-2 rounded-md text-base font-medium">
                MCP
              </Link>
              
              <SignedOut>
                <Link href="/sign-up" className="bg-cta-primary text-white hover:bg-cta-primary-hover block px-3 py-2 rounded-md text-base font-medium">
                  Get Started
                </Link>
              </SignedOut>
              
              <SignedIn>
                <Link href="/dashboard" className="bg-cta-primary text-white hover:bg-cta-primary-hover block px-3 py-2 rounded-md text-base font-medium">
                  Dashboard
                </Link>
              </SignedIn>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
