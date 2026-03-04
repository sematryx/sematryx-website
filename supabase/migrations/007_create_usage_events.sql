-- Migration: Create usage_events table for MCP per-solve tracking
-- Used by MCP server for quota enforcement and pay-per-solve billing
-- Created: 2026-03-04

CREATE TABLE IF NOT EXISTS usage_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  api_key_id UUID NOT NULL REFERENCES api_keys(id) ON DELETE CASCADE,
  timestamp TIMESTAMPTZ DEFAULT NOW(),

  -- What was called
  tool_name TEXT NOT NULL,            -- 'sematryx_optimize' or 'sematryx_explain'
  expression TEXT,                     -- The expression that was optimized

  -- Problem details
  dimension INTEGER,
  bounds JSONB,

  -- Result summary
  strategy_used TEXT,
  success BOOLEAN NOT NULL DEFAULT FALSE,
  nfev INTEGER,                        -- Function evaluations used
  execution_time_ms INTEGER,
  optimal_value DOUBLE PRECISION,

  -- Billing
  billable BOOLEAN NOT NULL DEFAULT TRUE,  -- FALSE for demo/free-tier overages
  plan_tier TEXT                            -- Snapshot of user's plan at time of call
);

-- Indexes for quota checks (monthly count by user)
CREATE INDEX IF NOT EXISTS idx_usage_events_user_time
  ON usage_events(user_id, timestamp DESC);

-- Index for per-key usage queries
CREATE INDEX IF NOT EXISTS idx_usage_events_key
  ON usage_events(api_key_id);

-- Index for billing aggregation (billable events by month)
CREATE INDEX IF NOT EXISTS idx_usage_events_billable_time
  ON usage_events(billable, timestamp DESC) WHERE billable = TRUE;

-- Composite for monthly quota check (most common query)
CREATE INDEX IF NOT EXISTS idx_usage_events_user_month
  ON usage_events(user_id, timestamp)
  WHERE success = TRUE;

-- Enable Row Level Security
ALTER TABLE usage_events ENABLE ROW LEVEL SECURITY;

-- RLS policies (service role key bypasses these; browser access uses them)
CREATE POLICY "Users can view own usage events" ON usage_events
  FOR SELECT USING (
    user_id IN (
      SELECT id FROM users WHERE clerk_id = current_setting('app.clerk_user_id', true)
    )
  );

-- Only server-side inserts (MCP server uses service role key, bypasses RLS)
-- No INSERT policy for browser clients — they cannot write usage events

COMMENT ON TABLE usage_events IS 'Per-solve usage tracking for MCP server quota enforcement and billing';
COMMENT ON COLUMN usage_events.tool_name IS 'MCP tool name: sematryx_optimize or sematryx_explain';
COMMENT ON COLUMN usage_events.billable IS 'Whether this event counts toward billing (false for demo overages)';
COMMENT ON COLUMN usage_events.plan_tier IS 'Snapshot of user plan tier at time of call for billing audit trail';
