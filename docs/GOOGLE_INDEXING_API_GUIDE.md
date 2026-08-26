# HƯỚNG DẪN KÍCH HOẠT GOOGLE INDEXING API (INDEX TỨC THÌ TRONG 15 PHÚT)

Tài liệu hướng dẫn thiết lập **Google Cloud Service Account** để tự động đẩy URL lên thẳng hàng đợi thu thập dữ liệu ưu tiên của Googlebot thông qua lệnh `npm run index`.

---

## BƯỚC 1: TẠO SERVICE ACCOUNT TRÊN GOOGLE CLOUD

1. Truy cập [Google Cloud Console](https://console.cloud.google.com/).
2. Tạo một Project mới (hoặc chọn project có sẵn), ví dụ: `Lotus-Indexing-Bot`.
3. Vào menu **APIs & Services** $\rightarrow$ **Library** $\rightarrow$ Tìm kiếm **"Indexing API"** $\rightarrow$ Nhấn **ENABLE (KÍCH HOẠT)**.
4. Vào menu **IAM & Admin** $\rightarrow$ **Service Accounts** $\rightarrow$ Nhấn **CREATE SERVICE ACCOUNT**.
   - Đặt tên: `google-indexing-bot`
   - Role: Chọn **Owner** hoặc **Editor**.
   - Nhấn Done để hoàn tất.
5. Nhấp vào Service Account vừa tạo $\rightarrow$ Chuyển sang tab **KEYS** $\rightarrow$ Nhấn **ADD KEY** $\rightarrow$ Chọn **Create new key (JSON)**.
6. File JSON sẽ được tải về máy. Hãy đổi tên file đó thành **`service_account.json`** và copy đặt vào thư mục gốc của dự án (`/Users/macbook/Documents/lotus-canvas-gateway/service_account.json`).

---

## BƯỚC 2: CẤP QUYỀN OWNER CHO SERVICE ACCOUNT TRONG GOOGLE SEARCH CONSOLE

1. Mở file `service_account.json`, copy địa chỉ email trong trường `"client_email"` (ví dụ: `google-indexing-bot@lotus-indexing.iam.gserviceaccount.com`).
2. Truy cập [Google Search Console](https://search.google.com/search-console).
3. Chọn tài sản website `https://sonhenuoc.com` (hoặc domain property).
4. Vào **Cài đặt (Settings)** $\rightarrow$ **Người dùng và quyền (Users and permissions)** $\rightarrow$ Nhấn **Thêm người dùng (Add User)**.
5. Dán địa chỉ email của Service Account vào, chọn quyền **Chủ sở hữu (Owner)** và nhấn **Thêm (Add)**.

---

## BƯỚC 3: CHẠY LỆNH INDEX TỰ ĐỘNG

Mở Terminal và chạy lệnh:

```bash
npm run index
```

Hệ thống sẽ tự động:
1. Quét toàn bộ bài viết mới và cập nhật `sitemap.xml` + `rss.xml`.
2. Bắn thông báo lên **IndexNow API** (Bing, Copilot AI, Yandex, Naver).
3. Sử dụng khóa OAuth2 ký JWT và gửi thẳng từng URL lên **Google Indexing API** với trạng thái `URL_UPDATED`.
4. Googlebot sẽ ghé thăm và cào dữ liệu URL trong vòng **15 đến 60 phút**.
