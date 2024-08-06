import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form';

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
