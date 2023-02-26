const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const literaturButton = document.querySelector(".literatur");
const menuList = document.querySelector(".menu-navigation");

menuButton.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
})