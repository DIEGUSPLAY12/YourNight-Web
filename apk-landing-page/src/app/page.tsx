import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { SocialProof } from "@/components/sections/SocialProof";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden">
      <HeroSection />          {/* 2. Hero Section */}
      <FeaturesSection />      {/* 3 & 4. Value Proposition / Features */}
      <StepsSection />         {/* 6. How It Works */}
      <SocialProof />          {/* 5. Social Proof */}
      <Pricing />              {/* 7. Pricing */}
      <FAQ />                  {/* 8. FAQ */}
      <BottomCTA />            {/* 9. Secondary CTA */}
      <Footer />
    </main>
  );
}
