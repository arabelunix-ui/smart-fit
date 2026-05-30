import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Target, Leaf, CheckCircle2, Route, BookOpen, Layers, Coffee } from "lucide-react";

export default function Septembre2026Page() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#10b981]/30 selection:text-white">
      <Navbar />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#10b981]/10 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
          
          <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase text-gray-300">Septembre 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Étape de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399]">Septembre</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
              Préparation Stratégique & Organisation
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="max-w-[1000px] mx-auto px-6 mb-24">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10 mb-8">
              Cette étape est une phase de transition critique d'un mois. Elle est entièrement dédiée à la structuration, à l'organisation logistique et à la planification rigoureuse de la grande saison académique et opérationnelle 2026-2027. Elle permet de s'assurer que toutes les infrastructures technologiques développées durant l'été sont prêtes à soutenir les objectifs futurs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-black/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Lancement</p>
                  <p className="font-semibold text-lg">1er Septembre 2026</p>
                </div>
              </div>
              <div className="bg-black/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#34d399]/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#34d399]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Fin officielle</p>
                  <p className="font-semibold text-lg">30 Septembre 2026</p>
                </div>
              </div>
              <div className="bg-black/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Durée</p>
                  <p className="font-semibold text-lg">1 mois</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projets et Livrables */}
        <section className="max-w-[1000px] mx-auto px-6 mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Projets Associés et Objectifs</h2>
            <p className="text-gray-400 text-lg">L'accent est mis sur la préparation de la rentrée et la synchronisation des équipes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Axe 1 */}
            <div className="bg-[#111] border border-white/5 hover:border-[#10b981]/50 transition-colors rounded-3xl p-8 shadow-2xl flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-[#10b981]/10 flex items-center justify-center mb-6">
                <Route className="w-7 h-7 text-[#10b981]" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Organisation 2026-2027</h3>
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="text-sm font-semibold text-[#10b981] uppercase tracking-wider mb-2">Objectif</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">Établir la feuille de route détaillée des mois à venir et définir les indicateurs de performance (KPI) pour l'équipe.</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-sm font-semibold text-[#10b981] uppercase tracking-wider mb-2">Livrables</h4>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <p className="text-gray-400 text-sm">Plan opérationnel validé pour la période 2026-2027.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Axe 2 */}
            <div className="bg-[#111] border border-white/5 hover:border-[#34d399]/50 transition-colors rounded-3xl p-8 shadow-2xl flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-[#34d399]/10 flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-[#34d399]" />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Cadrage du Projet « S9 »</h3>
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="text-sm font-semibold text-[#34d399] uppercase tracking-wider mb-2">Objectif</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">Préparer le terrain pour le dernier semestre académique afin de garantir une gestion optimale dès son démarrage.</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-sm font-semibold text-[#34d399] uppercase tracking-wider mb-2">Livrables</h4>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <p className="text-gray-400 text-sm">Emploi du temps, répartition des tâches et objectifs d'excellence académique/pratique définis.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Axe 3 */}
            <div className="bg-[#111] border border-white/5 hover:border-emerald-400/50 transition-colors rounded-3xl p-8 shadow-2xl flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-emerald-400/10 flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Alignement des Projets</h3>
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">Objectif</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">Planifier les prochaines étapes de développement avec les partenaires externes (coopération avec « Fayz », avancement de « Geo Vest » avec l'équipe « Whombwinnera », et suivi de la plateforme « Angelfitness »).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendrier des Réunions */}
        <section className="max-w-[1000px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Réunion Mensuelle</h2>
            <p className="text-gray-400 text-lg">La réunion se tiendra dans la Salle de Réunion Numérique Intelligente pour structurer le lancement de la nouvelle saison.</p>
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
                        <Coffee className="w-5 h-5 text-[#10b981]" />
                        <span className="font-medium text-white">Samedi 5 Septembre 2026</span>
                      </div>
                    </td>
                    <td className="p-6 text-gray-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] text-sm font-medium border border-[#10b981]/20">
                        Cadrage & Rentrée
                      </span>
                    </td>
                    <td className="p-6 text-gray-400 leading-relaxed">
                      Revue finale des performances de la phase été, validation officielle du plan d'organisation de la saison 2026-2027, et répartition des rôles pour le projet S9.
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
