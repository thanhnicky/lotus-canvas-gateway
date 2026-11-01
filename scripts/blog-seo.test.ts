import { test, expect } from "bun:test";
import { readFileSync } from "node:fs";
import { ARTICLES } from "../src/data/articles";
import { SITE_URL } from "../src/lib/site";

test("the sitemap migrates all 25 articles into blog and adds the library with eight topics", () => {
  const xml = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  expect(Object.keys(ARTICLES)).toHaveLength(25);
  expect(new Set(urls).size).toBe(35);
  for (const article of Object.values(ARTICLES)) expect(urls).toContain(`${SITE_URL}/blog/${article.slug}`);
  expect(urls).toContain(`${SITE_URL}/blog`);
  expect(urls.filter((url) => url.startsWith(`${SITE_URL}/blog/chu-de/`))).toHaveLength(8);
});

test("crawler URLs use the published host and omit generated article modification dates", () => {
  const xml = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  expect(SITE_URL).toBe("https://lotus-canvas-gateway.lovable.app");
  for (const url of urls) expect(new URL(url).origin).toBe(SITE_URL);
  expect(xml.includes("<lastmod>")).toBe(false);
});

test("no legacy article URLs remain in sitemap or RSS", () => {
  const xml = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  const rss = readFileSync(new URL("../public/rss.xml", import.meta.url), "utf8");
  for (const article of Object.values(ARTICLES)) {
    expect(xml.includes(`<loc>${SITE_URL}/${article.slug}</loc>`)).toBe(false);
    expect(rss.includes(`<link>${SITE_URL}/${article.slug}</link>`)).toBe(false);
    expect(rss.includes(`<link>${SITE_URL}/blog/${article.slug}</link>`)).toBe(true);
  }
});
