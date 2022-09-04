//!footer set date
const date = document.querySelector(".date");
date.textContent = new Date().getFullYear();

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");

icon.onclick = function () {
  if (search.classList.toggle("active")) {
  }
};

//! search bar remove
window.addEventListener("mouseup", function (event) {
  var box = document.querySelector(".active");
  if (event.target != box && event.target.parentNode != box) {
    search.classList.remove("active");
  }
});

let hamburger2 = document.getElementById("hamburger2");
let megamenu2 = document.getElementById("mega-menu2");

//console.log(megamenu2)

let close2 = document.getElementById("cs-xmarkicon2");

hamburger2.addEventListener("click", (menu) => {
  megamenu2.style.display = "block";
  searchMain.style.display = "none";
  closeResp.style.display = "none";
  searchiconResp.style.display = "block";
});

let hamburger3 = document.getElementById("hamburger3");

hamburger3.addEventListener("click", () => {
  megamenu2.style.display = "block";
});

close2.addEventListener("click", () => {
  megamenu2.style.display = "none";
});

let hamburger = document.getElementById("hamburger");
let megamenu = document.getElementById("mega-menu");

let close = document.getElementById("cs-xmarkicon");

hamburger.addEventListener("click", () => {
  megamenu.style.display = "block";
});
close.addEventListener("click", () => {
  megamenu.style.display = "none";
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.querySelector(".cs-nav-scroll").style.position = "fixed";
    document.querySelector(".cs-nav-scroll").style.display = "flex";
    document.querySelector(".cs-nav").style.display = "none";
    document.querySelector(".cs-nav-scroll").style.top = "0";
  } else {
    document.querySelector(".cs-nav-scroll").style.position = "none";
    document.querySelector(".cs-nav-scroll").style.top = "none";
    document.querySelector(".cs-nav").style.display = "flex";
    document.querySelector(".cs-nav-scroll").style.display = "none";
  }
}

const icon2 = document.querySelector(".icon2");
const search2 = document.querySelector(".search2");

icon2.onclick = function () {
  if (search2.classList.toggle("active")) {
  }
  //icon.style.display="none"
};

window.addEventListener("mouseup", function (event) {
  var box = document.querySelector(".active");
  if (event.target != box && event.target.parentNode != box) {
    search2.classList.remove("active");
  }
});

let searchiconResp = document.getElementById("searchicon-resp");
let searchiconResp2 = document.getElementById("searchicon-resp2");

let searchMain = document.getElementById("search-menu");
let searchMain2 = document.getElementById("search-menu2");

const closeResp = document.getElementById("cs-xmarkicon-resp");
const closeResp2 = document.getElementById("cs-xmarkicon-resp2");

searchiconResp.addEventListener("click", () => {
  searchMain.style.display = "block";
  searchiconResp.style.display = "none";
  closeResp.style.display = "block";
});
closeResp.addEventListener("click", () => {
  searchMain.style.display = "none";
  searchiconResp.style.display = "block";
  closeResp.style.display = "none";
});

searchiconResp2.addEventListener("click", () => {
  searchMain2.style.display = "block";
  searchiconResp2.style.display = "none";
  closeResp2.style.display = "block";
});
closeResp2.addEventListener("click", () => {
  searchMain2.style.display = "none";
  searchiconResp2.style.display = "block";
  closeResp2.style.display = "none";
});

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    "<i class='fa fa-long-arrow-left'></i>",
    "<i class='fa fa-long-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    540: {
      items: 2.2,
    },
    750: {
      items: 3.2,
    },
    1000: {
      items: 4.8,
    },
  },
});
