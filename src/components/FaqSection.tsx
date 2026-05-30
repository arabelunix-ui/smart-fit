"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Qu'est-ce que le projet « Bouda El Mouhandis » ?",
    answer: "C'est un programme stratégique étalé sur 13 mois (Mai 2026 - Juillet 2027) conçu pour achever le cursus d'ingénierie (phases S8, S9 et PFE) en atteignant l'excellence opérationnelle grâce à l'écosystème de Bouda Med Company."
  },
  {
    question: "Quand la plateforme complète sera-t-elle disponible ?",
    answer: "L'ensemble de notre infrastructure technologique, incluant l'Application Bouda Med Chef, l'Application Encadrant et la Salle de réunion numérique intelligente, sera officiellement déployé le 31 Août 2026 à 20h00."
  },
  {
    question: "Comment fonctionne la Salle de réunion numérique ?",
    answer: "Il s'agit d'un espace virtuel avant-gardiste propulsé par l'IA. Elle analyse et affiche instantanément les statistiques académiques, financières et sportives lors de nos réunions de suivi organisées le premier samedi de chaque mois."
  },
  {
    question: "Quelles sont les grandes étapes de l'année 2026 ?",
    answer: "L'année s'articule autour de trois piliers majeurs : la Phase Été (Juin - Août) pour la clôture du S8, l'Étape de Septembre dédiée à la préparation stratégique, et la Phase S9 (Octobre - Décembre) pour valider l'ultime semestre académique."
  },
  {
    question: "Comment le suivi des performances est-il assuré ?",
    answer: "Notre plateforme intègre des systèmes intelligents : un Habit Tracker pour le suivi quotidien, un gestionnaire de finances, et une synchronisation avec Strava pour analyser précisément vos performances en course à pied."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 sm:py-32 w-full">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column */}
            <div className="lg:w-1/3 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl sm:text-[44px] font-semibold tracking-tight text-[#111] leading-tight mb-4">
                  Questions<br />Fréquentes
                </h2>
                <p className="text-lg text-gray-500">
                  Tout savoir sur le programme Bouda El Mouhandis.
                </p>
              </div>
              
              <div className="hidden lg:block mt-24">
                <p className="text-gray-500 leading-relaxed border-l-2 border-[#FF5F6D] pl-4">
                  Une organisation structurée,<br />
                  propulsée par une IA de pointe<br />
                  pour garantir la réussite.
                </p>
              </div>
            </div>

            {/* Right Column (Accordion) */}
            <div className="lg:w-2/3 flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-[#FF5F6D]/50 shadow-sm hover:shadow-md"
                  >
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className={`text-[17px] font-semibold pr-8 transition-colors ${isOpen ? 'text-[#FF5F6D]' : 'text-[#111]'}`}>
                        {faq.question}
                      </span>
                      <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center transition-colors shrink-0 ${isOpen ? 'bg-[#FF5F6D] text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </div>
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                        isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed text-[16px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Mobile bottom text */}
            <div className="lg:hidden mt-8">
              <p className="text-gray-500 leading-relaxed border-l-2 border-[#FF5F6D] pl-4">
                Une organisation structurée,<br />
                propulsée par une IA de pointe<br />
                pour garantir la réussite.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
