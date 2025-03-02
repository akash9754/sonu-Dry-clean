async function sendOrderToGoogleSheets(orderData) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbwUAqMQ5KH8WeteEzZOt7OAr57Pb6q96uTRLzsisr8kK2INGHfI8S7y8OK2Q04hO9st/exec"; 
    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        });

        const result = await response.json();
        if (result.success) {
            alert("Order placed successfully!");
            localStorage.removeItem("cart"); // Clear cart after checkout
            window.location.reload(); // Refresh or navigate to a success page
        } else {
            alert("Error placing order: " + result.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to send order. Check your internet connection.");
    }
}
const name = document.getElementById("customer-name").value;

    
    

// Function to handle checkout
function checkout() {
    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const address = document.getElementById("customer-address").value;
    console.log(name, phone, address); 
    if (!name || !phone || !address) {
        alert("Please fill all fields!");
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const orderData = {
        name,
        phone,
        address,
        cartItems: cart,
        totalPrice
    };

    sendOrderToGoogleSheets(orderData);
}

// Attach checkout function to button
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("checkout-button").addEventListener("click", checkout);
});
