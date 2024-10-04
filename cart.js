document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cartItems");
    const emptyMessage = document.getElementById("emptyMessage");
    const clearCartButton = document.getElementById("clearCart");

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Function to display cart items
    function displayCartItems() {
        if (cartItems.length === 0) {
            emptyMessage.style.display = "block";
            clearCartButton.style.display = "none";
        } else {
            emptyMessage.style.display = "none";
            clearCartButton.style.display = "block";
            cartItemsContainer.innerHTML = "";

            cartItems.forEach(item => {
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("cart-item");

                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>${item.price}</p>
                    </div>
                `;

                cartItemsContainer.appendChild(itemDiv);
            });
        }
    }

    // Clear cart items
    clearCartButton.addEventListener("click", () => {
        cartItems = [];
        localStorage.removeItem("cartItems");
        displayCartItems();
    });

    // Initial display of cart items
    displayCartItems();
});
