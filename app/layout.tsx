import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const siteUrl = "https://www.clevercollector.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CleverCollector — Curated blogs, video & community",
  description:
    "250,000+ curated blog and video links for collectors. Forums and community sharing with fellow collectors. Free on iOS.",
  openGraph: {
    title: "CleverCollector — Curated blogs, video & community",
    description:
      "250,000+ curated blog and video links for collectors. Forums and community sharing. Free on iOS.",
    url: siteUrl,
    siteName: "CleverCollector",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CleverCollector — curated for collectors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CleverCollector — Curated blogs, video & community",
    description:
      "250,000+ curated blog and video links for collectors. Forums and community sharing. Free on iOS.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
