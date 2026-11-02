import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { BlogShell, Consultation } from "@/components/blog-shell";
import { relatedArticles, topicFor } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/blog/$")({
  loader: ({ params }) => {
    const slug = (params._splat ?? "").replace(/^\/+|\/+$/g, "");
    const article = ARTICLES[slug];
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) return { meta: [
      { title: "Trang không khả dụng | Sơn Lotus" },
      { name: "description", content: "Bài viết không khả dụng. Khám phá cẩm nang kỹ thuật của Sơn Lotus." },
      { property: "og:title", content: "Trang không khả dụng | Sơn Lotus" },
      { property: "og:description", content: "Khám phá cẩm nang kỹ thuật hệ sơn Lotus." },
      { name: "robots", content: "noindex,follow" },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
    const url = `${SITE_URL}/blog/${article.slug}`;
    return {
      meta: [
        { title: article.title }, { name: "description", content: article.metaDescription },
        { property: "og:title", content: article.title }, { property: "og:description", content: article.metaDescription },
        { property: "og:url", content: url }, { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "robots", content: "index,follow,max-image-preview:large" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Article", headline: article.h1,
          description: article.metaDescription, mainEntityOfPage: url,
          author: { "@type": "Organization", name: "Sơn Lotus", url: SITE_URL },
          publisher: { "@type": "Organization", name: "Sơn Lotus", url: SITE_URL },
        }).replace(/</g, "\\u003c") },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Sơn Lotus", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Cẩm nang", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: article.category, item: `${SITE_URL}/blog/chu-de/${article.categorySlug}` },
            { "@type": "ListItem", position: 4, name: article.h1, item: url },
          ],
        }).replace(/</g, "\\u003c") },
        ...(article.faqs.length > 0 ? [{ type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage", mainEntity: article.faqs.map((faq) => ({
            "@type": "Question", name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }).replace(/</g, "\\u003c") }] : []),
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const topic = topicFor(article.categorySlug);
  const related = relatedArticles(article.slug);
  return <BlogShell>
    <main className="mx-auto max-w-[1440px] px-6 md:px-12">
      <nav aria-label="Đường dẫn bài viết" className="flex flex-wrap items-center gap-2 py-7 text-xs leading-6 text-muted-foreground">
        <Link to="/">Trang chủ</Link><span aria-hidden="true">/</span><Link to="/blog">Cẩm nang</Link><span aria-hidden="true">/</span><Link to="/blog/chu-de/$category" params={{ category: article.categorySlug }}>{topic.name}</Link>
      </nav>
      <article>
        <header className="grid gap-9 border-b border-border pb-12 pt-5 md:grid-cols-12 md:gap-12 md:pb-16">
          <div className="md:col-span-8"><p className="blog-kicker">{topic.name} / Tài liệu kỹ thuật</p><h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.12] md:text-5xl lg:text-6xl">{article.h1}</h1><div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs leading-6 text-muted-foreground"><span>Sơn Lotus</span><span>{article.publishedAt}</span><span>{article.readTime}</span></div></div>
          <figure className="md:col-span-4"><img src={topic.image} alt={`Bề mặt tham khảo — ${topic.name}`} className="aspect-[4/3] w-full object-cover md:aspect-square" /><figcaption className="mt-3 text-xs leading-6 text-muted-foreground">Vật liệu & hoàn thiện / {topic.name}</figcaption></figure>
        </header>
        <div className="grid gap-12 pt-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:pt-16">
          <aside><nav aria-label="Mục lục bài viết" className="lg:sticky lg:top-8"><p className="blog-kicker mb-5">Trong bài viết</p><ol className="space-y-4">{article.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className="flex gap-3 text-xs leading-6 text-muted-foreground transition-colors hover:text-foreground"><span className="font-mono text-accent">{String(index + 1).padStart(2, "0")}</span><span>{section.heading.replace(/^\d+[.)]\s*/, "")}</span></a></li>)}</ol>{article.faqs.length > 0 && <a href="#cau-hoi" className="mt-5 block border-t border-border pt-4 text-xs leading-6 text-muted-foreground">Câu hỏi thường gặp</a>}</nav></aside>
          <div className="min-w-0 max-w-[800px]">
            <section className="border-b border-border pb-10"><p className="blog-kicker">Điểm cần nắm</p><p className="mt-5 font-serif text-2xl leading-[1.5] md:text-3xl">{article.quickSummary}</p></section>
            <div className="grid gap-8 border-b border-border py-10 sm:grid-cols-2"><section><h2 className="text-sm font-semibold">Khi nên chọn</h2><ul className="blog-list mt-4">{article.whenToChoose.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2 className="text-sm font-semibold">Khi cần cân nhắc</h2><ul className="blog-list mt-4">{article.whenNotToChoose.map((item) => <li key={item}>{item}</li>)}</ul></section></div>
            <aside className="my-10 border-l-2 border-accent pl-6"><p className="blog-kicker">Khuyến nghị Lotus</p><p className="mt-3 text-sm leading-7 text-muted-foreground">{article.lotusRecommendation}</p></aside>
            <div className="blog-prose">{article.sections.map((section) => <section key={section.id} id={section.id} className="scroll-mt-8 border-t border-border py-10 md:py-12">
              <h2 className="mb-6 font-serif text-3xl leading-tight md:text-4xl">{section.heading}</h2>
              {section.paragraphs?.map((text, index) => <p key={index}>{text}</p>)}
              {section.list && <ul className="blog-list my-6">{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
              {section.table && <div role="region" aria-label={`Bảng: ${section.heading}`} tabIndex={0} className="my-8 max-w-full overflow-x-auto border-y border-border focus-visible:ring-1 focus-visible:ring-ring"><table className="w-full min-w-[540px] border-collapse text-left text-sm"><thead className="bg-secondary"><tr>{section.table.headers.map((header, index) => <th key={index} scope="col" className="px-4 py-5 font-semibold leading-6">{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, index) => <tr key={index} className="border-t border-border">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-5 align-top leading-7">{cell}</td>)}</tr>)}</tbody></table></div>}
              {section.steps && <ol className="my-8">{section.steps.map((step, index) => <li key={index} className="flex gap-5 border-b border-border py-6"><span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-base font-semibold leading-7">{step.title}</h3><p className="mt-2">{step.desc}</p></div></li>)}</ol>}
              {section.callout && <aside className="my-8 border-l-2 border-accent bg-secondary/40 px-6 py-5"><h3 className="text-sm font-semibold">{section.callout.title}</h3><p className="mt-3">{section.callout.text}</p></aside>}
            </section>)}</div>
            {article.faqs.length > 0 && <section id="cau-hoi" className="scroll-mt-8 border-t border-border pt-12"><p className="blog-kicker">Trao đổi kỹ thuật</p><h2 className="mt-5 mb-8 font-serif text-3xl md:text-4xl">Câu hỏi thường gặp</h2>{article.faqs.map((faq, index) => <details key={index} className="group border-b border-border py-6"><summary className="cursor-pointer text-base font-medium leading-7 marker:text-accent">{faq.question}</summary><p className="mt-5 text-sm leading-7 text-muted-foreground">{faq.answer}</p></details>)}</section>}
            <Consultation />
          </div>
        </div>
      </article>
      {related.length > 0 && <section className="mt-20"><p className="blog-kicker">Đọc tiếp</p><h2 className="mt-5 font-serif text-4xl">Cùng một hạng mục.<br /><span className="italic">Thêm một góc nhìn.</span></h2><div className="mt-10 grid gap-8 md:grid-cols-3">{related.map((item) => <Link key={item.slug} to="/blog/$" params={{ _splat: item.slug }} className="group border-b border-border pb-7"><img src={topicFor(item.categorySlug).image} alt={`Bề mặt tham khảo — ${topicFor(item.categorySlug).name}`} loading="lazy" className="aspect-[16/10] w-full object-cover" /><p className="blog-kicker mt-5">{topicFor(item.categorySlug).name}</p><h3 className="mt-3 font-serif text-2xl leading-tight">{item.h1}</h3><span className="mt-5 flex items-center gap-2 text-xs">Đọc bài viết <ArrowUpRight className="size-4" /></span></Link>)}</div></section>}
    </main>
  </BlogShell>;
}
