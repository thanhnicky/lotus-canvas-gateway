import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import catWood from "@/assets/cat-wood.jpg";
import catMetal from "@/assets/cat-metal.jpg";
import catMetalWood from "@/assets/cat-metalwood.jpg";
import catCementWood from "@/assets/cat-cementwood.jpg";
import catComposite from "@/assets/cat-composite.jpg";
import catFloor from "@/assets/cat-floor.jpg";
import revealCraft from "@/assets/reveal-craft.jpg";
import revealMacro from "@/assets/reveal-macro.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sơn Lotus — Hệ thống sơn phủ cao cấp cho mọi vật liệu" },
      {
        name: "description",
        content:
          "Sơn Lotus — nhà sản xuất sơn công nghiệp Việt Nam. Hệ sơn gỗ, kim loại, giả gỗ, composite và sơn sàn cho nhà thầu, xưởng và dự án cao cấp.",
      },
      { property: "og:title", content: "Sơn Lotus — Hệ thống sơn phủ cao cấp" },
      {
        property: "og:description",
        content:
          "Nhà sản xuất sơn đa hệ thống — kiến tạo lớp bảo vệ bề mặt cho gỗ, kim loại, xi măng, composite và sàn công nghiệp.",
      },
    ],
  }),
  component: Index,
});

const ZALO_URL = "https://zalo.me/";

type Category = {
  id: string;
  index: string;
  name: string;
  nameEn: string;
  tagline: string;
  manifesto: string;
  image: string;
  imageTone: "dark" | "light";
  /** Material atmosphere — drives accent ink + chapter wash for this universe */
  accent: string;
  /** Short signature word for the printed index (e.g. "Walnut", "Steel") */
  signature: string;
  description: string;
  applications: string[];
  specs: { label: string; value: string }[];
  process: { step: string; title: string; body: string }[];
  system: { layer: string; product: string; rate: string; coats: string }[];
  projects: { image: string; title: string; meta: string }[];
  faq: { q: string; a: string }[];
};

