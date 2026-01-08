import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { listOptimizations, getStrategiesForUser, getUserIdFromClerkId } from '@/lib/optimizations'
import { isSupabaseConfigured } from '@/lib/supabase'
import { getOrCreateUser } from '@/lib/api-keys'

/**
 * GET /api/optimizations
 * List user's optimization results with pagination and filtering
 * 
 * Query params:
 *   - page: number (default: 1)
 *   - limit: number (default: 20, max: 100)
 *   - status?: 'completed' | 'failed' | 'running' | 'cancelled'
 *   - strategy?: string
 *   - startDate?: ISO date string
 *   - endDate?: ISO date string
 *   - search?: string (problem_id search)
 *   - sortBy?: 'created_at' | 'optimal_value' | 'evaluations_used'
 *   - sortOrder?: 'asc' | 'desc' (default: 'desc')
 */
export async function GET(req: NextRequest) {
  try {
    const { userId: clerkUserId } = await auth()

    if (!clerkUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({
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
        message: 'Database not configured',
      })
    }

    // Get user from database
    const user = await currentUser()
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const dbUser = await getOrCreateUser(
      clerkUserId,
      user.emailAddresses[0]?.emailAddress || '',
      user.firstName
    )

    // Parse query parameters
    const searchParams = req.nextUrl.searchParams
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10))
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)))
    const status = searchParams.get('status') as
      | 'completed'
      | 'failed'
      | 'running'
      | 'cancelled'
      | null
    const strategy = searchParams.get('strategy') || undefined
    const startDate = searchParams.get('startDate') || undefined
    const endDate = searchParams.get('endDate') || undefined
    const search = searchParams.get('search') || undefined
    const sortBy = (searchParams.get('sortBy') ||
      'created_at') as 'created_at' | 'optimal_value' | 'evaluations_used'
    const sortOrder = (searchParams.get('sortOrder') || 'desc') as 'asc' | 'desc'

    // Fetch optimizations
    const result = await listOptimizations(dbUser.id, {
      page,
      limit,
      status: status || undefined,
      strategy,
      startDate,
      endDate,
      search,
      sortBy,
      sortOrder,
    })

    // Get available strategies for filter dropdown
    const strategies = await getStrategiesForUser(dbUser.id)

    return NextResponse.json({
      ...result,
      availableStrategies: strategies,
    })
  } catch (error) {
    console.error('Error fetching optimizations:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
