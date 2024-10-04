document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Placeholder for actual authentication logic
        if (email && password) {
            alert(`Login successful for ${email}! Redirecting...`);
            // Redirect to home page or user dashboard
            window.location.href = "index.html";
        } else {
            alert("Please fill in both email and password.");
        }
    });
});
