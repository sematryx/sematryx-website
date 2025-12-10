import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function TutorialsPage() {
  const tutorials = [
    {
      id: 'getting-started',
      title: 'Getting Started with Sematryx',
      description: 'Learn the basics of solving your first optimization problem with Sematryx',
      difficulty: 'Beginner',
      duration: '15 min',
      category: 'Fundamentals'
    },
    {
      id: 'data-transformation',
      title: 'Optimization Problem Setup',
      description: 'Learn how to define objective functions, bounds, and constraints for optimization',
      difficulty: 'Intermediate',
      duration: '30 min',
      category: 'Problem Setup'
    },
    {
      id: 'ai-content-generation',
      title: 'Configuring the AEAO Tetrad',
      description: 'Master the four pillars: Agentic, Expository, Autodidactic, and Domain Extension',
      difficulty: 'Intermediate',
      duration: '45 min',
      category: 'Tetrad Configuration'
    },
    {
      id: 'monitoring-alerts',
      title: 'Understanding Optimization Results',
      description: 'Learn to interpret results, explanations, and performance metrics',
      difficulty: 'Intermediate',
      duration: '20 min',
      category: 'Results Analysis'
    },
    {
      id: 'enterprise-workflows',
      title: 'Domain-Specific Optimization',
      description: 'Use specialized libraries for Financial, Healthcare, Supply Chain, and other domains',
      difficulty: 'Advanced',
      duration: '60 min',
      category: 'Domain Libraries'
    },
    {
      id: 'webhook-automation',
      title: 'Advanced Optimization Strategies',
      description: 'Explore multi-strategy optimization, GPU acceleration, and performance tuning',
      difficulty: 'Advanced',
      duration: '45 min',
      category: 'Advanced Features'
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-900/50 text-green-400'
      case 'Intermediate':
        return 'bg-yellow-900/50 text-yellow-400'
      case 'Advanced':
        return 'bg-red-900/50 text-red-400'
      default:
        return 'bg-gray-700 text-gray-400'
    }
  }

  return (
    <main>
      <Header />
      
      <div className="bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tutorials
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Step-by-step guides to help you master <span className="text-primary-400">Sematryx</span> optimization. 
              From basic problem setup to advanced domain-specific optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <Link
                key={tutorial.id}
                href={`/tutorials/${tutorial.id}`}
                className="bg-[#1a1f2e] rounded-xl hover:bg-[#242b3d] transition-all duration-200 p-6 border border-gray-700 hover:border-primary-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary-400 bg-primary-900/30 px-3 py-1 rounded-full">
                    {tutorial.category}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(tutorial.difficulty)}`}>
                    {tutorial.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {tutorial.duration}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-[#242b3d] rounded-lg p-8 max-w-2xl mx-auto border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Need Help Getting Started?
              </h2>
              <p className="text-gray-400 mb-6">
                If you're new to <span className="text-primary-400">Sematryx</span>, we recommend starting with our Quick Start guide 
                in the documentation to get familiar with optimization concepts and the <span className="text-primary-400">AEAO</span> Tetrad.
              </p>
              <Link
                href="/docs"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors inline-block"
              >
                View Quick Start Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
