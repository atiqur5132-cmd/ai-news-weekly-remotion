import React from "react";
import { AbsoluteFill } from "remotion";
import { GoogleOfficialLogo } from "./components/RealLogos";

export const Thumbnail: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#05070D",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Electric Blue Rounded Border Frame */}
      <div
        style={{
          position: "absolute",
          inset: 20,
          border: "4px solid #0070F3",
          borderRadius: 36,
          boxShadow: "0 0 70px rgba(0, 112, 243, 0.5), inset 0 0 40px rgba(0, 112, 243, 0.25)",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />

      {/* Atmospheric Glows */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 850,
          height: 850,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.28) 0%, transparent 70%)",
          filter: "blur(130px)",
        }}
      />

      {/* Hero Visual on Right Side (Pulsing Singularity / RSI Loop) */}
      <div
        style={{
          position: "absolute",
          right: 120,
          top: "50%",
          transform: "translateY(-50%)",
          width: 540,
          height: 540,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 15,
        }}
      >
        {/* Outer dashed rings */}
        <div
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "3px dashed rgba(56, 189, 248, 0.4)",
            boxShadow: "0 0 60px rgba(56, 189, 248, 0.3)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 340,
            height: 340,
            borderRadius: "50%",
            border: "2px solid rgba(168, 85, 247, 0.5)",
            boxShadow: "0 0 40px rgba(168, 85, 247, 0.3)",
          }}
        />

        {/* Central Glowing Core */}
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "radial-gradient(circle, #38BDF8 0%, #1E1B4B 75%)",
            border: "4px solid #38BDF8",
            boxShadow: "0 0 80px rgba(56, 189, 248, 0.8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.15em", color: "#E0F2FE" }}>SINGULARITY</span>
          <span style={{ fontSize: 62, fontWeight: 950, color: "#FFFFFF", lineHeight: 1 }}>RSI</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#34D399" }}>ACHIEVED</span>
        </div>

        {/* Orbiting Badges */}
        <div
          style={{
            position: "absolute",
            top: 20,
            padding: "8px 18px",
            borderRadius: 12,
            background: "rgba(15, 23, 42, 0.95)",
            border: "1.5px solid #38BDF8",
            color: "#38BDF8",
            fontSize: 13,
            fontWeight: 800,
            boxShadow: "0 10px 25px rgba(0,0,0,0.8)",
          }}
        >
          AUTONOMOUS LOOP
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 20,
            padding: "8px 18px",
            borderRadius: 12,
            background: "rgba(15, 23, 42, 0.95)",
            border: "1.5px solid #F43F5E",
            color: "#FB7185",
            fontSize: 13,
            fontWeight: 800,
            boxShadow: "0 10px 25px rgba(0,0,0,0.8)",
          }}
        >
          GROK 4.7 ROADBLOCK
        </div>
      </div>

      {/* Main Left Content */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          height: "100%",
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 100px",
        }}
      >
        {/* Top Brand Bar with Authentic Google 4-Color Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 18,
              background: "rgba(15, 23, 42, 0.9)",
              border: "2px solid rgba(255, 255, 255, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
            }}
          >
            <GoogleOfficialLogo size={36} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 24, fontWeight: 900, color: "#FFFFFF", letterSpacing: "0.05em" }}>
              GOOGLE DEEPMIND LEAK
            </span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#38BDF8">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
        </div>

        {/* Center Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 900,
              color: "#38BDF8",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textShadow: "0 0 30px rgba(56, 189, 248, 0.6)",
            }}
          >
            RECURSIVE AI UNLOCKED?
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 104,
              fontWeight: 950,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              textShadow: "0 10px 50px rgba(0, 0, 0, 0.9)",
            }}
          >
            THE RSI LOOP
          </h1>
        </div>

        {/* Bottom Metrics Row */}
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <div
            style={{
              background: "rgba(15, 23, 42, 0.85)",
              border: "1.5px solid rgba(56, 189, 248, 0.4)",
              borderRadius: 16,
              padding: "12px 24px",
            }}
          >
            <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 700 }}>GOOGLE DEEPMIND</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#38BDF8" }}>GEMINI 4 PRO</div>
          </div>

          <div
            style={{
              background: "rgba(15, 23, 42, 0.85)",
              border: "1.5px solid rgba(239, 68, 68, 0.4)",
              borderRadius: 16,
              padding: "12px 24px",
            }}
          >
            <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 700 }}>xAI ROADBLOCK</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#EF4444" }}>RL QUITTING FLAW</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
