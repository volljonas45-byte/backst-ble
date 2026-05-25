export default function Oeffnungszeiten() {
  const hours = [
    { day: "Montag", time: null },
    { day: "Dienstag", time: null },
    { day: "Mittwoch", time: "16:00 – 00:00" },
    { day: "Donnerstag", time: "16:00 – 00:00" },
    { day: "Freitag", time: "16:00 – 01:00" },
    { day: "Samstag", time: "16:00 – 01:00" },
    { day: "Sonntag", time: "17:00 – 23:00" },
  ];

  const today = new Date().getDay(); // 0=So, 1=Mo, ...
  const dayMap = [6, 0, 1, 2, 3, 4, 5]; // JS Sun=0 → our index 6
  const todayIndex = dayMap[today];

  return (
    <section
      id="oeffnungszeiten"
      className="py-24 px-6"
      style={{ background: "var(--dark)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--red)" }}
          >
            Wann wir für euch da sind
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "white" }}
          >
            Öffnungszeiten
          </h2>
          <div className="w-16 h-px mx-auto" style={{ background: "var(--red)" }} />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {/* Closed days – combined card */}
          <div
            className="rounded-2xl p-6 flex flex-col gap-2"
            style={{ background: "var(--dark-card)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "rgba(245,240,235,0.35)" }}
            >
              Ruhetag
            </span>
            <span className="text-lg font-semibold text-white">Mo & Di</span>
            <span
              className="text-sm font-medium px-3 py-1 rounded-full self-start"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(245,240,235,0.45)",
              }}
            >
              Geschlossen
            </span>
          </div>

          {/* Open days */}
          {hours
            .filter((h) => h.time !== null)
            .map((h, i) => {
              const isToday = hours.findIndex((x) => x.day === h.day) === todayIndex;
              return (
                <div
                  key={h.day}
                  className="rounded-2xl p-6 flex flex-col gap-2 transition-all duration-300"
                  style={{
                    background: isToday
                      ? "rgba(196,20,40,0.15)"
                      : "var(--dark-card)",
                    border: isToday
                      ? "1px solid rgba(196,20,40,0.5)"
                      : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-semibold tracking-[0.2em] uppercase"
                      style={{
                        color: isToday ? "var(--red)" : "rgba(245,240,235,0.35)",
                      }}
                    >
                      {isToday ? "Heute geöffnet" : "Geöffnet"}
                    </span>
                    {isToday && (
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: "var(--red)" }}
                      />
                    )}
                  </div>
                  <span className="text-lg font-semibold text-white">{h.day}</span>
                  <span
                    className="text-xl font-bold"
                    style={{ color: isToday ? "white" : "var(--red)" }}
                  >
                    {h.time}
                  </span>
                </div>
              );
            })}
        </div>

        {/* Note */}
        <div
          className="rounded-2xl p-5 flex items-start gap-4"
          style={{
            background: "rgba(196,20,40,0.08)",
            border: "1px solid rgba(196,20,40,0.25)",
          }}
        >
          <svg
            className="w-5 h-5 mt-0.5 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            style={{ color: "var(--red)" }}
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <p
            className="text-sm"
            style={{ color: "rgba(245,240,235,0.7)", lineHeight: 1.6 }}
          >
            <strong style={{ color: "white" }}>Reservierungen</strong> bitte nur per
            Telefon während unserer Öffnungszeiten –{" "}
            <a
              href="tel:+4971384355"
              className="underline transition-colors"
              style={{ color: "var(--red)" }}
            >
              +49 (0) 7138 4355
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
