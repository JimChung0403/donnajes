import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <main className="page product-list">
      <header className="section-header">
        <div>
          <h1>產品總覽</h1>
          <p>一次瀏覽所有產品，點擊即可查看詳情。</p>
        </div>
        <a className="btn ghost" href="/">
          回到首頁
        </a>
      </header>

      <div className="grid">
        {products.map((product) => (
          <article key={product.id} className="card product-card">
            <div className="product-image">
              <img src={product.image} alt={`${product.name} 產品圖`} />
            </div>
            <div className="product-body">
              <h3>{product.name}</h3>
              <p>{product.detail}</p>
              <div className="tag-row">
                <span className="tag tag--soft">{product.tone}</span>
              </div>
              <a className="btn primary" href={`/products/${product.id}`}>
                查看產品詳情
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
