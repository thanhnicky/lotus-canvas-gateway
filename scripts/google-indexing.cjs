const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

// Check for service_account.json
const keyPath = path.join(__dirname, '../service_account.json');

if (!fs.existsSync(keyPath)) {
  console.log('⚠️  CHƯA TÌM THẤY FILE service_account.json');
  console.log('👉 Vui lòng tạo Service Account trên Google Cloud Console, tải file JSON và đặt tại thư mục gốc của dự án.');
  console.log('👉 Chi tiết hướng dẫn xem tại docs/GOOGLE_INDEXING_API_GUIDE.md');
  process.exit(0);
}

const keyData = JSON.parse(fs.readFileSync(keyPath, 'utf-8'));

function createJWT(serviceAccount) {
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const claimSet = {
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  };

  const base64Header = Buffer.from(JSON.stringify(header)).toString('base64url');
  const base64Claim = Buffer.from(JSON.stringify(claimSet)).toString('base64url');
  const signatureInput = `${base64Header}.${base64Claim}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signatureInput);
  signer.end();
  const signature = signer.sign(serviceAccount.private_key, 'base64url');

  return `${signatureInput}.${signature}`;
}

function getAccessToken(jwt) {
  return new Promise((resolve, reject) => {
    const postData = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`;
    const req = https.request({
      hostname: 'oauth2.googleapis.com',
      port: 443,
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.access_token) resolve(parsed.access_token);
          else reject(new Error(data));
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

function publishUrl(token, url) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      url: url,
      type: "URL_UPDATED"
    });

    const req = https.request({
      hostname: 'indexing.googleapis.com',
      port: 443,
      path: '/v3/urlNotifications:publish',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Length': Buffer.byteLength(body)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, body: data });
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  try {
    console.log('🔑 Authenticating with Google Cloud OAuth2...');
    const jwt = createJWT(keyData);
    const token = await getAccessToken(jwt);
    console.log('✅ Token acquired successfully!');

    // Read URLs
    const sitemap = fs.readFileSync(path.join(__dirname, '../public/sitemap.xml'), 'utf-8');
    const urlRegex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
    const urlList = [];
    let match;
    while ((match = urlRegex.exec(sitemap)) !== null) {
      urlList.push(match[1]);
    }

    console.log(`📡 Pinging Google Indexing API for ${urlList.length} URLs...`);
    for (const url of urlList) {
      const res = await publishUrl(token, url);
      console.log(`[Google Indexing API] ${url} -> Status: ${res.status}`);
      await new Promise(r => setTimeout(r, 200)); // Rate limit pause
    }
    console.log('🎉 Hoàn tất nộp toàn bộ URLs lên Google Indexing API!');
  } catch (err) {
    console.error('❌ Lỗi:', err.message);
  }
}

main();
