"use client";
import { Activity, MapPin, Scale, ScanFace, Apple, ChevronRight, CheckCircle2, TrendingUp, Target } from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface UserFeaturesProps {
  dict: any;
}

// ─── Image lists per feature (empty = mock UI, stays 3s) ────────────────────
const FEATURE_IMAGES: string[][] = [
  // 0 – Programmes
  [
    "/features/programme/program1.jpeg",
    "/features/programme/program2.jpeg",
    "/features/programme/program3.jpeg",
  ],
  // 1 – Posture AI  (mock screen)
  [],
  // 2 – GPS
  [
    "/features/gps/gps1.jpeg",
    "/features/gps/gps2.jpeg",
  ],
  // 3 – Tracking / Suivi
  [
    "/features/suivi/suivi1.jpeg",
    "/features/suivi/suivi2.jpeg",
    "/features/suivi/suivi3.jpeg",
    "/features/suivi/suivi4.jpeg",
    "/features/suivi/suivi5.jpeg",
    "/features/suivi/suivi6.jpeg",
  ],
  // 4 – Nutrition
  [
    "/features/nutrition/nutrition1.jpeg",
    "/features/nutrition/nutrition2.jpeg",
    "/features/nutrition/nutrition3.jpeg",
  ],
];

const IMAGE_DURATION = 2600; // ms per image slide
const MOCK_DURATION  = 3200; // ms for mock screens (no images)
const TOTAL_FEATURES = FEATURE_IMAGES.length;

// ─── Mock screens (receive no state — parent owns it all) ────────────────────

