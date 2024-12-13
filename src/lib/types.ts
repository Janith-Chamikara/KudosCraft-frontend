import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form';

import { Icons } from '@/components/ui/icons';
import { z } from 'zod';
import {
  accountSetupSchema,
  loginSchema,
  signUpSchema,
} from '@/schemas/schema';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FieldValues>;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames =
  | 'email'
  | 'firstName'
  | 'lastName'
  | 'password'
  | 'confirmPassword';

export type Status = {
  status: 'default' | 'success' | 'error';
  message: string;
  data?: object;
};

export type SignUpInputs = z.infer<typeof signUpSchema>;
export type LoginInputs = z.infer<typeof loginSchema>;
export type AccountSetupFormInputs = z.infer<typeof accountSetupSchema>;

export type LoginResponse = {
  user: {
    id: number;
    email: string;
    bio: object;
    firstName: string;
    lastName: string;
    subscriptionPlan: string;
    role: string;
    isInitialSetupCompleted: boolean;
    createdAt: string;
    updatedAt: string;
  };
  tokenInfo: {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: number;
    refreshTokenExpiresIn: number;
  };
};
