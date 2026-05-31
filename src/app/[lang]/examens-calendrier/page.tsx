import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, type Locale } from "@/i18n/config";
import { BookOpen, Clock, User, Brain, MessageCircle, Heart, Wrench, Server, BarChart, Database, Cpu } from "lucide-react";

export default async function ExamensCalendrierPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  const dict = await getDictionary(lang as Locale);
  const p = dict.pages.examens;

  const icons = [Brain, MessageCircle, Heart, Wrench, Server, BarChart, Cpu, Database];

  return (
    <div className="pb-24">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF88]/15 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <BookOpen className="w-4 h-4 text-[#00FF88]" />
            <span className="text-sm font-medium tracking-wide uppercase text-[#A0AAB2]">{p.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {p.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00CC6A]">{p.title2}</span>
          </h1>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-amber-500/10 border border-amber-500/20 text-amber-200 px-6 py-4 rounded-2xl max-w-2xl mx-auto mt-4 text-left sm:text-center shadow-[0_0_30px_rgba(245,158,11,0.1)]">
            <Clock className="w-8 h-8 sm:w-6 sm:h-6 shrink-0 text-amber-400" />
            <p className="font-medium text-lg">{p.alert}</p>
          </div>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {p.modules.map((mod: { title: string; desc: string; supervisor: string }, index: number) => {
            const IconComponent = icons[index] || Brain;
            return (
              <div key={index} className="bg-[#152026] border border-white/10 p-8 rounded-3xl hover:border-[#00FF88]/40 hover:-translate-y-1 transition-all duration-300 group shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#00FF88]/10 transition-colors">
                  <IconComponent className="w-6 h-6 text-[#00FF88]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{mod.title}</h3>
                <p className="text-[#A0AAB2] mb-6 min-h-[48px] text-sm leading-relaxed">{mod.desc}</p>
                <div className="flex items-center gap-2 pt-6 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-[#A0AAB2]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#A0AAB2] uppercase tracking-wider font-semibold">{p.supervisor}</span>
                    <span className="text-sm text-[#A0AAB2] font-medium">{mod.supervisor}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
