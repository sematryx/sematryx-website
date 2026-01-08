import { supabaseAdmin, isSupabaseConfigured, OptimizationResult } from './supabase'
import { getOrCreateUser } from './api-keys'

/**
 * Get user's database ID from Clerk ID
 */
async function getUserIdFromClerkId(clerkId: string): Promise<string> {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured')
  }

  const { data: user } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('clerk_id', clerkId)
    .single()

  if (!user) {
    throw new Error('User not found')
  }

  return user.id
}

/**
 * List optimization results for a user with pagination and filtering
 */
export async function listOptimizations(
  userId: string,
  options: {
    page?: number
    limit?: number
    status?: 'completed' | 'failed' | 'running' | 'cancelled'
    strategy?: string
    startDate?: string
    endDate?: string
    search?: string
    sortBy?: 'created_at' | 'optimal_value' | 'evaluations_used'
    sortOrder?: 'asc' | 'desc'
  } = {}
): Promise<{
  data: OptimizationResult[]
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
}> {
  if (!isSupabaseConfigured()) {
    return {
      data: [],
      pagination: { page: 1, limit: 20, total: 0, totalPages: 0 },
      stats: {
        total: 0,
        successful: 0,
        failed: 0,
        running: 0,
        avgExecutionTime: null,
        avgEvaluations: null,
      },
    }
  }

  const {
    page = 1,
    limit = 20,
    status,
    strategy,
    startDate,
    endDate,
    search,
    sortBy = 'created_at',
    sortOrder = 'desc',
  } = options

  // Build query
  let query = supabaseAdmin
    .from('optimization_results')
    .select('*', { count: 'exact' })
    .eq('user_id', userId)

  // Apply filters
  if (status) {
    query = query.eq('status', status)
  }

  if (strategy) {
    query = query.eq('strategy_used', strategy)
  }

  if (startDate) {
    query = query.gte('created_at', startDate)
  }

  if (endDate) {
    query = query.lte('created_at', endDate)
  }

  if (search) {
    query = query.ilike('problem_id', `%${search}%`)
  }

  // Apply sorting
  query = query.order(sortBy, { ascending: sortOrder === 'asc' })

  // Apply pagination
  const from = (page - 1) * limit
  const to = from + limit - 1
  query = query.range(from, to)

  const { data, error, count } = await query

  if (error) throw error

  const results = (data || []) as OptimizationResult[]
  const total = count || 0
  const totalPages = Math.ceil(total / limit)

  // Get aggregated stats
  const statsQuery = supabaseAdmin
    .from('optimization_results')
    .select('status, execution_time, evaluations_used, success')
    .eq('user_id', userId)

  const { data: allResults } = await statsQuery

  const stats = {
    total: allResults?.length || 0,
    successful: allResults?.filter((r) => r.status === 'completed' && r.success)?.length || 0,
    failed: allResults?.filter((r) => r.status === 'failed')?.length || 0,
    running: allResults?.filter((r) => r.status === 'running')?.length || 0,
    avgExecutionTime:
      allResults?.filter((r) => r.execution_time).length
        ? allResults
            ?.filter((r) => r.execution_time)
            .reduce((sum, r) => sum + (r.execution_time || 0), 0) /
          (allResults?.filter((r) => r.execution_time).length || 1)
        : null,
    avgEvaluations:
      allResults?.filter((r) => r.evaluations_used).length
        ? allResults
            ?.filter((r) => r.evaluations_used)
            .reduce((sum, r) => sum + (r.evaluations_used || 0), 0) /
          (allResults?.filter((r) => r.evaluations_used).length || 1)
        : null,
  }

  return {
    data: results,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
    stats,
  }
}

/**
 * Get a single optimization result by operation_id
 */
export async function getOptimization(
  userId: string,
  operationId: string
): Promise<OptimizationResult | null> {
  if (!isSupabaseConfigured()) {
    return null
  }

  const { data, error } = await supabaseAdmin
    .from('optimization_results')
    .select('*')
    .eq('user_id', userId)
    .eq('operation_id', operationId)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      // Not found
      return null
    }
    throw error
  }

  return data as OptimizationResult
}

/**
 * Store optimization result in database
 */
export async function storeOptimizationResult(
  userId: string,
  operationId: string,
  result: {
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
  }
): Promise<OptimizationResult> {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured')
  }

  const { data, error } = await supabaseAdmin
    .from('optimization_results')
    .upsert(
      {
        user_id: userId,
        operation_id: operationId,
        problem_id: result.problem_id || null,
        optimal_solution: result.optimal_solution || null,
        optimal_value: result.optimal_value || null,
        strategy_used: result.strategy_used || null,
        evaluations_used: result.evaluations_used || null,
        convergence_history: result.convergence_history || null,
        execution_time: result.execution_time || null,
        iterations: result.iterations || null,
        status: result.status,
        success: result.success ?? null,
        error_message: result.error_message || null,
        learning_applied: result.learning_applied || false,
        learning_insights: result.learning_insights || null,
        public_recall_count: result.public_recall_count || 0,
        private_recall_count: result.private_recall_count || 0,
        stored_to_public: result.stored_to_public || false,
        stored_to_private: result.stored_to_private || false,
        strategy_explanation: result.strategy_explanation || null,
        configuration: result.configuration || null,
        ai_reasoning_used: result.ai_reasoning_used || false,
        context_intelligence_used: result.context_intelligence_used || false,
        domain: result.domain || null,
        completed_at: result.completed_at || null,
      },
      {
        onConflict: 'operation_id',
      }
    )
    .select()
    .single()

  if (error) throw error

  return data as OptimizationResult
}

/**
 * Get list of unique strategies used by a user
 */
export async function getStrategiesForUser(userId: string): Promise<string[]> {
  if (!isSupabaseConfigured()) {
    return []
  }

  const { data, error } = await supabaseAdmin
    .from('optimization_results')
    .select('strategy_used')
    .eq('user_id', userId)
    .not('strategy_used', 'is', null)

  if (error) throw error

  const strategies = new Set<string>()
  data?.forEach((r) => {
    if (r.strategy_used) {
      strategies.add(r.strategy_used)
    }
  })

  return Array.from(strategies).sort()
}

export { getUserIdFromClerkId }
