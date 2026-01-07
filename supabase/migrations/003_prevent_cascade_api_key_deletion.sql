-- Migration: Prevent accidental API key deletion when user is deleted
-- This changes ON DELETE CASCADE to RESTRICT, preventing user deletion
-- if they have active API keys. This protects against accidental data loss.

-- Find and drop the existing foreign key constraint
-- PostgreSQL auto-generates constraint names, so we need to find it dynamically
DO $$
DECLARE
    constraint_name TEXT;
    column_attnum INTEGER;
BEGIN
    -- Get the column number for user_id
    SELECT attnum INTO column_attnum
    FROM pg_attribute
    WHERE attrelid = 'api_keys'::regclass
      AND attname = 'user_id';
    
    -- Find the foreign key constraint on user_id
    SELECT conname INTO constraint_name
    FROM pg_constraint
    WHERE conrelid = 'api_keys'::regclass
      AND confrelid = 'users'::regclass
      AND contype = 'f'
      AND column_attnum = ANY(conkey);
    
    -- Drop the constraint if it exists
    IF constraint_name IS NOT NULL THEN
        EXECUTE format('ALTER TABLE api_keys DROP CONSTRAINT %I', constraint_name);
    END IF;
END $$;

-- Recreate with RESTRICT instead of CASCADE
-- This prevents deleting a user if they have API keys
ALTER TABLE api_keys
ADD CONSTRAINT api_keys_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE RESTRICT;

-- Add a comment explaining the change
COMMENT ON CONSTRAINT api_keys_user_id_fkey ON api_keys IS 
'Prevents accidental deletion of users with API keys. Revoke all API keys before deleting a user.';

