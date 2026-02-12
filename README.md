# The Literary Haven - E-commerce Bookstore

A complete, fully functional front-end e-commerce website for a bookstore built with HTML, CSS (Tailwind-inspired), and Vanilla JavaScript.

## 🎨 Features

### Core Functionality
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Full Shopping Cart**: Add items, adjust quantities, view totals
- **Wishlist System**: Save books for later viewing
- **Promo Codes**: Apply discount codes at checkout
- **Form Validation**: Complete validation for login, register, and checkout forms
- **Dynamic Pricing**: Real-time total calculation with promo code discounts
- **Persistent Storage**: Cart and wishlist data saved in localStorage

### Pages
1. **index.html** - Home page with featured books
2. **login.html** - User login with validation
3. **register.html** - New user registration with validation
4. **books.html** - Full catalog with all books + wishlist section
5. **book-details.html** - Detailed view of individual books
6. **cart.html** - Shopping cart with quantity controls and promo codes
7. **checkout.html** - Complete checkout form with order summary

## 📁 Project Structure

```
bookstore/
├── index.html
├── login.html
├── register.html
├── books.html
├── book-details.html
├── cart.html
├── checkout.html
├── css/
│   └── styles.css          # Complete styling with dark mode
├── js/
│   ├── main.js            # Global functionality (theme, navigation)
│   ├── books-data.js      # Sample book inventory (12 books)
│   ├── cart.js            # Cart management
│   ├── wishlist.js        # Wishlist management
│   └── validation.js      # Form validation logic
└── README.md
```

## 🚀 How to Use

1. **Open the project**: Simply open `index.html` in any modern web browser
2. **No server required**: Everything runs in the browser
3. **Data persistence**: Cart and wishlist are saved to localStorage

## 🎯 Key Features Explained

### Dark Mode
- Click the moon/sun icon in the navigation
- Preference is saved and persists across sessions
- Smooth transitions between themes

### Shopping Cart
- Click "Add to Cart" on any book → automatically redirects to cart page
- Adjust quantities with +/- buttons
- Remove items individually
- View real-time price updates

### Promo Codes
Valid codes you can test:
- `SAVE10` - 10% off your order
- `BOOK20` - 20% off your order
- `READER15` - 15% off your order
- `FREESHIP` - $5 flat discount

### Wishlist
- Click the heart icon on any book card
- View all wishlist items on the Books page (scroll down)
- Remove items from wishlist section

### Form Validation
All forms include real-time validation:
- **Email**: Valid email format
- **Password**: Min 8 characters, must include uppercase, lowercase, and number
- **Phone**: Valid phone number format
- **Credit Card**: Valid card number format
- **Expiry Date**: MM/YY format with expiration check
- **CVV**: 3-4 digit code

## 🎨 Design Features

- **Elegant Typography**: Playfair Display + Crimson Text
- **Editorial-Inspired**: Sophisticated, book-focused aesthetic
- **Smooth Animations**: Page transitions and micro-interactions
- **Professional UI**: Clean, modern design with attention to detail
- **Accessible Colors**: High contrast for readability

## 💻 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: ES6+, localStorage API
- **Font Awesome**: Icons
- **Google Fonts**: Custom typography

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- All book images are from Unsplash (free to use)
- Sample data includes 12 books across various categories
- No backend required - all data stored in browser localStorage
- Cart and wishlist reset on page reload can be prevented by using localStorage

## 🎓 Educational Use

This project demonstrates:
- Modern CSS techniques (custom properties, Grid, Flexbox)
- Vanilla JavaScript best practices
- State management without frameworks
- Form validation
- LocalStorage usage
- Responsive design patterns
- Component-based structure

## 📄 License

Free to use for educational and personal projects.

---

**Built with ❤️ for book lovers everywhere**
