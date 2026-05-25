export default function Kontakt() {
  return (
    <section
      id="kontakt"
      className="py-24 px-6"
      style={{ background: "var(--dark)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--red)" }}
          >
            So findet ihr uns
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "white" }}
          >
            Kontakt & Anfahrt
          </h2>
          <div className="w-16 h-px mx-auto" style={{ background: "var(--red)" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="flex flex-col gap-5">
            {/* Address */}
            <div
              className="rounded-2xl p-6 flex gap-4"
              style={{
                background: "var(--dark-card)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(196,20,40,0.15)" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "var(--red)" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p
                  className="text-xs font-semibold tracking-[0.15em] uppercase mb-1"
                  style={{ color: "rgba(245,240,235,0.4)" }}
                >
                  Adresse
                </p>
                <p className="text-white font-semibold">Backstüble Schwaigern</p>
                <p style={{ color: "rgba(245,240,235,0.7)" }}>Marktstr. 11</p>
                <p style={{ color: "rgba(245,240,235,0.7)" }}>74193 Schwaigern</p>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+4971384355"
              className="rounded-2xl p-6 flex gap-4 transition-all duration-300 hover:scale-[1.02] group"
              style={{
                background: "var(--dark-card)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                style={{ background: "rgba(196,20,40,0.15)" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "var(--red)" }}
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p
                  className="text-xs font-semibold tracking-[0.15em] uppercase mb-1"
                  style={{ color: "rgba(245,240,235,0.4)" }}
                >
                  Telefon
                </p>
                <p
                  className="text-white font-semibold group-hover:text-red-400 transition-colors"
                  style={{ color: "white" }}
                >
                  +49 (0) 7138 4355
                </p>
                <p
                  className="text-sm"
                  style={{ color: "rgba(245,240,235,0.45)" }}
                >
                  Nur während Öffnungszeiten
                </p>
              </div>
            </a>

            {/* Social */}
            <a
              href="https://www.facebook.com/backstueble"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-6 flex gap-4 transition-all duration-300 hover:scale-[1.02] group"
              style={{
                background: "var(--dark-card)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(196,20,40,0.15)" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--red)" }}
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <p
                  className="text-xs font-semibold tracking-[0.15em] uppercase mb-1"
                  style={{ color: "rgba(245,240,235,0.4)" }}
                >
                  Social Media
                </p>
                <p className="text-white font-semibold">Facebook</p>
                <p
                  className="text-sm"
                  style={{ color: "rgba(245,240,235,0.45)" }}
                >
                  facebook.com/backstueble
                </p>
              </div>
            </a>

            {/* Opening hours summary */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(196,20,40,0.1)",
                border: "1px solid rgba(196,20,40,0.3)",
              }}
            >
              <p
                className="text-xs font-semibold tracking-[0.15em] uppercase mb-4"
                style={{ color: "var(--red)" }}
              >
                Öffnungszeiten
              </p>
              {[
                { days: "Mo & Di", time: "Geschlossen", closed: true },
                { days: "Mi – Do", time: "16:00 – 00:00" },
                { days: "Fr – Sa", time: "16:00 – 01:00" },
                { days: "Sonntag", time: "17:00 – 23:00" },
              ].map((row) => (
                <div
                  key={row.days}
                  className="flex justify-between py-2 border-b last:border-0"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span style={{ color: "rgba(245,240,235,0.7)" }}>{row.days}</span>
                  <span
                    className="font-semibold"
                    style={{
                      color: row.closed ? "rgba(245,240,235,0.3)" : "white",
                    }}
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              minHeight: "500px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.8!2d9.0631!3d49.1302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4798a4b5e5e5e5e5%3A0x0!2sMarktstr.%2011%2C%2074193%20Schwaigern!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px", filter: "grayscale(80%) contrast(1.1) invert(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Backstüble Schwaigern – Marktstr. 11, 74193 Schwaigern"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
