"use client";

import { useEffect, useMemo, useState } from "react";
import { homeFaqs } from "./data/faqs";
import { productPriority, products } from "./data/products";

type Answers = Record<string, string>;
type ScoreMap = Record<string, number>;

const questions = [
  {
    id: "sleep",
    title: "你通常幾點睡？",
    options: [
      { value: "early", label: "22:00-23:00" },
      { value: "mid", label: "23:00-01:00" },
      { value: "late", label: "01:00 後" },
    ],
  },
  {
    id: "exercise",
    title: "每週運動頻率？",
    options: [
      { value: "often", label: "3 次以上" },
      { value: "some", label: "1-2 次" },
      { value: "rare", label: "幾乎沒有" },
    ],
  },
  {
    id: "eatout",
    title: "外食頻率？",
    options: [
      { value: "low", label: "每週 1-2 次" },
      { value: "mid", label: "每週 3-4 次" },
      { value: "high", label: "幾乎天天" },
    ],
  },
  {
    id: "sugar",
    title: "含糖飲料/甜點頻率？",
    options: [
      { value: "low", label: "幾乎不喝" },
      { value: "mid", label: "每週 1-2 次" },
      { value: "high", label: "幾乎天天" },
    ],
  },
  {
    id: "bowel",
    title: "排便頻率？",
    options: [
      { value: "regular", label: "每天或隔天" },
      { value: "irregular", label: "每 3-4 天" },
      { value: "constipated", label: "超過 4 天" },
    ],
  },
  {
    id: "stress",
    title: "最近壓力程度？",
    options: [
      { value: "low", label: "還可以" },
      { value: "mid", label: "中等" },
      { value: "high", label: "明顯偏高" },
    ],
  },
  {
    id: "water",
    title: "每日喝水量？",
    options: [
      { value: "good", label: "2000ml 以上" },
      { value: "mid", label: "1200-2000ml" },
      { value: "low", label: "1200ml 以下" },
    ],
  },
  {
    id: "sedentary",
    title: "每天久坐時間？",
    options: [
      { value: "low", label: "4 小時以下" },
      { value: "mid", label: "4-7 小時" },
      { value: "high", label: "7 小時以上" },
    ],
  },
];

const productHighlights = [
  {
    title: "高纖 · 高鈣 · 高維生素 C",
    description: "日常補給中同時照顧營養與輕盈感受。",
  },
  {
    title: "專利 D-核糖",
    description: "忙碌生活也能給身體更穩定的支持。",
  },
  {
    title: "專利絲素肽",
    description: "提供溫和補充，讓補給成為日常習慣。",
  },
];

const routines = [
  {
    title: "早晨｜溫柔喚醒",
    description: "起床後一包，搭配 200-250cc 溫水，建立清爽的一天。",
  },
  {
    title: "午後｜穩定節奏",
    description: "午後感到疲倦時，用厚焙奶茶取代含糖飲料。",
  },
  {
    title: "夜晚｜安心收尾",
    description: "晚餐後補充，讓身體在夜晚也能維持平衡。",
  },
];

const testimonials = [
  {
    name: "Lina",
    city: "台北",
    quote: "口感很溫和，不會有負擔，反而讓我更願意持續。",
  },
  {
    name: "Miya",
    city: "新竹",
    quote: "每天一包就很有儀式感，生活節奏也更穩。",
  },
  {
    name: "Iris",
    city: "台中",
    quote: "比起甜飲，厚焙奶茶更順口，也比較安心。",
  },
];

const defaultPick = ["peptide", "digest"];

const scoreAnswers = (answers: Answers) => {
  const scores: ScoreMap = {
    peptide: 0,
    digest: 0,
    shape: 0,
    metabo: 0,
    probiotic: 0,
    snow: 0,
  };

  if (answers.sleep === "late") {
    scores.metabo += 2;
    scores.snow += 1;
  }
  if (answers.sleep === "early") {
    scores.peptide += 1;
  }
  if (answers.exercise === "rare") {
    scores.metabo += 2;
  }
  if (answers.eatout === "high") {
    scores.shape += 2;
    scores.peptide += 1;
  }
  if (answers.sugar === "high") {
    scores.snow += 2;
    scores.peptide += 1;
    scores.shape += 1;
  }
  if (answers.bowel === "constipated") {
    scores.digest += 3;
  }
  if (answers.stress === "high") {
    scores.probiotic += 2;
  }
  if (answers.water === "low") {
    scores.digest += 2;
    scores.peptide += 1;
  }
  if (answers.sedentary === "high") {
    scores.metabo += 2;
    scores.peptide += 1;
  }

  return scores;
};

