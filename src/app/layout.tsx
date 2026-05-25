import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
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
    <html lang="de" className={`${syne.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
