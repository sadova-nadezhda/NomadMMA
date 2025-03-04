import { menuSetup } from './menuSetup.js';
import { swiperInit } from './swiperInit.js';
import { animateGsap } from './animateGsap.js';
import { filterMember } from './filter.js';

let scroll = window.scrollY;
let header = document.querySelector('.header');

window.addEventListener("load", function () {
  if (header) {
    scroll = window.scrollY;
    header.classList.toggle("scroll", scroll > 50);
  }

  menuSetup();
  swiperInit();
  animateGsap();
  filterMember();

  window.addEventListener("scroll", () => {
    if(header) {
      scroll = window.scrollY;
      header.classList.toggle("scroll", scroll > 50);
    }
  });
});
