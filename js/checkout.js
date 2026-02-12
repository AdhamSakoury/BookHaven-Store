/**
 * Checkout JavaScript for BookHaven
 * Handles form validation and order processing
 */

// Initialize checkout page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('checkout.html')) {
        loadCheckoutSummary();
        setupCardFormatting();
    }
});

// Load Checkout Summary
function loadCheckoutSummary() {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const container = document.getElementById('checkout-items');
    const appliedPromo = JSON.parse(sessionStorage.getItem('appliedPromo')) || null;
    
    if (!container) return;
    
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    
    // Render items
    container.innerHTML = cart.map(item => `
        <div class="flex items-center space-x-3 pb-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
            <img src="${item.image}" alt="${item.title}" class="w-12 h-16 object-cover rounded">
            <div class="flex-1">
                <h4 class="font-semibold text-sm">${item.title}</h4>
                <p class="text-xs text-gray-500">Qty: ${item.quantity}</p>
            </div>
            <span class="font-semibold">${formatCurrency(item.price * item.quantity)}</span>
        </div>
    `).join('');
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
    const total = subtotal - discount;
    
    document.getElementById('checkout-subtotal').textContent = formatCurrency(subtotal);
    document.getElementById('checkout-discount').textContent = `-${formatCurrency(discount)}`;
    document.getElementById('checkout-total').textContent = formatCurrency(total);
}

// Setup Card Formatting
function setupCardFormatting() {
    const cardInput = document.getElementById('card-number');
    const expiryInput = document.getElementById('expiry');
    
    if (cardInput) {
        cardInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.substring(0, 16);
            const parts = value.match(/.{1,4}/g);
            e.target.value = parts ? parts.join(' ') : value;
        });
    }
    
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
}

// Handle Checkout Form Submission
function handleCheckout(event) {
    event.preventDefault();
    
    // Clear previous errors
    clearCheckoutErrors();
    
    let isValid = true;
    
    // Validate fields
    const fields = {
        'first-name': { required: true, minLength: 2 },
        'last-name': { required: true, minLength: 2 },
        'email': { required: true, type: 'email' },
        'phone': { required: true, pattern: /^[\d\s\-\(\)\+]{10,}$/ },
        'address': { required: true, minLength: 5 },
        'city': { required: true, minLength: 2 },
        'state': { required: true, minLength: 2 },
        'zip': { required: true, pattern: /^\d{5}(-\d{4})?$/ },
        'card-number': { required: true, pattern: /^[\d\s]{19}$/ },
        'expiry': { required: true, pattern: /^(0[1-9]|1[0-2])\/\d{2}$/ },
        'cvv': { required: true, pattern: /^\d{3,4}$/ }
    };
    
    for (let [fieldId, rules] of Object.entries(fields)) {
        const element = document.getElementById(fieldId);
        const value = element.value.trim();
        
        if (rules.required && !value) {
            showCheckoutError(fieldId, 'This field is required');
            isValid = false;
            continue;
        }
        
        if (rules.minLength && value.length < rules.minLength) {
            showCheckoutError(fieldId, `Must be at least ${rules.minLength} characters`);
            isValid = false;
            continue;
        }
        
        if (rules.type === 'email' && !isValidEmail(value)) {
            showCheckoutError(fieldId, 'Please enter a valid email');
            isValid = false;
            continue;
        }
        
        if (rules.pattern && !rules.pattern.test(value)) {
            let message = 'Invalid format';
            if (fieldId === 'zip') message = 'Enter valid ZIP code (12345)';
            if (fieldId === 'card-number') message = 'Enter valid 16-digit card number';
            if (fieldId === 'expiry') message = 'Enter valid date (MM/YY)';
            if (fieldId === 'cvv') message = 'Enter valid CVV';
            if (fieldId === 'phone') message = 'Enter valid phone number';
            
            showCheckoutError(fieldId, message);
            isValid = false;
        }
    }
    
    if (!isValid) {
        showToast('Please fix the errors in the form', 'error');
        return false;
    }
    
    // Process order (simulate)
    processOrder();
    return false;
}

function showCheckoutError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + '-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
    const input = document.getElementById(fieldId);
    if (input) {
        input.classList.add('border-red-500');
    }
}

function clearCheckoutErrors() {
    const errorElements = document.querySelectorAll('[id$="-error"]');
    errorElements.forEach(el => el.classList.add('hidden'));
    
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('border-red-500'));
}

function processOrder() {
    // Show success modal
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
    
    // Clear cart
    sessionStorage.removeItem('cart');
    sessionStorage.removeItem('appliedPromo');
    updateCartCount();
}

// Close modal on outside click
document.addEventListener('click', function(event) {
    const modal = document.getElementById('success-modal');
    if (event.target === modal) {
        window.location.href = 'index.html';
    }
});