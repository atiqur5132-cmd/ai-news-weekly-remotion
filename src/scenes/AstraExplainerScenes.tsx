import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Video } from "remotion";
import { CinematicScreenRecord } from "../components/CinematicScreenRecord";
import { VideoPlayerView } from "../components/VideoPlayerView";
import { OpenAILogo, DeepSeekLogo, AnthropicLogo, GoogleOfficialLogo, XLogo } from "../components/RealLogos";
import { Atmosphere } from "../components/Atmosphere";
import { Terminal, Cpu, Zap, GitBranch, Layers, ShieldCheck, Play, Activity, Sparkles } from "lucide-react";

// ==========================================
// SCENE 1: COLD OPEN HOOK (Frames 0 -> 1280)
// ==========================================
export const Scene1_ColdOpenHook: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#05070E" }}>
      <Atmosphere />

      {/* Beat 1: Frames 0 -> 240: Disruptive Teaser: Video-In, Playable Game Out */}
      {frame < 240 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, position: "relative", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
            <Video
              src={staticFile("evidence/steam_game_rebuild.mp4")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              muted
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(2,6,23,0.75) 0%, rgba(2,6,23,0.3) 50%, rgba(2,6,23,0.95) 100%)" }} />
            
            {/* Top Brand Pill */}
            <div style={{ position: "absolute", top: 40, left: 60, display: "flex", alignItems: "center", gap: 14, background: "rgba(15,23,42,0.9)", padding: "10px 24px", borderRadius: 30, border: "1px solid rgba(255,255,255,0.15)" }}>
              <OpenAILogo size={32} color="#10A37F" />
              <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 18, letterSpacing: 2 }}>GPT-6 ASTRA BREAKTHROUGH</span>
            </div>

            {/* Kinetic Center Headline (Strictly 3-5 words max) */}
            <div style={{ position: "absolute", bottom: 80, left: 60, right: 60 }}>
              <div style={{ color: "#38BDF8", fontSize: 24, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>
                Autonomous Software Synthesis
              </div>
              <div style={{ color: "#FFFFFF", fontSize: 56, fontWeight: 900, lineHeight: 1.1, textTransform: "uppercase" }}>
                Video In. Playable Code Out.
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 2: Frames 240 -> 490: Authentic Tweet Card: @noclipepe */}
      {frame >= 240 && frame < 490 && (
        <CinematicScreenRecord
          mediaSrc="evidence/steam_game_rebuild_card.png"
          sourceUrl="x.com/noclipepe/status/2099278496509952485"
          durationInFrames={250}
          brandLogo={<OpenAILogo size={24} color="#10A37F" />}
          brandName="GPT-6 Astra"
          badgeColor="#38BDF8"
          headlineBadge="Steam Game Rebuild"
        />
      )}

      {/* Beat 3: Frames 490 -> 800: Mario Kart Single File Flash Teaser */}
      {frame >= 490 && frame < 800 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, position: "relative", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(245, 158, 11, 0.4)" }}>
            <Video
              src={staticFile("evidence/mario_kart_clone.mp4")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              muted
            />
            <div style={{ position: "absolute", top: 40, left: 60, background: "rgba(15,23,42,0.92)", padding: "10px 24px", borderRadius: 30, border: "1px solid rgba(245, 158, 11, 0.5)", display: "flex", alignItems: "center", gap: 12 }}>
              <Zap size={24} color="#F59E0B" />
              <span style={{ color: "#F59E0B", fontWeight: 800, fontSize: 18, letterSpacing: 1.5 }}>SINGLE .HTML FILE: MARIO KART WII</span>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 4: Frames 800 -> 994: Leak Alert: GPT-6 Sol Leaked */}
      {frame >= 800 && frame < 994 && (
        <CinematicScreenRecord
          mediaSrc="evidence/gpt6_sol_leak_card.png"
          sourceUrl="x.com/blueemi99/status/2099470924722393456"
          durationInFrames={194}
          brandLogo={<OpenAILogo size={24} color="#10A37F" />}
          brandName="OpenAI Leak"
          badgeColor="#EC4899"
          headlineBadge="Model: gpt-6-sol"
        />
      )}

      {/* Beat 5: Frames 994 -> 1280: Sam Altman Video Clip Teaser */}
      {frame >= 994 && (
        <VideoPlayerView
          videoSrc="evidence/sam_altman_agents.mp4"
          title="SAM ALTMAN: THOUSANDS OF AGENTS RUNNING OVERNIGHT"
          durationInFrames={286}
        />
      )}
    </AbsoluteFill>
  );
};

