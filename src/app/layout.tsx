import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
