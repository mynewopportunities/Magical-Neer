/**
 * Layer 2: Input validation middleware – validates req.body or req.params with Zod.
 * Returns 400 with validation errors if invalid.
 */
import { z } from 'zod';

export function validateBody(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: result.error.flatten().fieldErrors,
      });
    }
    req.validated = result.data;
    next();
  };
}

export function validateParams(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.params);
    if (!result.success) {
      return res.status(400).json({
        error: 'Invalid parameters',
        details: result.error.flatten().fieldErrors,
      });
    }
    req.validatedParams = result.data;
    next();
  };
}
