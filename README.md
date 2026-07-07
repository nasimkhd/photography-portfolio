# Anthony Saleh Website

A modern commercial photo and video portfolio for Anthony Saleh. The site uses a
self-hosted hero video, curated photography galleries, a films page, and a
contact form powered by Resend.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content

Project and film content lives in `src/content/projects.ts`. Photography
categories and images live in `src/content/photography.ts`. The homepage hero
video lives in `public/video/hero.mp4`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static content, no database required for v1

## Contact Form

The contact form sends email through Resend. Production deployments need these
environment variables:

- `RESEND_API_KEY`: Resend API key with email sending access.
- `RESEND_FROM_EMAIL`: Sender using a verified Resend domain, for example
  `Website Contact <hello@anthonysaleh.ca>`.
- `CONTACT_TO_EMAIL`: Inbox that should receive contact form messages. Defaults
  to `hello@anthonysaleh.ca` when omitted.

Do not use `onboarding@resend.dev` in production. Resend only allows that test
sender to deliver to the email address attached to the Resend account.

## Deploy

The site is ready for Vercel once the real image assets and final copy are in
place.
