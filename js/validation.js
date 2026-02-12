// ============================================
// BOOKSTORE - Form Validation
// Handles: Login, Register, Checkout Forms
// ============================================

class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.errors = {};
    if (this.form) {
      this.init();
    }
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Real-time validation on input blur
    const inputs = this.form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.errors = {};
    
    const inputs = this.form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });
    
    if (isValid) {
      this.onSuccess();
    }
  }

  validateField(input) {
    const name = input.name;
    const value = input.value.trim();
    const type = input.type;
    
    // Clear previous error
    this.clearError(input);
    
    // Required check
    if (input.hasAttribute('required') && !value) {
      this.setError(input, 'This field is required');
      return false;
    }
    
    // Email validation
    if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        this.setError(input, 'Please enter a valid email address');
        return false;
      }
    }
    
    // Password validation
    if (name === 'password' && value) {
      if (value.length < 8) {
        this.setError(input, 'Password must be at least 8 characters');
        return false;
      }
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
        this.setError(input, 'Password must contain uppercase, lowercase, and number');
        return false;
      }
    }
    
    // Confirm password validation
    if (name === 'confirmPassword' && value) {
      const password = this.form.querySelector('[name="password"]').value;
      if (value !== password) {
        this.setError(input, 'Passwords do not match');
        return false;
      }
    }
    
    // Phone validation
    if (type === 'tel' && value) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
        this.setError(input, 'Please enter a valid phone number');
        return false;
      }
    }
    
    // Zip code validation
    if (name === 'zip' && value) {
      const zipRegex = /^\d{5}(-\d{4})?$/;
      if (!zipRegex.test(value)) {
        this.setError(input, 'Please enter a valid zip code');
        return false;
      }
    }
    
    // Credit card validation
    if (name === 'cardNumber' && value) {
      const cardRegex = /^\d{13,19}$/;
      const cleaned = value.replace(/\s/g, '');
      if (!cardRegex.test(cleaned)) {
        this.setError(input, 'Please enter a valid card number');
        return false;
      }
    }
    
    // CVV validation
    if (name === 'cvv' && value) {
      const cvvRegex = /^\d{3,4}$/;
      if (!cvvRegex.test(value)) {
        this.setError(input, 'Please enter a valid CVV');
        return false;
      }
    }
    
    // Expiry date validation
    if (name === 'expiry' && value) {
      const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!expiryRegex.test(value)) {
        this.setError(input, 'Format: MM/YY');
        return false;
      }
      
      // Check if card is expired
      const [month, year] = value.split('/');
      const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
      const now = new Date();
      if (expiry < now) {
        this.setError(input, 'Card has expired');
        return false;
      }
    }
    
    return true;
  }

  setError(input, message) {
    input.classList.add('error');
    this.errors[input.name] = message;
    
    // Remove existing error message
    const existingError = input.parentElement.querySelector('.form-error');
    if (existingError) {
      existingError.remove();
    }
    
    // Add error message
    const errorElement = document.createElement('span');
    errorElement.className = 'form-error';
    errorElement.textContent = message;
    input.parentElement.appendChild(errorElement);
  }

  clearError(input) {
    input.classList.remove('error');
    const errorElement = input.parentElement.querySelector('.form-error');
    if (errorElement) {
      errorElement.remove();
    }
  }

  onSuccess() {
    // Override this method in specific implementations
    console.log('Form is valid!');
  }
}

// ============================================
// Login Form Validator
// ============================================
class LoginValidator extends FormValidator {
  onSuccess() {
    const email = this.form.querySelector('[name="email"]').value;
    
    // Store logged in user
    localStorage.setItem('user', JSON.stringify({ email }));
    
    window.showNotification('Login successful!');
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  }
}

// ============================================
// Register Form Validator
// ============================================
class RegisterValidator extends FormValidator {
  onSuccess() {
    const name = this.form.querySelector('[name="name"]').value;
    const email = this.form.querySelector('[name="email"]').value;
    
    // Store registered user
    localStorage.setItem('user', JSON.stringify({ name, email }));
    
    window.showNotification('Registration successful!');
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  }
}

// ============================================
// Checkout Form Validator
// ============================================
class CheckoutValidator extends FormValidator {
  onSuccess() {
    // Get form data
    const formData = new FormData(this.form);
    const orderData = {};
    formData.forEach((value, key) => {
      orderData[key] = value;
    });
    
    // Get cart items
    const cart = window.cartManager.getItems();
    const total = window.cartManager.getTotal();
    const discount = parseFloat(localStorage.getItem('discount') || 0);
    const finalTotal = total - discount;
    
    // Create order object
    const order = {
      id: Date.now(),
      date: new Date().toISOString(),
      customer: orderData,
      items: cart,
      subtotal: total,
      discount: discount,
      total: finalTotal
    };
    
    // Store order
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart and discount
    window.cartManager.clearCart();
    localStorage.removeItem('discount');
    localStorage.removeItem('promoCode');
    
    window.showNotification('Order placed successfully!');
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  }
}

// Export validators
window.FormValidator = FormValidator;
window.LoginValidator = LoginValidator;
window.RegisterValidator = RegisterValidator;
window.CheckoutValidator = CheckoutValidator;
