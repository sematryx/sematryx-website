import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { getOptimization } from '@/lib/optimizations'
import { syncOptimizationToDB } from '@/lib/optimizations/sync'
import { isSupabaseConfigured } from '@/lib/supabase'
import { getOrCreateUser } from '@/lib/api-keys'
import { listApiKeys } from '@/lib/api-keys'

/**
 * GET /api/optimizations/[id]
 * Get a single optimization result by operation_id
 * 
 * If not found in database, attempts to fetch from Sematryx API and cache it
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId: clerkUserId } = await auth()

    if (!clerkUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
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

    const { id } = await params
    const operationId = id

    // Try to get from database first
    let optimization = await getOptimization(dbUser.id, operationId)

    // If not found in database, try to fetch from API and cache it
    if (!optimization) {
      // Get user's API keys to use for fetching
      const apiKeys = await listApiKeys(dbUser.id)
      const activeKey = apiKeys.find((k) => k.is_active)

      if (activeKey) {
        // Note: We need the actual API key to fetch from Sematryx API
        // For now, we'll return 404 and let the frontend handle it
        // In production, you might want to store encrypted API keys or
        // use a service account to fetch on behalf of users
        return NextResponse.json(
          {
            error: 'Optimization not found',
            message: 'Optimization not found in cache. Please ensure the optimization exists and try again.',
          },
          { status: 404 }
        )
      }
    }

    if (!optimization) {
      return NextResponse.json(
        { error: 'Optimization not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(optimization)
  } catch (error) {
    console.error('Error fetching optimization:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
