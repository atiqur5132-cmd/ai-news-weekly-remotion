import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { QwenKimiActs } from "./scenes/QwenKimiActs";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#02040A" }}>
      {/* Broadcast Mastered Brian Multilingual Voiceover Audio (374.26s / 11,228 frames) */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Frame-Accurate Whisper-Synchronized 6-Act + Mid-Roll CTA Sequence */}
      <QwenKimiActs />
    </AbsoluteFill>
  );
};
