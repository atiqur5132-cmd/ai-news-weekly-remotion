import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { AnthropicLogo } from "./components/RealLogos";

export const Thumbnail: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        overflow: "hidden",
        fontFamily: "'Montserrat', 'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900;950&family=Inter:wght@700;800;900&display=swap');
      `}</style>

      {/* 1. Volumetric Amber/Gold Light Flares */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 1200,
          height: 1300,
          background:
            "radial-gradient(circle at 75% 50%, rgba(245, 158, 11, 0.4) 0%, rgba(217, 119, 6, 0.25) 30%, rgba(3, 7, 18, 0.1) 65%, transparent 80%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: 1100,
          height: 800,
          background:
            "radial-gradient(ellipse at 35% 45%, rgba(217, 119, 6, 0.3) 0%, rgba(245, 158, 11, 0.15) 45%, transparent 75%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* 2. Electric Amber/Gold Rounded Border */}
      <div
        style={{
          position: "absolute",
          inset: 22,
          border: "12px solid #D97706",
          borderRadius: 36,
          boxShadow:
            "0 0 65px rgba(217, 119, 6, 0.9), inset 0 0 35px rgba(245, 158, 11, 0.4)",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />

      {/* 3. Hero Content */}
      <div
        style={{
          position: "absolute",
          top: 105,
          left: 105,
          zIndex: 30,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Brand Row: Authentic Anthropic Logo + Verified */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              background: "rgba(15, 23, 42, 0.85)",
              border: "1px solid rgba(245, 158, 11, 0.4)",
              borderRadius: 20,
              padding: "10px 24px",
              boxShadow: "0 0 25px rgba(217, 119, 6, 0.4)",
            }}
          >
            <AnthropicLogo size={44} color="#D97706" />
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 34,
                fontWeight: 900,
                letterSpacing: "0.08em",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              ANTHROPIC
            </span>
          </div>

          <div
            style={{
              background: "rgba(220, 38, 38, 0.2)",
              border: "1px solid #EF4444",
              borderRadius: 16,
              padding: "10px 24px",
              color: "#FCA5A5",
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "0.1em",
            }}
          >
            5.2 SKIPPED
          </div>
        </div>

        {/* 2-Tier Hero Headline */}
        <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 900,
              color: "#F59E0B",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontFamily: "'Montserrat', sans-serif",
              textShadow:
                "0 0 35px rgba(245, 158, 11, 0.95), 0 0 75px rgba(217, 119, 6, 0.75)",
              lineHeight: 1,
            }}
          >
            LEAKED CHECKPOINT
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 160,
              fontWeight: 950,
              letterSpacing: "-0.035em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              fontFamily: "'Montserrat', 'Inter', system-ui, sans-serif",
              lineHeight: 0.88,
              filter:
                "drop-shadow(0 0 35px rgba(255, 255, 255, 0.98)) drop-shadow(0 0 80px rgba(217, 119, 6, 0.95)) drop-shadow(0 0 140px rgba(245, 158, 11, 0.65))",
            }}
          >
            OPUS 5.5
          </h1>
        </div>

        {/* Lower Banner */}
        <div
          style={{
            marginTop: 35,
            display: "flex",
            alignItems: "center",
            gap: 20,
            background: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: 20,
            padding: "16px 36px",
            width: "fit-content",
          }}
        >
          <div style={{ color: "#34D399", fontSize: 26, fontWeight: 800 }}>-60% CACHE CUT</div>
          <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.2)" }} />
          <div style={{ color: "#FDE68A", fontSize: 26, fontWeight: 800 }}>DROPPING TUESDAY</div>
          <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.2)" }} />
          <div style={{ color: "#38BDF8", fontSize: 26, fontWeight: 800 }}>CODENAME: WAFER-EAP</div>
        </div>
      </div>

      {/* 4. Right-side Visual Evidence Card: Actual 3D Synthesis Frame */}
      <div
        style={{
          position: "absolute",
          top: 110,
          right: 80,
          width: 780,
          height: 860,
          zIndex: 35,
          borderRadius: 28,
          overflow: "hidden",
          border: "2px solid rgba(245, 158, 11, 0.6)",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(217, 119, 6, 0.4)",
          background: "rgba(10, 15, 29, 0.95)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "18px 24px",
            background: "rgba(15, 23, 42, 0.98)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#EF4444" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#F59E0B" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#10B981" }} />
          </div>
          <div style={{ color: "#FDE68A", fontSize: 14, fontWeight: 800, fontFamily: "monospace", letterSpacing: "0.08em" }}>
            EVIDENCE // WAYMO I-PACE 3D SYNTHESIS
          </div>
          <div style={{ background: "rgba(245, 158, 11, 0.2)", color: "#F59E0B", padding: "4px 12px", borderRadius: 8, fontSize: 13, fontWeight: 800 }}>
            REAL BENCHMARK
          </div>
        </div>

        <div style={{ flex: 1, position: "relative", overflow: "hidden", background: "#f8f9fc", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={staticFile("evidence/waymo_3d_frame.png")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Waymo 3D Output"
          />
        </div>

        <div
          style={{
            padding: "16px 24px",
            background: "rgba(15, 23, 42, 0.98)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ color: "#94A3B8", fontSize: 14, fontFamily: "monospace" }}>
            RENDERED VIA CLAUDE CODE IN BROWSER
          </div>
          <div style={{ color: "#34D399", fontSize: 14, fontWeight: 800 }}>
            4,000+ LINES THREE.JS
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
