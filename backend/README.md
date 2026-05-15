# Dream Public School — Backend API

Node.js + Express + MongoDB (Mongoose) + JWT + Multer.

> **Heads-up:** This Express server cannot run inside Lovable's preview sandbox (Lovable hosts on Cloudflare Workers, not Node). Run it locally or deploy it separately to Render / Railway / Fly. The Lovable frontend will still work — it falls back to static content when the API is unreachable.

## Setup

```bash
cd backend
cp .env.example .env       # then fill in values
npm install
npm run seed               # creates default admin + sample data
npm run dev                # starts on http://localhost:5000
```

## Environment

See `.env.example`. Required: `MONGO_URI`, `JWT_SECRET`. Optional: SMTP settings for email notifications.

## API surface

Public:
- `GET  /api/health`
- `GET  /api/home`
- `GET  /api/teachers` `GET /api/teachers/:id`
- `GET  /api/events`
- `GET  /api/notices`
- `GET  /api/gallery`
- `GET  /api/testimonials`
- `GET  /api/achievements`
- `GET  /api/faqs`
- `POST /api/inquiries`     — admission inquiry form
- `POST /api/contact`       — contact form

Auth:
- `POST /api/auth/login`    → `{ token, user }`
- `GET  /api/auth/me`       (Bearer token)
- `POST /api/auth/logout`

Protected (Bearer JWT, role: admin/editor/superadmin):
- `POST/PUT/DELETE` on every resource above
- `GET  /api/inquiries`, `/api/contact` (admin-only read)
- `PUT  /api/home`
- `POST /api/upload/image`  (multipart, field name `image`)

Default admin (after `npm run seed`): credentials from `.env`.

## Folder structure

```
backend/
  server.js
  src/
    config/db.js
    middleware/{auth,error,upload}.js
    models/*.js              # Mongoose models (MVC: Model)
    controllers/*.js         # MVC: Controller
    routes/*.js              # MVC: Route → Controller
    utils/{token,mailer,seed}.js
  uploads/                   # served at /uploads/<filename>
```

## Frontend wiring

Set in your **frontend** environment:

```
VITE_API_URL=http://localhost:5000/api
```

(Without it, the frontend falls back to baked-in static demo content.)

## Deployment

- **MongoDB Atlas:** create a cluster, whitelist `0.0.0.0/0` (or your host IPs), copy connection string into `MONGO_URI`.
- **Render / Railway:** create a Web Service from this `backend/` directory. Build command `npm install`, start command `npm start`. Add all env vars from `.env.example`.
- **Frontend (Vercel):** deploy the root project. Add env var `VITE_API_URL=https://your-api-host/api`.

## Security notes

- `helmet`, `cors` (origin allowlist), `express-rate-limit` enabled.
- Passwords hashed with bcrypt (cost 12). JWT signed with `JWT_SECRET`.
- Role-based middleware guards write endpoints.
- Multer restricts uploads to images and a configurable size cap.
