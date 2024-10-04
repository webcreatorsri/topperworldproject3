document.addEventListener('DOMContentLoaded', function () {
    // Toggle dropdown menu on "More" button click
    const moreButton = document.getElementById('more-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    moreButton.addEventListener('click', function () {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Hide dropdown menu when clicking outside of it
    window.addEventListener('click', function (event) {
        if (!moreButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.product-card button');
    
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            alert('Product added to cart!');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', function () {
        const query = searchInput.value.trim();
        
        if (query) {
            // For now, just alert the search term
            alert(`searching for ${query}..........`);

            // Optionally, you could redirect to a search results page:
            // window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        } else {
            alert('Please enter a search term.');
        }
    });

    // Optional: Trigger search when pressing "Enter" in the search input
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            searchButton.click(); // Trigger search when pressing Enter
        }
    });
});
