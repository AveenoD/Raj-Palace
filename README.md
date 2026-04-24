# Raj Palace & Lawns — Luxury Wedding Venue Landing Page

## Project Overview
- **Name**: Raj Palace & Lawns — Official Website
- **Goal**: High-conversion luxury wedding-venue landing page that maximizes booking enquiries and showcases the grandeur of a 5000-guest wedding hall in Yeola, Nashik.
- **Brand**: Raj Palace & Lawns
- **Location**: Shirdi Manmad Road, Near Darshan Hotel & Indian Oil Pump, Yeola, Dist. Nashik, Maharashtra – 423401
- **Contact**: +91 97644 90162 (Phone / WhatsApp)

## URLs
- **Local Dev (Sandbox)**: served on port `3000` (use `GetServiceUrl` to obtain HTTPS URL)
- **Production**: *to be deployed to Cloudflare Pages*
- **Instagram**: https://www.instagram.com/raj_palace_lawns
- **Google Maps**: https://share.google/cZCukpQ7jfPJYxF4F

## Currently Completed Features

### Public Landing Page (`/`)
1. **Navigation** — Sticky transparent-to-solid nav with mobile menu, CTA buttons (Call + WhatsApp)
2. **Hero Section** — 5-slide Ken Burns cinematic slideshow (facade, lawn, hall, mandap, sky facade), headline + subtext + dual CTAs + 3 stats card
3. **Trust Bar** — 5-star badge, "Trusted Wedding Venue in Nashik District" with 3 icon chips (Capacity / Location / Verified)
4. **Venue Highlights** — 4 immersive image cards (Indoor Hall / Lawns / Big Fat Indian Weddings / Day & Night)
5. **Features Grid** — 9-card feature matrix with hover gold accent (Stage, Catering, Parking, Lighting, Decor, Highway, Power, Indoor+Open, Coordinator)
6. **Interactive Booking Calendar** — Live month view with color-coded availability (Green/Red/Gray/Gold), prev/next month, date selection, auto-pulls real data from `/api/availability`
7. **Enquiry Modal** — Full form (name, phone, date, guests, message) + WhatsApp deep-link fallback
8. **How Booking Works** — 3-step numbered process (Select Date → Contact → Confirm)
9. **Gallery** — 16-image filterable masonry grid (All / Indoor Hall / Lawns / Night Lighting / Weddings) with lightbox
10. **Testimonials** — 3 family-story cards + Instagram & Google Reviews CTAs
11. **Pricing / Quote** — Cinematic banner with custom-quote messaging and dual CTAs
12. **FAQ** — 7-question accordion (capacity, parking, catering, day/night, event types, booking, location)
13. **Urgency CTA** — "Limited Wedding Dates Available" banner with Call + Check Availability CTAs
14. **Contact** — 4 action cards (Call / WhatsApp / Address / Instagram) + embedded Google Map
15. **Footer** — 4-column layout (brand + social / explore / we-host / reach-us) + admin link
16. **Sticky WhatsApp** — Pulsing green floating button (+ sticky Call button on mobile)
17. **Scroll Reveal Animations** — IntersectionObserver-driven fade-up on every section
18. **Lazy Loading** — All images use `loading="lazy"`
19. **SEO** — Meta description, Open Graph, Twitter cards, JSON-LD `EventVenue` schema
20. **Mobile-First Responsive** — Fully tested on all breakpoints

### Admin Panel (`/admin`)
1. **Login Page** — Royal themed login form with error handling
2. **Session Management** — httpOnly cookie-based auth (7-day session)
3. **Dashboard Stats** — 4 live KPI cards (Booked / Available / Blocked / Enquiries)
4. **Calendar Management** — Click any date to change status to Available / Booked / Blocked with optional note
5. **Real-time Sync** — Every update instantly reflects on public calendar
6. **Enquiries Inbox** — Table of all form submissions with phone-click / WhatsApp / delete
7. **Quick Actions** — "Clear past dates" + Refresh data buttons
8. **Logout**

## Functional Entry URIs

### Public
| Route | Method | Description | Params |
|-------|--------|-------------|--------|
| `/` | GET | Main landing page | — |
| `/api/availability?month=YYYY-MM` | GET | Month availability status map | `month` (required, e.g. `2026-05`) |
| `/api/enquiries` | POST | Submit booking enquiry | JSON: `{name, phone, date, guests, message}` |

### Admin
| Route | Method | Description | Auth |
|-------|--------|-------------|------|
| `/admin` | GET | Admin login page / Dashboard (if logged in) | — |
| `/api/admin/login` | POST | Sign in | Public (body: `{username, password}`) |
| `/api/admin/logout` | POST | Sign out | — |
| `/api/admin/me` | GET | Check auth status | — |
| `/api/admin/dates` | GET | Get all booking dates + stats | Required |
| `/api/admin/dates` | POST | Set date status | Required (body: `{date, status, note}`) |
| `/api/admin/dates/past` | DELETE | Clear all past dates | Required |
| `/api/admin/enquiries` | GET | List all enquiries | Required |
| `/api/admin/enquiries/:id` | DELETE | Delete an enquiry | Required |

