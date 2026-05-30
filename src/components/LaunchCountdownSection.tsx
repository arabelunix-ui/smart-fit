"use client";

import { useState, useEffect } from "react";
import { CalendarClock, Sparkles, ShieldCheck, Zap, MonitorSmartphone, Users, Brain, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    title: "Application Bouda Med Chef",
    description: "Le tableau de bord central exclusif au Chef de Projet pour le pilotage stratégique.",
    icon: <MonitorSmartphone className="w-12 h-12 text-[#FF5F6D]" />,
    color: "from-[#FF5F6D]/20 to-transparent",
    border: "border-[#FF5F6D]/30"
  },
  {
    title: "Application Encadrant",
    description: "L'outil de communication et de gestion des tâches fluide pour toute l'équipe.",
    icon: <Users className="w-12 h-12 text-[#10b981]" />,
    color: "from-[#10b981]/20 to-transparent",
    border: "border-[#10b981]/30"
  },
  {
    title: "Salle de Réunion Numérique",
    description: "Espace virtuel équipé d'outils d'IA pour générer tableaux et statistiques en temps réel.",
    icon: <Brain className="w-12 h-12 text-[#8b5cf6]" />,
    color: "from-[#8b5cf6]/20 to-transparent",
    border: "border-[#8b5cf6]/30"
  }
];

export default function LaunchCountdownSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full rounded-[32px] overflow-hidden mb-24 mt-12 bg-[#111] border border-white/10 group">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF5F6D]/10 via-transparent to-[#FFC371]/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF5F6D]/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3"></div>

      <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content (Text & Date) */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#FFC371]" />
            <span className="text-sm font-medium tracking-wide uppercase text-gray-300">Annonce Officielle</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            La plateforme complète <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">Bouda Med Company</span> arrive.
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-xl mb-12 leading-relaxed">
            L'intégralité de nos outils de gestion, la salle de réunion numérique et l'IA de pilotage stratégique seront déployés et accessibles simultanément.
          </p>

          {/* The Date / Time Display */}
          <div className="bg-black/40 backdrop-blur-md border border-[#FF5F6D]/30 rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-[0_0_40px_rgba(255,95,109,0.15)] relative overflow-hidden mb-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]"></div>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-[#FF5F6D]/10 flex items-center justify-center shrink-0">
                <CalendarClock className="w-7 h-7 text-[#FF5F6D]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-1">Lancement Prévu</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">31 Août 2026</p>
                <p className="text-lg text-[#FFC371] font-mono">20:00 (Heure locale)</p>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Sécurité opérationnelle</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Infrastructure IA prête</span>
            </div>
          </div>
        </div>

        {/* Right Content (Mobile Phone Slider) */}
        <div className="relative w-full max-w-[320px] shrink-0">
          {/* Phone Frame */}
          <div className="relative z-20 w-full aspect-[9/19] bg-black border-[10px] border-gray-900 rounded-[48px] shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-30"></div>
            
            {/* Phone Screen Area */}
            <div className="relative w-full h-full bg-[#0a0a0a]">
              {SLIDES.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out p-6 flex flex-col pt-20 ${
                    index === currentSlide 
                      ? "opacity-100 translate-x-0" 
                      : index < currentSlide 
                        ? "opacity-0 -translate-x-full" 
                        : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${slide.color} opacity-30 pointer-events-none`}></div>
                  
                  <div className="flex-1 flex flex-col justify-center relative z-10">
                    <div className={`w-24 h-24 mx-auto rounded-3xl bg-black/50 backdrop-blur-md border ${slide.border} flex items-center justify-center mb-8 shadow-2xl`}>
                      {slide.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-center text-white mb-4 leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-center text-gray-400 text-sm leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  <div className="relative z-10 w-full h-1 bg-white/10 rounded-full overflow-hidden mt-8">
                    <div className={`h-full bg-white transition-all duration-[3000ms] ease-linear ${index === currentSlide ? "w-full" : "w-0"}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF5F6D]/20 blur-[80px] rounded-full z-10"></div>
        </div>

      </div>
    </section>
  );
}
