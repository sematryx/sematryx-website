'use client'

import { useState } from 'react'
import CodeBlock from './CodeBlock'

interface Parameter {
  name: string
  type: string
  required: boolean
  description: string
  default?: string
}

interface EndpointDetail {
  method: string
  path: string
  description: string
  category: string
  pathParams?: Parameter[]
  queryParams?: Parameter[]
  requestBody?: {
    description?: string
    parameters: Parameter[]
    example?: string
  }
  response?: {
    description?: string
    example: string
  }
  curlExample?: string
}

interface ExpandableEndpointProps {
  endpoint: EndpointDetail
  isExpanded: boolean
  onToggle: () => void
}

export default function ExpandableEndpoint({ endpoint, isExpanded, onToggle }: ExpandableEndpointProps) {
  const methodColors = {
    'GET': 'bg-blue-100 text-blue-800 border-blue-200',
    'POST': 'bg-green-100 text-green-800 border-green-200',
    'PUT': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'PATCH': 'bg-orange-100 text-orange-800 border-orange-200',
    'DELETE': 'bg-red-100 text-red-800 border-red-200',
  }

  const methodColor = methodColors[endpoint.method as keyof typeof methodColors] || 'bg-gray-100 text-gray-800 border-gray-200'

  return (
    <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
      >
        <div className="flex items-center gap-4 flex-1">
          <span className={`px-3 py-1 rounded text-sm font-semibold border ${methodColor}`}>
            {endpoint.method}
          </span>
          <code className="text-sm font-mono text-gray-900 flex-1">{endpoint.path}</code>
          <span className="text-sm text-gray-600 hidden md:block">{endpoint.description}</span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Description</h4>
              <p className="text-sm text-gray-700">{endpoint.description}</p>
            </div>

            {endpoint.pathParams && endpoint.pathParams.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Path Parameters</h4>
                <div className="bg-white rounded border border-gray-200 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Name</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Type</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Required</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {endpoint.pathParams.map((param, idx) => (
                        <tr key={idx}>
                          <td className="px-4 py-2">
                            <code className="text-sm bg-gray-100 px-2 py-1 rounded">{param.name}</code>
                          </td>
                          <td className="px-4 py-2 text-gray-700">{param.type}</td>
                          <td className="px-4 py-2">
                            {param.required ? (
                              <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Required</span>
                            ) : (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Optional</span>
                            )}
                          </td>
                          <td className="px-4 py-2 text-gray-700">{param.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {endpoint.queryParams && endpoint.queryParams.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Query Parameters</h4>
                <div className="bg-white rounded border border-gray-200 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Name</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Type</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Required</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Default</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {endpoint.queryParams.map((param, idx) => (
                        <tr key={idx}>
                          <td className="px-4 py-2">
                            <code className="text-sm bg-gray-100 px-2 py-1 rounded">{param.name}</code>
                          </td>
                          <td className="px-4 py-2 text-gray-700">{param.type}</td>
                          <td className="px-4 py-2">
                            {param.required ? (
                              <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Required</span>
                            ) : (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Optional</span>
                            )}
                          </td>
                          <td className="px-4 py-2 text-gray-700">
                            {param.default ? <code className="text-xs bg-gray-100 px-1 rounded">{param.default}</code> : '-'}
                          </td>
                          <td className="px-4 py-2 text-gray-700">{param.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {endpoint.requestBody && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Request Body</h4>
                {endpoint.requestBody.description && (
                  <p className="text-sm text-gray-700 mb-3">{endpoint.requestBody.description}</p>
                )}
                <div className="bg-white rounded border border-gray-200 overflow-hidden mb-4">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Name</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Type</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Required</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Default</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {endpoint.requestBody.parameters.map((param, idx) => (
                        <tr key={idx}>
                          <td className="px-4 py-2">
                            <code className="text-sm bg-gray-100 px-2 py-1 rounded">{param.name}</code>
                          </td>
                          <td className="px-4 py-2 text-gray-700">{param.type}</td>
                          <td className="px-4 py-2">
                            {param.required ? (
                              <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Required</span>
                            ) : (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Optional</span>
                            )}
                          </td>
                          <td className="px-4 py-2 text-gray-700">
                            {param.default ? <code className="text-xs bg-gray-100 px-1 rounded">{param.default}</code> : '-'}
                          </td>
                          <td className="px-4 py-2 text-gray-700">{param.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {endpoint.requestBody.example && (
                  <CodeBlock
                    code={endpoint.requestBody.example}
                    language="json"
                    title="Request Example"
                  />
                )}
              </div>
            )}

            {endpoint.curlExample && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">cURL Example</h4>
                <CodeBlock
                  code={endpoint.curlExample}
                  language="bash"
                  title="cURL"
                />
              </div>
            )}

            {endpoint.response && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Response</h4>
                {endpoint.response.description && (
                  <p className="text-sm text-gray-700 mb-3">{endpoint.response.description}</p>
                )}
                <CodeBlock
                  code={endpoint.response.example}
                  language="json"
                  title="Response Example"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

