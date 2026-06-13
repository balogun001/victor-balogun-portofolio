import { ReactNode } from 'react';
import Link from 'next/link';

import { Container } from '@/components/Container';

type NavLinkProps = { href: string; children: ReactNode };

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link className="transition hover:text-white " href={href}>
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container className="!px-0">
        <div className="border-t border-muted pb-16 pt-10 ">
          <Container>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-muted">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                <NavLink href="/resume">Resume</NavLink>
              </div>
              <p className="text-sm text-gray-400 ">
                &copy; {new Date().getFullYear()} Balogun Victor. All rights
                reserved.
              </p>
            </div>
          </Container>
        </div>
      </Container>
    </footer>
  );
}
