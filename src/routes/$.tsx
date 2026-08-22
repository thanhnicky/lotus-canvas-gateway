import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ARTICLES, type ArticleData } from "@/data/articles";
import logoLotusPaint from "@/assets/logo-lotus-paint.png";
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  FileText,
  Clock,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Share2,
} from "lucide-react";

export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const rawSlug = (params as any)["_splat"] || "";
    // Clean leading and trailing slashes
    const cleanSlug = rawSlug.replace(/^\/+|\/+$/g, "");
    const article = ARTICLES[cleanSlug];
    if (!article) {
      throw notFound();
    }
    return { article, cleanSlug };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) {
      return {
        meta: [{ title: "404 - Không tìm thấy trang | Sơn Lotus" }],
      };
    }
    const fullUrl = `https://sonhenuoc.com/${article.slug}`;
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    };
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.h1,
      description: article.metaDescription,
      author: {
        "@type": "Organization",
        name: "Sơn Lotus R&D Team",
        url: "https://sonhenuoc.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Sơn Lotus",
        logo: {
          "@type": "ImageObject",
          url: "https://sonhenuoc.com/logo-lotus-paint.png",
        },
      },
      mainEntityOfPage: fullUrl,
    };

    return {
      meta: [
        { title: article.title },
        { name: "description", content: article.metaDescription },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.metaDescription },
        { property: "og:url", content: fullUrl },
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: article.title },
        { name: "twitter:description", content: article.metaDescription },
        { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1" },
      ],
      links: [{ rel: "canonical", href: fullUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(articleSchema),
        },
      ],
    };
  },
  component: ArticleView,
});

const ZALO_URL = "https://zalo.me/0943966662";

