"use client";
import { useState } from "react";
import { img } from "@/lib/img";

const photos = [
  { src: "/images/c86a5445f643f01864357342fbf97069.jpg",  alt: "Sommernacht vor dem Backstüble",   cat: "Events" },
  { src: "/images/0822c4ea646c160cb4e0e100c1325a09.jpg",  alt: "Oktoberfest im Backstüble",         cat: "Oktoberfest" },
  { src: "/images/ec45da97350e3034ebda4187ddb76da4.jpg",  alt: "Fasching an der Bar",               cat: "Fasching" },
  { src: "/images/1ac07842e134e1c2be5cd369d8b9ebd6.jpg",  alt: "Zapfanlage beim Fasching",          cat: "Fasching" },
  { src: "/images/b4c2b2fd77efda6a58df865b0ef1dde0.jpg",  alt: "Team Gerümpelturnier 2012",         cat: "Gerümpelturnier" },
  { src: "/images/7920b9d63bac79825ef6d6248ed2d880.jpg",  alt: "Backstüble beim Gerümpelturnier",   cat: "Gerümpelturnier" },
  { src: "/images/d4af7cfb38dd7c8fd605a221c8a0ce05.jpg",  alt: "Spiel beim Gerümpelturnier",        cat: "Gerümpelturnier" },
  { src: "/images/13c2f3a5f1b8e8afe90b596c14bf9013.jpg",  alt: "Backstüble Event",                  cat: "Events" },
  { src: "/images/4feb646c6e3066db5228c49f066f2759.jpg",  alt: "Gäste im Backstüble",               cat: "Events" },
  { src: "/images/77bc990dc6180c10e4a897de827fb820.jpg",  alt: "Backstüble Atmosphäre",             cat: "Events" },
  { src: "/images/9e8ac5f77d71ae2bdb2faa54cb0eeeca.jpg",  alt: "Backstüble Feier",                  cat: "Events" },
  { src: "/images/f3e277e909589cf6197fd020c9d61f15.jpg",  alt: "Backstüble Galerie",                cat: "Events" },
];

const cats = ["Alle", "Events", "Oktoberfest", "Fasching", "Gerümpelturnier"];

export default function Galerie() {
  const [active, setActive] = useState("Alle");
  const [lb, setLb] = useState<string | null>(null);

  const shown = active === "Alle" ? photos : photos.filter(p => p.cat === active);

  return (
    <section id="galerie" style={{ background: "var(--white)", padding: "100px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>

        {/* Header row */}
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          flexWrap: "wrap", gap: 24, marginBottom: 52,
        }}>
          <div>
            <p style={{
              fontFamily: "var(--f-body)", fontWeight: 500, fontSize: 11,
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: "var(--red)", marginBottom: 12,
            }}>Einblicke</p>
            <h2 style={{
              fontFamily: "var(--f-display)", fontWeight: 700,
              fontSize: "clamp(32px,4vw,50px)", lineHeight: 1.05,
              color: "var(--ink)", letterSpacing: "-0.01em",
            }}>Galerie</h2>
          </div>

          {/* Filter */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)} style={{
                background: "none", border: "1px solid",
                borderColor: active === c ? "var(--red)" : "var(--line)",
                color: active === c ? "var(--red)" : "var(--muted)",
                fontFamily: "var(--f-body)", fontSize: 12, fontWeight: 500,
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "7px 16px", borderRadius: 3, cursor: "pointer",
                transition: "all 0.18s",
              }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 10,
        }} className="gal-grid">
          {shown.map((p, i) => {
            const isFeature = i === 0 && active === "Alle";
            return (
              <div
                key={p.src}
                onClick={() => setLb(p.src)}
                style={{
                  position: "relative",
                  gridColumn: isFeature ? "span 2" : undefined,
                  gridRow: isFeature ? "span 2" : undefined,
                  aspectRatio: isFeature ? "auto" : "1",
                  cursor: "zoom-in", overflow: "hidden", borderRadius: 4,
                  background: "var(--cream)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(p.src)}
                  alt={p.alt}
                  loading="lazy"
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", display: "block",
                    transition: "transform 0.45s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lb && (
        <div onClick={() => setLb(null)} style={{
          position: "fixed", inset: 0, background: "rgba(24,20,15,0.94)",
          zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24, cursor: "zoom-out",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img(lb)}
            alt="Vergrößert"
            style={{ maxWidth: "92vw", maxHeight: "92vh", objectFit: "contain", borderRadius: 4 }}
          />
          <button onClick={() => setLb(null)} style={{
            position: "fixed", top: 20, right: 20,
            background: "rgba(255,255,255,0.1)", border: "none", color: "white",
            width: 40, height: 40, borderRadius: "50%",
            fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}>×</button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .gal-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gal-grid { grid-template-columns: 1fr 1fr !important; gap: 6px !important; }
        }
      `}</style>
    </section>
  );
}
