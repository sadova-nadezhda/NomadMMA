import { menuSetup } from './menuSetup.js';
import { swiperInit } from './swiperInit.js';
import { animateGsap } from './animateGsap.js';

let scroll = window.scrollY;
let header = document.querySelector('.header');

window.addEventListener("load", function () {
  menuSetup();
  swiperInit();
  animateGsap();

  if (header) {
    scroll = window.scrollY;
    header.classList.toggle("scroll", scroll > 50);
  }

  window.addEventListener("scroll", () => {
    if(header) {
      scroll = window.scrollY;
      header.classList.toggle("scroll", scroll > 50);
    }
  });
});
