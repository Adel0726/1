const Hamburger = document.querySelector(".hamburger_menu");
const Nav_Links = document.querySelector(".nav_items_container");

Hamburger.addEventListener("click", () => {
    Nav_Links.classList.toggle("active");
    Hamburger.classList.toggle("active");
});

const nav = document.querySelector("nav");
const navItemsContainer = document.querySelector(".nav_items_container");

function updateNavHeight() {
    const navHeight = nav.offsetHeight; 
    navItemsContainer.style.setProperty("--dynamic-top", `${navHeight}px`);
}

window.addEventListener("load", updateNavHeight);
window.addEventListener("resize", updateNavHeight);
