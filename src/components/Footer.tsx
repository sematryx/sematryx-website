import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-[#0a0d12] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-4 block">
              <Logo size="small" />
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Sematryx solves optimization problems that traditional optimizers can't handle—with an Intelligence Hub that orchestrates and synthesizes insights from multiple AI systems, built-in compliance for regulatory constraints, explainable decisions for audit trails, and continuous learning—powered by the AEAO Engine.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/tutorials" className="text-gray-400 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="/benchmarks" className="text-gray-400 hover:text-white transition-colors">Benchmarks</Link></li>
              <li><Link href="/mcp" className="text-gray-400 hover:text-white transition-colors">MCP</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li><Link href="/api-keys" className="text-gray-400 hover:text-white transition-colors">Get API Key</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 <span className="text-primary-400">Sematryx</span>. All rights reserved.</p>
          <p className="text-sm mt-2">Pronounced "se" "matrix"</p>
        </div>
      </div>
    </footer>
  )
}
