import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, type Locale } from "@/i18n/config";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  const dict = await getDictionary(lang as Locale);
  const p = dict.pages.guides;

  return (
    <div className="flex-grow pt-24 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00FF88]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-[800px] mx-auto text-center relative z-10 mt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#152026] border border-white/10 text-[#00FF88] font-bold text-[10px] uppercase tracking-widest mb-6">
          {dict.common.smartfitBadge}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">{p.title}</h1>
        <p className="text-lg text-[#A0AAB2] leading-relaxed mb-16 max-w-2xl mx-auto">{p.desc}</p>
        <div className="bg-[#152026] border border-white/5 rounded-3xl p-10 text-left relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00FF88] shadow-[0_0_20px_#00FF88] opacity-80" />
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
            {dict.common.underDevelopment}
            <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
          </h2>
          <p className="text-sm text-[#A0AAB2] leading-relaxed">{dict.common.underDevelopmentDesc}</p>
        </div>
      </div>
    </div>
  );
}
