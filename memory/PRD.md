# Amoreviamediaagency — Multi-page Landing Site

## Problem Statement
Clone the provided Lumina Digital screenshots as a 4-page multi-page site, rebranded to "Amoreviamediaagency", using the user-supplied background image. Contact form must capture details destined for Amoreviamediaagency@gmail.com.

## Architecture
- FastAPI + MongoDB backend, React (Router v7) + Tailwind + shadcn frontend
- Routes: `/`, `/services`, `/portfolio`, `/about`, `/insights`, `/contact`
- Background image: https://customer-assets.emergentagent.com/job_webpage-replica-tool/artifacts/5m5g67sw_image.png (CSS var --bg-image)
- Fonts: Outfit (headings) + Inter (body)
- Palette: black bg + cyan #22d3ee + orange #f97316

## Implemented (Dec 2025)
- Backend: `POST /api/contact`, `GET /api/contact` (saves to `contact_submissions`), `GET /api/`
- Frontend pages: Home, Services, Portfolio (filterable), About, Insights, Contact
- Shared Navbar/Footer, glass-card design, hero with background image, toast notifications via sonner
- Tested 100% backend + frontend pass (iteration_1.json)

## Mocked / Deferred
- **Email sending to Amoreviamediaagency@gmail.com is MOCKED** — submissions stored in MongoDB only. Needs SMTP/SendGrid/Resend credentials to enable real delivery.
- `/api/contact` GET is unauthenticated (admin auth deferred)

## Backlog (P1/P2)
- P1: Wire real email delivery (Resend/Gmail SMTP via App Password)
- P1: Protect GET `/api/contact` with admin auth
- P2: Add real Insights/blog CMS
- P2: SEO meta tags + OG images per page
