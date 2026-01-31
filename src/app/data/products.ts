export type Product = {
  id: string;
  name: string;
  tone: string;
  image: string;
  highlights: string[];
  usage: string;
  detail: string;
};

export const products: Product[] = [
  {
    id: "peptide",
    name: "婕樂纖【厚焙奶茶】",
    tone: "輕卡營養",
    image: "/products/peptide.jpg",
    highlights: ["高纖 · 高鈣 · 高維生素 C", "專利 D-核糖", "專利絲素肽"],
    usage: "建議每次一包、每天 1-2 次，可搭配 200-250cc 飲品。",
    detail: "溫潤厚焙口感，適合取代含糖飲料的日常補給。",
  },
  {
    id: "digest",
    name: "植萃纖酵宿",
    tone: "腸道順暢",
    image: "/products/digest.jpg",
    highlights: ["維持消化道機能", "調整體質", "使排便順暢"],
    usage: "搭配足量水分補充，建立日常順暢節奏。",
    detail: "針對蔬菜攝取少、排便不規律的需求。",
  },
  {
    id: "shape",
    name: "我的祕密 纖飄錠",
    tone: "體態管理",
    image: "/products/shape.jpg",
    highlights: ["健字號：不易形成體脂肪", "健字號：調節血脂", "日常體態管理"],
    usage: "搭配飲食與運動習慣，持續維持體態。",
    detail: "外食或甜食頻率偏高時的管理方案。",
  },
  {
    id: "metabo",
    name: "爆纖錠",
    tone: "代謝活力",
    image: "/products/metabo.jpg",
    highlights: ["增加體力", "營養補給", "促進新陳代謝"],
    usage: "適合作息偏晚、活動量不足時補給。",
    detail: "幫助維持活力感與代謝節奏。",
  },
  {
    id: "probiotic",
    name: "高機能益生菌",
    tone: "日常保養",
    image: "/products/probiotic.jpg",
    highlights: ["補充益生菌", "調整體質", "幫助消化"],
    usage: "壓力大或作息亂時，做為日常保養選擇。",
    detail: "維持菌相平衡的穩定補充。",
  },
  {
    id: "snow",
    name: "雪花紫纖飲",
    tone: "清爽代謝",
    image: "/products/snow.jpg",
    highlights: ["清涼解渴", "健康維持", "促進新陳代謝"],
    usage: "想要清爽口感時可選擇替代含糖飲料。",
    detail: "清爽代謝感，適合日常補給。",
  },
];

export const productPriority = ["peptide", "digest", "shape", "metabo", "probiotic", "snow"];

export const productFaqs: Record<string, { q: string; a: string }[]> = {
  peptide: [
    { q: "一天喝幾包？", a: "建議每次一包、每天 1-2 次，可搭配 200-250cc 飲品。" },
    { q: "適合什麼時候喝？", a: "早晨或午後替代含糖飲料時補充最順口。" },
  ],
  digest: [
    { q: "為什麼需要這款？", a: "針對蔬菜攝取少、排便不規律的日常需求。" },
    { q: "要怎麼搭配？", a: "搭配足量飲水與規律作息，感受更穩定。" },
  ],
  shape: [
    { q: "適合什麼族群？", a: "外食與甜食頻率偏高，想維持體態管理者。" },
    { q: "使用上要注意？", a: "建議搭配飲食與運動習慣，持續更有感。" },
  ],
  metabo: [
    { q: "適合什麼生活型態？", a: "作息偏晚、活動量不足、想提升活力感者。" },
    { q: "可以長期使用嗎？", a: "可依個人需求調整頻率，必要時諮詢專業人士。" },
  ],
  probiotic: [
    { q: "為什麼適合壓力大的人？", a: "壓力與作息會影響菌相，日常保養更重要。" },
    { q: "怎麼搭配效果更好？", a: "飲食多樣化、規律作息更能維持平衡。" },
  ],
  snow: [
    { q: "什麼情境適合？", a: "想要清爽口感、替代含糖飲料時很適合。" },
    { q: "喝起來的感受？", a: "清爽代謝感，適合日常補給。" },
  ],
};
