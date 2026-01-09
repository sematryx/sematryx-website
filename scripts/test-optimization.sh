#!/bin/bash

# Test script to run an optimization and verify it appears in the dashboard
# 
# Usage:
#   ./scripts/test-optimization.sh YOUR_API_KEY
#
# Or set environment variable:
#   export SEMATRYX_API_KEY=your_key_here
#   ./scripts/test-optimization.sh

set -e

API_KEY="${1:-${SEMATRYX_API_KEY}}"
API_URL="${SEMATRYX_API_URL:-https://api.sematryx.com}"

if [ -z "$API_KEY" ]; then
  echo "❌ Error: API key required"
  echo "Usage: $0 YOUR_API_KEY"
  echo "Or set: export SEMATRYX_API_KEY=your_key_here"
  exit 1
fi

echo "🚀 Starting test optimization..."
echo "API URL: $API_URL"

# Run a simple sphere function optimization
RESPONSE=$(curl -s -X POST "${API_URL}/optimization/" \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "objective_function": "sphere",
    "variables": ["x1", "x2", "x3"],
    "bounds": [[-5, 5], [-5, 5], [-5, 5]],
    "max_evaluations": 500,
    "strategy": "auto"
  }')

echo "📥 Response:"
echo "$RESPONSE" | jq '.' || echo "$RESPONSE"

# Extract operation_id
OPERATION_ID=$(echo "$RESPONSE" | jq -r '.operation_id // .id // empty')

if [ -z "$OPERATION_ID" ] || [ "$OPERATION_ID" = "null" ]; then
  echo "❌ Failed to get operation ID"
  exit 1
fi

echo ""
echo "✅ Optimization started!"
echo "Operation ID: $OPERATION_ID"
echo ""
echo "⏳ Waiting for optimization to complete..."

# Poll for completion
MAX_WAIT=60
WAITED=0
while [ $WAITED -lt $MAX_WAIT ]; do
  STATUS=$(curl -s -X GET "${API_URL}/optimization/status/${OPERATION_ID}" \
    -H "Authorization: Bearer ${API_KEY}" | jq -r '.status // .state // empty')
  
  if [ "$STATUS" = "completed" ] || [ "$STATUS" = "success" ]; then
    echo "✅ Optimization completed!"
    break
  elif [ "$STATUS" = "failed" ] || [ "$STATUS" = "error" ]; then
    echo "❌ Optimization failed"
    exit 1
  fi
  
  echo "   Status: $STATUS (waiting...)"
  sleep 2
  WAITED=$((WAITED + 2))
done

if [ $WAITED -ge $MAX_WAIT ]; then
  echo "⏰ Timeout waiting for completion"
  echo "You can check status manually:"
  echo "  curl -X GET \"${API_URL}/optimization/status/${OPERATION_ID}\" -H \"Authorization: Bearer ${API_KEY}\""
  exit 1
fi

# Get final result
echo ""
echo "📊 Fetching final result..."
RESULT=$(curl -s -X GET "${API_URL}/optimization/result/${OPERATION_ID}" \
  -H "Authorization: Bearer ${API_KEY}")

echo "$RESULT" | jq '.' || echo "$RESULT"

echo ""
echo "✅ Test optimization complete!"
echo ""
echo "📝 Next steps:"
echo "1. The result should appear in your dashboard at: /dashboard/optimizations"
echo "2. If it doesn't appear, you may need to sync it manually"
echo "3. Operation ID: $OPERATION_ID"
echo ""
echo "To sync manually, you can use the sync endpoint (if implemented) or"
echo "insert the data directly into Supabase."
