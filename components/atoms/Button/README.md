# Button Component

A comprehensive, accessible button component for the education platform design system.

## Features

- 🎨 Multiple variants: primary, secondary, ghost, danger, success
- 📏 Three sizes: small, medium, large
- ♿ Fully accessible (WCAG 2.1 AA compliant)
- 🌓 Dark theme support
- 📱 Responsive design
- ⚡ Loading states
- 🔄 Disabled states
- 🖼️ Icon support (left, right, and icon-only)
- ⌨️ Full keyboard navigation

## Usage

### Basic Button

```html
<button class="btn btn-primary btn-md">Click Me</button>
```

### Button Variants

```html
<!-- Primary (default action) -->
<button class="btn btn-primary btn-md">Primary</button>

<!-- Secondary (less emphasis) -->
<button class="btn btn-secondary btn-md">Secondary</button>

<!-- Ghost (minimal style) -->
<button class="btn btn-ghost btn-md">Ghost</button>

<!-- Danger (destructive actions) -->
<button class="btn btn-danger btn-md">Delete</button>

<!-- Success (positive actions) -->
<button class="btn btn-success btn-md">Complete</button>
```

### Button Sizes

```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Button States

```html
<!-- Disabled -->
<button class="btn btn-primary btn-md" disabled>Disabled</button>

<!-- Loading -->
<button class="btn btn-primary btn-md btn-loading">Loading...</button>
```

### Buttons with Icons

```html
<!-- Icon Left -->
<button class="btn btn-primary btn-md">
  <svg width="16" height="16">...</svg>
  Previous
</button>

<!-- Icon Right -->
<button class="btn btn-primary btn-md">
  Next
  <svg width="16" height="16">...</svg>
</button>

<!-- Icon Only -->
<button class="btn btn-primary btn-md btn-icon-only" aria-label="Settings">
  <svg width="16" height="16">...</svg>
</button>
```

### Full Width Button

```html
<button class="btn btn-primary btn-md btn-block">Full Width</button>
```

## JavaScript API

### Initialization

Buttons are automatically initialized on page load. For dynamic buttons:

```javascript
const button = new Button(document.querySelector('.btn'));
```

### Methods

#### setLoading(isLoading)

Toggle loading state:

```javascript
const button = new Button(document.querySelector('#myButton'));
button.setLoading(true);  // Show loading
button.setLoading(false); // Hide loading
```

#### setDisabled(isDisabled)

Toggle disabled state:

```javascript
button.setDisabled(true);  // Disable button
button.setDisabled(false); // Enable button
```

### Events

Buttons emit custom events:

```javascript
document.querySelector('.btn').addEventListener('btn-click', (e) => {
  console.log('Button clicked:', e.detail.button);
});
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.btn` | Base button class (required) |
| `.btn-primary` | Primary variant |
| `.btn-secondary` | Secondary variant |
| `.btn-ghost` | Ghost variant |
| `.btn-danger` | Danger variant |
| `.btn-success` | Success variant |
| `.btn-sm` | Small size |
| `.btn-md` | Medium size |
| `.btn-lg` | Large size |
| `.btn-loading` | Loading state |
| `.btn-disabled` | Disabled state |
| `.btn-block` | Full width |
| `.btn-icon-only` | Icon-only button |

## Accessibility

### ARIA Attributes

The component automatically manages:
- `aria-disabled`: Set on disabled buttons
- `aria-busy`: Set during loading state
- `aria-label`: Required for icon-only buttons

### Keyboard Navigation

- `Tab`: Navigate to button
- `Space` / `Enter`: Activate button
- Focus visible indicators on keyboard navigation

### Screen Reader Support

- Icon-only buttons must include `aria-label`
- Loading state announces "busy" to screen readers
- Disabled state prevents interaction and announces to screen readers

## Best Practices

### Do's ✓

- Use primary buttons for main actions
- Provide `aria-label` for icon-only buttons
- Use loading state for async operations
- Maintain consistent button hierarchy on pages
- Use ghost buttons for less important actions

### Don'ts ✗

- Don't use multiple primary buttons in the same context
- Don't use danger buttons without confirmation dialogs
- Don't nest interactive elements inside buttons
- Don't forget to handle loading states for async actions

## Education Platform Use Cases

### Course Enrollment

```html
<button class="btn btn-primary btn-lg btn-block">
  <svg>...</svg>
  Enroll in Course
</button>
```

### Lesson Navigation

```html
<button class="btn btn-ghost btn-md">
  <svg>...</svg>
  Previous Lesson
</button>
<button class="btn btn-primary btn-md">
  Next Lesson
  <svg>...</svg>
</button>
```

### Quiz Submission

```html
<button class="btn btn-success btn-lg" id="submit-quiz">
  Submit Quiz
</button>
```

### Delete Content

```html
<button class="btn btn-danger btn-md">
  <svg>...</svg>
  Delete Assignment
</button>
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

- `button.css`: Component styles
- `button.js`: Component functionality
- `index.html`: Live examples and documentation
- `README.md`: This file
