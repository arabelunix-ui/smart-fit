import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { LanguageProvider } from "@/i18n/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Manrope, Inter } from "next/font/google";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <LanguageProvider dict={dict} lang={locale}>
      <div className={`${manrope.variable} ${inter.variable} min-h-screen flex flex-col font-sans bg-[#0D1317] text-white selection:bg-[#00FF88]/30 selection:text-white`}>
        <Navbar dict={dict} />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer dict={dict} />
      </div>
    </LanguageProvider>
  );
}
