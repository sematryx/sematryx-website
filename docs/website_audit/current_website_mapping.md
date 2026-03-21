# Sematryx Website — Current Site Mapping (Repository Baseline)

**Date:** 2026-03-21  
**Content review:** 2026-03-21 (on-page copy verified for §1.5, §3.0, and updated rows below)

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
| Domains | `/domains`, `/docs/domain-libraries`, domain tutorials | Domain libraries (**several routes are placeholders**—see §1.5) |
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

### 1.5 Content depth and on-page fidelity

Pages are **not** uniform: some routes are long-form marketing or docs; others are **minimal placeholders** (short copy, a “Coming Soon” badge, and links elsewhere). The **page inventory (§3)** summarizes **what a visitor actually sees**, not only the route’s nominal topic.

**Thin / placeholder clusters (verified in source):**

| Route(s) | What the page shows |
|----------|---------------------|
| `/domains` | Centered layout: headline “Domain Libraries”, one-line value prop (pre-built primitives for finance, engineering, logistics…), **`Coming Soon`** badge, copy that **domain libraries are in development**, link to **`/docs`**. |
| `/docs/domain-libraries` | Same pattern: “Domain Libraries Docs”, states domain-specific libraries are **under development** and documentation **will appear here at launch**, **`Coming Soon`** badge, link **Back to docs**. |
| `/tutorials/domain-specific-optimization`, `/tutorials/extending-domain-libraries` | Intro paragraph + large yellow **Coming Soon** box (“tutorial is currently **under development**”), links to `/docs/domain-libraries`, `/domains`, and cross-links between the two tutorials; below that, a **“What You’ll Learn”** bullet list (aspirational outline, not step-by-step content). |

**Partial / mixed:**

| Location | What the page shows |
|----------|---------------------|
| `/docs/sdks/python` | Full SDK-style sections (install, examples, collapsible sections). **Banner:** “**PyPI release coming soon**” with `pip install sematryx` described as when published, and **git+https** install from GitHub until then. |
| `/docs/sdks/rest` | Large endpoint reference with `ExpandableEndpoint`. In code, **`comingSoonCategories`** = `['Context', 'Data Lake', 'Examples', 'Webhooks']` — those **category** headings render a **“Coming Soon”** pill and note that endpoints are **planned for a future release** (separate from the standalone **`/docs/api/webhooks`** doc page). |
| `/dashboard` | Welcome, stat cards (keys, total requests, last request), Getting Started links. **Recent Activity:** if there are requests, body text **“Detailed activity coming soon”** with link to **`/dashboard/usage`**; if none, empty state. |
| `/docs/concepts/*` (agentic / interpretable) | Code comments in examples mention **JavaScript SDK coming soon** (string inside example code, not the whole page). |

**Long-form (examples where the site provides substantial sections):** home (`/`); `/why-sematryx`; `/conversational-optimization` (marketing); `/docs/conversational-optimization` (docs); `/docs/integrations/mcp`; many other docs and tutorials with multiple sections and code blocks.

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

**Primary headings** are taken from each page’s `<h1>` or hero when that is the main title. **Summary** describes what appears on the page in the repo (body copy, CTAs, placeholders)—see **§1.5** for cross-cutting “coming soon” and thin-page patterns.

### 3.1 Marketing / landing

