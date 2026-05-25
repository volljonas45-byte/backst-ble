"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #0A0A0A 0%, #1a0408 40%, #2d0510 70%, #0A0A0A 100%)",
        }}
      >
        {/* Placeholder for hero image – replace with your image later */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Red vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, transparent 30%, transparent 60%, rgba(10,10,10,0.9) 100%)",
          }}
        />
      </div>

      {/* Animated grain texture */}
      <div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* Logo placeholder */}
        <div className="flex justify-center mb-8">
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center border-2"
            style={{
              borderColor: "var(--red)",
              background: "rgba(196,20,40,0.15)",
              backdropFilter: "blur(4px)",
            }}
          >
            {/* Replace with <Image src="/images/logo.png" alt="Logo" width={80} height={80} /> */}
            <span
              className="text-4xl font-black tracking-tighter"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--red)",
              }}
            >
              BS
            </span>
          </div>
        </div>

        {/* Overline */}
        <p
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--red)" }}
        >
          Seit 1983 · Schwaigern
        </p>

        {/* Main title */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black mb-4 leading-none"
          style={{
            fontFamily: "var(--font-heading)",
            color: "white",
            textShadow: "0 2px 40px rgba(196,20,40,0.4)",
          }}
        >
          Backstüble
        </h1>
        <h2
          className="text-xl sm:text-2xl font-light tracking-widest uppercase mb-6"
          style={{
            color: "rgba(245,240,235,0.6)",
            letterSpacing: "0.25em",
            fontFamily: "var(--font-body)",
          }}
        >
          Schwaigern
        </h2>

        {/* Slogan */}
        <p
          className="text-lg sm:text-xl font-light mb-10 max-w-lg mx-auto"
          style={{
            color: "rgba(245,240,235,0.75)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
          }}
        >
          Ihr Bistro mit Pfiff im Herzen von Schwaigern.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+4971384355"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--red)",
              color: "white",
              letterSpacing: "0.1em",
              boxShadow: "0 0 30px rgba(196,20,40,0.4)",
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Reservieren
          </a>
          <button
            onClick={() => document.querySelector("#oeffnungszeiten")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(245,240,235,0.3)",
              color: "rgba(245,240,235,0.85)",
              letterSpacing: "0.1em",
              background: "rgba(245,240,235,0.05)",
              backdropFilter: "blur(4px)",
            }}
          >
            Öffnungszeiten
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: "rgba(245,240,235,0.4)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, rgba(196,20,40,0.8), transparent)",
          }}
        />
      </div>
    </section>
  );
}
