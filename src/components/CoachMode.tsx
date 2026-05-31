"use client";
import { UserCheck, ClipboardList, LineChart, Calendar, MessageCircle, Star, TrendingUp } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CoachModeProps {
  dict: any;
}

// ─── Image lists per tool tab (empty = mock UI, stays 3.2s) ─────────────────
const TAB_IMAGES: string[][] = [
  // 0 – Profil Pro
  [
    "/features/profil-pro/profil1.jpeg",
    "/features/profil-pro/profil2.jpeg",
    "/features/profil-pro/profil3.jpeg",
    "/features/profil-pro/profil4.jpeg",
  ],
  // 1 – Outils de création
  [
    "/features/creation/creation1.jpeg",
    "/features/creation/creation2.jpeg",
    "/features/creation/creation3.jpeg",
    "/features/creation/creation4.jpeg",
    "/features/creation/creation5.jpeg",
    "/features/creation/creation6.jpeg",
    "/features/creation/creation7.jpeg",
  ],
  // 2 – Analytiques / Suivi
  [
    "/features/analyse/analyse1.jpeg",
    "/features/analyse/analyse2.jpeg",
    "/features/analyse/analyse3.jpeg",
  ],
  // 3 – Communication           (mock screen)
  [],
  // 4 – Agenda / Calendrier
  [
    "/features/agenda/agenda1.jpeg",
    "/features/agenda/agenda2.jpeg",
  ],
];

const IMAGE_DURATION = 2600;
const MOCK_DURATION  = 3200;
const TOTAL_TABS     = TAB_IMAGES.length;

// ─── Mock screens ────────────────────────────────────────────────────────────

