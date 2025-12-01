import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Agentic Expository
            <span className="text-primary-600"> Audidactic </span>
            Optimizer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
            The world's most advanced optimization framework. Where traditional optimizers solve mathematical problems, 
            AEAO solves enterprise problems with AI-powered intelligence, compliance, and continuous learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
              15 AI Systems Coordinated
            </span>
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
              Enterprise Compliance Built-In
            </span>
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
              22-26% Performance Boost
            </span>
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
              Self-Improving Learning
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/api-keys" 
              className="bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Started Free
            </Link>
            <Link 
              href="/docs" 
              className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}