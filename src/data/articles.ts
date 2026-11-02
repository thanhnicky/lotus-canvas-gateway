export interface FAQItem {
  question: string;
  answer: string;
}

export interface SectionContent {
  id: string;
  heading: string;
  paragraphs?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  list?: string[];
  callout?: {
    type: "info" | "warning" | "success";
    title: string;
    text: string;
  };
  steps?: {
    step: string;
    title: string;
    desc: string;
  }[];
}

export interface ArticleData {
  slug: string; // e.g. "son-go-he-nuoc/tieu-chuan-xuat-khau-eu-us"
  category: string;
  categorySlug: string;
  title: string;
  metaDescription: string;
  h1: string;
  publishedAt: string;
  readTime: string;
  quickSummary: string;
  whenToChoose: string[];
  whenNotToChoose: string[];
  lotusRecommendation: string;
  sections: SectionContent[];
  faqs: FAQItem[];
  relatedSlugs: string[];
}

export const ARTICLES: Record<string, ArticleData> = {
  "son-go-he-nuoc/tieu-chuan-xuat-khau-eu-us": {
    slug: "son-go-he-nuoc/tieu-chuan-xuat-khau-eu-us",
    category: "Sơn Gỗ Hệ Nước",
    categorySlug: "son-go-he-nuoc",
    title: "Sơn Hệ Nước Chuẩn Xuất Khẩu Mỹ & EU: Đạt Chuẩn REACH, RoHS, EN71-3 | Lotus",
    metaDescription:
      "Sơn Lotus cung cấp trọn bộ hồ sơ kiểm định quốc tế: Không chì, không Formaldehyde, VOCs siêu thấp, chứng chỉ EN71-3, RoHS, REACH, ASTM F963 đệ trình thầu xuất khẩu. Tải TDS/MSDS gốc.",
    h1: "Giải Pháp Sơn Hệ Nước Đạt Tiêu Chuẩn Xuất Khẩu Mỹ (US) & Châu Âu (EU) Cho Ngành Gỗ & Mỹ Nghệ",
    publishedAt: "22/08/2026",
    readTime: "8 phút đọc",
    quickSummary:
      "Sơn hệ nước Lotus đáp ứng toàn bộ các bộ tiêu chuẩn kiểm định an toàn màng phủ quốc tế khắt khe nhất dành cho đồ gỗ nội ngoại thất và thủ công mỹ nghệ xuất khẩu sang thị trường Châu Âu (EU), Mỹ (US) và Nhật Bản. Sản phẩm đạt chứng chỉ an toàn đồ chơi trẻ em EN 71-3, giới hạn chất độc hại RoHS, danh mục chất có mối quan ngại rất cao REACH (SVHC 240+ chất), đạo luật không khí sạch California Proposition 65 và hàm lượng VOCs < 45 g/L (chuẩn EPA Method 24). Lotus cung cấp đầy đủ hồ sơ đệ trình thầu gồm: TDS, MSDS và Test Report gốc từ SGS / Intertek.",
    whenToChoose: [
      "Nội thất trẻ em, đồ chơi gỗ mầm non, đồ dùng nhà bếp xuất khẩu sang thị trường Mỹ (US) và Châu Âu (EU).",
      "Đơn hàng đồ gỗ xuất khẩu vào các chuỗi bán lẻ quốc tế lớn (IKEA, Walmart, Target, Home Depot) đòi hỏi chứng minh nguồn gốc nguyên liệu xanh.",
      "Dự án đồ thủ công mỹ nghệ, mây tre đan xuất khẩu đòi hỏi không tồn dư hóa chất diệt nấm độc hại.",
    ],
    whenNotToChoose: [
      "Đơn hàng gia công giá rẻ nội địa không có yêu cầu kiểm tra hàm lượng hóa chất hay chỉ số phát thải.",
    ],
    lotusRecommendation:
      "Các nhà máy sản xuất đồ gỗ xuất khẩu nên liên hệ trực tiếp phòng R&D Lotus trước khi ký kết hợp đồng gia công với Buyer. Lotus hỗ trợ cung cấp mẫu sơn đúng tông màu và làm việc cùng SGS/Intertek xuất chứng thư kiểm định mang tên chính xác của dự án nhà máy.",
    sections: [
      {
        id: "tong-quan-rao-can",
        heading: "1. Tổng quan các rào cản kỹ thuật khi xuất khẩu đồ gỗ sang US & EU",
        paragraphs: [
          "Các thị trường phát triển như Bắc Mỹ, Châu Âu và Nhật Bản đang liên tục nâng cao các hàng rào kỹ thuật phi thuế quan (TBT). Lớp phủ bề mặt của đồ gỗ không chỉ đóng vai trò thẩm mỹ mà là yếu tố sống còn quyết định lô hàng có được thông quan hải quan hay bị tịch thu tiêu hủy.",
          "Việc sử dụng sơn PU gốc dung môi truyền thống khiến các nhà máy thường xuyên đối mặt với nguy cơ vượt ngưỡng phát thải VOCs, tồn dư kim loại nặng (Chì, Thủy ngân) hoặc chứa chất làm dẻo Phthalates độc hại.",
        ],
        table: {
          headers: ["Thị trường", "Bộ tiêu chuẩn trọng yếu", "Yêu cầu màng sơn"],
          rows: [
            ["Châu Âu (EU)", "EN 71-3, RoHS, REACH SVHC", "Không thôi nhiễm 19 kim loại nặng, VOCs < 50g/L"],
            ["Hoa Kỳ (US)", "ASTM F963-17, California Prop 65, CPSIA", "Chì tổng số < 90ppm, không chứa Phthalates"],
            ["Nhật Bản (JP)", "JIS K 5600, F☆☆☆☆ Formaldehyde", "Phát thải Formaldehyde < 0.01 mg/m3"],
          ],
        },
      },
      {
        id: "cac-bo-tieu-chuan",
        heading: "2. Chi tiết các bộ tiêu chuẩn quốc tế mà Sơn Lotus đáp ứng",
        paragraphs: [
          "Sơn gỗ hệ nước Lotus được nghiên cứu và chế tạo từ nguồn nhựa nhũ tương Acrylic-PU cao cấp nhập khẩu từ các tập đoàn hóa chất hàng đầu thế giới, cam kết tuân thủ 100% các quy định quốc tế:",
        ],
        list: [
          "EN 71-3 (Tiêu chuẩn an toàn đồ chơi Châu Âu): Kiểm soát giới hạn thôi nhiễm của 19 kim loại nặng độc hại.",
          "RoHS (Chỉ thị hạn chế chất nguy hại): Không chứa Chì, Thủy ngân, Cadimi, Crom hóa trị 6, PBB, PBDE và 4 nhóm chất dẻo Phthalates (DEHP, BBP, DBP, DIBP).",
          "REACH & Danh mục SVHC: Không chứa bất kỳ hợp chất nào trong danh mục 240+ chất có mối quan ngại rất cao vượt quá 0.1% trọng lượng.",
          "California Proposition 65: Đảm bảo an toàn không chứa các chất gây ung thư hay dị tật bẩm sinh theo quy định bang California.",
        ],
      },
      {
        id: "bang-ket-qua-kiem-nghiem",
        heading: "3. Bảng kết quả thử nghiệm thực tế từ SGS & Intertek",
        paragraphs: [
          "Dưới đây là bảng trích xuất các chỉ số kiểm nghiệm thực tế từ các chứng thư thử nghiệm của phòng Lab độc lập:",
        ],
        table: {
          headers: ["Chỉ tiêu kiểm nghiệm", "Phương pháp phân tích", "Giới hạn tối đa", "Kết quả Sơn Lotus", "Kết luận"],
          rows: [
            ["Hàm lượng Chì tổng số (Total Lead)", "CPSC-CH-E1002-08.3 (ICP-OES)", "< 90 ppm", "Không phát hiện (< 2 ppm)", "ĐẠT CHUẨN MỸ"],
            ["Thôi nhiễm Chì (Soluble Lead)", "EN 71-3:2019 + A1:2021", "< 23 mg/kg", "Không phát hiện (< 0.5 mg/kg)", "ĐẠT CHUẨN EU"],
            ["Thôi nhiễm Cadimi (Soluble Cd)", "EN 71-3:2019 + A1:2021", "< 17 mg/kg", "Không phát hiện (< 0.5 mg/kg)", "ĐẠT CHUẨN EU"],
            ["Hợp chất Phthalates (8 nhóm)", "CPSC-CH-C1001-09.4 (GC-MS)", "< 1.000 ppm", "Không phát hiện (< 50 ppm)", "ĐẠT CHUẨN QUỐC TẾ"],
            ["Phát thải Formaldehyde", "EN 717-1 (Chamber method)", "< 0.124 mg/m3 (E1)", "< 0.01 mg/m3 (Chuẩn E0/F4*)", "ĐẠT AN TOÀN CAO NHẤT"],
            ["Hàm lượng VOCs thực tế", "US EPA Method 24", "< 250 g/L", "< 42 g/L", "LEED COMPLIANT"],
          ],
        },
      },
      {
        id: "huong-dan-tds-msds",
        heading: "4. Hướng dẫn khai thác hồ sơ kỹ thuật TDS & MSDS khi đệ trình thầu",
        paragraphs: [
          "Trong hồ sơ chào thầu quốc tế, hai tài liệu bắt buộc phải có là TDS và MSDS:",
          "TDS (Technical Data Sheet): Thể hiện chi tiết định mức tiêu hao lý thuyết, độ dày màng sơn khô DFT, độ bám dính theo ASTM D3359 và độ cứng bút chì ASTM D3363 giúp kỹ sư bảo vệ định mức dự toán trước chủ đầu tư.",
          "MSDS (Material Safety Data Sheet): Bản an toàn hóa chất chuẩn 16 mục của GHS chứng minh thành phần thân thiện môi trường, không bắt cháy lan phục vụ kiểm toán nhà xưởng và thủ tục mở tờ khai hải quan.",
        ],
      },
      {
        id: "quy-trinh-de-trinh",
        heading: "5. Quy trình 4 bước đệ trình hồ sơ vật liệu sơn cho Buyer quốc tế",
        steps: [
          {
            step: "Bước 1",
            title: "Khảo sát yêu cầu của Buyer",
            desc: "Tiếp nhận bộ tiêu chí kỹ thuật (Technical Specs Sheet) và thị trường xuất khẩu mục tiêu của đối tác.",
          },
          {
            step: "Bước 2",
            title: "Lotus đề xuất cấu hình hệ sơn",
            desc: "Cung cấp mẫu sơn thực tế để nhà máy phun thử nghiệm trên phôi gỗ của đơn hàng.",
          },
          {
            step: "Bước 3",
            title: "Gửi mẫu kiểm định Lab độc lập",
            desc: "Lotus đồng hành cùng nhà máy gửi mẫu phôi đã sơn hoàn thiện đến SGS/Intertek.",
          },
          {
            step: "Bước 4",
            title: "Cấp bộ hồ sơ nghiệm thu chính thức",
            desc: "Bàn giao chứng thư kiểm định kèm TDS/MSDS có đóng dấu xác nhận phục vụ đệ trình Buyer và lưu hồ sơ hải quan.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Hồ sơ kiểm định của Sơn Lotus có được các Buyer khó tính tại Mỹ và Châu Âu chấp nhận không?",
        answer:
          "Hoàn toàn được chấp nhận. Các chứng nhận thử nghiệm của Lotus được thực hiện bởi các tập đoàn kiểm định toàn cầu như SGS và Intertek, có giá trị pháp lý quốc tế.",
      },
      {
        question: "Sơn hệ nước Lotus có chứa Formaldehyde hoặc kim loại nặng độc hại không?",
        answer:
          "Hoàn toàn không. Kết quả phân tích sắc ký khí và quang phổ phát xạ ICP chứng minh màng sơn Lotus không phát hiện Formaldehyde, Chì, Thủy ngân, Cadimi hay các hợp chất Phthalates gây hại.",
      },
      {
        question: "Lotus có hỗ trợ xuất chứng thư kiểm định đứng tên riêng của nhà máy chúng tôi không?",
        answer:
          "Có. Đối với các đơn hàng dự án hoặc hợp đồng cung ứng dài hạn, Lotus phối hợp với tổ chức kiểm định quốc tế gửi mẫu thử và phát hành chứng thư mang tên chính xác của Quý công ty.",
      },
    ],
    relatedSlugs: [
      "son-go-he-nuoc",
      "chuyen-doi-he-nuoc",
      "so-sanh/son-go-he-nuoc-vs-son-pu",
      "loi-thi-cong/xu-long-go",
    ],
  },

  "son-go-he-nuoc": {
    slug: "son-go-he-nuoc",
    category: "Sơn Gỗ Hệ Nước",
    categorySlug: "son-go-he-nuoc",
    title: "Sơn Gỗ Hệ Nước Cao Cấp: Bền Màu, Nhanh Xả Nhám, Chuẩn Xuất Khẩu | Sơn Lotus",
    metaDescription:
      "Sơn gỗ hệ nước Lotus dành cho xưởng nội thất & nhà máy xuất khẩu. Khô nhanh 45 phút, độ cứng cao (HB-2H), không ố vàng, đạt chuẩn an toàn EN71-3, RoHS & REACH. Nhận mẫu test xưởng miễn phí.",
    h1: "Sơn Gỗ Hệ Nước Công Nghiệp: Giải Pháp Sơn An Toàn, Giữ Vân Tự Nhiên & Chuẩn Xuất Khẩu",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn gỗ hệ nước là giải pháp sơn phủ gốc nước ứng dụng công nghệ nhựa Pure Acrylic hoặc Polyurethane phân tán trong nước (PUD), được thiết kế để thay thế hoàn toàn sơn PU gốc dung môi truyền thống. Sơn đạt độ cứng màng sơn từ H đến 2H (chuẩn ASTM D3363), thời gian khô xả nhám 45 - 60 phút, hàm lượng VOC cực thấp (< 50g/L), không phát thải mùi cay gắt và đáp ứng tuyệt đối các tiêu chuẩn xuất khẩu gắt gao như EN71-3, RoHS và REACH.",
    whenToChoose: [
      "Đơn hàng nội thất trẻ em, đồ chơi gỗ mầm non, đồ dùng nhà bếp xuất khẩu sang thị trường Mỹ (US) và Châu Âu (EU).",
      "Các xưởng thi công nội thất liền tường (fit-out) tại công trình chung cư, văn phòng, khách sạn đòi hỏi sơn dặm vá tại chỗ không mùi độc hại.",
      "Nhà máy gỗ muốn đạt chứng chỉ công trình xanh (LEED) và giảm thiểu chi phí rủi ro PCCC.",
      "Sản phẩm gỗ sáng màu (Gỗ Sồi, Tần Bì, Thông, Maple) cần giữ màu gỗ tự nhiên vĩnh viễn không bị ngả vàng theo thời gian.",
    ],
    whenNotToChoose: [
      "Phôi gỗ thô có độ ẩm vượt quá 18% chưa qua sấy lò đạt chuẩn.",
      "Thi công trong phòng phun hoàn toàn kín gió, không có quạt lưu thông không khí ở độ ẩm môi trường > 90% mà không có thiết bị sấy hỗ trợ.",
    ],
    lotusRecommendation:
      "Đối với các loại phôi gỗ có hàm lượng dầu, nhựa hoặc tannin cao (như Gõ Đỏ, Teak, Óc Chó), bắt buộc phải thi công 1 lớp Sơn Lót Khóa Nhựa / Ngăn Tannin chuyên dụng của Lotus trước khi tiến hành tạo màu để tránh hiện tượng loang dầu.",
    sections: [
      {
        id: "son-go-he-nuoc-la-gi",
        heading: "1. Sơn gỗ hệ nước là gì và cơ chế tạo màng trên thớ gỗ",
        paragraphs: [
          "Sơn gỗ hệ nước là hệ sơn phủ sử dụng nước tinh khiết làm môi trường phân tán chính thay thế cho các dung môi hữu cơ bay hơi (xăng thơm, butanol, xylene, toluene).",
          "Hệ sơn gỗ cao cấp Lotus ứng dụng công nghệ hạt nhựa tự liên kết chéo (Self-Crosslinking Acrylic-PU Emulsion). Khi phun lên gỗ, nước bay hơi kéo các hạt polymer lại gần nhau và tạo mạng lưới liên kết 3D đanh cứng, dẻo dai và kháng hóa chất vượt trội.",
        ],
      },
      {
        id: "bang-thong-so-ky-thuat",
        heading: "2. Bảng thông số kỹ thuật cơ lý tính tiêu chuẩn",
        table: {
          headers: ["Chỉ tiêu kỹ thuật", "Phương pháp thử", "Kết quả Lotus 1K", "Kết quả Lotus 2K", "Ý nghĩa xưởng"],
          rows: [
            ["Độ cứng màng sơn", "ASTM D3363", "H", "2H", "Chống cọ xước mặt bàn ăn, tủ bếp"],
            ["Độ bám dính trên gỗ", "ASTM D3359", "5B (100% không tróc)", "5B (100% không tróc)", "Màng sơn không bong tróc"],
            ["Hàm lượng VOCs", "EPA Method 24", "< 45 g/L", "< 60 g/L", "An toàn sức khỏe thợ sơn"],
            ["Thời gian khô xả nhám", "30°C, có gió", "45 - 60 phút", "40 - 50 phút", "Xả nhám tơi mịn không bết"],
            ["Độ ố vàng sau UV (500h)", "ASTM G154", "ΔE < 1.2 (Không ngả)", "ΔE < 1.0 (Không ngả)", "Giữ trọn vân sồi, ash sáng"],
          ],
        },
      },
      {
        id: "quy-trinh-thi-cong",
        heading: "3. Quy trình 3 bước sơn gỗ chuẩn xưởng nội thất",
        steps: [
          {
            step: "Bước 1",
            title: "Sơn lót xả nhám nhanh (Sanding Sealer)",
            desc: "Phun 1-2 lớp lót Lotus Sanding Sealer (WFT 80-100µm). Khô sau 45-60 phút, dùng nhám P320-P400 chà nhẹ cho bột trắng tơi phẳng mịn.",
          },
          {
            step: "Bước 2",
            title: "Lên màu tôn vân tự nhiên (Wood Stain / Dye Stain)",
            desc: "Lau màu hoặc phun màu Lotus Wood Stain thấm sâu vào từng thớ gỗ làm nổi bật tim vân 3D tự nhiên.",
          },
          {
            step: "Bước 3",
            title: "Phủ bảo vệ hoàn thiện (Acrylic/PU Topcoat)",
            desc: "Phun 1-2 lớp phủ bóng (Bóng 90%, Mờ 50% hoặc Mờ 100%) bảo vệ chống trầy xước và kháng ố nước chè, cà phê 24h.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Sơn gỗ hệ nước có làm xù lông gỗ không?",
        answer:
          "Có thể gây xù nhẹ ở lớp lót đầu tiên do cellulose hút ẩm. Tuy nhiên, sử dụng sơn lót xả nhanh Lotus và kỹ thuật xả nhám P320 sẽ triệt tiêu hoàn toàn xù lông ở các lớp sau.",
      },
      {
        question: "Thời gian khô để xả nhám của sơn lót gỗ Lotus là bao lâu?",
        answer:
          "Trong điều kiện nhiệt độ 28-32°C và có quạt gió lưu thông, màng sơn lót Lotus khô xả nhám được sau 45 - 60 phút.",
      },
    ],
    relatedSlugs: [
      "son-go-he-nuoc/tieu-chuan-xuat-khau-eu-us",
      "so-sanh/son-go-he-nuoc-vs-son-pu",
      "loi-thi-cong/xu-long-go",
      "chuyen-doi-he-nuoc",
    ],
  },

  "son-kim-loai-he-nuoc": {
    slug: "son-kim-loai-he-nuoc",
    category: "Sơn Kim Loại Hệ Nước",
    categorySlug: "son-kim-loai-he-nuoc",
    title: "Sơn Kim Loại Hệ Nước: Bám Dính Trực Tiếp Mạ Kẽm, Thép, Inox | Sơn Lotus",
    metaDescription:
      "Sơn kim loại hệ nước chống rỉ 1K & 2K Lotus. Bám dính trực tiếp trên sắt mạ kẽm, inox, kết cấu thép không cần lót etchant. Kháng muối biển 720h, triệt tiêu nguy cơ cháy nổ xưởng PCCC.",
    h1: "Sơn Kim Loại Hệ Nước Đa Năng: Chống Rỉ Vượt Trội, Bám Dính Trực Tiếp Trên Thép & Mạ Kẽm",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn kim loại hệ nước Lotus là hệ sơn 1 thành phần hoặc 2 thành phần gốc acrylic biến tính, có khả năng bám dính trực tiếp trên bề mặt khó bám như thép mạ kẽm, nhôm, inox mà không cần sơn lót ăn mòn (etching primer). Sơn có hàm lượng VOC cực thấp, không mùi dung môi và đạt khả năng kháng muối trên 720 giờ (ASTM B117), độ bám dính 5B.",
    whenToChoose: [
      "Cửa cổng, hàng rào, ống thép hộp mạ kẽm nhúng nóng hoặc mạ điện phân.",
      "Kết cấu thép nhà xưởng sản xuất cần nghiệm thu PCCC nghiêm ngặt.",
      "Sản phẩm cơ khí chính xác xuất khẩu sang thị trường Châu Âu / Mỹ.",
    ],
    whenNotToChoose: [
      "Bề mặt kim loại chưa tẩy sạch dầu mỡ chống rỉ bảo quản của nhà máy thép.",
      "Bề mặt thép rỉ sét dạng vảy giòn chưa được đánh cước sạch đạt chuẩn St 2.",
    ],
    lotusRecommendation:
      "Khi thi công trên ống thép mạ kẽm mới xuất xưởng, bắt buộc phải dùng giẻ lau tẩm cồn hoặc dung dịch tẩy nhờn gốc kiềm nhẹ để loại bỏ hoàn toàn lớp dầu mỡ bảo vệ trước khi phun sơn.",
    sections: [
      {
        id: "co-che-bam-dinh",
        heading: "1. Cơ chế bám dính hóa học trực tiếp Direct-To-Metal (DTM)",
        paragraphs: [
          "Sơn kim loại Lotus ứng dụng nhựa Acrylic phân tán nước chứa các nhóm chức Carboxyl và Phosphate hoạt hóa cao, tạo liên kết phối trí vững chắc với ion kim loại bề mặt (Zn2+, Fe2+, Al3+) mà không cần xử lý axit ăn mòn.",
        ],
      },
      {
        id: "bang-tieu-chuan-kim-loai",
        heading: "2. Bảng chỉ tiêu cơ lý tính & chống ăn mòn ISO 12944",
        table: {
          headers: ["Tiêu chuẩn", "Phương pháp", "Kết quả Lotus 1K", "Kết quả Lotus 2K", "Ứng dụng"],
          rows: [
            ["Độ bám dính ô cờ", "ASTM D3359", "Điểm 5B (Không tróc)", "Điểm 5B (Không tróc)", "Sơn trực tiếp kẽm, inox"],
            ["Kháng sương muối", "ASTM B117", "> 500 giờ (C3)", "> 1000 giờ (C4)", "Chống rỉ kết cấu thép ngoài trời"],
            ["Độ bền va đập", "ASTM D2794", "> 50 kg.cm", "> 60 kg.cm", "Không nứt khi lắp dựng dầm kèo"],
            ["Kháng UV thời tiết", "ASTM G154 (1000h)", "Độ bóng > 85%, ΔE < 1.5", "Độ bóng > 90%, ΔE < 1.0", "Màu sắc bền 3-5 năm"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Sơn kim loại hệ nước có bị rỉ sét ngược (Flash Rust) khi mới phun không?",
        answer:
          "Không. Sơn kim loại Lotus tích hợp phụ gia kháng rỉ flash-rust tức thì, ngăn chặn hiện tượng oxy hóa kim loại trong suốt giai đoạn nước bay hơi.",
      },
      {
        question: "Sơn hệ nước có sơn trực tiếp lên sắt mạ kẽm được không?",
        answer:
          "Được. Dòng sơn Lotus Metal Direct-to-Metal bám dính đạt chuẩn 5B trực tiếp lên kẽm không cần sơn lót tạo nhám axit.",
      },
    ],
    relatedSlugs: [
      "son-kim-loai-he-nuoc/ket-cau-thep",
      "son-kim-loai-he-nuoc/nhom-inox",
      "so-sanh/son-kim-loai-he-nuoc-vs-he-dau",
      "loi-thi-cong/bong-troc-son-ma-kem",
    ],
  },

  "son-kim-loai-he-nuoc/ket-cau-thep": {
    slug: "son-kim-loai-he-nuoc/ket-cau-thep",
    category: "Sơn Kim Loại Hệ Nước",
    categorySlug: "son-kim-loai-he-nuoc",
    title: "Sơn Kết Cấu Thép Hệ Nước: Chống Ăn Mòn ISO 12944, Chuẩn PCCC | Lotus",
    metaDescription:
      "Sơn kết cấu thép hệ nước Lotus bảo vệ dầm kèo, nhà tiền chế. Khô nhanh, chống rỉ muối biển C3-C4, không bắt cháy lan, triệt tiêu 100% mùi độc hại trong xưởng kín.",
    h1: "Sơn Kết Cấu Thép Hệ Nước: Giải Pháp Bảo Vệ Chống Ăn Mòn & Đạt Chuẩn PCCC Cho Nhà Xưởng",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn kết cấu thép hệ nước Lotus đáp ứng tiêu chuẩn chống ăn mòn môi trường ISO 12944 (C3 - C4 Medium/High), có điểm chớp cháy cao > 93°C (không bắt cháy lan), loại bỏ hoàn toàn mùi dung môi độc hại trong không gian nhà xưởng kín và cho phép rút ngắn 40% thời gian thi công lắp dựng nhờ tốc độ khô nhanh.",
    whenToChoose: [
      "Nhà xưởng công nghiệp có yêu cầu khắt khe về thẩm duyệt thiết kế PCCC và giới hạn phát thải khí hữu cơ VOCs.",
      "Dự án gia công chế tạo kết cấu thép xuất khẩu sang Bắc Mỹ và Châu Âu.",
      "Thi công sơn bảo dưỡng kết cấu dầm mái trực tiếp tại các nhà xưởng đang vận hành sản xuất thực phẩm, may mặc.",
    ],
    whenNotToChoose: [
      "Kết cấu dầm thép ngâm liên tục dưới nước biển sâu hoặc chôn ngầm trong đất axit cao.",
    ],
    lotusRecommendation:
      "Bố trí hệ thống quạt hút đẩy gió dọc theo chiều dài của dầm thép với vận tốc gió bề mặt đạt tối thiểu 0.8 m/s để dầm thép khô đanh ráo tay sau 45 - 60 phút.",
    sections: [
      {
        id: "thach-thuc-pccc",
        heading: "1. Thách thức PCCC và an toàn môi trường trong sơn kết cấu thép",
        paragraphs: [
          "Quy chuẩn mới QCVN 06:2022/BXD siết chặt việc lưu trữ và sử dụng dung môi dễ cháy trong nhà máy. Sơn kết cấu thép hệ nước Lotus có điểm chớp cháy > 93°C, không bắt cháy lan và không phát sinh khói độc hại.",
        ],
      },
      {
        id: "bang-iso-12944",
        heading: "2. Bảng phân cấp chống ăn mòn ISO 12944 của Sơn Lotus",
        table: {
          headers: ["Cấp độ", "Môi trường", "Cấu hình hệ sơn Lotus", "Độ dày DFT", "Độ bền"],
          rows: [
            ["C2 (Thấp)", "Nhà xưởng trong nhà, nông thôn", "1 lớp Lotus DTM Primer & Topcoat", "60 - 80 µm", "5 - 7 năm"],
            ["C3 (Trung bình)", "Nhà xưởng đô thị, xưởng ẩm", "1 lớp Lót WB + 1 lớp Phủ WB", "100 - 120 µm", "7 - 10 năm"],
            ["C4 (Cao)", "KCN hóa chất, ven biển", "1 lớp Lót Kẽm WB + 1 lớp Phủ PU WB", "140 - 160 µm", "10 - 15 năm"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Sơn kết cấu thép hệ nước có dùng chung máy phun Airless được không?",
        answer:
          "Rất tốt. Sơn tương thích hoàn hảo với máy phun Airless (áp suất 1800 - 2500 Psi, cỡ béc 517 hoặc 519) đạt năng suất hàng ngàn mét vuông mỗi ca.",
      },
    ],
    relatedSlugs: ["son-kim-loai-he-nuoc", "son-kim-loai-he-nuoc/nhom-inox", "chuyen-doi-he-nuoc"],
  },

  "son-gia-go-he-nuoc": {
    slug: "son-gia-go-he-nuoc",
    category: "Sơn Giả Gỗ Hệ Nước",
    categorySlug: "son-gia-go-he-nuoc",
    title: "Sơn Giả Gỗ Hệ Nước: Vân Đẹp Như Gỗ Thật Cho Cemboard & Sắt Hộp | Sơn Lotus",
    metaDescription:
      "Sơn giả gỗ hệ nước Lotus ứng dụng trên tấm xi măng cemboard, smartwood, bê tông, sắt mạ kẽm. Màu vân gỗ tự nhiên 3D, hạt màu oxit sắt vô cơ bền màu kháng UV 5 năm, không rêu mốc.",
    h1: "Sơn Giả Gỗ Hệ Nước: Kỹ Thuật Tạo Vân Tự Nhiên & Giải Pháp Bền Màu Ngoài Trời",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn giả gỗ hệ nước Lotus là hệ thống sơn trang trí đa lớp ứng dụng gốc nhựa 100% Pure Acrylic cao cấp kết hợp với hạt màu oxit sắt vô cơ, biến đổi các bề mặt xi măng cemboard, smartwood, bê tông hoặc sắt hộp mạ kẽm thành bề mặt vân gỗ tự nhiên 3D sống động với độ bền ngoài trời trên 5 năm.",
    whenToChoose: [
      "Vách ốp mặt dựng ngoài trời, trần ban công, lam che nắng làm từ tấm xi măng Cemboard, Smartwood, DuraFlex.",
      "Cổng sắt hộp, cửa sắt mỹ thuật biệt thự nhà phố muốn hoàn thiện hiệu ứng gỗ sồi, gõ đỏ, óc chó.",
      "Resort ven biển, quán cà phê sân vườn cần vật liệu chống cháy, không mối mọt nhưng ấm cúng như gỗ thật.",
    ],
    whenNotToChoose: [
      "Tấm xi măng đang bị ngấm ẩm từ tường lưng chưa được quét lót chống thấm ngược.",
    ],
    lotusRecommendation:
      "Bắt buộc dùng Sơn lót kháng kiềm chống thấm Lotus Alkali Primer quét phủ cả mặt sau và các cạnh cắt của tấm Cemboard trước khi lắp dựng ngoài trời.",
    sections: [
      {
        id: "he-thong-gia-go",
        heading: "1. Hệ thống sơn giả gỗ Lotus Wood Effect System",
        paragraphs: [
          "Hệ thống gồm 4 lớp đồng bộ: (1) Lót kháng kiềm/lót kẽm -> (2) Sơn nền tạo màu thịt gỗ Basecoat -> (3) Sơn màu tạo tim vân 3D Wood Stain -> (4) Phủ bóng/mờ kháng tia UV Clear Topcoat.",
        ],
      },
    ],
    faqs: [
      {
        question: "Sơn giả gỗ Lotus ngoài trời được bao nhiêu năm?",
        answer:
          "Sơn duy trì độ bền màu từ 5 - 7 năm nhờ sử dụng 100% hạt màu vô cơ oxit sắt kháng UV và lớp phủ bảo vệ chuyên dụng.",
      },
    ],
    relatedSlugs: [
      "son-gia-go-he-nuoc/tam-cemboard",
      "son-kim-loai-he-nuoc",
      "son-go-he-nuoc",
    ],
  },

  "son-gia-go-he-nuoc/tam-cemboard": {
    slug: "son-gia-go-he-nuoc/tam-cemboard",
    category: "Sơn Giả Gỗ Hệ Nước",
    categorySlug: "son-gia-go-he-nuoc",
    title: "Cách Sơn Giả Gỗ Trên Tấm Cemboard Smartwood Ngoài Trời Bền 5 Năm | Lotus",
    metaDescription:
      "Hướng dẫn quy trình 4 bước sơn giả gỗ trên tấm cemboard, smartwood, duraflex ngoài trời. Chống loang muối kiềm, chống thấm nứt, tạo vân gỗ 3D tự nhiên, bền màu kháng UV 5 năm.",
    h1: "Kỹ Thuật Sơn Giả Gỗ Trên Tấm Xi Măng Cemboard & Smartwood Ngoài Trời: Bền Màu 5 Năm",
    publishedAt: "22/08/2026",
    readTime: "6 phút đọc",
    quickSummary:
      "Quy trình sơn giả gỗ trên tấm sợi xi măng (Cemboard, Smartwood) giải quyết triệt để 2 vấn đề: độ hút nước mạnh gây loang màu và hiện tượng kiềm hóa đẩy muối trắng phá hủy màng sơn. Hệ sơn 4 lớp đồng bộ mang lại vẻ đẹp vân gỗ tự nhiên 3D và độ bền ngoài trời trên 5 năm.",
    whenToChoose: [
      "Vách Cemboard mặt tiền ngoại thất, vách ngăn chống cháy, trần ban công smartwood.",
    ],
    whenNotToChoose: [
      "Tấm xi măng vừa dính mưa ẩm ướt (độ ẩm > 14%) chưa được hong khô.",
    ],
    lotusRecommendation:
      "Dùng Bột trám Lotus Patching Putty chuyên dụng để xử lý đầu đinh vít, không dùng bột bả thạch cao vì sẽ bị hút ẩm gây nứt tròn quanh đầu vít.",
    sections: [
      {
        id: "quy-trinh-cemboard",
        heading: "1. Quy trình 4 bước thi công sơn giả gỗ Cemboard",
        steps: [
          {
            step: "Bước 1",
            title: "Trám đinh vít & Lót kháng kiềm",
            desc: "Trám lỗ vít bằng bột Lotus Putty, sau đó quét 1 lớp lót Lotus Alkali Primer chống kiềm hóa.",
          },
          {
            step: "Bước 2",
            title: "Sơn nền màu thịt gỗ (Basecoat)",
            desc: "Lăn 1 lớp sơn nền Lotus Basecoat che lấp hoàn toàn màu xám xi măng thô.",
          },
          {
            step: "Bước 3",
            title: "Kéo màu tạo vân gỗ 3D (Wood Stain)",
            desc: "Quét sơn Lotus Wood Stain và dùng cọ tạo vân kéo nhẹ 1 chiều tạo dải tim vân sáng tối.",
          },
          {
            step: "Bước 4",
            title: "Phủ bảo vệ kháng UV (Topcoat)",
            desc: "Phủ 2 lớp Lotus Clear Topcoat bảo vệ bề mặt chống thấm, chống rêu mốc và kháng tia UV 5 năm.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Tại sao sơn trên Cemboard hay bị loang ố trắng quanh đầu vít?",
        answer:
          "Do dùng bột bả thạch cao thông thường bị hút ẩm đẩy muối kiềm. Bắt buộc phải dùng bột trám chuyên dụng gốc keo dẻo của Lotus.",
      },
    ],
    relatedSlugs: ["son-gia-go-he-nuoc", "son-kim-loai-he-nuoc"],
  },

  "son-san-he-nuoc": {
    slug: "son-san-he-nuoc",
    category: "Sơn Sàn Hệ Nước",
    categorySlug: "son-san-he-nuoc",
    title: "Sơn Sàn Hệ Nước (Waterborne Epoxy/PU): Thoát Ẩm Bê Tông, Chuẩn GMP | Lotus",
    metaDescription:
      "Sơn sàn hệ nước Lotus chống phồng rộp do ẩm ngược, không mùi dung môi, an toàn cho phòng sạch GMP, nhà máy dược phẩm & chế biến thực phẩm. Khảo sát độ ẩm sàn miễn phí tận nơi.",
    h1: "Sơn Sàn Hệ Nước: Giải Pháp Sơn Sàn Bê Tông Thoát Ẩm, Kháng Khuẩn & An Toàn Thực Phẩm",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn sàn hệ nước Lotus sở hữu cấu trúc mạng vi mao dẫn cho phép hơi nước bên trong khối bê tông thẩm thấu thoát ra ngoài tự nhiên mà không phá hủy màng sơn, triệt tiêu 100% hiện tượng phồng rộp bong tróc trên nền bê tông ẩm (lên tới 10-12%). Sơn đạt chuẩn GMP/HACCP, không mùi dung môi.",
    whenToChoose: [
      "Nền bê tông tầng hầm, sàn tầng trệt tiếp giáp nền đất không có màng chống thấm nilon.",
      "Sàn bê tông mới đổ từ 7 - 14 ngày tuổi cần bàn giao gấp.",
      "Nhà máy dược phẩm chuẩn GMP, nhà máy thực phẩm HACCP, phòng mổ bệnh viện.",
    ],
    whenNotToChoose: [
      "Khu vực bồn chứa axit đậm đặc nồng độ cao (cần hệ vinyl ester chuyên dụng).",
    ],
    lotusRecommendation:
      "Đo độ ẩm sâu bê tông bằng máy đo chuyên dụng trước khi thi công để xác định đúng định mức lớp lót thẩm thấu.",
    sections: [
      {
        id: "mang-tho-vi-mo",
        heading: "1. Cơ chế màng thở vi mô chống phồng rộp ẩm",
        paragraphs: [
          "Màng sơn sàn hệ nước Lotus cho phép phân tử hơi ẩm H2O từ lòng đất bốc hơi qua lỗ mao dẫn vi mô mà không làm tích tụ áp suất thẩm thấu gây phồng rộp màng sơn.",
        ],
      },
    ],
    faqs: [
      {
        question: "Sơn sàn hệ nước có chịu được xe nâng hàng nặng không?",
        answer:
          "Có. Hệ sơn sàn Epoxy hệ nước Lotus chịu được tải trọng xe nâng từ 3 - 5 tấn sau khi đóng rắn 7 ngày.",
      },
    ],
    relatedSlugs: ["chuyen-doi-he-nuoc", "so-sanh/son-san-he-nuoc-vs-he-dau"],
  },

  "chuyen-doi-he-nuoc": {
    slug: "chuyen-doi-he-nuoc",
    category: "Cẩm Nang Chuyển Đổi",
    categorySlug: "chuyen-doi-he-nuoc",
    title: "Cẩm Nang Chuyển Đổi Sang Sơn Hệ Nước: Lộ Trình 4 Tuần Cho Nhà Máy | Lotus",
    metaDescription:
      "Hướng dẫn từng bước chuyển đổi xưởng từ sơn PU/dung môi sang sơn hệ nước. Tận dụng súng phun sẵn có, thiết kế phòng sấy lưu thông khí, tối ưu TCO và cắt giảm 90% VOCs.",
    h1: "Cẩm Nang Toàn Diện: Lộ Trình Chuyển Đổi Từ Sơn Dung Môi Sang Sơn Hệ Nước Cho Nhà Máy",
    publishedAt: "22/08/2026",
    readTime: "8 phút đọc",
    quickSummary:
      "Chuyển đổi từ sơn dung môi sang sơn hệ nước cắt giảm hơn 90% khí thải VOCs, triệt tiêu nguy cơ cháy nổ PCCC và đáp ứng tiêu chuẩn xuất khẩu xanh (ESG, RoHS, California Prop 65). Quá trình không cần thay mới toàn bộ máy móc mà chỉ cần thay kim béc inox 316, bố trí quạt đối lưu phòng sấy và đào tạo thợ kiểm soát màng ướt. Lộ trình thực thi trong 4 tuần.",
    whenToChoose: [
      "Nhà máy đồ gỗ, cơ khí xuất khẩu đang chịu áp lực kiểm toán ESG từ Buyer.",
      "Xưởng trong cụm công nghiệp bị giới hạn nghiêm ngặt chỉ số phát thải mùi.",
      "Doanh nghiệp muốn cắt giảm chi phí bảo hiểm cháy nổ và chi phí xăng thơm.",
    ],
    whenNotToChoose: [
      "Nhà xưởng chưa có bộ lọc tách nước tách dầu cho hệ thống khí nén.",
    ],
    lotusRecommendation:
      "Nước cần luồng gió tươi liên tục cuốn đi lớp ẩm bão hòa sát màng sơn. Bố trí quạt gió công nghiệp lưu thông bề mặt giúp sơn khô xả nhám dưới 45 phút mà không tốn điện sưởi nhiệt.",
    sections: [
      {
        id: "lo-trinh-4-tuan",
        heading: "1. Lộ trình 4 tuần chuyển đổi không gián đoạn sản xuất",
        steps: [
          { step: "Tuần 1", title: "Khảo sát hiện trạng", desc: "Đo độ ẩm xưởng, kiểm tra máy nén khí và lập danh mục hoán đổi kim béc inox." },
          { step: "Tuần 2", title: "Thử nghiệm Pilot", desc: "Chạy thử trên 1 chuyền độc lập, tinh chỉnh tỷ lệ pha nước và tốc độ quạt sấy." },
          { step: "Tuần 3", title: "Đào tạo thợ sơn", desc: "Huấn luyện kỹ thuật chỉnh súng HVLP và kiểm soát màng ướt 80-100µm." },
          { step: "Tuần 4", title: "Chuyển đổi chính thức", desc: "Sản xuất đại trà và thiết lập quy chuẩn kiểm tra KCS xuất xưởng." },
        ],
      },
    ],
    faqs: [
      {
        question: "Có cần mua súng phun sơn mới hoàn toàn khi chuyển sang sơn nước không?",
        answer:
          "Không bắt buộc. Bạn chỉ cần thay bộ kim béc bằng thép không gỉ (Inox 316) để không bị rỉ sét và vệ sinh sạch cặn dung môi cũ.",
      },
    ],
    relatedSlugs: ["son-go-he-nuoc", "so-sanh/son-go-he-nuoc-vs-son-pu", "son-kim-loai-he-nuoc"],
  },

  "so-sanh/son-go-he-nuoc-vs-son-pu": {
    slug: "so-sanh/son-go-he-nuoc-vs-son-pu",
    category: "So Sánh Kỹ Thuật",
    categorySlug: "so-sanh",
    title: "So Sánh Sơn Gỗ Hệ Nước Và Sơn PU: 12 Tiêu Chí Kỹ Thuật & Chi Phí | Lotus",
    metaDescription:
      "Bảng so sánh sơn gỗ hệ nước và sơn PU gốc dung môi chi tiết: Độ cứng, độ trong suốt, khả năng chống ố vàng, mùi độc hại, an toàn PCCC và giá thành thực tế trên 1m2.",
    h1: "So Sánh Trực Diện Sơn Gỗ Hệ Nước Và Sơn PU Truyền Thống: Đâu Là Lựa Chọn Đúng?",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn gỗ hệ nước vượt trội hơn PU về độ an toàn sức khỏe (VOCs < 50g/L vs 700g/L của PU), chống ố vàng vĩnh viễn dưới tia UV, triệt tiêu nguy cơ cháy nổ PCCC và đạt chuẩn xuất khẩu EN71-3/RoHS. Sơn PU rẻ hơn về giá mua lon ban đầu nhưng tính tổng chi phí m2 hoàn thiện (bao gồm tiền xăng thơm và hao hụt), sơn hệ nước giúp tiết kiệm khoảng 10.000 đ/m2.",
    whenToChoose: [
      "Nội thất trẻ em, đồ chơi gỗ, thớt bếp xuất khẩu US/EU/Nhật.",
      "Nội thất sáng màu (Sồi, Tần bì, Maple) cần giữ màu trong vắt không ngả vàng.",
      "Thi công fit-out tại chỗ chung cư, khách sạn cần dọn vào ở ngay không mùi.",
    ],
    whenNotToChoose: [
      "Đồ gỗ bình dân giá rẻ bán chợ nội địa không có yêu cầu kiểm định.",
    ],
    lotusRecommendation:
      "Dùng hệ sơn lót trong suốt Lotus Clear Sanding Sealer kết hợp lau màu Wood Stain để đạt độ sâu thớ gỗ 3D tự nhiên mà không bị đục màng sơn.",
    sections: [
      {
        id: "bang-so-sanh-12-tieu-chi",
        heading: "1. Bảng đối chiếu 12 tiêu chí kỹ thuật & kinh tế",
        table: {
          headers: ["Tiêu chí", "Sơn Gỗ Hệ Nước Lotus", "Sơn PU Gốc Dung Môi", "Đánh giá"],
          rows: [
            ["Dung môi pha", "Nước sạch (0 đ)", "Xăng thơm (Tốn kém)", "Hệ nước tiết kiệm"],
            ["Hàm lượng VOCs", "< 45 g/L", "650 - 800 g/L", "Hệ nước an toàn gấp 15 lần"],
            ["Độ cứng màng sơn", "H (1K) - 2H (2K)", "H (1K) - 2H (2K)", "Tương đương"],
            ["Kháng ố vàng UV", "Không ngả vàng (ΔE < 1.2)", "Ngả vàng rõ rệt (ΔE > 5.5)", "Hệ nước vượt trội"],
            ["Chống cháy nổ", "Không bắt lửa (> 93°C)", "Rất dễ nổ (< 23°C)", "Hệ nước an toàn PCCC"],
            ["Tổng chi phí m2", "36.000 - 48.000 đ/m2", "38.000 - 52.000 đ/m2", "Hệ nước tiết kiệm hơn"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Sơn hệ nước có đanh cứng bằng PU 2K không?",
        answer:
          "Dòng sơn 2K hệ nước của Lotus đạt độ cứng 2H, hoàn toàn tương đương với sơn PU 2K tiêu chuẩn dùng cho bàn ăn và sàn gỗ.",
      },
    ],
    relatedSlugs: ["son-go-he-nuoc", "chuyen-doi-he-nuoc", "loi-thi-cong/xu-long-go"],
  },

  "so-sanh/son-kim-loai-he-nuoc-vs-he-dau": {
    slug: "so-sanh/son-kim-loai-he-nuoc-vs-he-dau",
    category: "So Sánh Kỹ Thuật",
    categorySlug: "so-sanh",
    title: "So Sánh Sơn Kim Loại Hệ Nước Và Sơn Dầu Alkyd: Bền Hơn Hay Đắt Hơn? | Lotus",
    metaDescription:
      "So sánh chuyên sâu sơn kim loại hệ nước vs sơn dầu alkyd truyền thống: Khả năng chống rỉ, độ bám trên sắt mạ kẽm, độ bền màu ngoài trời và chi phí bảo trì sau 3-5 năm.",
    h1: "So Sánh Sơn Kim Loại Hệ Nước Và Sơn Dầu Alkyd: Đâu Là Giải Pháp Cho Kết Cấu?",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn kim loại hệ nước vượt trội hơn sơn dầu Alkyd về độ bền màu ngoài trời (không bị phấn hóa), khả năng bám dính trực tiếp trên kẽm/nhôm/inox không bong tróc (5B ASTM D3359) và triệt tiêu nguy cơ cháy nổ. Xét về chi phí vòng đời 5 năm, sơn nước tiết kiệm 30-40% ngân sách bảo dưỡng.",
    whenToChoose: [
      "Ống thép hộp mạ kẽm, tôn kẽm nhúng nóng, nhôm đúc hoặc inox.",
      "Kết cấu thép ngoài trời cần giữ màu 3-5 năm không bạc màu.",
      "Nhà xưởng cơ khí kín gió yêu cầu nghiệm thu PCCC nghiêm ngặt.",
    ],
    whenNotToChoose: ["Kết cấu sắt đen tạm thời ngắn hạn dưới 1 năm."],
    lotusRecommendation:
      "Tuyệt đối không dùng sơn dầu Alkyd quét trực tiếp lên thép mạ kẽm mới vì phản ứng xà phòng hóa giữa axit béo và kẽm sẽ làm màng sơn tự bong sạch sau 3-6 tháng.",
    sections: [
      {
        id: "so-sanh-alkyd",
        heading: "1. Bảng đối chiếu hiệu năng kỹ thuật",
        table: {
          headers: ["Tiêu chí", "Sơn Kim Loại Nước Lotus", "Sơn Dầu Alkyd", "Ưu thế"],
          rows: [
            ["Bám dính trên kẽm", "Điểm 5B (Bám trực tiếp)", "Điểm 0B (Dễ tróc mảng)", "Hệ nước vượt trội"],
            ["Độ bền màu UV", "3 - 5 năm không phai", "6 - 12 tháng bạc màu", "Hệ nước vượt trội"],
            ["Phấn hóa ngoài trời", "Không phấn hóa", "Phấn hóa nặng sau 1 năm", "Hệ nước vượt trội"],
            ["Thời gian sơn lớp 2", "2 - 3 tiếng", "12 - 24 tiếng", "Hệ nước nhanh hơn"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Sơn kim loại hệ nước có dễ bong tróc hơn sơn dầu không?",
        answer:
          "Không. Trên nền sắt mạ kẽm và inox, sơn hệ nước Lotus bám dính tốt hơn sơn dầu gấp nhiều lần nhờ cơ chế bám dính hóa học chuyên dụng.",
      },
    ],
    relatedSlugs: ["son-kim-loai-he-nuoc", "loi-thi-cong/bong-troc-son-ma-kem"],
  },

  "loi-thi-cong/xu-long-go": {
    slug: "loi-thi-cong/xu-long-go",
    category: "Xử Lý Sự Cố",
    categorySlug: "loi-thi-cong",
    title: "Cách Xử Lý Lỗi Xù Lông Gỗ Khi Sơn Hệ Nước Dứt Điểm | Kỹ Thuật Sơn Lotus",
    metaDescription:
      "Hướng dẫn triệt tiêu hoàn toàn hiện tượng xù lông gỗ (Grain Raising) khi phun sơn hệ nước. Kỹ thuật xả ẩm trước (Water Popping), cách chọn lót xả nhanh và loại giấy nhám phù hợp.",
    h1: "Khắc Phục Triệt Để Hiện Tượng Xù Lông Gỗ Khi Phun Sơn Hệ Nước",
    publishedAt: "22/08/2026",
    readTime: "6 phút đọc",
    quickSummary:
      "Xù lông gỗ (Grain Raising) là hiện tượng các sợi cellulose khô trong thớ gỗ tiếp xúc với nước trong sơn lót, trương nở và dựng đứng lên làm bề mặt nhám ráp. Cách xử lý triệt để là chủ động lau ẩm bằng khăn ướt (Kỹ thuật Water Popping), đợi khô rồi dùng nhám P320 xả sạch các sợi xù trước khi phun lớp sơn lót khóa sợi chuyên dụng Lotus Sanding Sealer.",
    whenToChoose: [
      "Áp dụng bắt buộc cho các loại gỗ mềm, gỗ xốp hút nước mạnh: Gỗ Thông, Gỗ Cao Su, Gỗ Keo, Gỗ Sồi.",
    ],
    whenNotToChoose: [
      "Đồ gỗ dán veneer siêu mỏng (< 0.3mm) cần xả nhám nhẹ tay tránh thủng veneer.",
    ],
    lotusRecommendation:
      "Phun lớp lót đầu tiên mỏng vừa đủ (WFT 70-80 microns). Lớp lót này đóng vai trò như chất keo khóa cứng các sợi lông gỗ còn sót lại, giúp việc xả nhám sau 45 phút cực kỳ phẳng mịn.",
    sections: [
      {
        id: "quy-trinh-triet-tieu-xu-long",
        heading: "1. Quy trình 3 bước triệt tiêu xù lông gỗ",
        steps: [
          { step: "Bước 1", title: "Lau ẩm chủ động (Water Popping)", desc: "Dùng khăn sạch thấm nước lau đều bề mặt gỗ để sợi cellulose bung nở trước." },
          { step: "Bước 2", title: "Xả nhám triệt tiêu", desc: "Chờ khô 15 phút, dùng nhám P320 xả nhẹ cắt đứt các đầu sợi lông dựng đứng." },
          { step: "Bước 3", title: "Phun lót khóa sợi Lotus Sealer", desc: "Phun 1 lớp lót mỏng khóa chân mao dẫn. Sau 45 phút xả nhám nhẹ bằng P400." },
        ],
      },
    ],
    faqs: [
      {
        question: "Tại sao sơn PU không bị xù lông mà sơn hệ nước lại bị?",
        answer:
          "Sơn PU dùng dung môi xăng thơm không làm nở sợi cellulose. Sơn hệ nước chứa phân tử nước kích hoạt hiện tượng hút ẩm tự nhiên của thớ gỗ.",
      },
    ],
    relatedSlugs: ["son-go-he-nuoc", "so-sanh/son-go-he-nuoc-vs-son-pu"],
  },

  "loi-thi-cong/bong-troc-son-ma-kem": {
    slug: "loi-thi-cong/bong-troc-son-ma-kem",
    category: "Xử Lý Sự Cố",
    categorySlug: "loi-thi-cong",
    title: "Khắc Phục Lỗi Sơn Sắt Mạ Kẽm Bị Bong Tróc Từng Mảng | Kỹ Thuật Sơn Lotus",
    metaDescription:
      "Tìm hiểu nguyên nhân sắt mạ kẽm bị bóc sơn như màng nilon và quy trình tẩy dầu, tạo nhám, sơn bám dính vĩnh viễn với hệ sơn kim loại chuyên dụng Lotus DTM.",
    h1: "Nguyên Nhân & Giải Pháp Chống Bong Tróc Tuyệt Đối Khi Sơn Trên Sắt Mạ Kẽm",
    publishedAt: "22/08/2026",
    readTime: "6 phút đọc",
    quickSummary:
      "Nguyên nhân chính khiến sơn sắt mạ kẽm bị bong tróc từng mảng lớn là do lớp dầu mỡ bảo vệ chống mốc kẽm của nhà máy sản xuất thép chưa được tẩy sạch, hoặc do sử dụng sơn dầu Alkyd gây phản ứng xà phòng hóa. Giải pháp là bắt buộc lau sạch dầu nhờn bằng cồn/chất tẩy kiềm và sử dụng dòng sơn kim loại hệ nước Lotus Direct-to-Metal bám dính điểm 5B.",
    whenToChoose: [
      "Bắt buộc kiểm tra tẩy dầu cho 100% ống thép hộp mạ kẽm mới mua trước khi sơn.",
    ],
    whenNotToChoose: [
      "Không sơn đè lên bề mặt đang có lớp sơn dầu cũ đang bị bong rộp chưa cạo sạch.",
    ],
    lotusRecommendation:
      "Kiểm tra bề mặt sạch dầu bằng cách nhỏ vài giọt nước: nếu nước loang phẳng đều là đủ điều kiện sơn.",
    sections: [
      {
        id: "checklist-tay-dau",
        heading: "1. Checklist 3 bước xử lý bề mặt sắt mạ kẽm",
        steps: [
          { step: "Bước 1", title: "Tẩy nhờn dầu mỡ", desc: "Dùng giẻ sạch nhúng cồn công nghiệp hoặc nước tẩy kiềm lau sạch dầu bảo quản." },
          { step: "Bước 2", title: "Tạo nhám vi mô", desc: "Dùng nhám P240 chà cước nhẹ tạo chân neo cơ học." },
          { step: "Bước 3", title: "Phun sơn Lotus Metal DTM", desc: "Phun 2 lớp sơn Lotus DTM đạt độ bám dính 5B vĩnh cửu." },
        ],
      },
    ],
    faqs: [
      {
        question: "Có cần quét axit photphoric để tạo nhám kẽm không?",
        answer:
          "Hoàn toàn không cần. Sơn Lotus Metal DTM liên kết hóa học trực tiếp với kẽm không cần xử lý axit độc hại.",
      },
    ],
    relatedSlugs: ["son-kim-loai-he-nuoc", "so-sanh/son-kim-loai-he-nuoc-vs-he-dau"],
  },

  "son-gia-go-he-nuoc/sat-hop": {
    slug: "son-gia-go-he-nuoc/sat-hop",
    category: "Sơn Giả Gỗ Hệ Nước",
    categorySlug: "son-gia-go-he-nuoc",
    title: "Cách Sơn Giả Gỗ Trên Sắt Mạ Kẽm Ngoài Trời Bám Dính 5B Bền 5 Năm | Lotus",
    metaDescription:
      "Hướng dẫn quy trình 4 bước sơn giả gỗ trên sắt hộp mạ kẽm, cửa cổng, lan can ban công. Bám dính trực tiếp điểm 5B, vân gỗ tự nhiên 3D, kháng tia UV 5 năm không phai màu.",
    h1: "Kỹ Thuật Sơn Giả Gỗ Trên Sắt Hộp Mạ Kẽm Ngoài Trời: Vân Gỗ Tự Nhiên, Không Bong Tróc",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn giả gỗ trên sắt hộp mạ kẽm là kỹ thuật tạo hiệu ứng vân gỗ tự nhiên trên bề mặt kim loại mạ kẽm (cửa cổng, hàng rào, lan can ban công) bằng hệ sơn nước Pure Acrylic của Lotus. Giải pháp khắc phục 100% tình trạng bong tróc của sơn dầu cũ nhờ lớp lót bám dính DTM đạt chuẩn 5B (ASTM D3359), giữ màu ngoài trời trên 5 năm.",
    whenToChoose: [
      "Cửa cổng sắt hộp mạ kẽm, hàng rào biệt thự, lan can ban công, giàn lam che nắng ngoài trời.",
    ],
    whenNotToChoose: [
      "Bề mặt sắt hộp chưa lau sạch lớp dầu nhờn bảo vệ chống mốc kẽm của nhà máy cán thép.",
    ],
    lotusRecommendation:
      "Tại các mối hàn góc, lớp mạ kẽm đã bị cháy xém. Bắt buộc phải mài nhẵn xỉ hàn và quét dặm 1 lớp Sơn Lót Giàu Kẽm Lotus Zinc Rich Primer trước khi lên màu giả gỗ để chống rỉ sét từ tim mối hàn.",
    sections: [
      {
        id: "quy-trinh-sat-hop",
        heading: "1. Quy trình 4 bước thi công sơn giả gỗ sắt hộp ngoài trời",
        steps: [
          { step: "Bước 1", title: "Lót bám dính kẽm DTM", desc: "Phun 1 lớp sơn lót Lotus Metal Primer bám dính trực tiếp điểm 5B lên bề mặt thép mạ kẽm đã lau sạch dầu mỡ." },
          { step: "Bước 2", title: "Sơn nền màu thịt gỗ (Basecoat)", desc: "Phun 1 lớp sơn nền Lotus Basecoat theo tông màu gỗ (vàng chanh, cam gõ hoặc nâu vàng)." },
          { step: "Bước 3", title: "Kéo màu tạo tim vân 3D", desc: "Quét sơn Lotus Wood Stain và dùng cọ kéo dứt khoát 1 đường dọc theo thanh sắt tạo tim vân gỗ sống động." },
          { step: "Bước 4", title: "Phủ bảo vệ kháng UV (Topcoat)", desc: "Phun 2 lớp Lotus Clear Topcoat bảo vệ bề mặt chống trầy xước và kháng tia cực tím 5 năm không phai." },
        ],
      },
    ],
    faqs: [
      {
        question: "Sơn giả gỗ trên sắt hộp sau bao lâu thì khô để lắp đặt?",
        answer:
          "Sau 24 giờ ở nhiệt độ phòng, màng sơn đạt 80% độ cứng để bọc màng PE vận chuyển đi lắp đặt mà không sợ trầy xước.",
      },
    ],
    relatedSlugs: ["son-gia-go-he-nuoc", "son-gia-go-he-nuoc/bang-mau", "son-kim-loai-he-nuoc"],
  },

  "son-gia-go-he-nuoc/bang-mau": {
    slug: "son-gia-go-he-nuoc/bang-mau",
    category: "Sơn Giả Gỗ Hệ Nước",
    categorySlug: "son-gia-go-he-nuoc",
    title: "Bảng Màu Sơn Giả Gỗ Hệ Nước Cao Cấp (12 Tông Gỗ Tự Nhiên) | Lotus",
    metaDescription:
      "Khám phá bảng 12 mã màu sơn giả gỗ hệ nước Lotus: Gỗ Sồi (Oak), Gỗ Teak, Gõ Đỏ, Óc Chó (Walnut), Mun Đen. Sử dụng hạt màu oxit sắt vô cơ kháng UV 5 năm, chuẩn màu 100%.",
    h1: "Bảng Màu Sơn Giả Gỗ Hệ Nước Lotus: 12 Tông Gỗ Tự Nhiên Chuẩn Phong Cách Kiến Trúc",
    publishedAt: "22/08/2026",
    readTime: "6 phút đọc",
    quickSummary:
      "Bảng màu sơn giả gỗ hệ nước Lotus bao gồm 12 tông màu gỗ tự nhiên được chế tạo từ 100% hạt màu oxit sắt vô cơ siêu mịn, có khả năng kháng bức xạ tử ngoại UV vượt trội với độ sai lệch màu cực thấp (ΔE < 1.0), cam kết không phai màu và không ngả vàng sau 5 năm nắng mưa nhiệt đới.",
    whenToChoose: [
      "Ứng dụng cho cả tấm Cemboard, Smartwood, bê tông và sắt hộp mạ kẽm.",
    ],
    whenNotToChoose: [],
    lotusRecommendation:
      "Độ đậm nhạt của màu vân gỗ phụ thuộc vào số lượt kéo cọ và tỷ lệ pha loãng nước của lớp sơn Lotus Wood Stain. Pha thêm 10% nước sạch nếu muốn màu sáng thanh thoát.",
    sections: [
      {
        id: "bang-12-ma-mau",
        heading: "1. Danh mục 12 mã màu gỗ tự nhiên Lotus Wood Effect",
        table: {
          headers: ["Mã màu", "Tên tông màu", "Sắc độ", "Phong cách ứng dụng"],
          rows: [
            ["WS-01", "White Oak (Sồi Trắng)", "Vàng sáng nhẹ", "Scandinavian, Japandi"],
            ["WS-02", "Natural Teak (Teak Tự Nhiên)", "Vàng mật ong ấm", "Resort ven biển, hồ bơi"],
            ["WS-03", "Pine Wood (Gỗ Thông)", "Vàng tươi trẻ trung", "Quán cà phê sân vườn"],
            ["WS-05", "Red Wood (Gõ Đỏ)", "Đỏ nâu quyền quý", "Biệt thự tân cổ điển"],
            ["WS-06", "Padouk (Gỗ Hương)", "Đỏ cánh gián đậm đà", "Nhà hàng truyền thống"],
            ["WS-07", "Pyinkado (Căm Xe)", "Nâu đỏ trầm", "Mặt tiền nhà phố cao cấp"],
            ["WS-09", "American Walnut (Óc Chó)", "Nâu socola sang trọng", "Modern Luxury"],
            ["WS-12", "Ebony (Mun Đen)", "Đen ánh nâu khói", "Wabi Sabi, Dark Luxury"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Lotus có nhận pha màu giả gỗ theo mẫu thực tế không?",
        answer:
          "Có. Phòng R&D Lotus nhận tinh chỉnh và phối màu chính xác 100% theo mẫu gỗ thật của chủ đầu tư cho các dự án từ 200m2 trở lên.",
      },
    ],
    relatedSlugs: ["son-gia-go-he-nuoc", "son-gia-go-he-nuoc/tam-cemboard", "son-gia-go-he-nuoc/sat-hop"],
  },

  "son-san-he-nuoc/phong-sach-gmp": {
    slug: "son-san-he-nuoc/phong-sach-gmp",
    category: "Sơn Sàn Hệ Nước",
    categorySlug: "son-san-he-nuoc",
    title: "Sơn Sàn Phòng Sạch GMP Hệ Nước: Kháng Khuẩn 99.9%, Chuẩn WHO | Lotus",
    metaDescription:
      "Sơn sàn epoxy hệ nước phòng sạch Lotus đạt chuẩn GMP-WHO, ISO 14644, HACCP. Không mùi độc hại, kháng vi khuẩn nấm mốc, liền mạch chống bám bụi, thi công không gián đoạn sản xuất.",
    h1: "Sơn Sàn Epoxy Hệ Nước Cho Phòng Sạch Dược Phẩm & Y Tế: Chuẩn GMP-WHO, Kháng Khuẩn Tuyệt Đối",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn sàn phòng sạch GMP hệ nước Lotus đáp ứng trọn vẹn các yêu cầu nghiêm ngặt của tiêu chuẩn GMP-WHO, ISO 14644-1 và HACCP. Màng sơn kháng khuẩn > 99.99% (JIS Z 2801), kháng cồn y tế khử trùng 70°/90°, không mùi dung môi hữu cơ và cho phép thi công cuốn chiếu mà không cần dừng dây chuyền sản xuất thuốc.",
    whenToChoose: [
      "Nhà máy dược phẩm, thực phẩm chức năng, vắc xin chuẩn GMP-WHO.",
      "Phòng mổ vô trùng, phòng pha chế thuốc bệnh viện, phòng thí nghiệm vi sinh.",
      "Nhà máy chế biến thực phẩm, sữa, nước giải khát chuẩn HACCP.",
    ],
    whenNotToChoose: [],
    lotusRecommendation:
      "Bắt buộc thi công bo góc chân tường cong R50 bằng vữa Epoxy hệ nước Lotus để tránh góc chết tích tụ vi khuẩn và bụi bẩn.",
    sections: [
      {
        id: "chi-tieu-gmp",
        heading: "1. Bảng chỉ tiêu kiểm nghiệm phòng thí nghiệm (QUATEST 3 & Viện Pasteur)",
        table: {
          headers: ["Chỉ tiêu", "Phương pháp", "Giới hạn GMP", "Kết quả Sơn Lotus", "Đánh giá"],
          rows: [
            ["Hoạt tính kháng khuẩn", "JIS Z 2801", "> 99%", "> 99.99% diệt khuẩn", "ĐẠT CHUẨN VÔ TRÙNG"],
            ["Kháng nấm mốc", "ASTM G21", "Cấp 0", "Cấp độ 0 (Không nấm)", "ĐẠT CHUẨN GMP"],
            ["Kháng cồn y tế 70°/90°", "ASTM D5402", "Không mờ", "Không phai màu", "ĐẠT TIÊU CHUẨN"],
            ["Hàm lượng VOCs", "ISO 11890-2", "< 100 g/L", "< 10 g/L (Không mùi)", "KHÔNG NHIỄM MÙI"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Thi công sơn sàn Lotus trong nhà máy thuốc có cần dừng sản xuất không?",
        answer:
          "Không cần dừng. Nhờ không chứa dung môi bay hơi và không mùi hắc, đội thi công có thể quây bạt làm từng phòng sạch trong khi các phòng khác vẫn vận hành.",
      },
    ],
    relatedSlugs: ["son-san-he-nuoc", "chuyen-doi-he-nuoc"],
  },

  "son-san-he-nuoc/be-tong-am": {
    slug: "son-san-he-nuoc/be-tong-am",
    category: "Sơn Sàn Hệ Nước",
    categorySlug: "son-san-he-nuoc",
    title: "Sơn Sàn Bê Tông Ẩm Hệ Nước: Chịu Ẩm 12%, Chống Phồng Rộp | Lotus",
    metaDescription:
      "Sơn sàn bê tông ẩm Lotus chịu độ ẩm nền lên tới 12%. Thi công ngay trên bê tông mới đổ 7-10 ngày, tầng hầm không có màng chống thấm ngược. Không phồng rộp, bám dính > 2.5 MPa.",
    h1: "Sơn Sàn Bê Tông Ẩm Hệ Nước: Giải Pháp Chống Phồng Rộp Cho Nền Bê Tông Độ Ẩm Cao",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn sàn bê tông ẩm hệ nước Lotus chuyên dụng cho sàn bê tông có độ ẩm nền cao từ 8% đến 12%. Màng sơn hoạt động theo cơ chế màng thở vi mao dẫn, cho phép thi công sớm ngay trên sàn bê tông mới đổ 7-10 ngày tuổi, rút ngắn tiến độ bàn giao từ 3-4 tuần mà không lo phồng rộp bọng nước.",
    whenToChoose: [
      "Sàn tầng hầm, bãi đỗ xe ngầm tiếp giáp mạch nước ngầm không có màng nilon chống ẩm ngược.",
      "Nhà xưởng bê tông mới đổ cần hoàn thiện gấp kịp tiến độ.",
      "Khu vực ẩm ướt như xưởng chế biến thủy sản, kho đồ uống, khu vực rửa xe.",
    ],
    whenNotToChoose: [
      "Bề mặt bê tông có vũng đọng nước chưa được hút khô và tạo nhám.",
    ],
    lotusRecommendation:
      "Dùng phương pháp dán tấm nilon thử nghiệm (ASTM D4263) trong 24 giờ để kiểm tra độ ẩm thực tế trước khi thi công lớp lót thẩm thấu chịu ẩm Lotus WB Primer.",
    sections: [
      {
        id: "quy-trinh-be-tong-am",
        heading: "1. Quy trình 4 bước thi công sơn sàn bê tông ẩm",
        steps: [
          { step: "Bước 1", title: "Mài sàn & Hút ẩm", desc: "Mài tạo nhám CSP 2-3 và hút sạch bụi ẩm chân không." },
          { step: "Bước 2", title: "Lót thẩm thấu chịu ẩm", desc: "Lăn 1 lớp lót Lotus WB Moisture Primer ngấm sâu 3mm khóa ẩm." },
          { step: "Bước 3", title: "Bả phẳng nền", desc: "Dùng vữa Epoxy hệ nước Lotus dặm vá các vết nứt và rỗ li ti." },
          { step: "Bước 4", title: "Phủ 2 lớp hoàn thiện", desc: "Lăn 2 lớp sơn phủ màu Lotus WB Topcoat đạt độ cứng 80 Shore D." },
        ],
      },
    ],
    faqs: [
      {
        question: "Bê tông mới đổ bao nhiêu ngày thì sơn sàn hệ nước được?",
        answer:
          "Chỉ cần sau 7 - 10 ngày khi bê tông đạt 70% cường độ nén và không còn đọng nước là có thể thi công lớp lót chịu ẩm Lotus.",
      },
    ],
    relatedSlugs: ["son-san-he-nuoc", "loi-thi-cong/phong-rop-son-san-am", "so-sanh/son-san-epoxy-he-nuoc-vs-goc-dau"],
  },

  "so-sanh/son-san-epoxy-he-nuoc-vs-goc-dau": {
    slug: "so-sanh/son-san-epoxy-he-nuoc-vs-goc-dau",
    category: "So Sánh Kỹ Thuật",
    categorySlug: "so-sanh",
    title: "So Sánh Sơn Sàn Epoxy Hệ Nước Và Gốc Dầu: 10 Tiêu Chí Chọn Đúng | Lotus",
    metaDescription:
      "So sánh chi tiết sơn sàn epoxy hệ nước vs sơn epoxy gốc dung môi: Khả năng chịu ẩm, độ cứng chịu tải xe nâng, mùi độc hại, độ bền màu và giá thành thi công thực tế 1m2.",
    h1: "So Sánh Trực Diện Sơn Sàn Epoxy Hệ Nước Và Sơn Epoxy Gốc Dầu Cho Nhà Xưởng",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn sàn Epoxy hệ nước chiếm ưu thế vượt trội về khả năng chịu ẩm (10-12% không phồng rộp), không mùi dung môi hữu cơ (đạt chuẩn GMP/HACCP) và an toàn PCCC. Cả hai hệ sơn đều đạt độ cứng > 80 Shore D chịu tải xe nâng 3-5 tấn như nhau. Sơn gốc dầu chỉ có ưu thế duy nhất là độ bóng gương ban đầu cao hơn.",
    whenToChoose: [
      "Sàn tầng trệt, tầng hầm có độ ẩm cao hoặc tiếp giáp nền đất.",
      "Nhà máy thực phẩm, dược phẩm, bệnh viện, xưởng kín đang hoạt động.",
    ],
    whenNotToChoose: [
      "Khu vực sàn từ tầng 2 trở lên hoàn toàn khô ráo không có yêu cầu về mùi dung môi.",
    ],
    lotusRecommendation:
      "Đối với tầng trệt tại Việt Nam, độ ẩm ngầm luôn bốc lên làm hỏng 70% sàn sơn dầu sau 1 năm. Bắt buộc nên chọn sơn sàn Epoxy hệ nước.",
    sections: [
      {
        id: "so-sanh-10-tieu-chi",
        heading: "1. Bảng đối chiếu 10 tiêu chí kỹ thuật",
        table: {
          headers: ["Tiêu chí", "Sơn Sàn Nước Lotus", "Sơn Epoxy Gốc Dầu", "Ưu thế"],
          rows: [
            ["Độ ẩm sàn cho phép", "8% - 12% (Chịu ẩm)", "< 4% (Bắt buộc khô)", "Hệ nước vượt trội"],
            ["Chống phồng rộp ẩm", "Triệt tiêu 100%", "Nguy cơ rất cao ở tầng trệt", "Hệ nước bền bỉ"],
            ["Độ cứng chịu tải", "78 - 82 Shore D", "80 - 85 Shore D", "Tương đương"],
            ["Mùi độc hại", "Không mùi (Zero VOCs)", "Mùi nồng nặc, cay mắt", "Hệ nước an toàn"],
            ["Thi công cuốn chiếu", "Rất dễ dàng", "Khó (Phải dừng cả xưởng)", "Hệ nước thuận tiện"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Sơn sàn hệ nước có chịu được xe nâng 3 tấn không?",
        answer:
          "Hoàn toàn chịu được. Sau khi đóng rắn hoàn toàn, màng sơn đạt độ cứng trên 80 Shore D chịu tải trọng nặng rất tốt.",
      },
    ],
    relatedSlugs: ["son-san-he-nuoc", "son-san-he-nuoc/be-tong-am", "loi-thi-cong/phong-rop-son-san-am"],
  },

  "loi-thi-cong/phong-rop-son-san-am": {
    slug: "loi-thi-cong/phong-rop-son-san-am",
    category: "Xử Lý Sự Cố",
    categorySlug: "loi-thi-cong",
    title: "Cách Xử Lý Sàn Epoxy Bị Phồng Rộp Bọng Nước Do Ẩm Ngược | Kỹ Thuật Lotus",
    metaDescription:
      "Tìm hiểu nguyên nhân sàn bê tông bị nổi bọng nước, phồng rộp màng sơn sau mùa mưa và quy trình 4 bước cạo xả, xử lý ẩm ngược dứt điểm bằng hệ sơn nước Lotus.",
    h1: "Khắc Phục Triệt Để Hiện Tượng Sàn Epoxy Bị Phồng Rộp, Nổi Bọng Nước Do Ẩm Ngược",
    publishedAt: "22/08/2026",
    readTime: "6 phút đọc",
    quickSummary:
      "Phồng rộp bọng nước (Osmotic Blistering) là do thi công sơn epoxy gốc dầu kín khí trên nền bê tông có độ ẩm cao (> 4%) hoặc không có màng chống thấm đáy. Giải pháp triệt để là cắt bóc toàn bộ bọng rộp, mài lộ cốt bê tông và chuyển sang hệ sơn lót chịu ẩm màng thở Lotus WB Moisture Primer.",
    whenToChoose: [
      "Áp dụng ngay khi sàn nhà xưởng tầng trệt hoặc tầng hầm xuất hiện bọng rộp chứa nước kiềm.",
    ],
    whenNotToChoose: [
      "Tuyệt đối không sơn dặm vá đè sơn dầu lên bọng rộp cũ vì sẽ phồng lại sau 1-2 tháng.",
    ],
    lotusRecommendation:
      "Cắt mở rộng mép bọng rộp thêm 10-15cm vào vùng bê tông còn dính chắc trước khi quét lót hệ nước.",
    sections: [
      {
        id: "quy-trinh-sua-chua",
        heading: "1. Quy trình 4 bước sửa chữa sàn bị phồng rộp",
        steps: [
          { step: "Bước 1", title: "Bóc bỏ bọng rộp", desc: "Dùng máy mài bóc sạch 100% bọng rộp và cắt rộng mép 15cm." },
          { step: "Bước 2", title: "Hút bụi & Sấy ráo", desc: "Hút sạch bụi bẩn và sấy ráo bề mặt bê tông." },
          { step: "Bước 3", title: "Lăn lót chịu ẩm Lotus", desc: "Lăn 1 lớp lót Lotus WB Moisture Primer thẩm thấu sâu." },
          { step: "Bước 4", title: "Bả phẳng & Sơn phủ", desc: "Bả phẳng bằng vữa Lotus Mortar và lăn 2 lớp sơn phủ hoàn thiện Lotus WB." },
        ],
      },
    ],
    faqs: [
      {
        question: "Sửa bằng sơn hệ nước Lotus có bị phồng rộp lại không?",
        answer:
          "Không. Cấu trúc vi mao dẫn của sơn Lotus cho phép hơi ẩm thoát ra ngoài tự do, triệt tiêu hoàn toàn áp suất thẩm thấu gây phồng rộp.",
      },
    ],
    relatedSlugs: ["son-san-he-nuoc", "son-san-he-nuoc/be-tong-am"],
  },

  "chuyen-doi-he-nuoc/chinh-sung-phun-phong-say": {
    slug: "chuyen-doi-he-nuoc/chinh-sung-phun-phong-say",
    category: "Cẩm Nang Chuyển Đổi",
    categorySlug: "chuyen-doi-he-nuoc",
    title: "Cách Chỉnh Súng Phun & Cải Tạo Phòng Sấy Sơn Hệ Nước Chuẩn Xưởng | Lotus",
    metaDescription:
      "Hướng dẫn kỹ thuật chỉnh súng phun HVLP/Airless cho sơn hệ nước: Cỡ béc 1.4-1.8mm, áp suất khí 2.0-2.5 Bar, chống lỗi sần da cam và thiết kế phòng phơi sấy gió tối ưu chi phí.",
    h1: "Hướng Dẫn Kỹ Thuật Cân Chỉnh Súng Phun & Cải Tạo Phòng Phơi Sấy Cho Sơn Hệ Nước",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Kỹ thuật thi công sơn hệ nước chuẩn xưởng: Sử dụng béc phun Inox 316 kích thước 1.4mm - 1.8mm, cài đặt áp suất khí nén 2.0 - 2.5 Bar (hoặc 1.8 - 2.2 Bar với súng HVLP), khoảng cách phun 15 - 20cm và thiết kế phòng sấy gió đối lưu với vận tốc gió bề mặt 0.8 - 1.2 m/s giúp sơn khô xả nhám trong 45 - 60 phút.",
    whenToChoose: [
      "Áp dụng cho mọi xưởng nội thất và nhà máy đang chuyển đổi từ sơn PU sang sơn hệ nước.",
    ],
    whenNotToChoose: [],
    lotusRecommendation:
      "Không cần phun đẫm ướt sũng như sơn PU. Sơn hệ nước tự dàn phẳng trong 3-5 phút sau khi phun với độ chồng mí vạt sơn 50-60%.",
    sections: [
      {
        id: "thong-so-chinh-sung",
        heading: "1. Bảng thông số cân chỉnh súng phun sơn hệ nước",
        table: {
          headers: ["Công đoạn phun", "Cỡ béc Inox", "Áp suất khí", "Độ dày màng ướt WFT"],
          rows: [
            ["Sơn lót xả nhám (Sealer)", "1.5 - 1.8 mm", "2.2 - 2.5 Bar", "80 - 100 µm"],
            ["Sơn màu tôn vân (Stain)", "1.3 - 1.4 mm", "1.8 - 2.0 Bar", "40 - 60 µm"],
            ["Sơn phủ bóng/mờ (Topcoat)", "1.4 - 1.5 mm", "2.0 - 2.2 Bar", "70 - 90 µm"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Có cần lắp bóng đèn sấy hồng ngoại trong phòng phơi sơn nước không?",
        answer:
          "Không bắt buộc. Yếu tố cốt lõi là quạt gió lưu thông không khí bề mặt. Đèn sấy chỉ cần vào những ngày mùa đông mưa phùn rét buốt.",
      },
    ],
    relatedSlugs: ["chuyen-doi-he-nuoc", "loi-thi-cong/xu-long-go", "so-sanh/son-go-he-nuoc-vs-son-pu"],
  },

  "chuyen-doi-he-nuoc/dao-tao-tho-son": {
    slug: "chuyen-doi-he-nuoc/dao-tao-tho-son",
    category: "Cẩm Nang Chuyển Đổi",
    categorySlug: "chuyen-doi-he-nuoc",
    title: "Đào Tạo Thợ Sơn Hệ Nước: 5 Thay Đổi Kỹ Thuật Cốt Lõi Cho Thợ PU | Lotus",
    metaDescription:
      "Hướng dẫn đào tạo thợ sơn chuyển đổi từ sơn PU sang sơn hệ nước: Thay đổi thói quen ép màng dày, kỹ thuật xả nhám tơi mịn sau 45 phút, chỉnh súng không chảy sệ.",
    h1: "Giáo Trình Huấn Luyện Thợ Sơn Chuyển Đổi Từ Sơn PU Sang Sơn Hệ Nước Trong 3 Ngày",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Rào cản lớn nhất khi chuyển sang sơn hệ nước là thói quen của thợ sơn. Do quen ép lớp dày và pha xăng thơm, thợ sơn thường làm sơn nước bị chảy sệ và lâu khô. Giáo trình huấn luyện 3 ngày của Lotus tập trung vào 5 thay đổi cốt lõi: pha loãng nước tối đa 10%, phun lớp mỏng tận dụng tính năng tự dàn phẳng, xả nhám P320 tơi mịn sau 45 phút và rửa súng bằng nước sạch.",
    whenToChoose: [
      "Áp dụng khi nhà máy hoặc xưởng mộc bắt đầu đưa dòng sơn hệ nước vào sản xuất thử nghiệm.",
    ],
    whenNotToChoose: [],
    lotusRecommendation:
      "Hãy để thợ sơn chính tự tay phun thử 2 mẫu cánh tủ: một mẫu dùng PU và một mẫu dùng Lotus. Khi thấy màng sơn không cay mắt, giữ vân sáng trong vắt và xả nhám nhẹ tay, thợ sẽ tự tin chuyển đổi ngay.",
    sections: [
      {
        id: "thao-tac-tay-nghe",
        heading: "1. Bảng đối chiếu thao tác tay nghề PU vs Sơn Nước",
        table: {
          headers: ["Thao tác", "Thói quen cũ với Sơn PU", "Thao tác chuẩn Sơn Nước Lotus"],
          rows: [
            ["Pha loãng", "30% - 50% xăng thơm độc hại", "5% - 10% nước sạch tinh khiết"],
            ["Khoảng cách súng", "12 - 15 cm (Gần)", "18 - 22 cm (Xa hơn để tơi hạt)"],
            ["Tốc độ đưa tay", "Chậm và đè vạt", "Nhanh và đều nhịp hơn 25%"],
            ["Độ chồng mí", "70% (Dày cộm)", "50% - 60% (Vừa đủ)"],
            ["Giấy nhám xả", "P240 (Chà mạnh)", "P320 - P400 (Lướt nhẹ)"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Rửa súng phun bằng nước sạch có sạch hết sơn không?",
        answer:
          "Nước sạch rửa trôi 100% sơn hệ nước khi màng sơn còn ướt. Chỉ cần tráng cốc và xịt thông béc 10 giây là súng sạch hoàn toàn mà không tốn 1 đồng tiền xăng rửa.",
      },
    ],
    relatedSlugs: ["chuyen-doi-he-nuoc", "chuyen-doi-he-nuoc/chinh-sung-phun-phong-say", "chuyen-doi-he-nuoc/tco-chi-phi-son-he-nuoc"],
  },

  "chuyen-doi-he-nuoc/tco-chi-phi-son-he-nuoc": {
    slug: "chuyen-doi-he-nuoc/tco-chi-phi-son-he-nuoc",
    category: "Cẩm Nang Chuyển Đổi",
    categorySlug: "chuyen-doi-he-nuoc",
    title: "Bài Toán TCO: Chi Phí Thực Tế 1m2 Sơn Hệ Nước vs Sơn PU | Lotus",
    metaDescription:
      "Phân tích chi phí sở hữu toàn diện (TCO): Sơn hệ nước tiết kiệm 15-20% chi phí thực tế trên 1m2 so với sơn PU nhờ 0đ tiền xăng thơm, hàm lượng rắn cao và giảm phí PCCC.",
    h1: "Bài Toán TCO (Total Cost of Ownership): Chi Phí Thực Tế Trên 1m2 Sơn Hệ Nước Liệu Có Đắt Hơn Sơn PU?",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Mặc dù giá mua 1kg sơn nước cao hơn sơn PU từ 15% - 25%, nhưng tính trên tổng chi phí m2 hoàn thiện (TCO), sơn hệ nước giúp tiết kiệm từ 10.000 đ đến 18.000 đ/m2. Lý do: chi phí dung môi pha loãng bằng 0đ (dùng nước thay cho xăng thơm), hàm lượng chất rắn hữu dụng cao (38-45%), tỷ lệ hao hụt bay hơi thấp và cắt giảm chi phí bảo hiểm cháy nổ PCCC.",
    whenToChoose: [
      "Ban giám đốc và phòng mua hàng cần đánh giá bài toán kinh tế trước khi ký kết hợp đồng cung ứng chuyển đổi nhà máy.",
    ],
    whenNotToChoose: [],
    lotusRecommendation:
      "Tính toán dự toán theo công thức: Tổng chi phí = (Khối lượng sơn x Giá sơn) + (Khối lượng dung môi x Giá dung môi) + Chi phí hao hụt để thấy rõ mức tiết kiệm thực tế của hệ nước.",
    sections: [
      {
        id: "bang-tco-1m2",
        heading: "1. Bảng bóc tách 8 cấu phần chi phí hoàn thiện 1m2 gỗ",
        table: {
          headers: ["Cấu phần", "Sơn PU Truyền Thống", "Sơn Nước Lotus", "Chênh lệch"],
          rows: [
            ["Đơn giá sơn gốc", "80.000 đ / kg", "105.000 đ / kg", "+ 25.000 đ"],
            ["Dung môi pha", "Xăng thơm (8.500 đ/m2)", "Nước sạch (0 đ)", "- 8.500 đ"],
            ["Chất cứng", "9.500 đ / m2", "0 đ (1K) / 4.000 đ (2K)", "- 5.500 đ"],
            ["Xăng rửa súng", "3.000 đ / m2", "Nước sạch (0 đ)", "- 3.000 đ"],
            ["Phí PCCC / Khí thải", "5.000 đ / m2", "1.000 đ / m2", "- 4.000 đ"],
            ["TỔNG CHI PHÍ TCO/M2", "46.000 đ / m2", "36.600 đ / m2", "TIẾT KIỆM -20.4%"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Nhà máy sơn 10.000 m2/tháng chuyển đổi sang sơn nước tiết kiệm được bao nhiêu?",
        answer:
          "Mức tiết kiệm vật tư trực tiếp và xăng thơm là khoảng 94.000.000 đ/tháng (hơn 1.1 tỷ đồng mỗi năm), chưa kể tiết kiệm chi phí bảo hiểm cháy nổ và than hoạt tính lọc khí.",
      },
    ],
    relatedSlugs: ["chuyen-doi-he-nuoc", "so-sanh/son-go-he-nuoc-vs-son-pu", "chuyen-doi-he-nuoc/dao-tao-tho-son"],
  },

  "son-composite-he-nuoc": {
    slug: "son-composite-he-nuoc",
    category: "Sơn Composite Hệ Nước",
    categorySlug: "son-composite-he-nuoc",
    title: "Sơn Composite Hệ Nước (FRP, Carbon): Bám Dính 5B, Kháng UV Vượt Trội | Lotus",
    metaDescription:
      "Sơn phủ composite hệ nước Lotus bám dính trực tiếp trên nhựa FRP, sợi Carbon, bề mặt Gelcoat. Chống nứt chân chim, kháng hóa chất, chịu thời tiết biển, không ố vàng.",
    h1: "Sơn Composite Hệ Nước Chuyên Dụng: Giải Pháp Phủ Bảo Vệ Vật Liệu FRP, Carbon & Gelcoat",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn composite hệ nước Lotus là hệ sơn phủ polymer phân tán nước công nghệ cao, giải quyết triệt để thách thức bám dính trên các bề mặt vật liệu trơn nhẵn như nhựa sợi thủy tinh (FRP), sợi Carbon (CFRP) và lớp Gelcoat. Sơn đạt độ bám dính 5B (ASTM D3359), dẻo dai chống nứt vỡ khi uốn cong, kháng sương muối biển 1000h và bền màu ngoài trời trên 5 năm.",
    whenToChoose: [
      "Vỏ cano, du thuyền, phao cứu sinh, chi tiết ô tô làm từ sợi Carbon hoặc nhựa FRP.",
      "Bồn bể composite chứa hóa chất công nghiệp, tượng mỹ thuật công viên chủ đề.",
    ],
    whenNotToChoose: [
      "Bề mặt composite mới tháo khuôn chưa lau sạch lớp sáp chống dính khuôn (Mould Release Wax).",
    ],
    lotusRecommendation:
      "Dùng khăn sạch tẩm dung dịch tẩy sáp chuyên dụng Lotus Wax Remover lau kỹ theo 1 chiều, sau đó dùng nhám xốp P320 chà mờ đều bề mặt Gelcoat trước khi phun sơn lót.",
    sections: [
      {
        id: "chi-tieu-composite",
        heading: "1. Bảng chỉ tiêu cơ lý tính của Sơn Composite Lotus",
        table: {
          headers: ["Chỉ tiêu", "Phương pháp", "Tiêu chuẩn", "Kết quả Sơn Lotus", "Đánh giá"],
          rows: [
            ["Bám dính ô cờ FRP/Carbon", "ASTM D3359", "5B (Không tróc)", "Điểm 5B (Tuyệt đối)", "ĐẠT CHUẨN CAO NHẤT"],
            ["Độ bền uốn cong", "ASTM D522 (Trục 3mm)", "Không nứt", "Không nứt gãy", "DẺO DAI THEO PHÔI"],
            ["Kháng sương muối biển", "ASTM B117", "1000 giờ", "Không phồng rộp", "CHỊU MÔI TRƯỜNG BIỂN"],
            ["Kháng UV thời tiết", "ASTM G154 (1500h)", "ΔE < 2.0", "ΔE < 1.2 (Không phai)", "BỀN MÀU 5 NĂM"],
            ["Hàm lượng VOCs", "EPA Method 24", "< 150 g/L", "< 40 g/L", "AN TOÀN XƯỞNG SƠN"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Sơn composite Lotus có chịu được việc ngâm liên tục trong nước biển không?",
        answer:
          "Có. Dòng sơn 2K Composite Lotus tạo mạng lưới liên kết ngang polyurethane chịu ngâm nước biển mặn liên tục mà không bị thủy phân hay phồng rộp.",
      },
    ],
    relatedSlugs: ["son-kim-loai-he-nuoc", "chuyen-doi-he-nuoc"],
  },
  "loi-thi-cong/mat-ca-ro-kim": {
    slug: "loi-thi-cong/mat-ca-ro-kim",
    category: "Xử Lý Sự Cố",
    categorySlug: "loi-thi-cong",
    title: "Khắc Phục Lỗi Sơn Hệ Nước Bị Mắt Cá & Rỗ Kim (Fish-Eyes) | Kỹ Thuật Lotus",
    metaDescription:
      "Tìm hiểu nguyên nhân màng sơn nước bị lõm mắt cá, rỗ lỗ kim do nhiễm hơi dầu khí nén, sáp silicon và quy trình 4 bước xử lý dứt điểm từ chuyên gia Lotus.",
    h1: "Khắc Phục Triệt Để Lỗi Sơn Hệ Nước Bị Mắt Cá & Rỗ Lỗ Kim (Fish-Eyes & Cratering)",
    publishedAt: "22/08/2026",
    readTime: "6 phút đọc",
    quickSummary:
      "Lỗi mắt cá (Fish-eyes) là hiện tượng màng sơn xuất hiện hố tròn lõm do chênh lệch sức căng bề mặt giữa nước và các điểm nhiễm bẩn như hơi dầu máy nén khí, sáp khuôn Silicone hoặc mồ hôi tay. Biện pháp triệt để: Lắp cụm lọc khí nén 3 cấp (tách nước, lọc vi sợi 0.01µm, than hoạt tính) và lau phôi bằng dung dịch tẩy nhờn chuyên dụng Lotus Degreaser.",
    whenToChoose: [
      "Áp dụng khi bề mặt màng sơn vừa phun xuất hiện các miệng hố tròn trũng lõm co cụm màng sơn.",
    ],
    whenNotToChoose: [
      "Tuyệt đối không phun đè lớp sơn mới lên vết mắt cá ướt vì sẽ làm lõm sâu hơn.",
    ],
    lotusRecommendation:
      "Dừng chuyền ngay lập tức, để màng sơn khô hoàn toàn trong 60 phút, xả nhám P320 phẳng miệng hố, vệ sinh đường ống khí nén và lau lại phôi bằng cồn 90° trước khi sơn dặm.",
    sections: [
      {
        id: "so-do-loc-khi",
        heading: "1. Sơ đồ lắp đặt bộ lọc khí nén 3 cấp chuẩn cho sơn hệ nước",
        steps: [
          { step: "Cấp 1", title: "Lọc thô 5 µm", desc: "Tách sạch bụi thô và nước ngưng tụ từ bình tích khí." },
          { step: "Cấp 2", title: "Lọc vi sợi 0.01 µm", desc: "Tách 99.9% hơi dầu nhớt rò rỉ từ piston máy nén khí." },
          { step: "Cấp 3", title: "Lọc than hoạt tính 0.003 ppm", desc: "Khử sạch mùi và các phân tử sáp hữu cơ siêu mịn trước khi vào súng phun." },
        ],
      },
    ],
    faqs: [
      {
        question: "Có nên dùng cồn xịt trực tiếp lên mắt cá khi sơn đang ướt không?",
        answer:
          "Tuyệt đối không. Xịt cồn lên màng sơn ướt gây sốc dung môi làm đục trắng và biến dạng bề mặt. Cần chờ khô và xả nhám phẳng trước khi sơn dặm.",
      },
    ],
    relatedSlugs: ["chuyen-doi-he-nuoc/chinh-sung-phun-phong-say", "loi-thi-cong/da-cam-chay-son"],
  },

  "loi-thi-cong/da-cam-chay-son": {
    slug: "loi-thi-cong/da-cam-chay-son",
    category: "Xử Lý Sự Cố",
    categorySlug: "loi-thi-cong",
    title: "Khắc Phục Lỗi Sơn Hệ Nước Bị Da Cam & Chảy Sệ Màng Sơn | Lotus",
    metaDescription:
      "Hướng dẫn căn chỉnh độ nhớt cốc Ford #4 (18-22s), áp suất khí 2.0-2.5 bar và kỹ thuật phun di chuyển tay dứt khoát triệt tiêu 100% lỗi da cam và chảy sệ sơn hệ nước.",
    h1: "Khắc Phục Triệt Để Hiện Tượng Sơn Hệ Nước Bị Sần Da Cam (Orange Peel) & Chảy Sệ (Sagging)",
    publishedAt: "22/08/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Lỗi sần da cam (sơn quá đặc, áp suất khí yếu) và chảy sệ (sơn quá loãng, phun quá dày một lượt) được triệt tiêu 100% khi kiểm soát đúng 3 thông số: Độ nhớt chuẩn 18 - 22 giây (Cốc Ford #4), áp suất khí nén 2.0 - 2.5 Bar, và duy trì độ dày màng ướt WFT từ 80 - 100 µm/lớp.",
    whenToChoose: [
      "Kiểm tra định kỳ trước mỗi ca làm việc bằng Cốc Ford #4 và đồng hồ bấm giờ.",
    ],
    whenNotToChoose: [],
    lotusRecommendation:
      "Khi thời tiết nắng nóng trên 35°C, pha thêm 2-3% dung môi làm chậm khô Lotus Retarder để kéo dài thời gian tự dàn phẳng màng sơn.",
    sections: [
      {
        id: "bang-can-chinh",
        heading: "1. Bảng ma trận cân chỉnh thông số súng phun chống da cam & chảy sệ",
        table: {
          headers: ["Dòng sơn", "Cỡ béc Inox", "Độ nhớt Cốc Ford #4", "Áp suất khí", "Màng ướt WFT"],
          rows: [
            ["Lót xả nhám (Sealer)", "1.6 - 1.8 mm", "20 - 24 giây", "2.2 - 2.5 Bar", "90 - 110 µm"],
            ["Nền tôn vân (Basecoat)", "1.3 - 1.4 mm", "17 - 19 giây", "1.8 - 2.0 Bar", "50 - 70 µm"],
            ["Phủ bóng (Gloss Topcoat)", "1.4 - 1.5 mm", "18 - 20 giây", "2.0 - 2.3 Bar", "80 - 100 µm"],
            ["Phủ mờ (Matt Topcoat)", "1.4 - 1.5 mm", "19 - 21 giây", "2.0 - 2.2 Bar", "80 - 90 µm"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Bề mặt đã bị da cam có cách nào xử lý mà không cần cạo bỏ toàn bộ không?",
        answer:
          "Chờ màng sơn khô cứng sau 2 tiếng, dùng nhám nước P600-P800 xả phẳng đỉnh sần da cam, lau sạch bụi và phun dặm lại 1 lớp mỏng đúng độ nhớt 18 giây.",
      },
    ],
    relatedSlugs: ["chuyen-doi-he-nuoc/chinh-sung-phun-phong-say", "loi-thi-cong/mat-ca-ro-kim"],
  },

  "loi-thi-cong/son-lau-kho-dinh-mat": {
    slug: "loi-thi-cong/son-lau-kho-dinh-mat",
    category: "Xử Lý Sự Cố",
    categorySlug: "loi-thi-cong",
    title: "Khắc Phục Lỗi Sơn Hệ Nước Lâu Khô & Dính Mặt Khi Đóng Gói (Blocking) | Lotus",
    metaDescription:
      "Tìm hiểu nguyên nhân sơn hệ nước lâu khô, dính màng khi xếp chồng đóng gói và giải pháp sấy đối lưu gió, phụ gia tăng cứng đạt chuẩn kháng dính mặt ASTM D2793.",
    h1: "Xử Lý Triệt Để Hiện Tượng Sơn Hệ Nước Lâu Khô & Dính Mặt Khi Xếp Chồng Đóng Gói (Blocking)",
    publishedAt: "22/08/2026",
    readTime: "6 phút đọc",
    quickSummary:
      "Lỗi dính mặt khi đóng gói (Blocking) xảy ra khi thiếu lưu thông gió bề mặt hoặc đóng gói khi màng sơn mới chỉ khô mặt chứ chưa khô thấu hoàn toàn, đặc biệt khi độ ẩm không khí > 85%. Giải pháp chuẩn: Áp dụng thông gió đối lưu cưỡng bức (vận tốc gió 0.8 - 1.2 m/s) và dòng sơn kháng dính mặt đạt chuẩn ASTM D2793 sau 3-4 giờ phơi sấy.",
    whenToChoose: [
      "Quy chuẩn bắt buộc cho mọi nhà máy sản xuất đồ gỗ nội thất xuất khẩu và đóng gói pallet.",
    ],
    whenNotToChoose: [],
    lotusRecommendation:
      "Luôn dùng móng tay bấm thử vào góc khuất sản phẩm trong 10 giây; nếu không để lại vết hằn lún mới cho phép bọc màng xốp đóng thùng carton.",
    sections: [
      {
        id: "thoi-gian-dong-goi",
        heading: "1. Bảng thời gian đóng gói an toàn theo điều kiện phòng phơi",
        table: {
          headers: ["Điều kiện phòng sấy", "Nhiệt độ", "Độ ẩm RH", "Thời gian trước đóng gói", "Đánh giá"],
          rows: [
            ["Phòng phơi tự nhiên (Mùa hè)", "30 - 35°C", "55 - 65%", "2.5 - 3 giờ", "An toàn"],
            ["Phòng phơi có quạt gió cưỡng bức", "28 - 32°C", "60 - 70%", "1.5 - 2 giờ", "Tối ưu năng suất"],
            ["Phòng sấy gió ấm đối lưu", "40 - 45°C", "< 50%", "40 - 50 phút", "Xuất xưởng cấp tốc"],
            ["Thời tiết nồm ẩm (Không quạt)", "20 - 24°C", "> 85%", "> 12 giờ (Nguy cơ dính)", "Cần máy hút ẩm"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Sản phẩm bị dính mờ dấu vân xốp nhẹ khi bóc màng nilon thì xử lý thế nào?",
        answer:
          "Dùng khăn microfiber sạch tẩm sáp đánh bóng cana lau xoáy tròn nhẹ nhàng trong 1 phút, màng sơn sẽ sáng bóng phẳng lại như mới mà không cần sơn lại.",
      },
    ],
    relatedSlugs: ["chuyen-doi-he-nuoc/chinh-sung-phun-phong-say", "chuyen-doi-he-nuoc/dao-tao-tho-son"],
  },

  "son-loa-he-nuoc": {
    slug: "son-loa-he-nuoc",
    category: "Sơn Loa Hệ Nước",
    categorySlug: "son-loa-he-nuoc",
    title: "Sơn Loa Hệ Nước: Sơn Thùng Loa MDF Sần Đều, Khô Nhanh, Không Mùi | Sơn Lotus",
    metaDescription:
      "Sơn loa hệ nước Lotus cho xưởng sản xuất thùng loa MDF, gỗ dán: lót chặn xơ chống phồng cạnh, sơn sần texture đồng đều, khô 45 phút, chống trầy vận chuyển, không mùi độc hại. Nhận mẫu test xưởng miễn phí.",
    h1: "Sơn Loa Hệ Nước: Giải Pháp Hoàn Thiện Thùng Loa MDF & Gỗ Dán Cho Xưởng Sản Xuất",
    publishedAt: "01/11/2026",
    readTime: "8 phút đọc",
    quickSummary:
      "Sơn loa hệ nước là hệ sơn phủ gốc nước chuyên dụng cho thùng loa gỗ công nghiệp (MDF, HDF, gỗ dán), dùng cặp đôi Lotus Speaker Primer (lót chặn xơ, làm mịn nền) và Lotus Speaker Paint (sơn sần texture điều chỉnh được, pha màu theo yêu cầu). Hệ sơn khô ráo mặt 30 - 60 phút, độ bám dính trên MDF đạt 5B (ASTM D3359), chống trầy - chống ẩm - chống nước, VOC < 45 g/L và không mùi dung môi.",
    whenToChoose: [
      "Xưởng sản xuất loa kéo, loa thùng karaoke, loa line array, subwoofer làm bằng MDF / HDF / gỗ dán số lượng lớn, cần nhịp chuyền khô nhanh.",
      "Xưởng đặt trong khu công nghiệp mật độ cao hoặc gần khu dân cư, bị giới hạn phát thải mùi dung môi và yêu cầu PCCC khắt khe.",
      "Đơn hàng loa xuất khẩu EU / Mỹ yêu cầu màng phủ VOC thấp, không kim loại nặng (EN71-3, REACH) hoặc đi kèm chứng nhận CARB/EPA cho lõi MDF.",
      "Sản phẩm cần hoàn thiện sần đen, mâm nhám che khuyết điểm bề mặt MDF thay vì dán nỉ / decal tốn công.",
    ],
    whenNotToChoose: [
      "Thùng MDF bị ngấm nước, phồng rộp cạnh chưa sửa — phải thay hoặc xử lý nền trước khi sơn.",
      "Đơn hàng yêu cầu bề mặt bóng gương piano-finish dày trên 400 - 500 µm (nên dùng hệ sơn riêng hoặc quy trình đa lớp có sấy cưỡng bức).",
    ],
    lotusRecommendation:
      "Cạnh cắt và mặt khoan lỗ của tấm MDF hút nước gấp 3 - 5 lần mặt phẳng, là nguyên nhân số 1 gây phồng cạnh và xù xơ sau sơn. Bắt buộc dùng Sơn Lót Loa Lotus Speaker Primer nguyên chất lăn hoặc chà riêng vào cạnh cắt trước khi phun lót tổng thể.",
    sections: [
      {
        id: "son-loa-he-nuoc-la-gi",
        heading: "1. Sơn loa hệ nước là gì — đặc thù thùng loa trên nền gỗ công nghiệp",
        paragraphs: [
          "Sơn loa hệ nước là hệ sơn phủ dùng nước làm môi trường phân tán, được thiết kế riêng cho bề mặt gỗ công nghiệp làm thùng loa — chủ yếu MDF, HDF và gỗ dán birch.",
        ],
        list: [
          "Xơ gỗ nghiền mịn, hút nước cực mạnh: đặc biệt tại cạnh cắt và lỗ khoan, nước trong sơn bị hút vào làm xơ gỗ trương nở gây phồng cạnh, xù bề mặt.",
          "Bề mặt trơ, ít mao dẫn mở: lớp lót phải đóng vai trò móng neo cơ học vì sơn không thẩm thấu sâu như trên gỗ tự nhiên.",
          "Keo ure-formaldehyde trong lõi ván: hệ lót Lotus có khả năng khóa phát thải, giảm formaldehyde thoát ra từ lõi MDF.",
        ],
      },
      {
        id: "he-san-pham-son-loa",
        heading: "2. Hệ sản phẩm sơn loa chuyên dụng của Lotus",
        paragraphs: [
          "Lotus cung cấp hệ sơn loa gốc nước đồng bộ cho toàn bộ quy trình hoàn thiện thùng loa, đóng gói thùng 20 kg cho nhịp sản xuất xưởng:",
        ],
        table: {
          headers: ["Sản phẩm", "Vai trò trong hệ sơn", "Đặc tính nổi bật"],
          rows: [
            ["Sơn Lót Loa — Lotus Speaker Primer", "Lót chặn xơ cạnh cắt & lót tổng thể", "Bám dính cao trên gỗ tự nhiên & gỗ công nghiệp, làm mịn bề mặt, che khuyết điểm nhỏ, độ phủ cao tiêu hao thấp"],
            ["Sơn Sần Loa — Lotus Speaker Paint", "Lớp texture sần / màu hoàn thiện", "Điều chỉnh độ sần theo nhu cầu, chống trầy - chống ẩm - chống nước, ít mùi, hạn chế bám bụi dễ vệ sinh, pha màu theo yêu cầu"],
            ["Phủ mờ chống trầy (tùy chọn)", "Lớp bảo vệ ngoài cho loa di động", "Độ cứng 2H, kháng nước bề mặt — đặt theo yêu cầu đơn hàng"],
          ],
        },
      },
      {
        id: "bang-thong-so-ky-thuat",
        heading: "3. Bảng thông số cơ lý tính tiêu chuẩn",
        paragraphs: [
          "Kiểm nghiệm tại Phòng Thí nghiệm R&D Lotus và QUATEST 3 trên mẫu phôi MDF 17mm tiêu chuẩn:",
        ],
        table: {
          headers: ["Chỉ tiêu kỹ thuật", "Phương pháp thử", "Kết quả hệ sơn loa Lotus", "Ý nghĩa cho xưởng"],
          rows: [
            ["Độ bám dính trên MDF", "ASTM D3359", "5B (100% không tróc)", "Không bong khi lắp vit, bản lề"],
            ["Độ cứng màng sơn", "ASTM D3363", "H - 2H", "Chống trầy khi xếp chồng, vận chuyển"],
            ["Thời gian khô ráo mặt", "30°C, RH 70% có gió", "30 - 60 phút", "Kịp nhịp chuyền xếp dỡ"],
            ["Thời gian khô xả nhám", "30°C, có quạt lưu thông", "45 - 60 phút", "Xả nhám trong ca, không bết ráp"],
            ["Thời gian đóng gói", "Sau lớp phủ cuối", "4 - 6 giờ", "Đóng thùng trong ngày"],
            ["Kháng nước bề mặt (24h)", "ISO 2812-2", "Không phồng, không trắng hóa", "Loa kéo dùng ngoài trời an toàn"],
            ["Hàm lượng VOCs", "EPA Method 24", "< 45 g/L", "Không mùi độc cho thợ phun"],
          ],
        },
      },
      {
        id: "quy-trinh-thi-cong",
        heading: "4. Quy trình thi công chuẩn 4 bước cho thùng loa MDF",
        steps: [
          {
            step: "Bước 1",
            title: "Lót chặn xơ cạnh cắt & lỗ khoan",
            desc: "Dùng Sơn Lót Loa Lotus Speaker Primer nguyên chất lăn/chà kỹ vào cạnh cắt, lỗ loa, rãnh âm. Khô 30 - 45 phút, xả nhám nhẹ P320 phá xơ dựng.",
          },
          {
            step: "Bước 2",
            title: "Phun lót tổng thể (Lotus Speaker Primer)",
            desc: "Phun 1 - 2 lớp lót bằng cọ, con lăn hoặc súng phun (WFT 90 - 120 µm/lớp, béc 1.5 - 1.8mm). Sau 45 - 60 phút xả nhám tơi P320 - P400 cho bề mặt phẳng đều.",
          },
          {
            step: "Bước 3",
            title: "Sơn sần hoặc sơn màu (Lotus Speaker Paint)",
            desc: "Sơn sần: súng sần béc 2.5 - 3.5mm áp 1.0 - 1.5 Bar. Sơn mâm/phủ màu: HVLP béc 1.4 - 1.6mm hoặc cọ lăn, 2 lớp mỏng giao nhau. Sơn hỗ trợ pha màu theo yêu cầu.",
          },
          {
            step: "Bước 4",
            title: "Phủ bảo vệ chống trầy (tùy chọn)",
            desc: "Loa kéo di chuyển nhiều nên phun thêm 1 lớp phủ mờ độ cứng 2H. Để khô 4 - 6 giờ trước khi lắp linh kiện và đóng thùng.",
          },
        ],
      },
      {
        id: "ky-thuat-phun-son-san",
        heading: "5. Bảng thông số phun sơn sần theo cỡ hạt",
        paragraphs: [
          "Ba thông số quyết định kích thước hạt sần — chốt một bộ thông số duy nhất cho toàn đơn hàng, phun tấm mẫu đầu ca làm chuẩn so màu & cỡ hạt cho tất cả thợ:",
        ],
        table: {
          headers: ["Thông số", "Sần mịn", "Sần vừa", "Sần to"],
          rows: [
            ["Độ nhớt sơn", "Pha 10 - 15% nước", "Nguyên chất / pha 5%", "Nguyên chất"],
            ["Áp khí súng sần", "1.5 - 2.0 Bar", "1.0 - 1.5 Bar", "0.5 - 1.0 Bar"],
            ["Khoảng cách phun", "30 - 35 cm", "25 - 30 cm", "20 - 25 cm"],
          ],
        },
      },
      {
        id: "chong-am-phong-canh",
        heading: "6. Chống ẩm phồng cạnh MDF & độ bền khi đóng gói",
        paragraphs: [
          "Cạnh MDF hút nước làm xơ trương nở vĩnh viễn, phồng thành đường bầu. Ba lớp phòng thủ: lót chặn xơ cạnh bắt buộc, không phun ướt quá mức ở cạnh, và với đơn cao cấp thì trám cạnh bằng bột trét gốc nước trước khi sơn.",
          "Màng sơn đạt 90% cơ lý sau 24 giờ; đóng gói sớm 4 - 6 giờ chỉ nên dùng xốp định hình, không để màng ép trực tiếp vào PE/carton. Đơn container đường biển nên lót giấy hoặc nilon mỏng chống lỗi blocking khi xếp chồng.",
        ],
      },
      {
        id: "so-sanh-phuong-an",
        heading: "7. So sánh với sơn sần dung môi và dán nỉ vinyl",
        table: {
          headers: ["Tiêu chí", "Sơn sần hệ nước Lotus", "Sơn sần dung môi", "Dán nỉ / vinyl"],
          rows: [
            ["Mùi & an toàn thợ", "Không mùi độc, VOC thấp", "Mùi xăng nồng, VOC cao", "Keo dán phát thải VOC"],
            ["PCCC xưởng", "Không cháy lan", "Nguy cơ cháy cao", "Kho keo, nỉ dễ cháy"],
            ["Nhịp sản xuất", "45 - 60 phút/lớp", "30 - 45 phút/lớp", "60 - 90 phút/thùng"],
            ["Chống trầy vận chuyển", "Tốt (thêm topcoat)", "Tốt", "Kém (nỉ rách, xù)"],
            ["Sửa chữa, dặm vá", "Dễ, phun lại cục bộ", "Dễ", "Khó, phải bóc dán lại"],
            ["Đơn xuất khẩu yêu cầu VOC", "Đạt", "Không đạt", "Tùy loại keo"],
          ],
        },
      },
      {
        id: "dinh-muc-tieu-hao",
        heading: "8. Định mức tiêu hao cho 1 thùng loa",
        paragraphs: [
          "Tham chiếu thùng loa kéo 4 tấc (~ 1.8 - 2.2 m2 bề mặt sơn toàn phần gồm cạnh). Cả Speaker Primer và Speaker Paint đều đóng gói thùng 20 kg — đủ cho khoảng 60 - 80 thùng loa/hệ hoàn thiện:",
        ],
        table: {
          headers: ["Hạng mục sơn", "Định mức lý thuyết", "Tiêu hao / thùng", "Thời gian chờ"],
          rows: [
            ["Lót chặn xơ cạnh (Speaker Primer)", "15 - 20 m2/kg", "40 - 60 g", "30 - 45 phút"],
            ["Lót tổng thể (Speaker Primer)", "8 - 10 m2/kg", "180 - 250 g", "45 - 60 phút"],
            ["Sơn sần / màu (Speaker Paint)", "4 - 6 m2/kg", "300 - 450 g", "1 - 2 giờ ráo mặt"],
            ["Phủ mờ chống trầy", "8 - 10 m2/kg", "180 - 250 g", "Đóng gói sau 4 - 6 giờ"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Sơn hệ nước có làm phồng, trương nở cạnh MDF không?",
        answer:
          "Không, nếu thi công đúng quy trình. Cạnh cắt MDF hút nước mạnh nên bắt buộc dùng lớp lót chặn xơ chuyên dụng (MDF Edge Sealer) trước khi phun lót tổng thể. Khi xơ ngoài cùng đã bão hòa và khóa lại, các lớp sơn sau không còn đẩy nước vào lõi ván.",
      },
      {
        question: "Sơn hệ nước có phun được texture sần to như sơn sần dung môi không?",
        answer:
          "Được. Dòng sơn sần hệ nước Lotus có hệ phụ gia tạo hạt thiết kế riêng, phun qua súng sần béc lớn ở áp khí thấp vẫn giữ được cỡ hạt từ sần mịn đến sần to tương đương sơn dung môi — miễn là giữ cố định độ nhớt, áp khí và khoảng cách phun.",
      },
      {
        question: "Thùng loa sơn hệ nước để ngoài trời có bị bong tróc, chảy nước không?",
        answer:
          "Màng sơn sau khi đóng rắn hoàn toàn (24 - 72 giờ) kháng nước tốt — ngâm nước 24 giờ không phồng, không trắng hóa. Với loa dùng ngoài trời thường xuyên nên phun thêm 1 lớp phủ mờ chống trầy chống nước.",
      },
      {
        question: "Súng phun sơn dung môi cũ có phun được sơn loa hệ nước không?",
        answer:
          "Được, không cần đổi súng. Chỉ cần vệ sinh sạch dung môi cũ bằng nước rửa chuyên dụng, nên dùng súng có kim béc inox 304/316. Súng sần hopper hiện có vẫn dùng trực tiếp cho sơn sần hệ nước.",
      },
      {
        question: "Sơn sần loa có những màu nào ngoài màu đen truyền thống không?",
        answer:
          "Sơn Sần Loa Lotus Speaker Paint hỗ trợ pha màu theo yêu cầu — ngoài đen sần tiêu chuẩn có thể đặt ghi xám, xanh navy hoặc màu riêng theo đơn hàng, giữ nguyên hiệu ứng texture và độ bền màng sơn.",
      },
      {
        question: "Lớp sơn hệ nước có làm thay đổi chất âm của thùng loa không?",
        answer:
          "Màng sơn hệ nước đàn hồi mỏng (tổng 150 - 250 µm) không làm thay đổi đáng kể cộng hưởng thùng so với sơn dung môi cùng độ dày. Chất âm phụ thuộc độ kín khít keo dán và vật liệu tiêu âm bên trong.",
      },
    ],
    relatedSlugs: ["son-go-he-nuoc", "loi-thi-cong/son-lau-kho-dinh-mat", "chuyen-doi-he-nuoc"],
  },

  "son-ngoi-he-nuoc": {
    slug: "son-ngoi-he-nuoc",
    category: "Sơn Ngói Hệ Nước",
    categorySlug: "son-ngoi-he-nuoc",
    title: "Sơn Ngói Hệ Nước: Đổi Màu Mái Ngói, Chống Rêu Mốc, Bền Màu Nắng Mưa | Sơn Lotus",
    metaDescription:
      "Sơn ngói hệ nước Lotus cho mái ngói xi măng, ngói đất nung: kháng kiềm nền xi măng pH cao, bám dính bền, chống rêu mốc nấm, kháng UV giữ màu 5 - 8 năm, thi công không mùi độc. Tư vấn khảo sát mái miễn phí.",
    h1: "Sơn Ngói Hệ Nước: Giải Pháp Đổi Màu, Chống Rêu & Bảo Vệ Mái Ngói Xi Măng, Ngói Đất Nung",
    publishedAt: "01/11/2026",
    readTime: "8 phút đọc",
    quickSummary:
      "Sơn ngói hệ nước là hệ sơn phủ gốc pure acrylic phân tán trong nước, thiết kế riêng cho nền ngói xi măng và ngói đất nung — vật liệu có độ kiềm cao (pH 11 - 12.5), hút nước và luôn tiềm ẩn rêu mốc. Hệ sơn gồm lót kháng kiềm + sơn màu kháng UV tạo màng hydrophobic thoát hơi ẩm, độ bám dính trên nền xi măng đạt > 1.5 MPa, kháng UV 1000 giờ (ASTM G154) giữ màu 5 - 8 năm ngoài trời.",
    whenToChoose: [
      "Mái ngói xi măng cũ bị bạc màu, rêu mốc đen xanh muốn đổi màu, phục hồi mà không phải thay mái.",
      "Nhà máy sản xuất ngói màu cần sơn phủ dây chuyền thay sơn dung môi để giảm VOC và rủi ro cháy nổ.",
      "Công trình biệt thự, khách sạn, resort yêu cầu thi công sơn mái không mùi khi đang vận hành.",
      "Khu vực thu hồi nước mưa sinh hoạt — sơn hệ nước không thôi nhiễm dung môi vào nguồn nước.",
    ],
    whenNotToChoose: [
      "Ngói tráng men bóng hoặc ngói lưu ly — bề mặt thủy tinh hóa không cho sơn bám dính trực tiếp.",
      "Mái đang thấm dột do nứt cấu trúc hoặc màng chống thấm bên dưới hỏng — phải xử lý chống thấm trước khi sơn màu.",
      "Ngói xi măng mới đúc dưới 28 ngày chưa ổn định độ kiềm — phải chờ đủ tuổi hoặc dùng lót kháng kiềm chuyên sâu.",
    ],
    lotusRecommendation:
      "Nguyên nhân số 1 khiến sơn mái ngói bong tróc sau 1 mùa mưa không phải chất lượng sơn mà là lớp rêu và muối kiềm chưa được tẩy sạch. Bắt buộc rửa áp lực cao 150 - 200 Bar kết hợp dung dịch diệt rêu, sau đó để mái khô ít nhất 24 - 48 giờ trước khi phun lớp lót kháng kiềm.",
    sections: [
      {
        id: "son-ngoi-he-nuoc-la-gi",
        heading: "1. Vì sao nền ngói là bề mặt khó tính",
        paragraphs: [
          "Sơn ngói hệ nước là hệ sơn màu ngoài trời gốc nhựa pure acrylic phân tán trong nước, bổ sung phụ gia kháng kiềm, chất chống rêu nấm và hệ bột màu vô cơ bền sắc.",
        ],
        list: [
          "Độ kiềm cao: ngói xi măng mới có pH 11 - 12.5, kiềm hóa ăn mòn liên kết nhựa gây loang màu, phấn hóa chỉ sau vài tháng.",
          "Hút nước & mao dẫn không đều giữa các viên: sơn khô không đồng đều, loang bóng nếu không có lớp lót kiểm soát.",
          "Tiềm ẩn rêu mốc: bề mặt xốp giữ ẩm là môi trường lý tưởng cho rêu, địa y, nấm đen — sơn lên rêu sẽ bong theo rêu.",
          "Chu kỳ nóng - lạnh khắc nghiệt: mái ngói nóng 55 - 65°C rồi nguội đột ngột khi mưa, màng sơn phải đàn hồi không giòn nứt.",
        ],
      },
      {
        id: "hai-ung-dung-chinh",
        heading: "2. Hai ứng dụng chính: đổi màu mái cũ & sơn ngói dây chuyền",
        paragraphs: [
          "Ứng dụng A — phục hồi mái đang dùng: chi phí sơn lại chỉ bằng 20 - 30% chi phí thay mái mới, thi công 2 - 4 ngày cho biệt thự 200 - 300m2 mái. Đổi từ đỏ truyền thống sang xám tro, nâu socola, xanh đá hiện đại.",
          "Ứng dụng B — nhà máy sản xuất ngói màu: phun sơn hệ nước trên chuyền sau ép tạo hình, tắt hẳn mùi dung môi trong xưởng, giảm VOC và ngói xếp chồng sớm hơn nhờ khô bề mặt nhanh.",
        ],
      },
      {
        id: "bang-thong-so-ky-thuat",
        heading: "3. Bảng thông số cơ lý tính tiêu chuẩn",
        table: {
          headers: ["Chỉ tiêu kỹ thuật", "Phương pháp thử", "Kết quả Sơn Ngói Lotus", "Ý nghĩa thực tế"],
          rows: [
            ["Bám dính nền xi măng", "ASTM D4541", "> 1.5 MPa", "Không bong khi rửa máy, mưa to"],
            ["Kháng kiềm (pH 13)", "Ngâm 168 giờ", "Không bong, không mềm màng", "Chịu nền xi măng kiềm cao"],
            ["Kháng UV lão hóa", "ASTM G154 (QUV 1000h)", "ΔE < 2.0, bóng còn > 80%", "Màu bền 5 - 8 năm ngoài trời"],
            ["Độ thấm nước (w24)", "ISO 1062-3", "< 0.1 kg/m2.√h", "Hydrophobic chặn nước mưa"],
            ["Thoát hơi ẩm (Sd)", "EN ISO 7783", "< 0.3 m", "Hơi ẩm trong ngói thoát ra"],
            ["Kháng nấm mốc, rêu", "ISO 846", "Cấp 0 - không phát triển", "Mái sạch suốt mùa mưa"],
          ],
        },
      },
      {
        id: "quy-trinh-mai-ngoi-cu",
        heading: "4. Quy trình thi công mái ngói cũ chuẩn 5 bước",
        steps: [
          {
            step: "Bước 1",
            title: "Rửa mái & diệt rêu triệt để",
            desc: "Phun dung dịch diệt rêu ngâm 30 - 60 phút, rửa máy áp lực cao 150 - 200 Bar từ nóc xuống máng. Để mái khô 24 - 48 giờ.",
          },
          {
            step: "Bước 2",
            title: "Sửa chữa bề mặt",
            desc: "Thay ngói vỡ mẻ, trám keo ngoài trời vào khe nứt tóc, xử lý lại vữa nóc bong tróc.",
          },
          {
            step: "Bước 3",
            title: "Lót kháng kiềm 1 lớp",
            desc: "Phun Lotus Alkali Resistant Primer bằng airless béc 517 - 521 hoặc lăn tay, trung hòa kiềm và đồng đều độ hút nước.",
          },
          {
            step: "Bước 4",
            title: "Phun màu lớp 1",
            desc: "Sơn màu ngói phun airless 150 - 200 Bar hoặc lăn đều, màng khô 60 - 80 µm. Chờ khô 45 - 60 phút.",
          },
          {
            step: "Bước 5",
            title: "Phun màu lớp 2 & nghiệm thu",
            desc: "Phun vuông góc hướng lớp 1 để phủ kín nếp sóng ngói. Không thi công khi dự báo mưa trong 4 giờ tới.",
          },
        ],
      },
      {
        id: "quy-trinh-nha-may",
        heading: "5. Quy trình sơn ngói màu cho nhà máy sản xuất",
        table: {
          headers: ["Hạng mục", "Khuyến nghị kỹ thuật"],
          rows: [
            ["Điểm phun trên chuyền", "Sau ép tạo hình (ngói ướt) hoặc sau dưỡng hộ — chốt 1 vị trí cố định"],
            ["Thiết bị phun", "Airless hoặc buồng phun tự động quay đều; béc 417 - 421 cho màng mỏng đều"],
            ["Độ nhớt sơn", "60 - 80 giây cốc Ford #4; không pha quá loãng tránh chảy mép sóng"],
            ["Khô & xếp chồng", "Khô bề mặt 20 - 30 phút có quạt; xếp chồng sau 2 - 4 giờ kèm lớp cách chống blocking"],
            ["Kiểm soát màu", "Đo ΔE từng mẻ trộn; giữ hồ sơ mẫu chuẩn từng đợt sản xuất"],
          ],
        },
      },
      {
        id: "dinh-muc-tieu-hao",
        heading: "6. Định mức tiêu hao cho 100m2 mái",
        paragraphs: [
          "Ngói sóng có hệ số bề mặt thực khoảng 1.3 - 1.5 lần diện tích mái phủ — 100m2 mái cần sơn 130 - 150m2 bề mặt:",
        ],
        table: {
          headers: ["Hạng mục", "Định mức / lớp", "Số lớp", "Lượng ước tính"],
          rows: [
            ["Lót kháng kiềm", "8 - 10 m2/lít", "1", "15 - 19 lít"],
            ["Sơn màu ngói", "5 - 7 m2/lít/lớp", "2", "38 - 60 lít"],
            ["Dung dịch diệt rêu", "4 - 5 m2/lít", "1", "26 - 33 lít"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Mái ngói đang đen rêu nhiều có sơn phủ trực tiếp được không?",
        answer:
          "Không nên. Rêu mốc phải được diệt tận gốc bằng dung dịch chuyên dụng và rửa sạch áp lực cao trước khi sơn. Sơn phủ trực tiếp lên rêu sẽ bong theo lớp rêu chết chỉ sau 1 mùa mưa.",
      },
      {
        question: "Ngói xi măng mới đúc bao lâu thì sơn được?",
        answer:
          "Tối thiểu 28 ngày để xi măng dưỡng hộ và độ kiềm bề mặt ổn định dưới pH 10. Nhà máy cần sơn sớm hơn phải dùng lót kháng kiềm chuyên dụng và kiểm soát độ ẩm ngói dưới 10%.",
      },
      {
        question: "Sơn xong gặp mưa có bị trôi sơn không?",
        answer:
          "Sơn cần 4 - 6 giờ ráo mặt để chống nước mưa nhỏ và đạt độ bền rửa đầy đủ sau 24 - 48 giờ. Nếu dự báo mưa trong 4 giờ sau thi công nên hoãn lớp phủ cuối; màng đã đóng rắn không còn sợ mưa.",
      },
      {
        question: "Sơn màu sáng lên mái ngói có giúp mát hơn không?",
        answer:
          "Có, một phần. Đổi từ ngói đen xỉn sang tông sáng tăng hệ số phản xạ nắng, giảm nhiệt bề mặt mái 8 - 15°C trưa nắng. Muốn tối đa hiệu quả chống nóng nên kết hợp cách nhiệt trần bên dưới.",
      },
      {
        question: "Sơn ngói hệ nước có chống thấm cho mái đang dột không?",
        answer:
          "Màng sơn tạo lớp hydrophobic giảm nước ngấm qua bề mặt ngói nhưng không phải hệ chống thấm cấu kiện. Dột do nứt vỡ, nẹp hỏng hay màng chống thấm bên dưới rách phải xử lý riêng trước khi sơn.",
      },
    ],
    relatedSlugs: ["son-san-he-nuoc", "son-gia-go-he-nuoc/tam-cemboard", "chuyen-doi-he-nuoc"],
  },

  "son-say-cong-nghiep-he-nuoc": {
    slug: "son-say-cong-nghiep-he-nuoc",
    category: "Sơn Sấy Công Nghiệp Hệ Nước",
    categorySlug: "son-say-cong-nghiep-he-nuoc",
    title: "Sơn Sấy Công Nghiệp Hệ Nước: Sấy 80 - 140°C, Cứng 2H - 3H, Cắt 80% VOC | Sơn Lotus",
    metaDescription:
      "Sơn sấy công nghiệp hệ nước Lotus cho vỏ máy, linh kiện kim loại, phụ tùng: đóng rắn nhiệt 80 - 140°C, màng cứng 2H - 3H phẳng bóng như sơn sấy dung môi, giảm 80% VOC, triệt tiêu rủi ro cháy lò sấy. Nhận tư vấn chuyển đổi chuyền.",
    h1: "Sơn Sấy Công Nghiệp Hệ Nước: Giải Pháp Hoàn Thiện Vỏ Máy & Linh Kiện Kim Loại Đạt Chuẩn Công Nghiệp",
    publishedAt: "01/11/2026",
    readTime: "8 phút đọc",
    quickSummary:
      "Sơn sấy công nghiệp hệ nước (Waterborne Baking Enamel) là hệ sơn 1 thành phần dùng nước làm dung môi chính kết hợp nhựa water-reducible acrylic / alkyd và chất liên kết ngang amino, đóng rắn bằng nhiệt ở 80 - 140°C trong 15 - 30 phút. Màng đạt độ cứng 2H - 3H (ASTM D3363), bám dính 5B, kháng sương muối 500 - 1000 giờ — tương đương sơn sấy amino-alkyd gốc dung môi trong khi giảm tới 80% VOC và loại bỏ rủi ro cháy nổ hơi dung môi trong lò.",
    whenToChoose: [
      "Nhà máy sản xuất vỏ máy nén khí, tủ điện, máy phát, quạt công nghiệp, phụ tùng kim loại cần màng cứng, kháng hóa chất, kháng dầu mỡ.",
      "Xưởng đang dùng sơn sấy dung môi bị kiểm soát phát thải VOC, yêu cầu PCCC lò sấy hoặc bị lân cận khiếu nại mùi.",
      "Chi tiết lắp ráp sẵn có cao su, nhựa chịu nhiệt chỉ cho phép sấy dưới 100 - 120°C.",
      "Đơn hàng xuất khẩu yêu cầu chứng nhận màng phủ ít phát thải, không tồn dư dung môi trong bao bì kín.",
    ],
    whenNotToChoose: [
      "Chi tiết nhựa nhiệt dẻo không chịu nổi 80°C — cần hệ sơn hệ nước 2K đóng rắn nhiệt độ phòng.",
      "Xưởng không có lò sấy / buồng sấy và không thể bố trí được — hệ sấy bắt buộc nguồn nhiệt ổn định.",
      "Không bố trí được vùng thoát hơi nước (flash-off) trước lò sấy — màng sẽ bị bọt khí khi vào nhiệt.",
    ],
    lotusRecommendation:
      "Lỗi kinh điển khi chuyển từ sơn sấy dung môi sang hệ nước là bọt khí / pinhole do đưa chi tiết vào lò quá nhanh — nước bay hơi chậm hơn dung môi, nếu chưa thoát hết đã gặp nhiệt cao sẽ sôi bên dưới màng. Bắt buộc bố trí vùng flash-off 5 - 10 phút có quạt lưu thông và lò sấy ramp nhiệt từ 60°C lên nhiệt mục tiêu.",
    sections: [
      {
        id: "son-say-he-nuoc-la-gi",
        heading: "1. Cơ chế đóng rắn nhiệt liên kết ngang",
        paragraphs: [
          "Khác với sơn hệ nước khô tự nhiên, sơn sấy hệ nước đóng rắn bằng phản ứng nhiệt: nước và co-solvent bay hơi trong giai đoạn flash-off và đầu lò sấy, hạt nhựa hợp giọt tạo màng liên tục, sau đó ở nhiệt sấy 80 - 140°C nhựa amino crosslink phản ứng với nhóm chức trên mạch acrylic/alkyd tạo mạng lưới 3D đanh cứng.",
          "Nhờ đóng rắn nhiệt, màng đạt độ cứng và độ bóng của sơn nung truyền thống, kháng dung môi xăng dầu vượt xa hệ 1K khô tự nhiên — là phương án thay thế trực tiếp cho nhà máy đang phun sơn sấy dung môi muốn cắt VOC mà không đổi chất lượng hoàn thiện.",
        ],
      },
      {
        id: "bang-thong-so-ky-thuat",
        heading: "2. Bảng thông số cơ lý tính tiêu chuẩn",
        paragraphs: [
          "Kiểm nghiệm trên tấm thép phosphat hóa tiêu chuẩn, sấy 120°C × 20 phút:",
        ],
        table: {
          headers: ["Chỉ tiêu kỹ thuật", "Phương pháp thử", "Kết quả Sơn Sấy Lotus", "Ý nghĩa"],
          rows: [
            ["Chế độ sấy", "—", "80 - 140°C / 15 - 30 phút", "Linh hoạt theo chi tiết & lò"],
            ["Độ cứng bút chì", "ASTM D3363", "2H - 3H", "Chống trầy vận chuyển, lắp ráp"],
            ["Độ bám dính ô cờ", "ASTM D3359", "5B", "Không bong khi dập, bắt vit"],
            ["Kháng sương muối", "ASTM B117", "500 - 1000 giờ", "Phụ tùng, vỏ máy ngoài trời"],
            ["Kháng MEK", "ASTM D4752", "> 100 lần chà đôi", "Kháng xăng dầu, hóa chất"],
            ["Hàm lượng VOCs", "EPA Method 24", "< 120 g/L (hệ dầu 400 - 600)", "Cắt ~ 80% phát thải lò sấy"],
            ["Điểm chớp cháy", "Pensky-Martens", "Không bắt cháy", "Loại bỏ nguy cơ cháy lò"],
          ],
        },
      },
      {
        id: "quy-trinh-day-chuyen",
        heading: "3. Quy trình dây chuyền chuẩn 5 bước",
        steps: [
          {
            step: "Bước 1",
            title: "Tiền xử lý nền kim loại",
            desc: "Thép: tẩy dầu kiềm, phosphat kẽm/sắt hoặc phun cát Sa 2.5. Nhôm, mạ kẽm: tẩy dầu nhẹ, hóa chuyển đổi chromate-free nếu cần kháng ăn mòn cao.",
          },
          {
            step: "Bước 2",
            title: "Phun sơn",
            desc: "Súng thường béc 1.3 - 1.5mm áp 2.0 - 2.5 Bar, độ nhớt 18 - 25 giây Ford #4, màng ướt 80 - 120 µm. Dùng được súng tĩnh điện lỏng chuyên waterborne.",
          },
          {
            step: "Bước 3",
            title: "Flash-off thoát nước",
            desc: "Treo chi tiết vùng thoáng có quạt 5 - 10 phút cho nước bề mặt bay hơi. Tăng thời gian khi phun dày hoặc trời ẩm.",
          },
          {
            step: "Bước 4",
            title: "Sấy ramp nhiệt",
            desc: "Vào lò vùng 60°C trước, ramp lên 80 - 140°C duy trì 15 - 30 phút theo nhiệt độ kim loại chi tiết (metal temperature), không phải nhiệt độ lò.",
          },
          {
            step: "Bước 5",
            title: "Nguội & nghiệm thu",
            desc: "Để nguội tự nhiên 10 - 20 phút, kiểm tra bề mặt, độ bóng và bám dính trước khi đóng gói.",
          },
        ],
      },
      {
        id: "loi-say-he-nuoc",
        heading: "4. Bảng chẩn đoán nhanh lỗi sấy hệ nước",
        table: {
          headers: ["Lỗi bề mặt", "Nguyên nhân thường gặp", "Cách khắc phục"],
          rows: [
            ["Bọt khí / pinhole", "Vào lò quá sớm, flash-off thiếu, ramp nhiệt nhanh", "Kéo dài flash-off, vào lò ở 60°C"],
            ["Mắt cá / rọ cá", "Dầu mỡ, silicon, nước nén khí có dầu", "Kiểm tra lọc gió, tẩy nền lại"],
            ["Da cam / sần mặt", "Sơn loãng quá, phun xa, flash-off nóng", "Chỉnh độ nhớt, phun gần hơn"],
            ["Màng không cứng", "Chưa đạt nhiệt kim loại mục tiêu", "Đo metal temperature, kéo dài sấy"],
          ],
        },
      },
      {
        id: "checklist-cai-tao",
        heading: "5. Checklist cải tạo lò sấy & phòng phun hiện có",
        list: [
          "Vùng flash-off có quạt lưu thông gió 5 - 10 phút trước cửa lò.",
          "Lò sấy có quạt tuần hoàn + cửa thoát hơi ẩm điều chỉnh được; gia nhiệt ổn định ± 5°C.",
          "Ramp nhiệt kiểm soát được; lò 1 vùng nóng thì cho chi tiết làm quen ở cửa lò trước.",
          "Béc súng, cốc súng, ống dẫn bằng inox/nhựa kỹ thuật — sơn nước ăn mòn thép carbon trong đường sơn.",
          "Lọc khí nén khô - sạch dầu, đặc biệt nghiêm ngặt với hệ nước vì dễ sinh mắt cá.",
          "Quy trình rửa súng bằng nước; không để sơn nước khô cứng trong súng qua đêm.",
          "Đào tạo thợ nhận biết màng đã flash-off đủ (chuyển mờ đục, hết bóng ướt) trước khi vào lò.",
        ],
      },
      {
        id: "dinh-muc-tco",
        heading: "6. Định mức tiêu hao & bài toán TCO",
        table: {
          headers: ["Hạng mục", "Giá trị tham chiếu"],
          rows: [
            ["Định mức lý thuyết", "9 - 12 m2/kg tại màng khô 30 µm"],
            ["Định mức thực tế (hao 30%)", "6.5 - 8.5 m2/kg"],
            ["Hệ số chuyển đổi so sơn dầu", "≈ 1 : 1 trên cùng màng khô"],
            ["Năng lượng sấy", "Tương đương hệ dầu; thấp hơn sơn bột (80 - 140°C vs 160 - 200°C)"],
            ["Tiết kiệm phát sinh", "Không mua thinner, giảm xử lý khí thải, phí bảo hiểm & PCCC lò sấy"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Sơn sấy hệ nước có đạt độ cứng và độ bóng như sơn sấy dung môi không?",
        answer:
          "Có. Sau khi đóng rắn nhiệt đúng chế độ, cơ chế liên kết ngang amino cho màng độ cứng 2H - 3H và độ bóng 60° đạt 85 - 95 — tương đương sơn sấy amino-alkyd gốc dầu, kháng MEK trên 100 lần chà đôi.",
      },
      {
        question: "Lò sấy hiện tại chỉ sấy được 80 - 100°C có dùng được không?",
        answer:
          "Được. Sơn sấy hệ nước Lotus có dải sấy linh hoạt 80 - 140°C; với lò chỉ đạt 80 - 100°C chỉ cần kéo dài thời gian duy trì 25 - 35 phút để nhiệt độ kim loại đạt ngưỡng liên kết ngang.",
      },
      {
        question: "Có phải đầu tư lại súng phun và buồng phun mới không?",
        answer:
          "Không. Súng phun thường (HVLP, conventional) và buồng phun màng nước hiện có dùng trực tiếp, chỉ cần vệ sinh sạch dung môi cũ và kiểm tra chi tiết tiếp xúc sơn là inox hoặc nhựa tương thích.",
      },
      {
        question: "Chi tiết có lắp sẵn gioăng cao su, nhựa vào lò sấy được không?",
        answer:
          "Được nếu vật liệu chịu được nhiệt sấy. Chọn chế độ thấp 80 - 100°C và kiểm nghiệm giới hạn nhiệt của gioăng/nhựa thực tế. Chi tiết không chịu nhiệt nên dùng hệ sơn hệ nước 2K đóng rắn nhiệt độ phòng.",
      },
      {
        question: "Sơn sấy hệ nước có phun được trên nền sơn tĩnh điện hoặc sơn dung môi cũ không?",
        answer:
          "Được trên nền sơn cũ còn bám tốt: xả nhám P240 - P320, làm sạch và phun phủ trực tiếp. Nền sơn đang bong, phấn hóa hoặc không rõ loại sơn thì nên loại bỏ lớp cũ hoặc test bám dính trước.",
      },
    ],
    relatedSlugs: ["chuyen-doi-he-nuoc/chinh-sung-phun-phong-say", "chuyen-doi-he-nuoc/tco-chi-phi-son-he-nuoc", "son-kim-loai-he-nuoc"],
  },

  "son-nhua-he-nuoc": {
    slug: "son-nhua-he-nuoc",
    category: "Sơn Nhựa & Nền Khó Bám",
    categorySlug: "son-nhua-he-nuoc",
    title: "Sơn Nhựa Hệ Nước: Bám Dính Trên ABS, PVC, PP Không Bong Tróc | Sơn Lotus",
    metaDescription:
      "Sơn nhựa hệ nước Lotus cho nền nhựa ABS, PVC, PP, PC: hệ lót tăng bám chuyên dụng cho bề mặt năng lượng thấp, độ bám dính ô cờ 4B-5B, không mùi dung môi, không ăn mòn nhựa. Nhận tư vấn hệ sơn theo từng loại nhựa.",
    h1: "Sơn Nhựa Hệ Nước: Giải Pháp Bám Dính Bền Vững Trên Nền ABS, PVC, PP & PC",
    publishedAt: "01/11/2026",
    readTime: "8 phút đọc",
    quickSummary:
      "Sơn nhựa hệ nước là hệ sơn phủ gốc nước dùng nhựa PUD / Acrylic có khả năng thấm ướt cao kết hợp lớp lót tăng bám (adhesion promoter) chuyên cho bề mặt nhựa năng lượng thấp. ABS, PVC, PC sơn trực tiếp sau lót tăng bám; PP, PE bắt buộc xử lý bề mặt bằng lửa, corona hoặc lót CPO chuyên dụng. Hệ sơn đạt độ bám dính ô cờ 4B - 5B (ASTM D3359), không mùi dung môi và không gây nứt hóa chất (stress cracking) trên nhựa như sơn dung môi.",
    whenToChoose: [
      "Xưởng sản xuất linh kiện nhựa, đồ gia dụng, đồ chơi, phụ kiện cần phủ màu mà không chịu được mùi dung môi.",
      "Bề mặt nhựa kỹ thuật ABS, PVC, uPVC, PC, PS cần đổi màu hoặc phủ bảo vệ chống tia UV.",
      "Chi tiết nhựa không chịu nhiệt sấy, yêu cầu hệ sơn đóng rắn nhiệt độ phòng.",
      "Đơn hàng xuất khẩu yêu cầu màng phủ VOC thấp, không hơi dung môi tồn dư trong chi tiết đóng gói kín.",
    ],
    whenNotToChoose: [
      "Nền nhựa còn dính dầu tách khuôn (silicone) chưa vệ sinh kỹ — bất kỳ hệ sơn nào cũng bong.",
      "Nhựa siêu khó bám dạng PTFE, silicone, nhựa hóa dẻo mạnh chưa được tư vấn hệ xử lý riêng.",
    ],
    lotusRecommendation:
      "Đừng bỏ qua bước test năng lượng bề mặt trước khi báo giá: nhỏ nước cất lên bề mặt nhựa — nước loang màng đều là nền đủ ướt để sơn, nước co giọt tròn là phải xử lý (nhám hóa, lửa hoặc lót CPO). Test 5 giây này quyết định 90% khả năng thành công của màng sơn trên nhựa.",
    sections: [
      {
        id: "vi-sao-nhua-kho-bam-dinh",
        heading: "1. Vì sao nhựa là bề mặt khó bám dính — góc nhìn năng lượng bề mặt",
        paragraphs: [
          "Màng sơn chỉ bám được khi nó thấm ướt được bề mặt — sơn loang thành màng thay vì co lại thành giọt. Kim loại, gỗ, bê tông có năng lượng cao (> 40 dyne/cm) nên sơn dễ bám; nhựa có năng lượng thấp từ 29 dyne/cm (PP, PE) đến ~45 dyne/cm nên sơn co giọt, khô xong chỉ dính cơ học yếu và bong mảng.",
          "Cộng thêm chất tách khuôn silicone còn sót từ khâu ép và chất dẻo di cư trên PVC mềm — hai nguyên nhân thầm lặng làm màng sơn bong sau vài tuần. Ưu điểm riêng của hệ nước: không chứa dung môi mạnh nên không gây stress cracking — lỗi nứt tơ chân gà mà sơn dung môi thường gây trên ABS, PC.",
        ],
      },
      {
        id: "phan-loai-theo-nhua",
        heading: "2. Bảng phân loại mức độ khó bám theo từng loại nhựa",
        table: {
          headers: ["Loại nhựa", "Năng lượng bề mặt", "Mức độ khó bám", "Hệ sơn khuyến nghị"],
          rows: [
            ["ABS (vỏ đồ điện tử)", "~ 42 dyne/cm", "Dễ", "Lót tăng bám nhẹ + màu + phủ"],
            ["PVC cứng / uPVC", "~ 39 dyne/cm", "Vừa", "Lót tăng bám bắt buộc"],
            ["PC polycarbonate", "~ 42 dyne/cm", "Vừa", "Lót tăng bám; cảnh giác nứt ứng suất"],
            ["PS cứng (phào chỉ, hộp)", "~ 38 dyne/cm", "Vừa", "Lót tăng bám bắt buộc"],
            ["PP (ghế, hộp, linh kiện)", "~ 29 - 30 dyne/cm", "Khó", "Xử lý lửa/corona HOẶC lót CPO"],
            ["PE / HDPE", "~ 30 - 31 dyne/cm", "Khó", "Như PP — xử lý bề mặt bắt buộc"],
            ["Nylon (PA6/66)", "~ 46 dyne/cm", "Vừa", "Lót tăng bám; lưu ý hút ẩm"],
          ],
        },
      },
      {
        id: "quy-trinh-thi-cong",
        heading: "3. Quy trình thi công chuẩn 5 bước trên nền nhựa",
        steps: [
          {
            step: "Bước 1",
            title: "Vệ sinh nền — loại bỏ dầu mỡ & tách khuôn",
            desc: "Lau giẻ tẩm cồn IPA hoặc dung dịch tẩy gốc nước, đổi mặt giẻ liên tục. Không dùng xăng/thinner mạnh lên ABS, PC — gây nứt hóa chất.",
          },
          {
            step: "Bước 2",
            title: "Xử lý bề mặt (bắt buộc PP/PE)",
            desc: "Chà nhám nhẹ P400 - P600, xử lý lửa 1 - 2 giây/bề mặt hoặc corona trên dây chuyền. Kiểm chứng bằng test giọt nước loang màng đều.",
          },
          {
            step: "Bước 3",
            title: "Phun lót tăng bám",
            desc: "1 lớp mỏng 15 - 25 µm Lotus Adhesion Primer (hoặc lót CPO cho PP/PE), flash-off 15 - 20 phút. Hiệu quả theo hóa học, không theo độ dày.",
          },
          {
            step: "Bước 4",
            title: "Phun màu 1 - 2 lớp",
            desc: "Phun mỏng giao nhau, mỗi lớp cách 20 - 30 phút có quạt. Phun dày trên nền trơn dễ chảy tụ và lâu khô thấu.",
          },
          {
            step: "Bước 5",
            title: "Phủ bảo vệ & đóng rắn",
            desc: "Phủ mờ/bóng chống trầy khi cần. Test bám dính sau 24 giờ, đóng gói sau 48 - 72 giờ.",
          },
        ],
      },
      {
        id: "loi-thuong-gap",
        heading: "4. Lỗi thường gặp khi sơn trên nhựa & cách khắc phục",
        table: {
          headers: ["Lỗi", "Nguyên nhân", "Khắc phục"],
          rows: [
            ["Bong tróc mảng sau khô", "Năng lượng bề mặt thấp, không lót tăng bám", "Xử lý nền + lót tăng bám/CPO"],
            ["Mắt cá, rọ cá", "Dầu tách khuôn, silicone, dầu tay", "Vệ sinh IPA kỹ, thay giẻ sạch"],
            ["Bong sau vài tuần", "Chất dẻo di cư (PVC mềm, TPE)", "Lót khóa hóa dẻo hoặc tư vấn Lotus"],
            ["Nứt tơ chân gà ABS/PC", "Sơn/rửa súng dung môi mạnh", "Chỉ dùng hệ nước + nước rửa chuyên dụng"],
            ["Màng nhão, lâu khô", "Phun dày, trời ẩm không gió", "Phun mỏng nhiều lớp, tăng gió"],
          ],
        },
      },
      {
        id: "so-sanh-dung-moi",
        heading: "5. So sánh với sơn nhựa dung môi truyền thống",
        paragraphs: [
          "Trên nền nhựa, bản chất khó bám không thay đổi giữa hệ nước và hệ dầu — cả hai đều phải xử lý nền và lót tăng bám. Điểm khác biệt thực sự: hệ nước không gây stress cracking trên ABS/PC, không mùi dung môi trong xưởng, không hơi dung môi tồn dư trong chi tiết đóng gói kín và loại bỏ rủi ro cháy nổ kho sơn.",
          "Xem thêm quy trình chuyên sâu theo ứng dụng: [sơn cửa nhựa uPVC lõi thép](/blog/son-nhua-he-nuoc/cua-nhua-upvc) và [sơn xốp EPS cho phào chỉ, mô hình](/blog/son-nhua-he-nuoc/xop-eps).",
        ],
      },
    ],
    faqs: [
      {
        question: "Sơn trực tiếp lên nhựa không qua lót có được không?",
        answer:
          "Với ABS, PC, uPVC sạch có thể bám tạm nhưng độ bền không đảm bảo — khuyến nghị luôn dùng lót tăng bám. Với PP/PE gần như chắc chắn bong mảng nếu không xử lý bề mặt và lót CPO chuyên dụng.",
      },
      {
        question: "Nhựa PP có sơn được thật không?",
        answer:
          "Được, nhưng bắt buộc 1 trong 2 điều kiện: xử lý lửa/corona nâng năng lượng bề mặt, hoặc lót CPO gốc nước thiết kế riêng cho polyolefin. Test giọt nước loang màng đều là điều kiện tiên quyết.",
      },
      {
        question: "Chi tiết nhựa còn dính dầu tách khuôn thì xử lý thế nào?",
        answer:
          "Lau kỹ bằng cồn IPA hoặc dung dịch tẩy tách khuôn chuyên dụng, đổi mặt giẻ liên tục. Silicone tách khuôn nặng cần dung dịch khử silicone riêng — là nguyên nhân số 1 gây mắt cá và bong tróc.",
      },
      {
        question: "Sơn nhựa hệ nước có bền ngoài trời không?",
        answer:
          "Có, nếu dùng hệ có phủ kháng UV. Đồ nhựa ngoài trời nên dùng màu + topcoat chống tia cực tím — nhựa giòn hóa dưới nắng sẽ kéo màng sơn phấn theo nếu nền không ổn định UV.",
      },
      {
        question: "Sơn trên nhựa có cần sấy không?",
        answer:
          "Không cần — hệ nước đóng rắn nhiệt độ phòng, phù hợp nhựa vốn mềm ở 60 - 80°C. Có thể sấy nhẹ 40 - 50°C để nhanh nhịp chuyền nhưng cần kiểm tra giới hạn nhiệt biến dạng của từng loại nhựa.",
      },
    ],
    relatedSlugs: ["son-nhua-he-nuoc/cua-nhua-upvc", "son-nhua-he-nuoc/xop-eps", "son-composite-he-nuoc"],
  },

  "son-nhua-he-nuoc/cua-nhua-upvc": {
    slug: "son-nhua-he-nuoc/cua-nhua-upvc",
    category: "Sơn Nhựa & Nền Khó Bám",
    categorySlug: "son-nhua-he-nuoc",
    title: "Sơn Cửa Nhựa Hệ Nước: Đổi Màu & Giả Gỗ Cho Cửa uPVC, Tấm Nano | Sơn Lotus",
    metaDescription:
      "Sơn cửa nhựa hệ nước Lotus cho cửa nhựa uPVC lõi thép, tấm ốp nano: lót tăng bám chuyên nền PVC, đổi màu hoặc vân gỗ, khô nhiệt độ phòng không cong vênh, không mùi. Tư vấn hệ sơn theo dòng cửa.",
    h1: "Sơn Cửa Nhựa Hệ Nước: Giải Pháp Đổi Màu & Vân Gỗ Cho Cửa uPVC Lõi Thép, Tấm Ốp Nano",
    publishedAt: "01/11/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn cửa nhựa hệ nước là hệ sơn phủ gốc nước dùng lót tăng bám chuyên cho nền nhựa uPVC lõi thép và tấm ốp PVC, phục vụ 2 nhu cầu chính: đổi màu cửa nhựa và hoàn thiện vân gỗ giả gỗ. Hệ sơn đóng rắn nhiệt độ phòng — không cần sấy nên tuyệt đối không làm mềm biến dạng thanh nhựa uPVC (vốn nhũn hóa từ ~70°C), độ bám dính 4B - 5B, kháng UV và không mùi khi thi công tại nhà đang ở.",
    whenToChoose: [
      "Nhà máy sản xuất cửa nhựa muốn mở rộng bảng màu/vân gỗ mà không đầu tư thanh profile ép màu sẵn.",
      "Cửa nhựa cũ bạc màu, ố vàng cần phục hồi hoặc đổi màu theo kiến trúc mới.",
      "Công trình đang ở/vận hành yêu cầu thi công sơn không mùi, không sấy nhiệt.",
      "Tấm ốp nhựa nano, cửa nhựa Đài Loan, cửa gỗ nhựa composite cần sơn đổi màu hoặc giả gỗ.",
    ],
    whenNotToChoose: [
      "Cửa nhựa phủ film laminate/PVC skin sẵn — lớp film chống dính cần hệ xử lý riêng.",
      "Đổi màu tối cho cửa hướng nắng gắt phía Tây mà không dùng hệ màu phản xạ nhiệt — nguy cơ cong vênh.",
      "Thanh nhựa nứt vỡ, giòn hóa nặng do lão hóa — sơn không cứu được nền đã suy yếu.",
    ],
    lotusRecommendation:
      "Với cửa nhựa đổi sang màu tối (đen, xám đậm, nâu socola) lắp vị trí nắng trực tiếp, bắt buộc dùng hệ bột màu phản xạ tia hồng ngoại (IR-reflective). Màu tối thường đẩy bề mặt uPVC vượt 65 - 75°C — điểm bắt đầu cong vênh; màu phản xạ nhiệt giữ bề mặt mát hơn 10 - 15°C.",
    sections: [
      {
        id: "dac-thu-upvc",
        heading: "1. Ba đặc thù khiến cửa nhựa cần hệ sơn chuyên dụng",
        list: [
          "Năng lượng bề mặt thấp (~ 39 dyne/cm): sơn thường co giọt, khô xong bong mảng — bắt buộc lót tăng bám cho nền nhựa.",
          "Nhạy nhiệt: uPVC nhũn biến dạng từ 65 - 80°C, mọi hệ sơn sấy đều bị loại — chỉ hệ đóng rắn nhiệt độ phòng dùng được.",
          "Bề mặt profile nhiều rãnh & góc cạnh: sơn phải phun được vào hệ rãnh kỹ thuật, gioăng, bản lề để đạt thẩm mỹ đồng đều.",
        ],
      },
      {
        id: "quy-trinh-thi-cong",
        heading: "2. Quy trình thi công chuẩn trên cửa nhựa uPVC",
        steps: [
          {
            step: "Bước 1",
            title: "Vệ sinh — tẩy wax, silicone, dầu mỡ",
            desc: "Lau giẻ tẩm cồn IPA toàn bộ thanh profile. Thanh uPVC trắng thường có lớp wax bảo quản từ nhà sản xuất phải tẩy sạch.",
          },
          {
            step: "Bước 2",
            title: "Nhám hóa nhẹ",
            desc: "Chà nhám P400 - P600 phá bóng tạo neo cơ học, thổi sạch bụi.",
          },
          {
            step: "Bước 3",
            title: "Phun lót tăng bám 1 lớp mỏng",
            desc: "Lotus Adhesion Primer cho nền PVC, màng mỏng 15 - 25 µm, flash-off 20 - 30 phút.",
          },
          {
            step: "Bước 4",
            title: "Phun sơn màu 1 - 2 lớp",
            desc: "Mỗi lớp cách 30 - 60 phút có quạt. Phun rãnh khó trước, mặt phẳng sau; không phun dày tránh chảy mép rãnh.",
          },
          {
            step: "Bước 5",
            title: "Phủ kháng UV (ngoài trời)",
            desc: "1 lớp phủ bảo vệ cho cửa ngoài trời. Đóng rắn 24 - 72 giờ trước khi vận hành.",
          },
        ],
      },
      {
        id: "mau-toi-cong-venh",
        heading: "3. Đổi màu tối trên cửa nhựa nắng gắt: vấn đề cong vênh nhiệt",
        paragraphs: [
          "Lỗi nghiêm trọng nhất khi sơn cửa nhựa là màu tối hấp thụ nhiệt đẩy bề mặt uPVC quá ngưỡng mềm — thanh nhựa cong vênh vĩnh viễn chỉ sau vài tuần nắng.",
        ],
        table: {
          headers: ["Tình huống", "Nhiệt bề mặt nắng trưa", "Đánh giá"],
          rows: [
            ["Cửa trắng nguyên bản", "45 - 55°C", "An toàn"],
            ["Sơn màu tối thường", "70 - 80°C", "Nguy cơ cong vênh thanh nhựa"],
            ["Màu tối hạt phản xạ IR", "55 - 65°C", "An toàn — mát hơn 10 - 15°C"],
          ],
        },
      },
      {
        id: "ung-dung-tam-op",
        heading: "4. Ứng dụng trên tấm ốp nano & cửa nhựa các loại",
        table: {
          headers: ["Vật liệu", "Đặc điểm nền", "Ghi chú hệ sơn"],
          rows: [
            ["Cửa uPVC lõi thép", "Năng lượng thấp, nhạy nhiệt, có wax", "Lót tăng bám + màu + phủ UV"],
            ["Cửa nhựa Đài Loan (ABS)", "Dễ bám hơn, bề mặt da cam", "Lót tăng bám nhẹ vẫn khuyến nghị"],
            ["Tấm ốp nano / tấm PVC", "PVC cứng, đôi khi có film sẵn", "Sơn được trên nền PVC trơn; nền film cần test"],
            ["Cửa gỗ nhựa WPC", "Nền mao dẫn + nhựa", "Bám tốt hơn PVC trơn, vẫn cần lót"],
            ["Cửa phủ film laminate", "Film có lớp chống dính", "Không khuyến nghị — liên hệ kỹ thuật"],
          ],
        },
      },
      {
        id: "dinh-muc",
        heading: "5. Định mức tiêu hao cho 1 bộ cửa",
        paragraphs: [
          "Bộ cửa nhựa 1 cánh 900 × 2200mm (~ 4 - 4.5 m2 sơn 2 mặt gồm khuôn): lót tăng bám ~ 300 - 370 g, sơn màu 2 lớp ~ 900 g - 1.1 kg, phủ UV ~ 400 - 450 g. Một bộ cửa hoàn thiện trong nửa ngày làm việc, đóng rắn đủ sau 48 - 72 giờ mới vận hành đóng mở mạnh. Với cửa nhựa muốn làm vân gỗ, xem kỹ thuật chi tiết trong [chuyên đề sơn giả gỗ hệ nước](/blog/son-gia-go-he-nuoc).",
        ],
      },
    ],
    faqs: [
      {
        question: "Cửa nhựa cũ bị ố vàng, bạc màu có sơn phủ được không?",
        answer:
          "Được. Sau vệ sinh sạch và nhám nhẹ P400 - P600, lót tăng bám + sơn màu sẽ che hoàn toàn màu ố cũ — miễn nền nhựa còn nguyên vẹn, chưa giòn nứt vì lão hóa.",
      },
      {
        question: "Sơn cửa nhựa màu tối ngoài nắng có bị cong vênh không?",
        answer:
          "Có nguy cơ với màu tối thường — bề mặt có thể nóng 70 - 80°C vượt ngưỡng mềm uPVC. Giải pháp: hệ bột màu phản xạ nhiệt IR, hoặc chỉ sơn màu sáng - trung bình cho cửa hướng nắng.",
      },
      {
        question: "Sơn cửa nhựa có phải sấy không?",
        answer:
          "Không — và tuyệt đối không nên. uPVC mềm ở 65 - 80°C, mọi hệ sơn sấy đều gây biến dạng. Sơn hệ nước đóng rắn nhiệt độ phòng, khô ráo mặt 30 - 60 phút có gió lưu thông.",
      },
      {
        question: "Có phải tháo cửa ra để sơn không?",
        answer:
          "Không bắt buộc. Cửa đang lắp sơn tại chỗ được sau khi che chắn kính, gioăng, bản lề. Tháo cánh phun trên giá cho màng đồng đều hơn — phù hợp khi sơn số lượng nhiều.",
      },
      {
        question: "Tấm ốp nhựa nano trong nhà có sơn đổi màu được không?",
        answer:
          "Được, quy trình giống cửa nhựa: vệ sinh, nhám nhẹ, lót tăng bám, sơn màu. Tấm trong nhà không cần phủ UV — chỉ cần phủ chống trầy nếu vị trí dễ va chạm.",
      },
    ],
    relatedSlugs: ["son-nhua-he-nuoc", "son-gia-go-he-nuoc", "son-gia-go-he-nuoc/sat-hop"],
  },

  "son-nhua-he-nuoc/xop-eps": {
    slug: "son-nhua-he-nuoc/xop-eps",
    category: "Sơn Nhựa & Nền Khó Bám",
    categorySlug: "son-nhua-he-nuoc",
    title: "Sơn Xốp Hệ Nước: Sơn Phào Chỉ, Mô Hình, Đạo Cụ Không Chảy Xốp | Sơn Lotus",
    metaDescription:
      "Sơn xốp hệ nước Lotus — lựa chọn duy nhất cho nền xốp EPS, phào chỉ PS, mô hình, đạo cụ: sơn dung môi làm chảy tan xốp. Lót bít mao dẫn, sơn màu, sơn cứng bảo vệ, thi công cọ/lăn/phun. Tư vấn hệ sơn theo loại xốp.",
    h1: "Sơn Xốp Hệ Nước: Giải Pháp Duy Nhất Cho Phào Chỉ, Mô Hình & Đạo Cụ Xốp Không Bị Chảy",
    publishedAt: "01/11/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn xốp hệ nước là hệ sơn gốc nước chuyên cho nền xốp — và là lựa chọn gần như duy nhất, vì mọi sơn dung môi đều hòa tan polystyrene làm xốp chảy sùi mất hình ngay khi tiếp xúc. Hệ sơn gồm lót bít mao dẫn (xốp hút sơn cực mạnh), sơn màu acrylic và tùy chọn sơn cứng bảo vệ cho mô hình/đạo cụ chịu va chạm.",
    whenToChoose: [
      "Phào chỉ, cổ trần, phù điêu làm từ xốp PS ép đặc cần sơn màu hoặc giả xi măng/giả đá.",
      "Mô hình kiến trúc, sa bàn, mô hình sản phẩm cắt CNC từ xốp EPS cần phủ màu.",
      "Đạo cụ sân khấu, phim trường, booth triển lãm, biển quảng cáo xốp cần sơn hoặc sơn cứng bảo vệ.",
      "Xưởng sản xuất phào chỉ xốp số lượng lớn cần hệ sơn phun không mùi trên dây chuyền.",
    ],
    whenNotToChoose: [
      "Muốn dùng sơn dung môi/phun xịt lên xốp — chảy tan ngay, không có ngoại lệ.",
      "Xốp cần phủ để ngâm nước lâu dài (bè, phao) — cần hệ chống thấm chuyên biệt khác.",
    ],
    lotusRecommendation:
      "Xốp EPS hạt rời hút sơn gấp 4 - 6 lần bề mặt đặc — phun màu trực tiếp sẽ tốn gấp đôi vật tư mà màng vẫn loang. Bắt buộc 1 lớp lót bít mao dẫn (sealer) hệ nước trước; với mô hình cần độ cứng va chạm dùng sơn cứng PU hệ nước 2K làm lớp áo giáp.",
    sections: [
      {
        id: "vi-sao-chi-he-nuoc",
        heading: "1. Vì sao chỉ có sơn hệ nước sơn được xốp",
        paragraphs: [
          "Xốp EPS, xốp PS cấu tạo từ 98% không khí trong các hạt polystyrene nở — polystyrene tan hoàn toàn trong dung môi hữu cơ (xăng thơm, toluene, acetone). Chấm một giọt thinner lên mặt xốp: bề mặt sùi bọt, lõm sâu ngay lập tức.",
          "Sơn hệ nước là ngoại lệ duy nhất: môi trường phân tán là nước, không hòa tan polystyrene — màng chỉ bám trên bề mặt, không ăn vào hạt. Xốp cũng không chịu nhiệt (co ~70 - 80°C) nên mọi hệ sơn sấy cũng bị loại.",
        ],
      },
      {
        id: "phan-loai-nen-xop",
        heading: "2. Phân loại nền xốp & mức độ xử lý",
        table: {
          headers: ["Loại xốp", "Đặc điểm bề mặt", "Mức hút sơn", "Hệ xử lý"],
          rows: [
            ["Xốp EPS hạt (mô hình)", "Hạt rời, dễ bong", "Rất cao", "Lót sealer 1 - 2 lớp bắt buộc"],
            ["Xốp XPS (cách nhiệt)", "Mịn hơn, kín hơi", "Vừa", "Lót 1 lớp"],
            ["Phào chỉ PS ép đặc", "Đặc mịn gần như nhựa", "Thấp", "Lót tăng bám nhẹ hoặc lót chuẩn"],
            ["Xốp PU cứng", "Bọt cứng, hút vừa", "Vừa", "Lót sealer 1 lớp"],
            ["Xốp mềm/mút xốp", "Đàn hồi, xốp mở", "Cao", "Sơn mềm chuyên, không lót cứng"],
          ],
        },
      },
      {
        id: "quy-trinh-thi-cong",
        heading: "3. Quy trình thi công chuẩn trên nền xốp",
        steps: [
          {
            step: "Bước 1",
            title: "Chuẩn bị bề mặt xốp",
            desc: "Cắt gọt hoàn thiện hình dáng trước khi sơn. Phủi sạch bụi và hạt rời — xốp tích tĩnh điện mạnh. Không chà nhám mạnh trên EPS hạt.",
          },
          {
            step: "Bước 2",
            title: "Lót bít mao dẫn (Sealer)",
            desc: "Phun hoặc quét 1 - 2 lớp sealer hệ nước, bít mao dẫn và liên kết hạt xốp rời. Khô 30 - 60 phút, kiểm tra kín không còn lỗ thấu.",
          },
          {
            step: "Bước 3",
            title: "Sơn màu acrylic",
            desc: "Súng béc 1.4 - 1.8mm hoặc quét/cọ cho chi tiết nhỏ, 1 - 2 lớp mỏng. Hiệu ứng giả xi măng, giả đá, mạ vàng tùy yêu cầu.",
          },
          {
            step: "Bước 4",
            title: "Phủ bảo vệ / sơn cứng",
            desc: "Trong nhà có thể bỏ qua hoặc phủ mờ nhẹ. Ngoài trời: phủ kháng UV. Chịu va chạm: sơn cứng PU hệ nước 2K.",
          },
        ],
      },
      {
        id: "son-cung-bao-ve",
        heading: "4. Sơn cứng bảo vệ cho mô hình & đạo cụ chịu va chạm",
        paragraphs: [
          "Vấn đề lớn nhất của đồ xốp là bề mặt mềm, dễ móp nứt khi di chuyển. Giải pháp của xưởng đạo cụ chuyên nghiệp là sơn cứng (hard coat): hệ sơn cứng PU hệ nước 2K phủ lớp 0.5 - 1mm tạo vỏ cứng như nhựa — mô hình cầm nắm, xếp chồng, vận chuyển không sợ móp.",
          "Thi công phun súng sần béc lớn hoặc quét, đóng rắn nhiệt độ phòng — không sấy vì xốp co nhiệt. Rẻ hơn nhiều so với đổ khuôn nhựa hoặc phủ epoxy dung môi (vốn ăn xốp). Phào chỉ PS ép đặc thực chất là nền nhựa cứng — xem thêm cách [xử lý bám dính trên nhựa năng lượng thấp](/blog/son-nhua-he-nuoc).",
        ],
      },
      {
        id: "ung-dung-nganh",
        heading: "5. Ứng dụng theo ngành",
        table: {
          headers: ["Ngành", "Sản phẩm xốp", "Hệ sơn đề xuất"],
          rows: [
            ["Nội thất - xây dựng", "Phào chỉ PS, cổ trần, phù điêu", "Sealer + màu + giả đá/mạ tùy chọn"],
            ["Kiến trúc - quy hoạch", "Mô hình sa bàn, khối cảnh EPS", "Sealer + màu + sơn cứng nếu di chuyển"],
            ["Quảng cáo - sự kiện", "Biển xốp, chữ nổi, booth, prop", "Sealer + màu + phủ UV ngoài trời"],
            ["Sân khấu - điện ảnh", "Đạo cụ, bối cảnh, tượng xốp lớn", "Sealer + sơn cứng 2K + màu hiệu ứng"],
            ["Sân vườn - tiểu cảnh", "Non bộ, tảng đá giả xốp", "Lót + màu giả đá + phủ UV chống rêu"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Sơn dầu, sơn xịt có sơn được lên xốp không?",
        answer:
          "Tuyệt đối không. Dung môi hữu cơ hòa tan polystyrene — xốp sùi bọt và chảy mất hình trong vài giây. Chỉ có sơn gốc nước an toàn trên mọi loại xốp.",
      },
      {
        question: "Phào chỉ nhựa PS đã lắp sẵn có sơn lại đổi màu được không?",
        answer:
          "Được. Phào chỉ PS đặc chỉ cần vệ sinh sạch, nhám rất nhẹ (hoặc bỏ qua), lót tăng bám nhẹ rồi sơn màu. Hệ nước không mùi nên thi công được ngay trong nhà đang ở.",
      },
      {
        question: "Sơn trên xốp có cần sơn lót không?",
        answer:
          "Rất nên — đặc biệt trên EPS hạt. Xốp hút sơn cực mạnh, sơn màu trực tiếp sẽ loang và tốn vật tư gấp đôi. Lớp sealer bít mao dẫn tiết kiệm tổng vật tư và cho màu đều hơn hẳn.",
      },
      {
        question: "Mô hình xốp sơn xong có chịu được va chạm không?",
        answer:
          "Sơn màu thường chỉ tạo màng mỏng — mô hình vẫn mềm dễ móp. Nếu cần di chuyển, trưng bày va chạm nhiều, dùng thêm lớp sơn cứng PU hệ nước 2K phủ dày tạo vỏ cứng bảo vệ.",
      },
      {
        question: "Sơn xốp ngoài trời có bị phai màu, hư hỏng không?",
        answer:
          "Xốp EPS/XPS tự suy yếu dưới tia UV — lớp sơn giúp bảo vệ xốp khỏi nắng. Dùng màu + phủ kháng UV cho đồ ngoài trời; dùng lâu dài nên cân nhắc sơn cứng cho cả bảo vệ cơ học lẫn UV.",
      },
    ],
    relatedSlugs: ["son-nhua-he-nuoc", "son-composite-he-nuoc", "son-loa-he-nuoc"],
  },

  "son-go-he-nuoc/go-cong-nghiep": {
    slug: "son-go-he-nuoc/go-cong-nghiep",
    category: "Sơn Gỗ Hệ Nước",
    categorySlug: "son-go-he-nuoc",
    title: "Sơn Gỗ Công Nghiệp Hệ Nước: Hoàn Thiện MDF, HDF, Plywood Chuẩn Xưởng | Sơn Lotus",
    metaDescription:
      "Sơn gỗ công nghiệp hệ nước Lotus cho MDF, HDF, plywood, ván ép: lót chặn xơ cạnh cắt, phủ màu opaque hoặc trong suốt veneer, khóa phát thải formaldehyde, khô nhanh 45 phút, không mùi. Nhận mẫu test xưởng miễn phí.",
    h1: "Sơn Gỗ Công Nghiệp Hệ Nước: Giải Pháp Hoàn Thiện MDF, HDF, Plywood & Ván Ép Cho Xưởng Nội Thất",
    publishedAt: "01/11/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn gỗ công nghiệp hệ nước là hệ sơn phủ gốc nước chuyên cho ván nhân tạo — MDF, HDF, plywood, ván ép dăm — khác căn bản với sơn gỗ tự nhiên ở 3 điểm: cạnh cắt hút nước gấp 3-5 lần mặt phẳng (bắt buộc lót chặn xơ), bề mặt veneer mỏng 0.3 - 0.6mm cấm xả nhám mạnh, và khả năng khóa phát thải formaldehyde từ lõi keo. Hệ sơn đạt bám dính 5B, khô xả nhám 45 - 60 phút, VOC < 45 g/L.",
    whenToChoose: [
      "Xưởng nội thất công nghiệp: tủ bếp, đồ văn phòng, nội thất trẻ em, đồ flat-pack xuất khẩu IKEA-style.",
      "Sản phẩm cần phủ màu opaque (trắng, xám, pastel) trên MDF — kiểu hoàn thiện phổ biến nhất của ván công nghiệp.",
      "Phủ trong suốt trên veneer sồi/óc chó dán trên lõi MDF — cần giữ vân nhưng veneer siêu mỏng.",
      "Đơn hàng yêu cầu chứng nhận khí thải formaldehyde (CARB P2, EPA TSCA, E1/E0).",
    ],
    whenNotToChoose: [
      "Ván MFC/MDF đã dán melamine sẵn — bề mặt melamine chống bám dính, sơn trực tiếp sẽ bong (cần hệ lót riêng).",
      "Ván ẩm, phồng cạnh hoặc đã thấm nước — phải thay tấm, sơn không cứu được nền đã nở.",
    ],
    lotusRecommendation:
      "Trên MDF, lỗi tốn tiền nhất là phồng cạnh — xơ cạnh cắt hút nước từ sơn làm trương nở vĩnh viễn. Quy tắc vàng: lăn sơn lót chặn xơ nguyên chất vào cạnh trước khi phun lót tổng thể, chi phí tăng < 5% nhưng loại bỏ 90% tỉ lệ phải sửa lại.",
    sections: [
      {
        id: "khac-go-tu-nhien",
        heading: "1. Sơn gỗ công nghiệp khác sơn gỗ tự nhiên ở đâu",
        table: {
          headers: ["Khác biệt", "Gỗ tự nhiên", "Gỗ công nghiệp"],
          rows: [
            ["Mục tiêu hoàn thiện", "Tôn vân gỗ trong suốt", "Phủ màu opaque hoặc giữ veneer"],
            ["Điểm yếu nền", "Xù lông gỗ, nhựa/tannin", "Cạnh hút nước phồng, veneer mỏng"],
            ["Kỹ thuật then chốt", "Water popping, khóa tannin", "Chặn xơ cạnh, xả nhám siêu nhẹ"],
            ["Phát thải từ lõi", "Không", "Formaldehyde — cần khóa"],
          ],
        },
      },
      {
        id: "quy-trinh-opaque",
        heading: "2. Quy trình phủ màu opaque trên MDF",
        steps: [
          {
            step: "Bước 1",
            title: "Xử lý nền & chặn xơ cạnh",
            desc: "Chà nhám P180 - P240, vệ sinh bụi. Lăn lót chặn xơ nguyên chất vào cạnh cắt và lỗ khoan cam/bản lề — vùng hút nước mạnh nhất. Khô 30 - 45 phút.",
          },
          {
            step: "Bước 2",
            title: "Phun lót MDF 1 - 2 lớp",
            desc: "Khô 45 - 60 phút xả nhám tơi P320 - P400 đến khi phẳng như lụa — màu opaque chỉ đẹp khi nền phẳng.",
          },
          {
            step: "Bước 3",
            title: "Phun màu opaque 2 lớp mỏng",
            desc: "Mỗi lớp cách 45 - 60 phút. Màu sáng trên MDF nâu cần lót trắng/đủ độ phủ để nền nâu không ánh qua.",
          },
          {
            step: "Bước 4",
            title: "Phủ bảo vệ",
            desc: "Mờ hoặc bóng 1 lớp, đóng gói sau 4 - 6 giờ.",
          },
        ],
      },
      {
        id: "quy-trinh-veneer",
        heading: "3. Phủ trong suốt trên veneer mỏng",
        paragraphs: [
          "Veneer óc chó/sồi dán trên MDF chỉ dày 0.3 - 0.6mm: chỉ chà nhám P320 trở lên áp lực nhẹ, không lau ẩm water popping (nước ngấm qua veneer loos hở làm trương keo dán), lót trong suốt mỏng giữ vân và phủ trong suốt 1K/2K bảo vệ — veneer mỏng không chịu cọ xát như gỗ đặc nên lớp phủ quyết định độ bền bề mặt.",
        ],
      },
      {
        id: "khoa-formaldehyde",
        heading: "4. Khóa phát thải formaldehyde & tiêu chuẩn CARB/EPA/E1",
        paragraphs: [
          "MDF, HDF, ván ép dùng keo ure-formaldehyde — nguồn phát thải kéo dài hàng năm. Màng sơn kín mặt phẳng + lót chặn xơ cạnh giảm > 80% khí thải tổng của tấm (EN 717-1). Đơn xuất khẩu theo CARB P2 / EPA TSCA / E1-E0 / F☆☆☆☆ yêu cầu cả ván lõi lẫn màng phủ kiểm soát phát thải — Lotus hỗ trợ TDS/MSDS và phối hợp gửi mẫu thành phẩm kiểm định SGS/Intertek theo yêu cầu Buyer. Xem chi tiết [hồ sơ TDS/MSDS và quy trình đệ trình kiểm định xuất khẩu EU/US](/blog/son-go-he-nuoc/tieu-chuan-xuat-khau-eu-us).",
        ],
      },
      {
        id: "dinh-muc",
        heading: "5. Định mức & nhịp chuyền tham chiếu",
        table: {
          headers: ["Hạng mục", "Định mức / lớp", "Thời gian chờ"],
          rows: [
            ["Lót chặn xơ cạnh", "15 - 20 m2/kg", "30 - 45 phút"],
            ["Lót MDF tổng thể", "8 - 10 m2/kg", "45 - 60 phút + xả nhám"],
            ["Màu opaque", "8 - 10 m2/kg", "45 - 60 phút/lớp"],
            ["Phủ bảo vệ", "8 - 10 m2/kg", "Đóng gói sau 4 - 6 giờ"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Sơn trên MDF có bị phồng cạnh không — làm sao tránh?",
        answer:
          "Có nếu bỏ qua lót chặn xơ. Cạnh cắt hút nước gấp 3 - 5 lần mặt phẳng; lăn sơn lót chặn xơ nguyên chất vào cạnh trước khi phun lót là bắt buộc.",
      },
      {
        question: "Ván MFC dán melamine sẵn có sơn được không?",
        answer:
          "Không sơn trực tiếp được — melamine là bề mặt nhựa chống bám. Cần hệ lót bám dính chuyên cho melamine hoặc xử lý bề mặt riêng.",
      },
      {
        question: "Sơn veneer mỏng có sợ thủng veneer khi xả nhám không?",
        answer:
          "Có, nếu chà mạnh như gỗ đặc. Chỉ dùng nhám P320 - P400 áp lực rất nhẹ, không máy chà rung mạnh. Veneer 0.3mm chỉ cho phép 1 - 2 lượt xả nhẹ mỗi lớp.",
      },
      {
        question: "Sơn có khóa được mùi/formaldehyde từ ván MDF không?",
        answer:
          "Có giảm đáng kể. Màng sơn kín mặt phẳng + lót chặn xơ cạnh giảm > 80% phát thải theo EN 717-1. Đơn CARB P2/EPA nên chọn ván lõi đạt chuẩn từ đầu và dùng hệ sơn làm lớp khóa bổ sung.",
      },
    ],
    relatedSlugs: ["son-go-he-nuoc", "son-loa-he-nuoc", "son-nhua-he-nuoc"],
  },

  "son-go-he-nuoc/tre-may": {
    slug: "son-go-he-nuoc/tre-may",
    category: "Sơn Gỗ Hệ Nước",
    categorySlug: "son-go-he-nuoc",
    title: "Sơn Tre Mây Hệ Nước: Chống Mốc, Không Mùi, Chuẩn Xuất Khẩu EU-US | Sơn Lotus",
    metaDescription:
      "Sơn tre mây hệ nước Lotus cho hàng đan lát, lục bình, cói xuất khẩu: lót chống nấm mốc qua container biển, màng dẻo theo uốn cong, không mùi - không chất độc, đạt yêu cầu Buyer EU/US. Nhận mẫu test làng nghề.",
    h1: "Sơn Tre Mây Hệ Nước: Giải Pháp Chống Mốc & An Toàn Cho Hàng Đan Lát, Lục Bình, Cói Xuất Khẩu",
    publishedAt: "01/11/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn tre mây hệ nước là hệ sơn gốc nước chuyên cho vật liệu thực vật đan lát — tre, mây, lục bình, cói — với 2 yêu cầu sống còn của hàng xuất khẩu: chống nấm mốc hồi quy trong container đường biển (lót kháng nấm, kiểm soát ẩm < 12 - 14% trước sơn) và không mùi - không VOC đáp ứng yêu cầu Buyer EU/US. Màng sơn phải dẻo theo uốn cong của sợi đan chứ không cứng giòn như sơn gỗ thông thường.",
    whenToChoose: [
      "Cơ sở/xí nghiệp mây tre đan, lục bình, cói xuất khẩu EU, Mỹ, Nhật bị Buyer kiểm tra mùi, VOC hoặc nấm mốc.",
      "Đơn hàng container đường biển 30 - 45 ngày — môi trường ẩm cao dễ nấm mốc hồi quy.",
      "Sản phẩm cần màu trang trí, phủ bóng/mờ, hay bảo quản ngoài kho ẩm.",
      "Xưởng muốn thay sơn dầu/PU mùi nồng không đạt yêu cầu xuất khẩu.",
    ],
    whenNotToChoose: [
      "Sản phẩm đan lát còn ẩm trên 14% — phải sấy đủ khô trước, sơn lên nền ẩm sẽ mốc ngược bên trong.",
      "Sản phẩm ngâm nước lâu dài — cần hệ bảo vệ chuyên biệt khác.",
    ],
    lotusRecommendation:
      "Nguyên nhân số 1 khiến container mây tre bị Buyer reject là mốc hồi quy trong 3 - 4 tuần vận chuyển biển. Ba chốt chặn bắt buộc: sản phẩm khô < 12 - 14% ẩm trước khi sơn, lót có phụ gia kháng nấm, không đóng gói khi màng còn ẩm — cộng gói hút ẩm trong thùng carton với đơn biển dài.",
    sections: [
      {
        id: "dac-thu-nen",
        heading: "1. Đặc thù nền tre mây, lục bình, cói",
        list: [
          "Hút nước cực mạnh & không đồng đều: sợi đan hút sơn gấp 2 - 3 lần gỗ, định mức thực tế cao.",
          "Bề mặt uốn cong, co giãn: màng sơn cứng giòn sẽ nứt tơ chân gà dọc sợi khi sản phẩm bị vặn.",
          "Chứa đường, tinh bột, sáp: dinh dưỡng sẵn cho nấm mốc khi gặp ẩm — đặc biệt lục bình và cói.",
          "Nhiều khe hở: sơn phải phun được vào kẽ đan mà không chảy tụ.",
        ],
      },
      {
        id: "chong-moc-container",
        heading: "2. Bài toán chống mốc container đường biển",
        paragraphs: [
          "Sản phẩm còn hơi ẩm + container nóng-ấm 30 - 40 ngày + thiếu thoáng khí = bào nấm phát triển từ lõi. 80% ca mốc container do phôi chưa đủ khô trước khi sơn, không phải chất lượng sơn.",
        ],
        table: {
          headers: ["Chốt chặn", "Yêu cầu kỹ thuật"],
          rows: [
            ["Độ ẩm sản phẩm trước sơn", "< 12 - 14% — đo máy đo ẩm, không ước lượng tay"],
            ["Lót kháng nấm", "Phụ gia kháng nấm an toàn, không arsenic/chất cấm REACH"],
            ["Khô trước đóng gói", "Phơi màng tối thiểu 24h — ẩm trong carton là lồng nuôi nấm"],
            ["Kiểm soát đóng thùng", "Gói hút ẩm + lót nilon với đơn biển dài ngày"],
          ],
        },
      },
      {
        id: "quy-trinh-thi-cong",
        heading: "3. Quy trình thi công chuẩn cho xưởng đan lát",
        steps: [
          {
            step: "Bước 1",
            title: "Sấy phôi & làm sạch",
            desc: "Sấy/phơi phôi đan lát đạt < 14% ẩm, phủi sạch bụi — bước quyết định chống mốc.",
          },
          {
            step: "Bước 2",
            title: "Lót kháng nấm + tăng bám",
            desc: "1 lớp lót kháng nấm hệ nước, khô 1 - 2 giờ.",
          },
          {
            step: "Bước 3",
            title: "Sơn màu / phủ bóng mờ",
            desc: "Phun HVLP béc 1.4 - 1.8mm áp thấp nhiều hướng cho vào kẽ đan; hoặc nhúng/quét tùy quy mô. 1 - 2 lớp, mỗi lớp khô 1 - 2 giờ.",
          },
          {
            step: "Bước 4",
            title: "Phơi tổng 24h trước đóng gói",
            desc: "Khu vực phơi thoáng gió — sản phẩm đan lát giữ ẩm lâu hơn sản phẩm đặc.",
          },
        ],
      },
      {
        id: "mang-son-deo",
        heading: "4. Chọn màng sơn: dẻo theo uốn cong",
        paragraphs: [
          "Sợi đan uốn cong khi xếp/vận chuyển nên bắt buộc hệ acrylic dẻo (flexible grade) — sơn PU/epoxy cứng sẽ gãy màng ngay khi vặn sản phẩm. Phủ trong suốt không ố vàng giữ tông tự nhiên của sợi; cấm dùng sơn dung môi vì mùi tồn dư nhiều tháng trong hàng xuất khẩu.",
        ],
      },
      {
        id: "tieu-chuan-xuat-khau",
        heading: "5. Tiêu chuẩn xuất khẩu cho hàng thủ công mỹ nghệ",
        paragraphs: [
          "Buyer EU/US/Nhật kiểm 3 nhóm: phát thải & mùi (VOCs, mùi dung môi sót), hóa chất giới hạn (REACH SVHC, Prop 65, chất diệt nấm cấm như PCP/tin organic), và kiểm dịch thực vật (vật liệu khô sạch không sâu nấm). Hồ sơ kèm: TDS/MSDS, test report màng sơn SGS/Intertek, chứng nhận ẩm độ trước đóng gói — xem chi tiết [quy trình đệ trình kiểm định xuất khẩu EU/US](/blog/son-go-he-nuoc/tieu-chuan-xuat-khau-eu-us).",
        ],
      },
    ],
    faqs: [
      {
        question: "Hàng lục bình/cói hay bị mốc sau khi vào container — sơn hệ nước có giúp được không?",
        answer:
          "Có, nhưng sơn chỉ là 1 trong 3 chốt chặn: phôi khô < 14% trước sơn, lót kháng nấm làm rào thứ hai, phơi màng 24h trước đóng thùng kèm gói hút ẩm.",
      },
      {
        question: "Sơn xong sản phẩm đan bị cứng, gãy sợi khi uốn — do đâu?",
        answer:
          "Dùng nhầm sơn cứng giòn. Trên nền đan lát phải dùng hệ acrylic dẻo — sơn PU/epoxy sẽ nứt màng ngay khi vặn sản phẩm.",
      },
      {
        question: "Phun vào kẽ đan thưa có bị chảy tụ không — khắc phục thế nào?",
        answer:
          "Phun độ nhớt chuẩn, áp thấp, nhiều hướng, mỗi lớp mỏng. Sản phẩm đáy hở nên đặt trên lưới/giá để thoát sơn dư.",
      },
      {
        question: "Đơn xuất khẩu yêu cầu 'không mùi khi mở thùng' — sơn hệ nước đạt không?",
        answer:
          "Đạt nếu phơi khô đủ 24h có gió lưu thông. Mùi còn lại 99% do sơn chưa khô thấu bị đóng gói sớm, không phải bản chất sơn.",
      },
    ],
    relatedSlugs: ["son-go-he-nuoc/tieu-chuan-xuat-khau-eu-us", "son-go-he-nuoc", "chuyen-doi-he-nuoc"],
  },

  "son-go-he-nuoc/do-choi-go": {
    slug: "son-go-he-nuoc/do-choi-go",
    category: "Sơn Gỗ Hệ Nước",
    categorySlug: "son-go-he-nuoc",
    title: "Sơn Đồ Chơi Gỗ Hệ Nước Chuẩn EN71-3: An Toàn Tiếp Xúc Miệng Trẻ Em | Sơn Lotus",
    metaDescription:
      "Sơn đồ chơi gỗ hệ nước Lotus đạt EN71-3 (không thôi nhiễm 19 kim loại nặng), ASTM F963/CPSIA cho thị trường Mỹ, kháng nước bọt DIN 53160. Hồ sơ SGS/Intertek đứng tên nhà máy. Nhận mẫu test xưởng.",
    h1: "Sơn Đồ Chơi Gỗ Hệ Nước Chuẩn EN71-3: Giải Pháp An Toàn Cho Đồ Chơi Trẻ Em Xuất Khẩu",
    publishedAt: "01/11/2026",
    readTime: "7 phút đọc",
    quickSummary:
      "Sơn đồ chơi gỗ hệ nước là hệ sơn phủ gốc nước thiết kế để vượt các bộ tiêu chuẩn an toàn đồ chơi khắt khe nhất: EN 71-3 (giới hạn thôi nhiễm 19 kim loại nặng khi trẻ nhai/ngậm), ASTM F963 & CPSIA (Chì < 90ppm cho Mỹ) và DIN 53160 (kháng nước bọt - mồ hôi). Màng sơn không VOC, không mùi tồn dư, đáp ứng yêu cầu kiểm định của Buyer chuỗi đồ chơi quốc tế.",
    whenToChoose: [
      "Nhà máy sản xuất đồ chơi gỗ, khối lắp ghép, đồ Montessori, đồ mầm non xuất khẩu EU/Mỹ/Nhật.",
      "Sản phẩm gỗ cho trẻ dưới 36 tháng tuổi — nhóm kiểm soát nghiêm ngặt nhất vì trẻ đưa vào miệng.",
      "Nội thất trẻ em, cũi, bàn ghế mầm non yêu cầu màng sơn an toàn và mùi zero.",
      "Đơn OEM cho thương hiệu đồ chơi quốc tế yêu cầu test report SGS/Intertek đứng tên nhà máy.",
    ],
    whenNotToChoose: [
      "Sản phẩm giá rẻ nội địa không yêu cầu kiểm định — không cần cấp độ chứng nhận cao.",
      "Đồ chơi ngâm nước liên tục (đồ chơi tắm) — cần hệ kháng nước chuyên biệt hơn.",
    ],
    lotusRecommendation:
      "EN71-3 kiểm tra màng sơn đã khô trên sản phẩm, không kiểm tra lon sơn. Buyer yêu cầu test trên chính sản phẩm hoàn thiện (gỗ + keo + sơn) — phối hợp cùng Lotus và Lab từ đầu dự án: chọn gỗ nguồn sạch, cố định quy trình, rồi mới gửi mẫu thành phẩm kiểm định.",
    sections: [
      {
        id: "cac-tieu-chuan",
        heading: "1. Các bộ tiêu chuẩn an toàn áp dụng cho màng sơn đồ chơi",
        table: {
          headers: ["Tiêu chuẩn", "Thị trường", "Kiểm soát", "Ngưỡng trọng yếu"],
          rows: [
            ["EN 71-3", "EU & quốc tế", "Thôi nhiễm 19 kim loại nặng", "Chì < 23 mg/kg, Cd < 17 mg/kg"],
            ["ASTM F963", "Mỹ", "Chì tổng + kim loại hòa tan", "Chì tổng < 90 ppm"],
            ["CPSIA", "Mỹ", "Chì + Phthalates", "Phthalates < 0.1%"],
            ["DIN 53160", "EU (Đức)", "Bền màu với nước bọt/mồ hôi", "Không đổi màu, không thôi nhiễm"],
            ["California Prop 65", "Mỹ", "900+ chất gây ung thư/dị tật", "Không chứa hoặc phải cảnh báo"],
          ],
        },
      },
      {
        id: "quy-trinh-thi-cong",
        heading: "2. Quy trình thi công chuẩn cho xưởng đồ chơi gỗ",
        steps: [
          {
            step: "Bước 1",
            title: "Gỗ nguồn sạch & chà nhám mịn",
            desc: "Beech, cao su, thông sấy đủ khô; chà nhám P240 - P320 mịn tuyệt đối — đồ chơi kiểm tra cả an toàn vật lý (gai, xước).",
          },
          {
            step: "Bước 2",
            title: "Lót/màu hệ nước dòng đồ chơi",
            desc: "Chỉ dùng màu bột sạch chuyên đồ chơi — màu công nghiệp rẻ có thể chứa chì/chromate. Không trám bột lạ không rõ nguồn.",
          },
          {
            step: "Bước 3",
            title: "Phủ bảo vệ kháng nước bọt",
            desc: "1 lớp phủ hệ nước, đóng rắn đủ 48 giờ trước đóng gói — màng chưa đóng rắn dễ tróc nhiễm vào miệng trẻ.",
          },
          {
            step: "Bước 4",
            title: "Kiểm tra xuất xưởng",
            desc: "KCS kiểm tra cạnh sắc, vết nứt, mùi và test cạy móng tay — màng bong bột là chưa đạt.",
          },
        ],
      },
      {
        id: "khang-nuoc-bot",
        heading: "3. Kháng nước bọt & độ bền cọ xát — yêu cầu riêng của đồ chơi",
        paragraphs: [
          "DIN 53160 ngâm mẫu trong dung dịch giả lập nước bọt/mồ hôi: màng không được phai màu, bong lớp hay thôi nhiễm bột màu — sơn hệ nước đạt khi đóng rắn đủ 48 giờ. Độ bền cọ xát & va đập đòi màng dẻo cứng cân bằng; hệ phủ 2K hệ nước đạt cứng 2H và chịu rơi lắp ráp nhiều lần. Với đồ chơi xuất khẩu còn cần trọn bộ [hồ sơ TDS/MSDS đứng tên nhà máy](/blog/son-go-he-nuoc/tieu-chuan-xuat-khau-eu-us).",
        ],
      },
      {
        id: "de-trinh-kiem-dinh",
        heading: "4. Quy trình đệ trình kiểm định với Buyer quốc tế",
        steps: [
          {
            step: "Bước 1",
            title: "Chốt spec với Buyer",
            desc: "Bộ tiêu chuẩn áp dụng, tuổi sử dụng mục tiêu, danh mục vật liệu.",
          },
          {
            step: "Bước 2",
            title: "Cố định quy trình sản xuất",
            desc: "Nguồn gỗ, loại sơn, số lớp thành văn bản — đổi quy trình là phải test lại.",
          },
          {
            step: "Bước 3",
            title: "Gửi mẫu thành phẩm kiểm định",
            desc: "Test EN71-3/ASTM F963 tại SGS/Intertek trên sản phẩm hoàn thiện, không phải lon sơn.",
          },
          {
            step: "Bước 4",
            title: "Nhận chứng thư đứng tên",
            desc: "Chứng thư mang tên nhà máy/dự án dùng đệ trình Buyer và lưu hồ sơ hải quan cho mọi lô cùng spec.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Sơn hệ nước có thật sự an toàn cho trẻ em ngậm đồ chơi không?",
        answer:
          "Có — khi sản phẩm đạt kiểm nghiệm EN71-3 trên thành phẩm thật. Màng Lotus không phát hiện 19 kim loại nặng thôi nhiễm, không mùi tồn dư, kháng nước bọt DIN 53160.",
      },
      {
        question: "Màu sơn đồ chơi nhiều màu có an toàn bằng màu gỗ tự nhiên không?",
        answer:
          "An toàn tương đương nếu dùng bột màu sạch chuyên dòng đồ chơi. Nguy cơ nằm ở bột màu công nghiệp giá rẻ có thể chứa chì/chromate.",
      },
      {
        question: "Đồ chơi gỗ có bắt buộc phải sơn không — để mộc có tốt hơn không?",
        answer:
          "Không bắt buộc nhưng nên sơn. Gỗ mộc hút bẩn, vi khuẩn và gây xước tay; màng hệ nước tạo lớp vệ sinh dễ lau mà vẫn giữ cảm giác gỗ nếu dùng phủ mờ trong suốt.",
      },
      {
        question: "Xưởng đang làm đơn nội địa — chuyển sang đồ chơi xuất khẩu cần đổi gì?",
        answer:
          "Ba việc: đổi hệ sơn + màu chuyên đồ chơi có hồ sơ, cố định quy trình thành văn bản, và gửi mẫu thành phẩm kiểm định EN71-3/ASTM F963 đứng tên nhà máy.",
      },
    ],
    relatedSlugs: ["son-go-he-nuoc/tieu-chuan-xuat-khau-eu-us", "son-go-he-nuoc", "so-sanh/son-go-he-nuoc-vs-son-pu"],
  },

  "son-kim-loai-he-nuoc/son-ton": {
    slug: "son-kim-loai-he-nuoc/son-ton",
    category: "Sơn Kim Loại Hệ Nước",
    categorySlug: "son-kim-loai-he-nuoc",
    title: "Sơn Tôn Hệ Nước: Phục Hồi Mái Tôn Rỉ, Chống Nóng & Bền Màu Nắng Mưa | Sơn Lotus",
    metaDescription:
      "Sơn tôn hệ nước Lotus cho mái tôn, tôn mạ kẽm, tôn màu: bám trực tiếp không cần lót etchant, chống rỉ muối biển, tùy chọn màu phản xạ nhiệt giảm nóng 8-12°C, không mùi. Tư vấn khảo sát mái miễn phí.",
    h1: "Sơn Tôn Hệ Nước: Giải Pháp Phục Hồi & Bảo Vệ Mái Tôn, Tôn Mạ Màu",
    publishedAt: "01/11/2026",
    readTime: "6 phút đọc",
    quickSummary:
      "Sơn tôn hệ nước là hệ sơn gốc nước chuyên cho mái tôn, tôn mạ kẽm và tôn sơn màu sẵn — dùng nhựa DTM bám dính trực tiếp lên nền kẽm không cần lót ăn mòn. Hệ sơn kháng muối 500 - 720 giờ, kháng UV giữ màu 5 - 8 năm, tùy chọn hạt màu phản xạ nhiệt giảm nhiệt bề mặt mái 8 - 15°C và hoàn toàn không mùi khi thi công trên mái cao.",
    whenToChoose: [
      "Mái tôn nhà xưởng/nhà dân bạc màu, chấm rỉ đầu sóng muốn phục hồi thay thay mái.",
      "Mái tôn cần đổi màu theo kiến trúc hoặc sơn phản xạ nhiệt chống nóng.",
      "Kho tôn mạ kẽm cuộn/sóng mới cần sơn bảo vệ tăng.",
    ],
    whenNotToChoose: [
      "Tôn rỉ thủng, mục vảy nặng phải thay — sơn chỉ cứu được tôn còn nguyên kết cấu.",
      "Bề mặt tôn còn dầu bảo quản hoặc lớp phủ silicon chưa vệ sinh.",
    ],
    lotusRecommendation:
      "Rỉ vảy cần đánh sạch đạt St 2 trước khi sơn — sơn phủ lên rỉ giòn sẽ bong theo lớp rỉ. Chấm rỉ nhẹ dùng sơn chuyển rỉ gốc nước cục bộ trước khi phun hệ. Chỉ thi công khi mặt mái < 40°C — trưa nắng bề mặt tôn 60 - 70°C làm nước bay hơi quá nhanh gây sôi bọt màng.",
    sections: [
      {
        id: "dac-thu-nen-ton",
        heading: "1. Đặc thù nền tôn: mạ kẽm trơn, rỉ & nóng",
        list: [
          "Lớp kẽm trơn, năng lượng thấp: sơn dầu bong do phản ứng xà phòng hóa với kẽm — hệ nước DTM bám hóa học trực tiếp.",
          "Rỉ đầu sóng, mép cắt, vùng tụ nước: điểm hư trước nhất, xử lý cục bộ trước hệ sơn.",
          "Giãn nở nhiệt cực đoan trưa/mưa: màng phải đàn hồi theo, không giòn nứt tại đường vít sóng.",
        ],
      },
      {
        id: "quy-trinh-mai-ton",
        heading: "2. Quy trình thi công mái tôn cũ 5 bước",
        steps: [
          {
            step: "Bước 1",
            title: "Đánh rỉ & rửa áp lực",
            desc: "Đánh vảy rỉ đạt St 2, rửa áp lực tẩy bụi, dầu, rêu — khô 24 giờ.",
          },
          {
            step: "Bước 2",
            title: "Chuyển rỉ cục bộ",
            desc: "Sơn chuyển rỉ gốc nước lên chấm rỉ còn sót sau đánh.",
          },
          {
            step: "Bước 3",
            title: "Lót DTM chống rỉ",
            desc: "1 lớp — nền mạ kẽm khỏe có thể bỏ qua bước lót.",
          },
          {
            step: "Bước 4",
            title: "Phun/lăn màu 2 lớp",
            desc: "Béc airless 517 - 521, phun theo chiều sóng, ưu tiên vùng tụ nước.",
          },
          {
            step: "Bước 5",
            title: "Nghiệm thu mép sóng, vít, máng",
            desc: "Kiểm tra độ phủ các điểm kỹ thuật trước khi bàn giao.",
          },
        ],
      },
      {
        id: "phan-xa-nhiet",
        heading: "3. Sơn phản xạ nhiệt — giải pháp chống nóng mái tôn",
        paragraphs: [
          "Hạt màu phản xạ hồng ngoại trong sơn màu sáng/trung bình phản xạ phần lớn bức xạ nhiệt — bề mặt mái mát hơn 8 - 15°C trưa nắng, tầng áp mái mát theo, giảm tải điều hòa. Quan trọng là hạt màu, không chỉ độ sáng: màu tối vẫn dùng được với hệ phản xạ nhiệt. Với nền tôn mạ nhẵn trơn, xem chi tiết cơ chế bám dính trong bài [sơn sắt mạ kẽm hệ nước](/blog/son-kim-loai-he-nuoc/sat-ma-kem).",
        ],
      },
      {
        id: "dinh-muc",
        heading: "4. Định mức & so sánh phương án",
        paragraphs: [
          "Lót DTM chống rỉ 9 - 11 m2/kg; sơn màu/phản xạ 7 - 9 m2/kg/lớp — tôn sóng hệ số bề mặt 1.2 - 1.4 lần mái phẳng. Chi phí phục hồi mái chỉ ~15 - 25% so với thay mái mới, độ bền màu/rỉ 5 - 8 năm.",
        ],
      },
    ],
    faqs: [
      {
        question: "Mái tôn đang chấm rỉ có sơn được không?",
        answer:
          "Được nếu rỉ chưa thủng. Đánh vảy rỉ đạt St 2, xử lý chấm rỉ bằng sơn chuyển rỉ cục bộ rồi phun hệ DTM. Rỉ thủng/mục phải thay tôn.",
      },
      {
        question: "Sơn tôn hệ nước có bám được trên tôn mạ kẽm nhẵn không?",
        answer:
          "Được — dòng DTM bám hóa học trực tiếp trên kẽm không cần lót ăn mòn, khác hẳn sơn dầu vốn bong do xà phòng hóa với kẽm.",
      },
      {
        question: "Sơn xong bao lâu sợ mưa?",
        answer:
          "Ráo mặt 30 - 60 phút; chịu mưa sau 4 - 6 giờ ráo và bền rửa đủ sau 24 - 48 giờ. Không thi công khi dự báo mưa trong ngày.",
      },
      {
        question: "Tôn sơn màu sẵn (loại nhập) có sơn đè được không?",
        answer:
          "Được — nhám nhẹ P320 lớp phủ cũ còn bám tốt, vệ sinh sạch rồi phun trực tiếp hệ màu hệ nước.",
      },
    ],
    relatedSlugs: ["son-kim-loai-he-nuoc", "son-kim-loai-he-nuoc/sat-ma-kem", "loi-thi-cong/bong-troc-son-ma-kem"],
  },

  "son-kim-loai-he-nuoc/sat-ma-kem": {
    slug: "son-kim-loai-he-nuoc/sat-ma-kem",
    category: "Sơn Kim Loại Hệ Nước",
    categorySlug: "son-kim-loai-he-nuoc",
    title: "Sơn Sắt Mạ Kẽm Hệ Nước: Bám Trực Tiếp Lên Nền Kẽm Không Cần Lót Etchant | Sơn Lotus",
    metaDescription:
      "Sơn sắt mạ kẽm hệ nước Lotus: bám hóa học trực tiếp lên tôn mạ, ống kẽm, hàng rào mạ không bong tróc như sơn dầu; không cần lót etchant/axit, chống rỉ muối biển, không mùi. Tư vấn hệ sơn theo loại mạ.",
    h1: "Sơn Sắt Mạ Kẽm Hệ Nước: Giải Pháp Bám Dính Trên Nền Kẽm Nhúng Nóng & Mạ Điện Không Bong Tróc",
    publishedAt: "01/11/2026",
    readTime: "6 phút đọc",
    quickSummary:
      "Sơn sắt mạ kẽm hệ nước là hệ sơn gốc nước dùng nhựa DTM bám hóa học trực tiếp lên lớp kẽm nhúng nóng, mạ điện, tôn mạ — không cần lót etchant/axit, khắc phục lỗi kinh điển của sơn dầu là bong mảng do xà phòng hóa (zinc soap) với kẽm. Bám dính 4B - 5B, kháng muối 500 - 720 giờ, ứng dụng cho tôn sóng, ống mạ, hàng rào, xà gồ và sửa chữa điểm mạ bị hư.",
    whenToChoose: [
      "Mái tôn mạ kẽm, ống mạ công nghiệp/dân dụng cần sơn màu hoặc tăng bảo vệ.",
      "Hàng rào, cổng, xà gồ, khung thép nhúng nóng cần hệ phủ bảo vệ thêm.",
      "Sửa chữa điểm mạ bị xước, hàn, cắt bằng sơn phủ zinc-rich tăng bảo vệ.",
    ],
    whenNotToChoose: [
      "Bề mặt mạ còn lớp bảo quản (chromate/dầu) chưa vệ sinh.",
      "Vết cắt sắt đen trần — cần hệ chống rỉ khác trước khi phủ.",
    ],
    lotusRecommendation:
      "Test nhanh khả năng bám: chấm nước cất — loang màng đều là nền sẵn sàng; co giọt tròn là còn lớp bảo quản/dầu phải tẩy. Mạ mới < 48 giờ còn 'tươi' nên để lão hóa 1 - 2 tuần hoặc chà nhám nhẹ + tẩy dầu trước khi sơn.",
    sections: [
      {
        id: "xa-phong-hoa",
        heading: "1. Vì sao sơn dầu bong trên nền mạ kẽm",
        paragraphs: [
          "Nhựa alkyd/sơn dầu chứa acid béo phản ứng với kẽm tạo xà phòng kẽm (zinc soap) ở giao diện — lớp xà phòng giòn không bám, màng sơn bong mảng sau vài tháng. Sơn hệ nước DTM dùng nhựa không phản ứng với kẽm + nhóm chức bám trực tiếp lên lớp oxit kẽm, không cần lót etchant axit.",
        ],
      },
      {
        id: "phan-loai-nen-ma",
        heading: "2. Phân loại nền mạ & mức xử lý",
        table: {
          headers: ["Nền mạ", "Đặc điểm", "Xử lý trước sơn"],
          rows: [
            ["Kẽm nhúng nóng", "Lớp kẽm dày xám sần", "Tẩy dầu + nhám nhẹ; mạ mới để lão hóa"],
            ["Tôn mạ điện / lạnh", "Kẽm mỏng nhẵn trơn", "Tẩy dầu kỹ, lót tăng bám nhẹ"],
            ["Tôn Aluzinc", "Bề mặt láng hơn nữa", "Tẩy dầu + lót bám bắt buộc"],
            ["Mạ cũ có rỉ trắng", "Oxit kẽm trắng xốp", "Chà sạch rỉ trắng rồi phun trực tiếp"],
            ["Điểm hàn/cắt mất mạ", "Lộ sắt đen trần", "Zinc-rich cục bộ trước khi phủ"],
          ],
        },
      },
      {
        id: "quy-trinh",
        heading: "3. Quy trình thi công chuẩn trên nền mạ kẽm",
        steps: [
          {
            step: "Bước 1",
            title: "Tẩy dầu/bảo quản + nhám nhẹ",
            desc: "Vệ sinh dung dịch tẩy hoặc IPA; chà nhám P320 nếu nền quá trơ.",
          },
          {
            step: "Bước 2",
            title: "Lót tăng bám (nền trơ)",
            desc: "Bắt buộc với Aluzinc/mạ điện nhẵn, flash-off 20 - 30 phút.",
          },
          {
            step: "Bước 3",
            title: "Phun sơn DTM 1 - 2 lớp",
            desc: "Mỗi lớp cách 45 - 60 phút có quạt.",
          },
          {
            step: "Bước 4",
            title: "Đóng rắn 24 - 48 giờ",
            desc: "Trước vận chuyển hoặc lắp đặt.",
          },
        ],
      },
      {
        id: "ung-dung",
        heading: "4. Ứng dụng theo sản phẩm & định mức",
        paragraphs: [
          "Ứng dụng: [mái tôn mạ sơn phục hồi](/blog/son-kim-loai-he-nuoc/son-ton) (kèm phản xạ nhiệt), ống mạ sơn màu nhận diện, hàng rào/cổng/lan can nhúng nóng phủ màu kiến trúc, xà gồ Z khung mái mạ nhà xưởng ven biển, và sơn zinc-rich sửa điểm mạ hư thay phun kẽm. Nếu đang gặp lỗi bong tróc trên nền mạ, đọc thêm [nguyên nhân & xử lý bong tróc sơn mạ kẽm](/blog/loi-thi-cong/bong-troc-son-ma-kem).",
        ],
        table: {
          headers: ["Hạng mục", "Định mức / lớp", "Ghi chú"],
          rows: [
            ["Lót tăng bám", "10 - 12 m2/kg", "Màng siêu mỏng 15 - 25 µm"],
            ["Sơn DTM hệ nước", "8 - 10 m2/kg", "1 - 2 lớp tùy độ phủ"],
            ["Zinc-rich sửa mạ", "5 - 7 m2/kg", "Phủ dày cục bộ"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Sơn dầu có sơn được trực tiếp lên mạ kẽm không?",
        answer:
          "Không — acid béo trong alkyd phản ứng với kẽm tạo xà phòng kẽm giòn, màng bong mảng sau vài tháng.",
      },
      {
        question: "Có cần dùng lót etchant/lót axit trước khi sơn mạ kẽm?",
        answer:
          "Không với hệ nước DTM — nhựa bám hóa học trực tiếp lên kẽm. Chỉ cần tẩy dầu/bảo quản và nhám nhẹ nếu nền quá trơ.",
      },
      {
        question: "Nền mạ có rỉ trắng thì xử lý thế nào?",
        answer:
          "Rỉ trắng là oxit kẽm xốp — chà sạch đến nền kẽm chắc, vệ sinh rồi phun trực tiếp. Không sơn lên rỉ trắng xốp.",
      },
      {
        question: "Điểm hàn/cắt mất lớp mạ thì sơn gì?",
        answer:
          "Vùng lộ sắt đen phải dùng sơn zinc-rich hoặc chống rỉ cục bộ trước, rồi phủ cùng hệ — không thể coi như nền mạ.",
      },
    ],
    relatedSlugs: ["son-kim-loai-he-nuoc", "son-kim-loai-he-nuoc/son-ton", "loi-thi-cong/bong-troc-son-ma-kem"],
  },

  "son-composite-he-nuoc/wpc": {
    slug: "son-composite-he-nuoc/wpc",
    category: "Sơn Composite Hệ Nước",
    categorySlug: "son-composite-he-nuoc",
    title: "Sơn WPC Hệ Nước: Phục Hồi & Đổi Màu Gỗ Nhựa Composite Ngoài Trời | Sơn Lotus",
    metaDescription:
      "Sơn WPC hệ nước Lotus cho sàn gỗ nhựa, tấm ốp, hàng rào composite: bám trên nền nhựa-wood khó bám, phục hồi tấm bạc màu tróc vỏ, kháng UV, chịu ngoài trời, không mùi. Tư vấn hệ sơn theo loại WPC.",
    h1: "Sơn WPC Hệ Nước: Giải Pháp Phục Hồi & Đổi Màu Sàn, Tấm Ốp Gỗ Nhựa Composite Ngoài Trời",
    publishedAt: "01/11/2026",
    readTime: "6 phút đọc",
    quickSummary:
      "Sơn WPC hệ nước là hệ sơn gốc nước chuyên cho nền gỗ nhựa composite — vật liệu lai khó bám vì chứa nhựa PE/PP/PVC năng lượng thấp trộn bột gỗ. Dùng lót tăng bám nhựa + sơn màu kháng UV ngoài trời để phục hồi tấm WPC bạc màu tróc vỏ sau 3 - 5 năm nắng hoặc đổi màu/tạo vân gỗ trên tấm sản xuất. Bám dính 4B - 5B, kháng UV 5+ năm.",
    whenToChoose: [
      "Sàn sân vườn, tấm ốp mặt tiền, hàng rào, lam chắn nắng WPC bạc màu, tróc lớp vỏ bề mặt.",
      "Nhà máy WPC muốn mở rộng bảng màu/vân gỗ không phải pha hạt màu nhựa từ đầu.",
      "Tấm WPC trơn màu muốn tạo vân gỗ 3D nâng cấp dòng sản phẩm.",
    ],
    whenNotToChoose: [
      "Tấm WPC lõm nước đã trương nở, nứt vỡ cấu trúc — phải thay.",
      "Bề mặt co-extrusion còn nguyên vẹn — không cần sơn, chỉ sơn khi vỏ đã tróc/hao mòn.",
    ],
    lotusRecommendation:
      "Lotus 2k33 là hệ sơn chuyên dụng cho gỗ nhựa ngoài trời: dùng cho cả phục hồi tấm WPC cũ bạc màu lẫn đổi màu theo ý muốn. Lưu ý nền WPC có lớp vỏ nhựa bị UV phá hủy tróc vảy thì phải cạo/rửa sạch về lõi chắc trước khi sơn — sơn đè lên vỏ đang bong sẽ bong theo chỉ sau vài tháng.",
    sections: [
      {
        id: "nen-kho-bam-kep",
        heading: "1. WPC là nền khó bám kép: nhựa + bột gỗ",
        list: [
          "Phần nhựa năng lượng thấp: sơn co giọt trên vùng giàu nhựa — cần lót tăng bám.",
          "Phần bột gỗ hút nước không đều: vùng giàu bột hút mạnh làm màng không đều.",
          "Bề mặt đóng da trơ từ ép: phải nhám phá da trước khi sơn.",
          "Suy giảm UV: nhựa phấn hóa, vỏ tróc dưới nắng — lớp đang hư phải loại bỏ, không sơn đè.",
        ],
      },
      {
        id: "quy-trinh",
        heading: "2. Quy trình phục hồi & đổi màu WPC với hệ Lotus 2k33",
        paragraphs: [
          "Hệ sơn chuyên dụng Lotus 2k33 cho gỗ nhựa ngoài trời áp dụng thống nhất cho 2 bài toán: sơn lại WPC cũ bạc màu/tróc vỏ và đổi màu tấm theo ý muốn. Quy trình chuẩn 4 bước:",
        ],
        steps: [
          {
            step: "Bước 1",
            title: "Rửa + cạo lớp vỏ hư",
            desc: "Rửa áp lực, cạo sạch lớp vỏ nhựa hư và bột phấn UV — với tấm mới chỉ đổi màu thì chỉ cần vệ sinh sạch.",
          },
          {
            step: "Bước 2",
            title: "Nhám về nền lõi chắc",
            desc: "Chà nhám P180 - P240 phá da trơ, vệ sinh sạch, khô 24 giờ.",
          },
          {
            step: "Bước 3",
            title: "Lót tăng bám WPC",
            desc: "1 lớp mỏng lót tăng bám 2k33 đều hóa độ hút giữa vùng nhựa và bột gỗ, khô 30 - 45 phút.",
          },
          {
            step: "Bước 4",
            title: "Sơn màu Lotus 2k33 theo màu chọn",
            desc: "Phun/lăn/quét 2 lớp mỏng màu kháng UV ngoài trời — đổi màu theo ý muốn, giữ được độ nhám gỗ tự nhiên của tấm.",
          },
        ],
      },
      {
        id: "doi-mau-van-go",
        heading: "3. Đổi màu & tạo vân gỗ cho tấm WPC sản xuất",
        paragraphs: [
          "Nhà máy WPC dùng sơn đổi màu tấm nâu/đen tiêu chuẩn thành đa dạng tông không phải pha hạt màu nhựa — tồn kho linh hoạt. Tạo vân gỗ 3D trên tấm trơn: basecoat màu thịt gỗ → kéo vân stain → phủ UV theo [kỹ thuật sơn giả gỗ](/blog/son-gia-go-he-nuoc), biến tấm giá rẻ thành dòng vân gỗ cao cấp. Nền WPC phần nào cũng là bài toán [bám dính trên nhựa năng lượng thấp](/blog/son-nhua-he-nuoc).",
        ],
      },
      {
        id: "dinh-muc",
        heading: "4. Định mức & độ bền ngoài trời",
        paragraphs: [
          "Hệ Lotus 2k33: lót tăng bám 9 - 11 m2/kg; sơn màu 7 - 9 m2/kg — tấm rãnh sóng hệ số ~1.3x. Hệ đúng quy trình giữ màu & bám dính 5+ năm ngoài trời; sàn chịu chân đi lại nên chọn hệ mờ chống trầy + chống trượt.",
        ],
      },
    ],
    faqs: [
      {
        question: "Tấm WPC bạc màu, tróc vỏ có sơn phục hồi được không?",
        answer:
          "Được nếu lõi còn chắc — cạo sạch lớp vỏ hư về nền, nhám + lót tăng bám rồi sơn. Sơn đè lên vỏ đang tróc sẽ bong theo.",
      },
      {
        question: "Sơn có bám được trên bề mặt WPC trơ không?",
        answer:
          "Có, sau khi nhám phá lớp da trơ + lót tăng bám. WPC chứa nhựa năng lượng thấp nên không thể sơn trực tiếp như gỗ.",
      },
      {
        question: "WPC có co giãn nhiệt làm nứt màng sơn không?",
        answer:
          "WPC giãn nhiệt đáng kể theo chiều tấm — hệ sơn hệ nước có độ dẻo đàn hồi theo được; tránh sơn giòn cứng và lớp quá dày.",
      },
      {
        question: "Có tạo vân gỗ được trên tấm WPC trơn màu không?",
        answer:
          "Được — quy trình giả gỗ: basecoat màu thịt gỗ, kéo vân bằng cọ/dụng cụ, phủ UV. Biến tấm trơn thành dòng vân gỗ 3D.",
      },
    ],
    relatedSlugs: ["son-composite-he-nuoc", "son-nhua-he-nuoc", "son-gia-go-he-nuoc"],
  },
};
