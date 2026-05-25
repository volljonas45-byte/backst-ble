"use client";

export default function Kontakt() {
  return (
    <section id="kontakt" style={{ background: "var(--white)", padding: "100px 0 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <p style={{
            fontFamily: "var(--f-body)", fontWeight: 500, fontSize: 11,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "var(--red)", marginBottom: 16,
          }}>Kontakt & Anfahrt</p>
          <h2 style={{
            fontFamily: "var(--f-display)", fontWeight: 800,
            fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05,
            color: "var(--ink)", letterSpacing: "-0.02em",
          }}>
            Kommt einfach vorbei.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0 80px", alignItems: "start" }} className="kon-grid">

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div>
              <p style={{
                fontFamily: "var(--f-body)", fontSize: 11, fontWeight: 600,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "var(--faint)", marginBottom: 12,
              }}>Adresse</p>
              <p style={{ fontFamily: "var(--f-body)", fontSize: 16, color: "var(--ink2)", lineHeight: 1.6, fontWeight: 500 }}>
                Marktstr. 11<br />74193 Schwaigern
              </p>
            </div>

            <div>
              <p style={{
                fontFamily: "var(--f-body)", fontSize: 11, fontWeight: 600,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "var(--faint)", marginBottom: 12,
              }}>Telefon</p>
              <a href="tel:+4971384355" style={{
                fontFamily: "var(--f-display)", fontWeight: 700,
                fontSize: 22, color: "var(--red)", textDecoration: "none",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--red2)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--red)")}
              >
                +49 (0) 7138 4355
              </a>
              <p style={{ fontFamily: "var(--f-body)", fontSize: 13, color: "var(--faint)", marginTop: 4 }}>
                Nur während Öffnungszeiten
              </p>
            </div>

            <div>
              <p style={{
                fontFamily: "var(--f-body)", fontSize: 11, fontWeight: 600,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "var(--faint)", marginBottom: 12,
              }}>Öffnungszeiten</p>
              {[
                { d: "Mi – Do", t: "16:00 – 00:00" },
                { d: "Fr – Sa", t: "16:00 – 01:00" },
                { d: "Sonntag", t: "17:00 – 23:00" },
                { d: "Mo & Di", t: "Ruhetag" },
              ].map(r => (
                <div key={r.d} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "9px 0", borderBottom: "1px solid var(--line)",
                }}>
                  <span style={{ fontFamily: "var(--f-body)", fontSize: 14, color: "var(--muted)" }}>{r.d}</span>
                  <span style={{ fontFamily: "var(--f-body)", fontSize: 14, fontWeight: 500, color: r.t === "Ruhetag" ? "var(--faint)" : "var(--ink2)" }}>{r.t}</span>
                </div>
              ))}
            </div>

            <a href="https://www.facebook.com/backstueble" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--f-body)", fontSize: 14, fontWeight: 500,
              color: "var(--muted)", textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              facebook.com/backstueble
            </a>
          </div>

          {/* Map */}
          <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid var(--line)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.0!2d9.0621!3d49.1302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4798a00000000001%3A0x0!2sMarktstr.+11%2C+74193+Schwaigern!5e0!3m2!1sde!2sde!4v1716729600000"
              width="100%"
              height="480"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Backstüble Schwaigern"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .kon-grid { grid-template-columns: 1fr !important; gap: 48px 0 !important; }
        }
      `}</style>
    </section>
  );
}
