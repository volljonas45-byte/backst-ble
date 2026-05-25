"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", color: "rgba(255,255,255,0.6)" }}>
      {/* Top CTA bar */}
      <div style={{ background: "var(--red)", padding: "48px 24px", textAlign: "center" }}>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(24px,4vw,36px)", color: "white", marginBottom: 8 }}>
          Kommt einfach vorbei!
        </h3>
        <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24, fontSize: 15 }}>
          Wir freuen uns auf euch – Mi bis So ab 16 Uhr.
        </p>
        <a href="tel:+4971384355" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "white", color: "var(--red)",
          borderRadius: 100, padding: "13px 28px",
          fontSize: 15, fontWeight: 700, textDecoration: "none",
          transition: "transform 0.2s",
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        >
          +49 (0) 7138 4355
        </a>
      </div>

      {/* Footer content */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/images/Backstueble_logo.png" alt="Logo" width={36} height={36} style={{ objectFit: "contain" }} />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 17, color: "white" }}>Backstüble</p>
                <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Schwaigern</p>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 280, color: "rgba(255,255,255,0.45)" }}>
              Ihr Bistro mit Pfiff im Herzen von Schwaigern. Seit 1983 euer Lieblingsort zum Zusammenkommen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Seiten</p>
            {["#oeffnungszeiten:Öffnungszeiten", "#wochenkarte:Wochenkarte", "#galerie:Galerie", "#geschichte:Geschichte", "#kontakt:Kontakt"].map(l => {
              const [href, label] = l.split(":");
              return (
                <a key={href} href={href} style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                >{label}</a>
              );
            })}
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Rechtliches</p>
            {["/impressum:Impressum", "/datenschutz:Datenschutz"].map(l => {
              const [href, label] = l.split(":");
              return (
                <a key={href} href={href} style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                >{label}</a>
              );
            })}
            <a href="https://www.facebook.com/backstueble" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} Backstüble Schwaigern · Rico Wendler
          </p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>Marktstr. 11 · 74193 Schwaigern</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
