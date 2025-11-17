// DARK MODE TOGGLE
const toggle = document.getElementById("toggle-mode");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    
    // Save mode in localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Load theme on page refresh
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        toggle.checked = true;
    }
};

// SERVICE SEARCH
const searchBox = document.getElementById("serviceSearch");
if (searchBox) {
    searchBox.addEventListener("keyup", () => {
        const value = searchBox.value.toLowerCase();
        const cards = document.querySelectorAll(".service-card");

        cards.forEach(card => {
            const name = card.innerText.toLowerCase();
            card.style.display = name.includes(value) ? "block" : "none";
        });
    });
}
