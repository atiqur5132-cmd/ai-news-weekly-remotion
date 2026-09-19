const data = require('./src/timestamps.json');
console.log('Total duration:', data.duration, 'seconds, totalFrames:', data.totalFrames);
console.log('Segments count:', data.segments.length);

data.segments.forEach((s, i) => {
  const fStart = Math.round(s.start * 30);
  const fEnd = Math.round(s.end * 30);
  console.log(`[Seg ${i+1}] [${s.start}s - ${s.end}s | F${fStart} - F${fEnd} (${fEnd - fStart}f)]: ${s.text}`);
});
