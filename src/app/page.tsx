import HeroSection from "../components/home/HeroSection";
import SocialProofSection from "../components/home/SocialProofSection";
import StudentAreasSection from "../components/home/StudentAreasSection";
import GuaranteeSection from "../components/home/GuaranteeSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <SocialProofSection />
        <StudentAreasSection />
        <GuaranteeSection />
      </main>
    </div>
  );
}
