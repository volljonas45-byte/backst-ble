import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Backstüble Schwaigern",
};

export default function Impressum() {
  return (
    <main
      className="min-h-screen py-32 px-6"
      style={{ background: "var(--black)" }}
    >
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: "var(--red)" }}
        >
          ← Zurück zur Startseite
        </Link>

        <h1
          className="text-4xl font-black text-white mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Impressum
        </h1>

        <div
          className="rounded-2xl p-8 flex flex-col gap-6"
          style={{
            background: "var(--dark-card)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--red)" }}>
              Angaben gemäß § 5 TMG
            </p>
            <p className="text-white font-semibold text-lg">Backstüble Schwaigern</p>
            <p style={{ color: "rgba(245,240,235,0.7)" }}>Rico Wendler</p>
            <p style={{ color: "rgba(245,240,235,0.7)" }}>Marktstr. 11</p>
            <p style={{ color: "rgba(245,240,235,0.7)" }}>74193 Schwaigern</p>
            <p style={{ color: "rgba(245,240,235,0.7)" }}>Deutschland</p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--red)" }}>
              Kontakt
            </p>
            <p style={{ color: "rgba(245,240,235,0.7)" }}>
              Telefon: +49 (0) 7138 4355
            </p>
            <p style={{ color: "rgba(245,240,235,0.7)" }}>
              Telefax: +49 (0) 7138 3371
            </p>
            <p style={{ color: "rgba(245,240,235,0.7)" }}>
              E-Mail: info@backstüble-schwaigern.de
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--red)" }}>
              Umsatzsteuer-ID
            </p>
            <p style={{ color: "rgba(245,240,235,0.7)" }}>
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
            </p>
            <p className="text-white font-semibold">DE244024173</p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--red)" }}>
              Aufsichtsbehörde
            </p>
            <p style={{ color: "rgba(245,240,235,0.7)" }}>
              Landratsamt Heilbronn Ordnungs- und Verkehrsamt
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
