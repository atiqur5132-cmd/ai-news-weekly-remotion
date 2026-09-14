import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BongoCatMascot } from "../components/BongoCatMascot";
import { OpenAILogo, AnthropicLogo, DeepSeekLogo } from "../components/RealLogos";

// 1. Hook Beat: Split-Screen Comparison (0s - 12.4s / 372 frames)
export const SceneColdOpenHook: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const flameOpacity = interpolate(frame, [0, 8, 20], [1, 0.9, 0], { extrapolateRight: "clamp" });
  const flameScale = interpolate(frame, [0, 20], [1, 1.3], { extrapolateRight: "clamp" });
  const zoom = interpolate(frame, [0, durationInFrames], [1.0, 1.04]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000000", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      {/* 100% Authentic Native Split Screen Canvas */}
      <div style={{ width: "100%", height: "100%", transform: `scale(${zoom})`, transformOrigin: "center center" }}>
        <Img
          src={staticFile("evidence/frame_0005s.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Anime Flame Transition Overlay (0 - 20 frames) */}
      {frame < 22 && (
        <AbsoluteFill style={{ pointerEvents: "none", opacity: flameOpacity, transform: `scale(${flameScale})` }}>
          <Img src={staticFile("evidence/frame_extra_0001s.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", mixBlendMode: "screen" }} />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

// 2. Three-Column Reaction Board with Digital Highlighters (12.4s - 32.4s / 600 frames)
export const SceneThreeColumnTruce: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Progressive highlighter sweeps
  const hlDario = interpolate(frame, [30, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const hlSam = interpolate(frame, [150, 210], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const hlElon = interpolate(frame, [250, 310], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#06080E", justifyContent: "center", alignItems: "center" }}>
      {/* 3-Column Tweet Evidence Viewport */}
      <div
        style={{
          width: 1780,
          height: 980,
          position: "relative",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 25px 50px rgba(0,0,0,0.8)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Img src={staticFile("evidence/frame_0075s.jpg")} style={{ width: "100%", height: "100%", objectFit: "contain" }} />

        {/* Column 1 Highlighter: Dario "industry should slow down" */}
        <div
          style={{
            position: "absolute",
            left: 36,
            top: 200,
            width: 230 * hlDario,
            height: 24,
            backgroundColor: "rgba(245, 166, 35, 0.45)",
            border: "1px solid rgba(245, 166, 35, 0.8)",
            borderRadius: 4,
            pointerEvents: "none",
          }}
        />

        {/* Column 2 Highlighter: Sam "we will do the same" */}
        <div
          style={{
            position: "absolute",
            left: 630,
            top: 300,
            width: 170 * hlSam,
            height: 24,
            backgroundColor: "rgba(245, 166, 35, 0.45)",
            border: "1px solid rgba(245, 166, 35, 0.8)",
            borderRadius: 4,
            pointerEvents: "none",
          }}
        />

        {/* Column 3 Highlighter: Elon "Dario is right" */}
        <div
          style={{
            position: "absolute",
            left: 1220,
            top: 180,
            width: 130 * hlElon,
            height: 26,
            backgroundColor: "rgba(245, 166, 35, 0.45)",
            border: "1px solid rgba(245, 166, 35, 0.8)",
            borderRadius: 4,
            pointerEvents: "none",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

// 3. Leaked Pipelines & Rajath Tweet (32.4s - 49.9s / 525 frames)
export const SceneLeakedPipelines: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.06]);
  const showZoomLeak = frame > 240;

  return (
    <AbsoluteFill style={{ backgroundColor: "#06080E", justifyContent: "center", alignItems: "center" }}>
      {!showZoomLeak ? (
        <div
          style={{
            width: 1350,
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0,0,0,0.85)",
            border: "1px solid rgba(255,255,255,0.1)",
            transform: `scale(${scale})`,
          }}
        >
          <Img src={staticFile("evidence/clean_post_2099039261253358013_card.png")} style={{ width: "100%", display: "block" }} />
        </div>
      ) : (
        <div
          style={{
            width: 1550,
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0,0,0,0.85)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            transform: `scale(${scale})`,
          }}
        >
          <Img src={staticFile("evidence/frame_0012s.jpg")} style={{ width: "100%", display: "block" }} />
        </div>
      )}
    </AbsoluteFill>
  );
};

// 4. Dario Amodei Essay & CBS Interview (49.9s - 108.1s / 1746 frames)
export const SceneDarioEssayInterview: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const isInterview = frame > 850;

  // Continuous smooth scroll for essay
  const scrollY = interpolate(frame, [0, 850], [0, 320], { extrapolateRight: "clamp" });
  const hlSweep = interpolate(frame, [200, 380], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0B0F19", justifyContent: "center", alignItems: "center" }}>
      {!isInterview ? (
        /* Blog Post Smooth Scroll */
        <div
          style={{
            width: 1600,
            height: 920,
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "#161614",
            border: "1px solid rgba(255,255,255,0.1)",
            position: "relative",
            boxShadow: "0 25px 50px rgba(0,0,0,0.9)",
          }}
        >
          {/* Top Browser Bar */}
          <div style={{ height: 48, backgroundColor: "#20201D", display: "flex", alignItems: "center", padding: "0 20px", gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#EF4444" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#10B981" }} />
            <div style={{ marginLeft: 20, fontSize: 14, color: "#94A3B8", fontFamily: "sans-serif" }}>🔒 darioamodei.com/post/we-must-pace-the-frontier</div>
          </div>
          {/* Content */}
          <div style={{ transform: `translateY(${-scrollY}px)`, transition: "transform 0.1s linear", position: "relative" }}>
            <Img src={staticFile("evidence/frame_0500s.jpg")} style={{ width: "100%", display: "block" }} />
            {/* Highlighter */}
            <div
              style={{
                position: "absolute",
                left: 280,
                top: 560,
                width: 600 * hlSweep,
                height: 28,
                backgroundColor: "rgba(245, 166, 35, 0.45)",
                border: "1px solid rgba(245, 166, 35, 0.8)",
                borderRadius: 4,
              }}
            />
          </div>
        </div>
      ) : (
        /* CBS Interview Clip */
        <div
          style={{
            width: 1650,
            height: 930,
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.9)",
          }}
        >
          <Img src={staticFile("evidence/frame_0450s.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          {/* 3-Part Plan Floating Card */}
          <div
            style={{
              position: "absolute",
              top: 50,
              right: 50,
              backgroundColor: "rgba(15, 23, 42, 0.88)",
              backdropFilter: "blur(12px)",
              padding: "24px 32px",
              borderRadius: 16,
              border: "1px solid rgba(56, 189, 248, 0.4)",
              color: "#FFFFFF",
              fontFamily: "sans-serif",
            }}
          >
            <div style={{ fontSize: 14, color: "#38BDF8", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>
              Dario's 3-Part Plan
            </div>
            <div style={{ fontSize: 18, margin: "6px 0", color: "#F8FAFC" }}>1. Independent Evaluators</div>
            <div style={{ fontSize: 18, margin: "6px 0", color: "#F8FAFC" }}>2. Competitor Peer Review</div>
            <div style={{ fontSize: 18, margin: "6px 0", color: "#F8FAFC" }}>3. Pacing Frontier Speed</div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

// 5. Opus 5.2 Leak Deep Dive (108.1s - 138.1s / 900 frames)
export const SceneOpus52LeakDeepDive: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.05]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#06080E", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", gap: 40, alignItems: "center", width: 1700 }}>
        {/* Left: Tweet Leak Card */}
        <div style={{ flex: 1.1, borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 25px 50px rgba(0,0,0,0.8)" }}>
          <Img src={staticFile("evidence/frame_0012s.jpg")} style={{ width: "100%", display: "block" }} />
        </div>

        {/* Right: Architecture & Specs Card */}
        <div
          style={{
            flex: 0.9,
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            borderRadius: 20,
            padding: 40,
            border: "1px solid rgba(217, 119, 6, 0.3)",
            fontFamily: "sans-serif",
            color: "#FFFFFF",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <AnthropicLogo size={48} />
            <div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>Claude Opus 5.2</div>
              <div style={{ fontSize: 14, color: "#D97706", letterSpacing: 1.2 }}>CONFIDENTIAL FRONTIER SPEC</div>
            </div>
          </div>
          <div style={{ fontSize: 20, color: "#94A3B8", margin: "16px 0" }}>• Target: Autonomous Feedback Loops</div>
          <div style={{ fontSize: 20, color: "#94A3B8", margin: "16px 0" }}>• Multi-hour Terminal Execution</div>
          <div style={{ fontSize: 20, color: "#94A3B8", margin: "16px 0" }}>• Heavyweight Reasoning & Code Generation</div>
          <div style={{ fontSize: 20, color: "#94A3B8", margin: "16px 0" }}>• Zero Human Oversight Required</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 6. GPT-6 Sol 3D Death Star Simulation (138.1s - 170.5s / 972 frames)
export const SceneGpt6SolDeathStar: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const isInterior = frame > 550;
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.08]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#020408", justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          width: 1720,
          height: 960,
          borderRadius: 16,
          overflow: "hidden",
          position: "relative",
          border: "1px solid rgba(56, 189, 248, 0.2)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.9)",
        }}
      >
        <Img
          src={isInterior ? staticFile("evidence/frame_0050s.jpg") : staticFile("evidence/frame_0300s.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${scale})` }}
        />
        {/* Telemetry HUD overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            backgroundColor: "rgba(2, 6, 23, 0.85)",
            backdropFilter: "blur(10px)",
            padding: "16px 28px",
            borderRadius: 12,
            border: "1px solid rgba(56, 189, 248, 0.4)",
            display: "flex",
            gap: 32,
            fontFamily: "monospace",
            color: "#38BDF8",
            fontSize: 16,
          }}
        >
          <div>MODEL: <span style={{ color: "#FFF", fontWeight: 700 }}>GPT-6 SOL</span></div>
          <div>TOKENS: <span style={{ color: "#10B981", fontWeight: 700 }}>72,000</span></div>
          <div>TIME: <span style={{ color: "#F59E0B", fontWeight: 700 }}>8m 42s</span></div>
          <div>PROMPT: <span style={{ color: "#FFF", fontWeight: 700 }}>ZERO-SHOT</span></div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 7. Mirochill Astra & OpenAI Cluster Roadmap (170.5s - 203.3s / 984 frames)
export const SceneAutonomousSynthesisRoadmap: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const showRoadmap = frame > 450;

  return (
    <AbsoluteFill style={{ backgroundColor: "#06080E", justifyContent: "center", alignItems: "center" }}>
      {!showRoadmap ? (
        <div style={{ width: 1450, borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 60px rgba(0,0,0,0.85)" }}>
          <Img src={staticFile("evidence/clean_post_2098857024037552522_card.png")} style={{ width: "100%", display: "block" }} />
        </div>
      ) : (
        <div style={{ width: 1650, display: "flex", gap: 30, justifyContent: "center" }}>
          {/* Luna Card */}
          <div style={{ flex: 1, backgroundColor: "#0F172A", padding: 36, borderRadius: 16, border: "1px solid rgba(56, 189, 248, 0.3)" }}>
            <OpenAILogo size={40} color="#38BDF8" />
            <div style={{ fontSize: 26, fontWeight: 800, color: "#FFF", margin: "16px 0 8px" }}>GPT-6 Luna</div>
            <div style={{ fontSize: 16, color: "#94A3B8" }}>Ultra Low-Latency Edge Reasoning, Real-time Voice, Mobile Co-processors.</div>
          </div>
          {/* Sol Card */}
          <div style={{ flex: 1, backgroundColor: "#0F172A", padding: 36, borderRadius: 16, border: "2px solid #10B981", transform: "scale(1.04)" }}>
            <OpenAILogo size={40} color="#10B981" />
            <div style={{ fontSize: 26, fontWeight: 800, color: "#FFF", margin: "16px 0 8px" }}>GPT-6 Sol</div>
            <div style={{ fontSize: 16, color: "#94A3B8" }}>Heavy Engineering Engine, Autonomous Fullstack Synthesis, 3D WebGL Generation.</div>
          </div>
          {/* Astra Card */}
          <div style={{ flex: 1, backgroundColor: "#0F172A", padding: 36, borderRadius: 16, border: "1px solid rgba(168, 85, 247, 0.3)" }}>
            <OpenAILogo size={40} color="#A855F7" />
            <div style={{ fontSize: 26, fontWeight: 800, color: "#FFF", margin: "16px 0 8px" }}>GPT-6 Astra</div>
            <div style={{ fontSize: 16, color: "#94A3B8" }}>Candidate for Autonomous Enterprise AGI, Multi-agent Coordination, Long-horizon Proofs.</div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

// 8. Open-Weight Threat & Token Pricing Disruption (203.3s - 233.1s / 894 frames)
export const SceneOpenWeightThreat: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#080C14", justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <div style={{ fontSize: 20, color: "#EF4444", fontWeight: 700, letterSpacing: 2 }}>THE ECONOMIC DISRUPTION</div>
        <div style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF", marginTop: 8 }}>CLOSED MOATS ARE COLLAPSING</div>
      </div>

      <div style={{ display: "flex", gap: 50, width: 1400, justifyContent: "center" }}>
        {/* Closed Tier */}
        <div style={{ flex: 1, backgroundColor: "#0F172A", borderRadius: 20, padding: 40, border: "1px solid rgba(239, 68, 68, 0.4)", textAlign: "center" }}>
          <div style={{ fontSize: 22, color: "#EF4444", fontWeight: 700 }}>PROPRIETARY LABS</div>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#FFF", margin: "20px 0" }}>$15.00</div>
          <div style={{ fontSize: 16, color: "#94A3B8" }}>per 1 Million Tokens</div>
          <div style={{ marginTop: 24, fontSize: 16, color: "#64748B" }}>Heavily rate-limited, Closed Weights, Regulatory Capture.</div>
        </div>

        {/* Open Tier */}
        <div style={{ flex: 1, backgroundColor: "#0F172A", borderRadius: 20, padding: 40, border: "2px solid #10B981", textAlign: "center", transform: "scale(1.05)" }}>
          <div style={{ fontSize: 22, color: "#10B981", fontWeight: 700 }}>DEEPSEEK / OPEN WEIGHTS</div>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#10B981", margin: "20px 0" }}>$0.15</div>
          <div style={{ fontSize: 16, color: "#94A3B8" }}>per 1 Million Tokens (100x CHEAPER)</div>
          <div style={{ marginTop: 24, fontSize: 16, color: "#CBD5E1" }}>Local inference, Zero Rate Limits, Full Privacy.</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 9. DeepSeek Code 2.0 & Codex Router (233.1s - 277.1s / 1320 frames)
export const SceneDeepSeekCode20: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const isSpecCard = frame > 680;

  return (
    <AbsoluteFill style={{ backgroundColor: "#06080E", justifyContent: "center", alignItems: "center" }}>
      {!isSpecCard ? (
        /* Codex Router Desktop Screen Recording */
        <div style={{ width: 1680, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 60px rgba(0,0,0,0.9)" }}>
          <Img src={staticFile("evidence/frame_extra_0670s.jpg")} style={{ width: "100%", display: "block" }} />
        </div>
      ) : (
        /* DeepSeek Code 2.0 Specifications */
        <div
          style={{
            width: 1500,
            backgroundColor: "rgba(15, 23, 42, 0.95)",
            borderRadius: 24,
            padding: 50,
            border: "2px solid #38BDF8",
            boxShadow: "0 30px 70px rgba(56, 189, 248, 0.2)",
            display: "flex",
            alignItems: "center",
            gap: 60,
          }}
        >
          <DeepSeekLogo size={140} />
          <div style={{ flex: 1, fontFamily: "sans-serif", color: "#FFF" }}>
            <div style={{ fontSize: 44, fontWeight: 900, color: "#38BDF8" }}>DEEPSEEK CODE 2.0</div>
            <div style={{ fontSize: 18, color: "#94A3B8", marginBottom: 30 }}>THE OPEN-WEIGHT WEAPON OF 2026</div>

            <div style={{ fontSize: 24, margin: "14px 0", color: "#F8FAFC" }}>⚡ <strong style={{ color: "#38BDF8" }}>3 Trillion Parameters</strong> (Sparse MoE Architecture)</div>
            <div style={{ fontSize: 24, margin: "14px 0", color: "#F8FAFC" }}>🧠 <strong style={{ color: "#10B981" }}>1 Million Token</strong> Native Context Window</div>
            <div style={{ fontSize: 24, margin: "14px 0", color: "#F8FAFC" }}>💻 <strong style={{ color: "#F59E0B" }}>Built-in Computer-Use</strong> & Autonomous Shell Execution</div>
            <div style={{ fontSize: 24, margin: "14px 0", color: "#F8FAFC" }}>🔓 <strong style={{ color: "#FFF" }}>100% Open Weights</strong>: Local, Uncensored, Unstoppable</div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

// 10. Geopolitical Suicide: Donald Trump Speech (277.1s - 300.5s / 702 frames)
export const SceneGeopoliticalSuicide: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#06080E", justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          width: 1650,
          height: 920,
          borderRadius: 16,
          overflow: "hidden",
          position: "relative",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.9)",
        }}
      >
        <Img src={staticFile("evidence/frame_0105s.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />

        {/* Kinetic Headline Pill */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            backgroundColor: "rgba(220, 38, 38, 0.9)",
            color: "#FFFFFF",
            padding: "12px 28px",
            borderRadius: 8,
            fontFamily: "'Impact', sans-serif",
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          NO FRONTIER PAUSE
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 11. Final Takeaway & Outro (300.5s - 326.38s / 776 frames)
export const SceneFinalTakeaway: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#06080E", justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 1400 }}>
        <div style={{ fontSize: 20, color: "#38BDF8", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
          THE REAL FRONTIER REALITY
        </div>
        <div style={{ fontSize: 52, fontWeight: 900, color: "#FFFFFF", margin: "20px 0 40px", lineHeight: 1.2 }}>
          "Watch what they commit to GitHub.<br />Watch what gets pushed to model routers."
        </div>

        {/* Logos Bar */}
        <div style={{ display: "flex", gap: 60, justifyContent: "center", alignItems: "center", marginTop: 40 }}>
          <AnthropicLogo size={56} />
          <OpenAILogo size={56} color="#10B981" />
          <DeepSeekLogo size={56} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
