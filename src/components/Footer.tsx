"use client";
import { Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  dict: any;
}

export default function Footer({ dict }: FooterProps) {
  const footerLinks: Record<string, { name: string; href: string }[]> = {
    [dict.nav.product]: [
      { name: dict.nav.forAthletes, href: "/#users" },
      { name: dict.nav.coachPlatform, href: "/#coachs" },
      { name: dict.nav.ai, href: "/#ai-coach" },
      { name: dict.nav.exerciseDB, href: "/#database" },
      { name: dict.nav.integrations, href: "/#integrations" },
      { name: dict.nav.pricing, href: "#" },
    ],
    [dict.nav.resources]: [
      { name: dict.nav.blog, href: "#" },
      { name: dict.nav.guides, href: "#" },
      { name: dict.nav.help, href: "#" },
      { name: dict.nav.apiDocs, href: "#" },
      { name: dict.nav.forum, href: "#" },
    ],
    [dict.nav.company]: [
      { name: dict.nav.about, href: "#" },
      { name: dict.nav.careers, href: "#" },
      { name: dict.nav.press, href: "#" },
      { name: dict.nav.partners, href: "#" },
      { name: dict.nav.contact, href: "#" },
    ],
    [dict.nav.legal]: [
      { name: dict.nav.privacy, href: "#" },
      { name: dict.nav.terms, href: "#" },
      { name: dict.nav.legalNotice, href: "#" },
      { name: dict.nav.cookies, href: "#" },
    ]
  };

  return (
    <footer className="bg-[#0D1317] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      
      {/* Subtle Glow effect at the bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[150px] bg-[#00FF88]/5 blur-[100px] rounded-[100%] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16">
          
          {/* Brand & Social Column (takes up 2 columns on large screens) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="w-8 h-8 flex items-center justify-center transition-all rounded-lg">
                <Image src="/logo.png" alt="SmartFit Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#00FF88] transition-colors">
                SmartFit
              </span>
            </Link>
            
            <p className="text-[13px] text-[#A0AAB2] leading-relaxed mb-8 max-w-xs">
              {dict.common.tagline}
            </p>
            
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[#152026] border border-white/5 flex items-center justify-center text-[#A0AAB2] hover:text-[#0D1317] hover:bg-[#00FF88] hover:border-[#00FF88] transition-all group">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#152026] border border-white/5 flex items-center justify-center text-[#A0AAB2] hover:text-[#0D1317] hover:bg-[#00FF88] hover:border-[#00FF88] transition-all group">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#152026] border border-white/5 flex items-center justify-center text-[#A0AAB2] hover:text-[#0D1317] hover:bg-[#00FF88] hover:border-[#00FF88] transition-all group">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#152026] border border-white/5 flex items-center justify-center text-[#A0AAB2] hover:text-[#0D1317] hover:bg-[#00FF88] hover:border-[#00FF88] transition-all group">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="text-white font-bold text-[13px] tracking-wider uppercase mb-5">
                {title}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-[#A0AAB2] hover:text-[#00FF88] text-[13px] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[#A0AAB2] text-[12px]">
            <span>© {new Date().getFullYear()} SmartFit Inc. {dict.common.copyright}</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">{dict.common.designedWith} <span className="text-[#00FF88]">♥</span> {dict.common.forPerformance}</span>
          </div>
          
          {/* Status Indicator */}
          <a href="#" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#152026] border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-2 h-2 rounded-full bg-[#00FF88] shadow-[0_0_5px_#00FF88] animate-pulse" />
            <span className="text-[11px] font-medium text-[#A0AAB2]">{dict.common.allSystemsOperational}</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
