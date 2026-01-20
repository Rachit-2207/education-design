# Avatar Component

Flexible avatar components for displaying user profiles, images, and identities in the education platform.

## Features

- 📏 Six sizes: xs, sm, md, lg, xl, 2xl
- 🖼️ Support for images, initials, and icons
- 🟢 Status indicators (online, offline, away, busy)
- 🎨 Multiple color variants for initials
- 🔲 Shape variants (circle, rounded, square)
- 👥 Avatar groups with overlap
- 🔔 Notification badge support
- 🖱️ Clickable variant
- 📦 Bordered and shadow variants
- ♿ Fully accessible (WCAG 2.1 AA compliant)
- 🌓 Dark theme support
- 📱 Responsive design

## Usage

### Basic Avatar with Image

```html
<div class="avatar avatar-md">
  <img class="avatar-img" src="..." alt="User avatar">
</div>
```

### Avatar Sizes

```html
<div class="avatar avatar-xs">...</div>
<div class="avatar avatar-sm">...</div>
<div class="avatar avatar-md">...</div>
<div class="avatar avatar-lg">...</div>
<div class="avatar avatar-xl">...</div>
<div class="avatar avatar-2xl">...</div>
```

### Avatar with Initials

```html
<div class="avatar avatar-md avatar-primary">
  <span class="avatar-initials">JD</span>
</div>
```

### Avatar with Icon

```html
<div class="avatar avatar-md avatar-primary">
  <div class="avatar-icon">
    <svg fill="currentColor" viewBox="0 0 16 16">
      <!-- SVG path -->
    </svg>
  </div>
</div>
```

### Avatar with Status Indicator

```html
<div class="avatar avatar-md">
  <img class="avatar-img" src="..." alt="User avatar">
  <span class="avatar-status avatar-status-online"></span>
</div>
```

### Status Types

```html
<!-- Online -->
<span class="avatar-status avatar-status-online"></span>

<!-- Offline -->
<span class="avatar-status avatar-status-offline"></span>

<!-- Away -->
<span class="avatar-status avatar-status-away"></span>

<!-- Busy -->
<span class="avatar-status avatar-status-busy"></span>
```

### Color Variants (for Initials)

```html
<div class="avatar avatar-md avatar-primary">...</div>
<div class="avatar avatar-md avatar-secondary">...</div>
<div class="avatar avatar-md avatar-accent">...</div>
<div class="avatar avatar-md avatar-success">...</div>
<div class="avatar avatar-md avatar-warning">...</div>
<div class="avatar avatar-md avatar-error">...</div>
<div class="avatar avatar-md avatar-info">...</div>
```

### Shape Variants

```html
<!-- Circle (default) -->
<div class="avatar avatar-md">...</div>

<!-- Rounded -->
<div class="avatar avatar-md avatar-rounded">...</div>

<!-- Rounded Medium -->
<div class="avatar avatar-md avatar-rounded-md">...</div>

<!-- Square -->
<div class="avatar avatar-md avatar-square">...</div>
```

### Avatar with Border

```html
<div class="avatar avatar-md avatar-bordered">
  <img class="avatar-img" src="..." alt="User avatar">
</div>
```

### Avatar with Shadow

```html
<div class="avatar avatar-md avatar-shadow">
  <img class="avatar-img" src="..." alt="User avatar">
</div>

<div class="avatar avatar-md avatar-shadow-lg">
  <img class="avatar-img" src="..." alt="User avatar">
</div>
```

### Avatar Group

```html
<div class="avatar-group">
  <div class="avatar avatar-md">
    <img class="avatar-img" src="..." alt="User 1">
  </div>
  <div class="avatar avatar-md">
    <img class="avatar-img" src="..." alt="User 2">
  </div>
  <div class="avatar avatar-md">
    <img class="avatar-img" src="..." alt="User 3">
  </div>
  <div class="avatar avatar-md avatar-group-counter">
    +5
  </div>
</div>
```

### Avatar Group Sizes

```html
<div class="avatar-group avatar-group-sm">...</div>
<div class="avatar-group">...</div> <!-- md is default -->
<div class="avatar-group avatar-group-lg">...</div>
<div class="avatar-group avatar-group-xl">...</div>
```

### Avatar with Notification Badge

```html
<div class="avatar avatar-notification avatar-md">
  <img class="avatar-img" src="..." alt="User avatar">
  <span class="avatar-notification-badge">3</span>
</div>
```

### Clickable Avatar

```html
<button class="avatar avatar-clickable avatar-md" role="button" aria-label="View profile">
  <img class="avatar-img" src="..." alt="User avatar">
</button>
```

### Loading State

