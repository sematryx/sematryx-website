'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import { Key, LayoutDashboard, BarChart3, Settings, CreditCard, BookOpen } from 'lucide-react'
import Logo from '@/components/Logo'

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'API Keys', href: '/dashboard/keys', icon: Key },
  { name: 'Usage', href: '/dashboard/usage', icon: BarChart3 },
  { name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* Top Navigation */}
      <header className="bg-[#1a1f2e] border-b border-gray-800">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center shrink-0">
              <Logo size="small" />
            </Link>
            <nav className="hidden md:flex items-center gap-1 ml-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/dashboard' && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-600/20 text-primary-400'
                        : 'text-gray-400 hover:text-white hover:bg-[#242b3d]'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/docs"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Docs</span>
            </Link>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: 'h-9 w-9',
                }
              }}
            />
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-[#1a1f2e] border-b border-gray-800 px-4 py-2 overflow-x-auto">
        <div className="flex gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/dashboard' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-primary-600/20 text-primary-400'
                    : 'text-gray-400 hover:text-white hover:bg-[#242b3d]'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}

