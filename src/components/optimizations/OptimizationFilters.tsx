'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, X } from 'lucide-react'

interface OptimizationFiltersProps {
  filters: {
    status?: string
    strategy?: string
    startDate?: string
    endDate?: string
    search?: string
  }
  onFiltersChange: (filters: {
    status?: string
    strategy?: string
    startDate?: string
    endDate?: string
    search?: string
  }) => void
  availableStrategies: string[]
}

export default function OptimizationFilters({
  filters,
  onFiltersChange,
  availableStrategies,
}: OptimizationFiltersProps) {
  const [localFilters, setLocalFilters] = useState(filters)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    setLocalFilters(filters)
  }, [filters])

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...localFilters, [key]: value || undefined }
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const cleared = {}
    setLocalFilters(cleared)
    onFiltersChange(cleared)
  }

  const hasActiveFilters = Object.values(filters).some((v) => v)

  return (
    <div className="bg-[#1a1f2e] rounded-xl border border-gray-800 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <h3 className="text-sm font-semibold text-white">Filters</h3>
          {hasActiveFilters && (
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary-500/20 text-primary-400">
              {Object.values(filters).filter(Boolean).length} active
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <X className="h-3 w-3" />
              Clear
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            {isExpanded ? 'Less' : 'More'}
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by problem ID..."
            value={localFilters.search || ''}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#242b3d] border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Quick Filters (Always Visible) */}
      <div className="flex flex-wrap gap-2 mb-4">
        <select
          value={localFilters.status || ''}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="px-3 py-2 bg-[#242b3d] border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">All Status</option>
          <option value="completed">Completed</option>
          <option value="failed">Failed</option>
          <option value="running">Running</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <select
          value={localFilters.strategy || ''}
          onChange={(e) => handleFilterChange('strategy', e.target.value)}
          className="px-3 py-2 bg-[#242b3d] border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">All Strategies</option>
          {availableStrategies.map((strategy) => (
            <option key={strategy} value={strategy}>
              {strategy}
            </option>
          ))}
        </select>
      </div>

      {/* Expanded Filters */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-800">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={localFilters.startDate || ''}
              onChange={(e) => handleFilterChange('startDate', e.target.value)}
              className="w-full px-3 py-2 bg-[#242b3d] border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">
              End Date
            </label>
            <input
              type="date"
              value={localFilters.endDate || ''}
              onChange={(e) => handleFilterChange('endDate', e.target.value)}
              className="w-full px-3 py-2 bg-[#242b3d] border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
      )}
    </div>
  )
}
