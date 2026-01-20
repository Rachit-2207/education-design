# Grid System

The Education Design System provides a flexible, responsive grid system for creating consistent and adaptable layouts across all screen sizes.

## Table of Contents

- [Grid Fundamentals](#grid-fundamentals)
- [Breakpoints](#breakpoints)
- [Grid Structure](#grid-structure)
- [Column System](#column-system)
- [Gutters](#gutters)
- [Layout Patterns](#layout-patterns)
- [Responsive Behavior](#responsive-behavior)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)

## Grid Fundamentals

### Core Concepts

The grid system is built on three key concepts:

1. **Containers:** Constrain content to maximum widths and provide consistent padding
2. **Rows:** Horizontal groups that contain columns
3. **Columns:** Vertical divisions that contain your content

### Grid Anatomy

```
┌─────────────────── Container ────────────────────┐
│  ┌─────────────── Content Area ───────────────┐  │
│  │                                             │  │
│  │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  │  │
│  │  │Col 1 │  │Col 2 │  │Col 3 │  │Col 4 │  │  │ ← Row
│  │  └──────┘  └──────┘  └──────┘  └──────┘  │  │
│  │     ↑          ↑          ↑         ↑     │  │
│  │   Gutter    Gutter    Gutter    Gutter   │  │
│  │                                             │  │
│  └─────────────────────────────────────────────┘  │
│  ↑                                             ↑   │
│ Padding                                   Padding │
└───────────────────────────────────────────────────┘
```

## Breakpoints

The grid system uses four responsive breakpoints based on common device sizes.

### Breakpoint Tokens

| Breakpoint | Token | Min Width | Max Width | Target Devices |
|------------|-------|-----------|-----------|----------------|
| Mobile | `mobile` | 320px | 767px | Phones |
| Tablet | `tablet` | 768px | 1023px | Tablets, small laptops |
| Desktop | `desktop` | 1024px | 1439px | Laptops, desktops |
| Wide | `wide` | 1440px+ | - | Large desktops, monitors |

### Media Queries

```json
{
  "mobile": "@media (max-width: 767px)",
  "tablet": "@media (min-width: 768px) and (max-width: 1023px)",
  "desktop": "@media (min-width: 1024px) and (max-width: 1439px)",
  "wide": "@media (min-width: 1440px)",
  "tabletUp": "@media (min-width: 768px)",
  "desktopUp": "@media (min-width: 1024px)"
}
```

### Usage in CSS

```css
/* Mobile-first approach (recommended) */
.element {
  width: 100%;
}

@media (min-width: 768px) {
  .element {
    width: 50%;
  }
}

@media (min-width: 1024px) {
  .element {
    width: 33.333%;
  }
}
```

## Grid Structure

### Default Grid Configuration

| Breakpoint | Columns | Container Width | Gutter | Margin |
|------------|---------|----------------|--------|--------|
| Mobile | 4 | 100% | 16px | 16px |
| Tablet | 8 | 768px | 24px | 24px |
| Desktop | 12 | 1024px | 24px | 32px |
| Wide | 12 | 1440px | 32px | 32px |

### Container Behavior

Containers center content and provide maximum widths:

```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
}

/* Mobile */
.container {
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Wide */
@media (min-width: 1440px) {
  .container {
    max-width: 1440px;
  }
}
```

## Column System

### 12-Column Grid

The standard desktop grid uses 12 columns, providing maximum flexibility:

```
┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
│ 1│ 2│ 3│ 4│ 5│ 6│ 7│ 8│ 9│10│11│12│
└──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘
```

**Common Layouts:**
- **Halves:** 6 + 6 columns
- **Thirds:** 4 + 4 + 4 columns
- **Quarters:** 3 + 3 + 3 + 3 columns
- **Sidebar + Content:** 3 + 9 or 4 + 8 columns

### Mobile Grid (4 Columns)

On mobile devices, the grid collapses to 4 columns:

```
┌─────┬─────┬─────┬─────┐
│  1  │  2  │  3  │  4  │
└─────┴─────┴─────┴─────┘
```

**Common Mobile Layouts:**
- **Full width:** 4 columns
- **Half width:** 2 + 2 columns
- **Stacked:** Items stack vertically

### Tablet Grid (8 Columns)

Tablets use an 8-column grid:

```
┌───┬───┬───┬───┬───┬───┬───┬───┐
│ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │
└───┴───┴───┴───┴───┴───┴───┴───┘
```

**Common Tablet Layouts:**
- **Halves:** 4 + 4 columns
- **Thirds:** 2.67 + 2.67 + 2.67 (approximate)
- **Sidebar:** 2 + 6 or 3 + 5 columns

### Column Classes

```css
/* Column widths */
.col-1 { width: 8.333%; }   /* 1/12 */
.col-2 { width: 16.666%; }  /* 2/12 */
.col-3 { width: 25%; }      /* 3/12 */
.col-4 { width: 33.333%; }  /* 4/12 */
.col-5 { width: 41.666%; }  /* 5/12 */
.col-6 { width: 50%; }      /* 6/12 */
.col-7 { width: 58.333%; }  /* 7/12 */
.col-8 { width: 66.666%; }  /* 8/12 */
.col-9 { width: 75%; }      /* 9/12 */
.col-10 { width: 83.333%; } /* 10/12 */
.col-11 { width: 91.666%; } /* 11/12 */
.col-12 { width: 100%; }    /* 12/12 */
```

## Gutters

Gutters are the spaces between columns that provide visual separation.

### Gutter Sizes

| Breakpoint | Gutter Size | Token |
|------------|-------------|-------|
| Mobile | 16px | `spacing-4` |
| Tablet | 24px | `spacing-6` |
| Desktop | 24px | `spacing-6` |
| Wide | 32px | `spacing-8` |

### Gutter Implementation

**Using CSS Grid:**
```css
.grid {
  display: grid;
  gap: var(--gutter);
}

/* Mobile */
.grid {
  --gutter: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .grid {
    --gutter: 1.5rem;
  }
}

/* Wide */
@media (min-width: 1440px) {
  .grid {
    --gutter: 2rem;
  }
}
```

**Using Flexbox:**
```css
.row {
  display: flex;
  margin-left: calc(var(--gutter) * -0.5);
  margin-right: calc(var(--gutter) * -0.5);
}

.col {
  padding-left: calc(var(--gutter) * 0.5);
  padding-right: calc(var(--gutter) * 0.5);
}
```

### No Gutters

Remove gutters when needed for edge-to-edge layouts:

```css
.row-no-gutters {
  margin-left: 0;
  margin-right: 0;
}

.row-no-gutters > .col {
  padding-left: 0;
  padding-right: 0;
}
```

## Layout Patterns

### Content + Sidebar

Classic two-column layout with main content and sidebar:

```html
<div class="container">
  <div class="grid grid-sidebar">
    <aside class="sidebar">
      <!-- Sidebar content -->
    </aside>
    <main class="content">
      <!-- Main content -->
    </main>
  </div>
</div>
```

```css
.grid-sidebar {
  display: grid;
  gap: var(--spacing-6);
}

/* Mobile: Stack vertically */
.grid-sidebar {
  grid-template-columns: 1fr;
}

/* Tablet and up: Sidebar + Content */
@media (min-width: 768px) {
  .grid-sidebar {
    grid-template-columns: 250px 1fr;
  }
}

/* Desktop: Wider sidebar */
@media (min-width: 1024px) {
  .grid-sidebar {
    grid-template-columns: 300px 1fr;
  }
}
```

### Card Grid

Responsive grid for cards, products, or items:

```html
<div class="container">
  <div class="card-grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
  </div>
</div>
```

```css
.card-grid {
  display: grid;
  gap: var(--spacing-6);
}

/* Mobile: 1 column */
.card-grid {
  grid-template-columns: 1fr;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Wide: 4 columns */
@media (min-width: 1440px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Auto-Fit Grid

Grid that automatically adjusts column count based on available space:

```css
.auto-grid {
  display: grid;
  gap: var(--spacing-6);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

### Holy Grail Layout

Classic header, footer, sidebar, and content layout:

```html
<div class="holy-grail">
  <header class="header">Header</header>
  <aside class="sidebar-left">Left Sidebar</aside>
  <main class="main-content">Main Content</main>
  <aside class="sidebar-right">Right Sidebar</aside>
  <footer class="footer">Footer</footer>
</div>
```

```css
.holy-grail {
  display: grid;
  min-height: 100vh;
  gap: var(--spacing-6);
}

/* Mobile: Stack vertically */
.holy-grail {
  grid-template-areas:
    "header"
    "content"
    "sidebar-left"
    "sidebar-right"
    "footer";
  grid-template-columns: 1fr;
}

/* Desktop: Full layout */
@media (min-width: 1024px) {
  .holy-grail {
    grid-template-areas:
      "header header header"
      "sidebar-left content sidebar-right"
      "footer footer footer";
    grid-template-columns: 250px 1fr 250px;
    grid-template-rows: auto 1fr auto;
  }
}

.header { grid-area: header; }
.sidebar-left { grid-area: sidebar-left; }
.main-content { grid-area: content; }
.sidebar-right { grid-area: sidebar-right; }
.footer { grid-area: footer; }
```

### Dashboard Layout

Multi-widget dashboard with flexible sizing:

```css
.dashboard {
  display: grid;
  gap: var(--spacing-6);
}

/* Mobile: Single column */
.dashboard {
  grid-template-columns: 1fr;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .dashboard {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .widget-large {
    grid-column: span 2;
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .dashboard {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .widget-large {
    grid-column: span 2;
  }
  
  .widget-full {
    grid-column: span 3;
  }
}
```

## Responsive Behavior

### Mobile-First Approach

Always design for mobile first, then enhance for larger screens:

```css
/* Base styles (mobile) */
.element {
  font-size: 1rem;
  padding: 1rem;
}

/* Tablet enhancements */
@media (min-width: 768px) {
  .element {
    font-size: 1.125rem;
    padding: 1.5rem;
  }
}

/* Desktop enhancements */
@media (min-width: 1024px) {
  .element {
    font-size: 1.25rem;
    padding: 2rem;
  }
}
```

### Responsive Column Classes

```css
/* Mobile: Full width by default */
.col-mobile-4 { width: 100%; }

/* Tablet: Responsive classes */
@media (min-width: 768px) {
  .col-tablet-2 { width: 25%; }    /* 2/8 */
  .col-tablet-4 { width: 50%; }    /* 4/8 */
  .col-tablet-6 { width: 75%; }    /* 6/8 */
  .col-tablet-8 { width: 100%; }   /* 8/8 */
}

/* Desktop: Responsive classes */
@media (min-width: 1024px) {
  .col-desktop-3 { width: 25%; }   /* 3/12 */
  .col-desktop-4 { width: 33.333%; } /* 4/12 */
  .col-desktop-6 { width: 50%; }   /* 6/12 */
  .col-desktop-8 { width: 66.666%; } /* 8/12 */
  .col-desktop-12 { width: 100%; } /* 12/12 */
}
```

### Hide/Show by Breakpoint

```css
/* Hidden on mobile */
.hide-mobile {
  display: none;
}

@media (min-width: 768px) {
  .hide-mobile {
    display: block;
  }
}

/* Visible only on mobile */
.show-mobile {
  display: block;
}

@media (min-width: 768px) {
  .show-mobile {
    display: none;
  }
}

/* Hidden on tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .hide-tablet {
    display: none;
  }
}
```

## Usage Examples

### CSS Grid System

```css
:root {
  /* Grid variables */
  --grid-columns: 12;
  --grid-gutter: 1.5rem;
  --container-padding: 1rem;
}

.container {
  max-width: var(--container-lg);
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

.grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gutter);
}

.col-span-3 { grid-column: span 3; }
.col-span-4 { grid-column: span 4; }
.col-span-6 { grid-column: span 6; }
.col-span-12 { grid-column: span 12; }
```

### Flexbox Grid System

```css
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}

.col {
  flex: 1 0 0%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
```

### React Grid Component

```tsx
interface GridProps {
  columns?: number;
  gap?: number;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ 
  columns = 12, 
  gap = 24, 
  children 
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
};

interface ColProps {
  span?: number;
  spanMobile?: number;
  spanTablet?: number;
  spanDesktop?: number;
  children: React.ReactNode;
}

const Col: React.FC<ColProps> = ({ 
  span = 12,
  spanMobile,
  spanTablet,
  spanDesktop,
  children 
}) => {
  return (
    <div
      style={{
        gridColumn: `span ${span}`,
      }}
      className={`
        ${spanMobile ? `col-mobile-${spanMobile}` : ''}
        ${spanTablet ? `col-tablet-${spanTablet}` : ''}
        ${spanDesktop ? `col-desktop-${spanDesktop}` : ''}
      `}
    >
      {children}
    </div>
  );
};

// Usage
<Grid columns={12} gap={24}>
  <Col span={12} spanTablet={6} spanDesktop={4}>
    Column 1
  </Col>
  <Col span={12} spanTablet={6} spanDesktop={4}>
    Column 2
  </Col>
  <Col span={12} spanTablet={12} spanDesktop={4}>
    Column 3
  </Col>
</Grid>
```

### Practical Layout Example

```html
<div class="page">
  <!-- Header -->
  <header class="container">
    <div class="grid">
      <div class="col-span-12">
        <!-- Navigation -->
      </div>
    </div>
  </header>
  
  <!-- Main Content Area -->
  <main class="container">
    <div class="grid">
      <!-- Sidebar: 3 columns on desktop, full width on mobile -->
      <aside class="col-span-12 col-desktop-3">
        <!-- Sidebar content -->
      </aside>
      
      <!-- Main content: 9 columns on desktop, full width on mobile -->
      <article class="col-span-12 col-desktop-9">
        <!-- Article content -->
        
        <!-- Featured cards: 3 cards, responsive -->
        <div class="card-grid">
          <div class="card">Card 1</div>
          <div class="card">Card 2</div>
          <div class="card">Card 3</div>
        </div>
      </article>
    </div>
  </main>
  
  <!-- Footer -->
  <footer class="container">
    <div class="grid">
      <div class="col-span-12">
        <!-- Footer content -->
      </div>
    </div>
  </footer>
</div>
```

## Best Practices

### Do's ✅

1. **Use mobile-first approach** for responsive design
2. **Use semantic HTML** with grid classes
3. **Test at all breakpoints** during development
4. **Use consistent gutters** throughout your design
5. **Leverage CSS Grid** for modern layouts
6. **Consider content hierarchy** when choosing columns
7. **Use containers** to constrain maximum width
8. **Align to grid** for visual consistency
9. **Plan for content expansion** in grid cells
10. **Document custom grid patterns** for your team

### Don'ts ❌

1. **Don't nest grids excessively** - keep it simple
2. **Don't use fixed pixel widths** - use percentages or fr units
3. **Don't ignore mobile layouts** - mobile traffic is significant
4. **Don't overcomplicate** with too many columns
5. **Don't forget about content overflow** at small sizes
6. **Don't use inconsistent gutters** without reason
7. **Don't rely solely on grid** - combine with flexbox when appropriate
8. **Don't forget about accessibility** - maintain logical tab order
9. **Don't use grid for everything** - sometimes simpler solutions work better
10. **Don't create unmaintainable custom grids** - stick to the system

### Grid Selection Guide

**Use CSS Grid when:**
- Creating two-dimensional layouts
- You need precise control over rows and columns
- Items need to span multiple columns/rows
- Creating dashboard or card layouts

**Use Flexbox when:**
- Creating one-dimensional layouts
- You need flexible, content-based sizing
- Creating navigation menus or toolbars
- Items should wrap dynamically

**Use Simple Block when:**
- Content is naturally full-width
- Layout is straightforward vertical stacking
- Simplicity is more important than grid alignment

---

**Related Documentation:**
- [Spacing System](./spacing.md)
- [Breakpoints Token](../../design-system/tokens/breakpoints.json)
- [Layout Patterns](../../patterns/README.md)
- [Component Library](../../components/README.md)
- [Responsive Design Guidelines](../../documentation/responsive.md)
