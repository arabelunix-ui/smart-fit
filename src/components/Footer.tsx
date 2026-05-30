"use client";

import Link from "next/link";
import { Globe, ChevronDown, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const BG_WORDS = ["BOUDA", "MED", "COMPANY"];

export default function Footer() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger exit animation
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % BG_WORDS.length);
        setFade(true); // Trigger enter animation
      }, 700); // Wait 700ms for the elegant fade/blur to finish
    }, 3500); // Change word every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] pt-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          
          {/* Left Side */}
          <div className="flex flex-col gap-10 lg:w-1/3">
            <div>
              <h2 className="text-[32px] font-semibold text-white mb-2 tracking-tight">
                Think Deeper, Build Better
              </h2>
              <p className="text-[#666666] text-[15px]">
                © 2026 BRIGHT ZENITH PRIVATE LIMITED. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-gray-200 transition-colors">
                <Globe className="w-4 h-4" />
                English
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-5 text-[#666666]">
                <Link href="#" className="hover:text-white transition-colors">
                  {/* X / Twitter */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  {/* Discord */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  {/* Youtube */}
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  {/* LinkedIn */}
                  <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  {/* Reddit */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.753 0 .716-.43 1.334-1.036 1.605.023.238.035.48.035.726 0 2.805-3.15 5.083-7.03 5.083-3.882 0-7.03-2.278-7.03-5.083 0-.246.012-.488.035-.726-.606-.271-1.036-.889-1.036-1.605 0-.967.786-1.753 1.754-1.753.477 0 .899.182 1.207.491 1.194-.856 2.85-1.418 4.674-1.488l.899-4.192c.046-.216.257-.354.477-.308l3.111.656a1.245 1.245 0 0 1 1.192-.816zM8.88 15.344c-.752 0-1.36.609-1.36 1.36 0 .752.608 1.36 1.36 1.36.752 0 1.36-.608 1.36-1.36 0-.751-.608-1.36-1.36-1.36zm6.24 0c-.752 0-1.36.609-1.36 1.36 0 .752.608 1.36 1.36 1.36.752 0 1.36-.608 1.36-1.36 0-.751-.608-1.36-1.36-1.36z"/></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side / Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 lg:w-[60%] text-[15px]">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#888888] font-medium mb-3">Products</h3>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Pricing</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Desktop</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">JetBrains Plugin</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">CLI</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Mobile</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Cloud Agents</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Download</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#888888] font-medium mb-3">Resources</h3>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Docs</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Blog</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">FAQs</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Changelog</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#888888] font-medium mb-3">Terms</h3>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Privacy Policy</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#888888] font-medium mb-3">Connect</h3>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Feedback</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Contact Sales</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">Forum</Link>
              <Link href="#" className="text-[#cccccc] hover:text-white transition-colors">About Us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Big Background Text Loop */}
      <div className="relative w-full h-[18vw] min-h-[120px] overflow-hidden flex items-end justify-center pointer-events-none select-none">
        <h1 
          className={`text-[24vw] leading-[0.72] font-semibold text-center tracking-tighter transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            fade ? 'opacity-100 scale-100 blur-0 translate-y-0' : 'opacity-0 scale-95 blur-sm translate-y-4'
          }`}
          style={{
            color: "transparent",
            WebkitTextStroke: "2px rgba(255,95,109,0.3)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
          }}
        >
          {BG_WORDS[wordIndex]}
        </h1>
      </div>

      {/* Back to top button */}
      <div className="absolute bottom-8 right-8 z-20">
        <button 
          onClick={scrollToTop}
          className="text-[#666666] hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
        >
          Back to top <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
