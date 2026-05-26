import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Backstüble Schwaigern – Bistro & Bar seit 1983",
  description:
    "Das Backstüble in Schwaigern – Ihr gemütliches Bistro & Bar im Herzen von Schwaigern. Wochenkarte, Öffnungszeiten & mehr.",
  keywords: "Backstüble, Schwaigern, Bistro, Bar, Kneipe, Rico Wendler, 74193",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorantGaramond.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
