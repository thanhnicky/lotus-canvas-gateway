import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Không tìm thấy trang</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Trang không tải được
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Đã có lỗi xảy ra. Bạn có thể thử tải lại hoặc về trang chủ.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Thử lại
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Về trang chủ
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sơn Lotus | Sơn công nghiệp hệ nước cho gỗ, kim loại, sàn và composite" },
      { name: "description", content: "Sơn Lotus là nhà sản xuất sơn công nghiệp hệ nước cho gỗ, kim loại, sơn giả gỗ, nhựa/composite và sàn sàn. Chọn đúng hệ sơn cho hạng mục của bạn và nhận tư vấn nhanh qua Zalo." },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "author", content: "Lotus" },
      { property: "og:title", content: "Sơn Lotus | Sơn công nghiệp hệ nước cho gỗ, kim loại, sàn và composite" },
      { property: "og:description", content: "Sơn Lotus là nhà sản xuất sơn công nghiệp hệ nước cho gỗ, kim loại, sơn giả gỗ, nhựa/composite và sàn sàn. Chọn đúng hệ sơn cho hạng mục của bạn và nhận tư vấn nhanh qua Zalo." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sonlotus.vn" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7ddaf166-0a8c-495b-b137-82ec5b0da9e8/id-preview-1920aef3--be56709a-1fbd-4804-afec-6b759e01330f.lovable.app-1782283895852.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sơn Lotus | Sơn công nghiệp hệ nước cho gỗ, kim loại, sàn và composite" },
      { name: "twitter:description", content: "Sơn Lotus là nhà sản xuất sơn công nghiệp hệ nước cho gỗ, kim loại, sơn giả gỗ, nhựa/composite và sàn sàn. Chọn đúng hệ sơn cho hạng mục của bạn và nhận tư vấn nhanh qua Zalo." },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7ddaf166-0a8c-495b-b137-82ec5b0da9e8/id-preview-1920aef3--be56709a-1fbd-4804-afec-6b759e01330f.lovable.app-1782283895852.png" },
    ],
    links: [
      { rel: "canonical", href: "https://sonlotus.vn" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sơn Lotus",
          "alternateName": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG",
          "url": "https://sonlotus.vn",
          "logo": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7ddaf166-0a8c-495b-b137-82ec5b0da9e8/id-preview-1920aef3--be56709a-1fbd-4804-afec-6b759e01330f.lovable.app-1782283895852.png",
          "description": "Nhà sản xuất sơn công nghiệp hệ nước cho gỗ, kim loại, sơn giả gỗ, nhựa/composite và sàn sàn",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+84-943-966-662",
            "contactType": "customer service",
            "areaServed": "VN",
            "availableLanguage": "Vietnamese"
          }
        })
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Sơn Lotus",
          "image": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7ddaf166-0a8c-495b-b137-82ec5b0da9e8/id-preview-1920aef3--be56709a-1fbd-4804-afec-6b759e01330f.lovable.app-1782283895852.png",
          "url": "https://sonlotus.vn",
          "telephone": "+84-943-966-662",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm",
            "addressLocality": "TP. Hồ Chí Minh",
            "addressCountry": "VN"
          },
          "areaServed": "VN",
          "description": "Nhà sản xuất sơn công nghiệp hệ nước cho gỗ, kim loại, sơn giả gỗ, nhựa/composite và sàn sàn"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
