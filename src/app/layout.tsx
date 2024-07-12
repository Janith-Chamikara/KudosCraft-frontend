import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import React from 'react';
const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'KudosCraft',
  description:
    'Streamline your testimonial management with KudosCraft. Collect, organize, and showcase customer feedback effortlessly. Embed testimonials in multiple styles on your website and marketing materials. Transition from hardcoding to a seamless, centralized testimonial hub.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('antialiased', fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
}
