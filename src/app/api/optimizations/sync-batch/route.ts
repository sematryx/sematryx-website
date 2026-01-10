import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { syncOptimizationToDB } from '@/lib/optimizations/sync'
import { storeOptimizationResult } from '@/lib/optimizations'
import { getOrCreateUser, getDecryptedApiKey } from '@/lib/api-keys'
import { isSupabaseConfigured } from '@/lib/supabase'

/**
 * POST /api/optimizations/sync-batch
 * Sync multiple optimization results from Sematryx API to database
 * 
 * Body:
 *   - operation_ids: string[] (required) - Array of operation IDs to sync
 * 
 * This endpoint fetches multiple optimization results from the Sematryx API
 * and stores them in the Supabase database.
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
    const { operation_ids } = body

    if (!operation_ids || !Array.isArray(operation_ids) || operation_ids.length === 0) {
      return NextResponse.json(
        { error: 'operation_ids array is required' },
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

    // Sync each operation
    const results = []
    for (const operationId of operation_ids) {
      try {
        const result = await syncOptimizationToDB(
          apiKey,
          operationId,
          dbUser.id,
          async (userId, opId, data) => {
            return await storeOptimizationResult(userId, opId, data)
          }
        )
        
        results.push({
          operation_id: operationId,
          success: !!result,
          error: result ? null : 'Not found in API',
        })
      } catch (error) {
        results.push({
          operation_id: operationId,
          success: false,
          error: error instanceof Error ? error.message : String(error),
        })
      }
    }

    const successCount = results.filter(r => r.success).length
    const failureCount = results.filter(r => !r.success).length

    return NextResponse.json({
      success: true,
      total: operation_ids.length,
      successful: successCount,
      failed: failureCount,
      results,
    })
  } catch (error) {
    console.error('Error in batch sync:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
