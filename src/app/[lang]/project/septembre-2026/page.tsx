import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, type Locale } from "@/i18n/config";
import { Calendar, Target, Leaf, CheckCircle2, Route, BookOpen, Layers, Coffee } from "lucide-react";

export default async function Septembre2026Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  const dict = await getDictionary(lang as Locale);
  const p = dict.pages.projectSept2026;

  return (
    <div className="min-h-screen bg-[#0D1317] text-white selection:bg-[#10b981]/30 selection:text-white">
      <div className="pb-24">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#10b981]/10 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
          <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase text-[#A0AAB2]">{p.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              {p.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399]">{p.titleHighlight}</span>
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
                <div className="w-12 h-12 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <p className="text-sm text-[#A0AAB2] mb-1">{p.start}</p>
                  <p className="font-semibold text-lg">{p.startDate}</p>
                </div>
              </div>
              <div className="bg-black/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#34d399]/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#34d399]" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.axes.map((axis: { title: string; objective: string; deliverables: string[]; icon: string }, index: number) => {
              const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
                Route, BookOpen, Layers
              };
              const AxisIcon = IconMap[axis.icon] || Route;
              const borderColors = ["hover:border-[#10b981]/50", "hover:border-[#34d399]/50", "hover:border-emerald-400/50"];
              const iconBgColors = ["bg-[#10b981]/10", "bg-[#34d399]/10", "bg-emerald-400/10"];
              const iconColors = ["text-[#10b981]", "text-[#34d399]", "text-emerald-400"];
              return (
                <div key={index} className={`bg-[#152026] border border-white/5 ${borderColors[index]} transition-colors rounded-3xl p-8 shadow-2xl flex flex-col`}>
                  <div className={`w-14 h-14 rounded-2xl ${iconBgColors[index]} flex items-center justify-center mb-6`}>
                    <AxisIcon className={`w-7 h-7 ${iconColors[index]}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{axis.title}</h3>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: index === 0 ? '#10b981' : index === 1 ? '#34d399' : '#34d399' }}>{p.objectiveLabel}</h4>
                      <p className="text-[#A0AAB2] text-sm leading-relaxed">{axis.objective}</p>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                      <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: index === 0 ? '#10b981' : index === 1 ? '#34d399' : '#34d399' }}>{p.deliverableLabel}</h4>
                      {axis.deliverables.map((del: string, i: number) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <p className="text-[#A0AAB2] text-sm">{del}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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
                          <Coffee className="w-5 h-5 text-[#10b981]" />
                          <span className="font-medium text-white">{meeting.date}</span>
                        </div>
                      </td>
                      <td className="p-6 text-[#A0AAB2]">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] text-sm font-medium border border-[#10b981]/20">
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
