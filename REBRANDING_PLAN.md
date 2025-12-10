# Sematryx Rebranding Plan
## From AEAO to Sematryx with AEAO as Core Engine

**New Brand Name:** Sematryx (pronounced "se" "matrix")  
**Core Engine Name:** AEAO (Agentic Expository Autodidactic Optimizer) - The optimization engine powering Sematryx

---

## Brand Architecture

### Brand Hierarchy
- **Sematryx** = Company/Platform Brand
- **AEAO Engine** = Core optimization engine (the technology)
- **AEAO Tetrad** = The four pillars of the engine (Agentic, Expository, Autodidactic, Domain Libraries)

### Messaging Strategy
- Sematryx is the platform/product name
- AEAO is the core optimization engine that powers Sematryx
- References should be: "Sematryx, powered by the AEAO Engine" or "Sematryx's AEAO Engine"

---

## Phase 0: Pre-Rebranding Decisions (MUST COMPLETE FIRST)

**⚠️ Critical: Resolve these decisions before starting implementation**

### 0.1 SDK Class Name Decision
**✅ Decision:** Use `Sematryx` as the SDK class name
- **Status:** CONFIRMED
- **Impact:** All code examples across documentation will use `Sematryx` class
- **Implementation:** Update all SDK documentation and code examples

### 0.2 Route Naming Decision
**✅ Decision:** Rename `/why-aeao` → `/why-sematryx`
- **Status:** CONFIRMED
- **Impact:** Requires file move, redirect setup, and link updates
- **Implementation:** See Phase 5.1 for detailed steps

### 0.3 Package Naming Strategy
**✅ Decision:** Rebrand npm packages `@aeao/*` → `@sematryx/*`
- **Status:** CONFIRMED
- **Impact:** Requires coordination with SDK repository
- **Timeline:** Can be done in parallel with website rebranding

### 0.4 Domain & API URL Strategy
**✅ Decision:** Domain owned - setup required (see Domain Setup Checklist below)
- **Status:** Domain owned, setup needed
`- **Phase 1:** Content rebranding (can be done immediately)
- **Phase 2:** Domain migration (after DNS setup complete)
- **API URLs:** Support both old and new domains during transition period

### 0.5 Rollback Plan
**Decision:** Create rollback strategy before starting
- **Git:** Use feature branch for rebranding
- **Backup:** Tag current state before changes
- **Testing:** Test on staging before production
- **Rollback:** Can revert via git if critical issues arise

---

## Domain Setup Checklist

**Status:** Domain owned ✅ | Setup required ⚠️

### DNS Configuration (Required)
1. **Point domain to Vercel:**
   - Add domain in Vercel dashboard: Project Settings → Domains
   - Vercel will provide DNS records to add:
     - `A` record pointing to Vercel IPs, OR
     - `CNAME` record pointing to `cname.vercel-dns.com`
   - Update DNS at your domain registrar

2. **Wait for DNS propagation:**
   - Usually takes 5-60 minutes, can take up to 48 hours
   - Verify with: `dig sematryx.com` or `nslookup sematryx.com`

3. **SSL Certificate:**
   - Vercel automatically provisions SSL (Let's Encrypt)
   - Usually ready within minutes of DNS propagation
   - Verify at: `https://sematryx.com`

### Vercel Configuration
1. **Add domain in Vercel:**
   - Go to Project Settings → Domains
   - Add `sematryx.com` and `www.sematryx.com` (if using www)
   - Vercel will verify ownership

2. **Set primary domain:**
   - Choose `sematryx.com` as primary
   - Set up redirect from `www.sematryx.com` → `sematryx.com` (or vice versa)

3. **Environment variables:**
   - Update `NEXT_PUBLIC_SITE_URL` to `https://sematryx.com`
   - Update any other domain-related env vars

### Code Updates (After DNS is ready)
1. **Update `src/app/layout.tsx`:**
   ```typescript
   metadataBase: new URL('https://sematryx.com')
   ```

