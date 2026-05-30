import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, FileText, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CommuniquePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF5F6D]/30 selection:text-white">
      <Navbar />

      <main className="pb-24 pt-32">
        <div className="max-w-[800px] mx-auto px-6">
          
          <Link href="/#calendrier" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Retour
          </Link>

          {/* Document Header */}
          <div className="border-b border-white/10 pb-8 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5F6D]/10 text-[#FF5F6D] text-sm font-bold mb-6 border border-[#FF5F6D]/20 uppercase tracking-wider">
              <FileText className="w-4 h-4" /> Communiqué Officiel
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Annonce d'un Partenariat Stratégique et Feuille de Route
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> 
                <span>Publié le 30 Mai 2026</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600"></div>
              <div>Émetteur : Bouda Med Company</div>
            </div>
          </div>

          {/* Document Body */}
          <div className="prose prose-invert prose-lg max-w-none mb-16 text-gray-300">
            <p className="lead text-xl text-white font-medium mb-8">
              Bouda Med Company annonce officiellement la nomination de « Web Geo » pour assurer la direction et la supervision complète du projet stratégique « Bouda El Mouhandis ».
            </p>
            
            <p>
              Ce projet d'envergure s'étendra sur une durée précise de 13 mois et 1 jour, débutant officiellement le 31 mai 2026 pour s'achever avec l'atteinte de ses objectifs finaux le 1er juillet 2027.
            </p>

            <h3 className="text-2xl font-bold text-white mt-10 mb-4">Objectifs Principaux</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mise en place d'une gouvernance technologique de pointe.</li>
              <li>Déploiement d'outils d'intelligence artificielle pour l'assistance aux étudiants.</li>
              <li>Supervision et encadrement rigoureux jusqu'à l'obtention des résultats finaux (PFE).</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-10 mb-4">Les Étapes Clés</h3>
            <p>
              La feuille de route se décline en plusieurs phases critiques, de la phase d'Été 2026 dédiée au développement, jusqu'à la phase PFE au printemps 2027 pour l'intégration au marché du travail via des écosystèmes IA ciblés.
            </p>
          </div>

          {/* Download Action */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Version PDF Officielle</h4>
              <p className="text-gray-400 text-sm">Téléchargez le communiqué de presse complet au format PDF.</p>
            </div>
            
            <a 
              href="/data/bouda_med_company_anance.pdf" 
              download 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#FF5F6D] text-black font-semibold text-sm rounded-lg hover:bg-[#FF9A9E] transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <Download className="w-4 h-4" />
              Télécharger (PDF)
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
