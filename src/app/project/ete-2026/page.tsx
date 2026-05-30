import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Target, Rocket, CheckCircle2, TrendingUp, MonitorSmartphone, Brain, Coffee } from "lucide-react";

export default function PhaseEte2026Page() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF5F6D]/30 selection:text-white">
      <Navbar />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5F6D]/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
          
          <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FF5F6D] animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase text-gray-300">Juin - Août 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Phase Été <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
              Déploiement Technologique & Clôture S8
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="max-w-[1000px] mx-auto px-6 mb-24">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10 mb-8">
              Cette phase représente le premier grand pilier du projet « Bouda El Mouhandis ». C'est une période de transition majeure qui combine l'achèvement d'un cycle académique/opérationnel (le S8) avec la mise en place de la fondation technologique (100% IA) qui servira pour toute la suite du projet.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-black/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF5F6D]/20 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-[#FF5F6D]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Lancement</p>
                  <p className="font-semibold text-lg">1er Juin 2026</p>
                </div>
              </div>
              <div className="bg-black/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFC371]/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#FFC371]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Fin officielle</p>
                  <p className="font-semibold text-lg">31 Août 2026</p>
                </div>
              </div>
              <div className="bg-black/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Durée</p>
                  <p className="font-semibold text-lg">3 mois</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projets et Livrables */}
        <section className="max-w-[1000px] mx-auto px-6 mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Projets Associés et Livrables</h2>
            <p className="text-gray-400 text-lg">Cette phase est divisée en deux grands axes de travail.</p>
          </div>

          <div className="space-y-8">
            {/* Axe 1 */}
            <div className="bg-[#111] border-l-4 border-[#FF5F6D] rounded-r-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FF5F6D]/20 text-[#FF5F6D] flex items-center justify-center text-sm">1</span>
                Achèvement du Projet « S8 »
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FF5F6D] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">Objectif</h4>
                    <p className="text-gray-400">Clôturer avec succès toutes les tâches, livrables et évaluations liés au projet S8.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FF5F6D] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mb-1">Livrable</h4>
                    <p className="text-gray-400">Rapport de clôture S8 et transition officielle vers la préparation du S9.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Axe 2 */}
            <div className="bg-[#111] border-l-4 border-[#FFC371] rounded-r-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FFC371]/20 text-[#FFC371] flex items-center justify-center text-sm">2</span>
                Déploiement de la Plateforme Numérique Avancée (IA)
              </h3>
              <p className="text-gray-400 mb-8">
                Il s'agit du cœur de cette phase estivale, consistant à développer et lancer les outils numériques de Bouda Med Company :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-black/40 border border-white/5 p-6 rounded-2xl">
                  <MonitorSmartphone className="w-8 h-8 text-[#FFC371] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Application Bouda Med Chef</h4>
                  <p className="text-sm text-gray-400">Le tableau de bord central exclusif au Chef de Projet pour le pilotage stratégique.</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-6 rounded-2xl">
                  <CheckCircle2 className="w-8 h-8 text-[#FFC371] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Application Encadrant</h4>
                  <p className="text-sm text-gray-400">L'outil de communication et de gestion des tâches fluide pour l'équipe actuelle.</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-6 rounded-2xl sm:col-span-2">
                  <Brain className="w-8 h-8 text-[#FFC371] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Salle de Réunion Numérique Intelligente</h4>
                  <p className="text-sm text-gray-400">L'espace virtuel équipé d'outils d'IA pour générer et afficher des tableaux, graphiques et statistiques chiffrées en temps réel.</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-6 rounded-2xl sm:col-span-2">
                  <TrendingUp className="w-8 h-8 text-[#FFC371] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Pôle Systèmes de Développement Intelligents</h4>
                  <ul className="text-sm text-gray-400 space-y-2 mt-4 list-disc pl-5">
                    <li><strong className="text-white">Habit Tracker :</strong> Système de suivi des habitudes de productivité.</li>
                    <li><strong className="text-white">Gestion Financière :</strong> Module IA pour l'optimisation des ressources financières du projet.</li>
                    <li><strong className="text-white">Performance Sportive :</strong> Intégration de l'API Strava pour mesurer et améliorer les performances en course à pied.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendrier des Réunions */}
        <section className="max-w-[1000px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Calendrier des Réunions Mensuelles</h2>
            <p className="text-gray-400 text-lg">Conformément à vos directives, la Salle de Réunion Numérique Intelligente accueillera le comité de pilotage chaque premier samedi du mois pour analyser les statistiques et l'avancement.</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/40 border-b border-white/10">
                    <th className="p-6 font-semibold text-gray-300 w-1/4">Date de la Réunion</th>
                    <th className="p-6 font-semibold text-gray-300 w-1/4">Type de Réunion</th>
                    <th className="p-6 font-semibold text-gray-300 w-1/2">Ordre du jour principal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <Coffee className="w-5 h-5 text-[#FF5F6D]" />
                        <span className="font-medium text-white">Samedi 6 Juin 2026</span>
                      </div>
                    </td>
                    <td className="p-6 text-gray-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#FF5F6D]/10 text-[#FF5F6D] text-sm font-medium border border-[#FF5F6D]/20">
                        Lancement (Kick-off)
                      </span>
                    </td>
                    <td className="p-6 text-gray-400 leading-relaxed">
                      Bilan de la première semaine, état d'avancement de la clôture du S8, et présentation des maquettes de la nouvelle plateforme IA.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <Coffee className="w-5 h-5 text-[#FFC371]" />
                        <span className="font-medium text-white">Samedi 4 Juillet 2026</span>
                      </div>
                    </td>
                    <td className="p-6 text-gray-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#FFC371]/10 text-[#FFC371] text-sm font-medium border border-[#FFC371]/20">
                        Déploiement
                      </span>
                    </td>
                    <td className="p-6 text-gray-400 leading-relaxed">
                      Validation de la clôture du S8. Test et lancement opérationnel des applications <em className="text-white not-italic font-medium">Bouda Med Chef</em> et <em className="text-white not-italic font-medium">Encadrant</em>.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <Coffee className="w-5 h-5 text-white" />
                        <span className="font-medium text-white">Samedi 1er Août 2026</span>
                      </div>
                    </td>
                    <td className="p-6 text-gray-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">
                        Évaluation
                      </span>
                    </td>
                    <td className="p-6 text-gray-400 leading-relaxed">
                      Analyse des premières données statistiques via l'IA, revue des systèmes intelligents (Habitudes, Finances, Strava) et préparation de la transition vers la rentrée (Étape Septembre).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
