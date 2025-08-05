'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaNode } from 'react-icons/fa';
import { SiNextdotjs, SiSanity, SiRubyonrails, SiStrapi, SiGraphql } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { Project } from '@/lib/types';
import {urlForImage} from '@/lib/sanity.image';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const techStack = project.techStack || [];

  return (
    <Link href={`/projects/${project._id}`}>
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
        <Image
          src={
            project.thumbnail?.asset?._ref
              ? urlForImage(project.thumbnail)
                .crop('right')
                .width(600)
                .image(project.thumbnail)
                .url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          alt={project.title}
          width={800}
          height={500}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col gap-2 text-[var(--foreground)]">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-sm text-[var(--muted)]">{project.subtitle}</p>
          <div className="flex gap-2 mt-2">
            {techStack.includes('react') && <FaReact size={24} title="ReactJS" />}
            {techStack.includes('nodejs') && <FaNode size={24} title="NodeJS" />}
            {techStack.includes('nextjs') && <SiNextdotjs size={24} title="Next.js" />}
            {techStack.includes('sanity') && <SiSanity size={24} title="Sanity.io" />}
            {techStack.includes('rails') && <SiRubyonrails size={24} title="Ruby on Rails" />}
            {techStack.includes('react-native') && <TbBrandReactNative size={24} title="React Native" />}
            {techStack.includes('strapi') && <SiStrapi size={24} title="Strapi API" />}
            {techStack.includes('graphql') && <SiGraphql size={24} title="GraphQL" />}
          </div>
        </div>
      </div>
    </Link>
  );
}
