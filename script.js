/* =====================================
   PRODUCT DATA
===================================== */

const products = [

    {
        id: 1,
        name: "Apple iPhone 15",
        category: "Mobiles",
        price: 59999,
        oldPrice: 69999,
        rating: 4.7,
        discount: "14% OFF",
        image: "📱",
        description:
            "Apple iPhone with powerful performance, premium design and advanced camera system."
    },

    {
        id: 2,
        name: "Samsung Galaxy S24",
        category: "Mobiles",
        price: 64999,
        oldPrice: 74999,
        rating: 4.6,
        discount: "13% OFF",
        image: "📱",
        description:
            "Premium Samsung smartphone with brilliant display and powerful processor."
    },

    {
        id: 3,
        name: "Sony Wireless Headphones",
        category: "Electronics",
        price: 8999,
        oldPrice: 12999,
        rating: 4.5,
        discount: "31% OFF",
        image: "🎧",
        description:
            "Premium wireless headphones with immersive sound and long battery life."
    },

    {
        id: 4,
        name: "MacBook Air M3",
        category: "Electronics",
        price: 104999,
        oldPrice: 114999,
        rating: 4.8,
        discount: "9% OFF",
        image: "💻",
        description:
            "Powerful and lightweight laptop with Apple's latest M3 chip."
    },

    {
        id: 5,
        name: "Smart LED TV 55 inch",
        category: "Appliances",
        price: 42999,
        oldPrice: 59999,
        rating: 4.4,
        discount: "28% OFF",
        image: "📺",
        description:
            "55-inch smart LED TV with 4K resolution and immersive entertainment."
    },

    {
        id: 6,
        name: "Men's Casual Shirt",
        category: "Fashion",
        price: 699,
        oldPrice: 1499,
        rating: 4.2,
        discount: "53% OFF",
        image: "👕",
        description:
            "Comfortable casual shirt made with premium quality fabric."
    },

    {
        id: 7,
        name: "Running Shoes",
        category: "Fashion",
        price: 1499,
        oldPrice: 2999,
        rating: 4.3,
        discount: "50% OFF",
        image: "👟",
        description:
            "Lightweight running shoes designed for everyday comfort."
    },

    {
        id: 8,
        name: "Premium Backpack",
        category: "Fashion",
        price: 999,
        oldPrice: 1999,
        rating: 4.4,
        discount: "50% OFF",
        image: "🎒",
        description:
            "Durable backpack suitable for college, office and travel."
    },

    {
        id: 9,
        name: "Modern Sofa Set",
        category: "Home",
        price: 18999,
        oldPrice: 24999,
        rating: 4.5,
        discount: "24% OFF",
        image: "🛋️",
        description:
            "Modern and comfortable sofa set designed for contemporary homes."
    },

    {
        id: 10,
        name: "Air Fryer",
        category: "Appliances",
        price: 3999,
        oldPrice: 6999,
        rating: 4.4,
        discount: "43% OFF",
        image: "🍳",
        description:
            "Healthy cooking with less oil using this easy-to-use air fryer."
    },

    {
        id: 11,
        name: "Organic Grocery Pack",
        category: "Grocery",
        price: 799,
        oldPrice: 999,
        rating: 4.6,
        discount: "20% OFF",
        image: "🥦",
        description:
            "Fresh and quality organic grocery essentials for your home."
    },

    {
        id: 12,
        name: "Kids Building Blocks",
        category: "Toys",
        price: 599,
        oldPrice: 999,
        rating: 4.7,
        discount: "40% OFF",
        image: "🧸",
        description:
            "Creative building blocks for children to learn while playing."
    },

    {
        id: 13,
        name: "Travel Suitcase",
        category: "Travel",
        price: 2499,
        oldPrice: 4999,
        rating: 4.5,
        discount: "50% OFF",
        image: "🧳",
        description:
            "Strong and spacious suitcase perfect for your next trip."
    },

    {
        id: 14,
        name: "Smart Watch",
        category: "Electronics",
        price: 1999,
        oldPrice: 3999,
        rating: 4.3,
        discount: "50% OFF",
        image: "⌚",
        description:
            "Smart watch with fitness tracking, notifications and multiple features."
    },

    {
        id: 15,
        name: "Cotton Bedsheet",
        category: "Home",
        price: 899,
        oldPrice: 1599,
        rating: 4.4,
        discount: "44% OFF",
        image: "🛏️",
        description:
            "Soft premium cotton bedsheet with attractive modern designs."
    }

];


