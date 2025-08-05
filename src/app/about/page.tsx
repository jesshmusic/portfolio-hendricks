'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-16">
      <section className="space-y-6">
        <motion.h1
          className="text-4xl font-bold text-[var(--heading)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <motion.div
          className="prose prose-lg max-w-none text-[var(--foreground)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            I&#39;m Jess Hendricks, a senior front-end and full-stack developer with over a decade of professional experience. I specialize in building rich, performant web applications with React, Next.js, TypeScript, and Node.js.
          </p>
          <p>
            I&#39;ve worked across energy, wellness, education, and e-commerce sectors. At Hartree Partners, I led UI development for data-intensive dashboards. At iFit, I worked with Auth0 and GraphQL in a collaborative team setting. I also have experience with AWS, Rails, React Native, and more.
          </p>
          <p>
            Beyond code, I’m also a musician and composer — you can check out my music at <Link href="https://existentialmusic.com" className="text-[var(--link)] underline">existentialmusic.com</Link>. I also created <Link href="https://dungeonmaster.guru" className="text-[var(--link)] underline">dungeonmaster.guru</Link>, a helpful D&D toolset.
          </p>
        </motion.div>
      </section>

      <section className="space-y-10">
        <motion.h2
          className="text-2xl font-semibold text-[var(--heading)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Career Timeline
        </motion.h2>

        <div className="relative border-l-2 border-[var(--border)] ml-4 pl-6 space-y-12">
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logos/hartreepartners_logo.jpeg"
              alt="Hartree Partners logo"
              width={100}
              height={30}
              className="mb-1"
            />
            <h3 className="font-semibold text-[var(--heading)]">Hartree Partners</h3>
            <p className="text-sm text-[var(--muted)]">Senior Frontend Developer · 2022–2024</p>
            <p>
              Led design and implementation of React-based dashboards for energy traders. Created backend REST APIs with Node.js and DuckDB.
            </p>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/logos/ifit.jpg"
              alt="iFit logo"
              width={100}
              height={30}
              className="mb-1"
            />
            <h3 className="font-semibold text-[var(--heading)]">iFit</h3>
            <p className="text-sm text-[var(--muted)]">Frontend Engineer · 2020–2022</p>
            <p>
              Contributed to cross-functional projects involving GraphQL, Auth0, and performance improvements. Worked on large-scale production React apps.
            </p>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/logos/freelance.png"
              alt="Freelance work logo"
              width={100}
              height={30}
              className="mb-1"
            />
            <h3 className="font-semibold text-[var(--heading)]">Freelance</h3>
            <p className="text-sm text-[var(--muted)]">Full-Stack Developer · 2011–2020</p>
            <p>
              Built web and mobile applications for small businesses and startups. Stack included Rails, React, and early mobile frameworks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="space-y-8">
        <motion.h2
          className="text-2xl font-semibold text-[var(--heading)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Links
        </motion.h2>
        <ul className="list-disc pl-6 text-[var(--foreground)] space-y-2">
          <li>
            <Link href="https://existentialmusic.com" className="text-[var(--link)] underline">
              ExistentialMusic.com
            </Link>
          </li>
          <li>
            <Link href="https://dungeonmaster.guru" className="text-[var(--link)] underline">
              DungeonMaster.guru
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/jesshendricks" className="text-[var(--link)] underline">
              LinkedIn Profile
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
