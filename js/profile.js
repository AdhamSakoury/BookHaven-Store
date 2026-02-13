document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!currentUser) {
        showToast('Please login to view your profile', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }
    loadProfileData();
    updateProfileNav();
});

function loadProfileData() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userData = users.find(u => u.email === currentUser.email);
    
    if (userData) {
        document.getElementById('profile-name').value = userData.name || '';
        document.getElementById('profile-email').value = userData.email || '';
        document.getElementById('profile-phone').value = userData.phone || '';
        document.getElementById('member-since').value = userData.createdAt ? new Date(userData.createdAt).toLocaleDateString() : 'N/A';
        if (userData.profilePhoto) {
            displayProfilePhoto(userData.profilePhoto);
        } else {
            const preview = document.getElementById('profile-preview');
            const initial = document.getElementById('profile-initial');
            if (preview) preview.classList.add('hidden');
            if (initial) {
                initial.classList.remove('hidden');
                initial.textContent = (userData.name || 'U').charAt(0).toUpperCase();
            }
        }
    }
}

function displayProfilePhoto(photoData) {
    const preview = document.getElementById('profile-preview');
    const initial = document.getElementById('profile-initial');
    if (!preview || !initial) return;
    if (!photoData) {
        preview.classList.add('hidden');
        initial.classList.remove('hidden');
        return;
    }
    preview.onload = function() {
        preview.classList.remove('hidden');
        initial.classList.add('hidden');
    };
    preview.onerror = function() {
        preview.classList.add('hidden');
        initial.classList.remove('hidden');
        showToast('Failed to load profile photo', 'error');
    };
    preview.src = photoData;
    if (preview.complete) {
        preview.classList.remove('hidden');
        initial.classList.add('hidden');
    }
}

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
        showToast('Please select a valid image file (JPEG, PNG, GIF, WebP)', 'error');
        event.target.value = '';
        return;
    }
    if (file.size > 2 * 1024 * 1024) {
        showToast('Image size should be less than 2MB', 'error');
        event.target.value = '';
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        const photoData = e.target.result;
        if (!photoData || !photoData.startsWith('data:image')) {
            showToast('Invalid image data', 'error');
            return;
        }
        displayProfilePhoto(photoData);
        saveProfilePhoto(photoData);
    };
    
    reader.onerror = function() {
        showToast('Failed to read image file', 'error');
    };
    reader.readAsDataURL(file);
}

function saveProfilePhoto(photoData) {
    try {
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex === -1) {
            showToast('User not found', 'error');
            return;
        }
        users[userIndex].profilePhoto = photoData;
        localStorage.setItem('users', JSON.stringify(users));
        currentUser.profilePhoto = photoData;
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateProfileNav();
        showToast('Profile photo updated successfully!');
    } catch (error) {
        console.error('Error saving profile photo:', error);
        showToast('Failed to save profile photo', 'error');
    }
}

function updateProfileNav() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!currentUser) return;
    const firstLetter = (currentUser.name || 'U').charAt(0).toUpperCase();
    const navImg = document.getElementById('nav-profile-img');
    const navInitial = document.getElementById('nav-profile-initial');
    if (currentUser.profilePhoto) {
        if (navImg) {
            navImg.src = currentUser.profilePhoto;
            navImg.classList.remove('hidden');
            navImg.onerror = function() {
                navImg.classList.add('hidden');
                if (navInitial) {
                    navInitial.classList.remove('hidden');
                    navInitial.textContent = firstLetter;
                }
            };
        }
        if (navInitial) navInitial.classList.add('hidden');
    } else {
        if (navImg) navImg.classList.add('hidden');
        if (navInitial) {
            navInitial.classList.remove('hidden');
            navInitial.textContent = firstLetter;
        }
    }
    const mobileNavImg = document.getElementById('mobile-nav-profile-img');
    const mobileNavInitial = document.getElementById('mobile-nav-profile-initial');
    const mobileUserName = document.getElementById('mobile-user-name');
    const mobileUserEmail = document.getElementById('mobile-user-email');
    if (currentUser.profilePhoto) {
        if (mobileNavImg) {
            mobileNavImg.src = currentUser.profilePhoto;
            mobileNavImg.classList.remove('hidden');
            mobileNavImg.onerror = function() {
                mobileNavImg.classList.add('hidden');
                if (mobileNavInitial) {
                    mobileNavInitial.classList.remove('hidden');
                    mobileNavInitial.textContent = firstLetter;
                }
            };
        }
        if (mobileNavInitial) mobileNavInitial.classList.add('hidden');
    } else {
        if (mobileNavImg) mobileNavImg.classList.add('hidden');
        if (mobileNavInitial) {
            mobileNavInitial.classList.remove('hidden');
            mobileNavInitial.textContent = firstLetter;
        }
    }
    if (mobileUserName) mobileUserName.textContent = currentUser.name || 'User';
    if (mobileUserEmail) mobileUserEmail.textContent = currentUser.email || '';
}
function updateProfile(event) {
    event.preventDefault();
    clearProfileErrors();
    const name = document.getElementById('profile-name').value.trim();
    const phone = document.getElementById('profile-phone').value.trim();
    let isValid = true;
    if (name.length < 2) {
        showProfileError('name-error', 'Name must be at least 2 characters');
        isValid = false;
    }
    if (phone && !isValidPhone(phone)) {
        showProfileError('phone-error', 'Please enter a valid phone number');
        isValid = false;
    }
    if (!isValid) return false;
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].name = name;
        users[userIndex].phone = phone;
        localStorage.setItem('users', JSON.stringify(users));
        currentUser.name = name;
        currentUser.phone = phone;
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateProfileNav();
        showToast('Profile updated successfully!');
    }
    return false;
}
function changePassword(event) {
    event.preventDefault();
    clearProfileErrors();
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    let isValid = true;
    if (!currentPassword) {
        showProfileError('current-password-error', 'Current password is required');
        isValid = false;
    }
    if (!isStrongPassword(newPassword)) {
        showProfileError('new-password-error', 'Password must be at least 8 characters with 1 uppercase and 1 number');
        isValid = false;
    }
    if (currentPassword === newPassword) {
        showProfileError('new-password-error', 'New password must be different from current password');
        isValid = false;
    }
    if (!isValid) return false;
    try {
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        
        if (userIndex === -1) {
            showToast('User not found', 'error');
            return false;
        }
        if (users[userIndex].password !== currentPassword) {
            showProfileError('current-password-error', 'Current password is incorrect');
            showToast('Current password is incorrect', 'error');
            return false;
        }
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('password-form').reset();
        showToast('Password changed successfully!');
    } catch (error) {
        console.error('Error changing password:', error);
        showToast('Failed to change password', 'error');
    }
    return false;
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
    return phoneRegex.test(phone);
}

function isStrongPassword(password) {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return strongRegex.test(password);
}

function showProfileError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
}

function clearProfileErrors() {
    const errorElements = document.querySelectorAll('[id$="-error"]');
    errorElements.forEach(el => el.classList.add('hidden'));
}

function showToast(message, type = 'success') {
    if (typeof window.showToast === 'function' && window.showToast !== showToast) {
        window.showToast(message, type);
        return;
    }
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-50 ${
            type === 'error' ? 'bg-red-600' : 'bg-gray-800'
        } text-white`;
        toast.classList.remove('hidden', 'translate-y-20', 'opacity-0');
        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
            setTimeout(() => toast.classList.add('hidden'), 300);
        }, 3000);
    } else {
        alert(message);
    }
}