import React from "react";
import { AbsoluteFill, Series, staticFile, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { VideoPlayerView } from "../components/VideoPlayerView";
import { DocumentaryCardView } from "../components/DocumentaryCardView";
import { SplitScreenDossier } from "../components/SplitScreenDossier";
import { RsiFeedbackLoop } from "../components/RsiFeedbackLoop";
import { ParetoFrontierChart } from "../components/ParetoFrontierChart";
import { AnthropicLogo, OpenAILogo, GoogleOfficialLogo, DeepSeekLogo } from "../components/RealLogos";

// ==========================================
// ACT 1: COLD OPEN HOOK (1494 frames)
// ==========================================
export const Act1_ColdOpenDuel: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Dual 50/50 Split Screen Showdown (450 frames / ~15s) */}
      <Series.Sequence durationInFrames={450}>
        <SplitScreenDossier
          leftVideo="evidence/anthropic_fable52_brawlstars.mp4"
          rightVideo="evidence/openai_astra_waverunner.mp4"
          leftTitle="Fable 5.2 • 3D Brawler"
          rightTitle="Astra • Fluid Water Physics"
          leftBrand="ANTHROPIC"
          rightBrand="OPENAI"
        />
      </Series.Sequence>

      {/* Beat 2: Authentic Rajath Gowda Tweet Inspection (390 frames / ~13s) */}
      <Series.Sequence durationInFrames={390}>
        <DocumentaryCardView
          cardImage="evidence/anthropic_slowdown_debate_card.png"
          titleBadge="THE FRONTIER PARADOX"
          sourceHandle="@buildwithrajath"
          highlightYPercent={28}
          highlightHeightPercent={12}
          highlightStartFrame={20}
          highlightDurationFrames={45}
        />
      </Series.Sequence>

      {/* Beat 3: Full 1080p Fable 5.2 Gameplay Embed (360 frames / ~12s) */}
      <Series.Sequence durationInFrames={360}>
        <VideoPlayerView
          videoSrc="evidence/anthropic_fable52_brawlstars.mp4"
          title="FABLE 5.2 • PURE THREE.JS GAMEPLAY PROOF"
          durationInFrames={360}
        />
      </Series.Sequence>

      {/* Beat 4: Full 1080p Astra Fluid Physics Embed (294 frames / ~9.8s) */}
      <Series.Sequence durationInFrames={294}>
        <VideoPlayerView
          videoSrc="evidence/openai_astra_waverunner.mp4"
          title="OPENAI ASTRA • NATIVE BROWSER WATER PHYSICS"
          durationInFrames={294}
        />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 2: ANTHROPIC'S STEALTH OFFENSIVE (1692 frames)
// ==========================================
export const Act2_AnthropicFable: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Jazii Tweet Card (420 frames / 14s) */}
      <Series.Sequence durationInFrames={420}>
        <DocumentaryCardView
          cardImage="evidence/anthropic_fable52_brawlstars_card.png"
          titleBadge="LEAKED STEALTH ROUTING"
          sourceHandle="@notjazii"
          highlightYPercent={22}
          highlightHeightPercent={10}
          highlightStartFrame={15}
          highlightDurationFrames={40}
        />
      </Series.Sequence>

      {/* Beat 2: Brawl Stars Character Selector UI (480 frames / 16s) */}
      <Series.Sequence durationInFrames={480}>
        <VideoPlayerView
          videoSrc="evidence/anthropic_fable52_brawlstars.mp4"
          title="SUNDOWN SHOWDOWN • 4 DISTINCT BRAWLER CLASSES"
          durationInFrames={480}
        />
      </Series.Sequence>

      {/* Beat 3: Claude 5.2 Day Community Reaction (420 frames / 14s) */}
      <Series.Sequence durationInFrames={420}>
        <DocumentaryCardView
          cardImage="evidence/anthropic_claude52_day_card.png"
          titleBadge="GLOBAL ROUTING DETECTED"
          sourceHandle="@AdamHoltererer"
          highlightYPercent={40}
          highlightHeightPercent={15}
          highlightStartFrame={15}
          highlightDurationFrames={35}
        />
      </Series.Sequence>

      {/* Beat 4: Game Lighting & Shaders Inspect (372 frames / 12.4s) */}
      <Series.Sequence durationInFrames={372}>
        <VideoPlayerView
          videoSrc="evidence/anthropic_fable52_brawlstars.mp4"
          title="THREE.JS TIME-OF-DAY SHADOW SYSTEM"
          durationInFrames={372}
        />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 3: THE 4D CHESS MOVE OPUS 5.2 (1239 frames)
