'use client'

import { useState, useEffect } from 'react'
import { Key, Plus, Copy, Trash2, Eye, EyeOff, AlertTriangle, Check } from 'lucide-react'

interface ApiKey {
  id: string
  name: string
  key_prefix: string
  created_at: string
  last_used_at: string | null
  is_active: boolean
}

interface NewKeyResponse extends ApiKey {
  full_key: string
}

export default function ApiKeysPage() {
  const [keys, setKeys] = useState<ApiKey[]>([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newKeyName, setNewKeyName] = useState('')
  const [newlyCreatedKey, setNewlyCreatedKey] = useState<string | null>(null)
  const [showKey, setShowKey] = useState(false)
  const [copied, setCopied] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  useEffect(() => {
    fetchKeys()
  }, [])

  async function fetchKeys() {
    try {
      const response = await fetch('/api/keys')
      if (response.ok) {
        const data = await response.json()
        setKeys(data.keys)
      }
    } catch (error) {
      console.error('Failed to fetch keys:', error)
    } finally {
      setLoading(false)
    }
  }

  async function createKey() {
    if (!newKeyName.trim()) return
    
    setCreating(true)
    try {
      const response = await fetch('/api/keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newKeyName }),
      })
      
      if (response.ok) {
        const data: NewKeyResponse = await response.json()
        setNewlyCreatedKey(data.full_key)
        setKeys(prev => [data, ...prev])
        setNewKeyName('')
      }
    } catch (error) {
      console.error('Failed to create key:', error)
    } finally {
      setCreating(false)
    }
  }

  async function revokeKey(keyId: string) {
    try {
      const response = await fetch(`/api/keys/${keyId}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        setKeys(prev => prev.map(k => 
          k.id === keyId ? { ...k, is_active: false } : k
        ))
        setDeleteConfirm(null)
      }
    } catch (error) {
      console.error('Failed to revoke key:', error)
    }
  }

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const activeKeys = keys.filter(k => k.is_active)
  const revokedKeys = keys.filter(k => !k.is_active)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">API Keys</h1>
          <p className="text-gray-400 mt-1">
            Manage your API keys for accessing the Sematryx API
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Create Key
        </button>
      </div>

      {/* Newly Created Key Alert */}
      {newlyCreatedKey && (
        <div className="bg-green-900/30 border border-green-700 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <Key className="h-6 w-6 text-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                API Key Created Successfully
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Make sure to copy your API key now. You won't be able to see it again!
              </p>
              <div className="flex items-center gap-3 bg-[#0f1419] rounded-lg p-4 border border-gray-700">
                <code className="flex-1 font-mono text-sm text-gray-300 break-all">
                  {showKey ? newlyCreatedKey : '•'.repeat(40)}
                </code>
                <button
                  onClick={() => setShowKey(!showKey)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title={showKey ? 'Hide key' : 'Show key'}
                >
                  {showKey ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
                <button
                  onClick={() => copyToClipboard(newlyCreatedKey)}
                  className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <button
                onClick={() => {
                  setNewlyCreatedKey(null)
                  setShowKey(false)
                }}
                className="mt-4 text-sm text-gray-500 hover:text-gray-400 transition-colors"
              >
                Dismiss this message
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Keys */}
      <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">Active Keys</h2>
          <p className="text-gray-500 text-sm mt-1">
            {activeKeys.length} active key{activeKeys.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : activeKeys.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Key className="h-12 w-12 text-gray-600 mb-4" />
            <p className="text-gray-400 mb-2">No API keys yet</p>
            <p className="text-sm text-gray-600 mb-4">Create your first API key to get started</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Create Key
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-800">
            {activeKeys.map((key) => (
              <div key={key.id} className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-500/10 p-2 rounded-lg">
                    <Key className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{key.name}</div>
                    <div className="text-sm text-gray-500 font-mono">{key.key_prefix}••••••••</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                    <div className="text-sm text-gray-400">Created</div>
                    <div className="text-sm text-gray-500">{formatDate(key.created_at)}</div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="text-sm text-gray-400">Last used</div>
                    <div className="text-sm text-gray-500">
                      {key.last_used_at ? formatDate(key.last_used_at) : 'Never'}
                    </div>
                  </div>
                  {deleteConfirm === key.id ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => revokeKey(key.id)}
                        className="px-3 py-1.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-500 transition-colors"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="px-3 py-1.5 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirm(key.id)}
                      className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      title="Revoke key"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Revoked Keys */}
      {revokedKeys.length > 0 && (
        <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 overflow-hidden opacity-60">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-xl font-semibold text-gray-400">Revoked Keys</h2>
            <p className="text-gray-600 text-sm mt-1">
              {revokedKeys.length} revoked key{revokedKeys.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="divide-y divide-gray-800">
            {revokedKeys.map((key) => (
              <div key={key.id} className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-700/50 p-2 rounded-lg">
                    <Key className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <div className="text-gray-400 font-medium">{key.name}</div>
                    <div className="text-sm text-gray-600 font-mono">{key.key_prefix}••••••••</div>
                  </div>
                </div>
                <span className="text-xs bg-red-900/30 text-red-400 px-2 py-1 rounded-full">
                  Revoked
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create Key Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1f2e] rounded-xl border border-gray-700 w-full max-w-md shadow-2xl">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">Create API Key</h2>
              <p className="text-gray-500 text-sm mt-1">
                Give your key a name to help you remember what it's used for
              </p>
            </div>
            <div className="p-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Key Name
              </label>
              <input
                type="text"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="e.g., Production, Development, Testing"
                className="w-full px-4 py-3 bg-[#0f1419] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                autoFocus
              />
            </div>
            <div className="p-6 border-t border-gray-800 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowCreateModal(false)
                  setNewKeyName('')
                }}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  createKey()
                  setShowCreateModal(false)
                }}
                disabled={!newKeyName.trim() || creating}
                className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {creating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                    Creating...
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4" />
                    Create Key
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

