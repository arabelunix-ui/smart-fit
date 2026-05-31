import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, type Locale } from "@/i18n/config";
import { Calendar, Target, Rocket, CheckCircle2, TrendingUp, MonitorSmartphone, Brain, Coffee } from "lucide-react";

export default async function PhaseEte2026Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  const dict = await getDictionary(lang as Locale);
  const p = dict.pages.projectEte2026;

  return (
    <div className="min-h-screen bg-[#0D1317] text-white selection:bg-[#00FF88]/30 selection:text-white">
      <div className="pb-24">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF88]/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
          <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase text-[#A0AAB2]">{p.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              {p.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00CC6A]">2026</span>
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
                  <Rocket className="w-6 h-6 text-[#00FF88]" />
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
            <h2 className="text-3xl font-bold mb-4">{p.projectsTitle}</h2>
            <p className="text-[#A0AAB2] text-lg">{p.projectsDesc}</p>
          </div>
          <div className="space-y-8">
            <div className="bg-[#152026] border-l-4 border-[#00FF88] rounded-r-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#00FF88]/20 text-[#00FF88] flex items-center justify-center text-sm">1</span>
                {p.axis1Title}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#00FF88] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">{p.axis1ObjectiveLabel}</h4>
                    <p className="text-[#A0AAB2]">{p.axis1Objective}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#00FF88] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">{p.axis1DeliverableLabel}</h4>
                    <p className="text-[#A0AAB2]">{p.axis1Deliverable}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#152026] border-l-4 border-[#00CC6A] rounded-r-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#00CC6A]/20 text-[#00CC6A] flex items-center justify-center text-sm">2</span>
                {p.axis2Title}
              </h3>
              <p className="text-[#A0AAB2] mb-8">{p.axis2Desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {p.axis2Cards.map((card: { title: string; desc: string; icon: string }, index: number) => {
                  const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
                    MonitorSmartphone, CheckCircle2, Brain, TrendingUp
                  };
                  const CardIcon = IconMap[card.icon] || MonitorSmartphone;
                  return (
                    <div key={index} className={`bg-black/40 border border-white/5 p-6 rounded-2xl ${index >= 2 ? 'sm:col-span-2' : ''}`}>
                      <CardIcon className="w-8 h-8 text-[#00CC6A] mb-4" />
                      <h4 className="font-bold text-lg mb-2">{card.title}</h4>
                      <p className="text-sm text-[#A0AAB2]">{card.desc}</p>
                      {(card as any).items && (
                        <ul className="text-sm text-[#A0AAB2] space-y-2 mt-4 list-disc pl-5">
                          {(card as any).items.map((item: { label: string; desc: string }, i: number) => (
                            <li key={i}><strong className="text-white">{item.label}:</strong> {item.desc}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
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
