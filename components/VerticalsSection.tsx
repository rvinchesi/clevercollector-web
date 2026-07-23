import Image from "next/image";
import {
  SECTION_BODY_CLASS,
  SECTION_TITLE_CLASS,
} from "@/lib/sectionTypography";

type VerticalTile = {
  title: string;
  status: "Available Now" | "Coming Soon";
  live: boolean;
  /** Ecosystem picker image under `/public` — omit when using placeholderEmoji */
  imageSrc?: string;
  imageAlt: string;
  /** Whisky art is anchored to bottom in the app picker */
  imagePosition?: "center" | "bottom";
  placeholderEmoji?: string;
};

const verticals: VerticalTile[] = [
  {
    title: "Watches",
    status: "Available Now",
    live: true,
    imageSrc: "/assets/ecosystem/watches-home-hero-watch-face.png",
    imageAlt: "Watches — ecosystem picker art",
  },
  {
    title: "Whisky & Bourbon",
    status: "Available Now",
    live: true,
    imageSrc: "/assets/ecosystem/ecosystem-picker-whisky-glass.png",
    imageAlt: "Whisky and bourbon — ecosystem picker art",
  },
  {
    title: "Classic Cars",
    status: "Available Now",
    live: true,
    imageSrc: "/assets/ecosystem/ecosystem-picker-cars.png",
    imageAlt: "Classic cars — ecosystem picker art",
  },
  {
    title: "Vinyl Records",
    status: "Available Now",
    live: true,
    imageSrc: "/assets/ecosystem/vinyl-record-hero-gold.png",
    imageAlt: "Vinyl records — ecosystem picker art",
  },
  {
    title: "Pipes",
    status: "Available Now",
    live: true,
    imageSrc: "/assets/ecosystem/ecosystem-picker-pipe.png",
    imageAlt: "Pipes — ecosystem picker art",
  },
  {
    title: "Wine",
    status: "Coming Soon",
    live: false,
    imageSrc: "/assets/ecosystem/ecosystem-picker-wine.png",
    imageAlt: "Wine — ecosystem picker art",
  },
  {
    title: "Sneakers",
    status: "Coming Soon",
    live: false,
    imageSrc: "/assets/ecosystem/ecosystem-picker-sneakers.png",
    imageAlt: "Sneakers — ecosystem picker art",
  },
];

function VerticalIcon({
  imageSrc,
  imageAlt,
  imagePosition,
  placeholderEmoji,
}: Pick<
  VerticalTile,
  "imageSrc" | "imageAlt" | "imagePosition" | "placeholderEmoji"
>) {
  if (imageSrc) {
    return (
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={`object-cover ${
            imagePosition === "bottom" ? "object-bottom" : "object-center"
          }`}
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={imageAlt}
      className="flex aspect-square w-full items-center justify-center rounded-xl text-4xl"
    >
      <span aria-hidden>{placeholderEmoji}</span>
    </div>
  );
}

export default function VerticalsSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section
      id="verticals"
      className={
        embedded
          ? "border-t border-white/10 px-6 pt-7 pb-8 md:px-8 md:pt-10 md:pb-10"
          : "border-t border-white/10 px-6 py-20 md:px-8 md:py-28"
      }
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-cc-gold">
          The Collector&apos;s World
        </p>
        <h2 className={`mt-3 ${SECTION_TITLE_CLASS}`}>
          Many Passions to Indulge and Explore
        </h2>
        <p className={`mt-4 max-w-2xl ${SECTION_BODY_CLASS}`}>
          Start with what you love. Discover what&apos;s next.
        </p>
        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {verticals.map((v) => (
            <li
              key={v.title}
              className="flex flex-col items-center text-center"
            >
              <VerticalIcon
                imageSrc={v.imageSrc}
                imageAlt={v.imageAlt}
                imagePosition={v.imagePosition}
                placeholderEmoji={v.placeholderEmoji}
              />
              <span className="mt-4 font-heading text-xl text-black">
                {v.title}
              </span>
              <span
                className={`mt-3 inline-flex rounded-sm px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-black ${
                  v.live ? "bg-cc-gold/20" : "bg-white/10 italic"
                }`}
              >
                {v.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
