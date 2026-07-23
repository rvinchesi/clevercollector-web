import Image from "next/image";
import VerticalsSection from "@/components/VerticalsSection";
import {
  SECTION_BODY_CLASS,
  SECTION_TITLE_CLASS,
} from "@/lib/sectionTypography";

function screenPath(filename: string): string {
  return `/assets/screens/${encodeURIComponent(filename)}`;
}

type ScreenItem = {
  label: string;
  alt: string;
  /** Omit for placeholder */
  src?: string;
  /** Wide composite screenshots (e.g. Get Lucky flow with arrows) */
  width?: number;
  height?: number;
};

type ComparisonImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ScreenBlock = {
  preHeading?: string;
  heading: string;
  /** In-page anchor for nav links */
  anchorId?: string;
  description?: string;
  comparisonHeading?: string;
  comparisonDescription?: string;
  comparisonImage?: ComparisonImage;
  /** Override default 3-column screen grid (e.g. 2-up composites) */
  gridClass?: string;
  items: ScreenItem[];
};

const INTRO_COPY = [
  "CleverCollector curates blog and video content links for watch collectors and other collector communities and allows collectors to engage with each other and/or just enjoy great industry content refreshed several times a day.",
  "CleverCollector started out as a place for watch lovers to scroll the latest blog and video news about the world of watch collecting, but I've expanded it to offer the same curated news feeds for Car collectors, Vinyl record collectors, Pipe and tobacco enthusiasts, and Whisky enthusiasts. Soon to come is a Wine enthusiast ecosystem, and then Sneakers, and more over time.",
  "But it's more than just a curated news and video scroll for each ecosystem: it's a place to catalog your watch collection (or car collection, etc) by brand and model, and create a wish list, and then find stories about those particular items from databases that stretch back 15 or more years. If a particular vintage car caught your eye, you could add it to your wish list and then find blog links from the leading car blogs about that specific car. There are over 200,000 story links in the car database, all tagged by make and model. Each ecosystem has brand / model tagging that opens up a world of rich collector content.",
  "CleverCollector also has two ways to share content with other enthusiasts: a community scroll, much like Instagram, where users post images of their collection and whatever else interests them, and a Forums section where users post longer-form threaded discussions about topics of interest.",
  "After building and curating these databases of links, adding a bit of extra fun was easy: If you're feeling lucky, CleverCollector can reach into the archive and serve up a random story link, random video link, or random story link about a brand you care about — a deep dive you might never have found on your own, from a publication you didn't know to search.",
] as const;

