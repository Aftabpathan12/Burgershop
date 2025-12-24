
// Menu Data with Indian Items
const menuItems = [
    {
        id: 1,
        name: "Desi Tadka Chicken Burger",
        description: "Spicy chicken patty marinated in Indian herbs, with mint chutney, onions, and lettuce.",
        price: 189,
        category: "burger",
        image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
   {
  id: 2,
  name: "Paneer Tikka Burger",
  description: "Grilled cottage cheese patty with tikka masala, onions, and capsicum in a soft bun.",
  price: 169,
  category: "burger",
  image: "images/paneer-tikka-burger.jpg"
},
    {
        id: 3,
        name: "Aloo Tikki Burger",
        description: "Crispy potato patty with tamarind chutney, chopped onions, and fresh coriander.",
        price: 129,
        category: "burger",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Butter Chicken Burger",
        description: "Juicy chicken patty smothered in rich, creamy butter chicken gravy.",
        price: 199,
        category: "burger",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Spicy Keema Burger",
        description: "Flavorful minced meat patty with Indian spices, green chilies, and cilantro.",
        price: 179,
        category: "burger",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Masala Veggie Burger",
        description: "A patty made of spiced mixed vegetables, served with chaat masala and sauces.",
        price: 149,
        category: "burger",
        image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

const sidesItems = [
    {
        id: 101,
        name: "Masala Fries",
        description: "Crispy fries tossed in Indian chaat masala.",
        price: 99,
        category: "side",
        icon: "fas fa-french-fries"
    },
    {
        id: 102,
        name: "Onion Pakora",
        description: "Spiced onion fritters, deep-fried to perfection.",
        price: 89,
        category: "side",
        icon: "fas fa-ring"
    },
    {
        id: 103,
        name: "Samosa (2 pcs)",
        description: "Spiced potato filling in a crispy pastry.",
        price: 79,
        category: "side",
        icon: "fas fa-drumstick-bite"
    },
    {
        id: 104,
        name: "Sweet Lassi",
        description: "Refreshing yogurt-based sweet drink.",
        price: 69,
        category: "drink",
        icon: "fas fa-glass-whiskey"
    },
    {
        id: 105,
        name: "Masala Chai",
        description: "Traditional Indian spiced tea.",
        price: 49,
        category: "drink",
        icon: "fas fa-mug-hot"
    },
    {
        id: 106,
        name: "Mango Shake",
        description: "Thick and creamy mango milkshake.",
        price: 99,
        category: "drink",
        icon: "fas fa-glass-whiskey"
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('burgerCart')) || [];

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartBody = document.getElementById('cartBody');
const emptyCart = document.getElementById('emptyCart');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const continueShopping = document.getElementById('continueShopping');
const menuGrid = document.getElementById('menuGrid');
const sidesGrid = document.getElementById('sidesGrid');
const contactForm = document.getElementById('contactForm');
const notification = document.getElementById('notification');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load menu items
    loadMenuItems();
    loadSidesItems();
    
    // Update cart display
    updateCartDisplay();
    
    // Setup testimonial slider
    setupTestimonialSlider();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup active nav link
    setupActiveNavLink();
});

// Load burger menu items
function loadMenuItems() {
    menuGrid.innerHTML = '';
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">₹${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <button class="add-to-cart" data-id="${item.id}">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
    });
    
    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            addToCart(id);
        });
    });
}

// Load sides and drinks items
function loadSidesItems() {
    sidesGrid.innerHTML = '';
    
    sidesItems.forEach(item => {
        const sideItem = document.createElement('div');
        sideItem.className = 'side-item';
        sideItem.innerHTML = `
            <div class="side-icon">
                <i class="${item.icon}"></i>
            </div>
            <div class="side-details">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <span class="side-price">₹${item.price.toFixed(2)}</span>
            </div>
            <button class="add-to-cart" data-id="${item.id}">
                <i class="fas fa-cart-plus"></i>
            </button>
        `;
        
        sidesGrid.appendChild(sideItem);
    });
    
    // Add event listeners to side item "Add to Cart" buttons
    document.querySelectorAll('.side-item .add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            addToCart(id, true); // true indicates it's a side item
        });
    });
}

