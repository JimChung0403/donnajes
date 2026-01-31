# Spec: Modernize Questionnaire UI (Airbnb-style)

**Date**: 2026-01-31
**Spec ID**: 20260131-01
**Author**: PM
**Status**: Draft

---

## 1. Background

### Problem Statement
現有問卷頁面視覺偏單一、階層感不足，導覽與主 CTA 不夠明確，產品資訊的分區與掃讀效率不足。

### Business Value
提升首屏吸引力與信任感，提高完成問卷的意願與完成率，並建立品牌專業感。

### Success Metrics
- [ ] 問卷完成率提升（相對現況 +15%）
- [ ] 首屏停留時間增加（相對現況 +20%）
- [ ] 結果卡片點擊率提升（相對現況 +10%）

---

## 2. User Stories

### Primary User Story
As a 使用者,
I want 一進入頁面就能理解問卷價值與流程,
So that 我願意開始填寫並完成問卷。

### Secondary Stories
- As a 使用者, I want 產品方向資訊清楚好掃讀 so that 我能快速理解差異。
- As a 使用者, I want 問卷題目像卡片一樣好填 so that 我願意完成每一題。
- As a 使用者, I want 結果視覺清楚且可互動 so that 我能看到最適合的建議。

---

## 3. Acceptance Criteria

### Happy Path
- [ ] Given 首屏, when 使用者進入頁面, then 看到清楚的價值主張 + 主要 CTA。
- [ ] Given 產品區塊, when 使用者瀏覽, then 每張卡片有圖片、標籤與重點內容。
- [ ] Given 問卷區塊, when 使用者作答, then 選項卡片可清楚被辨識。
- [ ] Given 結果彈窗, when 使用者點擊推薦卡片, then 顯示詳細建議區塊。

### Edge Cases
- [ ] Given 未完成題目, when 使用者點擊提交, then 顯示提醒訊息。
- [ ] Given 未完成作答, when 使用者點擊推薦卡, then 不顯示原因與詳細建議。

### Error Handling
- [ ] Given 空作答, when 顯示推薦結果, then 顯示預設產品方向與提示。

---

## 4. Technical Requirements

### Data Model Changes
- None

### API Changes
- None

### UI Changes
- [ ] 新增頂部導覽列與 CTA
- [ ] 首屏改為 Airbnb 風格：大標題、卡片資訊、預覽卡片
- [ ] 產品卡片加入圖片與更清楚層級
- [ ] 問卷區塊視覺一致化（選項卡片、步驟提示）
- [ ] 結果彈窗改版（卡片/標籤/重點區塊）

---

## 5. Out of Scope

- 不新增登入或會員系統
- 不新增後端 API 或資料持久化
- 不更動問卷題目數量與計分邏輯

---

## 6. Dependencies

- [ ] 設計規格（Design Spec）
- [ ] 前端實作 (Next.js App Router)

---

## 7. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| 視覺改版影響舊使用者習慣 | Medium | 保留原本問卷流程與內容不變 |
| 首屏元素過多導致負擔 | Low | 控制卡片數量與留白 |

---

## 8. Sign-off

- [ ] PM Approved
- [ ] Architect Approved
- [ ] Tech Lead Assigned
