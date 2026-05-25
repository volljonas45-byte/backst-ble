const items = [
  { year: "1812", text: "Das Gebäude in der Marktstraße 11 wird erbaut." },
  { year: "1959", text: 'Familie Wendler erwirbt das Haus – Bäckerei und Gasthaus „Zum guten Trunk".' },
  { year: "1974", text: "Gerhard Wendler übernimmt die elterliche Bäckerei." },
  { year: "1982", text: "Großer Umbau: Das erste Thekenlokal im gesamten Landkreis entsteht." },
  { year: "1983", text: "Am 20. Mai öffnet das Backstüble. Schwaigern bekommt seinen Treffpunkt.", key: true },
  { year: "2003", text: "Komplettrenovierung in nur 8 Wochen – das neue Backstüble eröffnet." },
  { year: "2008", text: "Rico Wendler übernimmt am 1. August das Backstüble von seinem Vater.", key: true },
  { year: "2013", text: "30 Jahre Backstüble – Jubiläum mit Livebands, Cocktailbar und XXL-Smoker." },
];

export default function Geschichte() {
  return (
    <section id="geschichte" style={{ background: "var(--bg)", padding: "100px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px 120px" }} className="hist-grid">

          {/* Left – sticky heading */}
          <div>
            <p style={{
              fontFamily: "var(--f-body)", fontWeight: 500, fontSize: 11,
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: "var(--red)", marginBottom: 20,
            }}>Seit 1812</p>
            <h2 style={{
              fontFamily: "var(--f-display)", fontWeight: 800,
              fontSize: "clamp(32px,3.5vw,48px)", lineHeight: 1.05,
              color: "var(--ink)", letterSpacing: "-0.02em",
            }}>
              Unsere<br />Geschichte
            </h2>
          </div>

          {/* Right – timeline list */}
          <div>
            {items.map((it, i) => (
              <div key={it.year} style={{
                display: "grid", gridTemplateColumns: "80px 1fr",
                gap: "0 28px", paddingBottom: 32,
                borderBottom: i < items.length - 1 ? "1px solid var(--line)" : "none",
                marginBottom: 32,
              }}>
                <span style={{
                  fontFamily: "var(--f-display)", fontWeight: 700,
                  fontSize: 16, color: it.key ? "var(--red)" : "var(--faint)",
                  paddingTop: 2, letterSpacing: "0.02em",
                }}>
                  {it.year}
                </span>
                <p style={{
                  fontFamily: "var(--f-body)", fontSize: 16, lineHeight: 1.65,
                  color: it.key ? "var(--ink)" : "var(--muted)",
                  fontWeight: it.key ? 500 : 400,
                }}>
                  {it.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hist-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
