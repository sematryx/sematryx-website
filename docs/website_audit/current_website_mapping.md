# Sematryx Website — Current Site Mapping (Repository Baseline)

**Date:** 2026-03-21

**Purpose:** Factual inventory of the Sematryx marketing/docs/product site as implemented in this repository.  
**Scope:** Structure, routes, navigation, components, and observable content themes.  
**Not in scope:** Product strategy recommendations, messaging optimization, or redesign proposals.

**Generated from:** App Router pages under `src/app/`, shared components under `src/components/`, and navigation config embedded in those files.  
**Framework / stack (observed):** Next.js App Router, React, Tailwind CSS, Clerk (auth), Stripe (billing flows), Supabase (optimization data where configured).

---

## 1. Executive summary

### What the site currently is

- A **Next.js** multi-section site combining:
  - **Marketing / landing** (`/`, `/why-sematryx`, `/about`, `/pricing`, `/mcp`, `/domains`, `/conversational-optimization`, `/waitlist`, etc.)
  - **Documentation** under `/docs/*` (guides, API reference-style pages, SDK examples, billing/rate limits)
  - **Tutorials** under `/tutorials/*`
  - **Benchmarks** (`/benchmarks`, `/benchmarks/comprehensive`)
  - **Account & monetization** (`/api-keys`, `/success`, Clerk **`/sign-in`**, **`/sign-up`**, Stripe-related API routes)
  - **Authenticated product UI** under **`/dashboard/*`** (Clerk-protected via middleware)

### Major content areas

| Area | Route prefix (approx.) | Role |
|------|-------------------------|------|
| Home & campaigns | `/`, `/waitlist`, `/conversational-optimization` | Acquisition, waitlist, product story |
| Why / pillars | `/why-sematryx`, `/why-sematryx/*` | Capability and pillar narrative |
| Docs | `/docs`, `/docs/*` | Technical reference and guides |
| Tutorials | `/tutorials`, `/tutorials/*` | Step-by-step learning |
| Benchmarks | `/benchmarks` | Performance claims / comparisons |
| MCP | `/mcp`, `/docs/integrations/mcp` | Agent integration story + docs |
| Domains | `/domains`, `/docs/domain-libraries`, domain tutorials | Domain libraries |
| Pricing & keys | `/pricing`, `/api-keys` | Plans, pay-per-solve, API access |
| Company | `/about` | Team, mission, positioning copy |
| App | `/dashboard/*` | Signed-in usage, keys, optimizations, billing |

### Major navigation surfaces

- **Header (most public pages):** “Why Sematryx” (dropdown), **Benchmarks**, **Pricing**, “Developers” (dropdown), **About**, and auth CTAs (**Join Waitlist** when signed out, **Dashboard** + Clerk **UserButton** when signed in).
- **Footer:** Platform (Docs, Tutorials, Benchmarks, MCP), Company (About), Account (Get API Key, Pricing), Connect (email, social).
- **Docs left nav:** Defined in `DocsNav.tsx` (grouped sections + expandable pillar links).
- **Tutorials left nav:** Defined in `TutorialsNav.tsx`.
- **Pillar sub-pages (`/why-sematryx/...`):** Use `PillarsNav.tsx` when the universal sidebar is shown.

### Recurring messaging themes (descriptive)

- **Optimization** positioned against “traditional” / limited solvers; emphasis on **hard or constrained** problems.
- **“Three pillars” / “3 Core Pillars”** language: **Agentic**, **Interpretable**, **Adaptive** intelligence (plus **domain** libraries and **conversational** flows as adjacent topics).
- **MCP-native** / **Model Context Protocol**, agents (Claude Desktop, Cline, etc.), **SDK** and **REST**.
- **Explainability**, **audit trails**, **regulated industries**, **compliance** (marketing and About).
- **Pay-per-solve**, free tier solves/month, **credit packs**, **Private Learning Store** (pricing/marketing).
- **Patent pending** appears in multiple places (e.g. home features, footer).

---

## 2. Site architecture map

### 2.1 Top navigation (`Header.tsx`)

**Desktop / tablet (md+):**

