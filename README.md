# Digal Solutions — Next.js Website

A Next.js 16 (App Router) rebuild of the Digal Solutions marketing site: Home, About, Services,
Careers and Contact, sharing one design system (deep navy + safety orange, Space Grotesk /
Inter / IBM Plex Mono).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

> **Note on fonts:** this project loads Space Grotesk, Inter and IBM Plex Mono via
> `next/font/google` in `app/layout.js`. That requires outbound network access to
> `fonts.googleapis.com` at build time — this works out of the box on Vercel and any normal
> hosting/CI environment, but will fail to build in a fully network-isolated sandbox.

## Project structure

```
app/
  layout.js          Root layout — fonts, Navbar, Footer, WhatsApp button, scroll-reveal
  globals.css         All design tokens & component styles (custom CSS, no framework)
  page.js             Home page
  about/page.js        About page
  services/page.js     Services detail page
  careers/page.js      Careers page
  contact/page.js      Contact page
components/
  Navbar.js            Client component — mega menu, mobile menu, scroll shrink
  Footer.js
  WhatsAppFloat.js
  ScrollReveal.js       Client component — IntersectionObserver-based reveal animation
  Counter.js            Client component — animated stat counters
  GalleryFilter.js       Client component — project gallery with category filter
  ContactForm.js / ApplyForm.js   Client components — demo forms (see below)
  ServicesGrid.js        Home page services teaser (reads from lib/services.js)
lib/
  services.js           Shared data for all 12 services (used by home + services page)
public/
  logo.png, logo-large.png
```

## Before publishing

- **Forms are front-end only.** `ContactForm.js` and `ApplyForm.js` just `preventDefault()` on
  submit — wire them to an email service (e.g. Resend, SendGrid) via a Next.js Route Handler,
  or point them at a CRM/Forms endpoint.
- **Testimonials, stats and job listings are sample content** in the format requested — replace
  with real client quotes, current figures and live openings.
- **Client names** (L&T, Coal India, Vedanta, JSW Steel, OPGC, MEIL) are shown as plain text, not
  logos — their official marks are not reproduced here; get permission before adding logo
  artwork.
- **Gallery/project photography** is hot-linked from the existing `digalsolutions.com` WordPress
  media library. For a fully independent deploy, download those images into `public/` and update
  the `src` values in `components/GalleryFilter.js` and the relevant `app/*/page.js` files.
