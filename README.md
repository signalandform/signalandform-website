# Signal & Form

Monorepo with two Next.js sites:

| Site | Root Directory | Domain |
|------|----------------|--------|
| **Signal & Form LLC** | `.` (root) | signalandform.net |
| **Hilltop Truck Park** | `hilltoptruckpark/` | hilltoptruckpark.signalandform.net |

---

## Signal & Form (root)

Company website for Signal & Form LLC, a creative studio in Grapevine, TX specializing in custom signage, vehicle wraps, banners, and flags.

### Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Resend** (contact form email)

### Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Copy `.env.example` to `.env.local` and add:

- `RESEND_API_KEY` - Required for contact form. Get one at [resend.com](https://resend.com)
- `RESEND_FROM_EMAIL` - Optional. Use verified domain for production (e.g. `contact@signalandform.net`)

### Deploy on Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Set **Root Directory** to `.` (or leave empty)
4. Add `RESEND_API_KEY` in Project Settings → Environment Variables
5. Add custom domain `signalandform.net` in Project Settings → Domains
6. Configure DNS as instructed by Vercel

### Redirects

- `/project-inquiry-form` and `/project-inquiry-form/` → `/contact`

---

## Hilltop Truck Park

Food truck court site for Hilltop Truck Park in Justin, TX. Hosted at `hilltoptruckpark.signalandform.net`.

### Getting Started

```bash
cd hilltoptruckpark
npm install
npm run dev
```

### Deploy on Vercel

1. Create a **second** Vercel project from the same repo
2. Set **Root Directory** to `hilltoptruckpark`
3. Add custom domain `hilltoptruckpark.signalandform.net`
4. Configure DNS (CNAME) as instructed by Vercel

See `hilltoptruckpark/README.md` for more details.