| Item | Behavior |
|------|----------|
| Logo | Links to `/` |
| Why Sematryx | `WhySematryxDropdown` — links to overview, pillar pages, docs pages (intelligence config, domain libraries, conversational optimization, MCP integration) |
| Benchmarks | `/benchmarks` |
| Pricing | `/pricing` |
| Developers | `DevelopersDropdown` — Quickstart (`/tutorials/getting-started`), Documentation (`/docs`), Tutorials (`/tutorials`) |
| About | `/about` |
| Signed out | **Join Waitlist** → `/waitlist` |
| Signed in | **Dashboard** → `/dashboard`, Clerk **UserButton** |

**Mobile:** Hamburger opens panel with the same links (dropdowns support `isMobile`).

### 2.2 Footer (`Footer.tsx`)

- **Platform:** Documentation `/docs`, Tutorials `/tutorials`, Benchmarks `/benchmarks`, MCP `/mcp`
- **Company:** About `/about`
- **Account:** Get API Key `/api-keys`, Pricing `/pricing`
- **Connect:** `feedback@sematryx.com`, `hello@sematryx.com`, Twitter/X, GitHub
- **Legal/footer line:** Copyright, “Technology Patent Pending”

### 2.3 Docs sidebar (`DocsNav.tsx`)

Sections and routes **as configured in code:**

| Section | Routes |
|---------|--------|
| Getting Started | `/docs`, `/docs/architecture`, `/docs/authentication`, `/docs/requests` |
| Concepts & Guides | `/docs/api/intelligence-config`, `/docs/conversational-optimization`, `/docs/domain-libraries`, `/docs/integrations/mcp` |
| SDKs | `/docs/sdks/javascript`, `/docs/sdks/python`, `/docs/sdks/rest` |
| Account & Services | `/docs/billing`, `/docs/advanced/rate-limiting`, `/docs/api/analytics`, `/docs/api/webhooks` |
| Advanced | `/docs/advanced/errors`, `/docs/advanced/best-practices` |

**Nested behavior:** On `/docs/api/intelligence-config` and `/docs/concepts/*`, the “Three Intelligence Pillars” item expands to link to **Agentic / Interpretable / Adaptive** concept pages under `/docs/concepts/...`.

**Note:** A page file exists at **`/docs/api/automation`** but it is **not** listed in `DocsNav.tsx` (reachable by URL or inbound links only unless linked elsewhere).

### 2.4 Tutorials sidebar (`TutorialsNav.tsx`)

| Section | Routes |
|---------|--------|
| START HERE | `/tutorials/getting-started` |
| TUTORIALS | conversational optimization, ai-content-generation, data-transformation, monitoring-alerts, webhook-automation, enterprise-workflows, mcp-agent-demo |
| DOMAIN LIBRARIES | `/tutorials/domain-specific-optimization`, `/tutorials/extending-domain-libraries` |

**Label vs URL:** Nav title “Configuring Intelligence” → `/tutorials/ai-content-generation`; “Problem Setup” → `/tutorials/data-transformation`; “Understanding Results” → `/tutorials/monitoring-alerts`; “Enterprise Workflows” → `/tutorials/enterprise-workflows` (tutorial index card describes “Domain-Specific Optimization” for that id).

### 2.5 Universal layout & when sidebars appear

- **`docs/layout.tsx`** wraps docs with `Header`, **`UniversalLayoutWrapper`** (sidebar + content), `Footer`.
- **`tutorials/layout.tsx`** — same pattern (tutorials use `UniversalLayoutWrapper`).
- **`why-sematryx/layout.tsx`** — same pattern.

**`UniversalLayoutWrapper` + `UniversalSidebar`:**

- **Docs routes:** Sidebar shows **`DocsNav`**, except these paths are treated as “marketing” **without** left nav:  
  `/docs/conversational-optimization`, `/docs/domain-libraries`, `/docs/integrations/mcp`, `/docs/api/intelligence-config`
- **Tutorials routes:** **`TutorialsNav`**
- **`/why-sematryx/agentic-intelligence`**, **`interpretable-intelligence`**, **`adaptive-intelligence`:** **`PillarsNav`**
- Other **`/why-sematryx/*`** (e.g. main why page): **no** left nav (`UniversalSidebar` returns `null`)

**`DocsLayoutWrapper.tsx`** exists in the repo (collapsible sidebar + `DocsNav` only) but the active docs shell in `src/app/docs/layout.tsx` uses **`UniversalLayoutWrapper`**, not `DocsLayoutWrapper`.

