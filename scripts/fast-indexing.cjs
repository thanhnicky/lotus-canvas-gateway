const { execSync } = require('child_process');
const path = require('path');

console.log('🔄 BƯỚC 1: Tái tạo Sitemap.xml và RSS.xml...');
execSync(`node ${path.join(__dirname, 'generate-sitemap.cjs')}`, { stdio: 'inherit' });
execSync(`node ${path.join(__dirname, 'generate-rss.cjs')}`, { stdio: 'inherit' });

console.log('\n🚀 BƯỚC 2: Gửi URL lên IndexNow Protocol (Bing, Copilot, Yandex)...');
try {
  execSync(`node ${path.join(__dirname, 'submit-indexnow.cjs')}`, { stdio: 'inherit' });
} catch (e) {
  console.log('IndexNow notice:', e.message);
}

console.log('\n📡 BƯỚC 3: Kiểm tra & Kích hoạt Google Indexing API...');
execSync(`node ${path.join(__dirname, 'google-indexing.cjs')}`, { stdio: 'inherit' });

console.log('\n✨ ĐÃ HOÀN TẤT QUY TRÌNH KÍCH TỐC ĐỘ LẬP CHỈ MỤC (FAST INDEXING)!');
