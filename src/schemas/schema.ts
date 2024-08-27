import { z, ZodType } from 'zod';

export const loginSchema: ZodType = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password is too short' })
    .max(20, { message: 'Password is too long' }),
});
export const signUpSchema: ZodType = z.object({
  email: z.string().email(),
  fullName: z.string().min(3, { message: 'Please provide your name' }),
  password: z
    .string()
    .min(8, { message: 'Password is too short' })
    .max(20, { message: 'Password is too long' }),
});
