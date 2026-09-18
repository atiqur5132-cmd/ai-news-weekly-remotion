const { bundle } = require("@remotion/bundler");
const { renderStill, selectComposition } = require("@remotion/renderer");
const path = require("path");
const fs = require("fs");

async function runAudit() {
  console.log("Bundling Remotion project once...");
  const entryPoint = path.join(__dirname, "src", "index.ts");
  const bundleLocation = await bundle(entryPoint);

  console.log("Selecting composition 'Video'...");
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: "Video",
  });

  const outDir = path.join(__dirname, "out", "fast_audit");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const targetFrames = [
    { frame: 200, name: "act1_split_duel.png" },
    { frame: 600, name: "act1_slowdown_tweet.png" },
    { frame: 1700, name: "act2_fable_card.png" },
    { frame: 2200, name: "act2_fable_gameplay.png" },
    { frame: 3400, name: "act3_opus_card.png" },
    { frame: 4700, name: "act4_waverunner_video.png" },
    { frame: 6400, name: "act5_sol_leak_card.png" },
    { frame: 8000, name: "act6_jev_voice_video.png" },
    { frame: 9400, name: "act7_gemini_specs_card.png" },
    { frame: 10000, name: "act7_shelby_gt500_video.png" },
    { frame: 11400, name: "act8_frontier_matrix.png" },
  ];

  console.log(`Rendering ${targetFrames.length} still frames across all 8 acts...`);
  for (const item of targetFrames) {
    const outPath = path.join(outDir, item.name);
    console.log(`Rendering frame ${item.frame} -> ${item.name}...`);
    await renderStill({
      composition,
      serveUrl: bundleLocation,
      output: outPath,
      frame: item.frame,
      imageFormat: "png",
    });
    console.log(`  -> [SUCCESS] Saved ${item.name}`);
  }

  console.log("\n=== ALL ACT STILLS RENDERED AND READY FOR INSPECTION! ===");
}

runAudit().catch(err => {
  console.error("Fast audit failed:", err);
  process.exit(1);
});
