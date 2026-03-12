import React from "react";

const LOGO_ART = `★ ☭ ★
CCCP`;

const TITLE_ART = `
╔══════════════════════════════════════════════════════════════════════════════════════════════╗
║  ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★  ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                              ║
║              С О В Е Т С К И Й   С О Ю З          S O V I E T   U N I O N                  ║
║                                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════════════════════╣
║  ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★    ★  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝`.trim();

const NAV_LINKS = [
  "[HISTORY]",
  "[GLORY]",
  "[PEOPLE]",
  "[ETERNAL]",
];

export function Header() {
  return (
    <header
      className="relative z-20 w-full"
      style={{
        borderBottom: "1px solid #330000",
        background: "rgba(0,0,0,0.90)",
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 py-2"
        style={{ borderBottom: "1px solid #220000" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <pre
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: "16px",
              lineHeight: "1.2",
              color: "#CCAA00",
              margin: 0,
              textShadow: "0 0 8px #CCAA00, 0 0 16px #885500",
            }}
          >
            {LOGO_ART}
          </pre>
          <div>
            <div
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "14px",
                color: "#CC0000",
                letterSpacing: "3px",
              }}
            >
              SOVIET MEMORIAL COALITION
            </div>
            <div
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "13px",
                color: "#885500",
                letterSpacing: "2px",
              }}
            >
              NEVER FORGOTTEN · ВЕЧНАЯ ПАМЯТЬ
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex gap-4 flex-wrap justify-end">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "16px",
                color: "#880000",
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "1px",
                transition: "color 0.15s, text-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#CCAA00";
                (e.target as HTMLElement).style.textShadow = "0 0 8px #CCAA00";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#880000";
                (e.target as HTMLElement).style.textShadow = "none";
              }}
            >
              {link}
            </button>
          ))}
        </nav>
      </div>

      {/* Big Title */}
      <div className="flex justify-center py-4 px-4 overflow-x-auto">
        <pre
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "clamp(5px, 0.9vw, 11px)",
            lineHeight: "1.3",
            color: "#FF0000",
            margin: 0,
            textShadow: "0 0 6px #FF0000, 0 0 12px #880000, 0 0 24px #440000",
            whiteSpace: "pre",
            letterSpacing: "0px",
          }}
        >
          {TITLE_ART}
        </pre>
      </div>

      {/* Gold star divider */}
      <div
        style={{
          fontFamily: "'VT323', monospace",
          fontSize: "16px",
          color: "#885500",
          textAlign: "center",
          letterSpacing: "4px",
          paddingBottom: "6px",
          textShadow: "0 0 6px #664400",
        }}
      >
        {"★  ".repeat(30)}
      </div>
    </header>
  );
}