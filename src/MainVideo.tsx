import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import {
  Scene1_DocColdOpen,
  Scene2_DocInsideLeaks,
  Scene3_DocBenchmarks,
  Scene4_DocGcpQuota,
  Scene5_DocAntigravity,
  Scene6_DocFinale,
} from "./scenes/Gemini4DocScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#060812" }}>
      {/* Master 5m 02s Brian Multilingual Voiceover Audio */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Frame-Accurate Zero-Overlap Remotion Series Timeline (Total: 9,062 frames @ 30 FPS / 302.08s) */}
      <Series>
        {/* Scene 1: Cold Open Hook & Autonomous Supremacy (0.00s -> 46.38s) */}
        <Series.Sequence durationInFrames={1400}>
          <Scene1_DocColdOpen durationInFrames={1400} />
        </Series.Sequence>

        {/* Scene 2: Inside Leaks & Forensic Timeline (46.38s -> 90.22s) */}
        <Series.Sequence durationInFrames={1320}>
          <Scene2_DocInsideLeaks durationInFrames={1320} />
        </Series.Sequence>

        {/* Scene 3: Benchmark Forensics: Terminal-Bench & Automation (90.22s -> 140.86s) */}
        <Series.Sequence durationInFrames={1520}>
          <Scene3_DocBenchmarks durationInFrames={1520} />
        </Series.Sequence>

        {/* Scene 4: Breaking Today: GCP Quotas Leaks & Live Audio (140.86s -> 190.94s) */}
        <Series.Sequence durationInFrames={1500}>
          <Scene4_DocGcpQuota durationInFrames={1500} />
        </Series.Sequence>

        {/* Scene 5: Antigravity Traffic Surge & Companion Previews (190.94s -> 248.74s) */}
        <Series.Sequence durationInFrames={1720}>
          <Scene5_DocAntigravity durationInFrames={1720} />
        </Series.Sequence>

        {/* Scene 6: DeepMind Reorganization & October Showdown (248.74s -> 302.08s) */}
        <Series.Sequence durationInFrames={1602}>
          <Scene6_DocFinale durationInFrames={1602} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
