import React, { useMemo } from "react";
import { AbsoluteFill } from "remotion";
import { DeepSeekLogo, OpenAILogo } from "./components/RealLogos";

export const Thumbnail: React.FC = () => {
  // Generate 3D perspective undulating dot grid wave
  const dots = useMemo(() => {
    const rows = 28;
    const cols = 52;
    const points: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      color: string;
    }> = [];

    const horizonY = 380;
    const bottomY = 1100;
    const centerX = 1920 * 0.52;

    for (let r = 0; r < rows; r++) {
      const t = (r + 1) / rows;
      const scale = 0.28 + 0.72 * Math.pow(t, 1.4);
      const gridWidth = 1920 * 1.65 * scale;
      const baseY = horizonY + (bottomY - horizonY) * Math.pow(t, 1.5);

      for (let c = 0; c < cols; c++) {
        const normX = c / (cols - 1) - 0.5;
        const x = centerX + normX * gridWidth;

        const wave =
          Math.sin(c * 0.22 + r * 0.32) * 38 * Math.pow(t, 0.9) +
          Math.cos(c * 0.12 - r * 0.18) * 26 * Math.pow(t, 1.1);

        const y = baseY + wave;
        const radius = 1.8 + 3.4 * Math.pow(t, 1.5);
        const opacity = Math.min(
          1,
          Math.max(0.15, (0.25 + 0.75 * Math.pow(t, 0.9)) * (0.8 + 0.2 * Math.sin(c * 0.3 + r * 0.2)))
        );

        const isCrest = wave > 15;
        const color =
          t > 0.75 && isCrest
            ? "#A5F3FC"
            : t > 0.5
            ? "#38BDF8"
            : "#0284C7";

        if (x >= -40 && x <= 1960 && y >= 320 && y <= 1120) {
          points.push({ x, y, radius, opacity, color });
        }
      }
    }
    return points;
  }, []);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#02040A",
        overflow: "hidden",
        fontFamily: "'Montserrat', 'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900;950&family=Inter:wght@700;800;900&display=swap');
      `}</style>

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 90% 60% at 75% 20%, rgba(236, 72, 153, 0.18) 0%, transparent 60%), radial-gradient(circle at 35% 85%, rgba(14, 165, 233, 0.15) 0%, transparent 55%)",
          zIndex: 1,
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
            <feGaussianBlur stdDeviation="3" result="blur" />
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

      {/* Electric Blue Rounded Border Frame */}
      <div
        style={{
          position: "absolute",
          inset: 22,
          border: "14px solid #0070F3",
          borderRadius: 34,
          boxShadow:
            "0 0 45px rgba(0, 112, 243, 0.65), inset 0 0 25px rgba(0, 112, 243, 0.4)",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />

      {/* Content Area */}
      <div
        style={{
          position: "absolute",
          top: 105,
          left: 110,
          zIndex: 30,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Brand Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.8))" }}>
            <OpenAILogo size={46} color="#10A37F" />
            <span style={{ fontSize: 24, color: "#94A3B8" }}>+</span>
            <DeepSeekLogo size={46} color="#4D6BFE" />
          </div>

          <span
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            OPENAI • DEEPSEEK
          </span>

          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "#0095F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 14px rgba(0, 149, 246, 0.8)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12.5L9.5 17L19 7.5" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* 2-Tier Hero Headline */}
        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: "#38BDF8",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "'Montserrat', sans-serif",
              textShadow: "0 0 25px rgba(56, 189, 248, 0.8), 0 0 50px rgba(56, 189, 248, 0.4)",
              lineHeight: 1,
            }}
          >
            GPT-6 ASTRA REVEALED
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 135,
              fontWeight: 950,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              fontFamily: "'Montserrat', 'Inter', system-ui, sans-serif",
              lineHeight: 0.95,
              filter:
                "drop-shadow(0 0 20px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 50px rgba(236, 72, 153, 0.7)) drop-shadow(0 0 90px rgba(0, 112, 243, 0.45))",
            }}
          >
            SOL LEAKED!
          </h1>
        </div>
      </div>
    </AbsoluteFill>
  );
};
