# Color System

The Education Design System uses a comprehensive color palette designed for accessibility, consistency, and visual hierarchy. All colors meet WCAG 2.1 AA accessibility standards for text contrast.

## Table of Contents

- [Primary Colors](#primary-colors)
- [Secondary Colors](#secondary-colors)
- [Accent Colors](#accent-colors)
- [Neutral Colors](#neutral-colors)
- [Semantic Colors](#semantic-colors)
- [Background Colors](#background-colors)
- [Text Colors](#text-colors)
- [Border Colors](#border-colors)
- [Accessibility Guidelines](#accessibility-guidelines)
- [Usage Examples](#usage-examples)

## Primary Colors

Primary colors represent the brand identity and are used for primary actions, links, and key UI elements.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary.50` | `#EFF6FF` | Lightest blue, backgrounds, hover states |
| `primary.100` | `#DBEAFE` | Very light blue, subtle backgrounds |
| `primary.200` | `#BFDBFE` | Light blue, disabled states |
| `primary.300` | `#93C5FD` | Soft blue, borders |
| `primary.400` | `#60A5FA` | Medium blue, hover states |
| `primary.500` | `#3B82F6` | **Base primary** - buttons, links |
| `primary.600` | `#2563EB` | Darker blue, active states |
| `primary.700` | `#1D4ED8` | Dark blue, text on light backgrounds |
| `primary.800` | `#1E40AF` | Very dark blue, emphasized elements |
| `primary.900` | `#1E3A8A` | Darkest blue, high contrast needs |

### Usage Guidelines

- Use `primary.500` as the default for buttons, links, and interactive elements
- Use lighter shades (50-200) for backgrounds and subtle UI elements
- Use darker shades (600-900) for hover, active, and pressed states
- Ensure sufficient contrast when placing text on primary colors

## Secondary Colors

Secondary colors complement the primary palette and are used for secondary actions and accents.

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary.50` | `#ECFDF5` | Lightest green, backgrounds |
| `secondary.100` | `#D1FAE5` | Very light green |
| `secondary.200` | `#A7F3D0` | Light green |
| `secondary.300` | `#6EE7B7` | Soft green |
| `secondary.400` | `#34D399` | Medium green |
| `secondary.500` | `#10B981` | **Base secondary** |
| `secondary.600` | `#059669` | Darker green |
| `secondary.700` | `#047857` | Dark green |
| `secondary.800` | `#065F46` | Very dark green |
| `secondary.900` | `#064E3B` | Darkest green |

### Usage Guidelines

- Use for secondary calls-to-action
- Ideal for success confirmations and positive feedback
- Avoid using as the primary brand color in most cases

## Accent Colors

Accent colors add visual interest and highlight important information.

| Token | Hex | Usage |
|-------|-----|-------|
| `accent.50` | `#FFFBEB` | Lightest yellow, backgrounds |
| `accent.100` | `#FEF3C7` | Very light yellow |
| `accent.200` | `#FDE68A` | Light yellow |
| `accent.300` | `#FCD34D` | Soft yellow |
| `accent.400` | `#FBBF24` | Medium yellow |
| `accent.500` | `#F59E0B` | **Base accent** |
| `accent.600` | `#D97706` | Darker yellow |
| `accent.700` | `#B45309` | Dark yellow |
| `accent.800` | `#92400E` | Very dark yellow |
| `accent.900` | `#78350F` | Darkest yellow |

### Usage Guidelines

- Use sparingly to draw attention to special content
- Ideal for badges, notifications, and highlights
- Ensure text readability when using lighter shades

## Neutral Colors

Neutral colors form the foundation of the UI and are used for text, backgrounds, and borders.

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral.50` | `#F9FAFB` | Lightest gray, subtle backgrounds |
| `neutral.100` | `#F3F4F6` | Very light gray, backgrounds |
| `neutral.200` | `#E5E7EB` | Light gray, borders, dividers |
| `neutral.300` | `#D1D5DB` | Soft gray, disabled elements |
| `neutral.400` | `#9CA3AF` | Medium gray, placeholders |
| `neutral.500` | `#6B7280` | Gray, secondary text |
| `neutral.600` | `#4B5563` | Darker gray, body text |
| `neutral.700` | `#374151` | Dark gray, headings |
| `neutral.800` | `#1F2937` | Very dark gray, primary text |
| `neutral.900` | `#111827` | Darkest gray, emphasis |

### Usage Guidelines

- Use for text hierarchy (900 for headings, 600 for body, 400 for secondary)
- Use lighter shades (50-200) for backgrounds and subtle separators
- Use medium shades (300-500) for borders and disabled states

## Semantic Colors

Semantic colors communicate status, state, and meaning to users.

### Success

| Token | Hex | Usage |
|-------|-----|-------|
| `semantic.success.light` | `#D1FAE5` | Success backgrounds, light mode |
| `semantic.success.default` | `#10B981` | Success messages, icons |
| `semantic.success.dark` | `#047857` | Success text, dark mode |

**Usage:** Form validation success, completed tasks, positive confirmations.

### Warning

| Token | Hex | Usage |
|-------|-----|-------|
| `semantic.warning.light` | `#FEF3C7` | Warning backgrounds, light mode |
| `semantic.warning.default` | `#F59E0B` | Warning messages, icons |
| `semantic.warning.dark` | `#B45309` | Warning text, dark mode |

**Usage:** Cautionary messages, important notices, pending states.

### Error

| Token | Hex | Usage |
|-------|-----|-------|
| `semantic.error.light` | `#FEE2E2` | Error backgrounds, light mode |
| `semantic.error.default` | `#EF4444` | Error messages, icons |
| `semantic.error.dark` | `#B91C1C` | Error text, dark mode |

**Usage:** Form validation errors, critical alerts, destructive actions.

### Info

| Token | Hex | Usage |
|-------|-----|-------|
| `semantic.info.light` | `#DBEAFE` | Info backgrounds, light mode |
| `semantic.info.default` | `#3B82F6` | Info messages, icons |
| `semantic.info.dark` | `#1D4ED8` | Info text, dark mode |

**Usage:** Informational messages, tooltips, helpful hints.

## Background Colors

### Light Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `background.light.primary` | `#FFFFFF` | Main page background |
| `background.light.secondary` | `#F9FAFB` | Cards, panels, secondary surfaces |
| `background.light.tertiary` | `#F3F4F6` | Nested elements, hover states |

### Dark Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `background.dark.primary` | `#111827` | Main page background |
| `background.dark.secondary` | `#1F2937` | Cards, panels, secondary surfaces |
| `background.dark.tertiary` | `#374151` | Nested elements, hover states |

## Text Colors

### Light Mode

| Token | Hex | Usage | Contrast Ratio |
|-------|-----|-------|----------------|
| `text.light.primary` | `#111827` | Headings, primary text | 16.8:1 on white |
| `text.light.secondary` | `#4B5563` | Body text, descriptions | 8.6:1 on white |
| `text.light.tertiary` | `#9CA3AF` | Captions, metadata | 3.7:1 on white |
| `text.light.inverse` | `#FFFFFF` | Text on dark backgrounds | 21:1 on black |

### Dark Mode

| Token | Hex | Usage | Contrast Ratio |
|-------|-----|-------|----------------|
| `text.dark.primary` | `#F9FAFB` | Headings, primary text | 17.5:1 on dark |
| `text.dark.secondary` | `#D1D5DB` | Body text, descriptions | 10.4:1 on dark |
| `text.dark.tertiary` | `#9CA3AF` | Captions, metadata | 4.8:1 on dark |
| `text.dark.inverse` | `#111827` | Text on light backgrounds | 16.8:1 on white |

## Border Colors

### Light Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `border.light.default` | `#E5E7EB` | Default borders, dividers |
| `border.light.hover` | `#D1D5DB` | Hover state borders |
| `border.light.focus` | `#2563EB` | Focus rings, active elements |

### Dark Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `border.dark.default` | `#374151` | Default borders, dividers |
| `border.dark.hover` | `#4B5563` | Hover state borders |
| `border.dark.focus` | `#3B82F6` | Focus rings, active elements |

## Accessibility Guidelines

### Contrast Requirements

The Education Design System adheres to WCAG 2.1 Level AA standards:

- **Normal text (16px+):** Minimum contrast ratio of 4.5:1
- **Large text (24px+ or 18.7px+ bold):** Minimum contrast ratio of 3:1
- **UI components and graphics:** Minimum contrast ratio of 3:1

### Recommended Color Combinations

#### Text on Backgrounds (Light Mode)

✅ **AA Compliant:**
- `text.light.primary` on `background.light.primary` (16.8:1)
- `text.light.secondary` on `background.light.primary` (8.6:1)
- `primary.700` on `primary.50` (7.2:1)
- `neutral.900` on `neutral.100` (14.7:1)

⚠️ **Use with Caution (Below AA):**
- `text.light.tertiary` on `background.light.primary` (3.7:1) - Use only for non-critical text

#### Text on Backgrounds (Dark Mode)

✅ **AA Compliant:**
- `text.dark.primary` on `background.dark.primary` (17.5:1)
- `text.dark.secondary` on `background.dark.primary` (10.4:1)
- `neutral.100` on `neutral.900` (17.2:1)

### Color Blindness Considerations

- **Don't rely on color alone** to convey information
- Use icons, patterns, or text labels in addition to color
- Provide alternative indicators for semantic colors (✓ for success, ⚠ for warning, ✕ for error)
- Test designs with color blindness simulators

### Focus Indicators

- Always use `border.light.focus` or `border.dark.focus` for focus rings
- Ensure focus indicators have a 3:1 contrast ratio against adjacent colors
- Never remove focus indicators without providing an alternative

## Usage Examples

### CSS Variables

```css
:root {
  /* Primary Colors */
  --color-primary-50: #EFF6FF;
  --color-primary-500: #3B82F6;
  --color-primary-700: #1D4ED8;
  
  /* Semantic Colors */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
  
  /* Text Colors */
  --color-text-primary: #111827;
  --color-text-secondary: #4B5563;
  
  /* Background Colors */
  --color-background-primary: #FFFFFF;
  --color-background-secondary: #F9FAFB;
}

[data-theme="dark"] {
  --color-text-primary: #F9FAFB;
  --color-text-secondary: #D1D5DB;
  --color-background-primary: #111827;
  --color-background-secondary: #1F2937;
}
```

### Button Color Usage

```css
/* Primary Button */
.button-primary {
  background-color: var(--color-primary-500);
  color: white;
  border: none;
}

.button-primary:hover {
  background-color: var(--color-primary-600);
}

.button-primary:active {
  background-color: var(--color-primary-700);
}

.button-primary:disabled {
  background-color: var(--color-neutral-300);
  color: var(--color-neutral-500);
}
```

### Alert Components

```css
/* Success Alert */
.alert-success {
  background-color: var(--color-semantic-success-light);
  border-left: 4px solid var(--color-semantic-success-default);
  color: var(--color-semantic-success-dark);
}

/* Error Alert */
.alert-error {
  background-color: var(--color-semantic-error-light);
  border-left: 4px solid var(--color-semantic-error-default);
  color: var(--color-semantic-error-dark);
}

/* Warning Alert */
.alert-warning {
  background-color: var(--color-semantic-warning-light);
  border-left: 4px solid var(--color-semantic-warning-default);
  color: var(--color-semantic-warning-dark);
}
```

### React/JSX Example

```jsx
import { tokens } from '@education-design/tokens';

function SuccessMessage({ message }) {
  return (
    <div
      style={{
        backgroundColor: tokens.color.semantic.success.light,
        borderLeft: `4px solid ${tokens.color.semantic.success.default}`,
        color: tokens.color.semantic.success.dark,
        padding: '1rem',
        borderRadius: '0.25rem',
      }}
    >
      <span role="img" aria-label="success">✓</span> {message}
    </div>
  );
}
```

## Color Token Reference

All color tokens are available in `/design-system/tokens/colors.json` and can be imported in your application:

```javascript
// JavaScript/TypeScript
import colors from '@education-design/tokens/colors.json';

// Example usage
const primaryColor = colors.color.primary[500]; // #3B82F6
```

```scss
// SCSS
@import '@education-design/tokens/colors';

.my-component {
  background-color: map-get($color-primary, 500);
}
```

## Best Practices

1. **Consistency:** Always use design tokens instead of hard-coded color values
2. **Hierarchy:** Use color to establish visual hierarchy and guide user attention
3. **Accessibility:** Test all color combinations for proper contrast ratios
4. **Context:** Choose colors that match the semantic meaning of the content
5. **Restraint:** Limit color palette usage to maintain visual cohesion
6. **Dark Mode:** Always consider both light and dark mode when applying colors
7. **Testing:** Validate color choices with accessibility tools and color blindness simulators

---

**Related Documentation:**
- [Typography System](./typography.md)
- [Spacing System](./spacing.md)
- [Component Library](../components/README.md)
