// // Function to send order data to Google Sheets
// async function sendOrderToGoogleSheets(orderData) {
//     const scriptURL = "https://script.google.com/macros/s/AKfycbwUAqMQ5KH8WeteEzZOt7OAr57Pb6q96uTRLzsisr8kK2INGHfI8S7y8OK2Q04hO9st/exec"; 
//     try {
//         const response = await fetch(scriptURL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(orderData)
//         });

//         const result = await response.json();
//         if (result.success) {
//             alert("Order placed successfully!");
//             localStorage.removeItem("cart"); // Clear cart after checkout
//             window.location.href = "success.html"; // Redirect to success page
//         } else {
//             alert("Error placing order: " + result.error);
//         }
//     } catch (error) {
//         console.error("Error:", error);
//         alert("Failed to send order. Check your internet connection." , error);
//     }
// }

// // Function to handle checkout
// function checkout() {
//     const name = document.getElementById("customer-name").value;
//     const phone = document.getElementById("customer-phone").value;
//     const address = document.getElementById("customer-address").value;

//     if (!name || !phone || !address) {
//         alert("Please fill all fields!");
//         return;
//     }

//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     if (cart.length === 0) {
//         alert("Your cart is empty!");
//         return;
//     }

//     const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//     const orderData = {
//         name,
//         phone,
//         address,
//         cartItems: cart,
//         totalPrice
//     };

//     sendOrderToGoogleSheets(orderData);
// }

// // Load cart items on checkout page
// function loadCartOnCheckout() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const cartContainer = document.getElementById("cart-items");
//     const totalPriceElement = document.getElementById("total-price");

//     if (cart.length === 0) {
//         cartContainer.innerHTML = "<p>Your cart is empty.</p>";
//         return;
//     }

//     let total = 0;
//     cartContainer.innerHTML = "";
//     cart.forEach(item => {
//         total += item.price * item.quantity;
//         cartContainer.innerHTML += `
//             <div class="cart-item">
//                 <p>${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}</p>
//             </div>
//         `;
//     });

//     totalPriceElement.innerText = `Total: ₹${total}`;
// }

// // Attach checkout function to button
// document.addEventListener("DOMContentLoaded", function() {
//     loadCartOnCheckout();
//     document.getElementById("checkout-button").addEventListener("click", checkout);
// });

// https://script.google.com/macros/s/AKfycbwUAqMQ5KH8WeteEzZOt7OAr57Pb6q96uTRLzsisr8kK2INGHfI8S7y8OK2Q04hO9st/exec    

// =====================================================2nd

// async function sendOrderToGoogleSheets(orderData) {
//     console.log("hi");
    
//     const scriptURL = "https://script.google.com/macros/s/AKfycbwUAqMQ5KH8WeteEzZOt7OAr57Pb6q96uTRLzsisr8kK2INGHfI8S7y8OK2Q04hO9st/exec"; 

//     try {
//         const response = await fetch(scriptURL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(orderData)
//         });

//         console.log("Response Status:", response.status);

//         if (!response.ok) {
//             throw new Error(`HTTP Error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log("Server Response:", result);

//         if (result.success) {
//             alert("Order placed successfully!");
//             localStorage.removeItem("cart");
//             window.location.href = "success.html";
//         } else {
//             alert("Error placing order: " + result.error);
//         }
//     } catch (error) {
//         console.error("Fetch Error:", error);
//         if (error instanceof TypeError && error.message.includes("Failed to fetch")) {
//             alert("Failed to send order. Check your internet connection.");
//           } else {
//             alert("Failed to send order. " + error.message);
//           }
//         }
//       }
// ================================================3rd
// document.addEventListener("DOMContentLoaded", function() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const cartItemsContainer = document.getElementById("cart-items");
//     const totalPriceElement = document.getElementById("total-price");
//     let total = 0;

//     if (cart.length === 0) {
//         cartItemsContainer.innerHTML = "<p class='text-gray-600'>No items in cart</p>";
//     } else {
//         cart.forEach(item => {
//             const li = document.createElement("li");
//             li.classList.add("border-b", "py-2");
//             li.textContent = `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`;
//             cartItemsContainer.appendChild(li);
//             total += item.price * item.quantity;
//         });
//     }
//     totalPriceElement.textContent = `₹${total}`;

//     document.getElementById('orderForm').addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent default form submission

//         const name = document.getElementById('name').value;
//         const phone = document.getElementById('phone').value;
//         const address = document.getElementById('address').value;

//         // Use cart items from local storage
//         const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//         const totalPrice = total; // Use the calculated total

//         const orderData = {
//             name: name,
//             phone: phone,
//             address: address,
//             cartItems: cartItems,
//             totalPrice: totalPrice
//         };

//         sendOrderToGoogleSheets(orderData);
//     });
// });
// async function sendOrderToGoogleSheets(orderData) {
//     const scriptURL = "https://script.google.com/macros/s/AKfycbwUAqMQ5KH8WeteEzZOt7OAr57Pb6q96uTRLzsisr8kK2INGHfI8S7y8OK2Q04hO9st/exec";
  
        
//     try {
//         const response = await fetch(scriptURL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(orderData),
//             mode: 'cors', // Explicitly set CORS mode
//             cache: 'no-cache' // Prevent caching
//         });

