import Link from "next/link";

export default function DomainsPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-4xl font-bold">Domain Libraries</h1>
        <p className="text-muted-foreground text-lg">
          Pre-built optimization primitives for finance, engineering, logistics,
          and more — so you can solve domain problems without writing the math.
        </p>
        <div className="inline-block bg-muted rounded-lg px-6 py-3 text-sm font-medium">
          Coming Soon
        </div>
        <p className="text-sm text-muted-foreground">
          Domain libraries are in development.{" "}
          <Link href="/docs" className="underline hover:text-foreground">
            Explore the current API docs
          </Link>
        </p>
      </div>
    </div>
  );
}
