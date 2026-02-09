/**
 * Layer 3: Authentication (JWT, cookies, brute-force).
 * Layer 4: Authorization – RBAC (USER | MODERATOR | ADMIN).
 *
 * Production: use JWT with RS256, verify with public key; store session in
 * HttpOnly, Secure, SameSite=Strict cookie. Brute-force: 5 attempts, 15min lockout.
 */
const ROLES = Object.freeze({ USER: 'USER', MODERATOR: 'MODERATOR', ADMIN: 'ADMIN' });

// In-memory brute-force store; use Redis in production
const loginAttempts = new Map();
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

export function getBruteForceMiddleware() {
  return (req, res, next) => {
    const key = req.body?.email || req.ip || 'unknown';
    const now = Date.now();
    let record = loginAttempts.get(key) || { count: 0, lockedUntil: 0 };
    if (record.lockedUntil > now) {
      return res.status(429).json({
        error: 'Too many login attempts',
        retryAfter: Math.ceil((record.lockedUntil - now) / 1000),
      });
    }
    if (record.lockedUntil > 0 && record.lockedUntil <= now) {
      record = { count: 0, lockedUntil: 0 };
    }
    req._bruteRecord = record;
    req._bruteKey = key;
    loginAttempts.set(key, record);
    next();
  };
}

export function recordFailedLogin(req) {
  const record = req._bruteRecord;
  const key = req._bruteKey;
  if (!record || !key) return;
  record.count += 1;
  if (record.count >= MAX_ATTEMPTS) {
    record.lockedUntil = Date.now() + LOCKOUT_MS;
    record.count = 0;
  }
  loginAttempts.set(key, record);
}

export function clearBruteForce(req) {
  if (req._bruteKey) loginAttempts.delete(req._bruteKey);
}

/**
 * Placeholder JWT auth – in production verify JWT with RS256 public key.
 * Expects: Authorization: Bearer <token> or cookie.
 */
export function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, '') || req.cookies?.session;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // TODO: verify JWT with public key (RS256), set req.user from payload
  try {
    req.user = { id: 'user-1', email: 'member@example.com', role: ROLES.USER };
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

/**
 * RBAC: require one of the given roles.
 */
export function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}

export { ROLES };
