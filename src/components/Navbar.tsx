"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Öffnungszeiten", href: "#oeffnungszeiten" },
  { label: "Wochenkarte", href: "#wochenkarte" },
  { label: "Galerie", href: "#galerie" },
  { label: "Geschichte", href: "#geschichte" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #E5E0DA" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        height: 72, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <button onClick={() => go("#hero")} style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer" }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%", overflow: "hidden",
            background: "white", boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.12)" : "0 2px 12px rgba(0,0,0,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <Image src="/images/Backstueble_logo.png" alt="Backstüble Logo" width={36} height={36} style={{ objectFit: "contain" }} />
          </div>
          <span style={{
            fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 17,
            color: scrolled ? "var(--dark)" : "white",
            letterSpacing: "0.02em",
            textShadow: scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.5)",
            transition: "color 0.3s",
          }}>
            Backstüble
          </span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
              color: scrolled ? "var(--text-mid)" : "rgba(255,255,255,0.85)",
              textTransform: "uppercase",
              transition: "color 0.2s",
              textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.4)",
              padding: "4px 0",
              position: "relative",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = scrolled ? "var(--red)" : "white")}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? "var(--text-mid)" : "rgba(255,255,255,0.85)")}
            >
              {l.label}
            </button>
          ))}
          <a href="tel:+4971384355" style={{
            background: "var(--red)", color: "white",
            borderRadius: 100, padding: "9px 20px",
            fontSize: 13, fontWeight: 600, letterSpacing: "0.04em",
            textDecoration: "none", transition: "background 0.2s, transform 0.2s",
            boxShadow: "0 2px 12px rgba(196,20,40,0.35)",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--red-hover)"; e.currentTarget.style.transform = "scale(1.03)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--red)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            Anrufen
          </a>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="show-mobile"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 22, height: 2, borderRadius: 2,
                background: scrolled ? "var(--dark)" : "white",
                transformOrigin: "center",
                transition: "transform 0.3s, opacity 0.3s",
                transform: open && i === 0 ? "rotate(45deg) translate(5px,5px)" : open && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        maxHeight: open ? 360 : 0, overflow: "hidden",
        background: "rgba(255,255,255,0.98)", backdropFilter: "blur(16px)",
        transition: "max-height 0.35s ease",
        borderTop: open ? "1px solid var(--border)" : "none",
      }}>
        <div style={{ padding: "16px 24px 24px" }}>
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)} style={{
              display: "block", width: "100%", textAlign: "left",
              background: "none", border: "none", cursor: "pointer",
              padding: "14px 0", fontSize: 15, fontWeight: 500,
              color: "var(--text-mid)", borderBottom: "1px solid var(--border-light)",
              letterSpacing: "0.04em",
            }}>
              {l.label}
            </button>
          ))}
          <a href="tel:+4971384355" style={{
            display: "block", marginTop: 16, textAlign: "center",
            background: "var(--red)", color: "white", borderRadius: 100,
            padding: "13px", fontSize: 15, fontWeight: 600,
            textDecoration: "none",
          }}>
            +49 (0) 7138 4355
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
