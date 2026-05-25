"use client";

import { useState } from "react";
import Image from "next/image";

// Placeholder images – replace with real images later
// Format: { src: "/images/galerie/xxx.jpg", alt: "...", category: "..." }
const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: null, // will be replaced with real image src
  alt: `Galerie Bild ${i + 1}`,
  category: i < 3 ? "30 Jahre" : i < 6 ? "Events" : i < 9 ? "Oktoberfest" : "Fasching",
}));

const categories = ["Alle", "30 Jahre", "Events", "Oktoberfest", "Fasching"];

export default function Galerie() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filtered =
    activeCategory === "Alle"
      ? placeholderImages
      : placeholderImages.filter((img) => img.category === activeCategory);

  return (
    <section
      id="galerie"
      className="py-24 px-6"
      style={{ background: "var(--dark)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--red)" }}
          >
            Eindrücke & Erinnerungen
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "white" }}
          >
            Galerie
          </h2>
          <div className="w-16 h-px mx-auto mb-8" style={{ background: "var(--red)" }} />

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium tracking-wider transition-all duration-300"
                style={{
                  background:
                    activeCategory === cat ? "var(--red)" : "var(--dark-card)",
                  color:
                    activeCategory === cat
                      ? "white"
                      : "rgba(245,240,235,0.6)",
                  border:
                    activeCategory === cat
                      ? "1px solid var(--red)"
                      : "1px solid rgba(255,255,255,0.08)",
                  letterSpacing: "0.05em",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img) => (
            <div
              key={img.id}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                background: "var(--dark-card)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* When you have real images, replace this with:
                  <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <svg
                  className="w-8 h-8 opacity-20"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "var(--red)" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span
                  className="text-xs font-medium opacity-30"
                  style={{ color: "var(--off-white)" }}
                >
                  {img.category}
                </span>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(196,20,40,0.8), transparent)",
                }}
              >
                <span className="text-white text-sm font-medium">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Upload hint */}
        <p
          className="text-center text-sm mt-8"
          style={{ color: "rgba(245,240,235,0.3)" }}
        >
          Bilder folgen · Fotos können jederzeit ergänzt werden
        </p>
      </div>
    </section>
  );
}