2. **Update `next.config.js` (if needed):**
   - Add domain to allowed domains if using image optimization
   - Add redirects for old domain if needed

3. **Update all hardcoded URLs:**
   - Search for `aeao-website.vercel.app`
   - Replace with `sematryx.com`

### Testing Checklist
- [ ] DNS records added and propagated
- [ ] Domain verified in Vercel
- [ ] SSL certificate active (green lock in browser)
- [ ] Site loads at `https://sematryx.com`
- [ ] `www.sematryx.com` redirects correctly (if using)
- [ ] All internal links work
- [ ] API calls work with new domain
- [ ] Analytics tracking works

### Timeline Estimate
- **DNS Setup:** 5-60 minutes (after adding records)
- **Vercel Configuration:** 5-10 minutes
- **SSL Provisioning:** Automatic, usually < 5 minutes
- **Total:** ~15-75 minutes (mostly waiting for DNS)

---

## Phase 1: Core Branding Updates (Critical)

### 1.1 Metadata & SEO
**Files to Update:**
- `src/app/layout.tsx`
  - Title: "Sematryx - Enterprise Optimization Framework"
  - Description: Update to mention "Sematryx, powered by the AEAO Engine"
  - Site name: "Sematryx"
  - metadataBase URL: Update from `aeao-website.vercel.app` to `sematryx.com` (or new domain)

### 1.2 Navigation & Header
**Files to Update:**
- `src/components/Header.tsx`
  - Logo text: "AEAO" → "Sematryx"
  - Navigation link: "/why-aeao" → "/why-sematryx" (if renaming route per Phase 0.2)
  - Link text: "Why AEAO" → "Why Sematryx"
  - Update all navigation references

### 1.3 Hero Section
**Files to Update:**
- `src/components/Hero.tsx`
  - **Main heading:** "Sematryx" (remove full expansion - too technical for hero)
  - **Subheading:** "Enterprise Optimization Framework" or "AI-Powered Optimization Platform"
  - **Description:** "Sematryx solves enterprise problems with AI-powered intelligence, compliance, and continuous learning, powered by the AEAO Engine"
  - **Note:** Full expansion "Agentic Expository Autodidactic Optimizer" should be moved to technical documentation, not hero section
  - Update references: "AEAO" → "Sematryx" (brand), keep "AEAO Tetrad" as engine concept

### 1.4 Footer
**Files to Update:**
- `src/components/Footer.tsx`
  - Logo: "AEAO" → "Sematryx"
  - Description: "Sematryx - The world's most advanced optimization framework powered by the AEAO Engine"

---

## Phase 2: Content & Messaging Updates

### 2.1 Features Component
**Files to Update:**
- `src/components/Features.tsx`
  - Section title: "The AEAO Engine" → "The AEAO Engine" (keep as engine name)
  - Add context: "Sematryx's AEAO Engine" or "Powered by the AEAO Engine"

### 2.2 Why Page
**Files to Update:**
- `src/app/why-aeao/page.tsx` (or `why-sematryx/page.tsx` if renaming per Phase 0.2)
  - Page title/heading: "Why Sematryx"
  - Content: Update all "AEAO" brand references to "Sematryx"
  - Keep "AEAO Engine" references as engine name
  - Update comparisons: "Traditional optimizers vs Sematryx"
  - **If renaming route:** Move directory and set up redirect (see Phase 5.1)

### 2.3 Homepage
**Files to Update:**
- `src/app/page.tsx`
  - Review all brand references

---

## Phase 3: Documentation Updates

### 3.1 SDK Documentation
**Files to Update:**
- `src/app/docs/sdks/javascript/page.tsx`
  - Package name: `@aeao/javascript-sdk` → `@sematryx/javascript-sdk` (per Phase 0.3 decision)
  - Class name: `AEAO` → `Sematryx` (per Phase 0.1 decision - recommended)
  - API URLs: `https://api.aeao.com` → `https://api.sematryx.com` (or support both during transition)
  - Update descriptions: "Official JavaScript/TypeScript SDK for Sematryx"
  - Code examples: Update variable names from `aeao` → `sematryx` or `client`

