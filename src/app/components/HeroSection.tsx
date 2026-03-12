import React, { useEffect, useState } from "react";

const MONUMENT_ART = `
                          ★
                        ★   ★
                       ★     ★
                      ★   ☭   ★
                       ★     ★
                        ★   ★
                          ★
                          |
                          |
                   ,------+------,
                  /   C  C  C  P  \\
                 /                 \\
                /    1917 - 1991    \\
               /______________________\\
               |                      |
               |   ВЕЧНАЯ   ПАМЯТЬ    |
               |                      |
               |   ETERNAL   MEMORY   |
               |                      |
               |   ☭   ★   ☭   ★   ☭  |
               |______________________|
               |                      |
               |  СОВЕТСКИЙ   СОЮЗ    |
               |______________________|
          ═════╪══════════════════════╪═════
         ██████████████████████████████████
        ████████████████████████████████████`;

interface HeroSectionProps {
  fontSize: number;
}

export function HeroSection({ fontSize }: HeroSectionProps) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center py-12 px-4"
      style={{ minHeight: "90vh" }}
    >
      {/* Alert ticker */}
      <div
        className="w-full overflow-hidden mb-8"
        style={{
          borderTop: "1px solid #FF0000",
          borderBottom: "1px solid #FF0000",
          background: "rgba(20,0,0,0.7)",
          padding: "6px 0",
        }}
      >
        <div
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "18px",
            color: "#FF0000",
            textShadow: "0 0 6px #FF0000",
            letterSpacing: "3px",
            animation: "marquee 25s linear infinite",
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
        >
          {"  ★ СОВЕТСКИЙ СОЮЗ 1917-1991 ★ THE USSR LIVES IN MEMORY ★ VICTORY OVER FASCISM · ПОБЕДА НАД ФАШИЗМОМ ★ FIRST SATELLITE · ПЕРВЫЙ СПУТНИК ★ GLORY TO THE WORKING PEOPLE · СЛАВА РАБОЧЕМУ НАРОДУ ★ ВЕЧНАЯ ПАМЯТЬ · ETERNAL MEMORY ★ СОВЕТСКИЙ СОЮЗ 1917-1991 ★ THE USSR LIVES IN MEMORY ★ VICTORY OVER FASCISM · ПОБЕДА НАД ФАШИЗМОМ ★ FIRST SATELLITE · ПЕРВЫЙ СПУТНИК ★ GLORY TO THE WORKING PEOPLE · СЛАВА РАБОЧЕМУ НАРОДУ ★ ВЕЧНАЯ ПАМЯТЬ · ETERNAL MEMORY  "}
        </div>
      </div>

      {/* Monument Art */}
      <pre
        style={{
          fontFamily: "'VT323', monospace",
          fontSize: `${fontSize}px`,
          lineHeight: "1.2",
          color: glitch ? "#FF4400" : "#FF0000",
          textShadow: glitch
            ? "2px 0 #FF0000, -2px 0 #004400, 0 0 20px #FF0000"
            : "0 0 8px #FF0000, 0 0 16px #660000, 0 0 32px #330000",
          margin: 0,
          whiteSpace: "pre",
          transition: "font-size 0.3s ease",
          filter: glitch ? "blur(0.5px)" : "none",
        }}
      >
        {MONUMENT_ART}
      </pre>

      {/* Hero Text */}
      <div className="mt-10 text-center">
        <div
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "clamp(28px, 5vw, 64px)",
            color: "#CCAA00",
            letterSpacing: "6px",
            textShadow: "0 0 12px #CCAA00, 0 0 24px #885500",
            lineHeight: 1.1,
            animation: "pulse-gold 2.5s ease-in-out infinite alternate",
          }}
        >
          ВЕЧНАЯ ПАМЯТЬ
        </div>
        <div
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "clamp(22px, 4vw, 52px)",
            color: "#FF0000",
            letterSpacing: "8px",
            textShadow: "0 0 10px #FF0000, 0 0 20px #880000",
            lineHeight: 1.1,
            marginTop: "6px",
            animation: "pulse-glow 2s ease-in-out infinite alternate",
          }}
        >
          ETERNAL MEMORY
        </div>
        <div
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "clamp(14px, 2vw, 24px)",
            color: "#CC0000",
            letterSpacing: "4px",
            marginTop: "10px",
            textShadow: "0 0 6px #880000",
          }}
        >
          ETERNAL MEMORY · SOVIET UNION · 1917–1991
        </div>
        <div
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "clamp(13px, 1.8vw, 20px)",
            color: "#885500",
            letterSpacing: "3px",
            marginTop: "4px",
            textShadow: "0 0 4px #664400",
          }}
        >
          THE USSR IS GONE. ITS SPIRIT IS NOT.
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <button
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "clamp(18px, 2.5vw, 28px)",
            color: "#CCAA00",
            background: "transparent",
            border: "2px solid #CCAA00",
            padding: "10px 40px",
            letterSpacing: "4px",
            cursor: "pointer",
            textShadow: "0 0 8px #CCAA00",
            boxShadow: "0 0 10px #885500, inset 0 0 10px rgba(204,170,0,0.05)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(204,170,0,0.12)";
            el.style.boxShadow = "0 0 20px #CCAA00, inset 0 0 20px rgba(204,170,0,0.1)";
            el.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "transparent";
            el.style.boxShadow = "0 0 10px #885500, inset 0 0 10px rgba(204,170,0,0.05)";
            el.style.transform = "scale(1)";
          }}
        >
          {`[ ★ HONOR THE USSR · СЛАВА СОВЕТСКОМУ СОЮЗУ ★ ]`}
        </button>
      </div>

      {/* Stars decoration bottom */}
      <div
        style={{
          fontFamily: "'VT323', monospace",
          fontSize: "18px",
          color: "#440000",
          marginTop: "28px",
          letterSpacing: "4px",
          textAlign: "center",
          textShadow: "0 0 4px #220000",
        }}
      >
        {"★ ".repeat(40)}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse-glow {
          0% { text-shadow: 0 0 10px #FF0000, 0 0 20px #880000; }
          100% { text-shadow: 0 0 20px #FF0000, 0 0 40px #CC0000, 0 0 60px #440000; }
        }
        @keyframes pulse-gold {
          0% { text-shadow: 0 0 10px #CCAA00, 0 0 20px #885500; }
          100% { text-shadow: 0 0 24px #CCAA00, 0 0 48px #AA8800, 0 0 72px #664400; }
        }
      `}</style>
    </section>
  );
}