import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import {
  Scene1_ColdOpenHook,
  Scene2_SteamGameRebuild,
  Scene3_MarioKartSingleFile,
  Scene4_SamAltmanAgentArmy,
  Scene5_DeepSeekHarnessThreat,
  Scene6_DeveloperRealityOutro,
} from "./scenes/AstraExplainerScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#06080E" }}>
      {/* Master 4m 12s Brian Multilingual Voiceover Audio */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Frame-Accurate Zero-Overlap Remotion Series Timeline (Total: 7,558 frames @ 30 FPS / 251.94s) */}
      <Series>
        {/* Scene 1: Cold Open Hook & Disruptive Revelations (0s -> 42.6s) */}
        <Series.Sequence durationInFrames={1280}>
          <Scene1_ColdOpenHook durationInFrames={1280} />
        </Series.Sequence>

        {/* Scene 2: Steam Game Reconstruction Deep Dive (42.6s -> 94.0s) */}
        <Series.Sequence durationInFrames={1540}>
          <Scene2_SteamGameRebuild durationInFrames={1540} />
        </Series.Sequence>

        {/* Scene 3: Mario Kart Wii Single-File 3D Engine (94.0s -> 129.3s) */}
        <Series.Sequence durationInFrames={1060}>
          <Scene3_MarioKartSingleFile durationInFrames={1060} />
        </Series.Sequence>

        {/* Scene 4: Sam Altman's Overnight Agent Army & GPT-6 Sol Leak (129.3s -> 174.3s) */}
        <Series.Sequence durationInFrames={1350}>
          <Scene4_SamAltmanAgentArmy durationInFrames={1350} />
        </Series.Sequence>

        {/* Scene 5: DeepSeek-Harness & The Open-Source Moat (174.3s -> 222.0s) */}
        <Series.Sequence durationInFrames={1430}>
          <Scene5_DeepSeekHarnessThreat durationInFrames={1430} />
        </Series.Sequence>

        {/* Scene 6: The 2026 Developer Reality & Outro (222.0s -> 251.94s) */}
        <Series.Sequence durationInFrames={898}>
          <Scene6_DeveloperRealityOutro durationInFrames={898} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
