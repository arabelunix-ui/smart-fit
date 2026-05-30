import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Calendar, Target, BookOpen, Coffee, 
  Network, LayoutTemplate, Database, 
  Cloud, ShieldAlert, ShieldCheck, 
  Scale, MessageSquare 
} from "lucide-react";

export default function ProjetS9Page() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF5F6D]/30 selection:text-white">
      <Navbar />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5F6D]/15 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
          
          <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FF5F6D] animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase text-gray-300">Octobre - Décembre 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Projet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">S9</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
              Dernier Semestre Académique & Excellence Opérationnelle
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="max-w-[1000px] mx-auto px-6 mb-24">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10 mb-8">
              Cette phase est le point culminant du parcours académique avant le PFE. Elle vise à acquérir les compétences techniques avancées et de gestion nécessaires pour clôturer le cursus en beauté, sous la direction de Bouda Med Company.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-black/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF5F6D]/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#FF5F6D]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Lancement</p>
                  <p className="font-semibold text-lg">1er Octobre 2026</p>
                </div>
              </div>
              <div className="bg-black/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFC371]/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#FFC371]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Fin officielle</p>
                  <p className="font-semibold text-lg">31 Décembre 2026</p>
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

        {/* Modules Section */}
        <section className="max-w-[1000px] mx-auto px-6 mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Modules d'Enseignement (S9)</h2>
            <p className="text-gray-400 text-lg">Détail des modules stratégiques pilotés et gérés de manière optimale durant cette période.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111] border border-white/5 hover:border-[#FF5F6D]/50 transition-colors p-6 rounded-2xl group">
              <Network className="w-8 h-8 text-[#FF5F6D] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">1. Urbanisation des SI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Étude de l'alignement stratégique du système d'information sur les objectifs de l'entreprise. Cartographie fonctionnelle et applicative pour concevoir un SI agile et évolutif.</p>
            </div>
            
            <div className="bg-[#111] border border-white/5 hover:border-[#FF5F6D]/50 transition-colors p-6 rounded-2xl group">
              <LayoutTemplate className="w-8 h-8 text-[#FF5F6D] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">2. Architecture Logicielle</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Maîtrise des modèles de conception (Design Patterns). Création d'architectures logicielles robustes, maintenables et adaptées aux projets de grande envergure.</p>
            </div>

            <div className="bg-[#111] border border-white/5 hover:border-[#FF5F6D]/50 transition-colors p-6 rounded-2xl group">
              <Database className="w-8 h-8 text-[#FF5F6D] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">3. Ingénierie Big Data</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Apprentissage des concepts, outils et architectures pour traiter et analyser des données massives. Transformation de données complexes en informations stratégiques.</p>
            </div>

            <div className="bg-[#111] border border-white/5 hover:border-[#FF5F6D]/50 transition-colors p-6 rounded-2xl group">
              <Cloud className="w-8 h-8 text-[#FF5F6D] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">4. Cloud & Virtualisation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Déploiement et gestion des infrastructures informatiques à distance (virtualisation, plateformes Cloud IaaS, PaaS, SaaS).</p>
            </div>

            <div className="bg-[#111] border border-white/5 hover:border-[#FF5F6D]/50 transition-colors p-6 rounded-2xl group">
              <ShieldAlert className="w-8 h-8 text-[#FF5F6D] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">5. Atelier Pentesting Web</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Formation pratique sur la sécurité offensive. Techniques de tests d'intrusion pour identifier, exploiter et corriger les vulnérabilités web.</p>
            </div>

            <div className="bg-[#111] border border-white/5 hover:border-[#FF5F6D]/50 transition-colors p-6 rounded-2xl group">
              <ShieldCheck className="w-8 h-8 text-[#FF5F6D] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">6. Interconnexion & Sécurité Réseaux</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Conception et administration d'architectures réseaux avancées. Protocoles de routage, commutation et mécanismes de protection des données.</p>
            </div>

            <div className="bg-[#111] border border-white/5 hover:border-[#FF5F6D]/50 transition-colors p-6 rounded-2xl group">
              <Scale className="w-8 h-8 text-[#FF5F6D] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">7. Éthiques et Droits</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Sensibilisation au cadre juridique (droit de l'informatique, vie privée, propriété intellectuelle) et déontologie professionnelle de l'ingénieur.</p>
            </div>

            <div className="bg-[#111] border border-white/5 hover:border-[#FF5F6D]/50 transition-colors p-6 rounded-2xl group">
              <MessageSquare className="w-8 h-8 text-[#FF5F6D] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">8. Langues & Communication 5</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Communication bilingue (FR/EN). Prise de parole en public, rédaction de rapports (prépa PFE) et techniques de communication persuasives.</p>
            </div>
          </div>
        </section>

        {/* Calendrier des Réunions */}
        <section className="max-w-[1000px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Calendrier des Réunions Mensuelles</h2>
            <p className="text-gray-400 text-lg">Les réunions se tiendront dans la Salle de Réunion Numérique Intelligente pour suivre les performances académiques et l'avancement des projets.</p>
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
                        <span className="font-medium text-white">Samedi 3 Octobre 2026</span>
                      </div>
                    </td>
                    <td className="p-6 text-gray-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#FF5F6D]/10 text-[#FF5F6D] text-sm font-medium border border-[#FF5F6D]/20">
                        Lancement S9
                      </span>
                    </td>
                    <td className="p-6 text-gray-400 leading-relaxed">
                      Coup d'envoi du semestre. Revue des objectifs académiques pour chaque module, mise en place des emplois du temps dans l'application <em className="text-white not-italic font-medium">Encadrant</em> et point sur le projet « Geo Vest ».
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <Coffee className="w-5 h-5 text-[#FFC371]" />
                        <span className="font-medium text-white">Samedi 7 Novembre 2026</span>
                      </div>
                    </td>
                    <td className="p-6 text-gray-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#FFC371]/10 text-[#FFC371] text-sm font-medium border border-[#FFC371]/20">
                        Suivi (Mi-parcours)
                      </span>
                    </td>
                    <td className="p-6 text-gray-400 leading-relaxed">
                      Analyse chiffrée via l'IA des performances académiques actuelles. Point sur l'avancement des projets pratiques (notamment Pentesting et Big Data) et suivi des objectifs sportifs (Strava).
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <Coffee className="w-5 h-5 text-white" />
                        <span className="font-medium text-white">Samedi 5 Décembre 2026</span>
                      </div>
                    </td>
                    <td className="p-6 text-gray-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">
                        Bilan Pré-Examens
                      </span>
                    </td>
                    <td className="p-6 text-gray-400 leading-relaxed">
                      Préparation logistique et stratégique pour les examens finaux du S9. Point d'étape sur la plateforme « Angelfitness » et début des réflexions pour la recherche du PFE.
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
