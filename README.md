# Rachel Reed Law, PC — Website

Marketing website for **Rachel Reed Law, PC**, a Ventura, California law firm
practicing family law, criminal defense, and personal injury. Built for SEO,
local search visibility, and lead conversion.

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4
- **Hosting target:** Vercel (recommended)
- **Lead capture:** Formspree

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Project structure

```
src/
  app/                    Routes (App Router)
    page.tsx              Home
    family-law/           Pillar + [topic] sub-pages
    criminal-defense/     Pillar + [topic] sub-pages
    personal-injury/      Pillar + [topic] sub-pages
    about/ reviews/ contact/ blog/   Firm + content pages
    sitemap.ts robots.ts  SEO infrastructure
  components/             Header, Footer, CTA, forms, schema, templates
  lib/
    site.ts               Single source of truth for NAP, nav, contact
    practices.ts          Practice-area content (data-driven pages)
    blog.ts               Blog posts (Ventura-focused, family + criminal)
    reviews.ts            Real client reviews (Yelp)
    schema.ts             Schema.org JSON-LD builders
    content.ts            Shared structured-content model
public/images/            Brand logo + attorney portraits
```

## SEO features

- Per-page titles, meta descriptions, canonical URLs, Open Graph + Twitter cards
- Schema.org JSON-LD: `LegalService`/`Attorney`/`LocalBusiness`, `Person`,
  `Service`, `FAQPage`, `BreadcrumbList`, `BlogPosting`, `AggregateRating`
- Dynamic `sitemap.xml` and `robots.txt`
- Consistent NAP (Name / Address / Phone) site-wide for local SEO
- Ventura County service-area targeting and city mentions
- Static prerendering for fast Core Web Vitals

## Before going live — `[CONFIRM]` items

These placeholders live in `src/lib/site.ts` and are marked with `TODO[CONFIRM]`:

1. **Formspree endpoint** (`formspreeEndpoint`) — create a form at
   [formspree.io](https://formspree.io) and paste the real form ID.
2. **Lead email** (`email`) — the inbox that should receive consultations.
3. **Social/Google profiles** — Google Business Profile, Facebook, Instagram.
4. **Languages** — add `"Spanish"` if the firm offers *se habla español*.
5. **Map coordinates** — confirm the office geo-coordinates if precise pin
   placement matters.
6. **Domain** — canonical URLs assume `https://www.rachelreedlaw.com`.

Factual claims (years of experience, results) are written conservatively and
attributed to public reviews. Confirm any firm-specific facts before launch.

## Deploying to Vercel

1. Push to GitHub (done — see the project repo).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No env vars required for the
   base site.
4. Add the custom domain `rachelreedlaw.com`.

## Legal

Content on this site is for general information only and is not legal advice.
Contacting the firm does not create an attorney–client relationship.
