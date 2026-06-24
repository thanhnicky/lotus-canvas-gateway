import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import catWood from "@/assets/cat-wood.jpg";
import catMetal from "@/assets/cat-metal.jpg";
import catMetalWood from "@/assets/cat-metalwood.jpg";
import catCementWood from "@/assets/cat-cementwood.jpg";
import catComposite from "@/assets/cat-composite.jpg";
import catFloor from "@/assets/cat-floor.jpg";
import revealCraft from "@/assets/reveal-craft.jpg";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sơn Lotus — Hệ sơn công nghiệp cho xưởng, nhà thầu và nhà máy" },
      {
        name: "description",
        content:
          "Nhà sản xuất sơn Việt Nam. Hệ sơn gỗ, kim loại, giả gỗ, composite và sàn công nghiệp — chọn đúng hệ ngay từ đầu, giảm làm lại, dễ bàn giao.",
      },
      { property: "og:title", content: "Sơn Lotus — Đúng hệ sơn cho công trình thật" },
      {
        property: "og:description",
        content:
          "Lotus đề xuất hệ phủ theo vật liệu nền, môi trường và quy mô — cho xưởng nội thất, nhà thầu kết cấu, nhà máy xuất khẩu và đơn vị thi công sàn.",
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
    nameEn: "Wood Coating",
    tagline: "Đẹp không chỉ ở mẫu test. Đẹp cả khi chạy số lượng lớn.",
    manifesto:
      "Xưởng cần một hệ sơn chạy được ổn định mỗi ngày, không phải một mẫu màu đẹp riêng lẻ.",
    image: catWood,
    imageTone: "dark",
    accent: "#6f4a2a",
    signature: "Workshop",
    description:
      "Hệ sơn gỗ Lotus được xây dựng cho xưởng nội thất và nhà máy gỗ xuất khẩu — ưu tiên độ ổn định màu giữa các đợt, dễ kiểm soát độ bóng / độ lì, và giảm tỉ lệ làm lại khi chạy số lượng lớn.",
    applications: [
      "Xưởng thi công nội thất theo đơn",
      "Nhà máy nội thất xuất khẩu Mỹ / EU",
      "Đồ gỗ cao cấp cần hoàn thiện đồng đều",
      "Hạng mục gỗ trong nhà yêu cầu kiểm soát màu",
    ],
    specs: [
      { label: "Độ ổn định màu", value: "Lặp lại giữa các đợt" },
      { label: "Kiểm soát bóng", value: "Mờ 5% — Bóng gương" },
      { label: "Gốc", value: "PU 2K / NC / Water-based" },
      { label: "Phù hợp", value: "Chạy xưởng số lượng lớn" },
    ],
    process: [
      { step: "I", title: "Chuẩn nền gỗ", body: "Chà nhám đúng độ mịn, kiểm độ ẩm dưới 12% — bước này quyết định màu lên đều hay không." },
      { step: "II", title: "Lót chặn nhựa", body: "Ngăn nhựa gỗ đẩy ngược, làm phẳng lỗ chân lông để lớp màu không bị loang." },
      { step: "III", title: "Phủ màu", body: "Pha theo công thức cố định cho từng đơn, đảm bảo sắc độ lặp lại giữa các đợt." },
      { step: "IV", title: "Topcoat kiểm soát bóng", body: "Chọn đúng độ bóng theo yêu cầu khách cuối, hạn chế lệch tông khi giao hàng." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Wood Primer P80", rate: "8–10 m²/L", coats: "01" },
      { layer: "Lót 2", product: "Lotus Sanding Sealer", rate: "10–12 m²/L", coats: "02" },
      { layer: "Lớp màu", product: "Lotus Stain Color", rate: "12–15 m²/L", coats: "01" },
      { layer: "Topcoat", product: "Lotus Topcoat Matte / Gloss", rate: "10–12 m²/L", coats: "02" },
    ],
    projects: [
      { image: project1, title: "Đơn hàng nội thất xuất khẩu", meta: "Hoàn thiện đồng đều cả lệnh sản xuất" },
      { image: revealCraft, title: "Xưởng gỗ óc chó", meta: "Pha màu lặp lại cho nhiều đợt" },
      { image: project3, title: "Nội thất nhà hàng", meta: "Kiểm soát độ lì theo yêu cầu thiết kế" },
    ],
    faq: [
      { q: "Làm sao giữ màu đều giữa các đợt sản xuất?", a: "Lotus cố định công thức pha và lưu mẫu chuẩn cho từng mã hàng. Mỗi đợt giao đều kiểm tra đối chiếu trước khi xuất xưởng để xưởng không phải chỉnh lại tay." },
      { q: "Đặt độ bóng theo yêu cầu khách cuối được không?", a: "Có. Mờ 5 / 10 / 20 / 30 / bán bóng / bóng gương đều pha được theo mã. Gửi mẫu hoặc thông số khách yêu cầu, Lotus làm tấm sample đối chiếu trước khi chạy số lượng." },
      { q: "Nếu xưởng đang gặp lỗi hoàn thiện thì xử lý thế nào?", a: "Gửi ảnh sản phẩm lỗi và mô tả quy trình hiện tại qua Zalo. Đội kỹ thuật Lotus phân tích nguyên nhân và đề xuất hệ phù hợp để giảm làm lại." },
    ],
  },
  {
    id: "metal",
    index: "02",
    name: "Sơn kim loại",
    nameEn: "Metal & Steel",
    tagline: "Đúng hệ chống ăn mòn cho từng môi trường vận hành.",
    manifesto:
      "Kết cấu thép hỏng vì chọn sai hệ, không phải vì sơn rẻ. Lotus đề xuất hệ theo môi trường thật.",
    image: catMetal,
    imageTone: "dark",
    accent: "#4a5560",
    signature: "Steel",
    description:
      "Hệ sơn kim loại Lotus cho nhà thầu kết cấu thép, nhà máy cơ khí và công trình công nghiệp — chọn đúng cấp chống ăn mòn theo môi trường (C3 / C4 / C5) để giảm rủi ro bảo hành sau bàn giao.",
    applications: [
      "Kết cấu thép nhà xưởng, kho",
      "Công trình ven biển, môi trường C5",
      "Thiết bị cơ khí, khung máy",
      "Lam nhôm và mặt tiền kim loại",
    ],
    specs: [
      { label: "Cấp chống ăn mòn", value: "ISO 12944 · C3 / C4 / C5" },
      { label: "Bền màu ngoài trời", value: "QUV 1000h" },
      { label: "Gốc", value: "Epoxy / PU 2K" },
      { label: "Phù hợp", value: "Công trình có nghiệm thu kỹ thuật" },
    ],
    process: [
      { step: "I", title: "Làm sạch bề mặt", body: "Phun bi Sa 2.5 hoặc xử lý hóa chất theo ISO 8501 — chân bám quyết định tuổi thọ cả hệ." },
      { step: "II", title: "Lót chống gỉ", body: "Epoxy giàu kẽm cho bảo vệ catot, chọn theo cấp ăn mòn thực tế tại công trình." },
      { step: "III", title: "Lớp trung gian", body: "Epoxy MIO tăng độ dày khô, chống thấm hơi nước cho môi trường khắc nghiệt." },
      { step: "IV", title: "Phủ PU", body: "Bền màu, giữ ngoại quan công trình lâu dài, hạn chế phải sơn lại sớm." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Zinc-rich Epoxy", rate: "6–8 m²/L", coats: "01" },
      { layer: "Trung gian", product: "Lotus Epoxy MIO", rate: "5–7 m²/L", coats: "01" },
      { layer: "Phủ", product: "Lotus PU 2K", rate: "10–12 m²/L", coats: "02" },
    ],
    projects: [
      { image: project2, title: "Mặt tiền nhôm văn phòng", meta: "Hệ PU 2K bền màu" },
      { image: catMetal, title: "Nhà máy ven biển", meta: "Hệ C5 cho môi trường mặn" },
      { image: project3, title: "Trần kim loại thương mại", meta: "Hoàn thiện matte kiểm soát" },
    ],
    faq: [
      { q: "Cách chọn đúng cấp C3 / C4 / C5?", a: "Phụ thuộc vị trí công trình: trong nhà khô, gần đường, ven biển hay nhà máy hóa chất. Gửi vị trí và mô tả môi trường, Lotus đề xuất hệ tương ứng và tổng DFT cần đạt." },
      { q: "Có thi công lên mạ kẽm nhúng nóng không?", a: "Có. Dùng Lotus Etch Primer làm lớp chuyển tiếp trước khi sơn epoxy, đảm bảo độ bám trên bề mặt mạ." },
      { q: "Có hồ sơ kỹ thuật để trình nghiệm thu?", a: "Có. TDS, MSDS, ISO 9001 và báo cáo kiểm nghiệm độc lập đầy đủ cho hồ sơ thầu và biên bản nghiệm thu." },
    ],
  },
  {
    id: "metal-wood",
    index: "03",
    name: "Sơn giả gỗ trên kim loại",
    nameEn: "Wood-grain on Metal",
    tagline: "Đẹp khi bàn giao, bền khi đưa vào công trình.",
    manifesto:
      "Chủ đầu tư không quan tâm bạn dùng bao nhiêu công đoạn. Họ chỉ nhìn vân gỗ sau một mùa nắng.",
    image: catMetalWood,
    imageTone: "light",
    accent: "#8a5a36",
    signature: "Teak",
    description:
      "Hệ giả gỗ trên sắt và nhôm cho nhà thầu cần ra thẩm mỹ thật, quy trình rõ ràng và giảm rủi ro bàn giao. Vân gỗ chân thực ở khoảng nhìn thực tế, hạn chế bạc màu khi ra nắng.",
    applications: [
      "Cổng sắt, hàng rào, lam che nắng",
      "Cửa thép vân gỗ mặt tiền",
      "Lan can, trần kim loại trang trí",
      "Hạng mục ngoài trời và bán ngoài trời",
    ],
    specs: [
      { label: "Vân ở khoảng nhìn thật", value: "Khó phân biệt với gỗ" },
      { label: "Kháng UV ngoài trời", value: "QUV 1500h" },
      { label: "Gốc", value: "PU Wood-grain" },
      { label: "Phù hợp", value: "Nhà thầu cần đúng hệ ngay từ đầu" },
    ],
    process: [
      { step: "I", title: "Xử lý nền kim loại", body: "Tẩy dầu, chuyển hóa bề mặt và sơn lót epoxy chống gỉ — bỏ qua bước này là phải sửa cả mặt." },
      { step: "II", title: "Nền màu gỗ", body: "Base tone gỗ phun đều, làm cơ sở cho vân lên đúng sắc độ." },
      { step: "III", title: "Tạo vân", body: "Lăn vân chuyên dụng hoặc in chuyển nhiệt theo mẫu gỗ khách chọn." },
      { step: "IV", title: "Topcoat khoá vân", body: "Phủ trong PU kháng UV, giữ vân không bạc tông khi ra ngoài trời." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Metal Primer G-200", rate: "8–10 m²/L", coats: "01" },
      { layer: "Nền màu", product: "Lotus Wood Base", rate: "6–8 m²/L", coats: "01" },
      { layer: "Tạo vân", product: "Lotus Grain Stain S-10", rate: "12–15 m²/L", coats: "01" },
      { layer: "Topcoat", product: "Lotus Clear Topcoat UV", rate: "10–12 m²/L", coats: "01" },
    ],
    projects: [
      { image: catMetalWood, title: "Lam nhôm mặt tiền resort", meta: "Vân teak, hệ ngoài trời" },
      { image: project2, title: "Mặt tiền tòa nhà văn phòng", meta: "Giả gỗ trên nhôm anode" },
      { image: project1, title: "Cửa thép villa ven biển", meta: "Vân walnut, hệ kháng UV" },
    ],
    faq: [
      { q: "Chọn hệ thế nào để không bạc màu sau vài tháng?", a: "Vấn đề thường không nằm ở vân mà ở lớp topcoat và lớp lót chống gỉ. Gửi vị trí công trình (trong nhà, ban công, ngoài trời trực tiếp), Lotus đề xuất hệ đủ lớp để vân giữ tông lâu dài." },
      { q: "Có làm được vân walnut, teak, oak?", a: "Có. Thư viện trên 40 mẫu vân, đồng thời nhận làm mẫu mới theo ảnh khách gửi. Lotus làm tấm sample đối chiếu trước khi triển khai diện tích lớn." },
      { q: "Nếu thi công sai hệ, sửa được không?", a: "Sửa được nhưng tốn công hơn làm đúng từ đầu — thường phải xử lý cả mặt. Vì vậy nên gửi ảnh hiện trạng và vật liệu nền trước, Lotus tư vấn đúng hệ ngay từ bước báo giá." },
    ],
  },
  {
    id: "cement-wood",
    index: "04",
    name: "Sơn giả gỗ trên tấm xi măng",
    nameEn: "Wood-grain on Cement",
    tagline: "Chọn đúng hệ ngay từ đầu để đỡ sửa cả một bề mặt đã lên vân.",
    manifesto:
      "Tấm cement không tha thứ cho hệ sai. Một lỗi nhỏ ở lớp lót là cả mảng vân phải làm lại.",
    image: catCementWood,
    imageTone: "light",
    accent: "#7a6347",
    signature: "Oak Cement",
    description:
      "Hệ giả gỗ trên Smartboard, Duraflex và tấm cement composite — dành cho nhà thầu cần ra vân thẩm mỹ trên mặt tiền, hàng rào, lam và ốp ngoại thất, với độ bền nước và độ bám phù hợp nền kiềm.",
    applications: [
      "Ốp tường, trần ngoại thất",
      "Mặt tiền nhà phố vân gỗ",
      "Lam trang trí, hàng rào cement",
      "Sàn ban công, hành lang khô",
    ],
    specs: [
      { label: "Độ bám trên cement", value: "Cao — qua lót kháng kiềm" },
      { label: "Chống thấm", value: "Ngâm 240h không bong" },
      { label: "Gốc", value: "Acrylic Wood-grain" },
      { label: "Phù hợp", value: "Hạng mục ngoại thất nhà thầu" },
    ],
    process: [
      { step: "I", title: "Xử lý tấm cement", body: "Vệ sinh, mài phẳng mối nối và lót kháng kiềm — bước bắt buộc để vân không bong sau vài tháng." },
      { step: "II", title: "Nền màu gỗ", body: "Base color đồng đều, làm nền chuẩn cho thao tác vẽ vân." },
      { step: "III", title: "Lăn vân", body: "Con lăn chuyên dụng tạo vân theo mẫu gỗ khách chọn, kiểm soát hướng và mật độ." },
      { step: "IV", title: "Topcoat UV", body: "Acrylic UV khoá vân, chống bám bẩn và giữ tông ngoài trời." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Alkali Primer", rate: "8–10 m²/L", coats: "01" },
      { layer: "Nền màu", product: "Lotus Wood Base Acrylic", rate: "8–10 m²/L", coats: "01" },
      { layer: "Tạo vân", product: "Lotus Grain Roller Stain", rate: "10–14 m²/L", coats: "01" },
      { layer: "Topcoat", product: "Lotus Acrylic Topcoat UV", rate: "10–12 m²/L", coats: "02" },
    ],
    projects: [
      { image: catCementWood, title: "Ốp tường Smartboard villa", meta: "Vân teak, hệ ngoại thất" },
      { image: project1, title: "Mặt tiền nhà phố", meta: "Cement vân walnut" },
      { image: project2, title: "Hệ lam trang trí", meta: "Cement composite vân oak" },
    ],
    faq: [
      { q: "Tấm cement đã sơn cũ có thi công được không?", a: "Được, sau khi kiểm tra độ bám lớp sơn cũ và xử lý các điểm bong. Gửi ảnh hiện trạng để Lotus đánh giá có cần cạo bỏ hay phủ trực tiếp." },
      { q: "Vân giả gỗ giữ được bao lâu ngoài trời?", a: "Trung bình 5–8 năm khi thi công đủ hệ, có topcoat UV. Tuổi thọ phụ thuộc nhiều vào lớp lót kháng kiềm và độ ẩm nền lúc thi công — không phải vào vân." },
      { q: "Báo giá tính theo gì?", a: "Theo diện tích, độ phức tạp của vân (1 tông, 2 tông, vân sâu) và vị trí công trình. Gửi ảnh hạng mục, vật liệu nền và m² để Lotus báo giá hệ phù hợp." },
    ],
  },
  {
    id: "composite",
    index: "05",
    name: "Sơn nhựa / composite",
    nameEn: "Plastic & Composite",
    tagline: "Đẹp ở mẫu là chưa đủ. Nhà máy cần đẹp đồng đều trên cả dây chuyền.",
    manifesto:
      "Một lỗi coating trên dây chuyền không chỉ hỏng sản phẩm — nó ảnh hưởng cả đơn hàng xuất khẩu và uy tín với khách.",
    image: catComposite,
    imageTone: "light",
    accent: "#3d4a4a",
    signature: "Polymer",
    description:
      "Hệ phủ cho nhựa kỹ thuật và composite — dành cho nhà máy sản xuất hàng xuất khẩu cần bám dính ổn định trên nền khó, ngoại quan đồng đều và quy trình lặp lại được khi chạy số lượng.",
    applications: [
      "Sản phẩm nhựa kỹ thuật xuất khẩu",
      "Linh kiện composite, FRP, fiberglass",
      "Vỏ thiết bị y tế, điện tử",
      "Chi tiết nội thất ô tô, xe máy",
    ],
    specs: [
      { label: "Độ bám", value: "Cấp 5B (cross-cut)" },
      { label: "Ngoại quan", value: "Đồng đều trên dây chuyền" },
      { label: "Gốc", value: "PU 2K / 1K Plastic" },
      { label: "Phù hợp", value: "Sản xuất xuất khẩu theo tiêu chuẩn" },
    ],
    process: [
      { step: "I", title: "Xử lý bề mặt nhựa", body: "Lau IPA, flame hoặc plasma tùy loại nhựa — quyết định độ bám của cả hệ phủ." },
      { step: "II", title: "Lót chuyên dụng", body: "Primer chọn theo nền PP / PE / ABS / PC, đảm bảo cross-cut đạt khi QC khách kiểm." },
      { step: "III", title: "Phủ màu", body: "PU 2K phun trên dây chuyền, sấy gia nhiệt cho độ đồng đều giữa các batch." },
      { step: "IV", title: "QC ngoại quan", body: "Test cross-cut, DFT và độ bóng theo tiêu chuẩn khách hàng trước khi đóng gói." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Plastic Primer", rate: "10–12 m²/L", coats: "01" },
      { layer: "Phủ", product: "Lotus PU 2K Plastic", rate: "10–12 m²/L", coats: "02" },
    ],
    projects: [
      { image: catComposite, title: "Vỏ thiết bị y tế xuất khẩu", meta: "ABS, hoàn thiện matte đồng đều" },
      { image: project2, title: "Linh kiện ô tô", meta: "PU 2K soft-touch theo spec khách" },
      { image: project1, title: "Sản phẩm FRP", meta: "Composite ngoại thất, hệ kháng UV" },
    ],
    faq: [
      { q: "Loại nhựa nào cần xử lý plasma hoặc flame?", a: "PP và PE thường cần flame hoặc plasma để mở năng lượng bề mặt. ABS, PC, FRP, fiberglass chỉ cần primer chuyên dụng. Gửi loại nhựa cụ thể để Lotus tư vấn quy trình." },
      { q: "Làm sao đảm bảo ngoại quan đồng đều giữa các batch?", a: "Lotus cố định công thức, lưu mẫu chuẩn theo từng mã sản phẩm và đồng hành QC tại nhà máy trong giai đoạn chạy thử để chuẩn hóa thông số phun và sấy." },
      { q: "Có hỗ trợ test đạt tiêu chuẩn khách xuất khẩu?", a: "Có. Lotus cung cấp tấm test cross-cut, DFT, độ bóng và phối hợp với QC nhà máy để đạt tiêu chuẩn ngoại quan của khách đầu cuối trước khi sản xuất chính thức." },
    ],
  },
  {
    id: "floor",
    index: "06",
    name: "Sơn sàn",
    nameEn: "Industrial Flooring",
    tagline: "Sàn công nghiệp bền hay không phụ thuộc vào hệ chọn từ đầu.",
    manifesto:
      "Chọn sai hệ sàn — giá rẻ lúc đầu, nhưng trả giá sau nghiệm thu khi sàn bong, xuống cấp, hoặc phải sửa cả khu vực vận hành.",
    image: catFloor,
    imageTone: "light",
    accent: "#525a55",
    signature: "Graphite",
    description:
      "Hệ sơn sàn Epoxy và PU Lotus cho đơn vị thầu thi công sàn công nghiệp — chọn đúng hệ theo nền hiện trạng, tải trọng, hóa chất và độ ẩm để giảm rủi ro bong tróc sau bàn giao.",
    applications: [
      "Nhà xưởng sản xuất, kho logistics",
      "Khu vực xe nâng, tải trọng nặng",
      "Phòng sạch, phòng thí nghiệm",
      "Showroom, khu vực kỹ thuật, parking",
    ],
    specs: [
      { label: "Chịu tải", value: "Đi bộ → Xe nâng nặng" },
      { label: "Kháng hóa chất", value: "Axit / kiềm trung bình → cao" },
      { label: "Gốc", value: "Epoxy / PU self-levelling" },
      { label: "Phù hợp", value: "Thầu thi công sàn công nghiệp" },
    ],
    process: [
      { step: "I", title: "Khảo sát hiện trạng", body: "Kiểm tra cường độ bê tông, độ ẩm, tải trọng vận hành — quyết định hệ phủ phù hợp." },
      { step: "II", title: "Mài và lót thấm", body: "Mài kim cương mở mao mạch, primer epoxy thấm sâu để liên kết với nền bê tông." },
      { step: "III", title: "Trung gian / bả vá", body: "Bả khuyết tật và cào đều — tạo mặt phẳng cho lớp phủ đạt chiều dày thiết kế." },
      { step: "IV", title: "Phủ hoàn thiện", body: "Self-levelling hoặc lăn phủ theo tải trọng, môi trường và yêu cầu thẩm mỹ." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Floor Primer EP", rate: "5–7 m²/L", coats: "01" },
      { layer: "Trung gian", product: "Lotus Mortar Coat", rate: "tuỳ thiết kế", coats: "01" },
      { layer: "Phủ", product: "Lotus Self-Level Epoxy", rate: "1 mm = 1.5 kg/m²", coats: "01" },
      { layer: "Topcoat", product: "Lotus PU Floor Matte", rate: "8–10 m²/L", coats: "01" },
    ],
    projects: [
      { image: catFloor, title: "Showroom thương mại", meta: "Epoxy self-level 2 mm" },
      { image: project3, title: "Khu vực vận hành nhà máy", meta: "PU matte chịu hóa chất" },
      { image: project2, title: "Kho logistics tải nặng", meta: "Epoxy chịu xe nâng" },
    ],
    faq: [
      { q: "Nền bê tông yếu hoặc ẩm có thi công được không?", a: "Có, nhưng cần khảo sát trước. Lotus đo độ ẩm, cường độ kéo nhổ và đề xuất lớp xử lý nền phù hợp — thi công trên nền không đạt là nguyên nhân chính của bong tróc sớm." },
      { q: "Khu vực xe nâng nặng nên chọn hệ nào?", a: "Tùy tải trọng và mật độ vận hành. Thường dùng Epoxy self-levelling 2–3 mm hoặc hệ mortar. Gửi tải trọng xe nâng, diện tích và môi trường hóa chất để Lotus thiết kế hệ đúng." },
      { q: "Thời gian thi công và bàn giao?", a: "Thông thường: 24h cho đi bộ, 72h cho xe nâng và tải nặng. Tiến độ cụ thể phụ thuộc diện tích, số lớp và điều kiện môi trường — Lotus lên kế hoạch chi tiết theo từng dự án." },
    ],
  },
];

/** Per-material atmosphere — distinct crop + cinematic phrase per category. */
const MOOD: Record<string, { crop: string; pause: string; pauseSub: string }> = {
  wood: {
    crop: "center 38%",
    pause: "Đều màu khi chạy số lượng lớn.",
    pauseSub: "Hệ ổn định cho xưởng nội thất và nhà máy gỗ xuất khẩu.",
  },
  metal: {
    crop: "center 28%",
    pause: "Đúng hệ — đúng môi trường.",
    pauseSub: "Chọn cấp chống ăn mòn theo công trình thật, không theo cảm tính.",
  },
  "metal-wood": {
    crop: "65% 55%",
    pause: "Đẹp khi bàn giao. Bền sau một mùa nắng.",
    pauseSub: "Hệ giả gỗ trên kim loại cho nhà thầu cần giảm rủi ro làm lại.",
  },
  "cement-wood": {
    crop: "center 68%",
    pause: "Chọn đúng hệ ngay từ đầu.",
    pauseSub: "Tránh sửa cả một mặt cement đã lên vân.",
  },
  composite: {
    crop: "30% 50%",
    pause: "Đồng đều trên cả dây chuyền.",
    pauseSub: "Hệ phủ cho nhà máy sản xuất nhựa và composite xuất khẩu.",
  },
  floor: {
    crop: "center 78%",
    pause: "Bền hay không, quyết định từ đầu.",
    pauseSub: "Hệ sàn chọn theo nền, tải trọng và môi trường vận hành.",
  },
};


/* ────────────────────────────── COMPONENT ────────────────────────────── */

function Index() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];
  const mood = MOOD[active.id];
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => { setOpenFaq(0); }, [activeId]);

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
            style={{ objectPosition: mood.crop }}
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
        <header className="relative z-20 flex justify-between items-center px-6 md:px-12 lg:px-16 pt-10 md:pt-12">
          <span className="font-serif text-2xl md:text-[2rem] tracking-tight leading-none italic">
            Sơn&nbsp;Lotus
          </span>
          <span className="hidden md:inline-flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/50">
            <span>Việt Nam</span>
            <span className="h-px w-5 bg-onyx/25" />
            <span>ISO 9001</span>
          </span>
        </header>

        {/* Center — editorial cover */}
        <div className="relative z-10 flex-1 grid grid-cols-12 gap-6 px-6 md:px-12 lg:px-16 pt-20 md:pt-28">
          <div className="col-span-12 md:col-span-9 self-center max-w-[1100px]">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-onyx/55 mb-10 md:mb-12 flex items-center gap-4">
              <span className="inline-block h-px w-10 bg-onyx/45" />
              <span>Nhà sản xuất sơn công nghiệp · Việt Nam</span>
            </div>
            <h1 className="font-serif text-[clamp(3rem,8.5vw,9rem)] leading-[0.92] tracking-[-0.025em] text-balance text-onyx">
              <span className="block">Đúng hệ sơn,</span>
              <span className="block italic font-light text-onyx/90">
                cho <span className="not-italic font-normal">công trình thật.</span>
              </span>
            </h1>

            <p className="mt-12 md:mt-14 max-w-md text-[1rem] md:text-[1.05rem] leading-[1.7] text-onyx/75">
              Sáu hệ sơn cho xưởng, nhà thầu và nhà máy —
              chọn đúng từ đầu để giảm làm lại và dễ bàn giao.
            </p>

            <div className="mt-12 md:mt-14 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-3 bg-onyx text-clay pl-5 pr-4 py-3 hover:bg-ash transition-colors"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.32em]">
                  Nhắn Zalo · Tư vấn hệ sơn phù hợp
                </span>
                <span
                  className="inline-block h-px w-6 group-hover:w-10 transition-all"
                  style={{ background: "var(--accent)" }}
                />
              </a>
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/45">
                Kỹ thuật phản hồi trong 24h
              </span>
            </div>
          </div>

          {/* Right side — quiet active material mark */}
          <aside className="hidden md:flex col-span-3 self-end justify-end items-end pb-8">
            <div key={active.id + "-meta"} className="text-right space-y-3 soft-in">
              <div className="font-serif text-[5.5rem] leading-none italic text-onyx/90 tracking-tight">
                {active.index}
              </div>
              <div className="ml-auto h-px w-10" style={{ background: "var(--accent)" }} />
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-onyx/55">
                {active.signature}
              </div>
            </div>
          </aside>
        </div>



        {/* Bottom — editorial INDEX (the selector, type-specimen style) */}
        <div className="relative z-20 px-6 md:px-12 lg:px-16 pb-10 md:pb-12">
          <div className="flex items-end justify-between mb-5 font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/55">
            <div className="flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-onyx/35" />
              <span>06 hệ phủ</span>
            </div>
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
            style={{ objectPosition: mood.crop }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx/55 via-onyx/10 to-transparent" />
          <div
            className="absolute inset-0 mix-blend-multiply opacity-40"
            style={{
              background:
                "linear-gradient(180deg, transparent 35%, var(--accent) 110%)",
            }}
          />

          <div className="relative h-full flex flex-col justify-between px-6 md:px-12 lg:px-16 py-12 md:py-16 text-clay">
            <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.32em] text-clay/70 r-rise">
              <span>Chương · {active.index}</span>
              <span>{active.nameEn}</span>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-serif text-[clamp(2.5rem,7.5vw,7rem)] leading-[0.92] tracking-[-0.02em] italic font-light r-rise r-d2">
                {active.name}.
              </h2>
              <p className="mt-10 max-w-2xl font-serif italic text-xl md:text-3xl text-clay/85 leading-snug text-pretty r-rise r-d3">
                “{active.manifesto}”
              </p>
            </div>
          </div>
        </section>

        {/* ── Asymmetric intro · description vs. specs ──────────── */}
        <section className="px-6 md:px-12 lg:px-16 py-32 md:py-48">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-6 md:col-start-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-umber r-rise">
                Bản chất
              </span>
              <h3 className="font-serif text-3xl md:text-5xl mt-6 leading-[1.05] r-rise r-d1 text-balance">
                {active.tagline}
              </h3>
              <p className="mt-10 text-onyx/70 leading-[1.85] text-pretty r-rise r-d2 max-w-md">
                {active.description}
              </p>

              <div className="mt-20 h-px bg-onyx/15 origin-left r-line" />

              <dl className="mt-12 divide-y divide-onyx/10">
                {active.specs.map((s, i) => (
                  <div
                    key={s.label}
                    className={`grid grid-cols-12 gap-6 py-7 items-baseline r-rise r-d${(i % 4) + 1}`}
                  >
                    <dt className="col-span-5 font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/45">
                      {s.label}
                    </dt>
                    <dd className="col-span-7 font-serif italic text-[1.35rem] md:text-[1.55rem] text-onyx leading-[1.15]">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>

            </div>

            {/* Side numeral */}
            <div className="hidden md:block col-span-3 col-start-10 relative">
              <div className="sticky top-24 text-right">
                <div className="font-serif text-[14rem] leading-none italic text-onyx/[0.07] -mt-6 r-rise">
                  {active.index}
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/35 -mt-4 r-rise r-d2">
                  {active.nameEn}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Editorial pull quote, no chrome ─────────────────── */}
        <section className="px-6 md:px-12 lg:px-16 py-24 md:py-36 border-t border-onyx/10">
          <div className="max-w-4xl mx-auto text-center r-rise">
            <p className="font-serif text-3xl md:text-5xl italic leading-[1.18] text-pretty">
              Chúng tôi sản xuất <span className="not-italic">lớp bảo vệ</span> —
              công thức nội bộ, thi công thực tế trên
              <span className="not-italic" style={{ color: "var(--accent)" }}> sáu nhóm vật liệu</span>.
            </p>
          </div>
        </section>


        {/* ── Cinematic pause · the unforgettable moment ─────────── */}
        <section className="relative">
          <div className="relative h-[92svh] min-h-[640px] overflow-hidden bg-onyx">
            <img
              key={active.id + "-pause"}
              src={active.image}
              alt={active.name}
              width={1920}
              height={1280}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover drift-deep"
              style={{ objectPosition: mood.crop }}
            />
            {/* Quiet vignette for legibility — no chrome, just shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-onyx/35 to-onyx/55" />
            <div
              className="absolute inset-0 mix-blend-multiply opacity-50"
              style={{
                background:
                  "radial-gradient(70% 60% at 50% 70%, var(--accent), transparent 75%)",
              }}
            />

            {/* Printed-catalog corners — keep editorial frame */}
            <div className="pointer-events-none absolute inset-6 md:inset-10 z-10">
              <span className="absolute top-0 left-0 size-4 border-t border-l border-clay/40" />
              <span className="absolute top-0 right-0 size-4 border-t border-r border-clay/40" />
              <span className="absolute bottom-0 left-0 size-4 border-b border-l border-clay/40" />
              <span className="absolute bottom-0 right-0 size-4 border-b border-r border-clay/40" />
            </div>

            {/* Centered phrase — one line of attention */}
            <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-16 md:pb-24 text-clay">
              <div
                key={active.id + "-pause-text"}
                className="max-w-4xl soft-in"
              >
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-clay/70 mb-6">
                  <span
                    className="inline-block size-1.5 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                  <span>Fig. {active.index} — {active.signature}</span>
                </div>
                <p className="font-serif italic font-light text-[clamp(2.25rem,6.5vw,5.75rem)] leading-[1.02] tracking-[-0.015em] text-clay text-pretty">
                  {mood.pause}
                </p>
                <p className="mt-6 max-w-md font-serif italic text-lg md:text-xl text-clay/75">
                  {mood.pauseSub}
                </p>
              </div>
            </div>

            {/* Top-right caption */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-10 font-mono text-[9px] uppercase tracking-[0.32em] text-clay/45 text-right">
              <div>Lotus · {active.nameEn}</div>
            </div>

          </div>
        </section>


        {/* ── Applications — numbered editorial list, asymmetric ─ */}
        <section className="px-6 md:px-12 lg:px-16 py-28 md:py-40">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-4">
              <div className="md:sticky md:top-24">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-umber r-rise">
                  Ứng dụng
                </span>
                <h3 className="font-serif text-4xl md:text-5xl mt-5 leading-[1.05] italic r-rise r-d1">
                  Nơi <span className="not-italic">Lotus</span> được tin dùng.
                </h3>
                <p className="mt-6 text-onyx/65 max-w-xs r-rise r-d2">
                  Dành cho nhà thầu, xưởng sản xuất và dự án có yêu cầu kỹ thuật cao.
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
                  Quy trình
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
        <section className="px-6 md:px-12 lg:px-16 py-32 md:py-44 bg-paper">
          <div className="max-w-6xl mx-auto">
            {/* Header treated like a printed catalog spread */}
            <div className="flex items-end justify-between mb-14 md:mb-20 border-b border-onyx/25 pb-8">
              <div className="r-rise">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-umber mb-4">
                  Hệ phủ đề xuất
                </p>
                <h3 className="font-serif text-4xl md:text-5xl italic leading-tight">
                  Lotus · {active.nameEn}
                </h3>
              </div>
              <div className="hidden md:block text-right font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/40">
                <div>{active.id.toUpperCase()}</div>
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
                  Dự án
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
        <section className="px-6 md:px-12 lg:px-16 py-32 md:py-48 bg-paper border-t border-onyx/15">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="col-span-12 md:col-span-6 r-rise">
                <h3 className="font-serif text-4xl md:text-[3.5rem] italic leading-[1.02] text-balance">
                  Một nhà sản xuất, <br />
                  <span className="not-italic">không phải đại lý.</span>
                </h3>
              </div>

              <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
                <p className="font-serif text-xl md:text-[1.4rem] leading-[1.6] text-onyx/70 text-pretty r-rise">
                  Pha chế tại Bình Dương, kiểm nghiệm nội bộ,
                  triển khai cùng đội kỹ thuật tại công trình.
                </p>
              </div>
            </div>

            <dl className="mt-24 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-12 border-t border-onyx/15 pt-14">
              {[
                { k: "01", h: "Xuất xứ", v: "Sản xuất tại Việt Nam, công thức nội bộ." },
                { k: "02", h: "Tiêu chuẩn", v: "ISO 9001, TDS & MSDS minh bạch." },
                { k: "03", h: "Hiện trường", v: "Kỹ sư khảo sát tại công trình." },
                { k: "04", h: "Theo dự án", v: "Hệ phủ tinh chỉnh từng đơn hàng." },
              ].map((t) => (
                <div key={t.k} className="r-rise">
                  <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/35">
                    {t.k}
                  </div>
                  <div className="mt-4 font-serif italic text-[1.5rem] text-onyx leading-[1.1]">
                    {t.h}
                  </div>
                  <div className="mt-5 h-px w-8" style={{ background: "var(--accent)" }} />
                  <p className="mt-5 text-[0.95rem] text-onyx/65 leading-[1.65] max-w-[15rem]">
                    {t.v}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </section>


        {/* ── FAQ · curated consultation index ─────────────────── */}
        <section className="px-6 md:px-12 lg:px-16 py-32 md:py-48 border-t border-onyx/15 bg-paper">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
              <div className="r-rise">
                <h3 className="font-serif text-4xl md:text-5xl italic leading-tight">
                  Trước khi gửi dự án.
                </h3>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/40 md:text-right r-rise r-d1">
                Theo hệ phủ · {active.nameEn}
              </p>
            </div>

            <div className="grid grid-cols-12 gap-x-8 gap-y-12 md:gap-x-24 pt-2">
              {/* Left rail — consultation notes index */}
              <ol className="col-span-12 md:col-span-5 border-t border-onyx/15">
                {active.faq.map((f, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <li key={f.q}>
                      <button
                        onClick={() => setOpenFaq(i)}
                        onMouseEnter={() => setOpenFaq(i)}
                        className="group block w-full text-left py-7 border-b border-onyx/10 transition-colors"
                        aria-pressed={isOpen}
                      >
                        <div className="grid grid-cols-12 gap-4 items-baseline">
                          <span
                            className="col-span-2 font-mono text-[10px] tracking-[0.32em] uppercase shrink-0 transition-colors"
                            style={{ color: isOpen ? "var(--accent)" : "rgba(22,20,18,0.3)" }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`col-span-10 font-serif text-lg md:text-[1.35rem] leading-snug transition-colors ${
                              isOpen ? "text-onyx italic" : "text-onyx/55 group-hover:text-onyx"
                            }`}
                          >
                            {f.q}
                          </span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ol>

              {/* Right panel — editorial answer */}
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                {active.faq[openFaq] && (
                  <div key={active.id + "-faq-" + openFaq} className="soft-in md:sticky md:top-28">
                    <div className="h-px w-10" style={{ background: "var(--accent)" }} />
                    <p className="mt-8 font-serif text-2xl md:text-[2rem] italic leading-[1.15] text-onyx text-pretty">
                      {active.faq[openFaq].q}
                    </p>
                    <p className="mt-10 text-onyx/70 leading-[1.85] max-w-xl text-[1.02rem]">
                      {active.faq[openFaq].a}
                    </p>
                    <a
                      href={ZALO_URL}
                      target="_blank"
                      rel="noopener"
                      className="group inline-flex items-center gap-3 mt-14 font-mono text-[10px] uppercase tracking-[0.32em] text-onyx"
                    >
                      <span>Hỏi tiếp qua Zalo</span>
                      <span
                        className="inline-block h-px w-8 group-hover:w-14 transition-all"
                        style={{ background: "var(--accent)" }}
                      />
                    </a>
                  </div>
                )}
              </div>
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
              Bắt đầu một dự án
            </p>
            <h3 className="font-serif text-5xl md:text-7xl leading-[1.02] italic font-light r-rise r-d1 text-pretty">
              Hệ sơn phù hợp <br />
              <span className="not-italic font-normal">cho từng vật liệu của bạn.</span>
            </h3>
            <p className="mt-8 max-w-2xl mx-auto text-clay/80 leading-relaxed r-rise r-d2">
              Gửi yêu cầu qua Zalo để đội kỹ thuật Lotus đề xuất hệ phủ, định mức và báo giá
              theo dự án. Phản hồi trong 24 giờ.
            </p>

            {/* Project intake — what to send */}
            <ul className="mt-12 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 text-left r-rise r-d3">
              {[
                { k: "01", v: "Ảnh công trình" },
                { k: "02", v: "Vật liệu nền" },
                { k: "03", v: "Hoàn thiện mong muốn" },
                { k: "04", v: "Yêu cầu độ bền · môi trường" },
              ].map((t) => (
                <li key={t.k} className="border-t border-clay/20 pt-4">
                  <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-clay/45">
                    {t.k} — Gửi kèm
                  </div>
                  <div className="mt-1.5 font-serif italic text-base md:text-lg text-clay/90 leading-snug">
                    {t.v}
                  </div>
                </li>
              ))}
            </ul>

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
      <footer className="px-6 md:px-12 lg:px-16 pt-20 pb-14 bg-clay">
        <div className="grid grid-cols-12 gap-10 md:gap-8 border-t border-onyx/15 pt-16">
          <div className="col-span-12 md:col-span-5">
            <p className="font-serif italic text-[2rem] leading-none">Sơn&nbsp;Lotus</p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/45">
              Nhà sản xuất sơn công nghiệp
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/45">
              Việt Nam · ISO 9001
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/35 mb-4">Xưởng</div>
            <div className="text-onyx/75 text-[0.95rem] leading-relaxed">Bình Dương</div>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/35 mb-4">Văn phòng</div>
            <div className="text-onyx/75 text-[0.95rem] leading-relaxed">TP. Hồ Chí Minh</div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-onyx/35 mb-4">Liên hệ</div>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 text-onyx hover:text-umber transition-colors"
            >
              <span className="font-serif italic text-lg">Nhắn Zalo</span>
              <span
                className="inline-block h-px w-8 group-hover:w-14 transition-all"
                style={{ background: "var(--accent)" }}
              />
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-onyx/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.32em] text-onyx/30">
          <span>© {new Date().getFullYear()} Sơn Lotus</span>
          <span>Made in Vietnam</span>
        </div>
      </footer>


    </div>
  );
}
