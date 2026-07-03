import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-cream-50 border-b border-cream-200sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-light text-ink-900 hover:text-forest-700">
          For Literature
        </Link>
        <nav className="flex gap-8">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/conferences" className="nav-link">Conferences</Link>
          <Link href="/cfp" className="nav-link">CFP</Link>
          <Link href="/resources" className="nav-link">Resources</Link>
          <Link href="/scholars" className="nav-link">Scholars</Link>
          <Link href="/about" className="nav-link">About</Link>
        </nav>
      </div>
    </header>
  );
}
