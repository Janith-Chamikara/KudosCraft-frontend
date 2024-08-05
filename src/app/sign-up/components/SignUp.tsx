import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons';

export default function SignUp() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center space-y-6 rounded-2xl bg-card p-8 shadow-xl sm:p-10">
        <div className="grid w-full grid-cols-2 gap-4 ">
          <Button variant="outline" className="flex-1">
            <Icons.GithubIcon className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" className="flex-1">
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
        <div className="grid w-full gap-4 ">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link
            href="#"
            className="font-medium underline underline-offset-4"
            prefetch={false}
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
