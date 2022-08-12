

//UI Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const $body = document.querySelector('body');

const navItems = document.querySelectorAll(".nav-item");

//Set Initial State of Menu
let showMenu = false;
let scrollPosition = 0;



menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");

    navItems.forEach((item) => item.classList.add("show"));

    //Set Menu State
    showMenu = true;

    scrollPosition = window.pageYOffset;
    $body.style.overflow = 'hidden';
    $body.style.top = `-${scrollPosition}px`;
    $body.style.width = '100%';

  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");

    navItems.forEach((item) => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;

    $body.style.removeProperty('overflow');
    $body.style.removeProperty('top');
    $body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);

  }
}

function simpleToast() {
  // Get the SIMPLE-TOAST DIV
  var x = document.getElementById("simpleToast");
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 1500);

}



