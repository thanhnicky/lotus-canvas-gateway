import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { SITE_URL, ZALO_URL } from "@/lib/site";
import { CATEGORIES, SLUG_TO_ID } from "@/lib/systems";
import { ALL_ARTICLES } from "@/lib/blog";
import { ArrowUpRight } from "lucide-react";

const CLUSTER: Record<string, { slug: string; name: string }> = {
  wood: { slug: "son-go-he-nuoc", name: "Sơn gỗ hệ nước" },
  metal: { slug: "son-kim-loai-he-nuoc", name: "Sơn kim loại hệ nước" },
  "metal-wood": { slug: "son-gia-go-he-nuoc", name: "Sơn giả gỗ hệ nước" },
  "cement-wood": { slug: "son-gia-go-he-nuoc", name: "Sơn giả gỗ hệ nước" },
  composite: { slug: "son-composite-he-nuoc", name: "Sơn composite hệ nước" },
  floor: { slug: "son-san-he-nuoc", name: "Sơn sàn hệ nước" },
};

const LEGACY_SLUGS: Record<string, string> = {
  "son-gia-go": "son-gia-go-tren-kim-loai",
};

export const Route = createFileRoute("/he-son/$system")({
  loader: ({ params }) => {
    const canonicalSlug = LEGACY_SLUGS[params.system];
    if (canonicalSlug)
      throw redirect({ to: "/he-son/$system", params: { system: canonicalSlug }, statusCode: 301 });
    const id = SLUG_TO_ID[params.system];
    const system = CATEGORIES.find((item) => item.id === id);
    if (!system) throw notFound();
    return { system, slug: params.system };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { system, slug } = loaderData;
    const url = `${SITE_URL}/he-son/${slug}`;
    const title = `${system.name} hệ nước — Hệ sơn chuyên dụng | Sơn Lotus`;
    const description = `${system.tagline} ${system.description}`.slice(0, 160);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "robots", content: "index,follow,max-image-preview:large" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Sơn Lotus", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Hệ sơn chuyên dụng", item: `${SITE_URL}/#he-son-overview` },
            { "@type": "ListItem", position: 3, name: system.name, item: url },
          ],
        }).replace(/</g, "\\u003c") },
        ...(system.faq.length > 0 ? [{ type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage", mainEntity: system.faq.map((faq) => ({
            "@type": "Question", name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }).replace(/</g, "\\u003c") }] : []),
      ],
    };
  },
  component: SystemPage,
});

function SystemPage() {
  const { system, slug } = Route.useLoaderData();
  const cluster = CLUSTER[system.id];
  const articles = cluster
    ? ALL_ARTICLES.filter((item) => item.categorySlug === cluster.slug).slice(0, 3)
    : [];

  return (
    <div className="bg-background text-foreground">
      <header className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:px-12">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <a href="/#he-son-overview" className="hover:text-foreground">Hệ sơn chuyên dụng</a>
          <span aria-hidden="true">/</span>
          <span>{system.name}</span>
        </nav>
        <p className="blog-kicker mt-14">{system.nameEn} — {system.index}</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{system.name} hệ nước</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{system.tagline}</p>
        <p className="mt-4 max-w-2xl text-sm leading-7">{system.description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Tư vấn hệ sơn này <ArrowUpRight className="size-4" /></a>
          {cluster && <Link to="/blog/chu-de/$category" params={{ category: cluster.slug }} className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium">Tài liệu kỹ thuật {cluster.name}</Link>}
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 md:grid-cols-2 md:px-12">
        <img src={system.image} alt={`${system.name} hệ nước — ứng dụng`} className="aspect-[4/3] w-full object-cover" loading="eager" />
        <div>
          <h2 className="blog-kicker mb-6">Ứng dụng điển hình</h2>
          <ul className="space-y-4">
            {system.applications.map((item) => <li key={item} className="border-b border-border pb-4 text-sm leading-7">{item}</li>)}
          </ul>
          <h2 className="blog-kicker mt-12 mb-6">Thông số chính</h2>
          <table className="w-full text-left text-sm">
            <tbody>
              {system.specs.map((spec) => (
                <tr key={spec.label} className="border-t border-border">
                  <th scope="row" className="py-4 pr-6 font-medium">{spec.label}</th>
                  <td className="py-4 text-muted-foreground">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-12">
          <h2 className="blog-kicker mb-4">Cấu trúc hệ sơn</h2>
          <h3 className="font-serif text-3xl md:text-4xl">Hệ phủ chuẩn cho {system.name.toLowerCase()}</h3>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-4 py-4 font-semibold">Lớp</th>
                  <th className="px-4 py-4 font-semibold">Sản phẩm Lotus</th>
                  <th className="px-4 py-4 font-semibold">Định mức</th>
                  <th className="px-4 py-4 font-semibold">Số lớp</th>
                </tr>
              </thead>
              <tbody>
                {system.system.map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-4 py-4 font-medium">{row.layer}</td>
                    <td className="px-4 py-4">{row.product}</td>
                    <td className="px-4 py-4 text-muted-foreground">{row.rate}</td>
                    <td className="px-4 py-4 text-muted-foreground">{row.coats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <h2 className="blog-kicker mb-4">Quy trình thi công</h2>
        <ol className="mt-8 space-y-0">
          {system.process.map((step, i) => (
            <li key={i} className="flex gap-5 border-b border-border py-6">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-base font-semibold leading-7">{step.step} — {step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {system.projects.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-16 md:px-12">
          <h2 className="blog-kicker mb-8">Công trình tham chiếu</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {system.projects.map((project, i) => (
              <figure key={i} className="border-b border-border pb-6">
                <img src={project.image} alt={project.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="mt-4">
                  <p className="text-sm font-medium">{project.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{project.meta}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {system.faq.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-16 md:px-12">
          <h2 className="font-serif text-3xl md:text-4xl">Câu hỏi thường gặp</h2>
          <div className="mt-8">
            {system.faq.map((faq, i) => (
              <details key={i} className="group border-b border-border py-5">
                <summary className="cursor-pointer text-base font-medium leading-7 marker:text-accent">{faq.q}</summary>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {articles.length > 0 && (
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-12">
            <h2 className="blog-kicker">Tài liệu kỹ thuật</h2>
            <h3 className="mt-4 font-serif text-3xl">Bài viết chuyên sâu về {cluster.name.toLowerCase()}</h3>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {articles.map((item) => (
                <Link key={item.slug} to="/blog/$" params={{ _splat: item.slug }} className="group border-b border-border pb-6">
                  <h4 className="font-serif text-xl leading-snug">{item.h1}</h4>
                  <span className="mt-4 flex items-center gap-2 text-xs">Đọc bài viết <ArrowUpRight className="size-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
