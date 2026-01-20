# Typography Component

A comprehensive typography system for the education platform with semantic headings, body text, and utility classes.

## Features

- 📝 Complete heading hierarchy (Display, H1-H6)
- 📖 Multiple body text sizes
- 🎨 Font weight variants
- 🌈 Semantic color utilities
- 💻 Code/monospace styling
- 🔤 Text transformation utilities
- ✂️ Text truncation support
- 🔗 Link styles
- ♿ Fully accessible (WCAG 2.1 AA compliant)
- 🌓 Dark theme support
- 📱 Responsive typography

## Usage

### Display Heading

```html
<h1 class="display-heading">Extra Large Display</h1>
```

### Headings

```html
<h1 class="heading-1">Heading 1</h1>
<h2 class="heading-2">Heading 2</h2>
<h3 class="heading-3">Heading 3</h3>
<h4 class="heading-4">Heading 4</h4>
<h5 class="heading-5">Heading 5</h5>
<h6 class="heading-6">Heading 6</h6>
```

### Body Text

```html
<!-- Lead text (introductory) -->
<p class="lead-text">Introduction paragraph with larger, lighter text.</p>

<!-- Body sizes -->
<p class="body-xl">Extra large body text</p>
<p class="body-lg">Large body text</p>
<p class="body-base">Base body text (default)</p>
<p class="body-sm">Small body text</p>
<p class="body-xs">Extra small body text</p>
```

### UI Text

```html
<!-- For interface elements -->
<span class="ui-text-lg">Large UI text</span>
<span class="ui-text-base">Base UI text</span>
<span class="ui-text-sm">Small UI text</span>
<span class="ui-text-xs">Extra small UI text</span>
```

### Specialty Styles

```html
<!-- Subtitle -->
<p class="subtitle">Supporting text for headings</p>

<!-- Caption -->
<p class="caption">Image caption or small annotation</p>

<!-- Overline -->
<p class="overline">Category Label</p>

<!-- Inline code -->
<p>Use <code class="code-inline">const x = 10;</code> for constants.</p>

<!-- Code block -->
<pre class="code-block">function example() {
  return true;
}</pre>

<!-- Blockquote -->
<blockquote class="blockquote">
  An inspiring quote about education.
</blockquote>
```

### Font Weights

```html
<p class="font-light">Light (300)</p>
<p class="font-normal">Normal (400)</p>
<p class="font-medium">Medium (500)</p>
<p class="font-semibold">Semibold (600)</p>
<p class="font-bold">Bold (700)</p>
```

### Text Colors

```html
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-tertiary">Tertiary text</p>
<p class="text-brand-primary">Brand primary</p>
<p class="text-success">Success color</p>
<p class="text-warning">Warning color</p>
<p class="text-error">Error color</p>
<p class="text-info">Info color</p>
```

### Links

```html
<a href="#" class="link">Standard link</a>
<a href="#" class="link link-underline">Underlined link</a>
<a href="#" class="link link-muted">Muted link</a>
```

### Text Alignment

```html
<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
<p class="text-justify">Justified text</p>
```

### Text Transform

```html
<p class="text-uppercase">uppercase text</p>
<p class="text-lowercase">LOWERCASE TEXT</p>
<p class="text-capitalize">capitalize words</p>
```

### Text Decoration

```html
<p class="text-underline">Underlined text</p>
<p class="text-line-through">Strikethrough text</p>
<p class="text-no-decoration">No decoration</p>
```

### Text Truncation

```html
<!-- Single line truncation -->
<p class="text-truncate">Long text that will be cut off...</p>

<!-- Multi-line truncation -->
<p class="text-truncate-2">Truncate after 2 lines</p>
<p class="text-truncate-3">Truncate after 3 lines</p>
```

### Text Highlight

```html
<p>Text with <span class="text-highlight">highlighted portion</span></p>
```

## CSS Classes

### Headings

| Class | Size | Use Case |
|-------|------|----------|
| `.display-heading` | 3rem (60px) | Hero sections, landing pages |
| `.heading-1` | 3rem (48px) | Main page title |
| `.heading-2` | 2.25rem (36px) | Major section titles |
| `.heading-3` | 1.875rem (30px) | Subsection titles |
| `.heading-4` | 1.5rem (24px) | Card titles, smaller sections |
| `.heading-5` | 1.25rem (20px) | Minor headings |
| `.heading-6` | 1.125rem (18px) | Smallest semantic heading |