### 2.6 Dashboard navigation (`dashboard/layout.tsx`)

Horizontal nav: **Overview** `/dashboard`, **Optimizations** `/dashboard/optimizations`, **API Keys** `/dashboard/keys`, **Usage** `/dashboard/usage`, **Billing** `/dashboard/billing`, **Settings** `/dashboard/settings`. Top-right: link to **`/docs`**, Clerk **UserButton**.

### 2.7 Auth & protection (`src/middleware.ts`)

- **`/dashboard(.*)`** is **protected** with Clerk `auth.protect()`.

### 2.8 `MainSiteNav.tsx` (implementation note)

`MainSiteNav.tsx` defines a sidebar list (Home, Why Sematryx, Domains, Documentation, Tutorials, Benchmarks, Pricing, MCP). **It is not imported by any `src/**/*.tsx` file** (only referenced in an internal `docs/builder/` proposal). The live sidebar is **`UniversalSidebar`** (`DocsNav` / `TutorialsNav` / `PillarsNav`).

---

## 3. Page inventory

Below, **“Primary H1”** is taken from the page component when a single clear `<h1>` exists; some pages use hero copy without a literal `<h1>` in the first screen (noted where relevant).

### 3.1 Marketing / landing

| Route | Primary H1 / lead | Purpose (observed) | Summary & key sections | Face |
|-------|-------------------|--------------------|---------------------------|------|
| `/` | Hero: “Conversational Optimization / for AI Agents” (`Hero.tsx`) | Primary landing | Sections: Hero (MCP-native badge, waitlist + doc CTAs), `ConversationalOptimization`, `UseCases`, `AgentReady`, `Features` (Sematryx Intelligence / three pillars), `Differentiators`, `Pricing` component, `EmailSignup`, Footer | Marketing |
| `/why-sematryx` | “Traditional solvers break. Sematryx explains why it doesn't.” | Positioning / value prop | Enterprise features, industry sections, comparison table, CTAs (e.g. API keys) | Marketing |
| `/why-sematryx/agentic-intelligence` | “Agentic Intelligence” | Pillar detail | Marketing copy; uses `PillarsNav` in sidebar when wrapper applies | Marketing |
| `/why-sematryx/interpretable-intelligence` | “Interpretable Intelligence” | Pillar detail | Same pattern | Marketing |
| `/why-sematryx/adaptive-intelligence` | “Adaptive Intelligence” | Pillar detail | Same pattern | Marketing |
| `/about` | “About Sematryx” | Company / mission | Mission, what we do, customer segments, team-style content | Marketing / company |
| `/pricing` | (Page uses `Pricing` component + FAQ) | Pricing & FAQ | Pay-per-solve, dimensions, credit packs, free tier, Private Learning Store FAQ | Marketing |
| `/mcp` | “Sematryx as an MCP Server” | MCP product overview | Tool list (e.g. optimize, explain, compare), use cases, CTAs to docs and tutorial | Marketing |
| `/domains` | “Domain Libraries” | Domain libraries overview | Domain libraries positioning | Marketing |
| `/conversational-optimization` | Large hero headline (marketing page) | Conversational optimization product | Dedicated landing-style page (distinct from `/docs/conversational-optimization`) | Marketing |
| `/waitlist` | (Form-focused; multi-step fields) | Waitlist capture | Email + use case / feature multi-select; POST `/api/waitlist` | Marketing / conversion |

### 3.2 Docs (`/docs/*`)

