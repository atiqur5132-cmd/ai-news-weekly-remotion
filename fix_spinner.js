const https = require('https');
const fs = require('fs');
const path = require('path');
const { chromium } = require('../x_manager/node_modules/playwright');

const EVIDENCE_DIR = path.join(__dirname, 'public', 'evidence');
const USER_DATA_DIR = path.join(__dirname, '..', 'x_manager', 'browser_session');

const THUMB_URL = 'https://pbs.twimg.com/amplify_video_thumb/2099277656189546498/img/t6_cKFnsUDbAfnVB.jpg';
const POSTER_FILE = path.join(EVIDENCE_DIR, 'steam_game_poster.jpg');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', err => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function fixNoclipepeCard() {
  console.log('Downloading real video poster...');
  await download(THUMB_URL, POSTER_FILE);
  console.log('Poster saved to', POSTER_FILE);

  console.log('Launching Playwright to capture 100% clean spinner-free tweet card...');
  const context = await chromium.launchPersistentContext(USER_DATA_DIR, {
    channel: 'chrome',
    headless: true,
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2
  });

  const page = context.pages().length > 0 ? context.pages()[0] : await context.newPage();
  await page.goto('https://x.com/noclipepe/status/2099278496509952485', { waitUntil: 'domcontentloaded', timeout: 35000 });
  await page.waitForTimeout(4000);

  // Read poster base64
  const posterB64 = fs.readFileSync(POSTER_FILE).toString('base64');
  const posterDataUri = `data:image/jpeg;base64,${posterB64}`;

  // Inject poster into tweet video box and remove all spinners/overlays
  await page.evaluate((dataUri) => {
    // Hide header and sidebar
    document.querySelectorAll('header[role="banner"], div[data-testid="sidebarColumn"]').forEach(e => e.style.display = 'none');
    const layers = document.getElementById('layers');
    if (layers) layers.style.display = 'none';
    const bottomBar = document.querySelector('div[data-testid="BottomBar"]');
    if (bottomBar) bottomBar.style.display = 'none';

    // Find video or video player container
    const videoContainer = document.querySelector('div[data-testid="videoPlayer"], div[data-testid="videoComponent"], article[data-testid="tweet"] div[aria-label*="Embedded video"]');
    if (videoContainer) {
      // Remove any spinners
      const svgs = videoContainer.querySelectorAll('svg');
      svgs.forEach(s => {
        if (s.getAttribute('aria-label') === 'Loading' || s.innerHTML.includes('circle')) {
          s.style.display = 'none';
        }
      });
      // Replace with crisp poster image
      videoContainer.innerHTML = `<img src="${dataUri}" style="width:100%;height:auto;display:block;border-radius:12px;" />`;
    }
  }, posterDataUri);

  await page.waitForTimeout(1000);

  // Capture clean desktop 1080p
  const desktopPath = path.join(EVIDENCE_DIR, 'steam_game_rebuild_desktop.png');
  await page.screenshot({ path: desktopPath });
  console.log('Saved clean desktop view to:', desktopPath);

  // Capture clean card
  const article = await page.$('article[data-testid="tweet"]');
  if (article) {
    const cardPath = path.join(EVIDENCE_DIR, 'steam_game_rebuild_card.png');
    await article.screenshot({ path: cardPath });
    console.log('Saved clean spinner-free card to:', cardPath);
  }

  await context.close();
  console.log('SUCCESS: Noclipepe tweet card fixed with zero spinners!');
}

fixNoclipepeCard().catch(console.error);
