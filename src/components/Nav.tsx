'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-[var(--border)] bg-black">
      {/* Background image with controlled layering */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/header.jpg"
          alt="Header background"
          fill
          className="object-cover pointer-events-none select-none"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Nav bar wrapper */}
      <div className="relative flex items-center justify-between px-6 h-[100px]">
        <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-sm">
          The Portfolio of Jess Hendricks
        </h1>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'text-base md:text-lg font-semibold tracking-wide transition-all duration-300 relative text-[var(--link)] group',
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

        {/* Mobile toggle icon */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile dropdown wrapper */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out',
          menuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="bg-black/90 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                'text-lg font-medium text-[var(--link)] transition-colors duration-300 group',
                pathname === href && 'text-[var(--link-hover)]'
              )}
            >
              <span className="relative inline-block">
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
        </div>
      </div>
    </header>
  );
}
