"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section id="hero" style={{ position: "relative", height: "100svh", minHeight: 600, overflow: "hidden" }}>
      {/* Background image */}
      <Image
        src="/images/561a2ce904a37.jpeg"
        alt="Backstüble Schwaigern von außen"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center 60%" }}
      />

      {/* Gradient overlay – warm, not too dark */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(20,14,10,0.45) 0%, rgba(20,14,10,0.25) 40%, rgba(20,14,10,0.65) 100%)",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "0 24px",
        paddingTop: 72,
      }}>
        {/* Logo */}
        <div style={{
          opacity: show ? 1 : 0, transform: show ? "scale(1)" : "scale(0.85)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
          marginBottom: 28,
        }}>
          <div style={{
            width: 110, height: 110, borderRadius: "50%",
            background: "rgba(255,255,255,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
            margin: "0 auto",
          }}>
            <Image src="/images/Backstueble_logo.png" alt="Logo" width={88} height={88} style={{ objectFit: "contain" }} />
          </div>
        </div>

        {/* Overline */}
        <p style={{
          opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s 0.2s ease, transform 0.6s 0.2s ease",
          fontSize: 12, fontWeight: 600, letterSpacing: "0.3em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.75)",
          marginBottom: 14,
        }}>
          Seit 1983 · Schwaigern
        </p>

        {/* Title */}
        <h1 style={{
          opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s 0.3s ease, transform 0.7s 0.3s ease",
          fontFamily: "var(--font-heading)", fontWeight: 900,
          fontSize: "clamp(52px, 10vw, 96px)", lineHeight: 1,
          color: "white", marginBottom: 10,
          textShadow: "0 2px 24px rgba(0,0,0,0.3)",
        }}>
          Backstüble
        </h1>
        <p style={{
          opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s 0.45s ease, transform 0.6s 0.45s ease",
          fontSize: "clamp(13px, 2vw, 16px)", fontWeight: 400, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
          marginBottom: 22,
        }}>
          Bistro · Bar · Schwaigern
        </p>

        {/* Slogan */}
        <p style={{
          opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s 0.55s ease, transform 0.6s 0.55s ease",
          fontFamily: "var(--font-heading)", fontStyle: "italic",
          fontSize: "clamp(16px, 2.5vw, 22px)", color: "rgba(255,255,255,0.88)",
          marginBottom: 40, maxWidth: 480,
        }}>
          „Ihr Bistro mit Pfiff im Herzen von Schwaigern."
        </p>

        {/* Buttons */}
        <div style={{
          opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s 0.65s ease, transform 0.6s 0.65s ease",
          display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center",
        }}>
          <a href="tel:+4971384355" style={{
            background: "var(--red)", color: "white",
            borderRadius: 100, padding: "14px 32px",
            fontSize: 14, fontWeight: 600, letterSpacing: "0.05em",
            textDecoration: "none", transition: "all 0.2s",
            boxShadow: "0 4px 20px rgba(196,20,40,0.5)",
            display: "flex", alignItems: "center", gap: 8,
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(196,20,40,0.6)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(196,20,40,0.5)"; }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Reservieren
          </a>
          <button onClick={() => document.querySelector("#oeffnungszeiten")?.scrollIntoView({ behavior: "smooth" })} style={{
            background: "rgba(255,255,255,0.15)", color: "white",
            border: "1.5px solid rgba(255,255,255,0.5)",
            borderRadius: 100, padding: "14px 32px",
            fontSize: 14, fontWeight: 500, letterSpacing: "0.05em",
            cursor: "pointer", backdropFilter: "blur(8px)",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.25)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
          >
            Öffnungszeiten
          </button>
        </div>
      </div>

      {/* Scroll arrow */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        opacity: show ? 0.6 : 0, transition: "opacity 1s 1s ease",
      }}>
        <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "white" }}>Scroll</span>
        <div style={{
          width: 1, height: 40,
          background: "linear-gradient(to bottom, white, transparent)",
        }} />
      </div>
    </section>
  );
}
