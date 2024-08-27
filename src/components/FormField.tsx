import { Input } from '@/components/ui/input';
import { FormFieldProps } from '@/lib/types';

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <Input
      type={type}
      className={error && 'border border-red-500'}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && (
      <span className=" text-xs text-red-500">{error.message as string}</span>
    )}
  </>
);
export default FormField;