function MockCreationScreen({ dict }: { dict: any }) {
  return (
    <div className="flex flex-col h-full bg-[#0D1317] text-white p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full" />
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="text-sm font-bold">{dict.coachMode.mockCreation.title}</div>
        <div className="text-[10px] bg-[#00FF88] text-[#0D1317] px-3 py-1.5 rounded-full font-bold">
          + {dict.coachMode.mockCreation.new}
        </div>
      </div>
      <div className="flex gap-4 flex-1 relative z-10">
        <div className="w-1/2 bg-[#152026] rounded-xl border border-white/5 p-4 flex flex-col gap-3">
          <div className="text-[10px] text-[#A0AAB2] font-semibold uppercase tracking-wider mb-1">
            {dict.coachMode.mockCreation.library}
          </div>
          {["Squat Barre", "Soulevé de Terre", "Développé Couché"].map((ex, i) => (
            <div key={i} className="bg-[#0D1317] p-3 rounded-lg text-xs flex items-center justify-between border border-white/5 hover:border-[#00FF88]/30 transition-colors cursor-pointer group">
              <span className="font-medium text-[#A0AAB2] group-hover:text-white transition-colors">{ex}</span>
              <div className="w-5 h-5 bg-white/5 rounded flex items-center justify-center group-hover:bg-[#00FF88] group-hover:text-[#0D1317] transition-colors">+</div>
            </div>
          ))}
        </div>
        <div className="w-1/2 bg-gradient-to-b from-[#152026] to-[#0D1317] rounded-xl border-2 border-dashed border-white/10 p-4">
          <div className="text-xs text-[#00FF88] mb-3 font-bold flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" /> Jour 1 - Full Body
          </div>
          <div className="bg-[#0D1317] p-3 rounded-lg text-xs border border-[#00FF88]/30">
            <div className="font-bold mb-1">Squat Barre</div>
            <div className="text-[#A0AAB2] text-[10px]">4 séries x 10 répétitions</div>
          </div>
          <div className="bg-[#0D1317] p-3 rounded-lg text-xs border border-[#00FF88]/30 mt-3">
            <div className="font-bold mb-1">Traction Prise Large</div>
            <div className="text-[#A0AAB2] text-[10px]">3 séries x 8 répétitions</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockAnalyticsScreen({ dict }: { dict: any }) {
  return (
    <div className="flex flex-col h-full bg-[#0D1317] text-white p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00FF88]/5 blur-3xl rounded-full" />
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="text-sm font-bold">{dict.coachMode.mockAnalytics.title}</div>
        <div className="text-xs text-[#00FF88] flex items-center gap-1 bg-[#00FF88]/10 px-2 py-1 rounded-md font-medium">
          <TrendingUp className="w-3 h-3" /> +15.4%
        </div>
      </div>
      <div className="flex-1 bg-[#152026] rounded-xl border border-white/5 p-4 relative flex flex-col justify-end z-10">
        <svg className="absolute inset-0 w-full h-full px-4 pt-8 pb-10" preserveAspectRatio="none">
          <path d="M0,25 L1000,25 M0,50 L1000,50 M0,75 L1000,75" stroke="rgba(255,255,255,0.02)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d="M0,80 Q30,70 60,85 T150,50 T220,30 T300,20" fill="none" stroke="#00FF88" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          <path d="M0,80 Q30,70 60,85 T150,50 T220,30 T300,20 L300,100 L0,100 Z" fill="url(#grad)" opacity="0.2" vectorEffect="non-scaling-stroke" />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FF88" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex justify-between text-[10px] text-[#A0AAB2] z-10 font-mono tracking-wider">
          <span>JAN</span><span>FEV</span><span>MAR</span><span>AVR</span><span>MAI</span><span>JUN</span>
        </div>
      </div>
    </div>
  );
}

function MockChatScreen({ dict }: { dict: any }) {
  return (
    <div className="flex flex-col h-full bg-[#0D1317] text-white relative">
      <div className="bg-[#152026] p-4 border-b border-white/5 text-xs font-bold flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center border border-blue-500/30 text-xs">TM</div>
          <div>
            <div className="text-sm">Thomas Martin</div>
            <div className="text-[9px] text-[#00FF88] font-normal flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-[#00FF88] rounded-full animate-pulse" /> {dict.coachMode.mockChat.online}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden z-10 relative">
        <div className="bg-[#152026] p-3 rounded-2xl rounded-tl-sm self-start text-xs max-w-[75%] border border-white/5 text-[#A0AAB2]">
          Salut coach ! La séance d'hier était très intense. J'ai des courbatures aux jambes ce matin.
        </div>
        <div className="bg-gradient-to-br from-[#00FF88]/20 to-[#00FF88]/5 text-[#00FF88] p-3 rounded-2xl rounded-tr-sm self-end text-xs max-w-[75%] border border-[#00FF88]/30">
          C'est tout à fait normal Thomas ! Pense à bien t'hydrater. On va faire une séance de récupération active demain. 💪
        </div>
      </div>
      <div className="p-4 bg-[#152026] border-t border-white/5 z-10">
        <div className="bg-[#0D1317] rounded-full px-4 py-2.5 text-xs text-[#A0AAB2] border border-white/5 flex items-center justify-between">
          <span>{dict.coachMode.mockChat.placeholder}</span>
          <div className="w-5 h-5 bg-[#00FF88] rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#0D1317] fill-current transform translate-x-[1px]"><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockCalendarScreen({ dict }: { dict: any }) {
  return (
    <div className="flex flex-col h-full bg-[#0D1317] text-white p-6">
      <div className="text-sm font-bold mb-6 flex justify-between items-center">
        <span>{dict.coachMode.mockCalendar.title}</span>
        <span className="text-[#00FF88] bg-[#00FF88]/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold">
          {dict.coachMode.mockCalendar.today}
        </span>
      </div>
      <div className="flex gap-2 mb-6">
        {["L", "M", "M", "J", "V", "S"].map((d, i) => (
          <div key={i} className={`flex-1 text-center py-2.5 rounded-xl text-xs font-semibold ${i === 2 ? "bg-[#00FF88] text-[#0D1317] shadow-[0_0_15px_rgba(0,255,136,0.3)]" : "bg-[#152026] text-[#A0AAB2] border border-white/5"}`}>
            {d}
            <div className={`text-[9px] mt-0.5 ${i === 2 ? "text-[#0D1317]/70" : "text-white/30"}`}>{14 + i}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-3 overflow-hidden">
        <div className="flex items-start gap-4 text-xs">
          <div className="text-[#A0AAB2] w-10 text-right font-mono mt-1">09:00</div>
          <div className="flex-1 bg-gradient-to-r from-blue-500/20 to-[#152026] rounded-xl p-3 border-l-4 border-blue-500">
            <div className="font-bold text-white mb-1">Coaching - Thomas M.</div>
            <div className="text-[10px] text-blue-200">Séance Pectoraux • En ligne</div>
          </div>
        </div>
        <div className="flex items-start gap-4 text-xs">
          <div className="text-[#00FF88] font-bold w-10 text-right font-mono mt-1">10:30</div>
          <div className="flex-1 bg-gradient-to-r from-[#00FF88]/20 to-[#152026] rounded-xl p-3 border-l-4 border-[#00FF88]">
            <div className="font-bold text-white mb-1">Bilan Mensuel - Marie L.</div>
            <div className="text-[10px] text-[#00FF88]/70">Analyse de progression • Visio</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Image carousel screen (shared) ──────────────────────────────────────────
function ImageScreen({ images, imageIndex }: { images: string[]; imageIndex: number }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Screenshot ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 ${i === imageIndex ? "opacity-100" : "opacity-0"}`}
          sizes="320px"
          priority={i === 0}
        />
      ))}
      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === imageIndex ? "bg-[#00FF88] w-4" : "bg-white/40 w-2"}`} />
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CoachMode({ dict }: CoachModeProps) {
  const [activeTab, setActiveTab]   = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const advance = useCallback(() => {
    const imgs = TAB_IMAGES[activeTab];
    if (imgs.length > 0 && imageIndex < imgs.length - 1) {
      setImageIndex((prev) => prev + 1);
    } else {
      setActiveTab((prev) => (prev + 1) % TOTAL_TABS);
      setImageIndex(0);
    }
  }, [activeTab, imageIndex]);

  useEffect(() => {
    const imgs  = TAB_IMAGES[activeTab];
    const delay = imgs.length > 0 ? IMAGE_DURATION : MOCK_DURATION;
    const timer = setTimeout(advance, delay);
    return () => clearTimeout(timer);
  }, [activeTab, imageIndex, advance]);

  const handleTabClick = (i: number) => {
    setActiveTab(i);
    setImageIndex(0);
  };

  const mockScreens: Record<number, JSX.Element> = {
    1: <MockCreationScreen dict={dict} />,
    2: <MockAnalyticsScreen dict={dict} />,
    3: <MockChatScreen dict={dict} />,
    4: <MockCalendarScreen dict={dict} />,
  };

  const tools = [
    { icon: <UserCheck className="w-4 h-4" />,     title: dict.coachMode.tools.profile.title,       desc: dict.coachMode.tools.profile.desc },
    { icon: <ClipboardList className="w-4 h-4" />, title: dict.coachMode.tools.creation.title,      desc: dict.coachMode.tools.creation.desc },
    { icon: <LineChart className="w-4 h-4" />,     title: dict.coachMode.tools.analytics.title,     desc: dict.coachMode.tools.analytics.desc },
    { icon: <MessageCircle className="w-4 h-4" />, title: dict.coachMode.tools.communication.title, desc: dict.coachMode.tools.communication.desc },
    { icon: <Calendar className="w-4 h-4" />,      title: dict.coachMode.tools.calendar.title,      desc: dict.coachMode.tools.calendar.desc },
  ];

  const imgs = TAB_IMAGES[activeTab];
  const currentScreen = imgs.length > 0
    ? <ImageScreen images={imgs} imageIndex={imageIndex} />
    : mockScreens[activeTab];

  return (
    <section id="coachs" className="relative py-24 bg-[#11181c]">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#00FF88]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#152026] border border-white/10 text-[#00FF88] font-bold text-[10px] uppercase tracking-widest mb-6">
            {dict.coachMode.badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-4">
            {dict.coachMode.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-emerald-200">{dict.coachMode.title2}</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A0AAB2] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {dict.coachMode.desc}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center lg:items-stretch">

          {/* Right: Sidebar Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col gap-3"
          >
            {tools.map((t, i) => {
              const isActive = activeTab === i;
              return (
                <button
                  key={i}
                  onClick={() => handleTabClick(i)}
                  className={`flex items-start text-left gap-4 p-4 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-[#00FF88]/10 border-[#00FF88]/30 shadow-[0_0_20px_rgba(0,255,136,0.05)] -translate-x-2"
                      : "bg-[#152026] border-white/5 hover:border-white/10 hover:bg-white/5"
                  }`}
                >
                  <div className={`mt-1 w-8 h-8 shrink-0 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? "bg-[#00FF88] text-[#0D1317]" : "bg-white/5 text-[#A0AAB2]"
                  }`}>
                    {t.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm font-bold mb-1 transition-colors ${isActive ? "text-[#00FF88]" : "text-white"}`}>
                      {t.title}
                    </h3>
                    <p className="text-xs text-[#A0AAB2] leading-relaxed">{t.desc}</p>
                  </div>
                  {/* Image progress dots for tabs with images */}
                  {isActive && TAB_IMAGES[i].length > 1 && (
                    <div className="flex gap-1 mt-2 shrink-0">
                      {TAB_IMAGES[i].map((_, di) => (
                        <div key={di} className={`h-1 rounded-full transition-all duration-300 ${di === imageIndex ? "bg-[#00FF88] w-3" : "bg-white/20 w-1.5"}`} />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Left: Tablet Device Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex items-center justify-center py-8 lg:py-0"
          >
            <div className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[650px] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border-[3px] sm:border-4 border-[#152026] flex shrink-0 ring-1 ring-white/10">
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 mx-auto w-24 sm:w-32 h-5 sm:h-6 bg-black rounded-b-xl z-50 flex items-end justify-center pb-1">
                <div className="w-10 sm:w-12 h-1 bg-white/20 rounded-full" />
              </div>
              {/* Screen */}
              <div className="w-full h-full bg-[#0D1317] rounded-[2rem] sm:rounded-[2.25rem] overflow-hidden relative">
                <div key={`${activeTab}-${imageIndex}`} className="w-full h-full animate-[fadeIn_0.4s_ease-out_forwards]">
                  {currentScreen}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
