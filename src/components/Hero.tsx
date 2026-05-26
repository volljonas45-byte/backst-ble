"use client";
import { useEffect, useState } from "react";
import { img } from "@/lib/img";

export default function Hero() {
  const [up, setUp] = useState(false);
  useEffect(() => { const t = setTimeout(() => setUp(true), 60); return () => clearTimeout(t); }, []);

  return (
    <section id="hero" style={{
      position: "relative", height: "100svh", minHeight: 620,
      overflow: "hidden", display: "flex", alignItems: "flex-end",
    }}>
      {/* Photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img("/images/561a2ce904a37.jpeg")}
        alt="Backstüble Schwaigern"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 65%",
        }}
      />

      {/* Overlay – bottom heavy */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(24,20,15,0.88) 0%, rgba(24,20,15,0.3) 55%, rgba(24,20,15,0.1) 100%)",
      }} />

      {/* Content anchored bottom-left */}
      <div style={{
        position: "relative", zIndex: 2,
        padding: "0 48px 64px",
        maxWidth: 1240, width: "100%", margin: "0 auto",
        opacity: up ? 1 : 0, transform: up ? "none" : "translateY(20px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}>
        <p style={{
          fontFamily: "var(--f-body)", fontWeight: 500, fontSize: 12,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.55)", marginBottom: 16,
        }}>
          Schwaigern — seit 1983
        </p>

        <h1 style={{
          fontFamily: "var(--f-display)", fontWeight: 700, fontStyle: "italic",
          fontSize: "clamp(56px, 10vw, 120px)",
          lineHeight: 0.95, letterSpacing: "-0.01em",
          color: "white", marginBottom: 28,
        }}>
          Back&shy;stüble
        </h1>

        <p style={{
          fontFamily: "var(--f-body)", fontWeight: 300, fontSize: "clamp(15px,1.8vw,19px)",
          color: "rgba(255,255,255,0.7)", marginBottom: 40,
          maxWidth: 420, lineHeight: 1.6,
        }}>
          Ihr Bistro mit Pfiff im Herzen von Schwaigern.
          Kommen Sie einfach rein.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          <a href="tel:+4971384355" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--red)", color: "white",
            fontFamily: "var(--f-body)", fontWeight: 600, fontSize: 14,
            letterSpacing: "0.05em", textDecoration: "none",
            padding: "13px 26px", borderRadius: 4,
            transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--red2)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--red)")}
          >
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Reservieren
          </a>
          <button onClick={() => document.querySelector("#oeffnungszeiten")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "none", border: "1px solid rgba(255,255,255,0.4)",
              color: "rgba(255,255,255,0.85)",
              fontFamily: "var(--f-body)", fontWeight: 500, fontSize: 14,
              padding: "13px 26px", borderRadius: 4, cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
          >
            Öffnungszeiten
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", right: 36, bottom: 40, zIndex: 2,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        opacity: up ? 0.5 : 0, transition: "opacity 1.2s 0.8s",
      }}>
        <span style={{ fontFamily: "var(--f-body)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "white", writingMode: "vertical-rl" }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(white, transparent)" }} />
      </div>

      <style>{`
        @media (max-width: 600px) {
          section#hero > div[style*="padding"] { padding: 0 20px 48px !important; }
        }
      `}</style>
    </section>
  );
}
