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

const closeNav = document.querySelectorAll(".sp-menu a");
closeNav.forEach((link) => {
  link.addEventListener("click", () => {
    spMenu.classList.remove("is-open");
    jsButton.classList.remove("is-open");
    body.classList.remove("is-menu-open");
    jsButton.setAttribute("aria-expanded", "false");
  });
});

/* ====================
SP:Splide
=================== */

const heroSlider = document.querySelector("#hero-slider");

if (heroSlider) {
  new Splide(heroSlider, {
    type: "fade",
    rewind: true,
    speed: 1200,
    autoplay: true,
    interval: 4000,
    pauseOnHover: false,
    arrows: false,
    pagination: false,
    mediaQuery: "min",
    breakpoints: {
      960: { destroy: true },
    },
  }).mount();
}


/* ====================
INTERVIEW:Splide
=================== */

const interviewSlider = document.querySelector("#interview-slider");

if (interviewSlider) {
  new Splide(interviewSlider, {
    perPage: 3,
    gap: "clamp(2.5rem, -7.5rem + 16.67vw, 7.5rem)",
    padding: "1.875rem",
    arrows: false,
    pagination: false,
    breakpoints: {
      959: {
        perPage: 1,
        padding: 0,
        pagination: true,
      },
    },
  }).mount();
}


/* ====================
Lottie：Lead
=================== */

const lottieLead = document.querySelector(".lead-lottie");
if (lottieLead) {
   const player = lottie.loadAnimation({
    container: lottieLead,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "lottie/lead.json",
});
const onLeadVisible = (entries) =>{
  entries.forEach((entry) => {
    if (entry.isIntersecting)  {
      player.play();
      leadObserver.unobserve(entry.target);
    }
  });
}
const leadObserver = new IntersectionObserver(onLeadVisible, {threshold: 0, rootMargin: "0px 0px -20% 0px"});
leadObserver.observe(lottieLead);
}

/* ====================
Lottie：ENVIRONMENT
=================== */
const lottieEnvironment = document.querySelectorAll(".environment-lottie");
lottieEnvironment.forEach((container)=>{
  const player = lottie.loadAnimation({
    container,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "lottie/environment.json",
  });
  const onEnvironmentVisible =(entries)=>{
    entries.forEach((entry)=>{
      if (entry.isIntersecting){
        player.play();
        environmentObserver.unobserve(entry.target);
      }
    });
  };
  const environmentObserver = new IntersectionObserver(onEnvironmentVisible, {threshold: 0, rootMargin: "0px 0px -20% 0px"});
  environmentObserver.observe(container)
})

/* ====================
MESSAGE：スクロール量に応じて3行を左右に動かす
=================== */

const messageContent = document.querySelector(".message-content");

if (messageContent) {
  // 画面の下から入り、上へ抜けるまでを 0 → 1 で表す
  const updateMessageProgress = () => {
    const rect = messageContent.getBoundingClientRect();
    const range = window.innerHeight + rect.height;
    const progress = (window.innerHeight - rect.top) / range;
    // 0〜1 の外には出さない
    const clamped = Math.min(Math.max(progress, 0), 1);
    messageContent.style.setProperty("--scroll-progress", clamped);
  };

  // スクロールのたびに計算せず、次の描画のタイミングまでまとめる
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateMessageProgress();
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateMessageProgress();
}