- `src/app/docs/sdks/python/page.tsx`
  - Similar updates as JavaScript SDK

- `src/app/docs/sdks/rest/page.tsx`
  - Update API base URLs
  - Update brand references

### 3.2 API Documentation
**Files to Review:**
- `src/app/docs/api/*/page.tsx` (all API doc pages)
  - Update brand references
  - Keep AEAO Engine references where technical

### 3.3 Tutorials
**Files to Review:**
- `src/app/tutorials/**/*.tsx`
  - Update brand references to Sematryx
  - Keep AEAO Engine references where technical

---

## Phase 4: Configuration & Infrastructure

### 4.1 Package Configuration
**Files to Update:**
- `package.json`
  - Name: `"aeao-website"` → `"sematryx-website"`

### 4.2 README
**Files to Update:**
- `README.md`
  - Title: "Sematryx Website"
  - Description: Update to mention Sematryx and AEAO Engine
  - Live website URL: Update when domain changes

### 4.3 Documentation Files
**Files to Review & Update:**
- `CLAUDE.md` - Update project overview
- `WEBSITE_REDESIGN_PLAN.md` - May need updates or archive
- `WEBSITE_ALIGNMENT_REVIEW.md` - Review for relevance
- Other `.md` files in root - Review and update as needed

### 4.4 Deployment Configuration
**Files to Review:**
- `vercel.json` - May need updates if domain changes
- Environment variables - Review API URLs, domains
- `.env.example` - Update any AEAO references
- Vercel project settings - Update project name if needed

### 4.5 Environment Variables
**Files to Review:**
- `.env.local` (if exists) - Update API URLs
- `.env.example` - Update example values
- Vercel environment variables - Update in dashboard
- **Common variables to check:**
  - `NEXT_PUBLIC_API_URL`
  - `NEXT_PUBLIC_SITE_URL`
  - Any AEAO-specific configuration

---

## Phase 5: URL & Route Updates

### 5.1 Route Renaming
**Decision:** Per Phase 0.2 - Rename `/why-aeao` → `/why-sematryx` ✅ CONFIRMED

**Implementation Steps:**
1. Move `src/app/why-aeao/` → `src/app/why-sematryx/`
2. Update all internal links (Header, Footer, DocsNav, etc.)
3. Set up 301 redirect in `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     async redirects() {
       return [
         {
           source: '/why-aeao',
           destination: '/why-sematryx',
           permanent: true, // 301 redirect
         },
       ]
     },
   }
   
   module.exports = nextConfig
   ```
4. Test redirect works correctly (local and production)
5. Update sitemap.xml (if exists)

### 5.2 External URLs
**Phase 1 (Content Rebranding - can do now):**
- Update all hardcoded URLs in codebase to use new domain
- Update API endpoint references: `api.aeao.com` → `api.sematryx.com`
- Support both old and new domains during transition (if needed)

**Phase 2 (Domain Migration - after DNS setup):**
- Website: `aeao-website.vercel.app` → `sematryx.com`
- Complete DNS setup (see Domain Setup Checklist above)
- Add domain in Vercel dashboard
- Update `metadataBase` in `layout.tsx` to `https://sematryx.com`
- Update all environment variables
- Test domain is working

---

## Phase 6: Code Examples & SDK References

### 6.1 Code Examples
**Pattern to Follow (per Phase 0.1 decision):**
- Brand references: Use "Sematryx"
- Engine references: Use "AEAO Engine" or "AEAO" (technical context)
- SDK class: `Sematryx` (per Phase 0.1 - recommended)
- Variable names: `aeao` → `sematryx` or `client`

