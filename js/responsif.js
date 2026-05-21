const html = document.documentElement;
const iconMoon = document.getElementById("icon-moon");
const iconSun = document.getElementById("icon-sun");

function syncIcons() {
    const dark = html.classList.contains("dark");
    iconMoon.classList.toggle("hidden", dark);
    iconSun.classList.toggle("hidden", !dark);
}
syncIcons();

document.getElementById("theme-toggle").addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        html.classList.contains("dark") ? "dark" : "light",
    );
    syncIcons();
});

const navToggle = document.getElementById("navbar-toggle");
const navMenu = document.getElementById("navbar-menu");
const hamOpen = document.getElementById("ham-open");
const hamClose = document.getElementById("ham-close");
let open = false;

function setMenu(state) {
    open = state;
    navMenu.classList.toggle("mobile-open", state);
    hamOpen.classList.toggle("hidden", state);
    hamClose.classList.toggle("hidden", !state);
    navToggle.setAttribute("aria-expanded", state);
}

navToggle.addEventListener("click", () => setMenu(!open));
document
    .querySelectorAll(".nav-link")
    .forEach((l) => l.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && open) setMenu(false);
});
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) setMenu(false);
});
