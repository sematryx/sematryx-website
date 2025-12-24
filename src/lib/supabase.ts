import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Client-side Supabase client (limited permissions)
export const supabase: SupabaseClient = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as unknown as SupabaseClient

// Server-side Supabase client (full permissions - use in API routes only)
export const supabaseAdmin: SupabaseClient = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null as unknown as SupabaseClient

// Helper to check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseServiceKey)
}

// Database types
export interface User {
  id: string
  clerk_id: string
  email: string
  name: string | null
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  subscription_status: 'free' | 'starter' | 'growth' | 'pro' | 'enterprise'
  subscription_ends_at: string | null
  private_storage_used_bytes: number
  private_access_count_month: number
  private_access_reset_at: string
  created_at: string
  updated_at: string
}

export interface ApiKey {
  id: string
  user_id: string
  name: string
  key_prefix: string // First 12 chars for display (e.g., "smtrx_abc123")
  key_hash: string // SHA-256 hash of full key
  last_used_at: string | null
  created_at: string
  revoked_at: string | null
  is_active: boolean
}

export interface ApiKeyUsage {
  id: string
  api_key_id: string
  endpoint: string
  method: string
  status_code: number
  response_time_ms: number
  request_ip: string | null
  user_agent: string | null
  timestamp: string
}
