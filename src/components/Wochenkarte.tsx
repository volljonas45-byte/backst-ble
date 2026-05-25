export default function Wochenkarte() {
  return (
    <section
      id="wochenkarte"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "var(--black)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--red)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "var(--red)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--red)" }}
          >
            Was es gibt
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "white" }}
          >
            Wochenkarte
          </h2>
          <div className="w-16 h-px mx-auto" style={{ background: "var(--red)" }} />
        </div>

        {/* Menu card – image placeholder */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image / PDF placeholder */}
          <div
            className="relative rounded-3xl overflow-hidden aspect-[3/4] flex items-center justify-center group cursor-pointer"
            style={{
              background: "var(--dark-card)",
              border: "2px dashed rgba(196,20,40,0.4)",
            }}
          >
            {/* Replace this div with: <Image src="/images/wochenkarte.jpg" alt="Wochenkarte" fill className="object-cover" /> */}
            <div className="text-center p-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(196,20,40,0.15)" }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--red)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-white font-semibold mb-2">Wochenkarte</p>
              <p
                className="text-sm"
                style={{ color: "rgba(245,240,235,0.45)" }}
              >
                Bild / PDF kommt hier rein
              </p>
            </div>
          </div>

          {/* Info side */}
          <div className="flex flex-col gap-6">
            <div>
              <h3
                className="text-3xl font-black mb-3 leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "white" }}
              >
                Wöchentlich wechselnde Speisen
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(245,240,235,0.65)" }}
              >
                Unsere Wochenkarte wechselt regelmäßig mit frischen, saisonalen
                Gerichten. Schaut einfach vorbei oder ruft an – wir freuen uns
                auf euch!
              </p>
            </div>

            {/* Highlight boxes */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🍺", label: "Frisch vom Fass" },
                { icon: "🍽️", label: "Saisonale Küche" },
                { icon: "🎵", label: "Live Musik" },
                { icon: "🎉", label: "Events & Feiern" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-4 flex items-center gap-3"
                  style={{
                    background: "var(--dark-card)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "rgba(245,240,235,0.8)" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Getränkepartner */}
            <div>
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "rgba(245,240,235,0.35)" }}
              >
                Unsere Bierpartner
              </p>
              <div className="flex flex-wrap gap-3">
                {["Weihenstephan", "Bitburger", "König Pilsener"].map((brand) => (
                  <span
                    key={brand}
                    className="text-sm font-medium px-4 py-2 rounded-full"
                    style={{
                      background: "var(--dark-card)",
                      color: "rgba(245,240,235,0.6)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="tel:+4971384355"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase w-fit transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--red)",
                color: "white",
                letterSpacing: "0.08em",
              }}
            >
              Tisch reservieren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
