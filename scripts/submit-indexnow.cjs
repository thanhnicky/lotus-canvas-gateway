const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = "c4b9d0e1f3a2489ba1b2c3d4e5f6a7b8";
const HOST = "sonhenuoc.com";
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

// Ensure verification file exists in public/
fs.writeFileSync(path.join(__dirname, `../public/${API_KEY}.txt`), API_KEY, 'utf-8');

// Read URLs from sitemap
const sitemap = fs.readFileSync(path.join(__dirname, '../public/sitemap.xml'), 'utf-8');
const urlRegex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
const urlList = [];
let match;
while ((match = urlRegex.exec(sitemap)) !== null) {
  urlList.push(match[1]);
}

const payload = JSON.stringify({
  host: HOST,
  key: API_KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

console.log(`🚀 Sending ${urlList.length} URLs to IndexNow (Bing, Copilot, Yandex, Naver)...`);

const req = https.request(options, (res) => {
  console.log(`IndexNow Response Status: ${res.statusCode} ${res.statusMessage}`);
  let responseData = '';
  res.on('data', (chunk) => { responseData += chunk; });
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('✅ IndexNow successfully received the URL batch!');
    } else {
      console.log('Response body:', responseData);
    }
  });
});

req.on('error', (e) => {
  console.error(`❌ IndexNow submission error: ${e.message}`);
});

req.write(payload);
req.end();
