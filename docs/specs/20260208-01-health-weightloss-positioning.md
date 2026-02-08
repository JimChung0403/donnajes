# Spec: 官網定位從「生活風格」改為「健康瘦身/少糖飲品/上班族公司喝」
Date: 2026-02-08
Author: PM

## Background
目前官網以「生活風格」作為定位，但需求希望更聚焦在健康瘦身、少糖飲品，以及上班族在公司可飲用的情境，提升對目標族群的溝通效率。

## User Stories
- As a 上班族, I want 看到「少糖飲品、公司也能喝」的產品定位 so that 我能快速判斷是否適合我的日常情境。
- As a 想瘦身的使用者, I want 明確的健康瘦身定位 so that 我更容易被產品訴求打動並採取行動。

## Acceptance Criteria
- [ ] 全站主要品牌描述不再出現「生活風格」，改為「健康瘦身/少糖飲品/上班族公司喝」相關文案。
- [ ] 站點 SEO metadata（title/description/OG/Twitter）更新為新定位，且文案自然可讀、避免關鍵字堆疊。
- [ ] 產品詳情頁的標籤文案更新為新定位相關字樣。

## Data Model Changes
無。

## API Changes
無。

## UI Changes
- Topbar 品牌副標文案調整為新定位。
- 站點結構化資料（Organization/WebSite）名稱與站名更新為新定位。
- 產品列表與詳情頁的 SEO metadata 文字更新。
- 產品詳情頁「生活風格推薦」標籤改為新定位文字。

## Out of Scope
- 視覺風格（色系、字體、版面）全面改版。
- 新增內容頁或文章。