### Body Text

| Class | Size | Use Case |
|-------|------|----------|
| `.lead-text` | 1.25rem (20px) | Introductory paragraphs |
| `.body-xl` | 1.25rem (20px) | Emphasized content |
| `.body-lg` | 1.125rem (18px) | Comfortable reading |
| `.body-base` | 1rem (16px) | Default body text |
| `.body-sm` | 0.875rem (14px) | Secondary info |
| `.body-xs` | 0.75rem (12px) | Fine print |

### UI Text

| Class | Size | Font Family |
|-------|------|-------------|
| `.ui-text-lg` | 1.125rem | System UI font |
| `.ui-text-base` | 1rem | System UI font |
| `.ui-text-sm` | 0.875rem | System UI font |
| `.ui-text-xs` | 0.75rem | System UI font |

## Typography Scale

Our typography system uses a modular scale based on design tokens:

- **xs**: 0.75rem (12px)
- **sm**: 0.875rem (14px)
- **base**: 1rem (16px)
- **lg**: 1.125rem (18px)
- **xl**: 1.25rem (20px)
- **2xl**: 1.5rem (24px)
- **3xl**: 1.875rem (30px)
- **4xl**: 2.25rem (36px)
- **5xl**: 3rem (48px)
- **6xl**: 3.75rem (60px)

## Font Families

### UI Font (Inter)
Used for headings and interface elements. Provides clean, modern appearance.

### Content Font (Merriweather)
Used for body text and long-form content. Optimized for readability.

### Monospace Font (JetBrains Mono)
Used for code examples and technical content.

## Line Heights

- **none**: 1
- **tight**: 1.25 (headings)
- **snug**: 1.375
- **normal**: 1.5 (body text)
- **relaxed**: 1.625 (long content)
- **loose**: 2

## Accessibility

### WCAG Compliance

- All text meets WCAG 2.1 AA contrast requirements
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text (18px+ or 14px+ bold)

### Best Practices

- Maintain proper heading hierarchy (don't skip levels)
- Use semantic HTML elements
- Provide sufficient line spacing
- Keep line lengths readable (45-75 characters)
- Ensure links are distinguishable
- Test with screen readers

## Best Practices

### Do's ✓

- Maintain consistent heading hierarchy
- Use semantic HTML elements
- Choose appropriate text sizes for context
- Ensure sufficient contrast
- Keep paragraphs and lines at readable lengths
- Use UI font for interface, content font for reading

### Don'ts ✗

- Don't skip heading levels
- Don't rely solely on color to convey meaning
- Don't use long lines of text (max 75 characters)
- Don't use too many font weights in one design
- Don't make body text too small (<14px)

## Education Platform Use Cases

### Course Title

```html
<div class="course-header">
  <p class="overline">Computer Science</p>
  <h1 class="heading-1">Introduction to Web Development</h1>
  <p class="subtitle">Master HTML, CSS, and JavaScript</p>
</div>
```

### Lesson Content

```html
<article>
  <h2 class="heading-3">Chapter 1: Getting Started</h2>
  <p class="lead-text">
    Introduction to the fundamental concepts...
  </p>
  <p class="body-base paragraph">
    Detailed explanation of the topic...
  </p>
</article>
```

### Assignment

```html
<div class="assignment">
  <h3 class="heading-4">Assignment 1: Build Your First Page</h3>
  <p class="caption">Due: October 15, 2024</p>
  <p class="body-base">
    Create a personal portfolio using HTML and CSS...
  </p>
</div>
```

### Code Example

```html
<div class="code-example">
  <h4 class="heading-5">Example Code</h4>
  <pre class="code-block">function greet(name) {
  return `Hello, ${name}!`;
}</pre>
  <p class="caption">Basic function declaration</p>
</div>
```

### Instructional Quote

```html
<blockquote class="blockquote">
  Education is the most powerful weapon which you can use to change the world.
</blockquote>
<p class="caption">— Nelson Mandela</p>
```

## Responsive Behavior

Typography automatically adjusts for smaller screens:

- Display and heading sizes reduce on mobile
- Line heights optimize for device size
- Maintains readability across all viewports

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- `base.css`: Design system tokens
- Modern browser with CSS custom properties support
- Web fonts: Inter, Merriweather, JetBrains Mono

## Files

- `typography.css`: Component styles
- `index.html`: Live examples and documentation
- `README.md`: This file
