import { NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { listApiKeys, getOrCreateUser } from '@/lib/api-keys'
import { isSupabaseConfigured } from '@/lib/supabase'

// GET /api/dashboard/stats - Get dashboard statistics
export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        totalKeys: 0,
        activeKeys: 0,
        totalRequests: 0,
        lastRequest: null,
      })
    }

    const user = await currentUser()
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Get or create user in our database
    const dbUser = await getOrCreateUser(
      userId,
      user.emailAddresses[0]?.emailAddress || '',
      user.firstName
    )

    const keys = await listApiKeys(dbUser.id)
    
    const activeKeys = keys.filter(k => k.is_active)
    const lastUsed = keys
      .filter(k => k.last_used_at)
      .sort((a, b) => new Date(b.last_used_at!).getTime() - new Date(a.last_used_at!).getTime())[0]

    // TODO: Add actual usage tracking from your API
    const stats = {
      totalKeys: keys.length,
      activeKeys: activeKeys.length,
      totalRequests: 0, // Will be populated from usage table
      lastRequest: lastUsed?.last_used_at || null,
    }
    
    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