// ==========================================
export const Act3_AnthropicOpus: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Vidhi Tweet Card (420 frames / 14s) */}
      <Series.Sequence durationInFrames={420}>
        <DocumentaryCardView
          cardImage="evidence/anthropic_opus52_chessmove_card.png"
          titleBadge="BENCHMARK SHOCKWAVE"
          sourceHandle="@vidhiparmarr"
          highlightYPercent={20}
          highlightHeightPercent={12}
          highlightStartFrame={20}
          highlightDurationFrames={45}
        />
      </Series.Sequence>

      {/* Beat 2: 26% Recursive Self-Improvement (RSI) Loop (420 frames / 14s) */}
      <Series.Sequence durationInFrames={420}>
        <RsiFeedbackLoop />
      </Series.Sequence>

      {/* Beat 3: 3-Way Benchmark Frontier Chart (399 frames / 13.3s) */}
      <Series.Sequence durationInFrames={399}>
        <ParetoFrontierChart />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 4: OPENAI'S REALITY ENGINE (1755 frames)
// ==========================================
export const Act4_OpenAIAstraPhysics: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: WaveRunner Water Physics (510 frames / 17s) */}
      <Series.Sequence durationInFrames={510}>
        <VideoPlayerView
          videoSrc="evidence/openai_astra_waverunner.mp4"
          title="WAVERUNNER • 1738x1080 NATIVE FLUID SIMULATION"
          durationInFrames={510}
        />
      </Series.Sequence>

      {/* Beat 2: Tak Tweet Card (360 frames / 12s) */}
      <Series.Sequence durationInFrames={360}>
        <DocumentaryCardView
          cardImage="evidence/openai_astra_waverunner_card.png"
          titleBadge="NATIVE CODE SYNTHESIS"
          sourceHandle="@cherry_mx_reds"
          highlightYPercent={22}
          highlightHeightPercent={10}
          highlightStartFrame={15}
          highlightDurationFrames={35}
        />
      </Series.Sequence>

      {/* Beat 3: Steam Game Rebuild Video (510 frames / 17s) */}
      <Series.Sequence durationInFrames={510}>
        <VideoPlayerView
          videoSrc="evidence/openai_astra_steam_game.mp4"
          title="ASTRA • REBUILDING STEAM FISHING GAME FROM VIDEO"
          durationInFrames={510}
        />
      </Series.Sequence>

      {/* Beat 4: Blender 3D Scene Integration (375 frames / 12.5s) */}
      <Series.Sequence durationInFrames={375}>
        <VideoPlayerView
          videoSrc="evidence/openai_astra_blender_threejs.mp4"
          title="BLENDER + THREE.JS • 3D WORLD PIPELINE"
          durationInFrames={375}
        />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 5: THE "GPT-6 SOL" LEAK & THE SWARM (1455 frames)
// ==========================================
export const Act5_OpenAISolLeak: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Leaked GPT-6 Sol Specs Card (450 frames / 15s) */}
      <Series.Sequence durationInFrames={450}>
        <DocumentaryCardView
          cardImage="evidence/openai_gpt6_sol_leak_card.png"
          titleBadge="OPENAI API LEAK"
          sourceHandle="@ravikiran_dev7"
          highlightYPercent={30}
          highlightHeightPercent={12}
          highlightStartFrame={20}
          highlightDurationFrames={40}
        />
      </Series.Sequence>

      {/* Beat 2: Sam Altman Stanford Lecture Clip (480 frames / 16s) */}
      <Series.Sequence durationInFrames={480}>
        <VideoPlayerView
          videoSrc="evidence/openai_sam_altman_thousands_agents.mp4"
          title="SAM ALTMAN • 'THOUSANDS OF AGENTS RUNNING EVERY NIGHT'"
          durationInFrames={480}
        />
      </Series.Sequence>

      {/* Beat 3: Sam Altman Tweet Card (525 frames / 17.5s) */}
      <Series.Sequence durationInFrames={525}>
        <DocumentaryCardView
          cardImage="evidence/openai_sam_altman_thousands_agents_card.png"
          titleBadge="AUTONOMOUS SWARM PARADIGM"
          sourceHandle="@Grow_withAI"
          highlightYPercent={25}
          highlightHeightPercent={12}
          highlightStartFrame={20}
          highlightDurationFrames={40}
        />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 6: AUTONOMOUS VOICE AGENTS & MICRO ECONOMICS (1500 frames)
