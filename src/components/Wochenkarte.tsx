"use client";
import { useState } from "react";
import { karte, allergenInfo, zusatzstoffe } from "@/lib/karte";

export default function Wochenkarte() {
  const [active, setActive] = useState(karte[0].id);
  const [showInfo, setShowInfo] = useState(false);

  const current = karte.find(c => c.id === active) ?? karte[0];

  return (
    <section id="wochenkarte" style={{ background: "var(--bg)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "100px 32px" }}>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          flexWrap: "wrap", gap: 32, marginBottom: 56,
        }}>
          <div>
            <p style={{
              fontFamily: "var(--f-body)", fontWeight: 500, fontSize: 11,
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: "var(--red)", marginBottom: 16,
            }}>Speisekarte</p>
            <h2 style={{
              fontFamily: "var(--f-display)", fontWeight: 700,
              fontSize: "clamp(34px,4.4vw,56px)", lineHeight: 1.05,
              color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 16,
              maxWidth: 720,
            }}>
              Frisch zubereitet.<br />
              <span style={{ color: "var(--red)", fontStyle: "italic" }}>Für euch.</span>
            </h2>
            <p style={{
              fontFamily: "var(--f-body)", fontSize: 16, color: "var(--muted)",
              lineHeight: 1.7, maxWidth: 520,
            }}>
              Vom Flammkuchen über handgemachte Burger bis zum Schnitzel – unsere
              Karte vereint Klassiker und Saisonales. Dazu Bier vom Fass.
            </p>
          </div>

          <a href="tel:+4971384355" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "var(--red)", color: "white",
            fontFamily: "var(--f-body)", fontWeight: 600, fontSize: 14,
            letterSpacing: "0.04em", textDecoration: "none",
            padding: "14px 28px", borderRadius: 4,
            transition: "background 0.2s, transform 0.2s",
            boxShadow: "0 6px 18px rgba(196,20,40,0.18)",
          }}
            onMouseEnter={e => {
              const t = e.currentTarget as HTMLElement;
              t.style.background = "var(--red2)";
              t.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              const t = e.currentTarget as HTMLElement;
              t.style.background = "var(--red)";
              t.style.transform = "translateY(0)";
            }}
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Tisch reservieren
          </a>
        </div>

        {/* Tabs */}
        <div
          className="karte-tabs"
          style={{
            display: "flex", gap: 4, overflowX: "auto",
            borderBottom: "1px solid var(--line)", marginBottom: 48,
            scrollbarWidth: "none",
          }}
        >
          {karte.map(cat => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "var(--f-body)", fontWeight: isActive ? 600 : 500,
                  fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: isActive ? "var(--ink)" : "var(--muted)",
                  padding: "16px 18px",
                  position: "relative", whiteSpace: "nowrap",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--ink2)";
                }}
                onMouseLeave={e => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                }}
              >
                {cat.label}
                <span style={{
                  position: "absolute", left: 18, right: 18, bottom: -1, height: 2,
                  background: "var(--red)",
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s ease",
                }} />
              </button>
            );
          })}
        </div>

        {/* Dish grid */}
        <div key={current.id} className="reveal" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "8px 64px",
        }}
        >
          <style>{`
            .karte-tabs::-webkit-scrollbar { display: none; }
            @media (max-width: 760px) {
              .dish-grid { grid-template-columns: 1fr !important; gap: 4px 0 !important; }
            }
          `}</style>

          {current.intro && (
            <p style={{
              gridColumn: "1 / -1",
              fontFamily: "var(--f-body)", fontSize: 14, fontStyle: "italic",
              color: "var(--muted)",
              padding: "0 0 24px",
              borderBottom: "1px solid var(--line)", marginBottom: 16,
            }}>
              {current.intro}
            </p>
          )}

          <div className="dish-grid" style={{
            gridColumn: "1 / -1",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0 64px",
          }}>
            {current.dishes.map((d, i) => (
              <article key={d.name + i} style={{
                padding: "22px 0",
                borderBottom: "1px solid var(--line)",
              }}>
                {/* name + price row */}
                <div style={{
                  display: "flex", alignItems: "baseline", gap: 14,
                  marginBottom: d.desc ? 6 : 0,
                }}>
                  <h3 style={{
                    fontFamily: "var(--f-display)", fontWeight: 600,
                    fontSize: 19, color: "var(--ink)", letterSpacing: "-0.005em",
                    flex: 1, lineHeight: 1.25,
                  }}>
                    {d.name}
                    {d.badges?.map(b => (
                      <span key={b} style={{
                        display: "inline-block", marginLeft: 10,
                        fontFamily: "var(--f-body)", fontSize: 10, fontWeight: 600,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        color: "var(--red)", border: "1px solid var(--red)",
                        padding: "2px 7px", borderRadius: 3,
                        verticalAlign: "middle",
                      }}>{b}</span>
                    ))}
                  </h3>

                  {/* dotted leader */}
                  <span style={{
                    flex: "0 1 auto", minWidth: 16,
                    borderBottom: "1px dotted var(--faint)",
                    transform: "translateY(-4px)",
                    height: 0,
                  }} aria-hidden />

                  {d.price && (
                    <span style={{
                      fontFamily: "var(--f-display)", fontWeight: 600,
                      fontSize: 17, color: "var(--ink2)",
                      whiteSpace: "nowrap",
                    }}>
                      {d.price}
                    </span>
                  )}
                </div>

                {d.desc && (
                  <p style={{
                    fontFamily: "var(--f-body)", fontSize: 14, lineHeight: 1.6,
                    color: "var(--muted)", marginTop: 4,
                  }}>
                    {d.desc}
                  </p>
                )}

                {d.variants && (
                  <div style={{ marginTop: 10 }}>
                    {d.variants.map(v => (
                      <div key={v.label} style={{
                        display: "flex", alignItems: "baseline", gap: 10,
                        padding: "6px 0",
                      }}>
                        <span style={{
                          fontFamily: "var(--f-body)", fontSize: 13.5,
                          color: "var(--ink2)", flex: 1,
                        }}>↳ {v.label}</span>
                        <span style={{
                          fontFamily: "var(--f-display)", fontSize: 14, fontWeight: 600,
                          color: "var(--ink2)",
                        }}>{v.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {d.allergens && (
                  <p style={{
                    fontFamily: "var(--f-body)", fontSize: 11,
                    color: "var(--faint)", marginTop: 8,
                    letterSpacing: "0.04em",
                  }}>
                    Allergene: {d.allergens}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Footer note + allergen toggle */}
        <div style={{
          marginTop: 56, paddingTop: 32, borderTop: "1px solid var(--line)",
          display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center",
          justifyContent: "space-between",
        }}>
          <p style={{
            fontFamily: "var(--f-body)", fontSize: 13, color: "var(--muted)",
            fontStyle: "italic", maxWidth: 540,
          }}>
            Bei allen Gerichten mit Schinken handelt es sich um Vorderschinken.
            Preisänderungen vorbehalten.
          </p>
          <button
            onClick={() => setShowInfo(s => !s)}
            style={{
              background: "none", border: "1px solid var(--line)",
              color: "var(--ink2)", cursor: "pointer",
              fontFamily: "var(--f-body)", fontSize: 12, fontWeight: 500,
              letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "10px 18px", borderRadius: 3,
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => {
              const t = e.currentTarget as HTMLElement;
              t.style.borderColor = "var(--ink)";
              t.style.color = "var(--ink)";
            }}
            onMouseLeave={e => {
              const t = e.currentTarget as HTMLElement;
              t.style.borderColor = "var(--line)";
              t.style.color = "var(--ink2)";
            }}
          >
            {showInfo ? "Allergene ausblenden" : "Allergene & Zusatzstoffe"}
          </button>
        </div>

        {showInfo && (
          <div className="reveal" style={{
            marginTop: 24, padding: "32px",
            background: "var(--cream)", borderRadius: 6,
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32,
          }}
          >
            <style>{`
              @media (max-width: 720px) {
                .reveal[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
              }
            `}</style>
            <div>
              <h4 style={{
                fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 16,
                color: "var(--ink)", marginBottom: 14,
              }}>Allergene</h4>
              <ul style={{
                listStyle: "none", display: "grid",
                gridTemplateColumns: "auto 1fr", columnGap: 14, rowGap: 6,
                fontFamily: "var(--f-body)", fontSize: 12.5, color: "var(--muted)",
              }}>
                {allergenInfo.map(a => (
                  <li key={a.code} style={{ display: "contents" }}>
                    <span style={{ fontWeight: 600, color: "var(--ink2)" }}>{a.code}</span>
                    <span>{a.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{
                fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 16,
                color: "var(--ink)", marginBottom: 14,
              }}>Zusatzstoffe</h4>
              <ul style={{
                listStyle: "none", display: "grid",
                gridTemplateColumns: "auto 1fr", columnGap: 14, rowGap: 6,
                fontFamily: "var(--f-body)", fontSize: 12.5, color: "var(--muted)",
              }}>
                {zusatzstoffe.map(z => (
                  <li key={z.code} style={{ display: "contents" }}>
                    <span style={{ fontWeight: 600, color: "var(--ink2)" }}>{z.code}</span>
                    <span>{z.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
