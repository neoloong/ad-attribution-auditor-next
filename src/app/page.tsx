import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowRight, BarChart3, FileSearch, Shield, TrendingDown, Upload, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-lg">
            <FileSearch className="h-5 w-5" />
            Ad Attribution Auditor
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <Link href="/methodology" className="hover:text-foreground transition-colors">Methodology</Link>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/upload"
              className={cn(buttonVariants({ variant: "default", size: "sm" }))}
            >
              Get Started <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Open Source · MIT License
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
            Don&apos;t let Big Tech grade their own homework.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Independent ad attribution auditing. Cross-reference Meta Ads &amp; Google Ads
            against your Shopify orders to reveal your <strong>true incremental ROAS</strong>.
            Uncover over-counted conversions and cannibalized organic sales.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/upload"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Start Your Free Audit <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/neoloong/ad-attribution-auditor"
              target="_blank"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              View on GitHub
            </Link>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Upload CSVs from Meta Ads, Google Ads, and Shopify — no API keys required.
          </p>
        </div>
      </section>

      <Separator />

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What This Tool Does</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Ad platforms self-report conversions and have every incentive to inflate
            the numbers. Your reported 4x ROAS might really be 1.5x.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>De-duplication</CardTitle>
                <CardDescription>
                  Identifies conversions over-counted across Meta and Google by comparing
                  platform claims to actual Shopify orders on the same day.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                  <TrendingDown className="h-5 w-5 text-destructive" />
                </div>
                <CardTitle>Cannibalization Detection</CardTitle>
                <CardDescription>
                  Finds users who were already searching for your brand — ad platforms
                  claim credit, but they would have purchased anyway.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <Zap className="h-5 w-5 text-green-500" />
                </div>
                <CardTitle>True Incremental ROAS</CardTitle>
                <CardDescription>
                  Real return on ad spend after removing inflated claims. Compare reported
                  ROAS vs what ad spend actually generated.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10">
                  <Shield className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle>Health Check Alerts</CardTitle>
                <CardDescription>
                  Automated warnings when duplication rate, ROAS inflation, or
                  cannibalization cross configurable thresholds.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                  <FileSearch className="h-5 w-5 text-blue-500" />
                </div>
                <CardTitle>Search Term Analysis</CardTitle>
                <CardDescription>
                  Find high-spend keywords with zero verified purchases — cut the
                  wasted spend bleeding your budget.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                  <Upload className="h-5 w-5 text-purple-500" />
                </div>
                <CardTitle>CSV Upload — No API Keys</CardTitle>
                <CardDescription>
                  Upload CSV exports from Meta Ads, Google Ads, and Shopify. Data
                  stays in your browser — no servers, no privacy risk.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-4 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Upload CSVs", desc: "Export reports from Meta Ads, Google Ads, and Shopify. Upload them in one click." },
              { step: "2", title: "Run Audit", desc: "Our engine cross-references daily spend, conversions, and revenue across all sources." },
              { step: "3", title: "View Dashboard", desc: "Interactive charts show your true ROAS, duplication rate, and cannibalization score." },
              { step: "4", title: "Take Action", desc: "Get alerts and recommendations to stop overpaying for non-incremental conversions." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Pricing</h2>
          <p className="text-center text-muted-foreground mb-12">Start free. Upgrade when you need more.</p>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle>Open Source</CardTitle>
                <CardDescription>Self-hosted, full control</CardDescription>
                <p className="text-3xl font-bold mt-2">Free</p>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>CSV upload & audit</p>
                <p>De-duplication & ROAS</p>
                <p>Cannibalization scoring</p>
                <p>Health check alerts</p>
                <p>MIT License</p>
              </CardContent>
            </Card>
            <Card className="relative border-primary">
              <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2">Popular</Badge>
              <CardHeader>
                <CardTitle>SaaS (Coming Soon)</CardTitle>
                <CardDescription>Hosted, no setup</CardDescription>
                <p className="text-3xl font-bold mt-2">$29<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>Everything in Open Source</p>
                <p>Shopify App integration</p>
                <p>API auto-sync (no CSVs)</p>
                <p>AI-powered reports</p>
                <p>Email alerts</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise (Coming Soon)</CardTitle>
                <CardDescription>Custom integrations</CardDescription>
                <p className="text-3xl font-bold mt-2">Custom</p>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>Everything in SaaS</p>
                <p>Multi-brand dashboard</p>
                <p>TikTok, Email channels</p>
                <p>Data Clean Room</p>
                <p>SLA & dedicated support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to see your true ROAS?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Upload your CSV exports and get a free audit in under 2 minutes.
          </p>
          <Link
            href="/upload"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Start Your Free Audit <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Ad Attribution Auditor — Open Source (MIT). Built for DTC brands who want the truth.</p>
          <p className="mt-1 space-x-4">
            <a href="https://github.com/neoloong/ad-attribution-auditor-next" className="underline hover:text-foreground" target="_blank">
              GitHub (Next.js)
            </a>
            <a href="https://github.com/neoloong/ad-attribution-auditor" className="underline hover:text-foreground" target="_blank">
              GitHub (Python)
            </a>
            <Link href="/methodology" className="underline hover:text-foreground">Methodology</Link>
            <Link href="/upload" className="underline hover:text-foreground">Get Started</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
