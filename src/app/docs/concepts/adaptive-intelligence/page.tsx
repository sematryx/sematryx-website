import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { ArrowLeft, Brain } from 'lucide-react'

export default function AdaptiveIntelligencePage() {
  const simpleConfig = `from sematryx import Sematryx

client = Sematryx(api_key="sk-your-api-key")

# Enable Adaptive Intelligence
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    use_adaptive_intelligence=True
)`

  const learningConfig = `from sematryx import Sematryx

client = Sematryx(api_key="sk-your-api-key")

# Configure learning behavior
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    learning={
        "read_from_private": True,   # Learn from your past optimizations
        "write_to_private": True,    # Store result for future learning
        "read_from_public": False    # Don't use public patterns (privacy)
    }
)`

  const advancedConfig = `from sematryx import Sematryx

client = Sematryx(api_key="sk-your-api-key")

# Advanced Adaptive Intelligence configuration
result = client.optimize(
    objective="minimize",
    variables=[{"name": "x", "bounds": (-5, 5)}, {"name": "y", "bounds": (-5, 5)}],
    objective_function=sphere,
    intelligence_config={
        "use_adaptive_intelligence": True,
        "adaptive": {
            "learning_enabled": True,
            "cross_problem_learning": True,  # Learn across different problem types
            "memory_retention": 90,  # Days to retain learned patterns
            "meta_learning": True  # Enable meta-learning capabilities
        }
    }
)`

  const restAPIConfig = `curl -X POST https://api.sematryx.com/v1/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective_function_id": "func_1234567890",
    "bounds": [[-10, 10], [-10, 10]],
    "max_evaluations": 2000,
    "intelligence_config": {
      "use_adaptive_intelligence": true,
      "adaptive": {
        "learning_enabled": true,
        "cross_problem_learning": true,
        "memory_retention": 90,
        "meta_learning": true
      }
    },
    "learning": {
      "read_from_private": true,
      "write_to_private": true
    }
  }'`

  const javascriptConfig = `import { Sematryx } from '@sematryx/javascript-sdk'

const client = new Sematryx('sk-your-api-key')

// Enable Adaptive Intelligence
const result = await client.optimize({
  objective: 'minimize',
  variables: [
    { name: 'x', bounds: [-5, 5] },
    { name: 'y', bounds: [-5, 5] }
  ],
  objectiveFunction: sphere,
  learning: {
    readFromPrivate: true,
    writeToPrivate: true
  },
  intelligenceConfig: {
    adaptive: {
      learningEnabled: true,
      crossProblemLearning: true,
      memoryRetention: 90,
      metaLearning: true
    }
  }
})`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <Link 
          href="/docs/api/intelligence-config" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Three Intelligence Pillars</span>
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-pink-500/20 p-2 rounded-lg">
            <Brain className="w-8 h-8 text-pink-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-200">
            Adaptive Intelligence
          </h1>
        </div>
        <p className="text-xl text-gray-400">
          Developer guide for configuring and using Adaptive Intelligence—self-improvement and 
          continuous learning from optimization experience.
        </p>
      </div>

      <div className="space-y-8">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Overview
          </h2>
          <p className="text-gray-400 mb-4">
            Adaptive Intelligence enables the system to learn from every optimization, recognize similar 
            problems, and improve performance over time. It uses problem signature detection, pattern 
            recognition, and cross-problem learning to continuously enhance optimization strategies.
          </p>
          <div className="bg-pink-950/40 border border-pink-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-pink-400 mb-3">How It Works</h3>
            <ol className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="text-pink-400 font-bold">1.</span>
                <span><strong className="text-gray-200">Problem Signature Detection:</strong> System recognizes similar problems based on characteristics, constraints, and patterns</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 font-bold">2.</span>
                <span><strong className="text-gray-200">Strategy Recall:</strong> Retrieves successful strategies from past optimizations of similar problems</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 font-bold">3.</span>
                <span><strong className="text-gray-200">Pattern Learning:</strong> Identifies patterns across different problem types to improve strategy selection</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 font-bold">4.</span>
                <span><strong className="text-gray-200">Continuous Improvement:</strong> Each optimization adds to the knowledge base, improving future performance</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Learning Stores */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Learning Stores
          </h2>
          <p className="text-gray-400 mb-4">
            Adaptive Intelligence uses two types of learning stores:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Private Learning Store</h3>
              <p className="text-sm text-gray-400">
                Your organization's private knowledge base. Stores patterns and strategies learned from 
                your optimizations. Never shared with other organizations.
              </p>
            </div>
            <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Public Learning Store</h3>
              <p className="text-sm text-gray-400">
                Shared knowledge base with anonymized patterns from all users. Provides broader 
                learning but may not be suitable for sensitive problems.
              </p>
            </div>
          </div>
        </section>

        {/* Simple Configuration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Simple Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Enable Adaptive Intelligence with a simple boolean flag:
          </p>
          <CodeBlock
            code={simpleConfig}
            language="python"
            title="Enable Adaptive Intelligence"
          />
        </section>

        {/* Learning Configuration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Learning Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Control what the system learns from and writes to:
          </p>
          <CodeBlock
            code={learningConfig}
            language="python"
            title="Configure Learning Behavior"
          />
          <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Learning Options</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <strong className="text-gray-200">read_from_private</strong> (bool, default: False)
                <p className="text-gray-500 mt-1">Learn from your organization's past optimizations. Recommended for recurring problems.</p>
              </li>
              <li>
                <strong className="text-gray-200">write_to_private</strong> (bool, default: False)
                <p className="text-gray-500 mt-1">Store optimization results in your private learning store for future use.</p>
              </li>
              <li>
                <strong className="text-gray-200">read_from_public</strong> (bool, default: False)
                <p className="text-gray-500 mt-1">Learn from anonymized public patterns. Useful for novel problems but may not be suitable for sensitive data.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Advanced Configuration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Advanced Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Fine-tune Adaptive Intelligence behavior with advanced options:
          </p>
          <CodeBlock
            code={advancedConfig}
            language="python"
            title="Advanced Adaptive Configuration"
          />
          <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Configuration Options</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <strong className="text-gray-200">learning_enabled</strong> (bool, default: True)
                <p className="text-gray-500 mt-1">Enable the learning system. Disable to prevent any learning operations.</p>
              </li>
              <li>
                <strong className="text-gray-200">cross_problem_learning</strong> (bool, default: True)
                <p className="text-gray-500 mt-1">Allow learning across different problem types. Enables meta-learning capabilities.</p>
              </li>
              <li>
                <strong className="text-gray-200">memory_retention</strong> (int, default: 90)
                <p className="text-gray-500 mt-1">Number of days to retain learned patterns. Older patterns are gradually deprecated.</p>
              </li>
              <li>
                <strong className="text-gray-200">meta_learning</strong> (bool, default: False)
                <p className="text-gray-500 mt-1">Enable meta-learning to improve how the system learns. Advanced feature for long-term optimization projects.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* REST API */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            REST API Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Configure Adaptive Intelligence via REST API:
          </p>
          <CodeBlock
            code={restAPIConfig}
            language="bash"
            title="REST API - Adaptive Intelligence"
          />
        </section>

        {/* JavaScript SDK */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            JavaScript SDK Configuration
          </h2>
          <p className="text-gray-400 mb-4">
            Configure Adaptive Intelligence using the JavaScript SDK:
          </p>
          <CodeBlock
            code={javascriptConfig}
            language="javascript"
            title="JavaScript SDK - Adaptive Intelligence"
          />
        </section>

        {/* Best Practices */}
        <section className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Best Practices
          </h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">•</span>
              <span><strong className="text-gray-200">Enable for recurring problems:</strong> Adaptive Intelligence is most valuable when you run similar optimizations regularly.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">•</span>
              <span><strong className="text-gray-200">Use private learning for sensitive data:</strong> Keep read_from_public disabled when working with proprietary or sensitive problems.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">•</span>
              <span><strong className="text-gray-200">Write to private store:</strong> Enable write_to_private to build your organization's knowledge base over time.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">•</span>
              <span><strong className="text-gray-200">Adjust memory retention:</strong> Increase retention for stable problem types, decrease for rapidly changing environments.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">•</span>
              <span><strong className="text-gray-200">Enable meta-learning for long-term projects:</strong> Use meta_learning when running optimization projects over months or years.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

