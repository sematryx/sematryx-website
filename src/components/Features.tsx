export default function Features() {
  const features = [
    {
      title: "Intelligent Automation",
      description: "AI-powered workflows that adapt and optimize themselves based on your data patterns and business logic.",
      icon: "🤖"
    },
    {
      title: "Real-time Analytics",
      description: "Monitor performance, track metrics, and get insights into your automation processes with detailed benchmarks.",
      icon: "📊"
    },
    {
      title: "MCP Integration",
      description: "Seamlessly integrate with Model Context Protocol for enhanced AI model interactions and data exchange.",
      icon: "🔗"
    },
    {
      title: "Developer-First API",
      description: "Simple, powerful REST API with comprehensive documentation and SDKs for popular programming languages.",
      icon: "⚡"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with encryption, compliance certifications, and granular access controls.",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Expert support team available around the clock with comprehensive tutorials and resources.",
      icon: "🚀"
    }
  ]

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to automate
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to scale with your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}