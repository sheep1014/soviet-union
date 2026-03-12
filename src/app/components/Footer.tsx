import React from "react";

const SOCIAL_ICONS = [
  { label: "TWT", art: `[★_★]` },
  { label: "FB",  art: `[☭:::]` },
  { label: "IG",  art: `[★===]` },
  { label: "YT",  art: `[>>★<<]` },
  { label: "GH",  art: `[{☭}]` },
];

const FOOTER_ART = `
★ ☭ СОВЕТСКИЙ СОЮЗ · SOVIET UNION ☭ ★
       1  9  1  7   ─   1  9  9  1
`.trim();

const SHEEP_ART = `
 (\\_/)
( •_•)
/ > ★  sheepsheepsheep
`.trim();

export function Footer() {
  return (
    <footer
      className="relative z-10 py-8 px-6"
      style={{
        background: "rgba(3,0,0,0.97)",
        borderTop: "2px solid #442200",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Star separator */}
        <div
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "16px",
            color: "#664400",
            textAlign: "center",
            marginBottom: "16px",
            letterSpacing: "4px",
            textShadow: "0 0 4px #442200",
          }}
        >
          {"★ ".repeat(50)}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex gap-4 flex-wrap justify-center">
            {SOCIAL_ICONS.map((s) => (
              <button
                key={s.label}
                title={s.label}
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "18px",
                  color: "#664400",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "1px",
                  transition: "color 0.15s, text-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#CCAA00";
                  (e.currentTarget as HTMLElement).style.textShadow = "0 0 8px #CCAA00";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#664400";
                  (e.currentTarget as HTMLElement).style.textShadow = "none";
                }}
              >
                {s.art}
              </button>
            ))}
          </div>

          {/* Center - Main Footer Text */}
          <div className="text-center flex flex-col items-center gap-2">
            <div
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "18px",
                color: "#CCAA00",
                textShadow: "0 0 8px #885500",
                letterSpacing: "2px",
                lineHeight: "1.4",
                whiteSpace: "pre",
              }}
            >
              {FOOTER_ART}
            </div>
            <div
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "16px",
                color: "#660000",
                letterSpacing: "2px",
              }}
            >
              © 2024 SOVIET MEMORIAL PROJECT · ВЕЧНАЯ ПАМЯТЬ
            </div>
            <div
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "13px",
                color: "#442200",
                letterSpacing: "1px",
              }}
            >
              NEVER FORGOTTEN · ВЕЧНАЯ ПАМЯТЬ · НИКОГДА НЕ ЗАБЫТ
            </div>
          </div>

          {/* Right - Links */}
          <div className="flex flex-col gap-1 items-end">
            {["[HISTORY]", "[ARCHIVE]", "[MANIFESTO]", "[DONATE]"].map((lnk) => (
              <button
                key={lnk}
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "16px",
                  color: "#664400",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "1px",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#CCAA00";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#664400";
                }}
              >
                {lnk}
              </button>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "13px",
            color: "#221100",
            textAlign: "center",
            marginTop: "16px",
            letterSpacing: "1px",
          }}
        >
          {"═".repeat(100)}
        </div>

        {/* Creator credit - sheepsheepsheep */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6"
          style={{
            padding: "12px",
            border: "1px solid #331100",
            background: "rgba(8,3,0,0.9)",
          }}
        >
          <pre
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: "16px",
              color: "#664400",
              margin: 0,
              lineHeight: "1.4",
              whiteSpace: "pre",
            }}
          >
            {SHEEP_ART}
          </pre>
          <div className="text-center">
            <div
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "20px",
                color: "#885500",
                letterSpacing: "3px",
                textShadow: "0 0 6px #553300",
              }}
            >
              MADE BY sheepsheepsheep
            </div>
            <div
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "15px",
                color: "#553300",
                letterSpacing: "2px",
                marginTop: "2px",
              }}
            >
              CRAFTED WITH NOSTALGIA BY sheepsheepsheep
            </div>
          </div>
        </div>

        <div
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "12px",
            color: "#1a0800",
            textAlign: "center",
            marginTop: "8px",
            letterSpacing: "2px",
          }}
        >
          TERMINAL v2.4.0 :: SYSTEM ONLINE :: SOVIET MEMORIAL PROTOCOL ACTIVE :: ВЕЧНАЯ ПАМЯТЬ
        </div>
      </div>
    </footer>
  );
}