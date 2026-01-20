# Contributing to Education Design System

Thank you for your interest in contributing to the Education Design System! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/education-design.git
   cd education-design
   ```
3. **Install dependencies**:
   ```bash
   npm install
   cd react-components && npm install
   cd ../storybook && npm install
   ```
4. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

### Reporting Bugs

- Use the GitHub issue tracker
- Include a clear description of the problem
- Provide steps to reproduce the issue
- Include screenshots if applicable
- Specify browser and OS information

### Suggesting Enhancements

- Open an issue with the "enhancement" label
- Clearly describe the proposed feature
- Explain why it would be useful
- Provide examples if possible

### Adding Components

When adding new components:

1. Follow the atomic design methodology
2. Create both HTML/CSS and React versions
3. Include comprehensive documentation
4. Write Storybook stories
5. Ensure accessibility compliance (WCAG 2.1 AA)
6. Add usage examples
7. Test across all breakpoints

## Development Workflow

### Working on Components

1. **Create component files**:
   - HTML: `/components/{atoms|molecules|organisms}/ComponentName/`
   - React: `/react-components/src/components/ComponentName.jsx`
   - Story: `/storybook/stories/ComponentName.stories.js`

2. **Follow naming conventions**:
   - Components: PascalCase (e.g., `CourseCard`)
   - Files: kebab-case for HTML/CSS (e.g., `course-card.html`)
   - Classes: BEM methodology (e.g., `course-card__title`)

3. **Document your component**:
   - Add README.md in component folder
   - Include props documentation for React
   - Provide usage examples
   - Document accessibility features

### Testing

- Test components across all breakpoints
- Verify keyboard navigation
- Check color contrast ratios
- Test with screen readers
- Validate HTML
- Cross-browser testing (Chrome, Firefox, Safari, Edge)

### Running Storybook

```bash
cd storybook
npm run storybook
```

Visit http://localhost:6006 to view the component library.

## Style Guidelines

### HTML

- Use semantic HTML5 elements
- Include proper ARIA labels and roles
- Maintain proper heading hierarchy
- Add alt text for all images

### CSS

- Use CSS custom properties for theming
- Follow BEM naming convention
- Mobile-first approach
- Use design tokens from `/design-system/tokens/`

### JavaScript

- Use ES6+ syntax
- Add JSDoc comments
- Handle errors appropriately
- Avoid inline event handlers

### React

- Use functional components with hooks
- Add PropTypes for type checking
- Keep components small and focused
- Use meaningful prop names
- Document complex logic

## Commit Guidelines

We follow conventional commit messages:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(button): add loading state variant
fix(navbar): resolve mobile menu z-index issue
docs(readme): update installation instructions
```

## Pull Request Process

1. **Update documentation** for any changed functionality
2. **Ensure all tests pass** and code follows style guidelines
3. **Update the README.md** if needed
4. **Provide a clear PR description**:
   - What changes were made
   - Why these changes are necessary
   - Any breaking changes
   - Screenshots for UI changes

5. **Request review** from maintainers
6. **Address feedback** promptly
7. **Squash commits** if requested

### PR Checklist

Before submitting your PR, ensure:

- [ ] Code follows project style guidelines
- [ ] Component is accessible (WCAG 2.1 AA)
- [ ] Component is responsive across all breakpoints
- [ ] Documentation is complete
- [ ] Storybook story is added
- [ ] Examples are provided
- [ ] No console errors or warnings
- [ ] Browser compatibility verified
- [ ] Commit messages follow convention

## Questions?

If you have questions about contributing, feel free to:
- Open an issue with the "question" label
- Reach out to the maintainers

Thank you for contributing to the Education Design System! 🎓
