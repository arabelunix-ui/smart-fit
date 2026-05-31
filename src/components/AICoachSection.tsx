"use client";
import { Bot, Zap, Target, Cpu, User } from "lucide-react";
import { motion } from "framer-motion";

interface AICoachSectionProps {
  dict: any;
}

export default function AICoachSection({ dict }: AICoachSectionProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0D1317]">
      {/* Inline styles for custom animations */}
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #00FF88 }
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF88]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: AI Interface Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative h-[550px] flex items-center justify-center"
          >
            
            <div className="relative w-full max-w-md bg-[#152026] rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
              
              {/* Scanline Effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00FF88] shadow-[0_0_15px_#00FF88] z-50 animate-[scanline_4s_linear_infinite]" />

              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#00FF88]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{dict.aiCoach.mock.engineName}</div>
                  <div className="text-[10px] text-[#00FF88] font-mono tracking-widest flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-[#00FF88] rounded-full animate-pulse" /> V4.2 {dict.aiCoach.mock.connected}
                  </div>
                </div>
              </div>

              {/* User Prompt */}
              <div className="bg-[#0D1317] rounded-2xl p-4 border border-white/5 mb-6 relative">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#00FF88] rounded-full" />
                <div className="text-[10px] text-[#A0AAB2] mb-2 uppercase tracking-wider font-bold flex items-center gap-2">
                  <User className="w-3 h-3"/> {dict.aiCoach.mock.yourGoal}
                </div>
                <div className="text-xs text-white leading-relaxed font-medium">
                  {dict.aiCoach.mock.goalText}
                </div>
              </div>

              {/* AI Processing State */}
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-4 h-4 text-[#00FF88] animate-pulse" />
                <div className="text-[10px] text-[#00FF88] font-mono font-bold tracking-widest">
                  {dict.aiCoach.mock.generating}<span className="animate-pulse">...</span>
                </div>
              </div>

              {/* Generated Output */}
              <div className="space-y-3 relative">
                
                {/* Connecting timeline line */}
                <div className="absolute left-2.5 top-2 bottom-2 w-px bg-white/5 z-0" />

                <div className="relative z-10 bg-gradient-to-r from-[#00FF88]/10 to-transparent border border-[#00FF88]/20 p-3 rounded-xl ml-6 group hover:border-[#00FF88]/40 transition-colors">
                  <div className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00FF88] shadow-[0_0_10px_#00FF88]" />
                  <div className="text-[11px] font-bold text-white mb-1">{dict.aiCoach.mock.day1}</div>
                  <div className="text-[10px] text-[#A0AAB2]">{dict.aiCoach.mock.day1Desc}</div>
                </div>
                
                <div className="relative z-10 bg-gradient-to-r from-white/5 to-transparent border border-white/5 p-3 rounded-xl ml-6 group hover:border-white/20 transition-colors opacity-80">
                  <div className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#152026] border-2 border-white/20" />
                  <div className="text-[11px] font-bold text-white mb-1">{dict.aiCoach.mock.day2}</div>
                  <div className="text-[10px] text-[#A0AAB2]">{dict.aiCoach.mock.day2Desc}</div>
                </div>
                
                <div className="relative z-10 bg-gradient-to-r from-white/5 to-transparent border border-white/5 p-3 rounded-xl ml-6 group hover:border-white/20 transition-colors opacity-50">
                  <div className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#152026] border-2 border-white/20" />
                  <div className="text-[11px] font-bold text-white mb-1">{dict.aiCoach.mock.day3}</div>
                  <div className="text-[10px] text-[#A0AAB2]">{dict.aiCoach.mock.day3Desc}</div>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Right: Marketing Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#152026] border border-white/10 text-[#00FF88] font-bold text-[10px] uppercase tracking-widest mb-6">
              <Bot className="w-3 h-3" /> {dict.aiCoach.badge}
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-6">
              {dict.aiCoach.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-emerald-200">{dict.aiCoach.title2}</span>
            </h2>
            
            <p className="text-sm sm:text-base text-[#A0AAB2] leading-relaxed mb-8">
              {dict.aiCoach.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#152026] p-5 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#00FF88]/10 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-[#00FF88]" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{dict.aiCoach.instant.title}</h4>
                <p className="text-xs text-[#A0AAB2]">{dict.aiCoach.instant.desc}</p>
              </div>
              
              <div className="bg-[#152026] p-5 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#00FF88]/10 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-[#00FF88]" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{dict.aiCoach.adaptive.title}</h4>
                <p className="text-xs text-[#A0AAB2]">{dict.aiCoach.adaptive.desc}</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
