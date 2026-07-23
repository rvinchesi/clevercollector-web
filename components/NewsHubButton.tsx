import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

/** Matches app `MaterialHubButton` metallicVariant="news" (NEWS ABOUT THIS WATCH). */
export const NEWS_HUB_BUTTON_CLASS =
  "inline-flex min-h-[47px] items-center justify-center rounded-lg border-2 border-b-black/55 border-l-white/35 border-r-black/45 border-t-white/40 bg-[linear-gradient(135deg,#eef3f8_0%,#d2dfea_35%,#a8bdd4_68%,#6d849e_100%)] px-4 py-3 text-center text-xs font-extrabold uppercase tracking-wide text-black [text-shadow:0_1px_1px_rgba(255,255,255,0.35)] shadow-[4px_6px_8px_rgba(74,96,128,0.42)] transition hover:opacity-95 md:text-sm";

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