| Route | Primary H1 / lead | Purpose (observed) | Summary & key sections (on-page) | Face |
|-------|-------------------|--------------------|-----------------------------------|------|
| `/` | Hero: “Conversational Optimization / for AI Agents” (`Hero.tsx`) | Primary landing | **Hero:** badge “MCP-Native Optimization”; headline + subcopy (“Describe your problem…”, pay-per-solve bullets: 100 free solves/month, $0.01–$0.05, no subscriptions); CTAs **Join Waitlist**, **View Documentation** → `/docs/integrations/mcp`; “Works with” (Claude Desktop, Cline, Python SDK, REST). **Below:** `ConversationalOptimization`, `UseCases`, `AgentReady`, `Features` (“Sematryx Intelligence”, three pillar cards + patent pending), `Differentiators`, `Pricing`, `EmailSignup`, `Footer`. | Marketing |
| `/why-sematryx` | “Traditional solvers break. Sematryx explains why it doesn't.” | Positioning / value prop | Subhead on fuzzy constraints / regulators; **enterprise feature** cards (e.g. async explainability, compliance, domain libraries, visual intelligence); **industry** blocks (financial, manufacturing, supply chain, healthcare, energy, AI/ML research) with bullet advantages; **comparison table** vs “others”; CTAs to API keys / docs. | Marketing |
| `/why-sematryx/agentic-intelligence` | “Agentic Intelligence” | Pillar detail | Long-form pillar marketing; **`PillarsNav`** when sidebar applies. | Marketing |
| `/why-sematryx/interpretable-intelligence` | “Interpretable Intelligence” | Pillar detail | Same pattern. | Marketing |
| `/why-sematryx/adaptive-intelligence` | “Adaptive Intelligence” | Pillar detail | Same pattern. | Marketing |
| `/about` | “About Sematryx” | Company / mission | **What we do** prose; **problems we solve**; **target customers** (three numbered segments: AI agent builders, enterprise ops/data, domain experts); icon cards; team/advisor-style sections (as implemented). | Marketing / company |
| `/pricing` | FAQ + `Pricing` component | Pricing & FAQ | **`Pricing` component** plus **FAQ** blocks: pay-per-solve by dimension tier, credit packs, free tier exhaustion, Private Learning Store, etc. | Marketing |
| `/mcp` | “Sematryx as an MCP Server” | MCP product overview | **Hero** + **tool** cards (`sematryx_optimize`, `sematryx_explain`, `sematryx_compare` with short descriptions); **agent use cases** grid; CTAs to **`/docs/integrations/mcp`** and **`/tutorials/mcp-agent-demo`**. | Marketing |
| `/domains` | “Domain Libraries” | Domain libraries (placeholder) | **Minimal page:** short paragraph on pre-built primitives; **`Coming Soon`** badge; text that libraries are **in development**; link to **`/docs`**. Not a full library catalog. | Marketing |
| `/conversational-optimization` | “Optimize in Plain English” (hero) | Conversational optimization (marketing) | **Hero:** “New” + “Patent Pending” chips; **Read the Docs** → `/docs/conversational-optimization`, **Follow the Tutorial** → `/tutorials/conversational-optimization`. **Sections:** zero-code benefits + **example conversation** (`CodeBlock` text); “How it works”; additional narrative blocks. Distinct from the docs page at `/docs/conversational-optimization`. | Marketing |
| `/waitlist` | “Join the Early Access Waitlist” (`<h2>`) | Waitlist capture | **Tagline:** “Solve complex optimization problems through conversation. No math degree required.” **Feature grid** (6 items: Conversational, Built for AI Agents / MCP, Auto-Tuned, Gets Smarter, Explainable, REST API & SDK)—uses emoji characters in UI. **Form:** email (required), optional multi-selects “What would you optimize?” and “What features interest you?”, submit → **`/api/waitlist`**. **Success state:** “You're on the waitlist!”, early access messaging. **Note:** No `Header`/`Footer` in this file—standalone layout. | Marketing / conversion |

### 3.2 Docs (`/docs/*`)

