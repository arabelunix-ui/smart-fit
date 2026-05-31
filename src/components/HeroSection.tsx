"use client";
import { Dumbbell, Play, Activity, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroSectionProps {
  dict: any;
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden border-b border-white/5 bg-[#0D1317]">
      
      {/* --- CSS Animations --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatMain {
          0% { transform: translateY(0px) rotateY(-8deg) rotateX(4deg); }
          100% { transform: translateY(-12px) rotateY(-8deg) rotateX(4deg); }
        }
        @keyframes floatSideLeft {
          0% { transform: translateY(0px) rotateY(12deg) rotateX(4deg) translateZ(-40px); }
          100% { transform: translateY(-8px) rotateY(12deg) rotateX(4deg) translateZ(-40px); }
        }
        @keyframes floatSideRight {
          0% { transform: translateY(0px) rotateY(-12deg) rotateX(4deg) translateZ(-40px); }
          100% { transform: translateY(-8px) rotateY(-12deg) rotateX(4deg) translateZ(-40px); }
        }
        @keyframes ai_pulse {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(0.95); }
        }
        @keyframes drift {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        @keyframes floatParticle {
          0% { transform: translateY(0px) scale(0.8); opacity: 0.3; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 0.8; }
          100% { transform: translateY(0px) scale(0.8); opacity: 0.3; }
        }
      `}} />

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FF88]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00FF88]/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Squares */}
        <div className="absolute top-[20%] left-[10%] w-16 h-16 border border-[#00FF88]/20 rounded-xl" style={{ animation: 'drift 12s infinite linear' }} />
        <div className="absolute top-[60%] right-[15%] w-24 h-24 border border-[#00FF88]/10 rounded-2xl" style={{ animation: 'drift 18s infinite linear reverse' }} />
        <div className="absolute bottom-[20%] left-[30%] w-12 h-12 border border-[#3878FF]/20 rounded-lg" style={{ animation: 'drift 15s infinite linear' }} />
        
        {/* Little Balls (Particles) */}
        <div className="absolute top-[30%] right-[30%] w-3 h-3 bg-[#00FF88]/40 rounded-full blur-[1px]" style={{ animation: 'floatParticle 8s infinite ease-in-out' }} />
        <div className="absolute bottom-[40%] left-[20%] w-4 h-4 bg-[#3878FF]/30 rounded-full blur-[2px]" style={{ animation: 'floatParticle 10s infinite ease-in-out 1s' }} />
        <div className="absolute top-[70%] left-[50%] w-2 h-2 bg-[#00FF88]/60 rounded-full" style={{ animation: 'floatParticle 6s infinite ease-in-out 2s' }} />
        <div className="absolute top-[15%] left-[50%] w-5 h-5 bg-[#00FF88]/20 rounded-full blur-[2px]" style={{ animation: 'floatParticle 12s infinite ease-in-out' }} />
        <div className="absolute bottom-[10%] right-[40%] w-3 h-3 bg-[#3878FF]/40 rounded-full" style={{ animation: 'floatParticle 9s infinite ease-in-out 3s' }} />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 h-full flex flex-col lg:flex-row items-center justify-between py-12 lg:py-0">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 pt-12 lg:pt-0 z-20">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00FF88] font-bold text-[10px] uppercase tracking-widest backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00FF88]"></span>
            </span>
            {dict.hero.badge}
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
            {dict.hero.title1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-emerald-200">
              {dict.hero.title2}
            </span>
          </h1>
          
          <p className="text-sm sm:text-base text-[#A0AAB2] max-w-lg leading-relaxed">
            {dict.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#00FF88] text-[#0D1317] text-xs font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,255,136,0.2)] hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]">
              <Dumbbell className="w-3.5 h-3.5" /> {dict.hero.ctaStart}
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#152026] text-white text-xs border border-white/10 font-bold rounded-full transition-all hover:bg-white/5 group">
              <Play className="w-3.5 h-3.5 group-hover:text-[#00FF88] transition-colors" /> {dict.hero.ctaDiscover}
            </button>
          </div>
          
          <div className="pt-4 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0D1317] bg-[#152026] flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#00FF88]/20 to-transparent" />
                </div>
              ))}
            </div>
            <div className="text-[10px] text-[#A0AAB2] tracking-wide">
              <strong className="text-white">10 000+</strong> {dict.hero.activeAthletes}
            </div>
          </div>
        </div>

        {/* Right Column: 3D CSS Scene */}
        <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-auto lg:min-h-[600px] relative z-10 flex items-center justify-center mt-12 lg:mt-0">
          <div className="relative w-full max-w-[500px] flex items-center justify-center scale-75 sm:scale-90 lg:scale-100" style={{ perspective: "1000px" }}>
            
            {/* Left Phone: Stats Bars */}
            <div className="absolute left-[-10%] sm:left-[-5%] w-[160px] h-[320px] bg-[#152026] rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                 style={{ animation: "floatSideLeft 4s ease-in-out infinite alternate" }}>
              <div className="relative w-full h-full bg-[#0D1317]">
                <Image 
                  src="/2.png" 
                  alt={dict.hero.altPhoneLeft || "App Interface Left"} 
                  fill
                  sizes="160px"
                  priority
                  className="object-cover object-top opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#A0AAB2]/20 to-[#152026]/90 pointer-events-none mix-blend-overlay" />
              </div>
            </div>

            {/* Right Phone: Progress Stats */}
            <div className="absolute right-[-10%] sm:right-[-5%] w-[160px] h-[320px] bg-[#152026] rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                 style={{ animation: "floatSideRight 4s ease-in-out infinite alternate 0.5s" }}>
              <div className="relative w-full h-full bg-[#0D1317]">
                <Image 
                  src="/3.png" 
                  alt={dict.hero.altPhoneRight || "App Interface Right"} 
                  fill
                  sizes="160px"
                  priority
                  className="object-cover object-top opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#00FF88]/20 to-[#152026]/90 pointer-events-none mix-blend-overlay" />
              </div>
            </div>

            {/* Center Main Phone: App Screen */}
            <div className="absolute z-20 w-[240px] h-[480px] bg-[#0D1317] rounded-[2.5rem] border-[1.5px] border-[#00FF88]/30 shadow-[0_0_60px_rgba(0,255,136,0.15)] overflow-hidden"
                 style={{ animation: "floatMain 3.5s ease-in-out infinite alternate" }}>
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-[#0D1317] rounded-b-2xl border-b border-x border-[#00FF88]/30 z-30" />
              
              {/* Screen Content */}
              <div className="relative w-full h-full bg-[#0D1317]">
                <Image 
                  src="/1.png" 
                  alt={dict.hero.altPhoneMain || "SmartFit App Interface"} 
                  fill
                  sizes="240px"
                  priority
                  className="object-cover object-top"
                />
                {/* Glare/Lighting overlay to blend with the 3D effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00FF88]/10 via-transparent to-white/10 pointer-events-none mix-blend-overlay" />
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}