//         if (!response.ok) {
//             const errorText = await response.text();
//             throw new Error(`HTTP Error! Status: ${response.status}. Response: ${errorText}`);
//         }

//         const result = await response.json();
//         console.log("Server Response:", result);

//         if (result.success) {
//             alert("Order placed successfully!");
//             localStorage.removeItem("cart"); // Clear cart after successful order
//             // Redirect or clear form fields
//         } else {
//             alert("Error placing order: " + result.error);
//         }
//     } catch (error) {
//         console.error("Fetch Error:", error);
//         if (error instanceof TypeError && error.message.includes("Failed to fetch")) {
//             alert("Failed to send order. Check your internet connection.");
//         } else {
//             alert("Failed to send order. " + error.message);
//         }
//     }
// }



// FINAL https://script.google.com/macros/s/AKfycbz93FBEFBINfUdi1cNsTfOSCJZhdGRTxo3kTZ0eNhR2hucSD0Fo5W8CVWLXvtn4GfbGKw/exec

// document.addEventListener("DOMContentLoaded", function() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const cartItemsContainer = document.getElementById("cart-items");
//     const totalPriceElement = document.getElementById("total-price");
//     let total = 0;

//     if (cart.length === 0) {
//         cartItemsContainer.innerHTML = "<p class='text-gray-600'>No items in cart</p>";
//     } else {
//         cart.forEach(item => {
//             const li = document.createElement("li");
//             li.classList.add("border-b", "py-2");
//             li.textContent = `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`;
//             cartItemsContainer.appendChild(li);
//             total += item.price * item.quantity;
//         });
//     }
//     totalPriceElement.textContent = `₹${total}`;

//     document.getElementById('orderForm').addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent default form submission

//         const name = document.getElementById('name').value;
//         const phone = document.getElementById('phone').value;
//         const address = document.getElementById('address').value;

//         // Use cart items from local storage
//         const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//         const totalPrice = total; // Use the calculated total

//         const orderData = {
//             name: name,
//             phone: phone,
//             address: address,
//             cartItems: cartItems,
//             totalPrice: totalPrice
//         };

//         sendOrderToGoogleSheets(orderData);
//     });
// });

function openGoogleForm() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Convert cartItems array into a readable text format (comma-separated names)
    let formattedData = cartItems.map(item => {
        return `${item.name} (Qty: ${item.quantity})`; // Modify based on your object structure
    }).join(", ");

    // Construct the Google Form URL with encoded data
    //`https://docs.google.com/forms/d/e/1FAIpQLSd73j3E5gCb3eC6FcGInRSJxRYUTYYambgy9xzhBMN1HHe5Wg/viewform?usp=pp_url&entry.362499764=${encodeURIComponent(formattedData)}`;
    
   let url =  `https://docs.google.com/forms/d/e/1FAIpQLScDN6s6DIp3cVQahvlIyViDSPN5ApaCtmNywlsc8Vkb5Jf9UQ/viewform?usp=pp_url&entry.1166974658=${encodeURIComponent(formattedData)}`
    window.location.href = url; // Redirect to the Google Form
}
    // document.addEventListener("DOMContentLoaded", function() {
    //     const cart = JSON.parse(localStorage.getItem("cart")) || [];
    //     const cartItemsContainer = document.getElementById("cart-items");
    //     const totalPriceElement = document.getElementById("total-price");
    //     let total = 0;
    
    //     if (cart.length === 0) {
    //         cartItemsContainer.innerHTML = "<p class='text-gray-600'>No items in cart</p>";
    //     } else {
    //         cart.forEach(item => {
    //             const li = document.createElement("li");
    //             li.classList.add("border-b", "py-2");
    //             li.textContent = `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`;
    //             cartItemsContainer.appendChild(li);
    //             total += item.price * item.quantity;
    //         });
    //     }
    //     totalPriceElement.textContent = `₹${total}`;

    //     let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    //     // const totalPrice = total; // Use the calculated total

    //     function openGoogleForm() {
    //       // let mydata = "CustomValue"; // Set your predefined value here
    //       let url = `https://docs.google.com/forms/d/e/1FAIpQLSfq86e-ONbSwbBWw0mz3UU9npCS-mw2WiTdsBH_2zMiuRf6PQ/viewform?usp=pp_url&entry.839337160=${encodeURIComponent(cartItems)}`;
    //       window.location.href = url; // 
    //     }
   //================================= already commented============================== 
        //   https://docs.google.com/forms/d/e/1FAIpQLSfq86e-ONbSwbBWw0mz3UU9npCS-mw2WiTdsBH_2zMiuRf6PQ/viewform?usp=pp_url&entry.839337160=cart
        // document.getElementById('orderForm').addEventListener('submit', function(event) {
        //     event.preventDefault(); // Prevent default form submission
    
            // const name = document.getElementById('name').value;
            // const phone = document.getElementById('phone').value;
            // const address = document.getElementById('address').value;
    
            // Use cart items from local storage
           
    
            // const orderData = {
            //     name: name,
            //     phone: phone,
            //     address: address,
            //     cartItems: cartItems,
            //     totalPrice: totalPrice
            // };
    
            // sendOrderToGoogleSheets(orderData);
        // });
    // });