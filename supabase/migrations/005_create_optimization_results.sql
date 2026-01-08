-- Migration: Create optimization_results table
-- Stores optimization results from Sematryx API for fast dashboard access
-- Created: 2026-01-03

-- Optimization results table
CREATE TABLE IF NOT EXISTS optimization_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  operation_id TEXT NOT NULL UNIQUE, -- Sematryx operation ID
  problem_id TEXT,
  
  -- Solution data
  optimal_solution JSONB, -- Array of optimal variable values
  optimal_value DOUBLE PRECISION,
  
  -- Optimization details
  strategy_used TEXT,
  evaluations_used INTEGER,
  convergence_history JSONB, -- Array of best values over time
  execution_time DOUBLE PRECISION, -- Total execution time in seconds
  iterations INTEGER,
  
  -- Status
  status TEXT NOT NULL CHECK (status IN ('completed', 'failed', 'running', 'cancelled')),
  success BOOLEAN,
  error_message TEXT, -- Error details if failed
  
  -- Learning system
  learning_applied BOOLEAN DEFAULT FALSE,
  learning_insights JSONB, -- Learning system insights
  public_recall_count INTEGER DEFAULT 0,
  private_recall_count INTEGER DEFAULT 0,
  stored_to_public BOOLEAN DEFAULT FALSE,
  stored_to_private BOOLEAN DEFAULT FALSE,
  
  -- Strategy explanation (why this strategy was chosen)
  strategy_explanation TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  configuration JSONB, -- Original request configuration (bounds, variables, domain, etc.)
  
  -- Additional metadata from Sematryx API
  ai_reasoning_used BOOLEAN DEFAULT FALSE,
  context_intelligence_used BOOLEAN DEFAULT FALSE,
  domain TEXT, -- Problem domain (e.g., 'general', 'scheduling', 'routing')
  
  -- Constraints
  CONSTRAINT fk_optimization_results_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_optimization_results_user_id ON optimization_results(user_id);
CREATE INDEX IF NOT EXISTS idx_optimization_results_created_at ON optimization_results(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_optimization_results_status ON optimization_results(status);
CREATE INDEX IF NOT EXISTS idx_optimization_results_strategy ON optimization_results(strategy_used);
CREATE INDEX IF NOT EXISTS idx_optimization_results_operation_id ON optimization_results(operation_id);
CREATE INDEX IF NOT EXISTS idx_optimization_results_problem_id ON optimization_results(problem_id);
CREATE INDEX IF NOT EXISTS idx_optimization_results_domain ON optimization_results(domain);
CREATE INDEX IF NOT EXISTS idx_optimization_results_success ON optimization_results(success);

-- Composite index for common queries (user + date range)
CREATE INDEX IF NOT EXISTS idx_optimization_results_user_created ON optimization_results(user_id, created_at DESC);

-- Enable Row Level Security
ALTER TABLE optimization_results ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only see their own optimization results
CREATE POLICY "Users can view own optimization results" ON optimization_results
  FOR SELECT USING (
    user_id IN (
      SELECT id FROM users WHERE clerk_id = current_setting('app.clerk_user_id', true)
    )
  );

CREATE POLICY "Users can insert own optimization results" ON optimization_results
  FOR INSERT WITH CHECK (
    user_id IN (
      SELECT id FROM users WHERE clerk_id = current_setting('app.clerk_user_id', true)
    )
  );

CREATE POLICY "Users can update own optimization results" ON optimization_results
  FOR UPDATE USING (
    user_id IN (
      SELECT id FROM users WHERE clerk_id = current_setting('app.clerk_user_id', true)
    )
  );

-- Function to update completed_at timestamp when status changes to completed
CREATE OR REPLACE FUNCTION update_optimization_completed_at()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'completed' AND OLD.status != 'completed' THEN
    NEW.completed_at = NOW();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update completed_at
CREATE TRIGGER update_optimization_completed_at_trigger
  BEFORE UPDATE ON optimization_results
  FOR EACH ROW
  WHEN (OLD.status IS DISTINCT FROM NEW.status)
  EXECUTE FUNCTION update_optimization_completed_at();

-- Add comments for documentation
COMMENT ON TABLE optimization_results IS 'Stores optimization results from Sematryx API for dashboard visualization';
COMMENT ON COLUMN optimization_results.operation_id IS 'Unique identifier from Sematryx API';
COMMENT ON COLUMN optimization_results.convergence_history IS 'Array of best objective values at each evaluation step';
COMMENT ON COLUMN optimization_results.learning_insights IS 'JSON object containing learning system insights (similar problems, patterns, recommendations)';
COMMENT ON COLUMN optimization_results.configuration IS 'Original optimization request configuration (bounds, variables, domain, max_evaluations, etc.)';
