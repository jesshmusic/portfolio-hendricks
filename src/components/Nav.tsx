'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <header className="relative h-[200px] w-full overflow-hidden text-white">
      <Image
        src="/header.jpg"
        alt="Header background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2">
          The Portfolio of Jess Hendricks
        </h1>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
        </nav>
      </div>
    </header>
  );
}
