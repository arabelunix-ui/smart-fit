"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative h-[calc(100vh-73px)] w-full flex items-center overflow-hidden border-b border-white/5 bg-black/40">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 z-0 [perspective:1000px] pointer-events-none">
        {/* Animated glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5F6D]/20 rounded-full blur-[120px] mix-blend-screen animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#FF9A9E]/10 rounded-full blur-[150px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite_alternate]" />
        
        {/* 3D Moving Grid */}
        <div 
          className="absolute inset-x-0 bottom-0 h-[70vh] origin-bottom"
          style={{
            transform: 'rotateX(65deg) scale(2.5)',
            backgroundImage: `
              linear-gradient(to right, rgba(35, 233, 116, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(35, 233, 116, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            animation: 'gridMove 15s linear infinite',
          }}
        />

        {/* Floating 3D Particles */}
        {mounted && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `translateZ(${Math.random() * 200}px)`,
                  animation: `float ${5 + Math.random() * 10}s linear infinite`,
                  boxShadow: '0 0 10px rgba(255,255,255,0.5)'
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }
        @keyframes float {
          0% { transform: translateY(0px) scale(1); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
      `}} />

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column */}
        <div className="space-y-8">
          <Link href="/conference-presse" className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#FF5F6D]/30 bg-[#FF5F6D]/10 text-sm text-[#FF5F6D] font-medium backdrop-blur-md hover:bg-[#FF5F6D]/20 transition-colors group">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5F6D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5F6D]"></span>
            </span>
            Conférence de Presse (30 Mai 2026) <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.2] text-white">
            BoudaMed, Agentic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FF9A9E]">Platform</span> for Real Software
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="flex items-center gap-3 px-8 py-3.5 bg-white hover:bg-gray-100 text-black font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              {/* Windows Icon */}
              <svg viewBox="0 0 88 88" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12.402l35.687-4.86.016 34.423-35.703.206v-29.77zM87.167 4.223v36.636l-44.407.255v-35.21l44.407-1.68zM35.71 47.984l-.015 33.673-35.695-4.805v-29.074l35.71.206zM87.167 47.984v35.753l-44.407-6.09v-29.914l44.407.25z"/>
              </svg>
              Download Free
            </button>
            <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-[#FF5F6D] font-medium transition-colors group">
              View all versions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start lg:items-end text-left lg:text-right space-y-6">
          <div className="flex items-center gap-3 bg-black/40 p-3 pr-6 rounded-full border border-white/10 backdrop-blur-md hover:bg-white/5 transition-all duration-300 cursor-pointer shadow-xl">
            <div className="w-10 h-10 bg-[#FF6154] rounded-full flex items-center justify-center relative">
              <span className="text-white text-xl font-bold">P</span>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] px-1.5 py-0.5 rounded-sm font-bold border border-black">★</div>
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Product Hunt</div>
              <div className="font-bold text-white tracking-wide">Product of the Day</div>
            </div>
          </div>
          
          <div className="relative">
            <p className="text-gray-300 text-lg max-w-[420px] leading-relaxed relative z-10 font-light">
              <strong className="text-white font-semibold">Think deeper, build better.</strong><br />
              BoudaMed is engineered to tackle complex, real-world software development challenges autonomously.
            </p>
            {/* Decorative line */}
            <div className="absolute -left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#FF5F6D] to-transparent hidden lg:block" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
