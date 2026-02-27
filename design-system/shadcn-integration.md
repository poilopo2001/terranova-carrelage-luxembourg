# shadcn/ui Integration Report - Terranova Carrelage Luxembourg

**Date**: 2026-02-27
**Framework**: Next.js 16+ (App Router) + TypeScript + Tailwind CSS v4
**Components Installed**: 38

---

## 1. Design Token Mapping

### Colors (Brand -> CSS Variables -> Tailwind)

| Design System Token | Hex | oklch | CSS Variable | Tailwind Class |
|---|---|---|---|---|
| brand-900 | #3D2B1F | oklch(0.27 0.04 45) | --color-brand-900 | bg-brand-900 |
| brand-800 | #4E3829 | oklch(0.33 0.04 45) | --color-brand-800 | bg-brand-800 |
| accent-500 | #C4965A | oklch(0.68 0.10 65) | --color-accent-500 / --color-primary | bg-accent-500 / bg-primary |
| accent-700 | #A07840 | oklch(0.56 0.10 65) | --color-accent-700 | bg-accent-700 |
| ivory-100 | #F0E6D3 | oklch(0.92 0.02 70) | --color-ivory-100 / --color-secondary | bg-ivory-100 / bg-secondary |
| ivory-25 | #FAFAF8 | oklch(0.98 0.005 70) | --color-ivory-25 / --color-background | bg-ivory-25 / bg-background |
| ivory-200 | #E5D9C9 | oklch(0.88 0.02 70) | --color-ivory-200 / --color-border | border-ivory-200 |

### shadcn Semantic Mapping

| shadcn Variable | Mapped To | Purpose |
|---|---|---|
| --color-background | ivory-25 | Page background |
| --color-foreground | brand-900 | Primary text |
| --color-primary | accent-500 | CTA, links, active |
| --color-primary-foreground | white | Text on primary |
| --color-secondary | ivory-100 | Alt backgrounds |
| --color-secondary-foreground | brand-900 | Text on secondary |
| --color-muted | ivory-50 | Disabled backgrounds |
| --color-muted-foreground | brand-500 | Placeholder text |
| --color-border | ivory-200 | All borders |
| --color-ring | accent-500 | Focus rings |
| --color-destructive | error | Delete/danger actions |

### Typography Mapping

| Design System | Tailwind Class | Font |
|---|---|---|
| display-1 (72px) | text-7xl font-heading | Playfair Display 700 |
| display-2 (56px) | text-5xl md:text-6xl font-heading | Playfair Display 700 |
| h1 (44px) | text-4xl font-heading | Playfair Display 700 |
| h2 (36px) | text-3xl font-heading | Playfair Display 600 |
| h3 (28px) | text-2xl font-heading | Playfair Display 600 |
| h4 (22px) | text-xl font-body font-semibold | Source Sans 600 |
| body-lg (18px) | text-lg font-body | Source Sans 400 |
| body (16px) | text-base font-body | Source Sans 400 |
| body-sm (14px) | text-sm font-body | Source Sans 400 |
| caption (12px) | text-xs font-body | Source Sans 400 |

### Spacing Mapping (8dp Grid)

| Design System | Tailwind | Value |
|---|---|---|
| space-2 | p-2 / gap-2 | 8px |
| space-4 | p-4 / gap-4 | 16px |
| space-6 | p-6 / gap-6 | 24px |
| space-7 | p-8 / gap-8 | 32px |
| space-10 | p-16 / gap-16 | 64px |
| space-12 | py-24 | 96px |

---

## 2. Installed Components (38)

accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, card, carousel, checkbox, collapsible, command, dialog, drawer, dropdown-menu, form, hover-card, input, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, sheet, skeleton, slider, sonner, switch, tabs, textarea, toggle, toggle-group, tooltip

---

## 3. Component Customizations

### Button - Brand Variant
Add to `src/components/ui/button.tsx` variants:
```tsx
brand: "bg-brand-900 text-ivory-100 hover:bg-brand-800 shadow-card"
```

### Card - Hover Elevation
Cards use `shadow-card` at rest, `shadow-card-hover` + `hover:-translate-y-0.5` on hover.

### Input - Warm Focus
Focus ring uses accent-500 (oklch) instead of default blue.

---

## 4. Additional Libraries

| Library | Version | Purpose |
|---|---|---|
| framer-motion | 12.x | Scroll animations, page transitions |
| lucide-react | 0.575.x | Icon system (1.5px stroke) |
| class-variance-authority | 0.7.x | Component variants |
| clsx + tailwind-merge | latest | Conditional classnames |

### Premium Animation Libraries (to add)
- **Aceternity UI**: Spotlight, TextGenerateEffect, WavyBackground
- **MagicUI**: AnimatedBeam, ShimmerButton, NumberTicker

---

## 5. Quality Assurance

- [x] Project builds successfully (npm run build - 0 errors)
- [x] TypeScript strict mode enabled
- [x] All 38 shadcn components installed
- [x] Design tokens injected in globals.css
- [x] Fonts loaded via next/font/google (Playfair Display + Source Sans 3)
- [x] Color system complete (brand, accent, ivory, semantic)
- [x] Shadows use brand-900 base color (warm tint)
- [x] Border radius consistent (8px components, 12px modals)
- [x] Focus rings use accent-500