| Route | Primary H1 | Purpose | Summary | Face |
|-------|------------|---------|---------|------|
| `/docs` | “Quick Start Guide” | Docs home | Python quick start, intelligence examples, domain/portfolio examples, links | Docs |
| `/docs/architecture` | “System Architecture” | Architecture | System architecture documentation | Docs |
| `/docs/authentication` | “Authentication” | Auth | API auth patterns | Docs |
| `/docs/requests` | “Making Requests” | API usage | Request patterns | Docs |
| `/docs/api/intelligence-config` | “Three Intelligence Pillars” (pillar overview) | Pillar config | Overview; sidebar expands to `/docs/concepts/*` | Docs (also linked from marketing nav) |
| `/docs/concepts/agentic-intelligence` | Agentic (concept) | Developer pillar guide | Conceptual + API-oriented pillar content | Docs |
| `/docs/concepts/interpretable-intelligence` | Interpretable (concept) | Developer pillar guide | Same | Docs |
| `/docs/concepts/adaptive-intelligence` | Adaptive (concept) | Developer pillar guide | Same | Docs |
| `/docs/conversational-optimization` | “Conversational Optimization” | Feature docs | conversational optimization documentation | Docs |
| `/docs/domain-libraries` | “Domain Libraries Docs” | Domain libraries | Domain docs | Docs |
| `/docs/integrations/mcp` | MCP integration | MCP setup | MCP integration documentation | Docs |
| `/docs/sdks/javascript` | “JavaScript SDK” | SDK reference | JS SDK install, examples, collapsible sections | Docs |
| `/docs/sdks/python` | “Python SDK” | SDK reference | Python SDK | Docs |
| `/docs/sdks/rest` | “REST API” | REST reference | Endpoints, `ExpandableEndpoint` lists, examples | Docs |
| `/docs/api/automation` | “Optimization API” | API automation | Python/cURL examples, intelligence presets, domain optimization examples | Docs |
| `/docs/api/analytics` | “Analytics API” | Analytics | Analytics API documentation | Docs |
| `/docs/api/webhooks` | “Webhooks” | Webhooks | Webhook documentation | Docs |
| `/docs/billing` | “Billing & Usage” | Billing docs | Usage and billing documentation | Docs |
| `/docs/advanced/rate-limiting` | “Rate Limiting” | Rate limits | Rate limiting | Docs |
| `/docs/advanced/errors` | “Errors” | Error reference | Error catalog / handling | Docs |
| `/docs/advanced/best-practices` | “Best Practices” | Guidance | Best practices | Docs |

### 3.3 Tutorials (`/tutorials/*`)

| Route | Primary H1 | Purpose | Summary | Face |
|-------|------------|---------|---------|------|
| `/tutorials` | “Tutorials” | Tutorial index | Card grid of tutorials with difficulty/duration | Docs / learning |
| `/tutorials/getting-started` | Getting started | Onboarding | First optimization walkthrough | Docs / learning |
| `/tutorials/ai-content-generation` | Configuring intelligence | Engine configuration | “3 Core Pillars” configuration narrative | Docs / learning |
| `/tutorials/data-transformation` | Problem setup | Objectives & constraints | Problem formulation | Docs / learning |
| `/tutorials/monitoring-alerts` | Understanding results | Results & metrics | Interpretation of results | Docs / learning |
| `/tutorials/webhook-automation` | Advanced strategies | Automation / webhooks | Webhook and advanced topics | Docs / learning |
| `/tutorials/enterprise-workflows` | Domain-specific workflows | Enterprise / domains | Domain library usage, code samples | Docs / learning |
| `/tutorials/mcp-agent-demo` | MCP demo | Agent + MCP | Interactive narrative / demo style content | Docs / learning |
| `/tutorials/conversational-optimization` | Conversational optimization | NL optimization | Conversation flow tutorial | Docs / learning |
| `/tutorials/domain-specific-optimization` | Domain-specific optimization | Domain intro | Domain libraries tutorial | Docs / learning |
| `/tutorials/extending-domain-libraries` | Extending domain libraries | Extension | Custom / extension guidance | Docs / learning |

### 3.4 Benchmarks

| Route | Primary H1 | Purpose | Summary | Face |
|-------|------------|---------|---------|------|
| `/benchmarks` | Benchmarks hero | Public benchmarks | Performance comparison content | Marketing / technical |
| `/benchmarks/comprehensive` | “Benchmark Results” / detailed title | Deeper benchmark view | More detailed benchmark presentation | Marketing / technical |

### 3.5 Account, commerce, auth

| Route | Primary H1 | Purpose | Summary | Face |
|-------|------------|---------|---------|------|
| `/api-keys` | API Keys / purchase | Stripe checkout for API access | Pricing tiers, checkout via `/api/stripe/checkout` | Product / conversion |
| `/success` | Success | Post-purchase | Post-checkout success | Product |
| `/sign-in/[[...sign-in]]` | Clerk | Sign in | Clerk sign-in UI | Product |
| `/sign-up/[[...sign-up]]` | Clerk | Sign up | Clerk sign-up UI | Product |

### 3.6 Product (authenticated)

