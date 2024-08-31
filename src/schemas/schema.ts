import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password is too short' })
    .max(20, { message: 'Password is too long' }),
});

export const signUpSchema = z
  .object({
    email: z.string().email(),
    firstName: z.string().min(3, { message: 'Please provide your first name' }),
    lastName: z.string().optional(),
    password: z
      .string()
      .min(8, { message: 'Password is too short' })
      .max(20, { message: 'Password is too long' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password is too short' })
      .max(20, { message: 'Password is too long' }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: 'Passwords must match!',
      path: ['confirmPassword'],
    },
  );

export const accountSetupSchema = z.object({
  usage: z.string().optional(),
  jobField: z.string().optional(),
  companyName: z.string().optional(),
  industryType: z.string().optional(),
  numberOfEmployees: z.string().optional(),
  workspace: z.object({
    name: z.string().min(1, 'Provide a name for this workspace'),
    description: z.string().optional(),
  }),
});
