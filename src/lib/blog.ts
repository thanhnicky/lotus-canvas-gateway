import { ARTICLES } from "@/data/articles";
import wood from "@/assets/cat-wood.jpg";
import metal from "@/assets/cat-metal.jpg";
import grain from "@/assets/cat-cementwood.jpg";
import floor from "@/assets/cat-floor.jpg";
import composite from "@/assets/cat-composite.jpg";
import craft from "@/assets/reveal-craft.jpg";

export const TOPICS = [
  { slug: "son-go-he-nuoc", name: "Sơn gỗ", image: wood, description: "Chọn hệ phủ, kiểm soát hoàn thiện và yêu cầu xuất khẩu cho xưởng gỗ." },
  { slug: "son-kim-loai-he-nuoc", name: "Sơn kim loại", image: metal, description: "Xử lý nền, bám dính và bảo vệ kim loại trong điều kiện sử dụng thực tế." },
  { slug: "son-gia-go-he-nuoc", name: "Sơn giả gỗ", image: grain, description: "Thi công vân gỗ trên cemboard và kim loại: từ nền đến lớp bảo vệ." },
  { slug: "son-san-he-nuoc", name: "Sơn sàn", image: floor, description: "Kiểm soát độ ẩm, chọn hệ epoxy và xử lý rủi ro trên nền bê tông." },
  { slug: "son-composite-he-nuoc", name: "Sơn composite", image: composite, description: "Chuẩn bị nền FRP, carbon và chọn hệ phủ phù hợp." },
  { slug: "chuyen-doi-he-nuoc", name: "Chuyển đổi hệ nước", image: craft, description: "Thiết bị, tay nghề và chi phí khi chuyển đổi dây chuyền sơn." },
  { slug: "so-sanh", name: "So sánh hệ sơn", image: wood, description: "Đối chiếu hệ sơn theo hiệu quả vận hành và yêu cầu của công việc." },
  { slug: "loi-thi-cong", name: "Xử lý lỗi", image: metal, description: "Tìm nguyên nhân và hướng xử lý các lỗi màng sơn thường gặp." },
  { slug: "son-loa-he-nuoc", name: "Sơn loa", image: wood, description: "Hoàn thiện thùng loa MDF & gỗ dán: lót chặn xơ, sơn sần texture, phủ chống trầy cho dây chuyền xưởng." },
  { slug: "son-ngoi-he-nuoc", name: "Sơn ngói", image: grain, description: "Đổi màu mái ngói xi măng, đất nung: kháng kiềm, chống rêu mốc, bền màu nắng mưa." },
  { slug: "son-say-cong-nghiep-he-nuoc", name: "Sơn sấy công nghiệp", image: metal, description: "Sơn sấy gốc nước cho vỏ máy & linh kiện: chế độ sấy, lỗi bọt khí và cải tạo lò hiện có." },
  { slug: "son-nhua-he-nuoc", name: "Sơn nhựa & nền khó bám", image: composite, description: "Bám dính trên nhựa ABS/PVC/PP, cửa nhựa uPVC và xốp EPS: xử lý nền năng lượng thấp và lót tăng bám." },
];
export const ALL_ARTICLES = Object.values(ARTICLES);
export function topicFor(slug: string) { return TOPICS.find((topic) => topic.slug === slug) ?? TOPICS[0]; }
export function relatedArticles(slug: string) {
  const article = ARTICLES[slug];
  if (!article) return [];
  const explicit = article.relatedSlugs.map((key) => ARTICLES[key]).filter((item) => item && item.slug !== slug);
  const siblings = ALL_ARTICLES.filter((item) => item.categorySlug === article.categorySlug && item.slug !== slug);
  return [...new Map([...explicit, ...siblings].map((item) => [item.slug, item])).values()].slice(0, 3);
}