import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0d1b4b] px-6 text-center text-white">
      <h1 className="font-heading text-4xl font-semibold text-cc-gold">404</h1>
      <p className="mt-4 text-lg text-white/80">Page not found.</p>
      <Link
        href="/"
        className="mt-8 rounded-sm border border-cc-gold bg-cc-gold px-6 py-2.5 text-sm font-semibold text-[#120a04] transition hover:bg-cc-gold/90"
      >
        Back to home
      </Link>
    </div>
  );
}
