const fs = require('fs');
const path = require('path');

const pages = [
  { route: 'tarifs', title: 'Tarifs & Abonnements', desc: 'Découvrez nos offres adaptées aux sportifs amateurs comme aux coachs professionnels.' },
  { route: 'blog', title: 'Blog Fitness', desc: 'Les derniers articles, conseils d\'entraînement et actualités de la communauté SmartFit.' },
  { route: 'guides', title: 'Guides d\'entraînement', desc: 'Des guides complets étape par étape pour maîtriser chaque mouvement.' },
  { route: 'aide', title: 'Centre d\'aide', desc: 'Trouvez rapidement des réponses à vos questions sur l\'utilisation de SmartFit.' },
  { route: 'api-docs', title: 'Documentation API', desc: 'Intégrez la puissance de notre IA de coaching directement dans vos propres applications.' },
  { route: 'forum', title: 'Forum Communautaire', desc: 'Échangez avec des milliers d\'athlètes et de coachs du monde entier.' },
  { route: 'a-propos', title: 'À propos de nous', desc: 'Découvrez notre mission : révolutionner le fitness grâce à l\'Intelligence Artificielle.' },
  { route: 'carrieres', title: 'Carrières', desc: 'Rejoignez l\'équipe qui construit le futur du sport et de la technologie.' },
  { route: 'presse', title: 'Presse & Médias', desc: 'Ressources, communiqués de presse et kit média officiel de SmartFit.' },
  { route: 'partenaires', title: 'Devenir Partenaire', desc: 'Salles de sport, marques d\'équipement : collaborez avec nous.' },
  { route: 'contact', title: 'Nous Contacter', desc: 'Notre équipe est là pour vous accompagner. Laissez-nous un message.' },
  { route: 'confidentialite', title: 'Politique de Confidentialité', desc: 'Vos données de santé sont privées. Découvrez comment nous les protégeons.' },
  { route: 'conditions', title: 'Conditions d\'utilisation', desc: 'Les règles d\'utilisation de notre plateforme et de nos services.' },
  { route: 'mentions-legales', title: 'Mentions Légales', desc: 'Informations juridiques et administratives concernant SmartFit Inc.' },
  { route: 'cookies', title: 'Gestion des Cookies', desc: 'Contrôlez vos préférences de navigation et de traçage.' }
];

const template = (title, desc) => `import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0D1317] text-white selection:bg-[#00FF88]/30 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-24 px-6 relative overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00FF88]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[800px] mx-auto text-center relative z-10 mt-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#152026] border border-white/10 text-[#00FF88] font-bold text-[10px] uppercase tracking-widest mb-6">
            SmartFit
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            ${title}
          </h1>
          <p className="text-lg text-[#A0AAB2] leading-relaxed mb-16 max-w-2xl mx-auto">
            ${desc}
          </p>
          
          <div className="bg-[#152026] border border-white/5 rounded-3xl p-10 text-left relative overflow-hidden group shadow-2xl">
            {/* Edge highlight */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00FF88] shadow-[0_0_20px_#00FF88] opacity-80" />
            
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
               En cours de développement 
               <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
            </h2>
            <p className="text-sm text-[#A0AAB2] leading-relaxed">
              L'équipe technique de SmartFit travaille activement sur cette section pour vous offrir une expérience parfaite. Cette page sera bientôt disponible avec toutes ses fonctionnalités. Merci de votre patience !
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
`;

const srcDir = path.join('D:', 'pfa', 'marketing', 'src', 'app');

pages.forEach(p => {
  const dir = path.join(srcDir, p.route);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(p.title, p.desc));
});

console.log('All 15 pages generated successfully!');
