import Image from "next/image";

import NewsHubButton from "@/components/NewsHubButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-8 pt-10 md:px-8 md:pb-10 md:pt-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(184,135,42,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl">
        <h1 className="sr-only">CleverCollector</h1>
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-5 lg:gap-6">
          <div className="w-full max-w-[20rem] shrink-0 md:max-w-[22.5rem] lg:max-w-[25rem]">
            <Image
              src="/assets/images/icon.png"
              alt="CleverCollector — sword emblem with collector categories"
              width={1024}
              height={1024}
              priority
              className="h-auto w-full object-contain drop-shadow-lg drop-shadow-black/20"
            />
          </div>
          <div className="w-full flex-1 md:pl-1 lg:pl-2">
            <ul className="font-heading space-y-3 text-left text-xl font-bold leading-relaxed text-[#0d1b4b]/90 [text-shadow:0_1px_1px_rgba(255,255,255,0.35)] md:space-y-4 md:text-2xl">
              <li className="flex gap-3">
                <span
                  className="shrink-0 font-semibold text-[#b8872a]"
                  aria-hidden="true"
                >
                  &gt;
                </span>
                <span>
                  250,000+ leading Blog and Video links curated just for you
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="shrink-0 font-semibold text-[#b8872a]"
                  aria-hidden="true"
                >
                  &gt;
                </span>
                <span>
                  Satisfy your craving for more Collector content plus Forum and
                  Community sharing with fellow Collectors
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="shrink-0 font-semibold text-[#b8872a]"
                  aria-hidden="true"
                >
                  &gt;
                </span>
                <span>Free to Use -- Download the App Now</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3 md:mt-8">
              <span
                className="shrink-0 text-xl font-semibold text-[#b8872a] invisible md:text-2xl"
                aria-hidden="true"
              >
                &gt;
              </span>
              <NewsHubButton
                href="#download"
                label="Download on the App Store"
                className="min-w-[240px] px-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
