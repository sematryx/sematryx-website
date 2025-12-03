import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#0f1419] to-[#1a1f2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-primary-400">Agentic Expository Autodidactic</span>
            <br className="hidden sm:block" />
            Optimizer
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto">
            The world's most advanced optimization framework. Where traditional optimizers solve mathematical problems, 
            AEAO solves enterprise problems with AI-powered intelligence, compliance, and continuous learning.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm md:text-base">
            <span className="bg-[#242b3d] text-gray-300 px-4 py-2 rounded-full font-medium border border-gray-700">
              15 AI Systems Coordinated
            </span>
            <span className="bg-[#242b3d] text-gray-300 px-4 py-2 rounded-full font-medium border border-gray-700">
              Enterprise Compliance Built-In
            </span>
            <span className="bg-[#242b3d] text-gray-300 px-4 py-2 rounded-full font-medium border border-gray-700">
              22-26% Performance Boost
            </span>
            <span className="bg-[#242b3d] text-gray-300 px-4 py-2 rounded-full font-medium border border-gray-700">
              Temporal Awareness
            </span>
            <span className="bg-[#242b3d] text-gray-300 px-4 py-2 rounded-full font-medium border border-gray-700">
              Knowledge Graphs + RAG
            </span>
            <span className="bg-[#242b3d] text-gray-300 px-4 py-2 rounded-full font-medium border border-gray-700">
              Multi-Library Integration
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/api-keys" 
              className="bg-primary-600 text-white hover:bg-primary-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Started Free
            </Link>
            <Link 
              href="/docs" 
              className="border border-gray-600 text-gray-300 hover:bg-[#242b3d] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}