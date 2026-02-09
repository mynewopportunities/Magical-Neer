/**
 * API Gateway – Magical Neer
 * 6-layer security: Edge (Cloudflare) → App (validation, CORS, headers) → Auth → RBAC → Data → Payment
 * Rate limit: 100 req / 15 min per IP
 */
import express from 'express';
import rateLimit from 'express-rate-limit';
import { securityHeaders, corsConfig } from './middleware/security.js';
import { validateBody, validateParams } from './middleware/validation.js';
import {
  requireAuth,
  requireRole,
  getBruteForceMiddleware,
  ROLES,
} from './middleware/auth.js';
import { verifyRazorpayWebhook, idempotencyMiddleware } from './middleware/payment.js';
import {
  contactSchema,
  leadsSchema,
  progressTrackSchema,
  createOrderSchema,
  blogSlugSchema,
  billingIdSchema,
} from './schemas/index.js';

const app = express();
const PORT = process.env.API_PORT || 3001;

// ─── Layer 2: Application security (before parsing body for CORS preflight) ─
app.use(securityHeaders());
app.use(corsConfig());

// Razorpay webhook must get raw body for signature verification (before json parser)
app.post(
  '/api/webhooks/razorpay',
  express.raw({ type: 'application/json' }),
  verifyRazorpayWebhook,
  (req, res) => {
    const payload = JSON.parse(req.body.toString());
    res.status(200).json({ received: true });
  }
);

app.use(express.json());

// ─── API GATEWAY: Rate limit 100 req / 15 min (Layer 1 app-side backup; Cloudflare primary) ─
const gatewayLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests. Try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', gatewayLimiter);

// ─── PUBLIC ROUTES (Layer 2: Zod validation on inputs) ──────────────────────
app.get('/api/courses', (req, res) => {
  res.json({ data: [], message: 'Public course list' });
});

app.get('/api/blog', (req, res) => {
  res.json({ data: [], message: 'Blog listing' });
});

app.get('/api/blog/:slug', validateParams(blogSlugSchema), (req, res) => {
  res.json({ data: { slug: req.validatedParams.slug }, message: 'Blog post' });
});

app.get('/api/testimonials', (req, res) => {
  res.json({ data: [], message: 'Public testimonials' });
});

app.post('/api/contact', validateBody(contactSchema), (req, res) => {
  const { name, email, message } = req.validated;
  res.status(201).json({ success: true, message: 'Contact form received' });
});

app.post('/api/leads', validateBody(leadsSchema), (req, res) => {
  const { email, source } = req.validated;
  res.status(201).json({ success: true, message: 'Lead captured' });
});

// ─── AUTH'D ROUTES (Layer 3 Auth + Layer 4 RBAC: USER) ───────────────────────
app.get('/api/me', requireAuth, (req, res) => {
  res.json({ data: req.user });
});

// Layer 6: Idempotency on payment creation
app.post(
  '/api/payments/orders',
  requireAuth,
  idempotencyMiddleware,
  validateBody(createOrderSchema),
  (req, res) => {
    res.status(201).json({ success: true, data: { orderId: 'ord_placeholder' } });
  }
);

app.get('/api/courses/enrolled', requireAuth, (req, res) => {
  res.json({ data: [] });
});

app.post(
  '/api/progress/track',
  requireAuth,
  validateBody(progressTrackSchema),
  (req, res) => {
    const { courseId, lessonId, progress, completed } = req.validated;
    res.status(201).json({ success: true });
  }
);

app.get('/api/billing', requireAuth, (req, res) => {
  res.json({ data: { subscription: null, history: [] } });
});

app.get('/api/billing/:id', requireAuth, validateParams(billingIdSchema), (req, res) => {
  res.json({ data: { id: req.validatedParams.id } });
});

// ─── ADMIN ROUTES (Layer 4: RBAC ADMIN) ────────────────────────────────────
const requireAdmin = requireRole(ROLES.ADMIN);

app.get('/api/admin/users', requireAuth, requireAdmin, (req, res) => {
  res.json({ data: [] });
});

app.post('/api/admin/courses', requireAuth, requireAdmin, (req, res) => {
  res.status(201).json({ success: true, data: { id: 'course_placeholder' } });
});

app.put(
  '/api/admin/content/:type/:id',
  requireAuth,
  requireAdmin,
  (req, res) => {
    res.json({ success: true, data: { type: req.params.type, id: req.params.id } });
  }
);

app.delete(
  '/api/admin/:resource/:id',
  requireAuth,
  requireAdmin,
  (req, res) => {
    res.json({ success: true, deleted: req.params.id });
  }
);

// Health
app.get('/api/health', (req, res) => {
  res.json({ ok: true, gateway: 'Magical Neer API' });
});

// 404 for /api/*
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`API Gateway at http://localhost:${PORT} (rate limit: 100 req/15min)`);
});
