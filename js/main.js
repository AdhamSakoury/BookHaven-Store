document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
    updateAuthUI();
    updateCartCount();
});
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcons(false);
    }
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    if (sunIcon && moonIcon) {
        if (isDark) {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

function toggleUserMenu() {
    const dropdown = document.getElementById('user-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

document.addEventListener('click', function(event) {
    const userMenu = document.getElementById('user-menu');
    const userDropdown = document.getElementById('user-dropdown');
    if (userMenu && userDropdown && !userMenu.contains(event.target)) {
        userDropdown.classList.add('hidden');
    }
});

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        if (type === 'error') {
            toast.classList.remove('bg-gray-800');
            toast.classList.add('bg-red-600');
        } else {
            toast.classList.remove('bg-red-600');
            toast.classList.add('bg-gray-800');
        }
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('toast-enter');
            toast.classList.remove('toast-exit');
        }, 10);
        setTimeout(() => {
            toast.classList.remove('toast-enter');
            toast.classList.add('toast-exit');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 300);
        }, 3000);
    }
}

function updateAuthUI() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');
    
    const mobileAuthButtons = document.getElementById('mobile-auth-buttons');
    const mobileUserMenu = document.getElementById('mobile-user-menu');
    
    if (currentUser) {
        if (authButtons) authButtons.classList.add('hidden');
        if (userMenu) {
            userMenu.classList.remove('hidden');
            updateNavProfilePhoto(currentUser);
        }
        if (mobileAuthButtons) mobileAuthButtons.classList.add('hidden');
        if (mobileUserMenu) {
            mobileUserMenu.classList.remove('hidden');
            updateMobileNavProfile(currentUser);
        }
    } else {
        if (authButtons) authButtons.classList.remove('hidden');
        if (userMenu) userMenu.classList.add('hidden');
        if (mobileAuthButtons) mobileAuthButtons.classList.remove('hidden');
        if (mobileUserMenu) mobileUserMenu.classList.add('hidden');
    }
}

function updateNavProfilePhoto(user) {
    const navImg = document.getElementById('nav-profile-img');
    const navInitial = document.getElementById('nav-profile-initial');
    
    if (user.profilePhoto) {
        if (navImg) {
            navImg.src = user.profilePhoto;
            navImg.classList.remove('hidden');
        }
        if (navInitial) navInitial.classList.add('hidden');
    } else {
        if (navImg) navImg.classList.add('hidden');
        if (navInitial) {
            navInitial.classList.remove('hidden');
            navInitial.textContent = user.name.charAt(0).toUpperCase();
        }
    }
}

function updateMobileNavProfile(user) {
    const mobileNavImg = document.getElementById('mobile-nav-profile-img');
    const mobileNavInitial = document.getElementById('mobile-nav-profile-initial');
    const mobileUserName = document.getElementById('mobile-user-name');
    const mobileUserEmail = document.getElementById('mobile-user-email');
    
    if (user.profilePhoto) {
        if (mobileNavImg) {
            mobileNavImg.src = user.profilePhoto;
            mobileNavImg.classList.remove('hidden');
        }
        if (mobileNavInitial) mobileNavInitial.classList.add('hidden');
    } else {
        if (mobileNavImg) mobileNavImg.classList.add('hidden');
        if (mobileNavInitial) {
            mobileNavInitial.classList.remove('hidden');
            mobileNavInitial.textContent = user.name.charAt(0).toUpperCase();
        }
    }
    
    if (mobileUserName) mobileUserName.textContent = user.name;
    if (mobileUserEmail) mobileUserEmail.textContent = user.email;
}
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    showToast('Thank you for subscribing! Check your email for confirmation.');
    event.target.reset();
}

function filterByCategory(category) {
    sessionStorage.setItem('selectedCategory', category);
    window.location.href = 'books.html';
}

function updateCartCount() {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        if (count > 0) {
            badge.textContent = count;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}

function formatCurrency(amount) {
    return '$' + parseFloat(amount).toFixed(2);
}
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let html = '';
    for (let i = 0; i < fullStars; i++) {
        html += '<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }
    if (hasHalfStar) {
        html += '<svg class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="#FBBF24"/><stop offset="50%" stop-color="#D1D5DB"/></linearGradient></defs><path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        html += '<svg class="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }
    return html;
}