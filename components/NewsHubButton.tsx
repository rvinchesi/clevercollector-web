import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

/** Metallic hub-style CTA — green App Store download (same bevel + shadow as app hub buttons). */
export const NEWS_HUB_BUTTON_CLASS =
  "inline-flex min-h-[47px] items-center justify-center rounded-lg border-2 border-b-black/55 border-l-white/35 border-r-black/45 border-t-white/40 bg-[linear-gradient(135deg,#ecfdf1_0%,#b8ecc8_35%,#52c06e_68%,#268a42_100%)] px-4 py-3 text-center text-xs font-extrabold uppercase tracking-wide text-black [text-shadow:0_1px_1px_rgba(255,255,255,0.4)] shadow-[4px_6px_8px_rgba(28,110,52,0.45)] transition hover:opacity-95 md:text-sm";

type NewsHubButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  label: string;
};

export default function NewsHubButton({
  label,
  className = "",
  ...props
}: NewsHubButtonProps) {
  return (
    <Link
      className={`${NEWS_HUB_BUTTON_CLASS} ${className}`.trim()}
      {...props}
    >
      {label}
    </Link>
  );
}
