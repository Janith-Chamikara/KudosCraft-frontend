import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';
import { Icons } from '@/components/ui/icons';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Client Feedback',
    href: '/docs/primitives/alert-dialog',
    description:
      'Read what our clients have to say about their experience with KudosCraft',
  },
  {
    title: 'Contact us',
    href: '/docs/primitives/hover-card',
    description: 'Have questions or need assistance? Reach out to us',
  },
  {
    title: 'About the creater',
    href: '/docs/primitives/progress',
    description: 'Explore about the production team',
  },
];

const Navigation = () => {
  return (
    <nav className="relative z-50 text-[var(--text-3)] ">
      <NavigationMenu className="max-h-[80px]">
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <Link href="/docs" legacyBehavior passHref>
              <Icons.logo />
            </Link>
          </NavigationMenuItem>

          <div className="hidden md:display:block">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Getting started
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[var(--bgColor)] text-[var(--text-1)]">
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#020617cc]/50 to-[#050e35] p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          KudosCraft
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Collect client reviews, seamlessly manage
                          testimonials, and easily embed them in various styles
                          on your site.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs/installation" title="How it works">
                    Discover how KudosCraft simplifies testimonial management
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Plans & Pricing"
                  >
                    Choose the subscription plan that best fits your
                    requirements and budget
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent opacity-0.5">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[var(--bgColor)] text-[var(--text-1)]">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-transparent`}
                >
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default Navigation;
