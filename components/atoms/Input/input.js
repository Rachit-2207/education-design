/**
 * Input Component JavaScript
 * Handles input interactions, validation, and states
 */

class Input {
  constructor(element) {
    this.input = element;
    this.wrapper = element.closest('.input-wrapper');
    this.group = element.closest('.input-group');
    this.init();
  }

  init() {
    // Password toggle functionality
    if (this.input.type === 'password') {
      this.initPasswordToggle();
    }

    // Clear button functionality
    if (this.input.hasAttribute('data-clearable')) {
      this.initClearButton();
    }

    // Character count functionality
    if (this.input.hasAttribute('data-maxlength')) {
      this.initCharCount();
    }

    // Real-time validation
    if (this.input.hasAttribute('data-validate')) {
      this.initValidation();
    }

    // Emit events
    this.input.addEventListener('input', (e) => {
      const customEvent = new CustomEvent('input-change', {
        bubbles: true,
        detail: { value: e.target.value, input: this.input }
      });
      this.input.dispatchEvent(customEvent);
    });
  }

  initPasswordToggle() {
    if (!this.wrapper) return;

    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.className = 'input-password-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle password visibility');
    toggleButton.innerHTML = `
      <svg class="icon-show" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
      </svg>
      <svg class="icon-hide" style="display:none;" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
      </svg>
    `;

    this.wrapper.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
      const isPassword = this.input.type === 'password';
      this.input.type = isPassword ? 'text' : 'password';
      
      const showIcon = toggleButton.querySelector('.icon-show');
      const hideIcon = toggleButton.querySelector('.icon-hide');
      
      if (isPassword) {
        showIcon.style.display = 'none';
        hideIcon.style.display = 'block';
        toggleButton.setAttribute('aria-label', 'Hide password');
      } else {
        showIcon.style.display = 'block';
        hideIcon.style.display = 'none';
        toggleButton.setAttribute('aria-label', 'Show password');
      }
    });
  }

  initClearButton() {
    if (!this.wrapper) return;

    const clearButton = document.createElement('button');
    clearButton.type = 'button';
    clearButton.className = 'input-clear-button';
    clearButton.setAttribute('aria-label', 'Clear input');
    clearButton.innerHTML = `
      <svg fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    `;

    this.wrapper.appendChild(clearButton);

    clearButton.addEventListener('click', () => {
      this.input.value = '';
      this.input.focus();
      this.input.dispatchEvent(new Event('input', { bubbles: true }));
    });
  }

  initCharCount() {
    if (!this.group) return;

    const maxLength = parseInt(this.input.getAttribute('data-maxlength'));
    const charCount = document.createElement('div');
    charCount.className = 'input-char-count';
    
    const updateCount = () => {
      const currentLength = this.input.value.length;
      charCount.textContent = `${currentLength} / ${maxLength}`;
      
      if (currentLength > maxLength) {
        charCount.classList.add('input-char-count-limit');
      } else {
        charCount.classList.remove('input-char-count-limit');
      }
    };

    this.group.appendChild(charCount);
    this.input.addEventListener('input', updateCount);
    updateCount();
  }

  initValidation() {
    const validateType = this.input.getAttribute('data-validate');
    
    this.input.addEventListener('blur', () => {
      this.validate(validateType);
    });

    this.input.addEventListener('input', () => {
      if (this.group.classList.contains('input-group-error')) {
        this.validate(validateType);
      }
    });
  }

  validate(type) {
    const value = this.input.value.trim();
    let isValid = true;
    let errorMessage = '';

    if (this.input.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    } else if (value) {
      switch (type) {
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          isValid = emailRegex.test(value);
          errorMessage = 'Please enter a valid email address';
          break;
        case 'url':
          try {
            new URL(value);
          } catch {
            isValid = false;
            errorMessage = 'Please enter a valid URL';
          }
          break;
        case 'number':
          isValid = !isNaN(value);
          errorMessage = 'Please enter a valid number';
          break;
      }
    }

    this.setError(!isValid ? errorMessage : '');
    return isValid;
  }

  setError(message) {
    if (!this.group) return;

    // Remove existing error
    const existingError = this.group.querySelector('.input-error-text');
    if (existingError) {
      existingError.remove();
    }

    if (message) {
      this.group.classList.add('input-group-error');
      this.group.classList.remove('input-group-success');
      this.input.classList.add('input-error');
      this.input.classList.remove('input-success');
      this.input.setAttribute('aria-invalid', 'true');

      const errorDiv = document.createElement('div');
      errorDiv.className = 'input-error-text';
      errorDiv.setAttribute('role', 'alert');
      errorDiv.innerHTML = `
        <svg fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
        </svg>
        ${message}
      `;
      this.group.appendChild(errorDiv);
    } else {
      this.group.classList.remove('input-group-error');
      this.input.classList.remove('input-error');
      this.input.removeAttribute('aria-invalid');
    }
  }

  setSuccess(message) {
    if (!this.group) return;

    this.group.classList.remove('input-group-error');
    this.group.classList.add('input-group-success');
    this.input.classList.remove('input-error');
    this.input.classList.add('input-success');

    if (message) {
      const successDiv = document.createElement('div');
      successDiv.className = 'input-success-text';
      successDiv.innerHTML = `
        <svg fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
        ${message}
      `;
      this.group.appendChild(successDiv);
    }
  }
}

// Auto-initialize all inputs
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.input');
  inputs.forEach(input => new Input(input));
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Input;
}
