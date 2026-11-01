import { createFileRoute } from "@tanstack/react-router";
import { BlogLibrary } from "@/components/blog-library";
import { SITE_URL } from "@/lib/site";
export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [
    { title: "Cẩm nang kỹ thuật hệ sơn | Sơn Lotus" },
    { name: "description", content: "Cẩm nang chọn hệ sơn, xử lý vật liệu nền và lỗi thi công cho xưởng, nhà thầu và nhà máy. Sơn gỗ, kim loại, giả gỗ, composite và sàn Lotus." },
    { property: "og:title", content: "Cẩm nang kỹ thuật hệ sơn | Sơn Lotus" },
    { property: "og:description", content: "Hiểu vật liệu, chọn đúng hệ sơn. Tài liệu kỹ thuật cho xưởng, nhà thầu và nhà máy." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: `${SITE_URL}/blog` }] }),
  component: BlogIndex,
});
function BlogIndex() { return <BlogLibrary />; }