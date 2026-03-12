import React from "react";

interface ResolutionControlProps {
  resolution: number;
  setResolution: (v: number) => void;
}

const KNOB_ART = `
.-------.
| CTRL  |
'-------'`.trim();

export function ResolutionControl({
  resolution,
  setResolution,
}: ResolutionControlProps) {
  const bars = Math.round((resolution / 100) * 8);
  const barDisplay =
    "[" + "█".repeat(bars) + "░".repeat(8 - bars) + "]";

  return (
    <div
      style={{
        fontFamily: "'VT323', monospace",
        background: "rgba(5,0,0,0.92)",
        border: "1px solid #FF0000",
        padding: "14px 18px",
        boxShadow: "0 0 16px rgba(255,0,0,0.4), 0 0 32px rgba(255,0,0,0.1)",
        minWidth: "200px",
      }}
    >
      {/* Header */}
      <div
        style={{
          fontSize: "12px",
          color: "#440000",
          letterSpacing: "2px",
          textAlign: "center",
          marginBottom: "4px",
        }}
      >
        {"+-[ SYS CTRL ]-+"}
      </div>

      {/* Label */}
      <div
        style={{
          fontSize: "20px",
          color: "#FF0000",
          textShadow: "0 0 6px #FF0000",
          letterSpacing: "3px",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        RESOLUTION
      </div>

      {/* Bar display */}
      <div
        style={{
          fontSize: "16px",
          color: "#FF0000",
          textShadow: "0 0 4px #880000",
          textAlign: "center",
          marginBottom: "8px",
          letterSpacing: "1px",
        }}
      >
        {barDisplay}
      </div>

      {/* Min/Max labels */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "13px",
          color: "#660000",
          letterSpacing: "1px",
          marginBottom: "4px",
        }}
      >
        <span>MIN</span>
        <span>{resolution}%</span>
        <span>MAX</span>
      </div>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={100}
        value={resolution}
        onChange={(e) => setResolution(Number(e.target.value))}
        style={{
          width: "100%",
          accentColor: "#FF0000",
          background: "transparent",
          cursor: "pointer",
          height: "4px",
        }}
      />

      {/* Current resolution label */}
      <div
        style={{
          fontSize: "13px",
          color: "#440000",
          letterSpacing: "1px",
          textAlign: "center",
          marginTop: "6px",
        }}
      >
        {"DENSITY: " + (resolution < 33 ? "LOW" : resolution < 66 ? "MED" : "HIGH")}
      </div>

      {/* Footer decoration */}
      <div
        style={{
          fontSize: "11px",
          color: "#220000",
          textAlign: "center",
          marginTop: "8px",
          letterSpacing: "1px",
        }}
      >
        {"+=============+"}
      </div>
    </div>
  );
}