| Route | Primary H1 | Purpose | Summary (on-page) | Face |
|-------|------------|---------|-------------------|------|
| `/docs` | “Quick Start Guide” | Docs home | **Python** `Sematryx` quick start (`CodeBlock`); sections for **modes**, **explanation_level**, **domain/portfolio** example; links to deeper docs. | Docs |
| `/docs/architecture` | “System Architecture” | Architecture | Architecture documentation (components/services as written on page). | Docs |
| `/docs/authentication` | “Authentication” | Auth | API authentication patterns. | Docs |
| `/docs/requests` | “Making Requests” | API usage | How to structure requests. | Docs |
| `/docs/api/intelligence-config` | “Three Intelligence Pillars” (pillar overview) | Pillar config | Pillar overview; **`DocsNav`** expands to **`/docs/concepts/*`** pillar entries when on this page or a concept page. | Docs |
| `/docs/concepts/agentic-intelligence` | Agentic (concept) | Developer pillar guide | Pillar concepts + code-oriented examples; sample strings may say JS SDK “coming soon”. | Docs |
| `/docs/concepts/interpretable-intelligence` | Interpretable (concept) | Developer pillar guide | Same pattern. | Docs |
| `/docs/concepts/adaptive-intelligence` | Adaptive (concept) | Developer pillar guide | Same pattern. | Docs |
| `/docs/conversational-optimization` | “Conversational Optimization” | Feature docs (long-form) | **Back link** to **`/conversational-optimization`** (“Back to Overview”). **Sections:** value prop (“Optimization Made Simple”), benefits grid (non-technical users, rapid prototyping), feature cards (guidance, validation, domain detection, accessibility), **common use cases** (marketing budget, resource allocation, portfolio), **How it works** (4 numbered steps), links/tutorials as in page. | Docs |
| `/docs/domain-libraries` | “Domain Libraries Docs” | Placeholder | **Thin page:** states domain-specific libraries (finance, engineering, logistics) are **under development**, docs **at launch**; **`Coming Soon`** badge; link **Back to docs**. | Docs |
| `/docs/integrations/mcp` | “MCP Integration Quickstart” | MCP setup | **Back** to **`/mcp`**. Prerequisites (API key link to `/api-keys`, Claude/Cline); **step-by-step** config paths (e.g. `claude_desktop_config.json`), JSON snippet, security notes, further reading. Substantial procedural content. | Docs |
| `/docs/sdks/javascript` | “JavaScript SDK” | SDK reference | **`@sematryx/javascript-sdk`**-style examples: install, basic optimize, intelligence `config`, domain-style examples, collapsible sections, error handling, TypeScript snippet. | Docs |
| `/docs/sdks/python` | “Python SDK” | SDK reference | Describes thin wrapper + local/scipy fallback; **`pip install sematryx`**; **alert banner:** **PyPI release coming soon**, interim **`git+https://github.com/.../sematryx-sdk.git`** install; collapsible sections (installation, cloud/local, learning, REST fallback, errors). | Docs |
| `/docs/sdks/rest` | “REST API” | REST reference | Large categorized endpoint list with **`ExpandableEndpoint`**; categories include **Optimization**, **Federated Learning**, etc.; **some categories** marked **Coming Soon** in UI (`Context`, `Data Lake`, `Examples`, **`Webhooks`** category listing—distinct from the separate **`/docs/api/webhooks`** documentation page). | Docs |
| `/docs/api/automation` | “Optimization API” | API automation | **Optimization API** title; Python and **curl** examples; intelligence presets; response JSON samples; domain optimization code examples in page. | Docs |
| `/docs/api/analytics` | “Analytics API” | Analytics | Analytics API documentation. | Docs |
| `/docs/api/webhooks` | “Webhooks” | Webhooks | Dedicated webhooks **guide** page (not the REST reference’s “Webhooks” **category** block). | Docs |
| `/docs/billing` | “Billing & Usage” | Billing docs | Billing and usage documentation. | Docs |
| `/docs/advanced/rate-limiting` | “Rate Limiting” | Rate limits | Rate limiting. | Docs |
| `/docs/advanced/errors` | “Errors” | Error reference | Errors. | Docs |
| `/docs/advanced/best-practices` | “Best Practices” | Guidance | Best practices. | Docs |

### 3.3 Tutorials (`/tutorials/*`)

