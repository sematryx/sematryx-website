-- Migration: Add encrypted API key storage
-- Created: 2026-01-09
-- Purpose: Enable encrypted storage of API keys for syncing functionality
-- 
-- This adds a key_encrypted column to store API keys encrypted with AES-256-GCM
-- The key_hash column remains for validation purposes
-- Both are stored for security and functionality

-- Add encrypted key column
ALTER TABLE api_keys 
ADD COLUMN IF NOT EXISTS key_encrypted TEXT;

-- Add index for encrypted key lookups (though we'll primarily use hash)
CREATE INDEX IF NOT EXISTS idx_api_keys_key_encrypted ON api_keys(key_encrypted) 
WHERE key_encrypted IS NOT NULL;

-- Add comment explaining the dual storage approach
COMMENT ON COLUMN api_keys.key_hash IS 'SHA-256 hash for validation (one-way, cannot be recovered)';
COMMENT ON COLUMN api_keys.key_encrypted IS 'AES-256-GCM encrypted key for retrieval (requires API_KEY_ENCRYPTION_KEY to decrypt)';

-- Note: Existing keys will have NULL key_encrypted
-- New keys will have both hash (for validation) and encrypted (for retrieval)
-- This allows backward compatibility while enabling new functionality
