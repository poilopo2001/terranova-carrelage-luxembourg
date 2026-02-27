# Terranova Carrelage Luxembourg - Design System v1.0.0

**Date**: 2026-02-27
**Brand Archetype**: Le Createur (primaire) + Le Sage (secondaire)
**Positioning**: Artisan Compagnon du Tour de France - precision, noblesse, durabilite

---

## 1. Design Philosophy

**"Le site doit ressembler au travail de Terranova : precis, chaleureux, noble."**

Chaque decision de design s'ancre dans trois principes :

1. **Matiere** : La palette evoque directement les materiaux poses - brun terre, ocre pierre, ivoire travertin. Pas une palette corporate arbitraire, mais un prolongement visuel du metier.

2. **Precision** : Grille rigoureuse 8dp, typographie calibree, spacing mathematique. Comme un calepinage parfait, chaque element est pose au millimetre.

3. **Respiration** : Espaces genereux entre les sections, comme un beau sol bien pose. Le vide est aussi important que le plein. Le contenu respire.

**Anti-patterns** : Pas de gradients flashy, pas de couleurs neon, pas de surcharge decorative. La qualite du travail parle d'elle-meme.

---

## 2. Color System

### Primary Palette

| Token | Hex | HSL | Usage |
|---|---|---|---|
| `brand-900` | `#3D2B1F` | `20 33% 18%` | Texte principal, headers, fond hero |
| `brand-800` | `#4E3829` | `20 31% 23%` | Texte secondaire, hover states |
| `brand-700` | `#5F4533` | `20 29% 28%` | Bordures actives |
| `brand-600` | `#70523D` | `20 29% 34%` | Icones |
| `brand-500` | `#816047` | `20 28% 39%` | Texte desactive |

### Accent Palette (Ocre Dore)

| Token | Hex | HSL | Usage |
|---|---|---|---|
| `accent-700` | `#A07840` | `30 43% 44%` | Accent hover |
| `accent-600` | `#B28548` | `30 42% 49%` | Accent pressed |
| `accent-500` | `#C4965A` | `33 44% 56%` | Accent principal - CTA, liens, highlights |
| `accent-400` | `#D1A96F` | `33 50% 63%` | Accent light |
| `accent-300` | `#DEBB88` | `33 56% 70%` | Badges, tags |

### Neutral Palette (Ivoire / Blanc)

| Token | Hex | HSL | Usage |
|---|---|---|---|
| `neutral-200` | `#E5D9C9` | `30 30% 84%` | Bordures, separateurs |
| `neutral-100` | `#F0E6D3` | `33 45% 88%` | Fond sections alternees, cards |
| `neutral-50` | `#F5EEE3` | `33 40% 92%` | Fond hover cards |
| `neutral-25` | `#FAFAF8` | `60 14% 97%` | Fond principal page |
| `neutral-0` | `#FFFFFF` | `0 0% 100%` | Fond cards, modals |

### Semantic Colors

| Token | Hex | HSL | Usage |
|---|---|---|---|
| `success` | `#2D6A4F` | `153 39% 30%` | Validation, confirmation |
| `success-light` | `#D4EDDA` | `134 41% 88%` | Fond success |
| `error` | `#9B2C2C` | `0 56% 39%` | Erreurs, alertes |
| `error-light` | `#FED7D7` | `0 94% 92%` | Fond error |
| `warning` | `#B7791F` | `38 72% 42%` | Avertissements |
| `warning-light` | `#FEFCBF` | `55 97% 87%` | Fond warning |
| `info` | `#2B6CB0` | `213 60% 43%` | Information |
| `info-light` | `#BEE3F8` | `202 83% 86%` | Fond info |

