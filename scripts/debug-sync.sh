#!/bin/bash

# Debug script to test optimization syncing
# Usage: ./scripts/debug-sync.sh OPERATION_ID

set -e

OPERATION_ID="${1}"
API_URL="${SEMATRYX_API_URL:-https://api.sematryx.com}"

if [ -z "$OPERATION_ID" ]; then
  echo "❌ Error: Operation ID required"
  echo "Usage: $0 OPERATION_ID"
  echo "Example: $0 opt_d8194881"
  exit 1
fi

echo "🔍 Debugging sync for operation: $OPERATION_ID"
echo ""

# Check if we can access the API
echo "1️⃣ Testing API access..."
if curl -s "${API_URL}/health" > /dev/null 2>&1; then
  echo "   ✅ API is accessible"
else
  echo "   ❌ API is not accessible"
  exit 1
fi

# Check if we can fetch the optimization
echo ""
echo "2️⃣ Testing optimization fetch..."
echo "   (You'll need to provide your API key)"
read -p "   Enter your API key: " API_KEY

RESPONSE=$(curl -s -X GET "${API_URL}/optimization/result/${OPERATION_ID}" \
  -H "Authorization: Bearer ${API_KEY}")

if echo "$RESPONSE" | jq -e '.operation_id' > /dev/null 2>&1; then
  echo "   ✅ Optimization found in API"
  echo "$RESPONSE" | jq '.operation_id, .status, .optimal_value' 2>/dev/null || echo "$RESPONSE"
else
  echo "   ❌ Optimization not found or error:"
  echo "$RESPONSE" | head -5
  exit 1
fi

echo ""
echo "3️⃣ Testing sync endpoint..."
echo "   (You'll need to be logged in to your dashboard)"
echo ""
echo "   Visit: https://yoursite.com/api/optimizations/sync"
echo "   Or run:"
echo "   curl -X POST https://yoursite.com/api/optimizations/sync \\"
echo "     -H 'Content-Type: application/json' \\"
echo "     -H 'Cookie: <your-auth-cookie>' \\"
echo "     -d '{\"operation_id\": \"${OPERATION_ID}\"}'"
echo ""
echo "4️⃣ Check database:"
echo "   Go to Supabase → SQL Editor and run:"
echo "   SELECT * FROM optimization_results WHERE operation_id = '${OPERATION_ID}';"
echo ""
echo "5️⃣ Check dashboard:"
echo "   Visit: https://yoursite.com/dashboard/optimizations"
echo ""
