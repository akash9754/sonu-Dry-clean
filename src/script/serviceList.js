let cart = JSON.parse(localStorage.getItem('cart')) || [];
let allProducts = [];

function loadProducts(filterTypes = []) {
    fetch("serviceList.json")
        .then(response => response.json())
        .then(products => {
            allProducts = products;
            if (filterTypes.length > 0) {
                products = products.filter(p => filterTypes.includes(p.type));
            }
            displayProducts(products);
        })
        .catch(error => console.error("Error in loading JSON", error));
}

function displayProducts(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    
    products.forEach(product => {
        productList.innerHTML += `
            <div class="bg-white p-4 shadow rounded text-center">
                <img src="${product.productImage}" alt="${product.productName}" class="w-full h-40 md:object-cover object-center rounded">
                <h3 class="text-lg font-semibold mt-2">${product.productName}</h3>
                <p class="text-green-500">₹${product.price} <span class="line-through text-sm text-red-400">${product.oldPrice ? '₹' + product.oldPrice : ''}</span></p>
                <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2" 
                    onclick="addToCart(${product.productId}, '${product.productName}', ${product.price})">Add To Cart</button>
            </div>`;
    });
}

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    saveCart();
    updateCart();
    document.getElementById("popupModal").classList.remove("hidden");
}

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("popupModal").classList.add("hidden");
});

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCart();
}

function updateCart() {
    const cartSection = document.getElementById("cart");
    const checkoutBtn = document.getElementById("checkout-btn");
    const cartCount = document.getElementById("cart-count");

    cartSection.innerHTML = cart.length ? "" : "<p class='text-gray-500'>No items in your cart</p>";
    
    let totalQuantity = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
        cartSection.innerHTML += `
            <div class="flex items-center justify-between bg-gray-100 p-3 rounded shadow-md">
                <div class="flex-1">
                    <h3 class="text-sm font-semibold">${item.name}</h3>
                    <p class="text-xs text-gray-600">₹${item.price} (x${item.quantity})</p>
                </div>
                <button class="bg-red-500 text-white px-2 py-1 text-xs rounded" 
                    onclick="removeFromCart(${item.id})">Remove</button>
            </div>`;
    });
    
    checkoutBtn.classList.toggle("hidden", cart.length === 0);

    // Update cart count on the button
    cartCount.textContent = totalQuantity;
    cartCount.classList.toggle("hidden", totalQuantity === 0);
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function toggleCart() {
    const cartSection = document.getElementById("cart-section");
    cartSection.classList.toggle("hidden");
}


function proceedToCheckout() {
    if (cart.length > 0) {
        window.location.href = "checkout.html";
    } else {
        alert("Your cart is empty!");
    }
}

// Load products based on multiple types from URL
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const typeFilter = urlParams.get("type") ? urlParams.get("type").split(",") : [];
    loadProducts(typeFilter);
    updateCart();
};






// let cart = JSON.parse(localStorage.getItem('cart')) || [];
// let allProducts = [];

// function loadProducts(filterType = null) {
//     fetch("serviceList.json")
//         .then(response => response.json())
//         .then(products => {
//             allProducts = products;
//             displayProducts(filterType ? products.filter(p => p.type === filterType) : products);
//         })
//         .catch(error => console.error("Error in loading JSON", error));
// }

// function displayProducts(products) {
//     const productList = document.getElementById("product-list");
//     productList.innerHTML = "";
    
//     products.forEach(product => {
//         productList.innerHTML += `
//             <div class="bg-white p-4 shadow rounded text-center">
//                 <img src="${product.productImage}" alt="${product.productName}" class="w-full h-40 md:object-cover object-center rounded">
//                 <h3 class="text-lg font-semibold mt-2">${product.productName}</h3>
//                 <p class="text-green-500">₹${product.price} <span class="line-through text-sm text-red-400">${product.oldPrice ? '₹' + product.oldPrice : ''}</span></p>
//                 <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2" 
//                     onclick="addToCart(${product.productId}, '${product.productName}', ${product.price})">Add To Cart</button>
//             </div>`;
//     });
// }

// function addToCart(id, name, price) {
//     const existingItem = cart.find(item => item.id === id);
//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cart.push({ id, name, price, quantity: 1 });
//     }
//     saveCart();
//     updateCart();
// }

// function removeFromCart(id) {
//     cart = cart.filter(item => item.id !== id);
//     saveCart();
//     updateCart();
// }

// function updateCart() {
//     const cartSection = document.getElementById("cart");
//     const checkoutBtn = document.getElementById("checkout-btn");
//     cartSection.innerHTML = cart.length ? "" : "<p class='text-gray-500'>No items in your cart</p>";
    
//     cart.forEach(item => {
//         cartSection.innerHTML += `
//             <div class="flex items-center justify-between bg-gray-100 p-3 rounded shadow-md">
//                 <div class="flex-1">
//                     <h3 class="text-sm font-semibold">${item.name}</h3>
//                     <p class="text-xs text-gray-600">₹${item.price} (x${item.quantity})</p>
//                 </div>
//                 <button class="bg-red-500 text-white px-2 py-1 text-xs rounded" 
//                     onclick="removeFromCart(${item.id})">Remove</button>
//             </div>`;
//     });
    
//     checkoutBtn.classList.toggle("hidden", cart.length === 0);
// }

// function saveCart() {
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

// function toggleCart() {
//     const cartSection = document.getElementById("cart-section");
//     cartSection.classList.toggle("hidden");
// }

// function proceedToCheckout() {
//     if (cart.length > 0) {
//         window.location.href = "checkout.html";
//     } else {
//         alert("Your cart is empty!");
//     }
// }

// // Modify the parameter to load only "Bathroom Cleaning" or leave it null to load all
// window.onload = function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const typeFilter = urlParams.get("type") || null;
//     loadProducts(typeFilter);
//     updateCart();
// };
