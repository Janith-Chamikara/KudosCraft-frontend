'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  Users,
  Star,
  BarChart,
  Settings,
  PlusCircle,
  Search,
  ChevronDown,
  SmileIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Workspaces', href: '/workspaces' },
  { icon: Star, label: 'Testimonials', href: '/testimonials' },
  { icon: BarChart, label: 'Analytics', href: '/analytics' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen border-t bg-background max-w-[95%] mx-auto">
      {/* Sidebar */}
      <aside className="w-16 md:w-64 bg-card border-r flex flex-col">
        <div className="p-2 flex items-center justify-center md:justify-start">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full px-2 border justify-start"
              >
                <SmileIcon className="h-5 w-5" />
                <span className="hidden md:inline-block font-semibold  ml-3">
                  My Workspace
                </span>
                <span className="md:hidden">WS</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem>Personal Projects</DropdownMenuItem>
              <DropdownMenuItem>Team Alpha</DropdownMenuItem>
              <DropdownMenuItem>Client XYZ</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create New Workspace
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 p-2">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center p-2 rounded-lg hover:bg-accent"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="hidden md:inline-block ml-3">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex space-x-2">
              <Input placeholder="Search..." className="w-64" />
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Workspace
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Workspaces
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Testimonials
                </CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">284</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Rating
                </CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.7</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  This Month
                </CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+28%</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Star className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">New testimonial received</p>
                  <p className="text-sm text-muted-foreground">
                    John Smith left a 5-star review
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">New workspace created</p>
                  <p className="text-sm text-muted-foreground">
                    Marketing team added a new workspace
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <BarChart className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Analytics report ready</p>
                  <p className="text-sm text-muted-foreground">
                    Monthly performance report is available
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
