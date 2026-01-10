# Vercel Environment Variable Not Accessible - Troubleshooting

## Issue
`API_KEY_ENCRYPTION_KEY` is set in Vercel dashboard but not accessible in runtime.

## Debug Output Shows
- Other env vars work (CLERK_SECRET_KEY, STRIPE_*)
- `API_KEY_ENCRYPTION_KEY` is NOT in the accessible env vars list
- Variable is visible in Vercel dashboard

## Possible Causes

### 1. Variable Not Linked to Project
**Symptom:** Variable shows "Link To Projects" in Vercel
**Fix:**
1. Click the three dots (⋯) next to the variable
2. Click "Edit" or "Link to Projects"
3. Ensure `sematryx-website` project is checked
4. Save and redeploy

### 2. Variable Set at Team Level, Not Project Level
**Fix:**
1. Go to **Project Settings** (not Team Settings)
2. Settings → Environment Variables
3. Add the variable there (not in team settings)
4. Redeploy

### 3. Vercel Caching Issue
**Fix:**
1. Delete the variable
2. Wait 1 minute
3. Re-add it at project level
4. Trigger a fresh deployment (not redeploy of old)

### 4. Character Encoding Issue
**Fix:**
1. Copy the variable value
2. Delete the variable
3. Re-add with a freshly generated key:
   ```bash
   openssl rand -base64 32
   ```

## Quick Test
After fixing, check Vercel function logs when creating an API key:
- Look for: `✅ API key encrypted successfully`
- Or: `❌ API key encryption failed:` with error details

## Alternative: Use Supabase Vault
If Vercel continues to have issues, we could store the encryption key in Supabase Vault instead of environment variables.
