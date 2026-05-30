"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    text: "With Qoder, I can just state my needs and instantly create a working version that I can test and validate in the market.",
    name: "Yinhai",
    title: "AI Product Manager",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    text: "I switched from Cursor and Windsurf. Quest Mode handles specs, testing and refactors, and Repo Wiki keeps architecture clear.",
    name: "Charly Wargnier",
    title: "Developer Advocate",
    avatar: "https://i.pravatar.cc/150?img=33"
  },
  {
    text: "A tricky benchmark bugfix stumped Cursor, Kiro, Trae and Gemini CLI. Qoder solved it in about 30 minutes.",
    name: "Santiago",
    title: "Founder of ml.school",
    avatar: "https://i.pravatar.cc/150?img=59"
  },
  {
    text: "Qoder's deep understanding of the entire codebase is unparalleled. What used to take hours of context-gathering now takes seconds.",
    name: "Sarah Jenkins",
    title: "Senior Frontend Engineer",
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    text: "The Agentic Chat is brilliant. It feels like having a senior engineer pair programming with you, anticipating exactly what you need.",
    name: "David Chen",
    title: "Fullstack Developer",
    avatar: "https://i.pravatar.cc/150?img=12"
  }
];

// Duplicate for infinite seamless scroll
const extendedTestimonials = [...testimonials, ...testimonials];

// Reusable Star component filled with green
const GreenStar = () => (
  <Star className="w-[18px] h-[18px] fill-[#FF5F6D] text-[#FF5F6D]" />
);

export default function CommunitySection() {
  return (
    <section className="bg-[#050505] py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16 max-w-7xl mx-auto">
          
          <div className="flex flex-col gap-6">
            {/* Avatars and Rating */}
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                 <img src="https://i.pravatar.cc/150?img=68" alt="user" className="w-10 h-10 rounded-full border-2 border-[#050505] z-40 relative" />
                 <img src="https://i.pravatar.cc/150?img=35" alt="user" className="w-10 h-10 rounded-full border-2 border-[#050505] z-30 relative" />
                 <img src="https://i.pravatar.cc/150?img=12" alt="user" className="w-10 h-10 rounded-full border-2 border-[#050505] z-20 relative" />
                 <img src="https://i.pravatar.cc/150?img=47" alt="user" className="w-10 h-10 rounded-full border-2 border-[#050505] z-10 relative" />
               </div>
               <div className="flex flex-col">
                 <div className="flex gap-1 mb-1">
                   <GreenStar /><GreenStar /><GreenStar /><GreenStar /><GreenStar />
                 </div>
                 <div className="text-[14px] text-gray-400 font-medium">
                   <strong className="text-white">1,000,000+</strong> Devs worldwide
                 </div>
               </div>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="text-4xl sm:text-[46px] font-semibold tracking-tight text-white mb-4">
                Join the community!
              </h2>
              <p className="text-[#a1a1aa] text-lg sm:text-xl max-w-xl">
                Explore Agentic Coding with millions of developers.
              </p>
            </div>
          </div>

          <div className="lg:max-w-xs text-[#888888] text-[17px] leading-relaxed">
            Authentic feedback on BoudaMed from developers worldwide.
          </div>
        </div>

        {/* Testimonials Auto-Scrolling Marquee */}
        <div className="relative mt-12 overflow-hidden w-[100vw] -ml-[50vw] left-1/2">
          {/* Fading edges for smooth entry/exit effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Track */}
          <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] pb-4 px-12">
            {extendedTestimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="w-[350px] sm:w-[420px] min-h-[260px] bg-[#111] hover:bg-[#151515] transition-colors border border-white/5 rounded-3xl p-8 flex flex-col justify-between shrink-0 shadow-lg cursor-grab active:cursor-grabbing"
              >
                <p className="text-gray-300 text-[17px] leading-relaxed mb-8 font-light">
                  "{t.text}"
                </p>
                
                <div>
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10" />
                    <div>
                      <div className="text-white font-medium text-base">{t.name}</div>
                      <div className="text-gray-500 text-sm">{t.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
      `}} />
    </section>
  );
}
