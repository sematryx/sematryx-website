import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function TutorialsPage() {
  const tutorials = [
    {
      id: 'getting-started',
      title: 'Getting Started with AEAO',
      description: 'Learn the basics of creating your first automation workflow',
      difficulty: 'Beginner',
      duration: '15 min',
      category: 'Fundamentals'
    },
    {
      id: 'data-transformation',
      title: 'Data Transformation Pipeline',
      description: 'Build a complete data transformation pipeline with real-time processing',
      difficulty: 'Intermediate',
      duration: '30 min',
      category: 'Data Processing'
    },
    {
      id: 'webhook-automation',
      title: 'Webhook-Triggered Automations',
      description: 'Create automations that respond to external webhook events',
      difficulty: 'Intermediate',
      duration: '25 min',
      category: 'Integrations'
    },
    {
      id: 'ai-content-generation',
      title: 'AI-Powered Content Generation',
      description: 'Use AI models to automatically generate and process content',
      difficulty: 'Advanced',
      duration: '45 min',
      category: 'AI Integration'
    },
    {
      id: 'monitoring-alerts',
      title: 'Monitoring and Alerting',
      description: 'Set up comprehensive monitoring and alerting for your automations',
      difficulty: 'Intermediate',
      duration: '20 min',
      category: 'Operations'
    },
    {
      id: 'enterprise-workflows',
      title: 'Enterprise Workflow Patterns',
      description: 'Learn advanced patterns for complex enterprise automation scenarios',
      difficulty: 'Advanced',
      duration: '60 min',
      category: 'Enterprise'
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'Advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <main>
      <Header />
      
      <div className="bg-gradient-to-br from-primary-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tutorials
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Step-by-step guides to help you master AEAO automation. 
              From beginner concepts to advanced enterprise patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <Link
                key={tutorial.id}
                href={`/tutorials/${tutorial.id}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6 border border-gray-200 hover:border-primary-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {tutorial.category}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(tutorial.difficulty)}`}>
                    {tutorial.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
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
            <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Need Help Getting Started?
              </h2>
              <p className="text-gray-600 mb-6">
                If you're new to AEAO, we recommend starting with our Quick Start guide 
                in the documentation to get familiar with the basic concepts.
              </p>
              <Link
                href="/docs"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
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