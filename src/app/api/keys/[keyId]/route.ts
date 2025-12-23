import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { revokeApiKey, getOrCreateUser } from '@/lib/api-keys'
import { isSupabaseConfigured } from '@/lib/supabase'

// DELETE /api/keys/[keyId] - Revoke an API key
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ keyId: string }> }
) {
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

    const { keyId } = await params

    // Get user from our database
    const dbUser = await getOrCreateUser(
      userId,
      user.emailAddresses[0]?.emailAddress || '',
      user.firstName
    )

    const key = await revokeApiKey(dbUser.id, keyId)
    
    return NextResponse.json({ success: true, key })
  } catch (error) {
    console.error('Error revoking API key:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
