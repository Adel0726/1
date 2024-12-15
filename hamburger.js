const Hamburger = document.querySelector(".hamburger_menu");
const Nav_Links = document.querySelector(".nav_items_container");

Hamburger.addEventListener("click", () => {
    Nav_Links.classList.toggle("active");
    Hamburger.classList.toggle("active");
});

