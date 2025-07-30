const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");
const navMenu = document.querySelector(".nav-menu");

menuOpenButton.addEventListener("click", () => {
  navMenu.classList.toggle("show-mobile-menu");
  
});

menuCloseButton.addEventListener("click", () => {
  navMenu.classList.remove("show-mobile-menu");
});


