import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogShell, Consultation } from "@/components/blog-shell";
import { ALL_ARTICLES, TOPICS, topicFor } from "@/lib/blog";
import craft from "@/assets/reveal-craft.jpg";

export function BlogLibrary({ category }: { category?: string }) {
  const [query, setQuery] = useState("");
  const topic = category ? topicFor(category) : undefined;
  const normalize = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").toLowerCase();
  const articles = ALL_ARTICLES.filter((article) => (!category || article.categorySlug === category) && normalize(`${article.h1} ${article.metaDescription}`).includes(normalize(query)));
  return <BlogShell>
    <main className="mx-auto max-w-[1440px] px-6 md:px-12">
      <section className="grid grid-cols-1 gap-10 border-b border-border pb-12 pt-14 md:grid-cols-12 md:pb-16 md:pt-20">
        <div className="md:col-span-7"><p className="blog-kicker">Lotus / Cẩm nang kỹ thuật</p><h1 className="mt-6 max-w-2xl font-serif text-5xl leading-[1.08] md:text-7xl">{topic ? topic.name : <>Hiểu vật liệu.<br /><span className="italic">Chọn đúng hệ sơn.</span></>}</h1><p className="mt-7 max-w-lg text-sm leading-7 text-muted-foreground">{topic?.description ?? "Từ lựa chọn hệ phủ đến xử lý lỗi thi công. Tài liệu cho xưởng, nhà thầu và nhà máy — trước khi bắt đầu một hạng mục."}</p><p className="mt-10 font-mono text-xs text-muted-foreground">{String(ALL_ARTICLES.filter((a) => !category || a.categorySlug === category).length).padStart(2, "0")} bài viết / {topic ? "Chuyên đề" : "8 chuyên đề"}</p></div>
        <figure className="md:col-span-5 md:pt-4"><img src={topic?.image ?? craft} alt={topic ? `Bề mặt vật liệu — ${topic.name}` : "Thao tác hoàn thiện bề mặt tại xưởng"} className="aspect-[4/3] w-full object-cover" /><figcaption className="mt-3 text-xs text-muted-foreground">{topic?.name ?? "Vật liệu & kỹ thuật hoàn thiện"} / Sơn Lotus</figcaption></figure>
      </section>
      <div className="grid gap-12 pt-10 lg:grid-cols-[220px_1fr] lg:gap-16">
        <aside><p className="blog-kicker mb-5">Chuyên đề</p><nav aria-label="Chuyên đề bài viết" className="flex flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:gap-0"><Link to="/blog" aria-current={!category ? "page" : undefined} className={`blog-topic ${!category ? "font-semibold text-foreground" : "text-muted-foreground"}`}>Tất cả bài viết <span>{ALL_ARTICLES.length}</span></Link>{TOPICS.map((item) => <Link key={item.slug} to="/blog/chu-de/$category" params={{ category: item.slug }} aria-current={category === item.slug ? "page" : undefined} className={`blog-topic ${category === item.slug ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{item.name}<span>{ALL_ARTICLES.filter((a) => a.categorySlug === item.slug).length}</span></Link>)}</nav></aside>
        <div>
          <div className="mb-8 flex items-center gap-3 border-b border-border pb-4"><Search className="size-4 shrink-0 text-muted-foreground" /><input aria-label="Tìm bài viết" type="search" placeholder="Tìm theo vật liệu, hệ sơn hoặc lỗi thi công…" value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring" />{query && <Button variant="ghost" size="icon" aria-label="Xóa tìm kiếm" onClick={() => setQuery("")}><X /></Button>}</div>
          <p aria-live="polite" className="mb-4 text-xs text-muted-foreground">{articles.length} bài viết</p>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">{articles.map((article) => <article key={article.slug} className="group border-b border-border pb-7"><Link to="/blog/$" params={{ _splat: article.slug }} className="block"><div className="overflow-hidden"><img src={topicFor(article.categorySlug).image} alt={`Bề mặt tham khảo — ${topicFor(article.categorySlug).name}`} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none" /></div><p className="blog-kicker mt-5">{topicFor(article.categorySlug).name} · {article.readTime}</p><h2 className="mt-3 font-serif text-2xl leading-tight md:text-3xl">{article.h1}</h2><p className="mt-4 line-clamp-3 text-sm leading-7 text-muted-foreground">{article.metaDescription}</p><span className="mt-5 flex items-center gap-2 text-xs">Đọc bài viết <ArrowUpRight className="size-4" /></span></Link></article>)}</div>
          {!articles.length && <div className="py-16"><h2 className="font-serif text-3xl">Chưa tìm thấy bài phù hợp.</h2><p className="mt-4 text-sm text-muted-foreground">Thử tên vật liệu hoặc một từ khóa ngắn hơn.</p><Button variant="link" className="mt-4 px-0" onClick={() => setQuery("")}>Xóa tìm kiếm</Button></div>}
          <Consultation />
        </div>
      </div>
    </main>
  </BlogShell>;
}