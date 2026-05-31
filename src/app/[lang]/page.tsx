import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, type Locale } from "@/i18n/config";
import HeroSection from "@/components/HeroSection";
import UserFeatures from "@/components/UserFeatures";
import AICoachSection from "@/components/AICoachSection";
import CoachMode from "@/components/CoachMode";
import CommunicationSection from "@/components/CommunicationSection";
import ExerciseDatabase from "@/components/ExerciseDatabase";
import Integrations from "@/components/Integrations";
import LanguagesSection from "@/components/LanguagesSection";
import DownloadSection from "@/components/DownloadSection";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="flex-grow flex flex-col overflow-hidden pb-12">
      <HeroSection dict={dict} />
      <div className="flex flex-col space-y-24 sm:space-y-32 my-24">
        <UserFeatures dict={dict} />
        <AICoachSection dict={dict} />
        <CoachMode dict={dict} />
        <CommunicationSection dict={dict} />
        <ExerciseDatabase dict={dict} />
        <LanguagesSection />
        <Integrations dict={dict} />
        <DownloadSection dict={dict} />
      </div>
    </div>
  );
}
