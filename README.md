# URL Shortener

A full-stack URL shortening application built with **Laravel 12** (backend API) and **Next.js 16** (frontend). Create short, shareable links with automatic click tracking.

![Laravel](https://img.shields.io/badge/Laravel-12-F9322C?logo=laravel)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![PHP](https://img.shields.io/badge/PHP-^8.2-777BB4?logo=php)

---

## Features

- **URL Shortening** — Paste a long URL and get a 6-character short code instantly
- **Click Tracking** — Each short link tracks how many times it's been visited
- **Copy to Clipboard** — One-click copy of shortened URLs
- **Link Management** — View all your links, see click counts, and delete unwanted ones
- **Automatic Redirects** — Visiting a short code redirects (302) to the original URL
- **Dark Theme UI** — Modern dark-themed interface built with Tailwind CSS 4

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4 |
| **Backend** | Laravel 12, PHP ^8.2, Laravel Sanctum |
| **Database** | MySQL / SQLite (configurable) |
| **API** | RESTful JSON API |

## Project Structure

```
url-shortener/
├── frontend/                  # Next.js 16 application
│   ├── src/app/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── CreateLinkForm.tsx
│   │   │   ├── LinkCard.tsx
│   │   │   └── LinkList.tsx
│   │   ├── lib/api.ts         # API client
│   │   ├── types/index.ts     # TypeScript interfaces
│   │   ├── links/page.tsx     # Link management page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── package.json
│   └── tsconfig.json
│
├── backend/                   # Laravel 12 API
│   ├── app/
│   │   ├── Http/Controllers/
│   │   │   └── LinkController.php
│   │   └── Models/
│   │       └── Link.php
│   ├── database/migrations/   # Database migrations
│   ├── routes/
│   │   ├── api.php            # API routes
│   │   └── web.php            # Web routes (redirect handler)
│   ├── composer.json
│   └── .env.example
│
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/links` | List all shortened links |
| POST | `/api/links` | Create a new short link |
| GET | `/api/links/{id}` | Get a single link |
| DELETE | `/api/links/{id}` | Delete a link |
| GET | `/{short_code}` | Redirect to original URL |

## Setup Instructions

### Prerequisites

- PHP ^8.2, Composer
- Node.js 18+, npm
- MySQL (or use SQLite for development)

### 1. Backend Setup

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

Configure your database in `.env`:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=url_shortener
DB_USERNAME=root
DB_PASSWORD=
```

Then run migrations and start the server:

```bash
php artisan migrate
php artisan serve
```

The API will be available at `http://localhost:8000`.

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The UI will be available at `http://localhost:3000`.

### 3. Environment Variables (Frontend)

Create a `.env.local` file in the `frontend/` directory:

```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SHORT_BASE=http://localhost:8000
```

## Database Schema

```sql
links
├── id                BIGINT PRIMARY KEY AUTO_INCREMENT
├── original_url      VARCHAR(255)     -- The original long URL
├── short_code        VARCHAR(6)       -- 6-character unique code
├── clicks            INTEGER (0)      -- Click counter
├── created_at        TIMESTAMP
└── updated_at        TIMESTAMP
```

## Development

Run backend and frontend simultaneously:

```bash
# Terminal 1 - Backend
cd backend && php artisan serve

# Terminal 2 - Frontend
cd frontend && npm run dev
```

Or use Laravel's dev script (requires npm dependencies installed in backend):

```bash
cd backend && composer dev
```

## License

MIT

<!-- [2024-05-28] feat: setup URL shortening API endpoints and database schema -->

<!-- [2024-05-28] feat: build URL input form and redirect handler -->