**Example Transformation:**
```javascript
// Before
import { AEAO } from '@aeao/javascript-sdk'
const aeao = new AEAO('your-api-key')

// After (Recommended approach)
import { Sematryx } from '@sematryx/javascript-sdk'
const sematryx = new Sematryx('your-api-key')
// Or use 'client' if preferred:
const client = new Sematryx('your-api-key')
```

**Files with Code Examples (60+ instances):**
- `src/app/docs/sdks/javascript/page.tsx` (~30 examples)
- `src/app/docs/sdks/python/page.tsx` (~15 examples)
- `src/app/docs/sdks/rest/page.tsx` (~10 examples)
- `src/app/docs/api/*/page.tsx` (all API docs)
- `src/app/tutorials/**/*.tsx` (all tutorials)

---

## Phase 7: Visual & Design Elements

### 7.1 Logo & Branding
- Update logo assets (if any)
- Update favicon
- Review color scheme alignment with new brand

### 7.2 Typography
- Ensure brand name "Sematryx" is consistently styled
- Add pronunciation guide: "se" "matrix" (recommend adding to footer or about page)

---

## Phase 8: Testing & Validation

### 8.1 Link Testing
- [ ] Test all internal links (use tool like `linkinator` or manual check)
- [ ] Verify no broken references
- [ ] Check all navigation links work
- [ ] Verify redirects work (if routes renamed)

### 8.2 Content Review
- [ ] Review all brand references for consistency
- [ ] Verify "AEAO Engine" vs "Sematryx" usage is correct
- [ ] Check code examples compile/run correctly
- [ ] Verify API URLs are updated

### 8.3 SEO & Metadata
- [ ] Verify all metadata tags updated
- [ ] Check Open Graph tags
- [ ] Verify Twitter card tags
- [ ] Test page titles and descriptions
- [ ] Check sitemap.xml (if exists)

### 8.4 Staging Environment Testing
- [ ] Deploy to staging environment
- [ ] Test all functionality
- [ ] Verify no console errors
- [ ] Test on multiple browsers
- [ ] Test responsive design
- [ ] Verify analytics tracking works

### 8.5 Regression Testing
- [ ] Test API key generation
- [ ] Test Stripe checkout flow
- [ ] Test documentation navigation
- [ ] Test tutorial pages
- [ ] Test all interactive components

---

## Phase 9: Post-Launch

### 9.1 SEO & Redirects
- [ ] Set up 301 redirects for old routes (if routes renamed)
- [ ] Update Google Search Console with new domain
- [ ] Submit updated sitemap.xml
- [ ] Update robots.txt if needed
- [ ] Monitor for 404 errors

### 9.2 Analytics & Tracking
- [ ] Update Google Analytics property name (if applicable)
- [ ] Verify event tracking still works
- [ ] Update conversion goals if needed
- [ ] Set up new brand name in analytics
- [ ] Monitor traffic patterns

### 9.3 Third-Party Integrations
- [ ] Update Stripe product names (if applicable)
- [ ] Update email templates (if any)
- [ ] Update social media profiles
- [ ] Update any external service configurations

### 9.4 Monitoring
- [ ] Monitor for broken links (use tool like `linkinator`)
- [ ] Check error logs for issues
- [ ] Monitor user feedback
- [ ] Track search rankings
- [ ] Monitor API usage patterns

### 9.5 Documentation Updates
- [ ] Update external documentation sites
- [ ] Update GitHub repository description
- [ ] Update npm package descriptions (when packages rebranded)
- [ ] Update any partner/integration docs

---

## Implementation Checklist

