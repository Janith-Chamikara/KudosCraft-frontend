import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center h-8">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Collect, curate, and showcase testimonials that drive trust and
              boost conversions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Support
                </Link>
              </li>
              <li>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 KudosCraft. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
