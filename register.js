document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Basic validation for password match
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Placeholder for actual registration logic (e.g., API call)
        if (email && password) {
            alert(`Registration successful for ${email}! Redirecting to login...`);
            // Redirect to login page
            window.location.href = "login.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
});
