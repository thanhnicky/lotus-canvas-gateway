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
      "Sơn hệ nước Lotus đáp ứng toàn bộ các bộ tiêu chuẩn kiểm định an toàn màng phủ quốc tế khắt khe nhất dành cho đồ gỗ nội ngoại thất và thủ công mỹ nghệ xuất khẩu sang thị trường Châu Âu (EU), Mỹ (US) và Nhật Bản. Sản phẩm đạt chứng chỉ an toàn đồ chơi trẻ em EN 71-3, giới hạn chất độc hại RoHS, danh mục chất có mối quan ngại rất cao REACH (SVHC 240+ chất), đạo luật không khí sạch California Proposition 65 và hàm lượng VOCs < 45 g/L (chuẩn EPA Method 24). Lotus cung cấp đầy đủ hồ sơ đệ trình thầu gồm: TDS, MSDS và Test Report gốc từ SGS / Intertek / QUATEST 3.",
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
        heading: "3. Bảng kết quả thử nghiệm thực tế từ SGS & QUATEST 3",
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
            desc: "Lotus đồng hành cùng nhà máy gửi mẫu phôi đã sơn hoàn thiện đến SGS/Intertek/QUATEST 3.",
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
          "Hoàn toàn được chấp nhận. Các chứng nhận thử nghiệm của Lotus được thực hiện bởi các tập đoàn kiểm định toàn cầu như SGS, Intertek và trung tâm kiểm định nhà nước QUATEST 3, có giá trị pháp lý quốc tế.",
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
};