const CATEGORIES: Category[] = [
  {
    id: "wood",
    index: "01",
    name: "Sơn gỗ",
    nameEn: "Timber Coating",
    tagline: "Linh hồn của gỗ, được Lotus gìn giữ.",
    manifesto:
      "Mỗi đường vân là một câu chuyện đã được rừng viết. Chúng tôi chỉ giữ cho câu chuyện ấy không phai.",
    image: catWood,
    imageTone: "dark",
    accent: "#6f4a2a",
    signature: "Walnut",
    description:
      "Hệ sơn gỗ Lotus tôn vinh từng đường vân tự nhiên, đồng thời tạo lớp màng bảo vệ siêu bền trước độ ẩm, tia UV và va đập cơ học — sự cân bằng giữa thẩm mỹ thủ công và hóa học hiện đại.",
    applications: [
      "Nội thất gỗ cao cấp & resort nghỉ dưỡng",
      "Cửa sổ, cửa ra vào chịu nắng trực tiếp",
      "Sàn gỗ tự nhiên trong nhà",
      "Đồ gỗ xuất khẩu thị trường Mỹ & EU",
    ],
    specs: [
      { label: "Độ bóng", value: "Mờ 5% — Bóng gương" },
      { label: "Độ bền", value: "Kháng UV, chống trầy 4H" },
      { label: "Gốc", value: "PU / NC / Water-based" },
      { label: "VOC", value: "Thấp — dưới 50 g/L" },
    ],
    process: [
      { step: "I", title: "Xử lý bề mặt", body: "Chà nhám độ mịn P180–P240, vệ sinh bụi gỗ và kiểm tra độ ẩm dưới 12%." },
      { step: "II", title: "Lớp lót Primer", body: "Ngăn nhựa gỗ, làm đầy lỗ li ti và tạo chân bám tối ưu cho lớp phủ." },
      { step: "III", title: "Lớp phủ màu", body: "Phun đều tay để đạt sắc độ mong muốn mà vẫn giữ nguyên vân gỗ tự nhiên." },
      { step: "IV", title: "Lớp Topcoat", body: "Quyết định độ bóng cuối cùng và khả năng chống trầy xước, chống ố vàng." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Wood Primer P80", rate: "8–10 m²/L", coats: "01" },
      { layer: "Lớp lót 2", product: "Lotus Sanding Sealer", rate: "10–12 m²/L", coats: "02" },
      { layer: "Lớp màu", product: "Lotus Stain Color", rate: "12–15 m²/L", coats: "01" },
      { layer: "Lớp phủ", product: "Lotus Topcoat Matte/Gloss", rate: "10–12 m²/L", coats: "02" },
    ],
    projects: [
      { image: project1, title: "Villa Đà Lạt", meta: "Hệ ngoại thất gỗ tếch" },
      { image: revealCraft, title: "Atelier Walnut", meta: "Hoàn thiện thủ công" },
      { image: project3, title: "Lumiere Dining", meta: "Trần & vách gỗ nội thất" },
    ],
    faq: [
      { q: "Hệ sơn có thể thi công ngoài trời không?", a: "Có. Dòng Lotus Wood Exterior có phụ gia kháng UV và chống nước, phù hợp cho mặt tiền và hệ cửa ngoài trời." },
      { q: "Có hỗ trợ pha màu theo bảng riêng?", a: "Có. Chúng tôi pha màu theo mẫu khách gửi và cung cấp tấm sample trước khi sản xuất hàng loạt." },
      { q: "Định mức tiêu hao thực tế?", a: "Phụ thuộc vào loại gỗ và phương pháp thi công. Đội kỹ thuật Lotus sẽ khảo sát và đưa định mức cam kết cho từng dự án." },
    ],
  },
  {
    id: "metal",
    index: "02",
    name: "Sơn kim loại",
    nameEn: "Metal & Steel",
    tagline: "Phủ bền — chống ăn mòn cho kết cấu thép.",
    manifesto:
      "Thép không sợ thời gian, chỉ sợ ẩm. Lotus đứng giữa hai lực ấy.",
    image: catMetal,
    imageTone: "dark",
    accent: "#4a5560",
    signature: "Steel",
    description:
      "Hệ sơn kim loại Lotus cho kết cấu thép, nhôm và hợp kim — kết hợp lớp chống gỉ epoxy cùng lớp phủ PU bền màu, đáp ứng yêu cầu khắt khe của công trình công nghiệp và kiến trúc hiện đại.",
    applications: [
      "Kết cấu thép nhà xưởng, cầu cảng",
      "Mặt tiền nhôm kiến trúc & lam che nắng",
      "Thiết bị công nghiệp & cơ khí chính xác",
      "Đồ nội thất kim loại sơn tĩnh điện",
    ],
    specs: [
      { label: "Chống ăn mòn", value: "ISO 12944 — C4 / C5" },
      { label: "Độ bền màu", value: "QUV 1000h" },
      { label: "Gốc", value: "Epoxy / PU 2K" },
      { label: "Chống trầy", value: "Cấp 4H" },
    ],
    process: [
      { step: "I", title: "Làm sạch bề mặt", body: "Phun bi Sa 2.5 hoặc tẩy rỉ hóa học, đạt tiêu chuẩn ISO 8501." },
      { step: "II", title: "Lớp lót chống gỉ", body: "Epoxy giàu kẽm tạo lớp bảo vệ catot, ngăn ăn mòn từ nền thép." },
      { step: "III", title: "Lớp trung gian", body: "Epoxy MIO tăng độ dày khô và khả năng chống thấm hơi nước." },
      { step: "IV", title: "Lớp phủ PU", body: "Bền màu, kháng UV và giữ sắc độ ngay cả trong môi trường khắc nghiệt." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Zinc-rich Epoxy", rate: "6–8 m²/L", coats: "01" },
      { layer: "Trung gian", product: "Lotus Epoxy MIO", rate: "5–7 m²/L", coats: "01" },
      { layer: "Lớp phủ", product: "Lotus PU 2K", rate: "10–12 m²/L", coats: "02" },
    ],
    projects: [
      { image: project2, title: "The Office HCMC", meta: "Mặt tiền nhôm anode" },
      { image: catMetal, title: "Nhà máy Bình Dương", meta: "Kết cấu thép C5" },
      { image: project3, title: "Lumiere Dining", meta: "Trần kim loại sơn matte" },
    ],
    faq: [
      { q: "Có dùng được cho mạ kẽm nhúng nóng?", a: "Có. Sử dụng Lotus Etch Primer làm lớp chuyển tiếp trước khi sơn epoxy." },
      { q: "Định mức cho kết cấu C5?", a: "Tổng DFT tối thiểu 240–320 µm tùy môi trường, đội kỹ thuật sẽ thiết kế hệ phù hợp." },
      { q: "Có chứng nhận chất lượng?", a: "Lotus có ISO 9001, đầy đủ TDS / MSDS và báo cáo kiểm nghiệm độc lập." },
    ],
  },
  {
    id: "metal-wood",
    index: "03",
    name: "Sơn giả gỗ trên kim loại",
    nameEn: "Wood-grain on Metal",
    tagline: "Vẻ ấm của gỗ, sự kiên cố của thép.",
    manifesto: "Khi kim loại học cách kể câu chuyện của khu rừng.",
    image: catMetalWood,
    imageTone: "light",
    accent: "#8a5a36",
    signature: "Teak",
    description:
      "Giải pháp phủ vân gỗ chân thực trên nền nhôm, sắt hộp và lam che nắng — bền bỉ trước thời tiết nhiệt đới, mang vẻ ấm của gỗ tự nhiên cho kiến trúc kim loại hiện đại.",
    applications: [
      "Lam nhôm mặt tiền và lan can",
      "Cửa thép vân gỗ ngoài trời",
      "Trần & vách kim loại trang trí",
      "Đồ nội thất kim loại giả gỗ",
    ],
    specs: [
      { label: "Mức độ chân thực", value: "Cao — vân 3D" },
      { label: "Kháng UV", value: "QUV 1500h" },
      { label: "Gốc", value: "PU Wood-grain" },
      { label: "Bảo hành màu", value: "Lên đến 10 năm" },
    ],
    process: [
      { step: "I", title: "Xử lý nền", body: "Tẩy dầu, xử lý hóa chuyển hóa và sơn lót epoxy chống gỉ." },
      { step: "II", title: "Lớp nền màu gỗ", body: "Phun lớp base màu gỗ làm nền cho vân, sấy hoặc khô tự nhiên." },
      { step: "III", title: "Vẽ vân gỗ", body: "Lăn vân chuyên dụng hoặc in chuyển nhiệt water-transfer." },
      { step: "IV", title: "Lớp phủ bóng", body: "Topcoat trong PU khoá vân và bảo vệ khỏi tia UV." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Metal Primer G-200", rate: "8–10 m²/L", coats: "01" },
      { layer: "Lớp nền", product: "Lotus Wood Base", rate: "6–8 m²/L", coats: "01" },
      { layer: "Vẽ vân", product: "Lotus Grain Stain S-10", rate: "12–15 m²/L", coats: "01" },
      { layer: "Lớp phủ", product: "Lotus Clear Topcoat", rate: "10–12 m²/L", coats: "01" },
    ],
    projects: [
      { image: catMetalWood, title: "Lam nhôm mặt tiền", meta: "Resort Phú Quốc" },
      { image: project2, title: "Office Facade", meta: "Hệ giả gỗ trên nhôm" },
      { image: project1, title: "Villa ven biển", meta: "Cửa thép vân tếch" },
    ],
    faq: [
      { q: "Bao lâu cần bảo dưỡng lại?", a: "Trung bình 7–10 năm tùy môi trường, có thể phục hồi tại chỗ bằng dòng Lotus Refinish." },
      { q: "Có làm được vân walnut / teak / oak?", a: "Có. Thư viện hơn 40 mẫu vân và nhận làm mẫu theo yêu cầu." },
    ],
  },
  {
    id: "cement-wood",
    index: "04",
    name: "Sơn giả gỗ trên tấm xi măng",
    nameEn: "Wood-grain on Cement",
    tagline: "Tấm cement, chiều sâu của gỗ.",
    manifesto: "Cement gánh tải trọng. Gỗ gánh cảm xúc. Lotus là cái bắt tay.",
    image: catCementWood,
    imageTone: "light",
    accent: "#7a6347",
    signature: "Oak Cement",
    description:
      "Phủ vân gỗ tự nhiên trên tấm cement Smartboard, Duraflex hoặc cement composite — bền nước, không cong vênh, mang vẻ đẹp ấm áp của gỗ cho ốp tường, trần và sàn ngoại thất.",
    applications: [
      "Ốp tường & trần ngoại thất",
      "Sàn ban công, hành lang khô",
      "Hệ vách trang trí nhà phố",
      "Mặt tiền nhà gỗ cao cấp",
    ],
    specs: [
      { label: "Độ bám", value: "Cao trên nền cement" },
      { label: "Chống thấm", value: "Đạt — không bong tróc" },
      { label: "Gốc", value: "Acrylic Wood-grain" },
      { label: "Bền màu", value: "5–8 năm ngoài trời" },
    ],
    process: [
      { step: "I", title: "Xử lý tấm cement", body: "Vệ sinh, mài phẳng các mối nối và sơn lót kháng kiềm chuyên dụng." },
      { step: "II", title: "Lớp nền vân gỗ", body: "Phun base color đồng đều, làm nền cho thao tác vẽ vân." },
      { step: "III", title: "Lăn vân thủ công", body: "Sử dụng con lăn chuyên dụng tạo đường vân gỗ chân thực." },
      { step: "IV", title: "Phủ bảo vệ", body: "Topcoat acrylic UV bảo vệ vân và chống bám bẩn." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Alkali Primer", rate: "8–10 m²/L", coats: "01" },
      { layer: "Lớp nền", product: "Lotus Wood Base Acrylic", rate: "8–10 m²/L", coats: "01" },
      { layer: "Vẽ vân", product: "Lotus Grain Roller Stain", rate: "10–14 m²/L", coats: "01" },
      { layer: "Lớp phủ", product: "Lotus Acrylic Topcoat UV", rate: "10–12 m²/L", coats: "02" },
    ],
    projects: [
      { image: catCementWood, title: "Ốp tường Smartboard", meta: "Villa Vũng Tàu" },
      { image: project1, title: "Mặt tiền nhà gỗ", meta: "Cement vân teak" },
      { image: project2, title: "Hệ lam trang trí", meta: "Cement vân walnut" },
    ],
    faq: [
      { q: "Có thi công được lên cement đã sơn cũ?", a: "Có, sau khi vệ sinh và kiểm tra độ bám của lớp sơn cũ." },
      { q: "Khả năng chống thấm thế nào?", a: "Hệ Lotus được test ngâm nước 240h không bong tróc, không phồng rộp." },
    ],
  },
  {
    id: "composite",
    index: "05",
    name: "Sơn nhựa / composite",
    nameEn: "Plastic & Composite",
    tagline: "Hoàn thiện nhựa kỹ thuật cấp công nghiệp.",
    manifesto: "Trên một bề mặt khó bám nhất, chúng tôi tìm thấy hóa học của sự gắn kết.",
    image: catComposite,
    imageTone: "light",
    accent: "#3d4a4a",
    signature: "Polymer",
    description:
      "Hệ sơn cho ABS, PC, FRP, fiberglass và composite — độ bám tuyệt vời trên bề mặt nhựa nhẵn, bền màu, thân thiện cho ngành ô tô, thiết bị y tế và sản phẩm xuất khẩu.",
    applications: [
      "Chi tiết nội thất ô tô & xe máy",
      "Vỏ thiết bị y tế và điện tử",
      "Đồ chơi, đồ gia dụng composite",
      "Sản phẩm fiberglass và FRP",
    ],
    specs: [
      { label: "Độ bám", value: "Cấp 5B (cross-cut)" },
      { label: "Độ bền", value: "Kháng dung môi nhẹ" },
      { label: "Gốc", value: "PU 2K / 1K Plastic" },
      { label: "Hoàn thiện", value: "Soft-touch, matte, gloss" },
    ],
    process: [
      { step: "I", title: "Xử lý bề mặt", body: "Lau IPA, plasma hoặc flame treatment nếu cần để mở năng lượng bề mặt." },
      { step: "II", title: "Lớp lót plastic", body: "Primer chuyên dụng cho từng loại nhựa PP / PE / ABS / PC." },
      { step: "III", title: "Lớp phủ màu", body: "Phun PU 2K, sấy gia nhiệt 60°C trong 30 phút." },
      { step: "IV", title: "Kiểm tra QC", body: "Test cross-cut, độ dày DFT và độ bóng theo tiêu chuẩn khách hàng." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Plastic Primer", rate: "10–12 m²/L", coats: "01" },
      { layer: "Lớp phủ", product: "Lotus PU 2K Plastic", rate: "10–12 m²/L", coats: "02" },
    ],
    projects: [
      { image: catComposite, title: "Vỏ thiết bị y tế", meta: "ABS sơn matte" },
      { image: project2, title: "Linh kiện ô tô", meta: "PU 2K soft-touch" },
      { image: project1, title: "Sản phẩm FRP", meta: "Composite ngoại thất" },
    ],
    faq: [
      { q: "Có cần xử lý plasma không?", a: "Tùy loại nhựa. PP / PE thường cần flame hoặc plasma; ABS / PC chỉ cần primer chuyên dụng." },
      { q: "Thời gian sấy?", a: "Khô tự nhiên 24h hoặc sấy 60°C trong 30 phút." },
    ],
  },
  {
    id: "floor",
    index: "06",
    name: "Sơn sàn",
    nameEn: "Industrial Flooring",
    tagline: "Sàn công nghiệp — chịu tải và thẩm mỹ.",
    manifesto: "Một mặt phẳng liền mạch — nơi mỗi bước chân là một thí nghiệm về độ bền.",
    image: catFloor,
    imageTone: "light",
    accent: "#525a55",
    signature: "Graphite",
    description:
      "Hệ sơn sàn Epoxy và PU Lotus dành cho nhà máy thực phẩm, kho logistics, showroom và không gian thương mại — chịu mài mòn, kháng hoá chất, dễ vệ sinh và mang lại bề mặt liền mạch.",
    applications: [
      "Nhà máy thực phẩm & dược phẩm",
      "Kho logistics, parking, showroom",
      "Phòng sạch & phòng thí nghiệm",
      "Sàn thương mại cao cấp",
    ],
    specs: [
      { label: "Chịu tải", value: "Tải nặng — xe nâng" },
      { label: "Kháng hoá chất", value: "Axit / kiềm trung bình" },
      { label: "Gốc", value: "Epoxy / PU self-levelling" },
      { label: "Độ dày", value: "0.3 – 3.0 mm" },
    ],
    process: [
      { step: "I", title: "Mài sàn", body: "Mài kim cương để mở mao mạch bê tông, tạo độ nhám và độ bám." },
      { step: "II", title: "Lớp lót thấm", body: "Primer epoxy thấm sâu, liên kết với nền bê tông." },
      { step: "III", title: "Lớp trung gian", body: "Bả vá khuyết tật và cào đều tạo mặt phẳng thi công." },
      { step: "IV", title: "Lớp phủ hoàn thiện", body: "Self-levelling hoặc lăn phủ tuỳ tải trọng và yêu cầu thẩm mỹ." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Floor Primer EP", rate: "5–7 m²/L", coats: "01" },
      { layer: "Lớp giữa", product: "Lotus Mortar Coat", rate: "tuỳ thiết kế", coats: "01" },
      { layer: "Lớp phủ", product: "Lotus Self-Level Epoxy", rate: "1 mm = 1.5 kg/m²", coats: "01" },
      { layer: "Topcoat", product: "Lotus PU Floor Matte", rate: "8–10 m²/L", coats: "01" },
    ],
    projects: [
      { image: catFloor, title: "Showroom Gallery", meta: "Epoxy self-level 2 mm" },
      { image: project3, title: "Lumiere Dining", meta: "PU matte thương mại" },
      { image: project2, title: "Kho logistics", meta: "Epoxy chịu tải nặng" },
    ],
    faq: [
      { q: "Bao lâu thì sử dụng được?", a: "24h cho người đi bộ, 72h cho xe nâng và tải nặng." },
      { q: "Có thi công trên bê tông cũ?", a: "Có. Cần kiểm tra cường độ và độ ẩm bê tông trước khi mài và sơn." },
    ],
  },
];

/* ────────────────────────────── COMPONENT ────────────────────────────── */

function Index() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];

  // Wheel-to-cycle inside hero (subtle premium kinetic interaction)
  const heroRef = useRef<HTMLDivElement | null>(null);
  const lastSwapRef = useRef(0);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      // Only intercept when fully inside hero viewport
      if (window.scrollY > 40) return;
      if (Math.abs(e.deltaX) < 30 && Math.abs(e.deltaY) < 30) return;
      const now = performance.now();
      if (now - lastSwapRef.current < 700) return;
      const dir = (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : 0) || 0;
      if (!dir) return;
      e.preventDefault();
      lastSwapRef.current = now;
      setActiveId((cur) => {
        const i = CATEGORIES.findIndex((c) => c.id === cur);
        const next = dir > 0 ? (i + 1) % CATEGORIES.length : (i - 1 + CATEGORIES.length) % CATEGORIES.length;
        return CATEGORIES[next].id;
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      className="bg-clay text-onyx grain"
      style={{ ["--accent" as string]: active.accent } as CSSProperties}
    >
      {/* ╔══════════════════════ HERO ══════════════════════╗ */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex flex-col overflow-hidden bg-clay"
      >
        {/* Background plate — full-bleed active material with drift */}
        <div className="absolute inset-0 z-0">
          <img
            key={active.id + "-bg"}
            src={active.image}
            alt=""
            width={1920}
            height={1200}
            className="absolute inset-0 w-full h-full object-cover plate-in drift"
          />
          {/* Material wash — accent tint, gathered on the right */}
          <div
            key={active.id + "-tint"}
            className="absolute inset-0 mix-blend-multiply opacity-30 plate-in"
            style={{
              background:
                "radial-gradient(70% 55% at 85% 90%, var(--accent), transparent 70%)",
            }}
          />
          {/* Readability veil — strong on the left, fades right.
              Desktop: left→right.  Mobile: bottom→top so text reads cleanly. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(239,234,226,0.92) 0%, rgba(239,234,226,0.78) 38%, rgba(239,234,226,0.45) 70%, rgba(22,20,18,0.35) 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(95deg, rgba(239,234,226,0.95) 0%, rgba(239,234,226,0.86) 32%, rgba(239,234,226,0.55) 55%, rgba(239,234,226,0.1) 78%, transparent 100%)",
            }}
          />
          {/* Soft top vignette to anchor brand bar */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-clay/70 to-transparent" />
        </div>



        {/* Frame brackets — printed-catalog corners */}
        <div className="pointer-events-none absolute inset-4 md:inset-8 z-30">
          <span className="absolute top-0 left-0 size-5 border-t border-l border-onyx/30" />
          <span className="absolute top-0 right-0 size-5 border-t border-r border-onyx/30" />
          <span className="absolute bottom-0 left-0 size-5 border-b border-l border-onyx/30" />
          <span className="absolute bottom-0 right-0 size-5 border-b border-r border-onyx/30" />
        </div>

        {/* Top bar: brand + tiny meta */}
        <header className="relative z-20 flex justify-between items-start px-6 md:px-12 lg:px-16 pt-8 md:pt-10">
          <div className="flex items-center gap-4">
            <span className="font-serif text-2xl md:text-[2rem] tracking-tight leading-none italic">
              Sơn&nbsp;Lotus
            </span>
            <span className="hidden md:block h-3 w-px bg-onyx/30" />
            <span className="hidden md:block font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/55">
              Vietnam · Est. Coating Atelier
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/50">
            <span>Made in Vietnam</span>
            <span className="h-px w-6 bg-onyx/30" />
            <span>ISO 9001</span>
            <span className="h-px w-6 bg-onyx/30" />
            <span>Material Index 06</span>
          </div>
        </header>

        {/* Center — editorial cover */}
        <div className="relative z-10 flex-1 grid grid-cols-12 gap-6 px-6 md:px-12 lg:px-16 pt-10 md:pt-14">
          <div className="col-span-12 md:col-span-9 self-center max-w-[1100px]">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-onyx/70 mb-6 flex items-center gap-4">
              <span className="inline-block h-px w-10 bg-onyx/55" />
              <span>Nhà sản xuất sơn công nghiệp · Việt Nam</span>
            </div>
            <h1 className="font-serif text-[clamp(3rem,8.5vw,9rem)] leading-[0.9] tracking-[-0.025em] text-balance text-onyx">
              <span className="block">Vật liệu,</span>
              <span className="block italic font-light text-onyx/90 -mt-1 md:-mt-2">
                được phủ bằng <span className="not-italic font-normal">ý đồ.</span>
              </span>
            </h1>

            <p className="mt-7 md:mt-8 max-w-xl text-[0.98rem] md:text-[1.05rem] leading-relaxed text-onyx/85">
              Sáu hệ sơn chuyên biệt cho gỗ, kim loại, xi măng, composite và sàn công nghiệp —
              pha chế tại Bình Dương, điều chỉnh theo từng dự án.
            </p>

            <div className="mt-8 md:mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-3 bg-onyx text-clay pl-5 pr-4 py-3 hover:bg-ash transition-colors"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.32em]">
                  Nhắn Zalo · Tư vấn dự án
                </span>
                <span
                  className="inline-block h-px w-6 group-hover:w-10 transition-all"
                  style={{ background: "var(--accent)" }}
                />
              </a>
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/60">
                Phản hồi trong 24h
              </span>
            </div>
          </div>

          {/* Right side — active material data card */}
          <aside className="hidden md:flex col-span-3 self-end justify-end items-end pb-6">
            <div key={active.id + "-meta"} className="text-right space-y-3 soft-in">
              <div className="flex items-center justify-end gap-2 font-mono text-[10px] tracking-[0.32em] uppercase text-onyx/65">
                <span
                  className="inline-block size-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                <span>{active.signature}</span>
              </div>
              <div className="font-serif text-[5rem] leading-none italic text-onyx tracking-tight">
                {active.index}
              </div>
              <div className="font-serif text-xl text-onyx/85 italic">
                {active.name}
              </div>
              <div className="ml-auto h-px w-16" style={{ background: "var(--accent)" }} />
              <div className="text-[11px] text-onyx/70 max-w-[14rem] leading-snug ml-auto">
                <span className="font-mono uppercase tracking-[0.25em] text-onyx/50 mr-1">
                  {active.specs[0].label}
                </span>
                {active.specs[0].value}
              </div>
            </div>
          </aside>
        </div>


        {/* Bottom — editorial INDEX (the selector, type-specimen style) */}
        <div className="relative z-20 px-6 md:px-12 lg:px-16 pb-8 md:pb-10">
          <div className="flex items-end justify-between mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/65">
            <div className="flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-onyx/45" />
              <span>Chọn hệ sơn để khám phá · 06 hệ phủ</span>
            </div>
            <span className="hidden md:inline-flex items-center gap-2 text-onyx/55">
              <span>Hệ đang xem</span>
              <span
                className="inline-block size-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              <span className="text-onyx/85">{active.signature}</span>
            </span>
          </div>

          <div className="border-t border-onyx/25 hide-scrollbar overflow-x-auto">
            <ol className="flex md:grid md:grid-cols-6 min-w-max md:min-w-0">
              {CATEGORIES.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <li
                    key={c.id}
                    className="idx-row relative border-r border-onyx/10 last:border-r-0"
                  >
                    {/* Top accent rule — printed register mark */}
                    <span
                      aria-hidden
                      className="absolute top-0 left-0 right-0 h-[2px] origin-left transition-transform duration-700"
                      style={{
                        background: c.accent,
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      }}
                    />
                    <button
                      onClick={() => setActiveId(c.id)}
                      onMouseEnter={() => setActiveId(c.id)}
                      className={`group block w-[15rem] md:w-full text-left px-5 pt-5 pb-5 transition-colors duration-500 ${
                        isActive ? "bg-paper/60" : "hover:bg-onyx/[0.025]"
                      }`}
                      aria-pressed={isActive}
                    >
                      <div className="flex items-start gap-4">
                        {/* Material specimen — narrow strip, not a thumbnail */}
                        <span
                          className={`idx-chip relative inline-block w-3 overflow-hidden shrink-0 transition-all duration-700 ${
                            isActive ? "h-20" : "h-14"
                          }`}
                          style={{
                            outline: `1px solid ${isActive ? c.accent : "rgba(22,20,18,0.18)"}`,
                            outlineOffset: "-1px",
                          }}
                        >
                          <img
                            src={c.image}
                            alt=""
                            width={24}
                            height={120}
                            loading={c.id === CATEGORIES[0].id ? "eager" : "lazy"}
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                              isActive ? "scale-110" : "grayscale scale-100 opacity-70"
                            }`}
                          />
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2">
                            <span
                              className="font-mono text-[10px] tracking-[0.25em] uppercase transition-colors"
                              style={{ color: isActive ? c.accent : "rgba(22,20,18,0.4)" }}
                            >
                              {c.index}
                            </span>
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-onyx/40">
                              · {c.signature}
                            </span>
                          </div>
                          <h3
                            className={`mt-1.5 font-serif text-base md:text-[1.05rem] leading-snug transition-colors ${
                              isActive ? "text-onyx" : "text-onyx/65 group-hover:text-onyx"
                            }`}
                          >
                            {c.name}
                          </h3>
                          {/* Reveal tagline only on active — collapses gracefully */}
                          <div
                            className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                              isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="font-serif italic text-[12px] leading-snug text-onyx/65 max-w-[14rem]">
                                {c.tagline}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Wax seal CTA (mobile shows simplified inline link, hidden on tiny screens) */}
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener"
          aria-label="Nhắn Zalo tìm hiểu thêm"
          className="md:hidden absolute right-5 top-5 z-30 size-14 rounded-full bg-onyx text-clay flex items-center justify-center"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest">Zalo</span>
        </a>
      </section>

      {/* ╔════════════════════ LOWER · CHAPTERS ════════════════════╗ */}
      <main key={active.id} className="relative">
        {/* ── Manufacturer credentials — printed colophon strip ─── */}
        <section className="border-y border-onyx/15 bg-paper">
          <div className="px-6 md:px-12 lg:px-16 py-6 md:py-7 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-8">
            {[
              { k: "Origin", v: "Sản xuất tại Việt Nam" },
              { k: "Standard", v: "ISO 9001 · TDS / MSDS" },
              { k: "On-site", v: "Hỗ trợ kỹ thuật tại công trình" },
              { k: "Per project", v: "Hệ phủ điều chỉnh theo dự án" },
            ].map((t) => (
              <div key={t.k} className="flex items-start gap-3">
                <span
                  className="mt-1.5 inline-block size-1.5 rounded-full shrink-0"
                  style={{ background: "var(--accent)" }}
                />
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.32em] text-onyx/45">
                    {t.k}
                  </div>
                  <div className="font-serif text-[15px] md:text-base italic text-onyx/85 leading-snug mt-0.5">
                    {t.v}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Subtle ticker — material signature in motion ──────── */}
        <div className="border-b border-onyx/10 overflow-hidden bg-clay-soft">
          <div className="flex whitespace-nowrap ticker-track py-3">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-10 px-6 font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/45">
                <span style={{ color: "var(--accent)" }}>{active.index} · {active.signature}</span>
                <span>—</span>
                <span className="text-onyx/70">{active.nameEn}</span>
                <span>—</span>
                <span>{active.specs[0].label}: {active.specs[0].value}</span>
                <span>—</span>
                <span>{active.specs[1].label}: {active.specs[1].value}</span>
                <span>—</span>
                <span>Lotus Coating Atelier · Bình Dương</span>
                <span>—</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Chapter cover — full bleed material plate ──────────── */}
        <section className="relative h-[88svh] min-h-[600px] overflow-hidden">
          <img
            src={active.image}
            alt={active.name}
            width={1920}
            height={1200}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover r-scale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx/55 via-onyx/10 to-transparent" />
          <div
            className="absolute inset-0 mix-blend-multiply opacity-40"
            style={{
              background:
                "linear-gradient(180deg, transparent 35%, var(--accent) 110%)",
            }}
          />

          <div className="relative h-full flex flex-col justify-between px-6 md:px-12 lg:px-16 py-10 md:py-14 text-clay">
            <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.32em] text-clay/75 r-rise">
              <span>Chapter · {active.index}</span>
              <span>{active.nameEn}</span>
            </div>

            <div className="max-w-4xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-clay/70 mb-6 r-rise r-d1">
                Lotus Material Library
              </p>
              <h2 className="font-serif text-[clamp(2.5rem,7.5vw,7rem)] leading-[0.92] tracking-[-0.02em] italic font-light r-rise r-d2">
                {active.name}.
              </h2>
              <p className="mt-8 max-w-2xl font-serif italic text-xl md:text-3xl text-clay/85 leading-snug text-pretty r-rise r-d3">
                “{active.manifesto}”
              </p>
            </div>
          </div>
        </section>

        {/* ── Asymmetric intro · description vs. specs ──────────── */}
        <section className="px-6 md:px-12 lg:px-16 py-28 md:py-40">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-5 md:col-start-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-umber r-rise">
                § Bản chất
              </span>
              <h3 className="font-serif text-3xl md:text-5xl mt-5 leading-[1.05] r-rise r-d1 text-balance">
                {active.tagline}
              </h3>
              <p className="mt-8 text-onyx/75 leading-relaxed text-pretty r-rise r-d2 max-w-md">
                {active.description}
              </p>

              <div className="mt-12 h-px bg-onyx/20 origin-left r-line" />

              <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
                {active.specs.map((s, i) => (
                  <div key={s.label} className={`r-rise r-d${(i % 4) + 1}`}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-onyx/45">
                      {s.label}
                    </dt>
                    <dd className="mt-1.5 font-serif italic text-[1.1rem] text-onyx leading-tight">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Side numeral */}
            <div className="hidden md:block col-span-4 col-start-9 relative">
              <div className="sticky top-24">
                <div className="font-serif text-[14rem] leading-none italic text-onyx/[0.08] -mt-6 r-rise">
                  {active.index}
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/40 -mt-4 r-rise r-d2">
                  Material no. {active.index} — {active.nameEn}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Editorial pull quote, no chrome ─────────────────── */}
        <section className="px-6 md:px-12 lg:px-16 py-20 md:py-32 border-t border-onyx/10">
          <div className="max-w-5xl mx-auto text-center r-rise">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: "var(--accent)" }}>
              § Triết lý sản xuất
            </span>
            <p className="mt-6 font-serif text-3xl md:text-5xl italic leading-[1.18] text-pretty">
              Chúng tôi sản xuất <span className="not-italic">lớp bảo vệ</span> —
              kết hợp công thức nội bộ và kinh nghiệm thi công thực tế trên
              <span className="not-italic" style={{ color: "var(--accent)" }}> sáu nhóm vật liệu</span>.
            </p>
          </div>
        </section>

        {/* ── Large macro image · full bleed with caption ───────── */}
        <section className="relative">
          <div className="relative h-[70svh] min-h-[480px] overflow-hidden">
            <img
              src={revealMacro}
              alt="Macro detail of coating saturating wood grain"
              width={1920}
              height={1280}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover r-scale"
            />
          </div>
          <div className="px-6 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 border-b border-onyx/10">
            <p className="font-serif italic text-onyx/75 text-lg max-w-xl">
              Phân tử sơn len lỏi vào từng thớ vật liệu — bảo vệ bắt đầu từ chiều sâu, không phải bề mặt.
            </p>
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/50">
              Fig. {active.index}·A — Cross-section magnified 200×
            </span>
          </div>
        </section>

        {/* ── Applications — numbered editorial list, asymmetric ─ */}
        <section className="px-6 md:px-12 lg:px-16 py-28 md:py-40">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-4">
              <div className="md:sticky md:top-24">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-umber r-rise">
                  § Ứng dụng
                </span>
                <h3 className="font-serif text-4xl md:text-5xl mt-5 leading-[1.05] italic r-rise r-d1">
                  Nơi <span className="not-italic">Lotus</span> được tin dùng.
                </h3>
                <p className="mt-6 text-onyx/65 max-w-xs r-rise r-d2">
                  Hệ {active.name.toLowerCase()} phù hợp cho các nhà thầu, xưởng sản xuất và dự án có yêu cầu kỹ thuật cao.
                </p>
              </div>
            </div>

            <ol className="col-span-12 md:col-span-7 md:col-start-6 border-t border-onyx/20">
              {active.applications.map((a, i) => (
                <li
                  key={a}
                  className="group grid grid-cols-12 items-baseline gap-6 py-6 md:py-8 border-b border-onyx/15 r-rise"
                >
                  <span className="col-span-2 font-mono text-[11px] text-umber tracking-widest">
                    {String(i + 1).padStart(2, "0")} /
                  </span>
                  <span className="col-span-10 font-serif text-2xl md:text-3xl leading-snug text-onyx group-hover:italic transition-all">
                    {a}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Process — dark cinematic, sticky vertical timeline ─ */}
        <section className="bg-ash text-clay py-32 md:py-44 px-6 md:px-12 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-4">
              <div className="md:sticky md:top-24">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-umber r-rise">
                  § Quy trình
                </span>
                <h2 className="font-serif text-5xl md:text-6xl leading-[0.98] mt-5 r-rise r-d1">
                  Bốn nhịp,<br/>
                  <span className="italic font-light text-clay/80">một hệ thống.</span>
                </h2>
                <p className="mt-8 text-clay/55 max-w-xs leading-relaxed r-rise r-d2">
                  Mọi hệ sơn Lotus đều tuân theo một quy trình thi công có kiểm soát — đảm bảo bám dính,
                  độ bền và sự nhất quán cho toàn bộ dự án.
                </p>

                <div className="mt-10 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-clay/50 r-rise r-d3">
                  <span className="inline-block h-px w-10 bg-clay/30" />
                  <span>Atelier Protocol · {active.index}</span>
                </div>
              </div>
            </div>

            <ol className="col-span-12 md:col-span-8">
              {active.process.map((p, i) => (
                <li
                  key={p.step}
                  className="grid grid-cols-12 gap-6 py-10 md:py-14 border-t border-clay/15 first:border-t-0 r-rise"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <div className="col-span-3 md:col-span-2">
                    <div className="font-serif text-5xl md:text-6xl italic text-umber leading-none">
                      {p.step}
                    </div>
                  </div>
                  <div className="col-span-9 md:col-span-10 pt-1">
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-clay">
                      {p.title}
                    </h4>
                    <p className="mt-4 font-serif text-2xl md:text-3xl leading-snug text-clay/85 max-w-3xl">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Spec sheet · catalog page ───────────────────────── */}
        <section className="px-6 md:px-12 lg:px-16 py-28 md:py-40 bg-paper">
          <div className="max-w-6xl mx-auto">
            {/* Header treated like a printed catalog spread */}
            <div className="flex items-end justify-between mb-10 md:mb-14 border-b border-onyx/30 pb-6">
              <div className="r-rise">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-umber mb-3">
                  § Catalog · Hệ phủ đề xuất
                </p>
                <h3 className="font-serif text-4xl md:text-5xl italic leading-tight">
                  Lotus / {active.nameEn}
                </h3>
              </div>
              <div className="hidden md:block text-right font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/45">
                <div>Spec sheet</div>
                <div>Rev. 24·11 / {active.id.toUpperCase()}</div>
              </div>
            </div>

            <div className="r-wipe overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="font-mono text-[10px] uppercase tracking-[0.25em] text-onyx/55">
                    <th className="py-4 font-medium w-12">№</th>
                    <th className="py-4 font-medium">Lớp</th>
                    <th className="py-4 font-medium">Sản phẩm</th>
                    <th className="py-4 font-medium text-right">Định mức</th>
                    <th className="py-4 font-medium text-right w-20">Lớp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-onyx/15">
                  {active.system.map((row, i) => (
                    <tr key={row.layer} className="group hover:bg-linen/40 transition-colors">
                      <td className="py-7 font-serif italic text-2xl text-umber">
                        {String(i + 1).padStart(2, "0")}
                      </td>
                      <td className="py-7 text-onyx/65 text-xs uppercase tracking-[0.18em]">
                        {row.layer}
                      </td>
                      <td className="py-7 font-serif text-xl md:text-2xl">{row.product}</td>
                      <td className="py-7 text-right font-mono text-xs text-onyx/65">
                        {row.rate}
                      </td>
                      <td className="py-7 text-right font-serif text-xl italic text-onyx">
                        {row.coats}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/45 text-right">
              Đội kỹ thuật Lotus sẽ điều chỉnh hệ theo công trình cụ thể.
            </p>
          </div>
        </section>

        {/* ── Real projects · cinematic strip + portrait pair ──── */}
        <section className="bg-clay">
          <div className="px-6 md:px-12 lg:px-16 pt-28 md:pt-40 pb-10">
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
              <div className="col-span-12 md:col-span-7 r-rise">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-umber">
                  § Dự án
                </span>
                <h3 className="mt-5 font-serif text-4xl md:text-6xl italic leading-[1.03]">
                  Đã được thi công <br/>
                  <span className="not-italic">trên thực địa.</span>
                </h3>
              </div>
              <p className="col-span-12 md:col-span-4 md:col-start-9 text-onyx/60 max-w-sm r-rise r-d1">
                Hình ảnh thực tế từ các công trình đã sử dụng hệ {active.name.toLowerCase()} Lotus —
                không dàn dựng, không phối cảnh.
              </p>
            </div>
          </div>

          {/* Cinematic strip */}
          <figure className="relative w-full h-[70svh] min-h-[460px] overflow-hidden r-scale">
            <img
              src={active.projects[0].image}
              alt={active.projects[0].title}
              width={1920}
              height={1200}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex items-end justify-between text-clay bg-gradient-to-t from-onyx/60 to-transparent">
              <span className="font-serif italic text-2xl md:text-3xl">
                {active.projects[0].title}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-clay/80">
                {active.projects[0].meta}
              </span>
            </figcaption>
          </figure>

          {/* Offset portrait pair */}
          <div className="px-6 md:px-12 lg:px-16 pt-16 pb-28 md:pb-40 grid grid-cols-12 gap-6 md:gap-10">
            {active.projects.slice(1).map((p, idx) => (
              <figure
                key={p.title}
                className={`col-span-12 md:col-span-5 r-wipe ${idx === 0 ? "md:col-start-1" : "md:col-start-8 md:mt-24"}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1000}
                    height={1250}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between text-[10px] uppercase tracking-[0.32em] text-onyx/50">
                  <span className="font-serif italic text-base normal-case tracking-normal text-onyx">
                    {p.title}
                  </span>
                  <span>{p.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ── Atelier note · printed colophon, trust signals woven in ── */}
        <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 bg-paper border-t border-onyx/15">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-4 r-rise">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em]" style={{ color: "var(--accent)" }}>
                § Atelier note
              </span>
              <h3 className="font-serif text-3xl md:text-4xl italic leading-tight mt-5 text-balance">
                Một nhà sản xuất, <br />
                <span className="not-italic">không phải đại lý.</span>
              </h3>
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-onyx/80 text-pretty r-rise">
                Sơn Lotus được pha chế tại xưởng Bình Dương, kiểm nghiệm tại phòng QC nội bộ,
                và đi cùng đội kỹ thuật tới tận công trình. Mỗi hệ phủ được điều chỉnh theo vật liệu
                nền, môi trường thi công và yêu cầu thẩm mỹ của từng dự án — không bán theo
                cảm tính, không bán theo lô có sẵn.
              </p>

              <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10 border-t border-onyx/15 pt-10">
                {[
                  { k: "01 — Xuất xứ", v: "Sản xuất tại Việt Nam, công thức nội bộ" },
                  { k: "02 — Tiêu chuẩn", v: "ISO 9001 · TDS, MSDS minh bạch" },
                  { k: "03 — Hiện trường", v: "Kỹ sư khảo sát và hỗ trợ tại công trình" },
                  { k: "04 — Dự án", v: "Hệ phủ tinh chỉnh theo từng đơn hàng" },
                ].map((t) => (
                  <div key={t.k} className="r-rise">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/45">
                      {t.k}
                    </dt>
                    <dd className="mt-2 font-serif text-xl italic text-onyx/85 leading-snug">
                      {t.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ── FAQ · minimal ─────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-16 py-28 md:py-40 border-t border-onyx/15">

          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-umber r-rise">
                § Hỏi & Đáp
              </span>
              <h3 className="font-serif text-4xl md:text-5xl italic mt-5 leading-tight r-rise r-d1">
                Cần một câu trả lời?
              </h3>
              <p className="mt-6 text-onyx/60 r-rise r-d2 max-w-xs">
                Đội kỹ thuật Lotus sẵn sàng khảo sát và đề xuất hệ phù hợp cho dự án của bạn.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-6 border-t border-onyx/25">
              {active.faq.map((f, i) => (
                <details key={f.q} className="group py-7 border-b border-onyx/15 r-rise" open={i === 0}>
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="font-serif text-xl md:text-2xl leading-snug pr-6">
                      <span className="font-mono text-[11px] tracking-widest text-umber mr-3">
                        Q·{String(i + 1).padStart(2, "0")}
                      </span>
                      {f.q}
                    </span>
                    <span className="font-serif text-2xl text-umber pt-1 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pl-[3.4rem] text-onyx/70 leading-relaxed max-w-2xl">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final chapter · wax seal CTA ─────────────────────── */}
        <section className="relative px-6 md:px-12 lg:px-16 py-32 md:py-48 bg-onyx text-clay overflow-hidden">
          <img
            src={active.image}
            alt=""
            width={1920}
            height={1200}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-25 drift"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/85 to-onyx" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-clay/60 mb-6 r-rise">
              § Bắt đầu một dự án
            </p>
            <h3 className="font-serif text-5xl md:text-7xl leading-[1.02] italic font-light r-rise r-d1 text-pretty">
              Hệ sơn phù hợp <br />
              <span className="not-italic font-normal">cho từng vật liệu của bạn.</span>
            </h3>
            <p className="mt-8 max-w-2xl mx-auto text-clay/75 leading-relaxed r-rise r-d2">
              Gửi ảnh công trình, loại vật liệu nền và yêu cầu ứng dụng qua Zalo —
              đội kỹ thuật Lotus sẽ đề xuất hệ phủ, định mức và báo giá theo dự án.
              Phản hồi trong vòng 24 giờ.
            </p>

            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener"
              className="group relative inline-flex flex-col items-center mt-14 r-rise r-d2"
              aria-label="Nhắn Zalo tư vấn dự án"
            >
              {/* Wax seal */}
              <div className="relative size-44 md:size-52 flex items-center justify-center">
                {/* Rotating microtext ring */}
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 spin-slow text-clay/60"
                  aria-hidden
                >
                  <defs>
                    <path
                      id="ctaCircle"
                      d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
                    />
                  </defs>
                  <text fill="currentColor" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.32em", textTransform: "uppercase" }}>
                    <textPath href="#ctaCircle">
                      Lotus Coating Atelier · Tư vấn dự án qua Zalo · 
                    </textPath>
                  </text>
                </svg>
                {/* Inner mark */}
                <div
                  className="relative size-24 md:size-28 rounded-full border border-clay/30 flex flex-col items-center justify-center transition-all duration-700 group-hover:[background:var(--accent)] group-hover:[border-color:var(--accent)]"
                >
                  <span className="font-serif italic text-3xl text-clay leading-none">L</span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.32em] text-clay/60 mt-1">
                    Zalo
                  </span>
                </div>
              </div>
              <span className="mt-8 font-mono text-[11px] uppercase tracking-[0.4em] text-clay/90 flourish">
                Nhắn Zalo · Tư vấn dự án
              </span>
              <span className="mt-3 font-serif italic text-clay/55 text-sm">
                Gỗ · Kim loại · Xi măng · Composite · Sàn
              </span>
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="px-6 md:px-12 lg:px-16 py-12 bg-clay">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-onyx/15 pt-10">
          <div>
            <p className="font-serif italic text-2xl">Sơn&nbsp;Lotus</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/50">
              Premium Coating Manufacturer · Vietnam
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-[10px] uppercase tracking-[0.28em] text-onyx/55">
            <div>
              <div className="text-onyx/40 mb-2">Xưởng</div>
              <div className="text-onyx/80 normal-case tracking-normal">Bình Dương, VN</div>
            </div>
            <div>
              <div className="text-onyx/40 mb-2">Văn phòng</div>
              <div className="text-onyx/80 normal-case tracking-normal">TP. Hồ Chí Minh</div>
            </div>
            <div>
              <div className="text-onyx/40 mb-2">Liên hệ</div>
              <a href={ZALO_URL} target="_blank" rel="noopener" className="text-umber hover:text-onyx normal-case tracking-normal transition-colors">
                Nhắn Zalo →
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 font-mono text-[9px] uppercase tracking-[0.32em] text-onyx/35">
          © {new Date().getFullYear()} Lotus Coating Systems · All material rights reserved.
        </p>
      </footer>
    </div>
  );
}
