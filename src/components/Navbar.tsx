"use client";
import { useState, useEffect } from "react";
import { img } from "@/lib/img";

const links = [
  { label: "Karte", href: "#wochenkarte" },
  { label: "Galerie", href: "#galerie" },
  { label: "Geschichte", href: "#geschichte" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "background 0.4s, border-color 0.4s",
      background: solid ? "rgba(248,245,241,0.96)" : "transparent",
      borderBottom: solid ? "1px solid var(--line)" : "1px solid transparent",
      backdropFilter: solid ? "blur(12px)" : "none",
    }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto", padding: "0 32px",
        height: 68, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <button onClick={() => go("#hero")} style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <img
            src={img("/images/Backstueble_logo.png")}
            alt="Backstüble Logo"
            style={{ width: 36, height: 36, objectFit: "contain" }}
          />
          <span style={{
            fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 16,
            color: solid ? "var(--ink)" : "white",
            letterSpacing: "0.04em",
            transition: "color 0.3s",
          }}>
            Backstüble
          </span>
        </button>

        {/* Desktop links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="desk-nav">
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--f-body)", fontWeight: 500, fontSize: 13,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: solid ? "var(--muted)" : "rgba(255,255,255,0.8)",
              transition: "color 0.2s",
              padding: "2px 0",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = solid ? "var(--ink)" : "white")}
              onMouseLeave={e => (e.currentTarget.style.color = solid ? "var(--muted)" : "rgba(255,255,255,0.8)")}
            >
              {l.label}
            </button>
          ))}
          <a href="tel:+4971384355" style={{
            fontFamily: "var(--f-body)", fontWeight: 600, fontSize: 13,
            letterSpacing: "0.06em",
            color: "white", background: "var(--red)",
            borderRadius: 4, padding: "9px 18px",
            textDecoration: "none", transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--red2)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--red)")}
          >
            +49 7138 4355
          </a>
        </nav>

        {/* Burger */}
        <button onClick={() => setOpen(!open)} className="burger" style={{
          display: "none", background: "none", border: "none", cursor: "pointer", padding: 4,
        }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 1.5, marginBottom: i < 2 ? 5 : 0,
              background: solid ? "var(--ink)" : "white", borderRadius: 1,
              transition: "all 0.3s",
              transform: open ? (i === 0 ? "rotate(45deg) translate(4.5px,4.5px)" : i === 2 ? "rotate(-45deg) translate(4.5px,-4.5px)" : "scaleX(0)") : "none",
            }} />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        overflow: "hidden", maxHeight: open ? 300 : 0,
        background: "rgba(248,245,241,0.98)", transition: "max-height 0.35s ease",
        borderTop: open ? "1px solid var(--line)" : "none",
      }}>
        <div style={{ padding: "12px 24px 24px" }}>
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)} style={{
              display: "block", width: "100%", textAlign: "left",
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--f-body)", fontWeight: 500, fontSize: 15,
              color: "var(--muted)", padding: "13px 0",
              borderBottom: "1px solid var(--line)", letterSpacing: "0.05em",
            }}>
              {l.label}
            </button>
          ))}
          <a href="tel:+4971384355" style={{
            display: "block", marginTop: 16, textAlign: "center",
            background: "var(--red)", color: "white", borderRadius: 4,
            padding: "13px", fontFamily: "var(--f-body)",
            fontWeight: 600, fontSize: 15, textDecoration: "none",
          }}>
            +49 (0) 7138 4355
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .desk-nav { display: none !important; }
          .burger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
