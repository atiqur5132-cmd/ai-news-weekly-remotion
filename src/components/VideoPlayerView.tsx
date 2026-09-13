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

  return (
    <AbsoluteFill style={{ backgroundColor: "#000000", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
        <Video
          src={videoSrc.startsWith('http') ? videoSrc : staticFile(videoSrc)}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          muted={true}
          volume={0}
        />

        {/* Video Scrubber & Controls Bar (Native UI look) */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 44,
            background: "linear-gradient(transparent, rgba(0, 0, 0, 0.85))",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            gap: 16,
          }}
        >
          {/* Play/Pause icon */}
          <span style={{ color: "#FFFFFF", fontSize: 14 }}>▶</span>

          {/* Scrubber track */}
          <div style={{ flex: 1, height: 4, backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: 2, position: "relative" }}>
            <div style={{ width: `${progress}%`, height: "100%", backgroundColor: "#38BDF8", borderRadius: 2 }} />
          </div>

          <span style={{ color: "#94A3B8", fontSize: 12, fontWeight: 600 }}>{title}</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
