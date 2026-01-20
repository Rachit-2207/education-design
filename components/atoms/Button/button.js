/**
 * Button Component JavaScript
 * Handles button interactions and states
 */

class Button {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    // Add click handler
    this.element.addEventListener('click', this.handleClick.bind(this));
    
    // Handle loading state
    if (this.element.classList.contains('btn-loading')) {
      this.element.setAttribute('aria-busy', 'true');
    }

    // Ensure disabled buttons have proper ARIA
    if (this.element.disabled || this.element.classList.contains('btn-disabled')) {
      this.element.setAttribute('aria-disabled', 'true');
    }
  }

  handleClick(event) {
    // Prevent click if disabled or loading
    if (this.element.disabled || 
        this.element.classList.contains('btn-disabled') ||
        this.element.classList.contains('btn-loading')) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }

    // Emit custom event
    const customEvent = new CustomEvent('btn-click', {
      bubbles: true,
      detail: { button: this.element }
    });
    this.element.dispatchEvent(customEvent);
  }

  setLoading(isLoading) {
    if (isLoading) {
      this.element.classList.add('btn-loading');
      this.element.setAttribute('aria-busy', 'true');
      this.element.disabled = true;
    } else {
      this.element.classList.remove('btn-loading');
      this.element.removeAttribute('aria-busy');
      this.element.disabled = false;
    }
  }

  setDisabled(isDisabled) {
    if (isDisabled) {
      this.element.classList.add('btn-disabled');
      this.element.setAttribute('aria-disabled', 'true');
      this.element.disabled = true;
    } else {
      this.element.classList.remove('btn-disabled');
      this.element.removeAttribute('aria-disabled');
      this.element.disabled = false;
    }
  }
}

// Auto-initialize all buttons
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => new Button(button));
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Button;
}
