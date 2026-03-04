-- Migration: Pay-per-solve billing model
-- Replaces subscription tiers with free + pay-as-you-go
-- Created: 2026-03-04

-- 1. Add credit balance tracking (cents to avoid float issues)
ALTER TABLE users ADD COLUMN IF NOT EXISTS credit_balance_cents INTEGER DEFAULT 0;

-- 2. Add payment method flag (true when Stripe payment method on file)
ALTER TABLE users ADD COLUMN IF NOT EXISTS has_payment_method BOOLEAN DEFAULT false;

-- 3. Expand subscription_status CHECK constraint (transitional)
--    Allows both old tier names and new 'payg' during migration
ALTER TABLE users DROP CONSTRAINT IF EXISTS users_subscription_status_check;
ALTER TABLE users ADD CONSTRAINT users_subscription_status_check
  CHECK (subscription_status IN ('free', 'starter', 'growth', 'pro', 'enterprise', 'payg'));

-- 4. Add per-solve cost tracking to usage_events
ALTER TABLE usage_events ADD COLUMN IF NOT EXISTS cost_cents INTEGER DEFAULT 0;

-- 5. Migrate existing paid users to payg
UPDATE users SET subscription_status = 'payg' WHERE subscription_status != 'free';

-- 6. Add index for credit balance queries
CREATE INDEX IF NOT EXISTS idx_users_credit_balance
  ON users(credit_balance_cents) WHERE credit_balance_cents > 0;

COMMENT ON COLUMN users.credit_balance_cents IS 'Prepaid credit balance in cents. Deducted per solve before metered billing.';
COMMENT ON COLUMN users.has_payment_method IS 'True when user has a Stripe payment method on file for metered billing.';
COMMENT ON COLUMN usage_events.cost_cents IS 'Cost of this solve in cents, based on problem complexity at time of execution.';
