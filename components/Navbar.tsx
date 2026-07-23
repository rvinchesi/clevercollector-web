"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

import NewsHubButton from "@/components/NewsHubButton";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy" },
  { href: "/#contact", label: "Contact" },
];

const sectionLinks = [
  { href: "/#about", label: "About" },
  { href: "/#news", label: "App Screens" },
  { href: "/#verticals", label: "Verticals" },
  { href: "/#contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-cc-navy/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <Link
          href="/"
          className="font-heading text-sm font-semibold tracking-[0.2em] transition-colors hover:opacity-90 md:text-base"
        >
          <span className="text-white">CLEVER</span>
          <span className="text-[#d4b04a]">COLLECTOR</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {sectionLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 transition-colors hover:text-cc-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <NewsHubButton
            href="/#download"
            label="Download Free"
            className="min-h-0 px-4 py-2 md:px-5"
          />

          <button
            type="button"
            className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-sm border border-white/20 text-white transition hover:border-cc-gold hover:text-cc-gold"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id={panelId}
          className="border-t border-white/10 bg-cc-navy/95 px-6 py-4 md:px-8"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {menuLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-sm px-2 py-3 font-heading text-base text-white transition hover:bg-white/5 hover:text-cc-gold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
