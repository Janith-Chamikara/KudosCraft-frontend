'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { Icons } from '@/components/ui/icons';
import FormField from '@/components/FormField';
import { loginSchema } from '@/schemas/schema';
import SubmitButton from '@/components/submit-button';
import toast from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema), // Apply the zodResolver
  });
  const { data: session } = useSession();
  const router = useRouter();
  const onSubmit = async (data: FieldValues) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (!result?.ok) {
      toast.error('Invalid email or password');
      return;
    } else if (result?.ok) {
      toast.success('Login successful');
      if (session?.user.isInitialSetupCompleted) {
        router.push('/dashboard');
      } else {
        router.push('/account-setup');
      }
    }
  };
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center space-y-6 rounded-2xl bg-card p-8 shadow-xl sm:p-10">
        <h2 className="font-bold underline text-2xl">Log in</h2>
        <div className="grid w-full grid-cols-2 gap-4 ">
          <Button className="flex-1   ">
            <Icons.GithubIcon className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button className="flex-1">
            <Icons.ChromeIcon className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <form className="grid w-full gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <FormField
              type="email"
              placeholder="Email"
              name="email"
              register={register}
              error={errors.email}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <FormField
              type="password"
              placeholder="Password"
              name="password"
              register={register}
              error={errors.password}
            />
          </div>
          <SubmitButton disabled={isSubmitting}>Sign in</SubmitButton>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          Do not have an account?
          <Link
            href="/sign-up"
            className="font-semibold underline underline-offset-4"
            prefetch={false}
          >
            {' '}
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
