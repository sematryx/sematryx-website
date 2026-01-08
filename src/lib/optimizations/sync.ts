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
  const response = await fetch(`${SEMATRYX_API_URL}/v1/optimization/result/${operationId}`, {
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
    throw new Error(`Failed to fetch optimization: ${response.statusText}`)
  }

  return await response.json()
}

/**
 * Fetch optimization status from Sematryx API
 */
export async function fetchOptimizationStatus(
  apiKey: string,
  operationId: string
): Promise<any> {
  const response = await fetch(`${SEMATRYX_API_URL}/v1/optimization/status/${operationId}`, {
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

  const response = await fetch(
    `${SEMATRYX_API_URL}/v1/optimization/?limit=${limit}&offset=${offset}`,
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to list optimizations: ${response.statusText}`)
  }

  const data = await response.json()
  return Array.isArray(data) ? data : data.results || []
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
  try {
    // Try to get result first (for completed optimizations)
    let apiData = await fetchOptimizationFromAPI(apiKey, operationId)

    // If result not found, try status endpoint (for running optimizations)
    if (!apiData) {
      apiData = await fetchOptimizationStatus(apiKey, operationId)
    }

    if (!apiData) {
      return null
    }

    // Transform and store
    const transformed = transformAPIResponseToDB(apiData, userId)
    return await storeOptimization(userId, operationId, transformed)
  } catch (error) {
    console.error(`Error syncing optimization ${operationId}:`, error)
    throw error
  }
}
