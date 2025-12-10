import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function DataTransformationTutorial() {
  const createPipeline = `curl -X POST https://api.sematryx.com/v1/automations \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "data-transformation-pipeline",
    "trigger": {
      "type": "webhook",
      "config": {
        "path": "/webhook/data-pipeline"
      }
    },
    "actions": [
      {
        "type": "transform",
        "config": {
          "input_format": "json",
          "output_format": "csv",
          "transformations": [
            {
              "operation": "filter",
              "condition": "price > 100"
            },
            {
              "operation": "aggregate",
              "group_by": "category",
              "aggregations": {
                "total": "sum(price)",
                "count": "count()"
              }
            }
          ]
        }
      },
      {
        "type": "store",
        "config": {
          "destination": "s3://bucket/transformed-data.csv"
        }
      }
    ]
  }'`

  const pythonExample = `from sematryx import SematryxClient

client = SematryxClient(api_key='your-api-key')

# Create data transformation pipeline
pipeline = client.automations.create(
    name='data-transformation-pipeline',
    trigger={
        'type': 'webhook',
        'config': {'path': '/webhook/data-pipeline'}
    },
    actions=[
        {
            'type': 'transform',
            'config': {
                'input_format': 'json',
                'output_format': 'csv',
                'transformations': [
                    {'operation': 'filter', 'condition': 'price > 100'},
                    {
                        'operation': 'aggregate',
                        'group_by': 'category',
                        'aggregations': {
                            'total': 'sum(price)',
                            'count': 'count()'
                        }
                    }
                ]
            }
        },
        {
            'type': 'store',
            'config': {
                'destination': 's3://bucket/transformed-data.csv'
            }
        }
    ]
)

print(f'Pipeline created: {pipeline.id}')`

  const triggerPipeline = `curl -X POST https://api.sematryx.com/v1/automations/auto_1234567890/trigger \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input_data": {
      "records": [
        {"id": 1, "name": "Product A", "price": 150, "category": "Electronics"},
        {"id": 2, "name": "Product B", "price": 80, "category": "Electronics"},
        {"id": 3, "name": "Product C", "price": 200, "category": "Clothing"}
      ]
    }
  }'`

  return (
    <main>
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href="/tutorials" 
            className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-flex items-center"
          >
            ← Back to Tutorials
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
              Intermediate
            </span>
            <span className="text-gray-500">• 30 minutes</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Data Transformation Pipeline
          </h1>
          <p className="text-xl text-gray-600">
            Build a complete data transformation pipeline with real-time processing, filtering, aggregation, and storage.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What You'll Build
            </h2>
            <p className="text-gray-700 mb-4">
              In this tutorial, you'll create a data transformation pipeline that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Receives JSON data via webhook</li>
              <li>Filters records based on conditions</li>
              <li>Aggregates data by categories</li>
              <li>Transforms the output to CSV format</li>
              <li>Stores the transformed data to cloud storage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Prerequisites
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Before You Start</h3>
              <ul className="space-y-2 text-blue-800">
                <li>✅ A Sematryx account with an active API key</li>
                <li>✅ Basic understanding of data transformation concepts</li>
                <li>✅ Familiarity with JSON and CSV formats</li>
                <li>✅ Access to cloud storage (S3, Azure, GCS) for output</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 1: Create the Pipeline
            </h2>
            <p className="text-gray-700 mb-4">
              Create a new automation with transformation actions:
            </p>
            <CodeBlock
              code={createPipeline}
              language="bash"
              title="Create data transformation pipeline"
            />
            <p className="text-gray-700 mt-4">
              This pipeline includes:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
              <li><strong>Webhook trigger:</strong> Receives data via HTTP POST</li>
              <li><strong>Transform action:</strong> Filters and aggregates the data</li>
              <li><strong>Store action:</strong> Saves the result to cloud storage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 2: Using the Python SDK
            </h2>
            <p className="text-gray-700 mb-4">
              You can also create the pipeline using the Python SDK:
            </p>
            <CodeBlock
              code={pythonExample}
              language="python"
              title="Create pipeline with Python SDK"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 3: Trigger the Pipeline
            </h2>
            <p className="text-gray-700 mb-4">
              Send data to your pipeline via webhook or manual trigger:
            </p>
            <CodeBlock
              code={triggerPipeline}
              language="bash"
              title="Trigger the pipeline with data"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 4: Monitor Execution
            </h2>
            <p className="text-gray-700 mb-4">
              Check the execution status and view results:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Check Execution Status
                </h3>
                <code className="text-sm bg-gray-100 p-2 rounded block">
                  GET /v1/automations/auto_1234567890/executions
                </code>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  View Transformed Data
                </h3>
                <p className="text-gray-600 text-sm">
                  Access the transformed CSV file from your configured storage destination.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Advanced Transformations
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Operations</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Filter:</strong> Filter records based on conditions</li>
                <li><strong>Map:</strong> Transform individual fields</li>
                <li><strong>Aggregate:</strong> Group and aggregate data</li>
                <li><strong>Join:</strong> Combine multiple data sources</li>
                <li><strong>Sort:</strong> Order records by fields</li>
                <li><strong>Deduplicate:</strong> Remove duplicate records</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🎉 Next Steps
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-green-800 mb-4">
                You've successfully created a data transformation pipeline! 
                Explore more advanced features:
              </p>
              <div className="space-y-2">
                <Link 
                  href="/tutorials/webhook-automation" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Learn about webhook triggers
                </Link>
                <Link 
                  href="/tutorials/monitoring-alerts" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Set up monitoring and alerts
                </Link>
                <Link 
                  href="/docs/api/automation" 
                  className="block text-green-700 hover:text-green-800 underline"
                >
                  → Explore the full API documentation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}

