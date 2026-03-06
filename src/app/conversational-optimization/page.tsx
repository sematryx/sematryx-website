import Link from "next/link";

export default function ConversationalOptimizationPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-4xl font-bold">Conversational Optimization</h1>
        <p className="text-muted-foreground text-lg">
          Describe your optimization problem in plain English and let Sematryx
          guide you through parameter collection automatically.
        </p>
        <div className="inline-block bg-muted rounded-lg px-6 py-3 text-sm font-medium">
          Coming Soon
        </div>
        <p className="text-sm text-muted-foreground">
          This feature is under active development.{" "}
          <Link href="/" className="underline hover:text-foreground">
            Return to home
          </Link>
        </p>
      </div>
    </div>
  );
}
