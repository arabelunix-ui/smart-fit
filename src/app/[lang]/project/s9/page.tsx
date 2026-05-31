import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, type Locale } from "@/i18n/config";
import { Calendar, Target, BookOpen, Coffee, Network, LayoutTemplate, Database, Cloud, ShieldAlert, ShieldCheck, Scale, MessageSquare } from "lucide-react";

export default async function ProjetS9Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  const dict = await getDictionary(lang as Locale);
  const p = dict.pages.projectS9;

  const moduleIcons = [Network, LayoutTemplate, Database, Cloud, ShieldAlert, ShieldCheck, Scale, MessageSquare];

  return (
    <div className="min-h-screen bg-[#0D1317] text-white selection:bg-[#00FF88]/30 selection:text-white">
      <div className="pb-24">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF88]/15 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
          <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase text-[#A0AAB2]">{p.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              {p.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00CC6A]">S9</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#A0AAB2] font-medium leading-relaxed max-w-3xl mx-auto mb-12">{p.subtitle}</p>
          </div>
        </section>

        <section className="max-w-[1000px] mx-auto px-6 mb-24">
          <div className="bg-[#152026] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-lg md:text-xl text-[#A0AAB2] leading-relaxed relative z-10 mb-8">{p.overview}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-black/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00FF88]/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div>
                  <p className="text-sm text-[#A0AAB2] mb-1">{p.start}</p>
                  <p className="font-semibold text-lg">{p.startDate}</p>
                </div>
              </div>
              <div className="bg-black/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00CC6A]/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#00CC6A]" />
                </div>
                <div>
                  <p className="text-sm text-[#A0AAB2] mb-1">{p.end}</p>
                  <p className="font-semibold text-lg">{p.endDate}</p>
                </div>
              </div>
              <div className="bg-black/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#A0AAB2] mb-1">{p.duration}</p>
                  <p className="font-semibold text-lg">{p.durationValue}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1000px] mx-auto px-6 mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{p.modulesTitle}</h2>
            <p className="text-[#A0AAB2] text-lg">{p.modulesDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.modules.map((mod: { title: string; desc: string }, index: number) => {
              const IconComponent = moduleIcons[index] || Network;
              return (
                <div key={index} className="bg-[#152026] border border-white/5 hover:border-[#00FF88]/50 transition-colors p-6 rounded-2xl group">
                  <IconComponent className="w-8 h-8 text-[#00FF88] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2">{mod.title}</h3>
                  <p className="text-[#A0AAB2] text-sm leading-relaxed">{mod.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="max-w-[1000px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{p.meetingsTitle}</h2>
            <p className="text-[#A0AAB2] text-lg">{p.meetingsDesc}</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#152026]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/40 border-b border-white/10">
                    <th className="p-6 font-semibold text-[#A0AAB2] w-1/4">{p.meetingDate}</th>
                    <th className="p-6 font-semibold text-[#A0AAB2] w-1/4">{p.meetingType}</th>
                    <th className="p-6 font-semibold text-[#A0AAB2] w-1/2">{p.meetingAgenda}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {p.meetings.map((meeting: { date: string; type: string; desc: string }, index: number) => (
                    <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <Coffee className="w-5 h-5 text-white" />
                          <span className="font-medium text-white">{meeting.date}</span>
                        </div>
                      </td>
                      <td className="p-6 text-[#A0AAB2]">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">
                          {meeting.type}
                        </span>
                      </td>
                      <td className="p-6 text-[#A0AAB2] leading-relaxed">{meeting.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
