# Optimization Sync Troubleshooting Guide

## Quick Checklist

### 1. Database Migration
✅ **Have you run the migration?**
```sql
-- In Supabase SQL Editor, run:
-- File: supabase/migrations/006_add_api_key_encryption.sql
```

Check if column exists:
```sql
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'api_keys' AND column_name = 'key_encrypted';
```

### 2. Environment Variable
✅ **Is `API_KEY_ENCRYPTION_KEY` set in Vercel?**
- Go to Vercel → Project Settings → Environment Variables
- Check if `API_KEY_ENCRYPTION_KEY` exists
- Must be set for Production, Preview, and Development

Generate a key:
```bash
openssl rand -base64 32
```

### 3. API Key Encryption
✅ **Is your API key encrypted?**

Check in Supabase:
```sql
SELECT id, name, key_prefix, 
       CASE WHEN key_encrypted IS NULL THEN 'NOT ENCRYPTED' ELSE 'ENCRYPTED' END as encryption_status
FROM api_keys
WHERE is_active = true
ORDER BY created_at DESC;
```

**If your key shows "NOT ENCRYPTED":**
- Create a NEW API key (old keys won't have encryption)
- The new key will be automatically encrypted

### 4. Test Manual Sync

Try syncing manually:
```bash
# Replace with your actual operation ID
curl -X POST https://yoursite.com/api/optimizations/sync \
  -H "Content-Type: application/json" \
  -H "Cookie: <your-auth-cookie>" \
  -d '{"operation_id": "opt_d8194881"}'
```

Or use the browser console (while logged in):
```javascript
fetch('/api/optimizations/sync', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ operation_id: 'opt_d8194881' })
}).then(r => r.json()).then(console.log)
```

### 5. Check Database

Verify the optimization is in the database:
```sql
SELECT operation_id, status, optimal_value, created_at
FROM optimization_results
ORDER BY created_at DESC
LIMIT 10;
```

### 6. Check API Response

Test if the API returns the optimization:
```bash
curl -X GET "https://api.sematryx.com/optimization/result/opt_d8194881" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Common Issues

### Issue: "No decryptable API key found"
**Cause:** API key doesn't have encryption (old key)
**Solution:** Create a new API key

### Issue: "API key decryption not implemented"
**Cause:** `API_KEY_ENCRYPTION_KEY` environment variable not set
**Solution:** Set the environment variable in Vercel

### Issue: "Optimization not found in API"
**Cause:** 
- Wrong operation ID
- Optimization doesn't exist
- API key doesn't have access
**Solution:** Verify operation ID and API key

### Issue: Optimization appears in API but not in dashboard
**Cause:** Sync hasn't run yet
**Solution:** 
1. Visit the detail page: `/dashboard/optimizations/opt_d8194881`
2. Or manually sync using the sync endpoint

## Step-by-Step Debugging

1. **Check migration:**
   ```sql
   SELECT column_name FROM information_schema.columns 
   WHERE table_name = 'api_keys' AND column_name = 'key_encrypted';
   ```
   Should return: `key_encrypted`

2. **Check encryption key:**
   - In Vercel, verify `API_KEY_ENCRYPTION_KEY` is set
   - Redeploy if you just added it

3. **Check API key:**
   ```sql
   SELECT key_encrypted IS NOT NULL as has_encryption
   FROM api_keys 
   WHERE is_active = true 
   ORDER BY created_at DESC 
   LIMIT 1;
   ```
   Should return: `true`

4. **Test sync manually:**
   - Use the sync endpoint with your operation ID
   - Check response for errors

5. **Check database:**
   ```sql
   SELECT * FROM optimization_results 
   WHERE operation_id = 'opt_d8194881';
   ```

6. **Check browser console:**
   - Open DevTools → Network tab
   - Look for `/api/optimizations` requests
   - Check for errors

## Still Not Working?

1. Check Vercel function logs for errors
2. Check Supabase logs for database errors
3. Verify the operation ID exists in the Sematryx API
4. Ensure you're using a NEW API key (created after encryption was implemented)
