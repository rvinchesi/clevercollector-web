import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";

import LegalPageShell from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — CleverCollector",
  description:
    "CleverCollector privacy policy — how we collect, use, and protect your information.",
};

async function getPrivacyPolicyHtml() {
  const filePath = path.join(process.cwd(), "content", "privacy-policy.html");
  return readFile(filePath, "utf8");
}

export default async function PrivacyPage() {
  const html = await getPrivacyPolicyHtml();

  return (
    <LegalPageShell>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPageShell>
  );
}