const SCREEN_BLOCKS: ScreenBlock[] = [
  {
    preHeading: "Your Landing Pages:",
    heading: "News Home Screens",
    anchorId: "news",
    description:
      "Enjoy hundreds of thousands of curated Blog links from the world's top collector publishers. Refreshed several times a day. Click a link and your browser takes you to the blog story on the blog's own website. Scroll all stories, or pick a single blog to focus on.",
    items: [
      {
        label: "Watches",
        alt: "CleverCollector Watches — News home",
        src: screenPath("Watches home screen - news.PNG"),
      },
      {
        label: "Cars",
        alt: "CleverCollector Cars — News home",
        src: screenPath("Cars home screen - news.PNG"),
      },
      {
        label: "Whisky",
        alt: "CleverCollector Whisky — News home",
        src: screenPath("Whisky home screen - news.PNG"),
      },
      {
        label: "Pipes",
        alt: "CleverCollector Pipes — News home",
        src: "/assets/screens/pipes-news.png",
      },
      {
        label: "Vinyl",
        alt: "CleverCollector Vinyl — News home",
        src: "/assets/screens/vinyl-news.png",
      },
    ],
  },
  {
    heading: "My Collection, My Wish List, and Item Focus",
    description:
      "Add items to your Collection and Wish List and then see curated blog links for each item, or for the whole list",
    comparisonHeading: "Discover news stories about your collection and wish list items",
    comparisonDescription:
      'Click on an item in your Collection or Wish List and see "News about this Vehicle"',
    comparisonImage: {
      src: "/assets/screens/cars-wishlist-to-featued-comparison.png",
      alt: "CleverCollector — My Wish List (Cars) to Featured Vehicle with news links",
      width: 1179,
      height: 1132,
    },
    items: [
      {
        label: "My Collection (Watches)",
        alt: "CleverCollector — My Collection (Watches)",
        src: "/assets/screens/collection.png",
      },
      {
        label: "Featured Watch",
        alt: "CleverCollector — Featured Watch (Rolex Submariner)",
        src: "/assets/screens/featured-watch-submariner.png",
      },
      {
        label: "My Wish List (Watches)",
        alt: "CleverCollector — My Wish List (Watches)",
        src: "/assets/screens/wishlist.png",
      },
    ],
  },
  {
    heading: "Community Scroll",
    description:
      "Post shots for fellow collectors, like and comment on their posts, and share your favorite links from the news feeds. Community home screens group recent posts for easy viewing, and the expanded view offers a familiar linear scroll.",
    items: [
      {
        label: "Watches",
        alt: "CleverCollector Watches — Community scroll",
        src: "/assets/screens/watches-community-appstore.png",
      },
      {
        label: "Cars",
        alt: "CleverCollector Cars — Community scroll",
        src: "/assets/screens/cars-community-appstore.png",
      },
      {
        label: "Pipes",
        alt: "CleverCollector Pipes — Community scroll",
        src: "/assets/screens/pipes-community-appstore.png",
      },
    ],
  },
  {
    heading: "Forums",
    description:
      "Enjoy and create long-form threads on topics you care about.",
    items: [
      {
        label: "My Forum Posts (Watches)",
        alt: "CleverCollector Watches — My Forum Posts",
        src: "/assets/screens/watches-my-forum-posts.png",
      },
      {
        label: "Watch Forum",
        alt: "CleverCollector Watches — Forum home",
        src: "/assets/screens/watches-forums-home.png",
      },
      {
        label: "Forum thread (Pipes)",
        alt: "CleverCollector Pipes — Forum thread",
        src: "/assets/screens/pipes-guite-forum-post.png",
      },
    ],
  },
  {
    heading: "Get Lucky",
    description:
      "When you want some fun (or a cure for a moment of boredom), try Get Lucky and see what stories appear from tens of thousands in the database, going back many years.",
    gridClass: "md:grid-cols-2",
    items: [
      {
        label: "Cars",
        alt: "CleverCollector Get Lucky — random story and video links for Cars",
        src: "/assets/screens/get-lucky-cars-comparison.png",
        width: 1234,
        height: 1270,
      },
      {
        label: "Vinyl",
        alt: "CleverCollector Get Lucky — random story and video links for Vinyl",
        src: "/assets/screens/get-lucky-vinyl-comparison.png",
        width: 1191,
        height: 1207,
      },
    ],
  },
  {
    heading: "Videos",
    description:
      "Enjoy Video story links served to you throughout the day. Click a link and YouTube opens on your mobile device, showing you the video.",
    items: [
      {
        label: "Watches",
        alt: "CleverCollector Watches — Videos",
        src: screenPath("Watches home screen - videos.PNG"),
      },
      {
        label: "Cars",
        alt: "CleverCollector Cars — Videos",
        src: "/assets/screens/cars-videos.png",
      },
      {
        label: "Whisky",
        alt: "CleverCollector Whisky — Videos",
        src: "/assets/screens/whisky-videos.png",
      },
      {
        label: "Pipes",
        alt: "CleverCollector Pipes — Videos",
        src: "/assets/screens/pipes-videos.png",
      },
      {
        label: "Vinyl",
        alt: "CleverCollector Vinyl — Videos",
        src: "/assets/screens/vinyl-videos.png",
      },
    ],
  },
];

const SCREEN_GRID_CLASS = "md:grid-cols-3";

