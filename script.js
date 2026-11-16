// Coffitee order button
function placeOrder(item) {
    window.alert("Thank you for choosing Coffitee! You selected: " + item);
}

// Coffitee contact and table booking form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        console.log("Contact Form Submitted Successfully!");
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);

        window.alert("Thank you, " + name + "! Your message has been received by Coffitee.");

        contactForm.reset();
    });
}
