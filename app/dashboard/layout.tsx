import DashboardNav from '@/components/dashboard/DashboardNav';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
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
          <SheetContent side={'left'} className="">
            <h1>Hello</h1>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
