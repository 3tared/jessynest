import Link from 'next/link';

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
  return (
    <>
      {links.map(({ href, name }) => (
        <Link key={name} href={href}>
          {name}
        </Link>
      ))}
    </>
  );
};

export default DashboardNav;
