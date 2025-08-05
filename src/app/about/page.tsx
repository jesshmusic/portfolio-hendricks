import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <section className="space-y-4 text-center">
        <Image
          src="/header.jpg"
          alt="Abstract header image"
          width={1024}
          height={200}
          className="mx-auto rounded-md"
        />
        <h2 className="text-3xl font-bold">About Jess Hendricks</h2>
        <p className="text-lg text-[var(--foreground)]">
          I’m a full-stack software engineer and senior frontend developer with experience spanning
          industries like energy, wellness, education, and eCommerce. I build performant web and
          mobile applications using technologies like React, Next.js, Node.js, Ruby on Rails,
          and React Native. I’m also a music composer, dungeon master, and occasional game developer.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="https://existentialmusic.com" className="text-[var(--link)] hover:underline">
            existentialmusic.com
          </Link>
          <Link href="https://dungeonmaster.guru" className="text-[var(--link)] hover:underline">
            dungeonmaster.guru
          </Link>
          <Link href="https://www.linkedin.com/in/jesshendricks/" className="text-[var(--link)] hover:underline">
            LinkedIn
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <h3 className="text-xl font-semibold">Career Timeline</h3>
        <ul className="border-l-2 border-[var(--border)] space-y-6 pl-6">
          <li>
            <div className="text-sm text-[var(--muted)]">2022–2024</div>
            <div className="font-semibold">Hartree Partners</div>
            <div>Frontend lead + backend APIs using Node.js + DuckDB for trading dashboards.</div>
          </li>
          <li>
            <div className="text-sm text-[var(--muted)]">2020–2022</div>
            <div className="font-semibold">iFit</div>
            <div>Frontend React work with Auth0 and GraphQL. Also learned AWS deployment workflows.</div>
          </li>
          <li>
            <div className="text-sm text-[var(--muted)]">2013–2020</div>
            <div className="font-semibold">Various freelance/contract roles</div>
            <div>Rails/React full-stack consulting for wellness, education, and nonprofit clients.</div>
          </li>
        </ul>
      </section>
    </main>
  );
}
