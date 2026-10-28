# CSM Corporate Website

A production-oriented starter for the Critical & Strategy Minerals Private Limited website, built with Next.js App Router, TypeScript, responsive CSS, Zod validation and Resend for contact-form email delivery.

## Included

- Premium, responsive design system with graphite, mineral green and muted gold palette
- Home, About, Minerals, Industries, Sustainability, Contact, Privacy and Terms pages
- Accessible mobile navigation and keyboard focus styles
- Per-page metadata and Open Graph basics
- Contact form with client-side UX and server-side Zod validation
- Server-side email delivery using Resend (no API key exposed to the browser)
- No admin panel or database, per initial scope
- Reduced-motion support and responsive breakpoints

## Requirements

- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

The site can be previewed without email credentials, but the contact form will return a configuration error until the environment variables below are set.

## Configure contact email

Create a Resend API key and verify a sending domain/address in the Resend account.

Set these values in `.env.local` for local development and in the deployment provider's server-side environment settings for production:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=business-enquiries@your-company-domain.example
CONTACT_FROM_EMAIL=CSM Website <website@your-verified-domain.example>
NEXT_PUBLIC_SITE_URL=https://your-real-domain.example
```

Use real addresses and a sender identity permitted by your email provider. Never commit `.env.local` or secrets to Git.

## Build

```bash
npm run build
npm run start
```

## Before production launch

This starter deliberately avoids inventing company facts. Please verify or replace:

1. Legal company name, CIN, office address and all official contact details.
2. Actual business scope, mineral portfolio, sourcing capability, projects, partnerships and certifications.
3. All statistics and sustainability claims; publish targets only with scope, baseline, timeline and approval.
4. Privacy policy and terms with legal-approved wording.
5. Final email sender, recipient, domain DNS, spam protection/rate limiting, and monitoring.
6. Real images and image licensing/alt text.
7. Domain, analytics/consent requirements, sitemap/robots and production deployment settings.

The mineral and industrial application examples are general informational content, not a statement of CSM's actual inventory or supply commitments.

## Suggested next production hardening

- Add rate limiting / bot protection to `/api/contact`.
- Add a persistent enquiry store only if the business requires an enquiry history.
- Add tests for contact API validation and email-provider failures.
- Add approved company imagery, verified copy and real legal documents.
- Run accessibility, SEO and cross-browser checks before launch.