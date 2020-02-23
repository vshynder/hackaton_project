"use strict";

var burgerButton = document.getElementById("burger");
var falloutMenu = document.getElementById("burger-menu");

burgerButton.onclick = function () {
  if (burgerButton.src.includes("images/nav__burger.png")) {
    falloutMenu.style.opacity = "1";
    falloutMenu.style.visibility = "visible";
    burgerButton.src = "images/close.png";
  } else if (burgerButton.src.includes("images/close.png")) {
    falloutMenu.style.opacity = "0";
    falloutMenu.style.visibility = "hidden";
    burgerButton.src = "images/nav__burger.png";
  }
};