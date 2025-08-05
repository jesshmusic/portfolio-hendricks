import ProjectCard from '@/components/ProjectCard';
import {getAllProjects} from '@/lib/sanity.api';
import {Project} from '@/lib/types';

export default async function Home() {
  const projects = await getAllProjects();
  const latestProjects = projects.slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-16">
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[var(--heading)]">
          Welcome
        </h2>
        <p className="text-lg leading-relaxed text-left text-[var(--foreground)] max-w-3xl mx-auto">
          I&#39;m a senior React developer and full-stack engineer with over 11 years of experience building scalable, high-performance web applications. Over the years, I&#39;ve had the opportunity to work across diverse industries — from energy and health & wellness tech to education and eCommerce — helping companies bring their ideas to life online. Whether I&#39;m crafting a real-time data dashboard for energy traders or a cross-platform mobile app for wellness, I always aim to create an experience that&#39;s fast, intuitive, and scalable.
        </p>
        <p className="text-lg leading-relaxed text-left text-[var(--foreground)] max-w-3xl mx-auto">
          My core stack includes React and Next.js (with TypeScript) on the front end, Node.js and Ruby on Rails on the back end, and React Native for mobile development.
        </p>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-[var(--heading)]">
          Latest Projects
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {latestProjects.map((project: Project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
