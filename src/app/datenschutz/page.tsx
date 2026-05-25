import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – Backstüble Schwaigern",
};

export default function Datenschutz() {
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
          Datenschutzerklärung
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
              1. Datenschutz auf einen Blick
            </p>
            <p style={{ color: "rgba(245,240,235,0.7)", lineHeight: 1.7 }}>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--red)" }}>
              2. Verantwortliche Stelle
            </p>
            <p style={{ color: "rgba(245,240,235,0.7)", lineHeight: 1.7 }}>
              Backstüble Schwaigern · Rico Wendler · Marktstr. 11 · 74193 Schwaigern<br />
              Telefon: +49 (0) 7138 4355 · E-Mail: info@backstüble-schwaigern.de
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--red)" }}>
              3. Datenerfassung
            </p>
            <p style={{ color: "rgba(245,240,235,0.7)", lineHeight: 1.7 }}>
              Diese Website erfasst automatisch technische Daten beim Besuch (Server-Logfiles).
              Diese Daten ermöglichen keine direkte Zuordnung zu Ihrer Person. Die Erhebung
              erfolgt zur Gewährleistung eines fehlerfreien Betriebs der Website.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--red)" }}>
              4. Google Maps
            </p>
            <p style={{ color: "rgba(245,240,235,0.7)", lineHeight: 1.7 }}>
              Diese Website nutzt Google Maps zur Darstellung interaktiver Karten. Anbieter:
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Bei
              Nutzung von Google Maps können Daten an Google-Server in den USA übertragen
              werden. Weitere Informationen finden Sie in der Datenschutzerklärung von Google.
            </p>
          </div>

          <p
            className="text-xs"
            style={{ color: "rgba(245,240,235,0.3)" }}
          >
            Stand: Mai 2026 · Eine ausführliche Datenschutzerklärung kann auf Anfrage
            bereitgestellt werden.
          </p>
        </div>
      </div>
    </main>
  );
}