// ==========================================
export const Act6_VoiceAgents: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Jev Real-Time Voice Browser Control (540 frames / 18s) */}
      <Series.Sequence durationInFrames={540}>
        <VideoPlayerView
          videoSrc="evidence/jev_voice_browser_agent.mp4"
          title="JEV • 300MS REAL-TIME VOICE BROWSER AUTOMATION"
          durationInFrames={540}
        />
      </Series.Sequence>

      {/* Beat 2: Jev Tweet Card (390 frames / 13s) */}
      <Series.Sequence durationInFrames={390}>
        <DocumentaryCardView
          cardImage="evidence/jev_voice_browser_agent_card.png"
          titleBadge="MICRO-TOKEN ECONOMICS"
          sourceHandle="@moritzkremb"
          highlightYPercent={38}
          highlightHeightPercent={8}
          highlightStartFrame={15}
          highlightDurationFrames={35}
        />
      </Series.Sequence>

      {/* Beat 3: DeepSeek-Harness Open-Source Framework (330 frames / 11s) */}
      <Series.Sequence durationInFrames={330}>
        <VideoPlayerView
          videoSrc="evidence/deepseek_harness_framework.mp4"
          title="DEEPSEEK-HARNESS • MODULAR CODING AGENT FRAMEWORK"
          durationInFrames={330}
        />
      </Series.Sequence>

      {/* Beat 4: DeepSeek 4K Blender Truck Demo (240 frames / 8s) */}
      <Series.Sequence durationInFrames={240}>
        <VideoPlayerView
          videoSrc="evidence/deepseek_v41_blender_truck.mp4"
          title="DEEPSEEK V4.1 FLASH • 4K MECHANICALLY ACCURATE BLENDER TRUCK"
          durationInFrames={240}
        />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 7: GOOGLE'S SHADOW STRIKE [THE GRAND FINALE] (1890 frames)
// ==========================================
export const Act7_GoogleFinale: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Leaked Gemini 4 Pro Specs Card (450 frames / 15s) */}
      <Series.Sequence durationInFrames={450}>
        <DocumentaryCardView
          cardImage="evidence/google_gemini4_specs_leaked_card.png"
          titleBadge="GOOGLE ARENA SHADOW STRIKE"
          sourceHandle="@ravikiran_dev7"
          highlightYPercent={32}
          highlightHeightPercent={12}
          highlightStartFrame={20}
          highlightDurationFrames={45}
        />
      </Series.Sequence>

      {/* Beat 2: Pure SVG Shelby GT500 Vector Video (510 frames / 17s) */}
      <Series.Sequence durationInFrames={510}>
        <VideoPlayerView
          videoSrc="evidence/google_gemini4_shelby_gt500.mp4"
          title="GEMINI 4 PRO • PURE VECTOR SVG 1967 SHELBY GT500"
          durationInFrames={510}
        />
      </Series.Sequence>

      {/* Beat 3: Interactive PS5 CAD Controller Video (480 frames / 16s) */}
      <Series.Sequence durationInFrames={480}>
        <VideoPlayerView
          videoSrc="evidence/google_gemini4_ps5_cad.mp4"
          title="GEMINI 4 PRO • EXPLODED CAD & X-RAY PCB STUDIO"
          durationInFrames={480}
        />
      </Series.Sequence>

      {/* Beat 4: The V8 Skeptic Reality Check (450 frames / 15s) */}
      <Series.Sequence durationInFrames={450}>
        <VideoPlayerView
          videoSrc="evidence/google_gemini4_v8_skeptic.mp4"
          title="THE REALITY CHECK • V8 MECHANICAL SIMULATION TEST"
          durationInFrames={450}
        />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 8: THE DEVELOPER VERDICT & OUTRO (1218 frames)
