'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="p-4 flex gap-6 text-sm font-medium text-[var(--foreground)]">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/projects" className="hover:underline">Projects</Link>
    </nav>
  );
}
