import React from "react";

const SECTION_LABEL = `
+----------------------+
|                      |
|   WHY WE REMEMBER    |
|   ПОЧЕМУ МЫ ПОМНИМ   |
|                      |
+----------------------+`.trim();

const REASONS = [
  {
    icon: `
  _____
 / ★★★ \\
|  ☭   |
|  ★   |
\\_____/
ПОБЕДА`.trim(),
    title: "THE GREAT VICTORY",
    russian: "ПОБЕДА НАД ФАШИЗМОМ",
    text: `1945: The Soviet people
defeated fascism at the
cost of 27 million lives.
The world owes them this.`,
  },
  {
    icon: `
   ***
  * ★ *
 *  ★  *
***★★★***
 СПУТНИК`.trim(),
    title: "FIRST INTO SPACE",
    russian: "ПЕРВЫЙ В КОСМОСЕ",
    text: `Sputnik 1957. Gagarin 1961.
The USSR led humanity
into the cosmos before
anyone else dared to try.`,
  },
  {
    icon: `
  _____
 [     ]
 | ☭★☭ |
 [_____]
  НАРОД`.trim(),
    title: "WORKERS' SOLIDARITY",
    russian: "ЕДИНСТВО НАРОДОВ",
    text: `15 republics, 100+ nations,
united under one red flag.
No empire built more on
the dream of equality.`,
  },
  {
    icon: `
  /|\\
 / | \\
/  |  \\
  _|_
 |   |
 |___|
НАУКА`.trim(),
    title: "SCIENCE & CULTURE",
    russian: "НАУКА И КУЛЬТУРА",
    text: `Mass literacy. Free medicine.
World-class science, art,
literature & music, forged
in the furnace of history.`,
  },
];

export function WhyFightSection() {
  return (
    <section
      className="relative z-10 py-16 px-6"
      style={{
        background: "rgba(5,0,0,0.85)",
        borderTop: "1px solid #330000",
        borderBottom: "1px solid #330000",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Section Label */}
          <div className="flex-shrink-0 flex flex-col items-start">
            <pre
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "18px",
                lineHeight: "1.3",
                color: "#FF0000",
                textShadow: "0 0 8px #FF0000, 0 0 16px #660000",
                margin: 0,
                whiteSpace: "pre",
              }}
            >
              {SECTION_LABEL}
            </pre>

            {/* Star decoration */}
            <div className="mt-6 hidden lg:block">
              <pre
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "18px",
                  color: "#885500",
                  margin: 0,
                  lineHeight: "2",
                  textShadow: "0 0 4px #664400",
                }}
              >
                {`★\n★\n★\n★\n★\n★\n★\n★\n★\n★\n★\n★\n★\n★\n★`}
              </pre>
            </div>
          </div>

          {/* Right: Reasons */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {REASONS.map((reason, idx) => (
              <div
                key={idx}
                className="flex gap-4"
                style={{
                  padding: "16px",
                  border: "1px solid #330000",
                  background: "rgba(10,0,0,0.6)",
                  transition: "border-color 0.2s, background 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#885500";
                  (e.currentTarget as HTMLElement).style.background = "rgba(20,5,0,0.85)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#330000";
                  (e.currentTarget as HTMLElement).style.background = "rgba(10,0,0,0.6)";
                }}
              >
                {/* Icon */}
                <pre
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: "14px",
                    lineHeight: "1.3",
                    color: "#CCAA00",
                    textShadow: "0 0 6px #885500",
                    margin: 0,
                    flexShrink: 0,
                    whiteSpace: "pre",
                  }}
                >
                  {reason.icon}
                </pre>

                {/* Text */}
                <div>
                  <div
                    style={{
                      fontFamily: "'VT323', monospace",
                      fontSize: "20px",
                      color: "#CCAA00",
                      textShadow: "0 0 6px #885500",
                      letterSpacing: "2px",
                      marginBottom: "2px",
                    }}
                  >
                    {`★ ${reason.title}`}
                  </div>
                  <div
                    style={{
                      fontFamily: "'VT323', monospace",
                      fontSize: "14px",
                      color: "#664400",
                      letterSpacing: "1px",
                      marginBottom: "8px",
                    }}
                  >
                    {`// ${reason.russian}`}
                  </div>
                  <pre
                    style={{
                      fontFamily: "'VT323', monospace",
                      fontSize: "15px",
                      color: "#AA0000",
                      lineHeight: "1.4",
                      margin: 0,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {reason.text}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom separator */}
        <div
          className="mt-12 text-center overflow-hidden"
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "16px",
            color: "#664400",
            letterSpacing: "3px",
          }}
        >
          {`★ ИСТОРИЯ НЕ ЗАБЫТА · HISTORY IS NOT FORGOTTEN ★`.padStart(60, "═").padEnd(140, "═")}
        </div>
      </div>
    </section>
  );
}