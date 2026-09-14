import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import {
  SceneColdOpenHook,
  SceneThreeColumnTruce,
  SceneLeakedPipelines,
  SceneDarioEssayInterview,
  SceneOpus52LeakDeepDive,
  SceneGpt6SolDeathStar,
  SceneAutonomousSynthesisRoadmap,
  SceneOpenWeightThreat,
  SceneDeepSeekCode20,
  SceneGeopoliticalSuicide,
  SceneFinalTakeaway,
} from "./scenes/AiSlowdownScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#06080E" }}>
      {/* Master 5m 26s Voiceover Audio */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Frame-Accurate World of AI Documentary Series Timeline (Total: 9,791 frames @ 30 FPS / 326.37s) */}
      <Series>
        {/* 1. Cold Open: Split Screen Comparison + Bongo Cat + Anime VFX (0s - 12.4s) */}
        <Series.Sequence durationInFrames={372}>
          <SceneColdOpenHook durationInFrames={372} />
        </Series.Sequence>

        {/* 2. 3-Column Reaction Board: Dario, Sam, Elon (12.4s - 32.4s) */}
        <Series.Sequence durationInFrames={600}>
          <SceneThreeColumnTruce durationInFrames={600} />
        </Series.Sequence>

        {/* 3. Leaked Pipelines: Rajath Tweet & claude-opus-5-2 (32.4s - 49.9s) */}
        <Series.Sequence durationInFrames={525}>
          <SceneLeakedPipelines durationInFrames={525} />
        </Series.Sequence>

        {/* 4. Dario Amodei Essay & CBS Interview (49.9s - 108.1s) */}
        <Series.Sequence durationInFrames={1746}>
          <SceneDarioEssayInterview durationInFrames={1746} />
        </Series.Sequence>

        {/* 5. Opus 5.2 Leak Deep Dive & Architecture (108.1s - 138.1s) */}
        <Series.Sequence durationInFrames={900}>
          <SceneOpus52LeakDeepDive durationInFrames={900} />
        </Series.Sequence>

        {/* 6. GPT-6 Sol 3D Death Star Simulation (138.1s - 170.5s) */}
        <Series.Sequence durationInFrames={972}>
          <SceneGpt6SolDeathStar durationInFrames={972} />
        </Series.Sequence>

        {/* 7. Mirochill Astra & OpenAI Cluster Roadmap (170.5s - 203.3s) */}
        <Series.Sequence durationInFrames={984}>
          <SceneAutonomousSynthesisRoadmap durationInFrames={984} />
        </Series.Sequence>

        {/* 8. Open-Weight Threat & Token Pricing (203.3s - 233.1s) */}
        <Series.Sequence durationInFrames={894}>
          <SceneOpenWeightThreat durationInFrames={894} />
        </Series.Sequence>

        {/* 9. DeepSeek Code 2.0 & Codex Router (233.1s - 277.1s) */}
        <Series.Sequence durationInFrames={1320}>
          <SceneDeepSeekCode20 durationInFrames={1320} />
        </Series.Sequence>

        {/* 10. Geopolitical Suicide: Donald Trump Speech (277.1s - 300.5s) */}
        <Series.Sequence durationInFrames={702}>
          <SceneGeopoliticalSuicide durationInFrames={702} />
        </Series.Sequence>

        {/* 11. Final Takeaway & Outro (300.5s - 326.38s) */}
        <Series.Sequence durationInFrames={776}>
          <SceneFinalTakeaway durationInFrames={776} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
