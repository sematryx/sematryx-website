import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { listOptimizations, getStrategiesForUser, getUserIdFromClerkId, getOptimization } from '@/lib/optimizations'
import { isSupabaseConfigured } from '@/lib/supabase'
import { getOrCreateUser, getDecryptedApiKey } from '@/lib/api-keys'
import { listOptimizationsFromAPI, syncOptimizationToDB } from '@/lib/optimizations/sync'
import { storeOptimizationResult } from '@/lib/optimizations'

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
    const shouldSync = searchParams.get('sync') === 'true'

    // Auto-sync: If list is empty or sync is requested, fetch from API and sync
    const existingResult = await listOptimizations(dbUser.id, {
      page: 1,
      limit: 1,
      status: status || undefined,
      strategy,
      startDate,
      endDate,
      search,
      sortBy,
      sortOrder,
    })

    // Sync if requested or if no results found
    let syncDebugInfo: any = null
    console.log('[DEBUG API] Sync check:', { shouldSync, existingTotal: existingResult.pagination.total, userId: dbUser.id })
    if (shouldSync || existingResult.pagination.total === 0) {
      // #region agent log
      console.log('[DEBUG API] Sync condition met, starting sync process');
      fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/optimizations/route.ts:sync-check',message:'Sync condition met',data:{shouldSync,existingTotal:existingResult.pagination.total,userId:dbUser.id},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      try {
        const apiKey = await getDecryptedApiKey(dbUser.id)
        // #region agent log
        console.log('[DEBUG API] API key check:', { hasApiKey: !!apiKey, apiKeyLength: apiKey?.length || 0, apiKeyPrefix: apiKey?.substring(0, 10) || 'none' });
        fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/optimizations/route.ts:api-key-check',message:'API key retrieved',data:{hasApiKey:!!apiKey,apiKeyLength:apiKey?.length||0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
        // #endregion
        syncDebugInfo = {
          syncTriggered: true,
          hasApiKey: !!apiKey,
          apiKeyLength: apiKey?.length || 0,
        }
        if (!apiKey) {
          console.warn('⚠️ No decryptable API key found for syncing')
          syncDebugInfo.error = 'No decryptable API key found'
        } else {
          console.log('🔄 Syncing optimizations from API...')
          // Fetch recent optimizations from API (last 100)
          const apiOptimizations = await listOptimizationsFromAPI(apiKey, { limit: 100, offset: 0 })
          // #region agent log
          console.log('[DEBUG API] Fetched optimizations from API:', { count: apiOptimizations.length, firstOpId: apiOptimizations[0]?.operation_id || null, sample: apiOptimizations.slice(0, 3) });
          fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/optimizations/route.ts:api-fetch',message:'API optimizations fetched',data:{count:apiOptimizations.length,firstOpId:apiOptimizations[0]?.operation_id||null},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
          // #endregion
          console.log(`📥 Fetched ${apiOptimizations.length} optimizations from API`)
          
          // If API returns empty, log warning but continue (operations may still be fetchable individually)
          if (apiOptimizations.length === 0) {
            console.warn('[DEBUG API] ⚠️ API list endpoint returned 0 optimizations')
            console.warn('[DEBUG API]   This may mean the server restarted and in-memory operations were lost')
            console.warn('[DEBUG API]   Individual operations may still be accessible via /optimization/result/{id}')
            syncDebugInfo.apiReturnedEmpty = true
            syncDebugInfo.warning = 'List endpoint returned empty - individual operations may still be accessible'
          }
          
          // Sync each optimization that we don't have
          let syncedCount = 0
          let skippedCount = 0
          let errorCount = 0
          
          for (const apiOpt of apiOptimizations) {
            const operationId = apiOpt.operation_id || apiOpt.problem_id
            if (!operationId) {
              console.warn('⚠️ Skipping optimization without operation_id:', apiOpt)
              continue
            }

            try {
              // Check if we already have this optimization
              const existing = await getOptimization(dbUser.id, operationId)

              // Only sync if we don't have it
              if (!existing) {
                console.log(`📥 Syncing optimization ${operationId}...`)
                try {
                  const syncResult = await syncOptimizationToDB(
                    apiKey,
                    operationId,
                    dbUser.id,
                    async (userId, opId, data) => {
                      return await storeOptimizationResult(userId, opId, data)
                    }
                  )
                  console.log(`[DEBUG API] Sync result for ${operationId}:`, { success: !!syncResult })
                  syncedCount++
                } catch (syncError) {
                  console.error(`[DEBUG API] Sync error for ${operationId}:`, syncError)
                  errorCount++
                }
              } else {
                console.log(`[DEBUG API] Skipping ${operationId} - already exists`)
                skippedCount++
              }
            } catch (error) {
              console.error(`❌ Error syncing optimization ${operationId}:`, error)
              errorCount++
              // Continue with other optimizations
            }
          }
          console.log(`✅ Sync complete: ${syncedCount} synced, ${skippedCount} skipped, ${errorCount} errors`)
          // #region agent log
          console.log('[DEBUG API] Sync summary:', { syncedCount, skippedCount, errorCount, totalProcessed: syncedCount + skippedCount + errorCount });
          fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/optimizations/route.ts:sync-complete',message:'Sync completed',data:{syncedCount,skippedCount,errorCount},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
          // #endregion
          syncDebugInfo.apiOptimizationsCount = apiOptimizations.length
          syncDebugInfo.syncedCount = syncedCount
          syncDebugInfo.skippedCount = skippedCount
          syncDebugInfo.errorCount = errorCount
        }
      } catch (error) {
        // #region agent log
        console.error('[DEBUG API] Sync error caught:', { errorMessage: error instanceof Error ? error.message : String(error), errorName: error instanceof Error ? error.name : 'Unknown', error });
        fetch('http://127.0.0.1:7242/ingest/371d178b-fba6-4436-b7b8-d3382d948264',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/optimizations/route.ts:sync-error',message:'Sync error caught',data:{errorMessage:error instanceof Error ? error.message : String(error),errorName:error instanceof Error ? error.name : 'Unknown'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
        // #endregion
        console.error('❌ Error during auto-sync:', error)
        syncDebugInfo = syncDebugInfo || { syncTriggered: true }
        syncDebugInfo.error = error instanceof Error ? error.message : String(error)
        // Continue to return results even if sync fails
      }
    } else {
      console.log('[DEBUG API] Sync condition not met - skipping sync')
    }

    // Fetch optimizations (after sync)
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

    // Include debug info in response if sync was requested
    const response: any = {
      ...result,
      availableStrategies: strategies,
    }
    
    if (shouldSync && syncDebugInfo) {
      response._debug = {
        ...syncDebugInfo,
        existingTotalBeforeSync: existingResult.pagination.total,
        finalTotal: result.pagination.total,
      }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching optimizations:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
