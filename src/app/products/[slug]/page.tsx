import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Topbar from "@/components/Topbar";
import { productFaqs, productPriority, products } from "../../data/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://donnajls.web.app";

export const dynamic = "force-static";

export const generateStaticParams = async () =>
  products.map((product) => ({ slug: product.id }));

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const product = products.find((item) => item.id === slug);

  if (!product) {
    return {
      title: "產品不存在",
      description: "找不到對應的產品頁面。",
    };
  }

  const title = `${product.name}｜${product.tone}`;
  const description = `${product.detail} ${product.audience} 查看產品亮點、使用建議與常見問題，並可私訊 Donna 了解更多。`;
  const url = `/products/${product.id}/`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: `${product.name} 瘦身健康飲料示意`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.id === slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.id !== product.id)
    .sort((a, b) => productPriority.indexOf(a.id) - productPriority.indexOf(b.id))
    .slice(0, 3);

  const faqs = productFaqs[product.id] ?? [];
  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `${siteUrl}${product.image}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: `${product.detail} ${product.audience}`,
    image: [imageUrl],
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "婕樂纖",
    },
    url: `${siteUrl}/products/${product.id}/`,
  };
  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
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
    <main className="page product-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

      <Topbar />

      <header className="detail-hero">
        <div>
          <p className="eyebrow">產品詳情</p>
          <h1>{product.name}</h1>
          <p className="lead">{product.detail}</p>
          <div className="tag-row">
            <span className="tag">{product.tone}</span>
            <span className="tag tag--soft">生活風格推薦</span>
          </div>
          <div className="detail-actions">
            <a className="btn primary" href="https://www.instagram.com/donnabubu/" target="_blank" rel="noreferrer">
              私訊 Donna 了解
            </a>
            <a className="btn ghost" href="/#details">
              回到產品總覽
            </a>
          </div>
        </div>
        <div className="detail-image">
          <img
            src={product.image}
            alt={`${product.name} 瘦身健康飲料示意`}
            width={2000}
            height={2000}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </header>

      <section className="detail-section">
        <div className="detail-card">
          <h2>產品亮點</h2>
          <ul>
            {product.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="detail-card">
          <h2>使用建議</h2>
          <p>{product.usage}</p>
          <p className="detail-note">實際需求請依個人狀況調整，必要時諮詢專業人士。</p>
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-card">
          <h2>適合誰</h2>
          <p>{product.audience}</p>
        </div>
        <div className="detail-card">
          <h2>常見問題</h2>
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-card">
          <h2>推薦你也看看</h2>
          <div className="related-grid">
            {related.map((item) => (
              <a key={item.id} className="related-card" href={`/products/${item.id}/`}>
                <div className="related-image">
                  <img
                    src={item.image}
                    alt={`${item.name} 瘦身健康飲料示意`}
                    width={2000}
                    height={2000}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="related-title">{item.name}</p>
                  <p className="related-tone">{item.tone}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
