import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { createApiKey, listApiKeys, getOrCreateUser } from '@/lib/api-keys'
import { isSupabaseConfigured } from '@/lib/supabase'

// GET /api/keys - List all API keys for the current user
export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ keys: [], message: 'Database not configured' })
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
    
    return NextResponse.json({ keys })
  } catch (error) {
    console.error('Error listing API keys:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/keys - Create a new API key
export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
    }

    const user = await currentUser()
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const { name } = await req.json()
    
    if (!name || typeof name !== 'string') {
      return NextResponse.json(
        { error: 'Key name is required' },
        { status: 400 }
      )
    }

    // Get or create user in our database
    const dbUser = await getOrCreateUser(
      userId,
      user.emailAddresses[0]?.emailAddress || '',
      user.firstName
    )

    const key = await createApiKey(dbUser.id, name)
    
    // Log encryption status for debugging
    console.log('API key created:', {
      id: key.id,
      name: key.name,
      has_encryption: !!key.key_encrypted,
      encryption_key_set: !!process.env.API_KEY_ENCRYPTION_KEY
    })
    
    return NextResponse.json(key)
  } catch (error) {
    console.error('Error creating API key:', error)
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
