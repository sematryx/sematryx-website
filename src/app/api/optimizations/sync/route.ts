import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { syncOptimizationToDB } from '@/lib/optimizations/sync'
import { storeOptimizationResult } from '@/lib/optimizations'
import { getOrCreateUser, getDecryptedApiKey } from '@/lib/api-keys'
import { isSupabaseConfigured } from '@/lib/supabase'

/**
 * POST /api/optimizations/sync
 * Sync an optimization result from Sematryx API to database
 * 
 * Body:
 *   - operation_id: string (required)
 * 
 * This endpoint fetches the optimization result from the Sematryx API
 * and stores it in the Supabase database for dashboard access.
 */
export async function POST(req: NextRequest) {
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

    // Get request body
    const body = await req.json()
    const { operation_id } = body

    if (!operation_id) {
      return NextResponse.json(
        { error: 'operation_id is required' },
        { status: 400 }
      )
    }

    // Get decrypted API key for syncing
    const apiKey = await getDecryptedApiKey(dbUser.id)

    if (!apiKey) {
      return NextResponse.json(
        {
          error: 'No decryptable API key found',
          message: 'Please create a new API key. Older keys may not support syncing if encryption was not enabled.',
        },
        { status: 400 }
      )
    }

    // Sync the optimization from Sematryx API to database
    const result = await syncOptimizationToDB(
      apiKey,
      operation_id,
      dbUser.id,
      async (userId, operationId, data) => {
        return await storeOptimizationResult(userId, operationId, data)
      }
    )

    if (!result) {
      return NextResponse.json(
        { error: 'Optimization not found in API' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      operation_id,
      message: 'Optimization synced successfully',
    })
  } catch (error) {
    console.error('Error syncing optimization:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
