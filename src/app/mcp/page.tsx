import CodeBlock from '@/components/CodeBlock'

export default function MCPPage() {
  const mcpIntegrationCode = `import { MCPClient } from '@sematryx/mcp-client'
import { Sematryx } from '@sematryx/javascript-sdk'

// Initialize Sematryx with MCP support
const sematryx = new Sematryx('your-api-key', {
  mcp: {
    enabled: true,
    version: '2024-11-05'
  }
})

// Connect to MCP server
const mcpClient = new MCPClient({
  serverUrl: 'https://api.sematryx.com/mcp',
  transport: 'stdio'
})

await mcpClient.connect()`

  const contextSharingCode = `// Share context between Sematryx and AI models
const automation = await sematryx.automations.create({
  name: 'ai-enhanced-processor',
  trigger: {
    type: 'webhook'
  },
  actions: [
    {
      type: 'mcp_process',
      config: {
        model: 'claude-3-sonnet',
        context: {
          include_history: true,
          max_tokens: 4000,
          tools: ['web_search', 'code_interpreter']
        },
        prompt: 'Process the incoming data and provide insights'
      }
    }
  ]
})`

  const toolsCode = `// MCP Tools available in Sematryx
const mcpTools = [
  {
    name: 'web_search',
    description: 'Search the web for real-time information',
    parameters: {
      query: 'string',
      max_results: 'number'
    }
  },
  {
    name: 'code_interpreter',
    description: 'Execute and analyze code in multiple languages',
    parameters: {
      code: 'string',
      language: 'python|javascript|sql'
    }
  },
  {
    name: 'data_analyzer',
    description: 'Analyze structured data and generate insights',
    parameters: {
      data: 'object',
      analysis_type: 'statistical|predictive|descriptive'
    }
  }
]`

  const features = [
    {
      title: 'Standardized Communication',
      description: 'Use the industry-standard MCP protocol for seamless AI model integration',
      icon: '🔗'
    },
    {
      title: 'Context Preservation',
      description: 'Maintain conversation context across automation steps and model interactions',
      icon: '🧠'
    },
    {
      title: 'Tool Integration',
      description: 'Access web search, code execution, and data analysis tools through MCP',
      icon: '🛠️'
    },
    {
      title: 'Multi-Model Support',
      description: 'Connect with Claude, GPT, and other AI models using the same protocol',
      icon: '🤖'
    },
    {
      title: 'Real-time Streaming',
      description: 'Stream responses and maintain persistent connections with AI models',
      icon: '⚡'
    },
    {
      title: 'Secure Context Sharing',
      description: 'Share context and data securely with encryption and access controls',
      icon: '🔒'
    }
  ]

  const useCases = [
    {
      title: 'Intelligent Data Processing',
      description: 'Use AI models to analyze, transform, and enrich your automation data with natural language understanding.',
      example: 'Process customer feedback → AI analysis → Automated response generation'
    },
    {
      title: 'Dynamic Workflow Adaptation',
      description: 'Let AI models modify automation workflows based on real-time conditions and historical patterns.',
      example: 'Market data → AI strategy adjustment → Automated trading decisions'
    },
    {
      title: 'Code Generation & Review',
      description: 'Generate, review, and optimize automation scripts using AI-powered code analysis.',
      example: 'Requirements → AI code generation → Automated testing & deployment'
    },
    {
      title: 'Advanced Content Creation',
      description: 'Create sophisticated content that adapts to context, audience, and business objectives.',
      example: 'User data → AI content personalization → Multi-channel distribution'
    }
  ]

  return (
    <div className="bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Model Context Protocol
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Integrate AI models seamlessly with your automations using the Model Context Protocol (MCP). 
              Share context, use tools, and build intelligent workflows.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              MCP Features in Sematryx
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#1a1f2e] rounded-xl p-6 border border-gray-700">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Code Examples */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Getting Started with MCP
            </h2>
            
            <div className="space-y-8">
              <div className="bg-[#1a1f2e] rounded-2xl border border-gray-700 p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  1. Initialize MCP Connection
                </h3>
                <p className="text-gray-400 mb-6">
                  Connect <span className="text-primary-400">Sematryx</span> to the Model Context Protocol to enable AI model integration:
                </p>
                <CodeBlock
                  code={mcpIntegrationCode}
                  language="javascript"
                  title="Initialize MCP with Sematryx"
                />
              </div>

              <div className="bg-[#1a1f2e] rounded-2xl border border-gray-700 p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  2. Create AI-Enhanced Automations
                </h3>
                <p className="text-gray-400 mb-6">
                  Build automations that leverage AI models with shared context:
                </p>
                <CodeBlock
                  code={contextSharingCode}
                  language="javascript"
                  title="AI-Enhanced Automation"
                />
              </div>

              <div className="bg-[#1a1f2e] rounded-2xl border border-gray-700 p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  3. Available MCP Tools
                </h3>
                <p className="text-gray-400 mb-6">
                  Access powerful tools through the MCP interface:
                </p>
                <CodeBlock
                  code={toolsCode}
                  language="javascript"
                  title="MCP Tools Configuration"
                />
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Real-World Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-[#1a1f2e] rounded-xl p-8 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {useCase.description}
                  </p>
                  <div className="bg-primary-900/30 rounded-lg p-4 border border-primary-700">
                    <span className="text-sm font-medium text-primary-400">Example Flow:</span>
                    <p className="text-primary-300 mt-1">{useCase.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Protocol Details */}
          <div className="bg-[#1a1f2e] rounded-2xl border border-gray-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              MCP Protocol Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Supported Transports
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• <strong className="text-gray-200">STDIO:</strong> Standard input/output communication</li>
                  <li>• <strong className="text-gray-200">HTTP/SSE:</strong> Server-sent events for real-time updates</li>
                  <li>• <strong className="text-gray-200">WebSocket:</strong> Bidirectional persistent connections</li>
                  <li>• <strong className="text-gray-200">Custom:</strong> Plugin support for custom transports</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Security Features
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• <strong className="text-gray-200">TLS Encryption:</strong> All communications encrypted</li>
                  <li>• <strong className="text-gray-200">API Key Auth:</strong> Secure authentication mechanism</li>
                  <li>• <strong className="text-gray-200">Rate Limiting:</strong> Prevents abuse and ensures stability</li>
                  <li>• <strong className="text-gray-200">Context Isolation:</strong> Secure context boundaries</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-900/30 border border-blue-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">
                MCP Version Support
              </h3>
              <p className="text-blue-300 mb-3">
                <span className="text-primary-400">Sematryx</span> supports MCP version 2024-11-05 and maintains backward compatibility with earlier versions.
              </p>
              <div className="text-sm text-blue-400">
                <strong>Current Version:</strong> 2024-11-05 | 
                <strong> Next Version:</strong> 2024-12-01 (Preview Available)
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}