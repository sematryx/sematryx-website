import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { getOptimization, storeOptimizationResult } from '@/lib/optimizations'
import { syncOptimizationToDB } from '@/lib/optimizations/sync'
import { isSupabaseConfigured } from '@/lib/supabase'
import { getOrCreateUser, getDecryptedApiKey } from '@/lib/api-keys'

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
      // Get decrypted API key for syncing
      const apiKey = await getDecryptedApiKey(dbUser.id)

      if (apiKey) {
        try {
          // Sync from API to database
          const syncedResult = await syncOptimizationToDB(
            apiKey,
            operationId,
            dbUser.id,
            async (userId, opId, data) => {
              return await storeOptimizationResult(userId, opId, data)
            }
          )

          if (syncedResult) {
            // Fetch the newly synced result
            optimization = await getOptimization(dbUser.id, operationId)
          }
        } catch (error) {
          console.error('Error syncing optimization:', error)
          // Continue to return 404 if sync fails
        }
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
