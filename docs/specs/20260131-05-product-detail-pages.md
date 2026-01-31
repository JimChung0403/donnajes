# Spec: Product Detail Pages & Link Fix
Date: 2026-01-31
Author: PM

## Background
使用者回報「查看產品詳情」進入 404。產品詳情頁存在但靜態部署路徑與連結不一致，且產品內容需改為依官方資料更新。

## User Stories
- As a 使用者, I want to 點擊產品卡片即可進入產品詳情頁 so that 我能了解產品資訊。
- As a 使用者, I want to 在產品詳情頁看到清楚的產品亮點與使用方式 so that 我能做出選擇。
- As a 站內管理者, I want to 產品資料來自官方來源 so that 內容一致且可信。

## Acceptance Criteria
- [ ] 首頁與產品列表中的「查看產品詳情」不再導向 404。
- [ ] 所有產品詳情頁可正常打開（靜態導出可用）。
- [ ] 產品詳情頁包含：產品亮點、使用建議、適合誰、常見問題、導購 CTA。
- [ ] 產品資料更新為官方來源內容（名稱、亮點、使用方式）。
- [ ] SEO metadata（title/description/OG）維持產品獨立設定。

## Data Model Changes
- 新增/調整產品資料欄位內容（不新增資料表）。

## API Changes
- N/A

## UI Changes
- 產品詳情頁內容區塊：新增「適合誰」卡片（與 FAQ 同區塊）。

## Out of Scope
- 付款/購物車流程
- 後台產品管理系統
