import { supabaseAdmin, isSupabaseConfigured } from './supabase'
import crypto from 'crypto'

// Generate a secure API key
export function generateApiKey(): { key: string; prefix: string; hash: string } {
  const prefix = 'smtrx_'
  const randomBytes = crypto.randomBytes(24).toString('base64url')
  const key = prefix + randomBytes
  const hash = crypto.createHash('sha256').update(key).digest('hex')
  const displayPrefix = key.substring(0, 12) // "smtrx_" + first 6 chars
  
  return { key, prefix: displayPrefix, hash }
}

// Create a new API key for a user
export async function createApiKey(userId: string, name: string) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured')
  }
  
  const { key, prefix, hash } = generateApiKey()
  
  const { data, error } = await supabaseAdmin
    .from('api_keys')
    .insert({
      user_id: userId,
      name,
      key_prefix: prefix,
      key_hash: hash,
      is_active: true,
    })
    .select()
    .single()
  
  if (error) throw error
  
  // Return the full key only on creation - it won't be retrievable later
  return { ...data, full_key: key }
}

// List all API keys for a user (without the actual key)
export async function listApiKeys(userId: string) {
  if (!isSupabaseConfigured()) {
    return []
  }
  
  const { data, error } = await supabaseAdmin
    .from('api_keys')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data || []
}

// Revoke an API key
export async function revokeApiKey(userId: string, keyId: string) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured')
  }
  
  const { data, error } = await supabaseAdmin
    .from('api_keys')
    .update({ 
      is_active: false, 
      revoked_at: new Date().toISOString() 
    })
    .eq('id', keyId)
    .eq('user_id', userId) // Security: ensure user owns the key
    .select()
    .single()
  
  if (error) throw error
  return data
}

// Validate an API key (for your backend API)
export async function validateApiKey(key: string) {
  if (!isSupabaseConfigured()) {
    return null
  }
  
  const hash = crypto.createHash('sha256').update(key).digest('hex')
  
  const { data, error } = await supabaseAdmin
    .from('api_keys')
    .select('*, users(*)')
    .eq('key_hash', hash)
    .eq('is_active', true)
    .single()
  
  if (error || !data) return null
  
  // Update last used timestamp
  await supabaseAdmin
    .from('api_keys')
    .update({ last_used_at: new Date().toISOString() })
    .eq('id', data.id)
  
  return data
}

// Get or create user from Clerk data
export async function getOrCreateUser(clerkId: string, email: string, name: string | null) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured')
  }
  
  // Try to find existing user
  const { data: existingUser } = await supabaseAdmin
    .from('users')
    .select('*')
    .eq('clerk_id', clerkId)
    .single()
  
  if (existingUser) return existingUser
  
  // Create new user
  const { data: newUser, error } = await supabaseAdmin
    .from('users')
    .insert({
      clerk_id: clerkId,
      email,
      name,
    })
    .select()
    .single()
  
  if (error) throw error
  return newUser
}