// ==========================================
export const Act8_OutroVerdict: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const wave = Math.sin(frame / 20) * 10;
  const pulse = 1 + Math.sin(frame / 15) * 0.03;

  return (
    <Series>
      {/* Beat 1: 3-Way Frontier Showdown Board (600 frames / 20s) */}
      <Series.Sequence durationInFrames={600}>
        <AbsoluteFill
          style={{
            backgroundColor: "#030712",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ color: "#38BDF8", fontSize: 16, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 10 }}>
              2026 FRONTIER DECISION MATRIX
            </div>
            <h1 style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 900, margin: 0 }}>
              WHICH MODEL RULES YOUR STACK?
            </h1>
          </div>

          {/* 3 Pillars */}
          <div style={{ display: "flex", gap: 30, width: "100%", maxWidth: 1600 }}>
            {/* Pillar 1: Anthropic */}
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                borderRadius: 20,
                border: "2px solid rgba(245, 158, 11, 0.4)",
                padding: "36px 30px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <AnthropicLogo size={52} />
              </div>
              <h2 style={{ color: "#FBBF24", fontSize: 26, fontWeight: 900, marginBottom: 12 }}>ANTHROPIC</h2>
              <div style={{ backgroundColor: "rgba(245, 158, 11, 0.2)", color: "#FDE68A", padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 800, marginBottom: 20 }}>
                FABLE 5.2 / OPUS 5.2
              </div>
              <p style={{ color: "#E2E8F0", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
                Best for <strong>Game Engines</strong>, spatial procedural code, and autonomous recursive agents.
              </p>
            </div>

            {/* Pillar 2: OpenAI */}
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                borderRadius: 20,
                border: "2px solid rgba(16, 185, 129, 0.4)",
                padding: "36px 30px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <OpenAILogo size={52} />
              </div>
              <h2 style={{ color: "#10B981", fontSize: 26, fontWeight: 900, marginBottom: 12 }}>OPENAI</h2>
              <div style={{ backgroundColor: "rgba(16, 185, 129, 0.2)", color: "#A7F3D0", padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 800, marginBottom: 20 }}>
                GPT-6 ASTRA / SOL
              </div>
              <p style={{ color: "#E2E8F0", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
                Best for <strong>Physical Simulations</strong>, fluid dynamics, and overnight multi-agent swarms.
              </p>
            </div>

            {/* Pillar 3: Google */}
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                borderRadius: 20,
                border: "2px solid rgba(56, 189, 248, 0.4)",
                padding: "36px 30px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <GoogleOfficialLogo size={52} />
              </div>
              <h2 style={{ color: "#38BDF8", fontSize: 26, fontWeight: 900, marginBottom: 12 }}>GOOGLE</h2>
              <div style={{ backgroundColor: "rgba(56, 189, 248, 0.2)", color: "#BAE6FD", padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 800, marginBottom: 20 }}>
                GEMINI 4 PRO LEAK
              </div>
              <p style={{ color: "#E2E8F0", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
                Best for <strong>2M Massive Context</strong>, 256k output ceiling, and pure vector SVG precision.
              </p>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 2: High-Impact Outro & Call to Action (618 frames / 20.6s) */}
      <Series.Sequence durationInFrames={618}>
        <AbsoluteFill
          style={{
            backgroundColor: "#02040A",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {/* Cyber particle wave glow in background */}
          <div
            style={{
              position: "absolute",
              bottom: -100,
              width: "120%",
              height: 400,
              background: "radial-gradient(ellipse at bottom, rgba(56, 189, 248, 0.25) 0%, transparent 70%)",
              transform: `translateY(${wave}px)`,
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ color: "#38BDF8", fontSize: 15, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14 }}>
              THE RACE TOWARDS OCTOBER DEV DAY
            </div>
            <h1 style={{ color: "#FFFFFF", fontSize: 56, fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 24 }}>
              WHICH MODEL WOULD YOU TRUST?
            </h1>
            <p style={{ color: "#94A3B8", fontSize: 22, maxWidth: 800, margin: "0 auto 40px auto", lineHeight: 1.5 }}>
              Drop your thoughts in the comments below. The models are no longer waiting for prompts.
            </p>

            {/* Animated Subscribe Button */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                backgroundColor: "#EF4444",
                color: "#FFFFFF",
                padding: "18px 44px",
                borderRadius: 50,
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "0.05em",
                boxShadow: "0 10px 30px rgba(239, 68, 68, 0.5)",
                transform: `scale(${pulse})`,
              }}
            >
              <span>🔔 SUBSCRIBE FOR DAILY AI BRIEFINGS</span>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};
