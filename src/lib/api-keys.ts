import { supabaseAdmin, isSupabaseConfigured } from './supabase'
import crypto from 'crypto'

// Encryption/Decryption utilities for API keys
// Uses AES-256-GCM for authenticated encryption
function getEncryptionKey(): Buffer {
  // Try multiple possible variable names (in case of typos or Vercel issues)
  const key = process.env.API_KEY_ENCRYPTION_KEY 
    || process.env['API_KEY_ENCRYPTION_KEY'] 
    || (process.env as any)['API_KEY_ENCRYPTION_KEY']
  
  if (!key) {
    // Log all env vars for debugging (first 100 chars of each)
    const envKeys = Object.keys(process.env).filter(k => 
      k.includes('API') || k.includes('ENCRYPTION') || k.includes('KEY')
    )
    console.error('API_KEY_ENCRYPTION_KEY not found. Available related vars:', envKeys)
    throw new Error('API_KEY_ENCRYPTION_KEY environment variable is not set')
  }
  // Use SHA-256 to derive a 32-byte key from the env var
  return crypto.createHash('sha256').update(key).digest()
}

function encryptApiKey(plaintext: string): string {
  const key = getEncryptionKey()
  const iv = crypto.randomBytes(16) // 128-bit IV for GCM
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv)
  
  let encrypted = cipher.update(plaintext, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  const authTag = cipher.getAuthTag()
  
  // Return: iv:authTag:encrypted (all hex)
  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`
}

function decryptApiKeyInternal(encrypted: string): string {
  const key = getEncryptionKey()
  const parts = encrypted.split(':')
  if (parts.length !== 3) {
    throw new Error('Invalid encrypted API key format')
  }
  
  const iv = Buffer.from(parts[0], 'hex')
  const authTag = Buffer.from(parts[1], 'hex')
  const encryptedText = parts[2]
  
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv)
  decipher.setAuthTag(authTag)
  
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  
  return decrypted
}

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
  
  // Encrypt the key for storage (if encryption key is available)
  let encryptedKey: string | null = null
  try {
    encryptedKey = encryptApiKey(key)
    console.log('✅ API key encrypted successfully')
  } catch (error) {
    // Log the actual error for debugging
    console.error('❌ API key encryption failed:', error)
    console.error('Error details:', error instanceof Error ? error.message : String(error))
    console.error('API_KEY_ENCRYPTION_KEY is set:', !!process.env.API_KEY_ENCRYPTION_KEY)
    // If encryption key is not set, log warning but continue
    // This allows the system to work without encryption (less secure)
    console.warn('⚠️ API key encryption not available - keys will not be retrievable for syncing')
    // Re-throw if it's a critical error (not just missing env var)
    if (error instanceof Error && !error.message.includes('environment variable is not set')) {
      throw error
    }
  }
  
  const { data, error } = await supabaseAdmin
    .from('api_keys')
    .insert({
      user_id: userId,
      name,
      key_prefix: prefix,
      key_hash: hash,
      key_encrypted: encryptedKey, // Store encrypted version
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

// Decrypt an API key (for syncing operations)
// Only call this in secure server-side contexts (API routes)
export function getDecryptedKey(encryptedKey: string | null): string | null {
  if (!encryptedKey) {
    return null
  }
  
  try {
    return decryptApiKeyInternal(encryptedKey)
  } catch (error) {
    console.error('Failed to decrypt API key:', error)
    return null
  }
}

// Get decrypted API key for a user (server-side only)
export async function getDecryptedApiKey(userId: string, keyId?: string): Promise<string | null> {
  if (!isSupabaseConfigured()) {
    return null
  }
  
  try {
    let query = supabaseAdmin
      .from('api_keys')
      .select('key_encrypted')
      .eq('user_id', userId)
      .eq('is_active', true)
    
    if (keyId) {
      query = query.eq('id', keyId)
    }
    
    const { data, error } = await query.order('created_at', { ascending: false }).limit(1).single()
    
    if (error || !data || !data.key_encrypted) {
      return null
    }
    
    return getDecryptedKey(data.key_encrypted)
  } catch (error) {
    console.error('Failed to get decrypted API key:', error)
    return null
  }
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