function ScreenTile({ label, alt, src, width, height }: ScreenItem) {
  const isComposite = width != null && height != null;

  return (
    <li
      className={
        isComposite
          ? "flex w-[27.5rem] shrink-0 flex-col md:w-auto md:shrink"
          : "flex w-[13.5rem] shrink-0 flex-col md:w-auto md:shrink"
      }
    >
      <div className="relative w-full">
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={width ?? 390}
            height={height ?? 844}
            className={
              isComposite
                ? "h-auto w-full max-w-none rounded-2xl border border-black/10 object-contain shadow-lg shadow-black/25"
                : "h-auto w-full rounded-2xl border border-black/10 object-cover object-top shadow-lg shadow-black/25"
            }
            sizes={
              isComposite
                ? "(max-width: 768px) 440px, 560px"
                : "(max-width: 768px) 216px, 260px"
            }
          />
        ) : (
          <div
            role="img"
            aria-label={`${alt} — screenshot coming soon`}
            className="flex aspect-[9/19.5] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-black/25 bg-white/40 px-3 text-center"
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-black/45">
              Coming soon
            </p>
          </div>
        )}
      </div>
      <div className="mt-3 flex justify-center px-1">
        <p className="cc-screen-label text-sm">{label}</p>
      </div>
    </li>
  );
}

function ScreenRow({
  preHeading,
  heading,
  anchorId,
  description,
  comparisonHeading,
  comparisonDescription,
  comparisonImage,
  gridClass,
  items,
  className = "mt-14",
}: ScreenBlock & { className?: string }) {
  return (
    <div id={anchorId} className={`${className}${anchorId ? " scroll-mt-24" : ""}`}>
      <h3 className={SECTION_TITLE_CLASS}>
        {preHeading ? (
          <>
            <span>{preHeading}</span>{" "}
            <span>{heading}</span>
          </>
        ) : (
          heading
        )}
      </h3>
      {description ? (
        <p className={`mt-3 ${SECTION_BODY_CLASS}`}>{description}</p>
      ) : null}
      <div className="-mx-6 mt-4 overflow-x-auto px-6 md:mx-0 md:mt-5 md:overflow-x-visible">
        <ul
          className={`flex w-max items-start gap-4 md:grid md:w-full md:gap-5 ${gridClass ?? SCREEN_GRID_CLASS}`}
        >
          {items.map((item) => (
            <ScreenTile key={`${heading}-${item.label}`} {...item} />
          ))}
        </ul>
        {comparisonImage && comparisonHeading && comparisonDescription ? (
          <div className="mt-14">
            <h3 className={SECTION_TITLE_CLASS}>{comparisonHeading}</h3>
            <p className={`mt-3 ${SECTION_BODY_CLASS}`}>
              {comparisonDescription}
            </p>
            <div className="-mx-6 mt-4 overflow-x-auto px-6 md:mx-0 md:mt-5 md:overflow-x-visible">
              <div className="mx-auto w-max md:w-full md:max-w-[calc(66.666%+8rem)]">
                <Image
                  src={comparisonImage.src}
                  alt={comparisonImage.alt}
                  width={comparisonImage.width}
                  height={comparisonImage.height}
                  className="h-auto w-[27.5rem] max-w-none rounded-2xl border border-black/10 object-contain shadow-lg shadow-black/25 md:w-full"
                  sizes="(max-width: 768px) 440px, 560px"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function AppScreensSection() {
  return (
    <section
      id="screens"
      className="border-t border-white/10 px-6 pb-8 pt-8 md:px-8 md:pb-10 md:pt-10"
    >
      <div className="mx-auto max-w-[1400px]">
        <div id="about" className="scroll-mt-24">
          <h2 className={SECTION_TITLE_CLASS}>What is CleverCollector?</h2>
        </div>
        <div className={`mt-5 ${SECTION_BODY_CLASS}`}>
          <p>{INTRO_COPY[0]}</p>
          <p className="mt-6 md:mt-7">{INTRO_COPY[1]}</p>
          <p className="mt-6 md:mt-7">{INTRO_COPY[2]}</p>
          <p className="mt-6 md:mt-7">{INTRO_COPY[3]}</p>
          <p className="mt-6 md:mt-7">{INTRO_COPY[4]}</p>
        </div>
        <VerticalsSection embedded />
        {SCREEN_BLOCKS.map((block, index) => (
          <ScreenRow
            key={block.heading}
            className={index === 0 ? "mt-6 md:mt-8" : "mt-14"}
            {...block}
          />
        ))}
      </div>
    </section>
  );
}
