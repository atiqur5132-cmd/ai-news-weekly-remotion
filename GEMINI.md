# Workspace Rules: AI Video Production Standards (Zero-Defect Mandates)

## 1. Pure Clean Tweet Evidence (Zero Metrics, Zero Timestamp, Zero Footer Clutter)
- All X (Twitter) tweet cards MUST be completely stripped of:
  - ❌ Engagement metrics rows (`💬 Replies`, `🔁 Reposts`, `❤️ Likes`, `📊 Impressions`).
  - ❌ Timestamps (`11:24 AM · Sep 17, 2026`).
  - ❌ Platform/Device footers (`X for Enterprise`, `Twitter Web App`, `Verified Telemetry Stream`).
  - ❌ Date suffixes on handles (`@handle · Date` -> `@handle`).
- ✅ **ONLY SHOW**:
  - Clean macOS/Browser window frame with verified URL and documentary badge.
  - Verified author header (Avatar, Display Name, `@handle`, Verified badge `✓`, tag/role, official X logo).
  - Crisp, large, high-contrast **Tweet Text** (38-42px).

## 2. Strict Zero Fake Highlights (No Yellow Sweep Boxes / Overlays)
- ❌ **NEVER** render artificial yellow, amber, or gold highlight boxes, animated sweep bars, or bounding box overlays across tweet cards, screenshots, or document text unless explicitly requested by the user.
- ✅ All evidence screenshots and tweet text must be shown 100% natural, flat, clean, and authentic.

## 3. Strict Video Audio Muting on Evidence Embeds
- ❌ **NEVER** allow embedded evidence videos (3D demos, screen recordings, gameplays, WebGL showcases, or keynotes) to play their native audio tracks over the narrator.
- ✅ **ALWAYS** explicitly pass `muted={true}` and `volume={0}` on every embedded `<Video />` component:
  ```tsx
  <Video
    src={staticFile(`evidence/${videoName}`)}
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
    muted={true}
    volume={0}
  />
  ```
  Native video audio must NEVER clash with the professional broadcast voiceover (`voiceover.wav`).

## 4. 100% Official Brand Vectors (Zero Fake Placeholders)
- When referencing AI companies or models (Alibaba Qwen, Moonshot Kimi, Apple, AWS Bedrock, Cerebras, OpenAI, Anthropic, Google), ALWAYS use verified official brand vector SVGs in `RealLogos.tsx`. Never use approximate geometric mockups.

## 5. 90-95% Canvas Utilization (Zero Empty Space)
- Main visual components must occupy 1680px - 1760px width on a 1920x1080 canvas. No tiny floating 300px cards.

## 6. Pre-Delivery Visual Inspection Gate
- Render still frames across every act (`npx remotion still ...`) and inspect each with `view_file` before delivering links. Confirm 0 errors with `npx tsc --noEmit`.
