# Portfolio — Root

This is a full-stack portfolio project. It uses a **monorepo-style** structure with two independent apps:

```
portfolio/
├── backend/        # Node.js + Express REST API
│   ├── data/       # JSON seed & contact files
│   │   ├── projects.json
│   │   ├── skills.json
│   │   └── contacts.json   (auto-created on first form submit)
│   ├── server.js   # Express server entry
│   ├── .env        # PORT=5001
│   └── package.json
│
└── frontend/       # React + Vite SPA
    ├── src/
    │   ├── components/
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Skills.jsx
    │   │   ├── Projects.jsx
    │   │   └── Contact.jsx
    │   ├── App.jsx
    │   ├── index.css   # Design system & global styles
    │   └── main.jsx
    ├── index.html
    ├── .env        # VITE_API_BASE_URL=http://localhost:5001
    └── package.json
```

## Quick Start

### 1. Start the backend

```bash
cd backend
npm install
npm start
# → Running on http://localhost:5001
```

### 2. Start the frontend

```bash
cd frontend
npm install
npm run dev
# → Running on http://localhost:5173
```

### API Endpoints

| Method | Endpoint        | Description                     |
|--------|----------------|---------------------------------|
| GET    | /api/projects  | Returns all project cards       |
| GET    | /api/skills    | Returns categorized skill data  |
| POST   | /api/contact   | Saves a new contact submission  |

## Tech Stack

| Layer      | Technology              |
|------------|------------------------|
| Frontend   | React 19, Vite 8       |
| Styling    | Vanilla CSS (custom)   |
| Backend    | Node.js, Express 4     |
| Icons      | lucide-react           |
| HTTP Client| axios                  |
| Storage    | JSON flat-file (data/) |