| Route | Primary H1 | Purpose | Summary | Face |
|-------|------------|---------|---------|------|
| `/dashboard` | Dashboard | Overview | Stats / overview (Clerk session) | Product |
| `/dashboard/optimizations` | Optimizations | List sync | Optimization list, sync with API | Product |
| `/dashboard/optimizations/[id]` | Optimization detail | Detail | Single optimization view | Product |
| `/dashboard/keys` | API Keys | Key management | Keys in dashboard | Product |
| `/dashboard/usage` | Usage | Usage metrics | Usage dashboard (API usage data) | Product |
| `/dashboard/billing` | Billing | Billing management | Stripe portal / subscription UI | Product |
| `/dashboard/settings` | Settings | User settings | Profile/settings | Product |

---

## 4. Feature / component inventory (UX patterns)

### Global

| Component / pattern | Where used |
|--------------------|------------|
| `Header` | Most marketing layouts; docs/tutorials/why layouts |
| `Footer` | Same |
| `FeedbackButton` | `RootLayout` — floating feedback widget (global) |
| `Logo` | Header, Footer, dashboard, waitlist |
| Clerk `UserButton` / sign-in/out | Header, dashboard |

### Landing / marketing blocks

| Component | Role |
|-----------|------|
| `Hero` | Home hero: MCP badge, headline, pricing bullets, waitlist + docs CTAs, “Works with” row |
| `ConversationalOptimization` | Home section |
| `UseCases` | Home |
| `AgentReady` | Home |
| `Features` | Home — “Sematryx Intelligence”, three cards (Agentic / Interpretable / Adaptive framing) |
| `Differentiators` | Home |
| `Pricing` | Home (`Pricing` component) and `/pricing` page |
| `EmailSignup` | Home footer area |

### Docs / technical content

| Component | Role |
|-----------|------|
| `CodeBlock` | Syntax-highlighted code, copy affordance |
| `CollapsibleSection` | e.g. JS SDK page sections |
| `ExpandableEndpoint` | REST API page — expandable endpoint rows |
| `UniversalLayoutWrapper` | Sidebar + collapse + mobile drawer for docs/tutorials/why pillar pages |
| `DocsNav`, `TutorialsNav`, `PillarsNav` | Left navigation |

### Dashboard / data

| Path | Role |
|------|------|
| `src/components/optimizations/*` | `OptimizationFilters`, `OptimizationResultsTable`, `OptimizationPagination`, `OptimizationStatsCards` |

### Other

| Component | Role |
|-----------|------|
| `ConversationalOptimization.tsx` (shared) | Used on home; separate **`/conversational-optimization`** page exists |

### Site search

No dedicated **search** UI was found in navigation components or a global search route in `src/app`.

---

## 5. Messaging / theme inventory (descriptive only)

Observed **terms and clusters** (non-exhaustive, drawn from `layout.tsx` metadata, `Footer`, `Hero`, `Features`, `About`, pricing, docs headings):

| Theme cluster | Example phrases / concepts appearing in site copy |
|---------------|---------------------------------------------------|
| Core engine | Optimization, solvers, strategies, evaluations, bounds, objectives |
| Intelligence framing | “Sematryx Intelligence”, “3 Core Pillars”, Agentic / Interpretable / Adaptive, “Under the Hood” |
| Agent & tooling | MCP, Model Context Protocol, AI agents, Claude Desktop, Cline, tools (`sematryx_optimize`, etc.) |
| Transparency | Explainability, audit trails, decision rationale, interpretability |
| Regulatory / enterprise | Regulated industries, compliance, enterprise (esp. About and Footer) |
| Domain | Domain libraries, domain-specific optimization, industry examples (finance, healthcare, etc.) |
| Commercial | Pay-per-solve, free solves/month, credit packs, Private Learning Store, no subscriptions (home hero) |
| IP | Patent pending (Features, home; footer “Technology Patent Pending”) |

**Root metadata (`src/app/layout.tsx`):** Title tagline **“Logic, Math, Language, Learning”**; description references **Intelligence Hub**, **compliance**, **explainability**, **regulated industries**.

---

## 6. Implementation notes (repo structure)

### 6.1 High-level layout

