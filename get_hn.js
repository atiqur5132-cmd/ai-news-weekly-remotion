const https = require('https');
https.get('https://news.ycombinator.com/', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /<tr class="athing submission" id="(\d+)">[\s\S]*?<span class="titleline"><a href="([^"]+)">([^<]+)<\/a>/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      console.log(`ID: ${match[1]} | Title: ${match[3]} | URL: ${match[2]}`);
    }
  });
});
