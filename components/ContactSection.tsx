import NewsHubButton from "@/components/NewsHubButton";
import {
  SECTION_BODY_CLASS,
  SECTION_TITLE_CLASS,
} from "@/lib/sectionTypography";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className={SECTION_TITLE_CLASS}>Contact Us!</h2>
        <p className={`mt-4 ${SECTION_BODY_CLASS}`}>
          Email us at{" "}
          <a
            href="mailto:info@clevercollector.com"
            className="text-cc-gold underline-offset-2 hover:underline"
          >
            info@clevercollector.com
          </a>
        </p>
        <div id="download" className="mt-10 flex justify-center scroll-mt-24">
          <NewsHubButton
            href="#"
            label="Download on the App Store"
            className="min-w-[240px] px-8"
            aria-label="Download on the App Store"
          />
        </div>
        <p className="mt-6 text-sm text-[#0d1b4b]/65">
          Available now on iOS. Android coming soon.
        </p>
      </div>
    </section>
  );
}
