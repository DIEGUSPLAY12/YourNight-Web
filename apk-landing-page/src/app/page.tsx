import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <Footer />
    </main>
  );
}
