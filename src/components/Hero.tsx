import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Enhanced
            <span className="text-primary-600"> Adaptive </span>
            Optimization
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The world's most advanced AI-powered optimization framework. 
            Coordinate multiple AI systems, leverage domain expertise, and solve complex problems across industries.
          </p>
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