/* =====================================
   VARIABLES
===================================== */

let cart = JSON.parse(localStorage.getItem("flipkartCart")) || [];

let selectedProduct = null;

let currentCategory = "All";


/* =====================================
   DOM ELEMENTS
===================================== */

const productsGrid =
    document.getElementById("productsGrid");

const searchInput =
    document.getElementById("searchInput");

const cartCount =
    document.getElementById("cartCount");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartButton =
    document.getElementById("cartButton");

const closeCart =
    document.getElementById("closeCart");

const overlay =
    document.getElementById("overlay");

const cartItems =
    document.getElementById("cartItems");

const emptyCart =
    document.getElementById("emptyCart");

const cartFooter =
    document.getElementById("cartFooter");

const subtotal =
    document.getElementById("subtotal");

const totalPrice =
    document.getElementById("totalPrice");

const cartItemsText =
    document.getElementById("cartItemsText");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


/* =====================================
   DISPLAY PRODUCTS
===================================== */

function displayProducts(productList) {

    productsGrid.innerHTML = "";

    const noProducts =
        document.getElementById("noProducts");

    if (productList.length === 0) {

        noProducts.style.display = "block";

        return;
    }

    noProducts.style.display = "none";


    productList.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <span class="discount">
                ${product.discount}
            </span>

            <div class="product-image">
                ${product.image}
            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <span class="rating">
                    ⭐ ${product.rating}
                </span>

                <div class="price">
                    ₹${product.price.toLocaleString("en-IN")}

                    <span class="old-price">
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </span>
                </div>

                <button
                    class="add-cart"
                    data-id="${product.id}"
                >
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add to Cart
                </button>

            </div>
        `;


        /* Product details */

        card.addEventListener("click", function(event) {

            if (
                event.target.closest(".add-cart")
            ) {
                return;
            }

            openProductModal(product);

        });


        /* Add cart */

        card.querySelector(".add-cart")
            .addEventListener("click", function(event) {

                event.stopPropagation();

                addToCart(product.id);

            });


        productsGrid.appendChild(card);

    });

}


/* =====================================
   SEARCH
===================================== */

searchInput.addEventListener("input", function() {

    const searchTerm =
        this.value.toLowerCase().trim();


    const filtered =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchTerm) ||

                product.category
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesCategory =
                currentCategory === "All" ||
                product.category === currentCategory;


            return matchesSearch && matchesCategory;

        });


    displayProducts(filtered);

});


/* =====================================
   CATEGORY FILTER
===================================== */

document
    .querySelectorAll(".category")
    .forEach(category => {

        category.addEventListener("click", function() {

            currentCategory =
                this.dataset.category;

            searchInput.value = "";

            const filtered =
                currentCategory === "All"
                    ? products
                    : products.filter(
                        product =>
                            product.category === currentCategory
                    );

            displayProducts(filtered);

        });

    });


/* =====================================
   ADD TO CART
===================================== */

function addToCart(productId) {

    const product =
        products.find(
            product => product.id === productId
        );

    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    saveCart();

    updateCart();

    showToast(
        `${product.name} added to cart`
    );

}


/* =====================================
   UPDATE CART
===================================== */

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    let count = 0;


    cart.forEach(item => {

        total += item.price * item.quantity;

        count += item.quantity;


        const cartProduct =
            document.createElement("div");

        cartProduct.className = "cart-product";

        cartProduct.innerHTML = `

            <div class="cart-product-image">
                ${item.image}
            </div>

            <div class="cart-product-info">

                <h4>
                    ${item.name}
                </h4>

                <div class="cart-price">
                    ₹${item.price.toLocaleString("en-IN")}
                </div>

                <div class="quantity">

                    <button
                        onclick="changeQuantity(${item.id}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${item.id}, 1)"
                    >
                        +
                    </button>

                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${item.id})"
                >
                    Remove
                </button>

            </div>

        `;


        cartItems.appendChild(cartProduct);

    });


    cartCount.textContent = count;

    cartItemsText.textContent =
        `${count} ${count === 1 ? "Item" : "Items"}`;

    subtotal.textContent =
        `₹${total.toLocaleString("en-IN")}`;

    totalPrice.textContent =
        `₹${total.toLocaleString("en-IN")}`;


    if (cart.length === 0) {

        emptyCart.style.display = "block";

        cartFooter.style.display = "none";

    } else {

        emptyCart.style.display = "none";

        cartFooter.style.display = "block";

    }

}


/* =====================================
   CHANGE QUANTITY
===================================== */

function changeQuantity(productId, amount) {

    const item =
        cart.find(
            product => product.id === productId
        );

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.id !== productId
            );

    }


    saveCart();

    updateCart();

}


/* =====================================
   REMOVE FROM CART
===================================== */

function removeFromCart(productId) {

    const item =
        cart.find(
            product => product.id === productId
        );


    cart =
        cart.filter(
            product => product.id !== productId
        );


    saveCart();

    updateCart();


    if (item) {

        showToast(
            `${item.name} removed from cart`
        );

    }

}


/* =====================================
   LOCAL STORAGE
===================================== */

function saveCart() {

    localStorage.setItem(
        "flipkartCart",
        JSON.stringify(cart)
    );

}


/* =====================================
   OPEN CART
===================================== */

cartButton.addEventListener("click", function() {

    cartSidebar.classList.add("active");

    overlay.classList.add("active");

});


/* =====================================
   CLOSE CART
===================================== */

function closeCartSidebar() {

    cartSidebar.classList.remove("active");

    overlay.classList.remove("active");

}


closeCart.addEventListener(
    "click",
    closeCartSidebar
);


overlay.addEventListener(
    "click",
    closeCartSidebar
);


document
    .getElementById("continueShopping")
    .addEventListener(
        "click",
        closeCartSidebar
    );


/* =====================================
   PRODUCT MODAL
===================================== */

function openProductModal(product) {

    selectedProduct = product;

    document.getElementById("modalImage")
        .textContent = product.image;

    document.getElementById("modalTitle")
        .textContent = product.name;

    document.getElementById("modalCategory")
        .textContent = product.category;

    document.getElementById("modalRating")
        .textContent = product.rating;

    document.getElementById("modalPrice")
        .textContent =
        `₹${product.price.toLocaleString("en-IN")}`;

    document.getElementById("modalDescription")
        .textContent = product.description;


    document
        .getElementById("productModal")
        .classList.add("active");

}


document
    .getElementById("modalClose")
    .addEventListener("click", function() {

        document
            .getElementById("productModal")
            .classList.remove("active");

    });


document
    .getElementById("modalAddCart")
    .addEventListener("click", function() {

        if (selectedProduct) {

            addToCart(selectedProduct.id);

            document
                .getElementById("productModal")
                .classList.remove("active");

        }

    });


/* =====================================
   LOGIN
===================================== */

const loginModal =
    document.getElementById("loginModal");


document
    .getElementById("loginBtn")
    .addEventListener("click", function() {

        loginModal.classList.add("active");

    });


document
    .getElementById("loginClose")
    .addEventListener("click", function() {

        loginModal.classList.remove("active");

    });


document
    .getElementById("loginSubmit")
    .addEventListener("click", function() {

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value.trim();


        if (!username || !password) {

            showToast(
                "Please enter login details"
            );

            return;

        }


        loginModal.classList.remove("active");

        showToast(
            "Login successful!"
        );

    });


/* =====================================
   PLACE ORDER
===================================== */

document
    .getElementById("placeOrder")
    .addEventListener("click", function() {

        if (cart.length === 0) {

            showToast(
                "Your cart is empty"
            );

            return;

        }


        alert(
            "🎉 Order placed successfully!\n\nThank you for shopping with us."
        );


        cart = [];

        saveCart();

        updateCart();

        closeCartSidebar();

    });


/* =====================================
   SHOP NOW
===================================== */

document
    .getElementById("shopNow")
    .addEventListener("click", function() {

        document
            .getElementById("productsSection")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* =====================================
   VIEW ALL
===================================== */

document
    .getElementById("viewAllBtn")
    .addEventListener("click", function() {

        currentCategory = "All";

        searchInput.value = "";

        displayProducts(products);

    });


/* =====================================
   TOAST
===================================== */

let toastTimer;


function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(function() {

            toast.classList.remove("show");

        }, 2500);

}


/* =====================================
   INITIAL LOAD
===================================== */

displayProducts(products);

updateCart();