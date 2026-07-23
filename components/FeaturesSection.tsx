import { SECTION_TITLE_CLASS } from "@/lib/sectionTypography";

const cards = [
  {
    title: "Curated Content",
    body: "Follow the blogs and publications that matter to your collection. Articles personalized to the brands and models you actually care about — no noise, no algorithm games.",
  },
  {
    title: "Collector Community",
    body: "Share photos, join conversations, and connect with collectors who share your taste. Forums, hashtags, and a community built around what you collect.",
  },
  {
    title: "Your Collection",
    body: "Log your collection and your wish list. Celebrate and read stories about what you have and keep track of items you have your eyes on. Survey top stories and videos about your interests.",
  },
] as const;

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="border-t border-white/10 px-6 pb-20 pt-8 md:px-8 md:pb-28 md:pt-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className={SECTION_TITLE_CLASS}>Come join the fun</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-black">
                {card.title}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-black md:text-base">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
