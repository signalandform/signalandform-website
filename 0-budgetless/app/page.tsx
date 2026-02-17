import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function LandingPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="font-semibold text-xl">Budgetless</span>
          <nav className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Get started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Find what you forgot you&apos;re paying for
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Track your subscriptions, see your annual cost at a glance, and get
            reminders before renewals. Take control of your recurring payments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity text-lg"
            >
              Get started free
            </Link>
            <Link
              href="/login"
              className="px-8 py-3 border border-border rounded-md font-medium hover:bg-accent transition-colors text-lg"
            >
              Log in
            </Link>
          </div>
        </div>

        {/* Value props */}
        <section className="mt-24 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto w-full">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-lg mb-2">See all subscriptions</h3>
            <p className="text-muted-foreground text-sm">
              Add subscriptions manually and see your total monthly and annual
              spend in one place.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-lg mb-2">Annual cost at a glance</h3>
            <p className="text-muted-foreground text-sm">
              Every subscription automatically converts to annual cost so you can
              spot the big ones.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-lg mb-2">Renewal reminders</h3>
            <p className="text-muted-foreground text-sm">
              Get email reminders before renewals—choose 1, 3, or 7 days
              before.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            A product of{" "}
            <a
              href="https://signalandform.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Signal & Form
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