function ArticleView() {
  const { article } = Route.useLoaderData() as { article: ArticleData };

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-stone-900 selection:bg-amber-100 selection:text-amber-900 font-sans antialiased">
      {/* Top Bar Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3 transition hover:opacity-90">
            <img src={logoLotusPaint} alt="Sơn Lotus Logo" className="h-9 w-auto object-contain" />
            <div className="hidden sm:block border-l border-stone-300 pl-3">
              <span className="block text-xs font-semibold tracking-wider text-stone-500 uppercase">
                Chuyên Gia Sơn Hệ Nước B2B
              </span>
              <span className="text-sm font-bold text-stone-900">Sơn Lotus (sonhenuoc.com)</span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="tel:0943966662"
              className="hidden md:inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-stone-50 px-3.5 py-2 text-xs font-semibold text-stone-700 transition hover:bg-stone-100"
            >
              <PhoneCall className="h-3.5 w-3.5 text-amber-600" />
              Hotline Kỹ Thuật: 0943.966.662
            </a>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow"
            >
              <MessageSquare className="h-4 w-4" />
              Nhắn Zalo Tư Vấn Hệ Sơn
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-stone-500">
          <Link to="/" className="hover:text-amber-700 transition">
            Trang chủ
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
          <span className="font-medium text-stone-700">{article.category}</span>
          <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
          <span className="truncate max-w-[280px] sm:max-w-md font-semibold text-stone-900">
            {article.h1}
          </span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Article Main Column */}
          <article className="lg:col-span-8">
            {/* Header / Meta */}
            <div className="mb-8 border-b border-stone-200 pb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-200">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
                {article.category} • Tài Liệu Kỹ Thuật B2B
              </div>

              <h1 className="text-2xl font-black tracking-tight text-stone-950 sm:text-3xl lg:text-4xl lg:leading-[1.25]">
                {article.h1}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-stone-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  Cập nhật: {article.publishedAt}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readTime}
                </span>
                <span className="font-medium text-stone-700 bg-stone-100 px-2.5 py-0.5 rounded">
                  Tác giả: Lotus Technical R&D Team
                </span>
              </div>
            </div>

            {/* AIO/GEO Quick Summary Box */}
            <div className="mb-8 rounded-2xl border-2 border-amber-500/30 bg-amber-50/50 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-950 uppercase tracking-wider mb-2">
                <Lightbulb className="h-5 w-5 text-amber-600" />
                Kết Luận Nhanh (AIO Summary)
              </div>
              <p className="text-stone-800 leading-relaxed text-sm sm:text-base font-medium">
                {article.quickSummary}
              </p>
            </div>

            {/* When to choose / When not to choose Matrix */}
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-900 mb-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Khi Nào Nên Chọn
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {article.whenToChoose.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-rose-900 mb-3">
                  <XCircle className="h-4 w-4 text-rose-600" />
                  Khi Nào Không Nên Chọn
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {article.whenNotToChoose.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Lotus Recommendation Callout */}
            <div className="mb-10 rounded-xl border-l-4 border-l-amber-600 border border-stone-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                Khuyến Nghị Từ Chuyên Gia Sơn Lotus
              </div>
              <p className="text-sm text-stone-800 leading-relaxed font-medium">
                {article.lotusRecommendation}
              </p>
            </div>

            {/* Table of Contents Box */}
            <div className="mb-10 rounded-xl border border-stone-200 bg-stone-50 p-5">
              <div className="text-sm font-bold text-stone-900 mb-3">Mục Lục Bài Viết</div>
              <ul className="space-y-2 text-xs sm:text-sm">
                {article.sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="text-stone-700 hover:text-amber-700 hover:underline flex items-center gap-2 transition"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                      {sec.heading}
                    </a>
                  </li>
                ))}
                {article.faqs.length > 0 && (
                  <li>
                    <a
                      href="#faq-section"
                      className="text-stone-700 hover:text-amber-700 hover:underline flex items-center gap-2 transition"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                      Câu hỏi kỹ thuật thường gặp (FAQ)
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Deep Content Sections */}
            <div className="space-y-12 leading-relaxed">
              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-20">
                  <h2 className="text-xl font-bold tracking-tight text-stone-950 sm:text-2xl border-b border-stone-200 pb-2 mb-4">
                    {section.heading}
                  </h2>

                  {section.paragraphs && (
                    <div className="space-y-3.5 text-stone-700 text-sm sm:text-base leading-relaxed">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  )}

                  {section.list && (
                    <ul className="my-4 space-y-2.5 rounded-xl border border-stone-200 bg-white p-5 text-sm text-stone-700 shadow-sm">
                      {section.list.map((li, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className="my-6 overflow-hidden rounded-xl border border-stone-300 bg-white shadow-sm">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-stone-100 text-stone-900 font-bold border-b border-stone-300">
                            <tr>
                              {section.table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="px-4 py-3 whitespace-nowrap">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-200 text-stone-700">
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-amber-50/40 transition">
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`px-4 py-3 ${
                                      cIdx === 0
                                        ? "font-semibold text-stone-900"
                                        : cIdx === row.length - 1
                                        ? "font-bold text-emerald-700"
                                        : ""
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {section.steps && (
                    <div className="my-6 space-y-3">
                      {section.steps.map((st, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start gap-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-600 text-xs font-bold text-white shadow">
                            {sIdx + 1}
                          </span>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-stone-900">
                              {st.title}
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                              {st.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {/* FAQ Section */}
              {article.faqs.length > 0 && (
                <section id="faq-section" className="scroll-mt-20 pt-6 border-t border-stone-300">
                  <h2 className="text-xl font-bold tracking-tight text-stone-950 sm:text-2xl mb-6">
                    Câu Hỏi Kỹ Thuật Thường Gặp (FAQ)
                  </h2>
                  <div className="space-y-4">
                    {article.faqs.map((faq, fIdx) => (
                      <div
                        key={fIdx}
                        className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-amber-300"
                      >
                        <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Bottom Conversion CTA Box */}
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 p-8 text-white shadow-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-500/30 mb-4">
                Hỗ Trợ Kỹ Thuật B2B Miễn Phí
              </div>
              <h3 className="text-xl font-bold sm:text-2xl">
                Cần Đề Xuất Hệ Sơn Cho Dự Án Hoặc Nhận Mẫu Thử Nghiệm?
              </h3>
              <p className="mt-2 text-sm text-stone-300 max-w-xl leading-relaxed">
                Đội ngũ kỹ sư R&D Sơn Lotus sẵn sàng khảo sát thực tế phôi vật liệu, cung cấp mẫu thử xưởng miễn phí và cấp hồ sơ TDS/MSDS đệ trình thầu trong 24 giờ.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 hover:shadow-emerald-600/30"
                >
                  <MessageSquare className="h-4 w-4" />
                  Nhắn Zalo Với Kỹ Sư R&D
                </a>
                <a
                  href="tel:0943966662"
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-700 bg-stone-800/80 px-5 py-3 text-sm font-semibold text-stone-200 transition hover:bg-stone-800 hover:text-white"
                >
                  <PhoneCall className="h-4 w-4 text-amber-400" />
                  Gọi 0943.966.662
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Contact Card */}
            <div className="sticky top-20 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                Hỗ trợ kỹ thuật On-site
              </div>
              <div className="text-lg font-black text-stone-900 mb-3">
                Nhà Sản Xuất Sơn Lotus
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Tư vấn trực tiếp theo từng nền vật liệu: Gỗ tự nhiên, Thép mạ kẽm, Inox, Bê tông và Tấm Cemboard.
              </p>

              <div className="space-y-2.5">
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs sm:text-sm font-bold text-white shadow transition hover:bg-emerald-700"
                >
                  <MessageSquare className="h-4 w-4" />
                  Gửi Ảnh Bề Mặt Qua Zalo
                </a>
                <a
                  href="tel:0943966662"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-stone-300 bg-stone-50 py-2.5 text-xs font-semibold text-stone-800 transition hover:bg-stone-100"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-amber-600" />
                  Hotline: 0943.966.662
                </a>
              </div>

              {/* Related Articles List */}
              {article.relatedSlugs && article.relatedSlugs.length > 0 && (
                <div className="mt-8 border-t border-stone-200 pt-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
                    Bài Viết Kỹ Thuật Liên Quan
                  </div>
                  <div className="space-y-3">
                    {article.relatedSlugs.map((relSlug) => {
                      const relArticle = ARTICLES[relSlug];
                      if (!relArticle) return null;
                      return (
                        <Link
                          key={relSlug}
                          to={`/${relSlug}`}
                          className="block rounded-lg border border-stone-100 bg-stone-50/70 p-3 text-xs transition hover:border-amber-300 hover:bg-amber-50/40"
                        >
                          <div className="font-semibold text-stone-900 hover:text-amber-800 line-clamp-2">
                            {relArticle.h1}
                          </div>
                          <div className="mt-1 flex items-center justify-between text-[11px] text-stone-500">
                            <span>{relArticle.category}</span>
                            <span className="flex items-center gap-0.5 text-amber-700 font-medium">
                              Đọc <ArrowRight className="h-3 w-3" />
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* All Category Hub Links */}
              <div className="mt-6 border-t border-stone-200 pt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
                  Danh Mục Hệ Sơn Lotus
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  <Link
                    to="/son-go-he-nuoc"
                    className="rounded-lg bg-stone-100 px-2.5 py-1 text-stone-700 hover:bg-amber-100 hover:text-amber-900 transition"
                  >
                    Sơn Gỗ
                  </Link>
                  <Link
                    to="/son-kim-loai-he-nuoc"
                    className="rounded-lg bg-stone-100 px-2.5 py-1 text-stone-700 hover:bg-amber-100 hover:text-amber-900 transition"
                  >
                    Sơn Kim Loại
                  </Link>
                  <Link
                    to="/son-gia-go-he-nuoc"
                    className="rounded-lg bg-stone-100 px-2.5 py-1 text-stone-700 hover:bg-amber-100 hover:text-amber-900 transition"
                  >
                    Sơn Giả Gỗ
                  </Link>
                  <Link
                    to="/son-san-he-nuoc"
                    className="rounded-lg bg-stone-100 px-2.5 py-1 text-stone-700 hover:bg-amber-100 hover:text-amber-900 transition"
                  >
                    Sơn Sàn
                  </Link>
                  <Link
                    to="/chuyen-doi-he-nuoc"
                    className="rounded-lg bg-stone-100 px-2.5 py-1 text-stone-700 hover:bg-amber-100 hover:text-amber-900 transition"
                  >
                    Cẩm Nang Chuyển Đổi
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-stone-200 bg-stone-900 py-12 text-stone-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-xs">
          <p>© 2026 Sơn Lotus — Nhà sản xuất sơn công nghiệp hệ nước hàng đầu Việt Nam.</p>
          <p className="mt-1">Website chính thức: https://sonhenuoc.com | Hotline: 0943.966.662</p>
        </div>
      </footer>
    </div>
  );
}
