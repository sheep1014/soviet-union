import React, { useState } from "react";
import { AsciiBackground } from "./components/AsciiBackground";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WhyFightSection } from "./components/WhyFightSection";
import { HowToHelpSection } from "./components/HowToHelpSection";
import { ResolutionControl } from "./components/ResolutionControl";
import { Footer } from "./components/Footer";

export default function App() {
  const [resolution, setResolution] = useState(60);

  // Resolution controls ASCII font density in hero:
  // Higher resolution = smaller font = denser characters
  // Lower resolution = bigger font = blockier look
  const asciiFontSize = Math.round(22 - (resolution / 100) * 12); // 10px – 22px

  return (
    <div
      style={{
        fontFamily: "'VT323', monospace",
        background: "#000000",
        minHeight: "100vh",
        color: "#FF0000",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Static ASCII background texture */}
      <AsciiBackground />

      {/* CRT horizontal scanlines overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* Red phosphor glow overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(255,0,0,0.02) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <Header />
        <HeroSection fontSize={asciiFontSize} />
        <WhyFightSection />
        <HowToHelpSection />
        <Footer />
      </div>

      {/* Resolution control - fixed bottom right */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 100,
        }}
      >
        <ResolutionControl
          resolution={resolution}
          setResolution={setResolution}
        />
      </div>

      {/* Global styles */}
      <style>{`
        * {
          box-sizing: border-box;
        }
        ::-webkit-scrollbar {
          width: 6px;
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #330000;
          border-radius: 0;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #660000;
        }
        ::selection {
          background: #FF0000;
          color: #000000;
        }

        input[type='range'] {
          -webkit-appearance: none;
          appearance: none;
          height: 3px;
          background: #330000;
          outline: none;
          border-radius: 0;
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          background: #FF0000;
          cursor: pointer;
          border-radius: 0;
          box-shadow: 0 0 6px #FF0000;
        }
        input[type='range']::-moz-range-thumb {
          width: 14px;
          height: 14px;
          background: #FF0000;
          cursor: pointer;
          border-radius: 0;
          border: none;
          box-shadow: 0 0 6px #FF0000;
        }

        @keyframes flicker {
          0%   { opacity: 1; }
          92%  { opacity: 1; }
          93%  { opacity: 0.85; }
          94%  { opacity: 1; }
          96%  { opacity: 0.9; }
          100% { opacity: 1; }
        }
        body {
          animation: flicker 8s infinite;
          background: #000000 !important;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'VT323', monospace;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}