/**
 * Matches app `CleverLogo`: Cinzel black weight — CLEVER (white) + COLLECTOR (gold)
 * with carved depth via layered shadows.
 */
export default function CleverCollectorLogo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex flex-row flex-wrap items-center justify-center gap-x-[0.35em] gap-y-1 ${className}`}
    >
      <span
        className="relative inline-block font-heading text-[clamp(1.75rem,6vw,3rem)] font-black uppercase tracking-[0.08em] text-white"
        style={{
          textShadow:
            "2px 2px 0 #000, -1px -1px 0 rgba(255,255,255,0.12)",
        }}
      >
        CLEVER
      </span>
      <span
        className="relative inline-block font-heading text-[clamp(1.75rem,6vw,3rem)] font-black uppercase tracking-[0.08em] text-[#d4b04a]"
        style={{
          textShadow:
            "2px 2px 0 #000, -1px -1px 0 rgba(255,255,255,0.18)",
        }}
      >
        COLLECTOR
      </span>
    </div>
  );
}
