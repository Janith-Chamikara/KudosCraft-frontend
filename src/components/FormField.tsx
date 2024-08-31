import { Input } from '@/components/ui/input';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  Path,
  UseFormRegister,
} from 'react-hook-form';

type InputFieldProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

export default function FormField<T extends FieldValues>({
  type,
  placeholder,
  name,
  register,
  error,
}: InputFieldProps<T>) {
  return (
    <>
      <Input
        type={type}
        className={error && 'border border-red-500'}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && (
        <span className=" text-xs text-red-500">{error.message as string}</span>
      )}
    </>
  );
}
