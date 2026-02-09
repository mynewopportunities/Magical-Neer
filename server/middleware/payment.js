/**
 * Layer 6: Payment security – Razorpay webhook verification, idempotency.
 * PCI DSS: no card data stored; Razorpay handles payments.
 */
import crypto from 'crypto';

const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || '';

export function verifyRazorpayWebhook(req, res, next) {
  const signature = req.headers['x-razorpay-signature'];
  const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
  if (!RAZORPAY_WEBHOOK_SECRET || !signature) {
    return res.status(400).json({ error: 'Missing webhook secret or signature' });
  }
  const expected = crypto.createHmac('sha256', RAZORPAY_WEBHOOK_SECRET).update(body).digest('hex');
  if (signature !== expected) {
    return res.status(401).json({ error: 'Invalid webhook signature' });
  }
  next();
}

// In-memory idempotency store; use Redis/DB in production
const idempotencyStore = new Map();
const IDEM_TTL_MS = 24 * 60 * 60 * 1000;

export function idempotencyMiddleware(req, res, next) {
  const key = req.headers['x-idempotency-key'];
  if (!key) return next();
  const existing = idempotencyStore.get(key);
  if (existing) {
    if (existing.expires < Date.now()) {
      idempotencyStore.delete(key);
      return next();
    }
    return res.status(409).json({
      error: 'Duplicate request',
      message: 'Use a unique idempotency key or retry after 24h',
    });
  }
  idempotencyStore.set(key, { expires: Date.now() + IDEM_TTL_MS });
  next();
}
