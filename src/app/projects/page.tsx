import { getAllProjects } from '@/lib/sanity.api';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/lib/types';

export default async function ProjectsPage() {
  const projects: Project[] = await getAllProjects();

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mt-10 text-[var(--heading)]">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </main>
  );
}
