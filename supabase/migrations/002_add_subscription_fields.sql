-- Add subscription tracking fields to users table
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'free' CHECK (subscription_status IN ('free', 'starter', 'growth', 'pro', 'enterprise')),
ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT,
ADD COLUMN IF NOT EXISTS subscription_ends_at TIMESTAMPTZ;

-- Add index for subscription lookups
CREATE INDEX IF NOT EXISTS idx_users_subscription_status ON users(subscription_status);
CREATE INDEX IF NOT EXISTS idx_users_stripe_subscription_id ON users(stripe_subscription_id);

-- Add private learning storage tracking
ALTER TABLE users
ADD COLUMN IF NOT EXISTS private_storage_used_bytes BIGINT DEFAULT 0,
ADD COLUMN IF NOT EXISTS private_access_count_month INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS private_access_reset_at TIMESTAMPTZ DEFAULT NOW();

COMMENT ON COLUMN users.subscription_status IS 'Current subscription tier: free, starter, pro, or enterprise';
COMMENT ON COLUMN users.stripe_subscription_id IS 'Stripe subscription ID for managing billing';
COMMENT ON COLUMN users.subscription_ends_at IS 'When the current subscription period ends';
COMMENT ON COLUMN users.private_storage_used_bytes IS 'Bytes used in private learning store';
COMMENT ON COLUMN users.private_access_count_month IS 'Private learning access operations this month';
COMMENT ON COLUMN users.private_access_reset_at IS 'When to reset the monthly access counter';

