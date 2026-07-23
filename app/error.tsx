"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0d1b4b] px-6 text-center text-white">
      <h1 className="font-heading text-2xl font-semibold text-cc-gold">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-sm text-white/70">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 rounded-sm border border-cc-gold bg-cc-gold px-6 py-2.5 text-sm font-semibold text-[#120a04] transition hover:bg-cc-gold/90"
      >
        Try again
      </button>
    </div>
  );
}
