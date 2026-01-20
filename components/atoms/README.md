# Atomic Design Components

This directory contains atomic design components for the education platform. These are the smallest, most basic building blocks of the design system.

## Available Components

### 1. [Button](./Button/)
Comprehensive button component with multiple variants, sizes, and states.

**Features:**
- Variants: primary, secondary, ghost, danger, success
- Sizes: sm, md, lg
- States: default, hover, active, disabled, loading
- Icon support (left, right, icon-only)
- Full accessibility support

**Usage:**
```html
<button class="btn btn-primary btn-md">Click Me</button>
```

---

### 2. [Input](./Input/)
Flexible input component for all form needs with validation and enhanced features.

**Features:**
- Types: text, email, password, number, search
- Sizes: sm, md, lg
- States: default, focus, error, success, disabled
- Password toggle, clear button, character count
- Real-time validation

**Usage:**
```html
<div class="input-group">
  <label class="input-label" for="email">Email</label>
  <div class="input-wrapper">
    <input type="email" id="email" class="input input-md" placeholder="name@example.com">
  </div>
</div>
```

---

### 3. [Badge](./Badge/)
Versatile badge component for status indicators, labels, and notifications.

**Features:**
- Variants: default, primary, secondary, success, warning, error, info
- Sizes: sm, md, lg
- Styles: solid, outlined, pill
- Dot indicators, close button, icons
- Numeric badges for counts

**Usage:**
```html
<span class="badge badge-primary badge-md">New</span>
```

---

### 4. [Avatar](./Avatar/)
Flexible avatar component for user profiles and identities.

**Features:**
- Sizes: xs, sm, md, lg, xl, 2xl
- Types: image, initials, icon
- Status indicators: online, offline, away, busy
- Avatar groups with overlap
- Notification badges

**Usage:**
```html
<div class="avatar avatar-md">
  <img class="avatar-img" src="..." alt="User avatar">
  <span class="avatar-status avatar-status-online"></span>
</div>
```

---

### 5. [Icon](./Icon/)
Scalable SVG icons with consistent sizing and education-specific icons.

**Features:**
- Sizes: xs, sm, md, lg, xl, 2xl, 3xl
- Color variants matching design system
- Icon buttons
- Animations: spin, pulse
- Education icons: book, video, quiz, certificate, etc.

**Usage:**
```html
<svg class="icon icon-md icon-primary" fill="currentColor" viewBox="0 0 16 16">
  <!-- SVG path -->
</svg>
```

---

### 6. [Typography](./Typography/)
Complete typography system with semantic styles and utilities.

**Features:**
- Heading hierarchy (Display, H1-H6)
- Body text variants (xl, lg, base, sm, xs)
- UI text styles
- Specialty: lead, caption, overline, code, blockquote
- Text utilities: colors, alignment, transform

**Usage:**
```html
<h1 class="heading-1">Main Title</h1>
<p class="body-base">Regular paragraph text.</p>
```

---

## Design Principles

### Accessibility First
All components are built with WCAG 2.1 AA compliance:
- Semantic HTML
- ARIA attributes where needed
- Keyboard navigation support
- Sufficient color contrast
- Focus visible indicators
- Screen reader friendly

### Dark Theme Support
Every component supports dark theme using CSS custom properties:
```html
<html data-theme="dark">
```

### Responsive Design
All components adapt to different screen sizes:
- Mobile-first approach
- Flexible layouts
- Touch-friendly sizes
- Responsive typography

### Design Tokens
Components use design tokens from `base.css`:
- Colors
- Typography scales
- Spacing
- Shadows
- Border radius
- Transitions

## Usage Guidelines

### Getting Started

1. **Include Base CSS:**
```html
<link rel="stylesheet" href="path/to/assets/css/base.css">
```

2. **Include Component CSS:**
```html
<link rel="stylesheet" href="path/to/components/atoms/Button/button.css">
```

3. **Include Component JS (if needed):**
```html
<script src="path/to/components/atoms/Button/button.js"></script>
```

### Best Practices

**Do's ✓**
- Use semantic HTML elements
- Provide proper ARIA labels
- Test with keyboard navigation
- Ensure sufficient color contrast
- Follow component documentation
- Maintain consistent spacing

**Don'ts ✗**
- Don't skip heading hierarchy
- Don't rely on color alone
- Don't nest interactive elements
- Don't forget alt text on images
- Don't ignore responsive design
- Don't use inline styles

## Component Structure

Each component folder contains:

```
ComponentName/
├── index.html          # Live examples and demos
├── component-name.css  # Component styles
├── component-name.js   # Component logic (if needed)
└── README.md          # Documentation
```

### index.html
- Live interactive examples
- All variants and states
- Code examples
- Accessibility information
- Theme toggle
- Education platform use cases

### CSS File
- Component styles
- Variants and modifiers
- Responsive breakpoints
- Dark theme support
- Animations and transitions

### JS File (when applicable)
- Component initialization
- Event handling
- State management
- Public API methods
- Custom events

### README.md
- Component overview
- Usage examples
- API documentation
- Accessibility guidelines
- Best practices
- Browser support

## Browser Support

All components support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- Modern browser with CSS custom properties support
- No JavaScript framework required
- No build tools required (works with vanilla HTML/CSS/JS)

## Education Platform Context

These components are specifically designed for educational use cases:

- **Course pages**: Buttons for enrollment, navigation
- **Assignments**: Input fields for submissions, status badges
- **User profiles**: Avatars for students and instructors
- **Course materials**: Icons for different content types
- **Content display**: Typography for lessons and documentation

## Contributing

When creating new atomic components:

1. Follow existing structure
2. Include all required files
3. Ensure accessibility
4. Support dark theme
5. Make it responsive
6. Document thoroughly
7. Provide examples

## Testing

Test each component for:
- Visual appearance (light and dark themes)
- Keyboard navigation
- Screen reader compatibility
- Mobile responsiveness
- Cross-browser compatibility
- Touch interactions

## Resources

- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/)

## License

See the [LICENSE](../../../LICENSE) file in the root directory.
