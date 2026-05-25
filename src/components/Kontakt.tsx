"use client";

export default function Kontakt() {
  return (
    <section id="kontakt" style={{ background: "var(--bg)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--red)", marginBottom: 12 }}>
            Komm vorbei
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(36px,5vw,54px)", color: "var(--dark)", lineHeight: 1.1 }}>
            Kontakt & Anfahrt
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 32, alignItems: "start" }} className="kontakt-grid">
          {/* Info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Address */}
            <div style={{
              background: "var(--white)", borderRadius: 20, padding: "24px",
              border: "1.5px solid var(--border)", display: "flex", gap: 16, alignItems: "flex-start",
            }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: "var(--red-soft)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" fill="var(--red)" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: 6 }}>Adresse</p>
                <p style={{ fontWeight: 700, color: "var(--dark)", marginBottom: 2 }}>Backstüble Bistro</p>
                <p style={{ color: "var(--text-mid)", fontSize: 14, lineHeight: 1.6 }}>Marktstr. 11<br />74193 Schwaigern</p>
              </div>
            </div>

            {/* Phone */}
            <a href="tel:+4971384355" style={{
              background: "var(--white)", borderRadius: 20, padding: "24px",
              border: "1.5px solid var(--border)", display: "flex", gap: 16, alignItems: "flex-start",
              textDecoration: "none", transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--red)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div style={{ width: 42, height: 42, borderRadius: 12, background: "var(--red-soft)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" fill="var(--red)" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: 6 }}>Telefon</p>
                <p style={{ fontWeight: 700, color: "var(--red)", fontSize: 18 }}>+49 (0) 7138 4355</p>
                <p style={{ color: "var(--text-light)", fontSize: 13 }}>Nur während Öffnungszeiten</p>
              </div>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/backstueble" target="_blank" rel="noopener noreferrer" style={{
              background: "var(--white)", borderRadius: 20, padding: "24px",
              border: "1.5px solid var(--border)", display: "flex", gap: 16, alignItems: "flex-start",
              textDecoration: "none", transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--red)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div style={{ width: 42, height: 42, borderRadius: 12, background: "var(--red-soft)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" fill="var(--red)" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: 6 }}>Social Media</p>
                <p style={{ fontWeight: 700, color: "var(--dark)" }}>Facebook</p>
                <p style={{ color: "var(--text-light)", fontSize: 13 }}>facebook.com/backstueble</p>
              </div>
            </a>

            {/* Hours summary */}
            <div style={{ background: "var(--red)", borderRadius: 20, padding: "24px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>Öffnungszeiten</p>
              {[
                { d: "Mo & Di", t: "Ruhetag", c: false },
                { d: "Mi – Do", t: "16:00 – 00:00", c: true },
                { d: "Fr – Sa", t: "16:00 – 01:00", c: true },
                { d: "Sonntag", t: "17:00 – 23:00", c: true },
              ].map(r => (
                <div key={r.d} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{r.d}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: r.c ? "white" : "rgba(255,255,255,0.4)" }}>{r.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div style={{ borderRadius: 24, overflow: "hidden", border: "1.5px solid var(--border)", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.45!2d9.0621!3d49.1302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4798a4b5b5b5b5b5%3A0x0!2sMarktstr.+11%2C+74193+Schwaigern!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="520"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Backstüble Schwaigern Karte"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .kontakt-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
