# Design Specification

Note: `Tech-Stack.md` was not found, so tokens are expressed as CSS custom properties aligned to `src/app/globals.css`.

## 1. Design Tokens

```css
:root {
  /* Color */
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

  /* Shadows */
  --shadow-sm: 0 8px 22px rgba(93, 75, 66, 0.12);
  --shadow-md: 0 18px 40px rgba(93, 75, 66, 0.16);

  /* Radius */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 999px;

  /* Spacing */
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

  /* Control Sizes */
  --size-control-md: 44px;
  --space-btn-x: 22px;
}
```

## 2. Component Library

### Logo (Topbar Brand)

**Assets**
- `/public/logo.svg` (primary logo)
- `/public/favicon.svg` (favicon)

**Layout**
- Logo image width: 200px
- Logo image height: auto
- Gap between logo and subtitle: `--space-3`

**Typography**
- Subtitle font size: 0.82rem
- Subtitle color: `--color-muted`

**States**
- Default: `opacity: 1`, no transform
- Hover: `opacity: 0.9`
- Active/Pressed: `opacity: 0.85`
- Focus: `outline: 2px solid var(--color-accent)`, `outline-offset: 2px`
- Disabled: `opacity: 0.5`, `pointer-events: none`
- Loading: `opacity: 0.7`
- Empty: show logo only, hide subtitle
- Error: `outline: 2px solid var(--color-accent-strong)`

### Cute Icon (Section Accent)

**Asset**
- `/public/icons/tea-heart.svg`

**Layout**
- Size: 28px × 28px
- Placement: Left of section title
- Gap to title: `--space-3`

**States**
- Default: `opacity: 1`
- Hover: `transform: translateY(-1px)`
- Active/Pressed: `transform: translateY(0)`
- Focus: `outline: 2px solid var(--color-accent)`
- Disabled: `opacity: 0.5`
- Loading: `opacity: 0.7`
- Empty: hidden
- Error: `filter: grayscale(0.8)`

## 3. Page Layouts

### Home Page Topbar
- Left: Logo + subtitle (brand)
- Center: Navigation links
- Right: Primary action

### Benefits Section
- Title row with cute icon + H2
- Description text below
- Cards below

### Product Detail Page
- Header: Product name (H1), short lead, tags
- Media: Product image right-aligned on desktop, stacked on mobile
- Info: Highlights list + Usage card
- Info: "適合誰" card + FAQ card
- Related: 3 related product cards
- Primary CTA: IG 私訊

## 4. Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 5. Component Library (Product Detail)

### Product Hero
**Layout**
- Container gap: `--space-6`
- Image card radius: `--radius-lg`

**Typography**
- H1: existing `h1` styles
- Lead: body size, color `--color-muted`

**States**
- Default: standard layout
- Hover: image card shadow `--shadow-sm`
- Active/Pressed: image card shadow `--shadow-md`
- Focus: outline `2px solid var(--color-accent)`
- Disabled: opacity 0.5
- Loading: skeleton blocks on text + image
- Empty: show "產品資料準備中" placeholder
- Error: border `1px solid var(--color-accent-strong)`

### Info Card (Highlights / Usage / Audience / FAQ)
**Layout**
- Padding: `--space-6`
- Radius: `--radius-md`
- Background: `--color-surface`
- Border: `1px solid var(--color-border)`

**States**
- Default: standard
- Hover: translateY(-2px), shadow `--shadow-sm`
- Active/Pressed: translateY(0)
- Focus: outline `2px solid var(--color-accent)`
- Disabled: opacity 0.5
- Loading: skeleton lines
- Empty: show "暫無內容"
- Error: border `1px solid var(--color-accent-strong)`

### FAQ Item (details/summary)
**Layout**
- Summary padding: `--space-3 0`
- Divider: `1px solid var(--color-border)`

**States**
- Default: collapsed
- Hover: summary color `--color-accent-strong`
- Active/Pressed: summary color `--color-accent`
- Focus: outline `2px solid var(--color-accent)`
- Disabled: opacity 0.5, pointer-events none
- Loading: skeleton lines
- Empty: hidden
- Error: text color `--color-accent-strong`

### Primary CTA Button
**Layout**
- Height: `--size-control-md`
- Padding: `var(--space-3) var(--space-btn-x)`
- Radius: `--radius-full`

**States**
- Default: background `--color-accent`, text `#fff`
- Hover: translateY(-1px), shadow `--shadow-sm`
- Active/Pressed: translateY(0)
- Focus: outline `2px solid var(--color-accent-strong)`
- Disabled: opacity 0.5, cursor not-allowed
- Loading: show spinner + "處理中"
- Empty: hidden
- Error: background `--color-accent-strong`
