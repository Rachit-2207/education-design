# Typography System

The Education Design System typography provides a clear, accessible, and consistent type system optimized for educational content and user interfaces.

## Table of Contents

- [Font Families](#font-families)
- [Font Sizes](#font-sizes)
- [Font Weights](#font-weights)
- [Line Heights](#line-heights)
- [Letter Spacing](#letter-spacing)
- [Type Scale](#type-scale)
- [Typography Hierarchy](#typography-hierarchy)
- [Usage Guidelines](#usage-guidelines)
- [Accessibility Considerations](#accessibility-considerations)
- [Code Examples](#code-examples)

## Font Families

### UI Font: Inter

**Token:** `fontFamily.ui`  
**Value:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`

Inter is used for all user interface elements including buttons, navigation, labels, and UI text. It provides excellent legibility at small sizes and maintains consistency across all devices.

**Characteristics:**
- Modern, clean sans-serif
- Optimized for screen readability
- Extensive character support
- Available in 9 weights (100-900)

**Usage:**
- Navigation menus
- Buttons and form controls
- Labels and captions
- Data tables
- UI components

### Content Font: Merriweather

**Token:** `fontFamily.content`  
**Value:** `'Merriweather', 'Georgia', 'Times New Roman', serif`

Merriweather is used for long-form content, articles, and educational materials. Its traditional serif design enhances readability for extended reading sessions.

**Characteristics:**
- Elegant serif typeface
- Designed for screen reading
- Excellent readability at various sizes
- Professional appearance

**Usage:**
- Article content
- Educational materials
- Blog posts
- Long-form text
- Documentation

### Monospace Font: JetBrains Mono

**Token:** `fontFamily.mono`  
**Value:** `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`

JetBrains Mono is used for code snippets, technical documentation, and data that requires monospace formatting.

**Characteristics:**
- Clear character differentiation
- Designed for developers
- Supports ligatures
- Fixed-width characters

**Usage:**
- Code blocks
- Terminal output
- Technical identifiers
- Data tables with numeric values

## Font Sizes

The type scale uses a modular system based on rem units for accessibility and responsiveness.

| Token | Value | Pixels (base 16px) | Usage |
|-------|-------|-------------------|--------|
| `fontSize.xs` | `0.75rem` | 12px | Fine print, captions |
| `fontSize.sm` | `0.875rem` | 14px | Small text, labels |
| `fontSize.base` | `1rem` | 16px | Body text, default |
| `fontSize.lg` | `1.125rem` | 18px | Large body text |
| `fontSize.xl` | `1.25rem` | 20px | Subheadings, callouts |
| `fontSize.2xl` | `1.5rem` | 24px | Section headings (H3) |
| `fontSize.3xl` | `1.875rem` | 30px | Page headings (H2) |
| `fontSize.4xl` | `2.25rem` | 36px | Major headings (H1) |
| `fontSize.5xl` | `3rem` | 48px | Hero text, displays |
| `fontSize.6xl` | `3.75rem` | 60px | Large displays |

### Responsive Scaling

Font sizes should scale responsively across breakpoints:

```css
/* Mobile: Base sizes */
h1 { font-size: 2.25rem; } /* 4xl */

/* Tablet and up */
@media (min-width: 768px) {
  h1 { font-size: 3rem; } /* 5xl */
}

/* Desktop and up */
@media (min-width: 1024px) {
  h1 { font-size: 3.75rem; } /* 6xl */
}
```

## Font Weights

Font weights establish hierarchy and emphasis within typography.

| Token | Value | Name | Usage |
|-------|-------|------|--------|
| `fontWeight.light` | `300` | Light | Subtle text, de-emphasized content |
| `fontWeight.normal` | `400` | Normal | Body text, default weight |
| `fontWeight.medium` | `500` | Medium | Subheadings, emphasized text |
| `fontWeight.semibold` | `600` | Semibold | Headings, strong emphasis |
| `fontWeight.bold` | `700` | Bold | Strong headings, high emphasis |

### Weight Guidelines

- **Light (300):** Use sparingly, typically for large display text where reduced weight creates elegance
- **Normal (400):** Default for all body text and paragraphs
- **Medium (500):** Buttons, navigation items, subheadings
- **Semibold (600):** H2-H4 headings, card titles
- **Bold (700):** H1 headings, critical alerts, strong emphasis

## Line Heights

Line height (leading) affects readability and text density.

| Token | Value | Usage |
|-------|-------|-------|
| `lineHeight.none` | `1` | Single-line text, icons |
| `lineHeight.tight` | `1.25` | Headings, compact layouts |
| `lineHeight.snug` | `1.375` | Short text blocks |
| `lineHeight.normal` | `1.5` | Body text, default |
| `lineHeight.relaxed` | `1.625` | Long-form content |
| `lineHeight.loose` | `2` | Spacious layouts, poetry |

### Line Height Guidelines

- **Headings:** Use `tight` (1.25) for better visual cohesion
- **Body Text:** Use `normal` (1.5) for optimal readability
- **Long-form Content:** Use `relaxed` (1.625) to reduce eye strain
- **Short UI Text:** Use `snug` (1.375) to maximize space efficiency

## Letter Spacing

Letter spacing (tracking) adjusts the space between characters.

| Token | Value | Usage |
|-------|-------|-------|
| `letterSpacing.tighter` | `-0.05em` | Large headings, display text |
| `letterSpacing.tight` | `-0.025em` | Headings |
| `letterSpacing.normal` | `0em` | Body text, default |
| `letterSpacing.wide` | `0.025em` | Small caps, labels |
| `letterSpacing.wider` | `0.05em` | Buttons, uppercase text |
| `letterSpacing.widest` | `0.1em` | All-caps headings |

### Letter Spacing Guidelines

- Tighten spacing on large display text for better visual balance
- Increase spacing for all-caps text to improve readability
- Keep normal spacing for body text
- Use wider spacing for small text to improve legibility

## Type Scale

The complete type scale for common text styles:

### Display Text

```css
.display-large {
  font-family: var(--font-ui);
  font-size: 3.75rem;        /* 60px */
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.05em;
}

.display-medium {
  font-family: var(--font-ui);
  font-size: 3rem;           /* 48px */
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.025em;
}

.display-small {
  font-family: var(--font-ui);
  font-size: 2.25rem;        /* 36px */
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.025em;
}
```

### Headings

```css
.heading-1 {
  font-family: var(--font-ui);
  font-size: 2.25rem;        /* 36px */
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.025em;
}

.heading-2 {
  font-family: var(--font-ui);
  font-size: 1.875rem;       /* 30px */
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.025em;
}

.heading-3 {
  font-family: var(--font-ui);
  font-size: 1.5rem;         /* 24px */
  font-weight: 600;
  line-height: 1.375;
}

.heading-4 {
  font-family: var(--font-ui);
  font-size: 1.25rem;        /* 20px */
  font-weight: 600;
  line-height: 1.375;
}

.heading-5 {
  font-family: var(--font-ui);
  font-size: 1.125rem;       /* 18px */
  font-weight: 600;
  line-height: 1.5;
}

.heading-6 {
  font-family: var(--font-ui);
  font-size: 1rem;           /* 16px */
  font-weight: 600;
  line-height: 1.5;
}
```

### Body Text

```css
.body-large {
  font-family: var(--font-content);
  font-size: 1.125rem;       /* 18px */
  font-weight: 400;
  line-height: 1.625;
}

.body-base {
  font-family: var(--font-content);
  font-size: 1rem;           /* 16px */
  font-weight: 400;
  line-height: 1.5;
}

.body-small {
  font-family: var(--font-content);
  font-size: 0.875rem;       /* 14px */
  font-weight: 400;
  line-height: 1.5;
}
```

### UI Text

```css
.ui-large {
  font-family: var(--font-ui);
  font-size: 1rem;           /* 16px */
  font-weight: 500;
  line-height: 1.5;
}

.ui-base {
  font-family: var(--font-ui);
  font-size: 0.875rem;       /* 14px */
  font-weight: 500;
  line-height: 1.5;
}

.ui-small {
  font-family: var(--font-ui);
  font-size: 0.75rem;        /* 12px */
  font-weight: 500;
  line-height: 1.5;
}
```

### Labels and Captions

```css
.label {
  font-family: var(--font-ui);
  font-size: 0.875rem;       /* 14px */
  font-weight: 500;
  line-height: 1.375;
  letter-spacing: 0.025em;
}

.caption {
  font-family: var(--font-ui);
  font-size: 0.75rem;        /* 12px */
  font-weight: 400;
  line-height: 1.375;
}

.overline {
  font-family: var(--font-ui);
  font-size: 0.75rem;        /* 12px */
  font-weight: 600;
  line-height: 1.375;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

### Code

```css
.code-inline {
  font-family: var(--font-mono);
  font-size: 0.875em;        /* 14px relative to parent */
  font-weight: 400;
  line-height: inherit;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
}

.code-block {
  font-family: var(--font-mono);
  font-size: 0.875rem;       /* 14px */
  font-weight: 400;
  line-height: 1.625;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}
```

## Typography Hierarchy

### Page Structure

```
H1 (4xl, bold)           - Page title
  └─ Subtitle (lg)       - Optional page subtitle
  
  H2 (3xl, semibold)     - Major section
    └─ Body (base)       - Section content
    
    H3 (2xl, semibold)   - Subsection
      └─ Body (base)     - Subsection content
      
      H4 (xl, semibold)  - Minor heading
        └─ Body (base)   - Content
```

### Content Hierarchy Example

```html
<article>
  <h1 class="heading-1">Introduction to Design Systems</h1>
  <p class="body-large">
    A comprehensive guide to building scalable design systems...
  </p>
  
  <h2 class="heading-2">What is a Design System?</h2>
  <p class="body-base">
    A design system is a collection of reusable components...
  </p>
  
  <h3 class="heading-3">Key Components</h3>
  <p class="body-base">
    Design systems typically include...
  </p>
</article>
```

## Usage Guidelines

### Choosing the Right Typeface

**Use Inter (UI Font) for:**
- Navigation and menus
- Buttons and form elements
- Cards and panels
- Data tables and lists
- Short, scannable content
- Headlines and subheadlines
- UI labels and captions

**Use Merriweather (Content Font) for:**
- Article bodies
- Blog posts
- Educational content
- Documentation narratives
- Long-form reading
- Printed materials

**Use JetBrains Mono (Monospace) for:**
- Code examples
- Terminal output
- API responses
- Configuration files
- Technical documentation

### Pairing Fonts

When using multiple typefaces on the same page:

```css
/* Heading in UI font */
h2 {
  font-family: var(--font-ui);
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* Body in content font */
p {
  font-family: var(--font-content);
  font-size: 1rem;
  line-height: 1.625;
}

/* Inline code in mono font */
code {
  font-family: var(--font-mono);
  font-size: 0.875em;
}
```

### Responsive Typography

Implement responsive font sizes using CSS clamp() for fluid scaling:

```css
.heading-1 {
  font-size: clamp(2.25rem, 4vw + 1rem, 3.75rem);
}

.body-base {
  font-size: clamp(0.875rem, 2vw + 0.5rem, 1.125rem);
}
```

Or use media queries for breakpoint-based scaling:

```css
.heading-1 {
  font-size: 2.25rem;
}

@media (min-width: 768px) {
  .heading-1 {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .heading-1 {
    font-size: 3.75rem;
  }
}
```

## Accessibility Considerations

### Minimum Font Sizes

- **Body text:** Never go below 16px (1rem) for primary content
- **UI elements:** Minimum 14px (0.875rem) for labels and buttons
- **Captions:** Minimum 12px (0.75rem) for supplementary information

### Line Length

Optimal line length for readability is 50-75 characters per line:

```css
.readable-content {
  max-width: 65ch; /* Approximately 65 characters */
  margin-inline: auto;
}
```

### Color Contrast

Ensure sufficient contrast between text and background:

- **Normal text:** 4.5:1 minimum contrast ratio
- **Large text (18px+ or 14px+ bold):** 3:1 minimum contrast ratio
- Use color tokens from [Color System](./colors.md) for compliant combinations

### Font Loading

Prevent layout shift with font loading strategies:

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap; /* Shows fallback immediately, swaps when loaded */
}
```

### Dyslexia Considerations

- Use adequate line height (1.5 minimum for body text)
- Avoid full justification; use left-aligned text
- Provide sufficient spacing between paragraphs
- Allow users to customize font size and spacing

## Code Examples

### CSS Variables

```css
:root {
  /* Font Families */
  --font-ui: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-content: 'Merriweather', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
}
```

### React/TypeScript Example

```tsx
import { tokens } from '@education-design/tokens';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  const styles = {
    h1: {
      fontFamily: tokens.fontFamily.ui,
      fontSize: tokens.fontSize['4xl'],
      fontWeight: tokens.fontWeight.bold,
      lineHeight: tokens.lineHeight.tight,
    },
    h2: {
      fontFamily: tokens.fontFamily.ui,
      fontSize: tokens.fontSize['3xl'],
      fontWeight: tokens.fontWeight.semibold,
      lineHeight: tokens.lineHeight.tight,
    },
    body: {
      fontFamily: tokens.fontFamily.content,
      fontSize: tokens.fontSize.base,
      fontWeight: tokens.fontWeight.normal,
      lineHeight: tokens.lineHeight.normal,
    },
    caption: {
      fontFamily: tokens.fontFamily.ui,
      fontSize: tokens.fontSize.xs,
      fontWeight: tokens.fontWeight.normal,
      lineHeight: tokens.lineHeight.normal,
    },
  };

  return <div style={styles[variant]}>{children}</div>;
};
```

### SCSS Mixins

```scss
@use '../tokens/typography' as type;

@mixin heading-1 {
  font-family: type.$font-family-ui;
  font-size: type.$font-size-4xl;
  font-weight: type.$font-weight-bold;
  line-height: type.$line-height-tight;
  letter-spacing: type.$letter-spacing-tight;
}

@mixin body-text {
  font-family: type.$font-family-content;
  font-size: type.$font-size-base;
  font-weight: type.$font-weight-normal;
  line-height: type.$line-height-normal;
}

.article-title {
  @include heading-1;
  margin-bottom: 1.5rem;
}

.article-content {
  @include body-text;
}
```

## Best Practices

1. **Consistency:** Always use typography tokens instead of hard-coded values
2. **Hierarchy:** Establish clear visual hierarchy using size, weight, and spacing
3. **Readability:** Prioritize legibility over aesthetics
4. **Accessibility:** Test with screen readers and ensure proper semantic HTML
5. **Performance:** Use font-display: swap to prevent invisible text during loading
6. **Responsive:** Scale typography appropriately across devices
7. **Contrast:** Ensure text meets WCAG contrast requirements
8. **Line Length:** Keep line lengths optimal for reading (50-75 characters)
9. **Spacing:** Use adequate line-height for body text (1.5 minimum)
10. **Testing:** Validate typography choices with real content and users

---

**Related Documentation:**
- [Color System](./colors.md)
- [Spacing System](./spacing.md)
- [Accessibility Guidelines](../../accessibility/README.md)
- [Component Library](../../components/README.md)
