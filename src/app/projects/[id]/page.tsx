import { getProjectById } from '@/lib/sanity.api';
import { urlForImage } from '@/lib/sanity.image';
import { PortableText } from '@portabletext/react';
import Nav from '@/components/Nav';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectById(params.id);

  if (!project) return notFound();

  return (
    <main className="p-10">
      <div className="mt-10 max-w-3xl mx-auto text-[var(--foreground)]">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-[var(--muted)] mt-2">{project.subtitle}</p>

        <img
          src={urlForImage(project.thumbnail).width(800).height(400).url()}
          alt={project.title}
          className="my-6 rounded shadow"
        />

        <div className="prose prose-invert max-w-none">
          <PortableText value={project.description} />
        </div>

        <div className="mt-6 flex gap-4 flex-wrap">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--link)] text-white px-4 py-2 rounded text-sm font-medium"
            >
              View Project
            </a>
          )}
          {project.gitHubRepo && (
            <a
              href={project.gitHubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--link)] text-white px-4 py-2 rounded text-sm font-medium"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
