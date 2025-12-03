import CodeBlock from '@/components/CodeBlock'

export default function AuthenticationPage() {
  const authExample = `curl -X POST https://api.aeao.com/v1/optimize \\
  -H "Authorization: Bearer aeao_1234567890abcdef" \\
  -H "Content-Type: application/json" \\
  -d '{
    "objective_function_id": "func_1234567890",
    "bounds": [[-5, 5], [-5, 5]]
  }'`

  const jsAuthExample = `import { AEAO } from '@aeao/javascript-sdk'

// Initialize with your API key
const aeao = new AEAO('aeao_1234567890abcdef')

// All requests will automatically include authentication
const result = await aeao.optimize({
  objective_function: (x) => x.reduce((s, v) => s + v * v, 0),
  bounds: [[-5, 5], [-5, 5]],
  max_evaluations: 1000
})`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Authentication
        </h1>
        <p className="text-xl text-gray-400">
          Learn how to authenticate your requests to the <span className="text-primary-400">AEAO</span> API using API keys.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            API Key Authentication
          </h2>
          <p className="text-gray-400 mb-4">
            <span className="text-primary-400">AEAO</span> uses API keys for authentication. Include your API key in the Authorization header 
            of every request using the Bearer token format.
          </p>
          <CodeBlock
            code={authExample}
            language="bash"
            title="Authentication with curl"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Getting Your API Key
          </h2>
          <p className="text-gray-400 mb-4">
            You can get your API key by:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-400 mb-4">
            <li>Visiting the <a href="/api-keys" className="text-primary-400 hover:text-primary-300 underline">API Keys page</a></li>
            <li>Selecting a pricing plan</li>
            <li>Completing the checkout process</li>
            <li>Your API key will be displayed on the success page</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Using SDKs
          </h2>
          <p className="text-gray-400 mb-4">
            When using our official SDKs, authentication is handled automatically:
          </p>
          <CodeBlock
            code={jsAuthExample}
            language="javascript"
            title="Authentication with JavaScript SDK"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Security Best Practices
          </h2>
          <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">Keep Your API Key Secure</h3>
            <ul className="space-y-2 text-yellow-300">
              <li>• Never expose your API key in client-side code</li>
              <li>• Store API keys as environment variables</li>
              <li>• Rotate your API keys regularly</li>
              <li>• Use different keys for development and production</li>
              <li>• Monitor your API key usage from the dashboard</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Error Responses
          </h2>
          <p className="text-gray-400 mb-4">
            If authentication fails, you'll receive a 401 Unauthorized response:
          </p>
          <CodeBlock
            code={`{
  "error": {
    "type": "authentication_error",
    "message": "Invalid API key provided",
    "code": "invalid_api_key"
  }
}`}
            language="json"
            title="Authentication error response"
          />
        </section>
      </div>
    </div>
  )
}