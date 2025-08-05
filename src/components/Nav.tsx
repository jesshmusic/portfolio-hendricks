'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="relative h-[100px] w-full overflow-hidden border-b border-[var(--border)] min-h-[100px]">
      <Image
        src="/header.jpg"
        alt="Header background"
        layout="fill"
        objectFit="cover"
        className="pointer-events-none select-none"
        priority
      />
      <div className="relative z-10 flex h-full w-full items-center justify-between px-6 bg-black/50 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-white drop-shadow-sm">
          The Portfolio of Jess Hendricks
        </h1>
        <nav className="flex gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'text-xl font-semibold tracking-wide transition-all duration-300 relative text-[var(--link)] group',
                pathname === href && 'text-[var(--link-hover)]'
              )}
            >
              <span className="relative inline-block px-1">
                {label}
                <span
                  className={clsx(
                    'absolute left-1/2 bottom-0 h-[2px] w-0 bg-[var(--link-hover)] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full',
                    pathname === href && 'w-full'
                  )}
                />
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
