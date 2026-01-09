# Optimizations Dashboard Testing Guide
**Created:** 2026-01-03  
**Status:** Ready for Testing

## What to Test

### 1. Page Access
**URL:** `https://yoursite.com/dashboard/optimizations`

**Expected:**
- ✅ Page loads without errors
- ✅ Shows "Optimization Results" header
- ✅ Navigation link "Optimizations" is visible in dashboard sidebar
- ✅ Page is accessible when logged in

**If Empty:**
- Should show "No optimizations yet" message
- Should show link to documentation
- Stats cards should show all zeros

---

### 2. Navigation
**Test:**
- Click "Optimizations" in dashboard sidebar
- Should navigate to `/dashboard/optimizations`
- URL should update correctly

---

### 3. API Endpoint
**Test:** `GET /api/optimizations`

**How to test:**
1. Open browser DevTools (F12)
2. Go to Network tab
3. Visit `/dashboard/optimizations`
4. Look for request to `/api/optimizations`

**Expected Response:**
```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 0,
    "totalPages": 0
  },
  "stats": {
    "total": 0,
    "successful": 0,
    "failed": 0,
    "running": 0,
    "avgExecutionTime": null,
    "avgEvaluations": null
  },
  "availableStrategies": []
}
```

**If Error:**
- Check browser console for error messages
- Check Network tab for failed requests
- Verify authentication is working

---

### 4. Empty State
**When:** No optimization results in database

**Expected:**
- Stats cards show zeros
- Table shows "No optimizations yet" message
- Link to documentation is visible
- Filters are visible but disabled/empty

---

### 5. With Data (Future)
**When:** Optimization results exist in database

**Expected:**
- Stats cards show correct counts
- Table displays optimization results
- Filters work (status, strategy, search)
- Sorting works (click column headers)
- Pagination works (if more than 20 results)
- Clicking a row navigates to detail page (when built)

---

## Common Issues & Solutions

### Issue: Page shows "Error loading optimizations"
**Possible Causes:**
1. API endpoint not working
2. Database connection issue
3. Authentication problem

**Check:**
- Browser console for errors
- Network tab for failed API calls
- Verify Supabase is configured
- Verify user is authenticated

---

### Issue: "Database not configured"
**Solution:**
- Check Supabase environment variables in Vercel
- Verify `SUPABASE_SERVICE_ROLE_KEY` is set
- Verify `NEXT_PUBLIC_SUPABASE_URL` is set

---

### Issue: Empty page / No data
**This is Expected:**
- If you haven't run any optimizations yet, the page will be empty
- This is normal - the dashboard will populate as users run optimizations

**To Test with Data:**
- Run an optimization via the Sematryx API
- The result should be stored in the database
- Refresh the dashboard to see it

---

## Testing Checklist

### Basic Functionality
- [ ] Page loads without errors
- [ ] Navigation link works
- [ ] API endpoint returns data (even if empty)
- [ ] Empty state displays correctly
- [ ] Stats cards render (even with zeros)
- [ ] Filters component renders
- [ ] Table component renders
- [ ] Pagination component renders (even if not needed)

### Authentication
- [ ] Page requires login (redirects if not logged in)
- [ ] User can access their own data only
- [ ] API returns 401 if not authenticated

### Error Handling
- [ ] Error messages display if API fails
- [ ] Retry button works
- [ ] Loading states show correctly

### Responsive Design
- [ ] Page works on desktop
- [ ] Page works on mobile
- [ ] Table scrolls horizontally on mobile
- [ ] Filters are accessible on mobile

---

## Next Steps After Testing

1. **If everything works:**
   - Continue with detail view implementation (Week 3-4)
   - Add convergence plots
   - Add learning insights

2. **If issues found:**
   - Document the issues
   - Fix bugs
   - Re-test

3. **To add test data:**
   - Run optimizations via Sematryx API
   - Results will automatically appear in dashboard
   - Or manually insert test data into Supabase

---

## Manual Test Data (Optional)

If you want to test with sample data, you can insert directly into Supabase:

```sql
-- Example: Insert a test optimization result
INSERT INTO optimization_results (
  user_id,
  operation_id,
  problem_id,
  optimal_value,
  strategy_used,
  evaluations_used,
  status,
  success,
  execution_time,
  created_at
) VALUES (
  'YOUR_USER_ID_HERE',  -- Get from users table
  'test_opt_001',
  'test_problem_1',
  123.45,
  'cma_es',
  1500,
  'completed',
  true,
  2.34,
  NOW()
);
```

**Note:** Replace `YOUR_USER_ID_HERE` with your actual user ID from the `users` table.

---

## Browser Console Checks

Open DevTools Console and check for:
- ✅ No red errors
- ✅ API calls succeed (status 200)
- ✅ No authentication errors
- ✅ No CORS errors

---

## Network Tab Checks

In DevTools Network tab:
- ✅ `/api/optimizations` request succeeds
- ✅ Response time is reasonable (< 1 second)
- ✅ Response contains expected JSON structure
- ✅ No 401/403/500 errors

---

## What Success Looks Like

✅ **Page loads:** No errors, clean UI  
✅ **API works:** Returns data structure (even if empty)  
✅ **UI renders:** All components visible  
✅ **Navigation works:** Can navigate to/from page  
✅ **Empty state:** Helpful message when no data  

If all these pass, the dashboard is working correctly and ready for real data!
