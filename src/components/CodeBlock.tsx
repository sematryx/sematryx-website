'use client'

import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language: string
  title?: string
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden my-6">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
          {title}
        </div>
      )}
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <pre className="p-4 overflow-x-auto">
          <code className={`language-${language} text-gray-100`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}