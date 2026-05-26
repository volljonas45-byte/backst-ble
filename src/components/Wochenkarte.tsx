"use client";

export default function Wochenkarte() {
  return (
    <section id="wochenkarte" style={{ background: "var(--bg)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "100px 32px" }}>

        {/* Top label */}
        <p style={{
          fontFamily: "var(--f-body)", fontWeight: 500, fontSize: 11,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "var(--red)", marginBottom: 64,
        }}>Wochenkarte</p>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "80px", alignItems: "center" }} className="karte-grid">

          {/* Placeholder card */}
          <div style={{
            aspectRatio: "3/4", borderRadius: 8, overflow: "hidden",
            background: "var(--cream)", border: "1px solid var(--line)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: 12,
          }}>
            {/* ← Hier später euer Foto der Wochenkarte einfügen */}
            <svg width="32" height="32" fill="none" stroke="var(--faint)" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p style={{ fontFamily: "var(--f-body)", fontSize: 13, color: "var(--faint)" }}>Karte folgt</p>
          </div>

          {/* Text */}
          <div>
            <h2 style={{
              fontFamily: "var(--f-display)", fontWeight: 700,
              fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05,
              color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 24,
            }}>
              Frisch.<br />Wöchentlich.<br />
              <span style={{ color: "var(--red)" }}>Für euch.</span>
            </h2>
            <p style={{
              fontFamily: "var(--f-body)", fontSize: 16, lineHeight: 1.75,
              color: "var(--muted)", marginBottom: 40, maxWidth: 360,
            }}>
              Unsere Karte wechselt jede Woche mit saisonalen Gerichten.
              Dazu Bier vom Fass – Weihenstephan, Bitburger und König Pilsener.
            </p>

            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 32, marginBottom: 40 }}>
              {[
                { label: "Weihenstephan", desc: "Weizenbier" },
                { label: "Bitburger", desc: "Pils" },
                { label: "König Pilsener", desc: "Pils" },
              ].map((b, i) => (
                <div key={b.label} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: i < 2 ? "1px solid var(--line)" : "none",
                }}>
                  <span style={{ fontFamily: "var(--f-body)", fontSize: 15, fontWeight: 500, color: "var(--ink2)" }}>{b.label}</span>
                  <span style={{ fontFamily: "var(--f-body)", fontSize: 14, color: "var(--muted)" }}>{b.desc}</span>
                </div>
              ))}
            </div>

            <a href="tel:+4971384355" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--red)", color: "white",
              fontFamily: "var(--f-body)", fontWeight: 600, fontSize: 14,
              letterSpacing: "0.04em", textDecoration: "none",
              padding: "13px 26px", borderRadius: 4, transition: "background 0.2s",
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "var(--red2)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "var(--red)")}
            >
              Tisch reservieren
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .karte-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
