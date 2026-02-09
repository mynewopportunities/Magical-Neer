/**
 * Layer 2: Input validation – Zod schemas for all API inputs.
 * Use validateBody(schema) middleware to enforce on routes.
 */
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name required').max(200),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  message: z.string().min(1, 'Message required').max(5000),
});

export const leadsSchema = z.object({
  email: z.string().email(),
  source: z.string().max(100).optional(),
});

export const progressTrackSchema = z.object({
  courseId: z.string().min(1),
  lessonId: z.string().min(1),
  progress: z.number().min(0).max(100).optional(),
  completed: z.boolean().optional(),
});

export const createOrderSchema = z.object({
  amount: z.number().positive(),
  currency: z.string().length(3).default('INR'),
  receipt: z.string().max(50).optional(),
  idempotencyKey: z.string().uuid().optional(),
});

export const blogSlugSchema = z.object({ slug: z.string().min(1).max(200) });
export const billingIdSchema = z.object({ id: z.string().min(1) });
