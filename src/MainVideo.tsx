import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import {
  SceneHook1,
  SceneHook2,
  SceneHook3,
  SceneBriefingTitle,
  SceneDarioElon,
  SceneSamAltmanFortune,
  SceneDeepMindSergey,
  SceneDeepMindRsiLoop,
  SceneBengioPaper,
  SceneBengioCollusionVideo,
  SceneDeepSeekLaunch,
  SceneDeepSeekDisruption,
  SceneCarmackWarning,
  SceneDevinAgentVideo,
  SceneEscapeVelocityOutro,
} from "./scenes/FreshNewsScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#06080E" }}>
      {/* Master 5m 50s Voiceover Audio */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Frame-Accurate World of AI Timeline (Sum = 10,521 frames @ 30 FPS / 350.70s) */}
      <Series>
        {/* 1. Hook Beat 1: Frontier Safety Red Alert (0.00s - 12.20s) */}
        <Series.Sequence durationInFrames={366}>
          <SceneHook1 durationInFrames={366} />
        </Series.Sequence>

        {/* 2. Hook Beat 2: Elon Musk Endorses Dario + Sam Altman IPO Freeze (12.20s - 29.46s) */}
        <Series.Sequence durationInFrames={518}>
          <SceneHook2 durationInFrames={518} />
        </Series.Sequence>

        {/* 3. Hook Beat 3: Google DeepMind RSI Leak (29.46s - 44.84s) */}
        <Series.Sequence durationInFrames={461}>
          <SceneHook3 durationInFrames={461} />
        </Series.Sequence>

        {/* 4. Act 1 Briefing Intro (44.84s - 49.07s) */}
        <Series.Sequence durationInFrames={127}>
          <SceneBriefingTitle durationInFrames={127} />
        </Series.Sequence>

        {/* 5. Dario Amodei Essay & Elon "Dario is right" (49.07s - 74.30s) */}
        <Series.Sequence durationInFrames={757}>
          <SceneDarioElon durationInFrames={757} />
        </Series.Sequence>

        {/* 6. Sam Altman Fortune Article & Safety Halt (74.30s - 103.88s) */}
        <Series.Sequence durationInFrames={887}>
          <SceneSamAltmanFortune durationInFrames={887} />
        </Series.Sequence>

        {/* 7. Google DeepMind Sergey Brin Leak (103.88s - 132.29s) */}
        <Series.Sequence durationInFrames={853}>
          <SceneDeepMindSergey durationInFrames={853} />
        </Series.Sequence>

        {/* 8. DeepMind RSI Feedback Loop Architecture (132.29s - 166.49s) */}
        <Series.Sequence durationInFrames={1026}>
          <SceneDeepMindRsiLoop durationInFrames={1026} />
        </Series.Sequence>

        {/* 9. Yoshua Bengio Paper Breakdown (166.49s - 195.84s) */}
        <Series.Sequence durationInFrames={880}>
          <SceneBengioPaper durationInFrames={880} />
        </Series.Sequence>

        {/* 10. Bengio Collusion Video Demo Cut (195.84s - 224.56s) */}
        <Series.Sequence durationInFrames={862}>
          <SceneBengioCollusionVideo durationInFrames={862} />
        </Series.Sequence>

        {/* 11. DeepSeek V4.1 Hugging Face Launch (224.56s - 253.38s) */}
        <Series.Sequence durationInFrames={864}>
          <SceneDeepSeekLaunch durationInFrames={864} />
        </Series.Sequence>

        {/* 12. DeepSeek 30¢ Price Disruption Matrix (253.38s - 276.98s) */}
        <Series.Sequence durationInFrames={708}>
          <SceneDeepSeekDisruption durationInFrames={708} />
        </Series.Sequence>

        {/* 13. John Carmack Warning to Programmers (276.98s - 305.88s) */}
        <Series.Sequence durationInFrames={867}>
          <SceneCarmackWarning durationInFrames={867} />
        </Series.Sequence>

        {/* 14. SWE-2 Devin Agent Demo Video Cut (305.88s - 332.82s) */}
        <Series.Sequence durationInFrames={809}>
          <SceneDevinAgentVideo durationInFrames={809} />
        </Series.Sequence>

        {/* 15. Escape Velocity Final Outro (332.82s - 350.70s) */}
        <Series.Sequence durationInFrames={536}>
          <SceneEscapeVelocityOutro durationInFrames={536} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