| Path | Role |
|------|------|
| `src/app/layout.tsx` | Root layout: Clerk, `globals.css`, `FeedbackButton`, default `metadata` |
| `src/app/page.tsx` | Home composition (sections only) |
| `src/app/docs/layout.tsx` | Docs: Header + `UniversalLayoutWrapper` + Footer |
| `src/app/tutorials/layout.tsx` | Tutorials: same |
| `src/app/why-sematryx/layout.tsx` | Why Sematryx section: same |
| `src/app/dashboard/layout.tsx` | Separate shell: dashboard top nav, no marketing/footer |
| `src/middleware.ts` | Clerk protection for `/dashboard` |

### 6.2 Navigation configuration (source of truth)

| File | Contents |
|------|----------|
| `src/components/Header.tsx` | Top nav links and auth CTAs |
| `src/components/WhySematryxDropdown.tsx` | `whySematryxMenu` data |
| `src/components/DevelopersDropdown.tsx` | `developersMenu` data |
| `src/components/DocsNav.tsx` | `docsSections` + pillar sub-links |
| `src/components/TutorialsNav.tsx` | `tutorialSections` |
| `src/components/PillarsNav.tsx` | `pillarsNavItems` |
| `src/components/Footer.tsx` | Footer columns (inline) |
| `src/components/UniversalSidebar.tsx` | Chooses which nav component to render by pathname |
| `src/components/UniversalLayoutWrapper.tsx` | `marketingPages` list controlling sidebar visibility |
| `src/app/dashboard/layout.tsx` | `navigation` array for dashboard |

### 6.3 Page content

- **Most content is inline** in page `page.tsx` files under `src/app/**`.
- **No separate CMS** observed in the routing layer; marketing content is component-driven.

### 6.4 API routes (website backend)

`src/app/api/**` includes (examples): Stripe checkout/webhook, billing portal, keys, optimizations CRUD/sync, dashboard stats, waitlist, usage, benchmarks fetch, debug routes. These support **dashboard**, **waitlist**, and **commerce**, not the static marketing pages themselves.

### 6.5 Styling & design tokens

- Tailwind with project-specific tokens (e.g. `text-text-primary`, `bg-base`, `accent-agentic`) — see `tailwind.config.ts` and `globals.css` for full palette (not expanded here).

### 6.6 Gaps / inconsistencies for future work (factual only)

- **`MainSiteNav.tsx`** is unused in live layouts.
- **`/docs/api/automation`** exists as a route but is **not** listed in `DocsNav.tsx`.
- **`DocsLayoutWrapper.tsx`** is unused by the active `docs/layout.tsx` (duplicate docs shell pattern in repo).
- **Two “conversational optimization” URLs:** `/conversational-optimization` (marketing) vs `/docs/conversational-optimization` (docs) — different purposes, similar naming.

---

## Appendix: Route list (App Router `page.tsx` files)

The following routes exist as `src/app/**/page.tsx` (dynamic segments shown as patterns):

- `/`, `/about`, `/api-keys`, `/benchmarks`, `/benchmarks/comprehensive`, `/conversational-optimization`, `/domains`, `/mcp`, `/pricing`, `/success`, `/waitlist`
- `/docs`, `/docs/advanced/best-practices`, `/docs/advanced/errors`, `/docs/advanced/rate-limiting`, `/docs/api/analytics`, `/docs/api/automation`, `/docs/api/intelligence-config`, `/docs/api/webhooks`, `/docs/architecture`, `/docs/authentication`, `/docs/billing`, `/docs/concepts/adaptive-intelligence`, `/docs/concepts/agentic-intelligence`, `/docs/concepts/interpretable-intelligence`, `/docs/conversational-optimization`, `/docs/domain-libraries`, `/docs/integrations/mcp`, `/docs/requests`, `/docs/sdks/javascript`, `/docs/sdks/python`, `/docs/sdks/rest`
- `/tutorials/*` (all tutorial slugs listed in §3.3)
- `/why-sematryx`, `/why-sematryx/agentic-intelligence`, `/why-sematryx/adaptive-intelligence`, `/why-sematryx/interpretable-intelligence`
- `/dashboard`, `/dashboard/billing`, `/dashboard/keys`, `/dashboard/optimizations`, `/dashboard/optimizations/[id]`, `/dashboard/settings`, `/dashboard/usage`
- `/sign-in/[[...sign-in]]`, `/sign-up/[[...sign-up]]`

**Blog / news / changelog:** No `src/app/blog`, `news`, or `changelog` routes were found in the page inventory.

---

*End of mapping document.*
