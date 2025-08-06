const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const navbar = document.querySelector(".navbar");
menuOpenButton.addEventListener("click", () => {
  navMenu.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  navMenu.classList.remove("show-mobile-menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuOpenButton.click(); // Close the menu when a link is clicked
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
