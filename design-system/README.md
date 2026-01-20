# Education Design System

A comprehensive design system for educational platforms, providing consistent, accessible, and scalable components and patterns.

## Overview

The Education Design System is a complete design language and component library built to create exceptional educational experiences. It includes design foundations, reusable components, patterns, and guidelines to help teams build consistent, accessible, and high-quality products.

### Key Features

- 🎨 **Comprehensive Design Foundations** - Colors, typography, spacing, icons, and grid system
- ♿ **Accessibility First** - WCAG 2.1 AA compliant with enhanced support for diverse learners
- 📱 **Responsive by Default** - Mobile-first approach with support for all screen sizes
- 🎯 **Purpose-Built** - Optimized for educational content and learning experiences
- 🔧 **Developer Friendly** - Well-documented with code examples and implementation guides
- 🌙 **Dark Mode Support** - Full dark mode support across all components
- 📦 **Modular Architecture** - Use only what you need, when you need it

## Getting Started

### Installation

```bash
npm install @education-design/system
```

### Quick Start

```jsx
import { Button, Card, Typography } from '@education-design/system';
import '@education-design/system/dist/styles.css';

function MyComponent() {
  return (
    <Card>
      <Typography variant="h2">Welcome to Education Design</Typography>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

### Using Design Tokens

```javascript
// Import tokens
import { tokens } from '@education-design/tokens';

// Use in your styles
const styles = {
  color: tokens.color.primary[500],
  fontSize: tokens.fontSize.base,
  spacing: tokens.spacing[4],
};
```

## Design Foundations

The foundations define the core design language and visual style of the system.

### [Color System](./foundations/colors.md)

A comprehensive color palette designed for accessibility and visual hierarchy.

- **Primary Colors** - Brand identity and primary actions (#3B82F6)
- **Secondary Colors** - Complementary actions and accents (#10B981)
- **Accent Colors** - Highlights and notifications (#F59E0B)
- **Neutral Colors** - Text, backgrounds, and UI elements (#111827 - #F9FAFB)
- **Semantic Colors** - Success, warning, error, and info states
- **Accessibility** - All color combinations meet WCAG 2.1 AA standards

[View Color Documentation →](./foundations/colors.md)

### [Typography System](./foundations/typography.md)

A clear, accessible type system optimized for educational content.

- **Font Families**
  - **Inter** - UI elements and interface text
  - **Merriweather** - Long-form content and articles
  - **JetBrains Mono** - Code and technical documentation
- **Type Scale** - From 12px to 60px with consistent ratios
- **Font Weights** - Light (300) to Bold (700)
- **Line Heights** - Optimized for readability (1.25 - 2.0)
- **Responsive Typography** - Scales appropriately across devices

[View Typography Documentation →](./foundations/typography.md)

### [Spacing System](./foundations/spacing.md)

A consistent spacing scale based on a 4px base unit (0.25rem).

- **Spacing Scale** - 0px to 128px in harmonious increments
- **Container Widths** - 640px to 1440px for different content types
- **Component Spacing** - Consistent padding for buttons, cards, and forms
- **Responsive Spacing** - Adapts to screen sizes
- **Vertical Rhythm** - Maintains consistent spacing relationships

[View Spacing Documentation →](./foundations/spacing.md)

### [Icon System](./foundations/icons.md)

Guidelines for consistent, accessible iconography.

- **Icon Sizes** - 12px to 64px scale
- **Icon Libraries** - Heroicons (primary), Lucide, Feather
- **Icon Colors** - Semantic color application
- **Accessibility** - Proper labeling and alternatives
- **Usage Guidelines** - Best practices for buttons, navigation, and forms

[View Icon Documentation →](./foundations/icons.md)

### [Grid System](./foundations/grid-system.md)

A flexible, responsive grid for consistent layouts.

- **Breakpoints** - Mobile (320px), Tablet (768px), Desktop (1024px), Wide (1440px)
- **Column System** - 4/8/12 columns based on screen size
- **Gutters** - 16px to 32px responsive gutters
- **Layout Patterns** - Common patterns for sidebars, cards, and dashboards
- **CSS Grid & Flexbox** - Modern layout techniques

[View Grid Documentation →](./foundations/grid-system.md)

## Component Library

### Core Components

**Buttons**
- Primary, secondary, and tertiary variants
- Multiple sizes (sm, md, lg)
- Icon support
- Loading and disabled states

**Forms**
- Text inputs, textareas, selects
- Checkboxes and radio buttons
- Form validation and error states
- Accessible labels and help text

**Cards**
- Flexible container component
- Multiple variants and styles
- Image and content support
- Interactive and clickable variants

**Navigation**
- Header and navigation bars
- Sidebar navigation
- Breadcrumbs
- Pagination

**Feedback**
- Alerts and notifications
- Toasts and snackbars
- Progress indicators
- Loading states

**Modals & Overlays**
- Modal dialogs
- Drawers and side panels
- Tooltips and popovers
- Dropdown menus

[View Component Documentation →](../components/README.md)

## Patterns

Reusable patterns for common user interface challenges in educational contexts.

### Layout Patterns
- Course layouts
- Dashboard patterns
- Content + sidebar
- Card grids

### Navigation Patterns
- Primary navigation
- Course navigation
- Breadcrumb trails
- Tab navigation

### Form Patterns
- Login and registration
- Multi-step forms
- Quiz and assessment forms
- Search interfaces

### Educational Patterns
- Course cards
- Lesson layouts
- Progress tracking
- Assessment displays

[View Pattern Documentation →](../patterns/README.md)

## Design Tokens

All design decisions are captured as design tokens in JSON format.

### Available Token Files

```
design-system/tokens/
├── colors.json       # Color palette and semantic colors
├── typography.json   # Font families, sizes, weights, line heights
├── spacing.json      # Spacing scale and component spacing
├── breakpoints.json  # Responsive breakpoints and media queries
└── shadows.json      # Box shadows and elevation levels
```

### Using Tokens

**JavaScript/TypeScript:**
```javascript
import colors from '@education-design/tokens/colors.json';
import typography from '@education-design/tokens/typography.json';
import spacing from '@education-design/tokens/spacing.json';

