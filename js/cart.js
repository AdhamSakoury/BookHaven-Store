/**
 * Cart Management JavaScript for BookHaven
 * Handles cart operations, promo codes, and checkout preparation
 */

// Initialize cart
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
let appliedPromo = null;

// Promo codes configuration
const promoCodes = {
    'BOOKS20': { discount: 0.20, description: '20% off' },
    'SAVE10': { discount: 0.10, description: '10% off' },
    'WELCOME': { discount: 0.15, description: '15% off for new customers' }
};

// Check if user is logged in before adding to cart
function checkLoginBeforeAction(action) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser) {
        showToast('Please login to add items to cart', 'error');
        
        // Store intended action
        sessionStorage.setItem('redirectAfterLogin', window.location.href);
        
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        
        return false;
    }
    
    return true;
}

// Add to Cart with login check
function addToCart(bookId) {
    // Check login first
    if (!checkLoginBeforeAction('addToCart')) {
        return;
    }
    
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    
    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            image: book.image,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showToast(`${book.title} added to cart!`);
    
    // Redirect to cart page
    setTimeout(() => {
        window.location.href = 'cart.html';
    }, 800);
}

// Rest of your cart.js functions remain the same...

// Remove from Cart
function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    saveCart();
    updateCartCount();
    renderCart();
    showToast('Item removed from cart');
}

// Update Quantity
function updateQuantity(bookId, change) {
    const item = cart.find(item => item.id === bookId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(bookId);
        return;
    }
    
    saveCart();
    updateCartCount();
    renderCart();
}

// Save Cart to Session Storage
function saveCart() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Render Cart Page
function renderCart() {
    const container = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '';
        emptyCart.classList.remove('hidden');
        if (checkoutBtn) checkoutBtn.disabled = true;
        updateSummary();
        return;
    }
    
    emptyCart.classList.add('hidden');
    if (checkoutBtn) checkoutBtn.disabled = false;
    
    container.innerHTML = cart.map(item => `
        <div class="bg-white dark:bg-dark rounded-lg shadow p-4 flex items-center space-x-4">
            <img src="${item.image}" alt="${item.title}" class="w-20 h-28 object-cover rounded-md">
            <div class="flex-1">
                <h3 class="font-bold text-lg">${item.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">${item.author}</p>
                <p class="text-primary font-semibold mt-1">${formatCurrency(item.price)}</p>
            </div>
            <div class="flex items-center space-x-2">
                <button onclick="updateQuantity(${item.id}, -1)" 
                    class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                </button>
                <span class="w-8 text-center font-semibold">${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)" 
                    class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
            <div class="text-right min-w-[80px]">
                <p class="font-bold text-lg">${formatCurrency(item.price * item.quantity)}</p>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 text-sm hover:underline mt-1">Remove</button>
            </div>
        </div>
    `).join('');
    
    updateSummary();
}

// Update Order Summary
function updateSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
    const total = subtotal - discount;
    
    const subtotalEl = document.getElementById('subtotal');
    const discountEl = document.getElementById('discount');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
    if (discountEl) discountEl.textContent = `-${formatCurrency(discount)}`;
    if (totalEl) totalEl.textContent = formatCurrency(total);
}

// Apply Promo Code
function applyPromoCode() {
    const input = document.getElementById('promo-code');
    const message = document.getElementById('promo-message');
    const code = input.value.trim().toUpperCase();
    
    if (!code) {
        showPromoMessage('Please enter a promo code', 'error');
        return;
    }
    
    if (promoCodes[code]) {
        appliedPromo = promoCodes[code];
        showPromoMessage(`${appliedPromo.description} applied!`, 'success');
        updateSummary();
        sessionStorage.setItem('appliedPromo', JSON.stringify(appliedPromo));
    } else {
        appliedPromo = null;
        sessionStorage.removeItem('appliedPromo');
        showPromoMessage('Invalid promo code', 'error');
        updateSummary();
    }
}

function showPromoMessage(text, type) {
    const message = document.getElementById('promo-message');
    if (message) {
        message.textContent = text;
        message.classList.remove('hidden', 'text-green-600', 'text-red-600');
        message.classList.add(type === 'success' ? 'text-green-600' : 'text-red-600');
    }
}

// Proceed to Checkout
function proceedToCheckout() {
    // Check login before checkout
    if (!checkLoginBeforeAction('checkout')) {
        return;
    }
    
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    window.location.href = 'checkout.html';
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
        
        const savedPromo = sessionStorage.getItem('appliedPromo');
        if (savedPromo) {
            appliedPromo = JSON.parse(savedPromo);
            const promoInput = document.getElementById('promo-code');
            if (promoInput) {
                for (let [code, data] of Object.entries(promoCodes)) {
                    if (data.discount === appliedPromo.discount) {
                        promoInput.value = code;
                        showPromoMessage(`${appliedPromo.description} applied!`, 'success');
                        break;
                    }
                }
            }
        }
    }
});