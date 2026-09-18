import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame, interpolate } from "remotion";

interface DocumentaryCardViewProps {
  cardImage: string; // e.g. "evidence/anthropic_fable52_brawlstars_card.png"
  titleBadge?: string;
  sourceHandle?: string;
  highlightYPercent?: number; // 0-100% position of highlighter
  highlightHeightPercent?: number;
  highlightStartFrame?: number;
  highlightDurationFrames?: number;
}

export const DocumentaryCardView: React.FC<DocumentaryCardViewProps> = ({
  cardImage,
  titleBadge = "VERIFIED X TRANSMISSION",
  sourceHandle = "@x",
  highlightYPercent,
  highlightHeightPercent = 8,
  highlightStartFrame = 15,
  highlightDurationFrames = 30,
}) => {
  const frame = useCurrentFrame();

  const highlightProgress = interpolate(
    frame - highlightStartFrame,
    [0, highlightDurationFrames],
    [0, 100],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* 1. Subtle Dark Ambient Radial Glow */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 900,
          background: "radial-gradient(circle, rgba(30, 58, 138, 0.18) 0%, rgba(3, 7, 18, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* 2. Flat Native 1080p Documentary Dossier Container (STRICT NO 2.5D, NO PERSPECTIVE TILT) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          maxHeight: 960,
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          backgroundColor: "#000000",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 25px rgba(56, 189, 248, 0.08)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Sleek macOS Documentary Header */}
        <div
          style={{
            height: 44,
            backgroundColor: "#0B0F19",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 18px",
          }}
        >
          {/* Traffic dots */}
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#EF4444" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#10B981" }} />
          </div>

          {/* Source pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              padding: "4px 14px",
              borderRadius: 20,
              border: "1px solid rgba(56, 189, 248, 0.25)",
            }}
          >
            <span style={{ color: "#38BDF8", fontSize: 11, fontWeight: 800, letterSpacing: "0.08em" }}>
              {titleBadge}
            </span>
            <span style={{ color: "#64748B", fontSize: 11 }}>•</span>
            <span style={{ color: "#94A3B8", fontSize: 11, fontFamily: "monospace" }}>
              {sourceHandle}
            </span>
          </div>

          <div style={{ width: 50 }} />
        </div>

        {/* Clean Flat Tweet Image Card */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Img
            src={staticFile(cardImage)}
            style={{
              maxWidth: "100%",
              maxHeight: 880,
              objectFit: "contain",
              display: "block",
            }}
          />

          {/* Dynamic Golden Digital Highlighter Sweep */}
          {highlightYPercent !== undefined && highlightProgress > 0 && (
            <div
              style={{
                position: "absolute",
                left: "4%",
                top: `${highlightYPercent}%`,
                width: `${Math.min(92, 92 * (highlightProgress / 100))}%`,
                height: `${highlightHeightPercent}%`,
                backgroundColor: "rgba(245, 158, 11, 0.35)",
                border: "1px solid rgba(245, 158, 11, 0.8)",
                borderRadius: 6,
                mixBlendMode: "screen",
                boxShadow: "0 0 15px rgba(245, 158, 11, 0.4)",
                pointerEvents: "none",
              }}
            />
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
