// Navbar active link highlight
const links = document.querySelectorAll(".navbar ul li a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "yellow";
        link.style.fontWeight = "bold";
    }
});

// Smooth scrolling (if you use same page sections later)
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash)?.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Simple alert when resume button clicked
const resumeButtons = document.querySelectorAll("a[href*='drive.google']");
resumeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Opening Resume...");
    });
});

function validateContact() {
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");

    if (!email.value.includes("@")) {
        alert("Enter valid email");
        return false;
    }

    if (phone.value.length !== 10) {
        alert("Enter valid phone number");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Project page image hover effect
const images = document.querySelectorAll("img");

images.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "0.3s";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});