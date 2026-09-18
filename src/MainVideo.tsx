import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import {
  Act1_ColdOpenDuel,
  Act2_AnthropicFable,
  Act3_AnthropicOpus,
  Act4_OpenAIAstraPhysics,
  Act5_OpenAISolLeak,
  Act6_VoiceAgents,
  Act7_GoogleFinale,
  Act8_OutroVerdict,
} from "./scenes/ShadowWarActs";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#02040A" }}>
      {/* Broadcast Mastered Brian Multilingual Voiceover Audio (408.1s / 12,243 frames) */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Frame-Accurate Whisper-Synchronized 8-Act Series Timeline */}
      <Series>
        {/* Act 1: Cold Open Hook (The Game Engine Duel) -> 0.0s to 49.8s */}
        <Series.Sequence durationInFrames={1494}>
          <Act1_ColdOpenDuel />
        </Series.Sequence>

        {/* Act 2: Anthropic's Stealth Offensive (Fable 5.2 1-Hour Build) -> 49.8s to 106.2s */}
        <Series.Sequence durationInFrames={1692}>
          <Act2_AnthropicFable />
        </Series.Sequence>

        {/* Act 3: The 4D Chess Move: Opus 5.2 & 26% RSI -> 106.2s to 147.5s */}
        <Series.Sequence durationInFrames={1239}>
          <Act3_AnthropicOpus />
        </Series.Sequence>

        {/* Act 4: OpenAI's Reality Engine (Astra WaveRunner & Steam Rebuild) -> 147.5s to 206.0s */}
        <Series.Sequence durationInFrames={1755}>
          <Act4_OpenAIAstraPhysics />
        </Series.Sequence>

        {/* Act 5: Leaked Sibling: "GPT-6 Sol" & Sam Altman Swarms -> 206.0s to 254.5s */}
        <Series.Sequence durationInFrames={1455}>
          <Act5_OpenAISolLeak />
        </Series.Sequence>

        {/* Act 6: Autonomous Voice Agents & Micro-Token Economics (Jev & DeepSeek) -> 254.5s to 304.5s */}
        <Series.Sequence durationInFrames={1500}>
          <Act6_VoiceAgents />
        </Series.Sequence>

        {/* Act 7: Google's Shadow Strike [The Grand Finale] (Gemini 4 Pro Arena Leak) -> 304.5s to 367.5s */}
        <Series.Sequence durationInFrames={1890}>
          <Act7_GoogleFinale />
        </Series.Sequence>

        {/* Act 8: The Developer Verdict & Outro -> 367.5s to 408.1s */}
        <Series.Sequence durationInFrames={1218}>
          <Act8_OutroVerdict />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