| Route | Primary H1 | Purpose | Summary (on-page) | Face |
|-------|------------|---------|-------------------|------|
| `/tutorials` | “Tutorials” | Tutorial index | **Card grid** with title, description, difficulty, duration, category; links to each tutorial slug. | Docs / learning |
| `/tutorials/getting-started` | Getting started | Onboarding | Walkthrough-style content for first optimization (as implemented in page). | Docs / learning |
| `/tutorials/ai-content-generation` | Configuring Sematryx Intelligence | Engine configuration | Content aligned with **3 Core Pillars** configuration (per page body). | Docs / learning |
| `/tutorials/data-transformation` | Problem setup | Objectives & constraints | Objectives, bounds, constraints narrative. | Docs / learning |
| `/tutorials/monitoring-alerts` | Understanding results | Results & metrics | Results, metrics, explanations. | Docs / learning |
| `/tutorials/webhook-automation` | Advanced strategies | Automation / webhooks | Webhooks / advanced strategies (per page). | Docs / learning |
| `/tutorials/enterprise-workflows` | Domain-Specific Optimization (title on page) | Enterprise / domains | **Long-form** tutorial with **code samples** (`from sematryx.domains import ...`), domain hints, multi-industry examples—substantive content (not a placeholder). | Docs / learning |
| `/tutorials/mcp-agent-demo` | MCP demo | Agent + MCP | Narrative/demo walkthrough for MCP + agents. | Docs / learning |
| `/tutorials/conversational-optimization` | Conversational Optimization | NL optimization | **Long-form** tutorial: Python **`SematryxClient`**-style snippets (`start_conversational_optimization`, status loop, `continue_conversation`, complete flow); multiple **`CodeBlock`** sections; hero and step-by-step narrative (hundreds of lines in source). | Docs / learning |
| `/tutorials/domain-specific-optimization` | Domain-Specific Optimization | Placeholder tutorial | **Yellow “Coming Soon”** panel: tutorial **under development**; links to **`/docs/domain-libraries`** and **`/domains`**; **“What You’ll Learn”** outline only. | Docs / learning |
| `/tutorials/extending-domain-libraries` | Extending Domain Libraries | Placeholder tutorial | Same structure: **Coming Soon** panel, links to domain docs + **domain-specific** tutorial; **“What You’ll Learn”** outline. | Docs / learning |

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

| Route | Primary H1 | Purpose | Summary (on-page) | Face |
|-------|------------|---------|---------------------|------|
| `/dashboard` | “Welcome back…” | Overview | **Welcome** + subtitle “Here's what's happening with your API”. **Stat cards:** API Keys (active/total), Total Requests, Last Request. **Getting Started** column: create key, read **`/docs/authentication`**. **Recent Activity:** loading / empty state / or **“Detailed activity coming soon”** with link to **`/dashboard/usage`**. **New API Key** CTA. | Product |
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
- **Depth varies widely** (long-form vs “Coming Soon” stubs); see **§1.5** and **§3** summaries.

### 6.4 API routes (website backend)

`src/app/api/**` includes (examples): Stripe checkout/webhook, billing portal, keys, optimizations CRUD/sync, dashboard stats, waitlist, usage, benchmarks fetch, debug routes. These support **dashboard**, **waitlist**, and **commerce**, not the static marketing pages themselves.

### 6.5 Styling & design tokens

- Tailwind with project-specific tokens (e.g. `text-text-primary`, `bg-base`, `accent-agentic`) — see `tailwind.config.ts` and `globals.css` for full palette (not expanded here).

### 6.6 Gaps / inconsistencies for future work (factual only)

- **`MainSiteNav.tsx`** is unused in live layouts.
- **`/docs/api/automation`** exists as a route but is **not** listed in `DocsNav.tsx`.
- **`DocsLayoutWrapper.tsx`** is unused by the active `docs/layout.tsx` (duplicate docs shell pattern in repo).
- **Two “conversational optimization” URLs:** `/conversational-optimization` (marketing) vs `/docs/conversational-optimization` (docs) — different purposes, similar naming.
- **Navigation vs on-page status:** **`WhySematryxDropdown`** and **`DocsNav`** link to **`/docs/domain-libraries`** (and marketing to **Domain Libraries**) while **`/domains`** and **`/docs/domain-libraries`** are **placeholder** “Coming Soon” pages—users may expect a library catalog.
- **Tutorial index vs body:** Index cards describe **enterprise-workflows** as “Domain-Specific Optimization” but the slug is **`/tutorials/enterprise-workflows`**; the **domain-specific** slug **`/tutorials/domain-specific-optimization`** is a **separate** placeholder page (see §1.5).

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
