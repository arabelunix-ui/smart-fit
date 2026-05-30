import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users, Play, Mic, Globe, Presentation, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ConferencePressePage() {
  const agendaItems = [
    {
      time: "21:00",
      title: "Keynote d'Ouverture",
      speaker: "CEO Bouda Med Company",
      desc: "La vision de l'entreprise pour la saison 2026-2027 et l'avenir de l'ingénierie éducative.",
      icon: <Presentation className="w-5 h-5 text-purple-400" />
    },
    {
      time: "21:30",
      title: "Lancement : Bouda Med Mohandess 2027",
      speaker: "Directeur Technique & Comité de Pilotage",
      desc: "Attribution des rôles stratégiques pour le lancement du projet Bouda Med Mohandess (Version 2027) et présentation des outils d'encadrement.",
      icon: <Cpu className="w-5 h-5 text-[#FF5F6D]" />
    },
    {
      time: "22:15",
      title: "Session Q&A et Échanges",
      speaker: "Panel d'Experts",
      desc: "Questions et réponses avec la presse, les étudiants et les partenaires technologiques.",
      icon: <Mic className="w-5 h-5 text-blue-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF5F6D]/30 selection:text-white">
      <Navbar />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5F6D]/10 rounded-full blur-[120px] opacity-70 pointer-events-none"></div>
          
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#FF5F6D] animate-pulse"></span>
                <span className="text-sm font-medium tracking-wide uppercase text-gray-300">Événement Exclusif</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Grande <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">
                  Conférence
                </span><br />
                de Presse
              </h1>
              
              <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-lg">
                Rejoignez-nous pour définir le rôle stratégique de chaque équipe dans le grand lancement du projet <strong>Bouda Med Mohandess (Version 2027)</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <Play className="w-5 h-5 fill-black" />
                  Regarder le Direct
                </button>
                <Link href="/#launch" className="px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  Découvrir les annonces <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-[#111] border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#FF5F6D] mb-1">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold uppercase tracking-wider text-sm">Date</span>
                  </div>
                  <p className="text-2xl font-bold">30 Mai 2026</p>
                  <p className="text-gray-400">À partir de 21:00 (nuit)</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold uppercase tracking-wider text-sm">Lieu</span>
                  </div>
                  <p className="text-2xl font-bold">Trabzon Ouislane</p>
                  <p className="text-gray-400">Siège de l'événement</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <Globe className="w-5 h-5" />
                    <span className="font-semibold uppercase tracking-wider text-sm">Format</span>
                  </div>
                  <p className="text-2xl font-bold">Hybride</p>
                  <p className="text-gray-400">Présentiel & Live Streaming</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 mb-1">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold uppercase tracking-wider text-sm">Public</span>
                  </div>
                  <p className="text-2xl font-bold">Accès Restreint</p>
                  <p className="text-gray-400 text-sm leading-snug">Organisateurs, encadrants et staff technique de Bouda Med Company.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section className="max-w-[1000px] mx-auto px-6 pt-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Programme de l'Événement</h2>
            <p className="text-gray-400 text-lg">Un planning chargé d'innovations et de surprises.</p>
          </div>

          <div className="space-y-6">
            {agendaItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 bg-[#111] border border-white/10 p-6 md:p-8 rounded-3xl hover:border-white/20 transition-all group">
                <div className="flex-shrink-0 md:w-48 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6 flex md:flex-col items-center md:items-start justify-between md:justify-center">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">{item.time}</span>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span className="text-[#FF5F6D] uppercase tracking-wider text-xs">Intervenant :</span>
                    <span className="text-gray-200">{item.speaker}</span>
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
