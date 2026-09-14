import React, { useMemo } from "react";
import { AbsoluteFill } from "remotion";
import { GoogleOfficialLogo, AnthropicLogo, OpenAILogo } from "./components/RealLogos";

export const Thumbnail: React.FC = () => {
  // Generate 3D perspective undulating dot grid wave (matching reference)
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
      // Normalized depth t: 0 is far/horizon, 1 is near/bottom
      const t = (r + 1) / rows;
      // Perspective compression
      const scale = 0.28 + 0.72 * Math.pow(t, 1.4);
      const gridWidth = 1920 * 1.65 * scale;
      const baseY = horizonY + (bottomY - horizonY) * Math.pow(t, 1.5);

      for (let c = 0; c < cols; c++) {
        const normX = c / (cols - 1) - 0.5;
        const x = centerX + normX * gridWidth;

        // Undulating 3D wave calculation (hills & valleys sweeping across)
        const wave =
          Math.sin(c * 0.22 + r * 0.32) * 38 * Math.pow(t, 0.9) +
          Math.cos(c * 0.12 - r * 0.18) * 26 * Math.pow(t, 1.1);

        const y = baseY + wave;

        // Dot radius & brightness scale with proximity (t)
        const radius = 1.8 + 3.4 * Math.pow(t, 1.5);
        const opacity = Math.min(
          1,
          Math.max(0.15, (0.25 + 0.75 * Math.pow(t, 0.9)) * (0.8 + 0.2 * Math.sin(c * 0.3 + r * 0.2)))
        );

        // Gradient from deeper cyan/blue at distance to electric cyan/white in foreground crests
        const isCrest = wave > 15;
        const color =
          t > 0.75 && isCrest
            ? "#A5F3FC"
            : t > 0.5
            ? "#38BDF8"
            : "#0284C7";

        // Only include points within screen bounds
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
      {/* Import High-Impact Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900;950&family=Inter:wght@700;800;900&display=swap');
      `}</style>

      {/* Dark Ambient & Diagonal Atmospheric Red/Blue Streaks (top-right like reference) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 90% 60% at 75% 20%, rgba(225, 29, 72, 0.16) 0%, transparent 60%), radial-gradient(circle at 35% 85%, rgba(14, 165, 233, 0.12) 0%, transparent 55%)",
          zIndex: 1,
        }}
      />

      {/* High-Tech Diagonal Streak from Top-Right */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 900,
          height: 500,
          background: "linear-gradient(135deg, rgba(239, 68, 68, 0.18) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 75%)",
          transform: "rotate(-18deg)",
          filter: "blur(40px)",
          zIndex: 2,
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

      {/* Electric Rounded Border Frame (Exact 1:1 match with reference) */}
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

      {/* Main Content Area (Left-Aligned, Clean 2-Tier Typography) */}
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
        {/* Top-Left Verified Brand Badge: [Logo] [BRAND NAME] [✓] */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          {/* Authentic Anthropic Serif & OpenAI Icons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.8))",
            }}
          >
            <AnthropicLogo size={42} />
            <span style={{ fontSize: 24, color: "#94A3B8" }}>vs</span>
            <OpenAILogo size={42} color="#10A37F" />
          </div>

          {/* Brand Name */}
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
            ANTHROPIC • OPENAI
          </span>

          {/* Authentic Circular Blue Verified Checkmark Badge */}
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
              <path
                d="M5 12.5L9.5 17L19 7.5"
                stroke="#FFFFFF"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* 2-Tier Hero Headline (Maximum Hype) */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {/* Tier 1: Sub-Hook in Electric Cyan */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: "#F59E0B",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "'Montserrat', sans-serif",
              textShadow: "0 0 25px rgba(245, 158, 11, 0.8), 0 0 50px rgba(245, 158, 11, 0.4)",
              lineHeight: 1,
            }}
          >
            OPUS 5.2 LEAK
          </div>

          {/* Tier 2: Giant White Hero Title with High-Energy Glow Bloom */}
          <h1
            style={{
              margin: 0,
              fontSize: 140,
              fontWeight: 950,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              fontFamily: "'Montserrat', 'Inter', system-ui, sans-serif",
              lineHeight: 0.95,
              filter:
                "drop-shadow(0 0 20px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 50px rgba(56, 189, 248, 0.7)) drop-shadow(0 0 90px rgba(0, 112, 243, 0.45))",
            }}
          >
            GPT-6 SOL
          </h1>
        </div>
      </div>
    </AbsoluteFill>
  );
};
