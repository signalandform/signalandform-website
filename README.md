# Signal & Form Website

Company website for Signal & Form LLC, a creative studio in Grapevine, TX specializing in custom signage, vehicle wraps, banners, and flags.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Resend** (contact form email)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and add:

- `RESEND_API_KEY` - Required for contact form. Get one at [resend.com](https://resend.com)
- `RESEND_FROM_EMAIL` - Optional. Use verified domain for production (e.g. `contact@signalandform.net`)

## Deploy on Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Add `RESEND_API_KEY` in Project Settings → Environment Variables
4. Add custom domain `signalandform.net` in Project Settings → Domains
5. Configure DNS as instructed by Vercel

## Redirects

- `/project-inquiry-form` and `/project-inquiry-form/` → `/contact`