function MockAIScreen({ dict }: { dict: any }) {
  return (
    <div className="flex flex-col h-full bg-black text-white w-full relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2327] to-[#0D1317] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="relative w-40 h-64 border-2 border-[#00FF88]/30 border-dashed rounded-lg flex items-center justify-center">
          <div className="absolute w-2 h-2 bg-[#00FF88] rounded-full top-4" />
          <div className="absolute w-1 h-20 bg-[#00FF88] top-6" />
          <div className="absolute w-12 h-1 border-t-2 border-[#00FF88] top-8" />
          <div className="absolute w-16 h-1 border-t-2 border-[#00FF88] bottom-32" />
          <div className="absolute w-3 h-3 bg-white border-2 border-[#00FF88] rounded-full top-8 -left-6" />
          <div className="absolute w-3 h-3 bg-white border-2 border-[#00FF88] rounded-full top-8 -right-6" />
          <div className="absolute w-3 h-3 bg-white border-2 border-[#00FF88] rounded-full bottom-32 -left-8" />
          <div className="absolute w-3 h-3 bg-white border-2 border-[#00FF88] rounded-full bottom-32 -right-8" />
        </div>
      </div>
      <div className="relative z-10 flex flex-col justify-between h-full p-5">
        <div className="flex justify-between items-start">
          <div className="bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-xs font-bold border border-red-500/30 flex items-center gap-1 animate-pulse">
            <div className="w-2 h-2 bg-red-500 rounded-full" /> REC
          </div>
          <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#00FF88]">00:15</div>
        </div>
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 className="w-5 h-5 text-[#00FF88]" />
            <span className="font-semibold text-sm">{dict.userFeatures.mockAI.postureExcellent}</span>
          </div>
          <p className="text-xs text-[#A0AAB2]">{dict.userFeatures.mockAI.feedback}</p>
        </div>
      </div>
    </div>
  );
}

function MockStatsScreen({ dict }: { dict: any }) {
  return (
    <div className="flex flex-col h-full bg-[#0D1317] p-5 pt-8 text-white w-full">
      <h4 className="text-xl font-bold mb-6">{dict.userFeatures.mockStats.title}</h4>
      <div className="bg-[#152026] rounded-2xl p-4 border border-white/5 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-semibold">{dict.userFeatures.mockStats.bodyWeight}</div>
          <div className="text-[#00FF88] text-xs flex items-center gap-1 bg-[#00FF88]/10 px-2 py-1 rounded-md">
            <TrendingUp className="w-3 h-3" /> -2.4 kg
          </div>
        </div>
        <div className="h-32 flex items-end justify-between gap-2 pt-4 border-b border-white/10 pb-2">
          {[40, 55, 45, 60, 75, 65, 80].map((h, i) => (
            <div key={i} className="w-full bg-[#00FF88]/20 rounded-t-sm relative">
              <div className="absolute bottom-0 w-full bg-[#00FF88] rounded-t-sm" style={{ height: `${h}%` }} />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-[#A0AAB2]">
          {dict.userFeatures.daysShort.map((d: string, i: number) => <span key={i}>{d}</span>)}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#152026] p-4 rounded-xl border border-white/5">
          <Target className="w-5 h-5 text-[#00FF88] mb-2" />
          <div className="text-xs text-[#A0AAB2]">{dict.userFeatures.mockStats.goal}</div>
          <div className="text-lg font-bold">75.0 kg</div>
        </div>
        <div className="bg-[#152026] p-4 rounded-xl border border-white/5">
          <Scale className="w-5 h-5 text-[#00FF88] mb-2" />
          <div className="text-xs text-[#A0AAB2]">{dict.userFeatures.mockStats.current}</div>
          <div className="text-lg font-bold">78.4 kg</div>
        </div>
      </div>
    </div>
  );
}

function MockNutritionScreen({ dict }: { dict: any }) {
  return (
    <div className="flex flex-col h-full bg-[#0D1317] p-5 pt-8 text-white w-full">
      <h4 className="text-xl font-bold mb-6">{dict.userFeatures.mockNutrition.title}</h4>
      <div className="flex justify-center mb-8 relative">
        <svg viewBox="0 0 100 100" className="w-40 h-40 transform -rotate-90">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#152026" strokeWidth="8" />
          <circle cx="50" cy="50" r="45" fill="none" stroke="#00FF88" strokeWidth="8"
            strokeLinecap="round" strokeDasharray="283" strokeDashoffset="80" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-3xl font-bold">1,850</div>
          <div className="text-xs text-[#A0AAB2]">/ 2,400 kcal</div>
        </div>
      </div>
      <div className="flex justify-between gap-2 mb-6">
        {[
          { label: dict.userFeatures.mockNutrition.carbs, val: "120g", color: "bg-blue-400" },
          { label: dict.userFeatures.mockNutrition.proteins, val: "150g", color: "bg-[#00FF88]" },
          { label: dict.userFeatures.mockNutrition.fats, val: "45g", color: "bg-yellow-400" },
        ].map((m, i) => (
          <div key={i} className="flex-1 bg-[#152026] rounded-xl p-3 text-center border border-white/5">
            <div className={`w-8 h-1 mx-auto rounded-full ${m.color} mb-2`} />
            <div className="font-bold text-sm">{m.val}</div>
            <div className="text-[10px] text-[#A0AAB2] uppercase">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Image carousel screen (shared for tabs that have images) ─────────────────
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
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === imageIndex ? "bg-[#00FF88] w-4" : "bg-white/40 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function UserFeatures({ dict }: UserFeaturesProps) {
  const [activeTab, setActiveTab]     = useState(0);
  const [imageIndex, setImageIndex]   = useState(0);

  // Single master timer: advances image first, then tab
  const advance = useCallback(() => {
    const imgs = FEATURE_IMAGES[activeTab];
    if (imgs.length > 0 && imageIndex < imgs.length - 1) {
      // More images in this tab → show next image
      setImageIndex((prev) => prev + 1);
    } else {
      // No more images (or no images at all) → next tab
      setActiveTab((prev) => (prev + 1) % TOTAL_FEATURES);
      setImageIndex(0);
    }
  }, [activeTab, imageIndex]);

  useEffect(() => {
    const imgs   = FEATURE_IMAGES[activeTab];
    const delay  = imgs.length > 0 ? IMAGE_DURATION : MOCK_DURATION;
    const timer  = setTimeout(advance, delay);
    return () => clearTimeout(timer);
  }, [activeTab, imageIndex, advance]);

  // Allow manual tab click (reset image index)
  const handleTabClick = (i: number) => {
    setActiveTab(i);
    setImageIndex(0);
  };

  const mockScreens: Record<number, React.ReactNode> = {
    1: <MockAIScreen dict={dict} />,
    3: <MockStatsScreen dict={dict} />,
    4: <MockNutritionScreen dict={dict} />,
  };

  const features = [
    { icon: <Activity className="w-5 h-5" />, title: dict.userFeatures.features.programs.title,  desc: dict.userFeatures.features.programs.desc },
    { icon: <ScanFace className="w-5 h-5" />, title: dict.userFeatures.features.posture.title,   desc: dict.userFeatures.features.posture.desc },
    { icon: <MapPin   className="w-5 h-5" />, title: dict.userFeatures.features.gps.title,       desc: dict.userFeatures.features.gps.desc },
    { icon: <Scale    className="w-5 h-5" />, title: dict.userFeatures.features.tracking.title,  desc: dict.userFeatures.features.tracking.desc },
    { icon: <Apple    className="w-5 h-5" />, title: dict.userFeatures.features.nutrition.title, desc: dict.userFeatures.features.nutrition.desc },
  ];

  // Resolve the screen to display
  const imgs = FEATURE_IMAGES[activeTab];
  const currentScreen = imgs.length > 0
    ? <ImageScreen images={imgs} imageIndex={imageIndex} />
    : mockScreens[activeTab];

  return (
    <section id="users" className="relative py-24 bg-[#0D1317]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {dict.userFeatures.title} <span className="text-[#00FF88]">{dict.userFeatures.titleHighlight}</span>
          </h2>
          <p className="text-lg text-[#A0AAB2] max-w-2xl">{dict.userFeatures.subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">

          {/* Left: Sidebar Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col gap-3"
          >
            {features.map((f, i) => {
              const isActive = activeTab === i;
              return (
                <button
                  key={i}
                  onClick={() => handleTabClick(i)}
                  className={`flex items-start text-left gap-4 p-5 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-[#00FF88]/10 border-[#00FF88]/30 shadow-[0_0_20px_rgba(0,255,136,0.05)] translate-x-2"
                      : "bg-[#152026] border-white/5 hover:border-white/10 hover:bg-white/5"
                  }`}
                >
                  <div className={`mt-1 w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-colors ${
                    isActive ? "bg-[#00FF88] text-[#0D1317]" : "bg-white/5 text-[#A0AAB2]"
                  }`}>
                    {f.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-1 transition-colors ${isActive ? "text-[#00FF88]" : "text-white"}`}>
                      {f.title}
                    </h3>
                    <p className="text-sm text-[#A0AAB2] leading-relaxed">{f.desc}</p>
                  </div>

                  {/* Progress bar for active tab */}
                  {isActive && (
                    <div className="flex flex-col items-center gap-1 shrink-0 mt-1">
                      <ChevronRight className="w-5 h-5 text-[#00FF88]" />
                      {FEATURE_IMAGES[i].length > 1 && (
                        <div className="flex gap-1">
                          {FEATURE_IMAGES[i].map((_, di) => (
                            <div
                              key={di}
                              className={`h-1 rounded-full transition-all duration-300 ${
                                di === imageIndex ? "bg-[#00FF88] w-3" : "bg-white/20 w-1.5"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Right: Device Showcase */}
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
