import type { Metadata } from "next";
import { homeFaqs } from "./data/faqs";
import HomePage from "./home-page";

export const metadata: Metadata = {
  title: "婕樂纖厚焙奶茶｜瘦身健康奶茶飲料",
  description:
    "婕樂纖厚焙奶茶主打瘦身與健康減重的日常補給，介紹飲用節奏、產品亮點與信任背書，並導購至 Donna IG 諮詢。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "婕樂纖厚焙奶茶｜瘦身健康奶茶飲料",
    description:
      "婕樂纖厚焙奶茶主打瘦身與健康減重的日常補給，介紹飲用節奏、產品亮點與信任背書，並導購至 Donna IG 諮詢。",
    type: "website",
    url: "/",
    images: [
      {
        url: "/products/peptide.jpg",
        width: 1200,
        height: 630,
        alt: "婕樂纖厚焙奶茶 瘦身健康奶茶飲料",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "婕樂纖厚焙奶茶｜瘦身健康奶茶飲料",
    description:
      "婕樂纖厚焙奶茶主打瘦身與健康減重的日常補給，介紹飲用節奏、產品亮點與信任背書，並導購至 Donna IG 諮詢。",
    images: ["/products/peptide.jpg"],
  },
};

export default function Page() {
  const faqSchema = homeFaqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: homeFaqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;

  return (
    <>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <HomePage />
    </>
  );
}
