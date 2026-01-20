# Icon Component

Scalable SVG icons for the education platform with consistent sizing, styling, and accessibility.

## Features

- 📏 Seven sizes: xs, sm, md, lg, xl, 2xl, 3xl
- 🎨 Color variants matching design system
- 🖱️ Icon button component
- 🔔 Badge support for notifications
- ♿ Fully accessible with ARIA labels
- 🌓 Dark theme support
- 📱 Responsive design
- ✨ Animation support (spin, pulse)
- 🎓 Education-specific icons included

## Usage

### Basic Icon

```html
<svg class="icon icon-md" fill="currentColor" viewBox="0 0 16 16">
  <!-- SVG path data -->
</svg>
```

### Icon Sizes

```html
<svg class="icon icon-xs">...</svg>  <!-- 12px -->
<svg class="icon icon-sm">...</svg>  <!-- 16px -->
<svg class="icon icon-md">...</svg>  <!-- 20px -->
<svg class="icon icon-lg">...</svg>  <!-- 24px -->
<svg class="icon icon-xl">...</svg>  <!-- 32px -->
<svg class="icon icon-2xl">...</svg> <!-- 40px -->
<svg class="icon icon-3xl">...</svg> <!-- 48px -->
```

### Color Variants

```html
<svg class="icon icon-md icon-primary">...</svg>
<svg class="icon icon-md icon-secondary">...</svg>
<svg class="icon icon-md icon-success">...</svg>
<svg class="icon icon-md icon-warning">...</svg>
<svg class="icon icon-md icon-error">...</svg>
<svg class="icon icon-md icon-info">...</svg>
<svg class="icon icon-md icon-muted">...</svg>
```

### Icon Button

```html
<button class="icon-button icon-button-md" aria-label="Settings">
  <svg class="icon icon-md">...</svg>
</button>
```

### Icon Button Sizes

```html
<button class="icon-button icon-button-sm" aria-label="Action">...</button>
<button class="icon-button icon-button-md" aria-label="Action">...</button>
<button class="icon-button icon-button-lg" aria-label="Action">...</button>
```

### Icon with Badge

```html
<div class="icon-badge-wrapper">
  <svg class="icon icon-lg">...</svg>
  <span class="icon-badge">5</span>
</div>
```

### Animated Icons

```html
<!-- Spinning -->
<svg class="icon icon-lg icon-spin">...</svg>

<!-- Pulsing -->
<svg class="icon icon-lg icon-pulse">...</svg>
```

### Icon in Text

```html
<p>
  Read more 
  <svg class="icon icon-sm icon-inline">...</svg>
</p>
```

### Icon Container

```html
<div class="icon-container">
  <svg class="icon icon-md">...</svg>
  <span>Text with icon</span>
</div>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.icon` | Base icon class (required) |
| `.icon-xs` | Extra small (12px) |
| `.icon-sm` | Small (16px) |
| `.icon-md` | Medium (20px) |
| `.icon-lg` | Large (24px) |
| `.icon-xl` | Extra large (32px) |
| `.icon-2xl` | 2X large (40px) |
| `.icon-3xl` | 3X large (48px) |
| `.icon-primary` | Primary color |
| `.icon-secondary` | Secondary color |
| `.icon-accent` | Accent color |
| `.icon-success` | Success color |
| `.icon-warning` | Warning color |
| `.icon-error` | Error color |
| `.icon-info` | Info color |
| `.icon-muted` | Muted/tertiary color |
| `.icon-text` | Text color |
| `.icon-inverse` | Inverse color (for dark backgrounds) |
| `.icon-button` | Button wrapper for icon |
| `.icon-button-sm` | Small button |
| `.icon-button-md` | Medium button |
| `.icon-button-lg` | Large button |
| `.icon-badge-wrapper` | Container for icon with badge |
| `.icon-badge` | Notification badge |
| `.icon-spin` | Spinning animation |
| `.icon-pulse` | Pulsing animation |
| `.icon-inline` | Icon inline with text |
| `.icon-container` | Container with icon and text |

## Education Platform Icons

### Book Icon (Course/Reading)

```html
<svg class="icon icon-lg icon-primary" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg>
```

### Video Icon (Video Lesson)

```html
<svg class="icon icon-lg icon-error" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2zm6.5 4.5L6 10V6l2.5 2.5z"/>
</svg>
```

### Quiz Icon (Assessment)

```html
<svg class="icon icon-lg icon-warning" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg>
```

## Accessibility

### ARIA Labels

Always provide `aria-label` for icon buttons:

```html
<button class="icon-button" aria-label="Delete item">
  <svg class="icon icon-md">...</svg>
</button>
```

### Screen Reader Text

For decorative icons, use `aria-hidden`:

```html
<svg class="icon icon-md" aria-hidden="true">...</svg>
```

### Keyboard Navigation

- Icon buttons are fully keyboard accessible
- Proper focus indicators
- Min 44x44px touch target for mobile

## Best Practices

### Do's ✓

- Always provide aria-label for icon-only buttons
- Use semantic color variants
- Maintain consistent sizing
- Use inline icons sparingly
- Provide text labels when possible

### Don'ts ✗

- Don't use icons without labels in critical actions
- Don't rely solely on color to convey meaning
- Don't make icons too small (<16px for interactive)
- Don't use too many different icon sizes
- Don't forget about accessibility

## Education Use Cases

### Course Navigation

```html
<button class="icon-button" aria-label="Next lesson">
  <svg class="icon icon-md icon-primary">
    <!-- Arrow right icon -->
  </svg>
</button>
```

### Assignment Status

```html
<div class="icon-container">
  <svg class="icon icon-md icon-success">
    <!-- Checkmark icon -->
  </svg>
  <span>Assignment completed</span>
</div>
```

### Notifications

```html
<div class="icon-badge-wrapper">
  <svg class="icon icon-lg">
    <!-- Bell icon -->
  </svg>
  <span class="icon-badge">3</span>
</div>
```

### Loading State

```html
<svg class="icon icon-lg icon-primary icon-spin">
  <!-- Spinner icon -->
</svg>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- `base.css`: Design system tokens
- Modern browser with CSS custom properties and SVG support

## Files

- `icon.css`: Component styles
- `index.html`: Live examples and documentation
- `README.md`: This file
