import HeroSection from "../components/home/HeroSection";
import SocialProofSection from "../components/home/SocialProofSection";
import StudentAreasSection from "../components/home/StudentAreasSection";
import GuaranteeSection from "../components/home/GuaranteeSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import ProblemSection from "../components/home/ProblemSection";
import SolutionSection from "../components/home/SolutionSection";
import CallToActionSection from "../components/home/CallToActionSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <SolutionSection />
        <WhyChooseUsSection />
        <StudentAreasSection />
        <GuaranteeSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
