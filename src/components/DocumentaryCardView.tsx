import React from "react";
import { AbsoluteFill, Img, Video, staticFile, useCurrentFrame, spring, useVideoConfig } from "remotion";

interface DocumentaryCardViewProps {
  cardImage?: string;
  sourceHandle?: string;
  titleBadge?: string;
  authorName?: string;
  tweetText?: string;
  metrics?: {
    reposts?: string;
    likes?: string;
    views?: string;
    date?: string;
  };
  rightContent?: {
    type: "image" | "video" | "telemetry";
    src?: string;
    title?: string;
    stats?: Array<{ label: string; value: string; color?: string }>;
  };
}

export const DocumentaryCardView: React.FC<DocumentaryCardViewProps> = ({
  cardImage,
  sourceHandle = "@x",
  titleBadge = "VERIFIED TRANSMISSION",
  authorName,
  tweetText,
  metrics = { reposts: "142", likes: "1.2K", views: "85K", date: "Sep 2026" },
  rightContent,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.8 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#02040A",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* 1. Dynamic Ambient Grid & Radial Lighting (Canvas 100% full) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.22) 0%, rgba(2, 4, 10, 0.95) 80%), linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* 2. Top Telemetry Header Bar */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 48,
          right: 48,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#38BDF8", boxShadow: "0 0 10px #38BDF8" }} />
          <span style={{ color: "#38BDF8", fontSize: 13, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            EVIDENCE DOSSIER // {titleBadge}
          </span>
        </div>
        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            borderRadius: 20,
            padding: "4px 16px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ color: "#94A3B8", fontSize: 12, fontFamily: "monospace" }}>{sourceHandle}</span>
          <span style={{ color: "#38BDF8", fontSize: 12 }}>•</span>
          <span style={{ color: "#10B981", fontSize: 11, fontWeight: 700 }}>VERIFIED ON X</span>
        </div>
      </div>

      {/* 3. Wide 16:9 Dossier Container (Zero Black Void - 1820x940) */}
      <div
        style={{
          width: 1820,
          height: 940,
          marginTop: 36,
          backgroundColor: "#070B14",
          border: "1px solid rgba(56, 189, 248, 0.25)",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 35px 90px rgba(0, 0, 0, 0.95), 0 0 40px rgba(56, 189, 248, 0.12)",
          display: "flex",
          position: "relative",
          zIndex: 2,
          opacity: entrance,
          transform: `scale(${0.98 + 0.02 * entrance})`,
        }}
      >
        {/* If rightContent is provided, use 2-Column High-Impact Split */}
        {rightContent ? (
          <>
            {/* Left Column: Authentic Tweet Card View (48% width) */}
            <div
              style={{
                width: "48%",
                height: "100%",
                borderRight: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#0A0F1D",
                padding: "28px 32px",
                boxSizing: "border-box",
                justifyContent: "space-between",
              }}
            >
              {/* Tweet Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "#1E293B",
                      border: "2px solid #38BDF8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#38BDF8",
                      fontWeight: 800,
                      fontSize: 18,
                    }}
                  >
                    {sourceHandle.charAt(1).toUpperCase()}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: "#FFFFFF", fontSize: 17, fontWeight: 700 }}>
                        {authorName || sourceHandle.replace("@", "")}
                      </span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#38BDF8">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <span style={{ color: "#64748B", fontSize: 13, fontFamily: "monospace" }}>{sourceHandle}</span>
                  </div>
                </div>
                <div style={{ color: "#64748B", fontSize: 13 }}>{metrics.date}</div>
              </div>

              {/* Card Image or Native Text (CLEAN, ZERO HIGHLIGHTS) */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "18px 0",
                  overflow: "hidden",
                  borderRadius: 14,
                  backgroundColor: "#030712",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                {cardImage ? (
                  <Img
                    src={staticFile(cardImage)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                ) : (
                  <div style={{ padding: 24, color: "#E2E8F0", fontSize: 18, lineHeight: 1.6 }}>
                    {tweetText}
                  </div>
                )}
              </div>

              {/* Tweet Engagement Telemetry */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingTop: 14,
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  color: "#94A3B8",
                  fontSize: 13,
                }}
              >
                <div>💬 <strong style={{ color: "#F1F5F9" }}>48</strong> Replies</div>
                <div>🔄 <strong style={{ color: "#F1F5F9" }}>{metrics.reposts}</strong> Reposts</div>
                <div>❤️ <strong style={{ color: "#F1F5F9" }}>{metrics.likes}</strong> Likes</div>
                <div>📊 <strong style={{ color: "#F1F5F9" }}>{metrics.views}</strong> Views</div>
              </div>
            </div>

            {/* Right Column: High-Res Evidence Embed or Telemetry Scorecard (52% width) */}
            <div
              style={{
                width: "52%",
                height: "100%",
                backgroundColor: "#040711",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Header */}
              <div
                style={{
                  height: 48,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 24px",
                }}
              >
                <span style={{ color: "#F59E0B", fontSize: 12, fontWeight: 800, letterSpacing: "0.1em" }}>
                  {rightContent.title || "TECHNICAL EVIDENCE ARTIFACT"}
                </span>
                <span style={{ color: "#10B981", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em" }}>
                  1080P VERIFIED NATIVE
                </span>
              </div>

              {/* Right Media Body */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 24,
                  boxSizing: "border-box",
                }}
              >
                {rightContent.type === "image" && rightContent.src && (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 14,
                      overflow: "hidden",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#000000",
                    }}
                  >
                    <Img
                      src={staticFile(rightContent.src)}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                )}

                {rightContent.type === "video" && rightContent.src && (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 14,
                      overflow: "hidden",
                      border: "1px solid rgba(56, 189, 248, 0.3)",
                      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
                      position: "relative",
                    }}
                  >
                    <Video
                      src={staticFile(rightContent.src)}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      muted={true}
                    />
                  </div>
                )}

                {rightContent.type === "telemetry" && rightContent.stats && (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                      justifyContent: "center",
                      padding: "0 20px",
                    }}
                  >
                    {rightContent.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: "#0B1120",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          borderRadius: 14,
                          padding: "20px 28px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                        }}
                      >
                        <span style={{ color: "#94A3B8", fontSize: 16, fontWeight: 600, letterSpacing: "0.05em" }}>
                          {stat.label}
                        </span>
                        <span
                          style={{
                            color: stat.color || "#38BDF8",
                            fontSize: 26,
                            fontWeight: 900,
                            fontFamily: "monospace",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          /* Wide Single View: Centers a large 100% flat screenshot with rich side telemetry (No empty black void!) */
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              backgroundColor: "#0B0F19",
              position: "relative",
            }}
          >
            {/* Left Telemetry Pillar */}
            <div
              style={{
                width: 260,
                borderRight: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "rgba(3, 7, 18, 0.6)",
              }}
            >
              <div>
                <div style={{ color: "#38BDF8", fontSize: 11, fontWeight: 800, letterSpacing: 2 }}>SOURCE</div>
                <div style={{ color: "#F8FAFC", fontSize: 15, fontWeight: 700, marginTop: 4, fontFamily: "monospace" }}>
                  {sourceHandle}
                </div>
              </div>
              <div>
                <div style={{ color: "#64748B", fontSize: 11, fontWeight: 700 }}>STATUS</div>
                <div style={{ color: "#10B981", fontSize: 13, fontWeight: 800, marginTop: 4 }}>
                  ● AUTHENTIC EVIDENCE
                </div>
              </div>
              <div>
                <div style={{ color: "#64748B", fontSize: 11, fontWeight: 700 }}>CANVAS ARCHITECTURE</div>
                <div style={{ color: "#E2E8F0", fontSize: 12, marginTop: 4 }}>
                  100% FLAT DOCUMENTARY
                </div>
              </div>
            </div>

            {/* Center: The Crisp Flat Document Image */}
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px 40px",
                backgroundColor: "#030712",
              }}
            >
              {cardImage && (
                <Img
                  src={staticFile(cardImage)}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    borderRadius: 12,
                    boxShadow: "0 25px 60px rgba(0,0,0,0.9)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              )}
            </div>

            {/* Right Telemetry Pillar */}
            <div
              style={{
                width: 280,
                borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "rgba(3, 7, 18, 0.6)",
              }}
            >
              <div>
                <div style={{ color: "#F59E0B", fontSize: 11, fontWeight: 800, letterSpacing: 2 }}>CLASSIFICATION</div>
                <div style={{ color: "#F1F5F9", fontSize: 15, fontWeight: 700, marginTop: 4 }}>
                  {titleBadge}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ backgroundColor: "#0F172A", padding: "12px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ color: "#64748B", fontSize: 10 }}>ENGAGEMENT</div>
                  <div style={{ color: "#38BDF8", fontSize: 15, fontWeight: 700, marginTop: 2 }}>{metrics.views} Views</div>
                </div>
                <div style={{ backgroundColor: "#0F172A", padding: "12px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ color: "#64748B", fontSize: 10 }}>VERIFICATION</div>
                  <div style={{ color: "#10B981", fontSize: 15, fontWeight: 700, marginTop: 2 }}>CONFIRMED LEAK</div>
                </div>
              </div>

              <div>
                <div style={{ color: "#64748B", fontSize: 11 }}>TIMELINE</div>
                <div style={{ color: "#94A3B8", fontSize: 12, fontFamily: "monospace", marginTop: 4 }}>
                  FRONTIER ROUNDUP 2026
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
