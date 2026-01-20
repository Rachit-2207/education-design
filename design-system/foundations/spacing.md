# Spacing System

The Education Design System uses a consistent spacing scale to create visual rhythm, establish hierarchy, and ensure predictable layouts across all components and pages.

## Table of Contents

- [Spacing Scale](#spacing-scale)
- [Container Widths](#container-widths)
- [Component Spacing](#component-spacing)
- [Spacing Guidelines](#spacing-guidelines)
- [Responsive Spacing](#responsive-spacing)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)

## Spacing Scale

The spacing system is based on a 4px base unit (0.25rem), providing a harmonious scale that works well across different screen sizes and contexts.

### Base Spacing Tokens

| Token | Value | Pixels | Common Usage |
|-------|-------|--------|--------------|
| `spacing.0` | `0` | 0px | Reset spacing |
| `spacing.1` | `0.25rem` | 4px | Tiny gaps, icon spacing |
| `spacing.2` | `0.5rem` | 8px | Compact spacing, inline elements |
| `spacing.3` | `0.75rem` | 12px | Small padding, tight layouts |
| `spacing.4` | `1rem` | 16px | **Base unit** - default spacing |
| `spacing.5` | `1.25rem` | 20px | Comfortable padding |
| `spacing.6` | `1.5rem` | 24px | Medium gaps, card padding |
| `spacing.8` | `2rem` | 32px | Large gaps, section spacing |
| `spacing.10` | `2.5rem` | 40px | Extra large gaps |
| `spacing.12` | `3rem` | 48px | Section separation |
| `spacing.16` | `4rem` | 64px | Major section breaks |
| `spacing.20` | `5rem` | 80px | Page section spacing |
| `spacing.24` | `6rem` | 96px | Large page sections |
| `spacing.32` | `8rem` | 128px | Hero sections, major divisions |

### Spacing Scale Visualization

```
0px   ▪
4px   ▪▪
8px   ▪▪▪▪
12px  ▪▪▪▪▪▪
16px  ▪▪▪▪▪▪▪▪
24px  ▪▪▪▪▪▪▪▪▪▪▪▪
32px  ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
48px  ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
64px  ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
```

### Negative Spacing

Use negative spacing for overlapping elements or to pull elements closer:

```css
.overlap {
  margin-top: calc(var(--spacing-8) * -1); /* -32px */
}
```

## Container Widths

Container widths define maximum content widths for different breakpoints, ensuring optimal reading experience and layout consistency.

### Container Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `containerMaxWidth.sm` | `640px` | Mobile-optimized content |
| `containerMaxWidth.md` | `768px` | Tablet, narrow content |
| `containerMaxWidth.lg` | `1024px` | Desktop, standard content |
| `containerMaxWidth.xl` | `1280px` | Wide desktop, full content |
| `containerMaxWidth.2xl` | `1440px` | Ultra-wide displays |

### Container Usage

```css
.container {
  width: 100%;
  max-width: var(--container-lg);
  margin-inline: auto;
  padding-inline: var(--spacing-4);
}

/* Responsive containers */
.container-sm {
  max-width: var(--container-sm);
}

.container-md {
  max-width: var(--container-md);
}

.container-lg {
  max-width: var(--container-lg);
}

.container-xl {
  max-width: var(--container-xl);
}
```

### Content Width Guidelines

**Optimal Reading Width:**
- **Text-heavy content:** 640-768px (sm-md)
- **Mixed content:** 768-1024px (md-lg)
- **Application layouts:** 1024-1280px (lg-xl)
- **Data dashboards:** 1280-1440px (xl-2xl)

## Component Spacing

Component-specific spacing tokens ensure consistency across similar UI elements.

### Button Spacing

| Size | Horizontal Padding | Vertical Padding | Usage |
|------|-------------------|------------------|--------|
| Small | `0.75rem` (12px) | `0.5rem` (8px) | Compact UIs, tables |
| Medium | `1rem` (16px) | `0.625rem` (10px) | **Default** buttons |
| Large | `1.5rem` (24px) | `0.75rem` (12px) | Primary CTAs, hero sections |

```css
.button-sm {
  padding: var(--button-padding-y-sm) var(--button-padding-x-sm);
}

.button-md {
  padding: var(--button-padding-y-md) var(--button-padding-x-md);
}

.button-lg {
  padding: var(--button-padding-y-lg) var(--button-padding-x-lg);
}
```

### Card Spacing

| Size | Padding | Gap | Usage |
|------|---------|-----|--------|
| Small | `1rem` (16px) | `1rem` (16px) | Compact cards, mobile |
| Medium | `1.5rem` (24px) | `1rem` (16px) | **Default** cards |
| Large | `2rem` (32px) | `1rem` (16px) | Feature cards, highlights |

```css
.card {
  padding: var(--card-padding-md);
}

.card > * + * {
  margin-top: var(--card-gap);
}
```

### Form Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `form.fieldGap` | `1rem` (16px) | Space between form fields |
| `form.labelGap` | `0.5rem` (8px) | Space between label and input |
| `form.inputPadding` | `0.75rem` (12px) | Internal input padding |

```css
.form-field + .form-field {
  margin-top: var(--form-field-gap);
}

.form-label {
  margin-bottom: var(--form-label-gap);
}

.form-input {
  padding: var(--form-input-padding);
}
```

## Spacing Guidelines

### Vertical Rhythm

Maintain consistent vertical spacing throughout your layouts:

**Micro Spacing (within components):**
- `spacing.1-2`: Icon-to-text, inline elements
- `spacing.3-4`: Form field elements, list items
- `spacing.4-6`: Card content, component internals

**Macro Spacing (between components):**
- `spacing.6-8`: Related components, card spacing
- `spacing.10-12`: Section spacing within a page
- `spacing.16-24`: Major page sections
- `spacing.32`: Hero sections, page separations

### Horizontal Spacing

**Inline Elements:**
```css
.inline-group > * + * {
  margin-left: var(--spacing-2); /* 8px */
}
```

**Grid Gaps:**
```css
.grid {
  gap: var(--spacing-6); /* 24px */
}

.grid-tight {
  gap: var(--spacing-4); /* 16px */
}

.grid-loose {
  gap: var(--spacing-8); /* 32px */
}
```

### Component Spacing Patterns

**Stack Pattern (Vertical):**
```css
.stack > * + * {
  margin-top: var(--spacing-4);
}

.stack-sm > * + * {
  margin-top: var(--spacing-2);
}

.stack-lg > * + * {
  margin-top: var(--spacing-8);
}
```

**Cluster Pattern (Horizontal):**
```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-4);
}
```

**Grid Pattern:**
```css
.grid {
  display: grid;
  gap: var(--spacing-6);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

## Responsive Spacing

Adjust spacing based on screen size for optimal use of space.

### Mobile-First Approach

```css
.section {
  padding: var(--spacing-8) var(--spacing-4);
}

@media (min-width: 768px) {
  .section {
    padding: var(--spacing-12) var(--spacing-6);
  }
}

@media (min-width: 1024px) {
  .section {
    padding: var(--spacing-16) var(--spacing-8);
  }
}
```

### Responsive Stack

```css
.responsive-stack > * + * {
  margin-top: var(--spacing-4);
}

@media (min-width: 768px) {
  .responsive-stack > * + * {
    margin-top: var(--spacing-6);
  }
}

@media (min-width: 1024px) {
  .responsive-stack > * + * {
    margin-top: var(--spacing-8);
  }
}
```

### Responsive Container Padding

```css
.container {
  padding-inline: var(--spacing-4); /* 16px on mobile */
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--spacing-6); /* 24px on tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding-inline: var(--spacing-8); /* 32px on desktop */
  }
}
```

## Usage Examples

### CSS Variables

```css
:root {
  /* Base Spacing */
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-32: 8rem;
  
  /* Container Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;
  
  /* Component Spacing */
  --button-padding-x-sm: 0.75rem;
  --button-padding-y-sm: 0.5rem;
  --button-padding-x-md: 1rem;
  --button-padding-y-md: 0.625rem;
  --button-padding-x-lg: 1.5rem;
  --button-padding-y-lg: 0.75rem;
  
  --card-padding-sm: 1rem;
  --card-padding-md: 1.5rem;
  --card-padding-lg: 2rem;
  --card-gap: 1rem;
  
  --form-field-gap: 1rem;
  --form-label-gap: 0.5rem;
  --form-input-padding: 0.75rem;
}
```

### Page Layout Example

```html
<div class="page">
  <header class="page-header">
    <!-- Header content with spacing-6 padding -->
  </header>
  
  <main class="page-main">
    <section class="hero">
      <!-- Hero with spacing-32 vertical padding -->
    </section>
    
    <section class="features">
      <!-- Features with spacing-16 vertical padding -->
      <div class="container">
        <div class="feature-grid">
          <!-- Grid with spacing-8 gap -->
        </div>
      </div>
    </section>
    
    <section class="content">
      <!-- Content with spacing-12 vertical padding -->
      <div class="container-md">
        <!-- Readable content width -->
      </div>
    </section>
  </main>
  
  <footer class="page-footer">
    <!-- Footer with spacing-8 padding -->
  </footer>
</div>
```

```css
.page-header {
  padding: var(--spacing-6) var(--spacing-4);
}

.hero {
  padding: var(--spacing-32) var(--spacing-4);
}

.features {
  padding: var(--spacing-16) var(--spacing-4);
}

.feature-grid {
  display: grid;
  gap: var(--spacing-8);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.content {
  padding: var(--spacing-12) var(--spacing-4);
}

.page-footer {
  padding: var(--spacing-8) var(--spacing-4);
}
```

### Card Component Example

```html
<div class="card">
  <img src="image.jpg" alt="Card image" class="card-image">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Card description text...</p>
    <button class="card-button">Learn More</button>
  </div>
</div>
```

```css
.card {
  padding: var(--card-padding-md);
  border-radius: var(--spacing-2);
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-image {
  margin: calc(var(--card-padding-md) * -1);
  margin-bottom: var(--spacing-4);
  width: calc(100% + var(--card-padding-md) * 2);
}

.card-body > * + * {
  margin-top: var(--card-gap);
}

.card-title {
  margin: 0;
}

.card-description {
  margin: 0;
}
```

### Form Example

```html
<form class="form">
  <div class="form-field">
    <label class="form-label">Email</label>
    <input type="email" class="form-input">
  </div>
  
  <div class="form-field">
    <label class="form-label">Password</label>
    <input type="password" class="form-input">
  </div>
  
  <button type="submit" class="form-submit">Sign In</button>
</form>
```

```css
.form-field + .form-field {
  margin-top: var(--form-field-gap);
}

.form-label {
  display: block;
  margin-bottom: var(--form-label-gap);
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: var(--form-input-padding);
  border: 1px solid var(--color-border-default);
  border-radius: var(--spacing-1);
}

.form-submit {
  margin-top: var(--spacing-6);
  padding: var(--button-padding-y-md) var(--button-padding-x-md);
}
```

### React/TypeScript Example

```tsx
import { tokens } from '@education-design/tokens';

interface StackProps {
  spacing?: keyof typeof tokens.spacing;
  children: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({ 
  spacing = '4', 
  children 
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing[spacing],
      }}
    >
      {children}
    </div>
  );
};

// Usage
<Stack spacing="6">
  <Card>Content 1</Card>
  <Card>Content 2</Card>
  <Card>Content 3</Card>
</Stack>
```

### Tailwind-Style Utilities

```css
/* Margin utilities */
.m-0 { margin: var(--spacing-0); }
.m-1 { margin: var(--spacing-1); }
.m-2 { margin: var(--spacing-2); }
.m-4 { margin: var(--spacing-4); }
.m-8 { margin: var(--spacing-8); }

/* Padding utilities */
.p-0 { padding: var(--spacing-0); }
.p-1 { padding: var(--spacing-1); }
.p-2 { padding: var(--spacing-2); }
.p-4 { padding: var(--spacing-4); }
.p-8 { padding: var(--spacing-8); }

/* Gap utilities */
.gap-0 { gap: var(--spacing-0); }
.gap-1 { gap: var(--spacing-1); }
.gap-2 { gap: var(--spacing-2); }
.gap-4 { gap: var(--spacing-4); }
.gap-8 { gap: var(--spacing-8); }

/* Directional spacing */
.mt-4 { margin-top: var(--spacing-4); }
.mb-4 { margin-bottom: var(--spacing-4); }
.ml-4 { margin-left: var(--spacing-4); }
.mr-4 { margin-right: var(--spacing-4); }

.pt-4 { padding-top: var(--spacing-4); }
.pb-4 { padding-bottom: var(--spacing-4); }
.pl-4 { padding-left: var(--spacing-4); }
.pr-4 { padding-right: var(--spacing-4); }
```

## Best Practices

### Do's ✅

1. **Use spacing tokens** instead of arbitrary values
2. **Maintain consistent vertical rhythm** throughout your layouts
3. **Scale spacing responsively** for different screen sizes
4. **Use larger spacing** to separate unrelated content
5. **Use smaller spacing** for related content grouping
6. **Apply spacing to containers** rather than individual elements when possible
7. **Use the 4px base unit** for custom spacing needs
8. **Consider touch targets** (minimum 44px) for interactive elements
9. **Test spacing** at different viewport sizes
10. **Document custom spacing** if deviating from the system

### Don'ts ❌

1. **Don't use arbitrary values** like `15px` or `23px`
2. **Don't create visual clutter** with insufficient spacing
3. **Don't use excessive spacing** that wastes screen real estate
4. **Don't forget mobile spacing** - test on small screens
5. **Don't mix spacing units** - stick to rem for consistency
6. **Don't ignore accessibility** - ensure adequate touch target sizes
7. **Don't use negative margins** excessively - they can cause layout issues
8. **Don't override component spacing** without good reason
9. **Don't forget to scale spacing** responsively
10. **Don't create orphan elements** with unbalanced spacing

### Spacing Decision Tree

```
Is the content related?
├─ Yes → Use smaller spacing (spacing-2 to spacing-4)
└─ No → Use larger spacing (spacing-6 to spacing-12)

Is this a major page section?
├─ Yes → Use large spacing (spacing-16 to spacing-32)
└─ No → Use moderate spacing (spacing-8 to spacing-12)

Is this mobile viewport?
├─ Yes → Use compact spacing (spacing-4 to spacing-8)
└─ No → Use comfortable spacing (spacing-6 to spacing-16)

Is this interactive element?
├─ Yes → Ensure minimum 44px touch target
└─ No → Use semantic spacing based on context
```

### Common Spacing Patterns

**Card List:**
```css
.card-list {
  display: grid;
  gap: var(--spacing-6);
}
```

**Navigation Menu:**
```css
.nav-menu {
  display: flex;
  gap: var(--spacing-8);
}
```

**Form Layout:**
```css
.form > * + * {
  margin-top: var(--form-field-gap);
}
```

**Content Sections:**
```css
.section + .section {
  margin-top: var(--spacing-16);
}
```

**Inline Elements:**
```css
.inline-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}
```

## Accessibility Considerations

### Touch Targets

Ensure interactive elements meet minimum touch target sizes:

```css
.button,
.link,
.input {
  min-height: 44px; /* WCAG 2.1 AAA: 44x44px */
  min-width: 44px;
}
```

### Focus States

Provide adequate spacing around focus indicators:

```css
.focusable:focus {
  outline: 2px solid var(--color-focus);
  outline-offset: var(--spacing-1); /* 4px offset */
}
```

### Content Spacing

Maintain adequate spacing for readability:

- **Paragraph spacing:** `spacing-4` (16px) minimum
- **Section spacing:** `spacing-12` (48px) minimum
- **Heading spacing:** `spacing-6` (24px) after headings

---

**Related Documentation:**
- [Color System](./colors.md)
- [Typography System](./typography.md)
- [Grid System](./grid-system.md)
- [Component Library](../../components/README.md)
