import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogLibrary } from "@/components/blog-library";
import { TOPICS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
export const Route = createFileRoute("/blog/chu-de/$category")({
  loader: ({ params }) => { const topic = TOPICS.find((item) => item.slug === params.category); if (!topic) throw notFound(); return topic; },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.name} — Cẩm nang kỹ thuật | Sơn Lotus` : "Trang không khả dụng | Sơn Lotus" },
    { name: "description", content: loaderData?.description ?? "Chuyên đề không khả dụng." },
    { property: "og:title", content: loaderData ? `${loaderData.name} | Sơn Lotus` : "Trang không khả dụng | Sơn Lotus" },
    { property: "og:description", content: loaderData?.description ?? "Chuyên đề không khả dụng." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ...(!loaderData ? [{ name: "robots", content: "noindex,follow" }] : []),
  ], links: loaderData ? [{ rel: "canonical", href: `${SITE_URL}/blog/chu-de/${loaderData.slug}` }] : [] }),
  component: TopicPage,
});
function TopicPage() { const topic = Route.useLoaderData(); return <BlogLibrary key={topic.slug} category={topic.slug} />; }