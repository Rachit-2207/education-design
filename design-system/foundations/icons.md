# Icon System

The Education Design System icon guidelines ensure consistent, accessible, and scalable iconography across all applications.

## Table of Contents

- [Icon Principles](#icon-principles)
- [Icon Sizes](#icon-sizes)
- [Icon Colors](#icon-colors)
- [Icon Libraries](#icon-libraries)
- [Accessibility](#accessibility)
- [Usage Guidelines](#usage-guidelines)
- [Implementation Examples](#implementation-examples)
- [Best Practices](#best-practices)

## Icon Principles

### Design Principles

1. **Simple:** Icons should be easily recognizable and understandable at small sizes
2. **Consistent:** Maintain consistent stroke width, corner radius, and visual weight
3. **Universal:** Use widely recognized metaphors and avoid culture-specific symbols
4. **Scalable:** Icons must work clearly at all sizes from 12px to 64px
5. **Accessible:** Icons must be perceivable by all users, including those using assistive technologies

### Visual Characteristics

- **Stroke Width:** 2px at 24px base size (8.33% of icon size)
- **Corner Radius:** 2px for consistency with UI elements
- **Optical Balance:** Visual weight should be balanced, not necessarily mathematically centered
- **Grid System:** Based on 24×24px grid with 2px padding
- **View Box:** Use `0 0 24 24` as standard viewBox for SVG icons

## Icon Sizes

The icon system uses a consistent sizing scale aligned with the spacing system.

### Standard Sizes

| Token | Size | Pixels | Usage |
|-------|------|--------|--------|
| `icon.xs` | `0.75rem` | 12px | Inline text icons, status indicators |
| `icon.sm` | `1rem` | 16px | Small buttons, compact UIs, table icons |
| `icon.base` | `1.5rem` | 24px | **Default** - buttons, navigation, forms |
| `icon.lg` | `2rem` | 32px | Large buttons, feature highlights |
| `icon.xl` | `3rem` | 48px | Hero sections, empty states |
| `icon.2xl` | `4rem` | 64px | Large feature illustrations |

### Size Guidelines

**Extra Small (12px):**
- Use inline with small text (12-14px)
- Status indicators, badges
- Minimum for interactive icons

**Small (16px):**
- Use with body text (14-16px)
- Compact table views
- Dense information displays

**Base (24px):**
- Primary button icons
- Navigation menus
- Form field icons
- Standard UI interactions

**Large (32px):**
- Primary action buttons
- Tab bar icons
- Feature cards

**Extra Large (48px+):**
- Empty states
- Onboarding illustrations
- Feature highlights
- Non-interactive decorative icons

## Icon Colors

Icons should use semantic color tokens to maintain consistency and accessibility.

### Default Colors

```css
/* Light Mode */
--icon-color-primary: var(--color-text-primary);     /* #111827 */
--icon-color-secondary: var(--color-text-secondary); /* #4B5563 */
--icon-color-tertiary: var(--color-text-tertiary);   /* #9CA3AF */
--icon-color-inverse: var(--color-text-inverse);     /* #FFFFFF */

/* Dark Mode */
[data-theme="dark"] {
  --icon-color-primary: var(--color-text-dark-primary);     /* #F9FAFB */
  --icon-color-secondary: var(--color-text-dark-secondary); /* #D1D5DB */
  --icon-color-tertiary: var(--color-text-dark-tertiary);   /* #9CA3AF */
  --icon-color-inverse: var(--color-text-dark-inverse);     /* #111827 */
}
```

### Semantic Colors

Use semantic colors to convey meaning:

```css
--icon-color-success: var(--color-semantic-success-default); /* #10B981 */
--icon-color-warning: var(--color-semantic-warning-default); /* #F59E0B */
--icon-color-error: var(--color-semantic-error-default);     /* #EF4444 */
--icon-color-info: var(--color-semantic-info-default);       /* #3B82F6 */
```

### Interactive States

```css
.icon-button {
  color: var(--icon-color-secondary);
  transition: color 0.2s ease;
}

.icon-button:hover {
  color: var(--icon-color-primary);
}

.icon-button:active {
  color: var(--color-primary-700);
}

.icon-button:disabled {
  color: var(--icon-color-tertiary);
  opacity: 0.5;
}
```

### Brand Colors

```css
--icon-color-brand: var(--color-primary-500);      /* #3B82F6 */
--icon-color-brand-light: var(--color-primary-300); /* #93C5FD */
--icon-color-brand-dark: var(--color-primary-700);  /* #1D4ED8 */
```

## Icon Libraries

### Recommended Icon Sets

The Education Design System recommends these icon libraries for consistency:

#### 1. Heroicons (Primary)

**Recommended for:** UI icons, navigation, actions

- **Website:** https://heroicons.com
- **Style:** Outline and solid variants
- **License:** MIT
- **Sizes:** 20px and 24px optimized

```bash
npm install @heroicons/react
```

**Usage:**
```jsx
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { AcademicCapIcon as AcademicCapSolid } from '@heroicons/react/24/solid';
```

#### 2. Lucide Icons (Alternative)

**Recommended for:** Additional icons, specialized use cases

- **Website:** https://lucide.dev
- **Style:** Consistent stroke-based design
- **License:** ISC
- **Customizable:** Stroke width, size, color

```bash
npm install lucide-react
```

#### 3. Feather Icons (Legacy Support)

**Recommended for:** Simple, minimalist icons

- **Website:** https://feathericons.com
- **Style:** Clean, minimal stroke icons
- **License:** MIT

### Custom Icons

When creating custom icons:

1. **Use SVG format** for scalability
2. **Maintain 24×24px grid** with 2px padding
3. **Use 2px stroke width** for consistency
4. **Export with viewBox="0 0 24 24"**
5. **Remove unnecessary metadata** from SVG
6. **Use semantic naming** (e.g., `icon-calendar.svg`)

## Accessibility

### Text Alternatives

Always provide text alternatives for icons:

#### Decorative Icons

Icons that are purely decorative should be hidden from screen readers:

```html
<svg aria-hidden="true" focusable="false">
  <!-- icon path -->
</svg>
```

```jsx
<Icon aria-hidden="true" />
```

#### Meaningful Icons

Icons that convey meaning must have accessible text:

**With visible text:**
```html
<button>
  <svg aria-hidden="true"><!-- icon --></svg>
  <span>Save</span>
</button>
```

**Without visible text:**
```html
<button aria-label="Save">
  <svg aria-hidden="true"><!-- icon --></svg>
</button>
```

```jsx
<IconButton icon={SaveIcon} aria-label="Save document" />
```

#### Status Icons

Icons indicating status need clear alternatives:

```html
<!-- Success indicator -->
<span role="img" aria-label="Success">
  <svg><!-- checkmark icon --></svg>
</span>

<!-- Error indicator -->
<span role="img" aria-label="Error">
  <svg><!-- error icon --></svg>
</span>
```

### Color Contrast

Ensure icon colors meet WCAG contrast requirements:

- **Minimum contrast:** 3:1 against background (WCAG AA)
- **Enhanced contrast:** 4.5:1 for critical icons (WCAG AAA)

```css
/* Ensure sufficient contrast */
.icon-primary {
  color: var(--color-text-primary); /* 16.8:1 on white */
}

.icon-on-brand {
  color: white; /* 4.5:1 minimum on primary-500 */
}
```

### Touch Targets

Icons in interactive elements must meet minimum touch target sizes:

```css
.icon-button {
  /* Icon size */
  width: 1.5rem;
  height: 1.5rem;
  
  /* Padding to reach 44px minimum */
  padding: 0.625rem; /* (44px - 24px) / 2 */
  
  /* Total: 44px × 44px */
}
```

### Focus Indicators

Interactive icons need visible focus indicators:

```css
.icon-button:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  border-radius: 0.25rem;
}
```

## Usage Guidelines

### Icon Placement

#### Buttons

```html
<!-- Icon + Text (Recommended) -->
<button class="button">
  <svg class="icon-sm"><!-- icon --></svg>
  <span>Save Document</span>
</button>

<!-- Icon Only (Use with aria-label) -->
<button class="icon-button" aria-label="Save document">
  <svg class="icon-base"><!-- icon --></svg>
</button>

<!-- Text + Icon (Trailing) -->
<button class="button">
  <span>Next Step</span>
  <svg class="icon-sm"><!-- arrow icon --></svg>
</button>
```

#### Form Fields

```html
<!-- Leading Icon -->
<div class="input-group">
  <svg class="icon-base input-icon-leading"><!-- search icon --></svg>
  <input type="search" placeholder="Search...">
</div>

<!-- Trailing Icon -->
<div class="input-group">
  <input type="password" placeholder="Password">
  <button type="button" class="input-icon-trailing" aria-label="Show password">
    <svg class="icon-base"><!-- eye icon --></svg>
  </button>
</div>
```

#### Navigation

```html
<nav class="navigation">
  <a href="/dashboard" class="nav-item">
    <svg class="icon-base"><!-- dashboard icon --></svg>
    <span>Dashboard</span>
  </a>
  <a href="/courses" class="nav-item">
    <svg class="icon-base"><!-- book icon --></svg>
    <span>Courses</span>
  </a>
</nav>
```

#### Lists

```html
<ul class="icon-list">
  <li>
    <svg class="icon-sm"><!-- checkmark --></svg>
    <span>Feature included</span>
  </li>
  <li>
    <svg class="icon-sm"><!-- checkmark --></svg>
    <span>Another feature</span>
  </li>
</ul>
```

### Icon Variants

#### Outline vs. Solid

**Outline (Default):**
- Use for most UI elements
- Better for smaller sizes
- Lighter visual weight
- Preferred for navigation

**Solid (Emphasis):**
- Use for active/selected states
- Better for status indicators
- Stronger visual weight
- Use sparingly for emphasis

```jsx
// Default state
<Icon icon={HeartOutline} />

// Active state
<Icon icon={HeartSolid} />
```

### Icon Animations

Use animations sparingly and meaningfully:

```css
/* Loading spinner */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.icon-loading {
  animation: spin 1s linear infinite;
}

/* Success checkmark */
@keyframes check {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.icon-success {
  animation: check 0.3s ease-out;
}
```

## Implementation Examples

### CSS

```css
.icon {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  stroke-width: 2;
  stroke: currentColor;
  fill: none;
  vertical-align: middle;
}

.icon-xs { width: 0.75rem; height: 0.75rem; }
.icon-sm { width: 1rem; height: 1rem; }
.icon-base { width: 1.5rem; height: 1.5rem; }
.icon-lg { width: 2rem; height: 2rem; }
.icon-xl { width: 3rem; height: 3rem; }

.icon-primary { color: var(--icon-color-primary); }
.icon-secondary { color: var(--icon-color-secondary); }
.icon-success { color: var(--icon-color-success); }
.icon-warning { color: var(--icon-color-warning); }
.icon-error { color: var(--icon-color-error); }
```

### React Component

```tsx
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

const sizeMap = {
  xs: '0.75rem',
  sm: '1rem',
  base: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
};

const Icon: React.FC<IconProps> = ({ 
  icon: IconComponent,
  size = 'base',
  color,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props 
}) => {
  const sizeValue = sizeMap[size];
  
  return (
    <IconComponent
      width={sizeValue}
      height={sizeValue}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden ?? !ariaLabel}
      className={color ? `icon-${color}` : undefined}
      {...props}
    />
  );
};

// Usage
import { AcademicCapIcon } from '@heroicons/react/24/outline';

<Icon icon={AcademicCapIcon} size="lg" aria-label="Academic" />
<Icon icon={CheckIcon} size="sm" color="success" aria-hidden />
```

### Icon Button Component

```tsx
interface IconButtonProps {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'danger';
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  onClick,
  variant = 'default',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`icon-button icon-button-${variant}`}
    >
      <Icon icon={icon} aria-hidden />
    </button>
  );
};

// Usage
<IconButton 
  icon={TrashIcon} 
  label="Delete item" 
  variant="danger"
  onClick={handleDelete}
/>
```

### SVG Sprite System

```html
<!-- sprite.svg -->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="icon-save" viewBox="0 0 24 24">
    <path d="M5 21h14a2 2 0 002-2V8l-5-5H5a2 2 0 00-2 2v14a2 2 0 002 2z"/>
  </symbol>
  
  <symbol id="icon-search" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </symbol>
</svg>

<!-- Usage -->
<svg class="icon-base" aria-hidden="true">
  <use href="#icon-save" />
</svg>
```

## Best Practices

### Do's ✅

1. **Always provide text alternatives** for meaningful icons
2. **Use semantic colors** from the design system
3. **Maintain consistent sizing** using icon size tokens
4. **Test with screen readers** to ensure accessibility
5. **Ensure adequate contrast** for icon colors
6. **Use outline icons** as default
7. **Provide sufficient touch targets** (44×44px minimum)
8. **Use animations meaningfully** to enhance understanding
9. **Choose universally recognized icons** when possible
10. **Test icons at actual size** during design phase

### Don'ts ❌

1. **Don't use icons without text** for critical actions
2. **Don't rely on color alone** to convey meaning
3. **Don't use arbitrary icon sizes** outside the scale
4. **Don't mix icon styles** (outline and solid inconsistently)
5. **Don't forget dark mode** icon colors
6. **Don't use low-contrast icons** for important functions
7. **Don't make clickable icons too small** (<44px touch target)
8. **Don't overuse animations** - they can be distracting
9. **Don't use culture-specific symbols** without alternatives
10. **Don't forget focus indicators** on interactive icons

### Icon Selection Guide

**When choosing icons:**

1. **Recognize:** Is the icon immediately recognizable?
2. **Consistent:** Does it match the style of other icons?
3. **Clear:** Is it clear at small sizes (16-24px)?
4. **Simple:** Is it simple enough to be memorable?
5. **Universal:** Will it be understood across cultures?

### Common Icon Use Cases

| Use Case | Recommended Icons | Size |
|----------|------------------|------|
| Save | Disk/Floppy, Download | base (24px) |
| Delete | Trash, X | base (24px) |
| Edit | Pencil, Edit | base (24px) |
| Search | Magnifying glass | base (24px) |
| Close | X, Times | sm-base (16-24px) |
| Menu | Hamburger (3 lines) | base (24px) |
| User | Person silhouette | base (24px) |
| Settings | Gear, Cog | base (24px) |
| Help | Question mark, Info | base (24px) |
| Home | House | base (24px) |
| Notifications | Bell | base (24px) |
| Success | Checkmark | sm-base (16-24px) |
| Error | X, Exclamation | sm-base (16-24px) |
| Warning | Triangle exclamation | sm-base (16-24px) |
| Info | i in circle | sm-base (16-24px) |

---

**Related Documentation:**
- [Color System](./colors.md)
- [Typography System](./typography.md)
- [Spacing System](./spacing.md)
- [Accessibility Guidelines](../../accessibility/README.md)
- [Component Library](../../components/README.md)
