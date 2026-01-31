import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const serif = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
});

const sans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://donnajls.web.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "婕樂纖厚焙奶茶｜生活風格健康補給",
    template: "%s｜婕樂纖生活風格補給",
  },
  description:
    "以生活風格呈現婕樂纖厚焙奶茶的日常補給提案，導購至 Donna 的 IG 諮詢。",
  openGraph: {
    title: "婕樂纖厚焙奶茶｜生活風格健康補給",
    description:
      "以生活風格呈現婕樂纖厚焙奶茶的日常補給提案，導購至 Donna 的 IG 諮詢。",
    type: "website",
    url: "/",
    siteName: "婕樂纖生活風格補給",
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
      "以生活風格呈現婕樂纖厚焙奶茶的日常補給提案，導購至 Donna 的 IG 諮詢。",
    images: ["/products/peptide.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
