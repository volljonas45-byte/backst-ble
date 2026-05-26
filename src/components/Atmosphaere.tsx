import { img } from "@/lib/img";

export default function Atmosphaere() {
  return (
    <section style={{ background: "var(--ink)", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 580 }} className="atmo-grid">

        {/* Photo */}
        <div style={{ position: "relative", minHeight: 420 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img("/images/0822c4ea646c160cb4e0e100c1325a09.jpg")}
            alt="Oktoberfest im Backstüble"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, transparent 50%, var(--ink) 100%)",
          }} />
        </div>

        {/* Text */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "80px 72px 80px 64px",
        }} className="atmo-text">
          <p style={{
            fontFamily: "var(--f-body)", fontWeight: 500, fontSize: 11,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "var(--red)", marginBottom: 24,
          }}>Das Backstüble</p>

          <h2 style={{
            fontFamily: "var(--f-display)", fontWeight: 700,
            fontSize: "clamp(30px,4vw,50px)", lineHeight: 1.1,
            color: "white", letterSpacing: "-0.01em", marginBottom: 24,
          }}>
            Mehr als eine Bar.<br />
            Ein Stück Schwaigern.
          </h2>

          <p style={{
            fontFamily: "var(--f-body)", fontSize: 16, lineHeight: 1.75,
            color: "rgba(255,255,255,0.55)", marginBottom: 52, maxWidth: 380,
          }}>
            Seit über 40 Jahren ist das Backstüble der Ort, wo Schwaigern
            zusammenkommt – nach der Arbeit, am Wochenende, bei Events.
            Kein Schnickschnack, aber mit Pfiff.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 48 }}>
            {[
              { n: "1983", l: "Eröffnet" },
              { n: "40+", l: "Jahre" },
              { n: "Mi–So", l: "Geöffnet" },
            ].map(s => (
              <div key={s.l}>
                <p style={{
                  fontFamily: "var(--f-display)", fontWeight: 700,
                  fontSize: 32, color: "white", lineHeight: 1, marginBottom: 6,
                }}>
                  {s.n}
                </p>
                <p style={{
                  fontFamily: "var(--f-body)", fontSize: 12,
                  color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .atmo-grid { display: grid; grid-template-columns: 1fr 1fr; }
        @media (max-width: 860px) {
          .atmo-grid { grid-template-columns: 1fr !important; }
          .atmo-text { padding: 48px 24px !important; }
        }
      `}</style>
    </section>
  );
}
