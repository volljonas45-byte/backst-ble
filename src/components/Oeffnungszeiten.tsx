const schedule = [
  { day: "Montag",     time: null },
  { day: "Dienstag",   time: null },
  { day: "Mittwoch",   time: "16:00 – 00:00" },
  { day: "Donnerstag", time: "16:00 – 00:00" },
  { day: "Freitag",    time: "16:00 – 01:00" },
  { day: "Samstag",    time: "16:00 – 01:00" },
  { day: "Sonntag",    time: "17:00 – 23:00" },
];

function getToday() {
  // 0=So → index 6, 1=Mo → 0, ...
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
}

export default function Oeffnungszeiten() {
  const todayIdx = getToday();

  return (
    <section id="oeffnungszeiten" style={{ background: "var(--white)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "100px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px 120px", alignItems: "start" }} className="hours-grid">

          {/* Left – heading */}
          <div>
            <p style={{
              fontFamily: "var(--f-body)", fontWeight: 500, fontSize: 11,
              letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--red)",
              marginBottom: 20,
            }}>Öffnungszeiten</p>
            <h2 style={{
              fontFamily: "var(--f-display)", fontWeight: 700,
              fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.05,
              color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 28,
            }}>
              Wann ihr uns<br />findet
            </h2>
            <p style={{ fontFamily: "var(--f-body)", fontSize: 16, color: "var(--muted)", lineHeight: 1.7, maxWidth: 340, marginBottom: 36 }}>
              Reservierungen bitte telefonisch während unserer Öffnungszeiten.
            </p>
            <a href="tel:+4971384355" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "var(--red)", fontFamily: "var(--f-body)",
              fontWeight: 600, fontSize: 18, textDecoration: "none",
            }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +49 (0) 7138 4355
            </a>
          </div>

          {/* Right – clean list */}
          <div style={{ paddingTop: 8 }}>
            {schedule.map((row, i) => {
              const isToday = i === todayIdx;
              return (
                <div key={row.day} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "16px 0",
                  borderBottom: i < schedule.length - 1 ? "1px solid var(--line)" : "none",
                  background: isToday ? "transparent" : "transparent",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {isToday && (
                      <span style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: "var(--red)", display: "inline-block", flexShrink: 0,
                      }} />
                    )}
                    <span style={{
                      fontFamily: "var(--f-body)", fontSize: 15, fontWeight: isToday ? 600 : 400,
                      color: isToday ? "var(--ink)" : "var(--muted)",
                      paddingLeft: isToday ? 0 : 16,
                    }}>
                      {row.day}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "var(--f-display)", fontSize: 15, fontWeight: 600,
                    color: isToday ? "var(--red)" : row.time ? "var(--ink2)" : "var(--faint)",
                    letterSpacing: "0.01em",
                  }}>
                    {row.time ?? "Ruhetag"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hours-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
