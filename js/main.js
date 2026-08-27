"use strict";

const jsButton = document.querySelector(".js-button");
const spMenu = document.querySelector(".sp-menu");
const body = document.querySelector("body");

jsButton.addEventListener("click", () => {
  spMenu.classList.toggle("is-open");
  jsButton.classList.toggle("is-open");
  body.classList.toggle("is-menu-open");
  if (jsButton.classList.contains("is-open")) {
    jsButton.setAttribute("aria-expanded", "true");
  } else {
    jsButton.setAttribute("aria-expanded", "false");  }
});

const closeNav = document.querySelectorAll(".sp-menu .nav-list a");
closeNav.forEach((link) => {
  link.addEventListener("click", () => {
    spMenu.classList.remove("is-open");
    jsButton.classList.remove("is-open");
    body.classList.remove("is-menu-open");
    jsButton.setAttribute("aria-expanded", "false");
  });
});

/* ====================
Lottie：とりあえず見えるかたちにしてる
=================== */

const leadLottie = document.querySelector(".lead-lottie");

if (leadLottie) {
  lottie.loadAnimation({
    container: leadLottie,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "lottie/lead.json",
  });
}
const environmentLottie = document.querySelector(".environment-lottie");

if (environmentLottie) {
  lottie.loadAnimation({
    container: environmentLottie,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "lottie/environment.json",
  });
}
