const yearSpan = document.querySelectorAll("[data-year]");
const navLinks = document.querySelectorAll(".site-nav a");
const body = document.body;

yearSpan.forEach((node) => {
    node.textContent = new Date().getFullYear();
});

navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (body.dataset.page && href.includes(body.dataset.page)) {
        link.classList.add("active");
    }
});

const heroButton = document.querySelector("[data-hero-btn]");

if (heroButton) {
    heroButton.addEventListener("click", () => {
        heroButton.textContent = "Check your inbox ✈️";
        heroButton.disabled = true;
        heroButton.classList.add("cta");
    });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thanks! We will send a tailored itinerary shortly.");
        contactForm.reset();
    });
}