### Phase 0: Pre-Rebranding (MUST DO FIRST)
- [x] Resolve SDK class name decision (Phase 0.1) ✅ CONFIRMED: `Sematryx`
- [x] Resolve route naming decision (Phase 0.2) ✅ CONFIRMED: `/why-sematryx`
- [x] Confirm package naming strategy (Phase 0.3) ✅ CONFIRMED: `@sematryx/*`
- [x] Plan domain migration timeline (Phase 0.4) ✅ CONFIRMED: Domain owned, setup needed
- [ ] Complete domain DNS setup (see Domain Setup Checklist)
- [ ] Create rollback plan (Phase 0.5)
- [ ] Create feature branch for rebranding
- [ ] Tag current state in git

### Critical (Must Do First)
- [ ] Update `src/app/layout.tsx` metadata
- [ ] Update `src/components/Header.tsx` logo and navigation
- [ ] Update `src/components/Hero.tsx` brand references (remove full expansion)
- [ ] Update `src/components/Footer.tsx` brand references
- [ ] Update `package.json` name
- [ ] Update `README.md`

### High Priority
- [ ] Rename route `/why-aeao` → `/why-sematryx` (if per Phase 0.2)
- [ ] Set up redirect for old route
- [ ] Update `src/app/why-sematryx/page.tsx` content (or why-aeao if keeping)
- [ ] Update `src/components/Features.tsx` messaging
- [ ] Update all SDK documentation pages
- [ ] Update API documentation pages
- [ ] Review and update tutorial pages
- [ ] Update environment variables

### Medium Priority
- [ ] Update all code examples
- [ ] Review and update markdown documentation files
- [ ] Update external URLs and API endpoints
- [ ] Consider route renaming (`/why-aeao` → `/why-sematryx`)

### Medium Priority (Testing)
- [ ] Complete Phase 8: Testing & Validation
- [ ] Test on staging environment
- [ ] Fix any issues found

### Low Priority / Future
- [ ] Complete Phase 9: Post-Launch tasks
- [ ] Update domain and deployment URLs (Phase 2)
- [ ] Update logo assets
- [ ] Add pronunciation guide to footer
- [ ] SEO optimization for new brand
- [ ] Update social media profiles

---

## Brand Reference Guide

### When to Use "Sematryx"
- Company/platform name
- Product name
- Brand references
- Marketing copy
- User-facing text

### When to Use "AEAO" or "AEAO Engine"
- Technical documentation about the engine
- References to the core optimization technology
- "AEAO Tetrad" (the four pillars)
- Engine-specific features
- Technical architecture discussions

### Messaging Patterns
- ✅ "Sematryx, powered by the AEAO Engine"
- ✅ "Sematryx's AEAO Engine"
- ✅ "The AEAO Engine powers Sematryx"
- ✅ "Sematryx solves enterprise problems..."
- ❌ "AEAO solves enterprise problems..." (unless referring specifically to engine)

---

## Search & Replace Patterns

### ⚠️ WARNING: Manual Review Required
**Do NOT use global find/replace blindly** - Many "AEAO" references should remain (AEAO Engine, AEAO Tetrad, technical contexts)

### Safe Patterns (with context review)
1. **Brand Name (User-facing text):**
   - Pattern: `"AEAO"` (in quotes, titles, headings) → `"Sematryx"`
   - Pattern: `AEAO -` (in titles) → `Sematryx -`
   - Pattern: `Why AEAO` → `Why Sematryx`
   - **Keep:** `AEAO Engine`, `AEAO Tetrad`, technical references

2. **Package Names:**
   - Pattern: `@aeao/` → `@sematryx/` (per Phase 0.3)
   - Pattern: `"aeao-website"` → `"sematryx-website"`

3. **URLs:**
   - Pattern: `api.aeao.com` → `api.sematryx.com`
   - Pattern: `aeao.com` → `sematryx.com`
   - Pattern: `aeao-website.vercel.app` → new domain (when ready)

4. **Variable Names (in code examples only):**
   - Pattern: `const aeao =` → `const sematryx =` or `const client =`
   - Pattern: `new AEAO(` → `new Sematryx(` (per Phase 0.1)

