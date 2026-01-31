# Spec: 健康食品網站全站改版（生活風格導向）

**Date**: 2026-01-31  
**Spec ID**: 20260131-03  
**Author**: PM  
**Status**: Review

---

## 1. Background

### Problem Statement
目前網站用戶停留時間短，產品導購與購買動機不足，未能支撐成交。

### Business Value
以「生活風格」視覺與內容重新塑形，提高信任感與產品價值感，導購到 Donna 個人 IG，提升成交流量。

### Success Metrics
- [ ] 平均停留時間提升 ≥ 40%
- [ ] 產品主 CTA 點擊率提升 ≥ 30%（導購至 Donna IG）
- [ ] IG 導購流量提升 ≥ 20%

---

## 2. User Stories

### Primary User Story
As a 25-45 歲女性使用者，  
I want 看到具有生活風格與健康感的品牌故事與產品呈現，  
So that 我更相信產品並更願意透過 IG 聯繫與購買。

### Secondary Stories
- As a 使用者，我想快速理解產品功效與適用情境，避免浪費時間。  
- As a 使用者，我想在手機上也能順暢瀏覽與購買。

---

## 3. Acceptance Criteria

### Happy Path
- [ ] Given 首頁載入完成, when 使用者瀏覽首屏, then 能在 5 秒內理解品牌定位與主打產品。
- [ ] Given 產品列表/詳情頁, when 使用者滑動, then 可清楚看到產品特色、成分與使用情境。
- [ ] Given 使用者準備購買, when 點擊 CTA, then 能在 1 步內導向 Donna IG。

### Edge Cases
- [ ] Given 使用者僅瀏覽不登入, when 瀏覽全站, then 不影響核心購買動線。

### Error Handling
- [ ] Given 圖片載入失敗, when 顯示內容, then 顯示替代圖或文字提示不影響閱讀。

---

## 4. Technical Requirements

### Data Model Changes
無（本次為視覺與內容結構改版）

### API Changes
無（若需要新增內容區塊資料來源，另開規格）

### UI Changes
- [ ] 首頁：生活風格 Hero + 主打奶茶產品 + 使用情境區塊 + 信任背書 + 立即私訊 IG CTA（@donnabubu）
- [ ] 產品列表：改為「單一主打」展示（不提供多品選購）
- [ ] 產品詳情：產品亮點/成分/使用方法/FAQ/評論/IG 導購 CTA
- [ ] 結帳流程：本次改為 IG 導購，移除傳統結帳動線
- [ ] 內容頁（品牌故事/健康知識）：與主打產品導購串聯
- [ ] 全站：一致的生活風格視覺、字體與色系（健康、安心、生活感）

---

## 5. Out of Scope

- 會員系統或訂閱制設計
- 行銷自動化、CRM、再行銷流程
- 物流/付款系統改造

---

## 6. Dependencies

- [ ] Donna IG 帳號（@donnabubu）與導購話術
- [ ] 主打奶茶產品正式名稱與包裝規格（25g/包，10包/盒）
- [ ] 產品圖/生活情境圖素材（高品質、統一風格）
- [ ] 產品核心賣點與文案
- [ ] 信任背書素材（官方證書/獎項/檢驗摘要）

---

## 7. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| 風格過於「美感」而弱化導購 | High | 所有主要區塊強制帶 CTA 與導購 |
| 素材不足導致風格不一致 | Medium | 明確素材規格與拍攝清單 |
| 改版後資訊量過大 | Medium | 依使用者流程分層呈現 |

---

## 9. Brand Voice & Trust Cues (來源：官方資料)

- 主打產品：JEROSSE® 婕樂纖 輕卡肽纖飲─厚焙奶茶風味 (10包/盒)  
- 主張亮點：高纖、高鈣、高維生素 C；專利 D-核糖；專利絲素肽  
- 規格：25g/包，10包/盒；建議每次一包、每天 1~2 次，可搭配 200~250cc 飲品  
- 信任背書：世界品質標章銅獎；SGS 檢驗合格；32 大專利證書  

---

## 8. Sign-off

- [ ] PM Approved
- [ ] Architect Approved
- [ ] Tech Lead Assigned
