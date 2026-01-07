-- Migration: Add audit logging for API key deletions
-- This helps track when and potentially why API keys are deleted

-- Create audit log table for API key operations
CREATE TABLE IF NOT EXISTS api_key_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  api_key_id UUID NOT NULL,
  user_id UUID NOT NULL REFERENCES users(id),
  action TEXT NOT NULL CHECK (action IN ('created', 'revoked', 'deleted', 'updated')),
  key_name TEXT,
  key_prefix TEXT,
  performed_by TEXT, -- Could be user_id, system, or admin
  performed_at TIMESTAMPTZ DEFAULT NOW(),
  metadata JSONB, -- Additional context like IP address, user agent, etc.
  CONSTRAINT fk_api_key_audit_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create index for efficient queries
CREATE INDEX IF NOT EXISTS idx_api_key_audit_api_key_id ON api_key_audit_log(api_key_id);
CREATE INDEX IF NOT EXISTS idx_api_key_audit_user_id ON api_key_audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_api_key_audit_action ON api_key_audit_log(action);
CREATE INDEX IF NOT EXISTS idx_api_key_audit_performed_at ON api_key_audit_log(performed_at);

-- Function to log API key deletions
CREATE OR REPLACE FUNCTION log_api_key_deletion()
RETURNS TRIGGER AS $$
BEGIN
  -- Log the deletion before it happens
  INSERT INTO api_key_audit_log (
    api_key_id,
    user_id,
    action,
    key_name,
    key_prefix,
    performed_by,
    metadata
  )
  VALUES (
    OLD.id,
    OLD.user_id,
    'deleted',
    OLD.name,
    OLD.key_prefix,
    current_setting('app.user_id', true), -- Set this in application code
    jsonb_build_object(
      'is_active', OLD.is_active,
      'revoked_at', OLD.revoked_at,
      'last_used_at', OLD.last_used_at,
      'created_at', OLD.created_at
    )
  );
  
  RETURN OLD;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to log deletions
CREATE TRIGGER api_key_deletion_audit
  BEFORE DELETE ON api_keys
  FOR EACH ROW
  EXECUTE FUNCTION log_api_key_deletion();

-- Function to log API key updates (revocations)
CREATE OR REPLACE FUNCTION log_api_key_update()
RETURNS TRIGGER AS $$
BEGIN
  -- Log revocation (when is_active changes from true to false)
  IF OLD.is_active = true AND NEW.is_active = false THEN
    INSERT INTO api_key_audit_log (
      api_key_id,
      user_id,
      action,
      key_name,
      key_prefix,
      performed_by,
      metadata
    )
    VALUES (
      NEW.id,
      NEW.user_id,
      'revoked',
      NEW.name,
      NEW.key_prefix,
      current_setting('app.user_id', true),
      jsonb_build_object(
        'revoked_at', NEW.revoked_at,
        'last_used_at', NEW.last_used_at
      )
    );
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to log revocations
CREATE TRIGGER api_key_update_audit
  AFTER UPDATE ON api_keys
  FOR EACH ROW
  WHEN (OLD.is_active IS DISTINCT FROM NEW.is_active)
  EXECUTE FUNCTION log_api_key_update();

-- Add comment
COMMENT ON TABLE api_key_audit_log IS 'Audit trail for all API key operations (create, revoke, delete, update)';
COMMENT ON FUNCTION log_api_key_deletion() IS 'Logs API key deletions before they occur';
COMMENT ON FUNCTION log_api_key_update() IS 'Logs API key revocations when is_active changes to false';




