import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { InstructorSection } from "@/components/InstructorSection";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CurriculumSection />
        <InstructorSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
