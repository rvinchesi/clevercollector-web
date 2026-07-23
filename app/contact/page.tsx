import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact — CleverCollector",
  description: "Contact CleverCollector support.",
};

export default function ContactPage() {
  return (
    <div className="cc-watches-bg text-white">
      <Navbar />
      <main className="px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-black/10 bg-white/90 px-6 py-10 text-[#0d1b4b] shadow-lg shadow-black/10 md:px-10">
          <h1 className="font-heading text-3xl font-semibold md:text-4xl">
            Contact
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#0d1b4b]/80">
            Questions about CleverCollector or this website? Reach us using the
            details below.
          </p>
          <ul className="mt-8 space-y-4 text-base leading-relaxed">
            <li>
              <span className="font-semibold">Email: </span>
              <a
                href="mailto:info@clevercollector.com"
                className="text-cc-gold underline-offset-2 hover:underline"
              >
                info@clevercollector.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Privacy requests: </span>
              <Link
                href="/privacy"
                className="text-cc-gold underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
