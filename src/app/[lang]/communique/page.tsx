import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, type Locale } from "@/i18n/config";
import { Download, FileText, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function CommuniquePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  const dict = await getDictionary(lang as Locale);
  const p = dict.pages.communique;

  return (
    <div className="pb-24 pt-32">
      <div className="max-w-[800px] mx-auto px-6">
        <Link href="/#calendrier" className="inline-flex items-center gap-2 text-[#A0AAB2] hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> {p.back}
        </Link>
        <div className="border-b border-white/10 pb-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF88]/10 text-[#00FF88] text-sm font-bold mb-6 border border-[#00FF88]/20 uppercase tracking-wider">
            <FileText className="w-4 h-4" /> {p.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">{p.title}</h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-[#A0AAB2] text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{p.published}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600"></div>
            <div>{p.emitter}</div>
          </div>
        </div>
        <div className="prose prose-invert prose-lg max-w-none mb-16 text-[#A0AAB2]">
          <p className="lead text-xl text-white font-medium mb-8">{p.lead}</p>
          <p>{p.body}</p>
          <h3 className="text-2xl font-bold text-white mt-10 mb-4">{p.objectivesTitle}</h3>
          <ul className="list-disc pl-6 space-y-2">
            {p.objectives.map((obj: string, i: number) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
          <h3 className="text-2xl font-bold text-white mt-10 mb-4">{p.keyStepsTitle}</h3>
          <p>{p.keyStepsDesc}</p>
        </div>
        <div className="bg-[#152026] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl font-bold text-white mb-2">{p.pdfTitle}</h4>
            <p className="text-[#A0AAB2] text-sm">{p.pdfDesc}</p>
          </div>
          <a
            href="/data/bouda_med_company_anance.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#00FF88] text-black font-semibold text-sm rounded-lg hover:bg-[#FF9A9E] transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <Download className="w-4 h-4" />
            {p.pdfButton}
          </a>
        </div>
      </div>
    </div>
  );
}
