function handleLogin(event) {
    event.preventDefault();
    clearErrors();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    let isValid = true;
    if (!isValidEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }
    if (password.length < 6) {
        showError('password-error', 'Password must be at least 6 characters');
        isValid = false;
    }
    if (!isValid) return false;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify({
            name: user.name,
            email: user.email,
            phone: user.phone || '',
            profilePhoto: user.profilePhoto || null
        }));
        showToast('Login successful! Welcome back.');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
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

function handleRegister(event) {
    event.preventDefault();
    clearErrors();
    const name = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    let isValid = true;
    if (name.length < 2) {
        showError('name-error', 'Name must be at least 2 characters');
        isValid = false;
    }
    if (!isValidEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }
    if (!isStrongPassword(password)) {
        showError('password-error', 'Password must be at least 8 characters with 1 uppercase and 1 number');
        isValid = false;
    }
    if (password !== confirmPassword) {
        showError('confirm-error', 'Passwords do not match');
        isValid = false;
    }
    if (!isValid) return false;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        showError('email-error', 'An account with this email already exists');
        showToast('Account already exists! Please login or use a different email.', 'error');
        const emailField = document.getElementById('email');
        const loginLink = document.createElement('div');
        loginLink.className = 'mt-2 text-sm';
        loginLink.innerHTML = '<a href="login.html" class="text-primary hover:underline font-semibold">Already have an account? Login here</a>';
        const existingLink = emailField.parentNode.querySelector('.login-link');
        if (existingLink) existingLink.remove();
        loginLink.classList.add('login-link');
        emailField.parentNode.appendChild(loginLink);
        return false;
    }
    
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
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
    return false;
}

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
    const loginLinks = document.querySelectorAll('.login-link');
    loginLinks.forEach(link => link.remove());
}