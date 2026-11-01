import { createFileRoute } from "@tanstack/react-router";
import { ARTICLES } from "@/data/articles";
import { TOPICS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const articleUrls = Object.keys(ARTICLES).map(
          (slug) =>
            `  <url><loc>${BASE_URL}/${slug}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          `  <url><loc>${BASE_URL}/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`,
          `  <url><loc>${BASE_URL}/blog</loc></url>`,
          ...TOPICS.map((topic) => `  <url><loc>${BASE_URL}/blog/chu-de/${topic.slug}</loc></url>`),
          ...articleUrls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
