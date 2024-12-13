'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import FormField from '@/components/FormField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signUpSchema } from '@/schemas/schema';
import { signUpAction } from '@/lib/actions';
import toast from 'react-hot-toast';
import SubmitButton from '@/components/submit-button';
import { SignUpInputs } from '@/lib/types';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<SignUpInputs>({
    resolver: zodResolver(signUpSchema),
  });
  console.log(errors);
  const onSubmit = async (data: SignUpInputs) => {
    const response = await signUpAction(data);
    if (response) {
      if (response.status === 'success') {
        toast.success(response.message);
        await signIn('credentials', {
          redirect: false,
          email: data.email,
          password: data.password,
        });
        if (session?.user.isInitialSetupCompleted) {
          router.push('/dashboard');
        } else {
          router.push('/account-setup');
        }
      } else {
        toast.error(response.message);
      }
    }
  };
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center space-y-6 rounded-2xl bg-card p-8 shadow-xl sm:p-10">
        <h2 className="font-bold underline text-2xl">Sign up</h2>
        <div className="grid w-full grid-cols-2 gap-4 ">
          <Button className="flex-1">
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
        <form className="grid w-full gap-4 " onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <FormField
              type="firstName"
              placeholder="First name"
              name="firstName"
              register={register}
              error={errors.firstName}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <FormField
              type="lastName"
              placeholder="Last name"
              name="lastName"
              register={register}
              error={errors.lastName}
            />
          </div>

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
          <div className="grid gap-2">
            <Label htmlFor="password">Confirm password</Label>
            <FormField
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword}
            />
          </div>
          <SubmitButton disabled={isSubmitting}>Sign up</SubmitButton>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link
            href="/sign-in"
            className="font-semibold underline underline-offset-4"
            prefetch={false}
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
