# Security Architecture – Magical Neer (6 Layers)

This doc maps the six security layers to the **Vite + React + Express** stack. (The diagram referenced Next.js; equivalents for this stack are below.)

---

## Layer 1: Edge Security (Cloudflare)

**Implemented at infrastructure / DNS – not in repo.**

| Control | Description |
|--------|-------------|
| DDoS protection | Network Layer 3/4 – Cloudflare proxy |
| WAF rules | SQL injection, XSS, bot management – Cloudflare WAF |
| Rate limiting | 100 req/15 min per IP – Cloudflare + app-side backup in Express |
| IP reputation | Filtering at edge – Cloudflare |
| SSL/TLS | TLS 1.3, HSTS – Cloudflare + `helmet.hsts()` in app |

**App-side backup:** `server/index.js` uses `express-rate-limit` (100/15min) on `/api`.

---

## Layer 2: Application Security (Vite + Express)

| Control | Implementation |
|--------|----------------|
| **Input validation** | Zod schemas in `server/schemas/index.js`; `validateBody()` / `validateParams()` in `server/middleware/validation.js`. Applied to `/api/contact`, `/api/leads`, `/api/progress/track`, `/api/payments/orders`, and param routes. |
| **Output encoding / XSS** | React escapes by default. Avoid `dangerouslySetInnerHTML` for user content. |
| **CSRF** | Use double-submit cookie or SameSite=Strict + same-origin API. For state-changing POSTs from same-origin SPA, SameSite + CORS is typically sufficient. Add CSRF tokens if you add cookie-based auth and cross-site forms. |
| **CORS** | Strict origin whitelist in `server/middleware/security.js` via `cors()` – set `CORS_ORIGINS` env. |
| **Security headers** | `server/middleware/security.js`: Helmet with CSP, X-Frame-Options, HSTS, X-Content-Type-Options, Referrer-Policy. |

---

## Layer 3: Authentication

| Control | Implementation |
|--------|----------------|
| **JWT (RS256)** | Placeholder in `server/middleware/auth.js`. Production: issue JWT with RS256, verify with public key; store in HttpOnly, Secure, SameSite=Strict cookie or send in Authorization header. |
| **Cookies** | Use HttpOnly, Secure, SameSite=Strict for session/JWT cookie. |
| **Session rotation** | On privilege change or password change, invalidate/rotate token. |
| **Brute-force** | `getBruteForceMiddleware()`, `recordFailedLogin()`, `clearBruteForce()` in `server/middleware/auth.js` – 5 attempts, 15 min lockout (in-memory; use Redis in production). |
| **OAuth 2.0 / OIDC** | Add Google (and optional Facebook) via Passport.js or similar; keep JWT/session as above. |

---

## Layer 4: Authorization (RBAC)

| Control | Implementation |
|--------|----------------|
| **Roles** | `USER` \| `MODERATOR` \| `ADMIN` in `server/middleware/auth.js` (`ROLES`). |
| **Resource-level** | Extend `requireRole()` or add helpers that check `req.user` vs resource owner. |
| **API middleware** | `requireAuth` + `requireRole(ROLES.ADMIN)` on admin routes; `requireAuth` only on user routes. |
| **Database RLS** | When you add a DB (e.g. Postgres), add RLS policies so backend enforces per-row access. |

---

## Layer 5: Data Security

**Largely infrastructure and ops – not in app code.**

| Control | Notes |
|--------|--------|
| Encryption at rest | DB (e.g. RDS / Supabase) – AES-256. |
| Field-level PII | Encrypt email, phone in DB; decrypt in app when needed. |
| Key management | Use AWS Secrets Manager / Vault; never commit secrets. |
| Backups | Daily, encrypted, 30-day retention – DB/backup provider. |

**In repo:** Use env vars (e.g. `process.env.RAZORPAY_WEBHOOK_SECRET`) and avoid committing `.env`.

---

## Layer 6: Payment Security (Razorpay)

| Control | Implementation |
|--------|----------------|
| **PCI DSS** | No card data stored; Razorpay handles. |
| **Webhook signature** | `server/middleware/payment.js` – `verifyRazorpayWebhook()` (HMAC SHA-256). Set `RAZORPAY_WEBHOOK_SECRET`. |
| **Idempotency** | `idempotencyMiddleware()` on `POST /api/payments/orders`; client sends `X-Idempotency-Key` (UUID). |
| **Fraud** | Rely on Razorpay + optional Razorpay fraud rules. |

---

## Env / Checklist

- `CORS_ORIGINS` – comma-separated allowed origins.
- `RAZORPAY_WEBHOOK_SECRET` – for webhook verification.
- JWT public key (or secret) for auth – from Secrets Manager / env.
- In production: replace in-memory rate limit and idempotency stores with Redis (or DB).