### Color Usage Rules
- **60%** : `neutral-25` (#FAFAF8) - fond principal
- **25%** : `brand-900` (#3D2B1F) + `neutral-100` (#F0E6D3) - texte et sections
- **10%** : `accent-500` (#C4965A) - CTA, liens, accents
- **5%** : Semantic colors - feedback utilisateur

### Dark Mode (optionnel futur)
- Fond : `#1A1410` (brun tres fonce)
- Texte : `#F0E6D3` (ivoire)
- Accent : `#D1A96F` (ocre clair)
- Cards : `#2A1F17`

---

## 3. Typography

### Font Stack

```css
--font-heading: 'Playfair Display', 'Georgia', 'Times New Roman', serif;
--font-body: 'Source Sans Pro', 'Segoe UI', 'Helvetica Neue', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Google Fonts Import
```
Playfair Display: 400, 500, 600, 700 (regular + italic)
Source Sans Pro: 300, 400, 600, 700
```

### Type Scale (ratio 1.25 - Major Third)

| Token | Size | Line Height | Letter Spacing | Weight | Font | Usage |
|---|---|---|---|---|---|---|
| `display-1` | 72px / 4.5rem | 80px / 1.11 | -0.03em | 700 | Playfair | Hero headline unique |
| `display-2` | 56px / 3.5rem | 64px / 1.14 | -0.02em | 700 | Playfair | Page titles |
| `h1` | 44px / 2.75rem | 52px / 1.18 | -0.02em | 700 | Playfair | Section titles |
| `h2` | 36px / 2.25rem | 44px / 1.22 | -0.015em | 600 | Playfair | Sous-sections |
| `h3` | 28px / 1.75rem | 36px / 1.29 | -0.01em | 600 | Playfair | Card titles |
| `h4` | 22px / 1.375rem | 30px / 1.36 | -0.005em | 600 | Source Sans | Sous-titres |
| `h5` | 18px / 1.125rem | 26px / 1.44 | 0 | 600 | Source Sans | Labels, captions |
| `body-lg` | 18px / 1.125rem | 28px / 1.56 | 0.01em | 400 | Source Sans | Paragraphes hero |
| `body` | 16px / 1rem | 26px / 1.625 | 0.01em | 400 | Source Sans | Corps principal |
| `body-sm` | 14px / 0.875rem | 22px / 1.57 | 0.015em | 400 | Source Sans | Captions, meta |
| `caption` | 12px / 0.75rem | 18px / 1.5 | 0.02em | 400 | Source Sans | Footnotes, legal |
| `overline` | 12px / 0.75rem | 16px / 1.33 | 0.15em | 600 | Source Sans | Labels uppercase |

### Mobile Adjustments (< 768px)

| Token | Desktop | Mobile |
|---|---|---|
| `display-1` | 72px | 40px |
| `display-2` | 56px | 34px |
| `h1` | 44px | 30px |
| `h2` | 36px | 26px |
| `h3` | 28px | 22px |
| `body-lg` | 18px | 16px |

### Typography Rules
- **Max width paragraphe** : 680px (65-75 caracteres par ligne)
- **Playfair Display** : titres UNIQUEMENT, jamais en corps de texte
- **Source Sans Pro** : tout le reste (corps, boutons, navigation, labels)
- **Italic** : Playfair italic pour citations et temoignages
- **Uppercase** : UNIQUEMENT pour overline/labels (tracking 0.15em obligatoire)

---

## 4. Spacing System (8dp Grid)

### Base Unit: 8px

| Token | Value | Usage |
|---|---|---|
| `space-0` | 0px | Reset |
| `space-1` | 4px | Micro-gaps (icon-text) |
| `space-2` | 8px | Gaps inline, padding inputs |
| `space-3` | 12px | Gaps petits composants |
| `space-4` | 16px | Padding cards, gaps elements |
| `space-5` | 20px | Padding moyen |
| `space-6` | 24px | Gaps sections internes |
| `space-7` | 32px | Padding sections, margins elements |
| `space-8` | 40px | Gaps entre composants |
| `space-9` | 48px | Margins sections mobile |
| `space-10` | 64px | Padding sections desktop |
| `space-11` | 80px | Separations majeures |
| `space-12` | 96px | Padding hero/footer |
| `space-13` | 128px | Separations hero |

### Layout Dimensions

| Token | Value | Usage |
|---|---|---|
| `container-max` | 1280px | Largeur max conteneur |
| `container-narrow` | 768px | Conteneur texte |
| `container-wide` | 1440px | Conteneur plein ecran |
| `sidebar-width` | 320px | Sidebar navigation |
| `gutter` | 24px | Gouttiere grille (32px desktop) |

### Breakpoints

| Token | Value | Usage |
|---|---|---|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop small |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Desktop large |

---

## 5. Shadows & Elevation

| Token | Value | Usage |
|---|---|---|
| `shadow-xs` | `0 1px 2px rgba(61,43,31,0.05)` | Inputs, petits elements |
| `shadow-sm` | `0 2px 4px rgba(61,43,31,0.08)` | Cards au repos |
| `shadow-md` | `0 4px 12px rgba(61,43,31,0.10)` | Cards hover, dropdowns |
| `shadow-lg` | `0 8px 24px rgba(61,43,31,0.12)` | Modals, sheets |
| `shadow-xl` | `0 16px 48px rgba(61,43,31,0.16)` | Hero overlays |

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-none` | 0px | Images plein bord |
| `radius-sm` | 4px | Inputs, badges |
| `radius-md` | 8px | Cards, boutons |
| `radius-lg` | 12px | Modals, sheets |
| `radius-xl` | 16px | Hero cards |
| `radius-full` | 9999px | Avatars, pills |

---

## 6. Component Guidelines

### Button

| Variante | Background | Text | Border | Hover BG | Hover Text |
|---|---|---|---|---|---|
| Primary | `#C4965A` | `#FFFFFF` | none | `#A07840` | `#FFFFFF` |
| Secondary | transparent | `#3D2B1F` | 1.5px `#3D2B1F` | `#3D2B1F` | `#FFFFFF` |
| Ghost | transparent | `#3D2B1F` | none | `#F0E6D3` | `#3D2B1F` |
| Brand | `#3D2B1F` | `#F0E6D3` | none | `#4E3829` | `#F0E6D3` |
| Destructive | `#9B2C2C` | `#FFFFFF` | none | `#822727` | `#FFFFFF` |

**Specs communes** :
- Height: 40px (sm), 44px (md), 48px (lg), 56px (xl)
- Padding horizontal: 16px (sm), 20px (md), 24px (lg), 32px (xl)
- Font: Source Sans Pro 600, 14px (sm), 15px (md), 16px (lg)
- Radius: 8px
- Transition: `all 200ms ease-out`
- Focus ring: `0 0 0 3px rgba(196,150,90,0.4)`
- Disabled: opacity 0.5, cursor not-allowed
- Min touch target: 44x44px

### Card

- Background: `#FFFFFF`
- Border: 1px `#E5D9C9`
- Radius: 8px (image: radius-top 8px)
- Shadow: `shadow-sm` au repos, `shadow-md` au hover
- Padding: 24px
- Hover: translateY(-2px), transition 300ms ease-out
- Image ratio: 16:9 (galerie), 4:3 (services), 1:1 (temoignages avatar)

### Input

- Height: 44px
- Background: `#FFFFFF`
- Border: 1.5px `#E5D9C9`
- Border focus: 1.5px `#C4965A`
- Radius: 8px
- Padding: 12px 16px
- Font: Source Sans Pro 400, 16px
- Label: Source Sans Pro 600, 14px, `#3D2B1F`
- Placeholder: `#816047` (brand-500)
- Error border: `#9B2C2C`
- Focus ring: `0 0 0 3px rgba(196,150,90,0.2)`

### Navigation

- Height: 72px (desktop), 64px (mobile)
- Background: `#FAFAF8` avec backdrop-blur(12px) et opacity 0.95
- Fond scroll: `#FAFAF8` solide avec shadow-xs
- Logo: 40px height
- Links: Source Sans Pro 600, 15px, `#3D2B1F`
- Link hover: `#C4965A`, underline offset 4px
- CTA nav: Button Primary (sm)
- Mobile: Sheet from right, 320px width
- Transition header: height 200ms ease-out

---

## 7. Motion & Animation

### Timing

| Token | Duration | Easing | Usage |
|---|---|---|---|
| `micro` | 150ms | ease-out | Toggles, checkboxes |
| `fast` | 200ms | ease-out | Boutons, inputs, hover |
| `normal` | 300ms | ease-out | Cards, modals open |
| `slow` | 500ms | ease-out | Page transitions, hero |
| `gentle` | 700ms | cubic-bezier(0.16,1,0.3,1) | Scroll reveal |

### Scroll Animations (Framer Motion / Aceternity)

```typescript
// Fade in from bottom
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
}

// Stagger children
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
}

// Scale in
const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
}
```

### Hover Effects
- Cards: `translateY(-2px)` + shadow elevation, 300ms ease-out
- Boutons: background color transition, 200ms ease-out
- Links: underline slide-in from left, 200ms ease-out
- Images: scale(1.03), 500ms ease-out

---

## 8. Iconography

- **Style**: Lucide React (line icons, 1.5px stroke)
- **Size**: 16px (inline), 20px (buttons), 24px (standalone), 32px (features)
- **Color**: inherit du texte parent
- **Accent icons**: `#C4965A` pour highlights

---

## 9. Image Guidelines

### Ratios
| Context | Ratio | Usage |
|---|---|---|
| Hero | 21:9 | Banner hero pleine largeur |
| Galerie | 16:9 | Photos realisations |
| Services | 4:3 | Images services |
| Portrait | 3:4 | Fondateur, equipe |
| Avatar | 1:1 | Temoignages |
| Logo | libre | Responsive |

### Traitement
- **Overlay hero**: linear-gradient `rgba(61,43,31,0.5)` to `rgba(61,43,31,0.3)`
- **Placeholder**: fond `#F0E6D3` avec skeleton pulse
- **Lazy loading**: Intersection Observer, fade-in 500ms
- **Qualite** : WebP, 80% quality, responsive srcset

---

## 10. How To Leverage

### Tailwind Config (tokens principaux)

```typescript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#3D2B1F',
          800: '#4E3829',
          700: '#5F4533',
          600: '#70523D',
          500: '#816047',
        },
        accent: {
          700: '#A07840',
          600: '#B28548',
          500: '#C4965A',
          400: '#D1A96F',
          300: '#DEBB88',
        },
        ivory: {
          200: '#E5D9C9',
          100: '#F0E6D3',
          50: '#F5EEE3',
          25: '#FAFAF8',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-0.03em' }],
        'display-2': ['3.5rem', { lineHeight: '4rem', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'card': '8px',
        'button': '8px',
        'input': '8px',
        'modal': '12px',
      },
      boxShadow: {
        'card': '0 2px 4px rgba(61,43,31,0.08)',
        'card-hover': '0 4px 12px rgba(61,43,31,0.10)',
        'modal': '0 8px 24px rgba(61,43,31,0.12)',
        'hero': '0 16px 48px rgba(61,43,31,0.16)',
      },
    },
  },
}
```

### Component Usage Examples

```tsx
// Hero Section
<section className="bg-brand-900 text-ivory-25 py-24 md:py-32">
  <h1 className="font-heading text-display-2 md:text-display-1 tracking-tight">
    Compagnon du Tour de France
  </h1>
  <p className="font-body text-body-lg text-ivory-100 max-w-[680px]">
    Carreleur au Grand-Duche depuis 2001
  </p>
</section>

// Service Card
<div className="bg-white border border-ivory-200 rounded-card shadow-card
  hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
  <img className="rounded-t-card aspect-[4/3] object-cover" />
  <div className="p-6">
    <h3 className="font-heading text-h3 text-brand-900">Pierre naturelle</h3>
    <p className="font-body text-body text-brand-600 mt-2">...</p>
  </div>
</div>

// CTA Button
<button className="bg-accent-500 text-white font-body font-semibold
  px-6 py-3 rounded-button hover:bg-accent-700
  transition-colors duration-200 focus:ring-3 focus:ring-accent-500/40">
  Visitez le showroom a Mersch
</button>
```
