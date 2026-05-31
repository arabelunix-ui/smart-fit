export const locales = ["fr", "ar", "en", "de", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  ar: "العربية",
  en: "English",
  de: "Deutsch",
  es: "Español",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  ar: "rtl",
  en: "ltr",
  de: "ltr",
  es: "ltr",
};
