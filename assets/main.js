const mainMenu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

// Hamburger Menu
openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// Show Menu
function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

// Close Menu
function close() {
  mainMenu.style.top = "-1000px";
}
