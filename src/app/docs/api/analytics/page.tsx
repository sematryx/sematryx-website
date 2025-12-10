import CodeBlock from '@/components/CodeBlock'

export default function AnalyticsEndpointsPage() {
  const getMetrics = `curl -X GET "https://api.sematryx.com/v1/analytics/metrics?start_date=2024-01-01&end_date=2024-01-31" \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const getExecutionStats = `curl -X GET https://api.sematryx.com/v1/analytics/executions \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const getPerformanceData = `curl -X GET "https://api.sematryx.com/v1/analytics/performance?optimization_id=opt_1234567890" \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const metricsResponse = `{
  "period": {
    "start": "2024-01-01T00:00:00Z",
    "end": "2024-01-31T23:59:59Z"
  },
  "metrics": {
    "total_optimizations": 1250,
    "successful_optimizations": 1195,
    "failed_optimizations": 55,
    "average_optimization_time": 2.34,
    "total_evaluations": 1250000,
    "cost": {
      "total": 125.50,
      "currency": "USD"
    }
  },
  "trends": {
    "optimizations_per_day": [45, 52, 38, 61, ...],
    "success_rate": [0.96, 0.97, 0.95, 0.98, ...]
  }
}`

  const executionStatsResponse = `{
  "total": 1250,
  "by_status": {
    "completed": 1195,
    "failed": 55
  },
  "by_optimization": [
    {
      "optimization_id": "opt_1234567890",
      "count": 450,
      "success_rate": 0.98
    }
  ],
  "time_series": [
    {
      "date": "2024-01-01",
      "optimizations": 45,
      "successful": 43,
      "failed": 2
    }
  ]
}`

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Analytics Endpoints
        </h1>
        <p className="text-xl text-gray-600">
          Access performance metrics, execution statistics, and business intelligence data.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Get Metrics
          </h2>
          <p className="text-gray-700 mb-4">
            Retrieve aggregated metrics for a specified time period.
          </p>
          <CodeBlock
            code={getMetrics}
            language="bash"
            title="GET /v1/analytics/metrics"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Query Parameters</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>start_date</strong> (required): Start date in ISO 8601 format</li>
              <li><strong>end_date</strong> (required): End date in ISO 8601 format</li>
              <li><strong>optimization_id</strong> (optional): Filter by specific optimization</li>
              <li><strong>granularity</strong> (optional): hour, day, week, month (default: day)</li>
            </ul>
          </div>
          <CodeBlock
            code={metricsResponse}
            language="json"
            title="Response"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Get Execution Statistics
          </h2>
          <p className="text-gray-700 mb-4">
            Get detailed statistics about optimization runs.
          </p>
          <CodeBlock
            code={getExecutionStats}
            language="bash"
            title="GET /v1/analytics/executions"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Query Parameters</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>start_date</strong> (optional): Filter executions from this date</li>
              <li><strong>end_date</strong> (optional): Filter executions until this date</li>
              <li><strong>optimization_id</strong> (optional): Filter by specific optimization</li>
              <li><strong>status</strong> (optional): Filter by status (completed, failed, running, pending)</li>
            </ul>
          </div>
          <CodeBlock
            code={executionStatsResponse}
            language="json"
            title="Response"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Get Performance Data
          </h2>
          <p className="text-gray-700 mb-4">
            Retrieve performance metrics for specific optimizations or overall account.
          </p>
          <CodeBlock
            code={getPerformanceData}
            language="bash"
            title="GET /v1/analytics/performance"
          />
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-4">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Performance Metrics</h3>
            <ul className="space-y-2 text-green-800">
              <li><strong>Execution Time:</strong> Average, median, p95, p99 execution times</li>
              <li><strong>Throughput:</strong> Executions per second/minute/hour</li>
              <li><strong>Error Rate:</strong> Percentage of failed executions</li>
              <li><strong>Resource Usage:</strong> CPU, memory, network utilization</li>
              <li><strong>Cost Efficiency:</strong> Cost per execution, optimization opportunities</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Available Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Execution Metrics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Total optimizations</li>
                <li>• Successful optimizations</li>
                <li>• Failed optimizations</li>
                <li>• Optimization time statistics</li>
                <li>• Success rate</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Metrics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Function evaluations</li>
                <li>• Cost analysis</li>
                <li>• ROI calculations</li>
                <li>• Usage trends</li>
                <li>• Efficiency gains</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Metrics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Response times</li>
                <li>• Throughput rates</li>
                <li>• Resource utilization</li>
                <li>• Error rates</li>
                <li>• Optimization opportunities</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Trend Analysis</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Time series data</li>
                <li>• Growth trends</li>
                <li>• Seasonal patterns</li>
                <li>• Anomaly detection</li>
                <li>• Predictive insights</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Exporting Data
          </h2>
          <p className="text-gray-700 mb-4">
            Analytics data can be exported in various formats for further analysis:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <ul className="space-y-2 text-blue-800">
              <li><strong>CSV:</strong> Add <code className="bg-blue-100 px-2 py-1 rounded">?format=csv</code> to any endpoint</li>
              <li><strong>JSON:</strong> Default format for all endpoints</li>
              <li><strong>Excel:</strong> Add <code className="bg-blue-100 px-2 py-1 rounded">?format=xlsx</code> for Excel export</li>
              <li><strong>PDF:</strong> Add <code className="bg-blue-100 px-2 py-1 rounded">?format=pdf</code> for report export</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

