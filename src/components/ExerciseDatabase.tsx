"use client";
import { Dumbbell, Activity, Play, Database, Search, Target, Video, Layers, User } from "lucide-react";
import { motion } from "framer-motion";

interface ExerciseDatabaseProps {
  dict: any;
}

export default function ExerciseDatabase({ dict }: ExerciseDatabaseProps) {
  const muscles = dict.exerciseDB.muscles;

  const equipments = [
    { name: dict.exerciseDB.equipment.bodyweight, icon: <User className="w-5 h-5"/> },
    { name: dict.exerciseDB.equipment.dumbbells, icon: <Dumbbell className="w-5 h-5"/> },
    { name: dict.exerciseDB.equipment.machines, icon: <Layers className="w-5 h-5"/> },
    { name: dict.exerciseDB.equipment.bands, icon: <Target className="w-5 h-5"/> }
  ];

  return (
    <section id="database" className="relative py-12 scroll-mt-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#152026] border border-white/10 text-[#00FF88] font-bold text-[10px] uppercase tracking-widest mb-6">
            <Database className="w-3 h-3" /> {dict.exerciseDB.badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-4">
            {dict.exerciseDB.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-emerald-200">{dict.exerciseDB.title2}</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A0AAB2] max-w-2xl mx-auto leading-relaxed">
            {dict.exerciseDB.desc}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Muscles (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-1 bg-[#152026] rounded-[2rem] border border-white/5 p-8 relative overflow-hidden flex flex-col group hover:border-white/10 transition-colors"
          >
            <div className="absolute -right-16 -bottom-16 text-[#00FF88]/5 group-hover:text-[#00FF88]/10 transition-colors">
              <Activity className="w-80 h-80" />
            </div>
            
            <div className="relative z-10">
              <div className="text-[10px] text-[#00FF88] uppercase tracking-widest font-bold mb-4">{dict.exerciseDB.anatomy}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{dict.exerciseDB.anatomyTitle}</h3>
              <p className="text-sm text-[#A0AAB2] mb-8">
                {dict.exerciseDB.anatomyDesc}
              </p>
            </div>
            
            <div className="mt-auto relative z-10 flex flex-wrap gap-2">
              {muscles.map((m: string) => (
                <span key={m} className="px-3 py-1.5 bg-[#0D1317] border border-white/5 rounded-full text-xs text-[#A0AAB2] hover:bg-white/5 hover:text-white transition-colors cursor-default">
                  {m}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column (2 stacked cards) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Card 2: Equipment Adaptability */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-[#152026] rounded-[2rem] border border-white/5 p-8 flex flex-col sm:flex-row items-center gap-8 overflow-hidden hover:border-white/10 transition-colors"
            >
              <div className="flex-1">
                <div className="text-[10px] text-[#00FF88] uppercase tracking-widest font-bold mb-4">{dict.exerciseDB.adaptability}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{dict.exerciseDB.adaptabilityTitle}</h3>
                <p className="text-sm text-[#A0AAB2] mb-6 sm:mb-0">
                  {dict.exerciseDB.adaptabilityDesc}
                </p>
              </div>
              <div className="w-full sm:w-1/2 grid grid-cols-2 gap-3 shrink-0 relative z-10">
                {equipments.map((eq) => (
                  <div key={eq.name} className="bg-[#0D1317] p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-3 text-center group/eq hover:border-[#00FF88]/40 hover:bg-[#00FF88]/5 transition-all cursor-default">
                    <div className="text-white/30 group-hover/eq:text-[#00FF88] transition-colors group-hover/eq:scale-110 duration-300">
                      {eq.icon}
                    </div>
                    <div className="text-[10px] font-semibold text-[#A0AAB2] group-hover/eq:text-white transition-colors">
                      {eq.name}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 3: Video Library */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-gradient-to-r from-[#152026] via-[#152026] to-[#00FF88]/10 rounded-[2rem] border border-white/5 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden relative"
            >
              {/* Abstract play button background */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 blur-xl">
                <Play className="w-64 h-64 text-[#00FF88] fill-current" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[10px] text-[#00FF88] uppercase tracking-widest font-bold mb-2">
                  <Video className="w-3 h-3" /> {dict.exerciseDB.video}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{dict.exerciseDB.videoTitle}</h3>
                <p className="text-sm text-[#A0AAB2] max-w-md">
                  {dict.exerciseDB.videoDesc}
                </p>
              </div>
              
              <div className="relative z-10 w-16 h-16 bg-[#00FF88] rounded-full flex shrink-0 items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:shadow-[0_0_50px_rgba(0,255,136,0.5)] cursor-pointer hover:scale-110 transition-all">
                <Play className="w-6 h-6 text-[#0D1317] fill-current translate-x-0.5" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
