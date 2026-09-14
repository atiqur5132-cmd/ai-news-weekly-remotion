const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/timestamps.json', 'utf-8'));

console.log(`Total Duration: ${data.duration}s | Total Frames: ${data.totalFrames} @ 30 FPS`);
console.log(`Total Segments: ${data.segments.length}\n`);

data.segments.forEach((s, idx) => {
  const startF = Math.round(s.start * 30);
  const endF = Math.round(s.end * 30);
  const durF = endF - startF;
  console.log(`[Seg ${idx+1}] [${s.start.toFixed(2)}s -> ${s.end.toFixed(2)}s] (F: ${startF} - ${endF}, dur: ${durF}f): "${s.text}"`);
});
