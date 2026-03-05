import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, Plug, Bot, Zap, Shield, CheckCircle2, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'MCP Integration Quickstart - Sematryx Docs',
  description: 'Connect Sematryx to Claude Desktop, Cline, or any MCP-compatible AI agent in under two minutes. Expert optimization as a tool call.',
}

export default function MCPIntegrationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <Link
          href="/mcp"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to MCP Overview</span>
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-brand-primary/20 p-2 rounded-lg">
            <Plug className="w-8 h-8 text-brand-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-200">
            MCP Integration Quickstart
          </h1>
        </div>
        <p className="text-xl text-gray-400">
          Add Sematryx to Claude Desktop, Cline, or any MCP-compatible agent.
          Your agent gains expert optimization — call one tool, get an optimal answer with full explanation.
        </p>
      </div>

      <div className="space-y-12">

        {/* Prerequisites */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Prerequisites</h2>
          <div className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-gray-200 font-medium">Sematryx API key</span>
                <span className="text-gray-400"> — </span>
                <Link href="/api-keys" className="text-brand-primary hover:underline">Get one free</Link>
                <span className="text-gray-400"> (100 solves/month, no credit card required)</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-gray-200 font-medium">Claude Desktop</span>
                <span className="text-gray-400"> or </span>
                <span className="text-gray-200 font-medium">Cline</span>
                <span className="text-gray-400"> (or any MCP-compatible agent)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Claude Desktop */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-violet-500/20 p-2 rounded-lg">
              <Bot className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-200">Claude Desktop</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Step 1: Find your config file</h3>
              <div className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400 font-mono text-sm w-24 flex-shrink-0">macOS:</span>
                    <code className="font-mono text-sm text-gray-300 bg-[#141418] px-3 py-1 rounded">
                      ~/Library/Application Support/Claude/claude_desktop_config.json
                    </code>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400 font-mono text-sm w-24 flex-shrink-0">Windows:</span>
                    <code className="font-mono text-sm text-gray-300 bg-[#141418] px-3 py-1 rounded">
                      %APPDATA%\Claude\claude_desktop_config.json
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Step 2: Add Sematryx to the config</h3>
              <div className="bg-[#141418] border border-gray-700 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/5">
                  <Code className="w-4 h-4 text-gray-400" />
                  <span className="font-mono text-xs text-gray-400">claude_desktop_config.json</span>
                </div>
                <pre className="p-5 font-mono text-sm text-gray-300 overflow-x-auto">{`{
  "mcpServers": {
    "sematryx": {
      "command": "npx",
      "args": ["-y", "@sematryx/mcp-server"],
      "env": {
        "SEMATRYX_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}`}</pre>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                Replace <code className="font-mono text-brand-primary bg-[#1a1f2e] px-1.5 py-0.5 rounded">YOUR_API_KEY_HERE</code> with your key from{' '}
                <Link href="/dashboard/keys" className="text-brand-primary hover:underline">/dashboard/keys</Link>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Step 3: Restart Claude Desktop</h3>
              <div className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-5">
                <p className="text-gray-300 mb-3">
                  Quit and reopen Claude Desktop. You should see Sematryx tools in the tool picker (hammer icon).
                </p>
                <div className="flex flex-wrap gap-2">
                  {['sematryx_optimize', 'sematryx_explain', 'sematryx_compare'].map(tool => (
                    <span key={tool} className="font-mono text-xs bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-2.5 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Step 4: Test it</h3>
              <div className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-5">
                <p className="text-gray-400 text-sm mb-3">Ask Claude:</p>
                <blockquote className="border-l-4 border-brand-primary pl-4 text-gray-300 italic">
                  &ldquo;Use Sematryx to find the optimal learning rate and dropout for a neural net,
                  where lr is between 0.00001 and 0.1, dropout between 0.0 and 0.5,
                  minimizing validation loss.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Cline */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Plug className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-200">Cline (VS Code)</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Step 1: Open Cline MCP settings</h3>
              <div className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-5">
                <p className="text-gray-300 text-sm">
                  In VS Code: <span className="font-mono bg-[#141418] px-1.5 py-0.5 rounded text-gray-300">Ctrl+Shift+P</span> (or <span className="font-mono bg-[#141418] px-1.5 py-0.5 rounded text-gray-300">Cmd+Shift+P</span> on Mac) →{' '}
                  <span className="font-semibold text-white">Cline: Open MCP Settings</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Step 2: Add Sematryx server</h3>
              <div className="bg-[#141418] border border-gray-700 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/5">
                  <Code className="w-4 h-4 text-gray-400" />
                  <span className="font-mono text-xs text-gray-400">Cline MCP Config</span>
                </div>
                <pre className="p-5 font-mono text-sm text-gray-300 overflow-x-auto">{`{
  "sematryx": {
    "command": "npx",
    "args": ["-y", "@sematryx/mcp-server"],
    "env": {
      "SEMATRYX_API_KEY": "YOUR_API_KEY_HERE"
    },
    "disabled": false,
    "alwaysAllow": []
  }
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Step 3: Test it</h3>
              <div className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-5">
                <p className="text-gray-400 text-sm mb-3">Ask Cline in a new task:</p>
                <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-300 italic">
                  &ldquo;Use the sematryx_optimize tool to find the optimal allocation of a $100k budget
                  across 3 channels: email ($5k–$40k), paid search ($20k–$60k), social ($10k–$50k).
                  Maximize expected conversions.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Other agents / raw MCP */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Other Agents / Custom Integration</h2>
          <div className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              Sematryx runs a standard MCP server at <code className="font-mono text-brand-primary bg-[#141418] px-1.5 py-0.5 rounded">mcp.sematryx.com</code>.
              Any MCP-compatible agent can connect using HTTP/SSE transport.
            </p>
            <div className="bg-[#141418] border border-gray-700 rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/5">
                <Code className="w-4 h-4 text-gray-400" />
                <span className="font-mono text-xs text-gray-400">HTTP/SSE transport config</span>
              </div>
              <pre className="p-5 font-mono text-sm text-gray-300 overflow-x-auto">{`{
  "mcpServers": {
    "sematryx": {
      "url": "https://mcp.sematryx.com/sse",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY_HERE"
      }
    }
  }
}`}</pre>
            </div>
          </div>
        </section>

        {/* What the tools return */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">Tool Response Format</h2>
          <div className="space-y-4">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-6">
              <h3 className="font-mono text-brand-primary font-semibold mb-3">sematryx_optimize</h3>
              <div className="bg-[#141418] border border-gray-700 rounded-xl overflow-hidden">
                <pre className="p-5 font-mono text-sm text-gray-300 overflow-x-auto">{`{
  "success": true,
  "optimal_value": -1.2345,
  "optimal_params": [0.00312, 0.18],
  "solver_used": "cma_es",
  "evaluations": 847,
  "dimensions": 2,
  "explanation": "CMA-ES selected for smooth 2D landscape. Found minimum
at lr=0.00312, dropout=0.18. Lower lr prevents gradient explosion;
moderate dropout avoids overfitting. Solution stable across 5 restarts."
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing reminder */}
        <section className="bg-gradient-to-r from-brand-primary/10 to-purple-500/10 border border-brand-primary/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Pay per solve — no subscription needed</h3>
              <p className="text-gray-300 text-sm">
                The free tier includes 100 solves/month — enough to build and test.
                Beyond that, $0.01 per simple solve, $0.05 per complex solve (≥50 dims or ≥5K evals).
                Credits never expire.
              </p>
              <Link href="/#pricing" className="inline-block mt-3 text-brand-primary hover:underline text-sm font-medium">
                See full pricing →
              </Link>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="bg-green-900/20 border border-green-700/50 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-green-200 mb-2">API Key Security</h3>
              <p className="text-green-200/80 text-sm">
                Store your API key in environment variables or a secret manager — never hardcode it in your prompt.
                For Claude Desktop, the <code className="font-mono bg-green-900/40 px-1 rounded">env</code> block in the config file is safe
                because it&apos;s only read server-side by the npx process, not sent to Claude.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">Next Steps</h2>
          <div className="space-y-3">
            <Link
              href="/tutorials/mcp-agent-demo"
              className="block p-5 bg-[#1a1f2e] border border-gray-700 rounded-xl hover:border-brand-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-200 mb-1 group-hover:text-brand-primary transition-colors">
                    Agent Demo Tutorial
                  </div>
                  <div className="text-sm text-gray-400">
                    Watch an agent use Sematryx to solve a portfolio optimization problem end-to-end
                  </div>
                </div>
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-brand-primary transition-colors rotate-180" />
              </div>
            </Link>
            <Link
              href="/docs"
              className="block p-5 bg-[#1a1f2e] border border-gray-700 rounded-xl hover:border-brand-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-200 mb-1 group-hover:text-brand-primary transition-colors">
                    Full API Reference
                  </div>
                  <div className="text-sm text-gray-400">
                    Python SDK, REST endpoints, and advanced configuration
                  </div>
                </div>
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-brand-primary transition-colors rotate-180" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
