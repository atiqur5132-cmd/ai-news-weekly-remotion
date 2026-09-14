import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Video } from "remotion";
import { VideoPlayerView } from "../components/VideoPlayerView";
import { AuthenticTweetPost } from "../components/AuthenticTweetPost";
import { OpenAILogo, DeepSeekLogo, AnthropicLogo, GoogleOfficialLogo, XLogo } from "../components/RealLogos";
import { Atmosphere } from "../components/Atmosphere";
import { Terminal, Cpu, Zap, GitBranch, Layers, ShieldCheck, Play, Activity, Sparkles, CheckCircle2 } from "lucide-react";

// ==========================================
// SCENE 1: COLD OPEN HOOK (Frames 0 -> 1280)
// ==========================================
export const Scene1_ColdOpenHook: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#02040A" }}>
      <Atmosphere />

      {/* Beat 1A: Frames 0 -> 90: Dedicated Kinetic Title Hook (Zero text clashing over video!) */}
      {frame < 90 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.98)", borderRadius: 24, border: "1.5px solid rgba(56, 189, 248, 0.4)", padding: 80, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 40px 100px rgba(0,0,0,0.95)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <OpenAILogo size={44} color="#10A37F" />
              <span style={{ color: "#38BDF8", fontSize: 22, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase" }}>
                GPT-6 ASTRA DISRUPTIVE REVELATION
              </span>
            </div>

            <div>
              <div style={{ color: "#94A3B8", fontSize: 24, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
                AUTONOMOUS SOFTWARE SYNTHESIS
              </div>
              <div style={{ color: "#FFFFFF", fontSize: 74, fontWeight: 950, lineHeight: 1.05, textTransform: "uppercase" }}>
                VIDEO IN.<br />
                <span style={{ color: "#10B981" }}>PLAYABLE CODE OUT.</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ padding: "8px 20px", background: "rgba(16, 185, 129, 0.15)", border: "1px solid #10B981", borderRadius: 20, color: "#10B981", fontSize: 14, fontWeight: 700 }}>
                STEAM GAME REBUILT IN MINUTES
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 1B: Frames 90 -> 240: 100% Clean Uncropped Real Video (Zero Text Overlays!) */}
      {frame >= 90 && frame < 240 && (
        <VideoPlayerView
          videoSrc="evidence/steam_game_rebuild.mp4"
          title="HOW TO FISH (STEAM) REBUILT BY GPT-6 ASTRA FROM RAW GAMEPLAY"
          durationInFrames={150}
        />
      )}

      {/* Beat 2: Frames 240 -> 490: Authentic Dark-Mode Tweet Inspection: @noclipepe (Zero Spinner!) */}
      {frame >= 240 && frame < 490 && (
        <AuthenticTweetPost
          brandLogo={<OpenAILogo size={24} color="#10A37F" />}
          brandName="GPT-6 Astra"
          brandColor="#38BDF8"
          authorName="noclipepe"
          authorHandle="noclipepe"
          dateStr="Sep 13, 2026"
          tweetText={`GPT-6 ASTRA JUST REBUILT A REAL STEAM GAME FROM A SINGLE VIDEO\n\nLeft: How to Fish | Right: GPT-6 Astra rebuilding it from gameplay footage via @aimlapi.\n\nCast → hook → fight → reel → land with dynamic bending rod physics and collision meshes.`}
          highlightPhrase="VIDEO IN → PLAYABLE GAME OUT."
          mediaSrc="evidence/steam_game_poster.jpg"
          sourceUrl="x.com/noclipepe/status/2099278496509952485"
          durationInFrames={250}
        />
      )}

      {/* Beat 3: Frames 490 -> 800: Full 60FPS Mario Kart Single-File Demo */}
      {frame >= 490 && frame < 800 && (
        <VideoPlayerView
          videoSrc="evidence/mario_kart_clone.mp4"
          title="MARIO KART WII CLONE (100% STANDALONE SINGLE .HTML FILE)"
          durationInFrames={310}
        />
      )}

      {/* Beat 4: Frames 800 -> 994: Leak Alert: GPT-6 Sol Leaked in API */}
      {frame >= 800 && frame < 994 && (
        <AuthenticTweetPost
          brandLogo={<OpenAILogo size={24} color="#EC4899" />}
          brandName="OpenAI Leak"
          brandColor="#EC4899"
          authorName="bluedev"
          authorHandle="blueemi99"
          dateStr="Sep 14, 2026"
          tweetText={`GPT-6 Sol is coming soon, possibly before DevDay.\n\nThis is a leaked model output from the OpenAI API endpoint. It outperforms Astra on complex multi-hop system planning and recursive self-correction.`}
          highlightPhrase="Model 'gpt-6-sol' appeared in OpenAI API"
          sourceUrl="x.com/blueemi99/status/2099470924722393456"
          durationInFrames={194}
        />
      )}

      {/* Beat 5: Frames 994 -> 1280: Sam Altman Real Video Interview Clip */}
      {frame >= 994 && (
        <VideoPlayerView
          videoSrc="evidence/sam_altman_agents.mp4"
          title="SAM ALTMAN: 'THOUSANDS OF AGENTS RUNNING WITH GPT-6 ASTRA'"
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
    <AbsoluteFill style={{ backgroundColor: "#02040A" }}>
      <Atmosphere />

      {/* Beat 1: Frames 0 -> 240: Authentic Dark-Mode Tweet Post */}
      {frame < 240 && (
        <AuthenticTweetPost
          brandLogo={<OpenAILogo size={24} color="#10A37F" />}
          brandName="GPT-6 Astra"
          brandColor="#38BDF8"
          authorName="noclipepe"
          authorHandle="noclipepe"
          dateStr="Sep 13, 2026"
          tweetText={`He took raw gameplay footage of a commercial Steam fishing game called 'How to Fish' and fed the video directly into GPT-6 Astra via AIML API.\n\nAnd it got surprisingly close. Full game loop synthesized from scratch.`}
          highlightPhrase="Raw gameplay video fed directly into GPT-6 Astra"
          mediaSrc="evidence/steam_game_poster.jpg"
          sourceUrl="x.com/noclipepe/status/2099278496509952485"
          durationInFrames={240}
        />
      )}

      {/* Beat 2: Frames 240 -> 640: Full-Screen Side-by-Side Gameplay (100% Uncropped!) */}
      {frame >= 240 && frame < 640 && (
        <VideoPlayerView
          videoSrc="evidence/steam_game_rebuild.mp4"
          title="TOP: HOW TO FISH (STEAM) | BOTTOM: GPT-6 ASTRA REBUILD"
          durationInFrames={400}
        />
      )}

      {/* Beat 3: Frames 640 -> 970: Dynamic Physics & Mechanics Split Card */}
      {frame >= 640 && frame < 970 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, display: "flex", gap: 32 }}>
            {/* Left: Video container using contain so nothing is cropped */}
            <div style={{ flex: 1.1, borderRadius: 20, overflow: "hidden", border: "1px solid rgba(56, 189, 248, 0.4)", position: "relative", background: "#020617", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Video
                src={staticFile("evidence/steam_game_rebuild.mp4")}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                muted
              />
            </div>

            {/* Right: Technical Physics Breakdown */}
            <div style={{ flex: 0.9, background: "rgba(15, 23, 42, 0.96)", borderRadius: 20, border: "1px solid rgba(51, 65, 85, 0.8)", padding: 44, display: "flex", flexDirection: "column", justifyContent: "center", gap: 24, boxShadow: "0 30px 70px rgba(0,0,0,0.9)" }}>
              <div style={{ color: "#38BDF8", fontSize: 16, fontWeight: 800, letterSpacing: 2 }}>SYNTHESIZED GAME MECHANICS</div>
              
              <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px", background: "rgba(2,6,23,0.7)", borderRadius: 14, border: "1px solid rgba(56, 189, 248, 0.25)" }}>
                <Activity size={30} color="#38BDF8" />
                <div>
                  <div style={{ color: "#FFFFFF", fontSize: 19, fontWeight: 800 }}>Bending Rod Tension</div>
                  <div style={{ color: "#94A3B8", fontSize: 14, marginTop: 4 }}>Elastic deformation calculated per visual frame</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px", background: "rgba(2,6,23,0.7)", borderRadius: 14, border: "1px solid rgba(16, 185, 129, 0.25)" }}>
                <Layers size={30} color="#10B981" />
                <div>
                  <div style={{ color: "#FFFFFF", fontSize: 19, fontWeight: 800 }}>Dynamic Fish Flopping</div>
                  <div style={{ color: "#94A3B8", fontSize: 14, marginTop: 4 }}>Active collision meshes, ragdoll flopping & gravity</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px", background: "rgba(2,6,23,0.7)", borderRadius: 14, border: "1px solid rgba(245, 158, 11, 0.25)" }}>
                <GitBranch size={30} color="#F59E0B" />
                <div>
                  <div style={{ color: "#FFFFFF", fontSize: 19, fontWeight: 800 }}>Economy & Inventory Saves</div>
                  <div style={{ color: "#94A3B8", fontSize: 14, marginTop: 4 }}>Persistent shop currency, 6 fish species & grill system</div>
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 4: Frames 970 -> 1250: Feature Checklist Card */}
      {frame >= 970 && frame < 1250 && (
        <AuthenticTweetPost
          brandLogo={<OpenAILogo size={24} color="#10A37F" />}
          brandName="GPT-6 Astra"
          brandColor="#10B981"
          authorName="noclipepe"
          authorHandle="noclipepe"
          dateStr="Sep 13, 2026"
          tweetText={`Plus:\n• bending rod + dynamic fishing line\n• fish physics, flopping and collisions\n• 6 species + BIG BARRY\n• upgrades, money, journal + saves\n• you can even throw, punt and grill the fish`}
          highlightPhrase="Cast → hook → fight → reel → land"
          sourceUrl="x.com/noclipepe/status/2099278496509952485"
          durationInFrames={280}
        />
      )}

      {/* Beat 5: Frames 1250 -> 1540: Video-to-Code Reverse Synthesis Flowchart */}
      {frame >= 1250 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.98)", borderRadius: 24, border: "1px solid rgba(56, 189, 248, 0.35)", padding: 60, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 40px 100px rgba(0,0,0,0.95)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <OpenAILogo size={42} color="#10A37F" />
                <span style={{ fontSize: 28, fontWeight: 800, color: "#FFFFFF" }}>GPT-6 ASTRA REVERSE SYNTHESIS PIPELINE</span>
              </div>
              <span style={{ padding: "8px 20px", background: "rgba(56, 189, 248, 0.15)", border: "1px solid #38BDF8", borderRadius: 20, color: "#38BDF8", fontSize: 14, fontWeight: 700 }}>
                ZERO HUMAN INTERVENTION
              </span>
            </div>

            {/* 3-Step Flow */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28 }}>
              <div style={{ flex: 1, background: "rgba(15,23,42,0.92)", border: "1px solid rgba(51,65,85,0.8)", borderRadius: 18, padding: 36, textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(56,189,248,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#38BDF8" }}>
                  <Play size={32} />
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Visual Dynamics</div>
                <div style={{ color: "#94A3B8", fontSize: 15 }}>Temporal video frames decompiled into physics state transitions</div>
              </div>

              <div style={{ color: "#38BDF8", fontSize: 40, fontWeight: 900 }}>➔</div>

              <div style={{ flex: 1, background: "rgba(15,23,42,0.92)", border: "1px solid rgba(56,189,248,0.5)", borderRadius: 18, padding: 36, textAlign: "center", boxShadow: "0 0 35px rgba(56,189,248,0.18)" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#10B981" }}>
                  <Cpu size={32} />
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Logic AST Generation</div>
                <div style={{ color: "#94A3B8", fontSize: 15 }}>Collision matrices, inventory state trees & user input handlers</div>
              </div>

              <div style={{ color: "#38BDF8", fontSize: 40, fontWeight: 900 }}>➔</div>

              <div style={{ flex: 1, background: "rgba(15,23,42,0.92)", border: "1px solid rgba(51,65,85,0.8)", borderRadius: 18, padding: 36, textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(245,158,11,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#F59E0B" }}>
                  <Terminal size={32} />
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Executable Codebase</div>
                <div style={{ color: "#94A3B8", fontSize: 15 }}>Clean, zero-dependency HTML5 Canvas codebase running at 60 FPS</div>
              </div>
            </div>

            <div style={{ color: "#64748B", fontSize: 15, textAlign: "center" }}>
              Inference pipeline synthesized via AIML API endpoint using GPT-6 Astra Pro
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
    <AbsoluteFill style={{ backgroundColor: "#02040A" }}>
      <Atmosphere />

      {/* Beat 1: Frames 0 -> 320: Full 60FPS Uncropped Real Gameplay */}
      {frame < 320 && (
        <VideoPlayerView
          videoSrc="evidence/mario_kart_clone.mp4"
          title="MARIO KART WII CLONE (100% STANDALONE SINGLE .HTML FILE)"
          durationInFrames={320}
        />
      )}

      {/* Beat 2: Frames 320 -> 540: Authentic Tweet Post: @LuminaBench */}
      {frame >= 320 && frame < 540 && (
        <AuthenticTweetPost
          brandLogo={<Zap size={24} color="#F59E0B" />}
          brandName="Lumina Bench"
          brandColor="#F59E0B"
          authorName="Lumina"
          authorHandle="LuminaBench"
          dateStr="Sep 14, 2026"
          tweetText={`GPT-6 Astra Pro Mario Kart Wii clone\n- A Single .html file\n- 4 unique courses (started with 1 cup)\n- 8 playable characters + AI racers, item physics, drifting, audio engine\n- 60 FPS in browser with zero dependencies.`}
          highlightPhrase="A Single .html file — Zero External Frameworks"
          sourceUrl="x.com/LuminaBench/status/2099487526289321993"
          durationInFrames={220}
        />
      )}

      {/* Beat 3: Frames 540 -> 780: Drifting & Shell Physics Gameplay */}
      {frame >= 540 && frame < 780 && (
        <VideoPlayerView
          videoSrc="evidence/mario_kart_clone.mp4"
          title="4 TRACKS | 8 PLAYABLE RACERS | BOT AI & DRIFT PHYSICS"
          durationInFrames={240}
        />
      )}

      {/* Beat 4: Frames 780 -> 1060: Architecture Cutaway */}
      {frame >= 780 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.98)", borderRadius: 24, border: "1px solid rgba(245, 158, 11, 0.45)", padding: 54, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 40px 100px rgba(0,0,0,0.95)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Zap size={38} color="#F59E0B" />
                <span style={{ fontSize: 28, fontWeight: 800, color: "#FFFFFF" }}>STANDALONE 3D ENGINE IN A SINGLE FILE</span>
              </div>
              <span style={{ padding: "8px 20px", background: "rgba(245, 158, 11, 0.15)", border: "1px solid #F59E0B", borderRadius: 20, color: "#F59E0B", fontSize: 14, fontWeight: 700 }}>
                ZERO EXTERNAL ASSETS
              </span>
            </div>

            {/* 4 Feature Pillars */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div style={{ background: "rgba(15,23,42,0.9)", border: "1px solid rgba(51,65,85,0.75)", borderRadius: 16, padding: 28 }}>
                <div style={{ color: "#F59E0B", fontSize: 20, fontWeight: 800, marginBottom: 8 }}>4 Procedural Race Courses</div>
                <div style={{ color: "#94A3B8", fontSize: 15 }}>Custom track elevation, banking curves & boost pads calculated procedurally.</div>
              </div>
              <div style={{ background: "rgba(15,23,42,0.9)", border: "1px solid rgba(51,65,85,0.75)", borderRadius: 16, padding: 28 }}>
                <div style={{ color: "#38BDF8", fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Item & Projectile Collision</div>
                <div style={{ color: "#94A3B8", fontSize: 15 }}>Homing red shells, bouncing green shells & banana spin-out vectors.</div>
              </div>
              <div style={{ background: "rgba(15,23,42,0.9)", border: "1px solid rgba(51,65,85,0.75)", borderRadius: 16, padding: 28 }}>
                <div style={{ color: "#10B981", fontSize: 20, fontWeight: 800, marginBottom: 8 }}>8 Playable Racers + Bot AI</div>
                <div style={{ color: "#94A3B8", fontSize: 15 }}>Real-time obstacle avoidance heuristics and adaptive difficulty bots.</div>
              </div>
              <div style={{ background: "rgba(15,23,42,0.9)", border: "1px solid rgba(51,65,85,0.75)", borderRadius: 16, padding: 28 }}>
                <div style={{ color: "#EC4899", fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Synthesized Audio Engine</div>
                <div style={{ color: "#94A3B8", fontSize: 15 }}>WebAudio API chiptune music & sound FX with zero external MP3s.</div>
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
    <AbsoluteFill style={{ backgroundColor: "#02040A" }}>
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
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.98)", borderRadius: 24, border: "1px solid rgba(16, 185, 129, 0.45)", padding: 60, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 40px 100px rgba(0,0,0,0.95)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <OpenAILogo size={42} color="#10A37F" />
                <span style={{ fontSize: 28, fontWeight: 800, color: "#FFFFFF" }}>AUTONOMOUS FLEET ORCHESTRATION</span>
              </div>
              <span style={{ padding: "8px 20px", background: "rgba(16, 185, 129, 0.15)", border: "1px solid #10B981", borderRadius: 20, color: "#10B981", fontSize: 14, fontWeight: 700 }}>
                THOUSANDS OF CONCURRENT AGENTS
              </span>
            </div>

            {/* Agent Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
              {[
                { title: "Agent Tier 1", task: "Literature & SOTA Search", color: "#38BDF8" },
                { title: "Agent Tier 2", task: "Multi-File Refactoring", color: "#10B981" },
                { title: "Agent Tier 3", task: "Continuous Unit Testing", color: "#F59E0B" },
                { title: "Agent Tier 4", task: "PR Review & Auto-Deploy", color: "#EC4899" },
              ].map((a, i) => (
                <div key={i} style={{ background: "rgba(15,23,42,0.92)", border: `1px solid ${a.color}44`, borderRadius: 16, padding: 28, textAlign: "center" }}>
                  <div style={{ color: a.color, fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{a.title}</div>
                  <div style={{ color: "#FFFFFF", fontSize: 17, fontWeight: 700 }}>{a.task}</div>
                  <div style={{ marginTop: 14, padding: "6px 12px", background: "rgba(2,6,23,0.8)", borderRadius: 8, color: "#94A3B8", fontSize: 13 }}>
                    Executing Unsupervised
                  </div>
                </div>
              ))}
            </div>

            <div style={{ color: "#94A3B8", fontSize: 17, textAlign: "center", fontStyle: "italic" }}>
              "Every night, I have a few thousand agents running with GPT-6 Astra" — Sam Altman, CEO of OpenAI
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: Frames 660 -> 1030: Authentic Dark-Mode Tweet Post for GPT-6 Sol API Leak */}
      {frame >= 660 && frame < 1030 && (
        <AuthenticTweetPost
          brandLogo={<OpenAILogo size={24} color="#EC4899" />}
          brandName="API Leak"
          brandColor="#EC4899"
          authorName="bluedev"
          authorHandle="blueemi99"
          dateStr="Sep 14, 2026"
          tweetText={`Developers scanning the OpenAI API endpoint discovered direct model identifiers for 'gpt-6-sol'.\n\nLeaked telemetry suggests Sol is OpenAI's specialized high-reasoning engine designed for extreme multi-hop logic and recursive system planning.`}
          highlightPhrase="Model 'gpt-6-sol' discovered in OpenAI production API"
          sourceUrl="x.com/blueemi99/status/2099470924722393456"
          durationInFrames={370}
        />
      )}

      {/* Beat 4: Frames 1030 -> 1350: Astra vs Sol Leaked Architecture Comparison */}
      {frame >= 1030 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.98)", borderRadius: 24, border: "1px solid rgba(236, 72, 153, 0.45)", padding: 60, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 40px 100px rgba(0,0,0,0.95)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <OpenAILogo size={42} color="#EC4899" />
                <span style={{ fontSize: 28, fontWeight: 800, color: "#FFFFFF" }}>OPENAI MODEL ROSTER (LEAKED TELEMETRY)</span>
              </div>
            </div>

            {/* Side-by-side: Astra vs Sol */}
            <div style={{ display: "flex", gap: 40 }}>
              <div style={{ flex: 1, background: "rgba(15,23,42,0.92)", border: "1px solid rgba(56, 189, 248, 0.45)", borderRadius: 20, padding: 40 }}>
                <div style={{ color: "#38BDF8", fontSize: 26, fontWeight: 800, marginBottom: 8 }}>GPT-6 Astra</div>
                <div style={{ color: "#94A3B8", fontSize: 16, marginBottom: 24 }}>The Autonomous Enterprise Generalist</div>
                <div style={{ color: "#FFFFFF", fontSize: 17, lineHeight: 2.0 }}>
                  ✓ Multimodal visual-to-code synthesis<br />
                  ✓ Autonomous browser environment interaction<br />
                  ✓ High-throughput parallel agent loops
                </div>
              </div>

              <div style={{ flex: 1, background: "rgba(15,23,42,0.92)", border: "1px solid rgba(236, 72, 153, 0.65)", borderRadius: 20, padding: 40, boxShadow: "0 0 45px rgba(236, 72, 153, 0.18)" }}>
                <div style={{ color: "#EC4899", fontSize: 26, fontWeight: 800, marginBottom: 8 }}>GPT-6 Sol (Leaked)</div>
                <div style={{ color: "#94A3B8", fontSize: 16, marginBottom: 24 }}>The Deep Architecture & System Planner</div>
                <div style={{ color: "#FFFFFF", fontSize: 17, lineHeight: 2.0 }}>
                  ✓ Extreme multi-hop reasoning loops<br />
                  ✓ Recursive self-correction without human oversight<br />
                  ✓ Beats Astra on long-horizon software benchmarks
                </div>
              </div>
            </div>

            <div style={{ color: "#64748B", fontSize: 15, textAlign: "center" }}>
              Discovered in developer API endpoints ahead of OpenAI DevDay 2026
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
    <AbsoluteFill style={{ backgroundColor: "#02040A" }}>
      <Atmosphere />

      {/* Beat 1: Frames 0 -> 370: Authentic Dark-Mode Tweet Post for @sauda_coder (45K+ views) */}
      {frame < 370 && (
        <AuthenticTweetPost
          brandLogo={<DeepSeekLogo size={24} color="#4D6BFE" />}
          brandName="DeepSeek"
          brandColor="#4D6BFE"
          authorName="sauda moni"
          authorHandle="sauda_coder"
          dateStr="Sep 14, 2026"
          tweetText={`DEEPSEEK HAS JUST KILLED THE ENTIRE CODING AGENT INDUSTRY.\n\nIt's called deepseek-harness. It's the most complete framework for creating code agents with autonomous terminal execution, multi-file refactoring, and self-healing test loops.`}
          highlightPhrase="Open source. Claude costs $200 a month. This is FREE."
          sourceUrl="x.com/sauda_coder/status/2099333079567671797"
          durationInFrames={370}
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
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.98)", borderRadius: 24, border: "1px solid rgba(77, 107, 254, 0.45)", padding: 60, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 40px 100px rgba(0,0,0,0.95)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <DeepSeekLogo size={42} color="#4D6BFE" />
                <span style={{ fontSize: 28, fontWeight: 800, color: "#FFFFFF" }}>DEEPSEEK-HARNESS AGENT WORKFLOW</span>
              </div>
              <span style={{ padding: "8px 20px", background: "rgba(77, 107, 254, 0.15)", border: "1px solid #4D6BFE", borderRadius: 20, color: "#4D6BFE", fontSize: 14, fontWeight: 700 }}>
                100% LOCAL-FIRST & OPEN
              </span>
            </div>

            {/* Loop Steps */}
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              {[
                { num: "01", title: "CLI Hook", desc: "Listens directly to local repo changes" },
                { num: "02", title: "Multi-File Patch", desc: "Refactors across dozens of files" },
                { num: "03", title: "Test Suite Run", desc: "Spins up automated test environments" },
                { num: "04", title: "Exception Healing", desc: "Self-corrects until 100% tests pass" },
              ].map((s, i) => (
                <div key={i} style={{ flex: 1, background: "rgba(15,23,42,0.92)", border: "1px solid rgba(51,65,85,0.8)", borderRadius: 16, padding: 28 }}>
                  <div style={{ color: "#4D6BFE", fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{s.num}</div>
                  <div style={{ color: "#FFFFFF", fontSize: 19, fontWeight: 800, marginBottom: 6 }}>{s.title}</div>
                  <div style={{ color: "#94A3B8", fontSize: 14 }}>{s.desc}</div>
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
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.98)", borderRadius: 24, border: "1px solid rgba(16, 185, 129, 0.45)", padding: 60, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 40px 100px rgba(0,0,0,0.95)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <ShieldCheck size={38} color="#10B981" />
                <span style={{ fontSize: 28, fontWeight: 800, color: "#FFFFFF" }}>THE ECONOMICS OF AUTONOMOUS CODING</span>
              </div>
            </div>

            {/* Split Comparison */}
            <div style={{ display: "flex", gap: 40 }}>
              <div style={{ flex: 1, background: "rgba(15,23,42,0.92)", border: "1px solid rgba(239, 68, 68, 0.45)", borderRadius: 20, padding: 40 }}>
                <div style={{ color: "#EF4444", fontSize: 24, fontWeight: 800, marginBottom: 8 }}>Closed Proprietary Labs</div>
                <div style={{ color: "#FFFFFF", fontSize: 50, fontWeight: 900, margin: "16px 0" }}>$200 / mo</div>
                <div style={{ color: "#94A3B8", fontSize: 16, lineHeight: 2.0 }}>
                  • Fixed enterprise seat licenses<br />
                  • Cloud sandbox rate limits<br />
                  • Closed execution boundaries
                </div>
              </div>

              <div style={{ flex: 1, background: "rgba(15,23,42,0.92)", border: "1px solid rgba(16, 185, 129, 0.65)", borderRadius: 20, padding: 40, boxShadow: "0 0 45px rgba(16, 185, 129, 0.18)" }}>
                <div style={{ color: "#10B981", fontSize: 24, fontWeight: 800, marginBottom: 8 }}>DeepSeek V4.1 Flash + Harness</div>
                <div style={{ color: "#FFFFFF", fontSize: 50, fontWeight: 900, margin: "16px 0" }}>$0.0001 / token</div>
                <div style={{ color: "#94A3B8", fontSize: 16, lineHeight: 2.0 }}>
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
    <AbsoluteFill style={{ backgroundColor: "#02040A" }}>
      <Atmosphere />

      {/* Beat 1: Frames 0 -> 320: Kinetic Typography Takeaway */}
      {frame < 320 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1500, textAlign: "center" }}>
            <div style={{ color: "#38BDF8", fontSize: 22, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>
              The 2026 Developer Reality
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 62, fontWeight: 950, lineHeight: 1.15, textTransform: "uppercase" }}>
              Programmers Aren't Replaced by AI.<br />
              <span style={{ color: "#10B981" }}>They Are Replaced by Developers</span><br />
              Who Deploy Thousands of Agents.
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 2: Frames 320 -> 650: Outro Montage (3 Clean Uncropped Viewports) */}
      {frame >= 320 && frame < 650 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28 }}>
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(56, 189, 248, 0.45)", background: "#090E1A", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Video src={staticFile("evidence/steam_game_rebuild.mp4")} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} muted />
            </div>
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(245, 158, 11, 0.45)", background: "#090E1A", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Video src={staticFile("evidence/mario_kart_clone.mp4")} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} muted />
            </div>
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(77, 107, 254, 0.45)", background: "#090E1A", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Video src={staticFile("evidence/deepseek_harness.mp4")} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} muted />
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: Frames 650 -> 898: Authoritative Final Closing Card */}
      {frame >= 650 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 1760, height: 960, background: "rgba(9, 14, 26, 0.98)", borderRadius: 24, border: "1.5px solid rgba(56, 189, 248, 0.35)", padding: 60, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", textAlign: "center", boxShadow: "0 40px 100px rgba(0,0,0,0.95)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
              <OpenAILogo size={44} color="#10A37F" />
              <DeepSeekLogo size={44} color="#4D6BFE" />
              <AnthropicLogo size={44} color="#D97706" />
              <GoogleOfficialLogo size={44} />
            </div>

            <div>
              <div style={{ color: "#94A3B8", fontSize: 20, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
                The Autonomous Software Shift
              </div>
              <div style={{ color: "#FFFFFF", fontSize: 56, fontWeight: 950, textTransform: "uppercase" }}>
                How Many Agents Are Working For You Tonight?
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ padding: "14px 36px", background: "#38BDF8", borderRadius: 30, color: "#000000", fontWeight: 900, fontSize: 17, letterSpacing: 1.5 }}>
                SUBSCRIBE FOR DEEP AI REVELATIONS
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
