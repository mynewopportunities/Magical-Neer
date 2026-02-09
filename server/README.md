# API Gateway (Magical Neer)

**Rate limit:** 100 requests / 15 minutes (all `/api` routes).

## Route map

| Group   | Method | Path                      | Auth   | Description        |
|---------|--------|---------------------------|--------|--------------------|
| PUBLIC  | GET    | /api/courses              | —      | Public course list  |
| PUBLIC  | GET    | /api/blog                 | —      | Blog listing       |
| PUBLIC  | GET    | /api/blog/:slug           | —      | Single post         |
| PUBLIC  | GET    | /api/testimonials         | —      | Testimonials        |
| PUBLIC  | POST   | /api/contact              | —      | Contact form        |
| PUBLIC  | POST   | /api/leads                | —      | Lead capture        |
| AUTH'D  | GET    | /api/me                   | Bearer | Current user        |
| AUTH'D  | POST   | /api/payments/orders      | Bearer | Create order        |
| AUTH'D  | GET    | /api/courses/enrolled     | Bearer | Enrolled courses    |
| AUTH'D  | POST   | /api/progress/track       | Bearer | Track progress      |
| AUTH'D  | GET    | /api/billing              | Bearer | Billing overview    |
| AUTH'D  | GET    | /api/billing/:id          | Bearer | Billing detail      |
| ADMIN   | GET    | /api/admin/users          | Admin  | User list           |
| ADMIN   | POST   | /api/admin/courses        | Admin  | Create course       |
| ADMIN   | PUT    | /api/admin/content/:type/:id | Admin | Update content  |
| ADMIN   | DELETE | /api/admin/:resource/:id | Admin  | Delete resource     |

## Run

- **Dev:** Start API only: `npm run dev:api` (port 3001). Start Vite: `npm run dev` (proxies `/api` to 3001).
- **Usage:** Open app at `http://localhost:5173`; frontend calls `/api/*` and Vite proxies to the gateway.