const primaryColor = colors.color.primary[500];
const baseFontSize = typography.fontSize.base;
const defaultSpacing = spacing.spacing[4];
```

**CSS Variables:**
```css
@import '@education-design/tokens/css-variables.css';

.my-component {
  color: var(--color-primary-500);
  font-size: var(--font-size-base);
  padding: var(--spacing-4);
}
```

**Sass:**
```scss
@use '@education-design/tokens/colors' as colors;
@use '@education-design/tokens/spacing' as spacing;

.my-component {
  background-color: colors.$primary-500;
  padding: spacing.$spacing-4;
}
```

[View Token Files →](./tokens/)

## Accessibility

Accessibility is a core principle of the Education Design System.

### Accessibility Standards

- **WCAG 2.1 Level AA Compliance** - All components meet minimum standards
- **AAA Where Possible** - Enhanced standards for critical interactions
- **Keyboard Navigation** - Full keyboard support for all interactive elements
- **Screen Reader Support** - Proper ARIA labels and semantic HTML
- **Color Contrast** - Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus Indicators** - Clear, visible focus states for navigation

### Accessibility Features

- **Color Blindness** - Never rely on color alone to convey information
- **Text Alternatives** - Alt text for images, labels for icons
- **Skip Links** - Bypass navigation for keyboard users
- **Responsive Text** - Text scales with user preferences
- **Touch Targets** - Minimum 44×44px for interactive elements
- **Motion** - Respect prefers-reduced-motion settings

[View Accessibility Guidelines →](../accessibility/README.md)

## Responsive Design

The system is built mobile-first with responsive behavior at every level.

### Breakpoint Strategy

| Device | Breakpoint | Strategy |
|--------|------------|----------|
| Mobile | 320px - 767px | Single column, stacked content, touch-optimized |
| Tablet | 768px - 1023px | 2-column layouts, moderate density |
| Desktop | 1024px - 1439px | Multi-column layouts, full features |
| Wide | 1440px+ | Optimized for large displays |

### Responsive Guidelines

1. **Mobile First** - Design for mobile, enhance for larger screens
2. **Touch Targets** - Minimum 44px for interactive elements
3. **Readable Text** - Never below 16px for body text
4. **Flexible Images** - Use max-width: 100% for responsive images
5. **Breakpoint Testing** - Test at all breakpoints during development

## Browser Support

The Education Design System supports modern browsers:

| Browser | Minimum Version |
|---------|----------------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| iOS Safari | iOS 13+ |
| Chrome Android | Last 2 versions |

**Note:** Internet Explorer is not supported.

## Contributing

We welcome contributions to the Education Design System!

### How to Contribute

1. **Report Issues** - Found a bug? [Open an issue](../CONTRIBUTING.md)
2. **Suggest Features** - Have an idea? We'd love to hear it
3. **Submit Pull Requests** - Fix bugs or add features
4. **Improve Documentation** - Help make our docs better
5. **Share Feedback** - Tell us how we can improve

### Development Setup

```bash
# Clone the repository
git clone https://github.com/education-design/education-design.git

# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Run tests
npm test

# Build the system
npm run build
```

[View Contributing Guidelines →](../CONTRIBUTING.md)

## Project Structure

```
education-design/
├── accessibility/          # Accessibility guidelines and resources
├── assets/                # Images, icons, and static assets
├── components/            # Component library source code
├── design-system/         # Design system documentation (you are here)
│   ├── foundations/       # Design foundations documentation
│   │   ├── colors.md
│   │   ├── typography.md
│   │   ├── spacing.md
│   │   ├── icons.md
│   │   └── grid-system.md
│   ├── tokens/           # Design tokens (JSON)
│   │   ├── colors.json
│   │   ├── typography.json
│   │   ├── spacing.json
│   │   ├── breakpoints.json
│   │   └── shadows.json
│   └── README.md         # This file
├── documentation/         # Additional documentation
├── examples/             # Example implementations
├── pages/               # Website pages
├── patterns/            # Design patterns
├── react-components/    # React component implementations
└── storybook/          # Storybook configuration and stories
```

## Resources

### Documentation
- [Color System](./foundations/colors.md)
- [Typography System](./foundations/typography.md)
- [Spacing System](./foundations/spacing.md)
- [Icon System](./foundations/icons.md)
- [Grid System](./foundations/grid-system.md)
- [Component Library](../components/README.md)
- [Design Patterns](../patterns/README.md)
- [Accessibility Guidelines](../accessibility/README.md)

### External Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [A11y Project](https://www.a11yproject.com/)
- [Inclusive Components](https://inclusive-components.design/)

## Support

### Getting Help

- **Documentation** - Check our comprehensive documentation
- **GitHub Issues** - Search existing issues or create a new one
- **Discussions** - Join community discussions
- **Email** - Contact us at design-system@education.example

## License

The Education Design System is licensed under the MIT License.

```
MIT License

Copyright (c) 2024 Education Design System

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

[View Full License →](../LICENSE)

## Changelog

See [CHANGELOG.md](../CHANGELOG.md) for a list of changes and version history.

## Version

**Current Version:** 1.0.0

---

**Built with ❤️ for educators and learners everywhere.**

For questions, suggestions, or contributions, please visit our [GitHub repository](https://github.com/education-design/education-design) or contact the design system team.
