# Budgetless

Subscription tracking app. Hosted at `budgetless.signalandform.net`.

Part of the Signal & Form monorepo. Run from this directory.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + Shadcn UI
- Supabase (Auth + Database)
- Stripe (Payments)
- Resend (Emails)

## Getting Started

### 1. Create Supabase Project

1. Create a new project at [supabase.com](https://supabase.com)
2. Run migrations in order via SQL Editor:
   - `supabase/migrations/20240211000000_initial_schema.sql`
   - `supabase/migrations/20240211000001_seed_cancellation_guides.sql`

### 2. Install and Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Environment Variables

Copy `.env.example` to `.env.local` and add:

**Required:**
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` - For server-side/cron (keep secret)

**Cron & Emails (Phase 3):**
- `RESEND_API_KEY` - For reminder emails
- `RESEND_FROM_EMAIL` - From address
- `CRON_SECRET` - Protect cron API routes (set in Vercel for cron)

**Stripe (Phase 4):**
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_STRIPE_PREMIUM_MONTHLY_PRICE_ID`, `NEXT_PUBLIC_STRIPE_PREMIUM_YEARLY_PRICE_ID`

## Deployment (Vercel)

1. Create a new Vercel project from this repo
2. Set **Root Directory** to `0-budgetless`
3. Add custom domain `budgetless.signalandform.net`
4. Configure DNS (CNAME) as instructed by Vercel
5. Add all environment variables

**Cron (Vercel Pro):** `vercel.json` configures daily reminders (9am UTC) and weekly digest (Mondays).

## Features

- **Landing page** – Headline and value props
- **Auth** – Email/password sign up and login via Supabase
- **Dashboard** – Monthly/annual totals, upcoming renewals, subscriptions list
- **Add subscription** – Modal with name, price, billing cycle, renewal date
- **Reminder emails** – Configurable (1, 3, 7 days before renewal)
- **Weekly digest** – Monday summary email
- **Stripe** – Free tier (5 subs), Premium ($5/mo or $29/yr)
- **Cancellation guides** – Step-by-step for popular services
- **Savings tracker** – Total saved from canceled subscriptions
- **Export** – CSV download

## Project Structure

- `app/` - Next.js App Router (landing, auth, dashboard, API)
- `components/` - UI components (Shadcn + custom)
- `lib/` - Supabase clients, Stripe, utils
