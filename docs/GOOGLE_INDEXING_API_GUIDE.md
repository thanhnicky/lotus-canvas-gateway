# Đưa cẩm nang Lotus vào Google Search

Google Indexing API chỉ dành cho nội dung JobPosting hoặc BroadcastEvent trong VideoObject, không dành cho bài viết kỹ thuật thông thường. Không cần tạo khóa service account cho blog và không có cam kết lập chỉ mục trong 15 phút.

## Sau khi xuất bản

1. Xác minh địa chỉ website đang xuất bản trong Google Search Console.
2. Gửi sitemap: `https://lotus-canvas-gateway.lovable.app/sitemap.xml`.
3. Dùng Kiểm tra URL để kiểm tra một bài viết, xem trang trực tiếp và yêu cầu lập chỉ mục nếu đủ điều kiện.
4. Theo dõi lý do loại trừ trong báo cáo Lập chỉ mục trang. Google tự quyết định bài nào được lập chỉ mục.

Toàn bộ bài viết chạy tại `/blog/` theo sau bởi đường dẫn bài cũ. Các URL cũ chuyển hướng vĩnh viễn (301) đến bài tương ứng, không còn trang đọc riêng. Trang `/blog` và các chuyên đề giúp người đọc, Google tìm đến toàn bộ bài viết.

Khi kết nối tên miền riêng, cập nhật địa chỉ chuẩn trong `src/lib/site.ts`, tạo lại sitemap/RSS, cập nhật robots.txt và xác minh tên miền mới trước khi gửi sitemap. Không dùng địa chỉ xem trước làm địa chỉ chuẩn.

## Kiểm tra trước khi gửi sitemap

- URL bài trả nội dung đầy đủ khi mở trực tiếp, không chỉ khi bấm từ trang chủ.
- Tiêu đề, mô tả và địa chỉ chuẩn riêng cho từng bài.
- Sitemap và địa chỉ chuẩn cùng trỏ một tên miền.
- Không đặt thời gian tạo sitemap làm ngày sửa bài.
- Chứng chỉ, thông số và nội dung kỹ thuật cần được Lotus xác nhận trước khi công bố.
