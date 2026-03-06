import Link from "next/link";

export default function ConversationalOptimizationDocsPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-4xl font-bold">Conversational Optimization Docs</h1>
        <p className="text-muted-foreground text-lg">
          Documentation for conversational problem formulation will appear here
          once the feature launches.
        </p>
        <div className="inline-block bg-muted rounded-lg px-6 py-3 text-sm font-medium">
          Coming Soon
        </div>
        <p className="text-sm text-muted-foreground">
          <Link href="/docs" className="underline hover:text-foreground">
            Back to docs
          </Link>
        </p>
      </div>
    </div>
  );
}
