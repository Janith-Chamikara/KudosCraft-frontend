import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/ui/icons';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background px-4 sm:h-16 sm:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Icons.FeatherIcon className="h-6 w-6 text-primary" />
          <span className="font-bold">KudosCraft</span>
        </Link>
        <nav className="hidden gap-4 sm:flex">
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary"
            prefetch={false}
          >
            Testimonials
          </Link>
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary"
            prefetch={false}
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary"
            prefetch={false}
          >
            Settings
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="sm:hidden">
            <Icons.MenuIcon className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Testimonials</h1>
          <div className="flex items-center gap-2">
            <Button size="sm">Add Testimonial</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Icons.FilterIcon className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  5 stars
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>4 stars</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>3 stars</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>2 stars</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>1 star</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="relative">
              <Icons.SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search testimonials..."
                className="w-full rounded-md bg-background pl-8 pr-4 border shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:w-[200px]"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-primary">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-bold">Sarah Johnson</h3>
                <div className="flex items-center gap-1 text-primary">
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The KudosCraft platform has been a game-changer for our\n
                business. The ease of collecting and managing testimonials\n has
                helped us build trust with our customers and showcase\n our
                expertise.
              </p>
            </CardContent>
            <CardFooter className="flex items-center justify-end gap-2">
              <Button variant="ghost" size="icon">
                <Icons.FilePenIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icons.TrashIcon className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-primary">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-bold">Alex Smith</h3>
                <div className="flex items-center gap-1 text-primary">
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                KudosCraft has made it so easy for us to collect and\n showcase
                customer testimonials. The platform is intuitive and\n the
                customer support has been fantastic.
              </p>
            </CardContent>
            <CardFooter className="flex items-center justify-end gap-2">
              <Button variant="ghost" size="icon">
                <Icons.FilePenIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icons.TrashIcon className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-primary">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-bold">Emily Parker</h3>
                <div className="flex items-center gap-1 text-primary">
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                  <Icons.StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                KudosCraft has been a valuable tool for our business. The\n
                ability to easily collect and display testimonials has\n helped
                us build trust with our customers and showcase our\n expertise.
              </p>
            </CardContent>
            <CardFooter className="flex items-center justify-end gap-2">
              <Button variant="ghost" size="icon">
                <Icons.FilePenIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icons.TrashIcon className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-primary">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-bold">Liam Johnson</h3>
                <div className="flex items-center gap-1 text-primary">
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                  <Icons.StarIcon className="h-4 w-4 fill-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                KudosCraft has been a game-changer for our business. The\n
                platform is easy to use and has helped us collect and\n showcase
                high-quality testimonials from our customers.
              </p>
            </CardContent>
            <CardFooter className="flex items-center justify-end gap-2">
              <Button variant="ghost" size="icon">
                <Icons.FilePenIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icons.TrashIcon className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