### Admin Credentials (Dev)
- **Username**: `admin`
- **Password**: `rajpalace2026`
- *(Override via `ADMIN_USERNAME` / `ADMIN_PASSWORD` env vars for production)*

## Data Architecture

### Data Models
**Date Booking (KV key: `date:YYYY-MM-DD`)**
```
value: "booked" | "blocked" | "booked|Patil wedding" | "blocked|Maintenance"
       (status[|optional_note])
```
*(Absence of key = Available)*

**Enquiry (KV key: `enquiry:{id}`)**
```json
{
  "id": "enq_1712345678_abc123",
  "name": "Patil Family",
  "phone": "9876543210",
  "date": "2026-05-15",
  "guests": "1000 – 2500",
  "message": "Daughter's wedding",
  "createdAt": "2026-04-24T10:00:00.000Z",
  "status": "new"
}
```

### Storage Services
- **Cloudflare KV Namespace** (`BOOKINGS_KV`) — Stores booking dates + enquiries
- **In-memory Fallback** — Auto-activates if KV binding unavailable (preview / edge cases)

### Data Flow
```
Visitor ──▶ /api/availability ──▶ KV (read) ──▶ Calendar UI
Visitor ──▶ /api/enquiries ──▶ KV (write: enquiry:*)
Admin ──▶ /api/admin/dates ──▶ KV (write: date:*) ──▶ Public calendar auto-refreshes on next load
```

## User Guide

### Visitor
1. Land on homepage, explore hero & venue highlights
2. Scroll to "Check Availability" — browse calendar, click a green date
3. Click "Select Date & Enquire" — fill form OR jump to WhatsApp
4. Alternative: Click sticky WhatsApp button anytime for instant chat

### Admin
1. Navigate to `/admin`
2. Sign in with `admin` / `rajpalace2026`
3. Click any date in the calendar → choose Available / Booked / Blocked
4. Optionally add a note (e.g., "Patil wedding")
5. View booking enquiries in the table below
6. Click phone/WhatsApp icons to contact enquirers directly

## Features Not Yet Implemented
- Email notifications on new enquiries (SendGrid / Resend integration)
- SMS notifications to admin on new enquiry
- Cloudflare Turnstile captcha on enquiry form
- Admin password change UI (currently env-var based)
- Date-range blocking (currently single-date only)
- Multi-admin support with individual logins
- Analytics dashboard (booking conversion funnel)
- Image optimization / WebP auto-conversion
- Production Cloudflare Pages deployment (ready, awaiting credentials)

## Recommended Next Steps
1. **Deploy to Cloudflare Pages** — Run `setup_cloudflare_api_key` then deploy
2. **Create production KV namespace** — `npx wrangler kv namespace create BOOKINGS_KV` and update `wrangler.jsonc`
3. **Secure admin password** — Use `npx wrangler pages secret put ADMIN_PASSWORD` for production
4. **Connect custom domain** — Point `rajpalace.com` to Cloudflare Pages
5. **Add Turnstile captcha** to prevent enquiry spam
6. **Add Plausible / Google Analytics** for conversion tracking
7. **Add email notifications** via Resend or SendGrid on new enquiry
8. **Optimize images to WebP** for faster mobile load

## Deployment
- **Platform**: Cloudflare Pages (edge-deployed Hono worker)
- **Status**: Local dev active via PM2 on port 3000
- **Tech Stack**:
  - **Backend**: Hono 4.12 + TypeScript + Cloudflare Workers runtime
  - **Frontend**: JSX SSR + Tailwind CSS (CDN) + Playfair Display / Inter / Cormorant Garamond
  - **Icons**: Font Awesome 6.4
  - **Storage**: Cloudflare KV (with in-memory fallback)
  - **Build**: Vite 6 + `@hono/vite-build/cloudflare-pages`
  - **Process Manager**: PM2 (development)
- **Last Updated**: 2026-04-24

## Local Development

```bash
# Install deps (already done)
cd /home/user/webapp && npm install

# Build
npm run build

# Start with PM2
pm2 start ecosystem.config.cjs

# Logs
pm2 logs raj-palace-lawns --nostream

# Stop
pm2 delete raj-palace-lawns

# Test
curl http://localhost:3000
curl "http://localhost:3000/api/availability?month=2026-05"
```

## Project Structure
```
webapp/
├── src/
│   ├── index.tsx           # Main Hono app with all routes & API
│   ├── renderer.tsx        # JSX renderer (head, fonts, SEO, Tailwind config)
│   └── pages/
│       ├── home.tsx        # Public landing page (13 sections)
│       └── admin.tsx       # Admin login + dashboard
├── public/static/
│   ├── style.css           # Luxury theme, animations, glassmorphism
│   ├── app.js              # Frontend (calendar, gallery, modal, toast)
│   ├── admin.js            # Login form handler
│   ├── admin-dashboard.js  # Admin calendar + enquiry management
│   ├── favicon.svg         # Gold crown on maroon favicon
│   └── images/             # 16 venue photos (facade, hall, lawn, mandap, etc.)
├── ecosystem.config.cjs    # PM2 config
├── wrangler.jsonc          # Cloudflare Pages config + vars
├── vite.config.ts          # Vite + Hono Cloudflare build
└── package.json
```
