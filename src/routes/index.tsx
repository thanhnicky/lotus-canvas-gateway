import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

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
          "Sơn Lotus — nhà sản xuất sơn công nghiệp tại Việt Nam. Hệ thống sơn gỗ, kim loại, giả gỗ, composite và sơn sàn cho nhà thầu, xưởng sản xuất và dự án cao cấp.",
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
  tagline: string;
  image: string;
  imageTone: "dark" | "light";
  description: string;
  hook: string;
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
    tagline: "Linh hồn của gỗ, được Lotus gìn giữ.",
    image: catWood,
    imageTone: "dark",
    description:
      "Hệ thống sơn gỗ Lotus tôn vinh từng đường vân tự nhiên, đồng thời tạo lớp màng bảo vệ siêu bền trước độ ẩm, tia UV và va đập cơ học. Sự cân bằng giữa thẩm mỹ thủ công và công nghệ hóa học hiện đại.",
    hook: "Chiều sâu vật liệu",
    applications: [
      "Nội thất gỗ cao cấp & resort nghỉ dưỡng",
      "Cửa sổ, cửa ra vào chịu nắng trực tiếp",
      "Sàn gỗ tự nhiên trong nhà",
      "Đồ gỗ xuất khẩu thị trường Mỹ & EU",
    ],
    specs: [
      { label: "Độ bóng", value: "Mờ 5% — Bóng gương" },
      { label: "Độ bền", value: "Kháng UV & chống trầy" },
      { label: "Gốc", value: "PU / NC / Water-based" },
      { label: "VOC", value: "Thấp (<50g/L)" },
    ],
    process: [
      { step: "01", title: "Xử lý bề mặt", body: "Chà nhám độ mịn P180–P240, vệ sinh bụi gỗ và kiểm tra độ ẩm dưới 12%." },
      { step: "02", title: "Lớp lót Primer", body: "Ngăn nhựa gỗ, làm đầy lỗ li ti và tạo chân bám tối ưu cho lớp phủ." },
      { step: "03", title: "Lớp phủ màu", body: "Phun đều tay để đạt sắc độ mong muốn mà vẫn giữ nguyên vân gỗ tự nhiên." },
      { step: "04", title: "Lớp Topcoat", body: "Quyết định độ bóng cuối cùng và khả năng chống trầy xước, chống ố vàng." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Wood Primer P80", rate: "8–10 m²/L", coats: "01" },
      { layer: "Lớp lót 2", product: "Lotus Sanding Sealer", rate: "10–12 m²/L", coats: "02" },
      { layer: "Lớp màu", product: "Lotus Stain Color", rate: "12–15 m²/L", coats: "01" },
      { layer: "Lớp phủ", product: "Lotus Topcoat Matte/Gloss", rate: "10–12 m²/L", coats: "02" },
    ],
    projects: [
      { image: project1, title: "Villa Đà Lạt", meta: "Hệ ngoại thất gỗ tếch" },
      { image: revealCraft, title: "Atelier Bàn Walnut", meta: "Hoàn thiện thủ công" },
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
    tagline: "Phủ bền — chống ăn mòn cho kết cấu thép.",
    image: catMetal,
    imageTone: "dark",
    description:
      "Hệ sơn kim loại Lotus được thiết kế cho kết cấu thép, nhôm và hợp kim — kết hợp lớp chống gỉ epoxy cùng lớp phủ PU bền màu, đáp ứng yêu cầu khắt khe của các công trình công nghiệp và kiến trúc hiện đại.",
    hook: "Kết cấu & bảo vệ",
    applications: [
      "Kết cấu thép nhà xưởng, cầu cảng",
      "Mặt tiền nhôm kiến trúc & lam che nắng",
      "Thiết bị công nghiệp & cơ khí chính xác",
      "Đồ nội thất kim loại sơn tĩnh điện",
    ],
    specs: [
      { label: "Chống ăn mòn", value: "ISO 12944 — C4/C5" },
      { label: "Độ bền màu", value: "QUV 1000h" },
      { label: "Gốc", value: "Epoxy / PU 2K" },
      { label: "Chống trầy", value: "Cấp 4H" },
    ],
    process: [
      { step: "01", title: "Làm sạch bề mặt", body: "Phun bi Sa 2.5 hoặc tẩy rỉ hóa học, đạt tiêu chuẩn ISO 8501." },
      { step: "02", title: "Lớp lót chống gỉ", body: "Epoxy giàu kẽm tạo lớp bảo vệ catot, ngăn ăn mòn từ nền thép." },
      { step: "03", title: "Lớp trung gian", body: "Epoxy MIO tăng độ dày khô và khả năng chống thấm hơi nước." },
      { step: "04", title: "Lớp phủ PU", body: "Bền màu, kháng UV và giữ sắc độ ngay cả khi tiếp xúc môi trường khắc nghiệt." },
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
      { q: "Có chứng nhận chất lượng?", a: "Lotus có ISO 9001, đầy đủ TDS/MSDS và báo cáo kiểm nghiệm độc lập." },
    ],
  },
  {
    id: "metal-wood",
    index: "03",
    name: "Sơn giả gỗ trên kim loại",
    tagline: "Vẻ ấm của gỗ, sự kiên cố của thép.",
    image: catMetalWood,
    imageTone: "light",
    description:
      "Giải pháp phủ vân gỗ chân thực trên nền nhôm, sắt hộp và lam che nắng — bền bỉ trước thời tiết nhiệt đới, mang vẻ ấm của gỗ tự nhiên cho kiến trúc kim loại hiện đại.",
    hook: "Vân gỗ trên kim loại",
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
      { step: "01", title: "Xử lý nền", body: "Tẩy dầu, xử lý hóa chuyển hóa và sơn lót epoxy chống gỉ." },
      { step: "02", title: "Lớp nền màu gỗ", body: "Phun lớp base màu gỗ làm nền cho vân, sấy hoặc khô tự nhiên." },
      { step: "03", title: "Vẽ vân gỗ", body: "Lăn vân chuyên dụng hoặc in chuyển nhiệt water-transfer." },
      { step: "04", title: "Lớp phủ bóng", body: "Topcoat trong PU khoá vân và bảo vệ khỏi tia UV." },
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
      { q: "Có làm được vân walnut/teak/oak?", a: "Có. Chúng tôi có thư viện hơn 40 mẫu vân và nhận làm mẫu theo yêu cầu." },
    ],
  },
  {
    id: "cement-wood",
    index: "04",
    name: "Sơn giả gỗ trên tấm xi măng",
    tagline: "Tấm cement, chiều sâu của gỗ.",
    image: catCementWood,
    imageTone: "light",
    description:
      "Phủ vân gỗ tự nhiên trên tấm cement Smartboard, Duraflex hoặc cement composite — bền nước, không cong vênh, mang vẻ đẹp ấm áp của gỗ cho ốp tường, trần và sàn ngoại thất.",
    hook: "Cement & vân gỗ",
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
      { step: "01", title: "Xử lý tấm cement", body: "Vệ sinh, mài phẳng các mối nối và sơn lót kháng kiềm chuyên dụng." },
      { step: "02", title: "Lớp nền vân gỗ", body: "Phun base color đồng đều, làm nền cho thao tác vẽ vân." },
      { step: "03", title: "Lăn vân thủ công", body: "Sử dụng con lăn chuyên dụng tạo đường vân gỗ chân thực." },
      { step: "04", title: "Phủ bảo vệ", body: "Topcoat acrylic UV bảo vệ vân và chống bám bẩn." },
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
    tagline: "Hoàn thiện nhựa kỹ thuật cấp công nghiệp.",
    image: catComposite,
    imageTone: "light",
    description:
      "Hệ sơn cho ABS, PC, FRP, fiberglass và composite — độ bám tuyệt vời trên bề mặt nhựa nhẵn, bền màu, thân thiện cho ngành ô tô, thiết bị y tế và sản phẩm xuất khẩu.",
    hook: "Hoá học bám dính",
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
      { step: "01", title: "Xử lý bề mặt", body: "Lau IPA, plasma hoặc flame treatment nếu cần để mở năng lượng bề mặt." },
      { step: "02", title: "Lớp lót plastic", body: "Primer chuyên dụng cho từng loại nhựa PP/PE/ABS/PC." },
      { step: "03", title: "Lớp phủ màu", body: "Phun PU 2K, sấy gia nhiệt 60°C trong 30 phút." },
      { step: "04", title: "Kiểm tra QC", body: "Test cross-cut, độ dày DFT và độ bóng theo tiêu chuẩn khách hàng." },
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
      { q: "Có cần xử lý plasma không?", a: "Tùy loại nhựa. PP/PE thường cần flame hoặc plasma; ABS/PC chỉ cần primer chuyên dụng." },
      { q: "Thời gian sấy?", a: "Khô tự nhiên 24h hoặc sấy 60°C trong 30 phút." },
    ],
  },
  {
    id: "floor",
    index: "06",
    name: "Sơn sàn",
    tagline: "Sàn công nghiệp — chịu tải và thẩm mỹ.",
    image: catFloor,
    imageTone: "light",
    description:
      "Hệ sơn sàn Epoxy và PU Lotus dành cho nhà máy thực phẩm, kho logistics, showroom và không gian thương mại — chịu mài mòn, kháng hoá chất, dễ vệ sinh và mang lại bề mặt liền mạch.",
    hook: "Sàn liền mạch",
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
      { step: "01", title: "Mài sàn", body: "Mài kim cương để mở mao mạch bê tông, tạo độ nhám và độ bám." },
      { step: "02", title: "Lớp lót thấm", body: "Primer epoxy thấm sâu, đóng vai trò liên kết với nền bê tông." },
      { step: "03", title: "Lớp trung gian", body: "Bả vá khuyết tật và cào đều tạo mặt phẳng thi công." },
      { step: "04", title: "Lớp phủ hoàn thiện", body: "Self-levelling hoặc lăn phủ tuỳ tải trọng và yêu cầu thẩm mỹ." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Floor Primer EP", rate: "5–7 m²/L", coats: "01" },
      { layer: "Lớp giữa", product: "Lotus Mortar Coat", rate: "tuỳ thiết kế", coats: "01" },
      { layer: "Lớp phủ", product: "Lotus Self-Level Epoxy", rate: "1 mm = 1.5 kg/m²", coats: "01" },
      { layer: "Topcoat", product: "Lotus PU Floor Matte", rate: "8–10 m²/L", coats: "01" },
    ],
    projects: [
      { image: catFloor, title: "Showroom Gallery", meta: "Epoxy self-level 2mm" },
      { image: project3, title: "Lumiere Dining", meta: "PU matte thương mại" },
      { image: project2, title: "Kho logistics", meta: "Epoxy chịu tải nặng" },
    ],
    faq: [
      { q: "Bao lâu thì sử dụng được?", a: "24h cho người đi bộ, 72h cho xe nâng và tải nặng." },
      { q: "Có thi công trên bê tông cũ?", a: "Có. Cần kiểm tra cường độ và độ ẩm bê tông trước khi mài và sơn." },
    ],
  },
];

