const data = require('./src/timestamps.json');
data.segments.forEach((s, i) => {
  const t = s.text.toLowerCase();
  if (t.includes('openai') || t.includes('google') || t.includes('brings us') || t.includes('backing down') || t.includes('table stakes') || t.includes('sol')) {
    console.log(`[Seg ${i}] (${s.start}s -> ${Math.round(s.start * 30)}f): ${s.text}`);
  }
});
