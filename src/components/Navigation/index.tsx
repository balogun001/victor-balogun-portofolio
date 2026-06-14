import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

const NAV_ITEMS = [
  { href: '/about', index: '01', label: 'About me' },
  { href: '/resume', index: '02', label: 'Resume' },
  { href: '/projects', index: '03', label: 'Projects' },
  { href: '/contact', index: '04', label: 'Hire me' },
];

type NavigationItemProps = LinkProps & {
  children: ReactNode;
  index: string;
};

function NavigationItem({ children, index, ...rest }: NavigationItemProps) {
  return (
    <Link
      {...rest}
      className="group relative flex flex-col justify-end border-b border-white/10 px-8 py-10
                 transition-colors duration-200
                 odd:border-r odd:border-white/10 hover:bg-white/5
                 sm:px-10 sm:py-12">
      <span className="mb-2 text-xs uppercase tracking-widest text-[#696969]">
        {index}
      </span>
      <span className="text-4xl font-medium tracking-tight text-[#F1F1F1] sm:text-5xl">
        {children}
      </span>
      <span
        className="absolute bottom-8 right-8 translate-x-[-4px] text-[#696969]
                       opacity-0 transition-all duration-200
                       group-hover:translate-x-0 group-hover:opacity-100">
        →
      </span>
    </Link>
  );
}

type NavigationProps = {
  onNavigationItemClick: () => void;
};

const Navigation = ({ onNavigationItemClick }: NavigationProps) => {
  return (
    <nav className="grid grid-cols-2">
      {NAV_ITEMS.map(({ href, label, index }) => (
        <NavigationItem
          href={href}
          index={index}
          key={href}
          onClick={onNavigationItemClick}>
          {label}
        </NavigationItem>
      ))}
    </nav>
  );
};

export default Navigation;