function Index() {
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];
  const railRef = useRef<HTMLDivElement | null>(null);

  // When category changes, scroll the selected card into view inside the rail
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(`[data-rail-id="${activeId}"]`);
    if (el && railRef.current) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeId]);

  return (
    <div className="bg-clay text-onyx">
      {/* ───────────── HERO ───────────── */}
      <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-8 pb-10 overflow-hidden">
        {/* Brand & CTA */}
        <header className="flex justify-between items-start z-20">
          <div className="space-y-1.5">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl md:text-4xl tracking-tight leading-none">Sơn Lotus</span>
              <span className="hidden md:inline-block size-1 rounded-full bg-umber" />
              <span className="hidden md:inline text-[10px] font-medium uppercase tracking-[0.3em] text-onyx/50">
                Est. Vietnam
              </span>
            </div>
            <p className="text-[10px] tracking-[0.32em] uppercase text-onyx/55">
              Premium Coating Manufacturer
            </p>
          </div>

          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener"
            className="group hidden sm:flex items-center gap-4 px-5 py-3 border border-onyx/15 rounded-full hover:bg-onyx hover:text-clay transition-colors duration-500"
          >
            <span className="size-1.5 rounded-full bg-umber group-hover:bg-clay transition-colors" />
            <span className="text-[11px] font-medium uppercase tracking-[0.22em]">
              Nhắn Zalo tìm hiểu thêm
            </span>
          </a>
        </header>

        {/* Editorial headline */}
        <div className="max-w-5xl z-10 mt-12 md:mt-0">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-umber mb-6 md:mb-8">
            ⟶ Hệ sinh thái sơn phủ đa vật liệu
          </p>
          <h1 className="font-serif text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.92] tracking-[-0.02em] text-balance">
            Kỹ nghệ vật liệu, <br />
            <span className="italic text-umber font-light">vượt thời gian.</span>
          </h1>
          <p className="max-w-xl text-base md:text-lg leading-relaxed text-onyx/75 mt-8 md:mt-10">
            Sơn Lotus là nhà sản xuất sơn công nghiệp tại Việt Nam — kiến tạo những hệ thống bảo
            vệ bề mặt cho gỗ, kim loại, xi măng, composite và sàn công nghiệp.
          </p>
        </div>

        {/* Active category meta + index */}
        <div className="z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-12 md:mt-0">
          <div className="soft-in" key={`meta-${active.id}`}>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs tracking-widest text-onyx/40">
                {active.index} / 06
              </span>
              <span className="h-px flex-1 bg-onyx/15 max-w-24" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl italic text-onyx mt-3 leading-none">
              {active.name}
            </h2>
            <p className="text-sm md:text-base text-onyx/60 mt-3 max-w-md">{active.tagline}</p>
          </div>

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-onyx/40">
            <span>Kéo ngang để duyệt</span>
            <span className="h-px w-10 bg-onyx/30" />
            <span>← →</span>
          </div>
        </div>

        {/* Tactile product rail — full bleed */}
        <div className="relative z-20 -mx-6 md:-mx-12 lg:-mx-16 mt-10">
          <div
            ref={railRef}
            className="flex overflow-x-auto hide-scrollbar px-6 md:px-12 lg:px-16 gap-5 md:gap-6 snap-x snap-mandatory pb-2"
          >
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  data-rail-id={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`group relative flex-none snap-center text-left transition-all duration-700 ease-out ${
                    isActive ? "w-[78vw] sm:w-96 md:w-[26rem]" : "w-56 md:w-64"
                  }`}
                  aria-pressed={isActive}
                >
                  <div
                    className={`aspect-[4/5] relative overflow-hidden border transition-colors duration-700 ${
                      isActive ? "border-onyx/30" : "border-onyx/10"
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      width={800}
                      height={1000}
                      loading={cat.id === CATEGORIES[0].id ? "eager" : "lazy"}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                        isActive ? "scale-105 drift" : "scale-100 grayscale-[0.4]"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        isActive
                          ? "bg-gradient-to-t from-onyx/65 via-onyx/10 to-transparent"
                          : "bg-clay/30"
                      }`}
                    />

                    {/* Index numeral */}
                    <span
                      className={`absolute top-5 left-5 font-mono text-[11px] tracking-[0.25em] uppercase transition-colors duration-500 ${
                        isActive
                          ? "text-clay/80"
                          : cat.imageTone === "dark"
                            ? "text-clay/70"
                            : "text-onyx/60"
                      }`}
                    >
                      System {cat.index}
                    </span>

                    {/* Name */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <h3
                        className={`font-serif text-xl md:text-2xl leading-tight transition-colors duration-500 ${
                          isActive
                            ? "text-clay"
                            : cat.imageTone === "dark"
                              ? "text-clay"
                              : "text-onyx"
                        }`}
                      >
                        {cat.name}
                      </h3>
                      {isActive && (
                        <span className="text-[10px] uppercase tracking-[0.25em] text-clay/70 soft-in">
                          ● Đang chọn
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
            <div className="flex-none w-6 md:w-12" aria-hidden />
          </div>
        </div>
      </section>

      {/* ───────────── CATEGORY REVEAL ───────────── */}
      <main key={active.id} className="relative">
        {/* Divider with marquee spec */}
        <div className="border-y border-onyx/10 overflow-hidden bg-clay">
          <div className="flex whitespace-nowrap ticker-track py-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6 text-[10px] uppercase tracking-[0.3em] text-onyx/40">
                <span>Sản xuất tại Việt Nam</span>
                <span>•</span>
                <span>{active.name}</span>
                <span>•</span>
                <span>{active.specs[0].label}: {active.specs[0].value}</span>
                <span>•</span>
                <span>{active.specs[1].label}: {active.specs[1].value}</span>
                <span>•</span>
                <span>ISO 9001 — Hệ thống quản lý chất lượng</span>
                <span>•</span>
                <span>Hỗ trợ kỹ thuật tại công trình</span>
                <span>•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 1 — Editorial intro + applications */}
        <section className="px-6 md:px-12 lg:px-16 py-28 md:py-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-20">
                <span className="text-umber font-medium uppercase tracking-[0.25em] text-[10px] mb-6 block reveal-rise">
                  {active.hook}
                </span>
                <h3 className="font-serif text-4xl md:text-6xl leading-[1.02] mb-10 reveal-rise">
                  {active.tagline}
                </h3>
                <p className="text-onyx/75 leading-relaxed mb-12 reveal-rise text-pretty">
                  {active.description}
                </p>

                <div className="space-y-0 reveal-rise">
                  {active.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex justify-between py-4 border-b border-onyx/10 text-sm"
                    >
                      <span className="font-medium uppercase tracking-[0.15em] text-[11px]">
                        {s.label}
                      </span>
                      <span className="text-onyx/60 italic font-serif text-base">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-20 md:space-y-32">
              <div className="reveal-wipe">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-linen">
                  <img
                    src={active.image}
                    alt={active.name}
                    width={1200}
                    height={1600}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-baseline mt-5 text-[10px] uppercase tracking-[0.25em] text-onyx/45">
                  <span className="italic font-serif text-base normal-case tracking-normal text-onyx/60">
                    {active.name} — Lotus Material Library
                  </span>
                  <span>{active.index} / 06</span>
                </div>
              </div>

              <div className="reveal-rise">
                <h4 className="font-serif text-3xl md:text-4xl mb-8 italic">Ứng dụng</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                  {active.applications.map((a, i) => (
                    <li
                      key={a}
                      className="flex items-start gap-4 py-5 border-t border-onyx/10 text-onyx/80"
                    >
                      <span className="font-mono text-xs text-umber pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base leading-snug">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Layer 2 — Process (dark cinematic) */}
        <section className="bg-ash text-clay py-32 md:py-40 px-6 md:px-12 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 md:mb-28 items-end">
              <div className="md:col-span-7 reveal-rise">
                <span className="text-[10px] uppercase tracking-[0.35em] text-umber mb-6 block">
                  Quy trình tiêu chuẩn
                </span>
                <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
                  Bốn bước, <span className="italic">một hệ thống.</span>
                </h2>
              </div>
              <div className="md:col-span-5 reveal-rise">
                <p className="text-clay/65 leading-relaxed max-w-md">
                  Mọi hệ sơn Lotus đều tuân theo một quy trình thi công có kiểm soát — đảm bảo
                  bám dính, độ bền và tính nhất quán cho toàn bộ dự án.
                </p>
              </div>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-4 gap-px bg-clay/10">
              {active.process.map((p) => (
                <li
                  key={p.step}
                  className="bg-ash p-8 md:p-10 reveal-rise flex flex-col gap-6 min-h-[18rem]"
                >
                  <span className="font-serif text-5xl text-umber leading-none">{p.step}.</span>
                  <h4 className="font-medium uppercase text-xs tracking-[0.25em]">{p.title}</h4>
                  <p className="text-sm text-clay/55 leading-relaxed">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Layer 3 — Coating system table */}
        <section className="px-6 md:px-12 lg:px-16 py-28 md:py-40">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12 md:mb-16">
              <div className="reveal-rise">
                <span className="text-[10px] uppercase tracking-[0.35em] text-umber mb-4 block">
                  Spec Sheet
                </span>
                <h3 className="font-serif text-4xl md:text-5xl italic">Hệ sơn đề xuất</h3>
              </div>
              <span className="hidden md:block font-mono text-xs tracking-widest text-onyx/40">
                LOTUS / {active.id.toUpperCase()}
              </span>
            </div>

            <div className="reveal-wipe overflow-x-auto">
              <table className="w-full text-left border-t border-onyx/20">
                <thead>
                  <tr className="text-[10px] uppercase tracking-[0.25em] text-onyx/50">
                    <th className="py-5 font-medium w-1/4">Lớp</th>
                    <th className="py-5 font-medium">Sản phẩm</th>
                    <th className="py-5 font-medium text-right">Định mức</th>
                    <th className="py-5 font-medium text-right w-20">Số lớp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-onyx/10">
                  {active.system.map((row) => (
                    <tr key={row.layer} className="group hover:bg-linen/60 transition-colors">
                      <td className="py-6 text-onyx/60 text-sm uppercase tracking-[0.15em]">
                        {row.layer}
                      </td>
                      <td className="py-6 font-serif text-xl">{row.product}</td>
                      <td className="py-6 text-right font-mono text-xs text-onyx/70">
                        {row.rate}
                      </td>
                      <td className="py-6 text-right font-serif text-lg italic text-umber">
                        {row.coats}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Layer 4 — Real photos / projects */}
        <section className="px-6 md:px-12 lg:px-16 py-28 md:py-40 bg-linen/40 border-y border-onyx/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <div className="reveal-rise">
                <span className="text-[10px] uppercase tracking-[0.35em] text-umber mb-4 block">
                  Dự án tiêu biểu
                </span>
                <h3 className="font-serif text-4xl md:text-5xl italic">Ứng dụng thực tế</h3>
              </div>
              <p className="max-w-sm text-sm text-onyx/60 reveal-rise">
                Hình ảnh thực tế từ các công trình và xưởng sản xuất đã sử dụng hệ {active.name.toLowerCase()} Lotus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 reveal-wipe">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={active.projects[0].image}
                    alt={active.projects[0].title}
                    width={1600}
                    height={1200}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 flex justify-between text-[11px] uppercase tracking-[0.25em] text-onyx/50">
                  <span className="font-serif normal-case tracking-normal text-base text-onyx italic">
                    {active.projects[0].title}
                  </span>
                  <span>{active.projects[0].meta}</span>
                </p>
              </div>
              <div className="md:col-span-4 space-y-6">
                {active.projects.slice(1).map((p) => (
                  <div key={p.title} className="reveal-wipe">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.25em] text-onyx/50">
                      <span className="font-serif normal-case tracking-normal text-sm text-onyx italic">
                        {p.title}
                      </span>
                      <span>{p.meta}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Layer 5 — FAQ */}
        <section className="px-6 md:px-12 lg:px-16 py-28 md:py-40">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.35em] text-umber mb-4 block reveal-rise">
                Câu hỏi thường gặp
              </span>
              <h3 className="font-serif text-4xl md:text-5xl italic leading-tight reveal-rise">
                Cần tư vấn thêm?
              </h3>
              <p className="text-onyx/60 mt-6 reveal-rise">
                Đội kỹ thuật Lotus sẵn sàng hỗ trợ khảo sát công trình và đề xuất hệ phù hợp.
              </p>
            </div>
            <div className="md:col-span-8 divide-y divide-onyx/15 border-t border-onyx/15">
              {active.faq.map((f, i) => (
                <details
                  key={f.q}
                  className="group py-6 reveal-rise"
                  open={i === 0}
                >
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="font-serif text-xl md:text-2xl leading-snug pr-6">
                      {f.q}
                    </span>
                    <span className="font-mono text-xs text-umber pt-2 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-onyx/70 leading-relaxed max-w-2xl">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-12 lg:px-16 py-32 md:py-48 text-center border-t border-onyx/10">
          <div className="max-w-3xl mx-auto reveal-rise">
            <span className="text-[10px] uppercase tracking-[0.35em] text-umber mb-6 block">
              Bắt đầu dự án
            </span>
            <h3 className="font-serif text-5xl md:text-7xl leading-[1.02] mb-14">
              Hệ sơn phù hợp <br />
              <span className="italic text-umber font-light">cho từng vật liệu của bạn.</span>
            </h3>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex flex-col items-center"
            >
              <span className="size-28 rounded-full border border-onyx/15 flex items-center justify-center group-hover:bg-umber group-hover:border-umber transition-all duration-700">
                <span className="size-2 bg-onyx group-hover:bg-clay rounded-full transition-colors" />
              </span>
              <span className="mt-7 text-xs font-medium uppercase tracking-[0.32em]">
                Nhắn Zalo tìm hiểu thêm
              </span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-16 py-10 border-t border-onyx/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-onyx/45">
          <div className="flex items-baseline gap-4">
            <span className="font-serif normal-case text-lg italic text-onyx/70 tracking-normal">
              Sơn Lotus
            </span>
            <span>© {new Date().getFullYear()} Coating Systems</span>
          </div>
          <div className="flex flex-wrap gap-6">
            <span>Xưởng: Bình Dương, VN</span>
            <span>Văn phòng: TP. Hồ Chí Minh</span>
            <a href={ZALO_URL} target="_blank" rel="noopener" className="hover:text-onyx transition-colors">
              Liên hệ Zalo →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
