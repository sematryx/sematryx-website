-- Script to insert a test optimization result for dashboard testing
-- 
-- Usage:
--   1. Get your user_id from the users table:
--      SELECT id, email FROM users;
--
--   2. Replace YOUR_USER_ID_HERE with your actual user ID
--
--   3. Run this script in Supabase SQL Editor or via psql

-- Example: Insert a test optimization result
INSERT INTO optimization_results (
  user_id,
  operation_id,
  problem_id,
  optimal_value,
  optimal_solution,
  strategy_used,
  evaluations_used,
  status,
  success,
  execution_time,
  iterations,
  created_at,
  updated_at
) VALUES (
  'YOUR_USER_ID_HERE',  -- Replace with your user ID from users table
  'test_opt_001',
  'test_problem_sphere_3d',
  0.000123,  -- Very close to optimal (0.0 for sphere function)
  ARRAY[0.001, -0.002, 0.003]::numeric[],  -- Optimal solution (close to [0,0,0])
  'cma_es',
  847,
  'completed',
  true,
  2.34,
  89,
  NOW(),
  NOW()
)
ON CONFLICT (user_id, operation_id) DO UPDATE SET
  updated_at = NOW();

-- Insert another test result with different strategy
INSERT INTO optimization_results (
  user_id,
  operation_id,
  problem_id,
  optimal_value,
  optimal_solution,
  strategy_used,
  evaluations_used,
  status,
  success,
  execution_time,
  iterations,
  created_at,
  updated_at
) VALUES (
  'YOUR_USER_ID_HERE',  -- Replace with your user ID
  'test_opt_002',
  'test_problem_rosenbrock_2d',
  0.000089,
  ARRAY[1.001, 1.002]::numeric[],
  'differential_evolution',
  1247,
  'completed',
  true,
  3.45,
  156,
  NOW() - INTERVAL '1 day',
  NOW() - INTERVAL '1 day'
)
ON CONFLICT (user_id, operation_id) DO UPDATE SET
  updated_at = NOW();

-- Insert a failed optimization
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
  error_message,
  created_at,
  updated_at
) VALUES (
  'YOUR_USER_ID_HERE',  -- Replace with your user ID
  'test_opt_003',
  'test_problem_failed',
  NULL,
  'shgo',
  500,
  'failed',
  false,
  1.23,
  'Optimization did not converge within max evaluations',
  NOW() - INTERVAL '2 days',
  NOW() - INTERVAL '2 days'
)
ON CONFLICT (user_id, operation_id) DO UPDATE SET
  updated_at = NOW();

-- Verify the inserts
SELECT 
  operation_id,
  problem_id,
  status,
  success,
  optimal_value,
  strategy_used,
  evaluations_used,
  execution_time,
  created_at
FROM optimization_results
WHERE user_id = 'YOUR_USER_ID_HERE'  -- Replace with your user ID
ORDER BY created_at DESC;
