import type { Metadata } from "next";
import Link from "next/link";

import LegalPageShell from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Delete Account — CleverCollector",
  description:
    "How to delete your CleverCollector account in the app or by email, and what data is removed or retained.",
};

export default function DeleteAccountPage() {
  return (
    <LegalPageShell>
      <h1>Delete your CleverCollector account</h1>
      <p className="text-sm text-[#0d1b4b]/70">
        Thousand Year Play, Inc. / CleverCollector
      </p>

      <p>
        <strong>In the app:</strong> open CleverCollector →{" "}
        <strong>My Profile</strong> → <strong>Delete Account</strong> → enter
        your password → confirm. Deletion is permanent.
      </p>

      <p>
        <strong>No longer have the app?</strong> Email{" "}
        <a href="mailto:info@clevercollector.com?subject=Account%20deletion%20request">
          info@clevercollector.com
        </a>{" "}
        from the email address on your account and ask us to delete it.
        We&apos;ll verify and complete the request within{" "}
        <strong>30 days</strong>.
      </p>

      <h2>What is deleted</h2>
      <p>
        Your login and profile, collections and wishlists, posts, comments,
        likes, bookmarks, forum activity, uploaded photos, direct messages (the
        whole conversation is removed, including for the other participant),
        notification registrations, and badges.
      </p>

      <h2>What we keep</h2>
      <p>
        After deletion completes, we do <strong>not</strong> keep an active
        login, profile row, or other account data in the live app database.
        What may still exist for a limited time:
      </p>
      <ul>
        <li>
          <strong>Moderation reports</strong> that other users filed about your
          content (for safety review). These are not a copy of your account;
          they may reference removed content by ID.
        </li>
        <li>
          <strong>Server and security logs</strong> (for example IP addresses
          and access times) for up to <strong>24 months</strong>, per our{" "}
          <Link href="/privacy" className="text-cc-gold underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </li>
        <li>
          <strong>Email correspondence</strong> about your deletion request (if
          you contact us) for up to <strong>24 months</strong> after the request
          is closed.
        </li>
        <li>
          <strong>Daily encrypted database backups</strong> for up to about{" "}
          <strong>7 days</strong> before they rotate off. Storage uploads (photos)
          are <strong>not</strong> included in those database backups.
        </li>
      </ul>
      <p>
        We may retain specific information longer only where required by law or
        to resolve disputes, as described in the Privacy Policy.
      </p>
    </LegalPageShell>
  );
}
