/**
 * Authentication JavaScript for BookHaven
 * Handles login, register, and logout functionality
 */

// Handle Login Form Submission
function handleLogin(event) {
    event.preventDefault();
    
    clearErrors();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    let isValid = true;
    
    // Validate email
    if (!isValidEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate password
    if (password.length < 6) {
        showError('password-error', 'Password must be at least 6 characters');
        isValid = false;
    }
    
    if (!isValid) return false;
    
    // Check if user exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Store current user in session
        sessionStorage.setItem('currentUser', JSON.stringify({
            name: user.name,
            email: user.email,
            phone: user.phone || '',
            profilePhoto: user.profilePhoto || null
        }));
        
        showToast('Login successful! Welcome back.');
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        // Check if email exists but password is wrong
        const emailExists = users.find(u => u.email === email);
        if (emailExists) {
            showError('password-error', 'Incorrect password');
            showToast('Incorrect password. Please try again.', 'error');
        } else {
            showError('email-error', 'Email not found');
            showToast('Email not found. Please register first.', 'error');
        }
    }
    
    return false;
}

// Handle Register Form Submission
function handleRegister(event) {
    event.preventDefault();
    
    clearErrors();
    
    const name = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    let isValid = true;
    
    // Validate name
    if (name.length < 2) {
        showError('name-error', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Validate email
    if (!isValidEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate password strength
    if (!isStrongPassword(password)) {
        showError('password-error', 'Password must be at least 8 characters with 1 uppercase and 1 number');
        isValid = false;
    }
    
    // Validate password match
    if (password !== confirmPassword) {
        showError('confirm-error', 'Passwords do not match');
        isValid = false;
    }
    
    if (!isValid) return false;
    
    // Check if email already exists - NOTIFY USER AND STOP
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
        showError('email-error', 'An account with this email already exists');
        showToast('Account already exists! Please login or use a different email.', 'error');
        
        // Add a login link below the error
        const emailField = document.getElementById('email');
        const loginLink = document.createElement('div');
        loginLink.className = 'mt-2 text-sm';
        loginLink.innerHTML = '<a href="login.html" class="text-primary hover:underline font-semibold">Already have an account? Login here</a>';
        
        // Remove existing link if any
        const existingLink = emailField.parentNode.querySelector('.login-link');
        if (existingLink) existingLink.remove();
        
        loginLink.classList.add('login-link');
        emailField.parentNode.appendChild(loginLink);
        
        return false;
    }
    
    // Save new user
    const newUser = {
        name: name,
        email: email,
        password: password,
        phone: '',
        profilePhoto: null,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    showToast('Registration successful! Please login.');
    
    // Redirect to login page
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
    
    return false;
}

// Logout Function
function logout() {
    sessionStorage.removeItem('currentUser');
    
    if (typeof updateAuthUI === 'function') {
        updateAuthUI();
    }
    
    showToast('Logged out successfully');
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Validation Helpers
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isStrongPassword(password) {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return strongRegex.test(password);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('[id$="-error"]');
    errorElements.forEach(el => el.classList.add('hidden'));
    
    // Remove login links
    const loginLinks = document.querySelectorAll('.login-link');
    loginLinks.forEach(link => link.remove());
}