import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Screenshots from "@/components/sections/Screenshots";
import SocialProof from "@/components/sections/SocialProof";
import TrustPrivacy from "@/components/sections/TrustPrivacy";
import DownloadSection from "@/components/sections/Download";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CookieBanner from "@/components/ui/CookieBanner";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* §2 Hero */}
        <Hero />

        {/* Beta strip — entre hero y el problema */}
        <SocialProof />

        {/* §3 El problema */}
        <Problem />

        {/* §4 Cómo funciona */}
        <HowItWorks />

        {/* §5 Funciones */}
        <Features />

        {/* §6 Capturas (placeholder hasta Stitch AI) */}
        <Screenshots />

        {/* §7 Confianza y privacidad */}
        <TrustPrivacy />

        {/* §8 Descarga */}
        <DownloadSection />

        {/* §9 FAQ */}
        <FAQ />

        {/* §10 Contacto */}
        <Contact />
      </main>

      {/* §11 Footer */}
      <Footer />

      {/* Cookie banner */}
      <CookieBanner />
    </>
  );
}
