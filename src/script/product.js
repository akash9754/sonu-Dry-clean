const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbzHyr5kbzxE2zhFTG26LI8LwIAdTaeHd89relG0J8uh5683eLg3vx1Wi_uYCUipxpSX/exec"; //script URL



async function fetchProductData(productId) {

    try {
        const response = await fetch(`${SHEET_API_URL}?id=1`); //${productId}
        const products = await response.json();

        if (products.length > 0) {
            const product = products[0]; // We get only one product
                console.log(product);
                
            document.getElementById("product-image").src = product["Image URL"];
            document.getElementById("product-title").textContent = product["Name"];
            document.getElementById("previous-price").textContent = `₹${parseFloat(product["Discounted Price"]).toFixed(2)}`;

            let basePrice = parseFloat(product["Base Price"]);
            let discountBase = parseFloat(product["Discounted Price"]);

            const serviceOptions = product["Service Options"].split(",");
            const servicePrices = product["Service Prices"].split(",");
            const serviceDiscounts = product["Service Discounts"].split(",");
            const sizeOptions = product["Size Options"].split(",");
            const sizePrices = product["Size Prices"].split(",");
            const sizeDiscounts = product["Size Discounts"].split(",");
            const includedServices = product["Included Services"].split(",");

            // Populate service dropdown
            const serviceDropdown = document.getElementById("service-type");
            serviceDropdown.innerHTML = ""; 
            serviceOptions.forEach((service, index) => {
                let option = document.createElement("option");
                option.value = servicePrices[index];
                option.dataset.discount = serviceDiscounts[index];
                option.textContent = `${service} + ₹${servicePrices[index]}`;
                serviceDropdown.appendChild(option);
            });

            // Populate size options
            const sizeContainer = document.querySelector(".flex.space-x-4");
            sizeContainer.innerHTML = ""; 
            sizeOptions.forEach((size, index) => {
                let label = document.createElement("label");
                label.innerHTML = `<input type="radio" name="bathrooms" value="${sizePrices[index]}" data-discount="${sizeDiscounts[index]}"> ${size} + ₹${sizePrices[index]}`;
                sizeContainer.appendChild(label);
            });

            // Populate included services
            const serviceList = document.getElementById("product-services");
            serviceList.innerHTML = ""; 
            includedServices.forEach(service => {
                const li = document.createElement("li");
                li.textContent = service;
                serviceList.appendChild(li);
            });

            // Price update function
            function updatePrice() {
                const serviceElement = document.getElementById("service-type");
                const serviceCost = parseFloat(serviceElement.value);
                const serviceDiscount = parseFloat(serviceElement.selectedOptions[0].dataset.discount);

                const bathroomElement = document.querySelector("input[name='bathrooms']:checked");
                const bathroomCost = bathroomElement ? parseFloat(bathroomElement.value) : 0;
                const bathroomDiscount = bathroomElement ? parseFloat(bathroomElement.dataset.discount) : 0;

                const newPrice = basePrice + serviceCost + bathroomCost;
                const newDiscountPrice = discountBase + serviceDiscount + bathroomDiscount;

                document.getElementById("product-price").textContent = `₹${newPrice.toFixed(2)}`;
                document.getElementById("previous-price").textContent = `₹${newDiscountPrice.toFixed(2)}`;
            }

            document.getElementById("service-type").addEventListener("change", updatePrice);
            document.querySelectorAll("input[name='bathrooms']").forEach(radio => {
                radio.addEventListener("change", updatePrice);
            });

            updatePrice(); // Initialize price
        }
    } catch (error) {
        console.error("Error fetching product data:", error);
    }
}

// Extract product ID from URL parameters (e.g., ?product=123)
// const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get("product");
const productId = 1;

// If product ID exists, fetch its data
// if (productId) {
    fetchProductData(productId);
// } else {
//     console.error("No product ID provided in URL");
// }
