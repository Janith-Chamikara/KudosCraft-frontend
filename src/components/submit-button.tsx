import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function SubmitButton({
  disabled,
  children,
}: {
  disabled: boolean;
  children: string;
}) {
  return (
    <Button
      type="submit"
      variant={'default'}
      className="group text-white flex px-7 py-3 w-max mx-auto items-center justify-center gap-2 transition-all "
      disabled={disabled}
    >
      {disabled ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-primary-foreground"></div>
      ) : (
        <>
          {children}{' '}
          <FaArrowRight className="text-xs opacity-70 transition-all group-hover:translate-x-1 " />{' '}
        </>
      )}
    </Button>
  );
}