"use client";

import { useState, useEffect } from "react";
import { Megaphone, Calendar, FileText, Target, CheckCircle2, Rocket, Sun, Leaf, BookOpen, Snowflake, Sprout, Flag, RefreshCw } from "lucide-react";

export default function QuestWindow() {
  const [activeTab, setActiveTab] = useState<"communique" | "calendrier">("communique");

  useEffect(() => {
    if (window.location.hash === "#calendrier") {
      setActiveTab("calendrier");
    }
  }, []);

  const timeline = [
    {
      period: "31 Mai 2026",
      title: "Lancement Officiel",
      icon: <Rocket className="w-5 h-5" />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/30",
      items: [
        "Prise de fonction officielle de « Web Geo ».",
        "Lancement du projet stratégique « Bouda El Mouhandis »."
      ]
    },
    {
      period: "31 Juin - 31 Août 2026",
      title: "Phase Été 2026",
      icon: <Sun className="w-5 h-5" />,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/30",
      items: [
        "Clôture et achèvement réussi du projet « S8 ».",
        "Lancement de la plateforme avancée (100% IA) : Bouda Med Chef, App Encadrant, Salle virtuelle, Habit Tracker & Strava."
      ]
    },
    {
      period: "Septembre 2026",
      title: "Étape de Septembre",
      icon: <Leaf className="w-5 h-5" />,
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "border-orange-400/30",
      items: [
        "Phase de préparation stratégique.",
        "Organisation complète et planification de la saison académique et opérationnelle 2026-2027."
      ]
    },
    {
      period: "Octobre 2026 - Janvier 2027",
      title: "Projet S9",
      icon: <BookOpen className="w-5 h-5" />,
      color: "text-[#FF5F6D]",
      bg: "bg-[#FF5F6D]/10",
      border: "border-[#FF5F6D]/30",
      items: [
        "Lancement et gestion du dernier semestre académique (S9).",
        "Pilotage optimisé pour garantir l'excellence académique et pratique de l'équipe."
      ]
    },
    {
      period: "Janvier - Février 2027",
      title: "Phase Hiver 2027",
      icon: <Snowflake className="w-5 h-5" />,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/30",
      items: [
        "Évaluation globale et bilan des résultats du projet « S9 ».",
        "Lancement des préparatifs intensifs pour l'étape finale : le Projet de Fin d'Études."
      ]
    },
    {
      period: "Mars - Juin 2027",
      title: "Projet PFE & Déploiement IA",
      icon: <Sprout className="w-5 h-5" />,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/30",
      items: [
        "Déploiement d'un écosystème innovant propulsé par l'IA pour la recherche d'opportunités (PFE et emplois).",
        "Ciblage actif sur les plateformes professionnelles (LinkedIn, Indeed).",
        "Exécution finale et soutenance/validation du Projet de Fin d'Études (PFE)."
      ]
    },
    {
      period: "1er Juillet 2027",
      title: "Clôture du Projet",
      icon: <Flag className="w-5 h-5" />,
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      items: [
        "Atteinte du jalon ultime.",
        "Fin officielle du projet « Bouda El Mouhandis » (exactement 13 mois et 1 jour après le lancement)."
      ]
    }
  ];

  return (
    <section id="calendrier" className="py-16 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="w-full bg-[#FF5F6D] rounded-t-[32px] sm:rounded-[32px] p-8 sm:p-12 relative overflow-hidden mb-24 shadow-[0_20px_50px_rgba(255,95,109,0.15)] group/window">
          {/* Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-700 group-hover/window:opacity-20" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 40 L40 20' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          ></div>
          
          <div className="relative z-10">
            {/* Header & Tabs */}
            <div className="max-w-4xl mb-12">
              <div className="inline-flex bg-[#111111] rounded-xl p-1 mb-8 shadow-lg relative">
                <button 
                  onClick={() => setActiveTab("communique")}
                  className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 relative z-10 ${activeTab === "communique" ? "text-black bg-white shadow-sm" : "text-white hover:bg-white/10"}`}
                >
                  Communiqué
                </button>
                <button 
                  onClick={() => setActiveTab("calendrier")}
                  className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 relative z-10 ${activeTab === "calendrier" ? "text-black bg-white shadow-sm" : "text-white hover:bg-white/10"}`}
                >
                  Calendrier Annuel
                </button>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0A0A0A] font-bold tracking-tight leading-tight transition-all duration-500">
                {activeTab === "communique" 
                  ? "COMMUNIQUÉ DE PRESSE : Annonce d'un partenariat stratégique et de la feuille de route globale du projet « Bouda El Mouhandis »"
                  : "CALENDRIER ANNUEL : La feuille de route stratégique de mai 2026 à juillet 2027"}
              </h2>
            </div>

            {/* Tab Content */}
            <div className="relative">
              
              {/* Communiqué Tab */}
              {activeTab === "communique" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Main Info Frame */}
                  <div className="md:col-span-2 md:row-span-2 rounded-[24px] bg-[#0A0A0A] border border-white/10 relative overflow-hidden group shadow-xl p-8 sm:p-10 flex flex-col justify-between">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF5F6D]/10 via-[#0a0a0a] to-black group-hover:scale-105 transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5F6D]/20 text-[#FF5F6D] text-sm font-bold mb-8 border border-[#FF5F6D]/30 uppercase tracking-wider">
                        <Megaphone className="w-4 h-4" /> Partenariat Stratégique
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-relaxed">
                        <span className="text-[#FF5F6D]">Bouda Med Company</span> annonce officiellement la nomination de <span className="text-white">« Web Geo »</span> pour assurer la direction et la supervision complète.
                      </h3>
                      
                      <p className="text-tertiary text-lg max-w-2xl leading-relaxed">
                        Ce projet d'envergure s'étendra sur une durée de 13 mois et 1 jour, débutant officiellement le <strong>31 mai 2026</strong> pour s'achever avec l'atteinte de ses objectifs finaux le <strong>1er juillet 2027</strong>.
                      </p>
                    </div>
                    
                    <div className="relative z-10 flex justify-end">
                      <a href="/communique" className="group/btn flex items-center gap-4 bg-white/5 pr-2 pl-6 py-2 rounded-full border border-white/10 hover:border-[#FF5F6D]/50 transition-all hover:bg-white/10">
                        <span className="text-sm font-semibold text-white group-hover/btn:text-[#FF5F6D] transition-colors">Lire les détails & Télécharger</span>
                        <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center border border-white/10 group-hover/btn:border-[#FF5F6D]/50 transition-colors">
                          <FileText className="w-5 h-5 text-[#FF5F6D]" />
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Small Item 1: Details */}
                  <div className="rounded-[24px] bg-[#0A0A0A] border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 shadow-xl p-8 flex flex-col justify-between">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5F6D]/15 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full bg-[#FF5F6D]/10 flex items-center justify-center border border-[#FF5F6D]/20 mb-6 group-hover:scale-110 transition-transform">
                        <Calendar className="w-6 h-6 text-[#FF5F6D]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Détails de l'Émission</h3>
                      <div className="space-y-2 mt-4">
                        <p className="text-tertiary text-sm flex justify-between">
                          <span>Date :</span> <span className="text-white font-medium">31 mai 2026</span>
                        </p>
                        <p className="text-tertiary text-sm flex justify-between">
                          <span>Émetteur :</span> <span className="text-white font-medium">Bouda Med Company</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Small Item 2: Roadmap teaser */}
                  <div className="rounded-[24px] bg-[#0A0A0A] border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 shadow-xl p-8 flex flex-col justify-between cursor-pointer" onClick={() => setActiveTab("calendrier")}>
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,95,109,0.3) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full bg-[#FF5F6D]/10 flex items-center justify-center border border-[#FF5F6D]/20 mb-6 group-hover:scale-110 transition-transform">
                        <Target className="w-6 h-6 text-[#FF5F6D]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Phase Été 2026</h3>
                      <p className="text-tertiary text-sm leading-relaxed mt-2">
                        Cette première phase marquera l'achèvement réussi du projet stratégique <strong>« S8 »</strong>. <span className="text-[#FF5F6D] block mt-2 font-medium">Voir le calendrier complet →</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Calendrier Tab */}
              {activeTab === "calendrier" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-[#0A0A0A] rounded-[32px] border border-white/10 p-6 sm:p-12 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#0a0a0a] to-[#FF5F6D]/5"></div>
                  
                  <div className="relative z-10">
                    
                    {/* Vertical Timeline */}
                    <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 md:ml-12 space-y-12 py-8">
                      {timeline.map((item, index) => (
                        <div key={index} className="relative pl-8 sm:pl-12 group">
                          {/* Timeline Dot */}
                          <div className={`absolute -left-[21px] top-1 w-10 h-10 rounded-full ${item.bg} border ${item.border} flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform`}>
                            <div className={item.color}>{item.icon}</div>
                          </div>
                          
                          {/* Content Card */}
                          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                              <span className={`px-4 py-1.5 rounded-full text-sm font-semibold font-mono border ${item.border} ${item.color} ${item.bg} inline-block w-fit`}>
                                {item.period}
                              </span>
                            </div>
                            
                            <ul className="space-y-3">
                              {item.items.map((listItem, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${item.color}`} />
                                  <span className="text-tertiary leading-relaxed text-base">{listItem}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Projets Parallèles (Fil Rouge) */}
                    <div className="mt-12 rounded-[24px] bg-gradient-to-r from-[#FF5F6D]/20 to-[#FF5F6D]/5 border border-[#FF5F6D]/30 p-8 flex flex-col sm:flex-row gap-6 items-center shadow-[0_0_30px_rgba(255,95,109,0.1)] hover:scale-[1.01] transition-transform">
                      <div className="w-16 h-16 rounded-full bg-[#FF5F6D]/20 border border-[#FF5F6D]/50 flex items-center justify-center shrink-0">
                        <RefreshCw className="w-8 h-8 text-[#FF5F6D] animate-[spin_10s_linear_infinite]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#FF5F6D] uppercase tracking-wider mb-1">En Fil Rouge sur 2026-2027</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Projets Parallèles</h3>
                        <p className="text-tertiary leading-relaxed">
                          Tout au long de cette période de 13 mois, Bouda Med Company maintiendra le développement de sa vision d'expansion et de l'innovation technologique continue en parallèle des jalons principaux.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              )}
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
