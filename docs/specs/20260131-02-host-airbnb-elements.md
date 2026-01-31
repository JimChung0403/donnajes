# Spec: Add Host (Donna) + Airbnb-style Elements

**Date**: 2026-01-31
**Spec ID**: 20260131-02
**Author**: PM
**Status**: Draft

---

## 1. Background

### Problem Statement
需要更像 Airbnb 的體驗感與「經營者」存在感，讓品牌更有人味，導覽也需更清晰。

### Business Value
提升信任感與互動感，使訪客更願意完成問卷並點擊推薦。

### Success Metrics
- [ ] 進入頁面後 30 秒內點擊任一區塊（About/Experience/Products）的比例提升
- [ ] 問卷完成率提升（相對現況 +10%）
- [ ] 推薦卡片點擊率提升（相對現況 +8%）

---

## 2. User Stories

### Primary User Story
As a 使用者,
I want 知道網站是由誰經營、理念是什麼,
So that 我對品牌更有信任感。

### Secondary Stories
- As a 使用者, I want 像 Airbnb 體驗一樣的生活體驗清單 so that 我能選擇想開始的節奏。
- As a 使用者, I want 看到真實使用者回饋 so that 我更有信心填寫問卷。
- As a 使用者, I want 導覽列清楚可辨識 so that 我能快速前往想看的區塊。

---

## 3. Acceptance Criteria

### Happy Path
- [ ] Given 首屏導覽列, when 使用者進入, then 可清楚辨識導覽列與主內容分離。
- [ ] Given About 區塊, when 使用者閱讀, then 看見 Donna 介紹與關於我內容。
- [ ] Given Experience 區塊, when 使用者瀏覽, then 有 3 張體驗卡片帶圖與標籤。
- [ ] Given Reviews 區塊, when 使用者瀏覽, then 看到至少 3 則住客評價風格回饋。

### Edge Cases
- [ ] Given 無提供 Donna 真人照片, when 顯示 About, then 使用示意圖並提示替換素材。

---

## 4. Technical Requirements

### UI Changes
- [ ] 新增 About / Host / Experience / Reviews 版塊
- [ ] 更新 topbar 背景與分隔線，增加識別度
- [ ] 所有新區塊使用既有卡片與 pill token

---

## 5. Out of Scope

- 不串接 IG API，不自動抓取內容
- 不新增會員/登入

---

## 6. Dependencies

- [ ] Donna 生活照素材（由業主提供）
- [ ] UI 設計規格更新

---

## 7. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| 未提供照片造成真實感不足 | Medium | 先用示意圖 + 素材提醒 |
| 區塊過多造成首屏密度提高 | Low | 使用清楚留白與分節標題 |

---

## 8. Sign-off

- [ ] PM Approved
- [ ] Architect Approved
- [ ] Tech Lead Assigned