### Regex Patterns for Advanced Search
```regex
# Find AEAO in brand contexts (titles, headings, user-facing)
("AEAO"|AEAO -|Why AEAO|AEAO solves)

# Find AEAO that should be kept (technical)
(AEAO Engine|AEAO Tetrad|AEAO's|AEAO\.)
```

### Manual Review Required For:
- Code examples (60+ instances)
- Technical documentation
- API documentation
- Tutorial content

---

## Decisions & Recommendations

### ✅ Resolved Decisions (Phase 0) - ALL CONFIRMED

1. **SDK Class Name:** ✅ **CONFIRMED: `Sematryx`**
   - Status: Decision made
   - Implementation: Update all code examples to use `Sematryx` class
   - Keep "AEAO" only for engine references

2. **Route Names:** ✅ **CONFIRMED: Rename to `/why-sematryx`**
   - Status: Decision made
   - Implementation: Move directory, set up redirect, update links
   - See Phase 5.1 for detailed steps

3. **Package Names:** ✅ **CONFIRMED: Rebrand to `@sematryx/*`**
   - Status: Decision made
   - Implementation: Coordinate with SDK repository
   - Update all package references in documentation

4. **Domain:** ✅ **CONFIRMED: Domain owned, setup required**
   - Status: Domain owned, DNS setup needed
   - Implementation: See "Domain Setup Checklist" above
   - Timeline: Can be done in parallel with content rebranding

5. **API URLs:** ✅ **CONFIRMED: Gradual transition**
   - Status: Decision made
   - Implementation: Support both old and new during transition
   - Update documentation to new URLs
   - Maintain backward compatibility if needed

6. **Pronunciation:** ✅ **RECOMMENDED: Add to footer**
   - Pronunciation: "se" "matrix"
   - Add small text in footer or about page

### ⚠️ Remaining Questions

1. **SDK Repository:** Is SDK repository ready for rebranding?
2. **Backward Compatibility:** How long to support old API URLs?
3. **Stripe Products:** Do Stripe product names need updating?
4. **API Domain:** What will be the API domain? (`api.sematryx.com`?)

---

## Estimated Scope

- **Files to Update:** ~50+ files
- **Total References:** 228+ "AEAO" matches found (need careful review)
- **Code Examples:** 60+ instances requiring updates
- **Time Estimate:** 
  - Phase 0 (Decisions): 1 hour
  - Phase 1-4 (Core rebranding): 4-6 hours
  - Phase 5-7 (URLs, code, visuals): 3-4 hours
  - Phase 8 (Testing): 2-3 hours
  - Phase 9 (Post-launch): 1-2 hours
  - **Total: 11-16 hours** for complete rebranding
- **Risk Level:** Medium-High (requires careful review to maintain technical accuracy, many code examples)

---

## Rollback Plan

### Before Starting
1. Create feature branch: `git checkout -b rebrand/sematryx`
2. Tag current state: `git tag pre-rebrand-$(date +%Y%m%d)`
3. Document current state in commit message

### If Issues Arise
1. **Minor Issues:** Fix in feature branch, test, then merge
2. **Major Issues:** Revert branch or cherry-pick fixes
3. **Critical Issues:** 
   - Revert to tag: `git reset --hard pre-rebrand-YYYYMMDD`
   - Or revert specific commits
   - Deploy previous version

### Testing Strategy
1. Test on feature branch locally
2. Deploy to staging environment
3. Test thoroughly before production
4. Monitor after production deployment

---

## Notes

- This is a comprehensive rebranding that requires careful attention to maintain technical accuracy
- The distinction between "Sematryx" (brand) and "AEAO Engine" (technology) must be clear
- Some references to AEAO should remain (engine name, tetrad, technical concepts)
- **DO NOT use global find/replace** - manual review required for each file
- Consider staging the rollout if domain/API changes are involved
- Test thoroughly on staging before production deployment
- Keep rollback plan ready in case of issues


