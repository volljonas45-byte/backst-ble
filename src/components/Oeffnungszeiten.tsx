"use client";

const rows = [
  { days: "Mo & Di", time: null },
  { days: "Mi – Do", time: "16:00 – 00:00" },
  { days: "Fr – Sa", time: "16:00 – 01:00" },
  { days: "Sonntag", time: "17:00 – 23:00" },
];

function todayRow() {
  const d = new Date().getDay(); // 0=So, 1=Mo, 2=Di, 3=Mi, 4=Do, 5=Fr, 6=Sa
  if (d === 0) return "Sonntag";
  if (d === 1 || d === 2) return "Mo & Di";
  if (d === 3 || d === 4) return "Mi – Do";
  if (d === 5 || d === 6) return "Fr – Sa";
  return "";
}

export default function Oeffnungszeiten() {
  const today = todayRow();

  return (
    <section id="oeffnungszeiten" style={{ background: "var(--white)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--red)", marginBottom: 12 }}>
            Wann wir für euch da sind
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(36px,5vw,54px)", color: "var(--dark)", lineHeight: 1.1 }}>
            Öffnungszeiten
          </h2>
        </div>

        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
          {rows.map(r => {
            const isToday = r.days === today;
            const isClosed = !r.time;
            return (
              <div key={r.days} style={{
                borderRadius: 20, padding: "28px 24px",
                background: isToday ? "var(--red)" : isClosed ? "var(--bg)" : "var(--white)",
                border: isToday ? "none" : `1.5px solid ${isClosed ? "var(--border-light)" : "var(--border)"}`,
                boxShadow: isToday ? "0 8px 32px rgba(196,20,40,0.25)" : "none",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { if (!isToday) (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                {isToday && (
                  <span style={{
                    display: "inline-block", fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)", marginBottom: 10,
                  }}>Heute geöffnet</span>
                )}
                <p style={{
                  fontSize: 17, fontWeight: 700,
                  color: isToday ? "white" : isClosed ? "var(--text-light)" : "var(--dark)",
                  marginBottom: 8,
                  fontFamily: "var(--font-heading)",
                }}>
                  {r.days}
                </p>
                {isClosed ? (
                  <p style={{ fontSize: 13, color: isToday ? "rgba(255,255,255,0.6)" : "var(--text-light)" }}>Ruhetag</p>
                ) : (
                  <p style={{
                    fontSize: 20, fontWeight: 700,
                    color: isToday ? "white" : "var(--red)",
                    letterSpacing: "-0.01em",
                  }}>
                    {r.time}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Reservation note */}
        <div style={{
          borderRadius: 16, padding: "20px 24px",
          background: "var(--red-soft)", border: "1.5px solid rgba(196,20,40,0.15)",
          display: "flex", alignItems: "flex-start", gap: 14,
        }}>
          <svg style={{ color: "var(--red)", flexShrink: 0, marginTop: 2 }} width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p style={{ fontSize: 14, color: "var(--text-mid)", lineHeight: 1.6 }}>
            <strong style={{ color: "var(--dark)" }}>Reservierungen</strong> bitte nur telefonisch während unserer Öffnungszeiten unter{" "}
            <a href="tel:+4971384355" style={{ color: "var(--red)", fontWeight: 600 }}>+49 (0) 7138 4355</a>
          </p>
        </div>
      </div>
    </section>
  );
}
