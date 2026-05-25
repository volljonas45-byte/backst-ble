"use client";

import { useState } from "react";
import Image from "next/image";

const all = [
  { src: "/images/c86a5445f643f01864357342fbf97069.jpg", alt: "Außenveranstaltung Backstüble", cat: "Events" },
  { src: "/images/0822c4ea646c160cb4e0e100c1325a09.jpg", alt: "Oktoberfest im Backstüble", cat: "Oktoberfest" },
  { src: "/images/ec45da97350e3034ebda4187ddb76da4.jpg", alt: "Fasching im Backstüble", cat: "Fasching" },
  { src: "/images/1ac07842e134e1c2be5cd369d8b9ebd6.jpg", alt: "An der Bar beim Fasching", cat: "Fasching" },
  { src: "/images/b4c2b2fd77efda6a58df865b0ef1dde0.jpg", alt: "Gerümpelturnier 2012", cat: "Gerümpelturnier" },
  { src: "/images/7920b9d63bac79825ef6d6248ed2d880.jpg", alt: "Team beim Gerümpelturnier", cat: "Gerümpelturnier" },
  { src: "/images/d4af7cfb38dd7c8fd605a221c8a0ce05.jpg", alt: "Fußballspiel Gerümpelturnier", cat: "Gerümpelturnier" },
  { src: "/images/13c2f3a5f1b8e8afe90b596c14bf9013.jpg", alt: "Event im Backstüble", cat: "Events" },
  { src: "/images/4feb646c6e3066db5228c49f066f2759.jpg", alt: "Feier im Backstüble", cat: "Events" },
  { src: "/images/77bc990dc6180c10e4a897de827fb820.jpg", alt: "Backstüble Event", cat: "Events" },
  { src: "/images/9e8ac5f77d71ae2bdb2faa54cb0eeeca.jpg", alt: "Backstüble Atmosphäre", cat: "Events" },
  { src: "/images/f3e277e909589cf6197fd020c9d61f15.jpg", alt: "Backstüble Galerie", cat: "Events" },
];

const cats = ["Alle", "Events", "Oktoberfest", "Fasching", "Gerümpelturnier"];

export default function Galerie() {
  const [active, setActive] = useState("Alle");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const shown = active === "Alle" ? all : all.filter(i => i.cat === active);

  return (
    <section id="galerie" style={{ background: "var(--bg)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--red)", marginBottom: 12 }}>
            Eindrücke & Erinnerungen
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(36px,5vw,54px)", color: "var(--dark)", lineHeight: 1.1, marginBottom: 32 }}>
            Galerie
          </h2>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)} style={{
                padding: "9px 20px", borderRadius: 100, border: "1.5px solid",
                fontSize: 13, fontWeight: 500, cursor: "pointer",
                transition: "all 0.2s",
                background: active === c ? "var(--red)" : "var(--white)",
                borderColor: active === c ? "var(--red)" : "var(--border)",
                color: active === c ? "white" : "var(--text-mid)",
                boxShadow: active === c ? "0 4px 14px rgba(196,20,40,0.25)" : "none",
              }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}>
          {shown.map((img, i) => (
            <div key={img.src + i}
              onClick={() => setLightbox(img.src)}
              style={{
                position: "relative", aspectRatio: "4/3",
                borderRadius: 18, overflow: "hidden", cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
              }}
            >
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 33vw" />
              <div style={{
                position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
                display: "flex", alignItems: "flex-end", padding: 16,
                opacity: 0, transition: "opacity 0.3s",
              }}
                className="gallery-overlay"
              >
                <span style={{ color: "white", fontSize: 13, fontWeight: 500 }}>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)",
          zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24, cursor: "zoom-out",
        }}>
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh", width: "100%", height: "100%" }}>
            <Image src={lightbox} alt="Galerie" fill style={{ objectFit: "contain" }} />
          </div>
          <button onClick={() => setLightbox(null)} style={{
            position: "fixed", top: 20, right: 20, background: "rgba(255,255,255,0.15)",
            border: "none", color: "white", borderRadius: "50%", width: 44, height: 44,
            cursor: "pointer", fontSize: 22, display: "flex", alignItems: "center", justifyContent: "center",
          }}>×</button>
        </div>
      )}

      <style>{`
        .gallery-overlay:hover, div:hover > .gallery-overlay { opacity: 1 !important; }
        div:hover > .gallery-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
