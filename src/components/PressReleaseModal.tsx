"use client";

import { useState, useEffect } from "react";
import { X, Bell } from "lucide-react";

export default function PressReleaseModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setIsVisible(true), 10);
    } else {
      document.body.style.overflow = "unset";
      setIsVisible(false);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    // Ouvre le modal avec un léger délai à l'arrivée sur le site
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300); // attend la fin de l'animation pour démonter
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(35,233,116,0.1)] overflow-hidden flex flex-col transition-all duration-300 transform ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-white/5 bg-gradient-to-r from-[#FF5F6D]/10 to-transparent">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-[#FF5F6D]/20 flex items-center justify-center flex-shrink-0 border border-[#FF5F6D]/30">
              <Bell className="w-6 h-6 text-[#FF5F6D]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                COMMUNIQUÉ DE PRESSE
              </h2>
              <p className="text-[#FF5F6D] font-medium text-sm mt-1">
                Annonce d'un partenariat stratégique et de la feuille de route globale du projet « Bouda El Mouhandis »
              </p>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 text-gray-300 space-y-6 text-[15px] leading-relaxed">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 border-b border-white/5 pb-4 gap-2">
            <p><strong className="text-gray-400">Date :</strong> 31 mai 2026</p>
            <p><strong className="text-gray-400">Émetteur :</strong> Bouda Med Company</p>
          </div>

          <p>
            <strong className="text-white">Bouda Med Company</strong> annonce officiellement la nomination de <strong className="text-[#FF5F6D]">« Web Geo »</strong>, à compter du 31 mai 2026, pour assurer la direction et la supervision complète de son nouveau projet stratégique <strong className="text-white">« Bouda El Mouhandis »</strong>. Ce projet d'envergure s'étendra sur une durée de 13 mois et 1 jour, débutant officiellement aujourd'hui pour s'achever avec l'atteinte de ses objectifs finaux le 1er juillet 2027.
          </p>

          <p>
            Le projet intègre une feuille de route ambitieuse et des phases chronologiques parfaitement structurées pour garantir les plus hauts niveaux d'efficacité :
          </p>

          <ul className="space-y-6 pl-4 border-l-2 border-[#FF5F6D]/30 ml-2">
            <li className="pl-6 relative">
              <div className="absolute w-3 h-3 rounded-full bg-[#FF5F6D] -left-[25px] top-1.5 shadow-[0_0_10px_#FF5F6D]" />
              <strong className="text-white text-base">Phase Été 2026 (Été 2026) :</strong> 
              <p className="mt-1">Cette phase marquera l'achèvement réussi du projet <strong className="text-white">« S8 »</strong>, conjointement au lancement opérationnel de la plateforme numérique avancée de Bouda Med Company. L'infrastructure de cette plateforme reposera entièrement sur des technologies d'intelligence artificielle (IA) complètes et comprendra :</p>
              
              <ul className="mt-4 space-y-3 list-disc pl-5 text-gray-400">
                <li><strong className="text-gray-200">Application Bouda Med Chef :</strong> Un outil avancé dédié au <em className="text-gray-300">Chef de Projet</em> actuel pour piloter et gérer l'intégralité des opérations.</li>
                <li><strong className="text-gray-200">Application Encadrant :</strong> Une plateforme de communication et de coordination destinée à chaque membre de l'équipe de travail actuelle.</li>
                <li><strong className="text-gray-200">Salle de réunion numérique intelligente :</strong> Un espace virtuel propulsé par l'IA pour afficher instantanément, avec une précision chiffrée, des analyses et des statistiques du projet.</li>
                <li><strong className="text-gray-200">Systèmes de développement intelligents :</strong> Comprenant le projet de suivi des habitudes (<strong className="text-gray-200">Habit Tracker</strong>), un système de gestion des ressources financières, ainsi qu'une application de mesure et d'amélioration des performances en course à pied basée sur la plateforme <strong className="text-gray-200">Strava</strong>.</li>
              </ul>
            </li>

            <li className="pl-6 relative">
              <div className="absolute w-3 h-3 rounded-full border-2 border-[#FF5F6D] bg-[#0A0A0A] -left-[25px] top-1.5" />
              <strong className="text-white text-base">Étape de Septembre 2026 :</strong> 
              <span className="ml-1">Une phase stratégique dédiée à la préparation et à l'organisation complète pour la saison 2026-2027.</span>
            </li>

            <li className="pl-6 relative">
              <div className="absolute w-3 h-3 rounded-full border-2 border-[#FF5F6D] bg-[#0A0A0A] -left-[25px] top-1.5" />
              <strong className="text-white text-base">Projet S9 :</strong> 
              <span className="ml-1">Il représente le dernier semestre académique, que Bouda Med Company entreprendra de diriger et de gérer de manière optimale afin de garantir l'excellence académique et pratique.</span>
            </li>

            <li className="pl-6 relative">
              <div className="absolute w-3 h-3 rounded-full border-2 border-[#FF5F6D] bg-[#0A0A0A] -left-[25px] top-1.5" />
              <strong className="text-white text-base">Phase Hiver 2027 (Winter 2027) :</strong> 
              <span className="ml-1">Cette phase se concentrera sur l'évaluation globale des résultats du projet « S9 », marquant le début des préparatifs intensifs pour le projet de fin d'études.</span>
            </li>

            <li className="pl-6 relative">
              <div className="absolute w-3 h-3 rounded-full border-2 border-[#FF5F6D] bg-[#0A0A0A] -left-[25px] top-1.5" />
              <strong className="text-white text-base">Projet PFE (Projet de Fin d'Études) :</strong> 
              <p className="mt-1">Lancement d'un écosystème innovant s'appuyant sur un ensemble d'outils entièrement propulsés par l'IA pour la recherche d'opportunités de PFE et d'emplois via de multiples plateformes professionnelles, notamment <strong className="text-white">LinkedIn</strong> et <strong className="text-white">Indeed</strong>, menant à l'exécution finale du projet et à l'atteinte du jalon ultime le 1er juillet 2027.</p>
            </li>
          </ul>

          <div className="p-6 mt-8 bg-white/[0.02] border border-white/5 rounded-xl shadow-inner">
            <p>
              Dans le cadre de sa vision d'expansion, l'entreprise confirme la poursuite de ses projets parallèles, qui incluent le lancement du projet <strong className="text-white">« Entreprise »</strong> visant à développer le projet <strong className="text-white">« Geo Vest »</strong> en collaboration étroite avec l'équipe <strong className="text-[#FF5F6D]">« Whombwinnera »</strong>. À cela s'ajoute le renforcement de la coopération avec <strong className="text-[#FF5F6D]">« Fayz »</strong>, et le lancement de la plateforme de fitness avant-gardiste <strong className="text-[#FF5F6D]">« Angelfitness »</strong>.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6 p-4 bg-gradient-to-r from-[#FF5F6D]/5 to-transparent border-l-4 border-[#FF5F6D] rounded-r-lg">
            <p className="font-medium text-gray-200">
              À travers cette vision globale, <strong className="text-[#FF5F6D]">Bouda Med Company</strong> réaffirme son engagement à exploiter les technologies de pointe et l'intelligence artificielle pour autonomiser les talents et bâtir un avenir numérique de premier plan.
            </p>
          </div>

          <div className="pt-8 border-t border-white/5 text-right text-gray-500 italic text-sm">
            (Direction de la Communication et des Relations Publiques - Bouda Med Company)
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-white/5 bg-black/40 flex justify-end">
          <button 
            onClick={handleClose}
            className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-full font-semibold transition-colors flex items-center gap-2"
          >
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  );
}
