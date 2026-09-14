import React from "react";
import { AbsoluteFill, Video, staticFile, useCurrentFrame, interpolate } from "remotion";

interface VideoPlayerViewProps {
  videoSrc: string;
  title?: string;
  durationInFrames: number;
}

export const VideoPlayerView: React.FC<VideoPlayerViewProps> = ({
  videoSrc,
  title = "DEMO RECORDING",
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fullSrc = videoSrc.startsWith("http") ? videoSrc : staticFile(videoSrc);

  return (
    <AbsoluteFill style={{ backgroundColor: "#02040A", justifyContent: "center", alignItems: "center" }}>
      {/* 1. Ambient Blurred Video Light Canvas (Eliminates all harsh black bars while keeping 100% aspect ratio) */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <Video
          src={fullSrc}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(45px) brightness(0.25) saturate(1.5)",
            transform: "scale(1.2)",
          }}
          muted={true}
          volume={0}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(2, 4, 10, 0.4)" }} />
      </div>

      {/* 2. Hero Native Video Container: 100% UNCLIPPED & UNTOUCHED */}
      <div
        style={{
          width: 1760,
          height: 960,
          position: "relative",
          zIndex: 2,
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(56, 189, 248, 0.3)",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.95), 0 0 35px rgba(56, 189, 248, 0.15)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(9, 14, 26, 0.8)",
        }}
      >
        <Video
          src={fullSrc}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
          }}
          muted={true}
          volume={0}
        />

        {/* Clean Scrubber & Info Pill at the Bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 48,
            background: "linear-gradient(transparent, rgba(2, 6, 23, 0.95))",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            gap: 16,
            zIndex: 10,
          }}
        >
          {/* Play status */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#38BDF8", fontSize: 13 }}>▶</span>
            <span style={{ color: "#10B981", fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
              LIVE PROOF
            </span>
          </div>

          {/* Progress bar */}
          <div style={{ flex: 1, height: 4, backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: 2, position: "relative" }}>
            <div style={{ width: `${progress}%`, height: "100%", backgroundColor: "#38BDF8", borderRadius: 2 }} />
          </div>

          {/* Title label */}
          <span style={{ color: "#E2E8F0", fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {title}
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
