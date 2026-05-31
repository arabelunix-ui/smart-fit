import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/client";
import { getDictionary, type Dictionary } from "@/i18n/get-dictionary";
import { defaultLocale } from "@/i18n/config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartFit | L'application Fitness IA Ultime",
  description: "SmartFit est une plateforme révolutionnaire alimentée par l'Intelligence Artificielle. Conçue pour les sportifs exigeants et les coachs professionnels, elle propose des programmes adaptatifs, un suivi biométrique, et une base de plus de 500 exercices.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict: Dictionary = await getDictionary(defaultLocale);

  return (
    <LanguageProvider dict={dict} lang={defaultLocale}>
      <html
        className={`${manrope.variable} ${inter.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col font-sans bg-secondary text-neutral">{children}</body>
      </html>
    </LanguageProvider>
  );
}
