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

const organizationSchema = {
  "@type": "Organization",
  name: "婕樂纖生活風格補給",
  url: siteUrl,
  sameAs: ["https://www.instagram.com/donnabubu/"],
  logo: `${siteUrl}/host-donna.svg`,
};

const websiteSchema = {
  "@type": "WebSite",
  name: "婕樂纖生活風格補給",
  url: siteUrl,
  publisher: {
    "@type": "Organization",
    name: "婕樂纖生活風格補給",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "婕樂纖厚焙奶茶｜瘦身健康奶茶飲料",
    template: "%s｜婕樂纖瘦身健康補給",
  },
  description:
    "婕樂纖厚焙奶茶主打瘦身與健康減重的日常補給，以健康奶茶與飲料取代含糖飲品，導購至 Donna 的 IG 諮詢。",
  openGraph: {
    title: "婕樂纖厚焙奶茶｜瘦身健康奶茶飲料",
    description:
      "婕樂纖厚焙奶茶主打瘦身與健康減重的日常補給，以健康奶茶與飲料取代含糖飲品，導購至 Donna 的 IG 諮詢。",
    type: "website",
    url: "/",
    siteName: "婕樂纖生活風格補給",
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
      "婕樂纖厚焙奶茶主打瘦身與健康減重的日常補給，以健康奶茶與飲料取代含糖飲品，導購至 Donna 的 IG 諮詢。",
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
