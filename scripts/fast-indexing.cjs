const { execSync } = require('child_process');
const path = require('path');
execSync(`node ${path.join(__dirname, 'generate-sitemap.cjs')}`, { stdio: 'inherit' });
execSync(`node ${path.join(__dirname, 'generate-rss.cjs')}`, { stdio: 'inherit' });
console.log('Đã cập nhật sitemap và RSS. Xuất bản trước khi gửi sitemap trong Google Search Console.');
console.log('IndexNow có thể thông báo URL cho Bing; không phải yêu cầu lập chỉ mục Google.');
execSync(`node ${path.join(__dirname, 'google-indexing.cjs')}`, { stdio: 'inherit' });
