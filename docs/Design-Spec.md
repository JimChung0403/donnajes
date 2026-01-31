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

## 4. Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
