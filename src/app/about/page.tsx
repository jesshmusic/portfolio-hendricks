import Nav from '@/components/Nav';

export default function AboutPage() {
  return (
    <main className="p-10">
      <Nav />
      <h1 className="text-3xl font-bold mt-10 text-[var(--heading)]">About</h1>
      <p className="text-[var(--muted)] mt-2">
        This is a placeholder about page.
      </p>
    </main>
  );
}
