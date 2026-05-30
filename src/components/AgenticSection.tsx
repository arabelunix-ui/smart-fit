"use client";

import { useState } from "react";
import { LayoutDashboard, Users, MonitorPlay, Code2 } from "lucide-react";

const items = [
  {
    id: 0,
    title: "Application Bouda Med Chef",
    icon: LayoutDashboard,
    isNew: true,
    description: <>Un outil avancé dédié au <em className="italic text-white font-medium">Chef de Projet</em> actuel pour piloter et gérer l'intégralité des opérations.</>,
    image: "/image.png"
  },
  {
    id: 1,
    title: "Application Encadrant",
    icon: Users,
    isNew: true,
    description: "Une plateforme de communication et de coordination destinée à chaque membre de l'équipe de travail actuelle.",
    image: "/image.png"
  },
  {
    id: 2,
    title: "Salle de réunion numérique intelligente",
    icon: MonitorPlay,
    isNew: false,
    description: "Un espace virtuel propulsé par l'IA pour afficher instantanément, avec une précision chiffrée, des analyses et des statistiques du projet.",
    image: "/image.png"
  },
  {
    id: 3,
    title: "Systèmes de développement intelligents",
    icon: Code2,
    isNew: false,
    description: "Comprenant le projet de suivi des habitudes (Habit Tracker), un système de gestion des ressources financières, ainsi qu'une application de mesure et d'amélioration des performances en course à pied basée sur la plateforme Strava.",
    image: "/image.png"
  }
];

export default function AgenticSection() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="py-24 w-full">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            The Agentic Coding Way
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            From assist to autonomy, built for every coding moment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Navigation List */}
          <div className="lg:col-span-5 flex flex-col relative">
            {/* Subtle background line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5" />
            
            {/* Animated Indicator line */}
            <div 
              className="absolute left-[0px] w-[3px] bg-gradient-to-b from-[#FF5F6D] to-[#FF9A9E] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ 
                height: `${100 / items.length}%`, 
                top: `${(100 / items.length) * activeItem}%`,
                transform: "translateX(-1px)"
              }}
            />

            {items.map((item) => {
              const isActive = activeItem === item.id;
              const Icon = item.icon;

              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className="cursor-pointer py-8 pl-8 relative group"
                >
                  <div className={`flex items-center gap-4 text-2xl font-semibold mb-3 transition-all duration-300 ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}>
                    <div className={`p-2 rounded-xl transition-colors duration-300 ${isActive ? "bg-[#FF5F6D]/10 text-[#FF5F6D]" : "bg-transparent text-gray-500"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span>{item.title}</span>
                    {item.isNew && (
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase transition-colors duration-300 ${isActive ? "bg-[#FF5F6D]/20 text-[#FF5F6D]" : "bg-white/5 text-gray-500"}`}>
                        New
                      </span>
                    )}
                  </div>
                  
                  <div 
                    className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
                      isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-lg text-gray-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Dynamic Image Viewer */}
          <div className="lg:col-span-7 relative w-full aspect-[4/3] lg:aspect-[16/11] rounded-[32px] overflow-hidden border border-white/5 bg-black/40 backdrop-blur-md shadow-[0_0_50px_rgba(35,233,116,0.03)] group">
            
            {/* Ambient Glows behind the image */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF5F6D]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FF9A9E]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Cross-fading Images */}
            {items.map((item) => (
              <img 
                key={item.id}
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-in-out ${
                  activeItem === item.id 
                    ? "opacity-80 scale-100 z-10 blur-0" 
                    : "opacity-0 scale-105 z-0 blur-sm"
                }`}
              />
            ))}
            
            {/* Inner shadow/gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-20 opacity-80 pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] rounded-[32px] z-30 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
