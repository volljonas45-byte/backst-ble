"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Start", href: "#hero" },
  { label: "Öffnungszeiten", href: "#oeffnungszeiten" },
  { label: "Wochenkarte", href: "#wochenkarte" },
  { label: "Galerie", href: "#galerie" },
  { label: "Geschichte", href: "#geschichte" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,20,40,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleLink("#hero")}
          className="flex items-center gap-3 group"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300"
            style={{ background: "var(--red)" }}
          >
            BS
          </div>
          <span
            className="text-white font-bold tracking-widest text-sm uppercase hidden sm:block"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.15em" }}
          >
            Backstüble
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-sm font-medium tracking-widest uppercase transition-all duration-200 relative group"
              style={{
                color: "rgba(245,240,235,0.75)",
                letterSpacing: "0.12em",
                fontFamily: "var(--font-body)",
              }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--red)" }}
              />
            </button>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+4971384355"
            className="hidden sm:flex items-center gap-2 text-sm font-medium transition-all duration-200 px-4 py-2 rounded-full"
            style={{
              background: "var(--red)",
              color: "white",
              fontFamily: "var(--font-body)",
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Anrufen
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menü"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "white",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "white",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "white",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          background: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(12px)",
        }}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-left text-sm font-medium tracking-widest uppercase py-2 border-b"
              style={{
                color: "rgba(245,240,235,0.8)",
                borderColor: "rgba(196,20,40,0.2)",
                letterSpacing: "0.12em",
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+4971384355"
            className="mt-2 text-center text-sm font-semibold py-3 rounded-full"
            style={{ background: "var(--red)", color: "white" }}
          >
            +49 (0) 7138 4355
          </a>
        </nav>
      </div>
    </header>
  );
}
