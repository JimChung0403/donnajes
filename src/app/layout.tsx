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

export const metadata: Metadata = {
  title: "婕樂纖厚焙奶茶｜生活風格健康補給",
  description:
    "以生活風格呈現婕樂纖【厚焙奶茶】的日常補給提案，導購至 Donna 的 IG 諮詢。",
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
