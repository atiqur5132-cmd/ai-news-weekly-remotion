import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import {
  HookBeat1Rsi,
  HookBeat2GoogleTweets,
  HookBeat3XAiTweet,
  HookBeat4RlCollapse,
} from "./scenes/HookScenes";
import {
  BriefingIntroScene,
  GoogleBeatLeaksScene,
  GoogleBeatSergeyBrinScene,
} from "./scenes/GoogleScenes";
import {
  XAiDelayScene,
  XAiQuittingBehaviorScene,
} from "./scenes/XAiScenes";
import {
  OpenAiNavierStokesScene,
  OpenAiLeanProofScene,
  OpenAiFinancialScene,
} from "./scenes/OpenAiScenes";
import {
  DeepSeekLaunchScene,
  DeepSeekParetoScene,
} from "./scenes/DeepSeekScenes";
import {
  AnthropicThreatScene,
  FastBlitzAndOutroScene,
} from "./scenes/AnthropicAndOutroScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#08090D" }}>
      {/* Master Voiceover Audio */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Frame-accurate Choreographed Visual Timeline */}
      <Series>
        {/* ACT 1: COLD-OPEN HOOK (First ~30 Seconds) */}
        {/* [0.00s - 7.86s] Beat 1: The RSI Threshold (B-Roll Motion Graphic) */}
        <Series.Sequence durationInFrames={247}>
          <HookBeat1Rsi durationInFrames={247} />
        </Series.Sequence>

        {/* [8.24s - 16.42s] Beat 2: Google & Sergey Brin Leaks (Real Source Inspection) */}
        <Series.Sequence durationInFrames={253}>
          <HookBeat2GoogleTweets durationInFrames={253} />
        </Series.Sequence>

        {/* [16.94s - 23.52s] Beat 3: Elon Musk Grok 4.7 Halt (Real Source Inspection) */}
        <Series.Sequence durationInFrames={206}>
          <HookBeat3XAiTweet durationInFrames={206} />
        </Series.Sequence>

        {/* [23.52s - 32.16s] Beat 4: RL Giving-up Pathology (B-Roll Motion Graphic) */}
        <Series.Sequence durationInFrames={274}>
          <HookBeat4RlCollapse durationInFrames={274} />
        </Series.Sequence>

        {/* ACT 2: BRIEFING TITLE & GOOGLE DEEPMIND RECURSIVE ACCELERATION */}
        {/* [32.78s - 38.86s] Beat 5: Briefing Intro Card */}
        <Series.Sequence durationInFrames={186}>
          <BriefingIntroScene durationInFrames={186} />
        </Series.Sequence>

        {/* [38.86s - 58.06s] Beat 6: Alex Getman Gemini 4 Pro Leaks (Real Source Inspection) */}
        <Series.Sequence durationInFrames={584}>
          <GoogleBeatLeaksScene durationInFrames={584} />
        </Series.Sequence>

        {/* [58.62s - 75.00s] Beat 7: Sergey Brin Live RL Loop & Compute Cluster (Real Source Inspection) */}
        <Series.Sequence durationInFrames={510}>
          <GoogleBeatSergeyBrinScene durationInFrames={510} />
        </Series.Sequence>

        {/* ACT 3: XAI GROK 4.7 POST-TRAINING ROADBLOCK */}
        {/* [75.62s - 88.26s] Beat 8: Elon Confirms Grok 4.7 Delayed (Real Source Inspection) */}
        <Series.Sequence durationInFrames={400}>
          <XAiDelayScene durationInFrames={400} />
        </Series.Sequence>

        {/* [89.14s - 116.60s] Beat 9: The Quitting Shortcut Pathology (B-Roll Motion Graphic Telemetry) */}
        <Series.Sequence durationInFrames={840}>
          <XAiQuittingBehaviorScene durationInFrames={840} />
        </Series.Sequence>

        {/* ACT 4: OPENAI GPT-6 ASTRA & NAVIER-STOKES LEAN PROOF */}
        {/* [116.60s - 133.74s] Beat 10: Chris Analysis of Navier-Stokes (Real Source Inspection) */}
        <Series.Sequence durationInFrames={510}>
          <OpenAiNavierStokesScene durationInFrames={510} />
        </Series.Sequence>

        {/* [133.74s - 152.82s] Beat 11: Formal Lean 4 AST Verification (B-Roll Motion Graphic) */}
        <Series.Sequence durationInFrames={575}>
          <OpenAiLeanProofScene durationInFrames={575} />
        </Series.Sequence>

        {/* [152.82s - 170.96s] Beat 12: ChatGPT for Financial Services & $200 Pro Pause */}
        <Series.Sequence durationInFrames={545}>
          <OpenAiFinancialScene durationInFrames={545} />
        </Series.Sequence>

        {/* ACT 5: DEEPSEEK-V4.1-FLASH PRICE SHOCKWAVE */}
        {/* [170.96s - 193.32s] Beat 13: Code Arena WebDev #14 Rank (Real Source Inspection) */}
        <Series.Sequence durationInFrames={670}>
          <DeepSeekLaunchScene durationInFrames={670} />
        </Series.Sequence>

        {/* [194.30s - 202.02s] Beat 14: 10x Price Disruption Scatter Chart (B-Roll Motion Graphic) */}
        <Series.Sequence durationInFrames={260}>
          <DeepSeekParetoScene durationInFrames={260} />
        </Series.Sequence>

        {/* ACT 6: ANTHROPIC THREAT INTEL & FAST-BRIEF BLITZ */}
        {/* [202.02s - 222.16s] Beat 15: Claude Misuse Disruption Report */}
        <Series.Sequence durationInFrames={605}>
          <AnthropicThreatScene durationInFrames={605} />
        </Series.Sequence>

        {/* [222.16s - 244.18s] Beat 16: SWE-2 Devin, Windows Gemini, Cursor Projects & Outro */}
        <Series.Sequence durationInFrames={660}>
          <FastBlitzAndOutroScene durationInFrames={660} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
