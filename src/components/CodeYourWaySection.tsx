"use client";

import { Sun, Leaf, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

// Background pattern for the ray effect (simulated with radial gradient)
const CardBackground = ({ colorStops }: { colorStops: string }) => (
  <div 
    className="absolute inset-0 opacity-40 pointer-events-none"
    style={{ background: `radial-gradient(circle at 50% 50%, ${colorStops})` }}
  />
);

export default function CodeYourWaySection() {
  return (
    <section className="bg-white min-h-screen py-24 sm:py-32 flex flex-col justify-center">
      <div className="max-w-[1400px] w-full mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-[44px] font-bold tracking-tight text-[#111] mb-5">
            Les Prochaines Étapes
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-medium">
            Découvrez en détail les trois prochaines phases clés du projet « Bouda El Mouhandis ».
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phase Été */}
          <div className="relative overflow-hidden rounded-[24px] bg-[#223b56] p-8 sm:p-10 min-h-[420px] flex flex-col justify-between group shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <CardBackground colorStops="rgba(80, 140, 200, 0.4) 0%, transparent 70%" />
            
            <div className="relative z-10">
              <div className="mb-10 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform">
                <Sun className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Phase Été 2026
              </h3>
              <p className="text-[#98b0c9] text-lg leading-relaxed">
                Clôture du projet « S8 » et lancement opérationnel des plateformes numériques avancées (100% IA).
              </p>
            </div>

            <div className="relative z-10 mt-12">
              <Link href="/project/ete-2026" className="w-full bg-white hover:bg-gray-50 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-sm group-hover:bg-[#FF5F6D] group-hover:text-white">
                <span>Voir les détails</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> 
              </Link>
            </div>
          </div>

          {/* Card 2: Septembre */}
          <div className="relative overflow-hidden rounded-[24px] bg-[#35433a] p-8 sm:p-10 min-h-[420px] flex flex-col justify-between group shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <CardBackground colorStops="rgba(100, 150, 120, 0.4) 0%, transparent 70%" />
            
            <div className="relative z-10">
              <div className="mb-10 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Étape de Septembre
              </h3>
              <p className="text-[#a0b0a5] text-lg leading-relaxed">
                Phase de préparation stratégique et planification globale de la saison académique et opérationnelle 2026-2027.
              </p>
            </div>

            <div className="relative z-10 mt-12">
              <Link href="/project/septembre-2026" className="w-full bg-white hover:bg-gray-50 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-sm group-hover:bg-[#FF5F6D] group-hover:text-white">
                <span>Voir les détails</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> 
              </Link>
            </div>
          </div>

          {/* Card 3: Projet S9 */}
          <div className="relative overflow-hidden rounded-[24px] bg-[#2a2927] p-8 sm:p-10 min-h-[420px] flex flex-col justify-between group shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <CardBackground colorStops="rgba(150, 130, 100, 0.3) 0%, transparent 70%" />
            
            <div className="relative z-10">
              <div className="mb-10 w-14 h-14 rounded-2xl bg-[#FF5F6D]/20 flex items-center justify-center backdrop-blur-md border border-[#FF5F6D]/30 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-[#FF5F6D]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Projet S9
              </h3>
              <p className="text-[#a8a6a2] text-lg leading-relaxed">
                Lancement et pilotage optimisé pour garantir l'excellence académique durant le dernier semestre (Oct - Jan 2027).
              </p>
            </div>

            <div className="relative z-10 mt-12">
              <Link href="/project/s9" className="w-full bg-white hover:bg-gray-50 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-sm group-hover:bg-[#FF5F6D] group-hover:text-white">
                <span>Voir les détails</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
