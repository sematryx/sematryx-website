/**
 * Data sync service to fetch optimization results from Sematryx API
 * and store them in Supabase for fast dashboard access
 */

const SEMATRYX_API_URL = process.env.SEMATRYX_API_URL || 'https://api.sematryx.com'

/**
 * Fetch optimization result from Sematryx API
 */
export async function fetchOptimizationFromAPI(
  apiKey: string,
  operationId: string
): Promise<any> {
  const url = `${SEMATRYX_API_URL}/optimization/result/${operationId}`
  console.log('[DEBUG SYNC] Fetching optimization result:', { url, operationId, apiKeyPrefix: apiKey.substring(0, 10) })
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })

  console.log('[DEBUG SYNC] Result fetch response:', { ok: response.ok, status: response.status, statusText: response.statusText })

  if (!response.ok) {
    if (response.status === 404) {
      console.log('[DEBUG SYNC] Optimization not found (404):', operationId)
      return null
    }
    const errorText = await response.text()
    console.error('[DEBUG SYNC] Failed to fetch optimization:', { status: response.status, statusText: response.statusText, errorText })
    throw new Error(`Failed to fetch optimization: ${response.statusText}`)
  }

  const result = await response.json()
  console.log('[DEBUG SYNC] Optimization result received:', { 
    operationId: result.operation_id || result.problem_id,
    status: result.status,
    hasOptimalValue: result.optimal_value !== undefined,
    strategy: result.strategy_used
  })
  return result
}

/**
 * Fetch optimization status from Sematryx API
 */
