// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = contactForm[0].value.trim();
        const email = contactForm[1].value.trim();
        const message = contactForm[2].value.trim();

        // Validate inputs
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate form submission (you can replace this with actual API call)
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Optionally reset the form
        contactForm.reset();
    });
});
