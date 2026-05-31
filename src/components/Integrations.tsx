"use client";
import { RefreshCw, Activity } from "lucide-react";
import Image from "next/image";
import { SiStrava, SiSamsung, SiApple, SiGooglefit, SiGarmin, SiFitbit } from "react-icons/si";

interface IntegrationsProps {
  dict: any;
}

export default function Integrations({ dict }: IntegrationsProps) {
  const integrations = [
    { name: "Strava", color: "text-[#FC4C02]", bg: "bg-[#FC4C02]/10", border: "border-[#FC4C02]/20" },
    { name: "Samsung Health", color: "text-[#1428A0]", bg: "bg-blue-500/10", border: "border-blue-500/20", displayColor: "text-blue-400" },
    { name: "Apple Health", color: "text-[#FF2D55]", bg: "bg-[#FF2D55]/10", border: "border-[#FF2D55]/20" },
    { name: "Google Fit", color: "text-[#1FA463]", bg: "bg-[#1FA463]/10", border: "border-[#1FA463]/20" },
    { name: "Garmin Connect", color: "text-white", bg: "bg-white/5", border: "border-white/10" }
  ];

  return (
    <section className="relative py-24 scroll-mt-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00FF88]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 sm:px-12 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#152026] border border-white/10 text-[#00FF88] font-bold text-[10px] uppercase tracking-widest mb-6">
          <RefreshCw className="w-3 h-3 animate-spin-slow" /> {dict.integrations.badge}
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-6">
          {dict.integrations.title1}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-emerald-200">
            {dict.integrations.title2}
          </span>
        </h2>
        
        <p className="text-sm sm:text-base text-[#A0AAB2] max-w-2xl mx-auto leading-relaxed mb-12">
          {dict.integrations.desc}
        </p>

        {/* Advanced Orbiting Sync Network */}
        <div className="relative w-full max-w-[800px] h-[400px] sm:h-[800px] mx-auto mt-8 sm:mt-16 mb-8 flex items-center justify-center scale-[0.6] sm:scale-100">
          
          {/* Glowing Center Hub (SmartFit) */}
          <div className="absolute z-30 flex items-center justify-center">
            <div className="w-24 h-24 bg-[#0D1317] rounded-3xl border border-[#00FF88] flex items-center justify-center shadow-[0_0_60px_rgba(0,255,136,0.4)] relative">
               <div className="absolute inset-0 rounded-3xl border border-[#00FF88] animate-ping opacity-30" />
               <div className="w-12 h-12 flex items-center justify-center relative z-10">
                 <Image src="/logo.png" alt="SmartFit Logo" width={48} height={48} className="object-contain" />
               </div>
            </div>
          </div>

          {/* Orbit Ring 1 */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite] z-20">
            {/* Strava */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 animate-[spin_20s_linear_infinite_reverse]">
              <div className="relative group cursor-pointer">
                <div className="w-14 h-14 bg-[#152026] border border-[#FC4C02]/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(252,76,2,0.15)] group-hover:scale-110 transition-transform">
                  <SiStrava className="w-6 h-6 text-[#FC4C02]" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#152026] text-white text-[10px] px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">Strava</div>
              </div>
            </div>
            {/* Samsung Health */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 animate-[spin_20s_linear_infinite_reverse]">
              <div className="relative group cursor-pointer">
                <div className="w-14 h-14 bg-[#152026] border border-blue-500/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform">
                  <SiSamsung className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#152026] text-white text-[10px] px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">Samsung Health</div>
              </div>
            </div>
          </div>

          {/* Orbit Ring 2 */}
          <div className="absolute w-[460px] h-[460px] rounded-full border border-white/5 animate-[spin_35s_linear_infinite_reverse] z-10">
            {/* Apple Health */}
            <div className="absolute top-1/2 -left-7 -translate-y-1/2 animate-[spin_35s_linear_infinite]">
              <div className="relative group cursor-pointer">
                <div className="w-14 h-14 bg-[#152026] border border-[#FF2D55]/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,45,85,0.15)] group-hover:scale-110 transition-transform">
                  <SiApple className="w-6 h-6 text-[#FF2D55]" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#152026] text-white text-[10px] px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">Apple Health</div>
              </div>
            </div>
            {/* Google Fit */}
            <div className="absolute top-1/2 -right-7 -translate-y-1/2 animate-[spin_35s_linear_infinite]">
              <div className="relative group cursor-pointer">
                <div className="w-14 h-14 bg-[#152026] border border-[#1FA463]/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(31,164,99,0.15)] group-hover:scale-110 transition-transform">
                  <SiGooglefit className="w-6 h-6 text-[#1FA463]" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#152026] text-white text-[10px] px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">Google Fit</div>
              </div>
            </div>
          </div>

          {/* Orbit Ring 3 */}
          <div className="absolute w-[640px] h-[640px] rounded-full border border-dashed border-white/5 animate-[spin_50s_linear_infinite] z-0 hidden sm:block">
            {/* Garmin */}
            <div className="absolute top-[14%] right-[14%] -translate-x-1/2 -translate-y-1/2 animate-[spin_50s_linear_infinite_reverse]">
              <div className="relative group cursor-pointer">
                <div className="w-14 h-14 bg-[#152026] border border-slate-400/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(148,163,184,0.1)] group-hover:scale-110 transition-transform">
                  <SiGarmin className="w-6 h-6 text-slate-300" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#152026] text-white text-[10px] px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">Garmin Connect</div>
              </div>
            </div>
            {/* Fitbit */}
            <div className="absolute bottom-[14%] left-[14%] -translate-x-1/2 translate-y-1/2 animate-[spin_50s_linear_infinite_reverse]">
              <div className="relative group cursor-pointer">
                <div className="w-14 h-14 bg-[#152026] border border-teal-400/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.1)] group-hover:scale-110 transition-transform">
                  <SiFitbit className="w-6 h-6 text-teal-400" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#152026] text-white text-[10px] px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">Fitbit</div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
