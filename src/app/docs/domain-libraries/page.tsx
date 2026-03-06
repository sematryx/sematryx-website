import Link from "next/link";

export default function DomainLibrariesDocsPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-4xl font-bold">Domain Libraries Docs</h1>
        <p className="text-muted-foreground text-lg">
          Domain-specific optimization libraries (finance, engineering,
          logistics) are under development. Documentation will appear here
          at launch.
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
