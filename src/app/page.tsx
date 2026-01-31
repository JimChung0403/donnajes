import type { Metadata } from "next";
import HomePage from "./home-page";

export const metadata: Metadata = {
  title: "婕樂纖厚焙奶茶｜生活風格健康補給",
  description:
    "以生活風格呈現婕樂纖厚焙奶茶的日常補給提案，介紹飲用節奏、產品亮點與信任背書，並導購至 Donna IG 諮詢。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "婕樂纖厚焙奶茶｜生活風格健康補給",
    description:
      "以生活風格呈現婕樂纖厚焙奶茶的日常補給提案，介紹飲用節奏、產品亮點與信任背書，並導購至 Donna IG 諮詢。",
    type: "website",
    url: "/",
    images: [
      {
        url: "/products/peptide.jpg",
        width: 1200,
        height: 630,
        alt: "婕樂纖厚焙奶茶 生活風格主打飲品",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "婕樂纖厚焙奶茶｜生活風格健康補給",
    description:
      "以生活風格呈現婕樂纖厚焙奶茶的日常補給提案，介紹飲用節奏、產品亮點與信任背書，並導購至 Donna IG 諮詢。",
    images: ["/products/peptide.jpg"],
  },
};

export default function Page() {
  return <HomePage />;
}
