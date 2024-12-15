# Projekt-tva-produkter

https://www.w3schools.com/csS/tryit.asp?filename=trycss_buttons_animate1


const nav = document.querySelector("nav");
const navItemsContainer = document.querySelector(".nav_items_container");

function updateNavHeight() {
    const navHeight = nav.offsetHeight; 
    navItemsContainer.style.setProperty("--dynamic-top", `${navHeight}px`);
}

window.addEventListener("load", updateNavHeight);
window.addEventListener("resize", updateNavHeight);
