import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-lotus-paint.png";
import { ZALO_URL } from "@/lib/site";

export function BlogShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground">
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-6 md:px-12">
        <Link to="/" aria-label="Sơn Lotus — Trang chủ"><img src={logo} alt="Sơn Lotus" className="h-10 w-auto md:h-12" /></Link>
        <nav aria-label="Điều hướng cẩm nang" className="flex items-center gap-4 md:gap-8">
          <Button asChild variant="link" className="hidden px-0 md:inline-flex"><Link to="/"><ArrowLeft /> Hệ sơn Lotus</Link></Button>
          <Button asChild variant="link" className="px-0"><Link to="/blog">Cẩm nang</Link></Button>
          <Button asChild variant="outline" className="rounded-none text-xs sm:text-sm"><a href={ZALO_URL} target="_blank" rel="noopener noreferrer">Tư vấn Zalo <ArrowUpRight /></a></Button>
        </nav>
      </div>
    </header>
    {children}
    <footer className="mx-auto mt-24 max-w-[1440px] border-t border-border px-6 py-10 md:px-12">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><Link to="/" className="font-serif text-3xl italic">Sơn Lotus</Link><p className="mt-3 text-xs leading-relaxed text-muted-foreground">Nhà sản xuất sơn Việt Nam · Cho xưởng, nhà thầu và nhà máy.</p></div><p className="text-xs text-muted-foreground">0943 966 662 · TP. Hồ Chí Minh</p></div>
    </footer>
  </div>;
}

export function Consultation() {
  return <section className="mt-20 border-y border-border py-12 md:py-16">
    <p className="blog-kicker">Tư vấn theo hạng mục</p><h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">Đề xuất đúng hệ sơn.</h2>
    <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">Gửi ảnh bề mặt, vật liệu nền, yêu cầu hoàn thiện và quy mô công việc. Lotus tư vấn hệ phù hợp và hướng xử lý rõ ràng.</p>
    <Button asChild className="mt-7 h-auto max-w-full whitespace-normal rounded-none px-5 py-4 text-left"><a href={ZALO_URL} target="_blank" rel="noopener noreferrer">Nhắn Zalo · Tư vấn hệ sơn phù hợp <ArrowUpRight /></a></Button>
  </section>;
}