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

export type Category = {
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

export const SYSTEM_SLUGS: Record<string, string> = {
  wood: "son-go",
  metal: "son-kim-loai",
  "metal-wood": "son-gia-go-tren-kim-loai",
  "cement-wood": "son-gia-go-tren-tam-xi-mang",
  composite: "son-composite",
  floor: "son-san",
};
export const SLUG_TO_ID = Object.fromEntries(Object.entries(SYSTEM_SLUGS).map(([k, v]) => [v, k]));

export const CATEGORIES: Category[] = [
  {
    id: "wood",
    index: "01",
    name: "Sơn gỗ",
    nameEn: "Wood Coating",
    tagline: "Giữ màu ổn định giữa các đợt, giảm lỗi hoàn thiện khi chạy số lượng lớn.",
    manifesto:
      "Không phải bề mặt nào cũng chịu được cùng một công thức. Lotus đề xuất hệ theo loài gỗ, độ ẩm phôi và nhịp chuyền thực tế của xưởng.",
    image: catWood,
    imageTone: "dark",
    accent: "#6f4a2a",
    signature: "Gỗ",
    description:
      "Dành cho xưởng và nhà máy cần màu ổn định, bề mặt đẹp và ít lỗi khi chạy sản xuất. Lotus tư vấn theo loại gỗ, độ bóng và cách vận hành thực tế của xưởng.",
    applications: [
      "Xưởng thi công nội thất theo đơn",
      "Nhà máy nội thất xuất khẩu Mỹ / EU",
      "Đồ gỗ cao cấp cần hoàn thiện đồng đều",
      "Hạng mục gỗ trong nhà yêu cầu kiểm soát màu",
    ],
    specs: [
      { label: "Độ ổn định màu", value: "Lặp lại giữa các đợt" },
      { label: "Kiểm soát bóng", value: "Mờ 5% — Bóng gương" },
      { label: "Gốc", value: "Water-based (Acrylic, PU) 1K / 2K" },
      { label: "Phù hợp", value: "Chạy xưởng số lượng lớn" },
    ],
    process: [
      { step: "I", title: "Chuẩn nền gỗ", body: "Chà nhám đúng độ mịn, kiểm độ ẩm dưới 12% — bước này quyết định màu lên đều hay không." },
      { step: "II", title: "Lót chặn nhựa", body: "Ngăn nhựa gỗ đẩy ngược, làm phẳng lỗ chân lông để lớp màu không bị loang." },
      { step: "III", title: "Phủ màu", body: "Pha theo công thức cố định cho từng đơn, đảm bảo sắc độ lặp lại giữa các đợt." },
      { step: "IV", title: "Lớp phủ hoàn thiện", body: "Chọn đúng độ bóng theo yêu cầu khách cuối, hạn chế lệch tông khi giao hàng." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Wood Primer P80", rate: "8–10 m²/L", coats: "01" },
      { layer: "Lót 2", product: "Lotus Sanding Sealer", rate: "10–12 m²/L", coats: "02" },
      { layer: "Lớp màu", product: "Lotus Stain Color", rate: "12–15 m²/L", coats: "01" },
      { layer: "Lớp phủ hoàn thiện", product: "Lotus Topcoat Matte / Gloss", rate: "10–12 m²/L", coats: "02" },
    ],
    projects: [
      { image: project1, title: "Đơn hàng nội thất xuất khẩu", meta: "Hoàn thiện đồng đều cả lệnh sản xuất" },
      { image: revealCraft, title: "Xưởng gỗ óc chó", meta: "Pha màu lặp lại cho nhiều đợt" },
      { image: project3, title: "Nội thất nhà hàng", meta: "Kiểm soát độ lì theo yêu cầu thiết kế" },
    ],
    faq: [
      { q: "Hệ nước có đủ cứng và đủ bền để thay hệ dung môi không?", a: "Có. Với đúng hệ phủ và đúng quy trình, hệ nước Lotus đủ cho yêu cầu độ bóng, độ bền và ngoại quan trong thi công và bàn giao thực tế." },
      { q: "Tôi đang dùng hệ dung môi, muốn chuyển sang hệ nước thì bắt đầu từ đâu?", a: "Gửi thông tin về quy trình hiện tại, loại dung môi đang dùng và yêu cầu chuyển đổi. Lotus đề xuất lộ trình chuyển đổi từng bước để không ảnh hưởng tiến độ xưởng." },
      { q: "Lotus có tư vấn đúng hệ theo từng loại nền và yêu cầu hoàn thiện không?", a: "Có. Lotus khảo sát loại gỗ, độ ẩm và yêu cầu hoàn thiện để chọn hệ phù hợp. Gửi ảnh hiện trạng và mô tả quy trình, Lotus tư vấn hệ giảm rủi ro làm lại." },
      { q: "Nếu tôi làm công trình hoặc chạy sản xuất, Lotus có hỗ trợ quy trình và hồ sơ kỹ thuật không?", a: "Có. Lotus cung cấp quy trình thi công, định mức tiêu thụ, TDS, MSDS và báo cáo kiểm nghiệm cho hồ sơ thầu và biên bản nghiệm thu." },
      { q: "Tôi nên gửi những gì qua Zalo để được tư vấn nhanh và đúng hơn?", a: "Gửi ảnh bề mặt hiện trạng, loại vật liệu nền, yêu cầu hoàn thiện và quy mô công việc. Lotus phản hồi hướng hệ sơn phù hợp trước khi báo giá." },
    ],
  },
  {
    id: "metal",
    index: "02",
    name: "Sơn kim loại",
    nameEn: "Metal & Steel",
    tagline: "Thay sơn dung môi bằng hệ nước ít mùi, thân thiện môi trường và loại bỏ rủi ro cháy nổ khi thi công trong nhà máy.",
    manifesto:
      "Khách hàng chuyển sang hệ nước chủ yếu để thay dung môi — vì mùi, VOC và rủi ro cháy nổ trong xưởng. Lotus đề xuất hệ tương đương cấp chống ăn mòn để việc chuyển đổi không phải làm lại.",
    image: catMetal,
    imageTone: "dark",
    accent: "#4a5560",
    signature: "Kim loại",
    description:
      "Dành cho nhà thầu kết cấu thép và công trình công nghiệp cần hệ chống rỉ đúng môi trường lắp đặt — trong xưởng, ngoài trời hay ven biển. Lotus tư vấn hệ theo vị trí công trình để giảm rủi ro bảo hành.",
    applications: [
      "Kết cấu thép nhà xưởng, kho",
      "Công trình ven biển, môi trường mặn",
      "Thiết bị cơ khí, khung máy",
      "Lam nhôm và mặt tiền kim loại",
    ],
    specs: [
      { label: "Cấp chống ăn mòn", value: "Trong xưởng / ngoài trời / ven biển" },
      { label: "Bền màu ngoài trời", value: "QUV 1000h" },
      { label: "Gốc", value: "Water-based (Acrylic, PU) 1K / 2K" },
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
      { image: catMetal, title: "Nhà máy ven biển", meta: "Hệ sơn chống rỉ cho môi trường mặn" },
      { image: project3, title: "Trần kim loại thương mại", meta: "Hoàn thiện matte kiểm soát" },
    ],
    faq: [
      { q: "Hệ nước có đủ cứng và đủ bền để thay hệ dung môi không?", a: "Có. Với đúng hệ phủ và đúng quy trình, hệ nước Lotus đủ cho yêu cầu độ bóng, độ bền và ngoại quan trong thi công và bàn giao thực tế." },
      { q: "Tôi đang dùng hệ dung môi, muốn chuyển sang hệ nước thì bắt đầu từ đâu?", a: "Gửi thông tin về quy trình hiện tại, loại dung môi đang dùng và yêu cầu chuyển đổi. Lotus đề xuất lộ trình chuyển đổi từng bước để không ảnh hưởng tiến độ công trình." },
      { q: "Lotus có tư vấn đúng hệ theo từng loại nền và yêu cầu hoàn thiện không?", a: "Có. Lotus khảo sát vị trí công trình và môi trường vận hành để chọn đúng cấp chống ăn mòn. Gửi mô tả môi trường, Lotus đề xuất hệ và tổng DFT cần đạt." },
      { q: "Nếu tôi làm công trình hoặc chạy sản xuất, Lotus có hỗ trợ quy trình và hồ sơ kỹ thuật không?", a: "Có. Lotus cung cấp quy trình thi công, định mức tiêu thụ, TDS, MSDS và báo cáo kiểm nghiệm cho hồ sơ thầu và biên bản nghiệm thu." },
      { q: "Tôi nên gửi những gì qua Zalo để được tư vấn nhanh và đúng hơn?", a: "Gửi ảnh bề mặt hiện trạng, loại vật liệu nền, yêu cầu hoàn thiện và quy mô công việc. Lotus phản hồi hướng hệ sơn phù hợp trước khi báo giá." },
    ],
  },
  {
    id: "metal-wood",
    index: "03",
    name: "Sơn giả gỗ trên kim loại",
    nameEn: "Wood-grain on Metal",
    tagline: "Lên vân đẹp, hạn chế bạc màu ngoài trời và đỡ phải sửa lại sau thi công.",
    manifesto:
      "Chủ đầu tư không quan tâm bạn dùng bao nhiêu công đoạn. Họ chỉ nhìn vân gỗ sau một mùa nắng. Lotus chọn hệ đủ lớp để vân giữ tông lâu dài.",
    image: catMetalWood,
    imageTone: "light",
    accent: "#8a5a36",
    signature: "Gỗ kim loại",
    description:
      "Dành cho nhà thầu cần ra vân gỗ thẩm mỹ trên sắt và nhôm. Lotus tư vấn hệ theo vị trí công trình (trong nhà, ban công, ngoài trời) để vân giữ tông lâu dài và giảm rủi ro bàn giao.",
    applications: [
      "Cổng sắt, hàng rào, lam che nắng",
      "Cửa thép vân gỗ mặt tiền",
      "Lan can, trần kim loại trang trí",
      "Hạng mục ngoài trời và bán ngoài trời",
    ],
    specs: [
      { label: "Vân ở khoảng nhìn thật", value: "Khó phân biệt với gỗ" },
      { label: "Kháng UV ngoài trời", value: "QUV 1500h" },
      { label: "Gốc", value: "Water-based (Acrylic, PU) 1K / 2K" },
      { label: "Phù hợp", value: "Nhà thầu cần đúng hệ ngay từ đầu" },
    ],
    process: [
      { step: "I", title: "Xử lý nền kim loại", body: "Tẩy dầu, chuyển hóa bề mặt và sơn lót epoxy chống gỉ — bỏ qua bước này là phải sửa cả mặt." },
      { step: "II", title: "Nền màu gỗ", body: "Tông màu gỗ phun đều, làm cơ sở cho vân lên đúng sắc độ." },
      { step: "III", title: "Tạo vân", body: "Lăn vân chuyên dụng hoặc in chuyển nhiệt theo mẫu gỗ khách chọn." },
      { step: "IV", title: "Lớp phủ hoàn thiện", body: "Phủ trong PU kháng UV, giữ vân không bạc tông khi ra ngoài trời." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Metal Primer G-200", rate: "8–10 m²/L", coats: "01" },
      { layer: "Nền màu", product: "Lotus Wood Base", rate: "6–8 m²/L", coats: "01" },
      { layer: "Tạo vân", product: "Lotus Grain Stain S-10", rate: "12–15 m²/L", coats: "01" },
      { layer: "Lớp phủ hoàn thiện", product: "Lotus Clear Topcoat UV", rate: "10–12 m²/L", coats: "01" },
    ],
    projects: [
      { image: catMetalWood, title: "Lam nhôm mặt tiền resort", meta: "Vân teak, hệ ngoài trời" },
      { image: project2, title: "Mặt tiền tòa nhà văn phòng", meta: "Giả gỗ trên nhôm anode" },
      { image: project1, title: "Cửa thép villa ven biển", meta: "Vân walnut, hệ kháng UV" },
    ],
    faq: [
      { q: "Hệ nước có đủ cứng và đủ bền để thay hệ dung môi không?", a: "Có. Với đúng hệ phủ và đúng quy trình, hệ nước Lotus đủ cho yêu cầu độ bóng, độ bền và ngoại quan trong thi công và bàn giao thực tế." },
      { q: "Tôi đang dùng hệ dung môi, muốn chuyển sang hệ nước thì bắt đầu từ đâu?", a: "Gửi thông tin về quy trình hiện tại, loại dung môi đang dùng và yêu cầu chuyển đổi. Lotus đề xuất lộ trình chuyển đổi từng bước để vân giữ tông và không ảnh hưởng tiến độ." },
      { q: "Lotus có tư vấn đúng hệ theo từng loại nền và yêu cầu hoàn thiện không?", a: "Có. Lotus khảo sát loại kim loại và vị trí công trình để chọn hệ đủ lớp. Gửi ảnh hiện trạng, Lotus tư vấn hệ giảm rủi ro bạc màu." },
      { q: "Nếu tôi làm công trình hoặc chạy sản xuất, Lotus có hỗ trợ quy trình và hồ sơ kỹ thuật không?", a: "Có. Lotus cung cấp quy trình thi công, định mức tiêu thụ, TDS, MSDS và báo cáo kiểm nghiệm cho hồ sơ thầu và biên bản nghiệm thu." },
      { q: "Tôi nên gửi những gì qua Zalo để được tư vấn nhanh và đúng hơn?", a: "Gửi ảnh bề mặt hiện trạng, loại vật liệu nền, yêu cầu hoàn thiện và quy mô công việc. Lotus phản hồi hướng hệ sơn phù hợp trước khi báo giá." },
    ],
  },
  {
    id: "cement-wood",
    index: "04",
    name: "Sơn giả gỗ trên tấm xi măng",
    nameEn: "Wood-grain on Cement",
    tagline: "Chọn đúng hệ ngay từ đầu để bề mặt đã lên vân không phải làm lại.",
    manifesto:
      "Tấm xi măng có độ kiềm cao nên lót kháng kiềm là lớp bắt buộc — bỏ lớp này thì sớm muộn vân cũng bong. Lotus tư vấn hệ đủ lớp để màng sơn bám chắc lâu dài.",
    image: catCementWood,
    imageTone: "light",
    accent: "#7a6347",
    signature: "Xi măng",
    description:
      "Dành cho nhà thầu cần ra vân gỗ trên Smartboard, Duraflex và tấm cement composite. Lotus tư vấn hệ lót kháng kiềm và quy trình thi công để vân không bong sau vài tháng.",
    applications: [
      "Ốp tường, trần ngoại thất",
      "Mặt tiền nhà phố vân gỗ",
      "Lam trang trí, hàng rào cement",
      "Sàn ban công, hành lang khô",
    ],
    specs: [
      { label: "Độ bám trên cement", value: "Cao — qua lót kháng kiềm" },
      { label: "Chống thấm", value: "Ngâm 240h không bong" },
      { label: "Gốc", value: "Water-based (Acrylic, PU) 1K / 2K" },
      { label: "Phù hợp", value: "Hạng mục ngoại thất nhà thầu" },
    ],
    process: [
      { step: "I", title: "Xử lý tấm cement", body: "Vệ sinh, mài phẳng mối nối và lót kháng kiềm — bước bắt buộc để vân không bong sau vài tháng." },
      { step: "II", title: "Nền màu gỗ", body: "Màu nền đồng đều, làm nền chuẩn cho thao tác vẽ vân." },
      { step: "III", title: "Lăn vân", body: "Con lăn chuyên dụng tạo vân theo mẫu gỗ khách chọn, kiểm soát hướng và mật độ." },
      { step: "IV", title: "Lớp phủ hoàn thiện", body: "Acrylic UV khoá vân, chống bám bẩn và giữ tông ngoài trời." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Alkali Primer", rate: "8–10 m²/L", coats: "01" },
      { layer: "Nền màu", product: "Lotus Wood Base Acrylic", rate: "8–10 m²/L", coats: "01" },
      { layer: "Tạo vân", product: "Lotus Grain Roller Stain", rate: "10–14 m²/L", coats: "01" },
      { layer: "Lớp phủ hoàn thiện", product: "Lotus Acrylic Topcoat UV", rate: "10–12 m²/L", coats: "02" },
    ],
    projects: [
      { image: catCementWood, title: "Ốp tường Smartboard villa", meta: "Vân teak, hệ ngoại thất" },
      { image: project1, title: "Mặt tiền nhà phố", meta: "Cement vân walnut" },
      { image: project2, title: "Hệ lam trang trí", meta: "Cement composite vân oak" },
    ],
    faq: [
      { q: "Hệ nước có đủ cứng và đủ bền để thay hệ dung môi không?", a: "Có. Với đúng hệ phủ và đúng quy trình, hệ nước Lotus đủ cho yêu cầu độ bóng, độ bền và ngoại quan trong thi công và bàn giao thực tế." },
      { q: "Tôi đang dùng hệ dung môi, muốn chuyển sang hệ nước thì bắt đầu từ đâu?", a: "Gửi thông tin về quy trình hiện tại, loại dung môi đang dùng và yêu cầu chuyển đổi. Lotus đề xuất lộ trình chuyển đổi từng bước để vân không bong và không ảnh hưởng tiến độ." },
      { q: "Lotus có tư vấn đúng hệ theo từng loại nền và yêu cầu hoàn thiện không?", a: "Có. Lotus khảo sát loại tấm cement và độ ẩm nền để chọn hệ lót kháng kiềm phù hợp. Gửi ảnh hiện trạng, Lotus tư vấn hệ giảm rủi ro bong." },
      { q: "Nếu tôi làm công trình hoặc chạy sản xuất, Lotus có hỗ trợ quy trình và hồ sơ kỹ thuật không?", a: "Có. Lotus cung cấp quy trình thi công, định mức tiêu thụ, TDS, MSDS và báo cáo kiểm nghiệm cho hồ sơ thầu và biên bản nghiệm thu." },
      { q: "Tôi nên gửi những gì qua Zalo để được tư vấn nhanh và đúng hơn?", a: "Gửi ảnh bề mặt hiện trạng, loại vật liệu nền, yêu cầu hoàn thiện và quy mô công việc. Lotus phản hồi hướng hệ sơn phù hợp trước khi báo giá." },
    ],
  },
  {
    id: "composite",
    index: "05",
    name: "Sơn nhựa / composite",
    nameEn: "Plastic & Composite",
    tagline: "Bề mặt đồng đều hơn, dễ giữ chuẩn ngoại quan trên dây chuyền sản xuất.",
    manifesto:
      "Một mẻ sơn trượt bám dính trên dây chuyền có thể làm hỏng cả lô xuất khẩu. Lotus đề xuất hệ theo đúng loại nhựa để đạt cross-cut 4B-5B và ngoại quan đồng đều theo tiêu chuẩn Buyer.",
    image: catComposite,
    imageTone: "light",
    accent: "#3d4a4a",
    signature: "Nhựa",
    description:
      "Dành cho nhà máy sản xuất nhựa kỹ thuật và composite xuất khẩu cần bám dính ổn định trên nền khó. Lotus tư vấn hệ theo loại nhựa (PP / PE / ABS / PC) và quy trình xử lý bề mặt để đạt tiêu chuẩn QC khách.",
    applications: [
      "Sản phẩm nhựa kỹ thuật xuất khẩu",
      "Linh kiện composite, FRP, fiberglass",
      "Vỏ thiết bị y tế, điện tử",
      "Chi tiết nội thất ô tô, xe máy",
    ],
    specs: [
      { label: "Độ bám", value: "Cấp 5B (cross-cut)" },
      { label: "Ngoại quan", value: "Đồng đều trên dây chuyền" },
      { label: "Gốc", value: "Water-based (Acrylic, PU) 1K / 2K" },
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
      { q: "Hệ nước có đủ cứng và đủ bền để thay hệ dung môi không?", a: "Có. Với đúng hệ phủ và đúng quy trình, hệ nước Lotus đủ cho yêu cầu độ bóng, độ bền và ngoại quan trong thi công và bàn giao thực tế." },
      { q: "Tôi đang dùng hệ dung môi, muốn chuyển sang hệ nước thì bắt đầu từ đâu?", a: "Gửi thông tin về quy trình hiện tại, loại nhựa và yêu cầu chuyển đổi. Lotus đề xuất lộ trình chuyển đổi từng bước để đạt tiêu chuẩn QC và không ảnh hưởng tiến độ." },
      { q: "Lotus có tư vấn đúng hệ theo từng loại nền và yêu cầu hoàn thiện không?", a: "Có. Lotus khảo sát loại nhựa (PP / PE / ABS / PC) và quy trình xử lý bề mặt để chọn hệ đạt cross-cut. Gửi loại nhựa cụ thể, Lotus tư vấn quy trình." },
      { q: "Nếu tôi làm công trình hoặc chạy sản xuất, Lotus có hỗ trợ quy trình và hồ sơ kỹ thuật không?", a: "Có. Lotus cung cấp quy trình thi công, định mức tiêu thụ, TDS, MSDS và báo cáo kiểm nghiệm cho hồ sơ thầu và biên bản nghiệm thu." },
      { q: "Tôi nên gửi những gì qua Zalo để được tư vấn nhanh và đúng hơn?", a: "Gửi ảnh bề mặt hiện trạng, loại vật liệu nền, yêu cầu hoàn thiện và quy mô công việc. Lotus phản hồi hướng hệ sơn phù hợp trước khi báo giá." },
    ],
  },
  {
    id: "floor",
    index: "06",
    name: "Sơn sàn",
    nameEn: "Industrial Flooring",
    tagline: "Đúng hệ theo nền và tải trọng để giảm nguy cơ bong tróc khi đưa vào sử dụng.",
    manifesto:
      "Chọn sai hệ sàn — giá rẻ lúc đầu, nhưng trả giá sau nghiệm thu khi sàn bong, xuống cấp, hoặc phải sửa cả khu vực vận hành. Lotus khảo sát hiện trạng để chọn hệ giảm rủi ro bong tróc.",
    image: catFloor,
    imageTone: "light",
    accent: "#525a55",
    signature: "Sàn",
    description:
      "Dành cho đơn vị thầu thi công sàn công nghiệp cần chọn đúng hệ theo nền hiện trạng, tải trọng, hóa chất và độ ẩm. Lotus khảo sát cường độ bê tông và độ ẩm để đề xuất hệ giảm rủi ro bong tróc sau bàn giao.",
    applications: [
      "Nhà xưởng sản xuất, kho logistics",
      "Khu vực xe nâng, tải trọng nặng",
      "Phòng sạch, phòng thí nghiệm",
      "Showroom, khu vực kỹ thuật, parking",
    ],
    specs: [
      { label: "Chịu tải", value: "Đi bộ → Xe nâng nặng" },
      { label: "Kháng hóa chất", value: "Axit / kiềm trung bình → cao" },
      { label: "Gốc", value: "Water-based (Acrylic, PU) 1K / 2K" },
      { label: "Phù hợp", value: "Thầu thi công sàn công nghiệp" },
    ],
    process: [
      { step: "I", title: "Khảo sát hiện trạng", body: "Kiểm tra cường độ bê tông, độ ẩm, tải trọng vận hành — quyết định hệ phủ phù hợp." },
      { step: "II", title: "Mài và lót thấm", body: "Mài kim cương mở mao mạch, primer epoxy thấm sâu để liên kết với nền bê tông." },
      { step: "III", title: "Trung gian / bả vá", body: "Bả khuyết tật và cào đều — tạo mặt phẳng cho lớp phủ đạt chiều dày thiết kế." },
      { step: "IV", title: "Phủ hoàn thiện", body: "Tự san phẳng hoặc lăn phủ theo tải trọng, môi trường và yêu cầu thẩm mỹ." },
    ],
    system: [
      { layer: "Lớp lót", product: "Lotus Floor Primer EP", rate: "5–7 m²/L", coats: "01" },
      { layer: "Trung gian", product: "Lotus Mortar Coat", rate: "tuỳ thiết kế", coats: "01" },
      { layer: "Phủ", product: "Lotus Self-Level Epoxy", rate: "1 mm = 1.5 kg/m²", coats: "01" },
      { layer: "Lớp phủ hoàn thiện", product: "Lotus PU Floor Matte", rate: "8–10 m²/L", coats: "01" },
    ],
    projects: [
      { image: catFloor, title: "Showroom thương mại", meta: "Epoxy tự san phẳng 2 mm" },
      { image: project3, title: "Khu vực vận hành nhà máy", meta: "PU matte chịu hóa chất" },
      { image: project2, title: "Kho logistics tải nặng", meta: "Epoxy chịu xe nâng" },
    ],
    faq: [
      { q: "Hệ nước có đủ cứng và đủ bền để thay hệ dung môi không?", a: "Có. Với đúng hệ phủ và đúng quy trình, hệ nước Lotus đủ cho yêu cầu độ bóng, độ bền và ngoại quan trong thi công và bàn giao thực tế." },
      { q: "Tôi đang dùng hệ dung môi, muốn chuyển sang hệ nước thì bắt đầu từ đâu?", a: "Gửi thông tin về quy trình hiện tại, loại dung môi đang dùng và yêu cầu chuyển đổi. Lotus đề xuất lộ trình chuyển đổi từng bước để không ảnh hưởng tiến độ thi công." },
      { q: "Lotus có tư vấn đúng hệ theo từng loại nền và yêu cầu hoàn thiện không?", a: "Có. Lotus khảo sát cường độ bê tông, độ ẩm và tải trọng để chọn hệ phù hợp. Gửi thông tin hiện trạng, Lotus đề xuất hệ giảm rủi ro bong tróc." },
      { q: "Nếu tôi làm công trình hoặc chạy sản xuất, Lotus có hỗ trợ quy trình và hồ sơ kỹ thuật không?", a: "Có. Lotus cung cấp quy trình thi công, định mức tiêu thụ, TDS, MSDS và báo cáo kiểm nghiệm cho hồ sơ thầu và biên bản nghiệm thu." },
      { q: "Tôi nên gửi những gì qua Zalo để được tư vấn nhanh và đúng hơn?", a: "Gửi ảnh bề mặt hiện trạng, loại vật liệu nền, yêu cầu hoàn thiện và quy mô công việc. Lotus phản hồi hướng hệ sơn phù hợp trước khi báo giá." },
    ],
  },
];
