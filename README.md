# TaskFlow — Todo List Application

A simple, full-stack Todo List application built with React, Express, and Docker.

## Technologies

| Layer | Stack |
|---|---|
| Frontend | React 19, Vite, Axios, plain CSS |
| Backend | Node.js, Express.js, UUID |
| Storage | In-memory (no database required) |
| DevOps | Docker, Docker Compose |

## Project Structure

```
TaskFlow/
├── frontend/               # React + Vite app
│   ├── src/
│   │   ├── components/     # Header, TaskForm, TaskList, TaskItem, TaskStats
│   │   ├── services/       # taskService.js (Axios calls)
│   │   ├── styles/         # global.css, App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── Dockerfile
│   └── package.json
├── backend/                # Express REST API
│   ├── src/
│   │   ├── routes/         # taskRoutes.js
│   │   ├── controllers/    # taskController.js
│   │   ├── services/       # taskService.js (in-memory CRUD)
│   │   ├── app.js
│   │   └── server.js
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Quick Start (Docker)

```bash
# Clone and start
git clone <repo-url>
cd TaskFlow
docker compose up --build

# Open in browser
http://localhost:5173

# Stop
docker compose down
```

> No local Node.js installation required.

## Local Development (without Docker)

```bash
# Backend
cd backend && npm install && npm run dev

# Frontend (new terminal)
cd frontend && npm install && npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get one task |
| POST | /api/tasks | Create a task `{ title }` |
| PATCH | /api/tasks/:id | Update status `{ completed }` |
| DELETE | /api/tasks/:id | Delete a task |

## Environment Variables

**Backend** (`backend/.env.example`):
- `PORT` — server port (default: `3000`)
- `FRONTEND_URL` — allowed CORS origin (default: `http://localhost:5173`)

**Frontend** (`frontend/.env.example`):
- `VITE_API_URL` — backend URL used by Vite proxy (default: `http://localhost:3000`)
