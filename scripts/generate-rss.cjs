const fs = require('fs');
const path = require('path');

const articlesFile = fs.readFileSync(path.join(__dirname, '../src/data/articles.ts'), 'utf-8');

const regex = /"([a-z0-9\/-]+)":\s*{\s*slug:\s*"([^"]+)",\s*category:\s*"([^"]+)",[\s\S]*?title:\s*"([^"]+)",[\s\S]*?metaDescription:\s*"([^"]+)",/g;

const items = [];
let match;
const BASE_URL = 'https://sonhenuoc.com';
const now = new Date().toUTCString();

while ((match = regex.exec(articlesFile)) !== null) {
  const [, slug, , category, title, desc] = match;
  items.push(`    <item>
      <title><![CDATA[${title}]]></title>
      <link>${BASE_URL}/${slug}</link>
      <guid>${BASE_URL}/${slug}</guid>
      <category><![CDATA[${category}]]></category>
      <description><![CDATA[${desc}]]></description>
      <pubDate>${now}</pubDate>
    </item>`);
}

const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sơn Hệ Nước Lotus - Giải Pháp Sơn Công Nghiệp Bền Vững</title>
    <link>${BASE_URL}</link>
    <description>Chuyên trang kỹ thuật sơn gỗ, sơn kim loại, sơn giả gỗ và sơn sàn hệ nước Lotus</description>
    <language>vi</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${items.join('\n')}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(__dirname, '../public/rss.xml'), rssXml, 'utf-8');
console.log(`✅ Generated public/rss.xml with ${items.length} items!`);
