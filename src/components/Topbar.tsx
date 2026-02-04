"use client";

export default function Topbar() {
  return (
    <header className="topbar">
      <a className="brand" href="/">
        <img
          className="brand-logo"
          src="/logo.svg"
          alt="Donna 婕樂纖厚焙奶茶 Logo"
          width={200}
          height={56}
        />
        <span className="brand-sub">Donna生活風格提案</span>
      </a>
      <nav className="topbar-links">
        <a href="/#story">品牌故事</a>
        <a href="/#product">主打奶茶</a>
        <a href="/#benefits">亮點特色</a>
        <a href="/#lifestyle-quiz">生活問券</a>
        <a href="/#details">產品詳情</a>
        <a href="/#faq">問與答</a>
      </nav>
      <div className="topbar-actions">
        <a
          className="btn ghost"
          href="https://www.instagram.com/donnabubu/"
          target="_blank"
          rel="noreferrer"
        >
          私訊 Donna
        </a>
      </div>
    </header>
  );
}
