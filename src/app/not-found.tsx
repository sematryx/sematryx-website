import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Force dynamic rendering - this page doesn't need static generation
export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <main>
      <Header />
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-b from-[#0f1419] to-[#1a1f2e]">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-500 transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/docs"
              className="bg-[#242b3d] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2d3548] transition-colors border border-gray-700"
            >
              View Docs
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
