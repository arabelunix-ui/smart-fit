import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertCircle, BookOpen, Clock, User, Brain, MessageCircle, Heart, Wrench, Server, BarChart, Database, Cpu } from "lucide-react";

export default function ExamensCalendrierPage() {
  const modules = [
    {
      title: "Apprentissage par Renforcement",
      description: "Agents intelligents, MDP, Q-Learning, Deep Q-Networks.",
      supervisor: "Arabe Lunix",
      icon: <Brain className="w-6 h-6 text-[#FF5F6D]" />
    },
    {
      title: "Langues et Communication 4",
      description: "Rédaction technique, prise de parole, anglais IT.",
      supervisor: "Langue Nouveau",
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Développement Personnel",
      description: "Gestion du stress, intelligence émotionnelle, leadership.",
      supervisor: "Marketing Degital",
      icon: <Heart className="w-6 h-6 text-pink-400" />
    },
    {
      title: "Atelier des Activités Pratiques",
      description: "Mini-projets, hackathons, intégration de compétences.",
      supervisor: "Med Mechel",
      icon: <Wrench className="w-6 h-6 text-orange-400" />
    },
    {
      title: "Ingénierie DevOps",
      description: "CI/CD, Docker, Kubernetes, Infrastructure as Code.",
      supervisor: "Pyhthon Pc Java",
      icon: <Server className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Business Intelligence et ERP",
      description: "ETL, Tableaux de bord (Power BI), Progiciels (Odoo/SAP).",
      supervisor: "Svt Network",
      icon: <BarChart className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Deep Learning",
      description: "Réseaux de neurones (CNN, RNN/LSTM), TensorFlow, PyTorch.",
      supervisor: "Math Ia",
      icon: <Cpu className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Administration de Bases de Données",
      description: "Disponibilité, sécurité, backup, tuning (Oracle, PostgreSQL, NoSQL).",
      supervisor: "web Geo",
      icon: <Database className="w-6 h-6 text-cyan-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF5F6D]/30 selection:text-white">
      <Navbar />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5F6D]/15 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
          
          <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <BookOpen className="w-4 h-4 text-[#FF5F6D]" />
              <span className="text-sm font-medium tracking-wide uppercase text-gray-300">Semestre 8 - ENIAD</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Modules à <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">Valider</span>
            </h1>
            
            {/* Alert Banner */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-amber-500/10 border border-amber-500/20 text-amber-200 px-6 py-4 rounded-2xl max-w-2xl mx-auto mt-4 text-left sm:text-center shadow-[0_0_30px_rgba(245,158,11,0.1)]">
              <Clock className="w-8 h-8 sm:w-6 sm:h-6 shrink-0 text-amber-400" />
              <p className="font-medium text-lg">
                Le calendrier détaillé des examens (horaires et jours exacts) sera publié ultérieurement.
              </p>
            </div>
          </div>
        </section>

        {/* Modules Grid Section */}
        <section className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, index) => (
              <div key={index} className="bg-[#111] border border-white/10 p-8 rounded-3xl hover:border-[#FF5F6D]/40 hover:-translate-y-1 transition-all duration-300 group shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#FF5F6D]/10 transition-colors">
                  {mod.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{mod.title}</h3>
                <p className="text-gray-400 mb-6 min-h-[48px] text-sm leading-relaxed">
                  {mod.description}
                </p>
                <div className="flex items-center gap-2 pt-6 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Encadrant</span>
                    <span className="text-sm text-gray-200 font-medium">{mod.supervisor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
