import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppScreensSection from "@/components/AppScreensSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="cc-watches-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <AppScreensSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
