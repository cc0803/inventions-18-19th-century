const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const literaturButton = document.querySelector(".literatur");
const menuList = document.querySelector(".menu-navigation");

menuButton.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
})

const atomicProperties = document.querySelectorAll(".property");
const propertyButton = document.querySelector(".view-list");

propertyButton.addEventListener("click", () => {
    
    atomicProperties.forEach(property => {
        console.log("hello")
        property.classList.add("transition");
    })
})