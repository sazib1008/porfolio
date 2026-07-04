# Portfolio — Vercel-Ready Full-Stack App

A premium interactive 3D portfolio built with **React + Vite** and deployed on **Vercel** with serverless API routes.

## Project Structure

```
portfolio/
├── api/                    # Vercel Serverless Functions
│   ├── data/
│   │   ├── projects.json   # Static project data
│   │   └── skills.json     # Static skills data
│   ├── lib/
│   │   ├── utils.js        # JSON helpers & CORS
│   │   └── contact.js      # Contact delivery (webhook/email)
│   ├── projects.js         # GET  /api/projects
│   ├── skills.js           # GET  /api/skills
│   └── contact.js          # POST /api/contact
│
├── frontend/               # React + Vite SPA
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/   # Page sections (Hero, Skills, Projects, Contact)
│   │   │   ├── three/      # React Three Fiber 3D scene
│   │   │   └── ui/         # Navbar
│   │   ├── lib/
│   │   │   └── api.js      # API URL helper (same-origin on Vercel)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── vercel.json             # Vercel build & SPA rewrites
├── package.json            # Root scripts
└── .env.example            # Environment variable template
```

## Quick Start (Local Development)

### 1. Install dependencies

```bash
# Root (Vercel CLI for local dev)
npm install

# Frontend
cd frontend && npm install
```

### 2. Copy environment variables

```bash
cp .env.example .env
```

### 3. Run full-stack locally (recommended)

```bash
npm run dev
# → Vercel dev server at http://localhost:3000
#   Serves Vite frontend + /api serverless routes on the same origin
```

### 4. Run frontend only (optional)

```bash
npm run dev:frontend
# → Vite at http://localhost:5173
# Set VITE_API_PROXY_TARGET=http://localhost:3000 in .env
# and run `vercel dev` in another terminal for API routes
```

## API Endpoints

| Method | Endpoint        | Description                     |
|--------|----------------|---------------------------------|
| GET    | /api/projects  | Returns all project cards       |
| GET    | /api/skills    | Returns categorized skill data  |
| POST   | /api/contact   | Accepts contact form submissions  |

## Deploy to Vercel

### Option A — GitHub Integration (recommended)

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects settings from `vercel.json`:
   - **Install Command:** `cd frontend && npm install`
   - **Build Command:** `cd frontend && npm run build`
   - **Output Directory:** `frontend/dist`
4. Add environment variables in the Vercel dashboard (see below).
5. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

## Environment Variables

Set these in the Vercel dashboard under **Project → Settings → Environment Variables**:

| Variable               | Required | Description |
|------------------------|----------|-------------|
| `CONTACT_WEBHOOK_URL`  | No       | Webhook URL for contact submissions (Discord, Zapier, etc.) |
| `RESEND_API_KEY`       | No       | [Resend](https://resend.com) API key for email delivery |
| `CONTACT_EMAIL`        | No       | Inbox for contact form emails (used with Resend) |
| `RESEND_FROM_EMAIL`    | No       | Sender address for Resend emails |

> **Note:** `VITE_*` variables are only needed for local development. In production, the frontend uses same-origin `/api` routes automatically.

## Tech Stack

| Layer      | Technology                    |
|------------|------------------------------|
| Frontend   | React 19, Vite 8, Tailwind 4 |
| 3D         | React Three Fiber, Drei      |
| API        | Vercel Serverless Functions  |
| Deployment | Vercel                       |
| Storage    | Bundled JSON (projects/skills) |

## Limitations

- **Contact form persistence:** Vercel serverless functions have an ephemeral filesystem. File-based `contacts.json` storage from the old Express backend is not supported. Configure `CONTACT_WEBHOOK_URL` or `RESEND_API_KEY` to receive submissions.
- **Cold starts:** Serverless functions may have a brief cold-start delay on first request.
- **Function timeout:** API routes are limited to 10 seconds (`vercel.json`).
