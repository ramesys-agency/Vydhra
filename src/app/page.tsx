import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import HeroSection from "./page-components/home/HeroSection";
import SocialProofSection from "./page-components/home/SocialProofSection";
import StudentAreasSection from "./page-components/home/StudentAreasSection";
import GuaranteeSection from "./page-components/home/GuaranteeSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <StudentAreasSection />
        <GuaranteeSection />
      </main>
      <MobileNav />
    </div>
  );
}
