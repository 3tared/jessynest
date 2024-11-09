'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Orders',
    href: '/dashboard/orders',
  },
  {
    name: 'Products',
    href: '/dashboard/products',
  },
  {
    name: 'Categories',
    href: '/dashboard/categories',
  },
];

const DashboardNav = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map(({ href, name }) => (
        <Link
          key={name}
          href={href}
          className={cn(
            href === pathname
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground duration-200'
          )}
        >
          {name}
        </Link>
      ))}
    </>
  );
};

export default DashboardNav;
