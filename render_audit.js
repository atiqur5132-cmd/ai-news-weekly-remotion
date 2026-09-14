const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const frames = [100, 350, 650, 900, 1100, 1400, 1700, 2100, 2400, 2700, 3000, 3300, 3500, 3700, 4000, 4300, 4700, 5100, 5400, 5700, 6100, 6400, 6800, 7100, 7400];

const outDir = path.join(__dirname, 'out', 'audit');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

console.log('Rendering all audit frames...');
for (const f of frames) {
  const target = path.join(outDir, `frame_${f}.png`);
  if (!fs.existsSync(target)) {
    console.log(`Rendering frame ${f}...`);
    try {
      execSync(`npx remotion still Video "${target}" --frame=${f} --gl=angle`, { stdio: 'inherit' });
    } catch (e) {
      console.error(`Error at frame ${f}:`, e.message);
    }
  }
}
console.log('Audit frames rendered!');
