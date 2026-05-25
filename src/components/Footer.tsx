"use client";
import { img } from "@/lib/img";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)" }}>
      {/* CTA band */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "56px 32px", textAlign: "center",
      }}>
        <p style={{
          fontFamily: "var(--f-body)", fontSize: 11, fontWeight: 500,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)", marginBottom: 16,
        }}>Wir freuen uns auf euch</p>
        <h3 style={{
          fontFamily: "var(--f-display)", fontWeight: 800,
          fontSize: "clamp(28px,4vw,48px)", color: "white",
          letterSpacing: "-0.02em", marginBottom: 32,
        }}>
          Kommt vorbei, wir sind für euch da.
        </h3>
        <a href="tel:+4971384355" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "var(--red)", color: "white",
          fontFamily: "var(--f-body)", fontWeight: 600, fontSize: 15,
          textDecoration: "none", padding: "14px 30px", borderRadius: 4,
          transition: "background 0.2s",
        }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--red2)")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--red)")}
        >
          +49 (0) 7138 4355
        </a>
      </div>

      {/* Bottom */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "48px 32px" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 24, marginBottom: 40,
        }}>
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src={img("/images/Backstueble_logo.png")}
              alt="Logo"
              style={{ width: 32, height: 32, objectFit: "contain" }}
            />
            <span style={{
              fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 16,
              color: "white", letterSpacing: "0.03em",
            }}>Backstüble</span>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {[
              ["#oeffnungszeiten", "Öffnungszeiten"],
              ["#wochenkarte", "Karte"],
              ["#galerie", "Galerie"],
              ["#geschichte", "Geschichte"],
              ["#kontakt", "Kontakt"],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{
                fontFamily: "var(--f-body)", fontSize: 13, fontWeight: 400,
                color: "rgba(255,255,255,0.4)", textDecoration: "none",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24,
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontFamily: "var(--f-body)", fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Backstüble Schwaigern · Rico Wendler · Marktstr. 11 · 74193 Schwaigern
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[["/impressum", "Impressum"], ["/datenschutz", "Datenschutz"]].map(([href, label]) => (
              <a key={href} href={href} style={{
                fontFamily: "var(--f-body)", fontSize: 12,
                color: "rgba(255,255,255,0.2)", textDecoration: "none",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
              >{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