export async function fetchOptimizationStatus(
  apiKey: string,
  operationId: string
): Promise<any> {
  const response = await fetch(`${SEMATRYX_API_URL}/optimization/status/${operationId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    if (response.status === 404) {
      return null
    }
    throw new Error(`Failed to fetch optimization status: ${response.statusText}`)
  }

  return await response.json()
}

/**
 * List optimizations from Sematryx API
 */
export async function listOptimizationsFromAPI(
  apiKey: string,
  options: {
    limit?: number
    offset?: number
  } = {}
): Promise<any[]> {
  const { limit = 100, offset = 0 } = options

  const url = `${SEMATRYX_API_URL}/optimization/?limit=${limit}&offset=${offset}`
  console.log('[DEBUG SYNC] Calling Sematryx API:', { url, apiKeyPrefix: apiKey.substring(0, 10) })
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })

  console.log('[DEBUG SYNC] API response status:', { ok: response.ok, status: response.status, statusText: response.statusText })
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'sync.ts:listOptimizationsFromAPI:response-status',message:'API response status',data:{ok:response.ok,status:response.status,statusText:response.statusText,url},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  // #endregion

  if (!response.ok) {
    const errorText = await response.text()
    console.error('[DEBUG SYNC] API error:', { status: response.status, statusText: response.statusText, errorText })
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'sync.ts:listOptimizationsFromAPI:error',message:'API error response',data:{status:response.status,statusText:response.statusText,errorText:errorText.substring(0,500)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    // Don't throw - return empty array so sync can continue (operations may still be fetchable individually)
    console.warn('[DEBUG SYNC] List endpoint failed, returning empty array. Individual operations may still be accessible.')
    return []
  }

  const data = await response.json()
  console.log('[DEBUG SYNC] API response received:', { 
    isArray: Array.isArray(data),
    hasOperations: !!data.operations,
    hasResults: !!data.results,
    keys: Object.keys(data),
    operationsCount: data.operations?.length || 0,
    totalCount: data.total_count || 'N/A',
    sample: data.operations?.slice(0, 2) || data.slice?.(0, 2) || 'N/A',
    fullResponse: data
  })
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'sync.ts:listOptimizationsFromAPI:response-data',message:'API response data',data:{isArray:Array.isArray(data),hasOperations:!!data.operations,hasResults:!!data.results,keys:Object.keys(data),operationsCount:data.operations?.length||0,totalCount:data.total_count||'N/A',operationsSample:data.operations?.slice(0,2)||data.slice?.(0,2)||null},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
  
  // Handle different response formats
  let result: any[] = []
  if (Array.isArray(data)) {
    result = data
  } else if (data.operations && Array.isArray(data.operations)) {
    result = data.operations
  } else if (data.results && Array.isArray(data.results)) {
    result = data.results
  } else {
    console.warn('[DEBUG SYNC] Unexpected API response format:', data)
    result = []
  }
  
  console.log('[DEBUG SYNC] Returning optimizations:', { 
    count: result.length, 
    operationIds: result.map((op: any) => op.operation_id || op.problem_id || 'NO_ID'),
    isEmpty: result.length === 0
  })
  
  if (result.length === 0) {
    console.warn('[DEBUG SYNC] ⚠️ API returned 0 optimizations. This could mean:')
    console.warn('[DEBUG SYNC]   1. Server was restarted and in-memory operations were lost')
    console.warn('[DEBUG SYNC]   2. No operations exist for this API key')
    console.warn('[DEBUG SYNC]   3. Operations are stored elsewhere (database)')
  }
  
  return result
}

/**
 * Transform Sematryx API response to our database schema
 */
export function transformAPIResponseToDB(
  apiResponse: any,
  userId: string
): {
  problem_id?: string
  optimal_solution?: number[]
  optimal_value?: number
  strategy_used?: string
  evaluations_used?: number
  convergence_history?: number[]
  execution_time?: number
  iterations?: number
  status: 'completed' | 'failed' | 'running' | 'cancelled'
  success?: boolean
  error_message?: string
  learning_applied?: boolean
  learning_insights?: any
  public_recall_count?: number
  private_recall_count?: number
  stored_to_public?: boolean
  stored_to_private?: boolean
  strategy_explanation?: string
  configuration?: any
  ai_reasoning_used?: boolean
  context_intelligence_used?: boolean
  domain?: string
  completed_at?: string
} {
  // Determine status
  let status: 'completed' | 'failed' | 'running' | 'cancelled' = 'running'
  if (apiResponse.status) {
    status = apiResponse.status as any
  } else if (apiResponse.optimal_value !== undefined) {
    status = 'completed'
  } else if (apiResponse.error) {
    status = 'failed'
  }

  return {
    problem_id: apiResponse.problem_id || apiResponse.operation_id,
    optimal_solution: apiResponse.optimal_solution,
    optimal_value: apiResponse.optimal_value,
    strategy_used: apiResponse.strategy_used,
    evaluations_used: apiResponse.evaluations_used,
    convergence_history: apiResponse.convergence_history,
    execution_time: apiResponse.execution_time,
    iterations: apiResponse.iterations,
    status,
    success: apiResponse.success ?? (status === 'completed' && !apiResponse.error),
    error_message: apiResponse.error || apiResponse.error_message,
    learning_applied: apiResponse.learning_applied || apiResponse.ai_reasoning_used || false,
    learning_insights: apiResponse.learning_insights || null,
    public_recall_count: apiResponse.public_recall_count || 0,
    private_recall_count: apiResponse.private_recall_count || 0,
    stored_to_public: apiResponse.stored_to_public || false,
    stored_to_private: apiResponse.stored_to_private || false,
    strategy_explanation: apiResponse.strategy_explanation || null,
    configuration: apiResponse.configuration || apiResponse.config || null,
    ai_reasoning_used: apiResponse.ai_reasoning_used || false,
    context_intelligence_used: apiResponse.context_intelligence_used || false,
    domain: apiResponse.domain || null,
    completed_at: apiResponse.completed_at || (status === 'completed' ? new Date().toISOString() : undefined),
  }
}

/**
 * Sync a single optimization from API to database
 */
export async function syncOptimizationToDB(
  apiKey: string,
  operationId: string,
  userId: string,
  storeOptimization: (userId: string, operationId: string, data: any) => Promise<any>
): Promise<any> {
  console.log('[DEBUG SYNC] syncOptimizationToDB called:', { operationId, userId })
  try {
    // Try to get result first (for completed optimizations)
    let apiData = await fetchOptimizationFromAPI(apiKey, operationId)
    console.log('[DEBUG SYNC] fetchOptimizationFromAPI result:', { hasData: !!apiData, operationId })

    // If result not found, try status endpoint (for running optimizations)
    if (!apiData) {
      console.log('[DEBUG SYNC] Result not found, trying status endpoint')
      apiData = await fetchOptimizationStatus(apiKey, operationId)
      console.log('[DEBUG SYNC] fetchOptimizationStatus result:', { hasData: !!apiData, operationId })
    }

    if (!apiData) {
      console.warn('[DEBUG SYNC] No data found for operation:', operationId)
      return null
    }

    // Transform and store
    console.log('[DEBUG SYNC] Transforming API response')
    const transformed = transformAPIResponseToDB(apiData, userId)
    console.log('[DEBUG SYNC] Transformed data:', { 
      operationId, 
      status: transformed.status, 
      hasOptimalValue: transformed.optimal_value !== undefined,
      strategy: transformed.strategy_used 
    })
    
    console.log('[DEBUG SYNC] Calling storeOptimization')
    const result = await storeOptimization(userId, operationId, transformed)
    console.log('[DEBUG SYNC] storeOptimization completed:', { success: !!result, operationId })
    return result
  } catch (error) {
    console.error(`[DEBUG SYNC] Error syncing optimization ${operationId}:`, error)
    throw error
  }
}
