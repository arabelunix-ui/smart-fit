"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Activity, Brain, Zap, Dumbbell, Target, Camera, BarChart2,
  MessageSquare, MapPin, Apple, Globe, UserCheck, ClipboardList,
  LineChart, Calendar, ShieldCheck, Users, Star, Database, Video,
  Smartphone, ChevronRight, ArrowRight
} from "lucide-react";
import Image from "next/image";

// ─── Slide definitions ────────────────────────────────────────────────────────

const slides = [
  // 0 – INTRO
  {
    id: "intro",
    label: "Introduction",
    title: "SmartFit",
    subtitle: "La nouvelle ère du Fitness IA",
  },
  // 1 – PROBLEM
  {
    id: "problem",
    label: "Problème",
    title: "Le Problème",
    subtitle: "Pourquoi 80% des gens abandonnent le sport ?",
  },
  // 2 – SOLUTION
  {
    id: "solution",
    label: "Solution",
    title: "Notre Solution",
    subtitle: "Un écosystème complet pour sportifs & coachs",
  },
  // 3 – USER FEATURES
  {
    id: "user-features",
    label: "Sportifs",
    title: "Fonctionnalités Sportifs",
    subtitle: "Tout ce dont l'athlète a besoin",
  },
  // 4 – PROGRAMMES
  {
    id: "programmes",
    label: "Programmes",
    title: "Programmes Sur-Mesure",
    subtitle: "Des entraînements qui évoluent avec vous",
  },
  // 5 – GPS
  {
    id: "gps",
    label: "GPS",
    title: "Tracking GPS Avancé",
    subtitle: "Chaque course, chaque parcours, analysé",
  },
  // 6 – SUIVI
  {
    id: "suivi",
    label: "Suivi",
    title: "Suivi & Statistiques",
    subtitle: "Des données précises pour progresser",
  },
  // 7 – NUTRITION
  {
    id: "nutrition",
    label: "Nutrition",
    title: "Plan Nutritionnel IA",
    subtitle: "Manger juste pour performer mieux",
  },
  // 8 – COACH MODE
  {
    id: "coach",
    label: "Coachs",
    title: "Mode Coach Pro",
    subtitle: "La plateforme complète pour les professionnels",
  },
  // 9 – PROFIL PRO
  {
    id: "profil-pro",
    label: "Profil Pro",
    title: "Profil Coach Professionnel",
    subtitle: "Gérez votre activité comme un vrai pro",
  },
  // 10 – CREATION
  {
    id: "creation",
    label: "Création",
    title: "Outils de Création",
    subtitle: "Créez des programmes en quelques clics",
  },
  // 11 – ANALYTICS
  {
    id: "analytics",
    label: "Analytics",
    title: "Analytiques & Rapport",
    subtitle: "Pilotez la progression de vos clients",
  },
  // 12 – AGENDA
  {
    id: "agenda",
    label: "Agenda",
    title: "Agenda Intelligent",
    subtitle: "Gérez vos séances sans friction",
  },
  // 13 – AI COACH
  {
    id: "ai",
    label: "IA",
    title: "Intelligence Artificielle",
    subtitle: "L'IA au cœur de chaque décision",
  },
  // 14 – COMMUNICATION
  {
    id: "communication",
    label: "Comm.",
    title: "Communication Intégrée",
    subtitle: "Chat, vidéo et groupes en un seul endroit",
  },
  // 15 – DATABASE
  {
    id: "database",
    label: "Base Ex.",
    title: "Base d'Exercices",
    subtitle: "Plus de 500 exercices avec vidéos HD",
  },
  // 16 – LANGUAGES
  {
    id: "languages",
    label: "Langues",
    title: "Application Multilingue",
    subtitle: "Disponible dans 16+ langues",
  },
  // 17 – MARKET
  {
    id: "market",
    label: "Marché",
    title: "Le Marché",
    subtitle: "Une opportunité massive",
  },
  // 18 – CTA
  {
    id: "cta",
    label: "Contact",
    title: "Passons à l'action",
    subtitle: "Rejoignez l'aventure SmartFit",
  },
];