const buildInsights = (answers: Answers) => {
  const insights: string[] = [];
  if (answers.sleep === "late") insights.push("作息偏晚");
  if (answers.exercise === "rare") insights.push("活動量偏低");
  if (answers.eatout === "high") insights.push("外食比例高");
  if (answers.sugar === "high") insights.push("甜食飲料偏多");
  if (answers.bowel === "constipated") insights.push("排便不規律");
  if (answers.stress === "high") insights.push("壓力偏高");
  if (answers.water === "low") insights.push("喝水量不足");
  if (answers.sedentary === "high") insights.push("久坐時間較長");
  return insights;
};

const buildReasons = (productId: string, answers: Answers) => {
  const reasons: string[] = [];
  if (productId === "metabo") {
    if (answers.sleep === "late") reasons.push("作息偏晚，需要代謝支持");
    if (answers.exercise === "rare") reasons.push("活動量少，建議提升活力感");
    if (answers.sedentary === "high") reasons.push("久坐時間長，想強化代謝");
  }
  if (productId === "shape") {
    if (answers.eatout === "high") reasons.push("外食頻率高，希望維持體態");
    if (answers.sugar === "high") reasons.push("甜食飲料偏多，想做管理");
  }
  if (productId === "peptide") {
    if (answers.sugar === "high") reasons.push("想用溫和飲品取代含糖飲料");
    if (answers.water === "low") reasons.push("喝水偏少，想以飲品補給");
    if (answers.eatout === "high") reasons.push("外食多，想補充日常營養");
  }
  if (productId === "digest") {
    if (answers.bowel === "constipated") reasons.push("排便不規律，需要腸道支持");
    if (answers.water === "low") reasons.push("喝水偏少，影響順暢感");
  }
  if (productId === "probiotic") {
    if (answers.stress === "high") reasons.push("壓力偏高，適合日常保養");
  }
  if (productId === "snow") {
    if (answers.sugar === "high") reasons.push("含糖飲料多，想改成清爽選擇");
    if (answers.sleep === "late") reasons.push("作息偏晚，想要即飲式補給");
  }
  return reasons.slice(0, 3);
};

