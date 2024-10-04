document.addEventListener("DOMContentLoaded", () => {
    // Retrieve existing cart items from localStorage, if any
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Function to add item to the cart
    function addToCart(productName, productPrice, productImage) {
        const product = {
            name: productName,
            price: productPrice,
            image: productImage
        };
        cartItems.push(product);

        // Save updated cart items to localStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        alert(`${productName} has been added to your cart!`);
    }

    // Event listeners for all "Add to Cart" buttons
    const addButtons = document.querySelectorAll(".product-card button");

    addButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const productCard = button.parentElement;
            const productName = productCard.querySelector("h3").textContent;
            const productPrice = productCard.querySelector("p").textContent;
            const productImage = productCard.querySelector("img").src;

            // Add the selected product to the cart
            addToCart(productName, productPrice, productImage);
        });
    });
});

// Wait for the DOM to fully load

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".search-bar button");
    const searchInput = document.querySelector(".search-bar input");

    // Add event listener for search functionality
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // Implement search functionality here
            // You can call an API or filter products based on the query
        } else {
            alert("Please enter a search term.");
        }
    });

    // Add event listeners for Add to Cart buttons
    const addToCartButtons = document.querySelectorAll(".product-card button");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const productName = event.target.parentElement.querySelector("h3").innerText;
            alert(`${productName} added to cart!`);
            // Implement add to cart functionality here
            // You can call an API to add the product to the user's cart
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const moreButton = document.getElementById("more-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // Toggle dropdown visibility when the "More" button is clicked
    moreButton.addEventListener("click", () => {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener("click", (event) => {
        if (!event.target.matches("#more-button")) {
            dropdownMenu.style.display = "none";
        }
    });
});

