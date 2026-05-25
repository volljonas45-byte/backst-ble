import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Backstüble Schwaigern – Bistro & Bar seit 1983",
  description:
    "Das Backstüble in Schwaigern – Ihr gemütliches Bistro mit Pfiff. Wochenkarte, Öffnungszeiten, Galerie und mehr.",
  keywords: "Backstüble, Schwaigern, Bistro, Bar, Kneipe, Rico Wendler, 74193",
  openGraph: {
    title: "Backstüble Schwaigern",
    description: "Ihr Bistro mit Pfiff im Herzen von Schwaigern – seit 1983.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
