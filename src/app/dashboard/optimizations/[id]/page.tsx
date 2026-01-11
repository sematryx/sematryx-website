import { notFound } from 'next/navigation'
import { auth, currentUser } from '@clerk/nextjs/server'
import { getOptimization, storeOptimizationResult } from '@/lib/optimizations'
import { syncOptimizationToDB } from '@/lib/optimizations/sync'
import { getOrCreateUser, getDecryptedApiKey } from '@/lib/api-keys'
import { isSupabaseConfigured } from '@/lib/supabase'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function OptimizationDetailPage({ params }: PageProps) {
  const { userId: clerkUserId } = await auth()

  if (!clerkUserId) {
    notFound()
  }

  if (!isSupabaseConfigured()) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Database not configured</h1>
        </div>
      </div>
    )
  }

  const user = await currentUser()
  if (!user) {
    notFound()
  }

  const dbUser = await getOrCreateUser(
    clerkUserId,
    user.emailAddresses[0]?.emailAddress || '',
    user.firstName
  )

  const { id } = await params
  const operationId = id

  // Try to get from database first
  let optimization = await getOptimization(dbUser.id, operationId)

  // If not found in database, try to sync from Sematryx API
  if (!optimization) {
    const apiKey = await getDecryptedApiKey(dbUser.id)

    if (apiKey) {
      try {
        // Sync from API to database
        const syncedResult = await syncOptimizationToDB(
          apiKey,
          operationId,
          dbUser.id,
          async (userId, opId, data) => {
            return await storeOptimizationResult(userId, opId, data)
          }
        )

        if (syncedResult) {
          // Fetch the newly synced result
          optimization = await getOptimization(dbUser.id, operationId)
        }
      } catch (error) {
        console.error('Error syncing optimization:', error)
        // Continue to show 404 if sync fails
      }
    }
  }

  if (!optimization) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            href="/dashboard/optimizations"
            className="text-primary-400 hover:text-primary-300 text-sm mb-4 inline-block"
          >
            ← Back to Optimizations
          </Link>
          <h1 className="text-3xl font-bold mb-2">
            Optimization: {optimization.problem_id || optimization.operation_id}
          </h1>
          <p className="text-gray-400 text-sm">
            Operation ID: {optimization.operation_id}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#1a1f2e] rounded-lg p-6 border border-gray-800">
            <h2 className="text-lg font-semibold mb-4 text-gray-200">Solution</h2>
            <div className="space-y-2">
              <div>
                <span className="text-gray-400 text-sm">Optimal Value:</span>
                <p className="text-xl font-mono text-primary-400">
                  {optimization.optimal_value?.toExponential(6) || 'N/A'}
                </p>
              </div>
              {optimization.optimal_solution && (
                <div>
                  <span className="text-gray-400 text-sm">Optimal Solution:</span>
                  <p className="text-sm font-mono text-gray-300 mt-1">
                    [{optimization.optimal_solution.map((v: number) => v.toFixed(6)).join(', ')}]
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#1a1f2e] rounded-lg p-6 border border-gray-800">
            <h2 className="text-lg font-semibold mb-4 text-gray-200">Execution Details</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className={`font-medium ${
                  optimization.status === 'completed' ? 'text-green-400' :
                  optimization.status === 'failed' ? 'text-red-400' :
                  'text-yellow-400'
                }`}>
                  {optimization.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Strategy:</span>
                <span className="text-gray-300">{optimization.strategy_used || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Evaluations:</span>
                <span className="text-gray-300">{optimization.evaluations_used?.toLocaleString() || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Execution Time:</span>
                <span className="text-gray-300">
                  {optimization.execution_time ? `${optimization.execution_time.toFixed(2)}s` : 'N/A'}
                </span>
              </div>
              {optimization.created_at && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Created:</span>
                  <span className="text-gray-300">
                    {new Date(optimization.created_at).toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {optimization.error_message && (
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-6">
            <h3 className="text-red-400 font-semibold mb-2">Error</h3>
            <p className="text-red-300 text-sm">{optimization.error_message}</p>
          </div>
        )}

        {optimization.learning_insights && (
          <div className="bg-[#1a1f2e] rounded-lg p-6 border border-gray-800 mb-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-200">Learning Insights</h2>
            <pre className="text-xs text-gray-300 overflow-auto">
              {JSON.stringify(optimization.learning_insights, null, 2)}
            </pre>
          </div>
        )}

        <div className="bg-[#1a1f2e] rounded-lg p-6 border border-gray-800">
          <h2 className="text-lg font-semibold mb-4 text-gray-200">Full Details</h2>
          <pre className="text-xs text-gray-300 overflow-auto">
            {JSON.stringify(optimization, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}
