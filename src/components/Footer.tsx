"use client";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{
        background: "var(--black)",
        borderTop: "1px solid rgba(196,20,40,0.2)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "var(--red)" }}
              >
                BS
              </div>
              <div>
                <p
                  className="font-bold text-white tracking-wider"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Backstüble
                </p>
                <p
                  className="text-xs tracking-[0.15em] uppercase"
                  style={{ color: "rgba(245,240,235,0.4)" }}
                >
                  Schwaigern
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(245,240,235,0.45)" }}
            >
              Ihr Bistro mit Pfiff im Herzen von Schwaigern – seit 1983.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "rgba(245,240,235,0.35)" }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Öffnungszeiten", href: "#oeffnungszeiten" },
                { label: "Wochenkarte", href: "#wochenkarte" },
                { label: "Galerie", href: "#galerie" },
                { label: "Geschichte", href: "#geschichte" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(245,240,235,0.5)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "rgba(245,240,235,0.9)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(245,240,235,0.5)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "rgba(245,240,235,0.35)" }}
            >
              Kontakt
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-sm" style={{ color: "rgba(245,240,235,0.6)" }}>
                Marktstr. 11, 74193 Schwaigern
              </p>
              <a
                href="tel:+4971384355"
                className="text-sm transition-colors duration-200"
                style={{ color: "rgba(245,240,235,0.6)" }}
              >
                +49 (0) 7138 4355
              </a>
              <a
                href="https://www.facebook.com/backstueble"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200 flex items-center gap-2"
                style={{ color: "var(--red)" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(245,240,235,0.3)" }}>
            © {new Date().getFullYear()} Backstüble Schwaigern · Rico Wendler
          </p>
          <div className="flex gap-4">
            {[
              { label: "Impressum", href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs transition-colors duration-200"
                style={{ color: "rgba(245,240,235,0.3)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(245,240,235,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245,240,235,0.3)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
