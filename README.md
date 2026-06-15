# Ad Attribution Auditor

<p align="center">
  <strong>Don't let Big Tech grade their own homework.</strong><br>
  An independent, open-source tool that audits ad platform attribution claims.
</p>

<p align="center">
  <a href="https://github.com/neoloong/ad-attribution-auditor-next/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"></a>
  <a href="#"><img src="https://img.shields.io/badge/next.js-16-000000?logo=nextdotjs" alt="Next.js 16"></a>
  <a href="#"><img src="https://img.shields.io/badge/type--safe-TypeScript-3178C6?logo=typescript" alt="TypeScript"></a>
  <img src="https://img.shields.io/badge/engine-in%20browser-green" alt="Runs in browser">
</p>

---

## What It Does

Ad platforms self-report conversions — and they have every incentive to inflate the numbers. A customer who was already going to buy gets counted as a "conversion" by Meta, Google, and TikTok simultaneously. Your dashboard says 4x ROAS. The truth might be 1.5x.

**This tool cross-references your ad platform CSV exports against actual Shopify orders to compute:**

- **De-duplication** — Overlaps between platform claims and verified purchases
- **Cannibalization Detection** — Finds paid ads eating organic demand (requires GSC data)
- **True Incremental ROAS** — The return your ads actually generated, after removing organic baseline
- **Health Alerts** — Configurable threshold warnings for duplication, inflation, and cannibalization
- **Trend Analysis** — Rolling spend-conversion correlation over your audit period
- **All in-browser** — No data ever leaves your device. No servers. No tracking.

## Quick Start

```bash
git clone https://github.com/neoloong/ad-attribution-auditor-next.git
cd ad-attribution-auditor-next
npm install
npm run dev
```

Open http://localhost:3000 to see the landing page.

**No data?** Open http://localhost:3000/dashboard?demo=true to see a full audit dashboard with synthetic data.

## How It Works

### Step 1: Export CSVs
Export reports from Meta Ads Manager, Google Ads, and Shopify admin. Optionally include Google Search Console brand search data.

### Step 2: Upload
Drag and drop CSVs on the upload page. All parsing happens client-side using [PapaParse](https://www.papaparse.com/).

### Step 3: Run Audit
The engine runs a three-tier analysis:

1. **Organic Baseline** — Estimate daily conversions without ads using OLS regression (≥60 days), time-series interruption detection (≥7 consecutive zero-spend days), or spend-off day average
2. **De-duplication** — Compare platform-reported conversions vs verified Shopify orders per day
3. **Cannibalization** — Detect days where both ad conversions and brand search exceed their rolling averages (30-day window)

### Step 4: Dashboard
Interactive Recharts visualizations show your true ROAS, duplication rate, cannibalization score, and daily trends.

**[Read the full methodology →](/methodology)**

## Data Sources

| Source | Required | Format |
|--------|----------|--------|
| Meta Ads CSV | At least one ad platform | Day, Campaign name, Amount spent (USD), Purchases |
| Google Ads CSV | At least one ad platform | Day, Campaign, Cost, Conversions |
| Shopify Orders CSV | Required | Name, Email, Created at, Total |
| GSC Brand Search CSV | Optional (enables cannibalization) | Date, Top queries, Clicks |

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Charts | Recharts |
| CSV | PapaParse |
| UI | shadcn/ui + Tailwind CSS v4 |
| Icons | Lucide React |

## Architecture

```
src/
├── lib/
│   ├── engine/           # Core audit algorithms
│   │   ├── aggregate-audit.ts    # Main pipeline
│   │   ├── deduplication.ts      # Conversion overlap analysis
│   │   ├── cannibalization.ts    # Brand-search overlap scoring
│   │   ├── incremental-roas.ts   # True vs reported ROAS
│   │   ├── health-checks.ts      # Threshold-based alerts
│   │   └── types.ts
│   ├── ingestion/        # CSV parsing & normalization
│   │   ├── normalizer.ts
│   │   └── types.ts
│   └── store/            # Client-side state (useSyncExternalStore)
├── app/
│   ├── page.tsx          # Landing page
│   ├── upload/           # CSV upload
│   ├── dashboard/        # Audit results + charts
│   ├── report/           # Downloadable report
│   └── methodology/      # How the algorithms work
└── components/ui/        # shadcn/ui primitives
```

## Coming Soon

- [ ] Shopify App Store listing
- [ ] API connectors (no more CSV exports)
- [ ] AI-powered report generation
- [ ] MCP server for Claude/ChatGPT integration
- [ ] Weekly email health alerts
- [ ] Multi-brand dashboards
- [ ] TikTok Ads support

## Prior Art

This is a Next.js port of the original Python/Streamlit tool:
[github.com/neoloong/ad-attribution-auditor](https://github.com/neoloong/ad-attribution-auditor)

## License

MIT — use it, modify it, ship it. Attribution appreciated.

---

<p align="center">
  Built by <a href="https://github.com/neoloong">@neoloong</a> · 
  <a href="https://github.com/neoloong/ad-attribution-auditor-next">Star on GitHub</a> ·
  <a href="/methodology">Read the method</a>
</p>
