import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type LegalPageShellProps = {
  children: React.ReactNode;
};

export default function LegalPageShell({ children }: LegalPageShellProps) {
  return (
    <div className="cc-watches-bg text-white">
      <Navbar />
      <main className="px-6 py-12 md:px-8 md:py-16">
        <div className="cc-legal-prose mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white/95 px-6 py-10 text-[#0d1b4b] shadow-lg shadow-black/10 md:px-10 md:py-12">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
