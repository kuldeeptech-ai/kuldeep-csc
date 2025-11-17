/* ========== MOBILE MENU TOGGLE ========== */
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
});

/* Close menu when clicking any link */
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.style.display = "none";
    });
});

/* ========== SERVICE SEARCH FILTER ========== */
const searchBox = document.getElementById("serviceSearch");

if (searchBox) {
    searchBox.addEventListener("keyup", () => {
        const searchValue = searchBox.value.toLowerCase();
        const cards = document.querySelectorAll(".service-card");

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(searchValue) ? "block" : "none";
        });
    });
}

/* ========== SMOOTH APPEAR ANIMATION ========== */
const items = document.querySelectorAll(".service-card, .quick-item");

const revealOnScroll = () => {
    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 50) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
