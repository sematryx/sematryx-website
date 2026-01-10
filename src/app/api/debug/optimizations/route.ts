import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { getOrCreateUser } from '@/lib/api-keys'
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'

/**
 * GET /api/debug/optimizations
 * Debug endpoint to check what optimization data exists in Supabase
 */
export async function GET(req: NextRequest) {
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

    // Query optimization_results table
    const { data: optimizations, error } = await supabaseAdmin
      .from('optimization_results')
      .select('*')
      .eq('user_id', dbUser.id)
      .order('created_at', { ascending: false })
      .limit(20)

    if (error) {
      return NextResponse.json({
        error: 'Database query failed',
        details: error.message,
      }, { status: 500 })
    }

    // Also check API keys
    const { data: apiKeys, error: keysError } = await supabaseAdmin
      .from('api_keys')
      .select('id, name, key_prefix, key_encrypted, is_active, created_at')
      .eq('user_id', dbUser.id)
      .order('created_at', { ascending: false })

    return NextResponse.json({
      userId: dbUser.id,
      clerkId: clerkUserId,
      optimizations: {
        count: optimizations?.length || 0,
        data: optimizations || [],
      },
      apiKeys: {
        count: apiKeys?.length || 0,
        data: apiKeys || [],
        hasEncryptedKey: apiKeys?.some(k => k.key_encrypted) || false,
      },
      tableExists: true,
    })
  } catch (error) {
    console.error('Error in debug endpoint:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
