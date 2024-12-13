'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Logo from './Logo';
import { signOut, useSession } from 'next-auth/react';
import { refreshAccessToken } from '@/lib/actions';
import toast from 'react-hot-toast';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  //   { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'About', href: '/#howItWorks' },
  { label: 'FAQ', href: '/#FAQs' },
  { label: 'Contact', href: '/#footer' },
  { label: 'Dashboard', href: '/dashboard' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  console.log(session);
  const refresh = async () => {
    if (!session?.tokenInfo?.refreshToken) {
      toast.error('Try login again first');
      return;
    } else {
      const response = await refreshAccessToken(
        session?.tokenInfo?.refreshToken,
      );
      console.log(response);
    }
  };

  const handleLogOut = async () => {
    const response = await signOut({ callbackUrl: '/sign-in' });
    console.log(response);
  };

  return (
    <nav className="bg-background shadow-md">
      <div className="max-w-[95%] mx-auto px-4 ">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Logo />
          </Link>

          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground focus:text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt={session.user.firstName} />
                      <AvatarFallback>
                        {session.user.firstName.charAt(0) +
                          session.user.lastName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {`${session.user.firstName} ${session.user.lastName}`}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session.user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogOut}>
                    Log out
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={refresh}>Refresh</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link href={'/sign-in'}> Sign In</Link>
              </Button>
            )}
            <div className="flex md:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
