"use client";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "./config";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function LanguageSelector({ currentLang }: { currentLang: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchTo = (locale: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    if (locales.includes(segments[0] as Locale)) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    router.push(`/${segments.join("/")}`);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-[#A0AAB2] hover:text-white hover:border-white/20 transition-all"
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{localeNames[currentLang]}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 bg-[#152026] border border-white/10 rounded-xl shadow-2xl py-2 min-w-[160px] z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchTo(locale)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/5 ${
                locale === currentLang
                  ? "text-[#00FF88] font-semibold"
                  : "text-[#A0AAB2]"
              }`}
            >
              {localeNames[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
