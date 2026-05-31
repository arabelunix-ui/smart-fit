"use client";
import Link from "next/link";
import Image from "next/image";
import { Activity, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import LanguageSelector from "@/i18n/language-selector";
import { useLanguage } from "@/i18n/client";

interface NavbarProps {
  dict: any;
}

export default function Navbar({ dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dict.nav.sportifs, href: "#users" },
    { name: dict.nav.coachPro, href: "#coachs" },
    { name: dict.nav.exercices, href: "#database" },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 w-full h-20 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0D1317]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
          : "bg-[#0D1317] border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex items-center justify-between h-full">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all rounded-xl">
            <Image src="/logo.png" alt="SmartFit Logo" width={40} height={40} className="object-contain" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#00FF88] transition-colors">
            SmartFit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[13px] font-bold text-[#A0AAB2] hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="w-px h-6 bg-white/10" />

          <LanguageSelector currentLang={lang} />

          <button className="group relative h-10 px-6 bg-white text-[#0D1317] text-[13px] font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <div className="absolute inset-0 bg-[#00FF88] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-[#0D1317]">
              {dict.nav.telecharger} <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-[#A0AAB2] hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-[#0D1317] z-40 transition-transform duration-500 ease-in-out flex flex-col pt-24 px-6 md:hidden ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-extrabold text-white hover:text-[#00FF88] transition-colors py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="py-2">
            <LanguageSelector currentLang={lang} />
          </div>
        </div>
        <button className="mt-8 w-full py-4 bg-[#00FF88] text-[#0D1317] text-lg font-bold rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,255,136,0.3)]">
          {dict.nav.telecharger} <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
