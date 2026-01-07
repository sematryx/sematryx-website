import Link from 'next/link'
import { Metadata } from 'next'
import CodeBlock from '@/components/CodeBlock'
import { ArrowLeft, Plug, Bot, Code, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Agent Integrations (MCP) - Technical Integration Guide | Sematryx',
  description: 'Technical guide for integrating Sematryx with AI agents using the Model Context Protocol (MCP).',
}

export default function MCPIntegrationPage() {
  const setupCode = `# Install MCP client
npm install @sematryx/mcp-client

# Or with Python
pip install sematryx-mcp-client`

  const jsExample = `import { MCPClient } from '@sematryx/mcp-client'
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

  const pythonExample = `from sematryx.client.sdk import SematryxClient
from sematryx.mcp import MCPClient

# Initialize client
client = SematryxClient(api_key="your-api-key")

# Connect MCP
mcp_client = MCPClient(
    server_url="https://api.sematryx.com/mcp",
    transport="stdio"
)
mcp_client.connect()`

  const toolsExample = `// Available MCP Tools
const mcpTools = [
  {
    name: 'optimize',
    description: 'Run optimization with Sematryx',
    parameters: {
      objective: 'string',
      constraints: 'object',
      bounds: 'array'
    }
  },
  {
    name: 'explain_result',
    description: 'Get explanation for optimization result',
    parameters: {
      result_id: 'string'
    }
  },
  {
    name: 'get_domain_libraries',
    description: 'List available domain libraries',
    parameters: {}
  }
]`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link 
          href="/mcp" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Agents Overview</span>
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <Plug className="w-8 h-8 text-brand-primary" />
          <h1 className="text-4xl font-bold text-gray-200">
            Agent Integrations (MCP)
          </h1>
        </div>
        <p className="text-xl text-gray-400">
          Technical integration guide for connecting Sematryx with AI agents using the Model Context Protocol.
        </p>
      </div>

      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-gray-300 leading-relaxed">
          Sematryx provides a Model Context Protocol (MCP) server that allows AI agents to interact with
          the optimization engine. This enables agents to run optimizations, retrieve explanations, and
          access domain libraries as tools.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">Setup</h2>
        <CodeBlock code={setupCode} language="bash" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">JavaScript Integration</h2>
        <CodeBlock code={jsExample} language="javascript" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">Python Integration</h2>
        <CodeBlock code={pythonExample} language="python" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">Available Tools</h2>
        <CodeBlock code={toolsExample} language="javascript" />
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3 text-text-secondary">
            <Zap className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-text-primary">optimize</div>
              <div>Run optimization problems with full parameter support</div>
            </div>
          </div>
          <div className="flex items-start gap-3 text-text-secondary">
            <Bot className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-text-primary">explain_result</div>
              <div>Get natural language explanations for optimization results</div>
            </div>
          </div>
          <div className="flex items-start gap-3 text-text-secondary">
            <Code className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-text-primary">get_domain_libraries</div>
              <div>Discover and use domain-specific optimization libraries</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">Authentication</h2>
        <div className="bg-elevated border border-elevated-3 rounded-lg p-6">
          <p className="text-text-secondary mb-4">
            MCP connections require API key authentication. Set your API key as an environment variable:
          </p>
          <CodeBlock code="export SEMATRYX_API_KEY=your-api-key" language="bash" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">Security</h2>
        <div className="flex items-start gap-3 text-text-secondary">
          <Shield className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="mb-2">
              All MCP connections are encrypted using TLS. API keys are never transmitted in plain text,
              and all requests are authenticated and rate-limited per your account settings.
            </p>
            <p>
              For production deployments, use environment variables or secure key management systems
              to store API keys.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-elevated-3 pt-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">Next Steps</h2>
        <div className="space-y-4">
          <Link
            href="/mcp"
            className="block p-4 bg-elevated border border-elevated-3 rounded-lg hover:bg-elevated-2 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-text-primary">Agents Overview</div>
                <div className="text-sm text-text-secondary">Learn about Sematryx agent capabilities</div>
              </div>
              <ArrowLeft className="w-5 h-5 text-text-secondary" />
            </div>
          </Link>
          <Link
            href="/tutorials/mcp-agent-demo"
            className="block p-4 bg-elevated border border-elevated-3 rounded-lg hover:bg-elevated-2 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-text-primary">MCP Agent Demo Tutorial</div>
                <div className="text-sm text-text-secondary">Run the interactive agent demo</div>
              </div>
              <ArrowLeft className="w-5 h-5 text-text-secondary" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

