export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-[var(--background)]/80 text-[var(--foreground)] border-t border-[var(--border)] py-6 text-sm text-center backdrop-blur">
      &copy; {new Date().getFullYear()} Jess Hendricks. All rights reserved.{" "}
      <a
        href="https://existentialmusic.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--link)] hover:underline"
      >
        existentialmusic.com
      </a>
    </footer>
  );
}
