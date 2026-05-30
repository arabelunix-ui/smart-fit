import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExamAlertSection from "@/components/ExamAlertSection";
import AgenticSection from "@/components/AgenticSection";
import QuestWindow from "@/components/QuestWindow";
import CommunitySection from "@/components/CommunitySection";
import KeyConceptsSection from "@/components/KeyConceptsSection";
import LaunchCountdownSection from "@/components/LaunchCountdownSection";
import CodeYourWaySection from "@/components/CodeYourWaySection";
import FaqSection from "@/components/FaqSection";
import PressReleaseModal from "@/components/PressReleaseModal";
import Footer from "@/components/Footer";

import ShowcaseSection from "@/components/ShowcaseSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF5F6D]/30 selection:text-white">
      <PressReleaseModal />
      <Navbar />
      <main className="pb-24">
        <HeroSection />
        <ExamAlertSection />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 mt-12">
          <AgenticSection />
          <QuestWindow />
          <CommunitySection />
          <KeyConceptsSection />
          <LaunchCountdownSection />
        </div>
        <CodeYourWaySection />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 mt-12 mb-24">
          <ShowcaseSection />
        </div>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
