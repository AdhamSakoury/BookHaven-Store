let wishlist = JSON.parse(sessionStorage.getItem('wishlist')) || [];

function toggleWishlist(bookId) {
    const index = wishlist.indexOf(bookId);
    const book = booksData.find(b => b.id === bookId);
    if (index === -1) {
        wishlist.push(bookId);
        showToast(`${book.title} added to wishlist!`);
    } else {
        wishlist.splice(index, 1);
        showToast(`${book.title} removed from wishlist`);
    }
    saveWishlist();
    updateWishlistUI();
    if (window.location.pathname.includes('books.html')) {
        loadAllBooks();
    } else if (window.location.pathname.includes('book-details.html')) {
        loadBookDetails();
    } else if (window.location.pathname.includes('index.html')) {
        loadFeaturedBooks();
    }
}

function isBookInWishlist(bookId) {
    return wishlist.includes(bookId);
}
function saveWishlist() {
    sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
}
function showWishlist() {
    const modal = document.getElementById('wishlist-modal');
    const container = document.getElementById('wishlist-items');
    if (!modal || !container) return;
    renderWishlistItems();
    modal.classList.remove('hidden');
}
function closeWishlist() {
    const modal = document.getElementById('wishlist-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}
function renderWishlistItems() {
    const container = document.getElementById('wishlist-items');
    if (!container) return;
    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <svg class="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p>Your wishlist is empty</p>
            </div>
        `;
        return;
    }
    const wishlistBooks = booksData.filter(book => wishlist.includes(book.id));
    container.innerHTML = wishlistBooks.map(book => `
        <div class="flex items-center space-x-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <img src="${book.image}" alt="${book.title}" class="w-16 h-20 object-cover rounded">
            <div class="flex-1">
                <h4 class="font-semibold text-sm">${book.title}</h4>
                <p class="text-xs text-gray-500 dark:text-gray-400">${book.author}</p>
                <p class="text-primary font-bold text-sm mt-1">${formatCurrency(book.price)}</p>
            </div>
            <div class="flex flex-col space-y-2">
                <button onclick="addToCart(${book.id})" 
                    class="p-2 bg-primary text-white rounded hover:bg-purple-700 transition-colors" title="Add to Cart">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button>
                <button onclick="toggleWishlist(${book.id})" 
                    class="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors" title="Remove">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

function updateWishlistUI() {

}

document.addEventListener('click', function(event) {
    const modal = document.getElementById('wishlist-modal');
    if (event.target === modal) {
        closeWishlist();
    }
});