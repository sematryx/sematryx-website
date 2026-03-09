# Waitlist Mode Changes

## ✅ Changes Made

### 1. Created `/waitlist` Page
- **File:** `src/app/waitlist/page.tsx`
- **Features:**
  - Email collection
  - Use case dropdown (delivery routing, workforce scheduling, ML hyperparameters, system configuration, other)
  - Success state
  - Branded design matching main site

### 2. Updated Hero Component
- **File:** `src/components/Hero.tsx`
- **Changes:**
  - Primary CTA: ~~"Get API Key Free"~~ → **"Join Waitlist"** (links to `/waitlist`)
  - Secondary CTA: ~~"Connect Your Agent"~~ → **"View Documentation"** (links to `/docs/integrations/mcp`)

### 3. Updated Header Component
- **File:** `src/components/Header.tsx`
- **Changes:**
  - Desktop nav: ~~"Sign In"~~ → **"Join Waitlist"** (links to `/waitlist`)
  - Mobile nav: Same change
  - **Kept:** Dashboard + UserButton for existing signed-in users

### 4. Updated Pricing Component
- **File:** `src/components/Pricing.tsx`
- **Changes:**
  - **Added:** Waitlist banner at top of section
  - Free tier CTA: ~~"/sign-up"~~ → **"/waitlist"**
  - **Kept:** Pay-as-you-go and Enterprise CTAs unchanged (dashboard/billing, mailto:sales)

---

## What This Achieves

✅ All public sign-up paths now route to waitlist  
✅ Existing users can still log in and access dashboard  
✅ Pricing page is transparent but registration is gated  
✅ Clear messaging: "Early access opening March 2026"  

---

## TODO: Connect Backend

The waitlist form currently logs to console. Choose one:

### Option A: Google Forms (Easiest)
1. Create Google Form with email + use case fields
2. Get form submission URL
3. Update `src/app/waitlist/page.tsx` handleSubmit function
4. See example in `/home/openclaw/.openclaw/workspace/sematryx-teaser/DEPLOY.md`

### Option B: Airtable
1. Create Airtable base with "Waitlist" table
2. Add Airtable API key to environment
3. POST to Airtable API in handleSubmit

### Option C: Custom API Route
1. Create `/src/app/api/waitlist/route.ts`
2. Store in database or CSV
3. POST to `/api/waitlist` from form

---

## Deploy

```bash
cd /home/openclaw/.openclaw/workspace/sematryx-website
git add .
git commit -m "Add waitlist mode: gate registration, collect early interest"
git push origin master
```

Vercel will auto-deploy to sematryx.com

---

## Test Locally

The main website dev server should still be running. If not:

```bash
cd /home/openclaw/.openclaw/workspace/sematryx-website
npm run dev
```

Visit http://localhost:3000/waitlist

---

## Revert When Ready to Launch

When you're ready to open registration:

1. Revert Hero CTA to "Get API Key Free" → `/api-keys`
2. Revert Header to "Sign In" → `/sign-in`
3. Remove waitlist banner from Pricing
4. Keep `/waitlist` page live (redirect to pricing or remove)

Or just `git revert` the commit when ready.
