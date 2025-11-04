# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is the AEAO (AI-Enhanced Automation Operations) website - a comprehensive SaaS landing page with documentation, tutorials, benchmarks, and API key management.

## Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payment Processing**: Stripe
- **Deployment**: Vercel
- **Package Manager**: npm

## Repository Information
- **Purpose**: SaaS website for AEAO platform
- **Organization**: smartofficialintelligence
- **Author**: Patrick Kuehn <patrick.kuehn@stern.nyu.edu>
- **Main Branch**: master

## Development Commands

### Setup
```bash
npm install                 # Install dependencies
cp .env.example .env.local  # Setup environment variables
```

### Development
```bash
npm run dev                 # Start development server (http://localhost:3000)
npm run build              # Build for production
npm run start              # Start production server
npm run lint               # Run ESLint
```

### Environment Configuration
Configure these environment variables in `.env.local`:
- `STRIPE_SECRET_KEY`: Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook endpoint secret
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe publishable key
- `STRIPE_PRO_PRICE_ID`: Stripe price ID for Pro plan
- `STRIPE_ENTERPRISE_PRICE_ID`: Stripe price ID for Enterprise plan
- `NEXT_PUBLIC_BASE_URL`: Base URL for the application

## Project Structure

### Main Pages
- `/`: Landing page with hero, features, and CTA
- `/api-keys`: API key purchasing with Stripe integration
- `/docs`: Documentation system with navigation
- `/tutorials`: Interactive tutorials and guides
- `/benchmarks`: Performance metrics and comparisons
- `/mcp`: Model Context Protocol integration info
- `/success`: Post-purchase success page

### Key Components
- `Header`: Main navigation with responsive menu
- `Hero`: Landing page hero section
- `Features`: Feature grid display
- `Footer`: Site footer with links
- `DocsNav`: Documentation navigation sidebar
- `CodeBlock`: Syntax-highlighted code examples

### API Routes
- `/api/stripe/checkout`: Create Stripe checkout sessions
- `/api/stripe/webhook`: Handle Stripe webhooks

## Architecture Notes

### Stripe Integration
- Checkout flow for API key purchases
- Webhook handling for subscription events
- Support for multiple pricing tiers (Free, Pro, Enterprise)
- Success page with generated API keys

### Documentation System
- Nested routing under `/docs`
- Sidebar navigation with active state
- Code examples with copy functionality
- Responsive design for mobile devices

### Content Management
- Static content in React components
- Code examples embedded in components
- Pricing plans configured in `lib/stripe.ts`
- Benchmark data stored in page components

## Deployment (Vercel)
- Configured for automatic deployment
- Environment variables managed through Vercel dashboard
- Webhook endpoints properly configured
- Optimized for performance and SEO

## Development Patterns
- TypeScript for type safety
- Tailwind for responsive styling
- Client components marked with 'use client'
- Proper error handling in API routes
- Responsive design mobile-first approach

## Important Files
- `package.json`: Dependencies and scripts
- `tailwind.config.ts`: Tailwind configuration with custom colors
- `next.config.js`: Next.js configuration
- `vercel.json`: Vercel deployment configuration
- `src/lib/stripe.ts`: Stripe integration and pricing configuration