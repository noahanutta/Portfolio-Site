let menuSwitch = document.querySelector(".menuButton");
let menu = document.querySelector(".menu");
let menuOpen = false;
let menuCloseTimer;
menuSwitch.addEventListener("click", () => {
  if (menuOpen) {
    menu.classList.remove("activo");
    menuSwitch.classList.remove("activo");
    menuSwitch.innerHTML = "Menu";
    menuOpen = false;
  } else {
    menu.classList.add("activo");
    menuSwitch.innerHTML = "Close";
    menuSwitch.classList.add("activo");
    menuOpen = true;
  }
});