// ========================================================
// SCENE 2: STEAM GAME RECONSTRUCTION (Frames 1280 -> 2820)
// ========================================================
export const Scene2_SteamGameRebuild: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#05070E" }}>
      <Atmosphere />

      {/* Beat 1: Frames 0 -> 240: Desktop inspection of Noclipepe's Tweet */}
      {frame < 240 && (
        <CinematicScreenRecord
          mediaSrc="evidence/steam_game_rebuild_desktop.png"
          sourceUrl="x.com/noclipepe/status/2099278496509952485"
          durationInFrames={240}
          brandLogo={<XLogo size={24} color="#FFFFFF" />}
          brandName="X Timeline"
          badgeColor="#38BDF8"
          headlineBadge="Developer Evidence"
        />
      )}

      {/* Beat 2: Frames 240 -> 640: Full-Screen Side-by-Side Gameplay Video */}
      {frame >= 240 && frame < 640 && (
        <VideoPlayerView
          videoSrc="evidence/steam_game_rebuild.mp4"
          title="LEFT: HOW TO FISH (STEAM) | RIGHT: GPT-6 ASTRA REBUILD"
          durationInFrames={400}
        />
      )}

      {/* Beat 3: Frames 640 -> 970: Dynamic Physics & Mechanics Inspection */}
      {frame >= 640 && frame < 970 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, display: "flex", gap: 32 }}>
            {/* Left: Video clip looping on the physics */}
            <div style={{ flex: 1.2, borderRadius: 20, overflow: "hidden", border: "1px solid rgba(56, 189, 248, 0.4)", position: "relative" }}>
              <Video
                src={staticFile("evidence/steam_game_rebuild.mp4")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                muted
              />
              <div style={{ position: "absolute", top: 24, left: 24, background: "rgba(2,6,23,0.85)", padding: "8px 18px", borderRadius: 16, border: "1px solid #38BDF8", color: "#38BDF8", fontSize: 14, fontWeight: 700 }}>
                ACTIVE SIMULATION
              </div>
            </div>

            {/* Right: Technical Physics Breakdown */}
            <div style={{ flex: 0.8, background: "rgba(15, 23, 42, 0.95)", borderRadius: 20, border: "1px solid rgba(51, 65, 85, 0.8)", padding: 40, display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
              <div style={{ color: "#38BDF8", fontSize: 16, fontWeight: 800, letterSpacing: 2 }}>SYNTHESIZED MECHANICS</div>
              
              <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: "rgba(2,6,23,0.6)", borderRadius: 14, border: "1px solid rgba(56, 189, 248, 0.2)" }}>
                <Activity size={28} color="#38BDF8" />
                <div>
                  <div style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 700 }}>Bending Rod Tension</div>
                  <div style={{ color: "#94A3B8", fontSize: 14 }}>Elastic deformation calculated per frame</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: "rgba(2,6,23,0.6)", borderRadius: 14, border: "1px solid rgba(56, 189, 248, 0.2)" }}>
                <Layers size={28} color="#10B981" />
                <div>
                  <div style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 700 }}>Dynamic Fish Flopping</div>
                  <div style={{ color: "#94A3B8", fontSize: 14 }}>Active collision meshes & gravity</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: "rgba(2,6,23,0.6)", borderRadius: 14, border: "1px solid rgba(56, 189, 248, 0.2)" }}>
                <GitBranch size={28} color="#F59E0B" />
                <div>
                  <div style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 700 }}>Economy & State Saves</div>
                  <div style={{ color: "#94A3B8", fontSize: 14 }}>Inventory system, 6 species & store logic</div>
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 4: Frames 970 -> 1250: Feature Checklist & State Logic */}
      {frame >= 970 && frame < 1250 && (
        <CinematicScreenRecord
          mediaSrc="evidence/steam_game_rebuild_card.png"
          sourceUrl="x.com/noclipepe/status/2099278496509952485"
          durationInFrames={280}
          brandLogo={<OpenAILogo size={24} color="#10A37F" />}
          brandName="GPT-6 Astra"
          badgeColor="#10B981"
          headlineBadge="Full Loop Generated"
        />
      )}

      {/* Beat 5: Frames 1250 -> 1540: Video-to-Code Pipeline Flowchart */}
      {frame >= 1250 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.95)", borderRadius: 24, border: "1px solid rgba(56, 189, 248, 0.3)", padding: 60, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <OpenAILogo size={40} color="#10A37F" />
                <span style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>GPT-6 ASTRA REVERSE SYNTHESIS</span>
              </div>
              <span style={{ padding: "8px 20px", background: "rgba(56, 189, 248, 0.15)", border: "1px solid #38BDF8", borderRadius: 20, color: "#38BDF8", fontSize: 14, fontWeight: 700 }}>
                ZERO MANUAL BOILERPLATE
              </span>
            </div>

            {/* 3-Step Node Diagram */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
              <div style={{ flex: 1, background: "rgba(15,23,42,0.9)", border: "1px solid rgba(51,65,85,0.8)", borderRadius: 16, padding: 32, textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(56,189,248,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#38BDF8" }}>
                  <Play size={28} />
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Raw Gameplay Video</div>
                <div style={{ color: "#94A3B8", fontSize: 15 }}>Frame-by-frame visual dynamics & physics inference</div>
              </div>

              <div style={{ color: "#38BDF8", fontSize: 36, fontWeight: 900 }}>➔</div>

              <div style={{ flex: 1, background: "rgba(15,23,42,0.9)", border: "1px solid rgba(56,189,248,0.4)", borderRadius: 16, padding: 32, textAlign: "center", boxShadow: "0 0 30px rgba(56,189,248,0.15)" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#10B981" }}>
                  <Cpu size={28} />
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>State Machine Synthesis</div>
                <div style={{ color: "#94A3B8", fontSize: 15 }}>Collision matrices, state transitions, item economy</div>
              </div>

              <div style={{ color: "#38BDF8", fontSize: 36, fontWeight: 900 }}>➔</div>

              <div style={{ flex: 1, background: "rgba(15,23,42,0.9)", border: "1px solid rgba(51,65,85,0.8)", borderRadius: 16, padding: 32, textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(245,158,11,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#F59E0B" }}>
                  <Terminal size={28} />
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Executable Codebase</div>
                <div style={{ color: "#94A3B8", fontSize: 15 }}>Self-contained HTML5/Canvas game loop running in browser</div>
              </div>
            </div>

            <div style={{ color: "#64748B", fontSize: 15, textAlign: "center" }}>
              Inference pipeline running via AIML API endpoint using GPT-6 Astra Pro
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

// ========================================================
// SCENE 3: MARIO KART WII SINGLE FILE (Frames 2820 -> 3880)
// ========================================================
export const Scene3_MarioKartSingleFile: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#05070E" }}>
      <Atmosphere />

      {/* Beat 1: Frames 0 -> 320: Full-Screen 60FPS Real Gameplay */}
      {frame < 320 && (
        <VideoPlayerView
          videoSrc="evidence/mario_kart_clone.mp4"
          title="MARIO KART WII CLONE (100% STANDALONE SINGLE .HTML FILE)"
          durationInFrames={320}
        />
      )}

      {/* Beat 2: Frames 320 -> 540: Flat Tweet Card Inspection: @LuminaBench */}
      {frame >= 320 && frame < 540 && (
        <CinematicScreenRecord
          mediaSrc="evidence/mario_kart_clone_card.png"
          sourceUrl="x.com/LuminaBench/status/2099487526289321993"
          durationInFrames={220}
          brandLogo={<XLogo size={24} color="#FFFFFF" />}
          brandName="Lumina Bench"
          badgeColor="#F59E0B"
          headlineBadge="Single File Engine"
        />
      )}

      {/* Beat 3: Frames 540 -> 780: Drifting & Shell Physics Gameplay */}
      {frame >= 540 && frame < 780 && (
        <VideoPlayerView
          videoSrc="evidence/mario_kart_clone.mp4"
          title="4 TRACKS | 8 RACERS | DRIFTING & BOT AI ENGINE"
          durationInFrames={240}
        />
      )}

      {/* Beat 4: Frames 780 -> 1060: Architecture Cutaway */}
      {frame >= 780 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.96)", borderRadius: 24, border: "1px solid rgba(245, 158, 11, 0.4)", padding: 50, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Zap size={36} color="#F59E0B" />
                <span style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>STANDALONE 3D ENGINE IN 1 FILE</span>
              </div>
              <span style={{ padding: "8px 20px", background: "rgba(245, 158, 11, 0.15)", border: "1px solid #F59E0B", borderRadius: 20, color: "#F59E0B", fontSize: 14, fontWeight: 700 }}>
                NO EXTERNAL PACKAGES
              </span>
            </div>

            {/* 4 Feature Pillars */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div style={{ background: "rgba(15,23,42,0.85)", border: "1px solid rgba(51,65,85,0.7)", borderRadius: 16, padding: 24 }}>
                <div style={{ color: "#F59E0B", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>4 Procedural Race Courses</div>
                <div style={{ color: "#94A3B8", fontSize: 14 }}>Custom track elevation, loop collisions & boost pads encoded in math.</div>
              </div>
              <div style={{ background: "rgba(15,23,42,0.85)", border: "1px solid rgba(51,65,85,0.7)", borderRadius: 16, padding: 24 }}>
                <div style={{ color: "#38BDF8", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Item & Projectile Physics</div>
                <div style={{ color: "#94A3B8", fontSize: 14 }}>Homing red shells, bouncing green shells & banana spin-out vectors.</div>
              </div>
              <div style={{ background: "rgba(15,23,42,0.85)", border: "1px solid rgba(51,65,85,0.7)", borderRadius: 16, padding: 24 }}>
                <div style={{ color: "#10B981", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>8 Playable Racers + AI Bots</div>
                <div style={{ color: "#94A3B8", fontSize: 14 }}>Real-time pathfinding bots with variable difficulty heuristics.</div>
              </div>
              <div style={{ background: "rgba(15,23,42,0.85)", border: "1px solid rgba(51,65,85,0.7)", borderRadius: 16, padding: 24 }}>
                <div style={{ color: "#EC4899", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Synthesized Audio Engine</div>
                <div style={{ color: "#94A3B8", fontSize: 14 }}>WebAudio API chiptune music & sound FX with zero external MP3s.</div>
              </div>
            </div>

            <div style={{ color: "#64748B", fontSize: 15, textAlign: "center" }}>
              GPT-6 Astra generated complete engine in one continuous zero-shot session
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

// ==============================================================
// SCENE 4: SAM ALTMAN'S AGENTS & GPT-6 SOL (Frames 3880 -> 5230)
// ==============================================================
export const Scene4_SamAltmanAgentArmy: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#05070E" }}>
      <Atmosphere />

      {/* Beat 1: Frames 0 -> 340: Sam Altman Video Clip */}
      {frame < 340 && (
        <VideoPlayerView
          videoSrc="evidence/sam_altman_agents.mp4"
          title="SAM ALTMAN INTERVIEW: 'THOUSANDS OF AGENTS RUNNING WITH GPT-6 ASTRA'"
          durationInFrames={340}
        />
      )}

      {/* Beat 2: Frames 340 -> 660: Overnight Autonomous Fleet Node Graph */}
      {frame >= 340 && frame < 660 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.96)", borderRadius: 24, border: "1px solid rgba(16, 185, 129, 0.4)", padding: 60, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <OpenAILogo size={40} color="#10A37F" />
                <span style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>AUTONOMOUS FLEET ORCHESTRATION</span>
              </div>
              <span style={{ padding: "8px 20px", background: "rgba(16, 185, 129, 0.15)", border: "1px solid #10B981", borderRadius: 20, color: "#10B981", fontSize: 14, fontWeight: 700 }}>
                THOUSANDS OF CONCURRENT AGENTS
              </span>
            </div>

            {/* Agent Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
              {[
                { title: "Agent Tier 1", task: "Literature & SOTA Search", color: "#38BDF8" },
                { title: "Agent Tier 2", task: "Multi-File Refactoring", color: "#10B981" },
                { title: "Agent Tier 3", task: "Continuous Unit Testing", color: "#F59E0B" },
                { title: "Agent Tier 4", task: "PR Review & Auto-Deploy", color: "#EC4899" },
              ].map((a, i) => (
                <div key={i} style={{ background: "rgba(15,23,42,0.9)", border: `1px solid ${a.color}44`, borderRadius: 16, padding: 24, textAlign: "center" }}>
                  <div style={{ color: a.color, fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{a.title}</div>
                  <div style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 600 }}>{a.task}</div>
                  <div style={{ marginTop: 14, padding: "4px 10px", background: "rgba(2,6,23,0.8)", borderRadius: 8, color: "#94A3B8", fontSize: 12 }}>
                    Executing Unsupervised
                  </div>
                </div>
              ))}
            </div>

            <div style={{ color: "#94A3B8", fontSize: 16, textAlign: "center" }}>
              "Every night, I have a few thousand agents running with GPT-6 Astra" — Sam Altman
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: Frames 660 -> 1030: GPT-6 Sol API Leak Card */}
      {frame >= 660 && frame < 1030 && (
        <CinematicScreenRecord
          mediaSrc="evidence/gpt6_sol_leak_card.png"
          sourceUrl="x.com/blueemi99/status/2099470924722393456"
          durationInFrames={370}
          brandLogo={<OpenAILogo size={24} color="#10A37F" />}
          brandName="API Leak"
          badgeColor="#EC4899"
          headlineBadge="Model: gpt-6-sol"
        />
      )}

      {/* Beat 4: Frames 1030 -> 1350: Astra vs Sol Benchmark Comparison */}
      {frame >= 1030 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.96)", borderRadius: 24, border: "1px solid rgba(236, 72, 153, 0.4)", padding: 60, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <OpenAILogo size={40} color="#EC4899" />
                <span style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>OPENAI MODEL ROSTER (LEAKED TELEMETRY)</span>
              </div>
            </div>

            {/* Side-by-side: Astra vs Sol */}
            <div style={{ display: "flex", gap: 40 }}>
              <div style={{ flex: 1, background: "rgba(15,23,42,0.9)", border: "1px solid rgba(56, 189, 248, 0.4)", borderRadius: 20, padding: 36 }}>
                <div style={{ color: "#38BDF8", fontSize: 24, fontWeight: 800, marginBottom: 8 }}>GPT-6 Astra</div>
                <div style={{ color: "#94A3B8", fontSize: 16, marginBottom: 20 }}>The Autonomous Enterprise Generalist</div>
                <div style={{ color: "#FFFFFF", fontSize: 16, lineHeight: 1.8 }}>
                  • Multimodal visual-to-code synthesis<br />
                  • Browser environment interaction<br />
                  • High-throughput parallel agent execution
                </div>
              </div>

              <div style={{ flex: 1, background: "rgba(15,23,42,0.9)", border: "1px solid rgba(236, 72, 153, 0.6)", borderRadius: 20, padding: 36, boxShadow: "0 0 40px rgba(236, 72, 153, 0.15)" }}>
                <div style={{ color: "#EC4899", fontSize: 24, fontWeight: 800, marginBottom: 8 }}>GPT-6 Sol (Leaked)</div>
                <div style={{ color: "#94A3B8", fontSize: 16, marginBottom: 20 }}>The Deep Architecture & System Planner</div>
                <div style={{ color: "#FFFFFF", fontSize: 16, lineHeight: 1.8 }}>
                  • Extreme multi-hop reasoning loops<br />
                  • Recursive self-correction without human oversight<br />
                  • Beats Astra on long-horizon software benchmarks
                </div>
              </div>
            </div>

            <div style={{ color: "#64748B", fontSize: 15, textAlign: "center" }}>
              Appearing in developer API endpoints ahead of OpenAI DevDay 2026
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

// ==============================================================
// SCENE 5: DEEPSEEK HARNESS THREAT (Frames 5230 -> 6660)
// ==============================================================
export const Scene5_DeepSeekHarnessThreat: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#05070E" }}>
      <Atmosphere />

      {/* Beat 1: Frames 0 -> 370: Flat Tweet Inspection of @sauda_coder (45K+ views) */}
      {frame < 370 && (
        <CinematicScreenRecord
          mediaSrc="evidence/deepseek_harness_card.png"
          sourceUrl="x.com/sauda_coder/status/2099333079567671797"
          durationInFrames={370}
          brandLogo={<DeepSeekLogo size={24} color="#4D6BFE" />}
          brandName="DeepSeek"
          badgeColor="#4D6BFE"
          headlineBadge="45,000+ Views Viral"
        />
      )}

      {/* Beat 2: Frames 370 -> 720: Full-Screen Real Terminal Video */}
      {frame >= 370 && frame < 720 && (
        <VideoPlayerView
          videoSrc="evidence/deepseek_harness.mp4"
          title="DEEPSEEK-HARNESS: AUTONOMOUS TEST HEALING & TERMINAL EXECUTION"
          durationInFrames={350}
        />
      )}

      {/* Beat 3: Frames 720 -> 1080: DeepSeek Harness Loop Flowchart */}
      {frame >= 720 && frame < 1080 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.96)", borderRadius: 24, border: "1px solid rgba(77, 107, 254, 0.4)", padding: 60, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <DeepSeekLogo size={40} color="#4D6BFE" />
                <span style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>DEEPSEEK-HARNESS AGENT WORKFLOW</span>
              </div>
              <span style={{ padding: "8px 20px", background: "rgba(77, 107, 254, 0.15)", border: "1px solid #4D6BFE", borderRadius: 20, color: "#4D6BFE", fontSize: 14, fontWeight: 700 }}>
                100% LOCAL-FIRST & OPEN
              </span>
            </div>

            {/* Loop Steps */}
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              {[
                { num: "01", title: "CLI Hook", desc: "Listens directly to local codebase" },
                { num: "02", title: "Multi-File Patch", desc: "Refactors across dozens of files" },
                { num: "03", title: "Test Suite Run", desc: "Spins up Jest, PyTest, or Cargo" },
                { num: "04", title: "Exception Healing", desc: "Self-corrects until 100% tests pass" },
              ].map((s, i) => (
                <div key={i} style={{ flex: 1, background: "rgba(15,23,42,0.9)", border: "1px solid rgba(51,65,85,0.8)", borderRadius: 16, padding: 24 }}>
                  <div style={{ color: "#4D6BFE", fontSize: 16, fontWeight: 800, marginBottom: 8 }}>{s.num}</div>
                  <div style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{s.title}</div>
                  <div style={{ color: "#94A3B8", fontSize: 13 }}>{s.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ color: "#94A3B8", fontSize: 16, textAlign: "center" }}>
              Completely bypasses closed $200/month proprietary agent sandboxes
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 4: Frames 1080 -> 1430: Token Pricing & Open Moat Clash */}
      {frame >= 1080 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.96)", borderRadius: 24, border: "1px solid rgba(16, 185, 129, 0.4)", padding: 60, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <ShieldCheck size={36} color="#10B981" />
                <span style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>THE ECONOMICS OF AUTONOMOUS CODING</span>
              </div>
            </div>

            {/* Split Comparison */}
            <div style={{ display: "flex", gap: 40 }}>
              <div style={{ flex: 1, background: "rgba(15,23,42,0.9)", border: "1px solid rgba(239, 68, 68, 0.4)", borderRadius: 20, padding: 36 }}>
                <div style={{ color: "#EF4444", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Closed Proprietary Labs</div>
                <div style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 900, margin: "16px 0" }}>$200 / mo</div>
                <div style={{ color: "#94A3B8", fontSize: 16, lineHeight: 1.8 }}>
                  • Fixed enterprise seat licenses<br />
                  • Cloud sandbox rate limits<br />
                  • Closed execution boundaries
                </div>
              </div>

              <div style={{ flex: 1, background: "rgba(15,23,42,0.9)", border: "1px solid rgba(16, 185, 129, 0.6)", borderRadius: 20, padding: 36, boxShadow: "0 0 40px rgba(16, 185, 129, 0.15)" }}>
                <div style={{ color: "#10B981", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>DeepSeek V4.1 Flash + Harness</div>
                <div style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 900, margin: "16px 0" }}>$0.0001 / token</div>
                <div style={{ color: "#94A3B8", fontSize: 16, lineHeight: 1.8 }}>
                  • Unlimited local terminal execution<br />
                  • 100x cheaper per reasoning loop<br />
                  • Downloadable & private codebases
                </div>
              </div>
            </div>

            <div style={{ color: "#64748B", fontSize: 15, textAlign: "center" }}>
              Open weights are dismantling the closed software engineering moat
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

// ==============================================================
// SCENE 6: DEVELOPER REALITY & OUTRO (Frames 6660 -> 7558)
// ==============================================================
export const Scene6_DeveloperRealityOutro: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#05070E" }}>
      <Atmosphere />

      {/* Beat 1: Frames 0 -> 320: Kinetic Typography Takeaway */}
      {frame < 320 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1500, textAlign: "center" }}>
            <div style={{ color: "#38BDF8", fontSize: 22, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>
              The 2026 Developer Reality
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 58, fontWeight: 900, lineHeight: 1.15, textTransform: "uppercase" }}>
              Programmers Aren't Replaced by AI.<br />
              <span style={{ color: "#10B981" }}>They Are Replaced by Developers</span><br />
              Who Deploy Thousands of Agents.
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 2: Frames 320 -> 650: Rapid Montage of All 3 Real Videos */}
      {frame >= 320 && frame < 650 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(56, 189, 248, 0.4)" }}>
              <Video src={staticFile("evidence/steam_game_rebuild.mp4")} style={{ width: "100%", height: "100%", objectFit: "cover" }} muted />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(245, 158, 11, 0.4)" }}>
              <Video src={staticFile("evidence/mario_kart_clone.mp4")} style={{ width: "100%", height: "100%", objectFit: "cover" }} muted />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(77, 107, 254, 0.4)" }}>
              <Video src={staticFile("evidence/deepseek_harness.mp4")} style={{ width: "100%", height: "100%", objectFit: "cover" }} muted />
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: Frames 650 -> 898: Authoritative Final Closing Card */}
      {frame >= 650 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.96)", borderRadius: 24, border: "1px solid rgba(56, 189, 248, 0.3)", padding: 60, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <OpenAILogo size={40} color="#10A37F" />
              <DeepSeekLogo size={40} color="#4D6BFE" />
              <AnthropicLogo size={40} color="#D97706" />
              <GoogleOfficialLogo size={40} />
            </div>

            <div>
              <div style={{ color: "#94A3B8", fontSize: 20, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
                The Autonomous Software Shift
              </div>
              <div style={{ color: "#FFFFFF", fontSize: 52, fontWeight: 900, textTransform: "uppercase" }}>
                How Many Agents Are Working For You Tonight?
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ padding: "12px 32px", background: "#38BDF8", borderRadius: 30, color: "#000000", fontWeight: 800, fontSize: 16, letterSpacing: 1 }}>
                SUBSCRIBE FOR DEEP AI REVELATIONS
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
