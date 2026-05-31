"use client";
import { Star, ShieldCheck, Zap } from "lucide-react";
import { SiApple, SiGoogleplay } from "react-icons/si";

interface DownloadSectionProps {
  dict: any;
}

export default function DownloadSection({ dict }: DownloadSectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="bg-[#152026] rounded-[3rem] border border-white/5 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between p-10 md:p-16 lg:p-20 shadow-2xl">
          
          {/* Background Gradient Effect */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00FF88]/10 blur-[150px] rounded-full pointer-events-none" />

          {/* Left: Text and CTAs */}
          <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              {dict.download.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-emerald-200">{dict.download.title2}</span>
            </h2>
            <p className="text-base sm:text-lg text-[#A0AAB2] max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
              {dict.download.desc}
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              {/* App Store Button */}
              <div className="flex items-center gap-3 bg-white/90 text-[#0D1317] px-6 py-3.5 rounded-2xl border border-transparent w-full sm:w-auto justify-center opacity-80 cursor-default">
                <SiApple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-[10px] font-semibold opacity-70 leading-none mb-1">Prochainement sur</div>
                  <div className="text-sm font-extrabold leading-none">App Store</div>
                </div>
              </div>

              {/* Google Play Button */}
              <div className="flex items-center gap-3 bg-[#0D1317] border border-white/20 text-white px-6 py-3.5 rounded-2xl w-full sm:w-auto justify-center group opacity-80 cursor-default">
                <SiGoogleplay className="w-6 h-6 text-[#00FF88]" />
                <div className="text-left">
                  <div className="text-[10px] font-semibold text-[#A0AAB2] leading-none mb-1">Prochainement sur</div>
                  <div className="text-sm font-extrabold leading-none text-white">Google Play</div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <div className="flex text-[#00FF88]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs font-bold text-white">{dict.download.rating}</span>
                <span className="text-xs text-[#A0AAB2]">{dict.download.reviews}</span>
              </div>
              <div className="w-1 h-1 bg-white/20 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2 text-xs text-[#A0AAB2]">
                <ShieldCheck className="w-4 h-4 text-[#00FF88]" /> {dict.download.secureData}
              </div>
            </div>
          </div>

          {/* Right: Mockups iOS & Android */}
          <div className="w-full lg:w-1/2 relative h-[500px] mt-16 lg:mt-0 flex justify-center lg:justify-end z-10 pointer-events-none">
            
            {/* Android Device (Background) */}
            <div className="absolute top-12 left-1/2 lg:left-[45%] -translate-x-1/2 lg:-translate-x-0 w-[230px] h-[480px] bg-[#0A0F13] rounded-[2.5rem] border-4 border-[#1A252C] shadow-2xl rotate-12 opacity-80 scale-90 z-10 overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1A252C] rounded-full z-20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-black"/></div>
              <div className="relative w-full h-full bg-[#0D1317]">
                <img 
                  src="/3.png" 
                  alt={dict.download.altAndroid || "App Interface Android"} 
                  className="w-full h-full object-cover object-top opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0F13]/90 pointer-events-none mix-blend-overlay" />
              </div>
            </div>

            {/* iOS Device (Foreground) */}
            <div className="absolute top-0 left-1/2 lg:left-[15%] -translate-x-1/2 lg:-translate-x-0 w-[250px] h-[520px] bg-[#0D1317] rounded-[3rem] border-[6px] border-[#2A3439] shadow-[0_20px_50px_rgba(0,0,0,0.8),_0_0_40px_rgba(0,255,136,0.15)] -rotate-6 z-20 overflow-hidden group">
              
              {/* Dynamic Island Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#000000] rounded-full z-30 flex items-center justify-between px-2">
                 <div className="w-2 h-2 rounded-full bg-[#00FF88]/20 flex items-center justify-center"><div className="w-1 h-1 bg-[#00FF88] rounded-full animate-pulse"/></div>
                 <div className="w-3 h-3 rounded-full bg-[#1A252C]" />
              </div>

              {/* App UI */}
              <div className="relative w-full h-full bg-[#0D1317]">
                <img 
                  src="/1.png" 
                  alt={dict.download.altIOS || "SmartFit App Interface iOS"} 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Bottom Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/50 rounded-full z-30 shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
