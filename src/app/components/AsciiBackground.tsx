import React, { useEffect, useRef } from "react";

const CHARS = ["░", "▒", "·", ":", ".", "+", "-", "=", "~", "*", "#", "%"];

export function AsciiBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cols = Math.ceil(window.innerWidth / 12) + 2;
    const rows = Math.ceil(window.innerHeight / 14) + 2;

    let text = "";
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = Math.floor(Math.random() * CHARS.length);
        text += CHARS[idx];
      }
      text += "\n";
    }
    container.textContent = text;
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0"
      style={{
        background: "#000000",
      }}
    >
      <pre
        ref={containerRef}
        style={{
          fontFamily: "'VT323', monospace",
          fontSize: "13px",
          lineHeight: "14px",
          color: "#1a0000",
          letterSpacing: "0px",
          position: "absolute",
          inset: 0,
          margin: 0,
          padding: 0,
          whiteSpace: "pre",
          overflow: "hidden",
        }}
      />
      {/* CRT scanlines */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)",
          pointerEvents: "none",
        }}
      />
      {/* CRT vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.8) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
