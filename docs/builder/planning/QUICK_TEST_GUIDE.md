# Quick Test Guide - Optimization Dashboard

## The API is returning 502 errors

Since the Sematryx API at `https://api.sematryx.com` is currently returning 502 errors, use the SQL script to insert test data directly.

## Step-by-Step: Insert Test Data

### 1. Get Your User ID

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **SQL Editor**
4. Run this query:

```sql
SELECT id, email FROM users;
```

5. Copy your `id` (it's a UUID like `123e4567-e89b-12d3-a456-426614174000`)

### 2. Insert Test Data

1. Open the file: `scripts/insert-test-optimization.sql`
2. Find all instances of `'YOUR_USER_ID_HERE'`
3. Replace them with your actual user ID (keep the quotes)
4. Copy the entire script
5. Paste it into Supabase SQL Editor
6. Click **Run**

### 3. Verify

1. Go to your dashboard: `https://yoursite.com/dashboard/optimizations`
2. You should see 3 test optimizations:
   - ✅ 1 successful (CMA-ES, 847 evaluations)
   - ✅ 1 successful (Differential Evolution, 1247 evaluations)
   - ❌ 1 failed (SHGO, didn't converge)

### 4. Test Features

Try:
- **Filtering:** Filter by status (completed, failed)
- **Sorting:** Click column headers to sort
- **Search:** Search by problem_id
- **Pagination:** If you add more data, test pagination

---

## Alternative: Check API Status

If you want to use the real API instead:

1. **Check if API is running:**
   ```bash
   curl https://api.sematryx.com/health
   ```

2. **If it's down:**
   - Check your Kubernetes deployment
   - Check API logs
   - Verify the API service is running

3. **Once API is up:**
   ```bash
   cd /Users/patrick/Repos/sematryx-website
   ./scripts/test-optimization.sh YOUR_API_KEY
   ```

---

## What the Test Data Includes

The SQL script inserts:

1. **test_opt_001** - Successful sphere function optimization
   - Strategy: CMA-ES
   - Evaluations: 847
   - Optimal value: 0.000123 (very close to 0.0)
   - Status: completed ✅

2. **test_opt_002** - Successful Rosenbrock optimization
   - Strategy: Differential Evolution
   - Evaluations: 1247
   - Optimal value: 0.000089
   - Status: completed ✅
   - Created: 1 day ago

3. **test_opt_003** - Failed optimization
   - Strategy: SHGO
   - Evaluations: 500 (max reached)
   - Status: failed ❌
   - Error: "Optimization did not converge"
   - Created: 2 days ago

This gives you a good mix to test:
- ✅ Successful optimizations
- ❌ Failed optimizations
- 📊 Different strategies
- 📅 Different dates
- 📈 Different evaluation counts

---

## Troubleshooting

### "No data showing"
- Check that you replaced `YOUR_USER_ID_HERE` correctly
- Verify the SQL script ran without errors
- Check browser console for API errors
- Refresh the page

### "Error loading optimizations"
- Check browser DevTools → Network tab
- Look for failed `/api/optimizations` request
- Check Supabase connection
- Verify environment variables are set

### "User not found"
- Make sure you're logged in
- Check that your Clerk user exists in Supabase `users` table
- Run: `SELECT * FROM users WHERE clerk_id = 'your_clerk_id';`

---

## Next Steps

Once you see the test data:
1. ✅ Dashboard is working!
2. Continue with detail view implementation
3. Add convergence plots
4. Add learning insights
