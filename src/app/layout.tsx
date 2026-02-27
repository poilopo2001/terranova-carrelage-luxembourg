import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Terranova Carrelage Luxembourg | Artisan Compagnon à Mersch",
    template: "%s | Terranova Carrelage Luxembourg",
  },
  description:
    "Artisan compagnon, François pose marbre et travertin au Grand-Duché depuis 2001. Protocoles adaptés à chaque pierre. Showroom à Mersch sur rendez-vous.",
  metadataBase: new URL("https://www.terranova-carrelage.lu"),
  openGraph: {
    type: "website",
    locale: "fr_LU",
    siteName: "Terranova Carrelage Luxembourg",
  },
  alternates: {
    canonical: "https://www.terranova-carrelage.lu",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="bg-background text-foreground font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
