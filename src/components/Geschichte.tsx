const items = [
  { year: "1812", title: "Das Haus entsteht", text: "Das Gebäude in der Marktstraße 11 wird erbaut – der Grundstein für alles, was folgen sollte." },
  { year: "1959", title: "Familie Wendler", text: 'Die Großeltern erwerben das Haus und führen Bäckerei und Gasthaus „Zum guten Trunk".' },
  { year: "1982", title: "Erstes Thekenlokal", text: "Unter Regie von Gerhard Wendler entsteht das erste Thekenlokal im gesamten Landkreis." },
  { year: "1983", title: "Eröffnung des Backstüble", text: "Am 20. Mai öffnet das Backstüble seine Türen – Schwaigern bekommt seinen neuen Lieblingsort.", highlight: true },
  { year: "2003", title: "Das neue Backstüble", text: "Der größte Umbau der Geschichte: In nur 8 Wochen entsteht das komplett neue Backstüble." },
  { year: "2008", title: "Rico Wendler übernimmt", text: "Zum 1. August tritt Sohn Rico Wendler in die Fußstapfen seines Vaters.", highlight: true },
  { year: "2013", title: "30 Jahre Jubiläum", text: "Vom 2.–4. August: Livebands, Cocktailbar, XXL-Smoker, Tombola – Schwaigern feiert!" },
];

export default function Geschichte() {
  return (
    <section id="geschichte" style={{ background: "var(--white)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--red)", marginBottom: 12 }}>
            Über 40 Jahre Schwaigerner Geschichte
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(36px,5vw,54px)", color: "var(--dark)", lineHeight: 1.1 }}>
            Unsere Geschichte
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 55, top: 0, bottom: 0, width: 2,
            background: "linear-gradient(to bottom, transparent, var(--border) 8%, var(--border) 92%, transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {items.map((item, i) => (
              <div key={item.year} style={{
                display: "flex", gap: 0, alignItems: "flex-start",
                paddingBottom: i === items.length - 1 ? 0 : 40,
              }}>
                {/* Year label */}
                <div style={{ width: 110, flexShrink: 0, paddingTop: 20 }}>
                  <span style={{
                    fontSize: 13, fontWeight: 700, color: item.highlight ? "var(--red)" : "var(--text-light)",
                    letterSpacing: "0.04em",
                  }}>{item.year}</span>
                </div>

                {/* Dot */}
                <div style={{ position: "relative", flexShrink: 0, width: 0 }}>
                  <div style={{
                    position: "absolute", left: -5, top: 22,
                    width: 12, height: 12, borderRadius: "50%",
                    background: item.highlight ? "var(--red)" : "white",
                    border: `2px solid ${item.highlight ? "var(--red)" : "var(--border)"}`,
                    boxShadow: item.highlight ? "0 0 0 4px rgba(196,20,40,0.12)" : "none",
                  }} />
                </div>

                {/* Content */}
                <div style={{
                  flex: 1, marginLeft: 32,
                  borderRadius: 18, padding: "18px 22px",
                  background: item.highlight ? "var(--red-soft)" : "var(--bg)",
                  border: `1.5px solid ${item.highlight ? "rgba(196,20,40,0.2)" : "var(--border-light)"}`,
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18,
                    color: item.highlight ? "var(--red)" : "var(--dark)",
                    marginBottom: 6,
                  }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-mid)" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          section#geschichte [style*="width: 110"] { width: 70px !important; }
        }
      `}</style>
    </section>
  );
}
