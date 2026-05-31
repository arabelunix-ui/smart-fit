"use client";
import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "./get-dictionary";
import type { Locale } from "./config";
import { localeDirections } from "./config";

const LanguageContext = createContext<{
  dict: Dictionary;
  lang: Locale;
  dir: "ltr" | "rtl";
} | null>(null);

export function LanguageProvider({
  dict,
  lang,
  children,
}: {
  dict: Dictionary;
  lang: Locale;
  children: ReactNode;
}) {
  const dir = localeDirections[lang];
  return (
    <LanguageContext.Provider value={{ dict, lang, dir }}>
      <div dir={dir}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
