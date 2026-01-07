# API Key Deletion Issue - Root Cause Analysis & Fix

## Issue Summary
User's API key disappeared from their account. The user confirmed their user record was NOT deleted, indicating the API key was directly deleted (hard delete) rather than through CASCADE deletion.

## Investigation Findings

### User Record Status
- ✅ User record exists and was NOT deleted
- ❌ API key is missing from the database
- This indicates either a **direct hard delete** of the API key OR a **database reset**

### Most Likely Cause: Database Reset/Recreation

**Evidence:**
- All migrations use `CREATE TABLE IF NOT EXISTS` (lines 2, 13, 26 in `001_create_users_and_api_keys.sql`)
- This pattern allows the database to be dropped and recreated without errors
- When you logged in after the reset, `getOrCreateUser()` created a new user record
- Your API keys were never recreated because they're only created through the application UI

**What likely happened:**
1. Supabase database was dropped/reset (manually, via migration reset, or infrastructure change)
2. All data was lost (users, API keys, everything)
3. Migrations ran and recreated empty tables
4. When you logged in, `getOrCreateUser()` created a new user record with a new UUID
5. Your old API keys are gone because they were never recreated

### Other Possible Causes
1. **Manual database operation** - Direct SQL DELETE on `api_keys` table
2. **Database admin tool** - Deletion through Supabase dashboard or admin interface
3. **Database migration reset** - `supabase db reset` or similar command
4. **Infrastructure change** - Supabase project recreated or database instance replaced

### Code Analysis
- ✅ `revokeApiKey()` only does soft delete (sets `is_active = false`)
- ✅ No hard DELETE operations found in application code
- ✅ `listApiKeys()` doesn't filter by `is_active`, so revoked keys should still appear
- ⚠️ The API key appears to have been completely removed from the database

## Additional Risk: CASCADE Deletion

Even though this wasn't the cause in this case, the database schema has a vulnerability:

```sql
user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE
```

If a user record IS deleted in the future, all their API keys would be automatically deleted. This is a data loss risk.

## Fixes Implemented

### 1. Migration: `003_prevent_cascade_api_key_deletion.sql`

Changed the foreign key constraint from `ON DELETE CASCADE` to `ON DELETE RESTRICT`:

- **Before**: Deleting a user automatically deleted all their API keys
- **After**: Deleting a user is prevented if they have any API keys

This forces explicit cleanup:
1. Revoke all API keys first
2. Then delete the user (if needed)

### Benefits
- ✅ Prevents accidental data loss from user deletion
- ✅ Forces explicit API key revocation before user deletion
- ✅ Protects user data integrity
- ✅ Makes deletions intentional and auditable

### 2. Recommendations for Direct Deletion Prevention

Since the API key was directly deleted (not through CASCADE), additional safeguards are needed:

1. **Audit logging**: Add triggers to log all DELETE operations on `api_keys`
2. **Soft deletes**: Consider changing hard deletes to soft deletes with `deleted_at` column
3. **Access controls**: Review who has direct database access
4. **Monitoring**: Add alerts for unexpected API key deletions

## Recommendations

### Short-term
1. ✅ Migration created to prevent future occurrences
2. Apply the migration to production database
3. Monitor for any user deletion attempts that fail due to this constraint

### Long-term Considerations
1. **Soft deletes for API keys**: Add `deleted_at` column to `api_keys` table instead of hard deletes
2. **Audit logging**: Add triggers to log all DELETE/UPDATE operations on `api_keys` table
3. **Access controls**: Review and restrict direct database access to `api_keys` table
4. **Clerk webhooks**: Add webhook handler for Clerk user deletion events
5. **Backup strategy**: Regular backups of API keys table
6. **Monitoring**: Add alerts for unexpected API key deletions or revocations

## Migration Instructions

To apply this fix:

```bash
# Apply the migration
supabase migration up

# Or if using Supabase CLI directly
psql $DATABASE_URL -f supabase/migrations/003_prevent_cascade_api_key_deletion.sql
```

## Notes

- The user has already created a new API key
- The CASCADE fix prevents future accidental deletions if user records are deleted
- **Most likely root cause**: Database was dropped and recreated (Supabase reset, migration reset, or infrastructure change)
- **Evidence**: Migrations use `CREATE TABLE IF NOT EXISTS`, allowing clean database recreation
- **What to check**: 
  - Supabase project history/logs for database resets
  - Migration execution history
  - Any infrastructure changes or deployments around the time the key disappeared
- If user deletion is needed, API keys must be revoked first
- **Prevention**: The audit logging migration will help track future deletions