```html
<div class="avatar avatar-md avatar-loading"></div>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.avatar` | Base avatar class (required) |
| `.avatar-xs` | Extra small (24px) |
| `.avatar-sm` | Small (32px) |
| `.avatar-md` | Medium (40px) |
| `.avatar-lg` | Large (56px) |
| `.avatar-xl` | Extra large (80px) |
| `.avatar-2xl` | 2X large (112px) |
| `.avatar-img` | Avatar image styling |
| `.avatar-initials` | Initials text styling |
| `.avatar-icon` | Icon wrapper |
| `.avatar-status` | Status indicator base |
| `.avatar-status-online` | Online status (green) |
| `.avatar-status-offline` | Offline status (gray) |
| `.avatar-status-away` | Away status (yellow) |
| `.avatar-status-busy` | Busy status (red) |
| `.avatar-primary` | Primary color background |
| `.avatar-secondary` | Secondary color background |
| `.avatar-accent` | Accent color background |
| `.avatar-success` | Success color background |
| `.avatar-warning` | Warning color background |
| `.avatar-error` | Error color background |
| `.avatar-info` | Info color background |
| `.avatar-bordered` | Add border |
| `.avatar-shadow` | Add shadow |
| `.avatar-shadow-lg` | Add large shadow |
| `.avatar-rounded` | Rounded corners |
| `.avatar-rounded-md` | Medium rounded corners |
| `.avatar-square` | Square corners |
| `.avatar-group` | Container for grouped avatars |
| `.avatar-group-counter` | Counter badge in group |
| `.avatar-notification` | Container for notification badge |
| `.avatar-notification-badge` | Notification badge |
| `.avatar-clickable` | Clickable avatar styling |
| `.avatar-loading` | Loading skeleton state |

## Accessibility

### ARIA Attributes

- Use `alt` text for all images
- Add `aria-label` for clickable avatars
- Use `title` attribute for status indicators
- Proper `role` attributes for buttons

### Keyboard Navigation

- Clickable avatars are fully keyboard accessible
- Focus visible indicators on tab navigation

### Screen Reader Support

- Descriptive alt text for images
- ARIA labels for interactive elements
- Status indicators with title attributes

## Best Practices

### Do's ✓

- Always provide alt text for images
- Use appropriate sizes for context
- Provide status indicators for presence
- Use initials when image is unavailable
- Keep avatar groups to reasonable sizes
- Use notification badges for counts

### Don'ts ✗

- Don't forget alt text on images
- Don't use too many avatars in a group
- Don't use low-resolution images
- Don't rely solely on color for status
- Don't make avatars too small to recognize

## Education Platform Use Cases

### Student Profile

```html
<div style="display: flex; align-items: center; gap: 1rem;">
  <div class="avatar avatar-lg avatar-bordered">
    <img class="avatar-img" src="..." alt="Student">
    <span class="avatar-status avatar-status-online"></span>
  </div>
  <div>
    <h4>Sarah Johnson</h4>
    <p>Computer Science Major</p>
  </div>
</div>
```

### Instructor Card

```html
<div class="avatar avatar-xl avatar-shadow">
  <img class="avatar-img" src="..." alt="Instructor">
</div>
```

### Study Group Members

```html
<div class="avatar-group">
  <div class="avatar avatar-md">
    <img class="avatar-img" src="..." alt="Member 1">
  </div>
  <div class="avatar avatar-md">
    <img class="avatar-img" src="..." alt="Member 2">
  </div>
  <div class="avatar avatar-md avatar-group-counter">+8</div>
</div>
```

### Course Contributors

```html
<div class="avatar-group avatar-group-sm">
  <div class="avatar avatar-sm avatar-primary">
    <span class="avatar-initials">JD</span>
  </div>
  <div class="avatar avatar-sm avatar-secondary">
    <span class="avatar-initials">SM</span>
  </div>
  <div class="avatar avatar-sm avatar-info">
    <span class="avatar-initials">AK</span>
  </div>
</div>
```

### With Notification Badge

```html
<div class="avatar avatar-notification avatar-md">
  <img class="avatar-img" src="..." alt="User">
  <span class="avatar-notification-badge">3</span>
</div>
```

## Fallback Patterns

### Image Load Failure

When an image fails to load, show initials:

```html
<div class="avatar avatar-md avatar-primary">
  <img class="avatar-img" src="..." alt="User" 
       onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
  <span class="avatar-initials" style="display:none;">JD</span>
</div>
```

### No Image Available

Use initials or icon:

```html
<div class="avatar avatar-md avatar-primary">
  <span class="avatar-initials">JD</span>
</div>
```

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

- `avatar.css`: Component styles
- `index.html`: Live examples and documentation
- `README.md`: This file
