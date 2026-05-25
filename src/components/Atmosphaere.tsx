import Image from "next/image";

export default function Atmosphaere() {
  return (
    <section style={{ background: "var(--bg)", padding: "0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 520 }} className="atmo-grid">
        {/* Image – Oktoberfest inside */}
        <div style={{ position: "relative", minHeight: 420 }}>
          <Image
            src="/images/0822c4ea646c160cb4e0e100c1325a09.jpg"
            alt="Stimmung im Backstüble"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, transparent 60%, var(--bg) 100%)",
          }} />
        </div>

        {/* Text */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "64px 64px 64px 48px",
        }} className="atmo-text">
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>
            Das Backstüble
          </p>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontWeight: 800,
            fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15,
            color: "var(--dark)", marginBottom: 20,
          }}>
            Mehr als eine Bar –<br />
            <em style={{ fontStyle: "italic", color: "var(--red)" }}>ein Treffpunkt</em>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--text-mid)", marginBottom: 32, maxWidth: 400 }}>
            Seit über 40 Jahren ist das Backstüble der Ort, wo sich Schwaigern trifft –
            ob nach der Arbeit, am Wochenende oder bei besonderen Events. Gemütlich,
            lebendig, mit Pfiff.
          </p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { num: "40+", label: "Jahre Tradition" },
              { num: "1983", label: "Eröffnet" },
              { num: "Mi–So", label: "Geöffnet" },
            ].map(s => (
              <div key={s.label}>
                <p style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: 32, color: "var(--red)", lineHeight: 1 }}>{s.num}</p>
                <p style={{ fontSize: 12, color: "var(--text-light)", marginTop: 4, letterSpacing: "0.05em" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .atmo-grid { grid-template-columns: 1fr !important; }
          .atmo-text { padding: 40px 24px !important; }
        }
      `}</style>
    </section>
  );
}
