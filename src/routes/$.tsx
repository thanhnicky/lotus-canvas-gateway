import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ARTICLES } from "@/data/articles";

// Compatibility only: articles are rendered exclusively by /blog/$.
export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const slug = (params._splat ?? "").replace(/^\/+|\/+$/g, "");
    if (!ARTICLES[slug]) throw notFound();
    throw redirect({ to: "/blog/$", params: { _splat: slug }, statusCode: 301 });
  },
  head: () => ({ meta: [
    { title: "Trang không khả dụng | Sơn Lotus" },
    { name: "description", content: "Khám phá cẩm nang kỹ thuật hệ sơn Lotus." },
    { property: "og:title", content: "Cẩm nang kỹ thuật | Sơn Lotus" },
    { property: "og:description", content: "Tài liệu kỹ thuật cho xưởng, nhà thầu và nhà máy." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "noindex,follow" },
  ] }),
});