// Add item to cart
function addToCart(id, isSide = false) {
    const itemsArray = isSide ? sidesItems : menuItems;
    const item = itemsArray.find(item => item.id === id);
    
    if (!item) return;
    
    // Check if item is already in cart
    const existingItem = cart.find(cartItem => cartItem.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
            category: item.category
        });
    }
    
    // Update cart in localStorage
    localStorage.setItem('burgerCart', JSON.stringify(cart));
    
    // Update cart display
    updateCartDisplay();
    
    // Show success notification
    showNotification(`${item.name} added to cart!`);
}

// Update cart display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart modal
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartBody.innerHTML = `
            <div class="empty-cart" id="emptyCart">
                <i class="fas fa-shopping-basket"></i>
                <h3>Your cart is empty</h3>
                <p>Add some delicious desi burgers to get started!</p>
            </div>
        `;
        cartTotal.textContent = '0.00';
    } else {
        emptyCart.style.display = 'none';
        
        let cartHTML = '';
        let total = 0;
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            cartHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">₹${item.price.toFixed(2)} each</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn decrease-btn" data-index="${index}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase-btn" data-index="${index}">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="quantity-btn remove-btn" data-index="${index}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    <div class="cart-item-total">
                        ₹${itemTotal.toFixed(2)}
                    </div>
                </div>
            `;
        });
        
        cartBody.innerHTML = cartHTML;
        cartTotal.textContent = total.toFixed(2);
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.decrease-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                updateQuantity(index, -1);
            });
        });
        
        document.querySelectorAll('.increase-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                updateQuantity(index, 1);
            });
        });
        
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                removeFromCart(index);
            });
        });
    }
}

// Update item quantity in cart
function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    // Remove item if quantity is 0 or less
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
        showNotification(`Item removed from cart`);
    }
    
    // Update cart in localStorage
    localStorage.setItem('burgerCart', JSON.stringify(cart));
    
    // Update cart display
    updateCartDisplay();
}

// Remove item from cart
function removeFromCart(index) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    
    // Update cart in localStorage
    localStorage.setItem('burgerCart', JSON.stringify(cart));
    
    // Update cart display
    updateCartDisplay();
    
    // Show notification
    showNotification(`${itemName} removed from cart`);
}

// Setup testimonial slider
function setupTestimonialSlider() {
    // Show first testimonial
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === 0 ? 'block' : 'none';
    });
    
    // Add click events to navigation buttons
    prevBtn.addEventListener('click', showPrevTestimonial);
    nextBtn.addEventListener('click', showNextTestimonial);
    
    // Add click events to dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showTestimonial(index);
        });
    });
    
    // Auto slide every 5 seconds
    setInterval(showNextTestimonial, 5000);
}

// Show previous testimonial
function showPrevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Show next testimonial
function showNextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Show specific testimonial
function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
        testimonial.classList.remove('active');
    });
    
    // Show selected testimonial
    testimonials[index].style.display = 'block';
    setTimeout(() => {
        testimonials[index].classList.add('active');
    }, 10);
    
    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentTestimonial = index;
}

// Show notification
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Cart icon click
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        cartModal.style.display = 'flex';
    });
    
    // Close cart
    closeCart.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    // Continue shopping button
    continueShopping.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    // Close cart when clicking outside
    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Your cart is empty! Add some desi burgers first.');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Show order confirmation
        let orderSummary = "Order Summary:\n\n";
        cart.forEach(item => {
            orderSummary += `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}\n`;
        });
        orderSummary += `\nTotal: ₹${total.toFixed(2)}`;
        
        if (confirm(`${orderSummary}\n\nConfirm your desi order?`)) {
            // In a real app, you would send this order to a server
            showNotification('Order placed successfully! Thank you for your purchase.');
            
            // Clear cart
            cart = [];
            localStorage.setItem('burgerCart', JSON.stringify(cart));
            updateCartDisplay();
            
            // Close cart modal
            cartModal.style.display = 'none';
        }
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // In a real app, you would send this data to a server
       showNotification(`Thank you ${name}! This is a demo form. No data is stored.`);

        
        // Reset form
        contactForm.reset();
    });
}

// Setup smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

// Setup active nav link based on scroll position
function setupActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize when page loads
window.addEventListener('load', function() {
    // Show welcome message
    setTimeout(() => {
        showNotification('Welcome to Desi Burger Palace! 🍔 Swagat Hai!');
    }, 1000);
});