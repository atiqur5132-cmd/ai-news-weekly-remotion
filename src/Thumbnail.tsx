import React, { useMemo } from "react";
import { AbsoluteFill } from "remotion";
import { QwenLogo, MoonshotKimiLogo, XLogo } from "./components/RealLogos";

export const Thumbnail: React.FC = () => {
  const dots = useMemo(() => {
    const rows = 30;
    const cols = 52;
    const points: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      color: string;
    }> = [];

    const horizonY = 320;
    const bottomY = 1140;
    const centerX = 1920 * 0.52;

    for (let r = 0; r < rows; r++) {
      const t = (r + 1) / rows;
      const scale = 0.2 + 0.8 * Math.pow(t, 1.3);
      const gridWidth = 1920 * 1.8 * scale;
      const baseY = horizonY + (bottomY - horizonY) * Math.pow(t, 1.4);

      for (let c = 0; c < cols; c++) {
        const normX = c / (cols - 1) - 0.5;
        const x = centerX + normX * gridWidth;

        const wave =
          Math.sin(c * 0.24 + r * 0.26) * 46 * Math.pow(t, 0.95) +
          Math.cos(c * 0.16 - r * 0.18) * 26 * Math.pow(t, 1.15);

        const y = baseY + wave;
        const radius = 1.6 + 3.8 * Math.pow(t, 1.6);
        const opacity = Math.min(
          1,
          Math.max(0.12, (0.2 + 0.8 * Math.pow(t, 0.95)) * (0.8 + 0.2 * Math.sin(c * 0.35 + r * 0.25)))
        );

        const isCrest = wave > 12;
        // Deep cyber purple & electric cyan palette
        const color =
          t > 0.72 && isCrest
            ? "#38BDF8" // Electric Sky Blue
            : t > 0.5
            ? "#818CF8" // Radiant Indigo
            : t > 0.3
            ? "#A855F7" // Electric Purple
            : "#6366F1"; // Deep Indigo

        if (x >= -80 && x <= 2000 && y >= 240 && y <= 1160) {
          points.push({ x, y, radius, opacity, color });
        }
      }
    }
    return points;
  }, []);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030611",
        overflow: "hidden",
        fontFamily: "'Montserrat', 'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900;950&family=Inter:wght@700;800;900&family=JetBrains+Mono:wght@700;800&display=swap');
      `}</style>

      {/* Dual Radial Flares (Cyan on left, Purple on right) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 20% 25%, rgba(99, 102, 241, 0.45) 0%, rgba(147, 51, 234, 0.2) 45%, transparent 75%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 55% at 85% 75%, rgba(14, 165, 233, 0.35) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 80%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* 3D Undulating Perspective Dot Wave Canvas */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: 1920,
          height: 1080,
          zIndex: 5,
        }}
      >
        <defs>
          <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={dot.radius}
            fill={dot.color}
            opacity={dot.opacity}
            filter={dot.radius > 3.2 ? "url(#dotGlow)" : undefined}
          />
        ))}
      </svg>

      {/* Neon Cyber Indigo Glowing Rounded Border Frame */}
      <div
        style={{
          position: "absolute",
          inset: 22,
          border: "12px solid #6366F1",
          borderRadius: 36,
          boxShadow:
            "0 0 60px rgba(99, 102, 241, 0.8), inset 0 0 35px rgba(129, 140, 248, 0.4)",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />

      {/* Main Content Area */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 95,
          right: 95,
          bottom: 90,
          zIndex: 30,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Column: Headlines & Logos */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 1100 }}>
          {/* Brand Row: Qwen + Kimi Official Badges */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* Qwen Tile */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                backgroundColor: "rgba(15, 23, 42, 0.88)",
                padding: "10px 22px",
                borderRadius: 20,
                border: "2px solid rgba(111, 105, 247, 0.7)",
                boxShadow: "0 0 25px rgba(111, 105, 247, 0.45)",
              }}
            >
              <QwenLogo size={46} />
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                  fontWeight: 900,
                  letterSpacing: "0.06em",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                QWEN 3.8
              </span>
            </div>

            {/* VS Medallion */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                backgroundColor: "rgba(30, 41, 59, 0.95)",
                border: "2px solid #38BDF8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#38BDF8",
                fontSize: 18,
                fontWeight: 950,
                boxShadow: "0 0 20px rgba(56, 189, 248, 0.6)",
              }}
            >
              &
            </div>

            {/* Kimi Tile */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                backgroundColor: "rgba(15, 23, 42, 0.88)",
                padding: "10px 22px",
                borderRadius: 20,
                border: "2px solid rgba(23, 131, 255, 0.7)",
                boxShadow: "0 0 25px rgba(23, 131, 255, 0.45)",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: "#0F172A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MoonshotKimiLogo size={36} />
              </div>
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                  fontWeight: 900,
                  letterSpacing: "0.06em",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                KIMI K3
              </span>
            </div>

            {/* Verified Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "rgba(14, 165, 233, 0.2)",
                padding: "8px 16px",
                borderRadius: 16,
                border: "1px solid rgba(14, 165, 233, 0.5)",
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  backgroundColor: "#0095F6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12.5L9.5 17L19 7.5"
                    stroke="#FFFFFF"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span style={{ color: "#38BDF8", fontSize: 18, fontWeight: 800 }}>
                VERIFIED WEIGHTS
              </span>
            </div>
          </div>

          {/* Kicker Tag */}
          <div
            style={{
              marginTop: 10,
              fontSize: 48,
              fontWeight: 900,
              color: "#FBBF24",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontFamily: "'Montserrat', sans-serif",
              textShadow: "0 0 25px rgba(251, 191, 36, 0.8)",
            }}
          >
            2.8T PARAMS · OPEN WEIGHTS
          </div>

          {/* Massive Headline: QWEN & KIMI */}
          <h1
            style={{
              margin: 0,
              fontSize: 148,
              fontWeight: 950,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              fontFamily: "'Montserrat', 'Inter', sans-serif",
              lineHeight: 0.9,
              filter:
                "drop-shadow(0 0 35px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 70px rgba(99, 102, 241, 0.8))",
            }}
          >
            QWEN & KIMI
          </h1>

          {/* Subtitle: CRUSH CLOSED AI */}
          <div
            style={{
              fontSize: 106,
              fontWeight: 950,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#EF4444",
              fontFamily: "'Montserrat', 'Inter', sans-serif",
              lineHeight: 0.92,
              filter:
                "drop-shadow(0 0 30px rgba(239, 68, 68, 0.95)) drop-shadow(0 0 60px rgba(220, 38, 38, 0.7))",
            }}
          >
            CRUSH CLOSED AI
          </div>

          {/* Telemetry Chips */}
          <div style={{ display: "flex", gap: 14, marginTop: 14, flexWrap: "wrap" }}>
            <div
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.9)",
                border: "1.5px solid #38BDF8",
                padding: "10px 20px",
                borderRadius: 14,
                color: "#F8FAFC",
                fontSize: 22,
                fontWeight: 800,
                boxShadow: "0 0 15px rgba(56, 189, 248, 0.35)",
              }}
            >
              ⚡ 896 SPARSE EXPERTS
            </div>
            <div
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.9)",
                border: "1.5px solid #A855F7",
                padding: "10px 20px",
                borderRadius: 14,
                color: "#F8FAFC",
                fontSize: 22,
                fontWeight: 800,
                boxShadow: "0 0 15px rgba(168, 85, 247, 0.35)",
              }}
            >
              🏆 #1 CODE ARENA (1679 ELO)
            </div>
            <div
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.9)",
                border: "1.5px solid #22C55E",
                padding: "10px 20px",
                borderRadius: 14,
                color: "#F8FAFC",
                fontSize: 22,
                fontWeight: 800,
                boxShadow: "0 0 15px rgba(34, 197, 94, 0.35)",
              }}
            >
              🔓 100% APACHE 2.0
            </div>
          </div>
        </div>

        {/* Right Column: High-Impact Visual Dossier Badge */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
            width: 540,
          }}
        >
          {/* Big Telemetry Comparison Card */}
          <div
            style={{
              width: "100%",
              backgroundColor: "rgba(10, 15, 30, 0.92)",
              border: "2px solid rgba(56, 189, 248, 0.6)",
              borderRadius: 28,
              padding: "28px",
              boxShadow:
                "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.35)",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: 14,
              }}
            >
              <span
                style={{
                  color: "#38BDF8",
                  fontSize: 20,
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                }}
              >
                VERCEL AI GATEWAY
              </span>
              <span
                style={{
                  backgroundColor: "rgba(34, 197, 94, 0.2)",
                  color: "#4ADE80",
                  padding: "4px 12px",
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: 800,
                }}
              >
                RECORD DAY
              </span>
            </div>

            {/* Giant Stat */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
              <span
                style={{
                  fontSize: 84,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  fontFamily: "'JetBrains Mono', monospace",
                  textShadow: "0 0 30px rgba(56, 189, 248, 0.8)",
                }}
              >
                78.4%
              </span>
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#94A3B8",
                  lineHeight: 1.2,
                }}
              >
                OPEN WEIGHT<br />TOKEN VOLUME
              </span>
            </div>

            {/* Spend Ranking Notice */}
            <div
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.8)",
                borderRadius: 16,
                padding: "14px 18px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div style={{ color: "#FBBF24", fontSize: 17, fontWeight: 800 }}>
                ⚡ COMBINED SPEND SURPASSES OPENAI (#2)
              </div>
              <div style={{ color: "#94A3B8", fontSize: 15, fontWeight: 600 }}>
                Moonshot AI (#3) + DeepSeek (#4) exceed closed frontier spend.
              </div>
            </div>

            {/* Apple Intelligence Pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "rgba(15, 23, 42, 0.7)",
                borderRadius: 14,
                padding: "12px 16px",
                border: "1px solid rgba(168, 85, 247, 0.4)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>🍏</span>
                <span style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 800 }}>
                  APPLE INTELLIGENCE
                </span>
              </div>
              <span style={{ color: "#A855F7", fontSize: 15, fontWeight: 900 }}>
                QWEN SELECTED
              </span>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
