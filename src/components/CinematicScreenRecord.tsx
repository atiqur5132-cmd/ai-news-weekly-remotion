import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

interface CinematicScreenRecordProps {
  mediaSrc: string;
  sourceUrl: string;
  durationInFrames: number;
  brandLogo?: React.ReactNode;
  brandName?: string;
  badgeColor?: string;
  headlineBadge?: string;
}

export const CinematicScreenRecord: React.FC<CinematicScreenRecordProps> = ({
  mediaSrc,
  sourceUrl,
  durationInFrames,
  brandLogo,
  brandName,
  badgeColor = "#38BDF8",
  headlineBadge,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.8 } });
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  const swayX = Math.sin(frame / 45) * 2;
  const swayY = Math.cos(frame / 50) * 1.5;

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          width: 1700,
          height: 940,
          opacity,
          transform: `scale(${interpolate(entrance, [0, 1], [0.94, 1])}) translate3d(${swayX}px, ${swayY}px, 0px)`,
          background: "rgba(9, 14, 26, 0.96)",
          border: `1.5px solid ${badgeColor}44`,
          borderRadius: 22,
          boxShadow: `0 36px 90px -18px rgba(0, 0, 0, 0.95), 0 0 45px ${badgeColor}18`,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Browser Chrome Header with Brand Identity */}
        <div
          style={{
            height: 56,
            background: "rgba(15, 23, 42, 0.98)",
            borderBottom: "1px solid rgba(51, 65, 85, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
          }}
        >
          {/* Mac window dots + Brand Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#EF4444" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F59E0B" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981" }} />
            </div>

            {brandLogo && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 12, borderLeft: "1px solid rgba(255,255,255,0.15)" }}>
                {brandLogo}
                {brandName && (
                  <span style={{ fontSize: 13, fontWeight: 800, color: badgeColor, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {brandName}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Centered Secure URL Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(2, 6, 23, 0.85)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              borderRadius: 20,
              padding: "6px 24px",
              fontSize: 14,
              color: "#94A3B8",
              maxWidth: 820,
            }}
          >
            <span style={{ color: "#10B981", fontSize: 13 }}>🔒</span>
            <span style={{ color: "#38BDF8", fontWeight: 600 }}>{sourceUrl}</span>
          </div>

          {/* Headline Badge */}
          <div style={{ display: "flex", justifyContent: "flex-end", minWidth: 160 }}>
            {headlineBadge && (
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: 12,
                  background: `${badgeColor}22`,
                  border: `1px solid ${badgeColor}66`,
                  color: badgeColor,
                }}
              >
                {headlineBadge}
              </span>
            )}
          </div>
        </div>

        {/* Viewport: 100% UNCLIPPED, Natural Aspect Ratio, Centered */}
        <div
          style={{
            flex: 1,
            position: "relative",
            background: "#020617",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            overflow: "hidden",
          }}
        >
          <Img
            src={staticFile(mediaSrc)}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: 12,
              boxShadow: "0 10px 40px rgba(0,0,0,0.8)",
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
