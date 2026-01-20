# Input Component

A comprehensive, accessible input component for forms in the education platform design system.

## Features

- 📝 Multiple input types: text, email, password, number, search
- 📏 Three sizes: small, medium, large
- ♿ Fully accessible (WCAG 2.1 AA compliant)
- 🌓 Dark theme support
- 📱 Responsive design
- ✅ Real-time validation
- 🔒 Password visibility toggle
- 🔍 Search with icons
- 🧹 Clear button functionality
- 📊 Character count support
- 💬 Helper text and error messages

## Usage

### Basic Input

```html
<div class="input-group">
  <label class="input-label" for="username">Username</label>
  <div class="input-wrapper">
    <input type="text" id="username" class="input input-md" placeholder="Enter username">
  </div>
</div>
```

### Input Types

```html
<!-- Text Input -->
<input type="text" class="input input-md" placeholder="Enter text">

<!-- Email Input -->
<input type="email" class="input input-md" placeholder="name@example.com">

<!-- Password Input -->
<input type="password" class="input input-md" placeholder="Password">

<!-- Number Input -->
<input type="number" class="input input-md" placeholder="0">

<!-- Search Input -->
<input type="search" class="input input-md input-search" placeholder="Search...">
```

### Input Sizes

```html
<input type="text" class="input input-sm" placeholder="Small">
<input type="text" class="input input-md" placeholder="Medium">
<input type="text" class="input input-lg" placeholder="Large">
```

### Input States

```html
<!-- Disabled -->
<input type="text" class="input input-md" disabled>

<!-- Error -->
<div class="input-group input-group-error">
  <label class="input-label">Email</label>
  <div class="input-wrapper">
    <input type="email" class="input input-md input-error" aria-invalid="true">
  </div>
  <div class="input-error-text" role="alert">
    <svg>...</svg>
    Please enter a valid email
  </div>
</div>

<!-- Success -->
<div class="input-group input-group-success">
  <label class="input-label">Username</label>
  <div class="input-wrapper">
    <input type="text" class="input input-md input-success">
  </div>
  <div class="input-success-text">
    <svg>...</svg>
    Username is available
  </div>
</div>
```

### Input with Icons

```html
<!-- Icon Left -->
<div class="input-wrapper">
  <input type="text" class="input input-md input-icon-left" placeholder="Search">
  <span class="input-icon input-icon-left-pos">
    <svg>...</svg>
  </span>
</div>

<!-- Icon Right -->
<div class="input-wrapper">
  <input type="email" class="input input-md input-icon-right" placeholder="Email">
  <span class="input-icon input-icon-right-pos">
    <svg>...</svg>
  </span>
</div>
```

### Password with Toggle

```html
<div class="input-wrapper">
  <input type="password" class="input input-md" placeholder="Password">
  <!-- Toggle button added automatically by JavaScript -->
</div>
```

### Input with Clear Button

```html
<div class="input-wrapper">
  <input type="text" class="input input-md" data-clearable placeholder="Type something">
  <!-- Clear button added automatically by JavaScript -->
</div>
```

### Input with Character Count

```html
<div class="input-group">
  <label class="input-label">Bio</label>
  <div class="input-wrapper">
    <textarea class="input input-md" data-maxlength="150"></textarea>
  </div>
  <!-- Character count added automatically by JavaScript -->
</div>
```

### Required Field

```html
<div class="input-group">
  <label class="input-label">
    Full Name
    <span class="input-label-required">*</span>
  </label>
  <div class="input-wrapper">
    <input type="text" class="input input-md" required>
  </div>
</div>
```

### Helper Text

```html
<div class="input-group">
  <label class="input-label">Password</label>
  <div class="input-wrapper">
    <input type="password" class="input input-md">
  </div>
  <div class="input-helper-text">
    Must be at least 8 characters
  </div>
</div>
```

## JavaScript API

### Initialization

Inputs are automatically initialized on page load. For dynamic inputs:

```javascript
const input = new Input(document.querySelector('.input'));
```

