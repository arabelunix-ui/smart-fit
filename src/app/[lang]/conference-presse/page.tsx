import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, type Locale } from "@/i18n/config";
import { Calendar, MapPin, Users, Play, Mic, Globe, Presentation, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function ConferencePressePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  const dict = await getDictionary(lang as Locale);
  const p = dict.pages.conferencePresse;

  return (
    <div className="pb-24">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF88]/10 rounded-full blur-[120px] opacity-70 pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase text-[#A0AAB2]">{p.liveBadge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              {p.title1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00CC6A]">{p.title2}</span><br />
              {p.title3}
            </h1>
            <p className="text-xl text-[#A0AAB2] font-medium leading-relaxed max-w-lg">{p.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-[#152026] transition-colors flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-black" />
                {p.watchLive}
              </button>
              <Link href="/#launch" className="px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                {p.discover} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="bg-[#152026] border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#00FF88] mb-1">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold uppercase tracking-wider text-sm">{p.date}</span>
                </div>
                <p className="text-2xl font-bold">{p.dateValue}</p>
                <p className="text-[#A0AAB2]">{p.dateDetail}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold uppercase tracking-wider text-sm">{p.location}</span>
                </div>
                <p className="text-2xl font-bold">{p.locationValue}</p>
                <p className="text-[#A0AAB2]">{p.locationDetail}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <Globe className="w-5 h-5" />
                  <span className="font-semibold uppercase tracking-wider text-sm">{p.format}</span>
                </div>
                <p className="text-2xl font-bold">{p.formatValue}</p>
                <p className="text-[#A0AAB2]">{p.formatDetail}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-purple-400 mb-1">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold uppercase tracking-wider text-sm">{p.audience}</span>
                </div>
                <p className="text-2xl font-bold">{p.audienceValue}</p>
                <p className="text-[#A0AAB2] text-sm leading-snug">{p.audienceDetail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1000px] mx-auto px-6 pt-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{p.agendaTitle}</h2>
          <p className="text-[#A0AAB2] text-lg">{p.agendaDesc}</p>
        </div>
        <div className="space-y-6">
          {p.agenda.map((item: { time: string; title: string; speaker: string; desc: string }, index: number) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 bg-[#152026] border border-white/10 p-6 md:p-8 rounded-3xl hover:border-white/20 transition-all group">
              <div className="flex-shrink-0 md:w-48 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6 flex md:flex-col items-center md:items-start justify-between md:justify-center">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">{item.time}</span>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#A0AAB2] mb-4 leading-relaxed">{item.desc}</p>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className="text-[#00FF88] uppercase tracking-wider text-xs">{p.speaker}</span>
                  <span className="text-[#A0AAB2]">{item.speaker}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
