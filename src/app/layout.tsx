import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Backstüble Schwaigern – Ihr Bistro mit Pfiff",
  description:
    "Das Backstüble Schwaigern – Ihr gemütliches Bistro & Bar im Herzen von Schwaigern. Wochenkarte, Öffnungszeiten & mehr.",
  keywords: "Backstüble, Schwaigern, Bistro, Bar, Kneipe, Rico Wendler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${inter.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