### Methods

#### setError(message)

Set error state with message:

```javascript
const input = new Input(document.querySelector('#email'));
input.setError('Please enter a valid email address');
```

#### setSuccess(message)

Set success state with message:

```javascript
input.setSuccess('Email is available');
```

#### validate(type)

Validate input based on type:

```javascript
const isValid = input.validate('email');
```

### Validation Types

Add `data-validate` attribute for automatic validation:

```html
<!-- Email validation -->
<input type="email" class="input input-md" data-validate="email" required>

<!-- Number validation -->
<input type="text" class="input input-md" data-validate="number" required>

<!-- URL validation -->
<input type="text" class="input input-md" data-validate="url" required>
```

### Events

Inputs emit custom events:

```javascript
document.querySelector('.input').addEventListener('input-change', (e) => {
  console.log('Input value:', e.detail.value);
});
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.input-group` | Wrapper for label, input, and messages |
| `.input-label` | Label element |
| `.input-label-required` | Required field indicator |
| `.input-wrapper` | Wrapper for input and icons |
| `.input` | Base input class (required) |
| `.input-sm` | Small size |
| `.input-md` | Medium size |
| `.input-lg` | Large size |
| `.input-error` | Error state |
| `.input-success` | Success state |
| `.input-search` | Search input style (rounded) |
| `.input-icon-left` | Input with left icon padding |
| `.input-icon-right` | Input with right icon padding |
| `.input-icon` | Icon wrapper |
| `.input-helper-text` | Helper text below input |
| `.input-error-text` | Error message |
| `.input-success-text` | Success message |

## Data Attributes

| Attribute | Description |
|-----------|-------------|
| `data-clearable` | Adds clear button |
| `data-maxlength` | Adds character count |
| `data-validate` | Enables validation (email, number, url) |

## Accessibility

### ARIA Attributes

The component automatically manages:
- `aria-invalid`: Set on error state
- `aria-label`: For icon buttons
- `role="alert"`: For error messages
- Proper label associations with `for` and `id`

### Keyboard Navigation

- `Tab`: Navigate between inputs
- `Escape`: Clear input (with clear button)
- Full keyboard support for all interactive elements

### Screen Reader Support

- Labels properly associated with inputs
- Error messages announced with `role="alert"`
- Helper text accessible to screen readers
- Icon buttons have descriptive labels

## Best Practices

### Do's ✓

- Always provide labels for inputs
- Use helper text for format requirements
- Show real-time validation feedback
- Mark required fields clearly
- Use appropriate input types
- Provide clear error messages

### Don'ts ✗

- Don't use placeholder as label
- Don't validate on every keystroke (use blur)
- Don't hide password requirements until error
- Don't use vague error messages
- Don't make all fields required

## Education Platform Use Cases

### Student Registration

```html
<div class="input-group">
  <label class="input-label" for="student-email">
    Email Address
    <span class="input-label-required">*</span>
  </label>
  <div class="input-wrapper">
    <input type="email" id="student-email" class="input input-md input-icon-left" 
           placeholder="student@university.edu" required data-validate="email">
    <span class="input-icon input-icon-left-pos">
      <svg>...</svg>
    </span>
  </div>
  <div class="input-helper-text">Use your university email address</div>
</div>
```

### Course Search

```html
<div class="input-wrapper">
  <input type="search" class="input input-lg input-search input-icon-left" 
         placeholder="Search for courses..." data-clearable>
  <span class="input-icon input-icon-left-pos">
    <svg>...</svg>
  </span>
</div>
```

### Assignment Upload

```html
<div class="input-group">
  <label class="input-label" for="assignment-title">Assignment Title</label>
  <div class="input-wrapper">
    <input type="text" id="assignment-title" class="input input-md" 
           data-maxlength="100" placeholder="Enter assignment title">
  </div>
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

- `input.css`: Component styles
- `input.js`: Component functionality
- `index.html`: Live examples and documentation
- `README.md`: This file
