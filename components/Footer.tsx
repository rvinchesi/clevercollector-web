import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
          <Link href="/privacy" className="transition hover:text-cc-gold">
            Privacy Policy
          </Link>
          <span className="hidden text-white/30 sm:inline" aria-hidden>
            ·
          </span>
          <Link href="/#contact" className="transition hover:text-cc-gold">
            Contact
          </Link>
        </div>
        <p className="mt-10 text-xs text-white/45">
          © 2026 Thousand Year Play, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
