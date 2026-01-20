# Badge Component

Versatile badge components for status indicators, labels, and notifications in the education platform.

## Features

- 🎨 Multiple variants: default, primary, secondary, success, warning, error, info
- 📏 Three sizes: small, medium, large
- ♿ Fully accessible (WCAG 2.1 AA compliant)
- 🌓 Dark theme support
- 📱 Responsive design
- 🔘 Dot indicator support
- ❌ Optional close button
- 🎯 Icon support
- 💫 Pulsing animation for notifications
- 🎪 Solid, outlined, and pill variants

## Usage

### Basic Badge

```html
<span class="badge badge-primary badge-md">Badge Text</span>
```

### Badge Variants

```html
<!-- Default -->
<span class="badge badge-default badge-md">Default</span>

<!-- Primary -->
<span class="badge badge-primary badge-md">Primary</span>

<!-- Secondary -->
<span class="badge badge-secondary badge-md">Secondary</span>

<!-- Success -->
<span class="badge badge-success badge-md">Success</span>

<!-- Warning -->
<span class="badge badge-warning badge-md">Warning</span>

<!-- Error -->
<span class="badge badge-error badge-md">Error</span>

<!-- Info -->
<span class="badge badge-info badge-md">Info</span>
```

### Badge Sizes

```html
<span class="badge badge-primary badge-sm">Small</span>
<span class="badge badge-primary badge-md">Medium</span>
<span class="badge badge-primary badge-lg">Large</span>
```

### Solid Badges

```html
<span class="badge badge-solid badge-primary badge-md">Solid Primary</span>
<span class="badge badge-solid badge-success badge-md">Solid Success</span>
```

### Outlined Badges

```html
<span class="badge badge-outlined badge-primary badge-md">Outlined</span>
<span class="badge badge-outlined badge-error badge-md">Outlined</span>
```

### Badge with Dot Indicator

```html
<span class="badge badge-dot badge-success badge-md">Active</span>
<span class="badge badge-dot badge-error badge-md">Offline</span>
```

### Badge with Icon

```html
<span class="badge badge-success badge-md">
  <svg class="badge-icon" fill="currentColor" viewBox="0 0 16 16">
    <!-- SVG path -->
  </svg>
  Completed
</span>
```

### Closable Badge

```html
<span class="badge badge-primary badge-md badge-closable">
  JavaScript
  <button class="badge-close" aria-label="Remove JavaScript badge">
    <svg fill="currentColor" viewBox="0 0 16 16">
      <!-- X icon SVG path -->
    </svg>
  </button>
</span>
```

### Numeric Badge

```html
<span class="badge badge-numeric badge-solid badge-error badge-md">5</span>
<span class="badge badge-numeric badge-solid badge-error badge-md">99+</span>
```

### Pill Badge

```html
<span class="badge badge-pill badge-primary badge-md">Beginner</span>
```

### Pulsing Badge

```html
<span class="badge badge-solid badge-error badge-md badge-pulse">Live</span>
```

### Badge Group

```html
<div class="badge-group">
  <span class="badge badge-primary badge-md">HTML</span>
  <span class="badge badge-primary badge-md">CSS</span>
  <span class="badge badge-primary badge-md">JavaScript</span>
</div>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.badge` | Base badge class (required) |
| `.badge-default` | Default variant |
| `.badge-primary` | Primary variant |
| `.badge-secondary` | Secondary variant |
| `.badge-success` | Success variant |
| `.badge-warning` | Warning variant |
| `.badge-error` | Error variant |
| `.badge-info` | Info variant |
| `.badge-sm` | Small size |
| `.badge-md` | Medium size |
| `.badge-lg` | Large size |
| `.badge-solid` | Solid background variant |
| `.badge-outlined` | Outlined variant |
| `.badge-pill` | Pill-shaped badge |
| `.badge-dot` | Badge with dot indicator |
| `.badge-closable` | Badge with close button |
| `.badge-close` | Close button |
| `.badge-icon` | Icon wrapper |
| `.badge-numeric` | Numeric badge styling |
| `.badge-pulse` | Pulsing animation |
| `.badge-group` | Group multiple badges |

## Accessibility

### ARIA Attributes

- Close buttons include descriptive `aria-label`
- Proper semantic HTML
- Sufficient color contrast ratios

### Keyboard Navigation

- Close buttons are keyboard accessible
- Focus visible indicators on interactive elements

### Screen Reader Support

- Descriptive labels for all interactive elements
- Proper role and state communication

## Best Practices

### Do's ✓

- Use appropriate semantic colors (success for completed, error for failed)
- Provide descriptive aria-labels for close buttons
- Use numeric badges for counts
- Use dot indicators for status
- Keep badge text short and concise

### Don'ts ✗

- Don't use badges for large amounts of text
- Don't stack multiple badges without proper spacing
- Don't rely solely on color to convey meaning
- Don't make badges too large (defeats the purpose)

## Education Platform Use Cases

### Course Status

```html
<span class="badge badge-success badge-md">
  <svg class="badge-icon">...</svg>
  Enrolled
</span>
<span class="badge badge-dot badge-warning badge-md">In Progress</span>
<span class="badge badge-dot badge-success badge-md">Completed</span>
```

### Assignment Status

```html
<span class="badge badge-outlined badge-warning badge-md">Due Soon</span>
<span class="badge badge-error badge-md">Overdue</span>
<span class="badge badge-success badge-md">Submitted</span>
```

### Skill Level

```html
<span class="badge badge-pill badge-success badge-sm">Beginner</span>
<span class="badge badge-pill badge-primary badge-sm">Intermediate</span>
<span class="badge badge-pill badge-warning badge-sm">Advanced</span>
```

### Course Tags

```html
<div class="badge-group">
  <span class="badge badge-primary badge-md badge-closable">
    Web Development
    <button class="badge-close" aria-label="Remove tag">...</button>
  </span>
  <span class="badge badge-secondary badge-md badge-closable">
    JavaScript
    <button class="badge-close" aria-label="Remove tag">...</button>
  </span>
</div>
```

### Notification Count

```html
<div style="position: relative;">
  <svg><!-- Bell icon --></svg>
  <span class="badge badge-numeric badge-solid badge-error badge-sm" 
        style="position: absolute; top: -8px; right: -8px;">
    5
  </span>
</div>
```

### Live Indicator

```html
<span class="badge badge-solid badge-error badge-md badge-pulse">
  Live
</span>
```

## Variants Explained

### Default Variant
- Subtle background with border
- Use for general labels

### Solid Variant
- Strong background color
- Use for important information

### Outlined Variant
- Transparent background with colored border
- Use for subtle emphasis

### Pill Variant
- Rounded edges instead of circular
- Use for categories and tags

### Numeric Variant
- Optimized for numbers
- Use for counts and notifications

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- `base.css`: Design system tokens
- Modern browser with CSS custom properties support

## Files

- `badge.css`: Component styles
- `index.html`: Live examples and documentation
- `README.md`: This file
