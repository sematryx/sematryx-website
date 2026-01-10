'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import OptimizationResultsTable from '@/components/optimizations/OptimizationResultsTable'
import OptimizationFilters from '@/components/optimizations/OptimizationFilters'
import OptimizationPagination from '@/components/optimizations/OptimizationPagination'
import OptimizationStatsCards from '@/components/optimizations/OptimizationStatsCards'
import { Target, Plus, RefreshCw } from 'lucide-react'
import Link from 'next/link'

// Force dynamic rendering to avoid static generation issues with Clerk
export const dynamic = 'force-dynamic'

interface OptimizationListResponse {
  data: any[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  stats: {
    total: number
    successful: number
    failed: number
    running: number
    avgExecutionTime: number | null
    avgEvaluations: number | null
  }
  availableStrategies: string[]
}

function OptimizationsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Get initial state from URL params
  const [filters, setFilters] = useState<{
    status?: string
    strategy?: string
    startDate?: string
    endDate?: string
    search?: string
  }>({
    status: searchParams.get('status') || undefined,
    strategy: searchParams.get('strategy') || undefined,
    startDate: searchParams.get('startDate') || undefined,
    endDate: searchParams.get('endDate') || undefined,
    search: searchParams.get('search') || undefined,
  })
  
  const [sortBy, setSortBy] = useState<'created_at' | 'optimal_value' | 'evaluations_used'>(
    (searchParams.get('sortBy') as any) || 'created_at'
  )
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(
    (searchParams.get('sortOrder') as any) || 'desc'
  )
  const [page, setPage] = useState(parseInt(searchParams.get('page') || '1', 10))
  const [limit, setLimit] = useState(parseInt(searchParams.get('limit') || '20', 10))

  // Build query string
  const queryString = (() => {
    const params = new URLSearchParams()
    
    if (page > 1) params.set('page', page.toString())
    if (limit !== 20) params.set('limit', limit.toString())
    if (filters.status) params.set('status', filters.status)
    if (filters.strategy) params.set('strategy', filters.strategy)
    if (filters.startDate) params.set('startDate', filters.startDate)
    if (filters.endDate) params.set('endDate', filters.endDate)
    if (filters.search) params.set('search', filters.search)
    if (sortBy !== 'created_at') params.set('sortBy', sortBy)
    if (sortOrder !== 'desc') params.set('sortOrder', sortOrder)
    
    return params.toString()
  })()

  // Update URL when filters/sorting change
  useEffect(() => {
    const newUrl = queryString ? `/dashboard/optimizations?${queryString}` : '/dashboard/optimizations'
    router.replace(newUrl, { scroll: false })
  }, [queryString, router])

  // State for data fetching
  const [data, setData] = useState<OptimizationListResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [isSyncing, setIsSyncing] = useState(false)

  // Fetch data
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      setError(null)
      
      try {
        const apiUrl = `/api/optimizations?${queryString}`
        const res = await fetch(apiUrl)
        
        if (!res.ok) {
          throw new Error('Failed to fetch optimizations')
        }
        
        const result = await res.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [queryString])

  const mutate = () => {
    // Trigger refetch by updating a dependency
    setPage((p) => p)
  }

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
    setPage(1) // Reset to first page when filters change
  }

  const handleSort = (column: string, direction: 'asc' | 'desc') => {
    setSortBy(column as any)
    setSortOrder(direction)
    setPage(1) // Reset to first page when sorting changes
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit)
    setPage(1) // Reset to first page when limit changes
  }

  const handleSync = async () => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'optimizations/page.tsx:handleSync:entry',message:'handleSync called',data:{queryString,isSyncing,isLoading},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    setIsSyncing(true)
    setError(null)
    
    try {
      // Trigger sync by adding ?sync=true to the query
      const syncUrl = `/api/optimizations?${queryString ? queryString + '&' : ''}sync=true`
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'optimizations/page.tsx:handleSync:before-fetch',message:'About to fetch sync URL',data:{syncUrl},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      console.log('🔄 Triggering sync:', syncUrl)
      const res = await fetch(syncUrl)
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'optimizations/page.tsx:handleSync:after-fetch',message:'Fetch response received',data:{ok:res.ok,status:res.status,statusText:res.statusText},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: res.statusText }))
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'optimizations/page.tsx:handleSync:error',message:'Sync fetch failed',data:{errorData,status:res.status},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
        // #endregion
        console.error('❌ Sync failed:', errorData)
        throw new Error(errorData.error || errorData.message || 'Failed to sync optimizations')
      }
      
      const syncResult = await res.json()
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'optimizations/page.tsx:handleSync:sync-success',message:'Sync response received',data:{hasData:!!syncResult,keys:Object.keys(syncResult||{})},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      console.log('✅ Sync response:', syncResult)
      
      // Refetch data after sync
      const apiUrl = `/api/optimizations?${queryString}`
      const dataRes = await fetch(apiUrl)
      
      if (!dataRes.ok) {
        throw new Error('Failed to fetch optimizations after sync')
      }
      
      const result = await dataRes.json()
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'optimizations/page.tsx:handleSync:refetch-success',message:'Data refetched after sync',data:{resultCount:result?.data?.length||0,total:result?.pagination?.total||0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      console.log('📊 Fetched data after sync:', result)
      setData(result)
    } catch (err) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'optimizations/page.tsx:handleSync:catch',message:'Exception caught',data:{errorMessage:err instanceof Error ? err.message : String(err),errorName:err instanceof Error ? err.name : 'Unknown'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      console.error('❌ Sync error:', err)
      setError(err instanceof Error ? err : new Error('Unknown error'))
    } finally {
      setIsSyncing(false)
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'optimizations/page.tsx:handleSync:finally',message:'handleSync completed',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Target className="h-8 w-8 text-primary-400" />
            Optimization Results
          </h1>
          <p className="text-gray-400 mt-1">
            View and analyze your optimization history
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              // #region agent log
              fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'optimizations/page.tsx:button:onClick',message:'Sync button clicked',data:{isSyncing,isLoading,disabled:isSyncing || isLoading},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
              // #endregion
              handleSync()
            }}
            disabled={isSyncing || isLoading}
            className="hidden sm:flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw className={`h-4 w-4 ${isSyncing ? 'animate-spin' : ''}`} />
            {isSyncing ? 'Syncing...' : 'Sync'}
          </button>
          <Link
            href="/docs"
            className="hidden sm:flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Run Optimization
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      {data && (
        <OptimizationStatsCards
          stats={data.stats}
          loading={isLoading}
        />
      )}

      {/* Filters */}
      <OptimizationFilters
        filters={filters}
        onFiltersChange={handleFiltersChange}
        availableStrategies={data?.availableStrategies || []}
      />

      {/* Error State */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="text-red-400 font-semibold">Error loading optimizations</div>
            <button
              onClick={() => mutate()}
              className="text-sm text-red-400 hover:text-red-300 underline"
            >
              Retry
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            {error instanceof Error ? error.message : 'Unknown error occurred'}
          </p>
        </div>
      )}

      {/* Results Table */}
      <OptimizationResultsTable
        results={data?.data || []}
        loading={isLoading}
        onSort={handleSort}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />

      {/* Pagination */}
      {data && data.pagination.total > 0 && (
        <OptimizationPagination
          page={data.pagination.page}
          limit={data.pagination.limit}
          total={data.pagination.total}
          totalPages={data.pagination.totalPages}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      )}

      {/* Empty State (handled by table component) */}
    </div>
  )
}

export default function OptimizationsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    }>
      <OptimizationsContent />
    </Suspense>
  )
}