export default function Home() {
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalQuestions = questions.length;
  const answeredCount = questions.filter((q) => answers[q.id]).length;
  const isComplete = answeredCount === totalQuestions;

  const result = useMemo(() => {
    const scores = scoreAnswers(answers);
    const ranking = products
      .map((product) => ({
        product,
        score: scores[product.id] ?? 0,
      }))
      .sort((a, b) => b.score - a.score);

    const topScore = ranking[0]?.score ?? 0;
    const picks =
      topScore === 0
        ? defaultPick
        : ranking
            .filter((item) => item.score >= topScore - 1)
            .sort((a, b) => productPriority.indexOf(a.product.id) - productPriority.indexOf(b.product.id))
            .slice(0, 2)
            .map((item) => item.product.id);

    return {
      picks,
      insights: buildInsights(answers),
    };
  }, [answers]);

  useEffect(() => {
    if (!isLoading) return;
    const timer = window.setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 600);
    return () => window.clearTimeout(timer);
  }, [isLoading]);

  useEffect(() => {
    if (submitted && isComplete) {
      document.getElementById("quiz-result")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [submitted, isComplete]);

  return (
    <main className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">Donna</span>
          <span className="brand-sub">Donna生活風格提案</span>
        </div>
        <nav className="topbar-links">
          <a href="#story">品牌故事</a>
          <a href="#product">主打奶茶</a>
          <a href="#benefits">亮點特色</a>
          <a href="#lifestyle-quiz">生活問券</a>
          <a href="#details">產品詳情</a>
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

      <section className="hero section section-delay-0" id="product">
        <div className="hero-content">
          <span className="eyebrow">瘦身健康奶茶飲料</span>
          <h1>婕樂纖【厚焙奶茶】</h1>
          <p className="lead">
            把日常補給變得柔和而有儀式感。溫潤厚焙口感，主打健康減重與
            瘦身節奏，讓忙碌生活也能維持輕盈體態。
          </p>
          <div className="hero-actions">
            <a
              className="btn primary"
              href="https://www.instagram.com/donnabubu/"
              target="_blank"
              rel="noreferrer"
            >
              立即私訊 Donna
            </a>
            <a className="btn ghost" href="#benefits">
              了解產品亮點
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <strong>25g / 包</strong>
              <span>隨身好攜帶</span>
            </div>
            <div>
              <strong>10 包 / 盒</strong>
              <span>日常補給</span>
            </div>
            <div>
              <strong>1-2 次 / 日</strong>
              <span>彈性飲用</span>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-card">
            <img
              src="/products/peptide.jpg"
              alt="婕樂纖厚焙奶茶 瘦身健康奶茶產品示意"
              width={2000}
              height={2000}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hero-card hero-card--overlay">
            <h3>適合想瘦身與健康減重的人</h3>
            <p>忙碌、重視體態與生活質感的你，想要更安心的日常補給。</p>
            <div className="tag-row">
              <span className="tag">瘦身日常</span>
              <span className="tag">溫潤口感</span>
              <span className="tag">增加代謝</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-delay-1" id="story">
        <div className="section-header">
          <div>
            <h2>品牌故事</h2>
            <p>以健康與瘦身節奏為核心，打造妳每天都能持續的補給習慣。</p>
          </div>
          <div className="section-chip">成長 · 創新 · 永續</div>
        </div>
        <div className="host-grid">
          <div className="host-card">
            <div className="host-photo">
              <img
                src="/host/donna.jpg"
                alt="Donna 生活照"
                width={1080}
                height={1080}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="host-meta">
              <div>
                <span className="tag">生活教練</span>
                <span className="tag tag--soft">婕樂纖顧問</span>
              </div>
              <h3>Donna｜生活型態導師</h3>
              <p>
                用溫柔、實際的方式陪你建立習慣。從飲水、補給到節奏，
                讓健康成為日常的小確幸。
              </p>
              <div className="host-highlights">
                <div>
                  <strong>7 年</strong>
                  <span>生活管理經驗</span>
                </div>
                <div>
                  <strong>1,200+</strong>
                  <span>顧問追蹤人數</span>
                </div>
                <div>
                  <strong>4.9</strong>
                  <span>平均回饋</span>
                </div>
              </div>
              <a
                className="btn ghost"
                href="https://www.instagram.com/donnabubu/"
                target="_blank"
                rel="noreferrer"
              >
                前往 Donna IG
              </a>
            </div>
          </div>
          <div className="about-card">
            <h3>品牌承諾</h3>
            <p>
              婕樂纖與營養師共同策劃，重視品質把關與安心、安全、健康的承諾，
              讓你放心地把它放進日常生活。
            </p>
            <div className="about-tags">
              <span className="tag">生活節奏</span>
              <span className="tag">溫柔補給</span>
              <span className="tag">安心成分</span>
            </div>
            <div className="about-embed">
              <iframe
                title="Donna IG 影片"
                src="https://www.instagram.com/p/DTc86-SkyjY/embed"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="about-note">商品資訊以官方公告為準，若有疑問可私訊 Donna。</div>
            <div className="ig-link">官方導購：@donnabubu</div>
          </div>
        </div>
      </section>

      <section className="section section-delay-2" id="benefits">
        <div className="section-header">
          <div>
            <h2>亮點特色</h2>
            <p>更符合瘦身與健康減重的補給內容，簡單、輕盈、好入口。</p>
          </div>
          <div className="section-chip">主打產品亮點</div>
        </div>
        <div className="grid">
          {productHighlights.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tag-row">
                <span className="tag tag--soft">日常補給</span>
                <span className="tag tag--soft">溫和口感</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="lifestyle-quiz">
        <div className="section-header">
          <div>
            <h2>生活型態問券推薦</h2>
            <p>7-8 題單選題，快速找到適合你瘦身與健康減重的產品方向。</p>
          </div>
          <div className="section-chip">
            已完成 {answeredCount} / {totalQuestions}
          </div>
        </div>
        <div className="quiz-grid">
          {questions.map((q, index) => (
            <div key={q.id} className="quiz-card">
              <strong>
                {index + 1}. {q.title}
              </strong>
              <div className="quiz-options">
                {q.options.map((option) => (
                  <label key={option.value} className="quiz-option">
                    <input
                      type="radio"
                      name={q.id}
                      value={option.value}
                      checked={answers[q.id] === option.value}
                      onChange={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [q.id]: option.value,
                        }))
                      }
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="quiz-actions">
          <button
            type="button"
            className="btn primary"
            onClick={() => {
              if (!isComplete) {
                setSubmitted(true);
                return;
              }
              setSubmitted(false);
              setIsLoading(true);
            }}
          >
            產生推薦結果
          </button>
          <button
            type="button"
            className="btn ghost"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
              setIsLoading(false);
            }}
          >
            重新作答
          </button>
          {!isComplete && submitted && (
            <span className="notice">請先完成所有題目，才能看到推薦結果。</span>
          )}
        </div>

        {(isLoading || (submitted && isComplete)) && (
          <div className="quiz-result" id="quiz-result">
            {isLoading ? (
              <div className="loading">
                <div className="spinner" aria-hidden="true" />
                <div>
                  <h3>分析中...</h3>
                  <p>正在整理你的作答內容，請稍候。</p>
                </div>
              </div>
            ) : (
              <>
                <div className="result-header">
                  <div>
                    <h3>你的推薦結果</h3>
                    <p>依據作答結果，我們推薦以下產品方向：</p>
                  </div>
                  <div className="pill-row">
                    {result.insights.length === 0 ? (
                      <span className="tag">尚未完成問券</span>
                    ) : (
                      result.insights.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))
                    )}
                  </div>
                </div>
                <div className="result-grid">
                  {result.picks.map((id) => {
                    const product = products.find((p) => p.id === id);
                    if (!product) return null;
                    const reasons = buildReasons(id, answers);
                    return (
                      <article key={product.id} className="result-card">
                        <div className="result-image">
                          <img
                            src={product.image}
                            alt={`${product.name} 瘦身健康飲料示意`}
                            width={2000}
                            height={2000}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <h3>{product.name}</h3>
                        <p>{product.detail}</p>
                        <div className="tag-row">
                          <span className="tag tag--soft">{product.tone}</span>
                        </div>
                        <ul>
                          {reasons.length === 0 ? (
                            <li>完成問券後會顯示更精準的推薦原因。</li>
                          ) : (
                            reasons.map((reason) => <li key={reason}>{reason}</li>)
                          )}
                        </ul>
                        <a className="btn primary" href={`/products/${product.id}`}>
                          查看產品詳情
                        </a>
                      </article>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}
      </section>

      <section className="section" id="routine">
        <div className="section-header">
          <div>
            <h2>生活節奏建議</h2>
            <p>從早到晚的小儀式，讓瘦身與健康減重補給融入你的生活節奏。</p>
          </div>
          <div className="section-chip">1-2 次 / 日</div>
        </div>
        <div className="grid routine-grid">
          {routines.map((item) => (
            <article key={item.title} className="card card--soft">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="details">
        <div className="section-header">
          <div>
            <h2>產品詳情</h2>
            <p>先從熱門瘦身健康飲料開始了解，更多產品可進入完整列表。</p>
          </div>
          <div className="section-actions">
            <div className="section-chip">精選 4 款</div>
            <a className="btn ghost" href="/products">
              看全部產品
            </a>
          </div>
        </div>
        <div className="grid">
          {products
            .slice()
            .sort((a, b) => productPriority.indexOf(a.id) - productPriority.indexOf(b.id))
            .slice(0, 4)
            .map((product) => (
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
                <ul>
                  {product.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="product-usage">{product.usage}</p>
                <a className="btn ghost" href={`/products/${product.id}`}>
                  查看產品詳情
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="trust">
        <div className="section-header">
          <div>
            <h2>信任背書</h2>
            <p>官方資訊與品質把關，讓你更安心。</p>
          </div>
          <div className="section-chip">安心選擇</div>
        </div>
        <div className="grid trust-grid">
          <article className="trust-card">
            <h3>世界品質標章銅獎</h3>
            <p>多次獲得國際品質評鑑肯定。</p>
          </article>
          <article className="trust-card">
            <h3>SGS 檢驗合格</h3>
            <p>檢驗合格，安心食用。</p>
          </article>
          <article className="trust-card">
            <h3>32 大專利證書</h3>
            <p>技術與配方持續研發累積。</p>
          </article>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="section-header">
          <div>
            <h2>生活回饋</h2>
            <p>真實使用者分享日常感受。</p>
          </div>
          <div className="section-chip">4.9 / 5</div>
        </div>
        <div className="grid">
          {testimonials.map((review) => (
            <article key={review.name} className="card review-card">
              <h3>{review.name}</h3>
              <p className="review-city">{review.city}</p>
              <p className="review-quote">“{review.quote}”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-header">
          <div>
            <h2>常見問題</h2>
            <p>下單與使用方式的快速說明。</p>
          </div>
          <div className="section-chip">FAQ</div>
        </div>
        <div className="faq">
          {homeFaqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section cta-banner" id="cta">
        <div>
          <h2>準備開始你的生活節奏？</h2>
          <p>點擊私訊 Donna，獲得產品與使用方式建議。</p>
        </div>
        <a
          className="btn primary"
          href="https://www.instagram.com/donnabubu/"
          target="_blank"
          rel="noreferrer"
        >
          立即前往 IG
        </a>
      </section>
    </main>
  );
}
