"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from 'app/assets/logo.svg';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { path: '/', name: 'home' },
    { path: '/profile', name: 'profile' },
    { path: '/projects', name: 'projects' },
    // { path: '/posts', name: 'posts' }
  ];

  return (
    <header className="flex items-center justify-between mb-16 tracking-tight">
      <div className="flex items-center">
        <div className="logo-wrapper">
          <Image src={logo} alt="Logo" width={100} height={60} />
        </div>
      </div>
      <nav
        className="flex flex-row items-center relative fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <div className="flex flex-row space-x-4">
          {navItems.map(({ path, name }) => {
            const isActive = pathname === path || pathname.startsWith(`${path}/`);

            return (
              <Link
                key={path}
                href={path}
                className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${
                  isActive ? 'font-bold' : ''
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
