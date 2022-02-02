let date = $("#date");
let menu = $("#menu");
let menuBtn = $("#hamburger");
let menuLinks = $(".menu-link");
let navBar = $("#navbar");

// let body = document.body;
// body.addEventListener("scroll", function (event) {
//   console.log(`something happened. window.scrollY: ${document.window.scrollY}`);
// });

// Gets current year and displays for copyright
let today = new Date();
date[0].textContent = today.getFullYear();

// console.log("menu links length: " + menuLinks.length);
// menuLinks.map((link) => {
//   console.log("link: " + link);
// });

function menuHandler() {
  menu.toggleClass("invisible");
}

menuBtn.on("click", menuHandler);

$(".wrapper").on("click", () => {
  menu.add(".invisible");
});

// let lastKnownScrollPosition = 0;

// document.addEventListener("scroll", function (e) {
//   lastKnownScrollPosition = window.scrollY;
//   console.log(`y position: ${lastKnownScrollPosition}\nevent: ${e}`);
// });

// Intersection Observer for About Me Text
const sections = document.querySelectorAll(".fade-in");
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -35px 0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("fade-in");
    console.log(`entry: ${entry.target}`);
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
