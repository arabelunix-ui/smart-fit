"use client";
import { MessageSquare, Video, Phone, Mic, Send, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

interface CommunicationSectionProps {
  dict: any;
}

export default function CommunicationSection({ dict }: CommunicationSectionProps) {
  const features = [
    { icon: <MessageSquare className="w-5 h-5 text-[#00FF88]" />, title: dict.communication.features.chat.title, desc: dict.communication.features.chat.desc },
    { icon: <Video className="w-5 h-5 text-[#00FF88]" />, title: dict.communication.features.challenges.title, desc: dict.communication.features.challenges.desc },
    { icon: <PhoneCall className="w-5 h-5 text-[#00FF88]" />, title: dict.communication.features.social.title, desc: dict.communication.features.social.desc },
  ];

  return (
    <section className="py-24 bg-[#0D1317] relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF88]/5 blur-[120px] rounded-full pointer-events-none" />
       
       <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             
             {/* Left Text Content */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="w-full lg:w-1/2 z-10"
             >
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#152026] border border-white/10 text-[#00FF88] font-bold text-[10px] uppercase tracking-widest mb-6">
                  <MessageSquare className="w-3 h-3" /> {dict.communication.badge}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-6">
                  {dict.communication.title1} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-emerald-200">{dict.communication.title2}</span>
                </h2>
                <p className="text-sm sm:text-base text-[#A0AAB2] leading-relaxed mb-10 max-w-lg">
                  {dict.communication.desc}
                </p>

                <div className="space-y-6">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-[#152026] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#00FF88]/10 group-hover:border-[#00FF88]/30 transition-all">
                        {f.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">{f.title}</h4>
                        <p className="text-xs text-[#A0AAB2] leading-relaxed max-w-sm">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </motion.div>

             {/* Right: Interactive Visual Mockups */}
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
               className="w-full lg:w-1/2 relative h-[500px] z-10 hidden sm:block"
             >
                
                {/* Chat window - Background element */}
                <div className="absolute bottom-0 right-0 lg:right-12 w-[340px] h-[400px] bg-[#152026] rounded-t-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_1s_ease-out_forwards]">
                   {/* Chat Header */}
                   <div className="bg-[#0D1317] p-4 border-b border-white/5 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#00FF88] to-emerald-600 rounded-full flex items-center justify-center text-sm font-bold text-[#0D1317]">CP</div>
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#00FF88] border-2 border-[#0D1317] rounded-full" />
                       </div>
                       <div>
                          <div className="text-sm font-bold text-white">Coach Pro</div>
                          <div className="text-[10px] text-[#00FF88]">En ligne</div>
                       </div>
                     </div>
                     <div className="flex gap-4 text-[#A0AAB2]">
                        <Phone className="w-4 h-4 cursor-pointer hover:text-[#00FF88] transition-colors" />
                        <Video className="w-4 h-4 cursor-pointer hover:text-[#00FF88] transition-colors" />
                     </div>
                   </div>
                   {/* Chat Body */}
                   <div className="flex-1 p-5 flex flex-col gap-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-black/20">
                      <div className="bg-[#0D1317] border border-white/5 p-3 rounded-2xl rounded-tl-sm self-start text-xs text-[#A0AAB2] max-w-[85%] shadow-md">
                        Salut ! Prêt pour le bilan vidéo de la semaine ?
                      </div>
                      <div className="bg-gradient-to-br from-[#00FF88]/20 to-[#00FF88]/5 text-[#00FF88] p-3 rounded-2xl rounded-tr-sm self-end text-xs max-w-[85%] border border-[#00FF88]/30 shadow-[0_5px_15px_rgba(0,255,136,0.05)]">
                        Oui, j'ai tout déchiré ! 🔥 Je suis prêt.
                      </div>
                      <div className="bg-[#0D1317] border border-white/5 p-3 rounded-2xl rounded-tl-sm self-start text-xs text-[#A0AAB2] max-w-[85%] shadow-md">
                        Parfait. Je t'appelle.
                      </div>
                   </div>
                   {/* Chat Input */}
                   <div className="p-4 bg-[#0D1317] border-t border-white/5 flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-[#152026] flex shrink-0 items-center justify-center cursor-pointer hover:text-[#00FF88] hover:bg-white/5 transition-colors"><Mic className="w-4 h-4 text-[#A0AAB2]"/></div>
                     <div className="flex-1 h-9 bg-[#152026] rounded-full px-4 flex items-center text-xs text-[#A0AAB2] border border-white/5">Écrire un message...</div>
                     <div className="w-9 h-9 rounded-full bg-[#00FF88] flex shrink-0 items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(0,255,136,0.4)]"><Send className="w-4 h-4 text-[#0D1317] translate-x-px translate-y-px"/></div>
                   </div>
                </div>

                {/* Floating Video Call popup - Mid-ground */}
                <div className="absolute top-12 left-0 lg:-left-12 w-[300px] bg-[#152026] rounded-3xl p-3 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-[bounce_6s_ease-in-out_infinite]">
                   <div className="relative w-full h-[180px] bg-[#0D1317] rounded-2xl overflow-hidden border border-white/5">
                      {/* Coach Video Simulation (Stock photo via unsplash) */}
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
                      
                      {/* Live Indicator */}
                      <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md border border-white/10 px-2 py-1 rounded-md flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-[8px] font-bold text-white uppercase tracking-widest">Live 04:12</span>
                      </div>

                      {/* Athlete Mini Video (PiP) */}
                      <div className="absolute top-3 right-3 w-16 h-24 bg-slate-900 rounded-xl border-2 border-[#152026] shadow-xl overflow-hidden">
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-90" />
                      </div>
                      
                      {/* Call Controls */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:text-[#00FF88] transition-colors cursor-pointer"><Mic className="w-4 h-4" /></div>
                         <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#00FF88] hover:bg-white/20 transition-colors cursor-pointer"><Video className="w-4 h-4" /></div>
                         <div className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white cursor-pointer transition-colors shadow-lg shadow-red-500/20"><Phone className="w-4 h-4 rotate-[135deg]" /></div>
                      </div>
                   </div>
                </div>

                {/* Floating Voice Waveform Pill - Foreground */}
                <div className="absolute top-56 right-8 lg:-right-8 px-4 py-2 bg-[#152026] border border-white/10 rounded-full flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-[bounce_5s_ease-in-out_infinite_reverse] backdrop-blur-md">
                   <div className="w-6 h-6 rounded-full bg-[#00FF88]/20 flex items-center justify-center">
                     <Mic className="w-3 h-3 text-[#00FF88]" />
                   </div>
                   <div className="flex items-center gap-1">
                     <div className="w-1 h-3 bg-[#00FF88] rounded-full animate-pulse" />
                     <div className="w-1 h-5 bg-[#A0AAB2] rounded-full animate-pulse delay-75" />
                     <div className="w-1 h-7 bg-[#00FF88] rounded-full animate-pulse delay-150" />
                     <div className="w-1 h-4 bg-[#A0AAB2] rounded-full animate-pulse delay-75" />
                     <div className="w-1 h-2 bg-[#00FF88] rounded-full animate-pulse" />
                   </div>
                   <div className="text-[#A0AAB2] text-[10px] font-mono font-bold pr-1">Audio en cours...</div>
                </div>

             </motion.div>
          </div>
       </div>
    </section>
  );
}
