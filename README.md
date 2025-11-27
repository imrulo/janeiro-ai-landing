# 🚀 janeiro.ai – Premium Domain Landing Page

> Luxury sales experience for the rare one-word domain `janeiro.ai`, crafted for AI funds, venture platforms, and enterprise innovation labs.

## ✨ Overview

This repo contains a focused, single-page Next.js 16 experience that positions **janeiro.ai** as an exclusive asset. The layout, copy, and storytelling are tailored to B2B buyers who need a global-ready AI brand with gravitas, while keeping WhatsApp and email as direct negotiation channels.

## 🎯 Key Principles

- **Premium positioning** – Minimal, confident art direction with gold accents on a dark canvas.
- **Server-first architecture** – Sections render on the server for fast, SEO-friendly delivery; only critical scripts run on the client.
- **Realistic messaging** – Copy, metadata, and schema make it clear this is a domain offering, not a SaaS product.
- **Direct conversion paths** – Primary CTA scrolls to contact, secondary CTA opens a prefilled WhatsApp conversation.

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **UI**: Tailwind CSS 3.4, custom CSS variables
- **Icons**: lucide-react
- **Deployment**: Vercel (standalone output + security headers)

## ⚙️ Scripts

```bash
# Develop locally
npm run dev

# Lint via the shared ESLint config
npm run lint

# Production build / pre-deploy verification
npm run build

# Optional bundle inspection (sets NEXT_ANALYZE=true)
npm run analyze
```

## 🚀 Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/janeiro-ai-landing.git
cd janeiro-ai-landing
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to preview.

## 📊 Performance & Monitoring

- Production bundles are optimized via Next.js defaults plus Tailwind tree-shaking.
- Run `npm run build` before deploying to ensure type, lint, and hydration checks pass.
- For Lighthouse or WebPageTest reviews, use the deployed Vercel URL and document results in project notes; scores are **not** guaranteed by default.

## 🎨 Content & Layout

- **Hero**: Responsive typography built with Tailwind breakpoints to keep CTAs visible on mobile.
- **Why / Applications / FAQ**: Each section lives in a dedicated server component for easy updates and testing.
- **Contact**: Reinforces premium positioning with explicit guidance for inquiries, linking to mailto + WhatsApp (prefilled message).

## ♿ Accessibility & UX

- Global CSS variables now resolve correctly via `:root`, ensuring predictable theming.
- Decorative icons include `aria-hidden` and are marked non-focusable to reduce screen-reader noise.
- Focus states, skip link, and reduced-motion support leverage the existing global styles; extend as you harden WCAG compliance.

## 🔐 Security Notes

- Security headers (HSTS, X-Frame-Options, Referrer-Policy, CSP, Permissions-Policy) are defined in `next.config.js` and applied through Vercel.
- The image optimizer no longer adds a conflicting CSP, allowing approved analytics scripts to run safely.

## 📄 Documentation

- `CHANGELOG.md` – Implementation history
- `IMPLEMENTATION_SUMMARY.md` – Executive summary
- `DEPLOYMENT_CHECKLIST.md` – Steps for Vercel launch

## 📞 Contact Channels

- **Email**: `imrulo.eth@proton.me`
- **WhatsApp**: [Prefilled inquiry](https://wa.link/6difl3?text=Hello%2C%20I%27m%20interested%20in%20acquiring%20the%20domain%20janeiro.ai...) for direct negotiations

---

Crafted with intent by [imrulo.eth](https://github.com/imruloeth).
