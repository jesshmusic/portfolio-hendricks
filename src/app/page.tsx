import Nav from '@/components/Nav';

export default function HomePage() {
  return (
    <main className="p-10">
      <Nav />
      <h1 className="text-3xl font-bold mt-10 text-[var(--heading)]">Welcome</h1>
      <p className="text-[var(--muted)] mt-2">
        This is the home page. Navigate using the links above.
      </p>
    </main>
  );
}
