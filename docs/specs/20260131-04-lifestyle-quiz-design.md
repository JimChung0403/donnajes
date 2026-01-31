# Design Specification: 生活型態問券推薦區塊

**Date**: 2026-01-31  
**Spec ID**: 20260131-04  
**Author**: UI/UX  
**Status**: Review  

> Note: 未找到 `docs/arch/tech-stack.md`。目前設計規格以 **CSS Custom Properties** 為主，與現行 `globals.css` 一致。

---

## 1. Design Tokens (CSS Custom Properties)

```css
:root {
  --color-ink: #2b2421;
  --color-muted: #6f5e56;
  --color-bg: #f8f4ef;
  --color-surface: #fffaf6;
  --color-surface-alt: #f2e9e2;
  --color-border: rgba(93, 75, 66, 0.18);
  --color-accent: #d07c3f;
  --color-accent-strong: #b9652b;
  --color-accent-soft: rgba(208, 124, 63, 0.14);
  --color-sage: #7a9c86;
  --shadow-sm: 0 8px 22px rgba(93, 75, 66, 0.12);
  --shadow-md: 0 18px 40px rgba(93, 75, 66, 0.16);
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 999px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
}
```

Typography:
- **H2**: 36px / 2.4vw / 24px (desktop clamp), weight 600
- **Body**: 16px / line-height 1.7
- **Caption**: 13px / line-height 1.5

---

## 2. Component Library

### 2.1 Quiz Card
**Default**: surface, border, shadow-sm  
**Hover**: border accent, subtle lift  
**Active/Pressed**: scale 0.98  
**Focus**: outline 2px accent-soft  
**Disabled**: opacity 0.5, cursor not-allowed  
**Loading**: skeleton blocks for title + options  
**Empty**: "請開始作答" placeholder  
**Error**: border + text in accent-strong, error hint below

### 2.2 Radio Option
**Default**: border neutral, background surface  
**Hover**: background accent-soft  
**Active**: border accent-strong  
**Focus**: outline 2px accent-soft  
**Disabled**: opacity 0.5  
**Loading**: shimmer line  
**Empty**: grey placeholder text  
**Error**: border accent-strong + helper text

### 2.3 Result Card
**Default**: surface, shadow-sm, includes product name + reasons  
**Hover**: border accent, lift  
**Active**: border accent-strong  
**Focus**: outline 2px accent-soft  
**Disabled**: opacity 0.5  
**Loading**: skeleton  
**Empty**: "尚未完成問券"  
**Error**: "推薦產生失敗"

### 2.4 CTA Button (to Product Detail)
**Default**: background accent, text white  
**Hover**: background accent-strong  
**Active**: translateY(1px)  
**Focus**: outline 2px accent-soft  
**Disabled**: opacity 0.6  
**Loading**: spinner + "載入中"

### 2.5 Progress Indicator
**Default**: 8 steps, active step accent  
**Hover**: none  
**Active**: none  
**Focus**: none  
**Disabled**: muted  
**Loading**: shimmer  
**Empty**: all muted  
**Error**: optional red state (accent-strong)

---

## 3. Page Layouts

### Placement
**Section: 生活型態問券推薦**  
**位置**: 置於「亮點特色」之後、「生活節奏建議」之前  

### Structure
1. Section Header (title + subtitle + progress badge)  
2. Quiz Grid (7-8 題單選卡)  
3. CTA Row (提交 / 重設)  
4. Result Panel (Top 2 產品 + 推薦原因)  

### Result Panel
- 兩張卡並排（mobile 改 1 欄）
- 每張卡含：產品名稱、2-3 行推薦原因、CTA
- CTA：**「查看產品詳情」** 按鈕

---

## 4. Responsive Breakpoints

- Mobile: < 640px  
- Tablet: 640px - 1024px  
- Desktop: > 1024px  

---

## 5. Interaction Notes

- 提交前顯示未完成提示與進度  
- 提交後顯示「結果載入中」狀態（0.6s）  
- 結果區塊自動滾動到視窗內  
