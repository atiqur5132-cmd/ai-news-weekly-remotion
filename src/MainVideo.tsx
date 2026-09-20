import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import {
  Act1_ColdOpenHook,
  Act2_SkipMystery,
  Act3_WaymoTeardown,
  Act4_VillaShowcase,
  Act5_DebunkControversy,
  Act6_PricingAndWar,
} from "./scenes/Opus55Scenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#02040A" }}>
      {/* Broadcast Mastered Brian Multilingual Voiceover Audio (320.88s / 9,626 frames) */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Frame-Accurate Whisper-Synchronized 6-Act Sequence (Total: 9,626 frames / 5m 20.88s) */}
      <Series>
        {/* Act 1: Cold Open Paradox & Death of Point Releases (1586 frames / 52.87s | F0 -> F1586) */}
        <Series.Sequence durationInFrames={1586}>
          <Act1_ColdOpenHook />
        </Series.Sequence>

        {/* Act 2: Paper Trail & Codename Wafer-EAP (2290 frames / 76.33s | F1586 -> F3876) */}
        <Series.Sequence durationInFrames={2290}>
          <Act2_SkipMystery />
        </Series.Sequence>

        {/* Act 3: Real Evidence Waymo 3D Vehicle & Financial Teardown (2221 frames / 74.03s | F3876 -> F6097) */}
        <Series.Sequence durationInFrames={2221}>
          <Act3_WaymoTeardown />
        </Series.Sequence>

        {/* Act 4: 3D Villa & Procedural Scene Stability (781 frames / 26.03s | F6097 -> F6878) */}
        <Series.Sequence durationInFrames={781}>
          <Act4_VillaShowcase />
        </Series.Sequence>

        {/* Act 5: Fake Output Scandal & Forensic Audit (1235 frames / 41.17s | F6878 -> F8113) */}
        <Series.Sequence durationInFrames={1235}>
          <Act5_DebunkControversy />
        </Series.Sequence>

        {/* Act 6: Economic Weapon & Tuesday Frontier War (1513 frames / 50.43s | F8113 -> F9626) */}
        <Series.Sequence durationInFrames={1513}>
          <Act6_PricingAndWar />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
