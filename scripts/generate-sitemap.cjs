const fs = require('fs');
const path = require('path');

const articlesFile = fs.readFileSync(path.join(__dirname, '../src/data/articles.ts'), 'utf-8');
const regex = /"([a-z0-9\/-]+)":\s*{\s*slug:\s*"([^"]+)"/g;
const slugs = [];
let match;
while ((match = regex.exec(articlesFile)) !== null) {
  slugs.push(match[1]);
}

const siteFile = fs.readFileSync(path.join(__dirname, '../src/lib/site.ts'), 'utf-8');
const BASE_URL = siteFile.match(/SITE_URL = "([^"]+)"/)[1];
const topicFile = fs.readFileSync(path.join(__dirname, '../src/lib/blog.ts'), 'utf-8');
const topics = [...topicFile.matchAll(/\{ slug: "([^"]+)"/g)].map(match => match[1]);

const xmlUrls = [
  `  <url>\n    <loc>${BASE_URL}/</loc>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>`,
  `  <url><loc>${BASE_URL}/blog</loc></url>`,
  ...topics.map(slug => `  <url><loc>${BASE_URL}/blog/chu-de/${slug}</loc></url>`),
];

slugs.forEach(slug => {
  xmlUrls.push(
    `  <url>\n    <loc>${BASE_URL}/blog/${slug}</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>`
  );
});

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls.join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapContent, 'utf-8');
console.log(`✅ Generated public/sitemap.xml with ${xmlUrls.length} URLs!`);
