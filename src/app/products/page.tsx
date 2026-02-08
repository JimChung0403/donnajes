import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import { products } from "../data/products";

export const metadata: Metadata = {
  title: "瘦身健康飲料產品總覽",
  description:
    "一次瀏覽婕樂纖瘦身與健康減重飲料全系列產品，快速了解各款特色與適用情境。",
  alternates: {
    canonical: "/products/",
  },
  openGraph: {
    title: "瘦身健康飲料產品總覽｜婕樂纖健康瘦身補給",
    description:
      "一次瀏覽婕樂纖瘦身與健康減重飲料全系列產品，快速了解各款特色與適用情境。",
    url: "/products/",
    images: [
      {
        url: "/products/peptide.jpg",
        width: 1200,
        height: 630,
        alt: "婕樂纖瘦身健康飲料產品總覽",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "瘦身健康飲料產品總覽｜婕樂纖健康瘦身補給",
    description:
      "一次瀏覽婕樂纖瘦身與健康減重飲料全系列產品，快速了解各款特色與適用情境。",
    images: ["/products/peptide.jpg"],
  },
};

export default function ProductsPage() {
  return (
    <main className="page product-list">
      <Topbar />

      <header className="section-header">
        <div>
          <h1>瘦身健康飲料產品總覽</h1>
          <p>
            一次瀏覽婕樂纖瘦身、健康減重與增加代謝的奶茶與飲料系列，
            點擊即可查看詳情。
          </p>
        </div>
        <a className="btn ghost" href="/">
          回到首頁
        </a>
      </header>

      <div className="grid">
        {products.map((product) => (
          <article key={product.id} className="card product-card">
            <div className="product-image">
              <img
                src={product.image}
                alt={`${product.name} 瘦身健康飲料產品圖`}
                width={2000}
                height={2000}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="product-body">
              <h3>{product.name}</h3>
              <p>{product.detail}</p>
              <div className="tag-row">
                <span className="tag tag--soft">{product.tone}</span>
              </div>
              <a className="btn primary" href={`/products/${product.id}/`}>
                查看產品詳情
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