// ─── Image carousel hook ──────────────────────────────────────────────────────
function useImageCarousel(images: string[], duration = 2500) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % images.length), duration);
    return () => clearInterval(t);
  }, [images, duration]);
  return idx;
}

// ─── Phone mockup ─────────────────────────────────────────────────────────────
function Phone({ images, className = "" }: { images: string[]; className?: string }) {
  const idx = useImageCarousel(images);
  return (
    <div className={`relative w-[160px] h-[330px] sm:w-[200px] sm:h-[410px] bg-black rounded-[2.5rem] p-2 shadow-2xl border-4 border-[#152026] ring-1 ring-white/10 shrink-0 ${className}`}>
      <div className="absolute top-0 inset-x-0 mx-auto w-20 h-4 bg-black rounded-b-xl z-50 flex items-end justify-center pb-0.5">
        <div className="w-8 h-0.5 bg-white/20 rounded-full" />
      </div>
      <div className="w-full h-full bg-[#0D1317] rounded-[2rem] overflow-hidden relative">
        {images.map((src, i) => (
          <Image key={src} src={src} alt="" fill
            className={`object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
            sizes="200px" priority={i === 0} />
        ))}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "bg-[#00FF88] w-4" : "bg-white/30 w-1.5"}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Feature pill ─────────────────────────────────────────────────────────────
function Pill({ icon, text, color = "text-[#00FF88]", bg = "bg-[#00FF88]/10", border = "border-[#00FF88]/20" }: any) {
  return (
    <div className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl ${bg} border ${border} text-sm font-medium ${color}`}>
      <span className="shrink-0">{icon}</span>
      <span className="text-white">{text}</span>
    </div>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────────
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#152026] border border-white/5 rounded-2xl p-5 text-center">
      <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-emerald-300 mb-1">{value}</div>
      <div className="text-xs text-[#A0AAB2]">{label}</div>
    </div>
  );
}

// ─── Slide content renderer ───────────────────────────────────────────────────
function SlideContent({ id }: { id: string }) {
  switch (id) {

    // ── 0 INTRO ──────────────────────────────────────────────────────────────
    case "intro": return (
      <div className="flex flex-col items-center justify-center text-center gap-8 w-full">
        <div className="w-28 h-28 flex items-center justify-center relative shadow-[0_0_60px_rgba(0,255,136,0.1)] rounded-3xl">
          <Image src="/logo.png" alt="SmartFit Logo" width={112} height={112} className="object-contain" />
        </div>
        <p className="text-base sm:text-lg text-[#A0AAB2] max-w-2xl leading-relaxed">
          Fusion de l'expertise des meilleurs coachs avec une IA de pointe — pour les <strong className="text-white">sportifs</strong> qui veulent progresser et les <strong className="text-white">coachs</strong> qui veulent scaler leur activité.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: <Smartphone className="w-4 h-4" />, t: "iOS & Android" },
            { icon: <Globe className="w-4 h-4" />, t: "16+ Langues" },
          ].map((p, i) => <Pill key={i} icon={p.icon} text={p.t} />)}
        </div>
      </div>
    );

    // ── 1 PROBLEM ─────────────────────────────────────────────────────────────
    case "problem": return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {[
          { icon: <Target className="w-7 h-7 text-red-400" />, title: "Manque de suivi", desc: "Les programmes génériques ne s'adaptent pas à l'évolution de l'utilisateur.", color: "border-red-500/20" },
          { icon: <Activity className="w-7 h-7 text-orange-400" />, title: "Risque de blessure", desc: "Mauvaise exécution sans correction en temps réel entraîne douleurs et blessures.", color: "border-orange-500/20" },
          { icon: <Brain className="w-7 h-7 text-blue-400" />, title: "Perte de motivation", desc: "L'absence de feedback et de coach personnel rend la progression invisible.", color: "border-blue-500/20" },
        ].map((c, i) => (
          <div key={i} className={`bg-[#152026] p-6 rounded-2xl border ${c.color} flex flex-col items-center text-center gap-3`}>
            {c.icon}
            <h3 className="text-white font-bold text-lg">{c.title}</h3>
            <p className="text-sm text-[#A0AAB2] leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    );

    // ── 2 SOLUTION ────────────────────────────────────────────────────────────
    case "solution": return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
        {[
          { icon: <Activity className="w-6 h-6 text-[#00FF88]" />, title: "Pour les Sportifs", desc: "Programmes adaptatifs, tracking GPS, suivi biométrique, nutrition IA et analyse posturale par caméra." },
          { icon: <UserCheck className="w-6 h-6 text-[#3878FF]" />, title: "Pour les Coachs", desc: "Gestion complète des clients, création de programmes, analytics avancés, agenda et communication intégrée.", color: "border-[#3878FF]/20 bg-[#3878FF]/5" },
          { icon: <Brain className="w-6 h-6 text-purple-400" />, title: "IA au Cœur", desc: "Recommandations personnalisées, correction posturale en temps réel et plans nutritionnels intelligents.", color: "border-purple-500/20 bg-purple-500/5" },
          { icon: <Globe className="w-6 h-6 text-emerald-400" />, title: "Global & Multilingue", desc: "16+ langues, disponible dans 190 pays, interface native traduite professionnellement.", color: "border-emerald-500/20 bg-emerald-500/5" },
        ].map((c, i) => (
          <div key={i} className={`p-5 rounded-2xl border flex items-start gap-4 ${c.color ?? "border-[#00FF88]/20 bg-[#00FF88]/5"}`}>
            <div className="w-11 h-11 rounded-xl bg-[#152026] flex items-center justify-center shrink-0">{c.icon}</div>
            <div>
              <h3 className="text-white font-bold mb-1">{c.title}</h3>
              <p className="text-xs text-[#A0AAB2] leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    );

    // ── 3 USER FEATURES ───────────────────────────────────────────────────────
    case "user-features": return (
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        <div className="flex gap-4">
          <Phone images={["/features/programme/program1.jpeg", "/features/programme/program2.jpeg"]} />
          <Phone images={["/features/suivi/suivi1.jpeg", "/features/suivi/suivi3.jpeg"]} className="mt-8" />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          {[
            { icon: <Activity className="w-4 h-4" />, t: "Programmes d'entraînement adaptatifs" },
            { icon: <Camera className="w-4 h-4" />, t: "Analyse posturale par IA & caméra" },
            { icon: <MapPin className="w-4 h-4" />, t: "Tracking GPS temps réel" },
            { icon: <BarChart2 className="w-4 h-4" />, t: "Suivi biométrique & statistiques avancées" },
            { icon: <Apple className="w-4 h-4" />, t: "Plan nutritionnel personnalisé IA" },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-[#152026] border border-white/5 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#00FF88]/10 flex items-center justify-center text-[#00FF88] shrink-0">{f.icon}</div>
              <span className="text-sm text-white font-medium">{f.t}</span>
              <ChevronRight className="w-4 h-4 text-[#00FF88] ml-auto" />
            </div>
          ))}
        </div>
      </div>
    );

    // ── 4 PROGRAMMES ──────────────────────────────────────────────────────────
    case "programmes": return (
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        <Phone images={["/features/programme/program1.jpeg", "/features/programme/program2.jpeg", "/features/programme/program3.jpeg"]} />
        <div className="flex-1 space-y-4">
          <p className="text-[#A0AAB2] text-sm leading-relaxed">Des programmes générés et mis à jour automatiquement en fonction de vos performances, votre récupération et vos objectifs.</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "500+", l: "Exercices" }, { v: "100%", l: "Personnalisé" },
              { v: "Auto", l: "Adaptatif" },  { v: "Live", l: "Feedback IA" },
            ].map((s, i) => <Stat key={i} value={s.v} label={s.l} />)}
          </div>
          <div className="flex flex-wrap gap-2">
            {["Musculation", "Cardio", "HIIT", "Yoga", "Récupération"].map((t) => (
              <span key={t} className="px-3 py-1 bg-[#152026] border border-white/5 rounded-full text-xs text-[#A0AAB2]">{t}</span>
            ))}
          </div>
        </div>
      </div>
    );

    // ── 5 GPS ─────────────────────────────────────────────────────────────────
    case "gps": return (
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        <Phone images={["/features/gps/gps1.jpeg", "/features/gps/gps2.jpeg"]} />
        <div className="flex-1 space-y-4">
          <p className="text-[#A0AAB2] text-sm leading-relaxed">Suivez chaque course, randonnée ou sortie vélo avec une précision GPS centimétrique. Analysez votre allure, dénivelé, zones cardiaques et historique de parcours.</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "GPS", l: "Haute précision" }, { v: "Live", l: "Vitesse & allure" },
              { v: "HR", l: "Zones cardiaques" }, { v: "Map", l: "Historique parcours" },
            ].map((s, i) => <Stat key={i} value={s.v} label={s.l} />)}
          </div>
        </div>
      </div>
    );

    // ── 6 SUIVI ───────────────────────────────────────────────────────────────
    case "suivi": return (
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        <div className="flex gap-3">
          <Phone images={["/features/suivi/suivi1.jpeg", "/features/suivi/suivi2.jpeg", "/features/suivi/suivi3.jpeg"]} />
          <Phone images={["/features/suivi/suivi4.jpeg", "/features/suivi/suivi5.jpeg", "/features/suivi/suivi6.jpeg"]} className="mt-6" />
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-[#A0AAB2] text-sm leading-relaxed">Suivez votre composition corporelle, vos performances, vos records personnels et votre progression semaine après semaine.</p>
          <div className="flex flex-col gap-2">
            {["Poids & composition corporelle", "Records personnels (PR)", "Volume d'entraînement hebdomadaire", "Récupération & charge musculaire", "Graphiques & tendances"].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[#A0AAB2]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />{t}
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    // ── 7 NUTRITION ───────────────────────────────────────────────────────────
    case "nutrition": return (
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        <Phone images={["/features/nutrition/nutrition1.jpeg", "/features/nutrition/nutrition2.jpeg", "/features/nutrition/nutrition3.jpeg"]} />
        <div className="flex-1 space-y-4">
          <p className="text-[#A0AAB2] text-sm leading-relaxed">Un plan nutritionnel IA qui s'adapte à vos objectifs (prise de masse, perte de poids, performance), votre métabolisme et votre agenda d'entraînement.</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { v: "Macro", l: "Protéines, Glucides, Lipides" },
              { v: "Kcal", l: "Suivi calorique" },
              { v: "IA", l: "Recettes adaptées" },
            ].map((s, i) => <Stat key={i} value={s.v} label={s.l} />)}
          </div>
          <div className="flex flex-wrap gap-2">
            {["Prise de masse", "Sèche", "Performance", "Végétarien", "Sans gluten"].map((t) => (
              <span key={t} className="px-3 py-1 bg-[#152026] border border-white/5 rounded-full text-xs text-[#A0AAB2]">{t}</span>
            ))}
          </div>
        </div>
      </div>
    );

    // ── 8 COACH MODE ──────────────────────────────────────────────────────────
    case "coach": return (
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        <Phone images={["/features/profil-pro/profil1.jpeg", "/features/profil-pro/profil2.jpeg"]} />
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: <UserCheck className="w-5 h-5 text-[#00FF88]" />, t: "Profil Coach Pro", d: "Gérez votre réputation et vos clients en un seul endroit." },
            { icon: <ClipboardList className="w-5 h-5 text-blue-400" />, t: "Création de Programmes", d: "Bibliothèque d'exercices et éditeur drag & drop." },
            { icon: <LineChart className="w-5 h-5 text-purple-400" />, t: "Analytiques Clients", d: "Suivez la progression de chaque athlète avec des KPIs précis." },
            { icon: <Calendar className="w-5 h-5 text-orange-400" />, t: "Agenda Intelligent", d: "Planification, rappels automatiques et gestion des créneaux." },
          ].map((c, i) => (
            <div key={i} className="p-4 bg-[#152026] border border-white/5 rounded-xl flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">{c.icon}</div>
              <div>
                <div className="text-white font-bold text-sm mb-0.5">{c.t}</div>
                <div className="text-xs text-[#A0AAB2] leading-relaxed">{c.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    // ── 9 PROFIL PRO ──────────────────────────────────────────────────────────
    case "profil-pro": return (
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        <div className="flex gap-3">
          <Phone images={["/features/profil-pro/profil1.jpeg", "/features/profil-pro/profil3.jpeg"]} />
          <Phone images={["/features/profil-pro/profil2.jpeg", "/features/profil-pro/profil4.jpeg"]} className="mt-6" />
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-[#A0AAB2] text-sm leading-relaxed">Le profil coach centralise votre activité : clients actifs, revenus mensuels, séances planifiées et évaluations. Tout en un coup d'œil.</p>
          <div className="grid grid-cols-3 gap-2">
            <Stat value="42+" label="Clients actifs" />
            <Stat value="5.0★" label="Note moyenne" />
            <Stat value="3 240€" label="Revenu/mois" />
          </div>
        </div>
      </div>
    );

    // ── 10 CREATION ───────────────────────────────────────────────────────────
    case "creation": return (
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        <Phone images={[
          "/features/creation/creation1.jpeg", "/features/creation/creation2.jpeg",
          "/features/creation/creation3.jpeg", "/features/creation/creation4.jpeg",
        ]} />
        <div className="flex-1 space-y-4">
          <p className="text-[#A0AAB2] text-sm leading-relaxed">L'éditeur de programmes permet de glisser-déposer des exercices depuis une bibliothèque de 500+ mouvements, avec vidéos HD et paramétrage précis.</p>
          <div className="flex flex-col gap-2">
            {[
              "Bibliothèque de 500+ exercices avec vidéos",
              "Éditeur par glisser-déposer intuitif",
              "Paramétrage : séries, répétitions, charge, repos",
              "Templates réutilisables et partagés",
              "Assignation directe aux clients",
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] shrink-0" />
                <span className="text-[#A0AAB2]">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    // ── 11 ANALYTICS ──────────────────────────────────────────────────────────
    case "analytics": return (
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        <Phone images={["/features/analyse/analyse1.jpeg", "/features/analyse/analyse2.jpeg", "/features/analyse/analyse3.jpeg"]} />
        <div className="flex-1 space-y-4">
          <p className="text-[#A0AAB2] text-sm leading-relaxed">Des tableaux de bord analytiques complets pour suivre la progression de chaque client, détecter les plateaux et ajuster les programmes en temps réel.</p>
          <div className="grid grid-cols-2 gap-3">
            <Stat value="+15%" label="Progression moy." />
            <Stat value="Live" label="Données temps réel" />
            <Stat value="KPI" label="Indicateurs clés" />
            <Stat value="PDF" label="Rapports clients" />
          </div>
        </div>
      </div>
    );

    // ── 12 AGENDA ─────────────────────────────────────────────────────────────
    case "agenda": return (
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        <Phone images={["/features/agenda/agenda1.jpeg", "/features/agenda/agenda2.jpeg"]} />
        <div className="flex-1 space-y-4">
          <p className="text-[#A0AAB2] text-sm leading-relaxed">Un agenda intelligent synchronisé avec tous vos clients. Planifiez, déplacez, annulez des séances avec rappels automatiques et gestion des récurrences.</p>
          <div className="flex flex-col gap-2">
            {[
              "Vue hebdomadaire et mensuelle",
              "Séances récurrentes automatiques",
              "Rappels SMS et push aux clients",
              "Intégration Google Calendar & Outlook",
              "Gestion des annulations et remplacements",
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] shrink-0" />
                <span className="text-[#A0AAB2]">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    // ── 13 AI ─────────────────────────────────────────────────────────────────
    case "ai": return (
      <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
        <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
          <Brain className="w-10 h-10 text-purple-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {[
            { icon: <Camera className="w-6 h-6 text-[#00FF88]" />, t: "Vision Posturale", d: "Analyse de la posture en temps réel via la caméra. Correction immédiate avec feedback vocal." },
            { icon: <Brain className="w-6 h-6 text-blue-400" />, t: "Recommandations IA", d: "L'IA ajuste automatiquement les programmes selon fatigue, progression et objectifs." },
            { icon: <Zap className="w-6 h-6 text-yellow-400" />, t: "Prédiction de Forme", d: "Détection proactive des risques de surentraînement et recommandations de récupération." },
          ].map((c, i) => (
            <div key={i} className="p-5 bg-[#152026] border border-white/5 rounded-2xl flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">{c.icon}</div>
              <h3 className="text-white font-bold">{c.t}</h3>
              <p className="text-xs text-[#A0AAB2] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    );

    // ── 14 COMMUNICATION ──────────────────────────────────────────────────────
    case "communication": return (
      <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {[
            { icon: <MessageSquare className="w-6 h-6 text-[#00FF88]" />, t: "Chat Instantané", d: "Messagerie temps réel entre coach et client avec historique complet." },
            { icon: <Video className="w-6 h-6 text-blue-400" />, t: "Appels Vidéo", d: "Séances en visio intégrées directement dans l'application." },
            { icon: <Users className="w-6 h-6 text-purple-400" />, t: "Groupes & Défis", d: "Créez des groupes de challenge pour motiver plusieurs clients simultanément." },
          ].map((c, i) => (
            <div key={i} className="p-5 bg-[#152026] border border-white/5 rounded-2xl flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">{c.icon}</div>
              <h3 className="text-white font-bold">{c.t}</h3>
              <p className="text-xs text-[#A0AAB2] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    );

    // ── 15 DATABASE ───────────────────────────────────────────────────────────
    case "database": return (
      <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <Stat value="500+" label="Exercices" />
          <Stat value="HD" label="Vidéos démos" />
          <Stat value="40+" label="Groupes musculaires" />
          <Stat value="Tous" label="Équipements" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 w-full max-w-3xl">
          {["Musculation", "Cardio", "Yoga", "Mobilité", "HIIT", "Pilates", "Calisthenics", "Boxe", "Natation", "Vélo", "Course", "Stretching"].map((t) => (
            <span key={t} className="px-3 py-1.5 bg-[#152026] border border-white/5 rounded-full text-xs text-[#A0AAB2] hover:border-[#00FF88]/30 transition-colors">{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 px-5 py-3 bg-[#00FF88]/5 border border-[#00FF88]/20 rounded-2xl text-sm text-[#A0AAB2]">
          <Database className="w-5 h-5 text-[#00FF88]" />
          Chaque exercice inclut : description, muscles ciblés, vidéo HD, alternatives et variantes
        </div>
      </div>
    );

    // ── 16 LANGUAGES ──────────────────────────────────────────────────────────
    case "languages": return (
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        <div className="flex gap-4">
          <Phone images={["/features/language/cover/fr.jpeg", "/features/language/cover/en.jpeg", "/features/language/cover/ar.jpeg"]} />
          <Phone images={["/features/language/app/fr.jpeg", "/features/language/app/en.jpeg", "/features/language/app/ar.jpeg"]} className="mt-6" />
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-[#A0AAB2] text-sm leading-relaxed">SmartFit est entièrement traduit et localisé dans 16+ langues, avec support des langues RTL (arabe, hébreu) et des formats régionaux.</p>
          <div className="grid grid-cols-3 gap-2">
            <Stat value="16+" label="Langues" />
            <Stat value="190+" label="Pays" />
            <Stat value="RTL" label="Support arabe" />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["🇫🇷 FR", "🇬🇧 EN", "🇸🇦 AR", "🇩🇪 DE", "🇪🇸 ES", "🇵🇹 PT", "🇮🇹 IT", "🇨🇳 ZH", "🇯🇵 JA"].map((l) => (
              <span key={l} className="px-2.5 py-1 bg-[#152026] border border-white/5 rounded-full text-xs text-[#A0AAB2]">{l}</span>
            ))}
          </div>
        </div>
      </div>
    );

    // ── 17 MARKET ─────────────────────────────────────────────────────────────
    case "market": return (
      <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <Stat value="$96B" label="Marché Fitness global" />
          <Stat value="24%" label="Croissance annuelle IA" />
          <Stat value="3.5B" label="Utilisateurs fitness mobile" />
          <Stat value="2030" label="Marché IA Sport $30B" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="p-5 bg-[#152026] border border-white/5 rounded-2xl">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2"><Users className="w-4 h-4 text-[#00FF88]" /> Cible Sportifs</h3>
            <p className="text-xs text-[#A0AAB2] leading-relaxed">Millennials & Gen Z cherchant des solutions personnalisées, tech-savvy, prêts à payer pour la qualité.</p>
          </div>
          <div className="p-5 bg-[#152026] border border-white/5 rounded-2xl">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2"><UserCheck className="w-4 h-4 text-[#3878FF]" /> Cible Coachs</h3>
            <p className="text-xs text-[#A0AAB2] leading-relaxed">Coachs indépendants et salles de sport cherchant à digitaliser et scaler leur activité.</p>
          </div>
        </div>
      </div>
    );

    // ── 18 CTA ────────────────────────────────────────────────────────────────
    case "cta": return (
      <div className="flex flex-col items-center justify-center text-center gap-8 w-full">
        <div className="w-20 h-20 bg-[#00FF88]/10 rounded-full flex items-center justify-center border border-[#00FF88]/30 shadow-[0_0_60px_rgba(0,255,136,0.2)]">
          <ShieldCheck className="w-10 h-10 text-[#00FF88]" />
        </div>
        <p className="text-[#A0AAB2] text-sm max-w-xl leading-relaxed mt-4">
          SmartFit est prêt à transformer l'industrie du fitness. Rejoignez-nous en tant que partenaire, investisseur ou early adopter.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-[#00FF88] text-[#0D1317] font-bold rounded-full text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,255,136,0.3)]">
            <ArrowRight className="w-4 h-4" /> Nous contacter
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 font-bold rounded-full text-sm hover:bg-white/10 transition-all">
            <Smartphone className="w-4 h-4" /> Télécharger l'app
          </button>
        </div>
      </div>
    );

    default: return null;
  }
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function PresentationPage() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = useCallback(() => setCurrent((p) => Math.min(p + 1, total - 1)), [total]);
  const prev = useCallback(() => setCurrent((p) => Math.max(p - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <div className="h-screen w-screen bg-[#0D1317] flex flex-col overflow-hidden text-white select-none relative">
      {/* BG glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00FF88]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#3878FF]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shrink-0 border-b border-white/5 z-20">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center relative">
            <Image src="/logo.png" alt="SmartFit Logo" width={28} height={28} className="object-contain" />
          </div>
          <span className="font-extrabold text-lg tracking-tight">SmartFit</span>
          <span className="text-[#A0AAB2] font-normal text-xs ml-1 hidden sm:inline">Présentation</span>
        </div>

        {/* Mini nav tabs */}
        <div className="hidden md:flex items-center gap-1 overflow-x-auto max-w-[60vw]">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-medium whitespace-nowrap transition-all ${
                i === current ? "bg-[#00FF88]/20 text-[#00FF88]" : "text-[#A0AAB2] hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="text-xs text-[#A0AAB2] bg-white/5 px-3 py-1 rounded-full border border-white/10 shrink-0">
          {current + 1} / {total}
        </div>
      </header>

      {/* Slide */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 z-10 min-h-0 overflow-hidden">
        <div key={current} className="w-full max-w-6xl mx-auto flex flex-col items-center gap-5 animate-[fadeIn_0.4s_ease-out_forwards] max-h-full">
          {/* Title */}
          <div className="text-center shrink-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-1">
              {current === 0
                ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{slide.title}</span>
                : slide.title
              }
            </h1>
            <p className="text-xs sm:text-sm text-[#00FF88] font-medium">{slide.subtitle}</p>
          </div>

          {/* Content */}
          <div className="w-full flex justify-center overflow-y-auto shrink">
            <SlideContent id={slide.id} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="shrink-0 px-6 py-3 flex flex-col items-center gap-2 z-20 border-t border-white/5">
        {/* Progress bar */}
        <div className="w-full max-w-3xl h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#00FF88] to-emerald-400 transition-all duration-500 ease-out"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
        <div className="text-[10px] text-[#A0AAB2] opacity-60">
          ◀ ▶ ou Espace pour naviguer
        </div>
      </footer>
    </div>
  );
}
