import React from "react";

const SECTION_TITLE = `
╔══════════════════════════════════════════════════════════════╗
║  ★  ★  ★      H O W   T O   H O N O R      ★  ★  ★        ║
║              КАК   ПОЧТИТЬ   ПАМЯТЬ                         ║
╚══════════════════════════════════════════════════════════════╝`.trim();

const STEPS = [
  {
    num: "1",
    title: "REMEMBER",
    russian: "ПОМНИ",
    icon: `
  .---.
 / ★★★ \\
|  ☭   |
 \\     /
  '---'
 ПОМНИ `.trim(),
    desc: `Study the history.
Read the stories of
those who built the
USSR with their hands,
their sweat, their lives.
History is not textbooks.
It is people.`,
    action: "[ ★ LEARN / УЗНАТЬ ]",
  },
  {
    num: "2",
    title: "SPREAD",
    russian: "РАСПРОСТРАНЯЙ",
    icon: `
   ★★★
  ★   ★
 ★     ★
★  ☭★☭  ★
 ★     ★
  ★   ★
   ★★★
 СЛАВА`.trim(),
    desc: `Share the legacy with
your community. Use
#SovietMemorial to
keep the memory alive
across borders and
across generations.`,
    action: "[ ★ SHARE / ПОДЕЛИТЬСЯ ]",
  },
  {
    num: "3",
    title: "PRESERVE",
    russian: "СОХРАНЯЙ",
    icon: `
  _____
 |     |
 | ☭★☭ |
 |     |
 |_____|
 ПАМЯТЬ`.trim(),
    desc: `Preserve documents,
photos, stories of
the Soviet era.
Support archives and
the historians who
keep truth alive
for the next generation.`,
    action: "[ ★ PRESERVE / СОХРАНИТЬ ]",
  },
];

export function HowToHelpSection() {
  return (
    <section
      className="relative z-10 py-16 px-6"
      style={{ background: "rgba(0,0,0,0.9)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <pre
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: "clamp(8px, 1.3vw, 16px)",
              lineHeight: "1.4",
              color: "#CCAA00",
              textShadow: "0 0 8px #885500, 0 0 16px #664400",
              margin: 0,
              whiteSpace: "pre",
            }}
          >
            {SECTION_TITLE}
          </pre>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-center text-center"
              style={{
                border: "1px solid #442200",
                padding: "24px 16px",
                background: "rgba(8,3,0,0.85)",
                position: "relative",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#CCAA00";
                el.style.boxShadow = "0 0 16px rgba(204,170,0,0.2)";
                el.style.background = "rgba(20,8,0,0.95)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#442200";
                el.style.boxShadow = "none";
                el.style.background = "rgba(8,3,0,0.85)";
              }}
            >
              {/* Step number badge */}
              <div
                style={{
                  position: "absolute",
                  top: "-1px",
                  left: "-1px",
                  fontFamily: "'VT323', monospace",
                  fontSize: "14px",
                  color: "#000",
                  background: "#CCAA00",
                  padding: "1px 8px",
                  textShadow: "none",
                  letterSpacing: "1px",
                }}
              >
                {step.russian} · STEP {step.num}
              </div>

              {/* Icon */}
              <pre
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "16px",
                  lineHeight: "1.4",
                  color: "#CCAA00",
                  textShadow: "0 0 8px #885500",
                  margin: "28px 0 12px",
                  whiteSpace: "pre",
                }}
              >
                {step.icon}
              </pre>

              {/* Title */}
              <div
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "28px",
                  color: "#CCAA00",
                  textShadow: "0 0 8px #885500",
                  letterSpacing: "3px",
                  marginBottom: "10px",
                }}
              >
                {step.title}
              </div>

              {/* Divider */}
              <div
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "14px",
                  color: "#664400",
                  marginBottom: "12px",
                  letterSpacing: "2px",
                }}
              >
                {"★═══★═══★"}
              </div>

              {/* Desc */}
              <pre
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "16px",
                  color: "#CC0000",
                  lineHeight: "1.5",
                  margin: "0 0 16px",
                  whiteSpace: "pre-wrap",
                  textAlign: "center",
                }}
              >
                {step.desc}
              </pre>

              {/* Action */}
              <button
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "18px",
                  color: "#CCAA00",
                  background: "transparent",
                  border: "1px solid #885500",
                  padding: "6px 20px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                  textShadow: "0 0 6px #885500",
                  boxShadow: "0 0 6px rgba(204,170,0,0.2)",
                  transition: "all 0.15s",
                  marginTop: "auto",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(204,170,0,0.15)";
                  el.style.boxShadow = "0 0 12px #CCAA00";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "transparent";
                  el.style.boxShadow = "0 0 6px rgba(204,170,0,0.2)";
                }}
              >
                {step.action}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div
          className="mt-12 text-center"
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "clamp(14px, 2vw, 22px)",
            color: "#885500",
            letterSpacing: "4px",
            padding: "12px",
            border: "1px solid #442200",
            textShadow: "0 0 6px #664400",
          }}
        >
          {`[ ★ ВМЕСТЕ МЫ ПОМНИМ · TOGETHER WE REMEMBER ★ ]`}
        </div>
      </div>
    </section>
  );
}