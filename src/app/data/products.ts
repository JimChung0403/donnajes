export type Product = {
  id: string;
  name: string;
  tone: string;
  image: string;
  highlights: string[];
  usage: string;
  detail: string;
  audience: string;
};

export const products: Product[] = [
  {
    id: "peptide",
    name: "輕卡肽纖飲（厚焙奶茶風味）",
    tone: "高纖厚焙奶茶",
    image: "/products/peptide.jpg",
    highlights: ["高纖 · 高鈣 · 高維生素 C", "專利 D-核糖", "專利絲素肽"],
    usage: "每次一包、每天 1-2 次，搭配 200-250cc 白開水、牛奶或豆漿。",
    detail: "厚焙奶茶風味的日常補給，主打高纖與營養平衡。",
    audience: "適合想以奶茶風味補給取代含糖飲品的日常族群。",
  },
  {
    id: "digest",
    name: "植萃纖酵宿",
    tone: "蔬果酵素纖維",
    image: "/products/digest.jpg",
    highlights: ["110 種彩虹蔬果酵素精華", "幫助維持消化道機能", "調整體質，使排便順暢"],
    usage: "每日 1-2 次，每次 1 錠，搭配足量水分補充。",
    detail: "蔬果酵素精華搭配纖維補給，適合外食族日常保養。",
    audience: "蔬菜攝取少、想維持消化道機能與順暢節奏者。",
  },
  {
    id: "shape",
    name: "我的祕密 纖飄錠",
    tone: "健字號體脂管理",
    image: "/products/shape.jpg",
    highlights: ["健字號：不易形成體脂肪", "健字號：調節血脂", "衛福部核准健康食品"],
    usage: "每日 2 次，每次 2 錠。",
    detail: "健字號健康食品，適合體脂與血脂管理。",
    audience: "希望以保健方式協助體脂與血脂管理者。",
  },
  {
    id: "metabo",
    name: "爆纖錠",
    tone: "代謝活力",
    image: "/products/metabo.jpg",
    highlights: ["增加體力", "營養補給", "促進新陳代謝"],
    usage: "每日 2 次，每次 2 錠。",
    detail: "以營養補給支持代謝與活力節奏。",
    audience: "作息不規律、希望補充活力與代謝支持者。",
  },
  {
    id: "probiotic",
    name: "高機能益生菌",
    tone: "益生菌日常保養",
    image: "/products/probiotic.jpg",
    highlights: ["L-137 後生元", "BGN4 益生菌", "多篇臨床實驗支持"],
    usage: "成人每日 2 包，空腹或睡前；加強期每日 3-4 包。",
    detail: "益生菌與後生元補給，作為日常保養選擇。",
    audience: "想補充益生菌、維持消化道機能者。",
  },
  {
    id: "snow",
    name: "雪花紫纖飲",
    tone: "清爽紫纖飲",
    image: "/products/snow.jpg",
    highlights: ["清涼解渴", "健康維持", "促進新陳代謝"],
    usage: "350-400ml 冷水，加入蔓越莓粉包與雪耳包各一包。",
    detail: "清爽口感的紫纖飲補給，適合日常飲用。",
    audience: "想以清爽飲品補給、維持日常節奏者。",
  },
];

export const productPriority = ["peptide", "digest", "shape", "metabo", "probiotic", "snow"];

export const productFaqs: Record<string, { q: string; a: string }[]> = {
  peptide: [
    { q: "一天喝幾包？", a: "每次一包、每天 1-2 次，搭配 200-250cc 飲品。" },
    { q: "可以搭配哪些飲品？", a: "可搭配白開水、牛奶或豆漿沖泡。" },
  ],
  digest: [
    { q: "怎麼吃？", a: "每日 1-2 次，每次 1 錠，搭配足量水分補充。" },
    { q: "適合誰？", a: "蔬菜攝取少、希望維持消化道機能與順暢節奏者。" },
  ],
  shape: [
    { q: "怎麼吃？", a: "每日 2 次，每次 2 錠。" },
    { q: "產品特色？", a: "健字號健康食品，具不易形成體脂肪與調節血脂功能。" },
  ],
  metabo: [
    { q: "怎麼吃？", a: "每日 2 次，每次 2 錠。" },
    { q: "產品特色？", a: "增加體力、營養補給、促進新陳代謝。" },
  ],
  probiotic: [
    { q: "怎麼吃？", a: "成人每日 2 包，空腹或睡前；加強期每日 3-4 包。" },
    { q: "產品特色？", a: "含 L-137 後生元與 BGN4 益生菌。" },
  ],
  snow: [
    { q: "怎麼沖泡？", a: "350-400ml 冷水，加入蔓越莓粉包與雪耳包各一包。" },
    { q: "產品特色？", a: "清涼解渴、健康維持、促進新陳代謝。" },
  ],
};
