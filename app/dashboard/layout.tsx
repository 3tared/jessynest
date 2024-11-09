import DashboardNav from '@/components/dashboard/DashboardNav';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { MenuIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import Image from 'next/image';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect('/');
  }
  return (
    <div className="flex max-w-7xl mx-auto w-full flex-col px-4 sm:px-6 lg:px-8">
      <header className="sticky top-0 flex items-center justify-between gap-4 h-16 border-b bg-white">
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <DashboardNav />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="shrink-0 md:hidden"
              size={'icon'}
              variant={'outline'}
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <nav className="flex flex-col gap-6 mt-5 text-lg font-medium">
              <DashboardNav />
            </nav>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={'secondary'}
              size={'icon'}
              className="rounded-full focus-visible:ring-0"
              style={{ '--tw-ring-shadow': 'none' } as React.CSSProperties}
            >
              <Image
                src={`${user.picture}`}
                alt={`${user.given_name}`}
                width={40}
                height={40}
                className="rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <LogoutLink>Logout</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="my-5">{children}</main>
    </div>
  );
}
