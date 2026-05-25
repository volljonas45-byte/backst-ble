"use client";

import Image from "next/image";

export default function Wochenkarte() {
  return (
    <section id="wochenkarte" style={{ background: "var(--white)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--red)", marginBottom: 12 }}>
            Was es gibt
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(36px,5vw,54px)", color: "var(--dark)", lineHeight: 1.1 }}>
            Wochenkarte
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="karte-grid">
          {/* Image placeholder */}
          <div style={{
            borderRadius: 24, overflow: "hidden", aspectRatio: "4/5",
            position: "relative", background: "var(--bg)",
            border: "2px dashed var(--border)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {/* Replace this with <Image src="/images/wochenkarte.jpg" alt="Wochenkarte" fill style={{objectFit:"cover"}} /> */}
            <div style={{ textAlign: "center", padding: 32 }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "var(--red-soft)", display: "flex", alignItems: "center",
                justifyContent: "center", margin: "0 auto 16px",
              }}>
                <svg width="28" height="28" fill="none" stroke="var(--red)" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p style={{ fontWeight: 600, color: "var(--dark)", marginBottom: 6 }}>Wochenkarte</p>
              <p style={{ fontSize: 13, color: "var(--text-light)" }}>Bild folgt in Kürze</p>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(26px, 3vw, 38px)", color: "var(--dark)",
              lineHeight: 1.2, marginBottom: 16,
            }}>
              Frisch & wöchentlich<br />
              <span style={{ color: "var(--red)" }}>neu für euch</span>
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--text-mid)", marginBottom: 32 }}>
              Unsere Wochenkarte wechselt regelmäßig mit frischen, saisonalen Gerichten.
              Einfach vorbeikommen oder kurz anrufen – wir freuen uns auf euren Besuch!
            </p>

            {/* Feature grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
              {[
                { emoji: "🍺", label: "Frisch vom Fass" },
                { emoji: "🍽️", label: "Saisonale Küche" },
                { emoji: "🎵", label: "Live Musik" },
                { emoji: "🎉", label: "Events & Feiern" },
              ].map(f => (
                <div key={f.label} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "14px 16px", borderRadius: 14,
                  background: "var(--bg)", border: "1.5px solid var(--border-light)",
                }}>
                  <span style={{ fontSize: 22 }}>{f.emoji}</span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "var(--dark)" }}>{f.label}</span>
                </div>
              ))}
            </div>

            {/* Beer brands */}
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: 12 }}>
                Unsere Bierpartner
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Weihenstephan", "Bitburger", "König Pilsener"].map(b => (
                  <span key={b} style={{
                    padding: "7px 16px", borderRadius: 100,
                    background: "var(--bg)", border: "1.5px solid var(--border)",
                    fontSize: 13, fontWeight: 500, color: "var(--text-mid)",
                  }}>{b}</span>
                ))}
              </div>
            </div>

            <a href="tel:+4971384355" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--red)", color: "white",
              borderRadius: 100, padding: "14px 28px",
              fontSize: 14, fontWeight: 600, textDecoration: "none",
              transition: "all 0.2s",
              boxShadow: "0 4px 16px rgba(196,20,40,0.3)",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              Tisch reservieren
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .karte-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
