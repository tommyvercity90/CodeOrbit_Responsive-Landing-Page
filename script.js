
// Select the menu button and navigation links
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Toggle the mobile navigation menu
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    // Update accessibility attributes
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    // Change the hamburger icon
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});

// Automatically display the current year in the footer
document.getElementById("year").textContent =
    new Date().getFullYear();
