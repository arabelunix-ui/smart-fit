"use client";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// ─── Language slides ──────────────────────────────────────────────────────────
const LANGUAGES = [
  { code: "fr", label: "Français",  flag: "🇫🇷" },
  { code: "en", label: "English",   flag: "🇬🇧" },
  { code: "ar", label: "العربية",   flag: "🇸🇦" },
  { code: "de", label: "Deutsch",   flag: "🇩🇪" },
  { code: "es", label: "Español",   flag: "🇪🇸" },
];

const SLIDE_DURATION = 2800;

// ─── Marquee strip ────────────────────────────────────────────────────────────
const ALL_LANGUAGES = [
  { flag: "🇫🇷", name: "Français" },  { flag: "🇬🇧", name: "English" },
  { flag: "🇸🇦", name: "العربية" },   { flag: "🇩🇪", name: "Deutsch" },
  { flag: "🇪🇸", name: "Español" },   { flag: "🇵🇹", name: "Português" },
  { flag: "🇮🇹", name: "Italiano" },  { flag: "🇳🇱", name: "Nederlands" },
  { flag: "🇷🇺", name: "Русский" },   { flag: "🇨🇳", name: "中文" },
  { flag: "🇯🇵", name: "日本語" },    { flag: "🇰🇷", name: "한국어" },
  { flag: "🇹🇷", name: "Türkçe" },   { flag: "🇵🇱", name: "Polski" },
  { flag: "🇸🇪", name: "Svenska" },   { flag: "🇮🇳", name: "हिन्दी" },
];
const MARQUEE = [...ALL_LANGUAGES, ...ALL_LANGUAGES];

// ─── Single phone frame with images cycling inside ────────────────────────────
function PhoneDevice({
  folder,
  label,
  activeIndex,
}: {
  folder: "cover" | "app";
  label: string;
  activeIndex: number;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-[10px] uppercase tracking-widest text-[#A0AAB2] font-semibold">
        {label}
      </div>

      {/* Phone shell */}
      <div className="relative w-[190px] h-[410px] sm:w-[220px] sm:h-[470px] bg-black rounded-[2.8rem] p-2.5 shadow-2xl border-4 border-[#152026] ring-1 ring-white/10">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 mx-auto w-24 h-5 bg-black rounded-b-xl z-50 flex items-end justify-center pb-1">
          <div className="w-10 h-0.5 bg-white/20 rounded-full" />
        </div>

        {/* Screen — all images stacked, only active one is visible */}
        <div className="w-full h-full bg-[#0D1317] rounded-[2.1rem] overflow-hidden relative">
          {LANGUAGES.map((lang, i) => (
            <Image
              key={lang.code}
              src={`/features/language/${folder}/${lang.code}.jpeg`}
              alt={`${lang.label} ${folder}`}
              fill
              className={`object-cover transition-opacity duration-700 ${
                i === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              sizes="220px"
              priority={i === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function LanguagesSection() {
  const [index, setIndex] = useState(0);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % LANGUAGES.length);
  }, []);

  useEffect(() => {
    const timer = setTimeout(advance, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [index, advance]);

  const current = LANGUAGES[index];

  return (
    <section className="relative py-24 bg-[#0D1317] overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#00FF88]/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00FF88]/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#152026] border border-white/10 text-[#00FF88] font-bold text-[10px] uppercase tracking-widest mb-6">
            <Globe className="w-3 h-3" /> Multilingue
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-4">
            Une appli,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-emerald-200">
              toutes les langues
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A0AAB2] max-w-2xl mx-auto leading-relaxed">
            Disponible dans plus de{" "}
            <strong className="text-white">16 langues</strong>, notre
            application s'adapte à chaque coach et chaque athlète, partout dans
            le monde.
          </p>
        </motion.div>

        {/* Two phones + centre badge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          {/* Phone 1 – cover */}
          <PhoneDevice folder="cover" label="Présentation" activeIndex={index} />

          {/* Centre: flag + language name + dots */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-5xl sm:text-6xl leading-none transition-all duration-500 drop-shadow-lg">
              {current.flag}
            </span>
            <div className="px-4 py-2 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-full text-[#00FF88] font-bold text-sm whitespace-nowrap">
              {current.label}
            </div>
            {/* Dot nav */}
            <div className="flex gap-2 mt-1">
              {LANGUAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "bg-[#00FF88] w-5" : "bg-white/20 w-2"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Phone 2 – app */}
          <PhoneDevice folder="app" label="Application" activeIndex={index} />
        </motion.div>

        {/* Marquee strip */}
        <div className="mt-20 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex gap-4 animate-[marquee_35s_linear_infinite]">
            {MARQUEE.map((l, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2 bg-[#152026] border border-white/8 rounded-full shrink-0"
              >
                <span className="text-xl leading-none">{l.flag}</span>
                <span className="text-sm font-medium text-[#A0AAB2] whitespace-nowrap">
                  {l.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { value: "16+",  label: "Langues disponibles" },
            { value: "190+", label: "Pays couverts" },
            { value: "100%", label: "Traduit nativement" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#152026] border border-white/5 rounded-2xl p-6 text-center hover:border-[#00FF88]/20 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-emerald-300 mb-2">
                {s.value}
              </div>
              <div className="text-sm text-[#A0AAB2]">{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
