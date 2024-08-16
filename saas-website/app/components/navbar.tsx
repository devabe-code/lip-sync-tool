import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-secondary text-foreground">
      <div className="text-2xl font-bold">
        <Link href="/" className="text-orange-400">Instant LipSync</Link>
      </div>
      <div>
        <Link href="/about" className="mr-4 text-white">
          About
        </Link>
        <Link href="/pricing" className="mr-4 text-white">
          Pricing
        </Link>
        <Link href="/contact" className="text-white">Contact</Link>
      </div>
    </nav>
  );
}
