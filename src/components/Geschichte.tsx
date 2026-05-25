const timeline = [
  {
    year: "1812",
    title: "Das Haus",
    text: "Das Gebäude in der Marktstraße 11 wird erbaut – der Grundstein für alles, was folgen sollte.",
  },
  {
    year: "1959",
    title: "Erwerb durch die Familie",
    text: 'Die Großeltern des heutigen Besitzers erwerben das Haus und führen Bäckerei und Gasthaus „Zum guten Trunk“.',
  },
  {
    year: "1962",
    title: "Umbau & Erweiterung",
    text: "Umbau, Teilabriss und Vergrößerung der Backstube. Das Wirtshaus bleibt im alten Stil erhalten unter Wirt Urgrossvater Steffan Fültz.",
  },
  {
    year: "1970",
    title: "Pause der Gastronomie",
    text: "Aus Altersgründen setzt der Urgrossvater der Wirtshaus-Tradition ein vorläufiges Ende.",
  },
  {
    year: "1974",
    title: "Neue Generation",
    text: "Gerhard Wendler, der Vater des heutigen Besitzers, übernimmt die elterliche Bäckerei.",
  },
  {
    year: "1982",
    title: "Erstes Thekenlokal",
    text: "Durch einen großen Umbau unter Regie von Gerhard Wendler entsteht das erste Thekenlokal im gesamten Landkreis.",
  },
  {
    year: "1983",
    title: "Die Eröffnung",
    text: 'Am 20. Mai öffnet das „Backstüble" seine Türen – und schreibt seitdem Schwaigerner Geschichte.',
    highlight: true,
  },
  {
    year: "2003",
    title: "Das neue Backstüble",
    text: 'Der bislang größte Umbau startet im Juni. In nur 8 Wochen entsteht das „neue Backstüble" – im August wird wieder geöffnet.',
  },
  {
    year: "2008",
    title: "Rico Wendler übernimmt",
    text: "Zum 1. August tritt Sohn Rico Wendler in die Fußstapfen seines Vaters und übernimmt das Backstüble.",
  },
  {
    year: "2013",
    title: "30 Jahre Backstüble",
    text: "Vom 2.–4. August wird das 30-jährige Jubiläum gefeiert: Livebands, Cocktailbar, XXL-Smoker, Kinderschminken, Tombola und vieles mehr.",
    highlight: true,
  },
];

export default function Geschichte() {
  return (
    <section
      id="geschichte"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "var(--black)" }}
    >
      {/* BG decoration */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "var(--red)" }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--red)" }}
          >
            Seit über 40 Jahren
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "white" }}
          >
            Geschichte
          </h2>
          <div className="w-16 h-px mx-auto" style={{ background: "var(--red)" }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden sm:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(196,20,40,0.4) 10%, rgba(196,20,40,0.4) 90%, transparent)",
            }}
          />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      isLeft ? "sm:text-right sm:pr-12" : "sm:text-left sm:pl-12"
                    }`}
                  >
                    <div
                      className="inline-block rounded-2xl p-5 text-left"
                      style={{
                        background: item.highlight
                          ? "rgba(196,20,40,0.15)"
                          : "var(--dark-card)",
                        border: item.highlight
                          ? "1px solid rgba(196,20,40,0.5)"
                          : "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        className="text-xs font-bold tracking-[0.2em] uppercase"
                        style={{ color: "var(--red)" }}
                      >
                        {item.year}
                      </span>
                      <h3
                        className="text-lg font-bold text-white mt-1 mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(245,240,235,0.65)" }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div
                    className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full items-center justify-center z-10"
                    style={{
                      background: item.highlight ? "var(--red)" : "var(--dark-card)",
                      border: "2px solid var(--red)",
                    }}
                  />

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden sm:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
