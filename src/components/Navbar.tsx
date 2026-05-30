"use client";

import { useState } from "react";
import { ArrowRight, Menu, X, Globe, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Français");

  const languages = ["Français", "English", "Español", "中国站"];

  return (
    <>
      <header className="border-b border-white/5 sticky top-0 bg-[#0A0A0A]/80 backdrop-blur-md z-40">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            {/* Logo Icon */}
            <div className="w-7 h-7 relative flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer">
              <div className="absolute left-0 w-4 h-7 bg-white rounded-l-full rounded-r-md"></div>
              <div className="absolute right-0 w-3 h-7 bg-[#FF5F6D] rounded-r-full rounded-l-md"></div>
            </div>
            <span className="text-xl font-medium tracking-tight cursor-pointer">BoudaMedCompany</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="text-sm text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
            >
              <Globe className="w-4 h-4" />
              {selectedLang}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-[#111] border border-white/10 rounded-xl shadow-xl overflow-hidden py-1 z-50 animate-in fade-in slide-in-from-top-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/10 ${
                      selectedLang === lang ? "text-[#FF5F6D] font-medium" : "text-gray-300"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        </div>
      </header>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      {/* Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-[#111] border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <span className="text-lg font-medium">Menu</span>
          <button 
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 flex flex-col gap-4">
          <a href="#" className="text-xl font-medium text-gray-300 hover:text-white hover:pl-2 transition-all">Produits</a>
          <a href="#" className="text-xl font-medium text-gray-300 hover:text-white hover:pl-2 transition-all">Solutions</a>
          <a href="#" className="text-xl font-medium text-gray-300 hover:text-white hover:pl-2 transition-all">Ressources</a>
          <a href="#" className="text-xl font-medium text-gray-300 hover:text-white hover:pl-2 transition-all">Tarifs</a>
          <a href="#" className="text-xl font-medium text-gray-300 hover:text-white hover:pl-2 transition-all mt-4">Nous contacter</a>
          
          <div className="mt-8">
            <button className="w-full py-3 bg-[#FF5F6D] text-black font-semibold rounded-xl hover:bg-[#1db954] transition-colors flex justify-center items-center gap-2">
              Commencer maintenant <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
